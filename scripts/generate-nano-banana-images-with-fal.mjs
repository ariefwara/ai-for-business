import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_PROMPT_DIR = "docs/agentic-enterprise/_prompts/nano-banana-diagrams";
const DEFAULT_OUTPUT_DIR = "static/img/diagrams";
const DEFAULT_MODEL = "fal-ai/nano-banana-pro";
const DEFAULT_CONCURRENCY = 4;
const DEFAULT_POLL_INTERVAL_MS = 5000;
const DEFAULT_TIMEOUT_MS = 10 * 60 * 1000;

function parseArgs(argv) {
  const args = {
    promptDir: DEFAULT_PROMPT_DIR,
    outputDir: DEFAULT_OUTPUT_DIR,
    model: process.env.FAL_IMAGE_MODEL || DEFAULT_MODEL,
    target: null,
    targetSlug: null,
    file: null,
    all: false,
    force: false,
    dryRun: false,
    concurrency: Number(process.env.FAL_IMAGE_CONCURRENCY || DEFAULT_CONCURRENCY),
    pollIntervalMs: Number(process.env.FAL_POLL_INTERVAL_MS || DEFAULT_POLL_INTERVAL_MS),
    timeoutMs: Number(process.env.FAL_TIMEOUT_MS || DEFAULT_TIMEOUT_MS),
    aspectRatio: process.env.FAL_IMAGE_ASPECT_RATIO || "16:9",
    outputFormat: process.env.FAL_IMAGE_OUTPUT_FORMAT || "png",
    safetyTolerance: process.env.FAL_SAFETY_TOLERANCE || "4",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--prompt-dir") args.promptDir = argv[++i];
    else if (item === "--output-dir") args.outputDir = argv[++i];
    else if (item === "--model") args.model = argv[++i];
    else if (item === "--target") args.target = argv[++i];
    else if (item === "--target-slug") args.targetSlug = argv[++i];
    else if (item === "--file") args.file = argv[++i];
    else if (item === "--all") args.all = true;
    else if (item === "--force") args.force = true;
    else if (item === "--dry-run") args.dryRun = true;
    else if (item === "--concurrency") args.concurrency = Number(argv[++i]);
    else if (item === "--poll-interval-ms") args.pollIntervalMs = Number(argv[++i]);
    else if (item === "--timeout-ms") args.timeoutMs = Number(argv[++i]);
    else if (item === "--aspect-ratio") args.aspectRatio = argv[++i];
    else if (item === "--output-format") args.outputFormat = argv[++i];
    else if (item === "--safety-tolerance") args.safetyTolerance = argv[++i];
    else if (item === "--help") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${item}`);
    }
  }

  return args;
}

function printHelp() {
  console.log(`Usage:
  node scripts/generate-nano-banana-images-with-fal.mjs --target 1
  node scripts/generate-nano-banana-images-with-fal.mjs --target-slug agentic-transformation
  node scripts/generate-nano-banana-images-with-fal.mjs --file docs/agentic-enterprise/_prompts/nano-banana-diagrams/01-agentic-transformation.nano-banana-prompt.md
  node scripts/generate-nano-banana-images-with-fal.mjs --all

Options:
  --prompt-dir <dir>                Nano Banana prompt directory. Default: ${DEFAULT_PROMPT_DIR}
  --output-dir <dir>                Image output directory. Default: ${DEFAULT_OUTPUT_DIR}
  --model <id>                      fal model endpoint ID. Default: ${DEFAULT_MODEL}
  --target <number>                 Generate image by leading article number.
  --target-slug <slug>              Generate image by slug.
  --file <path>                     Generate image for one explicit prompt file.
  --all                             Generate images for all prompt files.
  --aspect-ratio <ratio>            fal aspect_ratio. Default: 16:9
  --output-format <format>          png, jpeg, or webp. Default: png
  --safety-tolerance <1-6>          fal safety_tolerance. Default: 4
  --concurrency <n>                 Local parallel requests. Default: env FAL_IMAGE_CONCURRENCY or ${DEFAULT_CONCURRENCY}
  --poll-interval-ms <n>            Queue polling interval. Default: ${DEFAULT_POLL_INTERVAL_MS}
  --timeout-ms <n>                  Per-image timeout. Default: ${DEFAULT_TIMEOUT_MS}
  --dry-run                         Print planned requests without calling fal.
  --force                           Overwrite existing image files.
`);
}

function validateArgs(args) {
  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) {
    throw new Error("--concurrency must be a positive number.");
  }
  if (!Number.isFinite(args.pollIntervalMs) || args.pollIntervalMs < 1000) {
    throw new Error("--poll-interval-ms must be at least 1000.");
  }
  if (!Number.isFinite(args.timeoutMs) || args.timeoutMs < 10000) {
    throw new Error("--timeout-ms must be at least 10000.");
  }
  if (!["png", "jpeg", "webp"].includes(args.outputFormat)) {
    throw new Error("--output-format must be png, jpeg, or webp.");
  }
  if (!["1", "2", "3", "4", "5", "6"].includes(String(args.safetyTolerance))) {
    throw new Error("--safety-tolerance must be one of 1, 2, 3, 4, 5, 6.");
  }
  args.concurrency = Math.floor(args.concurrency);
}

async function pathExists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function loadEnv() {
  const env = {};
  try {
    const raw = await readFile(".env", "utf8");
    for (const line of raw.split(/\r?\n/)) {
      if (!line || line.trim().startsWith("#") || !line.includes("=")) continue;
      const index = line.indexOf("=");
      env[line.slice(0, index).trim()] = line.slice(index + 1);
    }
  } catch {
    // Environment can be supplied externally.
  }
  return env;
}

function promptNumberFromName(file) {
  const match = path.basename(file).match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

function promptSlugFromName(file) {
  return path.basename(file, ".nano-banana-prompt.md").replace(/^\d+-/, "");
}

async function listPromptFiles(promptDir) {
  const files = await readdir(promptDir);
  return files
    .filter((file) => file.endsWith(".nano-banana-prompt.md"))
    .map((file) => path.join(promptDir, file))
    .sort((a, b) => {
      const numberA = promptNumberFromName(a) ?? 9999;
      const numberB = promptNumberFromName(b) ?? 9999;
      return numberA - numberB || a.localeCompare(b);
    });
}

async function selectTargets(args) {
  if (args.file) return [args.file];

  const files = await listPromptFiles(args.promptDir);
  if (args.all) return files;

  if (args.target) {
    const number = Number(args.target);
    return files.filter((file) => promptNumberFromName(file) === number);
  }

  if (args.targetSlug) {
    return files.filter((file) => promptSlugFromName(file) === args.targetSlug);
  }

  throw new Error("No target selected. Use --target <number>, --target-slug <slug>, --file <path>, or --all.");
}

function outputBaseName(promptFile) {
  return path.basename(promptFile, ".nano-banana-prompt.md");
}

function imagePathForPrompt(args, promptFile) {
  return path.join(args.outputDir, `${outputBaseName(promptFile)}.${args.outputFormat}`);
}

function metadataPathForPrompt(args, promptFile) {
  return path.join(args.outputDir, `${outputBaseName(promptFile)}.json`);
}

async function runPool(items, concurrency, worker) {
  const results = [];
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      try {
        await worker(items[index], index);
        results[index] = { ok: true, item: items[index] };
      } catch (error) {
        results[index] = { ok: false, item: items[index], error };
      }
    }
  }

  const workerCount = Math.min(concurrency, items.length);
  await Promise.all(Array.from({ length: workerCount }, runWorker));
  return results;
}

async function falFetch(url, { falKey, method = "GET", body = null }) {
  const response = await fetch(url, {
    method,
    headers: {
      authorization: `Key ${falKey}`,
      "content-type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(`${response.status} ${response.statusText}: ${text.slice(0, 500)}`);
  }
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(data)}`);
  return data;
}

