import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_DOCS_DIR = "docs";
const DEFAULT_PROMPT_DIR = "docs/agentic-enterprise/_prompts/nano-banana-diagrams";
const DEFAULT_IMAGE_DIR = "static/img/diagrams";
const DEFAULT_OUTPUT_FILE = "output/pinterest/pins.json";
const DEFAULT_BASE_URL = "https://ariefwara.github.io/ai-for-business";
const DEFAULT_MODEL = "deepseek-chat";
const DEFAULT_CONCURRENCY = 6;
const DEFAULT_MAX_RETRIES = 6;

function parseArgs(argv) {
  const args = {
    docsDir: DEFAULT_DOCS_DIR,
    promptDir: DEFAULT_PROMPT_DIR,
    imageDir: DEFAULT_IMAGE_DIR,
    outputFile: DEFAULT_OUTPUT_FILE,
    baseUrl: process.env.PINTEREST_BASE_URL || DEFAULT_BASE_URL,
    model: process.env.DEEPSEEK_MODEL || DEFAULT_MODEL,
    temperature: Number(process.env.DEEPSEEK_PINTEREST_TEMPERATURE || 0.45),
    maxTokens: Number(process.env.DEEPSEEK_PINTEREST_MAX_TOKENS || 900),
    concurrency: Number(process.env.DEEPSEEK_PINTEREST_CONCURRENCY || DEFAULT_CONCURRENCY),
    maxRetries: Number(process.env.DEEPSEEK_MAX_RETRIES || DEFAULT_MAX_RETRIES),
    all: false,
    force: false,
    dryRun: false,
    target: null,
    targetSlug: null,
    from: null,
    to: null,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--docs-dir") args.docsDir = argv[++i];
    else if (item === "--prompt-dir") args.promptDir = argv[++i];
    else if (item === "--image-dir") args.imageDir = argv[++i];
    else if (item === "--output-file") args.outputFile = argv[++i];
    else if (item === "--base-url") args.baseUrl = argv[++i];
    else if (item === "--model") args.model = argv[++i];
    else if (item === "--temperature") args.temperature = Number(argv[++i]);
    else if (item === "--max-tokens") args.maxTokens = Number(argv[++i]);
    else if (item === "--concurrency") args.concurrency = Number(argv[++i]);
    else if (item === "--max-retries") args.maxRetries = Number(argv[++i]);
    else if (item === "--target") args.target = Number(argv[++i]);
    else if (item === "--target-slug") args.targetSlug = argv[++i];
    else if (item === "--from") args.from = Number(argv[++i]);
    else if (item === "--to") args.to = Number(argv[++i]);
    else if (item === "--all") args.all = true;
    else if (item === "--force") args.force = true;
    else if (item === "--dry-run") args.dryRun = true;
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
  node scripts/generate-pinterest-descriptions-with-deepseek.mjs --all
  node scripts/generate-pinterest-descriptions-with-deepseek.mjs --target 1
  node scripts/generate-pinterest-descriptions-with-deepseek.mjs --from 2 --to 33

Options:
  --docs-dir <dir>          Article directory. Default: ${DEFAULT_DOCS_DIR}
  --prompt-dir <dir>        Nano Banana prompt directory. Default: ${DEFAULT_PROMPT_DIR}
  --image-dir <dir>         Diagram image directory. Default: ${DEFAULT_IMAGE_DIR}
  --output-file <file>      Pinterest metadata JSON. Default: ${DEFAULT_OUTPUT_FILE}
  --base-url <url>          Public site base URL. Default: ${DEFAULT_BASE_URL}
  --target <number>         Generate one article by number.
  --target-slug <slug>      Generate one article by slug.
  --from <number>           Start number for a range.
  --to <number>             End number for a range.
  --all                     Generate all active article descriptions.
  --force                   Regenerate existing entries.
  --dry-run                 Write DeepSeek request prompts only.
`);
}

function validateArgs(args) {
  for (const key of ["temperature", "maxTokens", "concurrency", "maxRetries"]) {
    if (!Number.isFinite(args[key]) || args[key] <= 0) throw new Error(`${key} must be positive.`);
  }
  args.concurrency = Math.floor(args.concurrency);
  args.maxRetries = Math.floor(args.maxRetries);
  args.baseUrl = args.baseUrl.replace(/\/+$/, "");
}

async function loadEnv() {
  const env = {};
  try {
    const raw = await readFile(".env", "utf8");
    for (const line of raw.split(/\r?\n/)) {
      if (!line || line.trim().startsWith("#") || !line.includes("=")) continue;
      const index = line.indexOf("=");
      env[line.slice(0, index).trim()] = line.slice(index + 1).trim();
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

function articleNumber(file) {
  const match = path.basename(file).match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

function articleSlug(file) {
  return path.basename(file, ".md").replace(/^\d+-/, "");
}

function articleBase(file) {
  return path.basename(file, ".md");
}

async function listArticles(docsDir) {
  const files = await readdir(docsDir);
  return files
    .filter((file) => /^\d+-.+\.md$/.test(file))
    .map((file) => path.join(docsDir, file))
    .sort((a, b) => articleNumber(a) - articleNumber(b));
}

async function selectArticles(args) {
  let files = await listArticles(args.docsDir);
  if (args.target !== null) files = files.filter((file) => articleNumber(file) === args.target);
  else if (args.targetSlug) files = files.filter((file) => articleSlug(file) === args.targetSlug);
  else if (args.from !== null || args.to !== null) {
    const from = args.from ?? 1;
    const to = args.to ?? Number.MAX_SAFE_INTEGER;
    files = files.filter((file) => articleNumber(file) >= from && articleNumber(file) <= to);
  } else if (!args.all) {
    throw new Error("No target selected. Use --all, --target, --target-slug, or --from/--to.");
  }
  if (files.length === 0) throw new Error("No matching articles found.");
  return files;
}

function extractFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  const body = match ? markdown.slice(match[0].length).trim() : markdown.trim();
  const frontmatter = {};
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const index = line.indexOf(":");
      if (index === -1) continue;
      frontmatter[line.slice(0, index).trim()] = line.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
  return { frontmatter, body };
}

function compactMarkdown(markdown, maxChars = 16000) {
  return markdown
    .replace(/^---\n[\s\S]*?\n---\n?/, "")
    .replace(/^import .+?;\n/gm, "")
    .replace(/<ArticleDiagram[\s\S]*?\/>\n?/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxChars);
}

async function loadExisting(outputFile) {
  try {
    const raw = await readFile(outputFile, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data.items) ? data.items : [];
  } catch {
    return [];
  }
}

function buildPrompt({ articleMarkdown, diagramPrompt, file, args }) {
  const { frontmatter, body } = extractFrontmatter(articleMarkdown);
  const title = frontmatter.title || body.match(/^#\s+(.+)$/m)?.[1] || articleBase(file);
  const description = frontmatter.description || "";
  const article = compactMarkdown(articleMarkdown);

  return `
# Task
Create Pinterest metadata for one article diagram.

# Article
Title: ${title}
Existing SEO description: ${description}
Public URL: ${args.baseUrl}/${articleSlug(file)}

${article}

# Nano Banana diagram prompt used to create the image
${diagramPrompt}

# Writing direction
Write in Indonesian. Make it useful for someone browsing Pinterest who is interested in enterprise AI, agentic AI, AI governance, digital transformation, operating model, and business architecture.

The description must explain what the diagram helps the reader understand. It should be narrative and specific, not generic marketing copy. It should connect the article idea and the visual concept. Avoid overpromising, hype, emoji, hashtags, and bullet points.

# Constraints
- title: maximum 100 characters.
- description: 350 to 500 characters.
- altText: maximum 500 characters, descriptive and accessibility-friendly.
- keywords: 8 to 14 short Indonesian or English search terms.

# Output
Return only valid JSON:
{
  "title": "...",
  "description": "...",
  "altText": "...",
  "keywords": ["...", "..."]
}
`.trim();
}

function normalizeJson(text) {
  return text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

async function callDeepSeek({ apiKey, args, prompt }) {
  for (let attempt = 1; attempt <= args.maxRetries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 120000);
    let response;
    try {
      response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        signal: controller.signal,
        headers: {
          authorization: `Bearer ${apiKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: args.model,
          messages: [{ role: "user", content: prompt }],
          temperature: args.temperature,
          max_tokens: args.maxTokens,
          response_format: { type: "json_object" },
        }),
      });
    } catch (error) {
      clearTimeout(timeout);
      if (attempt < args.maxRetries) {
        await sleep(retryDelay(attempt));
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
      throw new Error(`DeepSeek returned non-JSON response: ${raw.slice(0, 500)}`);
    }

    if (!response.ok) {
      if ((response.status === 429 || response.status >= 500) && attempt < args.maxRetries) {
        await sleep(retryDelay(attempt, response.status === 429));
        continue;
      }
      throw new Error(JSON.stringify(data, null, 2));
    }

    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error("DeepSeek response was empty.");
    return parseGeneratedJson(content);
  }
  throw new Error("DeepSeek retries exhausted.");
}

