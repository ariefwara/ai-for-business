import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_INPUT_DIR = "docs";
const DEFAULT_PROMPT_DIR = "output/translation-prompts";
const DEFAULT_MODEL = "deepseek-chat";
const DEFAULT_MAX_RETRIES = 6;

const LOCALES = {
  en: {
    label: "English",
    outputDir: "i18n/en/docusaurus-plugin-content-docs/current",
    languageInstruction:
      "Translate into clear, natural English for senior business and technology readers. Keep the narrative style, preserve technical precision, and avoid making the prose sound like a literal translation.",
  },
  gsw: {
    label: "Swiss German",
    outputDir: "i18n/gsw/docusaurus-plugin-content-docs/current",
    languageInstruction:
      "Translate into Swiss German, using business-readable Schwiizerduetsch with Latin script. Keep enterprise AI terms natural; keep common English technical terms such as API, platform, workflow, governance, observability, and agent when that is clearer than forcing a dialect word. Avoid Standard German phrasing where a natural Swiss German phrasing is available.",
  },
};

function parseArgs(argv) {
  const args = {
    inputDir: DEFAULT_INPUT_DIR,
    promptDir: DEFAULT_PROMPT_DIR,
    locales: ["en", "gsw"],
    target: null,
    targetSlug: null,
    file: null,
    all: false,
    force: false,
    dryRun: false,
    temperature: Number(process.env.DEEPSEEK_TRANSLATION_TEMPERATURE || 0.2),
    maxTokens: Number(process.env.DEEPSEEK_TRANSLATION_MAX_TOKENS || 8000),
    concurrency: process.env.DEEPSEEK_CONCURRENCY ? Number(process.env.DEEPSEEK_CONCURRENCY) : 8,
    maxRetries: Number(process.env.DEEPSEEK_MAX_RETRIES || DEFAULT_MAX_RETRIES),
    model: process.env.DEEPSEEK_MODEL || DEFAULT_MODEL,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--input-dir") args.inputDir = argv[++i];
    else if (item === "--prompt-dir") args.promptDir = argv[++i];
    else if (item === "--locale") args.locales = [argv[++i]];
    else if (item === "--locales") args.locales = argv[++i].split(",").map((value) => value.trim()).filter(Boolean);
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
  node scripts/translate-docs-with-deepseek.mjs --all
  node scripts/translate-docs-with-deepseek.mjs --locale en --target 1
  node scripts/translate-docs-with-deepseek.mjs --locale gsw --target-slug agentic-transformation
  node scripts/translate-docs-with-deepseek.mjs --file docs/01-agentic-transformation.md --locales en,gsw

Options:
  --input-dir <dir>        Source docs directory. Default: ${DEFAULT_INPUT_DIR}
  --prompt-dir <dir>       Prompt output directory. Default: ${DEFAULT_PROMPT_DIR}
  --locale <locale>        Translate one locale: en or gsw.
  --locales <list>         Comma-separated locales. Default: en,gsw
  --target <number>        Translate article by leading article number.
  --target-slug <slug>     Translate article by slug.
  --file <path>            Translate one explicit Markdown file.
  --all                    Translate all Markdown files in input directory.
  --model <name>           DeepSeek model. Default: env DEEPSEEK_MODEL or ${DEFAULT_MODEL}
  --temperature <n>        DeepSeek temperature. Default: 0.2
  --max-tokens <n>         DeepSeek max output tokens. Default: 8000
  --concurrency <n>        Parallel DeepSeek requests. Default: 8
  --max-retries <n>        Retries per document for 429/5xx/network errors. Default: ${DEFAULT_MAX_RETRIES}
  --dry-run                Write prompt files only.
  --force                  Overwrite existing translated files.
`);
}

function validateArgs(args) {
  for (const locale of args.locales) {
    if (!LOCALES[locale]) throw new Error(`Unsupported locale: ${locale}. Supported locales: ${Object.keys(LOCALES).join(", ")}`);
  }
  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) throw new Error("--concurrency must be a positive number.");
  if (!Number.isFinite(args.maxRetries) || args.maxRetries < 1) throw new Error("--max-retries must be a positive number.");
  if (!Number.isFinite(args.maxTokens) || args.maxTokens < 1) throw new Error("--max-tokens must be a positive number.");
  if (!Number.isFinite(args.temperature) || args.temperature < 0) throw new Error("--temperature must be a non-negative number.");
  args.concurrency = Math.floor(args.concurrency);
  args.maxRetries = Math.floor(args.maxRetries);
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

function buildPrompt({ markdown, locale, sourceFile }) {
  const localeConfig = LOCALES[locale];

  return `
# Role
You are a senior translator and editor for enterprise technology writing.

# Translation Target
${localeConfig.label}

# Language Instruction
${localeConfig.languageInstruction}

# Source File
${sourceFile}

# Hard Rules
- Return only the translated Markdown/MDX file.
- Preserve YAML frontmatter delimiters and keys.
- Translate frontmatter string values such as title, but keep numeric values unchanged.
- Preserve imports exactly, including lines such as: import ArticleDiagram from '@site/src/components/ArticleDiagram';
- Preserve MDX component names and attributes exactly unless an attribute is human-facing text.
- For <ArticleDiagram ... alt="...">, translate only the alt text value and keep src unchanged.
- Preserve Markdown links and URLs. Translate link text, not link destinations.
- Preserve image paths, code fences, inline code, table structure, heading levels, and list structure.
- Keep the article's intent, sequence, and level of detail. Do not summarize.
- Do not add translator notes, disclaimers, or extra sections.

# Source Markdown/MDX
${markdown}
`.trim();
}

function normalizeDeepSeekMarkdown(text) {
  return text
    .trim()
    .replace(/^```(?:md|markdown|mdx)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

async function callDeepSeek({ apiKey, model, prompt, temperature, maxTokens, maxRetries }) {
  for (let attempt = 1; attempt <= maxRetries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 180000);
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

  throw new Error("DeepSeek returned an empty response.");
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

async function translateOne({ args, sourceFile, locale, apiKey }) {
  const markdown = await readFile(sourceFile, "utf8");
  const localeConfig = LOCALES[locale];
  const outputFile = path.join(localeConfig.outputDir, path.basename(sourceFile));
  const promptFile = path.join(args.promptDir, locale, `${path.basename(sourceFile, ".md")}.prompt.md`);

  if (!args.force && await pathExists(outputFile)) {
    console.log(`SKIP ${locale} existing ${outputFile}`);
    return;
  }

  const prompt = buildPrompt({ markdown, locale, sourceFile });
  await mkdir(path.dirname(promptFile), { recursive: true });
  await writeFile(promptFile, `${prompt}\n`);

  if (args.dryRun) {
    console.log(`DRY ${locale} ${sourceFile}`);
    return;
  }

  console.log(`TRANSLATE ${locale} ${sourceFile} via ${args.model}`);
  const translated = await callDeepSeek({
    apiKey,
    model: args.model,
    prompt,
    temperature: args.temperature,
    maxTokens: args.maxTokens,
    maxRetries: args.maxRetries,
  });

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, translated.endsWith("\n") ? translated : `${translated}\n`);
  console.log(`WROTE ${outputFile}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  validateArgs(args);

  const targets = await selectTargets(args);
  if (targets.length === 0) throw new Error("No matching docs found.");

  const env = await loadEnv();
  const apiKey = process.env.DEEPSEEK_API_KEY || env.DEEPSEEK_API_KEY;
  if (!apiKey && !args.dryRun) throw new Error("DEEPSEEK_API_KEY is required.");

  const jobs = [];
  for (const locale of args.locales) {
    for (const sourceFile of targets) {
      jobs.push({ locale, sourceFile });
    }
  }

  console.log(`Targets: ${targets.length}; locales: ${args.locales.join(", ")}; jobs: ${jobs.length}; concurrency: ${args.concurrency}; model: ${args.model}`);

  const results = await runPool(jobs, args.concurrency, async (job) => {
    await translateOne({ args, sourceFile: job.sourceFile, locale: job.locale, apiKey });
  });

  const failures = results.filter((result) => !result.ok);
  if (failures.length > 0) {
    console.error(`FAILED ${failures.length}/${jobs.length}`);
    for (const failure of failures) {
      console.error(`- ${failure.item.locale} ${failure.item.sourceFile}: ${failure.error.message}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`DONE ${jobs.length}/${jobs.length}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
