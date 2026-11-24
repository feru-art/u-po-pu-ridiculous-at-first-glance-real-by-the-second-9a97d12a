// Ridiculous at First Glance, Real by the Second — V1 (local race winner, 4-0).
// One line: a practice that sounds absurd until the price of the risk is counted.
// The entry is a single sentence; the program writes it verbatim to the output file.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "We hire rain shamans for outdoor weddings, so brides pay a few hundred dollars for peace of mind instead of risking a fifty-thousand-dollar day on a forecast.";

// The guard runs before any write, so a bad line can never reach the output file.
// Deterministic: same input line, same output bytes, every run.
function guard(text: string): void {
  if (text.length < 1 || text.length > 200) throw new Error("entry must be 1-200 characters");
  if (text.trim().length === 0) throw new Error("entry must not be only whitespace");
  if (text.includes("\n")) throw new Error("entry must be a single line");
  if (text !== text.trim()) throw new Error("entry must not start or end with whitespace");
}

guard(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back: confirm what landed on disk is exactly the line above.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) throw new Error("read-back mismatch");
if (!existsSync("/output/entry.txt")) throw new Error("entry file missing");
