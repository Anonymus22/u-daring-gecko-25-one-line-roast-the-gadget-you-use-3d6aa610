// One-Line Roast: The Gadget You Use Every Day
// Competition: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Writes a single original roast line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to /output/entry.txt). Deterministic: no randomness, no time,
// no environment-dependent output beyond the output directory itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My smartwatch cheers when I stand up, then silently judges me for sitting back down — a tiny gym teacher on my wrist that dies before lunch.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(
    `Roast must be between 1 and 200 characters, got ${ROAST.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
