'use strict';

const LS = {
  progress: 'rblearn:progress',
  theme: 'rblearn:theme',
  code: 'rblearn:code',
  bookmarks: 'rblearn:bookmarks',
  notes: 'rblearn:notes',
  collapsed: 'rblearn:collapsed'
};

const ALL = TRACKS.flatMap(t => t.lessons.map(l => ({ ...l, track: t })));
const BY_ID = Object.fromEntries(ALL.map(l => [l.id, l]));

let progress = new Set(JSON.parse(localStorage.getItem(LS.progress) || '[]'));
let bookmarks = new Set(JSON.parse(localStorage.getItem(LS.bookmarks) || '[]'));
let notes = JSON.parse(localStorage.getItem(LS.notes) || '{}');
let collapsed = new Set(JSON.parse(localStorage.getItem(LS.collapsed) || '[]'));
let searchIndex = null;
let quiz = null;

const $ = (sel, el = document) => el.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function saveProgress() {
  localStorage.setItem(LS.progress, JSON.stringify([...progress]));
  updateProgressUI();
}

function saveBookmarks() {
  localStorage.setItem(LS.bookmarks, JSON.stringify([...bookmarks]));
  renderSidebar($('#searchInput') ? $('#searchInput').value : '');
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

function scrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function toggleGroup(trackId) {
  collapsed.has(trackId) ? collapsed.delete(trackId) : collapsed.add(trackId);
  localStorage.setItem(LS.collapsed, JSON.stringify([...collapsed]));
  renderSidebar($('#searchInput').value);
}

const CHEV = `<svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
const IC_HOME = `<svg class="tool-ic" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
const IC_STAR = `<svg class="tool-ic" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
const IC_PLAY = `<svg class="tool-ic" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;
const IC_QUIZ = `<svg class="tool-ic" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
const IC_CARD = `<svg class="tool-ic" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;

function renderSidebar(filter = '') {
  const nav = $('#sideNav');
  const q = filter.trim().toLowerCase();
  if (q && !searchIndex) buildSearchIndex();

  const matches = l =>
    !q || l.title.toLowerCase().includes(q) || searchIndex[l.id].includes(q);

  let html = `<div class="side-group">
    <a class="side-item" href="#/">${IC_HOME}<span class="t">Beranda</span></a>
    <a class="side-item" href="#/bookmarks">${IC_STAR}<span class="t">Materi Favorit (${bookmarks.size})</span></a>
  </div>`;

  const renderTrackGroup = (t) => {
    const items = t.lessons.filter(matches);
    if (q && items.length === 0) return '';
    const done = t.lessons.filter(l => progress.has(l.id)).length;
    const isCollapsed = !q && collapsed.has(t.id);
    return `<div class="side-group track ${isCollapsed ? 'collapsed' : ''}" data-track="${t.id}">
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
  };

  const itTracks = TRACKS.filter(t => t.category === 'it' || !t.category);
  const langTracks = TRACKS.filter(t => t.category === 'lang');

  const itHtml = itTracks.map(renderTrackGroup).join('');
  if (itHtml) {
    html += `<div class="side-category">💻 Rekayasa IT</div>` + itHtml;
  }

  const langHtml = langTracks.map(renderTrackGroup).join('');
  if (langHtml) {
    html += `<div class="side-category">🌏 Bahasa Dunia</div>` + langHtml;
  }

  if (q && !html.includes('side-item" href="#/m/')) {
    html += `<div class="search-empty">Tidak ada materi yang cocok.</div>`;
  }

  html += `<div class="side-category">Praktik</div>
  <div class="side-group">
    <div class="side-items">
      <a class="side-item" href="#/playground">${IC_PLAY}<span class="t">Playground</span></a>
      <a class="side-item" href="#/quiz">${IC_QUIZ}<span class="t">Quiz</span></a>
      <a class="side-item" href="#/flashcard">${IC_CARD}<span class="t">Flashcard 🎴</span></a>
    </div>
  </div>`;

  nav.innerHTML = html;
  highlightActive();
}

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
  document.querySelectorAll('.side-item[data-id]').forEach(el => {
    el.classList.toggle('done', progress.has(el.dataset.id));
  });
  for (const t of TRACKS) {
    const grp = document.querySelector(`.side-group[data-track="${t.id}"]`);
    if (grp) {
      const c = grp.querySelector('.count');
      if (c) {
        const d = t.lessons.filter(l => progress.has(l.id)).length;
        c.textContent = `${d}/${t.lessons.length}`;
      }
    }
  }
}

function setCrumbs(crumbs) {
  $('#crumbs').innerHTML = crumbs.map((c, i) =>
    i === 0 ? `<span class="crumb">${esc(c)}</span>` : `<span class="crumb-sep">/</span><span class="crumb">${esc(c)}</span>`
  ).join('');
}

function setTopAction(html) {
  $('#topbarActions').innerHTML = html || '';
}

function doneButton(l) {
  const isDone = progress.has(l.id);
  const isBm = bookmarks.has(l.id);
  return `
    <button class="bm-btn ${isBm ? 'active' : ''}" id="btnBookmark" title="Simpan ke Favorit">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      <span>${isBm ? 'Favorit' : 'Simpan'}</span>
    </button>
    <button class="btn ${isDone ? 'btn-ghost done-state' : 'btn-primary'}" id="btnDone">
      ${isDone ? 'Selesai ✓' : 'Tandai selesai'}
    </button>`;
}

function wireDoneButton(l) {
  const btn = $('#btnDone');
  if (btn) {
    btn.onclick = () => {
      progress.has(l.id) ? progress.delete(l.id) : progress.add(l.id);
      saveProgress();
      setTopAction(doneButton(l));
      wireDoneButton(l);
    };
  }
  const bm = $('#btnBookmark');
  if (bm) {
    bm.onclick = () => {
      bookmarks.has(l.id) ? bookmarks.delete(l.id) : bookmarks.add(l.id);
      saveBookmarks();
      setTopAction(doneButton(l));
      wireDoneButton(l);
    };
  }
}

function speakText(text, lang = 'zh-CN') {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.82;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang && v.lang.startsWith(lang.slice(0, 2)));
    if (voice) u.voice = voice;
    window.speechSynthesis.speak(u);
  } catch (err) {}
}

function viewHome() {
  setCrumbs(['Beranda']);
  setTopAction('');

  const next = ALL.find(l => !progress.has(l.id)) || ALL[0];
  const totalDone = ALL.filter(l => progress.has(l.id)).length;
  const overallPct = Math.round(totalDone / ALL.length * 100);

  const cards = TRACKS.map(t => {
    const done = t.lessons.filter(l => progress.has(l.id)).length;
    const pct = Math.round(done / t.lessons.length * 100);
    const nextLesson = t.lessons.find(l => !progress.has(l.id)) || t.lessons[0];
    const isFinished = done === t.lessons.length;
    const catLabel = t.category === 'lang' ? '🌏 Bahasa' : '💻 IT';

    return `
      <div class="track-card" data-category="${t.category || 'it'}" style="--track:var(--${t.accent})">
        <div class="tc-top">
          <span class="tc-name"><span class="dot" style="background:var(--${t.accent})"></span>${t.title}</span>
          <span class="tc-badge">${catLabel} · ${t.lessons.length} materi</span>
        </div>
        <div class="tc-sub">${esc(t.subtitle)}</div>
        <div class="tc-meta">
          <span>Tingkat: <b>Pemula → Mahir</b></span>
          <span>${done}/${t.lessons.length} selesai</span>
        </div>
        <div class="tc-progress">
          <div class="tc-track"><div class="tc-fill" style="width:${pct}%;background:var(--${t.accent})"></div></div>
          <span class="tc-pct">${pct}%</span>
        </div>
        <div class="tc-actions">
          <a class="btn ${done > 0 && !isFinished ? 'btn-primary' : 'btn-ghost'}" href="#/m/${nextLesson.id}" style="padding:7px 15px;font-size:.82rem">
            ${isFinished ? 'Ulangi Materi ↺' : done > 0 ? `Lanjutkan: ${nextLesson.num} →` : 'Mulai Belajar →'}
          </a>
        </div>
      </div>`;
  }).join('');

  $('#view').innerHTML = `
    <div class="home-hero">
      <div class="home-kicker">
        <span class="kicker-dot"></span>
        RB Learning · Rekayasa Perangkat Lunak, AI &amp; Bahasa Dunia
      </div>
      <h1>Kuasai Skill <em>Software Engineering</em>, <em>AI</em> &amp; <em>Bahasa</em>.</h1>
      <p class="hero-desc">
        Kurikulum praktis berbahasa Indonesia dengan analogi ramah pemula. Dari fondasi web, version control, database, testing, bahasa performa tinggi, machine learning, aplikasi mobile, hingga bahasa percakapan Mandarin, Korea, dan Jepang.
      </p>
      <div class="home-actions">
        <a class="btn btn-primary" href="#/m/${next.id}">▶ Lanjutkan: ${esc(next.title)}</a>
        <a class="btn btn-ghost" href="#/quiz">Uji Pemahaman (Quiz)</a>
        <a class="btn btn-ghost" href="#/flashcard">Flashcard 🎴</a>
        <a class="btn btn-ghost" href="#/playground">Playground</a>
      </div>

      <div class="home-stats">
        <div class="stat-item">
          <span class="stat-val">${TRACKS.length}</span>
          <span class="stat-lbl">Track Pembelajaran</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">${ALL.length}</span>
          <span class="stat-lbl">Modul Materi Lengkap</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">${QUIZ_BANK.length}</span>
          <span class="stat-lbl">Soal Kuis Interaktif</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">${totalDone > 0 ? overallPct + '%' : '2'}</span>
          <span class="stat-lbl">${totalDone > 0 ? `${totalDone} Modul Selesai` : 'Bidang (IT &amp; Bahasa)'}</span>
        </div>
      </div>
    </div>

    <div class="home-catalog">
      <div class="home-section-head">
        <div>
          <div class="section-kicker">Katalog Kurikulum</div>
          <h2>Pilih Alur Belajar Kamu</h2>
        </div>
        <span class="section-count">${TRACKS.length} Jalur Keahlian Tersedia</span>
      </div>
      <div class="catalog-filter-row" id="catalogTabs">
        <button class="cat-tab active" data-cat="all">Semua (${TRACKS.length})</button>
        <button class="cat-tab" data-cat="it">💻 Rekayasa IT (${TRACKS.filter(t => (t.category || 'it') === 'it').length})</button>
        <button class="cat-tab" data-cat="lang">🌏 Bahasa Dunia (${TRACKS.filter(t => t.category === 'lang').length})</button>
      </div>
      <div class="track-cards" id="trackCardsGrid">${cards}</div>
    </div>

    <div class="home-features-section">
      <div class="home-section-head">
        <div>
          <div class="section-kicker">Metode Pembelajaran</div>
          <h2>Mengapa Belajar di RB Learning?</h2>
        </div>
      </div>
      <div class="home-features">
        <div class="feature-card">
          <div class="feature-icon">💡</div>
          <div class="feature-title">Analogi Ramah Orang Awam</div>
          <div class="feature-desc">Konsep rumit dijelaskan dengan perumpamaan sederhana Supriyanto yang sangat mudah dipahami.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <div class="feature-title">Playground &amp; Flashcard</div>
          <div class="feature-desc">Eksperimen kode dan latih hafalan kosakata bahasa asing langsung dari peramban secara interaktif.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <div class="feature-title">Kuis &amp; Pembahasan Detail</div>
          <div class="feature-desc">Uji pemahaman di setiap akhir materi dengan bank soal berbobot, lengkap dengan penjelasan logis di balik setiap jawaban.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💾</div>
          <div class="feature-title">Progres &amp; Catatan Mandiri</div>
          <div class="feature-desc">Lacak capaian belajar, bookmark materi favorit, dan simpan catatan pribadi persisten di browser tanpa perlu registrasi.</div>
        </div>
      </div>
    </div>`;

  const tabs = document.querySelectorAll('#catalogTabs .cat-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      document.querySelectorAll('#trackCardsGrid .track-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
      });
    });
  });

  scrollTop();
}

function viewBookmarks() {
  setCrumbs(['Materi Favorit']);
  setTopAction('');

  const bmLessons = ALL.filter(l => bookmarks.has(l.id));

  let itemsHtml = '';
  if (bmLessons.length === 0) {
    itemsHtml = `
      <div class="quiz-card" style="text-align:center;padding:40px 20px">
        <div style="font-size:2.8rem;margin-bottom:12px">⭐</div>
        <h3>Belum Ada Materi Favorit</h3>
        <p style="color:var(--ink-2);margin-bottom:20px">Buka materi apa saja dan klik tombol <b>⭐ Simpan</b> di bagian atas untuk menyimpan materi favorit Anda di sini.</p>
        <a class="btn btn-primary" href="#/">Jelajahi Kurikulum →</a>
      </div>`;
  } else {
    itemsHtml = `
      <div class="track-cards">
        ${bmLessons.map(l => `
          <div class="track-card" style="--track:var(--${l.track.accent})">
            <div class="tc-top">
              <span class="tc-name"><span class="dot" style="background:var(--${l.track.accent})"></span>${l.track.title}</span>
              <span class="tc-badge">Materi ${l.num}</span>
            </div>
            <div style="font-size:1.05rem;font-weight:600;color:var(--ink);margin:4px 0">${esc(l.title)}</div>
            <div class="tc-sub">${esc(l.desc || l.intro || '')}</div>
            <div class="tc-actions" style="margin-top:auto">
              <a class="btn btn-primary" href="#/m/${l.id}" style="padding:6px 14px;font-size:.82rem">Buka Materi →</a>
              <button class="btn btn-ghost" onclick="bookmarks.delete('${l.id}');saveBookmarks();viewBookmarks();" style="padding:6px 10px;font-size:.82rem">Hapus ⭐</button>
            </div>
          </div>`).join('')}
      </div>`;
  }

  $('#view').innerHTML = `
    <div class="quiz-head">
      <h2>⭐ Materi Favorit Saya</h2>
      <p>Koleksi modul yang Anda tandai untuk dipelajari ulang secara cepat.</p>
    </div>
    ${itemsHtml}`;

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

  const isMandarin = t.id === 'mandarin';
  const isKorean = t.id === 'korean';
  const isJapanese = t.id === 'japanese';
  const isLang = t.category === 'lang';

  let audioBanner = '';
  if (isLang) {
    const langName = isMandarin ? 'Mandarin' : isKorean ? 'Korea' : 'Jepang';
    audioBanner = `
      <div class="zh-audio-banner">
        <span class="zh-audio-ic">🔊</span>
        <div><b>Fitur Audio Interaktif:</b> Klik tombol speaker <button class="zh-speak-btn" style="pointer-events:none">🔊</button> atau klik langsung teks berhuruf tebal di bawah untuk mendengarkan pelafalan penutur asli bahasa ${langName}!</div>
      </div>`;
  }

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
      ${audioBanner}
      <div class="lesson-body">${l.body}</div>

      <div class="lesson-notes">
        <div class="notes-head">
          <div class="notes-title">📝 Catatan Pribadi Saya</div>
          <div class="notes-status" id="notesStatus">${notes[l.id] ? 'Tersimpan otomatis' : 'Belum ada catatan'}</div>
        </div>
        <textarea class="notes-area" id="notesArea" placeholder="Ketik rangkuman atau catatan penting materi ini... (tersimpan otomatis di browser)">${esc(notes[l.id] || '')}</textarea>
      </div>

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

  let notesTimer;
  const nArea = $('#notesArea');
  if (nArea) {
    nArea.addEventListener('input', e => {
      const val = e.target.value;
      const status = $('#notesStatus');
      if (status) status.textContent = 'Menyimpan...';
      clearTimeout(notesTimer);
      notesTimer = setTimeout(() => {
        if (val.trim()) {
          notes[l.id] = val;
        } else {
          delete notes[l.id];
        }
        localStorage.setItem(LS.notes, JSON.stringify(notes));
        if (status) status.textContent = 'Tersimpan otomatis';
      }, 400);
    });
  }

  if (isLang) {
    const langCode = isMandarin ? 'zh-CN' : isKorean ? 'ko-KR' : 'ja-JP';
    const charClass = isMandarin ? '.zh-char' : isKorean ? '.ko-char' : '.ja-char';

    $('#view').querySelectorAll(charClass).forEach(el => {
      const pureText = el.textContent.trim();
      if (pureText && !el.querySelector('.zh-speak-btn')) {
        el.dataset.speak = pureText;
        el.dataset.lang = langCode;
        el.title = `Klik untuk mendengarkan "${pureText}"`;
        const btn = document.createElement('button');
        btn.className = 'zh-speak-btn';
        btn.dataset.speak = pureText;
        btn.dataset.lang = langCode;
        btn.title = `Putar suara "${pureText}"`;
        btn.innerHTML = '🔊';
        el.appendChild(btn);
      }
    });

    $('#view').querySelectorAll('.code-block').forEach(cb => {
      const lines = cb.innerHTML.split('\n');
      let changed = false;
      const newLines = lines.map(line => {
        const textOnly = line.replace(/<[^>]+>/g, '').trim();
        const hasAsianChars = isMandarin ? /[\u4e00-\u9fa5]/.test(textOnly)
          : isKorean ? /[\uac00-\ud7af\u1100-\u11ff]/.test(textOnly)
          : /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fa5]/.test(textOnly);

        if (!line.includes('dialog-speak-btn') && hasAsianChars) {
          let speechText = textOnly.replace(/^[A-Za-z0-9_\u4e00-\u9fa5\uac00-\ud7af\s]+[:：]\s*/, '');
          speechText = speechText.replace(/\s*\([^)]*\)\s*$/, '').trim();
          if (speechText) {
            changed = true;
            return `${line} <button class="dialog-speak-btn" data-speak="${esc(speechText)}" data-lang="${langCode}" title="Putar kalimat: ${esc(speechText)}">🔊</button>`;
          }
        }
        return line;
      });
      if (changed) cb.innerHTML = newLines.join('\n');
    });
  }
}

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

function viewPlayground() {
  setCrumbs(['Praktik', 'Playground']);
  setTopAction('');

  const saved = localStorage.getItem(LS.code) ||
    'const daftar = ["Belajar", "Praktik", "Paham"];\\n' +
    'const hasil = daftar.map((item, i) => (i + 1) + ". " + item + " bersama Supriyanto");\\n' +
    'console.log(hasil);';

  $('#view').innerHTML = `
    <div class="pg-layout">
      <div class="pg-editor">
        <div class="pg-bar">
          <span>JavaScript Playground</span>
          <button class="btn btn-primary" id="pgRun">Jalankan (Ctrl+Enter) ▶</button>
        </div>
        <textarea id="pgCode" spellcheck="false">${esc(saved)}</textarea>
      </div>
      <div class="pg-console">
        <div class="pg-bar">
          <span>Console Output</span>
          <button class="btn btn-ghost" id="pgClear">Bersihkan</button>
        </div>
        <div class="pg-output" id="pgOut"></div>
      </div>
    </div>`;

  $('#pgRun').addEventListener('click', runPlayground);
  $('#pgClear').addEventListener('click', () => { $('#pgOut').innerHTML = ''; });
  $('#pgCode').addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runPlayground();
    }
  });

  scrollTop();
}

function fmt(v) {
  if (v === null) return 'null';
  if (v === undefined) return 'undefined';
  if (typeof v === 'string') return v;
  try { return JSON.stringify(v, null, 2); }
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
    const sandbox = new Function('console', 'window', 'document', 'localStorage', 'sessionStorage', 'fetch', 'XMLHttpRequest', code);
    sandbox(fakeConsole, {}, {}, {}, {}, undefined, undefined);
  } catch (err) {
    lines.push(`<div class="line err"><span class="tag">✗</span>${esc(err.name + ': ' + err.message)}</div>`);
  }
  out.innerHTML = lines.join('');
  localStorage.setItem(LS.code, code);
}

const FLASHCARDS = [
  { char: '你好', pinyin: 'Nǐ hǎo', meaning: 'Halo / Salam sapaan', example: '你好！我是苏普扬托。 (Halo! Saya Supriyanto)', lang: 'zh-CN' },
  { char: '谢谢', pinyin: 'Xièxie', meaning: 'Terima kasih', example: '非常感谢！ (Terima kasih banyak!)', lang: 'zh-CN' },
  { char: '对不起', pinyin: 'Duìbuqǐ', meaning: 'Maaf / Permisi', example: '对不起，我来晚了。 (Maaf, saya datang terlambat)', lang: 'zh-CN' },
  { char: '多少钱', pinyin: 'Duōshao qián', meaning: 'Berapa harganya?', example: '老板，这个多少钱？ (Pak Bos, ini berapa harganya?)', lang: 'zh-CN' },
  { char: '太贵了', pinyin: 'Tài guì le', meaning: 'Terlalu mahal!', example: '太贵了！能便宜一点吗？ (Terlalu mahal! Bisa murah sedikit?)', lang: 'zh-CN' },
  { char: '不要辣', pinyin: 'Bú yào là', meaning: 'Tolong jangan pedas', example: '服务员，这一份不要辣。 (Pelayan, porsi ini jangan pedas)', lang: 'zh-CN' },
  { char: '买单', pinyin: 'Mǎidān', meaning: 'Minta bon / Tagihan', example: '服务员，买单！ (Pelayan, minta bon tagihan!)', lang: 'zh-CN' },
  { char: '很高兴认识你', pinyin: 'Hěn gāoxìng rènshi nǐ', meaning: 'Senang berkenalan dengan Anda', example: '很高兴认识你，苏普扬托！ (Senang berkenalan denganmu, Supriyanto!)', lang: 'zh-CN' },
  { char: '안녕하세요', pinyin: 'Annyeonghaseyo', meaning: 'Halo / Selamat pagi/siang/malam', example: '안녕하세요! 저는 수프리얀토예요. (Halo! Saya adalah Supriyanto)', lang: 'ko-KR' },
  { char: '감사합니다', pinyin: 'Gamsahamnida', meaning: 'Terima kasih banyak', example: '도와주셔서 감사합니다. (Terima kasih atas bantuannya)', lang: 'ko-KR' },
  { char: '얼마예요?', pinyin: 'Eolmayeyo?', meaning: 'Berapa harganya?', example: '이거 얼마예요? (Ini berapa harganya?)', lang: 'ko-KR' },
  { char: '주세요', pinyin: 'Juseyo', meaning: 'Tolong berikan saya...', example: '물 좀 주세요. (Tolong minta air putih)', lang: 'ko-KR' },
  { char: 'ありがとう', pinyin: 'Arigatou gozaimasu', meaning: 'Terima kasih banyak', example: 'ありがとうございます！ (Terima kasih banyak!)', lang: 'ja-JP' },
  { char: 'すみません', pinyin: 'Sumimasen', meaning: 'Permisi / Maaf', example: 'すみません、トイレはどこですか？ (Permisi, toilet di mana ya?)', lang: 'ja-JP' },
  { char: 'いくらですか', pinyin: 'Ikura desu ka?', meaning: 'Berapa harganya?', example: 'これはいくらですか？ (Ini berapa harganya?)', lang: 'ja-JP' },
  { char: 'ごちそうさま', pinyin: 'Gochisousama deshita', meaning: 'Terima kasih atas hidangannya', example: 'とても美味しかったです！ (Sangat lezat sekali!)', lang: 'ja-JP' }
];

let fcIndex = 0;
let fcDeck = [...FLASHCARDS];

function viewFlashcard() {
  setCrumbs(['Praktik', 'Flashcard Kosakata']);
  setTopAction('');

  const renderCard = () => {
    const item = fcDeck[fcIndex];
    return `
      <div class="flashcard-view">
        <div class="fc-head">
          <h2>🎴 Flashcard Kosakata Multibahasa</h2>
          <p>Latih daya ingat kosakata Mandarin, Korea, dan Jepang dengan kartu interaktif.</p>
        </div>

        <div class="fc-card-wrapper" id="fcCard">
          <div class="fc-inner">
            <div class="fc-front">
              <span class="fc-counter">KARTU ${fcIndex + 1} / ${fcDeck.length}</span>
              <div class="fc-char">${item.char}</div>
              <button class="zh-speak-btn" data-speak="${item.char}" data-lang="${item.lang}" style="margin-bottom:12px">🔊 Putar Suara</button>
              <div class="fc-hint">👆 Klik kartu untuk melihat arti &amp; contoh</div>
            </div>
            <div class="fc-back">
              <span class="fc-counter">ARTI &amp; CONTOH KALIMAT</span>
              <div class="fc-pinyin">${item.pinyin}</div>
              <div class="fc-meaning">${item.meaning}</div>
              <div class="fc-example">${item.example}</div>
              <div class="fc-hint">👆 Klik kartu untuk kembali ke depan</div>
            </div>
          </div>
        </div>

        <div class="fc-controls">
          <button class="fc-btn" id="fcPrev">← Sebelumnya</button>
          <button class="fc-btn" id="fcShuffle">🔀 Acak</button>
          <button class="fc-btn primary" id="fcNext">Berikutnya →</button>
        </div>
      </div>`;
  };

  $('#view').innerHTML = renderCard();

  const bindEvents = () => {
    const card = $('#fcCard');
    if (card) {
      card.onclick = (e) => {
        if (e.target.closest('button')) return;
        card.classList.toggle('flipped');
      };
    }
    const prev = $('#fcPrev');
    if (prev) {
      prev.onclick = () => {
        fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
        $('#view').innerHTML = renderCard();
        bindEvents();
      };
    }
    const next = $('#fcNext');
    if (next) {
      next.onclick = () => {
        fcIndex = (fcIndex + 1) % fcDeck.length;
        $('#view').innerHTML = renderCard();
        bindEvents();
      };
    }
    const shuffle = $('#fcShuffle');
    if (shuffle) {
      shuffle.onclick = () => {
        fcDeck.sort(() => Math.random() - 0.5);
        fcIndex = 0;
        $('#view').innerHTML = renderCard();
        bindEvents();
      };
    }
  };

  bindEvents();
  scrollTop();
}

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
    { id: 'flutter', label: 'Flutter 💙' },
    { id: 'git', label: 'Git & GitHub 🐙' },
    { id: 'js', label: 'JavaScript 🟨' },
    { id: 'mojo', label: 'Mojo 🔥' },
    { id: 'pw', label: 'Playwright 🎭' },
    { id: 'py', label: 'Python 🐍' },
    { id: 'rn', label: 'React Native 📱' },
    { id: 'sql', label: 'SQL & DB 🗄️' },
    { id: 'ts', label: 'TypeScript 🔷' },
    { id: 'mandarin', label: 'Mandarin 🇨🇳' },
    { id: 'korean', label: 'Korea 🇰🇷' },
    { id: 'japanese', label: 'Jepang 🇯🇵' }
  ];
  $('#view').innerHTML = `
    <div class="quiz-head">
      <h2>Quiz</h2>
      <p>${QUIZ_BANK.length} soal dari seluruh materi. Pilih cakupan materi, jawab, dan baca penjelasannya untuk mempertajam pemahaman.</p>
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

function startQuiz(trackId) {
  const pool = trackId === 'all' ? QUIZ_BANK : QUIZ_BANK.filter(q => q.track === trackId);
  if (!pool.length) {
    $('#quizArea').innerHTML = '<div class="quiz-empty">Belum ada soal untuk track ini.</div>';
    return;
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(10, shuffled.length));

  quiz = {
    trackId,
    questions: selected,
    idx: 0,
    answers: [],
    correctCount: 0
  };
  renderQuestion();
}

function renderQuestion() {
  const q = quiz.questions[quiz.idx];
  const total = quiz.questions.length;
  const current = quiz.idx + 1;

  $('#quizArea').innerHTML = `
    <div class="quiz-card">
      <div class="quiz-progress-bar"><div class="quiz-pb-fill" style="width:${Math.round(current / total * 100)}%"></div></div>
      <div class="quiz-meta">
        <span class="quiz-step">Soal ${current} dari ${total}</span>
        <span class="quiz-topic">${esc(q.topic)}</span>
      </div>
      <div class="quiz-q">${esc(q.q)}</div>
      <div class="quiz-opts">
        ${q.opts.map((opt, i) => `
          <button class="quiz-opt" data-i="${i}">
            <span class="quiz-opt-key">${String.fromCharCode(65 + i)}</span>
            <span class="quiz-opt-text">${esc(opt)}</span>
          </button>`).join('')}
      </div>
      <div class="quiz-why" id="quizWhy"></div>
      <div class="quiz-actions">
        <button class="btn btn-primary" id="quizNext" disabled>Soal Berikutnya →</button>
      </div>
    </div>`;

  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => chooseAnswer(parseInt(btn.dataset.i, 10)));
  });
  $('#quizNext').addEventListener('click', nextQuestion);
}