function parseGeneratedJson(text) {
  const normalized = normalizeJson(text);
  try {
    return JSON.parse(normalized);
  } catch {
    const start = normalized.indexOf("{");
    const end = normalized.lastIndexOf("}");
    if (start !== -1 && end > start) return JSON.parse(normalized.slice(start, end + 1));
    throw new Error(`Could not parse DeepSeek JSON: ${normalized.slice(0, 500)}`);
  }
}

function retryDelay(attempt, rateLimited = false) {
  const base = rateLimited ? 6000 : 2500;
  return Math.min(60000, base * 2 ** Math.max(0, attempt - 1)) + Math.floor(Math.random() * 1000);
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
        results[index] = { ok: true, value: await worker(items[index], index) };
      } catch (error) {
        results[index] = { ok: false, item: items[index], error };
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runWorker));
  return results;
}

async function generateOne({ file, args, apiKey }) {
  const base = articleBase(file);
  const markdown = await readFile(file, "utf8");
  const promptFile = path.join(args.promptDir, `${base}.nano-banana-prompt.md`);
  const diagramPrompt = await readFile(promptFile, "utf8");
  const request = buildPrompt({ articleMarkdown: markdown, diagramPrompt, file, args });
  const requestFile = path.join("output/pinterest/requests", `${base}.deepseek-request.md`);
  await mkdir(path.dirname(requestFile), { recursive: true });
  await writeFile(requestFile, `${request}\n`);

  if (args.dryRun) {
    return {
      number: articleNumber(file),
      slug: articleSlug(file),
      requestFile,
      dryRun: true,
    };
  }

  console.log(`GENERATE PIN DESCRIPTION ${base}`);
  const generated = await callDeepSeek({ apiKey, args, prompt: request });
  const { frontmatter, body } = extractFrontmatter(markdown);
  const fallbackTitle = frontmatter.title || body.match(/^#\s+(.+)$/m)?.[1] || base;
  return {
    number: articleNumber(file),
    slug: articleSlug(file),
    articleFile: file,
    promptFile,
    imageFile: path.join(args.imageDir, `${base}.png`),
    link: `${args.baseUrl}/${articleSlug(file)}`,
    title: limitText(generated.title || fallbackTitle, 100),
    description: limitText(generated.description || frontmatter.description || "", 500),
    altText: limitText(generated.altText || fallbackTitle, 500),
    keywords: Array.isArray(generated.keywords) ? generated.keywords.map(String).slice(0, 14) : [],
    generatedAt: new Date().toISOString(),
    model: args.model,
  };
}

function limitText(value, maxLength) {
  const text = String(value).replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  const slice = text.slice(0, maxLength);
  const punctuation = Math.max(slice.lastIndexOf("."), slice.lastIndexOf("!"), slice.lastIndexOf("?"));
  if (punctuation >= Math.floor(maxLength * 0.65)) return slice.slice(0, punctuation + 1).trim();
  const lastSpace = slice.lastIndexOf(" ");
  const suffix = "...";
  const cutoff = Math.max(0, (lastSpace > 0 ? lastSpace : maxLength) - suffix.length);
  return `${slice.slice(0, cutoff).trim()}${suffix}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  validateArgs(args);
  const env = await loadEnv();
  const apiKey = process.env.DEEPSEEK_API_KEY || env.DEEPSEEK_API_KEY || env.DEEPSEEK_TOKEN;
  if (!args.dryRun && !apiKey) throw new Error("Missing DEEPSEEK_API_KEY or DEEPSEEK_TOKEN.");

  const files = await selectArticles(args);
  const existing = await loadExisting(args.outputFile);
  const existingBySlug = new Map(existing.map((item) => [item.slug, item]));
  const targets = files.filter((file) => args.force || !existingBySlug.has(articleSlug(file)));
  const kept = existing.filter((item) => !targets.some((file) => articleSlug(file) === item.slug));

  if (targets.length === 0) {
    console.log("Nothing to generate. Use --force to regenerate existing entries.");
    return;
  }

  const results = await runPool(targets, args.concurrency, (file) => generateOne({ file, args, apiKey }));
  const failures = results.filter((result) => !result.ok);
  if (failures.length) {
    for (const failure of failures) {
      console.error(`FAILED ${failure.item}: ${failure.error.message}`);
    }
    throw new Error(`${failures.length} Pinterest description request(s) failed.`);
  }

  if (!args.dryRun) {
    const items = [...kept, ...results.map((result) => result.value)].sort((a, b) => a.number - b.number);
    await mkdir(path.dirname(args.outputFile), { recursive: true });
    await writeFile(args.outputFile, `${JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2)}\n`);
    console.log(`WROTE ${args.outputFile} (${items.length} items)`);
  } else {
    console.log(`DRY-RUN wrote request prompts for ${targets.length} item(s).`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
