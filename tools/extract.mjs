/* Ekstraksi materi JavaScript, Playwright, dan Mojo menjadi data terstruktur.
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

/* perbaikan teks & standarisasi nama menjadi Supriyanto */
const FIX = [
  [/buah/g, 'buah'],
  [/console\.log\(<span class="nm">5<\/span> == <span class="st">"5"<\/span>\);   <span class="cm">\/\/ true — tapi jangan dipake<\/span>/g,
   'console.log(<span class="nm">5</span> == <span class="st">"5"</span>);   <span class="cm">// true — tapi bahaya, hindari</span>'],
  [/<p>Programnya: cek umur &gt;= 18\? Gak\. Cek umur &gt;= 13\? <b>Iya<\/b> → jalanin blok itu\. Sisanya di-skip\.<\/p>/,
   '<p>Programnya: cek umur &gt;= 18? Tidak. Cek umur &gt;= 13? <b>Ya</b> → jalankan blok itu. Sisanya dilewati.</p>'],
  [/Data dari API \(backend\) bentuknya gini semua\. Hafalin kombinasi <code class="inline">array\.map\(x =&gt; x\.properti\)<\/code>\./,
   'Data dari API (backend) hampir selalu berbentuk array of objects. Hafalkan kombinasi <code class="inline">array.map(u =&gt; u.nama)</code>.'],
  [/\/\/ map: ubah TIDAK SEMUA → tambah pajak 10%/g, '// map: ubah SEMUA → tambah pajak 10%'],
  [/BANG@EMAIL\.COM/g, 'SUPRIYANTO@EMAIL.COM'],
  [/\bBang\b/g, 'Supriyanto'],
  [/\bbang\b/g, 'Supriyanto'],
  [/\blo\b/gi, 'kamu'],
  [/\blu\b/gi, 'kamu'],
  [/\bgw\b/gi, 'saya'],
  [/\bgua\b/gi, 'saya'],
  [/\bngapain\b/gi, 'apa yang dilakukan'],
  [/\bjalanin\b/gi, 'jalankan'],
  [/\bnyimpen\b/gi, 'menyimpan'],
  [/\bnginget\b/gi, 'mengingat'],
];

