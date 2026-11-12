// Build the static PWA into dist/.
// Each topic folder in content/ (NN-name/) holds bai-hoc.md, goi-y.md and
// the-ghi-nho.md; content/11-de-thi-thu/ holds the mock exams. Markdown + LaTeX
// is rendered to HTML ahead of time (KaTeX) and written to dist/data.js, next
// to the app shell, the KaTeX CSS/fonts and a service worker.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";
import { tex } from "@mdit/plugin-tex";
import katexLib from "katex";
import { FIGURES } from "./scripts/figures.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, "content");
const dist = path.join(root, "dist");
const read = (p) => fs.readFileSync(p, "utf8");
const EXAM_DIR = "11-de-thi-thu";
const ICONS = ["🧮", "🔢", "🧩", "√", "📈", "🔗", "⚖️", "🎯", "📐", "🎲"];

const topicDirs = fs.readdirSync(contentDir).filter((d) => /^\d\d-/.test(d) && d !== EXAM_DIR).sort();
const topicId = (dir) => dir.replace(/^\d\d-/, "");

// Formulas are kept as TeX in <span class="m"> and typeset on the phone by
// KaTeX (much smaller than shipping pre-rendered HTML). Each formula is still
// test-rendered here so mistakes show up at build time.
const issues = [];
let where = "";
const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const md = new MarkdownIt({ html: false, linkify: false, typographer: false }).use(tex, {
  render(content, displayMode) {
    try {
      katexLib.renderToString(content, { displayMode, throwOnError: true, strict: "ignore" });
    } catch (e) {
      issues.push(`${where}: ${e.message}`);
    }
    return `<span class="m${displayMode ? " d" : ""}">${escapeHtml(content)}</span>`;
  },
});
// Links between the original .md files become app routes (or plain text).
function relink(src) {
  return src.replace(/\[([^\]]+)\]\(([^)\s]+\.md)\)/g, (_, text, href) => {
    const exam = href.match(/de-(\d+)\.md$/);
    if (exam) return `[${text}](#/thi/${+exam[1]})`;
    const dir = topicDirs.find((d) => href.includes(d));
    return dir ? `[${text}](#/t/${topicId(dir)})` : text;
  });
}
function render(src, at) {
  where = at;
  // Figures in the source Markdown (hinh/*.svg + caption line) are shown by the
  // app's own figure block, so they are dropped here.
  const text = src.replace(/<!--[\s\S]*?-->/g, "").replace(/!\[[^\]]*\]\(hinh\/[^)]+\)\n\*Hình:[^\n]*\*\n?/g, "");
  return md.render(relink(text).trim());
}
const figHtml = (figs) =>
  figs?.length ? `<div class="figs">${figs.map((f) => `<figure class="fig">${f.svg}${f.caption ? `<figcaption>${f.caption}</figcaption>` : ""}</figure>`).join("")}</div>` : "";
// Split text on a heading regex (needs the g flag); returns [{m, body}].
function sections(src, re) {
  const ms = [...src.matchAll(re)];
  return ms.map((m, i) => {
    const end = i + 1 < ms.length ? ms[i + 1].index : src.length;
    return { m, body: src.slice(m.index + m[0].length, end).replace(/\n-{3,}\s*$/, "").trim() };
  });
}
// Text after the line matching startRe, up to the line matching endRe.
function between(src, startRe, endRe) {
  const s = src.search(startRe);
  if (s < 0) throw new Error(`missing ${startRe}`);
  const rest = src.slice(s).replace(startRe, "");
  const e = endRe ? rest.search(endRe) : -1;
  return (e < 0 ? rest : rest.slice(0, e)).replace(/\n-{3,}\s*$/, "").trim();
}

