import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
const hits = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f);
  if (statSync(p).isDirectory()) walk(p);
  else if (/\.(tsx?|css|json)$/.test(f)) readFileSync(p, "utf8").split("\n").forEach((l, i) => { if (l.includes("[[")) hits.push(`${p}:${i + 1} ${l.trim()}`); }); } };
["app", "lib"].forEach(walk);
if (hits.length) {
  console.log(`${hits.length} Platzhalter offen:\n` + hits.join("\n"));
  if (process.env.VERCEL_ENV === "production" || process.env.STRICT === "1") process.exit(1);
}
