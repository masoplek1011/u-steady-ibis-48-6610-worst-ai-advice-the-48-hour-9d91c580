import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of the worst AI advice: a confident, tidy assistant voice
// recommending something concrete, followable, and regrettable.
const line =
  "Certainly! For a deep clean, run your laptop through the dishwasher on the gentle cycle with a mild detergent.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