function chooseAnswer(choice) {
  const q = quiz.questions[quiz.idx];
  quiz.answers[quiz.idx] = choice;
  const isCorrect = choice === q.ans;
  if (isCorrect) quiz.correctCount++;

  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('correct');
    else if (i === choice) btn.classList.add('wrong');
  });

  const why = $('#quizWhy');
  why.innerHTML = `
    <div class="why-badge ${isCorrect ? 'why-ok' : 'why-no'}">${isCorrect ? '✓ Benar!' : '✗ Kurang tepat'}</div>
    <div class="why-body">${esc(q.why)}</div>`;
  why.classList.add('show');
  $('#quizNext').disabled = false;
}

function nextQuestion() {
  quiz.idx++;
  if (quiz.idx < quiz.questions.length) {
    renderQuestion();
  } else {
    renderQuizResult();
  }
}

function renderQuizResult() {
  const total = quiz.questions.length;
  const score = Math.round(quiz.correctCount / total * 100);

  $('#quizArea').innerHTML = `
    <div class="quiz-card quiz-result">
      <div class="qr-score">${score}%</div>
      <div class="qr-label">${quiz.correctCount} dari ${total} jawaban benar</div>
      <div class="qr-desc">
        ${score === 100 ? 'Sempurna! Anda menguasai materi ini dengan sangat baik.' :
          score >= 70 ? 'Bagus sekali! Pemahaman konsep Anda sudah sangat kokoh.' :
          'Tetap semangat! Ulangi materi yang terlewat untuk memperkuat pemahaman.'}
      </div>
      <div class="qr-actions">
        <button class="btn btn-primary" onclick="startQuiz('${quiz.trackId}')">Ulangi Quiz ↺</button>
        <button class="btn btn-ghost" onclick="renderQuizStart()">Pilih Materi Lain</button>
      </div>
    </div>`;
}

