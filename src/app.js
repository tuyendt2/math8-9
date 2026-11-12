// Toán HSG 8–9: a small offline study app. No framework; routes live in the URL hash.
(() => {
  "use strict";
  const DATA = window.APP_DATA;
  const T = DATA.topics[0]; // prototype: one topic
  const app = document.getElementById("app");
  const DAY = 86400000;
  const BOX_DAYS = [0, 1, 3, 7, 14, 30]; // Leitner box -> days until next review

  // ---------- progress, stored on this device only ----------
  const KEY = "toan-hsg-progress-v1";
  let S;
  try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { S = {}; }
  S.cards ||= {};
  S.problems ||= {};
  S.prefs ||= {};
  const save = () => localStorage.setItem(KEY, JSON.stringify(S));
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const cardKey = (c) => `${T.id}:${c.id}`;
  const probKey = (p) => `${T.id}:${p.n}`;
  const cardState = (c) => S.cards[cardKey(c)];
  const probState = (p) => S.problems[probKey(p)];
  const isDue = (c) => { const st = cardState(c); return !st || st.due <= today(); };
  const needsRedo = (p) => { const st = probState(p); return st && st.review && st.review <= today(); };

  function applyPrefs() {
    const theme = S.prefs.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.font = String(S.prefs.font || 0);
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#16213a" : "#0b3d91";
  }
  applyPrefs();

  // ---------- helpers ----------
  const stars = (n) => "★".repeat(n) + "☆".repeat(4 - n);
  const STATUS = {
    solo: { label: "Tự làm được", cls: "solo" },
    hint: { label: "Nhờ gợi ý", cls: "hint" },
    fail: { label: "Chưa làm được", cls: "fail" },
  };
  const statusBadge = (p) => {
    const st = probState(p);
    if (!st) return "";
    return `<span class="st ${STATUS[st.status].cls}">${needsRedo(p) ? "Làm lại" : STATUS[st.status].label}</span>`;
  };
  const header = (title, back) => `
    <header class="top">
      ${back ? `<a href="${back}" aria-label="Quay lại">‹</a>` : `<span style="width:8px"></span>`}
      <h1>${title}</h1>
      <button data-act="font" aria-label="Cỡ chữ">Aa</button>
      <button data-act="theme" aria-label="Đổi giao diện sáng/tối">◐</button>
    </header>`;
  const fmtTime = (ms) => {
    const s = Math.floor(ms / 1000);
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };

  // ---------- pages ----------
  function home() {
    const due = T.cards.filter(isDue).length;
    const done = T.problems.filter((p) => probState(p)).length;
    const solo = T.problems.filter((p) => probState(p)?.status === "solo").length;
    const redo = T.problems.filter(needsRedo).length;
    return `${header("Toán HSG 8–9")}
    <main>
      <div class="card">
        <div class="muted small">Chủ đề ${T.number}</div>
        <h2 style="margin:.1em 0 .3em">${T.title}</h2>
        <div class="small muted">Đã làm ${done}/${T.problems.length} bài · tự làm được ${solo}</div>
        <div class="progress"><div style="width:${(100 * solo) / T.problems.length}%"></div></div>
      </div>
      <div class="tiles">
        <a class="tile" href="#/kien-thuc"><span class="ico">📘</span>
          <div><b>Kiến thức</b><span>${T.knowledge.length} mục, có chứng minh</span></div></a>
        <a class="tile" href="#/the"><span class="ico">🃏</span>
          <div><b>Thẻ ghi nhớ</b><span>${T.cards.length} thẻ công thức, ôn ngắt quãng</span></div>
          ${due ? `<span class="badge-count">${due} cần ôn</span>` : ""}</a>
        <a class="tile" href="#/bai"><span class="ico">✏️</span>
          <div><b>Bài tập</b><span>${T.problems.length} bài, gợi ý từng bước</span></div>
          ${redo ? `<span class="badge-count">${redo} làm lại</span>` : ""}</a>
      </div>
      <h2>Cách dùng</h2>
      <div class="card content small">
        <ol>
          <li><b>Thẻ ghi nhớ:</b> mỗi ngày 5–10 phút. Thẻ nhớ rồi sẽ hẹn lại sau 1, 3, 7, 14, 30 ngày.</li>
          <li><b>Bài tập:</b> chép đề ra giấy và tự làm trước. Bí thì mở <i>ý tưởng</i>, rồi <i>gợi ý 1</i>, <i>gợi ý 2</i>, cuối cùng mới xem lời giải.</li>
          <li>Làm xong, tự đánh giá. Bài "nhờ gợi ý" hẹn làm lại sau 7 ngày, bài "chưa làm được" sau 3 ngày.</li>
        </ol>
        <p class="muted">Tiến độ chỉ lưu trên máy này, không cần tài khoản.</p>
      </div>
      <details class="k"><summary>📲 Cài lên màn hình chính</summary>
        <div class="content small">
          <p id="install-slot"></p>
          <p><b>Android (Chrome):</b> bấm menu ⋮ → <i>Thêm vào màn hình chính</i> (hoặc <i>Cài đặt ứng dụng</i>).</p>
          <p><b>iPhone (Safari):</b> bấm nút Chia sẻ ⬆︎ → <i>Thêm vào MH chính</i>.</p>
          <p>Sau khi cài, app mở toàn màn hình và dùng được cả khi không có mạng.</p>
        </div>
      </details>
      <div class="foot">Cập nhật ${DATA.built} · <button data-act="reset">Xóa tiến độ</button></div>
    </main>`;
  }

  function knowledge() {
    return `${header("Kiến thức", "#/")}
    <main>
      <div class="card content">${T.intro}</div>
      ${T.knowledge
        .map((k, i) => `<details class="k"><summary><span class="num">${i + 1}</span>${k.title}</summary>
          <div class="content">${k.html}</div></details>`)
        .join("")}
      <div class="nav"><a class="btn primary" href="#/the">Ôn bằng thẻ ghi nhớ →</a></div>
    </main>`;
  }

  // Flashcard session lives in memory; the schedule is saved per card.
  let session = null;
  function startSession(all) {
    const pick = all ? T.cards : T.cards.filter(isDue);
    session = { queue: pick.map((c) => T.cards.indexOf(c)), flipped: false, total: pick.length, done: 0 };
  }
  function cards() {
    if (!session) startSession(false);
    const top = `${header("Thẻ ghi nhớ", "#/")}<main>`;
    if (!session.queue.length) {
      const next = T.cards.map((c) => cardState(c)?.due).filter(Boolean).sort((a, b) => a - b)[0];
      return `${top}
        <div class="card" style="text-align:center">
          <div style="font-size:2.4em">🎉</div>
          <h2>Xong phần ôn hôm nay</h2>
          <p class="muted">${session.total ? `Bạn vừa ôn ${session.total} thẻ.` : "Hôm nay không có thẻ nào đến hạn."}
          ${next ? `<br>Lượt ôn tiếp theo: ${new Date(next).toLocaleDateString("vi-VN")}.` : ""}</p>
          <div class="stack"><button class="btn primary" data-act="all-cards">Ôn lại tất cả ${T.cards.length} thẻ</button>
          <a class="btn" href="#/">Về trang chính</a></div>
        </div></main>`;
    }
    const c = T.cards[session.queue[0]];
    const st = cardState(c);
    return `${top}
      <div class="row small muted" style="justify-content:space-between">
        <span>Còn ${session.queue.length} thẻ</span><span>${st ? `Hộp ${st.box}/5` : "Thẻ mới"}</span></div>
      <div class="card flash" data-act="flip">
        <div class="group">${c.group}</div>
        <div class="front content">${c.front}</div>
        ${session.flipped ? `<div class="back content">${c.back}</div>` : `<div class="tap">Tự nhớ lại câu trả lời, rồi chạm để lật thẻ</div>`}
      </div>
      ${session.flipped
        ? `<div class="row"><button class="btn bad" data-act="again">Chưa nhớ</button>
           <button class="btn ok" data-act="good">Nhớ rồi</button></div>`
        : `<button class="btn primary block" data-act="flip">Lật thẻ</button>`}
    </main>`;
  }
  function rateCard(good) {
    const idx = session.queue.shift();
    const c = T.cards[idx];
    const st = cardState(c) || { box: 0 };
    if (good) {
      const box = Math.min(st.box + 1, 5);
      S.cards[cardKey(c)] = { box, due: today() + BOX_DAYS[box] * DAY };
    } else {
      S.cards[cardKey(c)] = { box: 1, due: today() };
      session.queue.push(idx); // show it again later in this session
    }
    session.flipped = false;
    save();
  }

  function problemList() {
    const redo = T.problems.filter(needsRedo);
    const row = (p) => `<a href="#/bai/${p.n}">
        <span class="pn">Bài ${p.n}</span>
        <span class="pt">${p.tag ? `<b class="small">${p.tag}</b>` : ""}<div class="content">${p.statement}</div></span>
        <span style="text-align:right"><span class="stars">${stars(p.level)}</span><br>${statusBadge(p)}</span></a>`;
    return `${header("Bài tập", "#/")}
    <main>
      ${redo.length ? `<h2>Đến hạn làm lại</h2><div class="list plist">${redo.map(row).join("")}</div>` : ""}
      <h2>Tất cả bài</h2>
      <div class="list plist">${T.problems.map(row).join("")}</div>
    </main>`;
  }

  // Per-problem view state (reset when another problem opens).
  let view = { n: 0, opened: 0, open: new Set() };
  let tick = null;
  function problem(n) {
    const i = T.problems.findIndex((p) => p.n === n);
    if (i < 0) return problemList();
    const p = T.problems[i];
    if (view.n !== n) view = { n, opened: Date.now(), open: new Set() };
    const st = probState(p);
    const block = (id, title, html, cls = "") =>
      `<div class="reveal ${cls} ${view.open.has(id) ? "open" : ""}"><button data-act="reveal" data-id="${id}">${title}</button>
       <div class="content">${html}</div></div>`;
    const prev = T.problems[i - 1], next = T.problems[i + 1];
    return `${header(`Bài ${p.n}`, "#/bai")}
    <main>
      <div class="ptitle"><h2>Bài ${p.n}${p.tag ? ` <span class="muted small">(${p.tag})</span>` : ""}</h2>
        <span class="stars">${stars(p.level)}</span><span class="timer" id="timer">⏱ ${fmtTime(Date.now() - view.opened)}</span></div>
      <div class="card content">${p.statement}</div>
      ${st ? `<p class="small muted">Lần trước: ${STATUS[st.status].label} (${new Date(st.at).toLocaleDateString("vi-VN")})${st.review ? ` · hẹn làm lại ${new Date(st.review).toLocaleDateString("vi-VN")}` : ""}</p>` : `<p class="notice">Chép đề ra giấy và tự làm ít nhất 20 phút trước khi mở gợi ý.</p>`}
      ${block("idea", "💡 Ý tưởng chính", p.idea, "idea")}
      ${p.hints.map((h, k) => block(`h${k}`, `🔎 Gợi ý ${k + 1}`, h)).join("")}
      ${block("sol", "📖 Lời giải đầy đủ", p.solution, "sol")}
      <h2>Bạn làm bài này thế nào?</h2>
      <div class="stack">
        <button class="btn ok" data-act="rate" data-v="solo">✓ Tự làm được</button>
        <button class="btn warn" data-act="rate" data-v="hint">Làm được nhờ gợi ý (làm lại sau 7 ngày)</button>
        <button class="btn bad" data-act="rate" data-v="fail">Chưa làm được (làm lại sau 3 ngày)</button>
      </div>
      <div class="nav">
        ${prev ? `<a class="btn" href="#/bai/${prev.n}">‹ Bài ${prev.n}</a>` : ""}
        ${next ? `<a class="btn" href="#/bai/${next.n}">Bài ${next.n} ›</a>` : `<a class="btn" href="#/bai">Danh sách</a>`}
      </div>
    </main>`;
  }

  // ---------- router ----------
  function route() {
    clearInterval(tick);
    const h = location.hash.replace(/^#/, "") || "/";
    let m;
    if (h === "/kien-thuc") app.innerHTML = knowledge();
    else if (h === "/the") app.innerHTML = cards();
    else if (h === "/bai") app.innerHTML = problemList();
    else if ((m = h.match(/^\/bai\/(\d+)$/))) {
      app.innerHTML = problem(+m[1]);
      tick = setInterval(() => {
        const el = document.getElementById("timer");
        if (el) el.textContent = "⏱ " + fmtTime(Date.now() - view.opened);
      }, 1000);
    } else app.innerHTML = home();
    if (h !== "/the") session = null; // leaving the deck ends the session
    if (h === "/") showInstall();
  }
  function rerender() {
    const y = scrollY;
    route();
    scrollTo(0, y);
  }

  app.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const act = el.dataset.act;
    if (act === "theme") {
      S.prefs.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      save(); applyPrefs();
    } else if (act === "font") {
      S.prefs.font = ((S.prefs.font || 0) + 1) % 3;
      save(); applyPrefs();
    } else if (act === "flip") {
      if (!session.flipped) { session.flipped = true; rerender(); }
    } else if (act === "again" || act === "good") {
      rateCard(act === "good");
      scrollTo(0, 0); route();
    } else if (act === "all-cards") {
      startSession(true); route();
    } else if (act === "reveal") {
      const id = el.dataset.id;
      if (id === "sol" && !view.open.has(id)) {
        const mins = (Date.now() - view.opened) / 60000;
        if (mins < 10 && !confirm(`Bạn mới nghĩ ${Math.max(1, Math.round(mins))} phút. Vẫn xem lời giải đầy đủ?`)) return;
      }
      view.open.has(id) ? view.open.delete(id) : view.open.add(id);
      el.parentElement.classList.toggle("open");
    } else if (act === "rate") {
      const p = T.problems.find((x) => x.n === view.n);
      const v = el.dataset.v;
      const days = v === "hint" ? 7 : v === "fail" ? 3 : 0;
      S.problems[probKey(p)] = { status: v, at: Date.now(), review: days ? today() + days * DAY : null };
      save();
      const i = T.problems.indexOf(p);
      location.hash = T.problems[i + 1] ? `#/bai/${T.problems[i + 1].n}` : "#/bai";
      scrollTo(0, 0);
    } else if (act === "reset") {
      if (confirm("Xóa toàn bộ tiến độ thẻ ghi nhớ và bài tập trên máy này?")) {
        S.cards = {}; S.problems = {}; save(); route();
      }
    } else if (act === "install" && deferredInstall) {
      deferredInstall.prompt();
      deferredInstall = null;
    }
  });
  addEventListener("hashchange", () => { route(); scrollTo(0, 0); });

  // Android/Chrome install button.
  let deferredInstall = null;
  addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredInstall = e; showInstall(); });
  function showInstall() {
    const slot = document.getElementById("install-slot");
    if (slot && deferredInstall) slot.innerHTML = `<button class="btn primary block" data-act="install">Cài ứng dụng ngay</button>`;
  }

  route();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
})();
