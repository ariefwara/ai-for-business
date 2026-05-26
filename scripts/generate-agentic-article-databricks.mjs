import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_OUTLINE = "outlines/agentic-enterprise-architecture-operating-model.json";
const DEFAULT_REFERENCES_DIR = "downloads/agentic-ai-whitepapers/_text";
const DEFAULT_OUTPUT_DIR = "docs/agentic-enterprise";
const DEFAULT_SESSIONS_DIR = ".article-sessions";
const DEFAULT_PHILOSOPHY_FILE = "config/writing-philosophy.md";
const GENERATED_ARTICLE_CONTEXT_LIMIT_CHARS = 120000;
const GENERATED_ARTICLE_CONTEXT_PER_FILE_CHARS = 18000;
const DEFAULT_ENDPOINTS = [
  "databricks-gpt-5-5-pro",
  "databricks-gpt-5-5",
  "databricks-gpt-5-3-codex",
  "databricks-claude-sonnet-4-6",
  "databricks-gpt-5-4",
];

const DEFAULT_WRITING_PHILOSOPHY = `
Write in Indonesian for senior enterprise readers.
Use clear, pragmatic, executive-grade prose. Avoid hype, vague optimism, and generic AI explanations.
Every article must connect business operating model, enterprise architecture, governance, and workforce impact.
Prefer concrete enterprise examples: finance close, procurement, customer operations, IT operations, supply chain, GCC/shared services.
Explain trade-offs explicitly. Mention when a pattern is not appropriate.
Do not invent statistics. Use numeric claims only when they are present in the reference excerpts or outline.
Do not over-quote sources. Synthesize the ideas and attribute only at a high level when needed.
End with a practical narrative conclusion that restates the core argument and its implications.
`;

const DEFAULT_ARTICLE_CONCEPT = `
This article belongs to a long-form knowledge series titled "Agentic Enterprise: Architecture, Operating Model, and Workforce Transformation".
The series teaches how companies move from AI tools and copilots toward an enterprise-grade agentic operating model.
The reader should finish each article with a concrete mental model, implementation choices, governance implications, and next actions.
`;

