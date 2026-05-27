import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const DEFAULT_INPUT_FILE = "output/pinterest/pins.json";
const DEFAULT_PINNED_LOG = "output/pinterest/pinned.json";
const DEFAULT_BOARD = "AI for Business";
const DEFAULT_IMAGE_BASE_URL = "https://ariefwara.github.io/ai-for-business/img/diagrams";

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
    method: process.env.PINTEREST_PIN_METHOD || "url",
    imageBaseUrl: process.env.PINTEREST_IMAGE_BASE_URL || DEFAULT_IMAGE_BASE_URL,
    boardId: process.env.PINTEREST_BOARD_ID || "",
    concurrency: Number(process.env.PINTEREST_PIN_CONCURRENCY || 16),
    maxRetries: Number(process.env.PINTEREST_PIN_MAX_RETRIES || 4),
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
    else if (item === "--board-id") args.boardId = argv[++i];
    else if (item === "--method") args.method = argv[++i];
    else if (item === "--image-base-url") args.imageBaseUrl = argv[++i];
    else if (item === "--concurrency") args.concurrency = Number(argv[++i]);
    else if (item === "--max-retries") args.maxRetries = Number(argv[++i]);
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
  --board-id <id>           Existing Pinterest board ID. Auto-detected when omitted.
  --method <url|upload>     url pins public image URLs; upload uses the web form. Default: url
  --image-base-url <url>    Public image URL base for url mode. Default: ${DEFAULT_IMAGE_BASE_URL}
  --concurrency <n>         Parallel PinResource/create requests for url mode. Default: 16
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
  if (!["url", "upload"].includes(args.method)) throw new Error("--method must be url or upload.");
  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) throw new Error("--concurrency must be positive.");
  if (!Number.isFinite(args.maxRetries) || args.maxRetries < 1) throw new Error("--max-retries must be positive.");
  args.concurrency = Math.floor(args.concurrency);
  args.maxRetries = Math.floor(args.maxRetries);
  args.imageBaseUrl = args.imageBaseUrl.replace(/\/+$/, "");
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

function publicImageUrl(item, args) {
  return `${args.imageBaseUrl}/${path.basename(item.imageFile)}`;
}

async function detectBoardId(page, boardName) {
  await page.goto("https://www.pinterest.com/ariefwara/ai-for-business/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(3000);
  const html = await page.content();
  const escapedName = boardName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`"name":"${escapedName}"[\\s\\S]{0,1200}?"id":"(\\d+)"`);
  const afterName = html.match(re)?.[1];
  if (afterName) return afterName;
  const beforeName = html.match(new RegExp(`"id":"(\\d+)"[\\s\\S]{0,1200}?"name":"${escapedName}"`))?.[1];
  if (beforeName) return beforeName;
  throw new Error(`Could not auto-detect board ID for ${boardName}. Pass --board-id explicitly.`);
}

async function createPinByUrl(page, item, args, boardId) {
  const imageUrl = publicImageUrl(item, args);
  for (let attempt = 1; attempt <= args.maxRetries; attempt += 1) {
    const result = await page.evaluate(
      async ({ boardId, imageUrl, item }) => {
        const csrf = document.cookie.split("; ").find((entry) => entry.startsWith("csrftoken="))?.split("=")[1] || "";
        const options = {
          board_id: boardId,
          image_url: imageUrl,
          description: item.description,
          link: item.link,
          scrape_metric: { source: "www_url_scrape" },
          method: "uploaded",
          title: item.title,
          alt_text: item.altText,
          section: null,
        };
        const body = new URLSearchParams();
        body.set("source_url", `/pin/find/?url=${encodeURIComponent(imageUrl).replace(/%20/g, "+")}`);
        body.set("data", JSON.stringify({ options, context: null }));
        body.set("_", String(Date.now()));
        const response = await fetch("/resource/PinResource/create/", {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
            "x-csrftoken": csrf,
            accept: "application/json",
          },
          body,
        });
        const text = await response.text();
        let data = null;
        try {
          data = JSON.parse(text);
        } catch {
          data = { raw: text.slice(0, 500) };
        }
        return { status: response.status, ok: response.ok, data };
      },
      { boardId, imageUrl, item },
    );

    const status = result.data?.resource_response?.status;
    const pinId = result.data?.resource_response?.data?.id;
    if (result.ok && status === "success" && pinId) return { pinId, imageUrl };
    if (attempt === args.maxRetries) {
      throw new Error(`Pinterest create failed for ${item.slug}: ${JSON.stringify(result).slice(0, 1000)}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1500 * attempt));
  }
  throw new Error(`Pinterest create failed for ${item.slug}`);
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
    if (args.method === "url") {
      const boardId = args.boardId || await detectBoardId(page, args.board);
      console.log(`BOARD ${args.board} (${boardId})`);
      await page.goto(`https://www.pinterest.com/ariefwara/ai-for-business/`, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      await page.waitForTimeout(3000);

      const results = await runPool(selected, args.concurrency, async (item) => {
        console.log(`PIN ${item.number}. ${item.slug}`);
        const created = await createPinByUrl(page, item, args, boardId);
        return {
          number: item.number,
          slug: item.slug,
          title: item.title,
          link: item.link,
          imageUrl: created.imageUrl,
          pinId: created.pinId,
          board: args.board,
          pinnedAt: new Date().toISOString(),
        };
      });

      const failures = results.filter((result) => !result.ok);
      if (failures.length) {
        for (const failure of failures) console.error(`FAILED ${failure.item.number}. ${failure.item.slug}: ${failure.error.message}`);
        throw new Error(`${failures.length} pin request(s) failed.`);
      }

      updatedPinned.push(...results.map((result) => result.value));
      await writePinnedLog(args.pinnedLog, updatedPinned.sort((a, b) => a.number - b.number));
    } else {
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
