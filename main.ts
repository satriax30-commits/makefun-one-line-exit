// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes exactly one funny one-line resignation letter to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no environment secrets.
// Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I hereby resign as your escape room designer \u2014 I built twelve rooms nobody could escape, then realised the thirteenth was this job.";

// The joke: a specific voice (escape room designer) with a surprise turn —
// the designer who builds inescapable rooms discovers he built one more:
// the job itself. It reads as a real sendable resignation letter.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
