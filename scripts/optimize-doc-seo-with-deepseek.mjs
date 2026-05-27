import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_PROMPT_DIR = "output/seo-prompts";
const DEFAULT_MODEL = "deepseek-chat";
const DEFAULT_MAX_RETRIES = 6;

const LOCALES = {
  id: {
    label: "Indonesian",
    inputDir: "docs",
    languageInstruction:
      "Write SEO metadata in natural Indonesian for enterprise, business, technology, and AI transformation readers in Indonesia and Southeast Asia.",
  },
  en: {
    label: "English",
    inputDir: "i18n/en/docusaurus-plugin-content-docs/current",
    languageInstruction:
      "Write SEO metadata in natural English for senior enterprise, business, technology, and AI transformation readers.",
  },
  gsw: {
    label: "Swiss German",
    inputDir: "i18n/gsw/docusaurus-plugin-content-docs/current",
    languageInstruction:
      "Write SEO metadata in business-readable Swiss German. Keep common enterprise AI terms in English when that is clearer.",
  },
  ar: {
    label: "Arabic",
    inputDir: "i18n/ar/docusaurus-plugin-content-docs/current",
    languageInstruction:
      "Write SEO metadata in clear Modern Standard Arabic for senior business and technology readers. Keep common enterprise AI terms in English when that is clearer.",
  },
  ja: {
    label: "Japanese",
    inputDir: "i18n/ja/docusaurus-plugin-content-docs/current",
    languageInstruction:
      "Write SEO metadata in polished business Japanese for senior enterprise technology readers. Use common Japanese or katakana technical terms naturally.",
  },
};

