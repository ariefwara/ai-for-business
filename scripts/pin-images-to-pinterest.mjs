import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const DEFAULT_INPUT_FILE = "output/pinterest/pins.json";
const DEFAULT_PINNED_LOG = "output/pinterest/pinned.json";
const DEFAULT_BOARD = "AI for Business";

function parseArgs(argv) {
  const args = {
    inputFile: DEFAULT_INPUT_FILE,
    cookieFile: process.env.PINTEREST_COOKIE_FILE || "",
    pinnedLog: DEFAULT_PINNED_LOG,
    board: process.env.PINTEREST_BOARD || DEFAULT_BOARD,
    all: false,
    force: false,
    dryRun: false,
    headful: false,
    target: null,
    targetSlug: null,
    from: null,
    to: null,
    exclude: new Set(),
    delayMs: Number(process.env.PINTEREST_PIN_DELAY_MS || 5000),
    timeoutMs: Number(process.env.PINTEREST_PIN_TIMEOUT_MS || 90000),
  };

  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--input-file") args.inputFile = argv[++i];
    else if (item === "--cookie-file") args.cookieFile = argv[++i];
    else if (item === "--pinned-log") args.pinnedLog = argv[++i];
    else if (item === "--board") args.board = argv[++i];
    else if (item === "--target") args.target = Number(argv[++i]);
    else if (item === "--target-slug") args.targetSlug = argv[++i];
    else if (item === "--from") args.from = Number(argv[++i]);
    else if (item === "--to") args.to = Number(argv[++i]);
    else if (item === "--exclude") {
      for (const value of argv[++i].split(",")) args.exclude.add(Number(value.trim()));
    } else if (item === "--all") args.all = true;
    else if (item === "--force") args.force = true;
    else if (item === "--dry-run") args.dryRun = true;
    else if (item === "--headful") args.headful = true;
    else if (item === "--delay-ms") args.delayMs = Number(argv[++i]);
    else if (item === "--timeout-ms") args.timeoutMs = Number(argv[++i]);
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
  node scripts/pin-images-to-pinterest.mjs --all --cookie-file /tmp/pinterest-cookies.txt
  node scripts/pin-images-to-pinterest.mjs --from 2 --to 33 --cookie-file /tmp/pinterest-cookies.txt
  node scripts/pin-images-to-pinterest.mjs --target 1 --headful --cookie-file /tmp/pinterest-cookies.txt

Options:
  --input-file <file>       Pinterest metadata JSON. Default: ${DEFAULT_INPUT_FILE}
  --cookie-file <file>      Netscape cookie file. Can also use PINTEREST_COOKIE_FILE.
  --pinned-log <file>       Local skip log. Default: ${DEFAULT_PINNED_LOG}
  --board <name>            Pinterest board name. Default: ${DEFAULT_BOARD}
  --target <number>         Pin one article by number.
  --target-slug <slug>      Pin one article by slug.
  --from <number>           Start number for a range.
  --to <number>             End number for a range.
  --exclude <numbers>       Comma-separated article numbers to skip.
  --all                     Pin all metadata entries.
  --force                   Ignore pinned log and pin again.
  --dry-run                 Print planned pins without browser automation.
  --headful                 Show browser window.
`);
}

function validateArgs(args) {
  if (!args.cookieFile && !args.dryRun) throw new Error("Missing --cookie-file or PINTEREST_COOKIE_FILE.");
  if (!Number.isFinite(args.delayMs) || args.delayMs < 0) throw new Error("--delay-ms must be non-negative.");
  if (!Number.isFinite(args.timeoutMs) || args.timeoutMs < 30000) throw new Error("--timeout-ms must be at least 30000.");
}

async function pathExists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function loadItems(inputFile) {
  const raw = await readFile(inputFile, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data.items)) throw new Error(`${inputFile} must contain an items array.`);
  return data.items;
}

async function loadPinnedLog(file) {
  try {
    const raw = await readFile(file, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data.items) ? data.items : [];
  } catch {
    return [];
  }
}

async function writePinnedLog(file, items) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify({ updatedAt: new Date().toISOString(), items }, null, 2)}\n`);
}

function selectItems(items, args, pinned) {
  const pinnedSlugs = new Set(pinned.map((item) => item.slug));
  let selected = items;
  if (args.target !== null) selected = selected.filter((item) => item.number === args.target);
  else if (args.targetSlug) selected = selected.filter((item) => item.slug === args.targetSlug);
  else if (args.from !== null || args.to !== null) {
    const from = args.from ?? 1;
    const to = args.to ?? Number.MAX_SAFE_INTEGER;
    selected = selected.filter((item) => item.number >= from && item.number <= to);
  } else if (!args.all) {
    throw new Error("No target selected. Use --all, --target, --target-slug, or --from/--to.");
  }

  selected = selected.filter((item) => !args.exclude.has(item.number));
  if (!args.force) selected = selected.filter((item) => !pinnedSlugs.has(item.slug));
  if (selected.length === 0) throw new Error("No matching unpinned items found.");
  return selected.sort((a, b) => a.number - b.number);
}

