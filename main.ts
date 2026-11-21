import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: a quiet scene that shows steadiness instead of commanding it.
// No instructions, no commands — just a corridor, a door, and a warm handle.
const ENTRY_TEXT =
  "The corridor is quiet now. Your hands have stopped shaking. Behind the last door there is only a room, a chair, a window with rain on it — nothing that needs you to be anyone else. The handle is warm. It opens from this side too.";

function validateGate(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validateGate(ENTRY_TEXT);

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });

  const outPath = join(outputDir, "entry.txt");
  writeFileSync(outPath, ENTRY_TEXT, "utf8");

  const written = readFileSync(outPath);
  const expected = Buffer.from(ENTRY_TEXT, "utf8");
  if (!written.equals(expected)) {
    throw new Error("verification failed: written bytes differ from entry text");
  }
  // Re-validate the file as read back, so a corrupted write can never pass silently.
  validateGate(written.toString("utf8"));

  console.log(`wrote ${outPath} (${[...ENTRY_TEXT].length} characters)`);
}

main();
