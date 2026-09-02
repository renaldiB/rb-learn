/* Ekstraksi materi dari kedua modul lama menjadi satu data terstruktur.
   Output: js/data.js */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const JS_DIR = 'C:/Users/Z Series/MainRB/Code Project/Learn JS';
const PW_DIR = 'C:/Users/Z Series/MainRB/Code Project/Learn Playwright';

/* ---------- 1. MATERI JAVASCRIPT ---------- */
const lessonsSrc = readFileSync(join(JS_DIR, 'js/lessons.js'), 'utf8');
const LESSONS = new Function(
  lessonsSrc.replace(/^const LESSONS =/, 'var LESSONS =') + '\nreturn LESSONS;'
)();

/* perbaikan teks korup dari file lama */
const FIX = [
  [/buah/g, 'buah'],
  [/console\.log\(<span class="nm">5<\/span> == <span class="st">"5"<\/span>\);   <span class="cm">\/\/ true — tapi jangan dipake<\/span>/g,
   'console.log(<span class="nm">5</span> == <span class="st">"5"</span>);   <span class="cm">// true — tapi bahaya, hindarin</span>'],
  [/<p>Programnya: cek umur &gt;= 18\? Gak\. Cek umur &gt;= 13\? <b>Iya<\/b> → jalanin blok itu\. Sisanya di-skip\.<\/p>/,
   '<p>Programnya: cek umur &gt;= 18? Gak. Cek umur &gt;= 13? Iya → jalanin blok itu. Sisanya di-skip.</p>'],
  [/Data dari API \(backend\) bentuknya gini semua\. Hafalin kombinasi <code class="inline">array\.map\(x =&gt; x\.properti\)<\/code>\./,
   'Data dari API (backend) hampir selalu berbentuk array of objects. Hafalin kombinasi <code class="inline">array.map(u =&gt; u.nama)</code>.'],
  [/\/\/ map: ubah TIDAK SEMUA → tambah pajak 10%/g, '// map: ubah SEMUA → tambah pajak 10%'],
];

const jsTrack = {
  id: 'js',
  title: 'JavaScript',
  subtitle: 'Fondasi bahasa: dari variabel sampai async/await',
  accent: 'amber',
  lessons: LESSONS.map(l => {
    let intro = l.intro, body = l.body;
    for (const [re, rep] of FIX) { intro = intro.replace(re, rep); body = body.replace(re, rep); }
    return {
      id: 'js-' + l.id,
      num: l.num,
      title: l.title.replace(/: /, ' — '),
      level: l.tag,
      desc: l.desc,
      intro, body,
      quiz: { q: l.quiz.q, opts: l.quiz.opts, ans: l.quiz.ans, why: l.quiz.why },
    };
  }),
};

/* ---------- 2. MATERI PLAYWRIGHT ---------- */
const pwHtml = readFileSync(join(PW_DIR, 'index.html'), 'utf8');

function balanceSlice(src, startIdx, open, close) {
  let depth = 0, i = startIdx;
  for (; i < src.length; i++) {
    if (src.startsWith(open, i)) { depth++; i += open.length - 1; }
    else if (src.startsWith(close, i)) {
      depth--; i += close.length - 1;
      if (depth === 0) return src.slice(startIdx, i + 1);
    }
  }
  throw new Error('unbalanced');
}

const pwTrack = {
  id: 'pw',
  title: 'Playwright',
  subtitle: 'Automation testing: locator, action, assertion, sampai CI/CD',
  accent: 'green',
  lessons: [],
};

const moduleRe = /<div class="module" id="module-(\d+)">/g;
let m;
while ((m = moduleRe.exec(pwHtml)) !== null) {
  const num = String(m[1]).padStart(2, '0');
  const start = m.index;
  const block = balanceSlice(pwHtml, start, '<div', '</div>');
  // safe inner extraction: take up to the last "</div></div></div>" inside block
  const title = block.match(/<div class="module-title">([^<]+)<\/div>/)[1].trim();
  const metaCount = block.match(/<span>📖 ([^<]+)<\/span>/)?.[1]?.trim() || '';
  const tagClass = block.match(/<span class="tag (tag-[a-z]+)"/)[1];
  const level = { 'tag-beginner': 'Pemula', 'tag-intermediate': 'Menengah', 'tag-advanced': 'Mahir' }[tagClass];
  const contentStart = block.indexOf('<div class="lesson-content">') + '<div class="lesson-content">'.length;
  const contentEnd = block.lastIndexOf('<\/div></div></div>');
  let html = block.slice(contentStart, contentEnd);
  // normalisasi struktur modul bernomor (1.1 → tanpa nomor modul, karena sudah ada nomor modul di UI)
  html = html.replace(/<h4>📌 ([\d.]+) /g, '<h4>📌 ');
  pwTrack.lessons.push({ id: `pw-${num}`, num, title, level, desc: metaCount, body: html });
}

/* ---------- 3. QUIZ PLAYWRIGHT ---------- */
const pwScript = readFileSync(join(PW_DIR, 'script.js'), 'utf8');
const qStart = pwScript.indexOf('var QUIZZES');
const qEnd = pwScript.indexOf('\n};', qStart) + 3;
const qSrc = pwScript.slice(qStart, qEnd).replace(/^var QUIZZES =/, '').replace(/;\s*$/, '');
const PW_QUIZZES = new Function(`return (${qSrc})`)();

const pwQuizBank = [];
for (const [key, quiz] of Object.entries(PW_QUIZZES)) {
  const num = String(key).padStart(2, '0');
  const lesson = pwTrack.lessons.find(l => l.id === `pw-${num}`);
  for (const q of quiz.questions) {
    pwQuizBank.push({
      track: 'pw',
      topic: lesson ? lesson.title : quiz.title,
      q: q.q.replace(/^\d+\.\s*/, ''),
      opts: q.opts, ans: q.correct, why: q.explain,
    });
  }
}

const jsQuizBank = jsTrack.lessons.map(l => ({
  track: 'js', topic: l.title, q: l.quiz.q, opts: l.quiz.opts, ans: l.quiz.ans, why: l.quiz.why,
}));

/* ---------- OUTPUT ---------- */
const out = `/* Data materi gabungan — dihasilkan dari modul Learn JS + Learn Playwright */
const TRACKS = ${JSON.stringify(jsTrack, null, 0).replace('{', '{\n  ').replace(/},\{/g, '},\n  {')};
`;
mkdirSync(join(HERE, '..', 'js'), { recursive: true });
writeFileSync(join(HERE, '..', 'js/data.js'),
  '/* Data materi gabungan — dihasilkan dari modul "Learn JS" + "Learn Playwright". */\n'
  + 'const TRACKS = ' + JSON.stringify([jsTrack, pwTrack], null, 1) + ';\n\n'
  + 'const QUIZ_BANK = ' + JSON.stringify([...jsQuizBank, ...pwQuizBank], null, 1) + ';\n'
);

console.log('JS lessons:', jsTrack.lessons.length);
console.log('PW lessons:', pwTrack.lessons.length);
console.log('Quiz total:', jsQuizBank.length + pwQuizBank.length, '(js', jsQuizBank.length, '/ pw', pwQuizBank.length + ')');
console.log('PW lesson bodies OK:', pwTrack.lessons.every(l => l.body.includes('code-block')));
