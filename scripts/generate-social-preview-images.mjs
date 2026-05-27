import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const SOURCE_DIR = "static/img/diagrams";
const OUTPUT_DIR = "static/img/social";
const WIDTH = 1200;
const HEIGHT = 630;

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const files = (await readdir(SOURCE_DIR))
    .filter((file) => file.endsWith(".png"))
    .sort();

  for (const file of files) {
    const source = path.join(SOURCE_DIR, file);
    const output = path.join(OUTPUT_DIR, file.replace(/\.png$/, ".jpg"));

    await execFileAsync("convert", [
      source,
      "-auto-orient",
      "-resize",
      `${WIDTH}x${HEIGHT}`,
      "-background",
      "white",
      "-gravity",
      "center",
      "-extent",
      `${WIDTH}x${HEIGHT}`,
      "-strip",
      "-quality",
      "82",
      output,
    ]);

    console.log(`WROTE ${output}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
