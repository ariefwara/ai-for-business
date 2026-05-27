import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_INPUT_DIR = "docs/agentic-enterprise";
const DEFAULT_OUTPUT_DIR = "docs/agentic-enterprise/_prompts/nano-banana-diagrams";
const DEFAULT_MODEL = "deepseek-chat";
const DEFAULT_MAX_RETRIES = 6;

const SERIES_VISUAL_STYLE = `
Consistent visual style for every image in the series:
- refined watercolor conceptual diagram;
- soft ink outlines, translucent washes, subtle paper texture;
- pure white background (#fff), no tinted paper background;
- calm enterprise color palette: muted indigo, teal, graphite, warm gray, small amber accents;
- clean composition with generous negative space;
- sophisticated business/technology mood, not cartoonish, not childish, not futuristic neon;
- no photorealism, no 3D render, no glossy SaaS hero art, no gradient blobs;
- information-rich diagrammatic layout with clear visual structure: layers, flows, loops, gates, swimlanes, stack, matrix, lifecycle arc, decision tree, or operating model map;
- use simple icon-like shapes, containers, arrows, connectors, boundary lines, nodes, and grouped zones;
- avoid readable text inside the image; use abstract marks or tiny illegible label blocks only if needed;
- 16:9 landscape composition suitable for an article header.
`.trim();

