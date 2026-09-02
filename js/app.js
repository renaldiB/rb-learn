/* ============================================================
   RB Learning — app
   Router hash, sidebar + pencarian, progres, quiz, playground.
   ============================================================ */
'use strict';

/* ---------- state ---------- */
const LS = {
  progress: 'rblearn:progress',
  theme: 'rblearn:theme',
  code: 'rblearn:code',
};

const ALL = TRACKS.flatMap(t => t.lessons.map(l => ({ ...l, track: t })));
const BY_ID = Object.fromEntries(ALL.map(l => [l.id, l]));

let progress = new Set(JSON.parse(localStorage.getItem(LS.progress) || localStorage.getItem('kelaskode:progress') || '[]'));
let searchIndex = null;   // id -> teks polos (dibangun malas)
let quiz = null;          // state quiz aktif

/* ---------- util ---------- */
const $ = (sel, el = document) => el.querySelector(sel);
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function saveProgress() {
  localStorage.setItem(LS.progress, JSON.stringify([...progress]));
  updateProgressUI();
}

function buildSearchIndex() {
  searchIndex = {};
  for (const l of ALL) {
    const div = document.createElement('div');
    div.innerHTML = l.body;
    searchIndex[l.id] = (l.title + ' ' + (l.desc || '') + ' ' + div.textContent)
      .toLowerCase().replace(/\s+/g, ' ');
  }
}

/* scroll instan ke atas (tanpa smooth, supaya tidak tertangkap di tengah jalan) */
function scrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

/* ---------- sidebar ---------- */
const LS_COLLAPSE = 'rblearn:collapsed';
let collapsed = new Set(JSON.parse(localStorage.getItem(LS_COLLAPSE) || localStorage.getItem('kelaskode:collapsed') || '[]'));

function toggleGroup(trackId) {
  collapsed.has(trackId) ? collapsed.delete(trackId) : collapsed.add(trackId);
  localStorage.setItem(LS_COLLAPSE, JSON.stringify([...collapsed]));
  renderSidebar($('#searchInput').value);
}