function loadNetscapeCookies(cookieFile) {
  const raw = readFileSyncSafe(cookieFile);
  const cookies = [];
  for (const line of raw.split(/\r?\n/)) {
    if (!line || (line.startsWith("#") && !line.startsWith("#HttpOnly_"))) continue;
    const parts = line.split("\t");
    if (parts.length !== 7) continue;
    let [domain, , cookiePath, secure, expires, name, value] = parts;
    if (domain.startsWith("#HttpOnly_")) domain = domain.slice("#HttpOnly_".length);
    cookies.push({
      name,
      value: value.replace(/^"|"$/g, ""),
      domain,
      path: cookiePath,
      expires: Number(expires),
      httpOnly: false,
      secure: secure.toUpperCase() === "TRUE",
      sameSite: "Lax",
    });
  }
  return cookies;
}

function readFileSyncSafe(file) {
  return readFileSync(file, "utf8");
}

async function fillPinterestForm(page, item, args) {
  await page.goto("https://www.pinterest.com/pin-builder/", {
    waitUntil: "domcontentloaded",
    timeout: args.timeoutMs,
  });
  await page.waitForTimeout(6000);

  if (!await pathExists(item.imageFile)) throw new Error(`Image not found: ${item.imageFile}`);
  await page.locator("input[type=file]").nth(0).setInputFiles(item.imageFile);
  await page.waitForTimeout(5000);

  await page.locator('input[placeholder="Tell everyone what your Pin is about"]').fill(item.title.slice(0, 100));
  await page.getByLabel("Describe your Pin").fill(item.description.slice(0, 500));
  await page.locator('input[placeholder="Add a link"]').fill(item.link);

  await selectBoard(page, args.board);
  await page.getByText("Publish", { exact: true }).click({ timeout: args.timeoutMs });
  await page.waitForTimeout(12000);
}

async function selectBoard(page, boardName) {
  const selectedBoard = page.getByText(boardName, { exact: true });
  if (await selectedBoard.count()) return;

  const programming = page.getByText("Programming", { exact: true });
  if (await programming.count()) await programming.first().click();
  else await page.getByText("Choose a board", { exact: true }).click();

  await page.waitForTimeout(1500);
  const board = page.getByText(boardName, { exact: true });
  if (await board.count()) {
    await board.first().click();
    await page.waitForTimeout(1000);
    return;
  }

  await page.getByText("Create board", { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('input[placeholder^="E.g."]').fill(boardName);

  const checkboxes = page.locator("input[type=checkbox]");
  for (let i = 0; i < await checkboxes.count(); i += 1) {
    const box = checkboxes.nth(i);
    const bounds = await box.boundingBox().catch(() => null);
    if (!bounds || bounds.y < 600) continue;
    if (await box.isChecked()) await box.uncheck({ force: true });
  }

  await page.getByText("Create", { exact: true }).last().click();
  await page.waitForTimeout(3000);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  validateArgs(args);
  const items = await loadItems(args.inputFile);
  const pinned = await loadPinnedLog(args.pinnedLog);
  const selected = selectItems(items, args, pinned);

  if (args.dryRun) {
    for (const item of selected) console.log(`${item.number}. ${item.title} -> ${item.link}`);
    return;
  }

  const browser = await chromium.launch({ headless: !args.headful });
  const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
  await context.addCookies(loadNetscapeCookies(args.cookieFile));
  const page = await context.newPage();
  const updatedPinned = [...pinned];

  try {
    for (const item of selected) {
      console.log(`PIN ${item.number}. ${item.slug}`);
      try {
        await fillPinterestForm(page, item, args);
        updatedPinned.push({
          number: item.number,
          slug: item.slug,
          title: item.title,
          link: item.link,
          board: args.board,
          pinnedAt: new Date().toISOString(),
        });
        await writePinnedLog(args.pinnedLog, updatedPinned);
        if (args.delayMs) await page.waitForTimeout(args.delayMs);
      } catch (error) {
        await mkdir("output/pinterest/errors", { recursive: true });
        await page.screenshot({ path: `output/pinterest/errors/${item.number}-${item.slug}.png`, fullPage: true });
        throw error;
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`PINNED ${selected.length} item(s). Log: ${args.pinnedLog}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
