// Copy the lessons and mock exams from the source folder (default ../math8-9)
// into content/, so the app repo carries its own copy of the material.
// Usage: node scripts/sync.mjs [path/to/math8-9]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.resolve(process.argv[2] || path.join(root, "../math8-9"));
if (!fs.existsSync(src)) {
  console.error(`Không thấy thư mục nguồn: ${src}`);
  process.exit(1);
}

let n = 0;
for (const dir of fs.readdirSync(src).filter((d) => /^\d\d-/.test(d)).sort()) {
  const from = path.join(src, dir);
  const to = path.join(root, "content", dir);
  fs.mkdirSync(to, { recursive: true });
  const mds = fs.readdirSync(from).filter((f) => f.endsWith(".md"));
  if (dir.startsWith("11-")) {
    // mock exams: copy every file as is
    for (const f of mds) fs.copyFileSync(path.join(from, f), path.join(to, f)), n++;
  } else {
    // a topic folder holds one lesson file: store it as bai-hoc.md
    const lesson = mds.find((f) => f !== "README.md");
    fs.copyFileSync(path.join(from, lesson), path.join(to, "bai-hoc.md"));
    n++;
  }
}
console.log(`Đã chép ${n} file từ ${src}`);