const CHEV = `<svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

function renderSidebar(filter = '') {
  const nav = $('#sideNav');
  const q = filter.trim().toLowerCase();
  if (q && !searchIndex) buildSearchIndex();

  const matches = l =>
    !q || l.title.toLowerCase().includes(q) || searchIndex[l.id].includes(q);

  let html = `<div class="side-group">
    <a class="side-item" href="#/"><span class="tool-ic">⌂</span><span class="t">Beranda</span></a>
  </div>`;

  for (const t of TRACKS) {
    const items = t.lessons.filter(matches);
    if (q && items.length === 0) continue;
    const done = t.lessons.filter(l => progress.has(l.id)).length;
    const isCollapsed = !q && collapsed.has(t.id);   // saat mencari: selalu tampil
    html += `<div class="side-group track ${isCollapsed ? 'collapsed' : ''}" data-track="${t.id}">
      <div class="side-group-title" role="button" tabindex="0" aria-expanded="${!isCollapsed}"
           title="Buka/tutup daftar ${t.title}">
        <span class="dot" style="background:var(--${t.accent})"></span>
        <span class="gt-name">${t.title}</span>
        <span class="count">${done}/${t.lessons.length}</span>
        ${CHEV}
      </div>
      <div class="side-items">
        ${items.map(l => `
          <a class="side-item ${progress.has(l.id) ? 'done' : ''}"
             href="#/m/${l.id}" data-id="${l.id}" data-accent="${t.accent}">
            <span class="n">${l.num}</span>
            <span class="t">${esc(l.title)}</span>
            <span class="done-tick"></span>
          </a>`).join('')}
      </div>
    </div>`;
  }

  if (q && !html.includes('side-item" href="#/m/')) {
    html += `<div class="search-empty">Tidak ada materi yang cocok.</div>`;
  }

  html += `<div class="side-group">
    <div class="side-group-title static">Praktik</div>
    <div class="side-items">
      <a class="side-item" href="#/playground"><span class="tool-ic">▸</span><span class="t">Playground</span></a>
      <a class="side-item" href="#/quiz"><span class="tool-ic">?</span><span class="t">Quiz</span></a>
    </div>
  </div>`;

  nav.innerHTML = html;
  highlightActive();
}

/* klik / keyboard pada judul grup = buka-tutup bahasa */
$('#sideNav').addEventListener('click', e => {
  const title = e.target.closest('.side-group-title:not(.static)');
  if (title) toggleGroup(title.closest('.side-group').dataset.track);
});
$('#sideNav').addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const title = e.target.closest('.side-group-title:not(.static)');
  if (title) { e.preventDefault(); toggleGroup(title.closest('.side-group').dataset.track); }
});

function highlightActive() {
  const hash = location.hash || '#/';
  const id = (hash.match(/^#\/m\/(.+)$/) || [])[1];
  document.querySelectorAll('.side-item').forEach(el => {
    el.classList.toggle('active',
      (id && el.dataset.id === id) ||
      (!id && el.getAttribute('href') === hash));
  });
}

function updateProgressUI() {
  const total = ALL.length;
  const done = ALL.filter(l => progress.has(l.id)).length;
  const pct = Math.round(done / total * 100);
  $('#spFill').style.width = pct + '%';
  $('#spPct').textContent = pct + '%';
  $('#spLabel').textContent = `${done} dari ${total} materi`;

  // angka per track + status centang tiap item
  document.querySelectorAll('.side-item[data-id]').forEach(el => {
    el.classList.toggle('done', progress.has(el.dataset.id));
  });
  const counts = document.querySelectorAll('#sideNav .side-group-title .count');
  let i = 0;
  for (const t of TRACKS) {
    if (!counts[i]) break;
    const d = t.lessons.filter(l => progress.has(l.id)).length;
    counts[i].textContent = `${d}/${t.lessons.length}`;
    i++;
  }
}

/* ---------- topbar ---------- */
function setCrumbs(parts) {
  $('#crumbs').innerHTML = parts
    .map((p, i) => i < parts.length - 1
      ? `<b>${esc(p)}</b><span class="sep">/</span>`
      : `<span>${esc(p)}</span>`)
    .join('');
}

function setTopAction(html) {
  $('#topbarActions').innerHTML = html || '';
}

function doneButton(l) {
  const isDone = progress.has(l.id);
  return `<button class="btn ${isDone ? 'done-state' : 'btn-primary'}" id="btnDone">
    ${isDone ? 'Selesai ✓' : 'Tandai selesai'}</button>`;
}

function wireDoneButton(l) {
  const btn = $('#btnDone');
  if (!btn) return;
  btn.addEventListener('click', () => {
    progress.has(l.id) ? progress.delete(l.id) : progress.add(l.id);
    saveProgress();
    btn.className = 'btn ' + (progress.has(l.id) ? 'done-state' : 'btn-primary');
    btn.textContent = progress.has(l.id) ? 'Selesai ✓' : 'Tandai selesai';
  });
}

/* ---------- views ---------- */
function viewHome() {
  setCrumbs(['Beranda']);
  setTopAction('');

  const next = ALL.find(l => !progress.has(l.id)) || ALL[0];
  const totalDone = ALL.filter(l => progress.has(l.id)).length;

  const cards = TRACKS.map(t => {
    const done = t.lessons.filter(l => progress.has(l.id)).length;
    const pct = Math.round(done / t.lessons.length * 100);
    return `
      <div class="track-card" style="--track:var(--${t.accent})">
        <div class="tc-top">
          <span class="tc-name"><span class="dot" style="background:var(--${t.accent})"></span>${t.title}</span>
          <span class="tc-pct">${t.lessons.length} materi</span>
        </div>
        <div class="tc-sub">${t.subtitle}</div>
        <div class="tc-progress">
          <div class="tc-track"><div class="tc-fill" style="width:${pct}%;background:var(--${t.accent})"></div></div>
          <span class="tc-pct">${pct}%</span>
        </div>
        <div style="margin-top:14px">
          <a class="btn btn-ghost" href="#/m/${t.lessons[0].id}" style="padding:6px 13px;font-size:.8rem">Mulai dari awal</a>
        </div>
      </div>`;
  }).join('');

  $('#view').innerHTML = `
    <div class="home-hero">
      <div class="home-kicker">RB Learning · Materi Lengkap Bahasa Indonesia</div>
      <h1>Dua skill, satu alur: <em>JavaScript</em> lalu <em>Playwright</em>.</h1>
      <p>Kuasai fondasi bahasa — variabel sampai async/await — lalu lanjut ke automation testing:
         locator, assertion, Page Object Model, sampai pipeline Jenkins. Setiap materi punya contoh,
         bisa ditandai selesai, dan diakhiri quiz.</p>
      <div class="home-actions">
        <a class="btn btn-primary" href="#/m/${next.id}">Lanjutkan: ${esc(next.title)}</a>
        <a class="btn btn-ghost" href="#/quiz">Uji pemahaman</a>
        <a class="btn btn-ghost" href="#/playground">Playground</a>
      </div>
      <div class="track-cards">${cards}</div>
    </div>
    <p style="margin-top:22px;font-size:.82rem;color:var(--ink-3)">
      ${totalDone > 0
        ? `Kamu sudah menyelesaikan ${totalDone} dari ${ALL.length} materi. Progres tersimpan otomatis.`
        : 'Klik materi di sidebar untuk mulai — tidak perlu instalasi apa pun.'}
    </p>`;
  scrollTop();
}

function viewLesson(id) {
  const l = BY_ID[id];
  if (!l) { location.hash = '#/'; return; }
  const t = l.track;
  const siblings = t.lessons;
  const idx = siblings.findIndex(x => x.id === l.id);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];

  setCrumbs([t.title, `${l.num} · ${l.title}`]);
  setTopAction(doneButton(l));
  wireDoneButton(l);

  $('#view').innerHTML = `
    <article class="lesson" style="--track:var(--${t.accent})">
      <div class="lesson-eyebrow">
        <span class="chip ${t.accent}">${t.title}</span>
        <span>Materi ${l.num}</span>
        ${l.level ? `<span>·</span><span>${esc(l.level)}</span>` : ''}
      </div>
      <h1 class="lesson-title">${esc(l.title)}</h1>
      ${l.desc ? `<p class="lesson-desc">${esc(l.desc)}</p>` : ''}
      ${l.intro ? `<div class="lesson-callout">${l.intro}</div>` : ''}
      <div class="lesson-body">${l.body}</div>
      <nav class="pager">
        ${prev
          ? `<a href="#/m/${prev.id}"><div class="pg-label">← Sebelumnya</div><div class="pg-title">${esc(prev.title)}</div></a>`
          : `<a class="placeholder"><div class="pg-label">—</div><div class="pg-title">—</div></a>`}
        ${next
          ? `<a class="next" href="#/m/${next.id}"><div class="pg-label">Berikutnya →</div><div class="pg-title">${esc(next.title)}</div></a>`
          : `<a class="next placeholder"><div class="pg-label">—</div><div class="pg-title">—</div></a>`}
      </nav>
    </article>`;
  scrollTop();
  groupCards($('#view'));
  addCopyButtons($('#view'));
}

/* kelompokkan keyword-card berurutan menjadi grid 2 kolom di layar lebar */
function groupCards(root) {
  const body = root.querySelector('.lesson-body');
  if (!body) return;
  let group = null;
  for (const el of [...body.children]) {
    if (el.classList.contains('keyword-card')) {
      if (!group) {
        group = document.createElement('div');
        group.className = 'cards';
        body.insertBefore(group, el);
      }
      group.appendChild(el);
    } else {
      group = null;
    }
  }
}

/* ---------- playground ---------- */
function viewPlayground() {
  setCrumbs(['Praktik', 'Playground']);
  setTopAction('');

  const saved = localStorage.getItem(LS.code);
  const starter = saved ?? `// Tulis kode, lalu klik Jalankan (atau Ctrl+Enter)