const jsTrack = {
  id: 'js',
  title: 'JavaScript',
  subtitle: 'Fondasi bahasa: dari variabel sampai async/await',
  accent: 'amber',
  lessons: LESSONS.map(l => {
    let intro = l.intro, body = l.body, desc = l.desc;
    let quizQ = l.quiz.q, quizWhy = l.quiz.why;
    let quizOpts = l.quiz.opts.map(o => o);

    for (const [re, rep] of FIX) {
      intro = intro.replace(re, rep);
      body = body.replace(re, rep);
      desc = desc.replace(re, rep);
      quizQ = quizQ.replace(re, rep);
      quizWhy = quizWhy.replace(re, rep);
      quizOpts = quizOpts.map(o => o.replace(re, rep));
    }

    return {
      id: 'js-' + l.id,
      num: l.num,
      title: l.title.replace(/: /, ' — ').replace(/\bBang\b/g, 'Supriyanto'),
      level: l.tag,
      desc,
      intro, body,
      quiz: { q: quizQ, opts: quizOpts, ans: l.quiz.ans, why: quizWhy },
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
  const title = block.match(/<div class="module-title">([^<]+)<\/div>/)[1].trim();
  const metaCount = block.match(/<span>📖 ([^<]+)<\/span>/)?.[1]?.trim() || '';
  const tagClass = block.match(/<span class="tag (tag-[a-z]+)"/)[1];
  const level = { 'tag-beginner': 'Pemula', 'tag-intermediate': 'Menengah', 'tag-advanced': 'Mahir' }[tagClass];
  const contentStart = block.indexOf('<div class="lesson-content">') + '<div class="lesson-content">'.length;
  const contentEnd = block.lastIndexOf('<\/div></div></div>');
  let html = block.slice(contentStart, contentEnd);
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

/* ---------- 4. MATERI MOJO 🔥 ---------- */
const mojoLessons = [
  {
    id: "mojo-01",
    num: "01",
    title: "Pengenalan & Filosofi Mojo",
    level: "Pemula",
    desc: "Mengapa dunia AI membutuhkan bahasa baru yang secepat C++ dan semudah Python.",
    intro: "Mojo diciptakan oleh Chris Lattner (pencipta LLVM, Clang, dan Swift) untuk menyelesaikan dilema terbesar AI: Python sangat ramah developer tapi lambat, sedangkan C++ sangat cepat tapi rumit dan rawan error memori.",
    body: `
      <h4>🏎️ Analogi Mobil Balap Supercar</h4>
      <p>Bayangkan <b>Python</b> adalah mobil keluarga yang sangat nyaman, empuk, dan mudah dikendarai siapa saja — tapi jika dipaksa balapan di sirkuit (komputasi AI beban tinggi), mesinnya cepat panas dan lambat. Di sisi lain, <b>C++</b> adalah mobil balap F1 yang super kencang, tetapi setirnya sangat keras, tidak ada fitur keselamatan otomatis, dan jika salah sedikit bisa langsung celaka (memory crash / segfault).</p>
      <p><b>Mojo</b> adalah supercar modern: kemudi dan kenyamanan dashboard-nya ramah seperti Python, tetapi mesin pacu di dalamnya berkecepatan mobil balap F1 tanpa kompromi.</p>

      <div class="tip-box">
        <span class="tip-box-icon">🔥</span>
        <div><b>Fakta Kunci:</b> Ekstensi file Mojo bisa menggunakan <code class="inline">.mojo</code> atau simbol api <code class="inline">.🔥</code>. Mojo kompatibel penuh dengan Python, namun mampu berjalan hingga <b>35.000x - 68.000x lebih cepat</b> untuk operasi matriks dan AI.</div>
      </div>

      <h4>📝 Program Pertama: Halo Supriyanto</h4>
      <p>Di Mojo, Anda bisa memulai fungsi utama dengan kata kunci <code class="inline">fn main()</code>:</p>
      <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>():
    <span class="cm"># Mencetak teks ke layar</span>
    <span class="fn">print</span>(<span class="st">"Halo Supriyanto! Selamat datang di dunia Mojo 🔥"</span>)
    
    <span class="kw">let</span> pesan = <span class="st">"Mojo menggabungkan kemudahan Python dengan kecepatan C++"</span>
    <span class="fn">print</span>(pesan)</div>

      <h4>⚡ Mengapa AI Sangat Membutuhkan Mojo?</h4>
      <p>Model AI modern (seperti ChatGPT, model penglihatan komputer, dan pengenal suara) melakukan miliaran operasi matematika setiap detik. Python murni tidak sanggup melakukannya langsung di CPU/GPU tanpa bantuan library C++/CUDA di belakang layar. Mojo menyatukan seluruh tumpukan teknologi tersebut menjadi satu bahasa tunggal.</p>
    `,
    quiz: {
      q: "Siapa tokoh di balik penciptaan bahasa pemrograman Mojo?",
      opts: ["Chris Lattner (pencipta LLVM & Swift)", "Guido van Rossum", "Brendan Eich", "James Gosling"],
      ans: 0,
      why: "Mojo dirancang oleh Chris Lattner bersama tim Modular untuk menyatukan ekosistem AI dan komputasi performa tinggi."
    }
  },
  {
    id: "mojo-02",
    num: "02",
    title: "Variabel let vs var & Strict Typing",
    level: "Pemula",
    desc: "Memahami imutabilitas, efisiensi alokasi memori, dan deklarasi tipe data.",
    intro: "Mojo memperkenalkan kata kunci let dan var untuk membedakan data yang permanen (konstan) dan data yang boleh diubah. Ini memberi tahu kompiler cara mengalokasikan memori seefisien mungkin.",
    body: `
      <h4>🗿 Analogi Ukiran Batu vs Papan Tulis</h4>
      <p>Di Mojo:</p>
      <ul>
        <li><code class="inline">let</code> seperti <b>memahat di atas batu</b>: sekali nilai diukir, nilai tersebut permanen dan tidak bisa diubah lagi (*immutable*). Kompiler sangat menyukai <code class="inline">let</code> karena bisa melakukan optimasi memori secara agresif.</li>
        <li><code class="inline">var</code> seperti <b>menulis di papan tulis</b>: nilainya fleksibel dan bisa dihapus lalu diganti kapan saja (*mutable*).</li>
      </ul>

      <h4>📦 Deklarasi Tipe Data Primitif</h4>
      <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>():
    <span class="cm"># Deklarasi nilai konstan (let)</span>
    <span class="kw">let</span> nama_pengguna: String = <span class="st">"Supriyanto"</span>
    <span class="kw">let</span> dimensi_tensor: Int = <span class="nm">512</span>
    
    <span class="cm"># Deklarasi variabel yang bisa diubah (var)</span>
    <span class="kw">var</span> skor_akurasi: Float64 = <span class="nm">0.85</span>
    <span class="fn">print</span>(<span class="st">"Akurasi awal Supriyanto:"</span>, skor_akurasi)
    
    <span class="cm"># Memperbarui nilai variabel</span>
    skor_akurasi = <span class="nm">0.96</span>
    <span class="fn">print</span>(<span class="st">"Akurasi setelah training:"</span>, skor_akurasi)</div>

      <div class="note">
        <b>Mengapa Tipe Data Ketat Penting untuk AI?</b> Saat komputer tahu pasti bahwa suatu data adalah <code class="inline">Float32</code> atau <code class="inline">Int</code>, komputer tidak perlu memeriksa ulang tipe data tersebut saat melakukan miliaran perhitungan matriks di GPU.
      </div>
    `,
    quiz: {
      q: "Apa perbedaan mendasar antara kata kunci 'let' dan 'var' di Mojo?",
      opts: [
        "let bersifat konstan (immutable), sedangkan var bisa diubah (mutable)",
        "let hanya untuk angka, sedangkan var hanya untuk teks",
        "let lebih lambat daripada var",
        "let wajib di dalam class, var di luar class"
      ],
      ans: 0,
      why: "Di Mojo, 'let' mendeklarasikan nilai konstan yang tidak dapat diubah (immutable), sedangkan 'var' mendeklarasikan variabel yang nilainya bisa diubah (mutable)."
    }
  },
  {
    id: "mojo-03",
    num: "03",
    title: "Fungsi fn vs def — Fleksibel vs Performa Maksimal",
    level: "Pemula",
    desc: "Memilih antara fungsi dinamis ala Python atau fungsi terkompilasi super cepat.",
    intro: "Mojo memberi kebebasan: Anda bisa menulis fungsi santai ala Python dengan def, atau fungsi berkecepatan native dengan fn.",
    body: `
      <h4>🧑‍🍳 Analogi Koki Santai vs Pabrik Berstandar ISO</h4>
      <p>Bayangkan dua cara membuat makanan:</p>
      <ul>
        <li><code class="inline">def</code> seperti <b>koki freestyle di dapur rumah</b>: Anda bisa memasukkan bahan apa saja tanpa timbangan ketat (argumen opsional & dinamis). Cepat dibuat untuk eksperimen, tetapi butuh waktu memeriksa bahan saat proses memasak.</li>
        <li><code class="inline">fn</code> seperti <b>pabrik makanan berstandar presisi tinggi</b>: semua takaran bahan, suhu, dan wadah diperiksa ketat sejak awal sebelum mesin berjalan. Hasilnya: jutaan porsi diproduksi dalam hitungan detik tanpa ada cacat (*type-safe & zero-overhead*).</li>
      </ul>

      <h4>🛠️ Contoh Kode: def vs fn</h4>
      <div class="code-block"><span class="cm"># 1. Gaya dinamis (def) — mirip Python murni</span>
<span class="kw">def</span> <span class="fn">sapa_pengguna</span>(nama):
    <span class="fn">print</span>(<span class="st">"Halo, "</span> + nama)

<span class="cm"># 2. Gaya ketat performa tinggi (fn) — dikompilasi ke kode mesin langsung</span>
<span class="kw">fn</span> <span class="fn">hitung_bobot_ai</span>(bobot: Float32, input_val: Float32) -&gt; Float32:
    <span class="kw">let</span> bias: Float32 = <span class="nm">0.05</span>
    <span class="kw">let</span> hasil = (bobot * input_val) + bias
    <span class="kw">return</span> hasil

<span class="kw">fn</span> <span class="fn">main</span>():
    sapa_pengguna(<span class="st">"Supriyanto"</span>)
    <span class="kw">let</span> sinyal = hitung_bobot_ai(<span class="nm">0.8</span>, <span class="nm">1.5</span>)
    <span class="fn">print</span>(<span class="st">"Sinyal neuron AI:"</span>, sinyal)</div>

      <div class="tip">
        <b>Rekomendasi Praktik Terbaik:</b> Gunakan <code class="inline">fn</code> untuk semua fungsi yang memproses komputasi matematika, pemrosesan data, dan inferensi model AI. Gunakan <code class="inline">def</code> saat membuat prototype atau berinteraksi dengan library Python.
      </div>
    `,
    quiz: {
      q: "Kapan sebaiknya kita menggunakan kata kunci 'fn' dibandingkan 'def' di Mojo?",
      opts: [
        "Ketika menginginkan performa maksimal, keamanan tipe data, dan kompilasi native langsung ke mesin",
        "Hanya saat menulis kode HTML",
        "Hanya ketika mengimpor library JavaScript",
        "Ketika tidak ingin menentukan tipe data sama sekali"
      ],
      ans: 0,
      why: "'fn' menerapkan aturan ketat (strict typing & memory safety) sehingga kompiler Mojo dapat menghasilkan kode mesin yang berjalan dengan kecepatan native."
    }
  },
  {
    id: "mojo-04",
    num: "04",
    title: "Struktur Data & struct",
    level: "Menengah",
    desc: "Membuat tipe data kustom berkinerja tinggi tanpa beban alokasi dinamis.",
    intro: "Di Python kita biasa menggunakan class. Di Mojo, struct adalah tulang punggung struktur data berkecepatan tinggi tanpa overhead memori.",
    body: `
      <h4>📐 Analogi Cetak Biru Lemari Presisi</h4>
      <p>Jika <code class="inline">class</code> di Python seperti kardus besar yang dilapisi banyak plastik pembungkus dan label pelacak (banyak memori terbuang untuk *dynamic dispatch*), maka <code class="inline">struct</code> di Mojo adalah <b>laci kayu jati yang dipotong presisi milimeter</b>: setiap slot data tersusun rapat langsung di memori RAM.</p>

      <h4>🏗️ Membuat struct untuk Entitas Data & AI</h4>
      <div class="code-block"><span class="kw">struct</span> <span class="fn">ProfilPengguna</span>:
    <span class="kw">var</span> nama: String
    <span class="kw">var</span> id_klien: Int
    <span class="kw">var</span> skor_kredit: Float32

    <span class="cm"># Konstruktor penginisialisasi</span>
    <span class="kw">fn</span> <span class="fn">__init__</span>(<span class="kw">inout</span> self, nama: String, id_klien: Int, skor_kredit: Float32):
        self.nama = nama
        self.id_klien = id_klien
        self.skor_kredit = skor_kredit

    <span class="cm"># Method untuk cek kelayakan AI</span>
    <span class="kw">fn</span> <span class="fn">apakah_layak_ai</span>(self) -&gt; Bool:
        <span class="kw">return</span> self.skor_kredit &gt;= <span class="nm">75.0</span>

<span class="kw">fn</span> <span class="fn">main</span>():
    <span class="kw">var</span> user = ProfilPengguna(<span class="st">"Supriyanto"</span>, <span class="nm">1029</span>, <span class="nm">88.5</span>)
    <span class="fn">print</span>(<span class="st">"Nama:"</span>, user.nama)
    <span class="fn">print</span>(<span class="st">"Status Verifikasi AI:"</span>, user.apakah_layak_ai())</div>

      <div class="note">
        <b>Keunggulan struct di Mojo:</b> Semua field dialokasikan secara *inline* di stack, sehingga CPU cache dapat membaca data berturut-turut tanpa jeda *pointer chasing*.
      </div>
    `,
    quiz: {
      q: "Mengapa 'struct' di Mojo jauh lebih cepat dibandingkan 'class' dinamis pada bahasa tradisional?",
      opts: [
        "Karena struct memiliki tata letak memori statis/inline tanpa overhead garbage collection dan dynamic dispatch",
        "Karena struct tidak bisa menyimpan data angka",
        "Karena struct hanya bisa dijalankan di peramban web",
        "Karena struct otomatis menghapus semua file di harddisk"
      ],
      ans: 0,
      why: "struct di Mojo menyusun data secara rapat (memory inline) tanpa overhead objek dinamis, membuatnya ideal untuk struktur data AI."
    }
  },
  {
    id: "mojo-05",
    num: "05",
    title: "Manajemen Memori: Ownership & Borrowing",
    level: "Menengah",
    desc: "borrowed, inout, dan owned — kontrol hak milik memori tanpa jeda Garbage Collector.",
    intro: "Mojo menggunakan sistem kepemilikan memori (mirip Rust) yang menjamin keamanan memori tanpa perlu Garbage Collector yang memperlambat pemrosesan AI.",
    body: `
      <h4>📖 Analogi Buku Catatan Supriyanto</h4>
      <p>Bayangkan Supriyanto memiliki sebuah buku catatan penting. Ada 3 cara meminjamkannya ke rekan kerja:</p>

      <div class="cards">
        <div class="keyword-card">
          <div class="keyword-card-header">
            <span class="keyword-name">borrowed (Pinjam Baca)</span>
            <span class="keyword-badge">DEFAULT</span>
          </div>
          <div class="keyword-desc">
            Rekan hanya boleh membaca buku catatan Supriyanto. Tidak boleh mencoret, menambah, atau merusak isinya.
          </div>
        </div>

        <div class="keyword-card">
          <div class="keyword-card-header">
            <span class="keyword-name">inout (Pinjam Ubah)</span>
            <span class="keyword-badge">MUTABLE REF</span>
          </div>
          <div class="keyword-desc">
            Rekan meminjam formulir untuk mengisi nilainya secara langsung, lalu formulir tersebut dikembalikan ke Supriyanto.
          </div>
        </div>

        <div class="keyword-card">
          <div class="keyword-card-header">
            <span class="keyword-name">owned &amp; ^ (Pindah Hak Milik)</span>
            <span class="keyword-badge">TRANSFER</span>
          </div>
          <div class="keyword-desc">
            Supriyanto menyerahkan sertifikat secara permanen kepada orang lain menggunakan operator <code class="inline">^</code>. Supriyanto tidak boleh mengaksesnya lagi.
          </div>
        </div>
      </div>

      <h4>🛠️ Contoh Kode: borrowed vs inout</h4>
      <div class="code-block"><span class="cm"># borrowed: hanya membaca data tanpa menduplikat ke memori baru</span>
<span class="kw">fn</span> <span class="fn">tampilkan_info</span>(<span class="kw">borrowed</span> nama: String):
    <span class="fn">print</span>(<span class="st">"Data pengguna:"</span>, nama)

<span class="cm"># inout: memodifikasi data asli di tempat (in-place modification)</span>
<span class="kw">fn</span> <span class="fn">tambah_bonus_skor</span>(<span class="kw">inout</span> skor: Float32, bonus: Float32):
    skor = skor + bonus

<span class="kw">fn</span> <span class="fn">main</span>():
    <span class="kw">let</span> nama_karyawan: String = <span class="st">"Supriyanto"</span>
    tampilkan_info(nama_karyawan)
    
    <span class="kw">var</span> skor_ai: Float32 = <span class="nm">80.0</span>
    tambah_bonus_skor(skor_ai, <span class="nm">15.0</span>)
    <span class="fn">print</span>(<span class="st">"Skor final Supriyanto:"</span>, skor_ai) <span class="cm"># 95.0</span></div>
    `,
    quiz: {
      q: "Jika Anda ingin sebuah fungsi dapat mengubah nilai variabel asli tanpa membuat salinan memori baru, argumen apa yang digunakan di Mojo?",
      opts: ["inout", "borrowed", "copy_only", "static"],
      ans: 0,
      why: "'inout' memberikan referensi yang dapat dimodifikasi (mutable reference) ke data asli sehingga perubahan langsung tercermin pada pemanggil."
    }
  },
  {
    id: "mojo-06",
    num: "06",
    title: "Interoperabilitas dengan Python",
    level: "Menengah",
    desc: "Memanggil library raksasa Python (NumPy, PyTorch, Pandas, Matplotlib) langsung dari Mojo.",
    intro: "Anda tidak perlu menulis ulang ekosistem AI dari nol. Mojo memiliki jembatan tanpa hambatan ke Python.",
    body: `
      <h4>🌉 Analogi Jembatan Tol Antar-Kota</h4>
      <p>Bayangkan Anda tinggal di kota modern berkecepatan tinggi (Mojo), tetapi Anda memiliki <b>jembatan tol bebas hambatan</b> menuju pasar terbesar dunia (ekosistem Python). Anda bisa memesan sayur, bumbu, dan alat dapur apa pun dari pasar tersebut (seperti NumPy, Pandas, atau PyTorch) hanya dalam satu panggilan telepon.</p>

      <h4>🐍 Mengimpor Library Python di Dalam Mojo</h4>
      <div class="code-block"><span class="kw">from</span> <span class="st">python</span> <span class="kw">import</span> Python

<span class="kw">fn</span> <span class="fn">main</span>() <span class="kw">raises</span>:
    <span class="cm"># Mengimpor modul Python langsung ke Mojo</span>
    <span class="kw">let</span> np = Python.import_module(<span class="st">"numpy"</span>)
    <span class="kw">let</span> math = Python.import_module(<span class="st">"math"</span>)
    
    <span class="cm"># Membuat array NumPy dari Mojo</span>
    <span class="kw">let</span> data_supriyanto = np.array([<span class="nm">10</span>, <span class="nm">25</span>, <span class="nm">40</span>, <span class="nm">85</span>])
    <span class="kw">let</span> rata_rata = np.mean(data_supriyanto)
    
    <span class="fn">print</span>(<span class="st">"Array NumPy:"</span>, data_supriyanto)
    <span class="fn">print</span>(<span class="st">"Rata-rata data Supriyanto:"</span>, rata_rata)
    <span class="fn">print</span>(<span class="st">"Akar kuadrat 144 via math Python:"</span>, math.sqrt(<span class="nm">144</span>))</div>

      <div class="tip-box">
        <span class="tip-box-icon">💡</span>
        <div><b>Strategi Juara:</b> Gunakan library Python untuk bagian input/output dan plotting grafik, lalu gunakan Mojo murni untuk algoritma komputasi berat agar kecepatan naik ribuan kali lipat!</div>
      </div>
    `,
    quiz: {
      q: "Bagaimana cara mengimpor library Python seperti NumPy dari dalam kode Mojo?",
      opts: [
        "from python import Python, lalu panggil Python.import_module(\"numpy\")",
        "import numpy.js",
        "#include <numpy.h>",
        "require('numpy')"
      ],
      ans: 0,
      why: "Mojo menyediakan modul bawaan 'from python import Python' dengan metode 'Python.import_module()' untuk mengimpor package Python apa pun secara mulus."
    }
  },
  {
    id: "mojo-07",
    num: "07",
    title: "Vektorisasi Hardware & SIMD",
    level: "Lanjutan",
    desc: "Memanfaatkan register prosesor modern untuk komputasi paralel hardware.",
    intro: "SIMD (Single Instruction, Multiple Data) adalah rahasia mengapa komputasi AI di Mojo bisa berjalan puluhan ribu kali lebih kencang.",
    body: `
      <h4>🛒 Analogi Kasir Super dengan 8 Tangan</h4>
      <p>Dalam prosesor komputer tradisional:</p>
      <ul>
        <li><b>Non-SIMD (Skalar):</b> Seperti 1 kasir melayani pembeli satu per satu. Untuk menghitung 8 pasang angka, kasir harus memprosesnya dalam 8 langkah antrean berturut-turut.</li>
        <li><b>SIMD (Vektor):</b> Seperti 1 kasir super mutan yang punya 8 tangan. Dalam <b>1 kali detak jam</b>, kasir tersebut langsung menjumlahkan 8 pasang angka sekaligus secara serentak di register CPU!</li>
      </ul>

      <h4>⚡ Contoh SIMD di Mojo</h4>
      <div class="code-block"><span class="kw">fn</span> <span class="fn">main</span>():
    <span class="cm"># SIMD dengan 4 elemen Float32 sekaligus dalam 1 register CPU</span>
    <span class="kw">let</span> vektor_a = SIMD[DType.float32, <span class="nm">4</span>](<span class="nm">1.0</span>, <span class="nm">2.0</span>, <span class="nm">3.0</span>, <span class="nm">4.0</span>)
    <span class="kw">let</span> vektor_b = SIMD[DType.float32, <span class="nm">4</span>](<span class="nm">10.0</span>, <span class="nm">20.0</span>, <span class="nm">30.0</span>, <span class="nm">40.0</span>)
    
    <span class="cm"># Menjumlahkan 4 pasang angka dalam SATU siklus instruksi CPU</span>
    <span class="kw">let</span> hasil = vektor_a + vektor_b
    <span class="fn">print</span>(<span class="st">"Hasil penjumlahan vektor SIMD Supriyanto:"</span>, hasil)
    <span class="cm"># Output: [11.0, 22.0, 33.0, 44.0]</span>
    
    <span class="cm"># Perkalian elemen sekaligus (FMA - Fused Multiply-Add)</span>
    <span class="kw">let</span> perkalian = vektor_a * <span class="nm">2.5</span>
    <span class="fn">print</span>(<span class="st">"Hasil perkalian skala SIMD:"</span>, perkalian)</div>

      <div class="note">
        <b>Dukungan Lebar Vektor:</b> Mojo mendukung SIMD 4, 8, 16, hingga 64 jalur (AVX-512, ARM Neon, dan Apple Silicon AMX).
      </div>
    `,
    quiz: {
      q: "Apa kepanjangan dari SIMD dan bagaimana cara kerjanya?",
      opts: [
        "Single Instruction, Multiple Data — mengeksekusi satu instruksi matematika pada banyak data sekaligus dalam satu siklus CPU",
        "Simple Input Memory Device — alat penyimpan memori flash",
        "Sequential Instruction Multi Device — eksekusi kode baris demi baris secara lambat",
        "Standard Internet Module Data — protokol transfer data internet"
      ],
      ans: 0,
      why: "SIMD adalah teknologi akselerasi hardware di mana satu instruksi prosesor mengeksekusi operasi matematika pada sekumpulan data (vektor) secara serentak."
    }
  },
  {
    id: "mojo-08",
    num: "08",
    title: "Multi-Threading & Tiling CPU",
    level: "Lanjutan",
    desc: "Membagi beban kerja komputasi ke seluruh core CPU dan mengoptimalkan Cache L1/L2.",
    intro: "Prosesor modern memiliki banyak core (8, 16, hingga 128 core). Mojo menyediakan fungsi parallelize untuk memanfaatkan semua tenaga prosesor tersebut secara otomatis.",
    body: `
      <h4>🍞 Analogi Memotong 10.000 Roti</h4>
      <p>Jika Supriyanto harus memotong 10.000 potong roti sendirian (single core), butuh waktu seharian. Namun jika Supriyanto mempekerjakan 8 koki (8 CPU Cores) dan membagi adonan ke dalam nampan-nampan kecil berukuran pas meja (*Tiling*), 10.000 roti selesai hanya dalam beberapa menit.</p>

      <h4>🚀 Contoh Paralelisasi dengan parallelize</h4>
      <div class="code-block"><span class="kw">from</span> <span class="st">algorithm</span> <span class="kw">import</span> parallelize

<span class="kw">fn</span> <span class="fn">proses_baris_data</span>(nomor_core: Int):
    <span class="cm"># Logika yang dijalankan serentak oleh masing-masing worker core</span>
    <span class="kw">let</span> offset = nomor_core * <span class="nm">1000</span>
    <span class="fn">print</span>(<span class="st">"Core"</span>, nomor_core, <span class="st">"memproses data Supriyanto batch:"</span>, offset)

<span class="kw">fn</span> <span class="fn">main</span>():
    <span class="kw">let</span> total_pekerjaan = <span class="nm">8</span>
    <span class="cm"># Menjalankan fungsi di 8 thread CPU secara paralel</span>
    parallelize[proses_baris_data](total_pekerjaan)
    <span class="fn">print</span>(<span class="st">"Semua pekerjaan multi-threading selesai!"</span>)</div>

      <div class="tip">
        <b>Konsep Tiling:</b> Data dipecah menjadi blok-blok kecil seukuran L1 Cache (misal 32KB atau 64KB) agar CPU tidak perlu menunggu transfer data lambat dari RAM utama.
      </div>
    `,
    quiz: {
      q: "Apa fungsi utama dari paket 'algorithm.parallelize' di Mojo?",
      opts: [
        "Mengeksekusi tugas secara paralel di seluruh core prosesor (multi-threading) secara otomatis",
        "Menyambungkan laptop ke printer bluetooth",
        "Mengubah tema web menjadi gelap",
        "Menghapus cache browser"
      ],
      ans: 0,
      why: "parallelize di Mojo membagi iterasi komputasi ke beberapa thread CPU worker sehingga seluruh core prosesor bekerja bersamaan secara maksimal."
    }
  },
  {
    id: "mojo-09",
    num: "09",
    title: "Fondasi AI: Operasi Matriks & Tensor",
    level: "Mahir",
    desc: "Membangun operasi inti perkalian matriks (Matrix Multiplication) berkecepatan tinggi.",
    intro: "Seluruh kecerdasan buatan (Large Language Model, Computer Vision, Audio) pada intinya adalah operasi perkalian tabel angka berukuran besar (Matriks & Tensor).",
    body: `
      <h4>📊 Analogi Tabel Komposisi Bumbu Resep</h4>
      <p>Bayangkan Anda memiliki <b>Tabel Bahan Makanan</b> (Matriks A) dan <b>Tabel Resep Masakan Supriyanto</b> (Matriks B). Operasi Matrix Multiplication ($C = A \\times B$) mengalikan setiap baris bahan dengan setiap kolom resep untuk menghasilkan takaran rasa baru secara massal.</p>

      <h4>🧮 Perkalian Matriks Cepat dengan SIMD di Mojo</h4>
      <div class="code-block"><span class="kw">struct</span> <span class="fn">Matrix2x2</span>:
    <span class="kw">var</span> data: SIMD[DType.float32, <span class="nm">4</span>] <span class="cm"># Menyimpan 4 angka [a00, a01, a10, a11]</span>

    <span class="kw">fn</span> <span class="fn">__init__</span>(<span class="kw">inout</span> self, v0: Float32, v1: Float32, v2: Float32, v3: Float32):
        self.data = SIMD[DType.float32, <span class="nm">4</span>](v0, v1, v2, v3)

    <span class="cm"># Perkalian matriks dengan vektor input AI</span>
    <span class="kw">fn</span> <span class="fn">kali_vektor</span>(self, vec: SIMD[DType.float32, <span class="nm">2</span>]) -&gt; SIMD[DType.float32, <span class="nm">2</span>]:
        <span class="kw">let</span> r0 = (self.data[<span class="nm">0</span>] * vec[<span class="nm">0</span>]) + (self.data[<span class="nm">1</span>] * vec[<span class="nm">1</span>])
        <span class="kw">let</span> r1 = (self.data[<span class="nm">2</span>] * vec[<span class="nm">0</span>]) + (self.data[<span class="nm">3</span>] * vec[<span class="nm">1</span>])
        <span class="kw">return</span> SIMD[DType.float32, <span class="nm">2</span>](r0, r1)

<span class="kw">fn</span> <span class="fn">main</span>():
    <span class="cm"># Bobot jaringan saraf tiruan (Weights Matrix)</span>
    <span class="kw">let</span> bobot_ai = Matrix2x2(<span class="nm">0.5</span>, <span class="nm">1.2</span>, <span class="nm">-0.8</span>, <span class="nm">2.0</span>)
    <span class="cm"># Data fitur input Supriyanto [umur, skor]</span>
    <span class="kw">let</span> input_supriyanto = SIMD[DType.float32, <span class="nm">2</span>](<span class="nm">2.0</span>, <span class="nm">3.0</span>)
    
    <span class="kw">let</span> output_tensor = bobot_ai.kali_vektor(input_supriyanto)
    <span class="fn">print</span>(<span class="st">"Hasil Output Linear Layer AI:"</span>, output_tensor)</div>

      <div class="note">
        <b>Dari 2x2 ke 4096x4096:</b> Prinsip matematika yang sama diterapkan pada model AI raksasa seperti LLM (Llama, GPT), hanya saja ukurannya mencapai ribuan dimensi.
      </div>
    `,
    quiz: {
      q: "Mengapa operasi Matrix Multiplication menjadi jantung dari komputasi model AI modern?",
      opts: [
        "Karena seluruh transformasi data fitur input dan bobot neuron dihitung melalui perkalian matriks (Linear Layer)",
        "Hanya untuk menampilkan warna di layar",
        "Hanya untuk menghitung jumlah baris file teks",
        "Karena matriks membuat ukuran file teks jadi lebih kecil"
      ],
      ans: 0,
      why: "Di dalam neural network dan deep learning, layer linier (Dense/Attention) memproses data input melalui perkalian matriks bobot (Weights x Inputs + Bias)."
    }
  },
  {
    id: "mojo-10",
    num: "10",
    title: "Fungsi Aktivasi AI (ReLU & Sigmoid)",
    level: "Mahir",
    desc: "Mengimplementasikan fungsi aktivasi non-linier neuron AI berkecepatan tinggi.",
    intro: "Tanpa fungsi aktivasi, jaringan saraf tiruan hanyalah regresi linier biasa. Fungsi aktivasi bertindak sebagai saklar keputusan neuron.",
    body: `
      <h4>💡 Analogi Saklar Lampu Otomatis</h4>
      <p>Neuron di otak buatan membutuhkan aturan:</p>
      <ul>
        <li><b>ReLU (Rectified Linear Unit):</b> Seperti sensor lampu otomatis. Jika sinyal informasi positif ($x > 0$), lampu menyala proporsional sebesar sinyal tersebut. Jika sinyalnya negatif ($x \\le 0$), lampu mati total ($0$). Rumusnya sangat simpel: $f(x) = \\max(0, x)$.</li>
        <li><b>Sigmoid:</b> Menekan angka berapa pun (dari minus tak hingga sampai plus tak hingga) menjadi rentang probabilitas antara <b>0.0 (0%) hingga 1.0 (100%)</b>.</li>
      </ul>

      <h4>⚡ Implementasi ReLU Berbasis SIMD Vektor</h4>
      <div class="code-block"><span class="kw">fn</span> <span class="fn">relu_simd</span>(tensor: SIMD[DType.float32, <span class="nm">4</span>]) -&gt; SIMD[DType.float32, <span class="nm">4</span>]:
    <span class="kw">let</span> nol = SIMD[DType.float32, <span class="nm">4</span>](<span class="nm">0.0</span>, <span class="nm">0.0</span>, <span class="nm">0.0</span>, <span class="nm">0.0</span>)
    <span class="cm"># Jika nilai negatif, ubah jadi 0. Jika positif, pertahankan</span>
    <span class="kw">return</span> (tensor &gt; nol).select(tensor, nol)

<span class="kw">fn</span> <span class="fn">sigmoid_sederhana</span>(x: Float32) -&gt; Float32:
    <span class="cm"># Pendekatan komputasi probabilitas</span>
    <span class="kw">return</span> <span class="nm">1.0</span> / (<span class="nm">1.0</span> + <span class="nm">2.7182818</span> ** (-x))

<span class="kw">fn</span> <span class="fn">main</span>():
    <span class="cm"># Contoh data sinyal neuron Supriyanto (ada yang negatif dan positif)</span>
    <span class="kw">let</span> sinyal_mentah = SIMD[DType.float32, <span class="nm">4</span>](<span class="nm">-3.5</span>, <span class="nm">1.8</span>, <span class="nm">-0.2</span>, <span class="nm">4.2</span>)
    <span class="kw">let</span> hasil_aktivasi = relu_simd(sinyal_mentah)
    
    <span class="fn">print</span>(<span class="st">"Sinyal sebelum aktivasi:"</span>, sinyal_mentah)
    <span class="fn">print</span>(<span class="st">"Sinyal setelah ReLU AI:"</span>, hasil_aktivasi)
    <span class="cm"># Output: [0.0, 1.8, 0.0, 4.2]</span>
    
    <span class="kw">let</span> probabilitas = sigmoid_sederhana(<span class="nm">2.5</span>)
    <span class="fn">print</span>(<span class="st">"Probabilitas kelulusan Supriyanto:"</span>, probabilitas * <span class="nm">100</span>, <span class="st">"%"</span>)</div>
    `,
    quiz: {
      q: "Apa yang dilakukan fungsi aktivasi ReLU terhadap nilai input negatif?",
      opts: [
        "Mengubah seluruh nilai negatif menjadi nol (0)",
        "Mengalikan nilai negatif dengan minus satu",
        "Menghapus memori RAM",
        "Menambah nilai negatif sebesar 100"
      ],
      ans: 0,
      why: "ReLU (Rectified Linear Unit) mengembalikan f(x) = max(0, x), yang berarti semua nilai negatif dipotong menjadi nol (0)."
    }
  },
  {
    id: "mojo-11",
    num: "11",
    title: "Implementasi AI: Mini Neural Network Inference",
    level: "Mahir",
    desc: "Membangun Jaringan Saraf Tiruan lengkap untuk inferensi dan prediksi data.",
    intro: "Sekarang kita gabungkan semua materi: Struct, Linear Layer, SIMD, dan ReLU untuk membuat model AI prediksi dari nol.",
    body: `
      <h4>🧠 Arsitektur Jaringan Saraf Tiruan (Neural Network)</h4>
      <p>Kita akan membuat model AI mini untuk memprediksi apakah permohonan analisis data <b>Supriyanto</b> disetujui atau ditolak berdasarkan 2 parameter input: <code class="inline">[skor_kemampuan, skor_kecepatan]</code>.</p>
      
      <p><b>Alur Kerja AI:</b></p>
      <p><code class="inline">Input Layer (2 fitur) → Hidden Dense Layer (Bobot &amp; Bias) → Aktivasi ReLU → Output Layer (Prediksi)</code></p>

      <h4>🤖 Kode Lengkap Model AI di Mojo</h4>
      <div class="code-block"><span class="kw">struct</span> <span class="fn">DenseLayer</span>:
    <span class="kw">var</span> w0: Float32
    <span class="kw">var</span> w1: Float32
    <span class="kw">var</span> bias: Float32

    <span class="kw">fn</span> <span class="fn">__init__</span>(<span class="kw">inout</span> self, w0: Float32, w1: Float32, bias: Float32):
        self.w0 = w0
        self.w1 = w1
        self.bias = bias

    <span class="cm"># Forward Pass neuron</span>
    <span class="kw">fn</span> <span class="fn">forward</span>(self, x0: Float32, x1: Float32) -&gt; Float32:
        <span class="kw">let</span> linear_out = (x0 * self.w0) + (x1 * self.w1) + self.bias
        <span class="cm"># Terapkan aktivasi ReLU: max(0, x)</span>
        <span class="kw">if</span> linear_out &gt; <span class="nm">0.0</span>:
            <span class="kw">return</span> linear_out
        <span class="kw">return</span> <span class="nm">0.0</span>

<span class="kw">fn</span> <span class="fn">main</span>():
    <span class="cm"># 1. Inisialisasi model neuron terlatih (Trained Weights)</span>
    <span class="kw">let</span> neuron_keputusan = DenseLayer(<span class="nm">0.65</span>, <span class="nm">0.85</span>, <span class="nm">-0.5</span>)
    
    <span class="cm"># 2. Data input Supriyanto: [Kemampuan=0.9, Kecepatan=0.8]</span>
    <span class="kw">let</span> fitur_kemampuan: Float32 = <span class="nm">0.9</span>
    <span class="kw">let</span> fitur_kecepatan: Float32 = <span class="nm">0.8</span>
    
    <span class="cm"># 3. Jalankan inferensi AI</span>
    <span class="kw">let</span> skor_prediksi = neuron_keputusan.forward(fitur_kemampuan, fitur_kecepatan)
    
    <span class="fn">print</span>(<span class="st">"=== HASIL INFERENSI MODEL AI MOJO ==="</span>)
    <span class="fn">print</span>(<span class="st">"Kandidat:"</span>, <span class="st">"Supriyanto"</span>)
    <span class="fn">print</span>(<span class="st">"Skor Aktivasi Output:"</span>, skor_prediksi)
    
    <span class="kw">if</span> skor_prediksi &gt; <span class="nm">0.5</span>:
        <span class="fn">print</span>(<span class="st">"Status AI: REKOMENDASI DITERIMA ✅"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="st">"Status AI: PERLU REVIEW ULANG ⚠️"</span>)</div>

      <div class="tip-box">
        <span class="tip-box-icon">⚡</span>
        <div><b>Performa Luar Biasa:</b> Kode inferensi di atas berjalan tanpa overhead interpreter Python, langsung dieksekusi di register CPU dalam hitungan nanodetik.</div>
      </div>
    `,
    quiz: {
      q: "Apa yang dimaksud dengan proses 'Forward Pass' pada inferensi Neural Network?",
      opts: [
        "Proses mengalirkan data input melalui bobot layer dan fungsi aktivasi untuk menghasilkan output prediksi",
        "Proses mematikan komputer setelah selesai coding",
        "Proses backup database ke cloud",
        "Proses mengirim email otomatis"
      ],
      ans: 0,
      why: "Forward Pass adalah perhitungan berurutan dari layer input ke layer output untuk menghasilkan nilai prediksi model AI."
    }
  },
  {
    id: "mojo-12",
    num: "12",
    title: "Masa Depan AI, MAX Engine & Akselerasi GPU",
    level: "Mahir",
    desc: "Mengenal ekosistem Modular MAX dan deployment model AI tingkat produksi.",
    intro: "Mojo bukan sekadar bahasa baru, melainkan fondasi ekosistem AI generasi masa depan untuk deployment model LLM dan akselerasi GPU.",
    body: `
      <h4>🚀 Analogi Roket Pendorong Luar Angkasa</h4>
      <p>Jika kode Mojo yang Anda tulis adalah kapsul pesawat luar angkasa, maka <b>MAX Engine (Modular Acceleration Engine)</b> adalah roket pendorong raksasa yang memungkinkan model AI Anda meluncur di berbagai jenis hardware: <b>NVIDIA CUDA GPU, AMD ROCm, Apple Silicon (M1/M2/M3/M4), hingga server CPU cloud</b> tanpa perlu mengubah satu baris kode pun!</p>

      <h4>🌟 3 Pilar Utama Ekosistem Mojo &amp; MAX</h4>
      <div class="cards">
        <div class="keyword-card">
          <div class="keyword-card-header">
            <span class="keyword-name">1. MAX Serving</span>
            <span class="keyword-badge">PRODUCTION</span>
          </div>
          <div class="keyword-desc">
            Infrastruktur penyedia API inferensi untuk model LLM (seperti Llama 3, Mistral) dengan throughput hingga 3x lipat lebih tinggi dan konsumsi RAM jauh lebih hemat.
          </div>
        </div>

        <div class="keyword-card">
          <div class="keyword-card-header">
            <span class="keyword-name">2. MAX Graph &amp; Kernels</span>
            <span class="keyword-badge">HARDWARE</span>
          </div>
          <div class="keyword-desc">
            Menulis custom kernel AI langsung menggunakan sintaks Mojo tanpa harus mempelajari bahasa rumit seperti CUDA C++.
          </div>
        </div>
      </div>

      <h4>🏆 Rangkuman Perjalanan Belajar</h4>
      <p>Selamat! Supriyanto telah mempelajari fondasi lengkap bahasa Mojo dari tingkat Pemula hingga Mahir:</p>
      <ul>
        <li>✅ Filosofi kecepatan Mojo &amp; sintaks <code class="inline">fn</code> vs <code class="inline">def</code></li>
        <li>✅ Struktur data <code class="inline">struct</code> &amp; manajemen memori <code class="inline">borrowed / inout</code></li>
        <li>✅ Interoperabilitas mulus dengan ekosistem Python</li>
        <li>✅ Vektorisasi hardware SIMD &amp; multi-threading parallelize</li>
        <li>✅ Pembuatan layer AI, perkalian matriks, dan inferensi Neural Network</li>
      </ul>

      <div class="tip-box">
        <span class="tip-box-icon">🎉</span>
        <div><b>Langkah Selanjutnya:</b> Uji pemahaman Anda dengan mengikuti <b>Quiz Mojo</b> pada menu navigasi!</div>
      </div>
    `,
    quiz: {
      q: "Apa keunggulan utama dari Modular MAX Engine saat menjalankan model AI di tingkat produksi?",
      opts: [
        "Mampu mengoptimalkan dan mengompilasi model AI ke berbagai hardware (NVIDIA GPU, AMD, Apple Silicon, CPU) dengan throughput tinggi dan hemat memori",
        "Hanya bisa berjalan di handphone jadul",
        "Membuat ukuran font editor menjadi lebih besar",
        "Otomatis mematikan koneksi internet"
      ],
      ans: 0,
      why: "MAX Engine mengoptimalkan eksekusi model AI lintas berbagai akselerator hardware dengan efisiensi memori dan throughput komputasi tertinggi."
    }
  }
];

const mojoTrack = {
  id: 'mojo',
  title: 'Mojo 🔥',
  subtitle: 'Bahasa AI Modern: Sintaks Python, Performa C++, SIMD & Neural Network',
  accent: 'orange',
  lessons: mojoLessons
};

const mojoQuizBank = mojoTrack.lessons.map(l => ({
  track: 'mojo', topic: l.title, q: l.quiz.q, opts: l.quiz.opts, ans: l.quiz.ans, why: l.quiz.why,
}));

/* ---------- OUTPUT ---------- */
mkdirSync(join(HERE, '..', 'js'), { recursive: true });
writeFileSync(join(HERE, '..', 'js/data.js'),
  '/* Data materi gabungan — dihasilkan dari modul JavaScript, Playwright, dan Mojo. */\n'
  + 'const TRACKS = ' + JSON.stringify([jsTrack, pwTrack, mojoTrack], null, 1) + ';\n\n'
  + 'const QUIZ_BANK = ' + JSON.stringify([...jsQuizBank, ...pwQuizBank, ...mojoQuizBank], null, 1) + ';\n'
);

console.log('JS lessons:', jsTrack.lessons.length);
console.log('PW lessons:', pwTrack.lessons.length);
console.log('Mojo lessons:', mojoTrack.lessons.length);
console.log('Total lessons:', jsTrack.lessons.length + pwTrack.lessons.length + mojoTrack.lessons.length);
console.log('Quiz total:', jsQuizBank.length + pwQuizBank.length + mojoQuizBank.length, '(js', jsQuizBank.length, '/ pw', pwQuizBank.length, '/ mojo', mojoQuizBank.length + ')');