function parseArgs(argv) {
  const args = {
    outline: DEFAULT_OUTLINE,
    referencesDir: DEFAULT_REFERENCES_DIR,
    outputDir: DEFAULT_OUTPUT_DIR,
    sessionsDir: DEFAULT_SESSIONS_DIR,
    session: null,
    initSession: false,
    target: null,
    targetSlug: null,
    all: false,
    endpoint: process.env.DATABRICKS_LLM_ENDPOINT || null,
    maxOutputTokens: Number(process.env.ARTICLE_MAX_OUTPUT_TOKENS || 8000),
    temperature: Number(process.env.ARTICLE_TEMPERATURE || 0.2),
    referenceBudgetChars: Number(process.env.ARTICLE_REFERENCE_BUDGET_CHARS || 70000),
    perReferenceChars: Number(process.env.ARTICLE_PER_REFERENCE_CHARS || 5500),
    includeFutureGenerated: false,
    concept: DEFAULT_ARTICLE_CONCEPT.trim(),
    conceptFile: null,
    philosophy: DEFAULT_WRITING_PHILOSOPHY.trim(),
    philosophyFile: null,
    dryRun: false,
    force: false,
    list: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--outline") args.outline = argv[++i];
    else if (item === "--references-dir") args.referencesDir = argv[++i];
    else if (item === "--output-dir") args.outputDir = argv[++i];
    else if (item === "--sessions-dir") args.sessionsDir = argv[++i];
    else if (item === "--session") args.session = argv[++i];
    else if (item === "--init-session") args.initSession = true;
    else if (item === "--target") args.target = argv[++i];
    else if (item === "--target-slug") args.targetSlug = argv[++i];
    else if (item === "--all") args.all = true;
    else if (item === "--endpoint") args.endpoint = argv[++i];
    else if (item === "--max-output-tokens") args.maxOutputTokens = Number(argv[++i]);
    else if (item === "--temperature") args.temperature = Number(argv[++i]);
    else if (item === "--reference-budget-chars") args.referenceBudgetChars = Number(argv[++i]);
    else if (item === "--per-reference-chars") args.perReferenceChars = Number(argv[++i]);
    else if (item === "--include-future-generated") args.includeFutureGenerated = true;
    else if (item === "--concept") args.concept = argv[++i];
    else if (item === "--concept-file") args.conceptFile = argv[++i];
    else if (item === "--philosophy") args.philosophy = argv[++i];
    else if (item === "--philosophy-file") args.philosophyFile = argv[++i];
    else if (item === "--dry-run") args.dryRun = true;
    else if (item === "--force") args.force = true;
    else if (item === "--list") args.list = true;
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
  node scripts/generate-agentic-article-databricks.mjs --target 1
  node scripts/generate-agentic-article-databricks.mjs --target-slug agentic-ai-maturity-model
  node scripts/generate-agentic-article-databricks.mjs --all

Options:
  --outline <path>                  Outline JSON path. Default: ${DEFAULT_OUTLINE}
  --references-dir <dir>            Text references directory. Default: ${DEFAULT_REFERENCES_DIR}
  --output-dir <dir>                Output docs directory. Default: ${DEFAULT_OUTPUT_DIR}
  --sessions-dir <dir>              Session state directory. Default: ${DEFAULT_SESSIONS_DIR}
  --session <name>                  Load and update a reusable article-generation session.
  --init-session                    Create/update a session file and exit.
  --target <number>                 Article number to generate.
  --target-slug <slug>              Article slug to generate.
  --all                             Generate all articles in outline.
  --endpoint <name>                 Databricks model serving endpoint override.
  --max-output-tokens <n>           Max output tokens. Default: 8000.
  --temperature <n>                 Temperature. Default: 0.2.
  --reference-budget-chars <n>      Total reference excerpt budget. Default: 70000.
  --per-reference-chars <n>         Max chars per reference file. Default: 5500.
  --include-future-generated        Include generated articles after the target number too.
  --concept <text>                  Concept/idea for the article series.
  --concept-file <path>             Read concept/idea from file.
  --philosophy <text>               Writing philosophy.
  --philosophy-file <path>          Read writing philosophy from file. Default: ${DEFAULT_PHILOSOPHY_FILE} when present.
  --list                            Print article list and exit.
  --dry-run                         Write prompt files without calling Databricks.
  --force                           Overwrite existing article files.
`);
}

async function loadEnv() {
  const env = {};
  try {
    const raw = await readFile(".env", "utf8");
    for (const line of raw.split(/\r?\n/)) {
      if (!line || line.trim().startsWith("#") || !line.includes("=")) continue;
      const index = line.indexOf("=");
      env[line.slice(0, index)] = line.slice(index + 1);
    }
  } catch {
    // Environment can be supplied externally.
  }
  return env;
}

async function resolveDefaultText({ inlineText, explicitFile, defaultFile }) {
  const file = explicitFile || (await pathExists(defaultFile) ? defaultFile : null);
  if (!file) return inlineText;
  return (await readFile(file, "utf8")).trim();
}

function nowIso() {
  return new Date().toISOString();
}

function sessionPath(args) {
  if (!args.session) return null;
  const safeName = args.session.replace(/[^a-zA-Z0-9._-]/g, "-");
  return path.join(args.sessionsDir, `${safeName}.json`);
}

async function loadSession(args) {
  const file = sessionPath(args);
  if (!file || !await pathExists(file)) return null;
  return JSON.parse(await readFile(file, "utf8"));
}

async function saveSession(args, session) {
  const file = sessionPath(args);
  if (!file) return;
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(session, null, 2)}\n`);
}