const nama = "Bang";
console.log("Halo, " + nama + "!");

const harga = [10000, 20000, 5000];
console.log(harga.map(h => h * 1.1));
console.log(harga.filter(h => h > 6000));`;

  $('#view').innerHTML = `
    <div class="pg-wrap">
      <div class="pg-head">
        <h2>Playground</h2>
        <p>Lab kecil untuk mencoba JavaScript langsung dari browser — hasil <code class="inline">console.log</code> muncul di panel kanan. Kode tersimpan otomatis.</p>
      </div>
      <div class="pg-grid">
        <div class="pg-pane">
          <div class="pg-pane-title">editor.js</div>
          <textarea class="pg-editor" id="pgCode" spellcheck="false"></textarea>
        </div>
        <div class="pg-pane">
          <div class="pg-pane-title">output <span class="live"></span></div>
          <div class="pg-output" id="pgOut"><div class="hint">Tekan Jalankan untuk melihat hasil…</div></div>
        </div>
      </div>
      <div class="pg-actions">
        <button class="btn btn-primary" id="pgRun">▶ Jalankan</button>
        <button class="btn btn-ghost" id="pgReset">↩ Reset</button>
        <span class="pg-note">Ctrl + Enter juga menjalankan kode.</span>
      </div>
    </div>`;

  const ta = $('#pgCode');
  ta.value = starter;
  ta.addEventListener('input', () => localStorage.setItem(LS.code, ta.value));
  ta.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); runPlayground(); }
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = ta.selectionStart;
      ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(ta.selectionEnd);
      ta.selectionStart = ta.selectionEnd = s + 2;
    }
  });
  $('#pgRun').addEventListener('click', runPlayground);
  $('#pgReset').addEventListener('click', () => {
    localStorage.removeItem(LS.code);
    ta.value = starter;
    $('#pgOut').innerHTML = '<div class="hint">Editor direset. Tekan Jalankan…</div>';
  });
  scrollTop();
}

function fmt(v) {
  if (typeof v === 'string') return v;
  if (v === undefined) return 'undefined';
  if (v === null) return 'null';
  if (typeof v === 'function') return '[function ' + (v.name || 'anonim') + ']';
  try { return JSON.stringify(v, null, 1).replace(/\n\s*/g, ' '); }
  catch { return String(v); }
}

function runPlayground() {
  const out = $('#pgOut');
  const code = $('#pgCode').value;
  const lines = [];
  const push = (tag, cls, args) => lines.push(
    `<div class="line ${cls}"><span class="tag">${tag}</span>${esc(args.map(fmt).join(' '))}</div>`);

  const fakeConsole = {};
  for (const level of ['log', 'info', 'warn', 'error', 'debug']) {
    fakeConsole[level] = (...args) =>
      push(level === 'error' ? '✗' : level === 'warn' ? '!' : '›',
           level === 'error' ? 'err' : 'ok', args);
  }
  try {
    new Function('console', code)(fakeConsole);
  } catch (err) {
    lines.push(`<div class="line err"><span class="tag">✗</span>${esc(err.name + ': ' + err.message)}</div>`);
  }
  out.innerHTML = lines.length ? lines.join('')
    : '<div class="hint">Kode berjalan tanpa output — coba tambahkan console.log().</div>';
}

/* ---------- quiz ---------- */
function viewQuiz() {
  setCrumbs(['Praktik', 'Quiz']);
  setTopAction('');
  quiz = null;
  renderQuizStart();
  scrollTop();
}

function renderQuizStart() {
  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'js', label: 'JavaScript' },
    { id: 'pw', label: 'Playwright' },
  ];
  $('#view').innerHTML = `
    <div class="quiz-head">
      <h2>Quiz</h2>
      <p>${QUIZ_BANK.length} soal dari seluruh materi. Pilih cakupan, jawab, dan baca penjelasannya
         — boleh salah, justru di situ belajar.</p>
    </div>
    <div class="quiz-filter">
      ${filters.map(f => `<button class="filter-chip ${f.id === 'all' ? 'on' : ''}" data-f="${f.id}">${f.label}</button>`).join('')}
      <button class="btn btn-primary" id="quizStart" style="margin-left:auto">Mulai Quiz →</button>
    </div>
    <div id="quizArea"></div>`;

  let filter = 'all';
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      filter = chip.dataset.f;
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('on', c === chip));
    });
  });
  $('#quizStart').addEventListener('click', () => startQuiz(filter));
}

function startQuiz(filter) {
  const pool = QUIZ_BANK.filter(q => filter === 'all' || q.track === filter);
  const order = pool.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  quiz = { pool, order, idx: 0, score: 0, answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { pool, order, idx } = quiz;
  const q = pool[order[idx]];
  const total = order.length;
  $('#quizArea').innerHTML = `
    <div class="quiz-card">
      <div class="quiz-meta">
        <span>Soal ${idx + 1} / ${total}</span>
        <span class="quiz-topic">${esc(q.topic)}</span>
      </div>
      <div class="quiz-q">${esc(q.q)}</div>
      <div class="quiz-opts">
        ${q.opts.map((o, i) => `
          <button class="quiz-opt" data-i="${i}">
            <span class="key">${String.fromCharCode(65 + i)}</span>
            <span>${esc(o)}</span>
          </button>`).join('')}
      </div>
      <div class="quiz-why" id="quizWhy"></div>
      <div class="quiz-foot">
        <span class="quiz-score">Skor: ${quiz.score}</span>
        <button class="btn btn-primary" id="quizNext" disabled style="opacity:.5">
          ${idx + 1 === total ? 'Lihat hasil' : 'Soal berikutnya →'}
        </button>
      </div>
    </div>`;

  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => answerQuiz(parseInt(btn.dataset.i)));
  });
  $('#quizNext').addEventListener('click', nextQuiz);
}

function answerQuiz(i) {
  if (quiz.answered) return;
  quiz.answered = true;
  const q = quiz.pool[quiz.order[quiz.idx]];
  const correct = i === q.ans;
  if (correct) quiz.score++;

  document.querySelectorAll('.quiz-opt').forEach((btn, bi) => {
    btn.disabled = true;
    if (bi === q.ans) btn.classList.add('correct');
    else if (bi === i) btn.classList.add('wrong');
    else btn.classList.add('dim');
  });

  const why = $('#quizWhy');
  why.innerHTML = correct
    ? `<b>Benar.</b> ${esc(q.why)}`
    : `<b>Kurang tepat.</b> ${esc(q.why)}`;
  why.classList.add('show');

  const next = $('#quizNext');
  next.disabled = false;
  next.style.opacity = '1';
  $('.quiz-score').textContent = 'Skor: ' + quiz.score;
}

function nextQuiz() {
  quiz.answered = false;
  quiz.idx++;
  if (quiz.idx >= quiz.order.length) { renderQuizEnd(); return; }
  renderQuizQuestion();
}

function renderQuizEnd() {
  const total = quiz.order.length;
  const pct = Math.round(quiz.score / total * 100);
  const verdict =
    pct === 100 ? 'Sempurna. Siap production.' :
    pct >= 70   ? 'Kuat. Ulangi materi yang keliru, lalu coba lagi.' :
    pct >= 40   ? 'Setengah jalan. Baca ulang materi bertanda biru di quiz ini.' :
                  'Tidak apa-apa — mulai lagi dari materi pertama, pelan-pelan.';
  $('#quizArea').innerHTML = `
    <div class="quiz-card quiz-end">
      <div class="quiz-meta" style="justify-content:center"><span>Quiz selesai</span></div>
      <div class="big">${quiz.score} / ${total}</div>
      <p>${verdict}</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" id="quizAgain">↻ Coba lagi</button>
        <a class="btn btn-ghost" href="#/">Kembali ke beranda</a>
      </div>
    </div>`;
  $('#quizAgain').addEventListener('click', renderQuizStart);
}

/* ---------- tombol copy pada blok kode ---------- */
function addCopyButtons(root) {
  root.querySelectorAll('.code-block, pre.codeblock').forEach(block => {
    if (block.querySelector('.copy-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = 'Salin';
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(block.textContent.trim()).then(() => {
        btn.textContent = 'Tersalin ✓';
        btn.classList.add('ok');
        setTimeout(() => { btn.textContent = 'Salin'; btn.classList.remove('ok'); }, 1600);
      });
    });
    block.appendChild(btn);
  });
}

/* ---------- tema ---------- */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(LS.theme, theme);
}

/* ---------- router ---------- */
function render() {
  const hash = location.hash || '#/';
  closeSidebar();

  if (hash === '#/' || hash === '#') { viewHome(); }
  else if (hash === '#/playground') { viewPlayground(); }
  else if (hash === '#/quiz') { viewQuiz(); }
  else if (hash.startsWith('#/m/')) { viewLesson(hash.slice(4)); }
  else { location.hash = '#/'; }

  highlightActive();
}

/* ---------- sidebar mobile ---------- */
function openSidebar() {
  $('#sidebar').classList.add('open');
  $('#sidebarScrim').classList.add('show');
}
function closeSidebar() {
  $('#sidebar').classList.remove('open');
  $('#sidebarScrim').classList.remove('show');
}

/* ---------- init ---------- */
applyTheme(localStorage.getItem(LS.theme) || 'light');
renderSidebar();

window.addEventListener('hashchange', render);
render();

$('#menuBtn').addEventListener('click', openSidebar);
$('#sideClose').addEventListener('click', closeSidebar);
$('#sidebarScrim').addEventListener('click', closeSidebar);

$('#themeBtn').addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

$('#resetBtn').addEventListener('click', () => {
  if (confirm('Hapus semua progres belajar di browser ini?')) {
    progress.clear();
    saveProgress();
    renderSidebar($('#searchInput').value);
    render();
  }
});

$('#searchInput').addEventListener('input', e => renderSidebar(e.target.value));
$('#searchInput').addEventListener('keydown', e => {
  if (e.key === 'Escape') { e.target.value = ''; renderSidebar(''); e.target.blur(); }
});

document.addEventListener('keydown', e => {
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (e.key === '/' && !typing) {
    e.preventDefault();
    $('#searchInput').focus();
  }
  if (e.key === 'Escape' && !typing) closeSidebar();
  if (e.altKey && (e.key === 'ArrowRight' || e.key === 'ArrowLeft') && location.hash.startsWith('#/m/')) {
    const l = BY_ID[location.hash.slice(4)];
    const i = l.track.lessons.findIndex(x => x.id === l.id);
    const dest = l.track.lessons[i + (e.key === 'ArrowRight' ? 1 : -1)];
    if (dest) location.hash = '#/m/' + dest.id;
  }
});