async function submitFalRequest({ args, falKey, prompt }) {
  return falFetch(`https://queue.fal.run/${args.model}`, {
    falKey,
    method: "POST",
    body: {
      prompt,
      num_images: 1,
      aspect_ratio: args.aspectRatio,
      output_format: args.outputFormat,
      safety_tolerance: String(args.safetyTolerance),
      sync_mode: false,
      limit_generations: true,
    },
  });
}

async function waitForFalResult({ falKey, submitted, pollIntervalMs, timeoutMs }) {
  const statusUrl = submitted.status_url;
  const responseUrl = submitted.response_url;
  if (!statusUrl || !responseUrl) {
    throw new Error(`fal submit response missing status_url or response_url: ${JSON.stringify(submitted)}`);
  }

  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    const status = await falFetch(statusUrl, { falKey });
    if (status.status === "COMPLETED") {
      if (status.error) throw new Error(`fal request completed with error: ${status.error}`);
      return falFetch(responseUrl, { falKey });
    }
    if (status.status !== "IN_QUEUE" && status.status !== "IN_PROGRESS") {
      throw new Error(`Unexpected fal status: ${JSON.stringify(status)}`);
    }
    await sleep(pollIntervalMs);
  }

  throw new Error(`Timed out waiting for fal result after ${timeoutMs}ms.`);
}

