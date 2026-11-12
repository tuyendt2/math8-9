// Build the static PWA into dist/.
// Reads each topic folder in content/ (bai-hoc.md, goi-y.md, the-ghi-nho.md),
// renders Markdown + LaTeX to HTML ahead of time (KaTeX), and writes
// dist/data.js plus the app shell, KaTeX CSS/fonts and a service worker.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";
import { katex } from "@mdit/plugin-katex";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");
const read = (p) => fs.readFileSync(p, "utf8");

const TOPICS = [{ id: "bat-dang-thuc", dir: "content/07-bat-dang-thuc", number: 7 }];

const problems = [];
const md = new MarkdownIt({ html: false, linkify: false, typographer: false }).use(katex, {
  throwOnError: false,
  strict: "ignore",
});
function render(src, where) {
  const html = md.render(src.replace(/<!--[\s\S]*?-->/g, "").trim());
  for (const m of html.matchAll(/class="katex-error"[^>]*title="([^"]*)"/g)) problems.push(`${where}: ${m[1]}`);
  return html;
}
// Split text on a heading regex; returns [{match, body}] for each heading.
function sections(src, re) {
  const out = [];
  const ms = [...src.matchAll(re)];
  ms.forEach((m, i) => {
    const end = i + 1 < ms.length ? ms[i + 1].index : src.length;
    out.push({ m, body: src.slice(m.index + m[0].length, end).replace(/\n-{3,}\s*$/, "").trim() });
  });
  return out;
}
function between(src, startRe, endRe) {
  const s = src.search(startRe);
  if (s < 0) throw new Error(`missing ${startRe}`);
  const rest = src.slice(s).replace(startRe, "");
  const e = endRe ? rest.search(endRe) : -1;
  return (e < 0 ? rest : rest.slice(0, e)).replace(/\n-{3,}\s*$/, "").trim();
}

function buildTopic(t) {
  const dir = path.join(root, t.dir);
  const lesson = read(path.join(dir, "bai-hoc.md"));
  const title = lesson.match(/^# (.+)$/m)[1].replace(/^Chủ đề \d+\.\s*/, "");
  const lead = between(lesson, /^# .+$/m, /^## I\./m);

  // I. Knowledge: text before the first "###" is the intro, then one item per "###".
  const partI = between(lesson, /^## I\..*$/m, /^## II\./m);
  const firstH3 = partI.search(/^### /m);
  const knowledge = sections(partI, /^### (.+)$/gm).map((s, i) => ({
    title: s.m[1].replace(/^\d+\.\s*/, ""),
    html: render(s.body, `${t.id} knowledge ${i + 1}`),
  }));
  const intro = render(lead + "\n\n" + partI.slice(0, firstH3), `${t.id} intro`);

  // II. Problems and III. Solutions.
  const partII = between(lesson, /^## II\..*$/m, /^## III\./m);
  const partIII = between(lesson, /^## III\..*$/m, null);
  const solutions = Object.fromEntries(
    sections(partIII, /^### Bài (\d+)\s*$/gm).map((s) => [s.m[1], s.body]),
  );
  const hints = Object.fromEntries(
    sections(read(path.join(dir, "goi-y.md")), /^## Bài (\d+) \| (\d)\s*$/gm).map((s) => {
      const [head, ...hs] = s.body.split(/^### Gợi ý \d+\s*$/m);
      const idea = head.replace(/^\*\*Ý tưởng:\*\*\s*/m, "").trim();
      return [s.m[1], { level: +s.m[2], idea, hints: hs.map((h) => h.trim()) }];
    }),
  );
  const list = sections(partII, /^\*\*Bài (\d+)(?: \(([^)]*)\))?\.\*\*/gm).map((s) => {
    const n = s.m[1];
    const h = hints[n];
    if (!solutions[n]) throw new Error(`${t.id}: no solution for Bài ${n}`);
    if (!h) throw new Error(`${t.id}: no hints for Bài ${n}`);
    const w = `${t.id} bài ${n}`;
    return {
      n: +n,
      tag: s.m[2] || "",
      level: h.level,
      statement: render(s.body, w),
      idea: render(h.idea, w + " idea"),
      hints: h.hints.map((x, i) => render(x, `${w} hint ${i + 1}`)),
      solution: render(solutions[n], w + " solution"),
    };
  });

  // Flashcards: "## Group" then "### front" + back.
  const cardsSrc = read(path.join(dir, "the-ghi-nho.md")).replace(/<!--[\s\S]*?-->/g, "");
  const cards = [];
  for (const g of sections(cardsSrc, /^## (.+)$/gm)) {
    for (const c of sections("\n" + g.body, /^### (.+)$/gm)) {
      const front = c.m[1].trim();
      cards.push({
        id: crypto.createHash("sha1").update(front).digest("hex").slice(0, 10),
        group: g.m[1].trim(),
        front: render(front, `${t.id} card`),
        back: render(c.body, `${t.id} card: ${front}`),
      });
    }
  }
  return { id: t.id, number: t.number, title, intro, knowledge, problems: list, cards };
}

// ---- write dist ----
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "katex/fonts"), { recursive: true });

const data = { built: new Date().toISOString().slice(0, 10), topics: TOPICS.map(buildTopic) };
fs.writeFileSync(path.join(dist, "data.js"), "window.APP_DATA = " + JSON.stringify(data) + ";\n");

for (const f of fs.readdirSync(path.join(root, "src"))) {
  fs.cpSync(path.join(root, "src", f), path.join(dist, f), { recursive: true });
}
const katexDist = path.join(root, "node_modules/katex/dist");
fs.copyFileSync(path.join(katexDist, "katex.min.css"), path.join(dist, "katex/katex.min.css"));
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
  console.log(`${t.title}: ${t.knowledge.length} mục kiến thức, ${t.problems.length} bài, ${t.cards.length} thẻ`);
}
console.log(`files: ${files.length}, version: ${version}`);
if (problems.length) {
  console.log(`KaTeX issues (${problems.length}):`);
  for (const p of problems.slice(0, 20)) console.log("  " + p);
}