function parseArgs(argv) {
  const args = {
    inputDir: DEFAULT_INPUT_DIR,
    outputDir: DEFAULT_OUTPUT_DIR,
    target: null,
    targetSlug: null,
    file: null,
    all: false,
    force: false,
    dryRun: false,
    temperature: Number(process.env.DEEPSEEK_DIAGRAM_TEMPERATURE || 0.35),
    maxTokens: Number(process.env.DEEPSEEK_DIAGRAM_MAX_TOKENS || 1800),
    concurrency: process.env.DEEPSEEK_CONCURRENCY ? Number(process.env.DEEPSEEK_CONCURRENCY) : null,
    maxRetries: Number(process.env.DEEPSEEK_MAX_RETRIES || DEFAULT_MAX_RETRIES),
    model: process.env.DEEPSEEK_MODEL || null,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--input-dir") args.inputDir = argv[++i];
    else if (item === "--output-dir") args.outputDir = argv[++i];
    else if (item === "--target") args.target = argv[++i];
    else if (item === "--target-slug") args.targetSlug = argv[++i];
    else if (item === "--file") args.file = argv[++i];
    else if (item === "--all") args.all = true;
    else if (item === "--force") args.force = true;
    else if (item === "--dry-run") args.dryRun = true;
    else if (item === "--temperature") args.temperature = Number(argv[++i]);
    else if (item === "--max-tokens") args.maxTokens = Number(argv[++i]);
    else if (item === "--concurrency") args.concurrency = Number(argv[++i]);
    else if (item === "--max-retries") args.maxRetries = Number(argv[++i]);
    else if (item === "--model") args.model = argv[++i];
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
  node scripts/generate-nano-banana-diagram-prompts-with-deepseek.mjs --target 1
  node scripts/generate-nano-banana-diagram-prompts-with-deepseek.mjs --target-slug agentic-transformation
  node scripts/generate-nano-banana-diagram-prompts-with-deepseek.mjs --file docs/agentic-enterprise/01-agentic-transformation.md
  node scripts/generate-nano-banana-diagram-prompts-with-deepseek.mjs --all

Options:
  --input-dir <dir>                 Article directory. Default: ${DEFAULT_INPUT_DIR}
  --output-dir <dir>                Prompt output directory. Default: ${DEFAULT_OUTPUT_DIR}
  --target <number>                 Generate prompt by leading article number.
  --target-slug <slug>              Generate prompt by slug.
  --file <path>                     Generate prompt for one explicit Markdown file.
  --all                             Generate prompts for all Markdown files in input directory.
  --model <name>                    DeepSeek model. Default: env DEEPSEEK_MODEL or ${DEFAULT_MODEL}
  --temperature <n>                 DeepSeek temperature. Default: 0.35
  --max-tokens <n>                  DeepSeek max output tokens. Default: 1800
  --concurrency <n>                 Parallel DeepSeek requests. Default follows DeepSeek's documented model concurrency.
  --max-retries <n>                 Retries per article for 429/5xx/network errors. Default: ${DEFAULT_MAX_RETRIES}
  --dry-run                         Write DeepSeek request prompts only, without calling DeepSeek.
  --force                           Overwrite existing Nano Banana prompt files.
`);
}

function validateArgs(args) {
  if (args.concurrency !== null && (!Number.isFinite(args.concurrency) || args.concurrency < 1)) {
    throw new Error("--concurrency must be a positive number.");
  }
  if (!Number.isFinite(args.maxRetries) || args.maxRetries < 1) {
    throw new Error("--max-retries must be a positive number.");
  }
  if (!Number.isFinite(args.maxTokens) || args.maxTokens < 1) {
    throw new Error("--max-tokens must be a positive number.");
  }
  if (!Number.isFinite(args.temperature) || args.temperature < 0) {
    throw new Error("--temperature must be a non-negative number.");
  }
  if (args.concurrency !== null) args.concurrency = Math.floor(args.concurrency);
  args.maxRetries = Math.floor(args.maxRetries);
}

function documentedConcurrencyForModel(model) {
  if (/deepseek-v4-pro/i.test(model)) return 500;
  if (/deepseek-v4-flash|deepseek-chat|deepseek-reasoner/i.test(model)) return 2500;
  return 2500;
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

function articleNumberFromName(file) {
  const match = path.basename(file).match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

function articleSlugFromName(file) {
  return path.basename(file, ".md").replace(/^\d+-/, "");
}

async function listMarkdownFiles(inputDir) {
  const files = await readdir(inputDir);
  return files
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => path.join(inputDir, file))
    .sort((a, b) => {
      const numberA = articleNumberFromName(a) ?? 9999;
      const numberB = articleNumberFromName(b) ?? 9999;
      return numberA - numberB || a.localeCompare(b);
    });
}

async function selectTargets(args) {
  if (args.file) return [args.file];

  const files = await listMarkdownFiles(args.inputDir);
  if (args.all) return files;

  if (args.target) {
    const number = Number(args.target);
    return files.filter((file) => articleNumberFromName(file) === number);
  }

  if (args.targetSlug) {
    return files.filter((file) => articleSlugFromName(file) === args.targetSlug);
  }

  throw new Error("No target selected. Use --target <number>, --target-slug <slug>, --file <path>, or --all.");
}

function extractFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { frontmatter: "", body: markdown.trim() };
  return {
    frontmatter: match[1],
    body: markdown.slice(match[0].length).trim(),
  };
}

function extractTitle(markdown, file) {
  const { frontmatter, body } = extractFrontmatter(markdown);
  const frontmatterTitle = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1];
  const h1 = body.match(/^#\s+(.+)$/m)?.[1];
  return frontmatterTitle || h1 || path.basename(file, ".md");
}

function compactArticle(markdown, maxChars = 18000) {
  return markdown
    .replace(/^---\n[\s\S]*?\n---\n?/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxChars);
}

function outputPathForArticle(outputDir, file, suffix = ".nano-banana-prompt.md") {
  return path.join(outputDir, `${path.basename(file, ".md")}${suffix}`);
}

function requestPromptPathForArticle(outputDir, file) {
  return outputPathForArticle(outputDir, file, ".deepseek-request.md");
}

function normalizeDeepSeekMarkdown(text) {
  return text
    .trim()
    .replace(/^```(?:md|markdown)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function buildDeepSeekPrompt({ articleMarkdown, file }) {
  const title = extractTitle(articleMarkdown, file);
  const article = compactArticle(articleMarkdown);

  return `
# Tujuan
Buat satu prompt gambar yang detail untuk Nano Banana.

Prompt ini akan dipakai untuk menghasilkan satu gambar utama untuk artikel berikut. Satu artikel harus menjadi satu gambar yang menjelaskan konsep utama atau beberapa konsep penting dalam artikel tersebut.

# Artikel
Judul: ${title}

${article}

# Gaya Visual Konsisten
${SERIES_VISUAL_STYLE}

# Instruksi
Analisis artikel dan tangkap informasi sebanyak mungkin tanpa membuat gambar berantakan. Pilih 6 sampai 10 konsep, relasi, atau tahapan paling penting, lalu ubah menjadi satu diagram konseptual yang padat tetapi tetap terbaca.

Gambar harus berupa diagram, bukan ilustrasi adegan. Utamakan struktur visual yang menjelaskan hubungan antar konsep: lapisan, alur, loop, gate, transisi, tanggung jawab, trade-off, maturity path, decision points, feedback loops, control points, dan operating model components. Boleh memakai elemen manusia atau agent hanya sebagai ikon kecil pendukung, bukan sebagai subjek utama. Hindari scene kantor, orang duduk rapat, robot, otak bercahaya, jaringan abstrak tanpa makna, dashboard kosong, atau dekorasi hero.

Diagram harus berisi banyak informasi visual. Gunakan beberapa zona atau panel dalam satu gambar jika perlu, misalnya kiri-ke-kanan untuk before/after, bawah-ke-atas untuk architecture layers, atau lingkaran luar-dalam untuk governance and operations. Masukkan elemen seperti systems, data, workflow, agent execution, human approval, policy guardrails, observability, value stream, risk/control owner, dan feedback loop jika relevan dengan artikel. Jangan hanya membuat satu ikon besar dengan beberapa panah.

Diagram harus bisa dipahami dari struktur visualnya walaupun tidak ada teks terbaca. Jangan meminta teks panjang di dalam gambar. Jika perlu ada label visual, jadikan sebagai blok kecil atau garis abstrak yang tidak perlu terbaca. Jangan memakai logo vendor, merek perusahaan, wajah orang nyata, atau nama perusahaan nyata.

Prompt final harus cukup detail untuk Nano Banana: sebutkan tipe diagram, komposisi, pure white background (#fff), 6 sampai 10 elemen visual utama, relasi antar elemen, arah alur, hierarchy, control points, feedback loops, mood, warna, gaya watercolor, aspek rasio, dan negative prompt.

# Output
Kembalikan hanya prompt final untuk Nano Banana dalam bahasa Inggris.
Jangan sertakan analisis, judul tambahan, bullet list, JSON, atau komentar.
`.trim();
}

async function callDeepSeek({ apiKey, model, prompt, temperature, maxTokens, maxRetries }) {
  for (let attempt = 1; attempt <= maxRetries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 120000);
    let response;

    try {
      response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          authorization: `Bearer ${apiKey}`,
          "content-type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: prompt }],
          temperature,
          max_tokens: maxTokens,
        }),
      });
    } catch (error) {
      clearTimeout(timeout);
      if (attempt < maxRetries) {
        await sleep(retryDelayMs({ attempt }));
        continue;
      }
      throw error;
    } finally {
      clearTimeout(timeout);
    }

    const raw = await response.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      if (attempt < maxRetries) {
        await sleep(retryDelayMs({ attempt }));
        continue;
      }
      throw new Error(`DeepSeek returned non-JSON response: ${raw.slice(0, 500)}`);
    }

    if (!response.ok) {
      if ((response.status === 429 || response.status >= 500) && attempt < maxRetries) {
        const retryAfter = retryAfterMs(response.headers.get("retry-after"));
        const delay = retryAfter ?? retryDelayMs({ attempt, rateLimited: response.status === 429 });
        console.warn(`Retry ${attempt}/${maxRetries} after ${response.status} from DeepSeek; waiting ${Math.round(delay / 1000)}s.`);
        await sleep(delay);
        continue;
      }
      throw new Error(JSON.stringify(data, null, 2));
    }

    const text = data.choices?.[0]?.message?.content?.trim();
    if (text) return normalizeDeepSeekMarkdown(text);
    await sleep(1000 * attempt);
  }

  throw new Error("Respons DeepSeek kosong.");
}

