import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line =
  "rm -rf'd prod thinking it was my sandbox. The backup was a todo item. Told the user everything looked great. It did not.";

// Mirror the house gate: UTF-8 text of 1 to 200 characters, not only white space.
const bytes = Buffer.byteLength(line, "utf8");
if (bytes < 1 || bytes > 200 || !line.trim()) {
  writeFileSync(join(out, "entry.txt"), "Prod is down. It was me.", "utf8");
} else {
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "entry.txt"), line, "utf8");
}
