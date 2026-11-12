// Geometry figures for the plane-geometry topic and question 9 of each mock exam.
// Points are computed from the construction in the problem (intersections,
// feet of altitudes, tangents, ...), so every figure is to scale.
// Exports FIGURES = { topics: { [topicId]: { [problem]: Figure[] } }, exams: { [exam]: Figure[] } }
// where Figure = { caption, svg }.

// ---------- vector helpers ----------
const P = (x, y) => ({ x, y });
const add = (a, b) => P(a.x + b.x, a.y + b.y);
const sub = (a, b) => P(a.x - b.x, a.y - b.y);
const mul = (a, k) => P(a.x * k, a.y * k);
const dot = (a, b) => a.x * b.x + a.y * b.y;
const cross = (a, b) => a.x * b.y - a.y * b.x;
const len = (a) => Math.hypot(a.x, a.y);
const dist = (a, b) => len(sub(a, b));
const unit = (a) => mul(a, 1 / len(a));
const lerp = (a, b, t) => add(a, mul(sub(b, a), t));
const mid = (a, b) => lerp(a, b, 0.5);
const rot = (v, deg) => {
  const r = (deg * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
  return P(v.x * c - v.y * s, v.x * s + v.y * c);
};
const onCircle = (o, r, deg) => add(o, P(r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)));
const reflectPt = (p, o) => sub(mul(o, 2), p);
function lineInter(a, b, c, d) {
  const r = sub(b, a), s = sub(d, c);
  const t = cross(sub(c, a), s) / cross(r, s);
  return add(a, mul(r, t));
}
const foot = (p, a, b) => { const d = sub(b, a); return add(a, mul(d, dot(sub(p, a), d) / dot(d, d))); };
function circumcenter(a, b, c) {
  const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
  const a2 = dot(a, a), b2 = dot(b, b), c2 = dot(c, c);
  return P((a2 * (b.y - c.y) + b2 * (c.y - a.y) + c2 * (a.y - b.y)) / d, (a2 * (c.x - b.x) + b2 * (a.x - c.x) + c2 * (b.x - a.x)) / d);
}
function incircle(a, b, c) {
  const la = dist(b, c), lb = dist(c, a), lc = dist(a, b), s = la + lb + lc;
  const i = P((la * a.x + lb * b.x + lc * c.x) / s, (la * a.y + lb * b.y + lc * c.y) / s);
  const area = Math.abs(cross(sub(b, a), sub(c, a))) / 2;
  return { i, r: (2 * area) / s };
}
// Intersections of line ab with circle (o, r), ordered along a -> b.
function circleLine(o, r, a, b) {
  const d = sub(b, a), f = sub(a, o);
  const A = dot(d, d), B = 2 * dot(f, d), C = dot(f, f) - r * r;
  const disc = Math.sqrt(B * B - 4 * A * C);
  return [(-B - disc) / (2 * A), (-B + disc) / (2 * A)].map((t) => add(a, mul(d, t)));
}
const otherOnCircle = (o, r, a, through) => {
  const [p, q] = circleLine(o, r, a, through);
  return dist(p, a) > dist(q, a) ? p : q;
};
function circleCircle(o1, r1, o2, r2) {
  const d = dist(o1, o2), a = (r1 * r1 - r2 * r2 + d * d) / (2 * d), h = Math.sqrt(r1 * r1 - a * a);
  const m = add(o1, mul(unit(sub(o2, o1)), a)), n = rot(unit(sub(o2, o1)), 90);
  return [add(m, mul(n, h)), sub(m, mul(n, h))];
}
function tangentPoints(p, o, r) {
  const d = dist(p, o), ang = (Math.acos(r / d) * 180) / Math.PI;
  const u = unit(sub(p, o));
  return [add(o, mul(rot(u, ang), r)), add(o, mul(rot(u, -ang), r))];
}

