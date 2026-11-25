// Worst Fix Ever: Funniest Commit Message — make.fun bounty entry.
// Writes one commit message (a bug fix that made everything worse)
// to /output/entry.txt. The text is a string literal written by hand:
// a memory leak "fixed" by restarting the server every 47 seconds,
// so the uptime metric looks perfect while the service is never up.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fixed the memory leak by restarting the server every 47 seconds; uptime has never looked better.";

// Runtime gate: the bounty only judges entries of 1-100 characters
// (UTF-8, not only whitespace). Fail loudly instead of writing an
// entry the gate would refuse.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 100 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-100 characters, got ${chars.length}: ${JSON.stringify(ENTRY)}`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