async function downloadImage(url, outputFile) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, buffer);
}

function firstImageFromResult(result) {
  const images = result.images || result.payload?.images || result.data?.images;
  if (!Array.isArray(images) || images.length === 0 || !images[0]?.url) {
    throw new Error(`fal result did not include an image URL: ${JSON.stringify(result).slice(0, 500)}`);
  }
  return images[0];
}

async function generateOne({ args, promptFile, falKey }) {
  const imageFile = imagePathForPrompt(args, promptFile);
  const metadataFile = metadataPathForPrompt(args, promptFile);

  if (!args.force && await pathExists(imageFile)) {
    console.log(`SKIP existing ${imageFile}`);
    return;
  }

  const prompt = (await readFile(promptFile, "utf8")).trim();
  if (!prompt) throw new Error(`Prompt file is empty: ${promptFile}`);

  if (args.dryRun) {
    console.log(`DRY ${promptFile}`);
    console.log(`Output: ${imageFile}`);
    console.log(`Model: ${args.model}; aspect_ratio: ${args.aspectRatio}; format: ${args.outputFormat}`);
    return;
  }

  console.log(`SUBMIT ${promptFile} -> ${imageFile}`);
  const submitted = await submitFalRequest({ args, falKey, prompt });
  const result = await waitForFalResult({
    falKey,
    submitted,
    pollIntervalMs: args.pollIntervalMs,
    timeoutMs: args.timeoutMs,
  });
  const image = firstImageFromResult(result);
  await downloadImage(image.url, imageFile);
  await writeFile(metadataFile, `${JSON.stringify({
    promptFile,
    imageFile,
    model: args.model,
    aspectRatio: args.aspectRatio,
    outputFormat: args.outputFormat,
    safetyTolerance: String(args.safetyTolerance),
    requestId: submitted.request_id,
    image,
    resultDescription: result.description || "",
    generatedAt: new Date().toISOString(),
  }, null, 2)}\n`);
  console.log(`WROTE ${imageFile}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  validateArgs(args);
  const targets = await selectTargets(args);
  if (targets.length === 0) throw new Error("No matching prompt files found.");

  const env = await loadEnv();
  const falKey = process.env.FAL_KEY || env.FAL_KEY;
  if (!falKey && !args.dryRun) throw new Error("FAL_KEY is required.");

  console.log(`Targets: ${targets.length}; concurrency: ${args.concurrency}; model: ${args.model}; aspect_ratio: ${args.aspectRatio}`);

  const results = await runPool(targets, args.concurrency, async (promptFile) => {
    await generateOne({ args, promptFile, falKey });
  });

  const failures = results.filter((result) => !result.ok);
  if (failures.length > 0) {
    console.error(`FAILED ${failures.length}/${targets.length}`);
    for (const failure of failures) {
      console.error(`- ${failure.item}: ${failure.error.message}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`DONE ${targets.length}/${targets.length}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