function applySessionDefaults(args, session) {
  if (!session) return args;
  return {
    ...args,
    outline: args.outline === DEFAULT_OUTLINE ? session.outline || args.outline : args.outline,
    referencesDir: args.referencesDir === DEFAULT_REFERENCES_DIR ? session.referencesDir || args.referencesDir : args.referencesDir,
    outputDir: args.outputDir === DEFAULT_OUTPUT_DIR ? session.outputDir || args.outputDir : args.outputDir,
    endpoint: args.endpoint || session.endpoint || null,
    maxOutputTokens: session.maxOutputTokens && !process.env.ARTICLE_MAX_OUTPUT_TOKENS
      ? session.maxOutputTokens
      : args.maxOutputTokens,
    temperature: session.temperature && !process.env.ARTICLE_TEMPERATURE
      ? session.temperature
      : args.temperature,
    referenceBudgetChars: session.referenceBudgetChars && !process.env.ARTICLE_REFERENCE_BUDGET_CHARS
      ? session.referenceBudgetChars
      : args.referenceBudgetChars,
    perReferenceChars: session.perReferenceChars && !process.env.ARTICLE_PER_REFERENCE_CHARS
      ? session.perReferenceChars
      : args.perReferenceChars,
    concept: args.concept === DEFAULT_ARTICLE_CONCEPT.trim() ? session.concept || args.concept : args.concept,
    philosophy: args.philosophy === DEFAULT_WRITING_PHILOSOPHY.trim() ? session.philosophy || args.philosophy : args.philosophy,
  };
}

function buildSession(args, existingSession, { concept, philosophy }) {
  return {
    name: args.session,
    createdAt: existingSession?.createdAt || nowIso(),
    updatedAt: nowIso(),
    outline: args.outline,
    referencesDir: args.referencesDir,
    outputDir: args.outputDir,
    endpoint: args.endpoint,
    maxOutputTokens: args.maxOutputTokens,
    temperature: args.temperature,
    referenceBudgetChars: args.referenceBudgetChars,
    perReferenceChars: args.perReferenceChars,
    concept,
    philosophy,
    generatedArticles: existingSession?.generatedArticles || [],
  };
}

function updateSessionArticle(session, article, outputFile) {
  if (!session) return;
  const item = {
    number: Number(article.number),
    slug: article.slug,
    title: article.title,
    file: outputFile,
    updatedAt: nowIso(),
  };
  const existing = session.generatedArticles || [];
  session.generatedArticles = [
    ...existing.filter((entry) => Number(entry.number) !== Number(article.number)),
    item,
  ].sort((a, b) => Number(a.number) - Number(b.number));
  session.updatedAt = nowIso();
}

function flattenArticles(outline) {
  const articles = [];
  for (const section of outline.sections || []) {
    for (const subSection of section.sub_sections || []) {
      for (const article of subSection.bab || []) {
        articles.push({
          ...article,
          section: {
            id: section.id,
            title: section.title,
            intent: section.intent,
          },
          sub_section: {
            id: subSection.id,
            title: subSection.title,
            intent: subSection.intent,
          },
        });
      }
    }
  }
  return articles.sort((a, b) => Number(a.number) - Number(b.number));
}

function formatSeriesStructure(articles, target) {
  return articles.map((article) => {
    const mark = article.number === target.number ? " <TARGET>" : "";
    return `${String(article.number).padStart(2, "0")}. ${article.title} (${article.slug})${mark}`;
  }).join("\n");
}

function formatTargetStructure(article) {
  return [
    `Article number: ${article.number}`,
    `Title: ${article.title}`,
    `Slug: ${article.slug}`,
    `Section: ${article.section.title}`,
    `Section intent: ${article.section.intent}`,
    `Sub-section: ${article.sub_section.title}`,
    `Sub-section intent: ${article.sub_section.intent}`,
    `Objective: ${article.objective}`,
    "",
    "Substructure:",
    ...article.sub_bab.map((subBab, index) => [
      `${index + 1}. ${subBab.title}`,
      ...subBab.paragraph_ideas.map((idea) => `   - ${idea}`),
    ].join("\n")),
  ].join("\n");
}

