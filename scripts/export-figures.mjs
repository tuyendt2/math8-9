// Write the geometry figures as standalone SVG files into the source material
// (default ../math8-9) and reference them from the Markdown solutions.
// Safe to run again: files are overwritten and references are not duplicated.
// Usage: node scripts/export-figures.mjs [path/to/math8-9]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FIGURES } from "./figures.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.resolve(process.argv[2] || path.join(root, "../math8-9"));

// Standalone files cannot use the app's CSS, so the styles go inside the SVG.
const STYLE =
  "<style>.thin{stroke-width:1.3}.aux{stroke-dasharray:5 4;stroke-width:1.2;opacity:.75}" +
  ".hi{stroke:#0b3d91;stroke-width:2.2}.mark{stroke-width:1.1}" +
  ".dot.hollow{fill:#fff;stroke:#1a1a1a;stroke-width:1.4}.lbl.small{font-size:13px;font-style:normal}</style>";
const standalone = (svg) =>
  svg.replace('<svg class="geo"', `<svg xmlns="http://www.w3.org/2000/svg" class="geo" style="color:#1a1a1a;background:#fff"`)
    .replace(/(<svg[^>]*>)/, `$1${STYLE}<rect width="100%" height="100%" fill="#fff"/>`);

// Insert the figure block right after a solution heading, unless already there.
function insertAfterHeading(md, headingRe, block, file) {
  const m = md.match(headingRe);
  if (!m) throw new Error(`Không thấy tiêu đề ${headingRe} trong ${file}`);
  const at = m.index + m[0].length;
  const firstRef = block.match(/\]\(([^)]+)\)/)[1];
  if (md.slice(at, at + 400).includes(firstRef)) return md;
  return md.slice(0, at) + "\n" + block + md.slice(at);
}
const blockFor = (figs, files) =>
  figs.map((f, i) => `![${f.caption}](${files[i]})\n*Hình: ${f.caption}.*\n`).join("\n");

let written = 0;
function exportGroup(dir, mdFile, entries) {
  const folder = path.join(src, dir);
  fs.mkdirSync(path.join(folder, "hinh"), { recursive: true });
  for (const { figs, names, mdPath, headingRe } of entries) {
    const files = names.map((n) => `hinh/${n}.svg`);
    figs.forEach((f, i) => { fs.writeFileSync(path.join(folder, files[i]), standalone(f.svg) + "\n"); written++; });
    const p = path.join(folder, mdPath || mdFile);
    fs.writeFileSync(p, insertAfterHeading(fs.readFileSync(p, "utf8"), headingRe, blockFor(figs, files), p));
  }
}

const geo = FIGURES.topics["hinh-hoc-phang"];
exportGroup("09-hinh-hoc-phang", "hinh-hoc-phang.md",
  Object.entries(geo).map(([n, figs]) => ({ figs, names: figs.map((_, i) => `bai-${n}${figs.length > 1 ? "abc"[i] : ""}`), headingRe: new RegExp(`^### Bài ${n}\\s*$`, "m") })));
exportGroup("11-de-thi-thu", null,
  Object.entries(FIGURES.exams).map(([n, figs]) => {
    const nn = String(n).padStart(2, "0");
    return { figs, names: figs.map((_, i) => `de-${nn}${figs.length > 1 ? "abc"[i] : ""}`), mdPath: `de-${nn}.md`, headingRe: /^### Câu 9\s*$/m };
  }));
console.log(`Đã ghi ${written} hình SVG vào ${src}`);