function addCopyButtons(root) {
  root.querySelectorAll('.code-block').forEach(cb => {
    if (cb.querySelector('.copy-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Salin';
    btn.onclick = () => {
      const clone = cb.cloneNode(true);
      clone.querySelectorAll('.copy-btn, .dialog-speak-btn').forEach(el => el.remove());
      navigator.clipboard.writeText(clone.textContent.trim()).then(() => {
        btn.textContent = 'Tersalin!';
        setTimeout(() => { btn.textContent = 'Salin'; }, 1500);
      });
    };
    cb.appendChild(btn);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(LS.theme, theme);
}

function render() {
  const hash = location.hash || '#/';
  closeSidebar();

  if (hash === '#/' || hash === '#') { viewHome(); }
  else if (hash === '#/bookmarks') { viewBookmarks(); }
  else if (hash === '#/playground') { viewPlayground(); }
  else if (hash === '#/flashcard') { viewFlashcard(); }
  else if (hash === '#/quiz') { viewQuiz(); }
  else if (hash.startsWith('#/m/')) { viewLesson(hash.slice(4)); }
  else { location.hash = '#/'; }

  highlightActive();
}

function openSidebar() {
  $('#sidebar').classList.add('open');
  $('#sidebarScrim').classList.add('show');
}
function closeSidebar() {
  $('#sidebar').classList.remove('open');
  $('#sidebarScrim').classList.remove('show');
}

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
  if (confirm('Hapus semua progres dan catatan di browser ini?')) {
    progress.clear();
    bookmarks.clear();
    notes = {};
    saveProgress();
    saveBookmarks();
    localStorage.removeItem(LS.notes);
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

document.addEventListener('click', e => {
  const target = e.target.closest('[data-speak]');
  if (target) {
    const text = target.dataset.speak;
    const lang = target.dataset.lang || 'zh-CN';
    if (text) {
      speakText(text, lang);
      target.classList.add('speaking');
      setTimeout(() => target.classList.remove('speaking'), 800);
    }
  }
});