function parseArgs(argv) {
  const args = {
    promptDir: DEFAULT_PROMPT_DIR,
    locales: ["id", "en", "gsw", "ar", "ja"],
    target: null,
    targetSlug: null,
    file: null,
    all: false,
    dryRun: false,
    force: false,
    temperature: Number(process.env.DEEPSEEK_SEO_TEMPERATURE || 0.25),
    maxTokens: Number(process.env.DEEPSEEK_SEO_MAX_TOKENS || 1600),
    concurrency: process.env.DEEPSEEK_CONCURRENCY ? Number(process.env.DEEPSEEK_CONCURRENCY) : 8,
    maxRetries: Number(process.env.DEEPSEEK_MAX_RETRIES || DEFAULT_MAX_RETRIES),
    model: process.env.DEEPSEEK_MODEL || DEFAULT_MODEL,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--prompt-dir") args.promptDir = argv[++i];
    else if (item === "--locale") args.locales = [argv[++i]];
    else if (item === "--locales") args.locales = argv[++i].split(",").map((value) => value.trim()).filter(Boolean);
    else if (item === "--target") args.target = argv[++i];
    else if (item === "--target-slug") args.targetSlug = argv[++i];
    else if (item === "--file") args.file = argv[++i];
    else if (item === "--all") args.all = true;
    else if (item === "--dry-run") args.dryRun = true;
    else if (item === "--force") args.force = true;
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
  node scripts/optimize-doc-seo-with-deepseek.mjs --all
  node scripts/optimize-doc-seo-with-deepseek.mjs --locale en --target 1
  node scripts/optimize-doc-seo-with-deepseek.mjs --locales id,en,ja --target-slug agentic-transformation

Options:
  --locale <locale>       Optimize one locale: id, en, gsw, ar, ja.
  --locales <list>        Comma-separated locales. Default: id,en,gsw,ar,ja
  --target <number>       Optimize article by leading article number.
  --target-slug <slug>    Optimize article by slug.
  --file <path>           Optimize one explicit Markdown file.
  --all                   Optimize all docs in selected locales.
  --force                 Replace existing description/keywords even if present.
  --dry-run               Write prompt files only.
  --prompt-dir <dir>      Prompt output directory. Default: ${DEFAULT_PROMPT_DIR}
  --model <name>          DeepSeek model. Default: env DEEPSEEK_MODEL or ${DEFAULT_MODEL}
  --temperature <n>       DeepSeek temperature. Default: 0.25
  --max-tokens <n>        DeepSeek max output tokens. Default: 1600
  --concurrency <n>       Parallel DeepSeek requests. Default: 8
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

async function pathExists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
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

async function selectTargets(args, locale) {
  if (args.file) return [{ locale, file: args.file }];

  const files = await listMarkdownFiles(LOCALES[locale].inputDir);
  let selected;
  if (args.all) selected = files;
  else if (args.target) {
    const number = Number(args.target);
    selected = files.filter((file) => articleNumberFromName(file) === number);
  } else if (args.targetSlug) {
    selected = files.filter((file) => articleSlugFromName(file) === args.targetSlug);
  } else {
    throw new Error("No target selected. Use --target <number>, --target-slug <slug>, --file <path>, or --all.");
  }

  return selected.map((file) => ({ locale, file }));
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { frontmatter: "", body: markdown, rawBlock: "" };
  return {
    frontmatter: match[1],
    body: markdown.slice(match[0].length),
    rawBlock: match[0],
  };
}

function getFrontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${escapeRegExp(key)}:\\s*(.+)$`, "m"));
  return match?.[1]?.trim() ?? null;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function yamlQuote(value) {
  return JSON.stringify(String(value).replace(/\s+/g, " ").trim());
}

function yamlList(key, values) {
  return `${key}:\n${values.map((value) => `  - ${yamlQuote(value)}`).join("\n")}`;
}

function removeYamlField(frontmatter, key) {
  const lines = frontmatter.split(/\n/);
  const output = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].match(new RegExp(`^${escapeRegExp(key)}:`))) {
      i += 1;
      while (i < lines.length && /^\s+-\s+/.test(lines[i])) i += 1;
      i -= 1;
      continue;
    }
    output.push(lines[i]);
  }
  return output.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function upsertSeoFrontmatter(frontmatter, metadata, imagePath) {
  let next = frontmatter.trim();
  for (const key of ["description", "keywords", "image"]) {
    next = removeYamlField(next, key);
  }

  const fields = [
    `description: ${yamlQuote(metadata.description)}`,
    yamlList("keywords", metadata.keywords),
  ];

  if (imagePath) fields.push(`image: ${yamlQuote(imagePath)}`);

  return `${next}\n${fields.join("\n")}`.trim();
}

function existingSeoComplete(frontmatter) {
  return Boolean(getFrontmatterValue(frontmatter, "description")) && frontmatter.includes("keywords:");
}

function titleFromMarkdown(markdown, file) {
  const { frontmatter, body } = parseFrontmatter(markdown);
  const frontmatterTitle = getFrontmatterValue(frontmatter, "title");
  if (frontmatterTitle) return frontmatterTitle.replace(/^["']|["']$/g, "");
  return body.match(/^#\s+(.+)$/m)?.[1] || path.basename(file, ".md");
}

function bodyExcerpt(markdown, maxChars = 9000) {
  const { body } = parseFrontmatter(markdown);
  return body
    .replace(/^import .+$/gm, "")
    .replace(/<ArticleDiagram[^>]*\/>/g, "")
    .trim()
    .slice(0, maxChars);
}

function imagePathForFile(file) {
  const base = path.basename(file, ".md");
  if (base === "intro") return null;
  const slug = base.replace(/^\d+-/, "");
  const number = articleNumberFromName(file);
  if (!number) return null;
  return `/img/diagrams/${String(number).padStart(2, "0")}-${slug}.png`;
}

function buildPrompt({ markdown, file, locale }) {
  const localeConfig = LOCALES[locale];
  const title = titleFromMarkdown(markdown, file);
  const excerpt = bodyExcerpt(markdown);

  return `
# Role
You are an SEO strategist and enterprise technology editor.

# Goal
Generate search-focused metadata for one Docusaurus article. The metadata must increase discoverability for search engines and site search, while staying truthful to the article.

# Locale
${locale} - ${localeConfig.label}

# Language Instruction
${localeConfig.languageInstruction}

# Article Title
${title}

# Requirements
- Return JSON only. No markdown fence.
- description: one compelling meta description in the article language.
- description should be specific, not generic; target roughly 130-165 characters when the language supports that naturally.
- keywords: 16 to 24 search phrases in the article language.
- Include a mix of exact topic terms, long-tail business search queries, architecture/governance terms, and enterprise AI terms.
- Do not keyword-stuff. Do not include unrelated hype terms.
- Do not invent claims, companies, statistics, or product names not supported by the article.
- Prefer terms a senior business, CIO, CTO, COO, enterprise architect, AI lead, or transformation lead would search for.

# Output Schema
{
  "description": "string",
  "keywords": ["string"]
}

# Article Excerpt
${excerpt}
`.trim();
}

function parseJsonResponse(text) {
  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) throw new Error(`DeepSeek did not return JSON: ${cleaned.slice(0, 500)}`);
  const parsed = JSON.parse(cleaned.slice(start, end + 1));
  if (!parsed.description || !Array.isArray(parsed.keywords)) throw new Error("DeepSeek JSON is missing description or keywords.");
  return {
    description: String(parsed.description).trim(),
    keywords: [...new Set(parsed.keywords.map((value) => String(value).trim()).filter(Boolean))].slice(0, 24),
  };
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
          response_format: { type: "json_object" },
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
    if (text) return parseJsonResponse(text);
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

async function optimizeOne({ args, apiKey, job }) {
  const markdown = await readFile(job.file, "utf8");
  const { frontmatter, body } = parseFrontmatter(markdown);
  if (!frontmatter) throw new Error(`${job.file} has no frontmatter.`);

  if (!args.force && existingSeoComplete(frontmatter)) {
    console.log(`SKIP ${job.locale} existing SEO ${job.file}`);
    return;
  }

  const prompt = buildPrompt({ markdown, file: job.file, locale: job.locale });
  const promptFile = path.join(args.promptDir, job.locale, `${path.basename(job.file, ".md")}.prompt.md`);
  await mkdir(path.dirname(promptFile), { recursive: true });
  await writeFile(promptFile, `${prompt}\n`);

  if (args.dryRun) {
    console.log(`DRY ${job.locale} ${job.file}`);
    return;
  }

  console.log(`SEO ${job.locale} ${job.file} via ${args.model}`);
  const metadata = await callDeepSeek({
    apiKey,
    model: args.model,
    prompt,
    temperature: args.temperature,
    maxTokens: args.maxTokens,
    maxRetries: args.maxRetries,
  });

  const nextFrontmatter = upsertSeoFrontmatter(frontmatter, metadata, imagePathForFile(job.file));
  await writeFile(job.file, `---\n${nextFrontmatter}\n---\n\n${body.trimStart()}`);
  console.log(`WROTE ${job.file}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  validateArgs(args);

  const jobs = [];
  for (const locale of args.locales) {
    jobs.push(...await selectTargets(args, locale));
  }
  if (jobs.length === 0) throw new Error("No matching docs found.");

  const env = await loadEnv();
  const apiKey = process.env.DEEPSEEK_API_KEY || env.DEEPSEEK_API_KEY;
  if (!apiKey && !args.dryRun) throw new Error("DEEPSEEK_API_KEY is required.");

  console.log(`Jobs: ${jobs.length}; locales: ${args.locales.join(", ")}; concurrency: ${args.concurrency}; model: ${args.model}`);

  const results = await runPool(jobs, args.concurrency, async (job) => {
    await optimizeOne({ args, apiKey, job });
  });

  const failures = results.filter((result) => !result.ok);
  if (failures.length > 0) {
    console.error(`FAILED ${failures.length}/${jobs.length}`);
    for (const failure of failures) {
      console.error(`- ${failure.item.locale} ${failure.item.file}: ${failure.error.message}`);
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