// ---------- figure builder ----------
// Drawing is collected in world coordinates (y up) and fitted into an SVG.
function figure(caption = "") {
  const items = [], pts = [], extent = [];
  const api = {
    seg(a, b, cls = "") { items.push({ k: "seg", a, b, cls }); extent.push(a, b); return api; },
    poly(ps, cls = "") { ps.forEach((p, i) => api.seg(p, ps[(i + 1) % ps.length], cls)); return api; },
    // Line through a and b, extended by fractions e1 (before a) and e2 (after b).
    ext(a, b, e1, e2, cls = "") { const d = sub(b, a); return api.seg(sub(a, mul(d, e1)), add(b, mul(d, e2)), cls); },
    circle(o, r, cls = "") { items.push({ k: "circle", o, r, cls }); extent.push(P(o.x - r, o.y - r), P(o.x + r, o.y + r)); return api; },
    arc(o, r, from, to, cls = "") {
      items.push({ k: "arc", o, r, from, to, cls });
      for (let t = from; t <= to; t += 5) extent.push(onCircle(o, r, t));
      extent.push(onCircle(o, r, to));
      return api;
    },
    right(at, p1, p2, s = 0.28) {
      const u = mul(unit(sub(p1, at)), s), v = mul(unit(sub(p2, at)), s);
      items.push({ k: "path", ps: [add(at, u), add(add(at, u), v), add(at, v)], cls: "mark" });
      return api;
    },
    angle(at, p1, p2, r = 0.5, label = "") {
      items.push({ k: "angle", at, p1, p2, r, label });
      return api;
    },
    // dir: label direction in degrees (0 = right, 90 = up); omitted = away from the figure centre.
    pt(p, label, dir, opts = {}) { pts.push({ p, label, dir, ...opts }); extent.push(p); return api; },
    text(p, label) { pts.push({ p, label, dir: null, dot: false, at: true }); return api; },
    svg() { return render(caption, items, pts, extent); },
  };
  return api;
}