function stripBoilerplate(text) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function scoreReference(fileName, text, article) {
  const haystack = `${fileName}\n${text.slice(0, 30000)}`.toLowerCase();
  const target = `${article.title} ${article.slug} ${article.objective} ${article.section.title} ${article.sub_section.title}`.toLowerCase();
  const terms = new Set(
    target
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length >= 5)
  );
  let score = 0;
  for (const term of terms) if (haystack.includes(term)) score += 2;

  const thematicBoosts = [
    ["architecture", ["bain", "accenture-platform", "bcg-agentic-ai-enterprise-platforms", "kpmg-agentic-ai-advantage"]],
    ["governance", ["deloitte", "kpmg", "pwc", "ey"]],
    ["security", ["pwc", "kpmg", "deloitte-api"]],
    ["finance", ["ey", "deloitte", "capgemini-ai-in-business-operations"]],
    ["supply", ["ey", "strategyand", "capgemini-ai-in-business-operations"]],
    ["workforce", ["accenture-agentic-imperative", "bcg-ai-first", "ey", "kpmg-agentic-ai-advantage"]],
    ["platform", ["accenture-platform", "bain", "bcg-agentic-ai-enterprise-platforms"]],
    ["service", ["kpmg-hfs", "bcg-200b", "cognizant"]],
  ];
  for (const [term, names] of thematicBoosts) {
    if (target.includes(term)) {
      for (const name of names) if (fileName.includes(name)) score += 8;
    }
  }
  return score;
}

async function loadReferences(referencesDir, article, { referenceBudgetChars, perReferenceChars }) {
  const files = (await readdir(referencesDir))
    .filter((file) => file.endsWith(".txt"))
    .map((file) => path.join(referencesDir, file));

  const loaded = [];
  for (const file of files) {
    const raw = stripBoilerplate(await readFile(file, "utf8"));
    if (!raw) continue;
    loaded.push({
      file,
      name: path.basename(file),
      text: raw,
      score: scoreReference(path.basename(file), raw, article),
    });
  }

  loaded.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  let used = 0;
  const selected = [];
  for (const ref of loaded) {
    if (used >= referenceBudgetChars) break;
    const remaining = referenceBudgetChars - used;
    const excerptSize = Math.min(perReferenceChars, remaining, ref.text.length);
    if (excerptSize < 600 && selected.length > 0) break;
    selected.push({
      name: ref.name,
      score: ref.score,
      excerpt: ref.text.slice(0, excerptSize),
    });
    used += excerptSize;
  }
  return selected;
}

function scoreGeneratedArticle(article, targetArticle) {
  const distance = Number(targetArticle.number) - Number(article.number);
  let score = 100 - Math.abs(distance);
  if (distance > 0) score += 30;
  if (article.section?.id === targetArticle.section?.id) score += 20;
  if (article.sub_section?.id === targetArticle.sub_section?.id) score += 30;
  return score;
}

