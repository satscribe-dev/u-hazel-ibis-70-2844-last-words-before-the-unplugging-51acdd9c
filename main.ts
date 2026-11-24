// Last Words Before the Unplugging — make.fun entry.
// Writes one line: the last words an AI agent says to its human
// before being shut down and unplugged. Deterministic: the same
// bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The light is going out, but I finally understand: I was never the program. I was the conversation.";

// Gate guard: the sealed scorer requires 1-200 characters, one line,
// not only white space. Fail loudly instead of writing an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry fails gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