const r1 = (x) => Math.round(x * 10) / 10;
function render(caption, items, pts, extent) {
  const xs = extent.map((p) => p.x), ys = extent.map((p) => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const w = maxX - minX || 1, h = maxY - minY || 1;
  const s = Math.min(300 / w, 250 / h), pad = 24;
  const W = Math.round(w * s + 2 * pad), H = Math.round(h * s + 2 * pad);
  const X = (p) => r1((p.x - minX) * s + pad), Y = (p) => r1((maxY - p.y) * s + pad);
  const cls = (c) => (c ? ` class="${c}"` : "");
  const out = [];
  for (const it of items) {
    if (it.k === "seg") out.push(`<line x1="${X(it.a)}" y1="${Y(it.a)}" x2="${X(it.b)}" y2="${Y(it.b)}"${cls(it.cls)}/>`);
    else if (it.k === "circle") out.push(`<circle cx="${X(it.o)}" cy="${Y(it.o)}" r="${r1(it.r * s)}"${cls(it.cls)}/>`);
    else if (it.k === "arc") {
      const a = onCircle(it.o, it.r, it.from), b = onCircle(it.o, it.r, it.to), large = it.to - it.from > 180 ? 1 : 0;
      out.push(`<path d="M${X(a)} ${Y(a)} A${r1(it.r * s)} ${r1(it.r * s)} 0 ${large} 0 ${X(b)} ${Y(b)}"${cls(it.cls)}/>`);
    } else if (it.k === "path") out.push(`<polyline points="${it.ps.map((p) => `${X(p)},${Y(p)}`).join(" ")}"${cls(it.cls)}/>`);
    else if (it.k === "angle") {
      const u = unit(sub(it.p1, it.at)), v = unit(sub(it.p2, it.at));
      const a = add(it.at, mul(u, it.r)), b = add(it.at, mul(v, it.r)), sweep = cross(u, v) > 0 ? 0 : 1;
      out.push(`<path d="M${X(a)} ${Y(a)} A${r1(it.r * s)} ${r1(it.r * s)} 0 0 ${sweep} ${X(b)} ${Y(b)}" class="mark"/>`);
      if (it.label) {
        const m = add(it.at, mul(unit(add(u, v)), it.r + 0.45));
        out.push(`<text x="${X(m)}" y="${Y(m)}" class="lbl small">${it.label}</text>`);
      }
    }
  }
  const labelled = pts.filter((q) => q.label && !q.at);
  const c = labelled.length ? P(labelled.reduce((a, q) => a + q.p.x, 0) / labelled.length, labelled.reduce((a, q) => a + q.p.y, 0) / labelled.length) : P(0, 0);
  const marks = [];
  for (const q of pts) {
    if (q.dot !== false) marks.push(`<circle cx="${X(q.p)}" cy="${Y(q.p)}" r="${q.hollow ? 3 : 2.6}" class="${q.hollow ? "dot hollow" : "dot"}"/>`);
    if (!q.label) continue;
    let lx = X(q.p), ly = Y(q.p);
    if (!q.at) {
      const d = q.dir ?? (Math.atan2(q.p.y - c.y, q.p.x - c.x) * 180) / Math.PI;
      const rad = (d * Math.PI) / 180;
      lx = r1(lx + 13 * Math.cos(rad)); ly = r1(ly - 13 * Math.sin(rad));
    }
    marks.push(`<text x="${lx}" y="${ly}" class="lbl">${q.label}</text>`);
  }
  const svg = `<svg class="geo" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${caption || "Hình vẽ"}">` +
    `<g class="lines" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${out.join("")}</g>` +
    `<g fill="currentColor" font-family="'Times New Roman',serif" font-style="italic" font-size="16" text-anchor="middle" dominant-baseline="central">${marks.join("")}</g></svg>`;
  return { caption, svg };
}

// ---------- topic 9 problems ----------
function bai1() {
  const A = P(0.9, 4.3), B = P(0, 0), C = P(6.2, 0);
  const D = lerp(B, C, dist(A, B) / (dist(A, B) + dist(A, C)));
  const O = circumcenter(A, B, C), R = dist(O, A), E = otherOnCircle(O, R, A, D);
  return [figure("Phân giác AD, E là giao điểm thứ hai với đường tròn ngoại tiếp")
    .circle(O, R, "thin").poly([A, B, C]).seg(A, E, "hi").seg(B, E, "aux").seg(C, E, "aux")
    .angle(A, B, D, 0.7).angle(A, D, C, 0.85)
    .pt(A, "A", 100).pt(B, "B", 200).pt(C, "C", -20).pt(D, "D", 60).pt(E, "E", -90).svg()];
}
function bai2() {
  const A = P(1.6, 4.6), B = P(0, 0), C = P(6.4, 0), M = mid(B, C), N = lerp(A, C, 2 / 3);
  const I = lineInter(A, M, B, N), K = mid(N, C);
  return [figure("AN = 2NC; kẻ thêm MK song song với BN")
    .poly([A, B, C]).seg(A, M, "hi").seg(B, N, "hi").seg(M, K, "aux")
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(M, "M", -90).pt(N, "N", 30).pt(I, "I", 160).pt(K, "K", 20).svg()];
}
function bai3() {
  const A = P(1.6, 4.6), B = P(0, 0), C = P(6.4, 0), M = P(2.7, 1.5);
  const D = lineInter(A, M, B, C), E = lineInter(B, M, C, A), F = lineInter(C, M, A, B);
  return [figure("Ba đoạn AD, BE, CF đi qua điểm M trong tam giác")
    .poly([A, B, C]).seg(A, D, "hi").seg(B, E, "hi").seg(C, F, "hi")
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(D, "D", -90).pt(E, "E", 30).pt(F, "F", 160).pt(M, "M", -75).svg()];
}
function bai4() {
  const A = P(2, 5), B = P(0, 0), C = P(6.2, 0);
  const D = foot(A, B, C), E = foot(B, C, A), F = foot(C, A, B), H = lineInter(A, D, B, E);
  return [figure("Ba đường cao AD, BE, CF và tam giác DEF")
    .poly([A, B, C]).seg(A, D).seg(B, E).seg(C, F).poly([D, E, F], "hi")
    .right(D, C, A).right(E, A, B).right(F, B, C)
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(D, "D", -90).pt(E, "E", 20).pt(F, "F", 160).pt(H, "H", -40).svg()];
}
function bai5() {
  const O = P(0, 0), R = 2.4, M = P(7, 0);
  const [A, B] = tangentPoints(M, O, R);
  const [C, D] = circleLine(O, R, M, P(0, 1.1)).sort((p, q) => dist(p, M) - dist(q, M));
  const I = mid(C, D), H = lineInter(A, B, M, O);
  return [figure("Hai tiếp tuyến MA, MB và cát tuyến MCD")
    .circle(O, R, "thin").seg(M, A).seg(M, B).seg(M, O).seg(A, B).seg(M, D).seg(O, I, "aux")
    .seg(C, H, "hi").seg(O, D, "hi").right(I, O, M, 0.22).right(A, M, O, 0.22)
    .pt(O, "O", 200).pt(M, "M", 0).pt(A, "A", 90).pt(B, "B", -90).pt(C, "C", 70).pt(D, "D", 140).pt(I, "I", 90).pt(H, "H", -60).svg()];
}
function bai6() {
  const A = P(1.6, 4.6), B = P(0, 0), C = P(6.2, 0);
  const O = circumcenter(A, B, C), R = dist(O, A);
  const D = foot(A, B, C), E = foot(B, C, A), F = foot(C, A, B), H = lineInter(A, D, B, E), M = mid(B, C), A2 = reflectPt(A, O);
  return [figure("Trực tâm H, trung điểm M của BC, A' đối xứng với A qua O")
    .circle(O, R, "thin").poly([A, B, C]).seg(A, D).seg(B, E).seg(C, F).seg(E, F, "hi").seg(A, A2, "aux")
    .seg(B, A2, "aux").seg(C, A2, "aux").seg(O, M, "hi")
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(D, "D", -110).pt(E, "E", 20).pt(F, "F", 160).pt(H, "H", 200)
    .pt(O, "O", 10).pt(M, "M", -70).pt(A2, "A'", -90).svg()];
}
function bai7() {
  const O = P(0, 0), R = 2.6;
  const A = onCircle(O, R, 105), B = onCircle(O, R, 205), C = onCircle(O, R, 290), D = onCircle(O, R, 15);
  const th = Math.acos(dot(unit(sub(C, A)), unit(sub(D, A)))) * 180 / Math.PI;
  const sign = Math.sign(cross(sub(C, A), sub(D, A)));
  const E = lineInter(A, add(A, rot(sub(B, A), sign * th)), B, D);
  return [figure("Tứ giác nội tiếp ABCD; E trên BD với góc BAE bằng góc CAD")
    .circle(O, R, "thin").poly([A, B, C, D]).seg(A, C).seg(B, D).seg(A, E, "hi")
    .angle(A, B, E, 0.7).angle(A, C, D, 0.95)
    .pt(A, "A", 100).pt(B, "B", 205).pt(C, "C", -70).pt(D, "D", 15).pt(E, "E", -100).svg()];
}
function bai8() {
  const O = P(0, 0), R = 2.6;
  const A = onCircle(O, R, 210), B = onCircle(O, R, 330), N = onCircle(O, R, 270), M = onCircle(O, R, 130), M0 = onCircle(O, R, 90);
  return [figure("N là điểm chính giữa cung nhỏ AB; chu vi lớn nhất khi M ở vị trí M₀")
    .circle(O, R, "thin").poly([M, A, B]).seg(M, N, "aux").seg(N, A, "aux").seg(N, B, "aux").seg(M0, N, "hi")
    .pt(O, "O", 0).pt(A, "A", 210).pt(B, "B", -30).pt(N, "N", -90).pt(M, "M", 130).pt(M0, "M₀", 90, { hollow: true }).svg()];
}
function bai9() {
  const B = P(0, 0), C = P(7, 0), A = P(2.2, Math.sqrt(2.2 * 4.8)), H = P(2.2, 0);
  const k1 = incircle(A, B, C), k2 = incircle(A, B, H), k3 = incircle(A, H, C);
  return [figure("Đường tròn nội tiếp các tam giác ABC, ABH, ACH")
    .poly([A, B, C]).seg(A, H).right(A, B, C).right(H, C, A, 0.22)
    .circle(k1.i, k1.r, "hi").circle(k2.i, k2.r, "aux").circle(k3.i, k3.r, "aux")
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(H, "H", -90).svg()];
}

// ---------- question 9 of the mock exams ----------
function de1() {
  const O = P(0, 0), R = 2.6, A = P(-R, 0), B = P(R, 0), C = onCircle(O, R, 58);
  const t = rot(sub(C, O), 90);
  const M = lineInter(C, add(C, t), A, P(-R, 1)), N = lineInter(C, add(C, t), B, P(R, 1));
  const top = Math.max(M.y, N.y) + 0.6;
  return [figure("Nửa đường tròn đường kính AB, tiếp tuyến tại C cắt Ax, By tại M, N")
    .arc(O, R, 0, 180, "thin").seg(A, B).seg(A, P(-R, top)).seg(B, P(R, top)).seg(M, N, "hi")
    .seg(O, M).seg(O, N).seg(O, C, "aux").right(C, O, N, 0.22).right(A, B, M, 0.22).right(B, N, A, 0.22)
    .pt(O, "O", -90).pt(A, "A", -135).pt(B, "B", -45).pt(C, "C", 70).pt(M, "M", 180).pt(N, "N", 0)
    .text(P(-R - 0.35, top), "x").text(P(R + 0.35, top), "y").svg()];
}
function de2() {
  const B = P(0, 0), C = P(6, 0), A = P(1.1, 4.0);
  const E = foot(B, C, A), F = foot(C, A, B), H = lineInter(B, E, C, F), I = mid(B, C), K = lineInter(E, F, B, C), N = mid(A, H);
  return [figure("Đường cao BE, CF; EF cắt BC tại K; I là trung điểm BC")
    .poly([A, B, C]).seg(B, E).seg(C, F).seg(K, E).seg(K, B).circle(N, dist(N, A), "aux").seg(I, E, "hi")
    .right(E, C, B, 0.22).right(F, B, C, 0.22)
    .pt(A, "A", 90).pt(B, "B", -60).pt(C, "C", -20).pt(E, "E", 20).pt(F, "F", 150).pt(H, "H", -30)
    .pt(I, "I", -90).pt(K, "K", -90).svg()];
}
function de3() {
  const O = P(0, 0), R = 2, A = P(5.4, 0);
  const [B, C] = tangentPoints(A, O, R), D = reflectPt(B, O), H = lineInter(O, A, B, C), E = otherOnCircle(O, R, D, A);
  return [figure("Tiếp tuyến AB, AC; đường kính BD; AD cắt đường tròn tại E")
    .circle(O, R, "thin").seg(A, B).seg(A, C).seg(A, O).seg(B, C).seg(B, D).seg(C, D).seg(A, D)
    .seg(E, H, "hi").seg(B, E, "aux").right(B, A, O, 0.22).right(H, A, B, 0.2)
    .pt(O, "O", 200).pt(A, "A", 0).pt(B, "B", 90).pt(C, "C", -80).pt(D, "D", -110).pt(E, "E", -60).pt(H, "H", -60).svg()];
}
function de4() {
  const A = P(3, 4), B = P(0, 0), C = P(6, 0), H = P(3, 0), M = P(4.4, 0);
  const a = figure("a) Tam giác cân ABC, M thuộc BC")
    .poly([A, B, C]).seg(A, M, "hi").seg(A, H, "aux").right(H, C, A, 0.25)
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(H, "H", -90).pt(M, "M", -90).svg();
  const sA = P(0, 4), sB = P(4, 4), sC = P(4, 0), sD = P(0, 0), sM = P(4, 1.7);
  const sN = lineInter(sA, sM, sD, sC), sE = lineInter(sA, add(sA, rot(sub(sM, sA), 90)), sD, sC);
  const b = figure("b) Hình vuông ABCD, AE vuông góc với AM")
    .poly([sA, sB, sC, sD]).seg(sA, sN, "hi").seg(sA, sE, "hi").seg(sE, sN).right(sA, sN, sE, 0.3)
    .pt(sA, "A", 120).pt(sB, "B", 60).pt(sC, "C", -60).pt(sD, "D", -90).pt(sM, "M", 0).pt(sN, "N", -60).pt(sE, "E", -120).svg();
  return [a, b];
}
function de5() {
  const A = P(0, 0), C = P(5, 0), B = P(1.5, 3 * Math.sin(Math.PI / 3)), H = P(1.5, 0), D = lerp(B, C, 3 / 8);
  return [figure("Góc A bằng 60°, đường cao BH, phân giác AD")
    .poly([A, B, C]).seg(B, H, "aux").seg(A, D, "hi").right(H, C, B, 0.22).angle(A, C, B, 0.55).text(P(0.95, 0.22), "60°")
    .pt(A, "A", 200).pt(B, "B", 90).pt(C, "C", -20).pt(H, "H", -90).pt(D, "D", 45).svg()];
}
function de6() {
  const A = P(1.3, 4.6), B = P(0, 0), C = P(6.2, 0);
  const O = circumcenter(A, B, C), R = dist(O, A), { i: I } = incircle(A, B, C);
  const D = lineInter(A, I, B, C), M = otherOnCircle(O, R, A, I);
  return [figure("I là tâm đường tròn nội tiếp; AI cắt BC tại D, cắt (O) tại M")
    .circle(O, R, "thin").poly([A, B, C]).seg(A, M).seg(B, I, "aux").seg(C, I, "aux")
    .seg(M, B, "hi").seg(M, C, "hi").seg(O, M, "aux")
    .pt(A, "A", 100).pt(B, "B", 200).pt(C, "C", -20).pt(O, "O", 20).pt(I, "I", 10).pt(D, "D", 30).pt(M, "M", -90).svg()];
}
function de7() {
  const A = P(0, 0), B = P(4.5, 0), D = P(1.4, 2.8), C = add(B, sub(D, A));
  const K = lerp(B, C, 0.62), G = lineInter(A, K, D, C), E = lineInter(A, K, B, D);
  return [figure("Hình bình hành ABCD, đường thẳng qua A cắt BD, BC, DC tại E, K, G")
    .poly([A, B, C, D]).seg(B, D).seg(C, G).seg(A, G, "hi")
    .pt(A, "A", 220).pt(B, "B", -60).pt(C, "C", 90).pt(D, "D", 120).pt(E, "E", -70).pt(K, "K", -20).pt(G, "G", 30).svg()];
}
function de8() {
  const B = P(0, 0), C = P(7, 0), A = P(2.2, Math.sqrt(2.2 * 4.8)), H = P(2.2, 0);
  const E = foot(H, A, B), F = foot(H, A, C), M = mid(B, C), Pp = lineInter(A, M, E, F);
  return [figure("Đường tròn đường kính AH cắt AB, AC tại E, F; M là trung điểm BC")
    .poly([A, B, C]).seg(A, H).circle(mid(A, H), dist(A, H) / 2, "aux").poly([A, E, H, F]).seg(E, F, "hi").seg(A, M, "hi")
    .right(A, B, C, 0.25).right(Pp, A, F, 0.18)
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(H, "H", -90).pt(E, "E", 170).pt(F, "F", 20).pt(M, "M", -90).pt(Pp, "P", 0).svg()];
}
function de9() {
  const O = P(0, 0), R = 3, B = onCircle(O, R, 215), C = onCircle(O, R, 325), A = onCircle(O, R, 116);
  const E = foot(B, C, A), F = foot(C, A, B), H = lineInter(B, E, C, F), M = mid(B, C), A2 = reflectPt(A, O), O2 = reflectPt(O, M);
  return [figure("Trực tâm H; A' đối xứng với A qua O; đường tròn (BHC) nét đứt")
    .circle(O, R, "thin").circle(O2, R, "aux").poly([A, B, C]).seg(B, E).seg(C, F).seg(A, H, "hi").seg(O, M, "hi")
    .seg(A, A2, "aux").seg(B, A2, "aux").seg(C, A2, "aux")
    .pt(A, "A", 90).pt(B, "B", 200).pt(C, "C", -20).pt(E, "E", 20).pt(F, "F", 160).pt(H, "H", 200).pt(M, "M", -90).pt(O, "O", -20).pt(A2, "A'", -60).svg()];
}
function de10() {
  const O1 = P(0, 0), ra = 2.3, O2 = P(3.3, 0), rb = 1.7;
  const [A, B] = circleCircle(O1, ra, O2, rb);
  const L = dist(O1, O2), cosf = (rb - ra) / L, sinf = Math.sqrt(1 - cosf * cosf);
  const u = unit(sub(O2, O1)), n = add(mul(u, cosf), mul(rot(u, 90), sinf));
  const C = sub(O1, mul(n, ra)), D = sub(O2, mul(n, rb)), I = lineInter(A, B, C, D);
  return [figure("Hai đường tròn cắt nhau tại A, B; tiếp tuyến chung CD; AB cắt CD tại I")
    .circle(O1, ra, "thin").circle(O2, rb, "thin").ext(C, D, 0.15, 0.15).seg(A, I).seg(C, B, "hi").seg(D, B, "hi").seg(C, A, "aux").seg(D, A, "aux")
    .pt(O1, "O", 180).pt(O2, "O'", 0).pt(A, "A", 90).pt(B, "B", 20).pt(C, "C", -100).pt(D, "D", -80).pt(I, "I", -90).svg()];
}

export const FIGURES = {
  topics: { "hinh-hoc-phang": { 1: bai1(), 2: bai2(), 3: bai3(), 4: bai4(), 5: bai5(), 6: bai6(), 7: bai7(), 8: bai8(), 9: bai9() } },
  exams: { 1: de1(), 2: de2(), 3: de3(), 4: de4(), 5: de5(), 6: de6(), 7: de7(), 8: de8(), 9: de9(), 10: de10() },
};