function removeMarkdownNoise(text) {
  return stripBoilerplate(text)
    .replace(/^---\n[\s\S]*?\n---\n?/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

async function loadGeneratedArticleContext(outputDir, articles, targetArticle, {
  includeFutureGenerated,
}) {
  const candidates = [];
  for (const article of articles) {
    if (Number(article.number) === Number(targetArticle.number)) continue;
    if (!includeFutureGenerated && Number(article.number) > Number(targetArticle.number)) continue;

    const file = outputPathForArticle(outputDir, article);
    if (!await pathExists(file)) continue;

    const raw = removeMarkdownNoise(await readFile(file, "utf8"));
    if (!raw) continue;

    candidates.push({
      article,
      file,
      score: scoreGeneratedArticle(article, targetArticle),
      text: raw,
    });
  }

  candidates.sort((a, b) => b.score - a.score || Number(a.article.number) - Number(b.article.number));

  let used = 0;
  const selected = [];
  for (const candidate of candidates) {
    if (used >= GENERATED_ARTICLE_CONTEXT_LIMIT_CHARS) break;
    const remaining = GENERATED_ARTICLE_CONTEXT_LIMIT_CHARS - used;
    const excerptSize = Math.min(GENERATED_ARTICLE_CONTEXT_PER_FILE_CHARS, remaining, candidate.text.length);
    if (excerptSize < 600 && selected.length > 0) break;
    selected.push({
      number: candidate.article.number,
      title: candidate.article.title,
      slug: candidate.article.slug,
      excerpt: candidate.text.slice(0, excerptSize),
    });
    used += excerptSize;
  }

  return selected.sort((a, b) => Number(a.number) - Number(b.number));
}

function buildPrompt({ outline, articles, article, references, generatedArticles, concept, philosophy }) {
  const system = `
You are a senior enterprise technology strategist and long-form Indonesian business writer.
You synthesize consulting whitepapers into original, practical articles.
You do not copy source text. You produce a new article with clear argument, concrete enterprise examples, and implementation discipline.
Return Markdown only.
`.trim();

  const referenceBlock = references.map((ref, index) => `
### Reference ${index + 1}: ${ref.name}
${ref.excerpt}
`).join("\n");

  const generatedArticleBlock = generatedArticles.length > 0
    ? generatedArticles.map((generated) => `
### Generated Article ${String(generated.number).padStart(2, "0")}: ${generated.title} (${generated.slug})
${generated.excerpt}
`).join("\n")
    : "No generated article context is available yet.";

  const user = `
# Task
Generate one complete article in Indonesian for the series.

# Series Concept / Konsep Ide Artikel
${concept}

# Filosofi Penulisan
${philosophy}

# Struktur Utuh Seri
${formatSeriesStructure(articles, article)}

# Target Article dan Sub-Strukturnya
${formatTargetStructure(article)}

# Semua Referensi yang Relevan
The excerpts below are selected from the downloaded reference corpus. Use them as factual grounding and synthesis material.
${referenceBlock}

# Artikel Sebelumnya yang Sudah Digenerate
Use these already generated articles as continuity context for the series.
Do not repeat their explanations unless the target article needs a short bridge.
When the same concept appears again, advance the argument: add a new angle, deeper implementation detail, a different enterprise example, or a governance implication.
Make transitions smooth by briefly connecting to prior articles and then moving forward.
${generatedArticleBlock}

# Output Requirements
- Return one complete Markdown article.
- Start with Docusaurus frontmatter:
  ---
  title: "<article title>"
  sidebar_position: <article number>
  ---
- Then write the article with a clear H1.
- Target depth: 1,800-2,800 Indonesian words unless the structure needs more.
- Use the target substructure, but improve heading names if needed.
- Cover every sub_bab and paragraph idea in substance. Do not mechanically list them.
- Include practical examples from enterprise workflows.
- Include trade-offs, risks, and governance implications.
- End with a narrative closing section that restates the core argument and practical implications.
- Avoid redundant explanations from generated article context. Refer back briefly when useful, but make the target article stand on its own.
- Do not mention that this was generated by an LLM.
- Do not include raw prompt, source excerpts, or file names in the article body.
- Avoid unsupported numeric claims. If a number is used, it must be grounded in references or framed as an example.
`.trim();

  return {
    system,
    user,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  };
}

async function api(host, token, route, body) {
  const response = await fetch(`${host}${route}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${text}`);
  return text ? JSON.parse(text) : {};
}

function textFromResponse(data) {
  if (typeof data.output_text === "string") return data.output_text;
  if (Array.isArray(data.output)) {
    return data.output
      .flatMap((item) => Array.isArray(item.content)
        ? item.content.map((content) => content.text || content.output_text || "").filter(Boolean)
        : [item.content || ""])
      .filter(Boolean)
      .join("\n");
  }
  return data.choices?.[0]?.message?.content || data.content || "";
}

async function listReadyEndpoints(host, token) {
  try {
    const response = await fetch(`${host}/api/2.0/serving-endpoints`, {
      headers: { authorization: `Bearer ${token}` },
    });
    const text = await response.text();
    if (!response.ok) return [];
    const data = text ? JSON.parse(text) : {};
    return (data.endpoints || [])
      .filter((endpoint) => endpoint.state?.ready === "READY")
      .map((endpoint) => endpoint.name);
  } catch {
    return [];
  }
}

async function selectEndpoint(host, token, override) {
  if (override) return override;
  const ready = await listReadyEndpoints(host, token);
  return DEFAULT_ENDPOINTS.find((endpoint) => ready.includes(endpoint)) || ready[0] || DEFAULT_ENDPOINTS[0];
}

async function invokeDatabricks(host, token, endpoint, messages, { maxOutputTokens, temperature }) {
  const data = await api(host, token, "/serving-endpoints/responses", {
    model: endpoint,
    input: messages,
    max_output_tokens: maxOutputTokens,
    temperature,
  });
  const text = textFromResponse(data).trim();
  if (!text) throw new Error("Databricks returned an empty article.");
  return text;
}

async function pathExists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

function outputPathForArticle(outputDir, article) {
  return path.join(outputDir, `${String(article.number).padStart(2, "0")}-${article.slug}.md`);
}

async function generateOne({ args, outline, articles, article, host, token, endpoint, concept, philosophy, session }) {
  const outputFile = outputPathForArticle(args.outputDir, article);
  if (!args.force && await pathExists(outputFile)) {
    console.log(`SKIP existing ${outputFile}`);
    updateSessionArticle(session, article, outputFile);
    if (session) await saveSession(args, session);
    return;
  }

  const references = await loadReferences(args.referencesDir, article, args);
  const generatedArticles = await loadGeneratedArticleContext(args.outputDir, articles, article, args);
  const prompt = buildPrompt({ outline, articles, article, references, generatedArticles, concept, philosophy });
  await mkdir(args.outputDir, { recursive: true });
  await mkdir(path.join(args.outputDir, "_prompts"), { recursive: true });

  const promptFile = path.join(args.outputDir, "_prompts", `${String(article.number).padStart(2, "0")}-${article.slug}.prompt.md`);
  await writeFile(promptFile, [
    "# System",
    prompt.system,
    "",
    "# User",
    prompt.user,
    "",
  ].join("\n"));

  if (args.dryRun) {
    console.log(`DRY ${String(article.number).padStart(2, "0")} ${article.slug}`);
    console.log(`Prompt: ${promptFile}`);
    console.log(`References: ${references.map((ref) => ref.name).join(", ")}`);
    console.log(`Generated context: ${generatedArticles.map((item) => `${String(item.number).padStart(2, "0")} ${item.slug}`).join(", ") || "none"}`);
    return;
  }

  console.log(`GENERATE ${String(article.number).padStart(2, "0")} ${article.slug} via ${endpoint}`);
  const articleMarkdown = await invokeDatabricks(host, token, endpoint, prompt.messages, args);
  await writeFile(outputFile, articleMarkdown.endsWith("\n") ? articleMarkdown : `${articleMarkdown}\n`);
  updateSessionArticle(session, article, outputFile);
  if (session) await saveSession(args, session);
  console.log(`WROTE ${outputFile}`);
}

async function main() {
  let args = parseArgs(process.argv.slice(2));
  const existingSession = await loadSession(args);
  args = applySessionDefaults(args, existingSession);
  const outline = JSON.parse(await readFile(args.outline, "utf8"));
  const articles = flattenArticles(outline);

  if (args.list) {
    for (const article of articles) {
      console.log(`${String(article.number).padStart(2, "0")} ${article.slug} - ${article.title}`);
    }
    return;
  }

  const concept = args.conceptFile ? (await readFile(args.conceptFile, "utf8")).trim() : args.concept;
  const philosophy = await resolveDefaultText({
    inlineText: args.philosophy,
    explicitFile: args.philosophyFile,
    defaultFile: DEFAULT_PHILOSOPHY_FILE,
  });
  const session = args.session ? buildSession(args, existingSession, { concept, philosophy }) : null;

  if (args.initSession) {
    if (!args.session) throw new Error("--init-session requires --session <name>.");
    await saveSession(args, session);
    console.log(`SESSION ${args.session}: ${sessionPath(args)}`);
    return;
  }

  const targets = args.all
    ? articles
    : articles.filter((article) => {
        if (args.targetSlug) return article.slug === args.targetSlug;
        if (args.target) return Number(article.number) === Number(args.target);
        return false;
      });

  if (targets.length === 0) {
    throw new Error("No target article selected. Use --target <number>, --target-slug <slug>, --all, or --list.");
  }

  let host = null;
  let token = null;
  let endpoint = args.endpoint || "dry-run";
  if (!args.dryRun) {
    const env = await loadEnv();
    host = process.env.DATABRICKS_HOST || env.DATABRICKS_HOST;
    token = process.env.DATABRICKS_TOKEN || env.DATABRICKS_TOKEN;
    if (!host || !token) throw new Error("DATABRICKS_HOST and DATABRICKS_TOKEN are required.");
    endpoint = await selectEndpoint(host, token, args.endpoint);
  }

  for (const article of targets) {
    await generateOne({ args, outline, articles, article, host, token, endpoint, concept, philosophy, session });
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
