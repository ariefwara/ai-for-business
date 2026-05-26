import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_INPUT_DIR = "docs/agentic-enterprise";
const DEFAULT_PROMPT_DIR = "docs/agentic-enterprise/_prompts/rewrite";
const DEFAULT_PHILOSOPHY_FILE = "config/writing-philosophy.md";
const DEFAULT_MODEL = "deepseek-chat";
const DEFAULT_MAX_RETRIES = 6;

function parseArgs(argv) {
  const args = {
    inputDir: DEFAULT_INPUT_DIR,
    outputDir: null,
    promptDir: DEFAULT_PROMPT_DIR,
    philosophyFile: DEFAULT_PHILOSOPHY_FILE,
    target: null,
    targetSlug: null,
    file: null,
    all: false,
    force: false,
    dryRun: false,
    temperature: Number(process.env.DEEPSEEK_TEMPERATURE || 0.45),
    maxTokens: Number(process.env.DEEPSEEK_MAX_TOKENS || 8000),
    concurrency: process.env.DEEPSEEK_CONCURRENCY ? Number(process.env.DEEPSEEK_CONCURRENCY) : null,
    maxRetries: Number(process.env.DEEPSEEK_MAX_RETRIES || DEFAULT_MAX_RETRIES),
    model: process.env.DEEPSEEK_MODEL || null,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--input-dir") args.inputDir = argv[++i];
    else if (item === "--output-dir") args.outputDir = argv[++i];
    else if (item === "--prompt-dir") args.promptDir = argv[++i];
    else if (item === "--philosophy-file") args.philosophyFile = argv[++i];
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
  node scripts/rewrite-articles-with-deepseek.mjs --target 1
  node scripts/rewrite-articles-with-deepseek.mjs --target-slug agentic-transformation
  node scripts/rewrite-articles-with-deepseek.mjs --file docs/agentic-enterprise/01-agentic-transformation.md
  node scripts/rewrite-articles-with-deepseek.mjs --all

Options:
  --input-dir <dir>                 Article directory. Default: ${DEFAULT_INPUT_DIR}
  --output-dir <dir>                Optional separate output directory. Default: replace source files.
  --prompt-dir <dir>                Prompt output directory. Default: ${DEFAULT_PROMPT_DIR}
  --philosophy-file <path>          Writing philosophy file. Default: ${DEFAULT_PHILOSOPHY_FILE}
  --target <number>                 Rewrite article by leading article number.
  --target-slug <slug>              Rewrite article by slug.
  --file <path>                     Rewrite one explicit Markdown file.
  --all                             Rewrite all Markdown files in input directory.
  --model <name>                    DeepSeek model. Default: env DEEPSEEK_MODEL or ${DEFAULT_MODEL}
  --temperature <n>                 DeepSeek temperature. Default: 0.45
  --max-tokens <n>                  DeepSeek max output tokens. Default: 8000
  --concurrency <n>                 Parallel DeepSeek requests. Default follows DeepSeek's documented model concurrency.
  --max-retries <n>                 Retries per article for 429/5xx/network errors. Default: ${DEFAULT_MAX_RETRIES}
  --dry-run                         Write prompt files only.
  --force                           Overwrite files when using --output-dir.
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
    frontmatter: match[0].trim(),
    body: markdown.slice(match[0].length).trim(),
  };
}

function normalizeDeepSeekMarkdown(text) {
  return text
    .trim()
    .replace(/^```(?:md|markdown)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function buildPrompt({ oldArticle, philosophy, file }) {
  const { frontmatter, body } = extractFrontmatter(oldArticle);
  const title = body.match(/^#\s+(.+)$/m)?.[1] || path.basename(file, ".md");

  return `
# Tujuan
Tulis ulang artikel lama menjadi artikel baru berdasarkan filsafat penulisan berikut.

# Filsafat Penulisan
${philosophy}

# Artikel Lama
${oldArticle}

# Batasan
Pertahankan frontmatter Docusaurus jika ada.
Pertahankan fokus dan tesis utama artikel lama.
Gunakan filsafat penulisan sebagai sumber aturan gaya.
Jangan menambahkan format atau bagian baru yang tidak diminta oleh filsafat penulisan.

# Output
Kembalikan hanya Markdown final untuk artikel baru.

Judul artikel lama: ${title}
Frontmatter:
${frontmatter || "(tidak ada)"}
Isi:
${body}
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

async function rewriteOne({ args, file, philosophy, apiKey, model }) {
  const oldArticle = await readFile(file, "utf8");
  const outputFile = args.outputDir ? path.join(args.outputDir, path.basename(file)) : file;
  const promptFile = path.join(args.promptDir, `${path.basename(file, ".md")}.prompt.md`);

  if (args.outputDir && !args.force && await pathExists(outputFile)) {
    console.log(`SKIP existing ${outputFile}`);
    return;
  }

  const prompt = buildPrompt({ oldArticle, philosophy, file });
  await mkdir(path.dirname(promptFile), { recursive: true });
  await writeFile(promptFile, `${prompt}\n`);

  if (args.dryRun) {
    console.log(`DRY ${file}`);
    console.log(`Output: ${outputFile}`);
    console.log(`Prompt: ${promptFile}`);
    return;
  }

  console.log(`REWRITE ${file} via ${model}`);
  const newArticle = await callDeepSeek({
    apiKey,
    model,
    prompt,
    temperature: args.temperature,
    maxTokens: args.maxTokens,
    maxRetries: args.maxRetries,
  });

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, newArticle.endsWith("\n") ? newArticle : `${newArticle}\n`);
  console.log(`${args.outputDir ? "WROTE" : "REPLACED"} ${outputFile}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  validateArgs(args);
  const targets = await selectTargets(args);
  if (targets.length === 0) throw new Error("No matching articles found.");

  const philosophy = await readFile(args.philosophyFile, "utf8");
  const env = await loadEnv();
  const apiKey = process.env.DEEPSEEK_API_KEY || env.DEEPSEEK_API_KEY;
  const model = args.model || env.DEEPSEEK_MODEL || DEFAULT_MODEL;
  if (!apiKey && !args.dryRun) throw new Error("DEEPSEEK_API_KEY is required.");

  const concurrency = args.concurrency ?? documentedConcurrencyForModel(model);
  console.log(`Targets: ${targets.length}; concurrency: ${concurrency}; model: ${model}`);

  const results = await runPool(targets, concurrency, async (file) => {
    await rewriteOne({ args, file, philosophy, apiKey, model });
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