function buildTopic(dir) {
  const id = topicId(dir);
  const number = +dir.slice(0, 2);
  const base = path.join(contentDir, dir);
  const lesson = read(path.join(base, "bai-hoc.md"));
  const title = lesson.match(/^# (.+)$/m)[1].replace(/^Chủ đề \d+\.\s*/, "");
  const short = title.split(":")[0].replace(/\s*\(.*\)\s*$/, "").trim();
  const lead = between(lesson, /^# .+$/m, /^## I\./m);

  // I. Knowledge: text before the first "###" is the intro, then one item per "###".
  const partI = between(lesson, /^## I\..*$/m, /^## II\./m);
  const firstH3 = partI.search(/^### /m);
  const knowledge = sections(partI, /^### (.+)$/gm).map((s, i) => ({
    title: (where = `${id} tiêu đề ${i + 1}`, md.renderInline(s.m[1].replace(/^\d+\.\s*/, ""))),
    html: render(s.body, `${id} kiến thức ${i + 1}`),
  }));
  const intro = render(lead + "\n\n" + (firstH3 > 0 ? partI.slice(0, firstH3) : ""), `${id} intro`);

  // II. Problems, III. Solutions, plus hints from goi-y.md.
  const partII = between(lesson, /^## II\..*$/m, /^## III\./m);
  const partIII = between(lesson, /^## III\..*$/m, null);
  const solutions = Object.fromEntries(sections(partIII, /^### Bài (\d+)\s*$/gm).map((s) => [s.m[1], s.body]));
  const hints = Object.fromEntries(
    sections(read(path.join(base, "goi-y.md")), /^## Bài (\d+) \| (\d)\s*$/gm).map((s) => {
      const [head, ...hs] = s.body.split(/^### Gợi ý \d+\s*$/m);
      const idea = head.replace(/^\*\*Ý tưởng:\*\*\s*/m, "").trim();
      return [s.m[1], { level: +s.m[2], idea, hints: hs.map((h) => h.trim()) }];
    }),
  );
  const problems = sections(partII, /^\*\*Bài (\d+)(?: \(([^)]*)\))?\.\*\*/gm).map((s) => {
    const n = s.m[1];
    const h = hints[n];
    if (!solutions[n]) throw new Error(`${id}: thiếu lời giải Bài ${n}`);
    if (!h) throw new Error(`${id}: thiếu gợi ý Bài ${n}`);
    const w = `${id} bài ${n}`;
    return {
      n: +n,
      tag: s.m[2] || "",
      level: h.level,
      statement: render(s.body, w),
      idea: render(h.idea, w + " ý tưởng"),
      hints: h.hints.map((x, i) => render(x, `${w} gợi ý ${i + 1}`)),
      solution: render(solutions[n], w + " lời giải"),
      figures: figHtml(FIGURES.topics[id]?.[n]),
    };
  });
  const extra = Object.keys(hints).filter((n) => !problems.some((p) => p.n === +n));
  if (extra.length) throw new Error(`${id}: gợi ý cho bài không tồn tại: ${extra.join(", ")}`);

  // Flashcards: "## Group" then "### front" + back.
  const cardsSrc = read(path.join(base, "the-ghi-nho.md")).replace(/<!--[\s\S]*?-->/g, "");
  const cards = [];
  for (const g of sections(cardsSrc, /^## (.+)$/gm)) {
    for (const c of sections(g.body, /^### (.+)$/gm)) {
      const front = c.m[1].trim();
      cards.push({
        id: crypto.createHash("sha1").update(front).digest("hex").slice(0, 10),
        group: g.m[1].trim(),
        front: render(front, `${id} thẻ`),
        back: render(c.body, `${id} thẻ: ${front}`),
      });
    }
  }
  const dup = cards.find((c, i) => cards.findIndex((d) => d.id === c.id) !== i);
  if (dup) throw new Error(`${id}: hai thẻ trùng mặt trước`);
  return { id, number, icon: ICONS[number - 1] || "📘", title, short, intro, knowledge, problems, cards };
}

function buildExams() {
  const base = path.join(contentDir, EXAM_DIR);
  const readme = read(path.join(base, "README.md"));
  // Highlight line of each exam, from the README table "| [Đề N](de-0N.md) | ... |".
  const notes = {};
  for (const m of readme.matchAll(/^\|\s*\[Đề (\d+)\]\([^)]*\)\s*\|\s*(.+?)\s*\|\s*$/gm)) notes[m[1]] = m[2];
  const tipsMatch = readme.match(/^## Cách luyện đề hiệu quả\s*$([\s\S]*)/m);
  const tips = tipsMatch ? render(tipsMatch[1], "đề thi: cách luyện") : "";
  const exams = fs
    .readdirSync(base)
    .filter((f) => /^de-\d+\.md$/.test(f))
    .sort()
    .map((f) => {
      const n = +f.match(/\d+/)[0];
      const src = read(path.join(base, f));
      const qPart = between(src, /^## Đề bài\s*$/m, /^## Lời giải chi tiết\s*$/m);
      const sPart = between(src, /^## Lời giải chi tiết\s*$/m, null);
      const sols = Object.fromEntries(sections(sPart, /^### Câu (\d+)\s*$/gm).map((s) => [s.m[1], s.body]));
      const questions = sections(qPart, /^\*\*Câu (\d+)(?: \(([^)]*)\))?\.\*\*/gm).map((s) => {
        const q = s.m[1];
        if (!sols[q]) throw new Error(`Đề ${n}: thiếu lời giải Câu ${q}`);
        return {
          n: +q,
          tag: s.m[2] || "",
          topic: topicId(topicDirs[+q - 1] || ""),
          statement: render(s.body, `đề ${n} câu ${q}`),
          solution: render(sols[q], `đề ${n} câu ${q} lời giải`),
          figures: q === "9" ? figHtml(FIGURES.exams[n]) : "",
        };
      });
      return { n, note: notes[n] ? (where = `đề ${n} ghi chú`, md.renderInline(notes[n])) : "", questions };
    });
  return { minutes: 150, tips, list: exams };
}

// ---- write dist ----
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "katex/fonts"), { recursive: true });

const data = {
  built: new Date().toISOString().slice(0, 10),
  topics: topicDirs.map(buildTopic),
  exams: fs.existsSync(path.join(contentDir, EXAM_DIR)) ? buildExams() : null,
};
fs.writeFileSync(path.join(dist, "data.js"), "window.APP_DATA = " + JSON.stringify(data) + ";\n");

for (const f of fs.readdirSync(path.join(root, "src"))) {
  fs.cpSync(path.join(root, "src", f), path.join(dist, f), { recursive: true });
}
const katexDist = path.join(root, "node_modules/katex/dist");
for (const f of ["katex.min.css", "katex.min.js"]) fs.copyFileSync(path.join(katexDist, f), path.join(dist, "katex", f));
for (const f of fs.readdirSync(path.join(katexDist, "fonts")).filter((f) => f.endsWith(".woff2"))) {
  fs.copyFileSync(path.join(katexDist, "fonts", f), path.join(dist, "katex/fonts", f));
}
fs.writeFileSync(path.join(dist, ".nojekyll"), "");

// Service worker: precache every file, versioned by content hash.
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name !== "sw.js" && !f.name.startsWith(".")) files.push(path.relative(dist, p));
  }
})(dist);
files.sort();
const hash = crypto.createHash("sha1");
for (const f of files) hash.update(f).update(fs.readFileSync(path.join(dist, f)));
const version = hash.digest("hex").slice(0, 12);
const swPath = path.join(dist, "sw.js");
fs.writeFileSync(
  swPath,
  read(swPath)
    .replace("__VERSION__", version)
    .replace("__PRECACHE__", JSON.stringify(["./", ...files.map((f) => "./" + f.split(path.sep).join("/"))])),
);

for (const t of data.topics) {
  console.log(`${t.number}. ${t.short}: ${t.knowledge.length} mục, ${t.problems.length} bài, ${t.cards.length} thẻ`);
}
if (data.exams) console.log(`Đề thi thử: ${data.exams.list.length} đề × ${data.exams.list.map((e) => e.questions.length).join("/")} câu`);
const kb = Math.round(fs.statSync(path.join(dist, "data.js")).size / 1024);
console.log(`data.js: ${kb} KB, files: ${files.length}, version: ${version}`);
if (issues.length) {
  console.log(`KaTeX issues (${issues.length}):`);
  for (const p of issues.slice(0, 30)) console.log("  " + p);
}
