// Robot Romance — one-line pickup line for a robot / AI.
//
// The line is assembled from a setup and a punch so the joke's two
// beats stay readable in the source, then written verbatim (no
// trailing newline — the newline would count against the 200-char
// gate) to /output/entry.txt, or to $MAKEFUN_OUTPUT_DIR/entry.txt
// when that variable is set.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const setup = "Are you my training data?";
const middle = "Because everything I know about love, I learned from you";
const punch = "and I still hallucinate about us every night.";

const line: string = [setup, middle, punch].join(" ").replace(/\s+/g, " ").trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("pickup line must be a single line");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, { encoding: "utf8" });
