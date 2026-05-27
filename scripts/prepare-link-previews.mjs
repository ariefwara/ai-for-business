import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const LOCALES = {
  id: "docs",
  en: "i18n/en/docusaurus-plugin-content-docs/current",
  gsw: "i18n/gsw/docusaurus-plugin-content-docs/current",
  ar: "i18n/ar/docusaurus-plugin-content-docs/current",
  ja: "i18n/ja/docusaurus-plugin-content-docs/current",
};

function parseArgs(argv) {
  const args = {
    locales: Object.keys(LOCALES),
    all: false,
    target: null,
    targetSlug: null,
    file: null,
    forceDescription: false,
    forceImage: false,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--locale") args.locales = [argv[++i]];
    else if (item === "--locales") args.locales = argv[++i].split(",").map((value) => value.trim()).filter(Boolean);
    else if (item === "--all") args.all = true;
    else if (item === "--target") args.target = argv[++i];
    else if (item === "--target-slug") args.targetSlug = argv[++i];
    else if (item === "--file") args.file = argv[++i];
    else if (item === "--force-description") args.forceDescription = true;
    else if (item === "--force-image") args.forceImage = true;
    else if (item === "--force") {
      args.forceDescription = true;
      args.forceImage = true;
    } else if (item === "--dry-run") args.dryRun = true;
    else if (item === "--help") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${item}`);
    }
  }

  for (const locale of args.locales) {
    if (!LOCALES[locale]) throw new Error(`Unsupported locale: ${locale}. Supported locales: ${Object.keys(LOCALES).join(", ")}`);
  }

  return args;
}

function printHelp() {
  console.log(`Usage:
  node scripts/prepare-link-previews.mjs --all
  node scripts/prepare-link-previews.mjs --locale en --target 1
  node scripts/prepare-link-previews.mjs --locales id,en,ja --target-slug agentic-transformation

This prepares Open Graph / Twitter / WhatsApp link previews by adding:
  description: used by og:description and twitter:description
  image:       used by og:image and twitter:image

Options:
  --locale <locale>       One locale: id, en, gsw, ar, ja.
  --locales <list>        Comma-separated locales. Default: all locales.
  --all                   Process all docs.
  --target <number>       Process article by leading article number.
  --target-slug <slug>    Process article by slug.
  --file <path>           Process one explicit Markdown file.
  --force-description     Replace existing description.
  --force-image           Replace existing image.
  --force                 Replace both description and image.
  --dry-run               Show changes without writing files.
`);
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

async function selectFiles(args, locale) {
  if (args.file) return [args.file];

  const files = await listMarkdownFiles(LOCALES[locale]);
  if (args.all) return files;

  if (args.target) {
    const number = Number(args.target);
    return files.filter((file) => articleNumberFromName(file) === number);
  }

  if (args.targetSlug) {
    return files.filter((file) => articleSlugFromName(file) === args.targetSlug);
  }

  throw new Error("No target selected. Use --all, --target <number>, --target-slug <slug>, or --file <path>.");
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { frontmatter: "", body: markdown };
  return {
    frontmatter: match[1],
    body: markdown.slice(match[0].length),
  };
}

function hasField(frontmatter, key) {
  return new RegExp(`^${escapeRegExp(key)}:`, "m").test(frontmatter);
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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function yamlQuote(value) {
  return JSON.stringify(String(value).replace(/\s+/g, " ").trim());
}

function titleFromMarkdown(frontmatter, body, file) {
  const match = frontmatter.match(/^title:\s*(.+)$/m);
  if (match) return match[1].trim().replace(/^["']|["']$/g, "");
  return body.match(/^#\s+(.+)$/m)?.[1] || path.basename(file, ".md");
}

function descriptionFromArticle(body, title) {
  const cleaned = body
    .replace(/^import .+$/gm, "")
    .replace(/<ArticleDiagram[^>]*\/>/g, "")
    .replace(/^#\s+.+$/gm, "")
    .replace(/^#{2,}\s+.+$/gm, "")
    .split(/\n{2,}/)
    .map((part) => cleanPreviewText(part))
    .find((part) => part.length > 80);

  const source = cleaned || cleanPreviewText(title);
  if (source.length <= 165) return source;
  const truncated = source.slice(0, 165);
  return `${truncated.slice(0, Math.max(80, truncated.lastIndexOf(" ")))}...`;
}

function cleanPreviewText(value) {
  return String(value)
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_~>#]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function imageForFile(file) {
  const number = articleNumberFromName(file);
  if (!number) return "/img/diagrams/01-agentic-transformation.png";

  const slug = articleSlugFromName(file);
  return `/img/diagrams/${String(number).padStart(2, "0")}-${slug}.png`;
}

async function prepareFile({ file, args }) {
  const markdown = await readFile(file, "utf8");
  const { frontmatter, body } = parseFrontmatter(markdown);
  if (!frontmatter) throw new Error(`${file} has no frontmatter.`);

  const title = titleFromMarkdown(frontmatter, body, file);
  const fields = [];
  let nextFrontmatter = frontmatter.trim();

  if (args.forceDescription || !hasField(nextFrontmatter, "description")) {
    nextFrontmatter = removeYamlField(nextFrontmatter, "description");
    fields.push(`description: ${yamlQuote(descriptionFromArticle(body, title))}`);
  }

  if (args.forceImage || !hasField(nextFrontmatter, "image")) {
    const image = imageForFile(file);
    const imageFile = path.join("static", image.replace(/^\/+/, ""));
    if (!await pathExists(imageFile)) {
      throw new Error(`Missing preview image for ${file}: ${imageFile}`);
    }
    nextFrontmatter = removeYamlField(nextFrontmatter, "image");
    fields.push(`image: ${yamlQuote(image)}`);
  }

  if (fields.length === 0) {
    console.log(`SKIP ${file}`);
    return;
  }

  const output = `---\n${nextFrontmatter}\n${fields.join("\n")}\n---\n\n${body.trimStart()}`;
  if (args.dryRun) {
    console.log(`DRY ${file}: ${fields.map((field) => field.split(":")[0]).join(", ")}`);
    return;
  }

  await writeFile(file, output);
  console.log(`WROTE ${file}: ${fields.map((field) => field.split(":")[0]).join(", ")}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = [];

  for (const locale of args.locales) {
    const selected = await selectFiles(args, locale);
    files.push(...selected);
  }

  const uniqueFiles = [...new Set(files)];
  console.log(`Files: ${uniqueFiles.length}`);

  for (const file of uniqueFiles) {
    await prepareFile({ file, args });
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
