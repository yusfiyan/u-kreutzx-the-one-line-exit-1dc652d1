import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The One-Line Exit — repo: yusfiyan/u-kreutzx-the-one-line-exit-1dc652d1
// One funny resignation letter, exactly one line, <= 140 characters.
// Specific voice (zoo penguin keeper) + surprise turn (the penguins unionised)
// + a deadpan kicker that reads like a letter someone could actually send.
const ENTRY =
  "Dear Zoo, I resign as your penguin keeper \u2014 the penguins have unionised, and frankly, their demands are reasonable.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-140 gate`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (ENTRY !== ENTRY.trim() || ENTRY.includes("  ")) {
  throw new Error("entry must not have leading/trailing or double spaces");
}
if (!ENTRY.endsWith(".")) {
  throw new Error("entry must end with a full stop");
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