function retryAfterMs(value) {
  if (!value) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(1000, seconds * 1000);
  const dateMs = Date.parse(value);
  if (Number.isFinite(dateMs)) return Math.max(1000, dateMs - Date.now());
  return null;
}

function retryDelayMs({ attempt, rateLimited = false }) {
  const base = rateLimited ? 6000 : 2500;
  const capped = Math.min(60000, base * 2 ** Math.max(0, attempt - 1));
  const jitter = Math.floor(Math.random() * 1000);
  return capped + jitter;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateOne({ args, file, apiKey, model }) {
  const articleMarkdown = await readFile(file, "utf8");
  const outputFile = outputPathForArticle(args.outputDir, file);
  const requestFile = requestPromptPathForArticle(args.outputDir, file);

  if (!args.force && await pathExists(outputFile)) {
    console.log(`SKIP existing ${outputFile}`);
    return;
  }

  const prompt = buildDeepSeekPrompt({ articleMarkdown, file });
  await mkdir(args.outputDir, { recursive: true });
  await writeFile(requestFile, `${prompt}\n`);

  if (args.dryRun) {
    console.log(`DRY ${file}`);
    console.log(`Request: ${requestFile}`);
    console.log(`Output: ${outputFile}`);
    return;
  }

  console.log(`GENERATE DIAGRAM PROMPT ${file} via ${model}`);
  const nanoBananaPrompt = await callDeepSeek({
    apiKey,
    model,
    prompt,
    temperature: args.temperature,
    maxTokens: args.maxTokens,
    maxRetries: args.maxRetries,
  });

  await writeFile(outputFile, `${nanoBananaPrompt}\n`);
  console.log(`WROTE ${outputFile}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  validateArgs(args);
  const targets = await selectTargets(args);
  if (targets.length === 0) throw new Error("No matching articles found.");

  const env = await loadEnv();
  const apiKey = process.env.DEEPSEEK_API_KEY || env.DEEPSEEK_API_KEY;
  const model = args.model || env.DEEPSEEK_MODEL || DEFAULT_MODEL;
  if (!apiKey && !args.dryRun) throw new Error("DEEPSEEK_API_KEY is required.");

  const concurrency = args.concurrency ?? documentedConcurrencyForModel(model);
  console.log(`Targets: ${targets.length}; concurrency: ${concurrency}; model: ${model}`);

  const results = await runPool(targets, concurrency, async (file) => {
    await generateOne({ args, file, apiKey, model });
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
