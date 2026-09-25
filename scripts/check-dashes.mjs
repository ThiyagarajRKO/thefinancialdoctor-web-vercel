import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// Fails if any source file contains an em dash or en dash (U+2014, U+2013).
const bad = /[\u2013\u2014]/;
const hits = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else readFileSync(p, "utf8").split("\n").forEach((line, i) => { if (bad.test(line)) hits.push(`${p}:${i + 1}`); });
  }
};
walk("src");
if (hits.length) { console.error("Dashes found:\n" + hits.join("\n")); process.exit(1); }
console.log("No em or en dashes found in src/.");
