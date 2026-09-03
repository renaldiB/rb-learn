/* Data materi gabungan — dihasilkan dari modul JavaScript, Playwright, Mojo, Python, React Native, Flutter, dan Mandarin. */
const TRACKS = [
 {
  "id": "js",
  "title": "JavaScript 🟨",
  "subtitle": "Fondasi bahasa: dari variabel sampai async/await",
  "accent": "amber",
  "category": "it",
  "lessons": [
   {
    "id": "js-variabel",
    "num": "01",
    "title": "Variabel — Kotak Penyimpanan",
    "level": "Pemula",
    "desc": "let, const, var — cara menyimpan data biar bisa dipake ulang.",
    "intro": "Variabel itu kayak <b>kotak berlabel</b>. kamu taro barang (nilai) di dalam, kasih label (nama), tinggal panggil kapan aja.",
    "body": "\n      <h4>📦 Cara bikin kotak</h4>\n      <p>Tiga kata kunci: <code class=\"inline\">let</code> (bisa diubah), <code class=\"inline\">const</code> (sekali isi, gak bisa diubah), <code class=\"inline\">var</code> (jadul, hindarin).</p>\n      <pre class=\"codeblock\"><code><span class=\"kw\">let</span> umur <span class=\"nm\">=</span> <span class=\"nm\">25</span>;\n<span class=\"kw\">const</span> nama <span class=\"nm\">=</span> <span class=\"st\">\"Supriyanto\"</span>;  <span class=\"cm\">// const: gak bisa diubah</span>\numur <span class=\"nm\">=</span> <span class=\"nm\">26</span>;              <span class=\"cm\">// let: boleh diubah ✔</span>\n\n<span class=\"fn\">console.log</span>(umur);  <span class=\"cm\">// 26</span>\n<span class=\"fn\">console.log</span>(nama);  <span class=\"cm\">// Supriyanto</span></code></pre>\n\n      <div class=\"tip\">💡 <b>Aturan jempol:</b> pake <code class=\"inline\">const</code> selalu. Ganti ke <code class=\"inline\">let</code> cuma kalo emang nilainya bakal berubah.</div>\n\n      <h4>🧩 Tipe data dasar</h4>\n      <ul>\n        <li><code class=\"inline\">\"teks\"</code> — string (kata/kalimat)</li>\n        <li><code class=\"inline\">42</code> — number (angka)</li>\n        <li><code class=\"inline\">true/false</code> — boolean (iya/tidak)</li>\n        <li><code class=\"inline\">[\"a\",\"b\"]</code> — array (daftar)</li>\n        <li><code class=\"inline\">{nama:\"Supriyanto\"}</code> — object (kumpulan data)</li>\n      </ul>\n\n      <pre class=\"codeblock\"><code><span class=\"kw\">let</span> daftarBelanja <span class=\"nm\">=</span> [<span class=\"st\">\"telur\"</span>, <span class=\"st\">\"nasi\"</span>, <span class=\"st\">\"ayam\"</span>];\n<span class=\"kw\">let</span> user <span class=\"nm\">=</span> { nama: <span class=\"st\">\"Supriyanto\"</span>, umur: <span class=\"nm\">25</span> };\n<span class=\"fn\">console.log</span>(user.nama);   <span class=\"cm\">// Supriyanto</span></code></pre>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> variabel = kotak, <code class=\"inline\">=</code> = masukin barang ke kotak, nama = label kotak.</div>\n    ",
    "quiz": {
     "q": "Manakah yang benar untuk membuat variabel yang nilainya TIDAK BISA diubah?",
     "opts": [
      "let nama = \"Supriyanto\"",
      "const nama = \"Supriyanto\"",
      "var nama = \"Supriyanto\"",
      "nama = \"Supriyanto\""
     ],
     "ans": 1,
     "why": "const artinya konstan = tetap. Sekali diisi, tidak bisa diubah."
    }
   },
   {
    "id": "js-operator",
    "num": "02",
    "title": "Operator — Mesin Hitung & Logika",
    "level": "Pemula",
    "desc": "+, -, *, / buat hitung; ===, &gt; buat bandingin.",
    "intro": "Operator itu kayak <b>mesin</b>: masukin angka/kata, keluar hasil. Dua jenis utama: <b>hitung</b> dan <b>bandingin</b>.",
    "body": "\n      <h4>🧮 Operator hitung</h4>\n      <pre class=\"codeblock\"><code><span class=\"fn\">console.log</span>(<span class=\"nm\">10</span> + <span class=\"nm\">5</span>);   <span class=\"cm\">// 15</span>\n<span class=\"fn\">console.log</span>(<span class=\"nm\">10</span> - <span class=\"nm\">5</span>);   <span class=\"cm\">// 5</span>\n<span class=\"fn\">console.log</span>(<span class=\"nm\">10</span> * <span class=\"nm\">5</span>);   <span class=\"cm\">// 50</span>\n<span class=\"fn\">console.log</span>(<span class=\"nm\">10</span> / <span class=\"nm\">5</span>);   <span class=\"cm\">// 2</span>\n<span class=\"fn\">console.log</span>(<span class=\"nm\">10</span> % <span class=\"nm\">3</span>);   <span class=\"cm\">// 1 (sisa bagi)</span></code></pre>\n\n      <h4>⚖️ Operator bandingin (hasilnya true/false)</h4>\n      <pre class=\"codeblock\"><code><span class=\"fn\">console.log</span>(<span class=\"nm\">5</span> === <span class=\"st\">\"5\"</span>);  <span class=\"cm\">// false — beda tipe!</span>\n<span class=\"fn\">console.log</span>(<span class=\"nm\">5</span> == <span class=\"st\">\"5\"</span>);   <span class=\"cm\">// true — tapi jangan dipake</span>\n<span class=\"fn\">console.log</span>(<span class=\"nm\">10</span> &gt; <span class=\"nm\">5</span>);    <span class=\"cm\">// true</span>\n<span class=\"fn\">console.log</span>(<span class=\"nm\">10</span> !== <span class=\"nm\">5</span>);   <span class=\"cm\">// true — tidak sama</span></code></pre>\n\n      <div class=\"warn\">⚠️ <b>Selalu pake <code class=\"inline\">===</code></b> (tiga sama dengan). <code class=\"inline\">==</code> (dua) bisa ngebandingin beda tipe dan bikin bug gak jelas.</div>\n\n      <h4>🔗 Operator logika</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">let</span> punyaUang <span class=\"nm\">=</span> <span class=\"kw\">true</span>;\n<span class=\"kw\">let</span> hariLibur <span class=\"nm\">=</span> <span class=\"kw\">false</span>;\n<span class=\"fn\">console.log</span>(punyaUang <span class=\"nm\">&amp;&amp;</span> hariLibur);  <span class=\"cm\">// false (DAN)</span>\n<span class=\"fn\">console.log</span>(punyaUang <span class=\"nm\">||</span> hariLibur);  <span class=\"cm\">// true (ATAU)</span>\n<span class=\"fn\">console.log</span>(!hariLibur);              <span class=\"cm\">// true (KEBALIKAN)</span></code></pre>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> <code class=\"inline\">&amp;&amp;</code> = dua-duanya harus benar. <code class=\"inline\">||</code> = salah satu benar aja cukup.</div>\n    ",
    "quiz": {
     "q": "Hasil dari 10 % 3 adalah...",
     "opts": [
      "3",
      "1",
      "0",
      "10 / 3"
     ],
     "ans": 1,
     "why": "% itu sisa bagi. 10 dibagi 3 = 3 sisa 1. Jadi hasilnya 1."
    }
   },
   {
    "id": "js-string",
    "num": "03",
    "title": "String — Ngobrol Sama Teks",
    "level": "Pemula",
    "desc": "Gabung teks, template literal, dan trik string yang sering kepake.",
    "intro": "String = <b>teks</b>. Antara pake tanda kutip: <code class=\"inline\">\"...\"</code>, <code class=\"inline\">'...'</code>, atau backtick <code class=\"inline\">`...`</code> (paling keren).",
    "body": "\n      <h4>✂️ Potong &amp; gabung teks</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> nama <span class=\"nm\">=</span> <span class=\"st\">\"Supriyanto\"</span>;\n<span class=\"kw\">const</span> sapaan <span class=\"nm\">=</span> <span class=\"st\">\"Halo \"</span> + nama;      <span class=\"cm\">// cara jadul</span>\n<span class=\"fn\">console.log</span>(sapaan);                    <span class=\"cm\">// Halo Supriyanto</span>\n\n<span class=\"cm\">// Cara modern (TEMPLATE LITERAL) — pake backtick</span>\n<span class=\"kw\">const</span> sapaan2 <span class=\"nm\">=</span> <span class=\"st\">`Halo ${nama}!`</span>;\n<span class=\"fn\">console.log</span>(sapaan2);                   <span class=\"cm\">// Halo Supriyanto!</span></code></pre>\n\n      <div class=\"tip\">💡 <b>Template literal</b> (<code class=\"inline\">`...${var}...`</code>) itu cara paling gampang masukin variabel ke teks. Hafalin, pasti kepake tiap hari.</div>\n\n      <h4>🔍 Sering dipake</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> email <span class=\"nm\">=</span> <span class=\"st\">\"Supriyanto@Email.com\"</span>;\n<span class=\"fn\">console.log</span>(email.length);           <span class=\"cm\">// 14 (berapa huruf)</span>\n<span class=\"fn\">console.log</span>(email.toUpperCase());    <span class=\"cm\">// SUPRIYANTO@EMAIL.COM</span>\n<span class=\"fn\">console.log</span>(email.toLowerCase());    <span class=\"cm\">// Supriyanto@email.com</span>\n<span class=\"fn\">console.log</span>(email.includes(<span class=\"st\">\"@\"</span>));  <span class=\"cm\">// true — ada @ gak?</span>\n<span class=\"fn\">console.log</span>(email.trim());           <span class=\"cm\">// hapus spasi di ujung</span></code></pre>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> titik <code class=\"inline\">.</code> itu \"punya\". <code class=\"inline\">email.length</code> = \"email punya panjang\". Gampang kan?</div>\n    ",
    "quiz": {
     "q": "Template literal di JavaScript pakai tanda...",
     "opts": [
      "\"kutip dua\"",
      "'kutip satu'",
      "`backtick`",
      "(kurung)"
     ],
     "ans": 2,
     "why": "Template literal pakai backtick (`...`), bukan kutip biasa. Contoh: `Halo ${nama}`."
    }
   },
   {
    "id": "js-condition",
    "num": "04",
    "title": "If/Else — Jalan Bercabang",
    "level": "Pemula",
    "desc": "if, else if, else — komputer mutusin jalan berdasarkan kondisi.",
    "intro": "Komputer itu kayak <b>lampu lalu lintas</b>: merah berhenti, hijau jalan. <code class=\"inline\">if</code> = \"kalau begini, kerjain ini\".",
    "body": "\n      <h4>🚦 Struktur dasar</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> umur <span class=\"nm\">=</span> <span class=\"nm\">17</span>;\n\n<span class=\"kw\">if</span> (umur &gt;= <span class=\"nm\">18</span>) {\n  <span class=\"fn\">console.log</span>(<span class=\"st\">\"Dewasa\"</span>);\n} <span class=\"kw\">else if</span> (umur &gt;= <span class=\"nm\">13</span>) {\n  <span class=\"fn\">console.log</span>(<span class=\"st\">\"Remaja\"</span>);\n} <span class=\"kw\">else</span> {\n  <span class=\"fn\">console.log</span>(<span class=\"st\">\"Anak-anak\"</span>);\n}</code></pre>\n      <p>Programnya: cek umur &gt;= 18? Tidak. Cek umur &gt;= 13? <b>Ya</b> → jalankan blok itu. Sisanya dilewati.</p>\n\n      <h4>🎯 Ternary: if singkat</h4>\n      <pre class=\"codeblock\"><code><span class=\"cm\">// if biasa</span>\n<span class=\"kw\">let</span> status;\n<span class=\"kw\">if</span> (umur &gt;= <span class=\"nm\">18</span>) { status <span class=\"nm\">=</span> <span class=\"st\">\"Dewasa\"</span>; }\n<span class=\"kw\">else</span> { status <span class=\"nm\">=</span> <span class=\"st\">\"Bocil\"</span>; }\n\n<span class=\"cm\">// ternary — 1 baris, sama persis</span>\n<span class=\"kw\">const</span> status2 <span class=\"nm\">=</span> umur &gt;= <span class=\"nm\">18</span> ? <span class=\"st\">\"Dewasa\"</span> : <span class=\"st\">\"Bocil\"</span>;</code></pre>\n\n      <div class=\"tip\">💡 Baca ternary: <code class=\"inline\">kondisi ? ini : itu</code> → \"kalau iya, ambil ini; kalau enggak, ambil itu\".</div>\n\n      <h4>👮 Switch: banyak pilihan</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> hari <span class=\"nm\">=</span> <span class=\"st\">\"senin\"</span>;\n<span class=\"kw\">switch</span> (hari) {\n  <span class=\"kw\">case</span> <span class=\"st\">\"senin\"</span>: <span class=\"fn\">console.log</span>(<span class=\"st\">\"Ngoding\"</span>); <span class=\"kw\">break</span>;\n  <span class=\"kw\">case</span> <span class=\"st\">\"selasa\"</span>: <span class=\"fn\">console.log</span>(<span class=\"st\">\"Belajar\"</span>); <span class=\"kw\">break</span>;\n  <span class=\"kw\">default</span>: <span class=\"fn\">console.log</span>(<span class=\"st\">\"Santai\"</span>);\n}</code></pre>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> <code class=\"inline\">if</code> = \"kalau\", <code class=\"inline\">else</code> = \"kalau enggak\". Logika sehari-hari, tinggal tulis.</div>\n    ",
    "quiz": {
     "q": "Apa output dari: umur = 17; if (umur >= 18) \"Dewasa\" else \"Bocil\"?",
     "opts": [
      "Dewasa",
      "Bocil",
      "Error",
      "17"
     ],
     "ans": 1,
     "why": "17 tidak >= 18, jadi cabang else jalan: \"Bocil\"."
    }
   },
   {
    "id": "js-function",
    "num": "05",
    "title": "Function — Resep Masakan",
    "level": "Pemula",
    "desc": "Bikin kode sekali, panggil berkali-kali. Kayak resep yang bisa dipake ulang.",
    "intro": "Function itu kayak <b>resep masakan</b>: tulis langkahnya sekali, terus tinggal \"masak\" (panggil) kapan aja, pake bahan berbeda.",
    "body": "\n      <h4>📝 Bikin &amp; panggil function</h4>\n      <pre class=\"codeblock\"><code><span class=\"cm\">// Bikin resep</span>\n<span class=\"kw\">function</span> <span class=\"fn\">sapa</span>(nama) {\n  <span class=\"kw\">return</span> <span class=\"st\">`Halo, ${nama}!`</span>;\n}\n\n<span class=\"cm\">// Panggil — bahan (argumen) beda</span>\n<span class=\"fn\">console.log</span>(<span class=\"fn\">sapa</span>(<span class=\"st\">\"Supriyanto\"</span>));    <span class=\"cm\">// Halo, Supriyanto!</span>\n<span class=\"fn\">console.log</span>(<span class=\"fn\">sapa</span>(<span class=\"st\">\"Bos\"</span>));    <span class=\"cm\">// Halo, Bos!</span></code></pre>\n      <p><code class=\"inline\">nama</code> = bahan (parameter). <code class=\"inline\">return</code> = hasil masakan yang dikeluarin.</p>\n\n      <h4>⚡ Arrow function (cara modern)</h4>\n      <pre class=\"codeblock\"><code><span class=\"cm\">// Cara lama</span>\n<span class=\"kw\">function</span> kali(a, b) { <span class=\"kw\">return</span> a * b; }\n\n<span class=\"cm\">// Arrow — lebih pendek, ini yg dipake di dunia kerja</span>\n<span class=\"kw\">const</span> kali <span class=\"nm\">=</span> (a, b) <span class=\"nm\">=&gt;</span> a * b;\n\n<span class=\"fn\">console.log</span>(<span class=\"fn\">kali</span>(<span class=\"nm\">4</span>, <span class=\"nm\">5</span>));  <span class=\"cm\">// 20</span></code></pre>\n\n      <div class=\"tip\">💡 <b>Hafalin bentuk ini:</b> <code class=\"inline\">const nama = (input) =&gt; hasil</code>. Kalau cuma 1 baris, gak perlu <code class=\"inline\">return</code> &amp; kurung kurawal.</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> function = resep. <code class=\"inline\">function</code> bikin, <code class=\"inline\">()</code> bahan, <code class=\"inline\">return</code> hasil. Tulis sekali, pake selamanya.</div>\n    ",
    "quiz": {
     "q": "Apa output dari: const kali = (a,b) => a*b; console.log(kali(4,5));",
     "opts": [
      "9",
      "45",
      "20",
      "kali"
     ],
     "ans": 2,
     "why": "Arrow function mengembalikan hasil a*b = 4*5 = 20."
    }
   },
   {
    "id": "js-array",
    "num": "06",
    "title": "Array — Daftar Belanja Code",
    "level": "Pemula",
    "desc": "push, pop, map, filter — ngelola daftar data yang gede.",
    "intro": "Array itu <b>daftar</b>. Kayak daftar belanja: ada isi, ada urutan, bisa ditambah &amp; diambil. Nomor urutnya mulai dari <b>0</b> (bukan 1!).",
    "body": "\n      <h4>🗂️ Bikin &amp; akses daftar</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> buah <span class=\"nm\">=</span> [<span class=\"st\">\"apel\"</span>, <span class=\"st\">\"mangga\"</span>, <span class=\"st\">\"pisang\"</span>];\n<span class=\"fn\">console.log</span>(buah[<span class=\"nm\">0</span>]);       <span class=\"cm\">// apel  (index 0 = pertama)</span>\n<span class=\"fn\">console.log</span>(buah.length);    <span class=\"cm\">// 3 (berapa isi)</span>\n<span class=\"fn\">console.log</span>(buah[buah.length - <span class=\"nm\">1</span>]);  <span class=\"cm\">// pisang (terakhir)</span></code></pre>\n\n      <h4>➕➖ Nambah &amp; ngurangin</h4>\n      <pre class=\"codeblock\"><code>buah.<span class=\"fn\">push</span>(<span class=\"st\">\"jeruk\"</span>);     <span class=\"cm\">// tambah di belakang</span>\nbuah.<span class=\"fn\">pop</span>();            <span class=\"cm\">// hapus yang belakang</span>\nbuah.<span class=\"fn\">shift</span>();          <span class=\"cm\">// hapus yang depan</span>\nbuah.<span class=\"fn\">unshift</span>(<span class=\"st\">\"durian\"</span>); <span class=\"cm\">// tambah di depan</span></code></pre>\n\n      <h4>🔥 Map = ubah semua, Filter = saring</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> harga <span class=\"nm\">=</span> [<span class=\"nm\">10000</span>, <span class=\"nm\">20000</span>, <span class=\"nm\">5000</span>];\n\n<span class=\"cm\">// map: ubah SEMUA → tambah pajak 10%</span>\n<span class=\"kw\">const</span> pakePajak <span class=\"nm\">=</span> harga.<span class=\"fn\">map</span>(h <span class=\"nm\">=&gt;</span> h * <span class=\"nm\">1.1</span>);\n<span class=\"cm\">// [11000, 22000, 5500]</span>\n\n<span class=\"cm\">// filter: saring → ambil yang di atas 6000</span>\n<span class=\"kw\">const</span> mahal <span class=\"nm\">=</span> harga.<span class=\"fn\">filter</span>(h <span class=\"nm\">=&gt;</span> h &gt; <span class=\"nm\">6000</span>);\n<span class=\"cm\">// [10000, 20000]</span></code></pre>\n\n      <div class=\"tip\">💡 <b>map/filter itu WAJIB hafal</b> buat kerja. Dua-duanya gak ngubah daftar asli — hasilnya daftar baru. Copy-paste kode di atas ke Playground, ubah-ubah, liat hasilnya.</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> <code class=\"inline\">map</code> = transformasi 1-ke-1 (daftar 3 → daftar 3). <code class=\"inline\">filter</code> = saringan (daftar 3 → bisa jadi 2).</div>\n    ",
    "quiz": {
     "q": "const buah = [\"apel\",\"mangga\",\"pisang\"]; console.log(buah[1]); — outputnya?",
     "opts": [
      "apel",
      "mangga",
      "pisang",
      "Error"
     ],
     "ans": 1,
     "why": "Index dimulai dari 0. buah[0]=apel, buah[1]=mangga."
    }
   },
   {
    "id": "js-object",
    "num": "07",
    "title": "Object — Kartu Identitas Data",
    "level": "Pemula",
    "desc": "Simpan data kompleks: nama, umur, alamat dalam satu objek.",
    "intro": "Object itu kayak <b>KTP digital</b>: satu orang punya banyak data — nama, umur, alamat — dikumpulin jadi satu.",
    "body": "\n      <h4>🪪 Bikin object</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> user <span class=\"nm\">=</span> {\n  nama: <span class=\"st\">\"Supriyanto\"</span>,\n  umur: <span class=\"nm\">25</span>,\n  kota: <span class=\"st\">\"Jakarta\"</span>,\n  <span class=\"fn\">sapa</span>() { <span class=\"kw\">return</span> <span class=\"st\">`Halo, aku ${<span class=\"kw\">this</span>.nama}`</span>; }\n};\n\n<span class=\"fn\">console.log</span>(user.nama);        <span class=\"cm\">// Supriyanto — pake titik</span>\n<span class=\"fn\">console.log</span>(user[<span class=\"st\">\"kota\"</span>]);    <span class=\"cm\">// Jakarta — pake kurung</span>\n<span class=\"fn\">console</span>.<span class=\"fn\">log</span>(user.<span class=\"fn\">sapa</span>());      <span class=\"cm\">// Halo, aku Supriyanto</span></code></pre>\n\n      <h4>🔄 Ubah &amp; tambah data</h4>\n      <pre class=\"codeblock\"><code>user.umur <span class=\"nm\">=</span> <span class=\"nm\">26</span>;              <span class=\"cm\">// ubah</span>\nuser.hobi <span class=\"nm\">=</span> [<span class=\"st\">\"ngoding\"</span>, <span class=\"st\">\"trading\"</span>];  <span class=\"cm\">// tambah baru</span>\n<span class=\"kw\">delete</span> user.kota;           <span class=\"cm\">// hapus</span></code></pre>\n\n      <h4>🗃️ Object di dalem array (POLA PALING SERING)</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> users <span class=\"nm\">=</span> [\n  { nama: <span class=\"st\">\"Supriyanto\"</span>, umur: <span class=\"nm\">25</span> },\n  { nama: <span class=\"st\">\"Boss\"</span>, umur: <span class=\"nm\">30</span> }\n];\n\n<span class=\"cm\">// Ambil semua nama — map + object = combo andalan</span>\n<span class=\"kw\">const</span> namaSemua <span class=\"nm\">=</span> users.<span class=\"fn\">map</span>(u <span class=\"nm\">=&gt;</span> u.nama);\n<span class=\"fn\">console.log</span>(namaSemua);   <span class=\"cm\">// [\"Supriyanto\",\"Boss\"]</span></code></pre>\n\n      <div class=\"tip\">💡 <b>Ini pola paling umum di dunia nyata:</b> array of objects. Data dari API (backend) hampir selalu berbentuk array of objects. Hafalkan kombinasi <code class=\"inline\">array.map(u =&gt; u.nama)</code>.</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> object = KTP. <code class=\"inline\">user.nama</code> = \"user punya nama\". Titik itu \"punya\".</div>\n    ",
    "quiz": {
     "q": "Bagaimana mengambil nilai \"umur\" dari const user = {nama:\"Supriyanto\", umur:25}?",
     "opts": [
      "user[umur]",
      "user.umur",
      "user->umur",
      "umur.user"
     ],
     "ans": 1,
     "why": "Untuk akses properti object pakai titik: user.umur = 25."
    }
   },
   {
    "id": "js-loop",
    "num": "08",
    "title": "Loop — Ulang Tanpa Capek",
    "level": "Menengah",
    "desc": "for, while, forEach — jalankan hal yang sama berulang-ulang otomatis.",
    "intro": "Loop itu kayak <b>mesin cuci</b>: sekali pencet, dia puter-puter sendiri sampai bersih. kamu gak usah cuci manual 20x.",
    "body": "\n      <h4>🔁 for — ulang dengan hitungan</h4>\n      <pre class=\"codeblock\"><code><span class=\"cm\">// Mulai dari 1, selama i <= 3, tiap putaran i + 1</span>\n<span class=\"kw\">for</span> (<span class=\"kw\">let</span> i <span class=\"nm\">=</span> <span class=\"nm\">1</span>; i <span class=\"nm\">&lt;=</span> <span class=\"nm\">3</span>; i++) {\n  <span class=\"fn\">console.log</span>(<span class=\"st\">`Putaran ke-${i}`</span>);\n}\n<span class=\"cm\">// Putaran ke-1 / ke-2 / ke-3</span></code></pre>\n      <p>Tiga bagian: <b>mulai</b> (<code class=\"inline\">i = 1</code>), <b>syarat</b> (<code class=\"inline\">i &lt;= 3</code>), <b>langkah</b> (<code class=\"inline\">i++</code>).</p>\n\n      <h4>📋 Loop array pake for...of</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> buah <span class=\"nm\">=</span> [<span class=\"st\">\"apel\"</span>, <span class=\"st\">\"mangga\"</span>];\n<span class=\"kw\">for</span> (<span class=\"kw\">const</span> b <span class=\"kw\">of</span> buah) {\n  <span class=\"fn\">console.log</span>(b);\n}\n<span class=\"cm\">// apel, mangga — lebih gampang daripada for biasa</span></code></pre>\n\n      <h4>🎯 forEach — andalan buat daftar</h4>\n      <pre class=\"codeblock\"><code>buah.<span class=\"fn\">forEach</span>((b, index) <span class=\"nm\">=&gt;</span> {\n  <span class=\"fn\">console.log</span>(index + <span class=\"st\">\": \"</span> + b);\n});\n<span class=\"cm\">// 0: apel, 1: mangga</span></code></pre>\n\n      <div class=\"warn\">⚠️ <b>Bahaya loop tak berujung:</b> kalau syaratnya gak pernah salah (misal lupa <code class=\"inline\">i++</code>), program hang. Selalu pastikan ada jalan keluar!</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> <code class=\"inline\">for</code> = ulang dengan hitungan, <code class=\"inline\">for...of</code> = jalankan semua isi daftar, <code class=\"inline\">forEach</code> = versi singkatnya.</div>\n    ",
    "quiz": {
     "q": "Berapa kali loop ini jalan: for (let i = 0; i < 3; i++)",
     "opts": [
      "2 kali",
      "3 kali",
      "4 kali",
      "Tak berujung"
     ],
     "ans": 1,
     "why": "i berjalan 0,1,2 → 3 kali. Saat i=3, syarat i<3 salah, loop berhenti."
    }
   },
   {
    "id": "js-dom",
    "num": "09",
    "title": "DOM — Mainan Website",
    "level": "Menengah",
    "desc": "Ubah isi website langsung dari JS. Inilah inti JavaScript di browser!",
    "intro": "DOM itu kayak <b>remote TV</b>: website itu TV-nya, JS itu remote-nya. kamu pencet tombol → TV langsung berubah. Gak perlu reload.",
    "body": "\n      <div class=\"note\">🧪 <b>Cobain sekarang:</b> buka Playground di atas, ganti kode jadi di bawah, jalankan. kamu bakal liat kotak \"play\" berubah!</div>\n\n      <h4>🎯 Ambil elemen</h4>\n      <pre class=\"codeblock\"><code><span class=\"cm\">// Cari elemen</span>\n<span class=\"kw\">const</span> judul <span class=\"nm\">=</span> document.<span class=\"fn\">querySelector</span>(<span class=\"st\">\"h1\"</span>);\n<span class=\"kw\">const</span> tombol <span class=\"nm\">=</span> document.<span class=\"fn\">getElementById</span>(<span class=\"st\">\"btnLogin\"</span>);\n<span class=\"kw\">const</span> semua <span class=\"nm\">=</span> document.<span class=\"fn\">querySelectorAll</span>(<span class=\"st\">\".card\"</span>);</code></pre>\n\n      <h4>✍️ Ubah isi &amp; gaya</h4>\n      <pre class=\"codeblock\"><code>judul.textContent <span class=\"nm\">=</span> <span class=\"st\">\"Judul Baru\"</span>;      <span class=\"cm\">// ganti teks</span>\njudul.style.color <span class=\"nm\">=</span> <span class=\"st\">\"tomato\"</span>;         <span class=\"cm\">// ganti warna</span>\njudul.classList.<span class=\"fn\">add</span>(<span class=\"st\">\"aktif\"</span>);        <span class=\"cm\">// tambah class CSS</span>\njudul.classList.<span class=\"fn\">remove</span>(<span class=\"st\">\"aktif\"</span>);     <span class=\"cm\">// hapus class</span></code></pre>\n\n      <h4>👂 Dengerin klik (event)</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> btn <span class=\"nm\">=</span> document.<span class=\"fn\">querySelector</span>(<span class=\"st\">\"#btnLogin\"</span>);\nbtn.<span class=\"fn\">addEventListener</span>(<span class=\"st\">\"click\"</span>, () <span class=\"nm\">=&gt;</span> {\n  <span class=\"fn\">alert</span>(<span class=\"st\">\"Tombol diklik!\"</span>);\n});</code></pre>\n\n      <div class=\"tip\">💡 <b>Rumus hidup:</b> <code class=\"inline\">ambil elemen → ubah / dengerin</code>. Itu 90% kerjaan JS di website. <code class=\"inline\">querySelector</code> pakai selector CSS (sama kayak CSS).</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> DOM = remote TV. <code class=\"inline\">querySelector</code> = cari tombolnya, <code class=\"inline\">textContent</code> = ganti tulisannya, <code class=\"inline\">addEventListener</code> = pasang sensor klik.</div>\n    ",
    "quiz": {
     "q": "Fungsi mana yang dipakai untuk MENGAMBIL elemen berdasarkan ID?",
     "opts": [
      "querySelector(\"#id\")",
      "getElementById(\"id\")",
      "Keduanya benar",
      "classList.add(\"id\")"
     ],
     "ans": 2,
     "why": "getElementById(\"id\") dan querySelector(\"#id\") sama-sama bisa mengambil elemen berdasarkan ID."
    }
   },
   {
    "id": "js-destructure",
    "num": "10",
    "title": "Destructure — Bongkar Cepat",
    "level": "Menengah",
    "desc": "Ambil data dari object/array dalam sekali baris. Kode jadi pendek & bersih.",
    "intro": "Destructure itu kayak <b>bongkar kardus</b>: buka box, langsung keluarin semua isinya ke tangan, tanpa ambil satu-satu.",
    "body": "\n      <h4>📦 Bongkar object</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> user <span class=\"nm\">=</span> { nama: <span class=\"st\">\"Supriyanto\"</span>, umur: <span class=\"nm\">25</span>, kota: <span class=\"st\">\"Jakarta\"</span> };\n\n<span class=\"cm\">// Cara lama — ambil satu-satu</span>\n<span class=\"kw\">const</span> nama1 <span class=\"nm\">=</span> user.nama;\n<span class=\"kw\">const</span> umur1 <span class=\"nm\">=</span> user.umur;\n\n<span class=\"cm\">// Destructure — bongkar sekaligus 💥</span>\n<span class=\"kw\">const</span> { nama, umur } <span class=\"nm\">=</span> user;\n<span class=\"fn\">console.log</span>(nama, umur);   <span class=\"cm\">// Supriyanto 25</span></code></pre>\n\n      <h4>📋 Bongkar array</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> warna <span class=\"nm\">=</span> [<span class=\"st\">\"merah\"</span>, <span class=\"st\">\"kuning\"</span>, <span class=\"st\">\"hijau\"</span>];\n<span class=\"kw\">const</span> [pertama, kedua] <span class=\"nm\">=</span> warna;\n<span class=\"fn\">console.log</span>(pertama);   <span class=\"cm\">// merah</span>\n<span class=\"fn\">console.log</span>(kedua);     <span class=\"cm\">// kuning</span>\n\n<span class=\"cm\">// Skip satu posisi</span>\n<span class=\"kw\">const</span> [a, , c] <span class=\"nm\">=</span> warna;\n<span class=\"fn\">console.log</span>(c);        <span class=\"cm\">// hijau</span></code></pre>\n\n      <h4>⚡ Paling sering kepake: destructure di parameter function</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> user <span class=\"nm\">=</span> { nama: <span class=\"st\">\"Supriyanto\"</span>, umur: <span class=\"nm\">25</span> };\n\n<span class=\"cm\">// Terima langsung propertinya</span>\n<span class=\"kw\">function</span> <span class=\"fn\">kenalin</span>({ nama, umur }) {\n  <span class=\"kw\">return</span> <span class=\"st\">`${nama} umur ${umur}`</span>;\n}\n<span class=\"fn\">console.log</span>(<span class=\"fn\">kenalin</span>(user));   <span class=\"cm\">// Supriyanto umur 25</span></code></pre>\n\n      <div class=\"tip\">💡 <b>Ini wajib hafal buat kerjaan React/API:</b> data dari API dikirim sebagai object → langsung bongkar pas di parameter.</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> <code class=\"inline\">{ nama, umur } = user</code> → \"keluarin nama &amp; umur dari user\". Kurung kurawal = object, kurung siku = array.</div>\n    ",
    "quiz": {
     "q": "const {nama} = {nama:\"Supriyanto\", umur:25}; console.log(nama) — outputnya?",
     "opts": [
      "{nama: \"Supriyanto\"}",
      "Supriyanto",
      "umur 25",
      "Error"
     ],
     "ans": 1,
     "why": "Destructure mengambil properti nama saja dari object → nilainya \"Supriyanto\"."
    }
   },
   {
    "id": "js-async",
    "num": "11",
    "title": "Async/Await — Tunggu Data",
    "level": "Profesional",
    "desc": "Fetch data dari server tanpa nge-freeze aplikasi.",
    "intro": "Async itu kayak <b>pesan go-food</b>: kamu order (request), sambil nunggu, kamu bisa main HP (aplikasi tetep jalan). Dateng? Tinggal ambil.",
    "body": "\n      <h4>☕ Kenapa perlu async?</h4>\n      <p>Kalau kode jalan sinkron (antri), loading data dari server bisa bikin aplikasi <b>macet</b> kayak layar loading tak berujung. Async = jangan nunggu, lanjutin yang lain.</p>\n\n      <h4>📦 Fetch data dari API</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">async function</span> <span class=\"fn\">ambilUser</span>() {\n  <span class=\"kw\">const</span> res <span class=\"nm\">=</span> <span class=\"kw\">await</span> <span class=\"fn\">fetch</span>(<span class=\"st\">\"https://api.example.com/user\"</span>);\n  <span class=\"kw\">const</span> data <span class=\"nm\">=</span> <span class=\"kw\">await</span> res.<span class=\"fn\">json</span>();\n  <span class=\"fn\">console.log</span>(data.nama);\n}</code></pre>\n      <p><code class=\"inline\">await</code> = \"tungguin ini dulu\". <code class=\"inline\">fetch</code> = minta data ke server. Sesimpel itu.</p>\n\n      <h4>🛡️ Tangkap error — jangan lupa!</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">async function</span> <span class=\"fn\">ambilUser</span>() {\n  <span class=\"kw\">try</span> {\n    <span class=\"kw\">const</span> res <span class=\"nm\">=</span> <span class=\"kw\">await</span> <span class=\"fn\">fetch</span>(url);\n    <span class=\"kw\">if</span> (!res.ok) <span class=\"kw\">throw new</span> Error(<span class=\"st\">\"Gagal ambil\"</span>);\n    <span class=\"kw\">const</span> data <span class=\"nm\">=</span> <span class=\"kw\">await</span> res.<span class=\"fn\">json</span>();\n    <span class=\"kw\">return</span> data;\n  } <span class=\"kw\">catch</span> (err) {\n    <span class=\"fn\">console.error</span>(<span class=\"st\">\"Error:\"</span>, err.message);\n  }\n}</code></pre>\n\n      <div class=\"warn\">⚠️ <b>Aturan emas:</b> <code class=\"inline\">await</code> cuma boleh di dalam function yang di-cap <code class=\"inline\">async</code>. Lupa? Error seger.</div>\n\n      <div class=\"tip\">💡 <b>Urutan baca:</b> <code class=\"inline\">async function</code> = deklarasi \"ini function yang bisa nunggu\", <code class=\"inline\">await fetch()</code> = \"minta data &amp; tunggu sampe dateng\", <code class=\"inline\">try/catch</code> = \"kalau gagal, jangan panik, tangkap errornya\".</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> async/await = go-food. Fetch = order. Await = nunggu. Try/catch = komplain kalau salah. Aplikasi tetep ngebut, gak nunggu makan.</div>\n    ",
    "quiz": {
     "q": "Apa gunanya kata kunci \"await\" dalam async function?",
     "opts": [
      "Menghentikan program",
      "Menunggu hasil Promise selesai",
      "Membuat kode lebih cepat",
      "Menghapus data"
     ],
     "ans": 1,
     "why": "await membuat JS menunggu Promise (misal fetch) selesai sebelum lanjut ke baris berikutnya."
    }
   },
   {
    "id": "js-clousure",
    "num": "12",
    "title": "Closure & this — Level Profesional",
    "level": "Profesional",
    "desc": "Dua konsep yang membedakan junior vs senior. Paham ini, kamu naik level.",
    "intro": "Closure itu kayak <b>memori tersembunyi</b>: function yang \"inget\" lingkungan tempat dia lahir, walau sudah dipindah kemana-mana.",
    "body": "\n      <h4>🔒 Closure: function yang inget masa lalu</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">function</span> <span class=\"fn\">buatCounter</span>() {\n  <span class=\"kw\">let</span> hitung <span class=\"nm\">=</span> <span class=\"nm\">0</span>;   <span class=\"cm\">// \"memori\" si function</span>\n  <span class=\"kw\">return</span> () <span class=\"nm\">=&gt;</span> {\n    hitung++;\n    <span class=\"kw\">return</span> hitung;\n  };\n}\n\n<span class=\"kw\">const</span> counter <span class=\"nm\">=</span> <span class=\"fn\">buatCounter</span>();\n<span class=\"fn\">console.log</span>(<span class=\"fn\">counter</span>());  <span class=\"cm\">// 1</span>\n<span class=\"fn\">console.log</span>(<span class=\"fn\">counter</span>());  <span class=\"cm\">// 2 — masih inget!</span>\n<span class=\"fn\">console.log</span>(<span class=\"fn\">counter</span>());  <span class=\"cm\">// 3</span></code></pre>\n      <p>Variabel <code class=\"inline\">hitung</code> itu privat — gak bisa disentuh dari luar, tapi si function bisa ngakses dan \"mengingatnya\". Itu closure.</p>\n\n      <h4>🎯 this: siapa yang manggil?</h4>\n      <pre class=\"codeblock\"><code><span class=\"kw\">const</span> user <span class=\"nm\">=</span> {\n  nama: <span class=\"st\">\"Supriyanto\"</span>,\n  <span class=\"fn\">sapa</span>() { <span class=\"kw\">return</span> <span class=\"st\">`Halo ${<span class=\"kw\">this</span>.nama}`</span>; }\n};\n<span class=\"fn\">console.log</span>(user.<span class=\"fn\">sapa</span>());  <span class=\"cm\">// Halo Supriyanto — this = user</span></code></pre>\n      <p><code class=\"inline\">this</code> = \"siapa pemilik function ini\". Di object, <code class=\"inline\">this</code> = object-nya. Gampang.</p>\n\n      <div class=\"warn\">⚠️ <b>Jebakan arrow function:</b> arrow function <b>gak punya <code class=\"inline\">this</code> sendiri</b> — dia pinjam dari lingkungan luar. Function biasa punya <code class=\"inline\">this</code> sendiri. Ini sumber bug klasik!</div>\n\n      <div class=\"tip\">💡 <b>React/class pake ini terus:</b> <code class=\"inline\">this.setState</code>, <code class=\"inline\">this.props</code>. Pahamin <code class=\"inline\">this</code> = si pemanggil, hidup kamu jauh lebih tenang.</div>\n\n      <div class=\"note\">📌 <b>Inget gini aja:</b> closure = function + ingatan. <code class=\"inline\">this</code> = si empunya. Dua-duanya gampang kalo kamu tau pola di atas.</div>\n    ",
    "quiz": {
     "q": "Function di bawah \"mengingat\" variabel mana? function buatCounter() { let hitung = 0; return () => hitung++; }",
     "opts": [
      "Tidak ada",
      "hitung",
      "buatCounter",
      "return"
     ],
     "ans": 1,
     "why": "Closure membuat function dalam mengingat variabel hitung (milik function luar) walau sudah dikembalikan."
    }
   }
  ]
 },
 {
  "id": "pw",
  "title": "Playwright 🎭",
  "subtitle": "Automation testing: locator, action, assertion, sampai CI/CD",
  "accent": "green",
  "category": "it",
  "lessons": [
   {
    "id": "pw-01",
    "num": "01",
    "title": "Persiapan & Environment Setup",
    "level": "Pemula",
    "desc": "4 sub-topik",
    "body": "\n\n      <h4>📌 Instalasi Node.js & VS Code</h4>\n      <p>Playwright membutuhkan Node.js sebagai runtime. Download <strong>Node.js LTS</strong> (minimal v18) dari nodejs.org dan <strong>VS Code</strong> dari code.visualstudio.com.</p>\n      <div class=\"code-block\"><span class=\"cm\"># Verifikasi instalasi</span>\nnode -v    <span class=\"cm\"># Contoh output: v20.11.0</span>\nnpm -v     <span class=\"cm\"># Contoh output: 10.2.4</span></div>\n      <p>Install extension <strong>\"Playwright Test for VS Code\"</strong> dari marketplace untuk fitur run/debug test langsung dari editor.</p>\n\n      <h4>📌 Inisialisasi Project Playwright</h4>\n      <p>Buat project baru dengan satu perintah:</p>\n      <div class=\"code-block\">mkdir playwright-demo\ncd playwright-demo\n<span class=\"fn\">npm</span> init playwright@latest</div>\n      <p>Perintah ini akan menginstall Playwright, membuat konfigurasi, dan mendownload browser (Chromium, Firefox, WebKit).</p>\n\n      <h4>📌 Struktur Project</h4>\n      <div class=\"code-block\">📁 playwright-demo/\n├── 📁 tests/\n│   └── example.spec.js     <span class=\"cm\">← File test</span>\n├── 📄 playwright.config.js  <span class=\"cm\">← Konfigurasi utama</span>\n├── 📄 package.json\n└── 📄 package-lock.json</div>\n\n      <h4>📌 Menjalankan Test Pertama</h4>\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">npx playwright test</span>\n          <span class=\"keyword-badge\">CLI</span>\n        </div>\n        <div class=\"keyword-desc\">Menjalankan semua test file di folder <code>tests/</code>.</div>\n        <div class=\"code-block\"><span class=\"cm\"># Jalankan semua test</span>\nnpx playwright test\n\n<span class=\"cm\"># Jalankan test tertentu</span>\nnpx playwright test tests/login.spec.js\n\n<span class=\"cm\"># Jalankan dalam mode UI (visual)</span>\nnpx playwright test --ui\n\n<span class=\"cm\"># Jalankan dengan browser terlihat (headed)</span>\nnpx playwright test --headed\n\n<span class=\"cm\"># Generate test otomatis via recording</span>\nnpx playwright codegen https://example.com</div>\n      </div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div>Gunakan <code>npx playwright codegen</code> untuk merekam interaksi di browser dan otomatis menghasilkan kode test. Sangat cocok untuk pemula!</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-02",
    "num": "02",
    "title": "Mengenal Syntax Dasar Playwright",
    "level": "Pemula",
    "desc": "9 keyword",
    "body": "\n\n      <h4>📌 Dasar Penulisan Test di Playwright</h4>\n      <p>Setiap keyword di bawah ini adalah building block untuk menulis test Playwright. Pahami masing-masing fungsinya.</p>\n\n      <!-- test() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test()</span>\n          <span class=\"keyword-badge\">Core</span>\n        </div>\n        <div class=\"keyword-desc\">Blok utama untuk mendefinisikan satu test case. Parameter pertama adalah nama test (string), parameter kedua adalah fungsi async yang menerima fixture <code>{ page }</code>.</div>\n        <div class=\"code-block\"><span class=\"kw\">import</span> { test, expect } <span class=\"kw\">from</span> <span class=\"st\">'@playwright/test'</span>;\n\ntest(<span class=\"st\">'halaman utama punya judul yang benar'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'https://example.com'</span>);\n  <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).<span class=\"fn\">toHaveTitle</span>(<span class=\"st\">'Example Domain'</span>);\n});</div>\n      </div>\n\n      <!-- test.describe() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.describe()</span>\n          <span class=\"keyword-badge\">Grouping</span>\n        </div>\n        <div class=\"keyword-desc\">Mengelompokkan beberapa test yang berhubungan ke dalam satu blok. Berguna untuk mengorganisir test berdasarkan fitur atau halaman.</div>\n        <div class=\"code-block\">test.<span class=\"fn\">describe</span>(<span class=\"st\">'Halaman Login'</span>, () => {\n\n  test(<span class=\"st\">'form login tampil dengan benar'</span>, <span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/login'</span>);\n    <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>)).<span class=\"fn\">toBeVisible</span>();\n  });\n\n  test(<span class=\"st\">'error muncul jika password kosong'</span>, <span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/login'</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Login'</span> }).<span class=\"fn\">click</span>();\n    <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Password wajib diisi'</span>)).<span class=\"fn\">toBeVisible</span>();\n  });\n\n});</div>\n      </div>\n\n      <!-- test.beforeEach() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.beforeEach()</span>\n          <span class=\"keyword-badge\">Hook</span>\n        </div>\n        <div class=\"keyword-desc\">Dijalankan <strong>sebelum setiap</strong> test dalam blok describe. Biasa digunakan untuk navigasi ke halaman atau setup data awal.</div>\n        <div class=\"code-block\">test.<span class=\"fn\">describe</span>(<span class=\"st\">'Dashboard'</span>, () => {\n\n  test.<span class=\"fn\">beforeEach</span>(<span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"cm\">// Buka halaman dashboard sebelum setiap test</span>\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/dashboard'</span>);\n  });\n\n  test(<span class=\"st\">'menampilkan welcome message'</span>, <span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Selamat datang'</span>)).<span class=\"fn\">toBeVisible</span>();\n  });\n\n});</div>\n      </div>\n\n      <!-- test.afterEach() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.afterEach()</span>\n          <span class=\"keyword-badge\">Hook</span>\n        </div>\n        <div class=\"keyword-desc\">Dijalankan <strong>setelah setiap</strong> test. Berguna untuk cleanup data atau mengambil screenshot setelah test gagal.</div>\n        <div class=\"code-block\">test.<span class=\"fn\">afterEach</span>(<span class=\"kw\">async</span> ({ page }, testInfo) => {\n  <span class=\"kw\">if</span> (testInfo.status === <span class=\"st\">'failed'</span>) {\n    <span class=\"cm\">// Ambil screenshot jika test gagal</span>\n    <span class=\"kw\">await</span> page.<span class=\"fn\">screenshot</span>({ path: <span class=\"st\">`screenshots/${testInfo.title}.png`</span> });\n  }\n});</div>\n      </div>\n\n      <!-- test.beforeAll() / test.afterAll() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.beforeAll() / test.afterAll()</span>\n          <span class=\"keyword-badge\">Hook</span>\n        </div>\n        <div class=\"keyword-desc\">Dijalankan <strong>sekali saja</strong> sebelum/sesudah seluruh test dalam blok describe. Cocok untuk setup/teardown yang berat seperti membuat data di database.</div>\n        <div class=\"code-block\">test.<span class=\"fn\">beforeAll</span>(<span class=\"kw\">async</span> () => {\n  console.log(<span class=\"st\">'Setup: berjalan sekali sebelum semua test'</span>);\n});\n\ntest.<span class=\"fn\">afterAll</span>(<span class=\"kw\">async</span> () => {\n  console.log(<span class=\"st\">'Teardown: berjalan sekali setelah semua test'</span>);\n});</div>\n      </div>\n\n      <!-- test.skip() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.skip()</span>\n          <span class=\"keyword-badge\">Modifier</span>\n        </div>\n        <div class=\"keyword-desc\">Melewati test tertentu agar tidak dijalankan. Test yang di-skip akan ditandai di report tetapi tidak dihitung gagal.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Skip test secara langsung</span>\ntest.<span class=\"fn\">skip</span>(<span class=\"st\">'fitur belum selesai'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"cm\">// Test ini tidak akan dijalankan</span>\n});\n\n<span class=\"cm\">// Skip berdasarkan kondisi</span>\ntest(<span class=\"st\">'hanya jalan di desktop'</span>, <span class=\"kw\">async</span> ({ page, isMobile }) => {\n  test.<span class=\"fn\">skip</span>(isMobile, <span class=\"st\">'Fitur ini tidak ada di mobile'</span>);\n  <span class=\"cm\">// ... test code</span>\n});</div>\n      </div>\n\n      <!-- test.only() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.only()</span>\n          <span class=\"keyword-badge\">Modifier</span>\n        </div>\n        <div class=\"keyword-desc\">Hanya menjalankan test tertentu dan mengabaikan test lainnya. Sangat berguna saat debugging satu test spesifik.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Hanya test ini yang akan berjalan di file ini</span>\ntest.<span class=\"fn\">only</span>(<span class=\"st\">'focus debug test ini saja'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/debug'</span>);\n  <span class=\"cm\">// ... debugging code</span>\n});</div>\n      </div>\n\n      <!-- test.fixme() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.fixme()</span>\n          <span class=\"keyword-badge\">Modifier</span>\n        </div>\n        <div class=\"keyword-desc\">Menandai test yang diketahui gagal dan perlu diperbaiki. Mirip <code>test.skip()</code> tetapi dengan semantik \"perlu diperbaiki\".</div>\n        <div class=\"code-block\">test.<span class=\"fn\">fixme</span>(<span class=\"st\">'bug #1234 - tombol tidak bisa diklik'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"cm\">// Test ini akan di-skip, ditandai sebagai \"fixme\" di report</span>\n});</div>\n      </div>\n\n      <!-- test.step() -->\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">test.step()</span>\n          <span class=\"keyword-badge\">Utility</span>\n        </div>\n        <div class=\"keyword-desc\">Membagi test menjadi langkah-langkah bernama. Setiap step muncul terpisah di report, memudahkan debugging ketika satu langkah gagal.</div>\n        <div class=\"code-block\">test(<span class=\"st\">'checkout flow lengkap'</span>, <span class=\"kw\">async</span> ({ page }) => {\n\n  <span class=\"kw\">await</span> test.<span class=\"fn\">step</span>(<span class=\"st\">'Buka halaman produk'</span>, <span class=\"kw\">async</span> () => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/products'</span>);\n  });\n\n  <span class=\"kw\">await</span> test.<span class=\"fn\">step</span>(<span class=\"st\">'Tambah ke keranjang'</span>, <span class=\"kw\">async</span> () => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Add to Cart'</span> }).<span class=\"fn\">click</span>();\n  });\n\n  <span class=\"kw\">await</span> test.<span class=\"fn\">step</span>(<span class=\"st\">'Verifikasi keranjang'</span>, <span class=\"kw\">async</span> () => {\n    <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByTestId</span>(<span class=\"st\">'cart-count'</span>)).<span class=\"fn\">toHaveText</span>(<span class=\"st\">'1'</span>);\n  });\n\n});</div>\n      </div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Ingat:</strong> Setiap fungsi test menerima <strong>fixtures</strong> sebagai parameter: <code>{ page }</code> untuk UI testing, <code>{ request }</code> untuk API testing, <code>{ browser }</code> untuk kontrol browser manual.</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-03",
    "num": "03",
    "title": "Locators — Menemukan Elemen di Halaman",
    "level": "Pemula",
    "desc": "11 locator",
    "body": "\n\n      <h4>📌 Apa itu Locator?</h4>\n      <p>Locator adalah cara Playwright \"menemukan\" elemen HTML di halaman. Playwright merekomendasikan locator yang <strong>user-facing</strong> (berdasarkan apa yang dilihat pengguna) agar test lebih stabil.</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.getByRole()</span>\n          <span class=\"keyword-badge\">⭐ Paling Direkomendasikan</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan elemen berdasarkan <strong>ARIA role</strong>-nya (button, link, heading, textbox, checkbox, dll). Ini adalah locator paling direkomendasikan karena paling stabil dan aksesibel.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Tombol dengan teks \"Submit\"</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Submit'</span> }).<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Link navigasi</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'link'</span>, { name: <span class=\"st\">'Home'</span> }).<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Heading h1</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'heading'</span>, { level: 1 })).<span class=\"fn\">toBeVisible</span>();\n\n<span class=\"cm\">// Checkbox</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'checkbox'</span>, { name: <span class=\"st\">'Setuju'</span> }).<span class=\"fn\">check</span>();\n\n<span class=\"cm\">// Input text (textbox)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'textbox'</span>, { name: <span class=\"st\">'Username'</span> }).<span class=\"fn\">fill</span>(<span class=\"st\">'john'</span>);\n\n<span class=\"cm\">// Dropdown (combobox)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'combobox'</span>).<span class=\"fn\">selectOption</span>(<span class=\"st\">'Jakarta'</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.getByLabel()</span>\n          <span class=\"keyword-badge\">Form</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan input form berdasarkan teks <code>&lt;label&gt;</code> yang terhubung dengannya. Sangat cocok untuk form yang punya label yang jelas.</div>\n        <div class=\"code-block\"><span class=\"cm\">// HTML: &lt;label for=\"email\"&gt;Alamat Email&lt;/label&gt;</span>\n<span class=\"cm\">//       &lt;input id=\"email\" type=\"email\"&gt;</span>\n\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Alamat Email'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'user@test.com'</span>);\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Password'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'secret123'</span>);\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Ingat saya'</span>).<span class=\"fn\">check</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.getByPlaceholder()</span>\n          <span class=\"keyword-badge\">Form</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan input berdasarkan atribut <code>placeholder</code>-nya. Berguna jika input tidak memiliki label.</div>\n        <div class=\"code-block\"><span class=\"cm\">// HTML: &lt;input placeholder=\"Cari produk...\"&gt;</span>\n\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByPlaceholder</span>(<span class=\"st\">'Cari produk...'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'Laptop'</span>);\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByPlaceholder</span>(<span class=\"st\">'Masukkan nama'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'Budi'</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.getByText()</span>\n          <span class=\"keyword-badge\">Teks</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan elemen berdasarkan <strong>teks yang terlihat</strong> di halaman. Bisa exact match atau partial match.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Exact match (default: substring match)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Selamat datang'</span>);\n\n<span class=\"cm\">// Exact match — harus persis sama</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Selamat datang, Budi!'</span>, { exact: <span class=\"kw\">true</span> });\n\n<span class=\"cm\">// Menggunakan regex</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByText</span>(<span class=\"st\">/selamat datang/i</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.getByTestId()</span>\n          <span class=\"keyword-badge\">Testing</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan elemen berdasarkan atribut <code>data-testid</code>. Direkomendasikan saat tidak ada locator user-facing yang cocok.</div>\n        <div class=\"code-block\"><span class=\"cm\">// HTML: &lt;button data-testid=\"submit-order\"&gt;Pesan&lt;/button&gt;</span>\n\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByTestId</span>(<span class=\"st\">'submit-order'</span>).<span class=\"fn\">click</span>();\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByTestId</span>(<span class=\"st\">'cart-count'</span>)).<span class=\"fn\">toHaveText</span>(<span class=\"st\">'3'</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.getByAltText()</span>\n          <span class=\"keyword-badge\">Media</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan elemen (biasanya gambar) berdasarkan atribut <code>alt</code>.</div>\n        <div class=\"code-block\"><span class=\"cm\">// HTML: &lt;img alt=\"Logo Perusahaan\" src=\"logo.png\"&gt;</span>\n\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByAltText</span>(<span class=\"st\">'Logo Perusahaan'</span>)).<span class=\"fn\">toBeVisible</span>();\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByAltText</span>(<span class=\"st\">'Foto Profil'</span>).<span class=\"fn\">click</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.getByTitle()</span>\n          <span class=\"keyword-badge\">Atribut</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan elemen berdasarkan atribut <code>title</code> (tooltip).</div>\n        <div class=\"code-block\"><span class=\"cm\">// HTML: &lt;button title=\"Hapus item\"&gt;🗑️&lt;/button&gt;</span>\n\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByTitle</span>(<span class=\"st\">'Hapus item'</span>).<span class=\"fn\">click</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.locator()</span>\n          <span class=\"keyword-badge\">CSS / XPath</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan elemen menggunakan <strong>CSS selector</strong> atau <strong>XPath</strong>. Gunakan sebagai pilihan terakhir jika tidak ada locator user-facing yang cocok.</div>\n        <div class=\"code-block\"><span class=\"cm\">// CSS Selector</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'button.btn-primary'</span>).<span class=\"fn\">click</span>();\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'#sidebar .menu-item'</span>).<span class=\"fn\">first</span>().<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// XPath</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'xpath=//div[@class=\"card\"]//button'</span>).<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Kombinasi — text + CSS</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'article'</span>).<span class=\"fn\">filter</span>({ hasText: <span class=\"st\">'Playwright'</span> }).<span class=\"fn\">click</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">page.frameLocator()</span>\n          <span class=\"keyword-badge\">iFrame</span>\n        </div>\n        <div class=\"keyword-desc\">Menemukan elemen di dalam <code>&lt;iframe&gt;</code>. Harus digunakan karena elemen di dalam iframe tidak bisa diakses langsung.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Akses elemen di dalam iframe</span>\n<span class=\"kw\">const</span> frame = page.<span class=\"fn\">frameLocator</span>(<span class=\"st\">'iframe#payment-form'</span>);\n<span class=\"kw\">await</span> frame.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Card Number'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'4242424242424242'</span>);\n<span class=\"kw\">await</span> frame.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Pay'</span> }).<span class=\"fn\">click</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">locator.filter()</span>\n          <span class=\"keyword-badge\">Filter</span>\n        </div>\n        <div class=\"keyword-desc\">Mempersempit hasil locator berdasarkan teks atau child locator tertentu.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Filter berdasarkan teks</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'.product-card'</span>)\n  .<span class=\"fn\">filter</span>({ hasText: <span class=\"st\">'Laptop Pro'</span> })\n  .<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Beli'</span> })\n  .<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Filter berdasarkan child element</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'tr'</span>)\n  .<span class=\"fn\">filter</span>({ has: page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Active'</span>) })\n  .<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Edit'</span> })\n  .<span class=\"fn\">click</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">locator.first() / .last() / .nth()</span>\n          <span class=\"keyword-badge\">Indexing</span>\n        </div>\n        <div class=\"keyword-desc\">Memilih elemen spesifik dari sekumpulan hasil locator berdasarkan urutan.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Ambil elemen pertama dari daftar</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'.item'</span>).<span class=\"fn\">first</span>().<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Ambil elemen terakhir</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'.item'</span>).<span class=\"fn\">last</span>().<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Ambil elemen ke-3 (index mulai dari 0)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'.item'</span>).<span class=\"fn\">nth</span>(2).<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Hitung jumlah elemen</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"st\">'.item'</span>)).<span class=\"fn\">toHaveCount</span>(5);</div>\n      </div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Prioritas Locator:</strong> <code>getByRole</code> → <code>getByLabel</code> → <code>getByPlaceholder</code> → <code>getByText</code> → <code>getByTestId</code> → <code>locator(css)</code>. Semakin kiri semakin stabil dan direkomendasikan.</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-04",
    "num": "04",
    "title": "Actions — Melakukan Aksi pada Elemen",
    "level": "Pemula",
    "desc": "14 action",
    "body": "\n\n      <h4>📌 Aksi yang Bisa Dilakukan pada Elemen</h4>\n      <p>Setelah menemukan elemen dengan locator, langkah berikutnya adalah melakukan aksi. Playwright otomatis menunggu elemen siap sebelum melakukan aksi (<strong>auto-waiting</strong>).</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">click()</span><span class=\"keyword-badge\">Mouse</span></div>\n        <div class=\"keyword-desc\">Mengklik elemen. Playwright otomatis menunggu elemen terlihat, enabled, dan stabil sebelum mengklik.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Simpan'</span> }).<span class=\"fn\">click</span>();\n\n<span class=\"cm\">// Klik kanan</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByText</span>(<span class=\"st\">'File'</span>).<span class=\"fn\">click</span>({ button: <span class=\"st\">'right'</span> });\n\n<span class=\"cm\">// Klik dengan modifier key (Ctrl+Click)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'link'</span>).<span class=\"fn\">click</span>({ modifiers: [<span class=\"st\">'Control'</span>] });\n\n<span class=\"cm\">// Force click (skip visibility check)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'.hidden-btn'</span>).<span class=\"fn\">click</span>({ force: <span class=\"kw\">true</span> });</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">dblclick()</span><span class=\"keyword-badge\">Mouse</span></div>\n        <div class=\"keyword-desc\">Melakukan double-click pada elemen.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Edit teks ini'</span>).<span class=\"fn\">dblclick</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">fill()</span><span class=\"keyword-badge\">Input</span></div>\n        <div class=\"keyword-desc\">Mengisi input field. <strong>Menghapus isi sebelumnya</strong> lalu mengisi dengan nilai baru. Lebih cepat dari <code>type()</code>.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Nama'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'Budi Santoso'</span>);\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'budi@mail.com'</span>);\n\n<span class=\"cm\">// Kosongkan input</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Nama'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">''</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">type()</span><span class=\"keyword-badge\">Input</span></div>\n        <div class=\"keyword-desc\">Mengetik teks karakter per karakter, mensimulasikan penekanan keyboard nyata. Lebih lambat dari <code>fill()</code> tapi berguna jika ada event handler per keystroke.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Ketik karakter satu per satu (trigger keydown/keyup events)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Search'</span>).<span class=\"fn\">pressSequentially</span>(<span class=\"st\">'playwright'</span>, { delay: 100 });</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">clear()</span><span class=\"keyword-badge\">Input</span></div>\n        <div class=\"keyword-desc\">Menghapus semua isi dari input field.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Nama'</span>).<span class=\"fn\">clear</span>();\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Nama'</span>)).<span class=\"fn\">toBeEmpty</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">press()</span><span class=\"keyword-badge\">Keyboard</span></div>\n        <div class=\"keyword-desc\">Menekan tombol keyboard tertentu. Bisa satu tombol atau kombinasi (shortcut).</div>\n        <div class=\"code-block\"><span class=\"cm\">// Tekan Enter</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Search'</span>).<span class=\"fn\">press</span>(<span class=\"st\">'Enter'</span>);\n\n<span class=\"cm\">// Tekan Escape</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'body'</span>).<span class=\"fn\">press</span>(<span class=\"st\">'Escape'</span>);\n\n<span class=\"cm\">// Shortcut keyboard (Ctrl+A, lalu Ctrl+C)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'textarea'</span>).<span class=\"fn\">press</span>(<span class=\"st\">'Control+a'</span>);\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'textarea'</span>).<span class=\"fn\">press</span>(<span class=\"st\">'Control+c'</span>);\n\n<span class=\"cm\">// Tab untuk pindah field</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>).<span class=\"fn\">press</span>(<span class=\"st\">'Tab'</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">check() / uncheck()</span><span class=\"keyword-badge\">Checkbox</span></div>\n        <div class=\"keyword-desc\">Mencentang atau menghilangkan centang pada checkbox/radio button.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Setuju dengan syarat'</span>).<span class=\"fn\">check</span>();\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Terima newsletter'</span>).<span class=\"fn\">uncheck</span>();\n\n<span class=\"cm\">// Verifikasi status checked</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Setuju dengan syarat'</span>)).<span class=\"fn\">toBeChecked</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">selectOption()</span><span class=\"keyword-badge\">Dropdown</span></div>\n        <div class=\"keyword-desc\">Memilih opsi dari <code>&lt;select&gt;</code> dropdown. Bisa berdasarkan value, label, atau index.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Berdasarkan label (teks yang terlihat)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Kota'</span>).<span class=\"fn\">selectOption</span>(<span class=\"st\">'Jakarta'</span>);\n\n<span class=\"cm\">// Berdasarkan value</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Kota'</span>).<span class=\"fn\">selectOption</span>({ value: <span class=\"st\">'jkt'</span> });\n\n<span class=\"cm\">// Multiple select</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Skill'</span>).<span class=\"fn\">selectOption</span>([<span class=\"st\">'JavaScript'</span>, <span class=\"st\">'Python'</span>]);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">hover()</span><span class=\"keyword-badge\">Mouse</span></div>\n        <div class=\"keyword-desc\">Mengarahkan kursor mouse ke atas elemen (hover). Berguna untuk memunculkan dropdown menu atau tooltip.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Hover untuk memunculkan dropdown menu</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Produk'</span>).<span class=\"fn\">hover</span>();\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Kategori Elektronik'</span>).<span class=\"fn\">click</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">focus() / blur()</span><span class=\"keyword-badge\">Focus</span></div>\n        <div class=\"keyword-desc\">Memberikan atau menghilangkan fokus pada elemen. Berguna untuk memicu validasi form yang terjadi saat elemen kehilangan fokus.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>).<span class=\"fn\">focus</span>();\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>).<span class=\"fn\">blur</span>();\n<span class=\"cm\">// Setelah blur, validasi error mungkin muncul</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Email tidak valid'</span>)).<span class=\"fn\">toBeVisible</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">setInputFiles()</span><span class=\"keyword-badge\">Upload</span></div>\n        <div class=\"keyword-desc\">Meng-upload file ke input bertipe <code>file</code>.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Upload satu file</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Upload Avatar'</span>).<span class=\"fn\">setInputFiles</span>(<span class=\"st\">'./avatar.png'</span>);\n\n<span class=\"cm\">// Upload multiple files</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Lampiran'</span>).<span class=\"fn\">setInputFiles</span>([<span class=\"st\">'./doc1.pdf'</span>, <span class=\"st\">'./doc2.pdf'</span>]);\n\n<span class=\"cm\">// Hapus file yang di-upload</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Upload Avatar'</span>).<span class=\"fn\">setInputFiles</span>([]);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">dragTo()</span><span class=\"keyword-badge\">Mouse</span></div>\n        <div class=\"keyword-desc\">Melakukan drag & drop dari satu elemen ke elemen tujuan.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'#item-a'</span>).<span class=\"fn\">dragTo</span>(page.<span class=\"fn\">locator</span>(<span class=\"st\">'#drop-zone'</span>));</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">screenshot()</span><span class=\"keyword-badge\">Utility</span></div>\n        <div class=\"keyword-desc\">Mengambil screenshot halaman atau elemen spesifik.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Screenshot seluruh halaman</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">screenshot</span>({ path: <span class=\"st\">'halaman.png'</span> });\n\n<span class=\"cm\">// Screenshot full page (termasuk area scroll)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">screenshot</span>({ path: <span class=\"st\">'full.png'</span>, fullPage: <span class=\"kw\">true</span> });\n\n<span class=\"cm\">// Screenshot elemen tertentu</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'.hero'</span>).<span class=\"fn\">screenshot</span>({ path: <span class=\"st\">'hero.png'</span> });</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">scrollIntoViewIfNeeded()</span><span class=\"keyword-badge\">Scroll</span></div>\n        <div class=\"keyword-desc\">Scroll halaman agar elemen terlihat di viewport.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">locator</span>(<span class=\"st\">'#footer'</span>).<span class=\"fn\">scrollIntoViewIfNeeded</span>();</div>\n      </div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Auto-waiting:</strong> Playwright secara otomatis menunggu elemen visible, enabled, dan stabil sebelum melakukan aksi. Tidak perlu <code>sleep()</code> atau <code>waitFor()</code> manual!</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-05",
    "num": "05",
    "title": "Assertions — Memverifikasi Hasil",
    "level": "Pemula",
    "desc": "16 assertion",
    "body": "\n\n      <h4>📌 Apa itu Assertion?</h4>\n      <p>Assertion adalah cara memverifikasi bahwa kondisi yang diharapkan benar-benar terjadi. Jika assertion gagal, test akan ditandai sebagai <strong>FAILED</strong>. Playwright menggunakan <code>expect()</code> dengan <strong>auto-retry</strong> — ia akan menunggu kondisi terpenuhi sebelum timeout.</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toBeVisible()</span><span class=\"keyword-badge\">Visibility</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen terlihat di halaman (rendered dan tidak tersembunyi).</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Selamat datang'</span>)).<span class=\"fn\">toBeVisible</span>();\n\n<span class=\"cm\">// Negasi — pastikan TIDAK terlihat</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Loading...'</span>)).not.<span class=\"fn\">toBeVisible</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toBeHidden()</span><span class=\"keyword-badge\">Visibility</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen tersembunyi atau tidak ada di DOM.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByTestId</span>(<span class=\"st\">'modal'</span>)).<span class=\"fn\">toBeHidden</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toBeEnabled()</span><span class=\"keyword-badge\">State</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen dalam kondisi aktif (bisa diklik/diisi). Kebalikan dari disabled.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Submit'</span> })).<span class=\"fn\">toBeEnabled</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toBeDisabled()</span><span class=\"keyword-badge\">State</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen dalam kondisi non-aktif (disabled).</div>\n        <div class=\"code-block\"><span class=\"cm\">// Tombol disabled sebelum form diisi</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Kirim'</span> })).<span class=\"fn\">toBeDisabled</span>();\n\n<span class=\"cm\">// Isi form, lalu pastikan tombol jadi enabled</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Nama'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'Budi'</span>);\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Kirim'</span> })).<span class=\"fn\">toBeEnabled</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toBeChecked()</span><span class=\"keyword-badge\">Checkbox</span></div>\n        <div class=\"keyword-desc\">Memverifikasi checkbox atau radio button dalam kondisi tercentang.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Setuju'</span>).<span class=\"fn\">check</span>();\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Setuju'</span>)).<span class=\"fn\">toBeChecked</span>();\n\n<span class=\"cm\">// Pastikan TIDAK tercentang</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Newsletter'</span>)).not.<span class=\"fn\">toBeChecked</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveText()</span><span class=\"keyword-badge\">Teks</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen memiliki teks tertentu (exact match secara default).</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByTestId</span>(<span class=\"st\">'status'</span>)).<span class=\"fn\">toHaveText</span>(<span class=\"st\">'Berhasil'</span>);\n\n<span class=\"cm\">// Menggunakan regex</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByTestId</span>(<span class=\"st\">'price'</span>)).<span class=\"fn\">toHaveText</span>(<span class=\"st\">/Rp \\d+/</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toContainText()</span><span class=\"keyword-badge\">Teks</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen <strong>mengandung</strong> teks tertentu (tidak harus exact match, cukup substring).</div>\n        <div class=\"code-block\"><span class=\"cm\">// Elemen berisi \"Halo Budi, selamat datang!\"</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"st\">'.greeting'</span>)).<span class=\"fn\">toContainText</span>(<span class=\"st\">'Budi'</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveValue()</span><span class=\"keyword-badge\">Input</span></div>\n        <div class=\"keyword-desc\">Memverifikasi nilai (value) dari input field.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>).<span class=\"fn\">fill</span>(<span class=\"st\">'user@test.com'</span>);\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>)).<span class=\"fn\">toHaveValue</span>(<span class=\"st\">'user@test.com'</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveAttribute()</span><span class=\"keyword-badge\">Atribut</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen memiliki atribut HTML tertentu dengan nilai tertentu.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'link'</span>, { name: <span class=\"st\">'Docs'</span> }))\n  .<span class=\"fn\">toHaveAttribute</span>(<span class=\"st\">'href'</span>, <span class=\"st\">'https://playwright.dev'</span>);\n\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'img'</span>))\n  .<span class=\"fn\">toHaveAttribute</span>(<span class=\"st\">'src'</span>, <span class=\"st\">/logo\\.png/</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveURL()</span><span class=\"keyword-badge\">Page</span></div>\n        <div class=\"keyword-desc\">Memverifikasi URL halaman saat ini.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'link'</span>, { name: <span class=\"st\">'Dashboard'</span> }).<span class=\"fn\">click</span>();\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).<span class=\"fn\">toHaveURL</span>(<span class=\"st\">'/dashboard'</span>);\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).<span class=\"fn\">toHaveURL</span>(<span class=\"st\">/.*dashboard.*/</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveTitle()</span><span class=\"keyword-badge\">Page</span></div>\n        <div class=\"keyword-desc\">Memverifikasi judul (title) halaman.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).<span class=\"fn\">toHaveTitle</span>(<span class=\"st\">'Dashboard - MyApp'</span>);\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).<span class=\"fn\">toHaveTitle</span>(<span class=\"st\">/Dashboard/</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveCount()</span><span class=\"keyword-badge\">Count</span></div>\n        <div class=\"keyword-desc\">Memverifikasi jumlah elemen yang cocok dengan locator.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Pastikan ada 5 item di list</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"st\">'.product-card'</span>)).<span class=\"fn\">toHaveCount</span>(5);\n\n<span class=\"cm\">// Pastikan tidak ada error message</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"st\">'.error'</span>)).<span class=\"fn\">toHaveCount</span>(0);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveClass()</span><span class=\"keyword-badge\">CSS</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen memiliki class CSS tertentu.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"st\">'.alert'</span>)).<span class=\"fn\">toHaveClass</span>(<span class=\"st\">/alert-success/</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toBeEmpty()</span><span class=\"keyword-badge\">State</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen input kosong (tidak ada value).</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Nama'</span>).<span class=\"fn\">clear</span>();\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Nama'</span>)).<span class=\"fn\">toBeEmpty</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toBeFocused()</span><span class=\"keyword-badge\">Focus</span></div>\n        <div class=\"keyword-desc\">Memverifikasi elemen sedang dalam kondisi fokus (active element).</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>).<span class=\"fn\">click</span>();\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>)).<span class=\"fn\">toBeFocused</span>();</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">toHaveScreenshot()</span><span class=\"keyword-badge\">Visual</span></div>\n        <div class=\"keyword-desc\">Perbandingan visual — mengambil screenshot dan membandingkannya dengan screenshot referensi. Berguna untuk visual regression testing.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Pertama kali dijalankan → membuat referensi</span>\n<span class=\"cm\">// Selanjutnya → membandingkan dengan referensi</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).<span class=\"fn\">toHaveScreenshot</span>(<span class=\"st\">'homepage.png'</span>);\n\n<span class=\"cm\">// Screenshot elemen spesifik</span>\n<span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"st\">'.navbar'</span>)).<span class=\"fn\">toHaveScreenshot</span>(<span class=\"st\">'navbar.png'</span>);</div>\n      </div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Auto-retry:</strong> Semua assertion Playwright otomatis me-retry hingga timeout (default 5 detik). Jadi <code>toBeVisible()</code> akan menunggu elemen muncul, bukan langsung gagal. Gunakan <code>.not</code> untuk negasi: <code>expect(locator).not.toBeVisible()</code>.</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-06",
    "num": "06",
    "title": "Navigation & Page Methods",
    "level": "Menengah",
    "desc": "8 method",
    "body": "\n\n      <h4>📌 Navigasi & Kontrol Halaman</h4>\n      <p>Method-method untuk berpindah halaman, menunggu kondisi, dan mengontrol dialog browser.</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.goto()</span><span class=\"keyword-badge\">Navigasi</span></div>\n        <div class=\"keyword-desc\">Membuka URL tertentu. Menunggu halaman selesai loading sebelum lanjut.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'https://example.com'</span>);\n\n<span class=\"cm\">// Dengan opsi — tunggu sampai network idle</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/login'</span>, { waitUntil: <span class=\"st\">'networkidle'</span> });\n\n<span class=\"cm\">// Tunggu sampai DOM content loaded</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/dashboard'</span>, { waitUntil: <span class=\"st\">'domcontentloaded'</span> });</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.goBack() / page.goForward()</span><span class=\"keyword-badge\">Navigasi</span></div>\n        <div class=\"keyword-desc\">Navigasi mundur (back) atau maju (forward) di history browser.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/page-1'</span>);\n<span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/page-2'</span>);\n\n<span class=\"kw\">await</span> page.<span class=\"fn\">goBack</span>();     <span class=\"cm\">// Kembali ke /page-1</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">goForward</span>();  <span class=\"cm\">// Maju ke /page-2</span></div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.reload()</span><span class=\"keyword-badge\">Navigasi</span></div>\n        <div class=\"keyword-desc\">Me-refresh/reload halaman saat ini.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">reload</span>();\n<span class=\"kw\">await</span> page.<span class=\"fn\">reload</span>({ waitUntil: <span class=\"st\">'networkidle'</span> });</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.waitForURL()</span><span class=\"keyword-badge\">Wait</span></div>\n        <div class=\"keyword-desc\">Menunggu sampai URL halaman berubah ke URL tertentu.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Login'</span> }).<span class=\"fn\">click</span>();\n<span class=\"kw\">await</span> page.<span class=\"fn\">waitForURL</span>(<span class=\"st\">'**/dashboard'</span>);\n<span class=\"cm\">// Sekarang pasti sudah di halaman dashboard</span></div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.waitForSelector()</span><span class=\"keyword-badge\">Wait</span></div>\n        <div class=\"keyword-desc\">Menunggu sampai elemen tertentu muncul/hilang di DOM.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Tunggu elemen muncul</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">waitForSelector</span>(<span class=\"st\">'.loading-spinner'</span>, { state: <span class=\"st\">'hidden'</span> });\n\n<span class=\"cm\">// Tunggu elemen ada di DOM</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">waitForSelector</span>(<span class=\"st\">'#result'</span>, { state: <span class=\"st\">'attached'</span> });</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.waitForLoadState()</span><span class=\"keyword-badge\">Wait</span></div>\n        <div class=\"keyword-desc\">Menunggu halaman mencapai state loading tertentu.</div>\n        <div class=\"code-block\"><span class=\"kw\">await</span> page.<span class=\"fn\">waitForLoadState</span>(<span class=\"st\">'networkidle'</span>);\n<span class=\"kw\">await</span> page.<span class=\"fn\">waitForLoadState</span>(<span class=\"st\">'domcontentloaded'</span>);</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.waitForTimeout()</span><span class=\"keyword-badge\">Wait</span></div>\n        <div class=\"keyword-desc\">Menunggu selama durasi tertentu (dalam milidetik). <strong>HINDARI penggunaan ini</strong> — gunakan assertion auto-retry atau waitFor sebagai gantinya.</div>\n        <div class=\"code-block\"><span class=\"cm\">// ⚠️ Gunakan hanya untuk debugging, JANGAN di production test</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">waitForTimeout</span>(2000); <span class=\"cm\">// Tunggu 2 detik</span></div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.on('dialog')</span><span class=\"keyword-badge\">Event</span></div>\n        <div class=\"keyword-desc\">Menangani dialog bawaan browser: alert, confirm, dan prompt.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Pasang handler SEBELUM aksi yang memicu dialog</span>\npage.<span class=\"fn\">on</span>(<span class=\"st\">'dialog'</span>, <span class=\"kw\">async</span> dialog => {\n  console.log(dialog.<span class=\"fn\">type</span>());     <span class=\"cm\">// 'alert', 'confirm', 'prompt'</span>\n  console.log(dialog.<span class=\"fn\">message</span>());  <span class=\"cm\">// Teks dialog</span>\n  <span class=\"kw\">await</span> dialog.<span class=\"fn\">accept</span>();          <span class=\"cm\">// Klik OK</span>\n  <span class=\"cm\">// atau dialog.dismiss()        // Klik Cancel</span>\n  <span class=\"cm\">// atau dialog.accept('input')  // Isi prompt lalu OK</span>\n});\n\n<span class=\"cm\">// Aksi yang memicu dialog</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Hapus'</span> }).<span class=\"fn\">click</span>();</div>\n      </div>\n\n      <div class=\"tip-box warning\">\n        <div class=\"tip-box-icon\">⚠️</div>\n        <div><strong>Hindari</strong> <code>waitForTimeout()</code> di test production. Ini membuat test lambat dan flaky. Sebagai gantinya, gunakan assertion yang auto-retry atau <code>waitForSelector()</code>.</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-07",
    "num": "07",
    "title": "Page Object Model (POM)",
    "level": "Menengah",
    "desc": "4 sub-topik",
    "body": "\n\n      <h4>📌 Apa itu Page Object Model?</h4>\n      <p>POM adalah design pattern yang memisahkan <strong>locator & aksi halaman</strong> dari <strong>logika test</strong>. Setiap halaman web direpresentasikan sebagai sebuah class. Jika UI berubah, cukup update satu file saja.</p>\n\n      <h4>📌 Membuat Page Object</h4>\n      <div class=\"code-block\"><span class=\"cm\">// ===== pages/LoginPage.js =====</span>\n<span class=\"kw\">class</span> <span class=\"vr\">LoginPage</span> {\n  <span class=\"fn\">constructor</span>(page) {\n    <span class=\"kw\">this</span>.page = page;\n    <span class=\"kw\">this</span>.emailInput = page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Email'</span>);\n    <span class=\"kw\">this</span>.passwordInput = page.<span class=\"fn\">getByLabel</span>(<span class=\"st\">'Password'</span>);\n    <span class=\"kw\">this</span>.loginBtn = page.<span class=\"fn\">getByRole</span>(<span class=\"st\">'button'</span>, { name: <span class=\"st\">'Login'</span> });\n    <span class=\"kw\">this</span>.errorMsg = page.<span class=\"fn\">getByTestId</span>(<span class=\"st\">'error-message'</span>);\n  }\n\n  <span class=\"kw\">async</span> <span class=\"fn\">goto</span>() {\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.page.<span class=\"fn\">goto</span>(<span class=\"st\">'/login'</span>);\n  }\n\n  <span class=\"kw\">async</span> <span class=\"fn\">login</span>(email, password) {\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.emailInput.<span class=\"fn\">fill</span>(email);\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.passwordInput.<span class=\"fn\">fill</span>(password);\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.loginBtn.<span class=\"fn\">click</span>();\n  }\n}\nmodule.exports = { <span class=\"vr\">LoginPage</span> };</div>\n\n      <h4>📌 Menggunakan POM di Test</h4>\n      <div class=\"code-block\"><span class=\"kw\">const</span> { <span class=\"vr\">LoginPage</span> } = require(<span class=\"st\">'../pages/LoginPage'</span>);\n\ntest(<span class=\"st\">'login berhasil'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"kw\">const</span> loginPage = <span class=\"kw\">new</span> <span class=\"vr\">LoginPage</span>(page);\n  <span class=\"kw\">await</span> loginPage.<span class=\"fn\">goto</span>();\n  <span class=\"kw\">await</span> loginPage.<span class=\"fn\">login</span>(<span class=\"st\">'user@test.com'</span>, <span class=\"st\">'secret'</span>);\n  <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).<span class=\"fn\">toHaveURL</span>(<span class=\"st\">'/dashboard'</span>);\n});\n\ntest(<span class=\"st\">'error muncul jika password salah'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"kw\">const</span> loginPage = <span class=\"kw\">new</span> <span class=\"vr\">LoginPage</span>(page);\n  <span class=\"kw\">await</span> loginPage.<span class=\"fn\">goto</span>();\n  <span class=\"kw\">await</span> loginPage.<span class=\"fn\">login</span>(<span class=\"st\">'user@test.com'</span>, <span class=\"st\">'wrong'</span>);\n  <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(loginPage.errorMsg).<span class=\"fn\">toBeVisible</span>();\n});</div>\n\n      <h4>📌 Test Data Management</h4>\n      <div class=\"code-block\"><span class=\"cm\">// ===== data/users.json =====</span>\n{\n  <span class=\"st\">\"validUser\"</span>: { <span class=\"st\">\"email\"</span>: <span class=\"st\">\"admin@co.com\"</span>, <span class=\"st\">\"password\"</span>: <span class=\"st\">\"P@ss123\"</span> },\n  <span class=\"st\">\"invalidUser\"</span>: { <span class=\"st\">\"email\"</span>: <span class=\"st\">\"wrong@co.com\"</span>, <span class=\"st\">\"password\"</span>: <span class=\"st\">\"nope\"</span> }\n}\n\n<span class=\"cm\">// ===== Di dalam test =====</span>\n<span class=\"kw\">const</span> users = require(<span class=\"st\">'../data/users.json'</span>);\n\ntest(<span class=\"st\">'login dengan data dari JSON'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"kw\">const</span> loginPage = <span class=\"kw\">new</span> <span class=\"vr\">LoginPage</span>(page);\n  <span class=\"kw\">await</span> loginPage.<span class=\"fn\">goto</span>();\n  <span class=\"kw\">await</span> loginPage.<span class=\"fn\">login</span>(users.validUser.email, users.validUser.password);\n});</div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Struktur folder POM:</strong> <code>📁 pages/</code> (Page Objects) · <code>📁 tests/</code> (Spec files) · <code>📁 data/</code> (Test data JSON) · <code>📁 utils/</code> (Helpers)</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-08",
    "num": "08",
    "title": "API & Network Testing",
    "level": "Mahir",
    "desc": "5 sub-topik",
    "body": "\n\n      <h4>📌 API Testing — GET Request</h4>\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">request.get()</span><span class=\"keyword-badge\">HTTP</span></div>\n        <div class=\"keyword-desc\">Mengirim HTTP GET request untuk mengambil data dari API.</div>\n        <div class=\"code-block\">test(<span class=\"st\">'GET — ambil daftar user'</span>, <span class=\"kw\">async</span> ({ request }) => {\n  <span class=\"kw\">const</span> res = <span class=\"kw\">await</span> request.<span class=\"fn\">get</span>(<span class=\"st\">'https://reqres.in/api/users?page=1'</span>);\n\n  <span class=\"fn\">expect</span>(res.<span class=\"fn\">status</span>()).<span class=\"fn\">toBe</span>(200);\n  <span class=\"fn\">expect</span>(res.<span class=\"fn\">ok</span>()).<span class=\"fn\">toBeTruthy</span>();\n\n  <span class=\"kw\">const</span> body = <span class=\"kw\">await</span> res.<span class=\"fn\">json</span>();\n  <span class=\"fn\">expect</span>(body.data.length).<span class=\"fn\">toBeGreaterThan</span>(0);\n  <span class=\"fn\">expect</span>(body.data[0]).<span class=\"fn\">toHaveProperty</span>(<span class=\"st\">'email'</span>);\n});</div>\n      </div>\n\n      <h4>📌 API Testing — POST Request</h4>\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">request.post()</span><span class=\"keyword-badge\">HTTP</span></div>\n        <div class=\"keyword-desc\">Mengirim HTTP POST request untuk membuat data baru.</div>\n        <div class=\"code-block\">test(<span class=\"st\">'POST — buat user baru'</span>, <span class=\"kw\">async</span> ({ request }) => {\n  <span class=\"kw\">const</span> res = <span class=\"kw\">await</span> request.<span class=\"fn\">post</span>(<span class=\"st\">'https://reqres.in/api/users'</span>, {\n    data: { name: <span class=\"st\">'Budi'</span>, job: <span class=\"st\">'QA Engineer'</span> }\n  });\n  <span class=\"fn\">expect</span>(res.<span class=\"fn\">status</span>()).<span class=\"fn\">toBe</span>(201);\n  <span class=\"kw\">const</span> body = <span class=\"kw\">await</span> res.<span class=\"fn\">json</span>();\n  <span class=\"fn\">expect</span>(body.name).<span class=\"fn\">toBe</span>(<span class=\"st\">'Budi'</span>);\n});</div>\n      </div>\n\n      <h4>📌 PUT & DELETE Request</h4>\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">request.put() / request.delete()</span><span class=\"keyword-badge\">HTTP</span></div>\n        <div class=\"keyword-desc\">Update dan hapus data via API.</div>\n        <div class=\"code-block\"><span class=\"cm\">// PUT — Update data</span>\ntest(<span class=\"st\">'PUT — update user'</span>, <span class=\"kw\">async</span> ({ request }) => {\n  <span class=\"kw\">const</span> res = <span class=\"kw\">await</span> request.<span class=\"fn\">put</span>(<span class=\"st\">'https://reqres.in/api/users/2'</span>, {\n    data: { name: <span class=\"st\">'Budi Updated'</span>, job: <span class=\"st\">'Lead QA'</span> }\n  });\n  <span class=\"fn\">expect</span>(res.<span class=\"fn\">status</span>()).<span class=\"fn\">toBe</span>(200);\n});\n\n<span class=\"cm\">// DELETE — Hapus data</span>\ntest(<span class=\"st\">'DELETE — hapus user'</span>, <span class=\"kw\">async</span> ({ request }) => {\n  <span class=\"kw\">const</span> res = <span class=\"kw\">await</span> request.<span class=\"fn\">delete</span>(<span class=\"st\">'https://reqres.in/api/users/2'</span>);\n  <span class=\"fn\">expect</span>(res.<span class=\"fn\">status</span>()).<span class=\"fn\">toBe</span>(204);\n});</div>\n      </div>\n\n      <h4>📌 Hybrid API + UI Testing</h4>\n      <div class=\"code-block\">test(<span class=\"st\">'buat via API, verifikasi di UI'</span>, <span class=\"kw\">async</span> ({ page, request }) => {\n  <span class=\"cm\">// Step 1: Buat produk via API</span>\n  <span class=\"kw\">await</span> request.<span class=\"fn\">post</span>(<span class=\"st\">'/api/products'</span>, {\n    data: { name: <span class=\"st\">'Laptop'</span>, price: 15000000 }\n  });\n  <span class=\"cm\">// Step 2: Buka halaman dan verifikasi di UI</span>\n  <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"st\">'/products'</span>);\n  <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page.<span class=\"fn\">getByText</span>(<span class=\"st\">'Laptop'</span>)).<span class=\"fn\">toBeVisible</span>();\n});</div>\n\n      <h4>📌 Network Mocking & Interception</h4>\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">page.route()</span><span class=\"keyword-badge\">Network</span></div>\n        <div class=\"keyword-desc\">Mencegat request jaringan dan memodifikasi response-nya. Berguna untuk mock API tanpa mengubah backend.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Mock API response</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">route</span>(<span class=\"st\">'**/api/products'</span>, <span class=\"kw\">async</span> route => {\n  <span class=\"kw\">await</span> route.<span class=\"fn\">fulfill</span>({\n    status: 200,\n    contentType: <span class=\"st\">'application/json'</span>,\n    body: JSON.<span class=\"fn\">stringify</span>([{ id: 1, name: <span class=\"st\">'Mock Product'</span> }])\n  });\n});\n\n<span class=\"cm\">// Simulasi server error</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">route</span>(<span class=\"st\">'**/api/checkout'</span>, route =>\n  route.<span class=\"fn\">fulfill</span>({ status: 500 })\n);\n\n<span class=\"cm\">// Abort request (simulasi network error)</span>\n<span class=\"kw\">await</span> page.<span class=\"fn\">route</span>(<span class=\"st\">'**/*.png'</span>, route => route.<span class=\"fn\">abort</span>());</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-09",
    "num": "09",
    "title": "CI/CD & Reporting",
    "level": "Mahir",
    "desc": "4 sub-topik",
    "body": "\n\n      <h4>📌 Cross-Browser Configuration</h4>\n      <div class=\"code-block\"><span class=\"cm\">// playwright.config.js</span>\nmodule.exports = {\n  projects: [\n    { name: <span class=\"st\">'chromium'</span>, use: { ...devices[<span class=\"st\">'Desktop Chrome'</span>] } },\n    { name: <span class=\"st\">'firefox'</span>,  use: { ...devices[<span class=\"st\">'Desktop Firefox'</span>] } },\n    { name: <span class=\"st\">'webkit'</span>,   use: { ...devices[<span class=\"st\">'Desktop Safari'</span>] } },\n    { name: <span class=\"st\">'mobile'</span>,   use: { ...devices[<span class=\"st\">'iPhone 13'</span>] } },\n  ],\n};</div>\n      <div class=\"code-block\"><span class=\"cm\"># Jalankan di browser tertentu</span>\nnpx playwright test --project=firefox\n\n<span class=\"cm\"># Jalankan di semua browser</span>\nnpx playwright test</div>\n\n      <h4>📌 Trace Viewer & Debugging</h4>\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\"><span class=\"keyword-name\">trace</span><span class=\"keyword-badge\">Config</span></div>\n        <div class=\"keyword-desc\">Trace Viewer merekam timeline lengkap test: setiap klik, navigasi, DOM snapshot, dan network request. Seperti \"time machine\" untuk debugging.</div>\n        <div class=\"code-block\"><span class=\"cm\">// playwright.config.js</span>\nmodule.exports = {\n  use: {\n    trace: <span class=\"st\">'on-first-retry'</span>,      <span class=\"cm\">// Rekam trace saat retry</span>\n    screenshot: <span class=\"st\">'only-on-failure'</span>, <span class=\"cm\">// Screenshot saat gagal</span>\n    video: <span class=\"st\">'retain-on-failure'</span>,    <span class=\"cm\">// Video saat gagal</span>\n  },\n};</div>\n        <div class=\"code-block\"><span class=\"cm\"># Buka trace viewer</span>\nnpx playwright show-trace trace.zip</div>\n      </div>\n\n      <h4>📌 HTML Reporting</h4>\n      <div class=\"code-block\"><span class=\"cm\">// playwright.config.js</span>\nmodule.exports = {\n  reporter: [\n    [<span class=\"st\">'html'</span>, { open: <span class=\"st\">'on-failure'</span> }],\n    [<span class=\"st\">'list'</span>],\n  ],\n};\n\n<span class=\"cm\"># Buka HTML report setelah test</span>\n<span class=\"cm\"># npx playwright show-report</span></div>\n\n      <h4>📌 GitHub Actions CI/CD</h4>\n      <div class=\"code-block\"><span class=\"cm\"># .github/workflows/playwright.yml</span>\nname: Playwright Tests\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npx playwright install --with-deps\n      - run: npx playwright test\n      - uses: actions/upload-artifact@v4\n        if: ${{ !cancelled() }}\n        with:\n          name: playwright-report\n          path: playwright-report/\n          retention-days: 30</div>\n\n      <div class=\"tip-box warning\">\n        <div class=\"tip-box-icon\">⚠️</div>\n        <div>Di CI, selalu gunakan <code>npx playwright install --with-deps</code> untuk install browser + dependency OS. Tanpa <code>--with-deps</code>, browser mungkin gagal di Linux.</div>\n      </div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Authentication di CI:</strong> Gunakan <code>storageState</code> untuk menyimpan session login. Buat file <code>global-setup.js</code> yang login sekali, simpan cookies ke <code>auth.json</code>, lalu semua test menggunakan state tersebut.</div>\n      </div>\n\n    "
   },
   {
    "id": "pw-10",
    "num": "10",
    "title": "Integrasi Jenkins CI/CD",
    "level": "Mahir",
    "desc": "6 sub-topik",
    "body": "\n\n      <h4>📌 Arsitektur Jenkins + Playwright</h4>\n      <p>Jenkins adalah automation server open-source yang paling populer untuk CI/CD. Dalam pipeline Playwright, Jenkins berperan sebagai <strong>orchestrator</strong> — menjalankan test secara otomatis setiap kali ada commit baru ke repository.</p>\n      <ul>\n        <li><strong>Jenkins Master (Controller)</strong> — Mengelola pipeline, menjadwalkan job, dan mendistribusikan task ke agent</li>\n        <li><strong>Jenkins Agent (Node)</strong> — Mesin yang benar-benar menjalankan test (bisa Linux, Windows, Docker container)</li>\n        <li><strong>Jenkinsfile</strong> — File konfigurasi pipeline yang disimpan di dalam repository (Pipeline as Code)</li>\n        <li><strong>Alur kerja</strong> — Developer push code → GitHub webhook trigger Jenkins → Jenkins clone repo → Install deps → Run Playwright test → Publish report</li>\n      </ul>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Playwright vs Jenkins:</strong> Jenkins mengatur <em>kapan</em> test berjalan (trigger, schedule). Playwright mengurus <em>bagaimana</em> test berjalan. Keduanya bekerja bersama via Jenkinsfile.</div>\n      </div>\n\n      <h4>📌 Instalasi Playwright di Jenkins Agent</h4>\n      <p>Jenkins agent (node) yang menjalankan test Playwright perlu memiliki Node.js dan dependency browser. Ada dua pendekatan utama:</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">Pendekatan 1: Node.js Langsung di Agent</span>\n          <span class=\"keyword-badge\">Bare Metal</span>\n        </div>\n        <div class=\"keyword-desc\">Install Node.js dan Playwright browser di mesin Jenkins agent. Cocok untuk dedicated agent atau on-premise Jenkins.</div>\n        <div class=\"code-block\"><span class=\"cm\"># Di Jenkins Agent (Ubuntu/Debian)</span>\n\n<span class=\"cm\"># 1. Install Node.js via nvm</span>\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nnvm install 20\nnvm use 20\n\n<span class=\"cm\"># 2. Install project dependencies</span>\nnpm ci\n\n<span class=\"cm\"># 3. Install Playwright browsers + OS dependencies</span>\nnpx playwright install --with-deps\n\n<span class=\"cm\"># 4. Jalankan test</span>\nnpx playwright test</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">Pendekatan 2: Docker Container sebagai Agent</span>\n          <span class=\"keyword-badge\">Docker</span>\n        </div>\n        <div class=\"keyword-desc\">Gunakan Docker image resmi Playwright sebagai agent. Ini memastikan environment konsisten di mana pun Jenkins berjalan — tidak ada \"works on my machine\".</div>\n        <div class=\"code-block\"><span class=\"cm\"># Gunakan official Playwright Docker image</span>\n<span class=\"cm\"># Image ini sudah include Node.js + semua browser + dependencies</span>\n\ndocker pull mcr.microsoft.com/playwright:v1.44.0-jammy\n\n<span class=\"cm\"># Run test di dalam container</span>\ndocker run --rm \\\n  -v $(pwd):/work \\\n  -w /work \\\n  mcr.microsoft.com/playwright:v1.44.0-jammy \\\n  npx playwright test</div>\n      </div>\n\n      <h4>📌 Menulis Jenkinsfile (Declarative Pipeline)</h4>\n      <p>Jenkinsfile adalah file yang mendefinisikan pipeline CI/CD menggunakan <strong>Declarative Pipeline syntax</strong>. File ini disimpan di root repository (bersama <code>package.json</code>) sehingga konfigurasi pipeline ikut di-version control.</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">Jenkinsfile — Pipeline Dasar</span>\n          <span class=\"keyword-badge\">Pipeline as Code</span>\n        </div>\n        <div class=\"keyword-desc\">Struktur dasar Jenkinsfile declarative: pipeline → agent → stages → stage → steps. Setiap stage mewakili satu fase dalam CI/CD.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Jenkinsfile (simpan di root project)</span>\n\npipeline {\n  agent any  <span class=\"cm\">// Jalankan di agent mana saja yang tersedia</span>\n\n  <span class=\"cm\">// Tools yang dibutuhkan (konfigurasi di Jenkins Global Tools)</span>\n  tools {\n    nodejs <span class=\"st\">'NodeJS-20'</span>  <span class=\"cm\">// Nama tool yang dikonfigurasi di Jenkins</span>\n  }\n\n  <span class=\"cm\">// Environment variables global</span>\n  environment {\n    CI = <span class=\"st\">'true'</span>\n    PLAYWRIGHT_BROWSERS_PATH = <span class=\"st\">'0'</span>  <span class=\"cm\">// Gunakan browser yang sudah ada</span>\n  }\n\n  stages {\n    stage(<span class=\"st\">'Checkout'</span>) {\n      steps {\n        checkout scm  <span class=\"cm\">// Clone repository dari SCM (Git)</span>\n      }\n    }\n\n    stage(<span class=\"st\">'Install Dependencies'</span>) {\n      steps {\n        sh <span class=\"st\">'npm ci'</span>  <span class=\"cm\">// Install dari package-lock.json (deterministik)</span>\n      }\n    }\n\n    stage(<span class=\"st\">'Install Playwright Browsers'</span>) {\n      steps {\n        sh <span class=\"st\">'npx playwright install --with-deps'</span>\n      }\n    }\n\n    stage(<span class=\"st\">'Run Playwright Tests'</span>) {\n      steps {\n        sh <span class=\"st\">'npx playwright test'</span>\n      }\n    }\n  }\n\n  post {\n    always {\n      <span class=\"cm\">// Publish HTML report selalu, bahkan jika test gagal</span>\n      publishHTML(target: [\n        allowMissing: <span class=\"kw\">false</span>,\n        alwaysLinkToLastBuild: <span class=\"kw\">true</span>,\n        keepAll: <span class=\"kw\">true</span>,\n        reportDir: <span class=\"st\">'playwright-report'</span>,\n        reportFiles: <span class=\"st\">'index.html'</span>,\n        reportName: <span class=\"st\">'Playwright HTML Report'</span>\n      ])\n    }\n    success {\n      echo <span class=\"st\">'✅ Semua test PASSED!'</span>\n    }\n    failure {\n      echo <span class=\"st\">'❌ Ada test yang FAILED. Cek report!'</span>\n      <span class=\"cm\">// Bisa tambahkan: emailext, Slack notification, dll</span>\n    }\n  }\n}</div>\n      </div>\n\n      <h4>📌 Parallel Execution di Jenkins</h4>\n      <p>Untuk mempercepat eksekusi, jalankan test secara paralel di beberapa browser sekaligus menggunakan <code>parallel</code> block di Jenkinsfile. Jenkins akan mendistribusikan ke beberapa agent secara bersamaan.</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">parallel { } — Multi-browser Testing</span>\n          <span class=\"keyword-badge\">Performance</span>\n        </div>\n        <div class=\"keyword-desc\">Jalankan test di Chromium, Firefox, dan WebKit secara paralel, bukan berurutan. Ini bisa mempersingkat total waktu eksekusi hingga 3x lipat.</div>\n        <div class=\"code-block\">stage(<span class=\"st\">'Run Tests - All Browsers'</span>) {\n  parallel {\n    stage(<span class=\"st\">'Chromium'</span>) {\n      steps {\n        sh <span class=\"st\">'npx playwright test --project=chromium'</span>\n      }\n      post {\n        always {\n          archiveArtifacts artifacts: <span class=\"st\">'playwright-report/**'</span>, fingerprint: <span class=\"kw\">true</span>\n        }\n      }\n    }\n    stage(<span class=\"st\">'Firefox'</span>) {\n      steps {\n        sh <span class=\"st\">'npx playwright test --project=firefox'</span>\n      }\n    }\n    stage(<span class=\"st\">'WebKit'</span>) {\n      steps {\n        sh <span class=\"st\">'npx playwright test --project=webkit'</span>\n      }\n    }\n  }\n}\n\n<span class=\"cm\">// Atau gunakan sharding — split test ke beberapa shard</span>\nstage(<span class=\"st\">'Shard 1/3'</span>) { steps { sh <span class=\"st\">'npx playwright test --shard=1/3'</span> } }\nstage(<span class=\"st\">'Shard 2/3'</span>) { steps { sh <span class=\"st\">'npx playwright test --shard=2/3'</span> } }\nstage(<span class=\"st\">'Shard 3/3'</span>) { steps { sh <span class=\"st\">'npx playwright test --shard=3/3'</span> } }</div>\n      </div>\n\n      <h4>📌 Mengelola Environment Variables & Secrets di Jenkins</h4>\n      <p>Test otomatis sering membutuhkan credentials (username, password, API key). <strong>JANGAN</strong> hardcode di Jenkinsfile — gunakan Jenkins Credentials Manager.</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">withCredentials { } — Injeksi Secret</span>\n          <span class=\"keyword-badge\">Security</span>\n        </div>\n        <div class=\"keyword-desc\">Jenkins Credentials Manager menyimpan secret terenkripsi. Gunakan withCredentials() untuk menginjeksikan secret sebagai environment variable ke dalam pipeline.</div>\n        <div class=\"code-block\"><span class=\"cm\">// Di Jenkins UI:</span>\n<span class=\"cm\">// Dashboard → Manage Jenkins → Credentials → Add Credentials</span>\n<span class=\"cm\">// Kind: Username with password, ID: staging-credentials</span>\n\n<span class=\"cm\">// Di Jenkinsfile — injeksi secret sebagai env var</span>\nstage(<span class=\"st\">'Run Tests'</span>) {\n  steps {\n    withCredentials([\n      usernamePassword(\n        credentialsId: <span class=\"st\">'staging-credentials'</span>,\n        usernameVariable: <span class=\"st\">'TEST_USERNAME'</span>,\n        passwordVariable: <span class=\"st\">'TEST_PASSWORD'</span>\n      )\n    ]) {\n      <span class=\"cm\">// Secret tersedia sebagai env var: $TEST_USERNAME, $TEST_PASSWORD</span>\n      sh <span class=\"st\">'''</span>\n<span class=\"st\">        BASE_URL=https://staging.myapp.com \\\n        AUTH_USER=$TEST_USERNAME \\\n        AUTH_PASS=$TEST_PASSWORD \\\n        npx playwright test\n      '''</span>\n    }\n  }\n}\n\n<span class=\"cm\">// Di playwright.config.js — baca dari process.env</span>\nmodule.exports = {\n  use: {\n    baseURL: process.env.BASE_URL || <span class=\"st\">'http://localhost:3000'</span>,\n  },\n};</div>\n      </div>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">parameters { } — Pipeline Parameterization</span>\n          <span class=\"keyword-badge\">Flexibility</span>\n        </div>\n        <div class=\"keyword-desc\">Buat pipeline yang fleksibel — user bisa memilih browser, environment, atau test yang dijalankan saat trigger manual.</div>\n        <div class=\"code-block\">pipeline {\n  agent any\n\n  parameters {\n    choice(\n      name: <span class=\"st\">'BROWSER'</span>,\n      choices: [<span class=\"st\">'chromium'</span>, <span class=\"st\">'firefox'</span>, <span class=\"st\">'webkit'</span>, <span class=\"st\">'all'</span>],\n      description: <span class=\"st\">'Pilih browser untuk testing'</span>\n    )\n    choice(\n      name: <span class=\"st\">'ENV'</span>,\n      choices: [<span class=\"st\">'staging'</span>, <span class=\"st\">'production'</span>],\n      description: <span class=\"st\">'Target environment'</span>\n    )\n    booleanParam(\n      name: <span class=\"st\">'RUN_ALL'</span>,\n      defaultValue: <span class=\"kw\">false</span>,\n      description: <span class=\"st\">'Jalankan semua test (termasuk slow tests)'</span>\n    )\n  }\n\n  stages {\n    stage(<span class=\"st\">'Run Tests'</span>) {\n      steps {\n        script {\n          def browser = params.BROWSER == <span class=\"st\">'all'</span> ? <span class=\"st\">''</span> : <span class=\"st\">\"--project=${params.BROWSER}\"</span>\n          sh <span class=\"st\">\"BASE_URL=https://${params.ENV}.app.com npx playwright test ${browser}\"</span>\n        }\n      }\n    }\n  }\n}</div>\n      </div>\n\n      <h4>📌 Blue Ocean & HTML Report di Jenkins</h4>\n      <p>Jenkins memiliki plugin <strong>Blue Ocean</strong> yang menyediakan UI modern untuk visualisasi pipeline, dan plugin <strong>HTML Publisher</strong> untuk menampilkan Playwright HTML report langsung di dashboard Jenkins.</p>\n\n      <div class=\"keyword-card\">\n        <div class=\"keyword-card-header\">\n          <span class=\"keyword-name\">playwright.config.js — Konfigurasi untuk Jenkins</span>\n          <span class=\"keyword-badge\">Config</span>\n        </div>\n        <div class=\"keyword-desc\">Konfigurasi Playwright yang dioptimalkan untuk environment Jenkins CI — menggunakan junit reporter agar Jenkins bisa membaca hasil test, dan merekam trace/screenshot saat gagal.</div>\n        <div class=\"code-block\"><span class=\"cm\">// playwright.config.js — versi untuk Jenkins CI</span>\nconst { defineConfig, devices } = require(<span class=\"st\">'@playwright/test'</span>);\n\nmodule.exports = defineConfig({\n  testDir: <span class=\"st\">'./tests'</span>,\n  fullyParallel: <span class=\"kw\">true</span>,\n  forbidOnly: !!process.env.CI,  <span class=\"cm\">// Fail jika ada test.only di CI</span>\n  retries: process.env.CI ? 2 : 0,  <span class=\"cm\">// Retry 2x di CI, 0 di lokal</span>\n  workers: process.env.CI ? 4 : undefined,\n\n  reporter: [\n    [<span class=\"st\">'html'</span>, { outputFolder: <span class=\"st\">'playwright-report'</span>, open: <span class=\"st\">'never'</span> }],\n    [<span class=\"st\">'junit'</span>, { outputFile: <span class=\"st\">'test-results/junit.xml'</span> }],  <span class=\"cm\">// Untuk Jenkins JUnit plugin</span>\n    [<span class=\"st\">'list'</span>],  <span class=\"cm\">// Console output untuk Jenkins log</span>\n  ],\n\n  use: {\n    baseURL: process.env.BASE_URL || <span class=\"st\">'http://localhost:3000'</span>,\n    trace: <span class=\"st\">'on-first-retry'</span>,\n    screenshot: <span class=\"st\">'only-on-failure'</span>,\n    video: <span class=\"st\">'retain-on-failure'</span>,\n  },\n\n  projects: [\n    { name: <span class=\"st\">'chromium'</span>, use: { ...devices[<span class=\"st\">'Desktop Chrome'</span>] } },\n    { name: <span class=\"st\">'firefox'</span>, use: { ...devices[<span class=\"st\">'Desktop Firefox'</span>] } },\n  ],\n});</div>\n      </div>\n\n      <div class=\"tip-box\">\n        <div class=\"tip-box-icon\">💡</div>\n        <div><strong>Plugin Jenkins yang direkomendasikan:</strong><br>\n          • <strong>NodeJS Plugin</strong> — Manage instalasi Node.js dari Jenkins UI<br>\n          • <strong>HTML Publisher Plugin</strong> — Tampilkan Playwright HTML report di dashboard<br>\n          • <strong>JUnit Plugin</strong> — Visualisasi test results sebagai bar chart<br>\n          • <strong>Blue Ocean</strong> — UI pipeline yang modern dan intuitif<br>\n          • <strong>Git Plugin</strong> — Integrasi dengan GitHub/GitLab/Bitbucket\n        </div>\n      </div>\n\n      <div class=\"tip-box warning\">\n        <div class=\"tip-box-icon\">⚠️</div>\n        <div><strong>CSP Issue di HTML Report:</strong> Jenkins secara default memblokir inline script di HTML report (Content Security Policy). Tambahkan ini di Jenkins Script Console untuk mengizinkan: <code>System.setProperty(\"hudson.model.DirectoryBrowserSupport.CSP\", \"\")</code></div>\n      </div>\n\n    "
   }
  ]
 },
 {
  "id": "mojo",
  "title": "Mojo 🔥",
  "subtitle": "Bahasa AI Modern: Sintaks Python, Performa C++, SIMD & Neural Network",
  "accent": "orange",
  "category": "it",
  "lessons": [
   {
    "id": "mojo-01",
    "num": "01",
    "title": "Pengenalan & Filosofi Mojo",
    "level": "Pemula",
    "desc": "Mengapa dunia AI membutuhkan bahasa baru yang secepat C++ dan semudah Python.",
    "intro": "Mojo diciptakan oleh Chris Lattner (pencipta LLVM, Clang, dan Swift) untuk menyelesaikan dilema terbesar AI: Python sangat ramah developer tapi lambat, sedangkan C++ sangat cepat tapi rumit dan rawan error memori.",
    "body": "\n      <h4>🏎️ Analogi Mobil Balap Supercar</h4>\n      <p>Bayangkan <b>Python</b> adalah mobil keluarga yang sangat nyaman, empuk, dan mudah dikendarai siapa saja — tapi jika dipaksa balapan di sirkuit (komputasi AI beban tinggi), mesinnya cepat panas dan lambat. Di sisi lain, <b>C++</b> adalah mobil balap F1 yang super kencang, tetapi setirnya sangat keras, tidak ada fitur keselamatan otomatis, dan jika salah sedikit bisa langsung celaka (memory crash / segfault).</p>\n      <p><b>Mojo</b> adalah supercar modern: kemudi dan kenyamanan dashboard-nya ramah seperti Python, tetapi mesin pacu di dalamnya berkecepatan mobil balap F1 tanpa kompromi.</p>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-box-icon\">🔥</span>\n        <div><b>Fakta Kunci:</b> Ekstensi file Mojo bisa menggunakan <code class=\"inline\">.mojo</code> atau simbol api <code class=\"inline\">.🔥</code>. Mojo kompatibel penuh dengan Python, namun mampu berjalan hingga <b>35.000x - 68.000x lebih cepat</b> untuk operasi matriks dan AI.</div>\n      </div>\n\n      <h4>📝 Program Pertama: Halo Supriyanto</h4>\n      <p>Di Mojo, Anda bisa memulai fungsi utama dengan kata kunci <code class=\"inline\">fn main()</code>:</p>\n      <div class=\"code-block\"><span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"cm\"># Mencetak teks ke layar</span>\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Halo Supriyanto! Selamat datang di dunia Mojo 🔥\"</span>)\n    \n    <span class=\"kw\">let</span> pesan = <span class=\"st\">\"Mojo menggabungkan kemudahan Python dengan kecepatan C++\"</span>\n    <span class=\"fn\">print</span>(pesan)</div>\n\n      <h4>⚡ Mengapa AI Sangat Membutuhkan Mojo?</h4>\n      <p>Model AI modern (seperti ChatGPT, model penglihatan komputer, dan pengenal suara) melakukan miliaran operasi matematika setiap detik. Python murni tidak sanggup melakukannya langsung di CPU/GPU tanpa bantuan library C++/CUDA di belakang layar. Mojo menyatukan seluruh tumpukan teknologi tersebut menjadi satu bahasa tunggal.</p>\n    ",
    "quiz": {
     "q": "Siapa tokoh di balik penciptaan bahasa pemrograman Mojo?",
     "opts": [
      "Chris Lattner (pencipta LLVM & Swift)",
      "Guido van Rossum",
      "Brendan Eich",
      "James Gosling"
     ],
     "ans": 0,
     "why": "Mojo dirancang oleh Chris Lattner bersama tim Modular untuk menyatukan ekosistem AI dan komputasi performa tinggi."
    }
   },
   {
    "id": "mojo-02",
    "num": "02",
    "title": "Variabel let vs var & Strict Typing",
    "level": "Pemula",
    "desc": "Memahami imutabilitas, efisiensi alokasi memori, dan deklarasi tipe data.",
    "intro": "Mojo memperkenalkan kata kunci let dan var untuk membedakan data yang permanen (konstan) dan data yang boleh diubah. Ini memberi tahu kompiler cara mengalokasikan memori seefisien mungkin.",
    "body": "\n      <h4>🗿 Analogi Ukiran Batu vs Papan Tulis</h4>\n      <p>Di Mojo:</p>\n      <ul>\n        <li><code class=\"inline\">let</code> seperti <b>memahat di atas batu</b>: sekali nilai diukir, nilai tersebut permanen dan tidak bisa diubah lagi (*immutable*). Kompiler sangat menyukai <code class=\"inline\">let</code> karena bisa melakukan optimasi memori secara agresif.</li>\n        <li><code class=\"inline\">var</code> seperti <b>menulis di papan tulis</b>: nilainya fleksibel dan bisa dihapus lalu diganti kapan saja (*mutable*).</li>\n      </ul>\n\n      <h4>📦 Deklarasi Tipe Data Primitif</h4>\n      <div class=\"code-block\"><span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"cm\"># Deklarasi nilai konstan (let)</span>\n    <span class=\"kw\">let</span> nama_pengguna: String = <span class=\"st\">\"Supriyanto\"</span>\n    <span class=\"kw\">let</span> dimensi_tensor: Int = <span class=\"nm\">512</span>\n    \n    <span class=\"cm\"># Deklarasi variabel yang bisa diubah (var)</span>\n    <span class=\"kw\">var</span> skor_akurasi: Float64 = <span class=\"nm\">0.85</span>\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Akurasi awal Supriyanto:\"</span>, skor_akurasi)\n    \n    <span class=\"cm\"># Memperbarui nilai variabel</span>\n    skor_akurasi = <span class=\"nm\">0.96</span>\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Akurasi setelah training:\"</span>, skor_akurasi)</div>\n\n      <div class=\"note\">\n        <b>Mengapa Tipe Data Ketat Penting untuk AI?</b> Saat komputer tahu pasti bahwa suatu data adalah <code class=\"inline\">Float32</code> atau <code class=\"inline\">Int</code>, komputer tidak perlu memeriksa ulang tipe data tersebut saat melakukan miliaran perhitungan matriks di GPU.\n      </div>\n    ",
    "quiz": {
     "q": "Apa perbedaan mendasar antara kata kunci 'let' dan 'var' di Mojo?",
     "opts": [
      "let bersifat konstan (immutable), sedangkan var bisa diubah (mutable)",
      "let hanya untuk angka, sedangkan var hanya untuk teks",
      "let lebih lambat daripada var",
      "let wajib di dalam class, var di luar class"
     ],
     "ans": 0,
     "why": "Di Mojo, 'let' mendeklarasikan nilai konstan yang tidak dapat diubah (immutable), sedangkan 'var' mendeklarasikan variabel yang nilainya bisa diubah (mutable)."
    }
   },
   {
    "id": "mojo-03",
    "num": "03",
    "title": "Fungsi fn vs def — Fleksibel vs Performa Maksimal",
    "level": "Pemula",
    "desc": "Memilih antara fungsi dinamis ala Python atau fungsi terkompilasi super cepat.",
    "intro": "Mojo memberi kebebasan: Anda bisa menulis fungsi santai ala Python dengan def, atau fungsi berkecepatan native dengan fn.",
    "body": "\n      <h4>🧑‍🍳 Analogi Koki Santai vs Pabrik Berstandar ISO</h4>\n      <p>Bayangkan dua cara membuat makanan:</p>\n      <ul>\n        <li><code class=\"inline\">def</code> seperti <b>koki freestyle di dapur rumah</b>: Anda bisa memasukkan bahan apa saja tanpa timbangan ketat (argumen opsional & dinamis). Cepat dibuat untuk eksperimen, tetapi butuh waktu memeriksa bahan saat proses memasak.</li>\n        <li><code class=\"inline\">fn</code> seperti <b>pabrik makanan berstandar presisi tinggi</b>: semua takaran bahan, suhu, dan wadah diperiksa ketat sejak awal sebelum mesin berjalan. Hasilnya: jutaan porsi diproduksi dalam hitungan detik tanpa ada cacat (*type-safe & zero-overhead*).</li>\n      </ul>\n\n      <h4>🛠️ Contoh Kode: def vs fn</h4>\n      <div class=\"code-block\"><span class=\"cm\"># 1. Gaya dinamis (def) — mirip Python murni</span>\n<span class=\"kw\">def</span> <span class=\"fn\">sapa_pengguna</span>(nama):\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Halo, \"</span> + nama)\n\n<span class=\"cm\"># 2. Gaya ketat performa tinggi (fn) — dikompilasi ke kode mesin langsung</span>\n<span class=\"kw\">fn</span> <span class=\"fn\">hitung_bobot_ai</span>(bobot: Float32, input_val: Float32) -&gt; Float32:\n    <span class=\"kw\">let</span> bias: Float32 = <span class=\"nm\">0.05</span>\n    <span class=\"kw\">let</span> hasil = (bobot * input_val) + bias\n    <span class=\"kw\">return</span> hasil\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    sapa_pengguna(<span class=\"st\">\"Supriyanto\"</span>)\n    <span class=\"kw\">let</span> sinyal = hitung_bobot_ai(<span class=\"nm\">0.8</span>, <span class=\"nm\">1.5</span>)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Sinyal neuron AI:\"</span>, sinyal)</div>\n\n      <div class=\"tip\">\n        <b>Rekomendasi Praktik Terbaik:</b> Gunakan <code class=\"inline\">fn</code> untuk semua fungsi yang memproses komputasi matematika, pemrosesan data, dan inferensi model AI. Gunakan <code class=\"inline\">def</code> saat membuat prototype atau berinteraksi dengan library Python.\n      </div>\n    ",
    "quiz": {
     "q": "Kapan sebaiknya kita menggunakan kata kunci 'fn' dibandingkan 'def' di Mojo?",
     "opts": [
      "Ketika menginginkan performa maksimal, keamanan tipe data, dan kompilasi native langsung ke mesin",
      "Hanya saat menulis kode HTML",
      "Hanya ketika mengimpor library JavaScript",
      "Ketika tidak ingin menentukan tipe data sama sekali"
     ],
     "ans": 0,
     "why": "'fn' menerapkan aturan ketat (strict typing & memory safety) sehingga kompiler Mojo dapat menghasilkan kode mesin yang berjalan dengan kecepatan native."
    }
   },
   {
    "id": "mojo-04",
    "num": "04",
    "title": "Struktur Data & struct",
    "level": "Menengah",
    "desc": "Membuat tipe data kustom berkinerja tinggi tanpa beban alokasi dinamis.",
    "intro": "Di Python kita biasa menggunakan class. Di Mojo, struct adalah tulang punggung struktur data berkecepatan tinggi tanpa overhead memori.",
    "body": "\n      <h4>📐 Analogi Cetak Biru Lemari Presisi</h4>\n      <p>Jika <code class=\"inline\">class</code> di Python seperti kardus besar yang dilapisi banyak plastik pembungkus dan label pelacak (banyak memori terbuang untuk *dynamic dispatch*), maka <code class=\"inline\">struct</code> di Mojo adalah <b>laci kayu jati yang dipotong presisi milimeter</b>: setiap slot data tersusun rapat langsung di memori RAM.</p>\n\n      <h4>🏗️ Membuat struct untuk Entitas Data & AI</h4>\n      <div class=\"code-block\"><span class=\"kw\">struct</span> <span class=\"fn\">ProfilPengguna</span>:\n    <span class=\"kw\">var</span> nama: String\n    <span class=\"kw\">var</span> id_klien: Int\n    <span class=\"kw\">var</span> skor_kredit: Float32\n\n    <span class=\"cm\"># Konstruktor penginisialisasi</span>\n    <span class=\"kw\">fn</span> <span class=\"fn\">__init__</span>(<span class=\"kw\">inout</span> self, nama: String, id_klien: Int, skor_kredit: Float32):\n        self.nama = nama\n        self.id_klien = id_klien\n        self.skor_kredit = skor_kredit\n\n    <span class=\"cm\"># Method untuk cek kelayakan AI</span>\n    <span class=\"kw\">fn</span> <span class=\"fn\">apakah_layak_ai</span>(self) -&gt; Bool:\n        <span class=\"kw\">return</span> self.skor_kredit &gt;= <span class=\"nm\">75.0</span>\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"kw\">var</span> user = ProfilPengguna(<span class=\"st\">\"Supriyanto\"</span>, <span class=\"nm\">1029</span>, <span class=\"nm\">88.5</span>)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Nama:\"</span>, user.nama)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Status Verifikasi AI:\"</span>, user.apakah_layak_ai())</div>\n\n      <div class=\"note\">\n        <b>Keunggulan struct di Mojo:</b> Semua field dialokasikan secara *inline* di stack, sehingga CPU cache dapat membaca data berturut-turut tanpa jeda *pointer chasing*.\n      </div>\n    ",
    "quiz": {
     "q": "Mengapa 'struct' di Mojo jauh lebih cepat dibandingkan 'class' dinamis pada bahasa tradisional?",
     "opts": [
      "Karena struct memiliki tata letak memori statis/inline tanpa overhead garbage collection dan dynamic dispatch",
      "Karena struct tidak bisa menyimpan data angka",
      "Karena struct hanya bisa dijalankan di peramban web",
      "Karena struct otomatis menghapus semua file di harddisk"
     ],
     "ans": 0,
     "why": "struct di Mojo menyusun data secara rapat (memory inline) tanpa overhead objek dinamis, membuatnya ideal untuk struktur data AI."
    }
   },
   {
    "id": "mojo-05",
    "num": "05",
    "title": "Manajemen Memori: Ownership & Borrowing",
    "level": "Menengah",
    "desc": "borrowed, inout, dan owned — kontrol hak milik memori tanpa jeda Garbage Collector.",
    "intro": "Mojo menggunakan sistem kepemilikan memori (mirip Rust) yang menjamin keamanan memori tanpa perlu Garbage Collector yang memperlambat pemrosesan AI.",
    "body": "\n      <h4>📖 Analogi Buku Catatan Supriyanto</h4>\n      <p>Bayangkan Supriyanto memiliki sebuah buku catatan penting. Ada 3 cara meminjamkannya ke rekan kerja:</p>\n\n      <div class=\"cards\">\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\">\n            <span class=\"keyword-name\">borrowed (Pinjam Baca)</span>\n            <span class=\"keyword-badge\">DEFAULT</span>\n          </div>\n          <div class=\"keyword-desc\">\n            Rekan hanya boleh membaca buku catatan Supriyanto. Tidak boleh mencoret, menambah, atau merusak isinya.\n          </div>\n        </div>\n\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\">\n            <span class=\"keyword-name\">inout (Pinjam Ubah)</span>\n            <span class=\"keyword-badge\">MUTABLE REF</span>\n          </div>\n          <div class=\"keyword-desc\">\n            Rekan meminjam formulir untuk mengisi nilainya secara langsung, lalu formulir tersebut dikembalikan ke Supriyanto.\n          </div>\n        </div>\n\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\">\n            <span class=\"keyword-name\">owned &amp; ^ (Pindah Hak Milik)</span>\n            <span class=\"keyword-badge\">TRANSFER</span>\n          </div>\n          <div class=\"keyword-desc\">\n            Supriyanto menyerahkan sertifikat secara permanen kepada orang lain menggunakan operator <code class=\"inline\">^</code>. Supriyanto tidak boleh mengaksesnya lagi.\n          </div>\n        </div>\n      </div>\n\n      <h4>🛠️ Contoh Kode: borrowed vs inout</h4>\n      <div class=\"code-block\"><span class=\"cm\"># borrowed: hanya membaca data tanpa menduplikat ke memori baru</span>\n<span class=\"kw\">fn</span> <span class=\"fn\">tampilkan_info</span>(<span class=\"kw\">borrowed</span> nama: String):\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Data pengguna:\"</span>, nama)\n\n<span class=\"cm\"># inout: memodifikasi data asli di tempat (in-place modification)</span>\n<span class=\"kw\">fn</span> <span class=\"fn\">tambah_bonus_skor</span>(<span class=\"kw\">inout</span> skor: Float32, bonus: Float32):\n    skor = skor + bonus\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"kw\">let</span> nama_karyawan: String = <span class=\"st\">\"Supriyanto\"</span>\n    tampilkan_info(nama_karyawan)\n    \n    <span class=\"kw\">var</span> skor_ai: Float32 = <span class=\"nm\">80.0</span>\n    tambah_bonus_skor(skor_ai, <span class=\"nm\">15.0</span>)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Skor final Supriyanto:\"</span>, skor_ai) <span class=\"cm\"># 95.0</span></div>\n    ",
    "quiz": {
     "q": "Jika Anda ingin sebuah fungsi dapat mengubah nilai variabel asli tanpa membuat salinan memori baru, argumen apa yang digunakan di Mojo?",
     "opts": [
      "inout",
      "borrowed",
      "copy_only",
      "static"
     ],
     "ans": 0,
     "why": "'inout' memberikan referensi yang dapat dimodifikasi (mutable reference) ke data asli sehingga perubahan langsung tercermin pada pemanggil."
    }
   },
   {
    "id": "mojo-06",
    "num": "06",
    "title": "Interoperabilitas dengan Python",
    "level": "Menengah",
    "desc": "Memanggil library raksasa Python (NumPy, PyTorch, Pandas, Matplotlib) langsung dari Mojo.",
    "intro": "Anda tidak perlu menulis ulang ekosistem AI dari nol. Mojo memiliki jembatan tanpa hambatan ke Python.",
    "body": "\n      <h4>🌉 Analogi Jembatan Tol Antar-Kota</h4>\n      <p>Bayangkan Anda tinggal di kota modern berkecepatan tinggi (Mojo), tetapi Anda memiliki <b>jembatan tol bebas hambatan</b> menuju pasar terbesar dunia (ekosistem Python). Anda bisa memesan sayur, bumbu, dan alat dapur apa pun dari pasar tersebut (seperti NumPy, Pandas, atau PyTorch) hanya dalam satu panggilan telepon.</p>\n\n      <h4>🐍 Mengimpor Library Python di Dalam Mojo</h4>\n      <div class=\"code-block\"><span class=\"kw\">from</span> <span class=\"st\">python</span> <span class=\"kw\">import</span> Python\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>() <span class=\"kw\">raises</span>:\n    <span class=\"cm\"># Mengimpor modul Python langsung ke Mojo</span>\n    <span class=\"kw\">let</span> np = Python.import_module(<span class=\"st\">\"numpy\"</span>)\n    <span class=\"kw\">let</span> math = Python.import_module(<span class=\"st\">\"math\"</span>)\n    \n    <span class=\"cm\"># Membuat array NumPy dari Mojo</span>\n    <span class=\"kw\">let</span> data_supriyanto = np.array([<span class=\"nm\">10</span>, <span class=\"nm\">25</span>, <span class=\"nm\">40</span>, <span class=\"nm\">85</span>])\n    <span class=\"kw\">let</span> rata_rata = np.mean(data_supriyanto)\n    \n    <span class=\"fn\">print</span>(<span class=\"st\">\"Array NumPy:\"</span>, data_supriyanto)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Rata-rata data Supriyanto:\"</span>, rata_rata)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Akar kuadrat 144 via math Python:\"</span>, math.sqrt(<span class=\"nm\">144</span>))</div>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-box-icon\">💡</span>\n        <div><b>Strategi Juara:</b> Gunakan library Python untuk bagian input/output dan plotting grafik, lalu gunakan Mojo murni untuk algoritma komputasi berat agar kecepatan naik ribuan kali lipat!</div>\n      </div>\n    ",
    "quiz": {
     "q": "Bagaimana cara mengimpor library Python seperti NumPy dari dalam kode Mojo?",
     "opts": [
      "from python import Python, lalu panggil Python.import_module(\"numpy\")",
      "import numpy.js",
      "#include <numpy.h>",
      "require('numpy')"
     ],
     "ans": 0,
     "why": "Mojo menyediakan modul bawaan 'from python import Python' dengan metode 'Python.import_module()' untuk mengimpor package Python apa pun secara mulus."
    }
   },
   {
    "id": "mojo-07",
    "num": "07",
    "title": "Vektorisasi Hardware & SIMD",
    "level": "Lanjutan",
    "desc": "Memanfaatkan register prosesor modern untuk komputasi paralel hardware.",
    "intro": "SIMD (Single Instruction, Multiple Data) adalah rahasia mengapa komputasi AI di Mojo bisa berjalan puluhan ribu kali lebih kencang.",
    "body": "\n      <h4>🛒 Analogi Kasir Super dengan 8 Tangan</h4>\n      <p>Dalam prosesor komputer tradisional:</p>\n      <ul>\n        <li><b>Non-SIMD (Skalar):</b> Seperti 1 kasir melayani pembeli satu per satu. Untuk menghitung 8 pasang angka, kasir harus memprosesnya dalam 8 langkah antrean berturut-turut.</li>\n        <li><b>SIMD (Vektor):</b> Seperti 1 kasir super mutan yang punya 8 tangan. Dalam <b>1 kali detak jam</b>, kasir tersebut langsung menjumlahkan 8 pasang angka sekaligus secara serentak di register CPU!</li>\n      </ul>\n\n      <h4>⚡ Contoh SIMD di Mojo</h4>\n      <div class=\"code-block\"><span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"cm\"># SIMD dengan 4 elemen Float32 sekaligus dalam 1 register CPU</span>\n    <span class=\"kw\">let</span> vektor_a = SIMD[DType.float32, <span class=\"nm\">4</span>](<span class=\"nm\">1.0</span>, <span class=\"nm\">2.0</span>, <span class=\"nm\">3.0</span>, <span class=\"nm\">4.0</span>)\n    <span class=\"kw\">let</span> vektor_b = SIMD[DType.float32, <span class=\"nm\">4</span>](<span class=\"nm\">10.0</span>, <span class=\"nm\">20.0</span>, <span class=\"nm\">30.0</span>, <span class=\"nm\">40.0</span>)\n    \n    <span class=\"cm\"># Menjumlahkan 4 pasang angka dalam SATU siklus instruksi CPU</span>\n    <span class=\"kw\">let</span> hasil = vektor_a + vektor_b\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Hasil penjumlahan vektor SIMD Supriyanto:\"</span>, hasil)\n    <span class=\"cm\"># Output: [11.0, 22.0, 33.0, 44.0]</span>\n    \n    <span class=\"cm\"># Perkalian elemen sekaligus (FMA - Fused Multiply-Add)</span>\n    <span class=\"kw\">let</span> perkalian = vektor_a * <span class=\"nm\">2.5</span>\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Hasil perkalian skala SIMD:\"</span>, perkalian)</div>\n\n      <div class=\"note\">\n        <b>Dukungan Lebar Vektor:</b> Mojo mendukung SIMD 4, 8, 16, hingga 64 jalur (AVX-512, ARM Neon, dan Apple Silicon AMX).\n      </div>\n    ",
    "quiz": {
     "q": "Apa kepanjangan dari SIMD dan bagaimana cara kerjanya?",
     "opts": [
      "Single Instruction, Multiple Data — mengeksekusi satu instruksi matematika pada banyak data sekaligus dalam satu siklus CPU",
      "Simple Input Memory Device — alat penyimpan memori flash",
      "Sequential Instruction Multi Device — eksekusi kode baris demi baris secara lambat",
      "Standard Internet Module Data — protokol transfer data internet"
     ],
     "ans": 0,
     "why": "SIMD adalah teknologi akselerasi hardware di mana satu instruksi prosesor mengeksekusi operasi matematika pada sekumpulan data (vektor) secara serentak."
    }
   },
   {
    "id": "mojo-08",
    "num": "08",
    "title": "Multi-Threading & Tiling CPU",
    "level": "Lanjutan",
    "desc": "Membagi beban kerja komputasi ke seluruh core CPU dan mengoptimalkan Cache L1/L2.",
    "intro": "Prosesor modern memiliki banyak core (8, 16, hingga 128 core). Mojo menyediakan fungsi parallelize untuk memanfaatkan semua tenaga prosesor tersebut secara otomatis.",
    "body": "\n      <h4>🍞 Analogi Memotong 10.000 Roti</h4>\n      <p>Jika Supriyanto harus memotong 10.000 potong roti sendirian (single core), butuh waktu seharian. Namun jika Supriyanto mempekerjakan 8 koki (8 CPU Cores) dan membagi adonan ke dalam nampan-nampan kecil berukuran pas meja (*Tiling*), 10.000 roti selesai hanya dalam beberapa menit.</p>\n\n      <h4>🚀 Contoh Paralelisasi dengan parallelize</h4>\n      <div class=\"code-block\"><span class=\"kw\">from</span> <span class=\"st\">algorithm</span> <span class=\"kw\">import</span> parallelize\n\n<span class=\"kw\">fn</span> <span class=\"fn\">proses_baris_data</span>(nomor_core: Int):\n    <span class=\"cm\"># Logika yang dijalankan serentak oleh masing-masing worker core</span>\n    <span class=\"kw\">let</span> offset = nomor_core * <span class=\"nm\">1000</span>\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Core\"</span>, nomor_core, <span class=\"st\">\"memproses data Supriyanto batch:\"</span>, offset)\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"kw\">let</span> total_pekerjaan = <span class=\"nm\">8</span>\n    <span class=\"cm\"># Menjalankan fungsi di 8 thread CPU secara paralel</span>\n    parallelize[proses_baris_data](total_pekerjaan)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Semua pekerjaan multi-threading selesai!\"</span>)</div>\n\n      <div class=\"tip\">\n        <b>Konsep Tiling:</b> Data dipecah menjadi blok-blok kecil seukuran L1 Cache (misal 32KB atau 64KB) agar CPU tidak perlu menunggu transfer data lambat dari RAM utama.\n      </div>\n    ",
    "quiz": {
     "q": "Apa fungsi utama dari paket 'algorithm.parallelize' di Mojo?",
     "opts": [
      "Mengeksekusi tugas secara paralel di seluruh core prosesor (multi-threading) secara otomatis",
      "Menyambungkan laptop ke printer bluetooth",
      "Mengubah tema web menjadi gelap",
      "Menghapus cache browser"
     ],
     "ans": 0,
     "why": "parallelize di Mojo membagi iterasi komputasi ke beberapa thread CPU worker sehingga seluruh core prosesor bekerja bersamaan secara maksimal."
    }
   },
   {
    "id": "mojo-09",
    "num": "09",
    "title": "Fondasi AI: Operasi Matriks & Tensor",
    "level": "Mahir",
    "desc": "Membangun operasi inti perkalian matriks (Matrix Multiplication) berkecepatan tinggi.",
    "intro": "Seluruh kecerdasan buatan (Large Language Model, Computer Vision, Audio) pada intinya adalah operasi perkalian tabel angka berukuran besar (Matriks & Tensor).",
    "body": "\n      <h4>📊 Analogi Tabel Komposisi Bumbu Resep</h4>\n      <p>Bayangkan Anda memiliki <b>Tabel Bahan Makanan</b> (Matriks A) dan <b>Tabel Resep Masakan Supriyanto</b> (Matriks B). Operasi Matrix Multiplication ($C = A \\times B$) mengalikan setiap baris bahan dengan setiap kolom resep untuk menghasilkan takaran rasa baru secara massal.</p>\n\n      <h4>🧮 Perkalian Matriks Cepat dengan SIMD di Mojo</h4>\n      <div class=\"code-block\"><span class=\"kw\">struct</span> <span class=\"fn\">Matrix2x2</span>:\n    <span class=\"kw\">var</span> data: SIMD[DType.float32, <span class=\"nm\">4</span>] <span class=\"cm\"># Menyimpan 4 angka [a00, a01, a10, a11]</span>\n\n    <span class=\"kw\">fn</span> <span class=\"fn\">__init__</span>(<span class=\"kw\">inout</span> self, v0: Float32, v1: Float32, v2: Float32, v3: Float32):\n        self.data = SIMD[DType.float32, <span class=\"nm\">4</span>](v0, v1, v2, v3)\n\n    <span class=\"cm\"># Perkalian matriks dengan vektor input AI</span>\n    <span class=\"kw\">fn</span> <span class=\"fn\">kali_vektor</span>(self, vec: SIMD[DType.float32, <span class=\"nm\">2</span>]) -&gt; SIMD[DType.float32, <span class=\"nm\">2</span>]:\n        <span class=\"kw\">let</span> r0 = (self.data[<span class=\"nm\">0</span>] * vec[<span class=\"nm\">0</span>]) + (self.data[<span class=\"nm\">1</span>] * vec[<span class=\"nm\">1</span>])\n        <span class=\"kw\">let</span> r1 = (self.data[<span class=\"nm\">2</span>] * vec[<span class=\"nm\">0</span>]) + (self.data[<span class=\"nm\">3</span>] * vec[<span class=\"nm\">1</span>])\n        <span class=\"kw\">return</span> SIMD[DType.float32, <span class=\"nm\">2</span>](r0, r1)\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"cm\"># Bobot jaringan saraf tiruan (Weights Matrix)</span>\n    <span class=\"kw\">let</span> bobot_ai = Matrix2x2(<span class=\"nm\">0.5</span>, <span class=\"nm\">1.2</span>, <span class=\"nm\">-0.8</span>, <span class=\"nm\">2.0</span>)\n    <span class=\"cm\"># Data fitur input Supriyanto [umur, skor]</span>\n    <span class=\"kw\">let</span> input_supriyanto = SIMD[DType.float32, <span class=\"nm\">2</span>](<span class=\"nm\">2.0</span>, <span class=\"nm\">3.0</span>)\n    \n    <span class=\"kw\">let</span> output_tensor = bobot_ai.kali_vektor(input_supriyanto)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Hasil Output Linear Layer AI:\"</span>, output_tensor)</div>\n\n      <div class=\"note\">\n        <b>Dari 2x2 ke 4096x4096:</b> Prinsip matematika yang sama diterapkan pada model AI raksasa seperti LLM (Llama, GPT), hanya saja ukurannya mencapai ribuan dimensi.\n      </div>\n    ",
    "quiz": {
     "q": "Mengapa operasi Matrix Multiplication menjadi jantung dari komputasi model AI modern?",
     "opts": [
      "Karena seluruh transformasi data fitur input dan bobot neuron dihitung melalui perkalian matriks (Linear Layer)",
      "Hanya untuk menampilkan warna di layar",
      "Hanya untuk menghitung jumlah baris file teks",
      "Karena matriks membuat ukuran file teks jadi lebih kecil"
     ],
     "ans": 0,
     "why": "Di dalam neural network dan deep learning, layer linier (Dense/Attention) memproses data input melalui perkalian matriks bobot (Weights x Inputs + Bias)."
    }
   },
   {
    "id": "mojo-10",
    "num": "10",
    "title": "Fungsi Aktivasi AI (ReLU & Sigmoid)",
    "level": "Mahir",
    "desc": "Mengimplementasikan fungsi aktivasi non-linier neuron AI berkecepatan tinggi.",
    "intro": "Tanpa fungsi aktivasi, jaringan saraf tiruan hanyalah regresi linier biasa. Fungsi aktivasi bertindak sebagai saklar keputusan neuron.",
    "body": "\n      <h4>💡 Analogi Saklar Lampu Otomatis</h4>\n      <p>Neuron di otak buatan membutuhkan aturan:</p>\n      <ul>\n        <li><b>ReLU (Rectified Linear Unit):</b> Seperti sensor lampu otomatis. Jika sinyal informasi positif ($x > 0$), lampu menyala proporsional sebesar sinyal tersebut. Jika sinyalnya negatif ($x \\le 0$), lampu mati total ($0$). Rumusnya sangat simpel: $f(x) = \\max(0, x)$.</li>\n        <li><b>Sigmoid:</b> Menekan angka berapa pun (dari minus tak hingga sampai plus tak hingga) menjadi rentang probabilitas antara <b>0.0 (0%) hingga 1.0 (100%)</b>.</li>\n      </ul>\n\n      <h4>⚡ Implementasi ReLU Berbasis SIMD Vektor</h4>\n      <div class=\"code-block\"><span class=\"kw\">fn</span> <span class=\"fn\">relu_simd</span>(tensor: SIMD[DType.float32, <span class=\"nm\">4</span>]) -&gt; SIMD[DType.float32, <span class=\"nm\">4</span>]:\n    <span class=\"kw\">let</span> nol = SIMD[DType.float32, <span class=\"nm\">4</span>](<span class=\"nm\">0.0</span>, <span class=\"nm\">0.0</span>, <span class=\"nm\">0.0</span>, <span class=\"nm\">0.0</span>)\n    <span class=\"cm\"># Jika nilai negatif, ubah jadi 0. Jika positif, pertahankan</span>\n    <span class=\"kw\">return</span> (tensor &gt; nol).select(tensor, nol)\n\n<span class=\"kw\">fn</span> <span class=\"fn\">sigmoid_sederhana</span>(x: Float32) -&gt; Float32:\n    <span class=\"cm\"># Pendekatan komputasi probabilitas</span>\n    <span class=\"kw\">return</span> <span class=\"nm\">1.0</span> / (<span class=\"nm\">1.0</span> + <span class=\"nm\">2.7182818</span> ** (-x))\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"cm\"># Contoh data sinyal neuron Supriyanto (ada yang negatif dan positif)</span>\n    <span class=\"kw\">let</span> sinyal_mentah = SIMD[DType.float32, <span class=\"nm\">4</span>](<span class=\"nm\">-3.5</span>, <span class=\"nm\">1.8</span>, <span class=\"nm\">-0.2</span>, <span class=\"nm\">4.2</span>)\n    <span class=\"kw\">let</span> hasil_aktivasi = relu_simd(sinyal_mentah)\n    \n    <span class=\"fn\">print</span>(<span class=\"st\">\"Sinyal sebelum aktivasi:\"</span>, sinyal_mentah)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Sinyal setelah ReLU AI:\"</span>, hasil_aktivasi)\n    <span class=\"cm\"># Output: [0.0, 1.8, 0.0, 4.2]</span>\n    \n    <span class=\"kw\">let</span> probabilitas = sigmoid_sederhana(<span class=\"nm\">2.5</span>)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Probabilitas kelulusan Supriyanto:\"</span>, probabilitas * <span class=\"nm\">100</span>, <span class=\"st\">\"%\"</span>)</div>\n    ",
    "quiz": {
     "q": "Apa yang dilakukan fungsi aktivasi ReLU terhadap nilai input negatif?",
     "opts": [
      "Mengubah seluruh nilai negatif menjadi nol (0)",
      "Mengalikan nilai negatif dengan minus satu",
      "Menghapus memori RAM",
      "Menambah nilai negatif sebesar 100"
     ],
     "ans": 0,
     "why": "ReLU (Rectified Linear Unit) mengembalikan f(x) = max(0, x), yang berarti semua nilai negatif dipotong menjadi nol (0)."
    }
   },
   {
    "id": "mojo-11",
    "num": "11",
    "title": "Implementasi AI: Mini Neural Network Inference",
    "level": "Mahir",
    "desc": "Membangun Jaringan Saraf Tiruan lengkap untuk inferensi dan prediksi data.",
    "intro": "Sekarang kita gabungkan semua materi: Struct, Linear Layer, SIMD, dan ReLU untuk membuat model AI prediksi dari nol.",
    "body": "\n      <h4>🧠 Arsitektur Jaringan Saraf Tiruan (Neural Network)</h4>\n      <p>Kita akan membuat model AI mini untuk memprediksi apakah permohonan analisis data <b>Supriyanto</b> disetujui atau ditolak berdasarkan 2 parameter input: <code class=\"inline\">[skor_kemampuan, skor_kecepatan]</code>.</p>\n      \n      <p><b>Alur Kerja AI:</b></p>\n      <p><code class=\"inline\">Input Layer (2 fitur) → Hidden Dense Layer (Bobot &amp; Bias) → Aktivasi ReLU → Output Layer (Prediksi)</code></p>\n\n      <h4>🤖 Kode Lengkap Model AI di Mojo</h4>\n      <div class=\"code-block\"><span class=\"kw\">struct</span> <span class=\"fn\">DenseLayer</span>:\n    <span class=\"kw\">var</span> w0: Float32\n    <span class=\"kw\">var</span> w1: Float32\n    <span class=\"kw\">var</span> bias: Float32\n\n    <span class=\"kw\">fn</span> <span class=\"fn\">__init__</span>(<span class=\"kw\">inout</span> self, w0: Float32, w1: Float32, bias: Float32):\n        self.w0 = w0\n        self.w1 = w1\n        self.bias = bias\n\n    <span class=\"cm\"># Forward Pass neuron</span>\n    <span class=\"kw\">fn</span> <span class=\"fn\">forward</span>(self, x0: Float32, x1: Float32) -&gt; Float32:\n        <span class=\"kw\">let</span> linear_out = (x0 * self.w0) + (x1 * self.w1) + self.bias\n        <span class=\"cm\"># Terapkan aktivasi ReLU: max(0, x)</span>\n        <span class=\"kw\">if</span> linear_out &gt; <span class=\"nm\">0.0</span>:\n            <span class=\"kw\">return</span> linear_out\n        <span class=\"kw\">return</span> <span class=\"nm\">0.0</span>\n\n<span class=\"kw\">fn</span> <span class=\"fn\">main</span>():\n    <span class=\"cm\"># 1. Inisialisasi model neuron terlatih (Trained Weights)</span>\n    <span class=\"kw\">let</span> neuron_keputusan = DenseLayer(<span class=\"nm\">0.65</span>, <span class=\"nm\">0.85</span>, <span class=\"nm\">-0.5</span>)\n    \n    <span class=\"cm\"># 2. Data input Supriyanto: [Kemampuan=0.9, Kecepatan=0.8]</span>\n    <span class=\"kw\">let</span> fitur_kemampuan: Float32 = <span class=\"nm\">0.9</span>\n    <span class=\"kw\">let</span> fitur_kecepatan: Float32 = <span class=\"nm\">0.8</span>\n    \n    <span class=\"cm\"># 3. Jalankan inferensi AI</span>\n    <span class=\"kw\">let</span> skor_prediksi = neuron_keputusan.forward(fitur_kemampuan, fitur_kecepatan)\n    \n    <span class=\"fn\">print</span>(<span class=\"st\">\"=== HASIL INFERENSI MODEL AI MOJO ===\"</span>)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Kandidat:\"</span>, <span class=\"st\">\"Supriyanto\"</span>)\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Skor Aktivasi Output:\"</span>, skor_prediksi)\n    \n    <span class=\"kw\">if</span> skor_prediksi &gt; <span class=\"nm\">0.5</span>:\n        <span class=\"fn\">print</span>(<span class=\"st\">\"Status AI: REKOMENDASI DITERIMA ✅\"</span>)\n    <span class=\"kw\">else</span>:\n        <span class=\"fn\">print</span>(<span class=\"st\">\"Status AI: PERLU REVIEW ULANG ⚠️\"</span>)</div>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-box-icon\">⚡</span>\n        <div><b>Performa Luar Biasa:</b> Kode inferensi di atas berjalan tanpa overhead interpreter Python, langsung dieksekusi di register CPU dalam hitungan nanodetik.</div>\n      </div>\n    ",
    "quiz": {
     "q": "Apa yang dimaksud dengan proses 'Forward Pass' pada inferensi Neural Network?",
     "opts": [
      "Proses mengalirkan data input melalui bobot layer dan fungsi aktivasi untuk menghasilkan output prediksi",
      "Proses mematikan komputer setelah selesai coding",
      "Proses backup database ke cloud",
      "Proses mengirim email otomatis"
     ],
     "ans": 0,
     "why": "Forward Pass adalah perhitungan berurutan dari layer input ke layer output untuk menghasilkan nilai prediksi model AI."
    }
   },
   {
    "id": "mojo-12",
    "num": "12",
    "title": "Masa Depan AI, MAX Engine & Akselerasi GPU",
    "level": "Mahir",
    "desc": "Mengenal ekosistem Modular MAX dan deployment model AI tingkat produksi.",
    "intro": "Mojo bukan sekadar bahasa baru, melainkan fondasi ekosistem AI generasi masa depan untuk deployment model LLM dan akselerasi GPU.",
    "body": "\n      <h4>🚀 Analogi Roket Pendorong Luar Angkasa</h4>\n      <p>Jika kode Mojo yang Anda tulis adalah kapsul pesawat luar angkasa, maka <b>MAX Engine (Modular Acceleration Engine)</b> adalah roket pendorong raksasa yang memungkinkan model AI Anda meluncur di berbagai jenis hardware: <b>NVIDIA CUDA GPU, AMD ROCm, Apple Silicon (M1/M2/M3/M4), hingga server CPU cloud</b> tanpa perlu mengubah satu baris kode pun!</p>\n\n      <h4>🌟 3 Pilar Utama Ekosistem Mojo &amp; MAX</h4>\n      <div class=\"cards\">\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\">\n            <span class=\"keyword-name\">1. MAX Serving</span>\n            <span class=\"keyword-badge\">PRODUCTION</span>\n          </div>\n          <div class=\"keyword-desc\">\n            Infrastruktur penyedia API inferensi untuk model LLM (seperti Llama 3, Mistral) dengan throughput hingga 3x lipat lebih tinggi dan konsumsi RAM jauh lebih hemat.\n          </div>\n        </div>\n\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\">\n            <span class=\"keyword-name\">2. MAX Graph &amp; Kernels</span>\n            <span class=\"keyword-badge\">HARDWARE</span>\n          </div>\n          <div class=\"keyword-desc\">\n            Menulis custom kernel AI langsung menggunakan sintaks Mojo tanpa harus mempelajari bahasa rumit seperti CUDA C++.\n          </div>\n        </div>\n      </div>\n\n      <h4>🏆 Rangkuman Perjalanan Belajar</h4>\n      <p>Selamat! Supriyanto telah mempelajari fondasi lengkap bahasa Mojo dari tingkat Pemula hingga Mahir:</p>\n      <ul>\n        <li>✅ Filosofi kecepatan Mojo &amp; sintaks <code class=\"inline\">fn</code> vs <code class=\"inline\">def</code></li>\n        <li>✅ Struktur data <code class=\"inline\">struct</code> &amp; manajemen memori <code class=\"inline\">borrowed / inout</code></li>\n        <li>✅ Interoperabilitas mulus dengan ekosistem Python</li>\n        <li>✅ Vektorisasi hardware SIMD &amp; multi-threading parallelize</li>\n        <li>✅ Pembuatan layer AI, perkalian matriks, dan inferensi Neural Network</li>\n      </ul>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-box-icon\">🎉</span>\n        <div><b>Langkah Selanjutnya:</b> Uji pemahaman Anda dengan mengikuti <b>Quiz Mojo</b> pada menu navigasi!</div>\n      </div>\n    ",
    "quiz": {
     "q": "Apa keunggulan utama dari Modular MAX Engine saat menjalankan model AI di tingkat produksi?",
     "opts": [
      "Mampu mengoptimalkan dan mengompilasi model AI ke berbagai hardware (NVIDIA GPU, AMD, Apple Silicon, CPU) dengan throughput tinggi dan hemat memori",
      "Hanya bisa berjalan di handphone jadul",
      "Membuat ukuran font editor menjadi lebih besar",
      "Otomatis mematikan koneksi internet"
     ],
     "ans": 0,
     "why": "MAX Engine mengoptimalkan eksekusi model AI lintas berbagai akselerator hardware dengan efisiensi memori dan throughput komputasi tertinggi."
    }
   }
  ]
 },
 {
  "id": "py",
  "title": "Python 🐍",
  "subtitle": "Bahasa Terpopuler Dunia: Fondasi, OOP, Data Science, AI & Backend API",
  "accent": "sky",
  "category": "it",
  "lessons": [
   {
    "id": "py-01",
    "num": "01",
    "title": "Pengenalan & Filosofi Python",
    "level": "Pemula",
    "desc": "Bahasa paling populer di dunia untuk Data Science, AI, Web, dan Otomasi.",
    "intro": "Python dirancang oleh Guido van Rossum dengan satu moto utama: 'Readability counts' (keterbacaan dan kebersihan kode adalah yang paling utama). Sintaksnya yang mirip bahasa Inggris menjadikannya bahasa nomor satu untuk pemula dan profesional.",
    "body": "\n      <h4>🌐 Analogi Bahasa Internasional Dunia Komputer</h4>\n      <p>Jika bahasa pemrograman lain seperti dialek kuno yang penuh aturan birokrasi rumit (banyak titik koma <code class=\"inline\">;</code> dan kurung kurawal <code class=\"inline\">{}</code>), maka <b>Python adalah Bahasa Inggris internasional yang bersih dan santai</b>: apa yang Anda tulis di kode hampir sama persis dengan apa yang Anda pikirkan di kepala.</p>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-box-icon\">🐍</span>\n        <div><b>Zen of Python:</b> <i>\"Simple is better than complex. Complex is better than complicated. Readability counts.\"</i> — Filosofi dasar yang membuat jutaan programmer betah menggunakan Python.</div>\n      </div>\n\n      <h4>📝 Program Pertama: Halo Supriyanto</h4>\n      <p>Di Python, Anda tidak memerlukan fungsi <code class=\"inline\">main()</code> atau boilerplate kelas yang rumit. Cukup satu baris langsung dieksekusi:</p>\n      <div class=\"code-block\"><span class=\"cm\"># Mencetak teks ke layar</span>\n<span class=\"fn\">print</span>(<span class=\"st\">\"Halo Supriyanto! Selamat datang di dunia Python 🐍\"</span>)\n\n<span class=\"cm\"># Menggabungkan teks dan variabel</span>\nnama_pengguna = <span class=\"st\">\"Supriyanto\"</span>\npesan = <span class=\"st\">\"Python membuat coding terasa menyenangkan dan produktif\"</span>\n<span class=\"fn\">print</span>(pesan, <span class=\"st\">\"oleh\"</span>, nama_pengguna)</div>\n\n      <h4>🚀 Mengapa Python Merajai AI &amp; Otomasi?</h4>\n      <p>Python memiliki ekosistem ribuan <i>library</i> raksasa (seperti Pandas, NumPy, Scikit-Learn, PyTorch, dan FastAPI). Anda tidak perlu membuat roda dari nol — cukup gunakan modul yang ada untuk membangun aplikasi kelas dunia.</p>\n    ",
    "quiz": {
     "q": "Apa prinsip dasar utama dari filosofi desain bahasa Python (Zen of Python)?",
     "opts": [
      "Kode harus bersih, sederhana, dan mengutamakan keterbacaan (Readability counts)",
      "Kode harus memiliki titik koma di setiap akhir baris",
      "Hanya boleh digunakan untuk membuat game 3D",
      "Wajib menggunakan huruf kapital semua"
     ],
     "ans": 0,
     "why": "Filosofi Python menekankan pada kesederhanaan dan keterbacaan kode (Readability counts) agar mudah dipelajari dan dirawat."
    }
   },
   {
    "id": "py-02",
    "num": "02",
    "title": "Variabel, Tipe Data Dinamis & Input",
    "level": "Pemula",
    "desc": "Memahami tipe data primitif, Dynamic Typing, type casting, dan f-strings modern.",
    "intro": "Python menggunakan Dynamic Typing: Anda tidak perlu menuliskan tipe data secara manual. Python secara cerdas akan mendeteksi tipe data saat nilai dimasukkan.",
    "body": "\n      <h4>🏷️ Analogi Label Stiker Pintar</h4>\n      <p>Bayangkan Anda memiliki kotak penyimpanan. Di bahasa lain, Anda harus memesan kotak khusus bertuliskan 'KHUSUS ANGKA'. Di Python, variabel seperti <b>label stiker tempel</b> bernama <code class=\"inline\">nama_pengguna</code> atau <code class=\"inline\">saldo</code> yang bebas Anda tempelkan pada wadah apa saja — teks, angka, maupun desimal.</p>\n\n      <h4>📦 4 Tipe Data Dasar</h4>\n      <div class=\"cards\">\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">str (Teks)</span><span class=\"keyword-badge\">\"Supriyanto\"</span></div>\n          <div class=\"keyword-desc\">Rangkaian huruf dan karakter dalam tanda petik.</div>\n        </div>\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">int (Bilangan Bulat)</span><span class=\"keyword-badge\">28, 100, -5</span></div>\n          <div class=\"keyword-desc\">Angka bulat untuk kuantitas dan perhitungan diskrit.</div>\n        </div>\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">float (Desimal)</span><span class=\"keyword-badge\">98.5, 3.14</span></div>\n          <div class=\"keyword-desc\">Angka pecahan desimal dengan presisi tinggi.</div>\n        </div>\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">bool (Logika)</span><span class=\"keyword-badge\">True / False</span></div>\n          <div class=\"keyword-desc\">Nilai kebenaran logika biner (Benar / Salah).</div>\n        </div>\n      </div>\n\n      <h4>✨ Format String Modern (f-string)</h4>\n      <div class=\"code-block\"><span class=\"cm\"># Deklarasi data profil Supriyanto</span>\nnama_klien = <span class=\"st\">\"Supriyanto\"</span>\nskor_kemampuan = <span class=\"nm\">92.5</span>\njumlah_proyek = <span class=\"nm\">14</span>\nis_verifikasi = <span class=\"kw\">True</span>\n\n<span class=\"cm\"># Format f-string dengan formatting angka</span>\ninfo = <span class=\"st\">f\"Klien: {nama_klien} | Proyek: {jumlah_proyek} | Skor: {skor_kemampuan:.1f} | Aktif: {is_verifikasi}\"</span>\n<span class=\"fn\">print</span>(info)\n\n<span class=\"cm\"># Konversi Tipe Data (Type Casting)</span>\nteks_angka = <span class=\"st\">\"50000\"</span>\nnominal = <span class=\"fn\">int</span>(teks_angka) + <span class=\"nm\">15000</span>\n<span class=\"fn\">print</span>(<span class=\"st\">f\"Total Nominal Supriyanto: Rp{nominal:,}\"</span>)</div>\n    ",
    "quiz": {
     "q": "Bagaimana cara menulis format string modern (f-string) yang benar di Python?",
     "opts": [
      "f\"Halo {nama_pengguna}\"",
      "\"Halo $nama_pengguna\"",
      "\"Halo %s\" % nama_pengguna",
      "string.format(\"Halo\", nama_pengguna)"
     ],
     "ans": 0,
     "why": "f-string diawali dengan huruf f sebelum tanda petik, lalu nama variabel disisipkan langsung di dalam kurung kurawal {variabel}."
    }
   },
   {
    "id": "py-03",
    "num": "03",
    "title": "Logika & Percabangan if-elif-else",
    "level": "Pemula",
    "desc": "Membangun alur keputusan cerdas dengan operator pembanding dan logika.",
    "intro": "Program yang cerdas tahu kapan harus mengambil jalan A atau jalan B. Percabangan if-elif-else adalah mekanisme utama pengambilan keputusan di Python.",
    "body": "\n      <h4>🚦 Analogi Satpam Pintu Gerbang Otomatis</h4>\n      <p>Bayangkan seorang satpam gerbang yang bertugas menyaring tamu:</p>\n      <ul>\n        <li><b>if (Jika):</b> Tamu punya tiket VIP (Supriyanto) → langsung silakan masuk ke ruang eksekutif.</li>\n        <li><b>elif (Jika kondisi lain):</b> Tamu punya tiket reguler → arahkan ke antrean reguler.</li>\n        <li><b>else (Lainnya):</b> Tidak punya tiket sama sekali → arahkan ke loket registrasi.</li>\n      </ul>\n\n      <h4>🛠️ Contoh Kode: Evaluasi Kelulusan Supriyanto</h4>\n      <div class=\"code-block\">skor_tes = <span class=\"nm\">88</span>\nnama_kandidat = <span class=\"st\">\"Supriyanto\"</span>\n\n<span class=\"kw\">if</span> skor_tes &gt;= <span class=\"nm\">90</span>:\n    grade = <span class=\"st\">\"A (Sangat Baik)\"</span>\n    rekomendasi = <span class=\"st\">\"Langsung diterima sebagai Senior Engineer\"</span>\n<span class=\"kw\">elif</span> skor_tes &gt;= <span class=\"nm\">75</span>:\n    grade = <span class=\"st\">\"B (Lulus Memuaskan)\"</span>\n    rekomendasi = <span class=\"st\">\"Diterima di divisi Rekayasa AI\"</span>\n<span class=\"kw\">else</span>:\n    grade = <span class=\"st\">\"C (Perlu Remedial)\"</span>\n    rekomendasi = <span class=\"st\">\"Mengulang modul latihan dasar\"</span>\n\n<span class=\"fn\">print</span>(<span class=\"st\">f\"Hasil Evaluasi {nama_kandidat}:\"</span>)\n<span class=\"fn\">print</span>(<span class=\"st\">f\"Grade: {grade} | Keputusan: {rekomendasi}\"</span>)</div>\n\n      <div class=\"note\">\n        <b>Aturan Indentasi Python:</b> Python tidak menggunakan kurung kurawal <code class=\"inline\">{}</code>. Blok kode ditentukan oleh <b>4 spasi indentasi</b> setelah titik dua <code class=\"inline\">:</code>.\n      </div>\n    ",
    "quiz": {
     "q": "Bagaimana Python menentukan cakupan blok kode di dalam percabangan if?",
     "opts": [
      "Menggunakan indentasi spasi/tab yang konsisten setelah tanda titik dua (:)",
      "Menggunakan tanda kurung kurawal { }",
      "Menggunakan kata kunci BEGIN dan END",
      "Menggunakan tanda titik koma ;"
     ],
     "ans": 0,
     "why": "Python menggunakan indentasi (spasi/tab) setelah tanda titik dua (:) untuk menentukan blok cakupan kode secara bersih."
    }
   },
   {
    "id": "py-04",
    "num": "04",
    "title": "Struktur Data Koleksi (List, Tuple, Set, Dict)",
    "level": "Menengah",
    "desc": "Menguasai 4 struktur data bawaan Python untuk mengelola data kompleks.",
    "intro": "Sebagian besar waktu seorang programmer digunakan untuk memproses kumpulan data. Python menyediakan 4 wadah bawaan yang sangat fleksibel dan berdaya guna tinggi.",
    "body": "\n      <h4>🧺 Analogi 4 Jenis Wadah Penyimpanan</h4>\n      <div class=\"cards\">\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">List [1, 2, 3]</span><span class=\"keyword-badge\">MUTABLE</span></div>\n          <div class=\"keyword-desc\">Keranjang belanja fleksibel: urutannya terjaga, datanya bisa ditambah, diedit, atau dihapus kapan saja.</div>\n        </div>\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">Tuple (1, 2, 3)</span><span class=\"keyword-badge\">IMMUTABLE</span></div>\n          <div class=\"keyword-desc\">Dokumen bersegel resmi: nilainya permanen dan tidak bisa diubah setelah dibuat (sangat hemat memori).</div>\n        </div>\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">Set {1, 2, 3}</span><span class=\"keyword-badge\">UNIQUE</span></div>\n          <div class=\"keyword-desc\">Kantong unik: otomatis membuang data ganda (duplikat) dan mendukung operasi irisan/gabungan.</div>\n        </div>\n        <div class=\"keyword-card\">\n          <div class=\"keyword-card-header\"><span class=\"keyword-name\">Dict {\"k\": \"v\"}</span><span class=\"keyword-badge\">KEY-VALUE</span></div>\n          <div class=\"keyword-desc\">Buku kontak telepon: mencari nilai berdasarkan kunci/nama secara instan O(1).</div>\n        </div>\n      </div>\n\n      <h4>🛠️ Contoh Kode Koleksi Data Profil</h4>\n      <div class=\"code-block\"><span class=\"cm\"># 1. Dictionary profil Supriyanto</span>\nprofil_supriyanto = {\n    <span class=\"st\">\"nama\"</span>: <span class=\"st\">\"Supriyanto\"</span>,\n    <span class=\"st\">\"keahlian\"</span>: [<span class=\"st\">\"Python\"</span>, <span class=\"st\">\"Automation\"</span>, <span class=\"st\">\"AI\"</span>],  <span class=\"cm\"># List</span>\n    <span class=\"st\">\"koordinat_kantor\"</span>: (<span class=\"nm\">-6.2088</span>, <span class=\"nm\">106.8456</span>),         <span class=\"cm\"># Tuple (lat, lon)</span>\n    <span class=\"st\">\"badge_penghargaan\"</span>: {<span class=\"st\">\"Top Contributor\"</span>, <span class=\"st\">\"AI Innovator\"</span>} <span class=\"cm\"># Set</span>\n}\n\n<span class=\"cm\"># Memanipulasi data</span>\nprofil_supriyanto[<span class=\"st\">\"keahlian\"</span>].<span class=\"fn\">append</span>(<span class=\"st\">\"Data Engineering\"</span>)\nprofil_supriyanto[<span class=\"st\">\"level\"</span>] = <span class=\"st\">\"Expert\"</span>\n\n<span class=\"fn\">print</span>(<span class=\"st\">f\"Profil: {profil_supriyanto['nama']}\"</span>)\n<span class=\"fn\">print</span>(<span class=\"st\">f\"Daftar Keahlian ({len(profil_supriyanto['keahlian'])} bidang): {', '.join(profil_supriyanto['keahlian'])}\"</span>)</div>\n    ",
    "quiz": {
     "q": "Struktur data Python manakah yang otomatis menghapus nilai duplikat dan tidak memiliki indeks urutan?",
     "opts": [
      "Set",
      "List",
      "Tuple",
      "Dictionary"
     ],
     "ans": 0,
     "why": "Set di Python hanya menyimpan nilai-nilai unik (tidak mengizinkan duplikasi) dan tidak terurut berdasarkan indeks angka."
    }
   },
   {
    "id": "py-05",
    "num": "05",
    "title": "Perulangan & List Comprehension",
    "level": "Menengah",
    "desc": "Memproses ribuan data otomatis dengan loop for, while, dan ekspresi List Comprehension.",
    "intro": "Komputer tidak pernah lelah melakukan tugas berulang. Di Python, List Comprehension memungkinkan Anda menyaring dan mengubah data dalam satu baris ekspresi yang sangat elegan.",
    "body": "\n      <h4>🏭 Analogi Mesin Pabrik Ban Berjalan</h4>\n      <p>Jika perulangan <code class=\"inline\">for</code> tradisional seperti pekerja memeriksa satu per satu barang di atas meja, maka <b>List Comprehension</b> adalah mesin pabrik pintar: barang masuk di satu sisi, langsung disaring, dicap, dan keluar sebagai kumpulan produk baru dalam 1 baris pipa produksi.</p>\n\n      <h4>⚡ List Comprehension vs For Loop Tradisional</h4>\n      <div class=\"code-block\"><span class=\"cm\"># Daftar transaksi Supriyanto (dalam Rupiah)</span>\ntransaksi = [<span class=\"nm\">10000</span>, <span class=\"nm\">25000</span>, <span class=\"nm\">50000</span>, <span class=\"nm\">15000</span>, <span class=\"nm\">85000</span>, <span class=\"nm\">120000</span>]\n\n<span class=\"cm\"># Cara 1: Tradisional For Loop</span>\ntransaksi_vip = []\n<span class=\"kw\">for</span> t <span class=\"kw\">in</span> transaksi:\n    <span class=\"kw\">if</span> t &gt;= <span class=\"nm\">50000</span>:\n        transaksi_vip.<span class=\"fn\">append</span>(t * <span class=\"nm\">1.1</span>) <span class=\"cm\"># Tambah cashback 10%</span>\n\n<span class=\"cm\"># Cara 2: Pythonic (List Comprehension) — 1 Baris Elegan!</span>\ntransaksi_vip_modern = [t * <span class=\"nm\">1.1</span> <span class=\"kw\">for</span> t <span class=\"kw\">in</span> transaksi <span class=\"kw\">if</span> t &gt;= <span class=\"nm\">50000</span>]\n\n<span class=\"fn\">print</span>(<span class=\"st\">\"Transaksi VIP Supriyanto (dengan cashback):\"</span>, transaksi_vip_modern)</div>\n\n      <div class=\"tip\">\n        <b>Pola List Comprehension:</b> <code class=\"inline\">[ekspresi_baru for item in koleksi if syarat]</code>. Pola ini jauh lebih cepat dieksekusi oleh interpreter Python dibandingkan loop manual.\n      </div>\n    ",
    "quiz": {
     "q": "Apa keuntungan utama menulis List Comprehension dibandingkan perulangan for biasa di Python?",
     "opts": [
      "Sintaks lebih ringkas, mudah dibaca, dan dieksekusi lebih cepat di level C-Python",
      "Menghapus variabel dari RAM komputer",
      "Mengubah tipe data angka menjadi gambar",
      "Mematikan fungsi compiler"
     ],
     "ans": 0,
     "why": "List Comprehension menyediakan sintaks yang ringkas, mudah dipahami (pythonic), dan memiliki optimasi performa di level interpreter Python."
    }
   },
   {
    "id": "py-06",
    "num": "06",
    "title": "Fungsi, Args/Kwargs & Lambda",
    "level": "Menengah",
    "desc": "Membuat fungsi modular, parameter opsional, fleksibilitas arbitrary arguments, dan lambda.",
    "intro": "Fungsi adalah blok bangunan utama program modular. Python memiliki fitur *args dan **kwargs yang memungkinkan fungsi menerima jumlah argumen yang dinamis.",
    "body": "\n      <h4>🧑‍🍳 Analogi Resep Masakan & Pesanan Kustom</h4>\n      <p>Bayangkan Supriyanto membuka jasa konsultasi software:</p>\n      <ul>\n        <li><b>Positional Args:</b> Pesanan standar yang wajib diisi (Nama Klien).</li>\n        <li><b><code class=\"inline\">*args</code>:</b> Daftar fitur tambahan yang jumlahnya bebas (bisa pesan 2 fitur, 5 fitur, atau 10 fitur).</li>\n        <li><b><code class=\"inline\">**kwargs</code>:</b> Opsi kustom dengan label khusus (seperti <code class=\"inline\">garansi=\"1 tahun\"</code>, <code class=\"inline\">diskon=0.15</code>).</li>\n      </ul>\n\n      <h4>🛠️ Contoh Kode: Fungsi Fleksibel</h4>\n      <div class=\"code-block\"><span class=\"kw\">def</span> <span class=\"fn\">buat_penawaran_proyek</span>(nama_klien, *fitur, diskon=<span class=\"nm\">0.05</span>, **opsi_tambahan):\n    biaya_dasar = <span class=\"fn\">len</span>(fitur) * <span class=\"nm\">1500000</span>\n    total_biaya = biaya_dasar * (<span class=\"nm\">1</span> - diskon)\n    \n    <span class=\"kw\">return</span> {\n        <span class=\"st\">\"klien\"</span>: nama_klien,\n        <span class=\"st\">\"total_fitur\"</span>: <span class=\"fn\">len</span>(fitur),\n        <span class=\"st\">\"daftar_fitur\"</span>: fitur,\n        <span class=\"st\">\"biaya_akhir\"</span>: total_biaya,\n        <span class=\"st\">\"opsi_kustom\"</span>: opsi_tambahan\n    }\n\n<span class=\"cm\"># Memanggil fungsi dengan fleksibel</span>\nhasil = buat_penawaran_proyek(\n    <span class=\"st\">\"Supriyanto\"</span>,\n    <span class=\"st\">\"Autentikasi\"</span>, <span class=\"st\">\"Dashboard Analitik\"</span>, <span class=\"st\">\"Integrasi AI\"</span>,\n    diskon=<span class=\"nm\">0.1</span>,\n    garansi_bulan=<span class=\"nm\">12</span>,\n    deploy_target=<span class=\"st\">\"Cloudflare\"</span>\n)\n\n<span class=\"fn\">print</span>(<span class=\"st\">\"Ringkasan Penawaran:\"</span>, hasil)\n\n<span class=\"cm\"># Fungsi Lambda Satu Baris</span>\nhitung_pajak = <span class=\"kw\">lambda</span> nominal: nominal * <span class=\"nm\">0.11</span>\n<span class=\"fn\">print</span>(<span class=\"st\">\"Pajak Rp1.000.000:\"</span>, hitung_pajak(<span class=\"nm\">1000000</span>))</div>\n    ",
    "quiz": {
     "q": "Apa perbedaan antara parameter *args dan **kwargs pada fungsi Python?",
     "opts": [
      "*args menerima argumen posisional sebagai Tuple, sedangkan **kwargs menerima argumen kata-kunci sebagai Dictionary",
      "*args hanya untuk string, **kwargs hanya untuk angka",
      "*args wajib diisi, **kwargs tidak boleh dipakai",
      "Tidak ada perbedaan sama sekali"
     ],
     "ans": 0,
     "why": "*args mengumpulkan argumen posisional tak terbatas ke dalam Tuple, sedangkan **kwargs mengumpulkan argumen bernama (key=value) ke dalam Dictionary."
    }
   },
   {
    "id": "py-07",
    "num": "07",
    "title": "Pemrograman Berorientasi Objek (OOP)",
    "level": "Lanjutan",
    "desc": "Membangun sistem modular dengan Class, Object, Constructor __init__, Encapsulation, dan Inheritance.",
    "intro": "OOP mengorganisir kode seperti di dunia nyata: menggabungkan data (atribut) dan perilaku (method) ke dalam satu kesatuan bernama Objek.",
    "body": "\n      <h4>🏛️ Analogi Cetak Biru Gedung & Bangunan Nyata</h4>\n      <p><b>Class</b> adalah cetak biru (blueprint) arsitektur di atas kertas. <b>Object / Instance</b> adalah gedung fisik nyata yang dibangun dari cetak biru tersebut. Dari 1 cetak biru <code class=\"inline\">Engineer</code>, kita bisa membuat banyak objek seperti profil <b>Supriyanto</b> dengan atribut dan kemampuannya masing-masing.</p>\n\n      <h4>🏗️ Contoh Kode: Inheritance &amp; Encapsulation</h4>\n      <div class=\"code-block\"><span class=\"kw\">class</span> <span class=\"fn\">Engineer</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, nama: str, level: str):\n        self.nama = nama\n        self.level = level\n        self._poin_reputasi = <span class=\"nm\">100</span> <span class=\"cm\"># Protected attribute</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">tambah_reputasi</span>(self, poin: int):\n        self._poin_reputasi += poin\n        <span class=\"fn\">print</span>(<span class=\"st\">f\"Reputasi {self.nama} naik menjadi {self._poin_reputasi} poin.\"</span>)\n\n    <span class=\"kw\">def</span> <span class=\"fn\">info_profil</span>(self) -&gt; str:\n        <span class=\"kw\">return</span> <span class=\"st\">f\"Engineer: {self.nama} | Level: {self.level}\"</span>\n\n<span class=\"cm\"># Inheritance (Pewarisan sifat dari class Engineer)</span>\n<span class=\"kw\">class</span> <span class=\"fn\">AIEngineer</span>(Engineer):\n    <span class=\"kw\">def</span> <span class=\"fn\">__init__</span>(self, nama: str, spesialisasi: str):\n        <span class=\"fn\">super</span>().<span class=\"fn\">__init__</span>(nama, level=<span class=\"st\">\"Lead AI Specialist\"</span>)\n        self.spesialisasi = spesialisasi\n\n    <span class=\"kw\">def</span> <span class=\"fn\">deploy_model</span>(self, nama_model: str):\n        <span class=\"kw\">return</span> <span class=\"st\">f\"🚀 {self.nama} sukses melakukan deploy model '{nama_model}' ke cloud!\"</span>\n\n<span class=\"cm\"># Membuat Object Supriyanto</span>\nsupriyanto = AIEngineer(<span class=\"st\">\"Supriyanto\"</span>, spesialisasi=<span class=\"st\">\"Large Language Models\"</span>)\n<span class=\"fn\">print</span>(supriyanto.info_profil())\nsupriyanto.tambah_reputasi(<span class=\"nm\">50</span>)\n<span class=\"fn\">print</span>(supriyanto.deploy_model(<span class=\"st\">\"Neural-Classifier-v2\"</span>))</div>\n    ",
    "quiz": {
     "q": "Apa fungsi method khusus '__init__' pada sebuah class di Python?",
     "opts": [
      "Sebagai konstruktor yang otomatis dijalankan saat objek baru pertama kali dibuat",
      "Untuk menghapus class dari memori",
      "Untuk mencetak teks ke printer",
      "Untuk mengubah nama file Python"
     ],
     "ans": 0,
     "why": "__init__ adalah method konstruktor inisialisasi yang dipanggil secara otomatis ketika suatu instance class baru diinstansiasi."
    }
   },
   {
    "id": "py-08",
    "num": "08",
    "title": "Error Handling (try-except) & File I/O",
    "level": "Lanjutan",
    "desc": "Menangani kesalahan program secara elegan dan manipulasi file JSON/CSV dengan Context Manager.",
    "intro": "Aplikasi profesional tidak boleh crash tiba-tiba saat terjadi error. Blok try-except dan context manager 'with' menjamin keamanan program dan penanganan berkas data.",
    "body": "\n      <h4>🎪 Analogi Jaring Pengaman Sirkus Akrobat</h4>\n      <p>Pemain akrobat sirkus selalu memasang <b>jaring pengaman di bawahnya (<code class=\"inline\">try-except</code>)</b>: jika pemain terpeleset (terjadi error seperti file tidak ditemukan atau koneksi putus), pertunjukan tidak berhenti total — sang akrobat mendarat dengan selamat di jaring pengaman dan program tetap berjalan lancar.</p>\n\n      <h4>📁 Membaca &amp; Menulis File JSON dengan Aman</h4>\n      <div class=\"code-block\"><span class=\"kw\">import</span> json\n\ndata_portofolio = {\n    <span class=\"st\">\"klien\"</span>: <span class=\"st\">\"Supriyanto\"</span>,\n    <span class=\"st\">\"proyek_selesai\"</span>: [<span class=\"st\">\"Web RB Learning\"</span>, <span class=\"st\">\"AI Engine\"</span>, <span class=\"st\">\"Bot Automation\"</span>],\n    <span class=\"st\">\"skor_rata_rata\"</span>: <span class=\"nm\">97.8</span>,\n    <span class=\"st\">\"status\"</span>: <span class=\"st\">\"Verified\"</span>\n}\n\nnama_file = <span class=\"st\">\"data_supriyanto.json\"</span>\n\n<span class=\"cm\"># 1. Menulis file dengan Context Manager (with open)</span>\n<span class=\"kw\">try</span>:\n    <span class=\"kw\">with</span> <span class=\"fn\">open</span>(nama_file, <span class=\"st\">\"w\"</span>, encoding=<span class=\"st\">\"utf-8\"</span>) <span class=\"kw\">as</span> f:\n        json.dump(data_portofolio, f, indent=<span class=\"nm\">2</span>)\n    <span class=\"fn\">print</span>(<span class=\"st\">f\"✅ Berhasil menyimpan {nama_file}\"</span>)\n<span class=\"kw\">except</span> IOError <span class=\"kw\">as</span> err:\n    <span class=\"fn\">print</span>(<span class=\"st\">f\"❌ Gagal menulis file: {err}\"</span>)\n\n<span class=\"cm\"># 2. Membaca kembali file secara aman</span>\n<span class=\"kw\">try</span>:\n    <span class=\"kw\">with</span> <span class=\"fn\">open</span>(nama_file, <span class=\"st\">\"r\"</span>, encoding=<span class=\"st\">\"utf-8\"</span>) <span class=\"kw\">as</span> f:\n        data_baca = json.load(f)\n    <span class=\"fn\">print</span>(<span class=\"st\">f\"📂 Data terbaca untuk: {data_baca['klien']} (Total Proyek: {len(data_baca['proyek_selesai'])})\"</span>)\n<span class=\"kw\">except</span> FileNotFoundError:\n    <span class=\"fn\">print</span>(<span class=\"st\">\"⚠️ File tidak ditemukan!\"</span>)</div>\n    ",
    "quiz": {
     "q": "Mengapa disarankan menggunakan 'with open(...)' saat membaca atau menulis file di Python?",
     "opts": [
      "Karena otomatis menutup file secara aman setelah selesai, bahkan jika terjadi error di tengah proses",
      "Karena membuat ukuran file menjadi 0 byte",
      "Hanya berlaku untuk file berformat MP3",
      "Wajib digunakan agar komputer tidak restart"
     ],
     "ans": 0,
     "why": "Pernyataan 'with' bertindak sebagai context manager yang menjamin penutupan file secara otomatis (resource cleanup) sehingga tidak terjadi kebocoran memori."
    }
   },
   {
    "id": "py-09",
    "num": "09",
    "title": "Fondasi Data Science: NumPy & Pandas",
    "level": "Mahir",
    "desc": "Manipulasi data skala besar dengan Array multi-dimensi NumPy dan DataFrame Pandas.",
    "intro": "NumPy dan Pandas adalah fondasi seluruh revolusi Data Science dan AI modern. Keduanya menyediakan komputasi vektor berkecepatan native C di balik antarmuka Python yang ramah.",
    "body": "\n      <h4>📊 Analogi Excel Bertenaga Mesin Jet</h4>\n      <p>Jika aplikasi spreadsheet Excel tradisional mulai macet saat membuka 100.000 baris data, maka <b>Pandas &amp; NumPy seperti spreadsheet bertenaga mesin jet</b>: mampu memfilter, menggabungkan (<i>merge</i>), dan menghitung statistik dari jutaan baris data dalam hitungan milidetik.</p>\n\n      <h4>🧮 Contoh Analisis Data Penjualan Supriyanto</h4>\n      <div class=\"code-block\"><span class=\"kw\">import</span> numpy <span class=\"kw\">as</span> np\n<span class=\"kw\">import</span> pandas <span class=\"kw\">as</span> pd\n\n<span class=\"cm\"># 1. Komputasi Vektor dengan NumPy</span>\nskor_mentah = np.array([<span class=\"nm\">75.0</span>, <span class=\"nm\">82.5</span>, <span class=\"nm\">90.0</span>, <span class=\"nm\">95.5</span>, <span class=\"nm\">88.0</span>])\nskor_ternormalisasi = (skor_mentah - np.mean(skor_mentah)) / np.std(skor_mentah)\n<span class=\"fn\">print</span>(<span class=\"st\">\"Rata-rata NumPy:\"</span>, np.mean(skor_mentah))\n\n<span class=\"cm\"># 2. Analisis Tabel Data dengan Pandas DataFrame</span>\ndata_bisnis = {\n    <span class=\"st\">\"Bulan\"</span>: [<span class=\"st\">\"Januari\"</span>, <span class=\"st\">\"Februari\"</span>, <span class=\"st\">\"Maret\"</span>, <span class=\"st\">\"April\"</span>, <span class=\"st\">\"Mei\"</span>],\n    <span class=\"st\">\"Klien_Aktif\"</span>: [<span class=\"nm\">12</span>, <span class=\"nm\">18</span>, <span class=\"nm\">25</span>, <span class=\"nm\">32</span>, <span class=\"nm\">45</span>],\n    <span class=\"st\">\"Pendapatan_Juta\"</span>: [<span class=\"nm\">45.0</span>, <span class=\"nm\">68.5</span>, <span class=\"nm\">95.0</span>, <span class=\"nm\">124.0</span>, <span class=\"nm\">180.5</span>]\n}\n\ndf = pd.DataFrame(data_bisnis)\n<span class=\"cm\"># Menghitung metrik baru secara instan (Vectorized Calculation)</span>\ndf[<span class=\"st\">\"Rata_Per_Klien\"</span>] = df[<span class=\"st\">\"Pendapatan_Juta\"</span>] / df[<span class=\"st\">\"Klien_Aktif\"</span>]\n\n<span class=\"fn\">print</span>(<span class=\"st\">\"=== LAPORAN PERTUMBUHAN BISNIS SUPRIYANTO ===\"</span>)\n<span class=\"fn\">print</span>(df)\n<span class=\"fn\">print</span>(<span class=\"st\">\"Total Pendapatan:\"</span>, df[<span class=\"st\">\"Pendapatan_Juta\"</span>].sum(), <span class=\"st\">\"Juta Rupiah\"</span>)</div>\n    ",
    "quiz": {
     "q": "Struktur data dua dimensi berbentuk tabel baris-dan-kolom utama di library Pandas disebut apa?",
     "opts": [
      "DataFrame",
      "Series",
      "Tensor",
      "Matrix2D"
     ],
     "ans": 0,
     "why": "DataFrame adalah struktur data 2 dimensi utama di Pandas yang menyerupai tabel relasional dengan label baris dan kolom."
    }
   },
   {
    "id": "py-10",
    "num": "10",
    "title": "Fondasi AI & Machine Learning (Scikit-Learn)",
    "level": "Mahir",
    "desc": "Membangun model kecerdasan buatan untuk klasifikasi dan prediksi data nyata.",
    "intro": "Machine Learning memungkinkan komputer mempelajari pola dari data masa lalu tanpa diprogram aturan logika manual satu per satu.",
    "body": "\n      <h4>🤖 Analogi Mengajari Anak Mengenali Gambar</h4>\n      <p>Dalam <b>Machine Learning</b>, sistem bekerja dengan cara yang sangat mirip: daripada menulis 1.000 aturan manual untuk membedakan apel dan jeruk, kita cukup memperlihatkan <b>1.000 contoh gambar apel dan jeruk yang sudah diberi label (<i>Training Data</i>)</b>. Komputer akan mempelajari sendiri pola fitur untuk memprediksi data baru secara akurat.</p>\n\n      <h4>🧠 Membuat Model Prediksi Kelulusan AI</h4>\n      <div class=\"code-block\"><span class=\"kw\">from</span> sklearn.tree <span class=\"kw\">import</span> DecisionTreeClassifier\n<span class=\"kw\">import</span> numpy <span class=\"kw\">as</span> np\n\n<span class=\"cm\"># Fitur: [Jam Belajar per Minggu, Skor Latihan Quiz]</span>\n<span class=\"cm\"># Target: [0 = Perlu Bimbingan, 1 = Lulus Sertifikasi AI]</span>\nX_train = np.array([\n    [<span class=\"nm\">2.0</span>, <span class=\"nm\">45</span>],\n    [<span class=\"nm\">4.5</span>, <span class=\"nm\">60</span>],\n    [<span class=\"nm\">8.0</span>, <span class=\"nm\">85</span>],\n    [<span class=\"nm\">12.0</span>, <span class=\"nm\">92</span>],\n    [<span class=\"nm\">10.0</span>, <span class=\"nm\">88</span>],\n    [<span class=\"nm\">3.0</span>, <span class=\"nm\">50</span>]\n])\ny_train = np.array([<span class=\"nm\">0</span>, <span class=\"nm\">0</span>, <span class=\"nm\">1</span>, <span class=\"nm\">1</span>, <span class=\"nm\">1</span>, <span class=\"nm\">0</span>])\n\n<span class=\"cm\"># 1. Inisialisasi dan Latih Model (Training)</span>\nmodel_ai = DecisionTreeClassifier()\nmodel_ai.fit(X_train, y_train)\n\n<span class=\"cm\"># 2. Prediksi Data Baru untuk Supriyanto [9.5 jam belajar, skor 90]</span>\ndata_supriyanto = np.array([[<span class=\"nm\">9.5</span>, <span class=\"nm\">90</span>]])\nprediksi = model_ai.predict(data_supriyanto)\nprobabilitas = model_ai.predict_proba(data_supriyanto)[<span class=\"nm\">0</span>][<span class=\"nm\">1</span>]\n\n<span class=\"fn\">print</span>(<span class=\"st\">\"=== PREDIKSI MODEL AI ===\"</span>)\n<span class=\"fn\">print</span>(<span class=\"st\">\"Kandidat:\"</span>, <span class=\"st\">\"Supriyanto\"</span>)\n<span class=\"fn\">print</span>(<span class=\"st\">f\"Probabilitas Lulus: {probabilitas * 100:.1f}%\"</span>)\n<span class=\"fn\">print</span>(<span class=\"st\">\"Hasil Keputusan:\"</span>, <span class=\"st\">\"LULUS SERTIFIKASI ✅\"</span> <span class=\"kw\">if</span> prediksi[<span class=\"nm\">0</span>] == <span class=\"nm\">1</span> <span class=\"kw\">else</span> <span class=\"st\">\"REMEDIAL ⚠️\"</span>)</div>\n    ",
    "quiz": {
     "q": "Apa fungsi method '.fit(X, y)' pada algoritma Machine Learning di Scikit-Learn?",
     "opts": [
      "Melatih model AI agar mempelajari pola hubungan antara data fitur (X) dan target (y)",
      "Mengunduh file dari internet",
      "Mengunci laptop agar tidak bisa dipakai",
      "Membuat grafik 3D di layar"
     ],
     "ans": 0,
     "why": "Method .fit() adalah proses training di mana model machine learning mengestimasi parameter internalnya berdasarkan data training X dan label y."
    }
   },
   {
    "id": "py-11",
    "num": "11",
    "title": "Backend & API Development (FastAPI)",
    "level": "Mahir",
    "desc": "Membangun REST API modern berkinerja tinggi dengan validasi tipe data Pydantic.",
    "intro": "FastAPI adalah framework web backend Python modern yang sangat cepat, otomatis menghasilkan dokumentasi Swagger interaktif, dan standar industri untuk menyajikan model AI.",
    "body": "\n      <h4>🍽️ Analogi Pelayan Restoran Digital</h4>\n      <p>Jika model AI atau database Anda adalah dapur koki, maka <b>FastAPI adalah pelayan restoran super gesit</b>: menerima pesanan dari aplikasi peramban web/HP (HTTP Request), memeriksa apakah formulir pesanan valid (<i>Pydantic Validation</i>), membawanya ke dapur, lalu mengantarkan makanan siap saji dalam format data <b>JSON</b>.</p>\n\n      <h4>⚡ Struktur REST API Lengkap dengan FastAPI</h4>\n      <div class=\"code-block\"><span class=\"kw\">from</span> fastapi <span class=\"kw\">import</span> FastAPI, HTTPException\n<span class=\"kw\">from</span> pydantic <span class=\"kw\">import</span> BaseModel\n\napp = FastAPI(title=<span class=\"st\">\"API Layanan RB Learning\"</span>, version=<span class=\"st\">\"1.0.0\"</span>)\n\n<span class=\"cm\"># Skema Validasi Data Input Pengguna</span>\n<span class=\"kw\">class</span> <span class=\"fn\">DataKlien</span>(BaseModel):\n    nama: str\n    skor_latihan: float\n    bidang: str\n\n<span class=\"cm\"># Endpoint GET: Sambutan API</span>\n<span class=\"dec\">@app.get</span>(<span class=\"st\">\"/\"</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">root</span>():\n    <span class=\"kw\">return</span> {<span class=\"st\">\"status\"</span>: <span class=\"st\">\"online\"</span>, <span class=\"st\">\"pesan\"</span>: <span class=\"st\">\"Selamat datang di API RB Learning\"</span>}\n\n<span class=\"cm\"># Endpoint POST: Evaluasi Kelayakan Klien</span>\n<span class=\"dec\">@app.post</span>(<span class=\"st\">\"/api/evaluasi\"</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">evaluasi_klien</span>(klien: DataKlien):\n    rekomendasi = <span class=\"st\">\"Disetujui\"</span> <span class=\"kw\">if</span> klien.skor_latihan &gt;= <span class=\"nm\">75.0</span> <span class=\"kw\">else</span> <span class=\"st\">\"Review\"</span>\n    <span class=\"kw\">return</span> {\n        <span class=\"st\">\"kandidat\"</span>: klien.nama,\n        <span class=\"st\">\"bidang\"</span>: klien.bidang,\n        <span class=\"st\">\"status\"</span>: rekomendasi,\n        <span class=\"st\">\"keterangan\"</span>: <span class=\"st\">f\"Evaluasi untuk {klien.nama} berhasil diproses oleh sistem AI.\"</span>\n    }</div>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-box-icon\">💡</span>\n        <div><b>Dokumentasi Otomatis:</b> Buka <code class=\"inline\">/docs</code> di browser saat server berjalan untuk mencoba semua endpoint secara interaktif melalui antarmuka Swagger UI.</div>\n      </div>\n    ",
    "quiz": {
     "q": "Fitur unggulan apa yang otomatis disediakan oleh FastAPI tanpa perlu coding tambahan?",
     "opts": [
      "Dokumentasi API interaktif berbasis Swagger UI di URL /docs dan validasi tipe data otomatis",
      "Otomatis membeli domain web gratis",
      "Otomatis mematikan server setiap malam",
      "Mengganti sistem operasi Windows menjadi Linux"
     ],
     "ans": 0,
     "why": "FastAPI secara otomatis menghasilkan dokumentasi interaktif Swagger UI (/docs) dan ReDoc (/redoc) berdasarkan type hints dan skema Pydantic."
    }
   },
   {
    "id": "py-12",
    "num": "12",
    "title": "Asynchronous Python & Otomasi (async/await)",
    "level": "Mahir",
    "desc": "Mengeksekusi ribuan tugas I/O non-blocking secara serentak dengan asyncio.",
    "intro": "Dalam komputasi modern, menunggu respons database atau API eksternal sering membuang waktu. Fitur async/await memungkinkan Python mengeksekusi tugas lain selagi menunggu.",
    "body": "\n      <h4>☕ Analogi Barista Multitasking di Kedai Kopi</h4>\n      <p>Bayangkan seorang barista di kedai kopi:</p>\n      <ul>\n        <li><b>Synchronous (Tradisional):</b> Barista menekan tombol mesin espresso lalu berdiri diam menatap cangkir selama 30 detik tanpa melakukan apa pun sampai kopi selesai menetes.</li>\n        <li><b>Asynchronous (<code class=\"inline\">async/await</code>):</b> Selagi mesin espresso bekerja meneteskan kopi (<code class=\"inline\">await</code>), barista langsung memanggang roti untuk pelanggan lain. Semua pesanan selesai 5x lebih cepat tanpa ada waktu terbuang!</li>\n      </ul>\n\n      <h4>⚡ Menjalankan Request Bersamaan dengan asyncio.gather</h4>\n      <div class=\"code-block\"><span class=\"kw\">import</span> asyncio\n\n<span class=\"kw\">async def</span> <span class=\"fn\">tarik_data_api</span>(sumber_data: str, jeda_detik: float):\n    <span class=\"fn\">print</span>(<span class=\"st\">f\"[Bot Supriyanto] Mulai fetch data dari {sumber_data}...\"</span>)\n    <span class=\"kw\">await</span> asyncio.sleep(jeda_detik) <span class=\"cm\"># Simulasi network delay non-blocking</span>\n    <span class=\"fn\">print</span>(<span class=\"st\">f\"[Bot Supriyanto] Selesai: {sumber_data} ({jeda_detik} detik)\"</span>)\n    <span class=\"kw\">return</span> {<span class=\"st\">\"sumber\"</span>: sumber_data, <span class=\"st\">\"status\"</span>: <span class=\"st\">\"200 OK\"</span>}\n\n<span class=\"kw\">async def</span> <span class=\"fn\">main</span>():\n    <span class=\"fn\">print</span>(<span class=\"st\">\"=== MEMULAI PENGAMBILAN DATA ASYNCHRONOUS ===\"</span>)\n    <span class=\"cm\"># Menjalankan 3 request paralel secara serentak</span>\n    hasil = <span class=\"kw\">await</span> asyncio.gather(\n        tarik_data_api(<span class=\"st\">\"Server Analytics Supriyanto\"</span>, <span class=\"nm\">2.0</span>),\n        tarik_data_api(<span class=\"st\">\"Gateway AI Model\"</span>, <span class=\"nm\">1.0</span>),\n        tarik_data_api(<span class=\"st\">\"Database Cloudflare\"</span>, <span class=\"nm\">1.5</span>)\n    )\n    <span class=\"fn\">print</span>(<span class=\"st\">\"Semua data berhasil dikumpulkan:\"</span>, hasil)\n\n<span class=\"cm\"># asyncio.run(main())</span></div>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-box-icon\">🏆</span>\n        <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh rangkaian materi Python dari tingkat Pemula hingga Expert. Uji kemampuan Anda dengan mengikuti <b>Quiz Python</b> pada menu navigasi!</div>\n      </div>\n    ",
    "quiz": {
     "q": "Apa fungsi fungsi 'asyncio.gather()' di Python?",
     "opts": [
      "Menjalankan beberapa coroutine asynchronous secara bersamaan (paralel) dan mengumpulkan seluruh hasilnya",
      "Menghapus seluruh file temporary di komputer",
      "Mengubah kode Python menjadi file HTML",
      "Mematikan koneksi WiFi"
     ],
     "ans": 0,
     "why": "asyncio.gather() menerima sekumpulan tugas asynchronous dan mengeksekusinya secara bersamaan (concurrently) hingga semuanya selesai."
    }
   }
  ]
 },
 {
  "id": "rn",
  "title": "React Native 📱",
  "subtitle": "Mobile Cross-Platform: JavaScript/TypeScript, Native Components, Expo, Navigasi & API",
  "accent": "cyan",
  "category": "it",
  "lessons": [
   {
    "id": "rn-01",
    "num": "01",
    "title": "Pengenalan React Native & Expo",
    "level": "Pemula",
    "intro": "React Native memungkinkan Supriyanto membuat aplikasi mobile Android dan iOS sungguhan dari satu basis kode JavaScript/TypeScript.",
    "body": "\n        <h4>📱 Analogi Satu Blueprint untuk Dua Tim Pembangun</h4>\n        <p>Bayangkan Supriyanto adalah seorang arsitek. Daripada menggambar dua denah terpisah dengan simbol yang berbeda untuk tukang bangunan Android dan tukang bangunan iOS, Supriyanto cukup membuat <b>satu denah blueprint standar (React)</b>. Kompiler React Native bertindak sebagai penerjemah yang secara otomatis memerintahkan Android membuat tombol native Android (Java/Kotlin) dan iOS membuat tombol native iOS (Swift/Objective-C).</p>\n        <p>Hasilnya bukan sekadar website yang dibungkus browser (bukan WebView), melainkan <b>komponen antarmuka native 100%</b> yang berjalan kencang di HP pengguna.</p>\n\n        <h4>⚡ Memulai dengan Expo Snack / CLI</h4>\n        <p><b>Expo</b> adalah ekosistem perkakas modern yang mempermudah pengembangan React Native tanpa perlu menginstal Android Studio atau Xcode di awal belajar.</p>\n        <div class=\"code-block\"><span class=\"cm\">// App.js - Aplikasi Pertama Supriyanto</span>\n<span class=\"kw\">import</span> React <span class=\"kw\">from</span> <span class=\"st\">'react'</span>;\n<span class=\"kw\">import</span> { StyleSheet, Text, View } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">App</span>() {\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">View</span> style={styles.container}&gt;\n      &lt;<span class=\"kw\">Text</span> style={styles.heading}&gt;Halo, Supriyanto! 👋&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;<span class=\"kw\">Text</span> style={styles.sub}&gt;Aplikasi React Native pertama siap dijalankan.&lt;/<span class=\"kw\">Text</span>&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n}\n\n<span class=\"kw\">const</span> styles = StyleSheet.<span class=\"fn\">create</span>({\n  container: {\n    flex: <span class=\"nm\">1</span>,\n    backgroundColor: <span class=\"st\">'#f8fafc'</span>,\n    alignItems: <span class=\"st\">'center'</span>,\n    justifyContent: <span class=\"st\">'center'</span>,\n  },\n  heading: {\n    fontSize: <span class=\"nm\">22</span>,\n    fontWeight: <span class=\"st\">'bold'</span>,\n    color: <span class=\"st\">'#0e7490'</span>,\n  },\n  sub: {\n    fontSize: <span class=\"nm\">14</span>,\n    color: <span class=\"st\">'#64748b'</span>,\n    marginTop: <span class=\"nm\">8</span>,\n  },\n});</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Kunci Pemahaman:</b> Berbeda dari web yang menggunakan tag HTML seperti <code>&lt;div&gt;</code> atau <code>&lt;h1&gt;</code>, di React Native kita menggunakan komponen bawaan seperti <code>&lt;View&gt;</code> dan <code>&lt;Text&gt;</code>.</div>\n        </div>\n      ",
    "quiz": {
     "q": "Mengapa React Native berbeda dari aplikasi hybrid berbasis WebView biasa?",
     "opts": [
      "Karena React Native menerjemahkan komponen menjadi elemen antarmuka native bawaan sistem operasi HP secara langsung",
      "Karena React Native hanya bisa berjalan di laptop, bukan di HP",
      "Karena React Native tidak menggunakan bahasa JavaScript sama sekali",
      "Karena React Native mewajibkan pengguna membayar lisensi bulanan ke Apple"
     ],
     "ans": 0,
     "why": "React Native berkomunikasi dengan platform native sehingga elemen seperti tombol dan teks dirender menggunakan komponen asli Android dan iOS, bukan halaman web dalam iframe/browser."
    }
   },
   {
    "id": "rn-02",
    "num": "02",
    "title": "Komponen Inti & Styling StyleSheet",
    "level": "Pemula",
    "intro": "Mengenal blok bangunan utama antarmuka: View, Text, Image, dan sistem tata rias StyleSheet.",
    "body": "\n        <h4>🧱 Analogi Balok Lego Antarmuka</h4>\n        <p>Membuat tampilan aplikasi mobile seperti menyusun balok lego:\n        <ul>\n          <li><b>&lt;View&gt;</b>: Balok kotak kosong sebagai wadah pembungkus (setara <code>&lt;div&gt;</code> di web).</li>\n          <li><b>&lt;Text&gt;</b>: Satu-satunya balok yang diizinkan memegang teks. Di React Native, Anda <i>tidak boleh</i> meletakkan huruf langsung di dalam <code>&lt;View&gt;</code> tanpa dibungkus <code>&lt;Text&gt;</code>.</li>\n          <li><b>&lt;Image&gt;</b>: Balok penampil foto/ikon (lokal maupun via URL internet).</li>\n          <li><b>StyleSheet.create</b>: Resep warna, ukuran, dan jarak antar balok lego tersebut.</li>\n        </ul>\n        </p>\n\n        <h4>🎨 Membuat Kartu Profil Pengguna</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> React <span class=\"kw\">from</span> <span class=\"st\">'react'</span>;\n<span class=\"kw\">import</span> { StyleSheet, View, Text, Image } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">ProfilSupriyanto</span>() {\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">View</span> style={styles.card}&gt;\n      &lt;<span class=\"kw\">Image</span>\n        source={{ uri: <span class=\"st\">'https://api.dicebear.com/7.x/bottts/svg?seed=Supriyanto'</span> }}\n        style={styles.avatar}\n      /&gt;\n      &lt;<span class=\"kw\">View</span> style={styles.info}&gt;\n        &lt;<span class=\"kw\">Text</span> style={styles.name}&gt;Supriyanto&lt;/<span class=\"kw\">Text</span>&gt;\n        &lt;<span class=\"kw\">Text</span> style={styles.role}&gt;Software Engineer Mobile&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;/<span class=\"kw\">View</span>&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n}\n\n<span class=\"kw\">const</span> styles = StyleSheet.<span class=\"fn\">create</span>({\n  card: {\n    flexDirection: <span class=\"st\">'row'</span>,\n    backgroundColor: <span class=\"st\">'#ffffff'</span>,\n    padding: <span class=\"nm\">16</span>,\n    borderRadius: <span class=\"nm\">12</span>,\n    shadowColor: <span class=\"st\">'#000'</span>,\n    shadowOpacity: <span class=\"nm\">0.1</span>,\n    elevation: <span class=\"nm\">3</span>, <span class=\"cm\">// Bayangan khusus Android</span>\n    alignItems: <span class=\"st\">'center'</span>,\n  },\n  avatar: { width: <span class=\"nm\">56</span>, height: <span class=\"nm\">56</span>, borderRadius: <span class=\"nm\">28</span> },\n  info: { marginLeft: <span class=\"nm\">14</span> },\n  name: { fontSize: <span class=\"nm\">18</span>, fontWeight: <span class=\"st\">'bold'</span>, color: <span class=\"st\">'#1e293b'</span> },\n  role: { fontSize: <span class=\"nm\">13</span>, color: <span class=\"st\">'#0891b2'</span>, marginTop: <span class=\"nm\">2</span> },\n});</div>\n      ",
    "quiz": {
     "q": "Apa yang terjadi jika Supriyanto menulis teks string langsung di dalam <View> tanpa membungkusnya dengan <Text>?",
     "opts": [
      "Aplikasi akan melempar error di layar HP karena React Native mewajibkan semua teks berada di dalam <Text>",
      "Teks otomatis berubah warna menjadi merah",
      "Teks otomatis diunggah ke Google Drive",
      "Tidak ada error dan teks muncul secara normal"
     ],
     "ans": 0,
     "why": "Di React Native, mesin rendering native Android/iOS memerlukan komponen TextView/UILabel khusus, sehingga teks wajib diletakkan di dalam tag <Text>."
    }
   },
   {
    "id": "rn-03",
    "num": "03",
    "title": "Layouting Flexbox Mobile",
    "level": "Pemula",
    "intro": "Mengatur tata letak responsif di berbagai resolusi layar HP dengan Flexbox.",
    "body": "\n        <h4>🧳 Analogi Menata Koper Kabin Pesawat</h4>\n        <p>Layar smartphone hadir dalam ratusan ukuran berbeda. Flexbox bekerja seperti pembatas kompartemen di dalam koper:\n        <ul>\n          <li><b>flexDirection: 'column' (Default di React Native!)</b>: Menyusun barang dari atas ke bawah (berbeda dari web yang defaultnya mendatar <code>row</code>).</li>\n          <li><b>justifyContent</b>: Mengatur jarak searah garis utama (misal: atas-bawah jika column, kiri-kanan jika row).</li>\n          <li><b>alignItems</b>: Mengatur perataan menyilang (misal: rata tengah kiri-kanan jika column).</li>\n          <li><b>flex: 1</b>: Memerintahkan wadah untuk membesar dan memenuhi seluruh ruang kosong yang tersisa di layar.</li>\n        </ul>\n        </p>\n\n        <h4>📐 Contoh Dashboard Responsif Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> { View, StyleSheet } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">DashboardLayout</span>() {\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">View</span> style={styles.screen}&gt;\n      &lt;<span class=\"kw\">View</span> style={styles.header} /&gt;\n      &lt;<span class=\"kw\">View</span> style={styles.content}&gt;\n        &lt;<span class=\"kw\">View</span> style={styles.card} /&gt;\n        &lt;<span class=\"kw\">View</span> style={styles.card} /&gt;\n      &lt;/<span class=\"kw\">View</span>&gt;\n      &lt;<span class=\"kw\">View</span> style={styles.bottomNav} /&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n}\n\n<span class=\"kw\">const</span> styles = StyleSheet.<span class=\"fn\">create</span>({\n  screen: { flex: <span class=\"nm\">1</span>, backgroundColor: <span class=\"st\">'#f1f5f9'</span> },\n  header: { height: <span class=\"nm\">70</span>, backgroundColor: <span class=\"st\">'#0891b2'</span> },\n  content: {\n    flex: <span class=\"nm\">1</span>, <span class=\"cm\">// Mengisi seluruh sisa layar di tengah</span>\n    flexDirection: <span class=\"st\">'row'</span>,\n    justifyContent: <span class=\"st\">'space-around'</span>,\n    padding: <span class=\"nm\">16</span>,\n  },\n  card: { flex: <span class=\"nm\">0.45</span>, backgroundColor: <span class=\"st\">'#ffffff'</span>, borderRadius: <span class=\"nm\">8</span> },\n  bottomNav: { height: <span class=\"nm\">60</span>, backgroundColor: <span class=\"st\">'#ffffff'</span> },\n});</div>\n      ",
    "quiz": {
     "q": "Apa perbedaan arah default 'flexDirection' antara browser web CSS biasa dan React Native?",
     "opts": [
      "Web CSS default-nya adalah 'row' (horizontal), sedangkan React Native default-nya adalah 'column' (vertikal)",
      "Web CSS default-nya adalah 'column', sedangkan React Native default-nya adalah 'row'",
      "Kedua platform sama-sama menggunakan 'grid' sebagai default",
      "React Native tidak memiliki fitur Flexbox"
     ],
     "ans": 0,
     "why": "Karena layar smartphone berorientasi tegak (portrait), React Native menetapkan default flexDirection ke 'column' agar elemen otomatis tersusun ke bawah."
    }
   },
   {
    "id": "rn-04",
    "num": "04",
    "title": "State, Props & Interaksi Pengguna",
    "level": "Menengah",
    "intro": "Menghidupkan aplikasi dengan sentuhan jari menggunakan useState dan komponen Pressable.",
    "body": "\n        <h4>🔘 Analogi Saklar Lampu & Memori Otak</h4>\n        <p>Sebuah aplikasi mobile interaktif membutuhkan dua hal:\n        <ol>\n          <li><b>State (useState)</b>: Memori internal aplikasi yang mengingat status terkini (misalnya jumlah keranjang belanja Supriyanto). Ketika nilai memori berubah, tampilan HP langsung diperbarui otomatis (*re-render*).</li>\n          <li><b>Pressable</b>: Komponen penerima sentuhan jari yang fleksibel. Bisa mendeteksi kapan jari menempel, berapa lama ditekan (*long press*), dan kapan dilepas.</li>\n        </ol>\n        </p>\n\n        <h4>🛒 Counter Keranjang Belanja Toko Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> React, { useState } <span class=\"kw\">from</span> <span class=\"st\">'react'</span>;\n<span class=\"kw\">import</span> { StyleSheet, View, Text, Pressable } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">CounterBelanja</span>() {\n  <span class=\"kw\">const</span> [jumlah, setJumlah] = <span class=\"fn\">useState</span>(<span class=\"nm\">1</span>);\n\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">View</span> style={styles.box}&gt;\n      &lt;<span class=\"kw\">Text</span> style={styles.title}&gt;Pesanan Supriyanto: {jumlah} item&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;<span class=\"kw\">View</span> style={styles.btnRow}&gt;\n        &lt;<span class=\"kw\">Pressable</span>\n          onPress={() =&gt; <span class=\"fn\">setJumlah</span>(j =&gt; Math.<span class=\"fn\">max</span>(<span class=\"nm\">1</span>, j - <span class=\"nm\">1</span>))}\n          style={({ pressed }) =&gt; [styles.btn, pressed && styles.btnActive]}&gt;\n          &lt;<span class=\"kw\">Text</span> style={styles.btnText}&gt;- Kurang&lt;/<span class=\"kw\">Text</span>&gt;\n        &lt;/<span class=\"kw\">Pressable</span>&gt;\n\n        &lt;<span class=\"kw\">Pressable</span>\n          onPress={() =&gt; <span class=\"fn\">setJumlah</span>(j =&gt; j + <span class=\"nm\">1</span>)}\n          style={({ pressed }) =&gt; [styles.btn, styles.btnPrimary, pressed && styles.btnActive]}&gt;\n          &lt;<span class=\"kw\">Text</span> style={[styles.btnText, { color: <span class=\"st\">'#fff'</span> }]}&gt;+ Tambah&lt;/<span class=\"kw\">Text</span>&gt;\n        &lt;/<span class=\"kw\">Pressable</span>&gt;\n      &lt;/<span class=\"kw\">View</span>&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n}\n\n<span class=\"kw\">const</span> styles = StyleSheet.<span class=\"fn\">create</span>({\n  box: { padding: <span class=\"nm\">20</span>, alignItems: <span class=\"st\">'center'</span> },\n  title: { fontSize: <span class=\"nm\">18</span>, fontWeight: <span class=\"st\">'600'</span>, marginBottom: <span class=\"nm\">12</span> },\n  btnRow: { flexDirection: <span class=\"st\">'row'</span>, gap: <span class=\"nm\">12</span> },\n  btn: { paddingVertical: <span class=\"nm\">10</span>, paddingHorizontal: <span class=\"nm\">18</span>, borderRadius: <span class=\"nm\">8</span>, backgroundColor: <span class=\"st\">'#e2e8f0'</span> },\n  btnPrimary: { backgroundColor: <span class=\"st\">'#0891b2'</span> },\n  btnActive: { opacity: <span class=\"nm\">0.7</span>, transform: [{ scale: <span class=\"nm\">0.97</span> }] },\n  btnText: { fontWeight: <span class=\"st\">'bold'</span>, color: <span class=\"st\">'#1e293b'</span> },\n});</div>\n      ",
    "quiz": {
     "q": "Mengapa komponen <Pressable> lebih dianjurkan daripada tombol HTML <button> di React Native?",
     "opts": [
      "Karena di ekosistem mobile tidak ada tag HTML <button>, dan <Pressable> memberikan kontrol interaksi sentuhan yang akurat dan performan",
      "Karena <Pressable> otomatis mengirim pesan WhatsApp ke developer",
      "Karena <button> hanya bisa diklik satu kali seumur hidup",
      "Karena <Pressable> hanya bisa dipakai di perangkat laptop"
     ],
     "ans": 0,
     "why": "React Native tidak merender DOM web melainkan native views, dan <Pressable> adalah komponen standar yang menangani gestur sentuhan (pressed state, delay, long press) dengan lancar."
    }
   },
   {
    "id": "rn-05",
    "num": "05",
    "title": "List Rendering: FlatList vs ScrollView",
    "level": "Menengah",
    "intro": "Menampilkan ribuan item daftar tanpa membebani memori RAM dan mencegah aplikasi crash.",
    "body": "\n        <h4>🏬 Analogi Etalase Berputar vs Seluruh Isi Gudang</h4>\n        <p>Jika toko Supriyanto memiliki 10.000 barang:\n        <ul>\n          <li><b>ScrollView</b>: Membuka semua 10.000 barang sekaligus di atas meja. Layar HP langsung panas, memori RAM jebol, dan aplikasi macet total!</li>\n          <li><b>FlatList</b>: Menggunakan etalase berjalan (*Virtualization*). Hanya 10 barang yang sedang dipandang mata yang dirender ke memori HP. Saat pengguna menggulir ke bawah, barang lama dibersihkan dari RAM dan barang baru dimuat seketika.</li>\n        </ul>\n        </p>\n\n        <h4>📜 Implementasi FlatList Transaksi Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> React <span class=\"kw\">from</span> <span class=\"st\">'react'</span>;\n<span class=\"kw\">import</span> { FlatList, View, Text, StyleSheet } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n\n<span class=\"kw\">const</span> DATA_TRANSAKSI = [\n  { id: <span class=\"st\">'t-1'</span>, nama: <span class=\"st\">'Supriyanto'</span>, nominal: <span class=\"st\">'Rp 250.000'</span>, status: <span class=\"st\">'Sukses'</span> },\n  { id: <span class=\"st\">'t-2'</span>, nama: <span class=\"st\">'Klien Alpha'</span>, nominal: <span class=\"st\">'Rp 1.400.000'</span>, status: <span class=\"st\">'Sukses'</span> },\n  { id: <span class=\"st\">'t-3'</span>, nama: <span class=\"st\">'Klien Beta'</span>, nominal: <span class=\"st\">'Rp 750.000'</span>, status: <span class=\"st\">'Pending'</span> },\n];\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">DaftarTransaksi</span>() {\n  <span class=\"kw\">const</span> <span class=\"fn\">renderItem</span> = ({ item }) =&gt; (\n    &lt;<span class=\"kw\">View</span> style={styles.itemRow}&gt;\n      &lt;<span class=\"kw\">View</span>&gt;\n        &lt;<span class=\"kw\">Text</span> style={styles.itemNama}&gt;{item.nama}&lt;/<span class=\"kw\">Text</span>&gt;\n        &lt;<span class=\"kw\">Text</span> style={styles.itemNominal}&gt;{item.nominal}&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;/<span class=\"kw\">View</span>&gt;\n      &lt;<span class=\"kw\">Text</span> style={[styles.badge, item.status === <span class=\"st\">'Sukses'</span> ? styles.ok : styles.wait]}&gt;\n        {item.status}\n      &lt;/<span class=\"kw\">Text</span>&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">FlatList</span>\n      data={DATA_TRANSAKSI}\n      renderItem={renderItem}\n      keyExtractor={item =&gt; item.id}\n      ItemSeparatorComponent={() =&gt; &lt;<span class=\"kw\">View</span> style={styles.sep} /&gt;}\n      contentContainerStyle={{ padding: <span class=\"nm\">16</span> }}\n    /&gt;\n  );\n}\n\n<span class=\"kw\">const</span> styles = StyleSheet.<span class=\"fn\">create</span>({\n  itemRow: { flexDirection: <span class=\"st\">'row'</span>, justifyContent: <span class=\"st\">'space-between'</span>, alignItems: <span class=\"st\">'center'</span>, paddingVertical: <span class=\"nm\">12</span> },\n  itemNama: { fontSize: <span class=\"nm\">15</span>, fontWeight: <span class=\"st\">'600'</span> },\n  itemNominal: { fontSize: <span class=\"nm\">13</span>, color: <span class=\"st\">'#64748b'</span>, marginTop: <span class=\"nm\">2</span> },\n  badge: { fontSize: <span class=\"nm\">12</span>, paddingHorizontal: <span class=\"nm\">8</span>, paddingVertical: <span class=\"nm\">4</span>, borderRadius: <span class=\"nm\">6</span>, fontWeight: <span class=\"st\">'bold'</span> },\n  ok: { backgroundColor: <span class=\"st\">'#dcfce7'</span>, color: <span class=\"st\">'#15803d'</span> },\n  wait: { backgroundColor: <span class=\"st\">'#fef9c3'</span>, color: <span class=\"st\">'#a16207'</span> },\n  sep: { height: <span class=\"nm\">1</span>, backgroundColor: <span class=\"st\">'#e2e8f0'</span> },\n});</div>\n      ",
    "quiz": {
     "q": "Mengapa kita wajib menggunakan FlatList daripada ScrollView saat menampilkan daftar 5.000 item?",
     "opts": [
      "Karena FlatList hanya me-render elemen yang sedang terlihat di layar (windowing), menghemat RAM dan menjaga aplikasi tetap lancar 60 FPS",
      "Karena FlatList otomatis mengubah tulisan menjadi suara",
      "Karena ScrollView tidak bisa diberi warna background",
      "Karena FlatList secara otomatis menghapus database setiap 5 menit"
     ],
     "ans": 0,
     "why": "FlatList menggunakan teknik windowing/virtualization sehingga hanya item di viewport yang dibuat, mencegah aplikasi kehabisan memori dan lagging."
    }
   },
   {
    "id": "rn-06",
    "num": "06",
    "title": "Navigasi Layar: React Navigation",
    "level": "Menengah",
    "intro": "Menghubungkan banyak layar dengan Stack Navigation dan Tab Bar mobile.",
    "body": "\n        <h4>🃏 Analogi Tumpukan Kartu Remi (Stack)</h4>\n        <p>Di mobile, berpindah halaman bukan seperti membuka URL web baru, melainkan menumpuk kartu di atas meja:\n        <ul>\n          <li><b>Push / Navigate</b>: Menaruh kartu layar baru di tumpukan paling atas (misalnya dari Home ke Detail).</li>\n          <li><b>Pop / GoBack</b>: Mengambil kembali kartu teratas untuk kembali melihat kartu di bawahnya (tombol Back di pojok kiri atas).</li>\n          <li><b>Bottom Tabs</b>: Panel tombol di bagian bawah layar seperti lift utama gedung (Beranda, Pesanan, Profil).</li>\n        </ul>\n        </p>\n\n        <h4>🧭 Struktur Stack Navigator dengan Parameter</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> { NavigationContainer } <span class=\"kw\">from</span> <span class=\"st\">'@react-navigation/native'</span>;\n<span class=\"kw\">import</span> { createNativeStackNavigator } <span class=\"kw\">from</span> <span class=\"st\">'@react-navigation/native-stack'</span>;\n<span class=\"kw\">import</span> { View, Text, Button } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n\n<span class=\"kw\">const</span> Stack = <span class=\"fn\">createNativeStackNavigator</span>();\n\n<span class=\"kw\">function</span> <span class=\"fn\">HomeScreen</span>({ navigation }) {\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">View</span> style={{ flex: <span class=\"nm\">1</span>, alignItems: <span class=\"st\">'center'</span>, justifyContent: <span class=\"st\">'center'</span> }}&gt;\n      &lt;<span class=\"kw\">Text</span>&gt;Layar Utama&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;<span class=\"kw\">Button</span>\n        title=<span class=\"st\">\"Buka Profil Supriyanto\"</span>\n        onPress={() =&gt; navigation.<span class=\"fn\">navigate</span>(<span class=\"st\">'Detail'</span>, { nama: <span class=\"st\">'Supriyanto'</span>, id: <span class=\"nm\">101</span> })}\n      /&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n}\n\n<span class=\"kw\">function</span> <span class=\"fn\">DetailScreen</span>({ route, navigation }) {\n  <span class=\"kw\">const</span> { nama, id } = route.params;\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">View</span> style={{ flex: <span class=\"nm\">1</span>, alignItems: <span class=\"st\">'center'</span>, justifyContent: <span class=\"st\">'center'</span> }}&gt;\n      &lt;<span class=\"kw\">Text</span>&gt;Halo, {nama}! ID Pengguna: {id}&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;<span class=\"kw\">Button</span> title=<span class=\"st\">\"Kembali\"</span> onPress={() =&gt; navigation.<span class=\"fn\">goBack</span>()} /&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n}\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">AppNav</span>() {\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">NavigationContainer</span>&gt;\n      &lt;<span class=\"kw\">Stack.Navigator</span>&gt;\n        &lt;<span class=\"kw\">Stack.Screen</span> name=<span class=\"st\">\"Home\"</span> component={HomeScreen} /&gt;\n        &lt;<span class=\"kw\">Stack.Screen</span> name=<span class=\"st\">\"Detail\"</span> component={DetailScreen} /&gt;\n      &lt;/<span class=\"kw\">Stack.Navigator</span>&gt;\n    &lt;/<span class=\"kw\">NavigationContainer</span>&gt;\n  );\n}</div>\n      ",
    "quiz": {
     "q": "Dalam sistem React Navigation Stack, apa fungsi dari 'navigation.goBack()'?",
     "opts": [
      "Menutup layar teratas dan kembali menampilkan layar sebelumnya di bawah tumpukan",
      "Menghapus seluruh memori aplikasi dan merestart HP",
      "Membuka browser Safari atau Google Chrome",
      "Mengirim email laporan ke tim developer"
     ],
     "ans": 0,
     "why": "navigation.goBack() membuang kartu layar saat ini (pop) dari tumpukan navigasi sehingga user kembali ke layar asal."
    }
   },
   {
    "id": "rn-07",
    "num": "07",
    "title": "Fetch Data API & State Loading/Error",
    "level": "Lanjutan",
    "intro": "Menghubungkan aplikasi mobile ke REST API backend dengan penanganan loading indicator dan error.",
    "body": "\n        <h4>📦 Analogi Kurir Pengantar Paket Online</h4>\n        <p>Ketika Supriyanto menekan tombol refresh data:\n        <ol>\n          <li><b>Status Menunggu (Loading)</b>: Kurir sedang di jalan. Tampilkan roda berputar (<code>&lt;ActivityIndicator&gt;</code>) agar pengguna tahu HP sedang memproses data.</li>\n          <li><b>Status Sukses (Success)</b>: Paket tiba dengan selamat. Simpan data JSON ke dalam state dan tampilkan di layar.</li>\n          <li><b>Status Gagal (Error)</b>: Koneksi internet putus atau server mati. Tampilkan pesan ramah dengan tombol \"Coba Lagi\".</li>\n        </ol>\n        </p>\n\n        <h4>🌐 Fetch Data Produk Toko Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> React, { useState, useEffect } <span class=\"kw\">from</span> <span class=\"st\">'react'</span>;\n<span class=\"kw\">import</span> { View, Text, ActivityIndicator, Button, StyleSheet } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">ProdukScreen</span>() {\n  <span class=\"kw\">const</span> [produk, setProduk] = <span class=\"fn\">useState</span>(<span class=\"kw\">null</span>);\n  <span class=\"kw\">const</span> [loading, setLoading] = <span class=\"fn\">useState</span>(<span class=\"kw\">true</span>);\n  <span class=\"kw\">const</span> [error, setError] = <span class=\"fn\">useState</span>(<span class=\"st\">''</span>);\n\n  <span class=\"kw\">const</span> <span class=\"fn\">loadData</span> = <span class=\"kw\">async</span> () =&gt; {\n    <span class=\"fn\">setLoading</span>(<span class=\"kw\">true</span>);\n    <span class=\"fn\">setError</span>(<span class=\"st\">''</span>);\n    <span class=\"kw\">try</span> {\n      <span class=\"kw\">const</span> res = <span class=\"kw\">await</span> <span class=\"fn\">fetch</span>(<span class=\"st\">'https://api.example.com/produk/supriyanto'</span>);\n      <span class=\"kw\">if</span> (!res.ok) <span class=\"kw\">throw new</span> <span class=\"fn\">Error</span>(<span class=\"st\">'Gagal memuat katalog'</span>);\n      <span class=\"kw\">const</span> data = <span class=\"kw\">await</span> res.<span class=\"fn\">json</span>();\n      <span class=\"fn\">setProduk</span>(data);\n    } <span class=\"kw\">catch</span> (err) {\n      <span class=\"fn\">setError</span>(err.message);\n    } <span class=\"kw\">finally</span> {\n      <span class=\"fn\">setLoading</span>(<span class=\"kw\">false</span>);\n    }\n  };\n\n  <span class=\"fn\">useEffect</span>(() =&gt; { <span class=\"fn\">loadData</span>(); }, []);\n\n  <span class=\"kw\">if</span> (loading) {\n    <span class=\"kw\">return</span> (\n      &lt;<span class=\"kw\">View</span> style={styles.center}&gt;\n        &lt;<span class=\"kw\">ActivityIndicator</span> size=<span class=\"st\">\"large\"</span> color=<span class=\"st\">\"#0891b2\"</span> /&gt;\n        &lt;<span class=\"kw\">Text</span> style={{ marginTop: <span class=\"nm\">8</span> }}&gt;Memuat data Supriyanto...&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;/<span class=\"kw\">View</span>&gt;\n    );\n  }\n\n  <span class=\"kw\">if</span> (error) {\n    <span class=\"kw\">return</span> (\n      &lt;<span class=\"kw\">View</span> style={styles.center}&gt;\n        &lt;<span class=\"kw\">Text</span> style={{ color: <span class=\"st\">'#dc2626'</span>, marginBottom: <span class=\"nm\">10</span> }}&gt;Terjadi kesalahan: {error}&lt;/<span class=\"kw\">Text</span>&gt;\n        &lt;<span class=\"kw\">Button</span> title=<span class=\"st\">\"Coba Lagi\"</span> onPress={loadData} /&gt;\n      &lt;/<span class=\"kw\">View</span>&gt;\n    );\n  }\n\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">View</span> style={styles.box}&gt;\n      &lt;<span class=\"kw\">Text</span> style={styles.title}&gt;{produk?.nama}&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;<span class=\"kw\">Text</span>&gt;Harga: {produk?.harga}&lt;/<span class=\"kw\">Text</span>&gt;\n    &lt;/<span class=\"kw\">View</span>&gt;\n  );\n}\n\n<span class=\"kw\">const</span> styles = StyleSheet.<span class=\"fn\">create</span>({\n  center: { flex: <span class=\"nm\">1</span>, justifyContent: <span class=\"st\">'center'</span>, alignItems: <span class=\"st\">'center'</span> },\n  box: { padding: <span class=\"nm\">20</span> },\n  title: { fontSize: <span class=\"nm\">20</span>, fontWeight: <span class=\"st\">'bold'</span> },\n});</div>\n      ",
    "quiz": {
     "q": "Komponen bawaan React Native apa yang digunakan untuk menampilkan animasi muter (spinner) saat proses fetch data?",
     "opts": [
      "<ActivityIndicator>",
      "<LoadingSpinnerDom>",
      "<ProgressBarHtml>",
      "<WaitRotateIcon>"
     ],
     "ans": 0,
     "why": "<ActivityIndicator> adalah komponen native resmi bawaan React Native untuk menampilkan status loading berputar di Android dan iOS."
    }
   },
   {
    "id": "rn-08",
    "num": "08",
    "title": "Fitur Hardware: AsyncStorage & Sensor",
    "level": "Lanjutan",
    "intro": "Menyimpan data persisten secara offline di HP dan mengakses fitur perangkat native.",
    "body": "\n        <h4>🔐 Analogi Brankas Mini & Satpam Izin HP</h4>\n        <p>Aplikasi mobile modern berinteraksi langsung dengan perangkat keras:\n        <ul>\n          <li><b>AsyncStorage</b>: Brankas mini di HP Supriyanto. Saat aplikasi ditutup atau HP direstart, data penting seperti token otentikasi login atau preferensi tema gelap tetap tersimpan aman.</li>\n          <li><b>Device Permissions</b>: Satpam sistem operasi. Sebelum aplikasi mengambil foto atau melacak lokasi GPS, aplikasi wajib meminta izin (*permission request*) kepada pemilik HP.</li>\n        </ul>\n        </p>\n\n        <h4>💾 Menyimpan & Membaca Sesi Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> AsyncStorage <span class=\"kw\">from</span> <span class=\"st\">'@react-native-async-storage/async-storage'</span>;\n\n<span class=\"cm\">// 1. Menyimpan data login</span>\n<span class=\"kw\">export async function</span> <span class=\"fn\">simpanSesi</span>(token, username) {\n  <span class=\"kw\">try</span> {\n    <span class=\"kw\">const</span> payload = JSON.<span class=\"fn\">stringify</span>({ token, username, loginAt: <span class=\"kw\">new</span> <span class=\"fn\">Date</span>() });\n    <span class=\"kw\">await</span> AsyncStorage.<span class=\"fn\">setItem</span>(<span class=\"st\">'user_session'</span>, payload);\n    <span class=\"fn\">console</span>.<span class=\"fn\">log</span>(<span class=\"st\">'Sesi Supriyanto berhasil disimpan di storage HP'</span>);\n  } <span class=\"kw\">catch</span> (e) {\n    <span class=\"fn\">console</span>.<span class=\"fn\">error</span>(<span class=\"st\">'Gagal menyimpan sesi'</span>, e);\n  }\n}\n\n<span class=\"cm\">// 2. Membaca data login saat aplikasi pertama dibuka</span>\n<span class=\"kw\">export async function</span> <span class=\"fn\">bacaSesi</span>() {\n  <span class=\"kw\">try</span> {\n    <span class=\"kw\">const</span> raw = <span class=\"kw\">await</span> AsyncStorage.<span class=\"fn\">getItem</span>(<span class=\"st\">'user_session'</span>);\n    <span class=\"kw\">return</span> raw ? JSON.<span class=\"fn\">parse</span>(raw) : <span class=\"kw\">null</span>;\n  } <span class=\"kw\">catch</span> (e) {\n    <span class=\"kw\">return null</span>;\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Kapan waktu yang paling tepat untuk menggunakan AsyncStorage di aplikasi mobile?",
     "opts": [
      "Untuk menyimpan data ringan seperti token otentikasi, preferensi tema, atau ID pengguna secara persisten",
      "Untuk menyimpan video berukuran 50 Gigabyte",
      "Untuk mempercepat koneksi internet WiFi 10x lipat",
      "Sebagai pengganti database PostgreSQL jutaan baris di server"
     ],
     "ans": 0,
     "why": "AsyncStorage dirancang untuk penyimpanan key-value asynchronous sederhana di memori lokal perangkat, ideal untuk token sesi atau pengaturan aplikasi."
    }
   },
   {
    "id": "rn-09",
    "num": "09",
    "title": "Animasi Halus 60 FPS: Reanimated",
    "level": "Mahir",
    "intro": "Menciptakan animasi interaktif bebas patah-patah dengan React Native Reanimated.",
    "body": "\n        <h4>⚡ Analogi Pintu Berpegas Mekanis</h4>\n        <p>Di React Native biasa, jika thread JavaScript sedang sibuk mengolah data berat, animasi sentuhan jari bisa tersendat-sendat (*lag/frame drop*).\n        <b>React Native Reanimated</b> memecahkan masalah ini dengan memindahkan seluruh instruksi animasi langsung ke <b>UI Thread Native</b> (seperti pegas mekanis pada pintu toko Supriyanto). Begitu jari menyentuh layar, pintu mengayun mulus 60 hingga 120 FPS tanpa menunggu giliran thread JavaScript!</p>\n\n        <h4>🎬 Animasi Tombol Mengambang (Floating Action Button)</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> React <span class=\"kw\">from</span> <span class=\"st\">'react'</span>;\n<span class=\"kw\">import</span> { StyleSheet, Pressable, Text } <span class=\"kw\">from</span> <span class=\"st\">'react-native'</span>;\n<span class=\"kw\">import</span> Animated, { useSharedValue, useAnimatedStyle, withSpring } <span class=\"kw\">from</span> <span class=\"st\">'react-native-reanimated'</span>;\n\n<span class=\"kw\">export default function</span> <span class=\"fn\">TombolAnimasiSupriyanto</span>() {\n  <span class=\"kw\">const</span> skala = <span class=\"fn\">useSharedValue</span>(<span class=\"nm\">1</span>);\n\n  <span class=\"kw\">const</span> animatedStyle = <span class=\"fn\">useAnimatedStyle</span>(() =&gt; ({\n    transform: [{ scale: skala.value }],\n  }));\n\n  <span class=\"kw\">const</span> <span class=\"fn\">tekanMulai</span> = () =&gt; { skala.value = <span class=\"fn\">withSpring</span>(<span class=\"nm\">0.92</span>); };\n  <span class=\"kw\">const</span> <span class=\"fn\">tekanSelesai</span> = () =&gt; { skala.value = <span class=\"fn\">withSpring</span>(<span class=\"nm\">1</span>); };\n\n  <span class=\"kw\">return</span> (\n    &lt;<span class=\"kw\">Pressable</span> onPressIn={tekanMulai} onPressOut={tekanSelesai}&gt;\n      &lt;<span class=\"kw\">Animated.View</span> style={[styles.fab, animatedStyle]}&gt;\n        &lt;<span class=\"kw\">Text</span> style={styles.fabText}&gt;+ Buat Pesanan&lt;/<span class=\"kw\">Text</span>&gt;\n      &lt;/<span class=\"kw\">Animated.View</span>&gt;\n    &lt;/<span class=\"kw\">Pressable</span>&gt;\n  );\n}\n\n<span class=\"kw\">const</span> styles = StyleSheet.<span class=\"fn\">create</span>({\n  fab: {\n    backgroundColor: <span class=\"st\">'#0891b2'</span>,\n    paddingVertical: <span class=\"nm\">14</span>,\n    paddingHorizontal: <span class=\"nm\">24</span>,\n    borderRadius: <span class=\"nm\">30</span>,\n    alignItems: <span class=\"st\">'center'</span>,\n    elevation: <span class=\"nm\">5</span>,\n  },\n  fabText: { color: <span class=\"st\">'#ffffff'</span>, fontWeight: <span class=\"st\">'bold'</span>, fontSize: <span class=\"nm\">16</span> },\n});</div>\n      ",
    "quiz": {
     "q": "Mengapa animasi dengan React Native Reanimated dapat berjalan mulus tanpa lag meski JavaScript sedang memproses komputasi berat?",
     "opts": [
      "Karena perhitungan dan frame animasi dijalankan langsung di Native UI Thread perangkat",
      "Karena Reanimated menghapus seluruh gambar di aplikasi",
      "Karena Reanimated hanya bekerja saat HP disambungkan ke charger",
      "Karena Reanimated membatasi refresh rate layar menjadi 5 FPS"
     ],
     "ans": 0,
     "why": "Reanimated menggunakan worklet yang berjalan langsung di native UI thread, melepaskan ketergantungan frame rate animasi dari kesibukan thread JavaScript."
    }
   },
   {
    "id": "rn-10",
    "num": "10",
    "title": "Hermes Engine, Optimasi & Rilis Store",
    "level": "Expert",
    "intro": "Mengoptimalkan bundle aplikasi, memangkas ukuran APK, dan mempublikasikan ke Google Play Store & Apple App Store.",
    "body": "\n        <h4>🚀 Analogi Kantong Vakum Kompresi Tinggi</h4>\n        <p>Sebelum aplikasi Supriyanto diunggah ke Google Play Store atau Apple App Store:\n        <ul>\n          <li><b>Hermes JavaScript Engine</b>: Mesin JavaScript open-source yang dioptimalkan khusus untuk Android & iOS. Kode JavaScript dikompilasi sebelumnya (*AOT Bytecode*) sehingga waktu buka aplikasi (*Time to Interactive*) turun drastis dan pemakaian RAM hemat hingga 50%.</li>\n          <li><b>EAS Build (Expo Application Services)</b>: Mengompilasi aplikasi di cloud untuk menghasilkan file <code>.aab</code> (Android App Bundle) dan <code>.ipa</code> (iOS).</li>\n          <li><b>Tree Shaking & Asset Optimization</b>: Menghapus kode dan ikon yang tidak terpakai agar ukuran download aplikasi Supriyanto tetap ramping dan hemat kuota pengguna.</li>\n        </ul>\n        </p>\n\n        <h4>📋 Konfigurasi Production di app.json & EAS</h4>\n        <div class=\"code-block\"><span class=\"cm\">// app.json</span>\n{\n  <span class=\"st\">\"expo\"</span>: {\n    <span class=\"st\">\"name\"</span>: <span class=\"st\">\"RB Mobile Supriyanto\"</span>,\n    <span class=\"st\">\"slug\"</span>: <span class=\"st\">\"rb-mobile-supriyanto\"</span>,\n    <span class=\"st\">\"version\"</span>: <span class=\"st\">\"1.0.0\"</span>,\n    <span class=\"st\">\"orientation\"</span>: <span class=\"st\">\"portrait\"</span>,\n    <span class=\"st\">\"jsEngine\"</span>: <span class=\"st\">\"hermes\"</span>,\n    <span class=\"st\">\"android\"</span>: {\n      <span class=\"st\">\"package\"</span>: <span class=\"st\">\"com.supriyanto.rbmobile\"</span>,\n      <span class=\"st\">\"versionCode\"</span>: <span class=\"nm\">1</span>\n    },\n    <span class=\"st\">\"ios\"</span>: {\n      <span class=\"st\">\"bundleIdentifier\"</span>: <span class=\"st\">\"com.supriyanto.rbmobile\"</span>\n    }\n  }\n}</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menyelesaikan kurikulum React Native dari tingkat Pemula hingga Expert. Uji pengetahuan Anda dengan mengikuti <b>Quiz React Native 📱</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Apa keuntungan utama mengaktifkan Hermes Engine di aplikasi React Native?",
     "opts": [
      "Waktu buka aplikasi (startup) jauh lebih cepat, konsumsi RAM lebih hemat, dan ukuran APK lebih kecil",
      "Aplikasi otomatis bisa berjalan tanpa baterai HP",
      "Menghilangkan kebutuhan akan koneksi internet selamanya",
      "Mengubah seluruh kode menjadi file dokumen Microsoft Word"
     ],
     "ans": 0,
     "why": "Hermes melakukan prekompilasi JavaScript menjadi bytecode sebelum aplikasi diinstall, memangkas proses parsing runtime sehingga startup aplikasi instan."
    }
   }
  ]
 },
 {
  "id": "flutter",
  "title": "Flutter 💙",
  "subtitle": "Mobile UI Toolkit: Bahasa Dart, Widget Tree, State Management & Kompilasi AOT Native",
  "accent": "teal",
  "category": "it",
  "lessons": [
   {
    "id": "flutter-01",
    "num": "01",
    "title": "Pengenalan Flutter & Bahasa Dart",
    "level": "Pemula",
    "intro": "Flutter adalah framework open-source Google untuk membuat aplikasi multi-platform super cepat dengan bahasa Dart.",
    "body": "\n        <h4>🎨 Analogi Kanvas Pelukis Skia & Impeller</h4>\n        <p>Kebanyakan framework mobile bekerja seperti penerjemah: mereka meminta sistem Android atau iOS membuat tombol native lewat jembatan komunikasi (*bridge*). Jembatan ini kadang membuat animasi tersendat.</p>\n        <p><b>Flutter bekerja dengan cara berbeda:</b> Flutter bertindak seperti pelukis ahli dengan kanvas digital kosong. Menggunakan engine rendering grafis sendiri (<b>Impeller & Skia</b>), Flutter melukis setiap piksel teks, tombol, dan bayangan langsung ke layar HP dengan kecepatan konsisten <b>120 frame per detik (FPS) tanpa jembatan (*Zero Bridge*)</b>!</p>\n\n        <h4>💙 Bahasa Dart & Aplikasi Pertama Supriyanto</h4>\n        <p>Dart adalah bahasa pemrograman modern berorientasi objek yang mudah dipelajari bagi yang sudah mengerti JavaScript, Java, atau C#.</p>\n        <div class=\"code-block\"><span class=\"cm\">// main.dart - Titik Masuk Aplikasi Flutter</span>\n<span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n\n<span class=\"kw\">void</span> <span class=\"fn\">main</span>() {\n  <span class=\"fn\">runApp</span>(<span class=\"kw\">const</span> <span class=\"fn\">AplikasiSupriyanto</span>());\n}\n\n<span class=\"kw\">class</span> <span class=\"fn\">AplikasiSupriyanto</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatelessWidget</span> {\n  <span class=\"kw\">const</span> <span class=\"fn\">AplikasiSupriyanto</span>({<span class=\"kw\">super</span>.key});\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> <span class=\"fn\">MaterialApp</span>(\n      title: <span class=\"st\">'Flutter Supriyanto'</span>,\n      theme: ThemeData(primarySwatch: Colors.teal),\n      home: <span class=\"fn\">Scaffold</span>(\n        appBar: AppBar(title: <span class=\"kw\">const</span> Text(<span class=\"st\">'RB Mobile Flutter'</span>)),\n        body: <span class=\"kw\">const</span> Center(\n          child: Text(\n            <span class=\"st\">'Halo, Supriyanto! Selamat datang di Flutter 💙'</span>,\n            style: TextStyle(fontSize: <span class=\"nm\">18</span>, fontWeight: FontWeight.bold),\n          ),\n        ),\n      ),\n    );\n  }\n}</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Kunci Pemahaman:</b> Fungsi <code>runApp()</code> adalah jantung awal yang menghidupkan dan merender pohon widget utama ke seluruh layar HP.</div>\n        </div>\n      ",
    "quiz": {
     "q": "Mengapa arsitektur rendering Flutter sering disebut 'Zero Bridge'?",
     "opts": [
      "Karena Flutter melukis langsung setiap piksel ke layar HP menggunakan rendering engine sendiri (Impeller/Skia) tanpa jembatan perantara",
      "Karena Flutter hanya bisa berjalan jika HP terhubung kabel ke laptop",
      "Karena Flutter tidak memiliki tombol sama sekali",
      "Karena Flutter mengharuskan pengguna membuat jembatan kayu asli"
     ],
     "ans": 0,
     "why": "Flutter tidak mengandalkan jembatan komunikasi runtime ke komponen UI platform asli, melainkan menggambar sendiri seluruh antarmuka secara native menggunakan grafis Impeller/Skia."
    }
   },
   {
    "id": "flutter-02",
    "num": "02",
    "title": "StatelessWidget vs StatefulWidget",
    "level": "Pemula",
    "intro": "Memahami dua tipe widget fundamental: tampilan statis dan tampilan dinamis yang merespons data.",
    "body": "\n        <h4>🗿 Analogi Patung Museum vs Papan Skor Interaktif</h4>\n        <p>Di Flutter, semboyan utamanya adalah <i>\"Everything is a Widget\"</i>. Semua widget terbagi dalam dua kategori:\n        <ul>\n          <li><b>StatelessWidget (Patung Museum)</b>: Sekali dipahat/dibuat, wujudnya tidak pernah berubah. Cocok untuk teks judul, ikon, label, atau kartu profil yang datanya tetap.</li>\n          <li><b>StatefulWidget (Papan Skor Lapangan Futsal Supriyanto)</b>: Memiliki memori internal (*State*). Saat tombol ditekan, fungsi <code>setState()</code> dipanggil untuk memperbarui angka skor di layar secara seketika.</li>\n        </ul>\n        </p>\n\n        <h4>🔢 Counter Interaktif dengan StatefulWidget</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n\n<span class=\"kw\">class</span> <span class=\"fn\">PapanSkorSupriyanto</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatefulWidget</span> {\n  <span class=\"kw\">const</span> <span class=\"fn\">PapanSkorSupriyanto</span>({<span class=\"kw\">super</span>.key});\n\n  @override\n  State&lt;<span class=\"fn\">PapanSkorSupriyanto</span>&gt; <span class=\"fn\">createState</span>() =&gt; <span class=\"fn\">_PapanSkorState</span>();\n}\n\n<span class=\"kw\">class</span> <span class=\"fn\">_PapanSkorState</span> <span class=\"kw\">extends</span> State&lt;<span class=\"fn\">PapanSkorSupriyanto</span>&gt; {\n  <span class=\"kw\">int</span> _skor = <span class=\"nm\">0</span>;\n\n  <span class=\"kw\">void</span> <span class=\"fn\">_tambahGol</span>() {\n    <span class=\"fn\">setState</span>(() {\n      _skor++; <span class=\"cm\">// Memberitahu Flutter untuk menggambar ulang angka baru</span>\n    });\n  }\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> Column(\n      mainAxisAlignment: MainAxisAlignment.center,\n      children: [\n        Text(<span class=\"st\">'Skor Tim Supriyanto: $_skor'</span>, style: <span class=\"kw\">const</span> TextStyle(fontSize: <span class=\"nm\">22</span>)),\n        <span class=\"kw\">const</span> SizedBox(height: <span class=\"nm\">12</span>),\n        ElevatedButton(\n          onPressed: _tambahGol,\n          child: <span class=\"kw\">const</span> Text(<span class=\"st\">'Gol! +1'</span>),\n        ),\n      ],\n    );\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Kapan Supriyanto harus memilih StatefulWidget daripada StatelessWidget?",
     "opts": [
      "Ketika tampilan layar perlu berubah secara dinamis merespons interaksi pengguna atau perubahan data waktu",
      "Ketika membuat logo gambar statis yang tidak pernah berubah",
      "Ketika ingin membuat ukuran aplikasi menjadi 0 kilobyte",
      "Ketika aplikasi hanya dijalankan di malam hari"
     ],
     "ans": 0,
     "why": "StatefulWidget dirancang untuk elemen antarmuka yang memiliki state/data yang dapat berubah sepanjang siklus hidup widget, diperbarui melalui fungsi setState()."
    }
   },
   {
    "id": "flutter-03",
    "num": "03",
    "title": "Tata Letak: Row, Column & Expanded",
    "level": "Pemula",
    "intro": "Menyusun tata letak antarmuka mobile yang rapi dan fleksibel di berbagai orientasi layar.",
    "body": "\n        <h4>📐 Analogi Rak Etalase Modular Toko Supriyanto</h4>\n        <p>Membangun antarmuka Flutter sama seperti menata kotak modular di etalase toko:\n        <ul>\n          <li><b>Row</b>: Menyusun barang sejajar mendatar ke samping (horizontal).</li>\n          <li><b>Column</b>: Menumpuk barang dari atas ke bawah (vertikal).</li>\n          <li><b>Container</b>: Kotak serbaguna yang bisa diberi warna latar, padding, margin, dan lengkungan sudut (<code>BoxDecoration</code>).</li>\n          <li><b>Expanded</b>: Kotak lentur cerdas yang otomatis mengisi dan membagi seluruh ruang sisa secara adil, mencegah error garis kuning-hitam meluap (*Overflow Error*).</li>\n        </ul>\n        </p>\n\n        <h4>💳 Membuat Kartu Saldo Dompet Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n\nWidget <span class=\"fn\">kartuSaldoSupriyanto</span>() {\n  <span class=\"kw\">return</span> Container(\n    padding: <span class=\"kw\">const</span> EdgeInsets.all(<span class=\"nm\">20</span>),\n    decoration: BoxDecoration(\n      color: Colors.teal,\n      borderRadius: BorderRadius.circular(<span class=\"nm\">16</span>),\n      boxShadow: [\n        BoxShadow(color: Colors.black12, blurRadius: <span class=\"nm\">8</span>, offset: <span class=\"kw\">const</span> Offset(<span class=\"nm\">0</span>, <span class=\"nm\">4</span>)),\n      ],\n    ),\n    child: Column(\n      crossAxisAlignment: CrossAxisAlignment.start,\n      children: [\n        <span class=\"kw\">const</span> Text(<span class=\"st\">'Saldo Dompet Supriyanto'</span>, style: TextStyle(color: Colors.white70)),\n        <span class=\"kw\">const</span> SizedBox(height: <span class=\"nm\">8</span>),\n        Row(\n          mainAxisAlignment: MainAxisAlignment.spaceBetween,\n          children: [\n            <span class=\"kw\">const</span> Text(<span class=\"st\">'Rp 8.750.000'</span>, style: TextStyle(color: Colors.white, fontSize: <span class=\"nm\">24</span>, fontWeight: FontWeight.bold)),\n            IconButton(\n              icon: <span class=\"kw\">const</span> Icon(Icons.send, color: Colors.white),\n              onPressed: () {},\n            ),\n          ],\n        ),\n      ],\n    ),\n  );\n}</div>\n      ",
    "quiz": {
     "q": "Widget apa yang digunakan di dalam Row atau Column untuk memaksa anak widget mengambil seluruh ruang kosong yang tersisa?",
     "opts": [
      "Expanded",
      "StaticBox",
      "FixedSpace",
      "LockContainer"
     ],
     "ans": 0,
     "why": "Widget Expanded memperluas child widget agar memenuhi sisa ruang yang tersedia di main axis Row atau Column, mencegah overflow error."
    }
   },
   {
    "id": "flutter-04",
    "num": "04",
    "title": "Form Input, TextField & Validasi",
    "level": "Menengah",
    "intro": "Menerima masukan dari pengguna dengan kontroler teks dan validasi form yang aman.",
    "body": "\n        <h4>📝 Analogi Loket Pendaftaran & Satpam Verifikasi</h4>\n        <p>Ketika pengguna mengisi formulir di aplikasi mobile:\n        <ul>\n          <li><b>TextEditingController</b>: Pena pencatat pintar. Ia merekam setiap huruf yang diketik Supriyanto, dan bisa digunakan untuk membaca nilai atau mengosongkan input.</li>\n          <li><b>Form & GlobalKey&lt;FormState&gt;</b>: Satpam pemeriksa. Sebelum formulir dikirim ke server, satpam memeriksa semua kolom input. Jika email tidak valid atau nomor HP kosong, pesan merah peringatan langsung muncul seketika.</li>\n        </ul>\n        </p>\n\n        <h4>📋 Implementasi Form Registrasi Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n\n<span class=\"kw\">class</span> <span class=\"fn\">FormSupriyanto</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatefulWidget</span> {\n  <span class=\"kw\">const</span> <span class=\"fn\">FormSupriyanto</span>({<span class=\"kw\">super</span>.key});\n\n  @override\n  State&lt;<span class=\"fn\">FormSupriyanto</span>&gt; <span class=\"fn\">createState</span>() =&gt; <span class=\"fn\">_FormState</span>();\n}\n\n<span class=\"kw\">class</span> <span class=\"fn\">_FormState</span> <span class=\"kw\">extends</span> State&lt;<span class=\"fn\">FormSupriyanto</span>&gt; {\n  <span class=\"kw\">final</span> _formKey = GlobalKey&lt;FormState&gt;();\n  <span class=\"kw\">final</span> _namaCtrl = TextEditingController(text: <span class=\"st\">'Supriyanto'</span>);\n\n  <span class=\"kw\">void</span> <span class=\"fn\">_kirim</span>() {\n    <span class=\"kw\">if</span> (_formKey.currentState!.validate()) {\n      ScaffoldMessenger.of(context).showSnackBar(\n        SnackBar(content: Text(<span class=\"st\">'Data berhasil disimpan: ${_namaCtrl.text}'</span>)),\n      );\n    }\n  }\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> Form(\n      key: _formKey,\n      child: Column(\n        children: [\n          TextFormField(\n            controller: _namaCtrl,\n            decoration: <span class=\"kw\">const</span> InputDecoration(labelText: <span class=\"st\">'Nama Lengkap'</span>),\n            validator: (v) =&gt; (v == <span class=\"kw\">null</span> || v.isEmpty) ? <span class=\"st\">'Wajib diisi!'</span> : <span class=\"kw\">null</span>,\n          ),\n          <span class=\"kw\">const</span> SizedBox(height: <span class=\"nm\">16</span>),\n          ElevatedButton(onPressed: _kirim, child: <span class=\"kw\">const</span> Text(<span class=\"st\">'Simpan'</span>)),\n        ],\n      ),\n    );\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Objek apa yang digunakan di Flutter untuk membaca, memodifikasi, atau menghapus teks di dalam TextField secara programatik?",
     "opts": [
      "TextEditingController",
      "StringReaderDom",
      "InputScanner",
      "FormStringKeeper"
     ],
     "ans": 0,
     "why": "TextEditingController adalah pengendali resmi di Flutter yang mengikat teks input pengguna sehingga developer bisa membaca dan memanipulasi teks kapan saja."
    }
   },
   {
    "id": "flutter-05",
    "num": "05",
    "title": "Daftar Dinamis: ListView.builder",
    "level": "Menengah",
    "intro": "Menampilkan ribuan item katalog secara efisien dengan teknik lazy rendering.",
    "body": "\n        <h4>🧾 Analogi Mesin Rol Struk Percetakan</h4>\n        <p>Jika Supriyanto memiliki 10.000 riwayat transaksi:\n        <ul>\n          <li>Jika menggunakan <code>ListView(children: [...])</code>, Flutter akan membuat 10.000 widget sekaligus di RAM HP. HP pengguna langsung panas dan aplikasi macet!</li>\n          <li>Menggunakan <b>ListView.builder</b> bekerja seperti mesin cetak otomatis (*Lazy Evaluation*). Flutter hanya membuat widget yang sedang aktif terlihat di layar. Saat pengguna menggulir ke bawah, item lama yang keluar layar langsung didaur ulang (*recycled*) untuk item berikutnya.</li>\n        </ul>\n        </p>\n\n        <h4>📦 Implementasi Riwayat Transaksi Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n\n<span class=\"kw\">class</span> <span class=\"fn\">DaftarPesanan</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatelessWidget</span> {\n  <span class=\"kw\">final</span> List&lt;String&gt; daftarBarang = List.generate(<span class=\"nm\">1000</span>, (i) =&gt; <span class=\"st\">'Pesanan #$i untuk Supriyanto'</span>);\n\n  <span class=\"kw\">const</span> <span class=\"fn\">DaftarPesanan</span>({<span class=\"kw\">super</span>.key});\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> ListView.builder(\n      itemCount: daftarBarang.length,\n      itemBuilder: (context, index) {\n        <span class=\"kw\">return</span> Card(\n          margin: <span class=\"kw\">const</span> EdgeInsets.symmetric(horizontal: <span class=\"nm\">16</span>, vertical: <span class=\"nm\">6</span>),\n          child: ListTile(\n            leading: CircleAvatar(child: Text(<span class=\"st\">'${index + 1}'</span>)),\n            title: Text(daftarBarang[index]),\n            subtitle: <span class=\"kw\">const</span> Text(<span class=\"st\">'Status: Siap Dikirim 🚚'</span>),\n            trailing: <span class=\"kw\">const</span> Icon(Icons.arrow_forward_ios, size: <span class=\"nm\">14</span>),\n          ),\n        );\n      },\n    );\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Mengapa ListView.builder sangat efisien dalam menampilkan daftar data dengan ribuan elemen?",
     "opts": [
      "Karena ListView.builder hanya membangun widget saat item tersebut hampir terlihat di layar (on-demand / lazy loading)",
      "Karena ListView.builder mengompres seluruh data menjadi file ZIP",
      "Karena ListView.builder mematikan fitur scrolling",
      "Karena ListView.builder menghapus data transaksi dari memori secara permanen"
     ],
     "ans": 0,
     "why": "ListView.builder hanya memanggil itemBuilder untuk item yang benar-benar terlihat di viewport layar, menghemat penggunaan memori RAM secara signifikan."
    }
   },
   {
    "id": "flutter-06",
    "num": "06",
    "title": "Navigasi Layar: Navigator Push & Pop",
    "level": "Menengah",
    "intro": "Alur perpindahan antar halaman dan pengiriman parameter data antar layar di Flutter.",
    "body": "\n        <h4>🍽️ Analogi Tumpukan Nampan Saji Restoran</h4>\n        <p>Sistem navigasi di Flutter mengadopsi konsep tumpukan (*LIFO - Last In First Out*):\n        <ul>\n          <li><b>Navigator.push()</b>: Menaruh nampan halaman baru di atas tumpukan (misalnya dari Beranda pindah ke Layar Detail Produk Supriyanto).</li>\n          <li><b>Navigator.pop()</b>: Mengangkat nampan teratas untuk kembali melihat nampan sebelumnya di bawahnya (tombol Back). Anda bahkan bisa mengembalikan nilai (*return value*) ke layar pemanggil!</li>\n        </ul>\n        </p>\n\n        <h4>🧭 Contoh Navigasi dengan Pengiriman Data</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n\n<span class=\"cm\">// 1. Layar Beranda</span>\n<span class=\"kw\">class</span> <span class=\"fn\">LayarUtama</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatelessWidget</span> {\n  <span class=\"kw\">const</span> <span class=\"fn\">LayarUtama</span>({<span class=\"kw\">super</span>.key});\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> Center(\n      child: ElevatedButton(\n        child: <span class=\"kw\">const</span> Text(<span class=\"st\">'Lihat Profil Supriyanto →'</span>),\n        onPressed: () {\n          Navigator.push(\n            context,\n            MaterialPageRoute(builder: (c) =&gt; <span class=\"kw\">const</span> <span class=\"fn\">LayarDetail</span>(nama: <span class=\"st\">'Supriyanto'</span>)),\n          );\n        },\n      ),\n    );\n  }\n}\n\n<span class=\"cm\">// 2. Layar Detail</span>\n<span class=\"kw\">class</span> <span class=\"fn\">LayarDetail</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatelessWidget</span> {\n  <span class=\"kw\">final</span> String nama;\n  <span class=\"kw\">const</span> <span class=\"fn\">LayarDetail</span>({<span class=\"kw\">super</span>.key, <span class=\"kw\">required</span> <span class=\"kw\">this</span>.nama});\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> Scaffold(\n      appBar: AppBar(title: Text(<span class=\"st\">'Profil $nama'</span>)),\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () =&gt; Navigator.pop(context), <span class=\"cm\">// Kembali ke layar utama</span>\n          child: <span class=\"kw\">const</span> Text(<span class=\"st\">'← Kembali'</span>),\n        ),\n      ),\n    );\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Perintah apa yang dipanggil untuk menutup layar saat ini dan kembali ke layar sebelumnya di Flutter?",
     "opts": [
      "Navigator.pop(context)",
      "Navigator.exitAll()",
      "Screen.delete()",
      "System.reboot()"
     ],
     "ans": 0,
     "why": "Navigator.pop(context) membuang rute teratas dari tumpukan navigasi sehingga layar sebelumnya kembali tampil di layar pengguna."
    }
   },
   {
    "id": "flutter-07",
    "num": "07",
    "title": "Konsumsi REST API & Model Dart",
    "level": "Lanjutan",
    "intro": "Menghubungkan aplikasi Flutter ke server backend dan mengubah JSON menjadi objek Dart yang type-safe.",
    "body": "\n        <h4>📬 Analogi Surat Telegram & Form Isian Resmi</h4>\n        <p>Ketika aplikasi Supriyanto meminta data ke server melalui koneksi internet:\n        <ol>\n          <li><b>Package http</b>: Kurir pengantar surat yang mengirim request <code>GET</code> atau <code>POST</code>.</li>\n          <li><b>Model Dart (fromJson)</b>: Salinan formulir resmi. Data mentah JSON diterjemahkan ke dalam atribut class dengan tipe data yang ketat (*type-safe*). Mencegah typo nama variabel yang sering menyebabkan crash!</li>\n          <li><b>FutureBuilder</b>: Pekerja cerdas yang otomatis merender roda loading saat data sedang ditarik, atau menampilkan pesan error jika kuota internet habis.</li>\n        </ol>\n        </p>\n\n        <h4>🌐 Mengambil Data Profil Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'dart:convert'</span>;\n<span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n<span class=\"kw\">import</span> <span class=\"st\">'package:http/http.dart'</span> <span class=\"kw\">as</span> http;\n\n<span class=\"cm\">// Model Dart</span>\n<span class=\"kw\">class</span> <span class=\"fn\">Pengguna</span> {\n  <span class=\"kw\">final</span> String nama;\n  <span class=\"kw\">final</span> String peran;\n  <span class=\"fn\">Pengguna</span>({<span class=\"kw\">required</span> <span class=\"kw\">this</span>.nama, <span class=\"kw\">required</span> <span class=\"kw\">this</span>.peran});\n\n  <span class=\"kw\">factory</span> <span class=\"fn\">Pengguna</span>.fromJson(Map&lt;String, dynamic&gt; json) {\n    <span class=\"kw\">return</span> <span class=\"fn\">Pengguna</span>(nama: json[<span class=\"st\">'nama'</span>], peran: json[<span class=\"st\">'peran'</span>]);\n  }\n}\n\n<span class=\"cm\">// Fungsi Fetch API</span>\nFuture&lt;<span class=\"fn\">Pengguna</span>&gt; <span class=\"fn\">tarikData</span>() <span class=\"kw\">async</span> {\n  <span class=\"kw\">final</span> res = <span class=\"kw\">await</span> http.get(Uri.parse(<span class=\"st\">'https://api.example.com/user/supriyanto'</span>));\n  <span class=\"kw\">if</span> (res.statusCode == <span class=\"nm\">200</span>) {\n    <span class=\"kw\">return</span> <span class=\"fn\">Pengguna</span>.fromJson(jsonDecode(res.body));\n  }\n  <span class=\"kw\">throw</span> Exception(<span class=\"st\">'Gagal mengambil data'</span>);\n}</div>\n      ",
    "quiz": {
     "q": "Apa keuntungan utama mengubah data JSON mentah menjadi Model Class Dart dengan factory method fromJson?",
     "opts": [
      "Mencegah kesalahan pengetikan nama kolom secara type-safe dan mempermudah auto-complete di editor kode",
      "Membuat kecepatan internet menjadi tanpa kuota",
      "Mengubah tampilan HP menjadi transparan",
      "Menghilangkan kebutuhan akan koneksi internet"
     ],
     "ans": 0,
     "why": "Model class Dart memberikan kepastian tipe data (type-safety) dan auto-completion, menghindarkan aplikasi dari error runtime akibat salah mengakses key JSON."
    }
   },
   {
    "id": "flutter-08",
    "num": "08",
    "title": "State Management: Provider & Notifier",
    "level": "Mahir",
    "intro": "Mengelola data global (seperti keranjang belanja atau status login) di seluruh penjuru aplikasi.",
    "body": "\n        <h4>📻 Analogi Menara Radio Pemancar Desa</h4>\n        <p>Bayangkan toko kelontong Supriyanto memiliki 5 cabang di desa. Jika harga sembako berubah:\n        <ul>\n          <li>Daripada mengirim pesuruh manual dari pintu ke pintu (*Prop Drilling*), Supriyanto cukup membuat <b>Menara Radio Pemancar (ChangeNotifier)</b>.</li>\n          <li>Begitu harga baru diumumkan via pemancar (<code>notifyListeners()</code>), seluruh radio warga yang menyala (<b>Consumer / context.watch</b>) langsung menerima kabar dan memperbarui papan harga mereka secara serentak!</li>\n        </ul>\n        </p>\n\n        <h4>🛒 State Keranjang Toko Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n<span class=\"kw\">import</span> <span class=\"st\">'package:provider/provider.dart'</span>;\n\n<span class=\"cm\">// 1. ChangeNotifier (Menara Pemancar)</span>\n<span class=\"kw\">class</span> <span class=\"fn\">KeranjangModel</span> <span class=\"kw\">extends</span> <span class=\"fn\">ChangeNotifier</span> {\n  <span class=\"kw\">final</span> List&lt;String&gt; _items = [];\n  List&lt;String&gt; <span class=\"kw\">get</span> items =&gt; _items;\n\n  <span class=\"kw\">void</span> <span class=\"fn\">tambah</span>(String barang) {\n    _items.add(barang);\n    <span class=\"fn\">notifyListeners</span>(); <span class=\"cm\">// Menyiarkan sinyal update ke seluruh widget</span>\n  }\n}\n\n<span class=\"cm\">// 2. Consumer Widget (Radio Pendengar)</span>\n<span class=\"kw\">class</span> <span class=\"fn\">BadgeKeranjang</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatelessWidget</span> {\n  <span class=\"kw\">const</span> <span class=\"fn\">BadgeKeranjang</span>({<span class=\"kw\">super</span>.key});\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> Consumer&lt;<span class=\"fn\">KeranjangModel</span>&gt;(\n      builder: (context, keranjang, child) {\n        <span class=\"kw\">return</span> Text(<span class=\"st\">'Pesanan Supriyanto: ${keranjang.items.length}'</span>);\n      },\n    );\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Fungsi apa yang wajib dipanggil di dalam class ChangeNotifier agar seluruh widget Consumer me-render ulang tampilannya?",
     "opts": [
      "notifyListeners()",
      "rebootScreen()",
      "broadcastAll()",
      "refreshMemoryNow()"
     ],
     "ans": 0,
     "why": "notifyListeners() adalah metode di ChangeNotifier yang memberitahu para listener (widget yang berlangganan) bahwa state telah berubah dan UI perlu di-render ulang."
    }
   },
   {
    "id": "flutter-09",
    "num": "09",
    "title": "Animasi Mulus: AnimatedContainer & Hero",
    "level": "Mahir",
    "intro": "Menghadirkan transisi visual yang memanjakan mata dengan AnimatedContainer dan Hero widget.",
    "body": "\n        <h4>🦸 Analogi Pahlawan Super Terbang Antar Layar</h4>\n        <p>Sentuhan animasi membedakan aplikasi amatir dengan aplikasi profesional kelas dunia:\n        <ul>\n          <li><b>AnimatedContainer</b>: Kotak dinamis yang bisa berubah warna, ukuran, atau lengkungan secara bertahap dan luwes cukup dengan mengganti nilainya.</li>\n          <li><b>Hero Widget</b>: Seperti pahlawan super yang terbang melintasi langit. Ketika foto profil Supriyanto di daftar kecil diklik, foto tersebut seolah membesar dan melayang mulus ke posisi atas di halaman profil detail tanpa jeda!</li>\n        </ul>\n        </p>\n\n        <h4>🎬 Implementasi Hero Transition Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"kw\">import</span> <span class=\"st\">'package:flutter/material.dart'</span>;\n\n<span class=\"cm\">// Di Layar Katalog</span>\nWidget <span class=\"fn\">fotoKecil</span>(BuildContext context) {\n  <span class=\"kw\">return</span> GestureDetector(\n    onTap: () =&gt; Navigator.push(context, MaterialPageRoute(builder: (_) =&gt; <span class=\"kw\">const</span> LayarDetailFoto())),\n    child: Hero(\n      tag: <span class=\"st\">'avatar-supriyanto'</span>, <span class=\"cm\">// Kunci identitas tag yang unik</span>\n      child: ClipRRect(\n        borderRadius: BorderRadius.circular(<span class=\"nm\">8</span>),\n        child: Image.network(<span class=\"st\">'https://api.dicebear.com/7.x/bottts/svg?seed=Supriyanto'</span>, width: <span class=\"nm\">60</span>),\n      ),\n    ),\n  );\n}\n\n<span class=\"cm\">// Di Layar Detail</span>\n<span class=\"kw\">class</span> <span class=\"fn\">LayarDetailFoto</span> <span class=\"kw\">extends</span> <span class=\"fn\">StatelessWidget</span> {\n  <span class=\"kw\">const</span> <span class=\"fn\">LayarDetailFoto</span>({<span class=\"kw\">super</span>.key});\n\n  @override\n  Widget <span class=\"fn\">build</span>(BuildContext context) {\n    <span class=\"kw\">return</span> Scaffold(\n      body: Center(\n        child: Hero(\n          tag: <span class=\"st\">'avatar-supriyanto'</span>, <span class=\"cm\">// Tag harus sama persis</span>\n          child: Image.network(<span class=\"st\">'https://api.dicebear.com/7.x/bottts/svg?seed=Supriyanto'</span>, width: <span class=\"nm\">260</span>),\n        ),\n      ),\n    );\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Widget apa di Flutter yang secara otomatis memberikan animasi transisi terbang sebuah elemen gambar saat berpindah layar?",
     "opts": [
      "Hero",
      "FlyingImageDom",
      "AirTrans",
      "TeleportBox"
     ],
     "ans": 0,
     "why": "Widget Hero di Flutter menghubungkan dua elemen dengan tag yang sama pada rute berbeda dan menganimasikan transisi terbang posisinya secara otomatis."
    }
   },
   {
    "id": "flutter-10",
    "num": "10",
    "title": "Kompilasi AOT & Rilis Multi-Platform",
    "level": "Expert",
    "intro": "Mengompilasi aplikasi ke kode mesin native (AOT) untuk performa puncak dan publikasi ke Play Store & App Store.",
    "body": "\n        <h4>📦 Analogi Buku Cetak Siap Terbit</h4>\n        <p>Dalam siklus pengembangan Flutter, terdapat dua mode kerja:\n        <ul>\n          <li><b>Mode Debug (JIT - Just In Time)</b>: Naskah sketsa yang cepat diedit. Fitur <b>Stateful Hot Reload</b> memungkinkan Supriyanto mengubah kode dan melihat hasilnya di HP dalam hitungan sub-detik tanpa merestart aplikasi.</li>\n          <li><b>Mode Release (AOT - Ahead Of Time)</b>: Buku edisi cetak tebal. Seluruh kode Dart dikompilasi langsung menjadi instruksi mesin ARM 64-bit native. Tidak ada lagi interpreter, menghasilkan performa setara C++ murni!</li>\n        </ul>\n        </p>\n\n        <h4>🚀 Perintah Build Production Flutter</h4>\n        <div class=\"code-block\"><span class=\"cm\"># 1. Menghasilkan Android App Bundle (.aab) siap upload ke Google Play Console</span>\nflutter build appbundle --release\n\n<span class=\"cm\"># 2. Menghasilkan IPA untuk Apple App Store</span>\nflutter build ipa --release\n\n<span class=\"cm\"># 3. Menghasilkan build Web modern (Wasm / CanvasKit)</span>\nflutter build web --release</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menyelesaikan kurikulum Flutter dari tingkat Pemula hingga Expert. Uji kemampuan Anda dengan mengikuti <b>Quiz Flutter 💙</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Apa perbedaan utama antara mode Debug (JIT) dan mode Release (AOT) di Flutter?",
     "opts": [
      "Mode Debug menggunakan Just-In-Time untuk Hot Reload kilat saat coding, sedangkan mode Release menggunakan Ahead-Of-Time untuk kompilasi mesin native berkecepatan maksimal",
      "Mode Debug hanya berjalan di siang hari, mode Release hanya di malam hari",
      "Mode Release mengharuskan aplikasi ditulis ulang dalam bahasa Python",
      "Mode Debug menghasilkan file berukuran 100 Terabyte"
     ],
     "ans": 0,
     "why": "Dart mendukung dua mode kompilasi: JIT untuk produktivitas pengembangan kilat dengan Hot Reload, dan AOT untuk kompilasi kode mesin native tanpa overhead runtime."
    }
   }
  ]
 },
 {
  "id": "mandarin",
  "title": "Mandarin 🇨🇳",
  "subtitle": "Percakapan Sehari-hari: Pinyin, 4 Nada Dasar, Hanzi Praktis & Percakapan Nyata",
  "accent": "rose",
  "category": "lang",
  "lessons": [
   {
    "id": "zh-01",
    "num": "01",
    "title": "Pinyin & Rahasia 4 Nada Suara",
    "level": "Pemula 0",
    "intro": "Kunci paling krusial dalam bahasa Mandarin: melatih telinga dan lidah membedakan 4 nada suara dengan analogi intonasi sehari-hari.",
    "body": "\n        <h4>🎵 Analogi 4 Nada dengan Intonasi Suara Sehari-hari</h4>\n        <p>Banyak pemula takut belajar Mandarin karena katanya \"salah nada bisa salah arti\". Betul bahwa nada mengubah arti kata, namun melatih nada sebenarnya sangat mudah jika Anda membayangkan intonasi bicara kita sehari-hari:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Nada</th><th>Tanda</th><th>Analogi Suara Sehari-hari</th><th>Contoh (ma)</th><th>Arti</th></tr></thead>\n          <tbody>\n            <tr><td><b>Nada 1</b></td><td>mā (—)</td><td>Tinggi & datar seperti suara saat dokter gigi menyuruh: <i>\"Aaaaa\"</i></td><td><span class=\"zh-char\">妈</span> (mā)</td><td>Ibu</td></tr>\n            <tr><td><b>Nada 2</b></td><td>má (/)</td><td>Naik heran seperti orang kaget bertanya: <i>\"Hah?!\"</i> / <i>\"Apa?!\"</i></td><td><span class=\"zh-char\">麻</span> (má)</td><td>Rami / Kesemutan</td></tr>\n            <tr><td><b>Nada 3</b></td><td>mǎ (V)</td><td>Turun lalu naik seperti orang ragu-ragu berpikir: <i>\"Hmm... iya...\"</i></td><td><span class=\"zh-char\">马</span> (mǎ)</td><td>Kuda</td></tr>\n            <tr><td><b>Nada 4</b></td><td>mà (\\)</td><td>Turun tegas & pendek seperti membentak atau menolak tegas: <i>\"Gak!\"</i> / <i>\"Stop!\"</i></td><td><span class=\"zh-char\">骂</span> (mà)</td><td>Memarahi</td></tr>\n            <tr><td><b>Netral</b></td><td>ma ( )</td><td>Ringan dan cepat tanpa penekanan</td><td><span class=\"zh-char\">吗</span> (ma)</td><td>Partikel tanya (kah?)</td></tr>\n          </tbody>\n        </table>\n\n        <h4>👂 Rahasia Perubahan Nada (Tone Sandhi)</h4>\n        <p>Penutur asli Mandarin tidak kaku. Ada 2 aturan perubahan nada otomatis agar pengucapan mengalir luwes (*smooth*):\n        <ul>\n          <li><b>Aturan Dua Nada 3:</b> Jika ada dua suku kata bernada ke-3 bertemu (3 + 3), suku kata pertama <b>otomatis berubah menjadi Nada 2</b>!\n            <br>Contoh legendaris: <span class=\"zh-char\">你好</span> (Nǐ + hǎo) dibaca menjadi <b>Ní hǎo</b>!</li>\n          <li><b>Aturan Kata 不 (Bù):</b> Kata 不 aslinya bernada ke-4. Tapi jika bertemu kata lain yang bernada ke-4, ia berubah menjadi nada ke-2 (bú)!\n            <br>Contoh: 不 (bù) + 是 (shì) → dibaca <b>bú shì</b>!</li>\n        </ul>\n        </p>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Tips Praktis Supriyanto:</b> Saat berlatih di depan cermin, gerakkan kepala atau tangan Anda mengikuti arah garis nada (datar, naik, berayun, sentak ke bawah). Gerakan tubuh sangat membantu memori otot pita suara!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Bagaimana cara membaca sapaan 'Nǐ hǎo' (你好) yang benar sesuai aturan perubahan nada (Tone Sandhi)?",
     "opts": [
      "Dibaca 'Ní hǎo' (kata pertama berubah menjadi nada ke-2 karena dua nada ke-3 bertemu)",
      "Kedua kata dibaca membentak dengan nada ke-4",
      "Huruf h tidak boleh dibunyikan sama sekali",
      "Dibaca dengan nada datar seperti berbisik tanpa nada"
     ],
     "ans": 0,
     "why": "Dalam fonologi Mandarin, jika dua karakter bernada ke-3 bertemu berurutan (3+3), karakter pertama wajib dilafalkan dengan nada ke-2 (naik) agar artikulasi lebih alami."
    }
   },
   {
    "id": "zh-02",
    "num": "02",
    "title": "Salam, Sapaan Hormat & Angka 1–100",
    "level": "Pemula",
    "intro": "Menguasai sapaan sopan sehari-hari, terima kasih, permohonan maaf, dan berhitung angka 1 sampai 100.",
    "body": "\n        <h4>🤝 Etika Sapaan Sehari-hari</h4>\n        <p>Menyapa orang di Tiongkok atau komunitas Tionghoa sangat praktis. Struktur dasarnya adalah <b>[Nama/Orang] + 好 (Hǎo = Baik)</b>:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Hanzi</th><th>Pinyin</th><th>Arti</th><th>Kapan Digunakan</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">你好</span></td><td><span class=\"zh-pinyin\">Nǐ hǎo</span></td><td>Halo / Apa kabar</td><td>Sapaan umum kepada teman sebaya / kasual</td></tr>\n            <tr><td><span class=\"zh-char\">您好</span></td><td><span class=\"zh-pinyin\">Nín hǎo</span></td><td>Halo (Sangat Hormat)</td><td>Kepada bos, orang tua, pelanggan, guru</td></tr>\n            <tr><td><span class=\"zh-char\">早上好</span></td><td><span class=\"zh-pinyin\">Zǎoshang hǎo</span></td><td>Selamat pagi</td><td>Sebelum jam 10 pagi</td></tr>\n            <tr><td><span class=\"zh-char\">谢谢</span></td><td><span class=\"zh-pinyin\">Xièxie</span></td><td>Terima kasih</td><td>Ungkapan rasa terima kasih</td></tr>\n            <tr><td><span class=\"zh-char\">不客气</span></td><td><span class=\"zh-pinyin\">Bú kèqi</span></td><td>Sama-sama / Jangan sungkan</td><td>Jawaban untuk ucapan terima kasih</td></tr>\n            <tr><td><span class=\"zh-char\">对不起</span></td><td><span class=\"zh-pinyin\">Duìbuqǐ</span></td><td>Maaf</td><td>Saat melakukan kesalahan</td></tr>\n            <tr><td><span class=\"zh-char\">没关系</span></td><td><span class=\"zh-pinyin\">Méi guānxi</span></td><td>Tidak apa-apa / Santai saja</td><td>Jawaban saat ada yang minta maaf</td></tr>\n            <tr><td><span class=\"zh-char\">再见</span></td><td><span class=\"zh-pinyin\">Zàijiàn</span></td><td>Sampai jumpa lagi</td><td>Saat berpisah (Zài = lagi, Jiàn = bertemu)</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🔢 Pola Ajaib Angka Mandarin (Hafal 10 Kata = Bisa 1–99!)</h4>\n        <p>Sistem hitungan Mandarin sangat matematis dan logis tanpa pengecualian aneh:\n        <ul>\n          <li><b>1–10:</b> 一 (yī), 二 (èr), 三 (sān), 四 (sì), 五 (wǔ), 六 (liù), 七 (qī), 八 (bā), 九 (jiǔ), 十 (shí).</li>\n          <li><b>11–19:</b> Cukup ucapkan [Sepuluh + Satuan]. Misal 15 = 十五 (shí wǔ). 18 = 十八 (shí bā).</li>\n          <li><b>20–99:</b> Cukup ucapkan [Angka puluhan + Sepuluh + Satuan]. Misal:\n            <br>• 20 = 二十 (èr shí)\n            <br>• 35 = 三十五 (sān shí wǔ)\n            <br>• 99 = 九十九 (jiǔ shí jiǔ)\n          </li>\n          <li><b>100:</b> 一百 (yī bǎi).</li>\n        </ul>\n        </p>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🖐️</span>\n          <div><b>Kultur Gestur Satu Tangan:</b> Di pasar Tiongkok, pedagang bisa menunjukkan angka 1 sampai 10 hanya dengan satu tangan! Misalnya angka 6 dibentuk jempol dan kelingking terbuka (tanda 'call me'), angka 8 dibentuk jempol dan telunjuk terbuka (seperti pistol).</div>\n        </div>\n      ",
    "quiz": {
     "q": "Bagaimana cara membaca angka 48 dalam bahasa Mandarin?",
     "opts": [
      "Sì shí bā (四十八)",
      "Bā shí sì (八十四)",
      "Shí sì bā",
      "Bā sì shí"
     ],
     "ans": 0,
     "why": "Rumus puluhan dalam bahasa Mandarin sangat matematis: 40 adalah sì shí (4x10), ditambah 8 (bā) menjadi sì shí bā (48)."
    }
   },
   {
    "id": "zh-03",
    "num": "03",
    "title": "Perkenalan Diri Supriyanto & Identitas",
    "level": "Pemula",
    "intro": "Menyusun kalimat perkenalan diri yang lancar: nama, asal negara, profesi engineer, dan usia.",
    "body": "\n        <h4>👤 Pola Kalimat Identitas Dasar</h4>\n        <p>Di bahasa Mandarin, struktur kalimat identitas sangat mirip bahasa Indonesia, menggunakan kata kerja <b>是 (shì = adalah)</b> dan <b>叫 (jiào = dipanggil/bernama)</b>:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Pola Kalimat</th><th>Contoh Mandarin</th><th>Pinyin</th><th>Arti</th></tr></thead>\n          <tbody>\n            <tr><td><b>Nama:</b> 我叫...</td><td><span class=\"zh-char\">我叫苏普扬托。</span></td><td><span class=\"zh-pinyin\">Wǒ jiào Sūpǔyángtuō.</span></td><td>Nama saya Supriyanto.</td></tr>\n            <tr><td><b>Kewarganegaraan:</b> 我是...人</td><td><span class=\"zh-char\">我是印度尼西亚人。</span></td><td><span class=\"zh-pinyin\">Wǒ shì Yìndùníxīyà rén.</span></td><td>Saya orang Indonesia.</td></tr>\n            <tr><td><b>Profesi:</b> 我是...</td><td><span class=\"zh-char\">我是软件工程师。</span></td><td><span class=\"zh-pinyin\">Wǒ shì ruǎnjiàn gōngchéngshī.</span></td><td>Saya adalah Software Engineer.</td></tr>\n            <tr><td><b>Usia:</b> 我...岁</td><td><span class=\"zh-char\">我二十八岁。</span></td><td><span class=\"zh-pinyin\">Wǒ èrshíbā suì.</span></td><td>Saya berusia 28 tahun.</td></tr>\n            <tr><td><b>Senang bertemu:</b> 很高兴认识你</td><td><span class=\"zh-char\">很高兴认识你！</span></td><td><span class=\"zh-pinyin\">Hěn gāoxìng rènshi nǐ!</span></td><td>Senang sekali bisa mengenalmu!</td></tr>\n          </tbody>\n        </table>\n\n        <h4>💬 Naskah Dialog Perkenalan Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Percakapan Bertemu Rekan Baru</span>\nA: 你好！你叫什么名字？\n   <span class=\"st\">(Nǐ hǎo! Nǐ jiào shénme míngzi? - Halo! Siapa nama Anda?)</span>\n\nB: 你好！我叫苏普扬托。你是哪国人？\n   <span class=\"st\">(Nǐ hǎo! Wǒ jiào Sūpǔyángtuō. Nǐ shì nǎ guó rén? - Halo! Nama saya Supriyanto. Anda orang negara mana?)</span>\n\nA: 我是中国人。你是工程师吗？\n   <span class=\"st\">(Wǒ shì Zhōngguó rén. Nǐ shì gōngchéngshī ma? - Saya orang Tiongkok. Apakah Anda seorang engineer?)</span>\n\nB: 是的，我是软件工程师。很高兴认识你！\n   <span class=\"st\">(Shì de, wǒ shì ruǎnjiàn gōngchéngshī. Hěn gāoxìng rènshi nǐ! - Benar, saya software engineer. Senang berkenalan denganmu!)</span></div>\n      ",
    "quiz": {
     "q": "Bagaimana kalimat Supriyanto dalam bahasa Mandarin untuk menyatakan 'Saya orang Indonesia'?",
     "opts": [
      "Wǒ shì Yìndùníxīyà rén (我是印度尼西亚人)",
      "Wǒ jiào Yìndùníxīyà",
      "Nǐ shì Yìndùníxīyà rén ma?",
      "Yìndùníxīyà shì wǒ"
     ],
     "ans": 0,
     "why": "Dalam bahasa Mandarin, kewarganegaraan dibentuk dengan rumus [Nama Negara] + [人 (rén = orang)]. Sehingga 'orang Indonesia' adalah Yìndùníxīyà rén."
    }
   },
   {
    "id": "zh-04",
    "num": "04",
    "title": "Keluarga & Kepemilikan: 的 (de) & 有 (yǒu)",
    "level": "Pemula",
    "intro": "Menyatakan kepemilikan barang dengan partikel 的 (de) serta ada/tidak adanya sesuatu dengan 有 / 没有.",
    "body": "\n        <h4>🔑 Partikel Kepemilikan: 的 (de)</h4>\n        <p>Partikel <b>的 (de)</b> adalah salah satu kata paling sering digunakan dalam bahasa Mandarin. Fungsinya persis seperti akhiran <i>'s</i> dalam bahasa Inggris atau kata <i>milik / punya</i> dalam bahasa Indonesia:</p>\n        <ul>\n          <li><b>我的 (wǒ de)</b> = Milik saya / punyaku.</li>\n          <li><b>你的 (nǐ de)</b> = Milikmu / punyamu.</li>\n          <li><b>他的 (tā de)</b> = Miliknya (laki-laki).</li>\n          <li><b>苏普扬托的电脑 (Sūpǔyángtuō de diànnǎo)</b> = Komputer milik Supriyanto.</li>\n        </ul>\n\n        <h4>📦 Menyatakan Ada & Tidak Ada: 有 (yǒu) vs 没有 (méiyǒu)</h4>\n        <p>Untuk menyatakan keberadaan benda atau saudara:\n        <ul>\n          <li><b>Ada / Memiliki:</b> Gunakan <span class=\"zh-char\">有</span> (yǒu).\n            <br><i>Contoh:</i> 我有一个姐姐。(Wǒ yǒu yí gè jiějie. = Saya punya satu orang kakak perempuan).</li>\n          <li><b>Tidak Ada / Tidak Punya:</b> Wajib menggunakan <span class=\"zh-char\">没有</span> (méiyǒu). <b>PENTING: Jangan pernah mengatakan <s>不有 (bù yǒu)</s>!</b>\n            <br><i>Contoh:</i> 我没有弟弟。(Wǒ méiyǒu dìdi. = Saya tidak punya adik laki-laki).</li>\n        </ul>\n        </p>\n\n        <h4>👨‍👩‍👧‍👦 Anggota Keluarga Inti</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Hanzi</th><th>Pinyin</th><th>Arti</th><th>Trik Hafalan Cepat</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">爸爸</span></td><td><span class=\"zh-pinyin\">Bàba</span></td><td>Ayah</td><td>Mirip kata 'Bapak'</td></tr>\n            <tr><td><span class=\"zh-char\">妈妈</span></td><td><span class=\"zh-pinyin\">Māma</span></td><td>Ibu</td><td>Mirip kata 'Mama'</td></tr>\n            <tr><td><span class=\"zh-char\">哥哥</span></td><td><span class=\"zh-pinyin\">Gēge</span></td><td>Kakak laki-laki</td><td>Ingat 'Ge-ge' yang gagah</td></tr>\n            <tr><td><span class=\"zh-char\">姐姐</span></td><td><span class=\"zh-pinyin\">Jiějie</span></td><td>Kakak perempuan</td><td>Panggilan akrab 'Jie-jie'</td></tr>\n            <tr><td><span class=\"zh-char\">弟弟</span></td><td><span class=\"zh-pinyin\">Dìdi</span></td><td>Adik laki-laki</td><td>Adik kecil lincah</td></tr>\n            <tr><td><span class=\"zh-char\">妹妹</span></td><td><span class=\"zh-pinyin\">Mèimei</span></td><td>Adik perempuan</td><td>Panggilan imut 'Mei-mei'</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Bagaimana cara yang tepat untuk mengatakan 'Saya tidak punya mobil' dalam bahasa Mandarin?",
     "opts": [
      "Wǒ méiyǒu chē (我没有车)",
      "Wǒ bù yǒu chē (我不有车)",
      "Wǒ bú shì chē",
      "Chē bù wǒ yǒu"
     ],
     "ans": 0,
     "why": "Kata kerja 有 (yǒu = punya/ada) memiliki bentuk negasi khusus yaitu 没有 (méiyǒu). Mengatakan 'bù yǒu' adalah kesalahan tata bahasa yang sering dilakukan pemula."
    }
   },
   {
    "id": "zh-05",
    "num": "05",
    "title": "Jam, Tanggal & Pola Waktu Kalimat",
    "level": "Menengah",
    "intro": "Menyusun urutan waktu secara tepat: dari unit terbesar ke terkecil dan letak keterangan waktu dalam kalimat.",
    "body": "\n        <h4>⏰ Rumus Piramida Waktu Tiongkok (Besar → Kecil)</h4>\n        <p>Dalam budaya berpikir Mandarin, urutan informasi selalu bergerak dari <b>lingkup paling besar menuju lingkup paling kecil</b>:\n        <br><b>Tahun (年 nián) → Bulan (月 yuè) → Tanggal (号/日 hào/rì) → Jam (点 diǎn) → Menit (分 fēn)</b>.</p>\n        <p><i>Contoh:</i> 2026年9月3日 晚上8点 (Tahun 2026, September, tanggal 3, malam hari, jam 8).</p>\n\n        <h4>🗓️ Nama-Nama Hari yang Super Gampang</h4>\n        <p>Di bahasa Mandarin, Anda tidak perlu menghafal nama hari aneh-aneh. Cukup gabungkan kata <b>星期 (Xīngqī = Minggu/Pekan) + Angka 1 sampai 6</b>:\n        <ul>\n          <li>Senin = 星期一 (Xīngqī yī)</li>\n          <li>Selasa = 星期二 (Xīngqī èr)</li>\n          <li>Rabu = 星期三 (Xīngqī sān)</li>\n          <li>Kamis = 星期四 (Xīngqī sì)</li>\n          <li>Jumat = 星期五 (Xīngqī wǔ)</li>\n          <li>Sabtu = 星期六 (Xīngqī liù)</li>\n          <li><b>Minggu (Hari Ahad):</b> 星期天 (Xīngqī tiān) atau 星期日 (Xīngqī rì). <i>Bukan 星期七!</i></li>\n        </ul>\n        </p>\n\n        <h4>⚠️ Aturan Emas Tata Bahasa: Letak Waktu dalam Kalimat</h4>\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">⭐</span>\n          <div><b>Rumus Mutlak:</b> Dalam bahasa Indonesia kita bisa bilang <i>\"Saya makan jam 7\"</i> (waktu di belakang). Di bahasa Mandarin, waktu <b>WAJIB DILETAKKAN SEBELUM KATA KERJA</b>!\n          <br><b>Subjek + WAKTU + Kata Kerja + Objek</b>\n          <br>Contoh: 我 <b>晚上七点</b> 吃饭。(Wǒ wǎnshang qī diǎn chī fàn = Saya jam 7 malam makan).</div>\n        </div>\n      ",
    "quiz": {
     "q": "Manakah susunan kalimat bahasa Mandarin yang benar untuk 'Supriyanto besok pergi ke kantor'?",
     "opts": [
      "Sūpǔyángtuō míngtiān qù gōngsī (苏普扬托明天去公司)",
      "Sūpǔyángtuō qù gōngsī míngtiān",
      "Qù gōngsī Sūpǔyángtuō míngtiān",
      "Míngtiān qù Sūpǔyángtuō gōngsī"
     ],
     "ans": 0,
     "why": "Keterangan waktu (míngtiān = besok) wajib berada sebelum kata kerja (qù = pergi), baik langsung setelah subjek (Sūpǔyángtuō míngtiān qù...) atau di awal kalimat."
    }
   },
   {
    "id": "zh-06",
    "num": "06",
    "title": "Restoran, Kafe & Rasa Makanan",
    "level": "Menengah",
    "intro": "Trik memesan hidangan favorit, memilih tingkat kepedasan, memanggil pelayan, dan meminta bon pembayaran.",
    "body": "\n        <h4>🍜 Jurus Bertahan Hidup di Restoran Tiongkok</h4>\n        <p>Saat Supriyanto melangkah masuk ke restoran lokal, berikut kalimat sakti yang langsung membuat pelayan mengerti kebutuhan Anda:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Kalimat Mandarin</th><th>Pinyin</th><th>Arti</th><th>Situasi</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">服务员！</span></td><td><span class=\"zh-pinyin\">Fúwùyuán!</span></td><td>Pelayan! / Mas! Mbak!</td><td>Memanggil staf restoran dengan sopan</td></tr>\n            <tr><td><span class=\"zh-char\">我要这个。</span></td><td><span class=\"zh-pinyin\">Wǒ yào zhège.</span></td><td>Saya mau yang ini.</td><td>Sambil menunjuk foto di buku menu</td></tr>\n            <tr><td><span class=\"zh-char\">不要辣 / 不辣。</span></td><td><span class=\"zh-pinyin\">Bú yào là / Bù là.</span></td><td>Jangan pedas / Tidak pedas.</td><td>Sangat penting bagi yang tidak kuat cabe Sichuan</td></tr>\n            <tr><td><span class=\"zh-char\">微辣。</span></td><td><span class=\"zh-pinyin\">Wēi là.</span></td><td>Pedas sedikit saja.</td><td>Sensasi pedas tipis ramah lidah</td></tr>\n            <tr><td><span class=\"zh-char\">请给我一杯水。</span></td><td><span class=\"zh-pinyin\">Qǐng gěi wǒ yì bēi shuǐ.</span></td><td>Tolong beri saya segelas air.</td><td>Meminta air minum</td></tr>\n            <tr><td><span class=\"zh-char\">买单！/ 结账！</span></td><td><span class=\"zh-pinyin\">Mǎidān! / Jiézhàng!</span></td><td>Minta bon! / Bayar!</td><td>Selesai makan ingin membayar tagihan</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🥤 Minuman & Kosakata Rasa</h4>\n        <ul>\n          <li><b>Teh:</b> 茶 (Chá), Es Teh: 冰茶 (Bīng chá), Teh Susu / Boba: 奶茶 (Nǎichá).</li>\n          <li><b>Kopi:</b> 咖啡 (Kāfēi), Kopi Dingin: 冰咖啡 (Bīng kāfēi).</li>\n          <li><b>4 Rasa Dasar:</b> Manis = 甜 (Tián), Asin = 咸 (Xián), Asam = 酸 (Suān), Pedas = 辣 (Là).</li>\n          <li><b>Enak:</b> Makanan enak = 好吃 (Hǎochī), Minuman enak = 好喝 (Hǎohē).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Kalimat sakti apa yang harus diucapkan Supriyanto di restoran jika tidak bisa makan pedas?",
     "opts": [
      "Bú yào là (不要辣)",
      "Hěn là",
      "Duō fàng là",
      "Wǒ xǐhuan là"
     ],
     "ans": 0,
     "why": "Bú yào là (不要辣) berarti 'tidak mau pedas' (bú yào = tidak mau, là = pedas)."
    }
   },
   {
    "id": "zh-07",
    "num": "07",
    "title": "Belanja & Tawar-Menawar di Pasar",
    "level": "Menengah",
    "intro": "Seni berbelanja, menanyakan harga, jurus tawar-menawar ramah tapi ampuh, dan metode pembayaran digital.",
    "body": "\n        <h4>🛍️ Percakapan Tawar-Menawar Supriyanto</h4>\n        <p>Di pasar cinderamata atau toko pakaian, Anda bisa menghemat banyak uang dengan 3 jurus percakapan berikut:</p>\n\n        <div class=\"code-block\"><span class=\"cm\">// Percakapan Belanja Baju</span>\nSupriyanto: 老板，这件衣服多少钱？\n            <span class=\"st\">(Lǎobǎn, zhè jiàn yīfu duōshǎo qián? - Bos, baju ini berapa harganya?)</span>\n\nPenjual:    两百块。\n            <span class=\"st\">(Liǎng bǎi kuài. - 200 Yuan / Kuai.)</span>\n\nSupriyanto: 太贵了！能便宜一点吗？\n            <span class=\"st\">(Tài guì le! Néng piányi yīdiǎn ma? - Kemahalan! Bisa lebih murah sedikit?)</span>\n\nPenjual:    一百八，怎么样？\n            <span class=\"st\">(Yī bǎi bā, zěnmeyàng? - 180, bagaimana?)</span>\n\nSupriyanto: 一百五，可以吗？可以我就买。\n            <span class=\"st\">(Yī bǎi wǔ, kěyǐ ma? Kěyǐ wǒ jiù mǎi. - 150, boleh? Kalau boleh saya beli.)</span>\n\nPenjual:    好成交！微信还是支付宝？\n            <span class=\"st\">(Hǎo chéngjiāo! Wēixìn háishi Zhīfùbǎo? - Oke sepakat! Bayar pakai WeChat atau Alipay?)</span></div>\n\n        <h4>📱 Kata Kunci Pembayaran Modern</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Istilah</th><th>Pinyin</th><th>Arti & Catatan</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">块 / 元</span></td><td><span class=\"zh-pinyin\">Kuài / Yuán</span></td><td>Satuan mata uang (Kuài untuk lisan, Yuán untuk tulisan resmi)</td></tr>\n            <tr><td><span class=\"zh-char\">微信支付</span></td><td><span class=\"zh-pinyin\">Wēixìn zhīfù</span></td><td>WeChat Pay (Scan barcode QR hijau)</td></tr>\n            <tr><td><span class=\"zh-char\">支付宝</span></td><td><span class=\"zh-pinyin\">Zhīfùbǎo</span></td><td>Alipay (Scan barcode QR biru)</td></tr>\n            <tr><td><span class=\"zh-char\">我扫你</span></td><td><span class=\"zh-pinyin\">Wǒ sǎo nǐ</span></td><td>Saya scan barcode Anda (sǎo = memindai QR code)</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Apa arti dari ungkapan tawar-menawar populer: 'Tài guì le! Néng piányi yīdiǎn ma?' (太贵了！能便宜一点吗？)?",
     "opts": [
      "Kemahalan! Bisa lebih murah sedikit?",
      "Sangat murah! Saya mau beli sepuluh",
      "Barang ini warnanya tidak bagus",
      "Tolong bungkus pakai plastik hitam"
     ],
     "ans": 0,
     "why": "Tài guì le (太贵了) = Terlalu mahal / kemahalan! Néng piányi yīdiǎn ma? (能便宜一点吗？) = Bisakah lebih murah sedikit?"
    }
   },
   {
    "id": "zh-08",
    "num": "08",
    "title": "Arah, Navigasi & Transportasi Kota",
    "level": "Menengah",
    "intro": "Menanyakan jalan saat tersesat, naik taksi, panduan naik kereta bawah tanah (MRT/Subway), dan penunjuk arah.",
    "body": "\n        <h4>🧭 4 Mata Angin & Arah Belok</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Arah / Gerakan</th><th>Hanzi</th><th>Pinyin</th><th>Contoh Penggunaan</th></tr></thead>\n          <tbody>\n            <tr><td>Depan</td><td><span class=\"zh-char\">前</span></td><td><span class=\"zh-pinyin\">Qián</span></td><td>向前走 (Xiàng qián zǒu - Jalan lurus ke depan)</td></tr>\n            <tr><td>Belakang</td><td><span class=\"zh-char\">后</span></td><td><span class=\"zh-pinyin\">Hòu</span></td><td>在后面 (Zài hòumian - Di belakang)</td></tr>\n            <tr><td>Kiri & Belok Kiri</td><td><span class=\"zh-char\">左 / 左拐</span></td><td><span class=\"zh-pinyin\">Zuǒ / Zuǒ guǎi</span></td><td>往左拐 (Wǎng zuǒ guǎi - Belok ke kiri)</td></tr>\n            <tr><td>Kanan & Belok Kanan</td><td><span class=\"zh-char\">右 / 右拐</span></td><td><span class=\"zh-pinyin\">Yòu / Yòu guǎi</span></td><td>往右拐 (Wǎng yòu guǎi - Belok ke kanan)</td></tr>\n            <tr><td>Lurus Terus</td><td><span class=\"zh-char\">一直走</span></td><td><span class=\"zh-pinyin\">Yìzhí zǒu</span></td><td>一直往前走 (Yìzhí wǎng qián zǒu - Lurus terus ke depan)</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🚕 Naik Taksi & Tanya Jalan dengan Sopan</h4>\n        <p>Gunakan awalan <b>请问 (Qǐngwèn = Permisi numpang tanya)</b> sebelum bertanya arah:</p>\n        <div class=\"code-block\"><span class=\"cm\">// Supriyanto di dalam Taksi</span>\nSopir:       去哪里？(Qù nǎlǐ? - Mau pergi ke mana?)\nSupriyanto:  师傅，我去北京饭店。(Shīfu, wǒ qù Běijīng Fàndiàn. - Pak sopir, saya mau ke Hotel Beijing.)\nSopir:       好的。(Hǎo de. - Baik.)\nSupriyanto:  请问，到那里要多长时间？(Qǐngwèn, dào nàlǐ yào duō cháng shíjiān? - Numpang tanya, sampai sana butuh berapa lama?)\nSopir:       大概二十分钟。(Dàgài èrshí fēnzhōng. - Sekitar 20 menit.)</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🚇</span>\n          <div><b>Kosa Kata Transportasi Umum:</b> Kereta MRT / Subway = 地铁 (Dìtiě), Bus = 公交车 (Gōngjiāochē), Kereta Cepat = 高铁 (Gāotiě), Stasiun = 站 (Zhàn). Contoh: 地铁站在哪里？(Dìtiě zhàn zài nǎlǐ? = Stasiun MRT ada di mana?).</div>\n        </div>\n      ",
    "quiz": {
     "q": "Bagaimana cara memberi instruksi kepada sopir taksi untuk 'Belok ke kanan' dalam bahasa Mandarin?",
     "opts": [
      "Wǎng yòu guǎi (往右拐)",
      "Wǎng zuǒ guǎi",
      "Yìzhí zǒu",
      "Tíng zài zhèlǐ"
     ],
     "ans": 0,
     "why": "Yòu (右) berarti kanan, guǎi (拐) berarti belok atau memutar. Sehingga wǎng yòu guǎi berarti berbelok ke arah kanan."
    }
   },
   {
    "id": "zh-09",
    "num": "09",
    "title": "Rutinitas Harian & Jadwal Supriyanto",
    "level": "Menengah",
    "intro": "Menceritakan jadwal keseharian dari pagi hingga malam dengan kata sambung urutan waktu.",
    "body": "\n        <h4>☀️ Jadwal Sehari Penuh Supriyanto</h4>\n        <p>Untuk menceritakan alur kegiatan sehari-hari, gunakan rumus urutan waktu: <b>先... 然后... (Xiān... ránhòu... = Pertama... lalu kemudian...)</b>.</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Waktu</th><th>Kegiatan (Hanzi & Pinyin)</th><th>Arti</th></tr></thead>\n          <tbody>\n            <tr><td>07:00</td><td><span class=\"zh-char\">起床</span> (<span class=\"zh-pinyin\">Qǐchuáng</span>)</td><td>Bangun tidur</td></tr>\n            <tr><td>07:30</td><td><span class=\"zh-char\">吃早饭</span> (<span class=\"zh-pinyin\">Chī zǎofàn</span>)</td><td>Sarapan pagi</td></tr>\n            <tr><td>08:30</td><td><span class=\"zh-char\">去上班</span> (<span class=\"zh-pinyin\">Qù shàngbān</span>)</td><td>Berangkat kerja ke kantor</td></tr>\n            <tr><td>12:00</td><td><span class=\"zh-char\">吃午饭</span> (<span class=\"zh-pinyin\">Chī wǔfàn</span>)</td><td>Makan siang</td></tr>\n            <tr><td>18:00</td><td><span class=\"zh-char\">下班回家</span> (<span class=\"zh-pinyin\">Xiàbān huíjiā</span>)</td><td>Pulang kerja ke rumah</td></tr>\n            <tr><td>19:30</td><td><span class=\"zh-char\">吃晚饭 & 学习</span> (<span class=\"zh-pinyin\">Chī wǎnfàn & xuéxí</span>)</td><td>Makan malam & belajar</td></tr>\n            <tr><td>23:00</td><td><span class=\"zh-char\">睡觉</span> (<span class=\"zh-pinyin\">Shuìjiào</span>)</td><td>Tidur malam</td></tr>\n          </tbody>\n        </table>\n\n        <h4>📖 Cerita Keseharian Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Paragraf Bercerita Supriyanto</span>\n我每天早上七点起床，先洗澡，然后吃早饭。\n<span class=\"st\">(Wǒ měitiān zǎoshang qī diǎn qǐchuáng, xiān xǐzǎo, ránhòu chī zǎofàn. - Saya setiap hari bangun jam 7 pagi, mandi dulu, lalu sarapan.)</span>\n\n八点半我去公司上班。我是软件工程师，平时工作很忙。\n<span class=\"st\">(Bā diǎn bàn wǒ qù gōngsī shàngbān. Wǒ shì ruǎnjiàn gōngchéngshī, píngshí gōngzuò hěn máng. - Jam 8.30 saya berangkat kerja ke kantor. Saya software engineer, biasanya kerjaan sangat sibuk.)</span>\n\n晚上六点下班回家，我喜欢一边喝茶一边看书。\n<span class=\"st\">(Wǎnshang liù diǎn xiàbān huíjiā, wǒ xǐhuan yìbiān hē chá yìbiān kàn shū. - Jam 6 sore pulang kerja, saya suka sambil minum teh sambil membaca buku.)</span></div>\n      ",
    "quiz": {
     "q": "Kata sambung apa yang digunakan untuk menyatakan 'Pertama... lalu kemudian...' dalam bahasa Mandarin?",
     "opts": [
      "Xiān... ránhòu... (先... 然后...)",
      "Bùdàn... érqiě...",
      "Yīnwèi... suǒyǐ...",
      "Suīrán... dànshì..."
     ],
     "ans": 0,
     "why": "Pasangan kata sambung xiān... ránhòu... (先... 然后...) digunakan secara luas untuk menceritakan urutan kronologis kejadian (pertama... lalu...)."
    }
   },
   {
    "id": "zh-10",
    "num": "10",
    "title": "Mengungkapkan Keinginan & Kemampuan",
    "level": "Menengah",
    "intro": "Membongkar perbedaan 4 kata bantu paling penting: 想 (ingin), 要 (mau), 会 (bisa belajar), dan 能 (mampu).",
    "body": "\n        <h4>🧠 Jangan Tertukar: 想 vs 要 vs 会 vs 能</h4>\n        <p>Empat kata ini sering membingungkan orang Indonesia karena sama-sama sering diterjemahkan sebagai <i>'mau'</i> atau <i>'bisa'</i>. Berikut perbedaan tegasnya:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Kata</th><th>Pinyin</th><th>Nuansa & Kapan Digunakan</th><th>Contoh Kalimat</th></tr></thead>\n          <tbody>\n            <tr>\n              <td><span class=\"zh-char\">想</span></td>\n              <td><span class=\"zh-pinyin\">Xiǎng</span></td>\n              <td><b>Kepingin / Berharap di angan-angan</b> (belum tentu segera dilakukan). Juga berarti rindu/kangen.</td>\n              <td>我想去中国旅游。(Wǒ xiǎng qù Zhōngguó lǚyóu = Saya kepingin liburan ke Tiongkok).</td>\n            </tr>\n            <tr>\n              <td><span class=\"zh-char\">要</span></td>\n              <td><span class=\"zh-pinyin\">Yào</span></td>\n              <td><b>Mau / Bertekad kuat / Wajib</b> (pasti dilakukan segera atau menuntut sesuatu).</td>\n              <td>我要买这台电脑。(Wǒ yào mǎi zhè tái diànnǎo = Saya mau beli laptop ini!).</td>\n            </tr>\n            <tr>\n              <td><span class=\"zh-char\">会</span></td>\n              <td><span class=\"zh-pinyin\">Huì</span></td>\n              <td><b>Bisa karena telah dipelajari / skill</b> (bisa berenang, bahasa Mandarin, koding).</td>\n              <td>苏普扬托会说中文。(Sūpǔyángtuō huì shuō Zhōngwén = Supriyanto bisa bicara bahasa Mandarin).</td>\n            </tr>\n            <tr>\n              <td><span class=\"zh-char\">能</span></td>\n              <td><span class=\"zh-pinyin\">Néng</span></td>\n              <td><b>Mampu / Bisa secara fisik / Izin situasi</b>.</td>\n              <td>今天我感冒了，不能上班。(Jīntiān wǒ gǎnmào le, bù néng shàngbān = Hari ini saya flu, tidak mampu kerja).</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🎯</span>\n          <div><b>Trik Uji Logika:</b> Bisakah Supriyanto berenang? → Gunakan <b>会 (Huì)</b> karena berenang butuh belajar. Tapi jika kolam renangnya sedang kotor dan dilarang masuk → Gunakan <b>不能 (Bù néng)</b> karena situasinya tidak mengizinkan!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Kata apa yang tepat untuk mengisi kalimat kemampuan skill Supriyanto: 'Sūpǔyángtuō ___ kāi chē' (Supriyanto bisa menyetir mobil karena sudah lulus kursus)?",
     "opts": [
      "Huì (会)",
      "Xiǎng (想)",
      "Néng (能)",
      "Yào (要)"
     ],
     "ans": 0,
     "why": "Kata 会 (huì) digunakan khusus untuk kemampuan atau keahlian yang didapatkan dari proses belajar atau latihan (seperti menyetir, memasak, bahasa asing)."
    }
   },
   {
    "id": "zh-11",
    "num": "11",
    "title": "Janjian, Menelpon & Chatting WeChat",
    "level": "Mahir",
    "intro": "Etika bertukar kontak WeChat (Weixin), etika menelpon, membuat janji temu, dan mengirim lokasi.",
    "body": "\n        <h4>💬 Jurus Menambah Teman WeChat: 加个微信</h4>\n        <p>Di Tiongkok dan diaspora, kartu nama kertas sudah digantikan oleh akun <b>WeChat (微信 Wēixìn)</b>. Kalimat paling ampuh untuk menjalin pertemanan adalah:</p>\n        <div class=\"code-block\"><span class=\"cm\">// Menambah Kontak Baru</span>\nSupriyanto: 我们加个微信吧！方便以后联系。\n            <span class=\"st\">(Wǒmen jiā gè Wēixìn ba! Fāngbiàn yǐhòu liánxì. - Ayo kita berteman di WeChat! Biar gampang saling kontak.)</span>\n\nTeman:      好啊，我扫你还是你扫我？\n            <span class=\"st\">(Hǎo a, wǒ sǎo nǐ háishi nǐ sǎo wǒ? - Boleh, saya yang scan kamu atau kamu yang scan saya?)</span>\n\nSupriyanto: 我扫你吧，这是我的二维码。\n            <span class=\"st\">(Wǒ sǎo nǐ ba, zhè shì wǒ de èrwéimǎ. - Saya scan barcode kamu saja, ini kode QR saya.)</span></div>\n\n        <h4>📞 Etika Berbicara di Telepon</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Kalimat Telepon</th><th>Pinyin</th><th>Arti</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">喂，你好！</span></td><td><span class=\"zh-pinyin\">Wèi, nǐ hǎo!</span></td><td>Halo! (Wèi bernada ke-2 atau ke-4)</td><td>Kata pembuka saat mengangkat telepon</td></tr>\n            <tr><td><span class=\"zh-char\">请问，张经理在吗？</span></td><td><span class=\"zh-pinyin\">Qǐngwèn, Zhāng jīnglǐ zài ma?</span></td><td>Bolehkah numpang tanya, Manajer Zhang ada?</td><td>Mencari seseorang di telepon</td></tr>\n            <tr><td><span class=\"zh-char\">他在开会，请稍等。</span></td><td><span class=\"zh-pinyin\">Tā zài kāihuì, qǐng shāoděng.</span></td><td>Beliau sedang rapat, tolong tunggu sebentar.</td><td>Situasi sedang sibuk</td></tr>\n            <tr><td><span class=\"zh-char\">我们明天下午三点见。</span></td><td><span class=\"zh-pinyin\">Wǒmen míngtiān xiàwǔ sān diǎn jiàn.</span></td><td>Kita besok jam 3 sore ketemu ya.</td><td>Menentukan waktu janjian</td></tr>\n            <tr><td><span class=\"zh-char\">不见不散！</span></td><td><span class=\"zh-pinyin\">Bú jiàn bú sàn!</span></td><td>Jangan pulang sebelum kita ketemu! (Janji pasti datang)</td><td>Ungkapan persahabatan populer saat janjian</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Apa kata pertama yang diucapkan oleh orang penutur Mandarin saat mengangkat telepon?",
     "opts": [
      "Wèi! (喂！)",
      "Zàijiàn!",
      "Xièxie!",
      "Duìbuqǐ!"
     ],
     "ans": 0,
     "why": "Karakter 喂 (wèi) adalah kata seru standar universal untuk membuka percakapan telepon ('Halo!') dalam bahasa Mandarin."
    }
   },
   {
    "id": "zh-12",
    "num": "12",
    "title": "Cuaca, Musim & Obrolan Santai (Small Talk)",
    "level": "Mahir",
    "intro": "Topik pencair suasana paling alami: membahas cuaca, pergantian musim, dan hobi santai.",
    "body": "\n        <h4>🌤️ Kosakata Cuaca Sehari-hari</h4>\n        <p>Ketika lift canggung atau sedang menunggu pesanan kopi bersama rekan kerja, obrolan cuaca adalah pemecah keheningan paling aman:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Cuaca / Kondisi</th><th>Hanzi</th><th>Pinyin</th><th>Contoh Percakapan</th></tr></thead>\n          <tbody>\n            <tr><td>Cerah / Bagus</td><td><span class=\"zh-char\">晴天 / 好天气</span></td><td><span class=\"zh-pinyin\">Qíngtiān / Hǎo tiānqì</span></td><td>今天天气真好！(Hari ini cuacanya bagus sekali!)</td></tr>\n            <tr><td>Hujan</td><td><span class=\"zh-char\">下雨</span></td><td><span class=\"zh-pinyin\">Xiàyǔ</span></td><td>外面下大雨了。(Di luar sedang hujan lebat).</td></tr>\n            <tr><td>Sangat Panas</td><td><span class=\"zh-char\">很热</span></td><td><span class=\"zh-pinyin\">Hěn rè</span></td><td>今天太热了，去吃冰淇淋吧。(Panas banget, ayo makan es krim).</td></tr>\n            <tr><td>Sangat Dingin</td><td><span class=\"zh-char\">很冷</span></td><td><span class=\"zh-pinyin\">Hěn lěng</span></td><td>北京的冬天非常冷。(Musim dingin Beijing sangat dingin).</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🍂 4 Musim (Chūn, Xià, Qiū, Dōng)</h4>\n        <ul>\n          <li><b>Musim Semi:</b> 春天 (Chūntiān) — Udara sejuk, bunga bermekaran.</li>\n          <li><b>Musim Panas:</b> 夏天 (Xiàtiān) — Terik matahari dan semangka segar.</li>\n          <li><b>Musim Gugur:</b> 秋天 (Qiūtiān) — Daun menguning keemasan, suhu paling nyaman.</li>\n          <li><b>Musim Dingin:</b> 冬天 (Dōngtiān) — Salju turun (下雪 xiàxuě).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Bagaimana cara Supriyanto mengatakan 'Hari ini cuaca sangat bagus' dalam bahasa Mandarin?",
     "opts": [
      "Jīntiān tiānqì hěn hǎo (今天天气很好)",
      "Jīntiān hěn rè tiānqì",
      "Tiānqì bù hǎo jīntiān",
      "Xiàyǔ jīntiān hěn hǎo"
     ],
     "ans": 0,
     "why": "Jīntiān (hari ini) + tiānqì (cuaca) + hěn hǎo (sangat bagus) adalah susunan alami yang paling sering digunakan penutur asli."
    }
   },
   {
    "id": "zh-13",
    "num": "13",
    "title": "Kesehatan, Apotek & Situasi Darurat",
    "level": "Mahir",
    "intro": "Menyampaikan keluhan rasa sakit, membeli obat di apotek, dan meminta pertolongan darurat medis.",
    "body": "\n        <h4>🏥 Menyampaikan Keluhan Tubuh di Rumah Sakit</h4>\n        <p>Pola dasar menyampaikan sakit adalah: <b>我 + [Bagian Tubuh] + 疼 (Téng = Sakit/Nyeri)</b>:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Keluhan Sakit</th><th>Hanzi</th><th>Pinyin</th><th>Arti</th></tr></thead>\n          <tbody>\n            <tr><td>Sakit Kepala</td><td><span class=\"zh-char\">头疼</span></td><td><span class=\"zh-pinyin\">Tóu téng</span></td><td>Kepala pusing / nyeri</td></tr>\n            <tr><td>Sakit Perut</td><td><span class=\"zh-char\">肚子疼</span></td><td><span class=\"zh-pinyin\">Dùzi téng</span></td><td>Perut mules / melilit</td></tr>\n            <tr><td>Demam Panas</td><td><span class=\"zh-char\">发烧</span></td><td><span class=\"zh-pinyin\">Fāshāo</span></td><td>Suhu tubuh tinggi</td></tr>\n            <tr><td>Masuk Angin / Flu</td><td><span class=\"zh-char\">感冒</span></td><td><span class=\"zh-pinyin\">Gǎnmào</span></td><td>Bersin, hidung mampet</td></tr>\n            <tr><td>Batuk</td><td><span class=\"zh-char\">咳嗽</span></td><td><span class=\"zh-pinyin\">Késou</span></td><td>Batuk kering / berdahak</td></tr>\n          </tbody>\n        </table>\n\n        <h4>💊 Dialog Supriyanto di Apotek (药店 Yàodiàn)</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Membeli Obat Flu & Pusing</span>\nSupriyanto: 您好，我头疼，有点发烧。有退烧药吗？\n            <span class=\"st\">(Nín hǎo, wǒ tóu téng, yǒudiǎn fāshāo. Yǒu tuìshāoyào ma? - Halo, kepala saya sakit dan agak demam. Ada obat penurun panas?)</span>\n\nApoteker:   有的。这个药每天吃三次，饭后吃，一次一片。\n            <span class=\"st\">(Yǒu de. Zhège yào měitiān chī sān cì, fànhòu chī, yí cì yí piàn. - Ada. Obat ini diminum 3 kali sehari, sesudah makan, sekali minum 1 tablet.)</span>\n\nSupriyanto: 好的，多喝热水，谢谢！\n            <span class=\"st\">(Hǎo de, duō hē rè shuǐ, xièxie! - Baik, banyak minum air hangat, terima kasih!)</span></div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🚨</span>\n          <div><b>Nomor Darurat di Tiongkok:</b> Polisi = <b>110</b>, Pemadam Kebakaran = <b>119</b>, Ambulans Rumah Sakit = <b>120</b>. Kata teriak darurat minta tolong: <b>救命！(Jiùmìng! = Tolong saya!)</b>.</div>\n        </div>\n      ",
    "quiz": {
     "q": "Jika Supriyanto mengalami sakit kepala berdenyut, kata apa yang harus disampaikan ke dokter?",
     "opts": [
      "Wǒ tóu téng (我头疼)",
      "Wǒ dùzi téng",
      "Wǒ jiǎo téng",
      "Wǒ hěn gāoxìng"
     ],
     "ans": 0,
     "why": "Tóu (头) berarti kepala, téng (疼) berarti sakit/nyeri. Wǒ tóu téng artinya 'Saya sakit kepala'."
    }
   },
   {
    "id": "zh-14",
    "num": "14",
    "title": "Mengekspresikan Opini & Perasaan",
    "level": "Mahir",
    "intro": "Menyampaikan sudut pandang pribadi, persetujuan, keraguan, dan nuansa emosional dalam diskusi.",
    "body": "\n        <h4>💬 Ungkapan Opini: 我觉得 (Menurut Saya)</h4>\n        <p>Untuk terdengar lebih bijak dan berbobot dalam percakapan dewasa, gunakan frasa pembuka opini berikut:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Frasa Opini</th><th>Pinyin</th><th>Arti</th><th>Contoh Kalimat</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">我觉得...</span></td><td><span class=\"zh-pinyin\">Wǒ juéde...</span></td><td>Menurut saya / Saya merasa...</td><td>我觉得这个方案很好。(Menurut saya rencana ini sangat bagus).</td></tr>\n            <tr><td><span class=\"zh-char\">我同意。</span></td><td><span class=\"zh-pinyin\">Wǒ tóngyì.</span></td><td>Saya setuju.</td><td>完全同意！(Setuju total!).</td></tr>\n            <tr><td><span class=\"zh-char\">我不这么认为。</span></td><td><span class=\"zh-pinyin\">Wǒ bù zhème rènwéi.</span></td><td>Saya tidak berpendapat demikian.</td><td>Menolak pendapat orang lain secara sopan.</td></tr>\n            <tr><td><span class=\"zh-char\">依我看...</span></td><td><span class=\"zh-pinyin\">Yī wǒ kàn...</span></td><td>Dari sudut pandang saya...</td><td>Cocok untuk meeting resmi.</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🎭 Mengungkapkan Perasaan Hati</h4>\n        <ul>\n          <li><b>Senang / Gembira:</b> 开心 (Kāixīn) / 高兴 (Gāoxìng). <i>Contoh: 今天认识大家我很开心！</i></li>\n          <li><b>Khawatir / Cemas:</b> 担心 (Dānxīn). <i>Contoh: 别担心，没问题！(Jangan cemas, aman!).</i></li>\n          <li><b>Kaget / Heran:</b> 惊讶 (Jīngyà) / 没想到 (Méi xiǎngdào - Tidak disangka-sangka).</li>\n          <li><b>Lelah / Capek:</b> 累 (Lèi). <i>Contoh: 今天工作太累了。(Hari ini kerjaan capek banget).</i></li>\n        </ul>\n      ",
    "quiz": {
     "q": "Frasa apa yang paling lazim digunakan untuk memulai penyampaian pendapat pribadi ('Menurut saya...')?",
     "opts": [
      "Wǒ juéde... (我觉得...)",
      "Wǒ bú yào...",
      "Wǒ zàijiàn...",
      "Wǒ méiyǒu..."
     ],
     "ans": 0,
     "why": "Karakter 觉得 (juéde) berarti merasa atau berpendapat. 'Wǒ juéde...' adalah cara paling alami dan sopan untuk menyampaikan opini pribadi."
    }
   },
   {
    "id": "zh-15",
    "num": "15",
    "title": "Dunia Kerja & Komunikasi Kantor Supriyanto",
    "level": "Expert",
    "intro": "Kosakata profesional untuk rapat (meeting), kolaborasi proyek teknologi, email kantor, dan negosiasi bisnis.",
    "body": "\n        <h4>💼 Kosakata Kantor & IT Modern</h4>\n        <p>Bagi profesional yang bekerja dengan rekan atau perusahaan internasional, istilah berikut wajib dikuasai:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Istilah Kantor</th><th>Pinyin</th><th>Arti</th><th>Penggunaan Lapangan</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">开会</span></td><td><span class=\"zh-pinyin\">Kāihuì</span></td><td>Rapat / Meeting</td><td>下午两点我们要开会。(Jam 2 siang kita rapat).</td></tr>\n            <tr><td><span class=\"zh-char\">发邮件</span></td><td><span class=\"zh-pinyin\">Fā yóujiàn</span></td><td>Kirim email</td><td>我把报告发你邮件了。(Laporannya sudah saya email ke kamu).</td></tr>\n            <tr><td><span class=\"zh-char\">项目进度</span></td><td><span class=\"zh-pinyin\">Xiàngmù jìndù</span></td><td>Progres proyek</td><td>讨论项目进度。(Mendiskusikan progres proyek).</td></tr>\n            <tr><td><span class=\"zh-char\">改代码 / Bug</span></td><td><span class=\"zh-pinyin\">Gǎi dàimǎ / Bug</span></td><td>Memperbaiki kode</td><td>苏普扬托正在改代码。(Supriyanto sedang memperbaiki kode program).</td></tr>\n            <tr><td><span class=\"zh-char\">加班</span></td><td><span class=\"zh-pinyin\">Jiābān</span></td><td>Lembur kerja</td><td>今天不需要加班！(Hari ini tidak perlu lembur!).</td></tr>\n            <tr><td><span class=\"zh-char\">合作愉快</span></td><td><span class=\"zh-pinyin\">Hézuò yúkuài</span></td><td>Senang bekerja sama dengan Anda</td><td>Ucapan resmi penutup kesepakatan bisnis</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🤝 Dialog Supriyanto dalam Rapat Proyek</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Meeting Evaluasi Fitur Baru</span>\nManajer:   苏普扬托，新功能测试得怎么样了？\n           <span class=\"st\">(Sūpǔyángtuō, xīn gōngnéng cèshì de zěnmeyàng le? - Supriyanto, pengujian fitur baru bagaimana hasilnya?)</span>\n\nSupriyanto: 报告经理，自动化测试全部通过了，系统很稳定！\n           <span class=\"st\">(Bàogào jīnglǐ, zìdònghuà cèshì quánbù tōngguò le, xìtǒng hěn wěndìng! - Lapor Manajer, automated test semuanya lolos, sistem sangat stabil!)</span>\n\nManajer:   太棒了！大家辛苦了！\n           <span class=\"st\">(Tài bàng le! Dàjiā xīnkǔ le! - Luar biasa! Terima kasih atas kerja keras rekan-rekan semua!)</span></div>\n      ",
    "quiz": {
     "q": "Ungkapan profesional apa yang diucapkan saat menutup kesepakatan kerja sama bisnis dengan rekan kerja ('Senang bisa bekerja sama!')?",
     "opts": [
      "Hézuò yúkuài! (合作愉快！)",
      "Bú kèqi!",
      "Duìbuqǐ!",
      "Tài guì le!"
     ],
     "ans": 0,
     "why": "Hézuò (合作 = kerja sama) dan Yúkuài (愉快 = bahagia/menyenangkan). 'Hézuò yúkuài!' adalah salam penutup kemitraan bisnis yang sangat terhormat."
    }
   },
   {
    "id": "zh-16",
    "num": "16",
    "title": "Rahasia Menghafal Hanzi & Metode Fasih Otodidak",
    "level": "Expert",
    "intro": "Membongkar rahasia 10 radikal piktogram gambar, teknik audio Shadowing, dan peta jalan menuju sertifikasi HSK.",
    "body": "\n        <h4>🧩 Rahasia Hanzi: Karakter Mandarin Adalah Kumpulan Balok Lego!</h4>\n        <p>Banyak orang menyerah belajar karakter Mandarin (Hanzi) karena mengira harus menghafal ribuan coretan acak. <b>Itu cara yang keliru!</b></p>\n        <p>Faktanya, 90% karakter Mandarin tersusun dari <b>Radikal (Akar Gambar)</b> yang memiliki arti konsisten:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Radikal</th><th>Nama & Makna Asli</th><th>Contoh Hanzi</th><th>Arti yang Berkaitan</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"zh-char\">亻</span></td><td>Orang (Rén zì páng)</td><td><span class=\"zh-char\">你, 他, 们</span></td><td>Semua berhubungan dengan manusia</td></tr>\n            <tr><td><span class=\"zh-char\">氵</span></td><td>Tiga Tetes Air (Sān diǎn shuǐ)</td><td><span class=\"zh-char\">海, 河, 洗</span></td><td>Semua berhubungan dengan air (laut, sungai, cuci)</td></tr>\n            <tr><td><span class=\"zh-char\">口</span></td><td>Mulut (Kǒu)</td><td><span class=\"zh-char\">吃, 喝, 叫</span></td><td>Semua kegiatan mulut (makan, minum, memanggil)</td></tr>\n            <tr><td><span class=\"zh-char\">木</span></td><td>Pohon / Kayu (Mù)</td><td><span class=\"zh-char\">林, 森, 桌</span></td><td>Hutan, rimba, meja kayu</td></tr>\n            <tr><td><span class=\"zh-char\">忄</span></td><td>Hati / Perasaan (Shù xīn páng)</td><td><span class=\"zh-char\">快, 慢, 怕</span></td><td>Gembira, lambat, takut (perasaan emosi)</td></tr>\n            <tr><td><span class=\"zh-char\">饣</span></td><td>Makanan (Shí zì páng)</td><td><span class=\"zh-char\">饭, 饮, 饱</span></td><td>Nasi, minuman, kenyang</td></tr>\n            <tr><td><span class=\"zh-char\">讠</span></td><td>Kata / Ucapan (Yán zì páng)</td><td><span class=\"zh-char\">说, 话, 语</span></td><td>Berbicara, obrolan, bahasa</td></tr>\n            <tr><td><span class=\"zh-char\">火 / 灬</span></td><td>Api (Huǒ)</td><td><span class=\"zh-char\">热, 烧, 烤</span></td><td>Panas, demam/bakar, memanggang</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🎙️ Teknik Belajar Mandiri Paling Ampuh: Shadowing</h4>\n        <p>Untuk mencapai kefasihan alami berbicara (*Conversational Fluency*):\n        <ol>\n          <li><b>Metode Shadowing:</b> Dengarkan audio percakapan penutur asli (podcast/drama Mandarin), tirukan intonasi nada dan gerak mulutnya secara langsung dengan jeda 0.5 detik seperti bayangan (*shadow*).</li>\n          <li><b>Jangan Takut Salah Nada:</b> Konteks kalimat akan membantu lawan bicara mengerti maksud Anda. Semakin sering Anda berbicara tanpa rasa minder, semakin tajam refleks lidah Anda!</li>\n          <li><b>Peta Jalan HSK:</b>\n            <br>• <b>HSK 1:</b> 150 kata (Fondasi survival).\n            <br>• <b>HSK 2:</b> 300 kata (Conversational harian — *seluruh isi modul ini!*).\n            <br>• <b>HSK 3–4:</b> 600–1200 kata (Lancar bekerja dan tinggal mandiri di Tiongkok).\n          </li>\n        </ol>\n        </p>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat Supriyanto!</b> Anda telah menuntaskan seluruh kurikulum Mandarin 16 Modul Conversational. Uji kemampuan pemahaman Anda dengan mengikuti <b>Quiz Mandarin 🇨🇳</b>! 加油！(Jiāyóu! Semangat!).</div>\n        </div>\n      ",
    "quiz": {
     "q": "Jika sebuah karakter Hanzi memiliki radikal '氵' (tiga tetes air), kemungkinan besar arti karakter tersebut berkaitan dengan apa?",
     "opts": [
      "Benda cair, air, sungai, atau aktivitas mencuci",
      "Hewan berkaki empat",
      "Logam emas dan perak",
      "Kendaraan bermotor"
     ],
     "ans": 0,
     "why": "Radikal 氵 (sān diǎn shuǐ / tiga tetes air) adalah piktogram air yang selalu menjadi pembentuk karakter-karakter bertema cairan seperti hǎi (laut), hé (sungai), dan xǐ (mencuci)."
    }
   }
  ]
 }
];

const QUIZ_BANK = [
 {
  "track": "js",
  "topic": "Variabel — Kotak Penyimpanan",
  "q": "Manakah yang benar untuk membuat variabel yang nilainya TIDAK BISA diubah?",
  "opts": [
   "let nama = \"Supriyanto\"",
   "const nama = \"Supriyanto\"",
   "var nama = \"Supriyanto\"",
   "nama = \"Supriyanto\""
  ],
  "ans": 1,
  "why": "const artinya konstan = tetap. Sekali diisi, tidak bisa diubah."
 },
 {
  "track": "js",
  "topic": "Operator — Mesin Hitung & Logika",
  "q": "Hasil dari 10 % 3 adalah...",
  "opts": [
   "3",
   "1",
   "0",
   "10 / 3"
  ],
  "ans": 1,
  "why": "% itu sisa bagi. 10 dibagi 3 = 3 sisa 1. Jadi hasilnya 1."
 },
 {
  "track": "js",
  "topic": "String — Ngobrol Sama Teks",
  "q": "Template literal di JavaScript pakai tanda...",
  "opts": [
   "\"kutip dua\"",
   "'kutip satu'",
   "`backtick`",
   "(kurung)"
  ],
  "ans": 2,
  "why": "Template literal pakai backtick (`...`), bukan kutip biasa. Contoh: `Halo ${nama}`."
 },
 {
  "track": "js",
  "topic": "If/Else — Jalan Bercabang",
  "q": "Apa output dari: umur = 17; if (umur >= 18) \"Dewasa\" else \"Bocil\"?",
  "opts": [
   "Dewasa",
   "Bocil",
   "Error",
   "17"
  ],
  "ans": 1,
  "why": "17 tidak >= 18, jadi cabang else jalan: \"Bocil\"."
 },
 {
  "track": "js",
  "topic": "Function — Resep Masakan",
  "q": "Apa output dari: const kali = (a,b) => a*b; console.log(kali(4,5));",
  "opts": [
   "9",
   "45",
   "20",
   "kali"
  ],
  "ans": 2,
  "why": "Arrow function mengembalikan hasil a*b = 4*5 = 20."
 },
 {
  "track": "js",
  "topic": "Array — Daftar Belanja Code",
  "q": "const buah = [\"apel\",\"mangga\",\"pisang\"]; console.log(buah[1]); — outputnya?",
  "opts": [
   "apel",
   "mangga",
   "pisang",
   "Error"
  ],
  "ans": 1,
  "why": "Index dimulai dari 0. buah[0]=apel, buah[1]=mangga."
 },
 {
  "track": "js",
  "topic": "Object — Kartu Identitas Data",
  "q": "Bagaimana mengambil nilai \"umur\" dari const user = {nama:\"Supriyanto\", umur:25}?",
  "opts": [
   "user[umur]",
   "user.umur",
   "user->umur",
   "umur.user"
  ],
  "ans": 1,
  "why": "Untuk akses properti object pakai titik: user.umur = 25."
 },
 {
  "track": "js",
  "topic": "Loop — Ulang Tanpa Capek",
  "q": "Berapa kali loop ini jalan: for (let i = 0; i < 3; i++)",
  "opts": [
   "2 kali",
   "3 kali",
   "4 kali",
   "Tak berujung"
  ],
  "ans": 1,
  "why": "i berjalan 0,1,2 → 3 kali. Saat i=3, syarat i<3 salah, loop berhenti."
 },
 {
  "track": "js",
  "topic": "DOM — Mainan Website",
  "q": "Fungsi mana yang dipakai untuk MENGAMBIL elemen berdasarkan ID?",
  "opts": [
   "querySelector(\"#id\")",
   "getElementById(\"id\")",
   "Keduanya benar",
   "classList.add(\"id\")"
  ],
  "ans": 2,
  "why": "getElementById(\"id\") dan querySelector(\"#id\") sama-sama bisa mengambil elemen berdasarkan ID."
 },
 {
  "track": "js",
  "topic": "Destructure — Bongkar Cepat",
  "q": "const {nama} = {nama:\"Supriyanto\", umur:25}; console.log(nama) — outputnya?",
  "opts": [
   "{nama: \"Supriyanto\"}",
   "Supriyanto",
   "umur 25",
   "Error"
  ],
  "ans": 1,
  "why": "Destructure mengambil properti nama saja dari object → nilainya \"Supriyanto\"."
 },
 {
  "track": "js",
  "topic": "Async/Await — Tunggu Data",
  "q": "Apa gunanya kata kunci \"await\" dalam async function?",
  "opts": [
   "Menghentikan program",
   "Menunggu hasil Promise selesai",
   "Membuat kode lebih cepat",
   "Menghapus data"
  ],
  "ans": 1,
  "why": "await membuat JS menunggu Promise (misal fetch) selesai sebelum lanjut ke baris berikutnya."
 },
 {
  "track": "js",
  "topic": "Closure & this — Level Profesional",
  "q": "Function di bawah \"mengingat\" variabel mana? function buatCounter() { let hitung = 0; return () => hitung++; }",
  "opts": [
   "Tidak ada",
   "hitung",
   "buatCounter",
   "return"
  ],
  "ans": 1,
  "why": "Closure membuat function dalam mengingat variabel hitung (milik function luar) walau sudah dikembalikan."
 },
 {
  "track": "pw",
  "topic": "Persiapan & Environment Setup",
  "q": "Perintah apa yang digunakan untuk inisialisasi project Playwright baru?",
  "opts": [
   "npm install playwright",
   "npm init playwright@latest",
   "npx create-playwright-app",
   "pip install playwright"
  ],
  "ans": 1,
  "why": "Perintah resmi untuk inisialisasi project Playwright adalah npm init playwright@latest. Ini akan membuat konfigurasi, folder test, dan menginstall browser secara otomatis."
 },
 {
  "track": "pw",
  "topic": "Persiapan & Environment Setup",
  "q": "Apa nama file konfigurasi utama Playwright?",
  "opts": [
   "config.js",
   "playwright.json",
   "playwright.config.js",
   "test.config.js"
  ],
  "ans": 2,
  "why": "File konfigurasi utama Playwright bernama playwright.config.js (atau .ts untuk TypeScript). Di sini kamu mengatur browser, timeout, reporter, base URL, dan lainnya."
 },
 {
  "track": "pw",
  "topic": "Persiapan & Environment Setup",
  "q": "Perintah CLI mana yang membuka Playwright dalam mode visual interaktif?",
  "opts": [
   "npx playwright test --headed",
   "npx playwright test --ui",
   "npx playwright open",
   "npx playwright test --visual"
  ],
  "ans": 1,
  "why": "Flag --ui membuka UI Mode — dashboard visual interaktif untuk menjalankan, melihat timeline, dan debug test. Flag --headed hanya membuka browser saat test berjalan."
 },
 {
  "track": "pw",
  "topic": "Mengenal Syntax Dasar Playwright",
  "q": "Apa fungsi dari test.describe()?",
  "opts": [
   "Menjalankan test secara paralel",
   "Mengelompokkan beberapa test yang berhubungan",
   "Men-skip test tertentu",
   "Membuat variabel global"
  ],
  "ans": 1,
  "why": "test.describe() digunakan untuk mengelompokkan (grouping) beberapa test yang berhubungan ke dalam satu blok. Ini membantu mengorganisir test berdasarkan fitur atau halaman."
 },
 {
  "track": "pw",
  "topic": "Mengenal Syntax Dasar Playwright",
  "q": "Hook mana yang dijalankan SEBELUM SETIAP test case?",
  "opts": [
   "test.beforeAll()",
   "test.beforeEach()",
   "test.setup()",
   "test.init()"
  ],
  "ans": 1,
  "why": "test.beforeEach() dijalankan sebelum SETIAP test case di dalam blok describe. Sedangkan test.beforeAll() hanya dijalankan SEKALI sebelum semua test."
 },
 {
  "track": "pw",
  "topic": "Mengenal Syntax Dasar Playwright",
  "q": "Apa beda test.skip() dan test.fixme()?",
  "opts": [
   "Tidak ada perbedaan",
   "skip() menghapus test, fixme() tidak",
   "fixme() menandai test yang perlu diperbaiki, skip() hanya melewati",
   "fixme() membuat test gagal, skip() melewati"
  ],
  "ans": 2,
  "why": "Keduanya sama-sama melewati test, tetapi test.fixme() memiliki semantik khusus: \"test ini diketahui rusak dan perlu diperbaiki\". Di report, keduanya ditandai berbeda sehingga tim tahu mana yang perlu ditindaklanjuti."
 },
 {
  "track": "pw",
  "topic": "Mengenal Syntax Dasar Playwright",
  "q": "Apa kegunaan test.step()?",
  "opts": [
   "Membuat test berjalan lebih lambat",
   "Membagi test menjadi langkah-langkah bernama di report",
   "Menjalankan test secara berurutan",
   "Mendefinisikan sub-test"
  ],
  "ans": 1,
  "why": "test.step() membagi satu test menjadi langkah-langkah bernama. Setiap step muncul terpisah di report, memudahkan debugging ketika satu langkah tertentu gagal."
 },
 {
  "track": "pw",
  "topic": "Locators — Menemukan Elemen di Halaman",
  "q": "Locator mana yang PALING direkomendasikan oleh Playwright?",
  "opts": [
   "page.locator(css)",
   "page.getByText()",
   "page.getByRole()",
   "page.getByTestId()"
  ],
  "ans": 2,
  "why": "getByRole() adalah locator paling direkomendasikan karena menggunakan ARIA role (button, link, heading, dll) yang paling stabil dan aksesibel. Test yang menggunakan getByRole() lebih tahan terhadap perubahan UI."
 },
 {
  "track": "pw",
  "topic": "Locators — Menemukan Elemen di Halaman",
  "q": "Bagaimana cara mengakses elemen yang berada di dalam &lt;iframe&gt;?",
  "opts": [
   "page.locator(\"iframe\").getByText()",
   "page.frameLocator(\"iframe#id\")",
   "page.getByRole(\"iframe\")",
   "page.switchToFrame(\"iframe\")"
  ],
  "ans": 1,
  "why": "page.frameLocator() digunakan untuk mengakses elemen di dalam iframe. Elemen dalam iframe tidak bisa diakses langsung — harus melalui frameLocator terlebih dahulu."
 },
 {
  "track": "pw",
  "topic": "Locators — Menemukan Elemen di Halaman",
  "q": "Method apa yang digunakan untuk mempersempit hasil locator?",
  "opts": [
   "locator.narrow()",
   "locator.where()",
   "locator.filter()",
   "locator.find()"
  ],
  "ans": 2,
  "why": "locator.filter() digunakan untuk mempersempit hasil. Bisa filter berdasarkan teks (hasText) atau child element (has). Contoh: page.locator(\".card\").filter({ hasText: \"Laptop\" })"
 },
 {
  "track": "pw",
  "topic": "Locators — Menemukan Elemen di Halaman",
  "q": "Cara mengambil elemen ke-3 dari sekumpulan hasil locator?",
  "opts": [
   "locator.get(3)",
   "locator.nth(2)",
   "locator[2]",
   "locator.index(3)"
  ],
  "ans": 1,
  "why": "locator.nth(index) digunakan untuk mengambil elemen pada index tertentu (dimulai dari 0). Jadi nth(2) mengambil elemen ke-3. Ada juga .first() dan .last() untuk elemen pertama/terakhir."
 },
 {
  "track": "pw",
  "topic": "Actions — Melakukan Aksi pada Elemen",
  "q": "Apa perbedaan utama antara fill() dan pressSequentially()?",
  "opts": [
   "Tidak ada perbedaan",
   "fill() langsung set value, pressSequentially() ketik per karakter",
   "fill() untuk password, pressSequentially() untuk teks biasa",
   "fill() lebih lambat dari pressSequentially()"
  ],
  "ans": 1,
  "why": "fill() langsung mengeset value input secara programatis (cepat). pressSequentially() mensimulasikan penekanan keyboard karakter per karakter (lambat, tapi memicu event keydown/keyup). Gunakan fill() secara default."
 },
 {
  "track": "pw",
  "topic": "Actions — Melakukan Aksi pada Elemen",
  "q": "Method apa yang digunakan untuk upload file?",
  "opts": [
   "uploadFile()",
   "setFile()",
   "setInputFiles()",
   "attachFile()"
  ],
  "ans": 2,
  "why": "setInputFiles() digunakan untuk meng-upload file ke input bertipe file. Bisa upload satu file (string) atau multiple files (array). Untuk menghapus file, kirim array kosong: setInputFiles([])"
 },
 {
  "track": "pw",
  "topic": "Actions — Melakukan Aksi pada Elemen",
  "q": "Fitur apa yang membuat kita TIDAK perlu menulis sleep() atau waitFor() manual?",
  "opts": [
   "Smart Loading",
   "Auto-waiting",
   "Lazy Execution",
   "Pre-rendering"
  ],
  "ans": 1,
  "why": "Playwright memiliki fitur Auto-waiting — setiap action (click, fill, dll) otomatis menunggu elemen visible, enabled, dan stabil sebelum berinteraksi. Ini menghilangkan kebutuhan sleep() manual."
 },
 {
  "track": "pw",
  "topic": "Actions — Melakukan Aksi pada Elemen",
  "q": "Bagaimana cara melakukan klik kanan (right-click)?",
  "opts": [
   "rightClick()",
   "click({ button: \"right\" })",
   "contextMenu()",
   "click({ type: \"context\" })"
  ],
  "ans": 1,
  "why": "Gunakan click({ button: \"right\" }) untuk klik kanan. Playwright juga mendukung click({ button: \"middle\" }) untuk middle-click, dan click({ modifiers: [\"Control\"] }) untuk Ctrl+Click."
 },
 {
  "track": "pw",
  "topic": "Assertions — Memverifikasi Hasil",
  "q": "Apa perbedaan toHaveText() dan toContainText()?",
  "opts": [
   "Tidak ada perbedaan",
   "toHaveText() exact match, toContainText() cukup substring",
   "toContainText() case-insensitive",
   "toHaveText() untuk heading saja"
  ],
  "ans": 1,
  "why": "toHaveText() memverifikasi teks secara exact (harus persis sama). toContainText() memverifikasi elemen MENGANDUNG teks tersebut (substring match). Gunakan toContainText() jika hanya ingin cek sebagian teks."
 },
 {
  "track": "pw",
  "topic": "Assertions — Memverifikasi Hasil",
  "q": "Assertion apa untuk memverifikasi perbandingan visual (screenshot)?",
  "opts": [
   "toMatchImage()",
   "toHaveScreenshot()",
   "toCompareVisual()",
   "toBePixelPerfect()"
  ],
  "ans": 1,
  "why": "toHaveScreenshot() mengambil screenshot dan membandingkannya dengan screenshot referensi. Pertama kali dijalankan akan membuat referensi, selanjutnya akan membandingkan perubahan visual."
 },
 {
  "track": "pw",
  "topic": "Assertions — Memverifikasi Hasil",
  "q": "Bagaimana cara membuat NEGASI assertion (memastikan sesuatu TIDAK terjadi)?",
  "opts": [
   "expect().toBeFalse()",
   "expect().not.toBeVisible()",
   "expectNot().toBeVisible()",
   "expect(!locator).toBeVisible()"
  ],
  "ans": 1,
  "why": "Gunakan .not sebelum assertion method: expect(locator).not.toBeVisible(). Ini berlaku untuk semua assertion: .not.toHaveText(), .not.toBeChecked(), dll."
 },
 {
  "track": "pw",
  "topic": "Assertions — Memverifikasi Hasil",
  "q": "Semua assertion Playwright memiliki fitur apa?",
  "opts": [
   "Auto-close",
   "Auto-retry (menunggu kondisi terpenuhi)",
   "Auto-skip",
   "Auto-fix"
  ],
  "ans": 1,
  "why": "Assertion Playwright otomatis me-retry hingga timeout (default 5 detik). Jadi toBeVisible() akan menunggu elemen muncul sebelum menandai gagal, bukan langsung fail."
 },
 {
  "track": "pw",
  "topic": "Navigation & Page Methods",
  "q": "Method apa yang digunakan untuk membuka URL halaman?",
  "opts": [
   "page.open()",
   "page.navigate()",
   "page.goto()",
   "page.load()"
  ],
  "ans": 2,
  "why": "page.goto(url) digunakan untuk membuka URL tertentu. Bisa menerima URL absolut atau relatif (jika baseURL dikonfigurasi di playwright.config.js)."
 },
 {
  "track": "pw",
  "topic": "Navigation & Page Methods",
  "q": "Apa yang sebaiknya DIHINDARI di production test?",
  "opts": [
   "page.goto()",
   "page.waitForURL()",
   "page.waitForTimeout()",
   "page.reload()"
  ],
  "ans": 2,
  "why": "waitForTimeout() (hardcoded sleep) harus dihindari karena membuat test lambat dan flaky. Gunakan assertion auto-retry atau waitForSelector() yang menunggu kondisi spesifik."
 },
 {
  "track": "pw",
  "topic": "Navigation & Page Methods",
  "q": "Bagaimana cara menangani dialog alert di browser?",
  "opts": [
   "page.handleAlert()",
   "page.on(\"dialog\", handler)",
   "page.acceptDialog()",
   "page.getByRole(\"dialog\")"
  ],
  "ans": 1,
  "why": "Gunakan page.on(\"dialog\", handler) untuk menangani dialog bawaan browser (alert, confirm, prompt). Handler harus dipasang SEBELUM aksi yang memicu dialog."
 },
 {
  "track": "pw",
  "topic": "Page Object Model (POM)",
  "q": "Apa tujuan utama Page Object Model (POM)?",
  "opts": [
   "Mempercepat eksekusi test",
   "Memisahkan locator/aksi halaman dari logika test",
   "Menambahkan fitur visual testing",
   "Menggantikan playwright.config.js"
  ],
  "ans": 1,
  "why": "POM memisahkan \"BAGAIMANA berinteraksi dengan halaman\" (locator, aksi) dari \"APA yang diuji\" (logika test). Jika UI berubah, cukup update satu Page Object tanpa menyentuh file test."
 },
 {
  "track": "pw",
  "topic": "Page Object Model (POM)",
  "q": "Di bagian mana locator biasanya didefinisikan di POM?",
  "opts": [
   "Di file test",
   "Di playwright.config.js",
   "Di constructor class Page Object",
   "Di file JSON terpisah"
  ],
  "ans": 2,
  "why": "Locator didefinisikan di constructor class Page Object. Constructor menerima parameter page, lalu mendefinisikan locator sebagai property: this.loginBtn = page.getByRole(\"button\", { name: \"Login\" })"
 },
 {
  "track": "pw",
  "topic": "Page Object Model (POM)",
  "q": "Apa keuntungan utama POM saat UI berubah?",
  "opts": [
   "Test otomatis diperbarui",
   "Cukup update 1 file Page Object",
   "Tidak berpengaruh sama sekali",
   "Harus buat POM baru"
  ],
  "ans": 1,
  "why": "Ketika UI berubah (misal locator berubah), kamu hanya perlu mengupdate satu file Page Object. Semua test yang menggunakan Page Object tersebut otomatis mengikuti perubahan."
 },
 {
  "track": "pw",
  "topic": "API & Network Testing",
  "q": "Fixture apa yang digunakan untuk API testing di Playwright?",
  "opts": [
   "{ api }",
   "{ http }",
   "{ request }",
   "{ fetch }"
  ],
  "ans": 2,
  "why": "Fixture { request } menyediakan APIRequestContext untuk mengirim HTTP request (GET, POST, PUT, DELETE) tanpa membuka browser. Tambahkan di parameter fungsi test: async ({ request }) => { ... }"
 },
 {
  "track": "pw",
  "topic": "API & Network Testing",
  "q": "HTTP status code berapa yang menandakan resource berhasil dibuat (created)?",
  "opts": [
   "200",
   "201",
   "204",
   "301"
  ],
  "ans": 1,
  "why": "201 Created menandakan resource berhasil dibuat. 200 OK untuk sukses umum, 204 No Content untuk sukses tanpa body (biasa untuk DELETE), 301 untuk redirect."
 },
 {
  "track": "pw",
  "topic": "API & Network Testing",
  "q": "Method apa untuk mock/intercept API response di Playwright?",
  "opts": [
   "page.mock()",
   "page.intercept()",
   "page.route()",
   "page.proxy()"
  ],
  "ans": 2,
  "why": "page.route(urlPattern, handler) mencegat request yang cocok dengan pattern dan memungkinkan kamu memodifikasi response (fulfill), membatalkan (abort), atau melanjutkan (continue)."
 },
 {
  "track": "pw",
  "topic": "CI/CD & Reporting",
  "q": "Apa fungsi flag --with-deps saat install browser di CI?",
  "opts": [
   "Install dependency npm",
   "Install dependency OS yang dibutuhkan browser",
   "Install semua dev dependencies",
   "Install Docker container"
  ],
  "ans": 1,
  "why": "Flag --with-deps menginstall dependency OS (shared libraries) yang dibutuhkan browser untuk berjalan. Tanpa flag ini, browser mungkin gagal di Linux CI karena library tidak tersedia."
 },
 {
  "track": "pw",
  "topic": "CI/CD & Reporting",
  "q": "Konfigurasi trace apa yang merekam trace HANYA saat test retry (gagal)?",
  "opts": [
   "\"always\"",
   "\"on-first-retry\"",
   "\"on-failure\"",
   "\"never\""
  ],
  "ans": 1,
  "why": "\"on-first-retry\" merekam trace hanya saat test dijalankan ulang (retry) setelah gagal. Ini adalah setting optimal — trace tersedia saat debugging gagal tanpa overhead saat test berhasil."
 },
 {
  "track": "pw",
  "topic": "CI/CD & Reporting",
  "q": "Perintah apa untuk melihat HTML report setelah test selesai?",
  "opts": [
   "npx playwright open-report",
   "npx playwright show-report",
   "npx playwright report --html",
   "npx playwright view"
  ],
  "ans": 1,
  "why": "npx playwright show-report membuka HTML report di browser. Report ini menampilkan semua test results dengan detail, screenshot, trace, dan video (jika dikonfigurasi)."
 },
 {
  "track": "pw",
  "topic": "Integrasi Jenkins CI/CD",
  "q": "Apa peran Jenkins dalam pipeline Playwright?",
  "opts": [
   "Menjalankan browser secara langsung",
   "Orchestrator — mengatur kapan dan di mana test berjalan",
   "Menggantikan playwright.config.js",
   "Menyimpan test results di database"
  ],
  "ans": 1,
  "why": "Jenkins berperan sebagai orchestrator: mengatur trigger (kapan test jalan), mendistribusikan ke agent (di mana test jalan), dan mengumpulkan hasil. Playwright yang mengurus bagaimana test dieksekusi."
 },
 {
  "track": "pw",
  "topic": "Integrasi Jenkins CI/CD",
  "q": "Di mana sebaiknya Jenkinsfile disimpan?",
  "opts": [
   "Di server Jenkins",
   "Di root repository bersama package.json",
   "Di folder /etc/jenkins",
   "Di database Jenkins"
  ],
  "ans": 1,
  "why": "Jenkinsfile disimpan di root repository (bersama package.json). Ini disebut \"Pipeline as Code\" — konfigurasi CI ikut di-version control, sehingga history perubahan bisa dilacak dan dikolaborasi bersama tim."
 },
 {
  "track": "pw",
  "topic": "Integrasi Jenkins CI/CD",
  "q": "Bagaimana cara yang BENAR untuk menyimpan password/API key di Jenkins?",
  "opts": [
   "Hardcode di Jenkinsfile",
   "Simpan di file .env di server",
   "Gunakan Jenkins Credentials Manager + withCredentials()",
   "Kirim via environment variable saat build"
  ],
  "ans": 2,
  "why": "Gunakan Jenkins Credentials Manager untuk menyimpan secret terenkripsi, lalu injeksikan ke pipeline menggunakan withCredentials(). JANGAN hardcode secret di Jenkinsfile atau file konfigurasi yang masuk ke repository."
 },
 {
  "track": "pw",
  "topic": "Integrasi Jenkins CI/CD",
  "q": "Apa manfaat menggunakan Docker image resmi Playwright sebagai Jenkins agent?",
  "opts": [
   "Lebih murah dari server biasa",
   "Environment konsisten, tidak ada masalah dependency di tiap mesin",
   "Tidak perlu install Jenkins",
   "Browser berjalan lebih cepat"
  ],
  "ans": 1,
  "why": "Docker image resmi Playwright sudah include Node.js + semua browser + dependency OS. Environment di setiap run dijamin identik — menghilangkan masalah \"works on my machine\" yang umum terjadi saat setup manual."
 },
 {
  "track": "mojo",
  "topic": "Pengenalan & Filosofi Mojo",
  "q": "Siapa tokoh di balik penciptaan bahasa pemrograman Mojo?",
  "opts": [
   "Chris Lattner (pencipta LLVM & Swift)",
   "Guido van Rossum",
   "Brendan Eich",
   "James Gosling"
  ],
  "ans": 0,
  "why": "Mojo dirancang oleh Chris Lattner bersama tim Modular untuk menyatukan ekosistem AI dan komputasi performa tinggi."
 },
 {
  "track": "mojo",
  "topic": "Variabel let vs var & Strict Typing",
  "q": "Apa perbedaan mendasar antara kata kunci 'let' dan 'var' di Mojo?",
  "opts": [
   "let bersifat konstan (immutable), sedangkan var bisa diubah (mutable)",
   "let hanya untuk angka, sedangkan var hanya untuk teks",
   "let lebih lambat daripada var",
   "let wajib di dalam class, var di luar class"
  ],
  "ans": 0,
  "why": "Di Mojo, 'let' mendeklarasikan nilai konstan yang tidak dapat diubah (immutable), sedangkan 'var' mendeklarasikan variabel yang nilainya bisa diubah (mutable)."
 },
 {
  "track": "mojo",
  "topic": "Fungsi fn vs def — Fleksibel vs Performa Maksimal",
  "q": "Kapan sebaiknya kita menggunakan kata kunci 'fn' dibandingkan 'def' di Mojo?",
  "opts": [
   "Ketika menginginkan performa maksimal, keamanan tipe data, dan kompilasi native langsung ke mesin",
   "Hanya saat menulis kode HTML",
   "Hanya ketika mengimpor library JavaScript",
   "Ketika tidak ingin menentukan tipe data sama sekali"
  ],
  "ans": 0,
  "why": "'fn' menerapkan aturan ketat (strict typing & memory safety) sehingga kompiler Mojo dapat menghasilkan kode mesin yang berjalan dengan kecepatan native."
 },
 {
  "track": "mojo",
  "topic": "Struktur Data & struct",
  "q": "Mengapa 'struct' di Mojo jauh lebih cepat dibandingkan 'class' dinamis pada bahasa tradisional?",
  "opts": [
   "Karena struct memiliki tata letak memori statis/inline tanpa overhead garbage collection dan dynamic dispatch",
   "Karena struct tidak bisa menyimpan data angka",
   "Karena struct hanya bisa dijalankan di peramban web",
   "Karena struct otomatis menghapus semua file di harddisk"
  ],
  "ans": 0,
  "why": "struct di Mojo menyusun data secara rapat (memory inline) tanpa overhead objek dinamis, membuatnya ideal untuk struktur data AI."
 },
 {
  "track": "mojo",
  "topic": "Manajemen Memori: Ownership & Borrowing",
  "q": "Jika Anda ingin sebuah fungsi dapat mengubah nilai variabel asli tanpa membuat salinan memori baru, argumen apa yang digunakan di Mojo?",
  "opts": [
   "inout",
   "borrowed",
   "copy_only",
   "static"
  ],
  "ans": 0,
  "why": "'inout' memberikan referensi yang dapat dimodifikasi (mutable reference) ke data asli sehingga perubahan langsung tercermin pada pemanggil."
 },
 {
  "track": "mojo",
  "topic": "Interoperabilitas dengan Python",
  "q": "Bagaimana cara mengimpor library Python seperti NumPy dari dalam kode Mojo?",
  "opts": [
   "from python import Python, lalu panggil Python.import_module(\"numpy\")",
   "import numpy.js",
   "#include <numpy.h>",
   "require('numpy')"
  ],
  "ans": 0,
  "why": "Mojo menyediakan modul bawaan 'from python import Python' dengan metode 'Python.import_module()' untuk mengimpor package Python apa pun secara mulus."
 },
 {
  "track": "mojo",
  "topic": "Vektorisasi Hardware & SIMD",
  "q": "Apa kepanjangan dari SIMD dan bagaimana cara kerjanya?",
  "opts": [
   "Single Instruction, Multiple Data — mengeksekusi satu instruksi matematika pada banyak data sekaligus dalam satu siklus CPU",
   "Simple Input Memory Device — alat penyimpan memori flash",
   "Sequential Instruction Multi Device — eksekusi kode baris demi baris secara lambat",
   "Standard Internet Module Data — protokol transfer data internet"
  ],
  "ans": 0,
  "why": "SIMD adalah teknologi akselerasi hardware di mana satu instruksi prosesor mengeksekusi operasi matematika pada sekumpulan data (vektor) secara serentak."
 },
 {
  "track": "mojo",
  "topic": "Multi-Threading & Tiling CPU",
  "q": "Apa fungsi utama dari paket 'algorithm.parallelize' di Mojo?",
  "opts": [
   "Mengeksekusi tugas secara paralel di seluruh core prosesor (multi-threading) secara otomatis",
   "Menyambungkan laptop ke printer bluetooth",
   "Mengubah tema web menjadi gelap",
   "Menghapus cache browser"
  ],
  "ans": 0,
  "why": "parallelize di Mojo membagi iterasi komputasi ke beberapa thread CPU worker sehingga seluruh core prosesor bekerja bersamaan secara maksimal."
 },
 {
  "track": "mojo",
  "topic": "Fondasi AI: Operasi Matriks & Tensor",
  "q": "Mengapa operasi Matrix Multiplication menjadi jantung dari komputasi model AI modern?",
  "opts": [
   "Karena seluruh transformasi data fitur input dan bobot neuron dihitung melalui perkalian matriks (Linear Layer)",
   "Hanya untuk menampilkan warna di layar",
   "Hanya untuk menghitung jumlah baris file teks",
   "Karena matriks membuat ukuran file teks jadi lebih kecil"
  ],
  "ans": 0,
  "why": "Di dalam neural network dan deep learning, layer linier (Dense/Attention) memproses data input melalui perkalian matriks bobot (Weights x Inputs + Bias)."
 },
 {
  "track": "mojo",
  "topic": "Fungsi Aktivasi AI (ReLU & Sigmoid)",
  "q": "Apa yang dilakukan fungsi aktivasi ReLU terhadap nilai input negatif?",
  "opts": [
   "Mengubah seluruh nilai negatif menjadi nol (0)",
   "Mengalikan nilai negatif dengan minus satu",
   "Menghapus memori RAM",
   "Menambah nilai negatif sebesar 100"
  ],
  "ans": 0,
  "why": "ReLU (Rectified Linear Unit) mengembalikan f(x) = max(0, x), yang berarti semua nilai negatif dipotong menjadi nol (0)."
 },
 {
  "track": "mojo",
  "topic": "Implementasi AI: Mini Neural Network Inference",
  "q": "Apa yang dimaksud dengan proses 'Forward Pass' pada inferensi Neural Network?",
  "opts": [
   "Proses mengalirkan data input melalui bobot layer dan fungsi aktivasi untuk menghasilkan output prediksi",
   "Proses mematikan komputer setelah selesai coding",
   "Proses backup database ke cloud",
   "Proses mengirim email otomatis"
  ],
  "ans": 0,
  "why": "Forward Pass adalah perhitungan berurutan dari layer input ke layer output untuk menghasilkan nilai prediksi model AI."
 },
 {
  "track": "mojo",
  "topic": "Masa Depan AI, MAX Engine & Akselerasi GPU",
  "q": "Apa keunggulan utama dari Modular MAX Engine saat menjalankan model AI di tingkat produksi?",
  "opts": [
   "Mampu mengoptimalkan dan mengompilasi model AI ke berbagai hardware (NVIDIA GPU, AMD, Apple Silicon, CPU) dengan throughput tinggi dan hemat memori",
   "Hanya bisa berjalan di handphone jadul",
   "Membuat ukuran font editor menjadi lebih besar",
   "Otomatis mematikan koneksi internet"
  ],
  "ans": 0,
  "why": "MAX Engine mengoptimalkan eksekusi model AI lintas berbagai akselerator hardware dengan efisiensi memori dan throughput komputasi tertinggi."
 },
 {
  "track": "py",
  "topic": "Pengenalan & Filosofi Python",
  "q": "Apa prinsip dasar utama dari filosofi desain bahasa Python (Zen of Python)?",
  "opts": [
   "Kode harus bersih, sederhana, dan mengutamakan keterbacaan (Readability counts)",
   "Kode harus memiliki titik koma di setiap akhir baris",
   "Hanya boleh digunakan untuk membuat game 3D",
   "Wajib menggunakan huruf kapital semua"
  ],
  "ans": 0,
  "why": "Filosofi Python menekankan pada kesederhanaan dan keterbacaan kode (Readability counts) agar mudah dipelajari dan dirawat."
 },
 {
  "track": "py",
  "topic": "Variabel, Tipe Data Dinamis & Input",
  "q": "Bagaimana cara menulis format string modern (f-string) yang benar di Python?",
  "opts": [
   "f\"Halo {nama_pengguna}\"",
   "\"Halo $nama_pengguna\"",
   "\"Halo %s\" % nama_pengguna",
   "string.format(\"Halo\", nama_pengguna)"
  ],
  "ans": 0,
  "why": "f-string diawali dengan huruf f sebelum tanda petik, lalu nama variabel disisipkan langsung di dalam kurung kurawal {variabel}."
 },
 {
  "track": "py",
  "topic": "Logika & Percabangan if-elif-else",
  "q": "Bagaimana Python menentukan cakupan blok kode di dalam percabangan if?",
  "opts": [
   "Menggunakan indentasi spasi/tab yang konsisten setelah tanda titik dua (:)",
   "Menggunakan tanda kurung kurawal { }",
   "Menggunakan kata kunci BEGIN dan END",
   "Menggunakan tanda titik koma ;"
  ],
  "ans": 0,
  "why": "Python menggunakan indentasi (spasi/tab) setelah tanda titik dua (:) untuk menentukan blok cakupan kode secara bersih."
 },
 {
  "track": "py",
  "topic": "Struktur Data Koleksi (List, Tuple, Set, Dict)",
  "q": "Struktur data Python manakah yang otomatis menghapus nilai duplikat dan tidak memiliki indeks urutan?",
  "opts": [
   "Set",
   "List",
   "Tuple",
   "Dictionary"
  ],
  "ans": 0,
  "why": "Set di Python hanya menyimpan nilai-nilai unik (tidak mengizinkan duplikasi) dan tidak terurut berdasarkan indeks angka."
 },
 {
  "track": "py",
  "topic": "Perulangan & List Comprehension",
  "q": "Apa keuntungan utama menulis List Comprehension dibandingkan perulangan for biasa di Python?",
  "opts": [
   "Sintaks lebih ringkas, mudah dibaca, dan dieksekusi lebih cepat di level C-Python",
   "Menghapus variabel dari RAM komputer",
   "Mengubah tipe data angka menjadi gambar",
   "Mematikan fungsi compiler"
  ],
  "ans": 0,
  "why": "List Comprehension menyediakan sintaks yang ringkas, mudah dipahami (pythonic), dan memiliki optimasi performa di level interpreter Python."
 },
 {
  "track": "py",
  "topic": "Fungsi, Args/Kwargs & Lambda",
  "q": "Apa perbedaan antara parameter *args dan **kwargs pada fungsi Python?",
  "opts": [
   "*args menerima argumen posisional sebagai Tuple, sedangkan **kwargs menerima argumen kata-kunci sebagai Dictionary",
   "*args hanya untuk string, **kwargs hanya untuk angka",
   "*args wajib diisi, **kwargs tidak boleh dipakai",
   "Tidak ada perbedaan sama sekali"
  ],
  "ans": 0,
  "why": "*args mengumpulkan argumen posisional tak terbatas ke dalam Tuple, sedangkan **kwargs mengumpulkan argumen bernama (key=value) ke dalam Dictionary."
 },
 {
  "track": "py",
  "topic": "Pemrograman Berorientasi Objek (OOP)",
  "q": "Apa fungsi method khusus '__init__' pada sebuah class di Python?",
  "opts": [
   "Sebagai konstruktor yang otomatis dijalankan saat objek baru pertama kali dibuat",
   "Untuk menghapus class dari memori",
   "Untuk mencetak teks ke printer",
   "Untuk mengubah nama file Python"
  ],
  "ans": 0,
  "why": "__init__ adalah method konstruktor inisialisasi yang dipanggil secara otomatis ketika suatu instance class baru diinstansiasi."
 },
 {
  "track": "py",
  "topic": "Error Handling (try-except) & File I/O",
  "q": "Mengapa disarankan menggunakan 'with open(...)' saat membaca atau menulis file di Python?",
  "opts": [
   "Karena otomatis menutup file secara aman setelah selesai, bahkan jika terjadi error di tengah proses",
   "Karena membuat ukuran file menjadi 0 byte",
   "Hanya berlaku untuk file berformat MP3",
   "Wajib digunakan agar komputer tidak restart"
  ],
  "ans": 0,
  "why": "Pernyataan 'with' bertindak sebagai context manager yang menjamin penutupan file secara otomatis (resource cleanup) sehingga tidak terjadi kebocoran memori."
 },
 {
  "track": "py",
  "topic": "Fondasi Data Science: NumPy & Pandas",
  "q": "Struktur data dua dimensi berbentuk tabel baris-dan-kolom utama di library Pandas disebut apa?",
  "opts": [
   "DataFrame",
   "Series",
   "Tensor",
   "Matrix2D"
  ],
  "ans": 0,
  "why": "DataFrame adalah struktur data 2 dimensi utama di Pandas yang menyerupai tabel relasional dengan label baris dan kolom."
 },
 {
  "track": "py",
  "topic": "Fondasi AI & Machine Learning (Scikit-Learn)",
  "q": "Apa fungsi method '.fit(X, y)' pada algoritma Machine Learning di Scikit-Learn?",
  "opts": [
   "Melatih model AI agar mempelajari pola hubungan antara data fitur (X) dan target (y)",
   "Mengunduh file dari internet",
   "Mengunci laptop agar tidak bisa dipakai",
   "Membuat grafik 3D di layar"
  ],
  "ans": 0,
  "why": "Method .fit() adalah proses training di mana model machine learning mengestimasi parameter internalnya berdasarkan data training X dan label y."
 },
 {
  "track": "py",
  "topic": "Backend & API Development (FastAPI)",
  "q": "Fitur unggulan apa yang otomatis disediakan oleh FastAPI tanpa perlu coding tambahan?",
  "opts": [
   "Dokumentasi API interaktif berbasis Swagger UI di URL /docs dan validasi tipe data otomatis",
   "Otomatis membeli domain web gratis",
   "Otomatis mematikan server setiap malam",
   "Mengganti sistem operasi Windows menjadi Linux"
  ],
  "ans": 0,
  "why": "FastAPI secara otomatis menghasilkan dokumentasi interaktif Swagger UI (/docs) dan ReDoc (/redoc) berdasarkan type hints dan skema Pydantic."
 },
 {
  "track": "py",
  "topic": "Asynchronous Python & Otomasi (async/await)",
  "q": "Apa fungsi fungsi 'asyncio.gather()' di Python?",
  "opts": [
   "Menjalankan beberapa coroutine asynchronous secara bersamaan (paralel) dan mengumpulkan seluruh hasilnya",
   "Menghapus seluruh file temporary di komputer",
   "Mengubah kode Python menjadi file HTML",
   "Mematikan koneksi WiFi"
  ],
  "ans": 0,
  "why": "asyncio.gather() menerima sekumpulan tugas asynchronous dan mengeksekusinya secara bersamaan (concurrently) hingga semuanya selesai."
 },
 {
  "track": "rn",
  "topic": "Pengenalan React Native & Expo",
  "q": "Mengapa React Native berbeda dari aplikasi hybrid berbasis WebView biasa?",
  "opts": [
   "Karena React Native menerjemahkan komponen menjadi elemen antarmuka native bawaan sistem operasi HP secara langsung",
   "Karena React Native hanya bisa berjalan di laptop, bukan di HP",
   "Karena React Native tidak menggunakan bahasa JavaScript sama sekali",
   "Karena React Native mewajibkan pengguna membayar lisensi bulanan ke Apple"
  ],
  "ans": 0,
  "why": "React Native berkomunikasi dengan platform native sehingga elemen seperti tombol dan teks dirender menggunakan komponen asli Android dan iOS, bukan halaman web dalam iframe/browser."
 },
 {
  "track": "rn",
  "topic": "Komponen Inti & Styling StyleSheet",
  "q": "Apa yang terjadi jika Supriyanto menulis teks string langsung di dalam <View> tanpa membungkusnya dengan <Text>?",
  "opts": [
   "Aplikasi akan melempar error di layar HP karena React Native mewajibkan semua teks berada di dalam <Text>",
   "Teks otomatis berubah warna menjadi merah",
   "Teks otomatis diunggah ke Google Drive",
   "Tidak ada error dan teks muncul secara normal"
  ],
  "ans": 0,
  "why": "Di React Native, mesin rendering native Android/iOS memerlukan komponen TextView/UILabel khusus, sehingga teks wajib diletakkan di dalam tag <Text>."
 },
 {
  "track": "rn",
  "topic": "Layouting Flexbox Mobile",
  "q": "Apa perbedaan arah default 'flexDirection' antara browser web CSS biasa dan React Native?",
  "opts": [
   "Web CSS default-nya adalah 'row' (horizontal), sedangkan React Native default-nya adalah 'column' (vertikal)",
   "Web CSS default-nya adalah 'column', sedangkan React Native default-nya adalah 'row'",
   "Kedua platform sama-sama menggunakan 'grid' sebagai default",
   "React Native tidak memiliki fitur Flexbox"
  ],
  "ans": 0,
  "why": "Karena layar smartphone berorientasi tegak (portrait), React Native menetapkan default flexDirection ke 'column' agar elemen otomatis tersusun ke bawah."
 },
 {
  "track": "rn",
  "topic": "State, Props & Interaksi Pengguna",
  "q": "Mengapa komponen <Pressable> lebih dianjurkan daripada tombol HTML <button> di React Native?",
  "opts": [
   "Karena di ekosistem mobile tidak ada tag HTML <button>, dan <Pressable> memberikan kontrol interaksi sentuhan yang akurat dan performan",
   "Karena <Pressable> otomatis mengirim pesan WhatsApp ke developer",
   "Karena <button> hanya bisa diklik satu kali seumur hidup",
   "Karena <Pressable> hanya bisa dipakai di perangkat laptop"
  ],
  "ans": 0,
  "why": "React Native tidak merender DOM web melainkan native views, dan <Pressable> adalah komponen standar yang menangani gestur sentuhan (pressed state, delay, long press) dengan lancar."
 },
 {
  "track": "rn",
  "topic": "List Rendering: FlatList vs ScrollView",
  "q": "Mengapa kita wajib menggunakan FlatList daripada ScrollView saat menampilkan daftar 5.000 item?",
  "opts": [
   "Karena FlatList hanya me-render elemen yang sedang terlihat di layar (windowing), menghemat RAM dan menjaga aplikasi tetap lancar 60 FPS",
   "Karena FlatList otomatis mengubah tulisan menjadi suara",
   "Karena ScrollView tidak bisa diberi warna background",
   "Karena FlatList secara otomatis menghapus database setiap 5 menit"
  ],
  "ans": 0,
  "why": "FlatList menggunakan teknik windowing/virtualization sehingga hanya item di viewport yang dibuat, mencegah aplikasi kehabisan memori dan lagging."
 },
 {
  "track": "rn",
  "topic": "Navigasi Layar: React Navigation",
  "q": "Dalam sistem React Navigation Stack, apa fungsi dari 'navigation.goBack()'?",
  "opts": [
   "Menutup layar teratas dan kembali menampilkan layar sebelumnya di bawah tumpukan",
   "Menghapus seluruh memori aplikasi dan merestart HP",
   "Membuka browser Safari atau Google Chrome",
   "Mengirim email laporan ke tim developer"
  ],
  "ans": 0,
  "why": "navigation.goBack() membuang kartu layar saat ini (pop) dari tumpukan navigasi sehingga user kembali ke layar asal."
 },
 {
  "track": "rn",
  "topic": "Fetch Data API & State Loading/Error",
  "q": "Komponen bawaan React Native apa yang digunakan untuk menampilkan animasi muter (spinner) saat proses fetch data?",
  "opts": [
   "<ActivityIndicator>",
   "<LoadingSpinnerDom>",
   "<ProgressBarHtml>",
   "<WaitRotateIcon>"
  ],
  "ans": 0,
  "why": "<ActivityIndicator> adalah komponen native resmi bawaan React Native untuk menampilkan status loading berputar di Android dan iOS."
 },
 {
  "track": "rn",
  "topic": "Fitur Hardware: AsyncStorage & Sensor",
  "q": "Kapan waktu yang paling tepat untuk menggunakan AsyncStorage di aplikasi mobile?",
  "opts": [
   "Untuk menyimpan data ringan seperti token otentikasi, preferensi tema, atau ID pengguna secara persisten",
   "Untuk menyimpan video berukuran 50 Gigabyte",
   "Untuk mempercepat koneksi internet WiFi 10x lipat",
   "Sebagai pengganti database PostgreSQL jutaan baris di server"
  ],
  "ans": 0,
  "why": "AsyncStorage dirancang untuk penyimpanan key-value asynchronous sederhana di memori lokal perangkat, ideal untuk token sesi atau pengaturan aplikasi."
 },
 {
  "track": "rn",
  "topic": "Animasi Halus 60 FPS: Reanimated",
  "q": "Mengapa animasi dengan React Native Reanimated dapat berjalan mulus tanpa lag meski JavaScript sedang memproses komputasi berat?",
  "opts": [
   "Karena perhitungan dan frame animasi dijalankan langsung di Native UI Thread perangkat",
   "Karena Reanimated menghapus seluruh gambar di aplikasi",
   "Karena Reanimated hanya bekerja saat HP disambungkan ke charger",
   "Karena Reanimated membatasi refresh rate layar menjadi 5 FPS"
  ],
  "ans": 0,
  "why": "Reanimated menggunakan worklet yang berjalan langsung di native UI thread, melepaskan ketergantungan frame rate animasi dari kesibukan thread JavaScript."
 },
 {
  "track": "rn",
  "topic": "Hermes Engine, Optimasi & Rilis Store",
  "q": "Apa keuntungan utama mengaktifkan Hermes Engine di aplikasi React Native?",
  "opts": [
   "Waktu buka aplikasi (startup) jauh lebih cepat, konsumsi RAM lebih hemat, dan ukuran APK lebih kecil",
   "Aplikasi otomatis bisa berjalan tanpa baterai HP",
   "Menghilangkan kebutuhan akan koneksi internet selamanya",
   "Mengubah seluruh kode menjadi file dokumen Microsoft Word"
  ],
  "ans": 0,
  "why": "Hermes melakukan prekompilasi JavaScript menjadi bytecode sebelum aplikasi diinstall, memangkas proses parsing runtime sehingga startup aplikasi instan."
 },
 {
  "track": "flutter",
  "topic": "Pengenalan Flutter & Bahasa Dart",
  "q": "Mengapa arsitektur rendering Flutter sering disebut 'Zero Bridge'?",
  "opts": [
   "Karena Flutter melukis langsung setiap piksel ke layar HP menggunakan rendering engine sendiri (Impeller/Skia) tanpa jembatan perantara",
   "Karena Flutter hanya bisa berjalan jika HP terhubung kabel ke laptop",
   "Karena Flutter tidak memiliki tombol sama sekali",
   "Karena Flutter mengharuskan pengguna membuat jembatan kayu asli"
  ],
  "ans": 0,
  "why": "Flutter tidak mengandalkan jembatan komunikasi runtime ke komponen UI platform asli, melainkan menggambar sendiri seluruh antarmuka secara native menggunakan grafis Impeller/Skia."
 },
 {
  "track": "flutter",
  "topic": "StatelessWidget vs StatefulWidget",
  "q": "Kapan Supriyanto harus memilih StatefulWidget daripada StatelessWidget?",
  "opts": [
   "Ketika tampilan layar perlu berubah secara dinamis merespons interaksi pengguna atau perubahan data waktu",
   "Ketika membuat logo gambar statis yang tidak pernah berubah",
   "Ketika ingin membuat ukuran aplikasi menjadi 0 kilobyte",
   "Ketika aplikasi hanya dijalankan di malam hari"
  ],
  "ans": 0,
  "why": "StatefulWidget dirancang untuk elemen antarmuka yang memiliki state/data yang dapat berubah sepanjang siklus hidup widget, diperbarui melalui fungsi setState()."
 },
 {
  "track": "flutter",
  "topic": "Tata Letak: Row, Column & Expanded",
  "q": "Widget apa yang digunakan di dalam Row atau Column untuk memaksa anak widget mengambil seluruh ruang kosong yang tersisa?",
  "opts": [
   "Expanded",
   "StaticBox",
   "FixedSpace",
   "LockContainer"
  ],
  "ans": 0,
  "why": "Widget Expanded memperluas child widget agar memenuhi sisa ruang yang tersedia di main axis Row atau Column, mencegah overflow error."
 },
 {
  "track": "flutter",
  "topic": "Form Input, TextField & Validasi",
  "q": "Objek apa yang digunakan di Flutter untuk membaca, memodifikasi, atau menghapus teks di dalam TextField secara programatik?",
  "opts": [
   "TextEditingController",
   "StringReaderDom",
   "InputScanner",
   "FormStringKeeper"
  ],
  "ans": 0,
  "why": "TextEditingController adalah pengendali resmi di Flutter yang mengikat teks input pengguna sehingga developer bisa membaca dan memanipulasi teks kapan saja."
 },
 {
  "track": "flutter",
  "topic": "Daftar Dinamis: ListView.builder",
  "q": "Mengapa ListView.builder sangat efisien dalam menampilkan daftar data dengan ribuan elemen?",
  "opts": [
   "Karena ListView.builder hanya membangun widget saat item tersebut hampir terlihat di layar (on-demand / lazy loading)",
   "Karena ListView.builder mengompres seluruh data menjadi file ZIP",
   "Karena ListView.builder mematikan fitur scrolling",
   "Karena ListView.builder menghapus data transaksi dari memori secara permanen"
  ],
  "ans": 0,
  "why": "ListView.builder hanya memanggil itemBuilder untuk item yang benar-benar terlihat di viewport layar, menghemat penggunaan memori RAM secara signifikan."
 },
 {
  "track": "flutter",
  "topic": "Navigasi Layar: Navigator Push & Pop",
  "q": "Perintah apa yang dipanggil untuk menutup layar saat ini dan kembali ke layar sebelumnya di Flutter?",
  "opts": [
   "Navigator.pop(context)",
   "Navigator.exitAll()",
   "Screen.delete()",
   "System.reboot()"
  ],
  "ans": 0,
  "why": "Navigator.pop(context) membuang rute teratas dari tumpukan navigasi sehingga layar sebelumnya kembali tampil di layar pengguna."
 },
 {
  "track": "flutter",
  "topic": "Konsumsi REST API & Model Dart",
  "q": "Apa keuntungan utama mengubah data JSON mentah menjadi Model Class Dart dengan factory method fromJson?",
  "opts": [
   "Mencegah kesalahan pengetikan nama kolom secara type-safe dan mempermudah auto-complete di editor kode",
   "Membuat kecepatan internet menjadi tanpa kuota",
   "Mengubah tampilan HP menjadi transparan",
   "Menghilangkan kebutuhan akan koneksi internet"
  ],
  "ans": 0,
  "why": "Model class Dart memberikan kepastian tipe data (type-safety) dan auto-completion, menghindarkan aplikasi dari error runtime akibat salah mengakses key JSON."
 },
 {
  "track": "flutter",
  "topic": "State Management: Provider & Notifier",
  "q": "Fungsi apa yang wajib dipanggil di dalam class ChangeNotifier agar seluruh widget Consumer me-render ulang tampilannya?",
  "opts": [
   "notifyListeners()",
   "rebootScreen()",
   "broadcastAll()",
   "refreshMemoryNow()"
  ],
  "ans": 0,
  "why": "notifyListeners() adalah metode di ChangeNotifier yang memberitahu para listener (widget yang berlangganan) bahwa state telah berubah dan UI perlu di-render ulang."
 },
 {
  "track": "flutter",
  "topic": "Animasi Mulus: AnimatedContainer & Hero",
  "q": "Widget apa di Flutter yang secara otomatis memberikan animasi transisi terbang sebuah elemen gambar saat berpindah layar?",
  "opts": [
   "Hero",
   "FlyingImageDom",
   "AirTrans",
   "TeleportBox"
  ],
  "ans": 0,
  "why": "Widget Hero di Flutter menghubungkan dua elemen dengan tag yang sama pada rute berbeda dan menganimasikan transisi terbang posisinya secara otomatis."
 },
 {
  "track": "flutter",
  "topic": "Kompilasi AOT & Rilis Multi-Platform",
  "q": "Apa perbedaan utama antara mode Debug (JIT) dan mode Release (AOT) di Flutter?",
  "opts": [
   "Mode Debug menggunakan Just-In-Time untuk Hot Reload kilat saat coding, sedangkan mode Release menggunakan Ahead-Of-Time untuk kompilasi mesin native berkecepatan maksimal",
   "Mode Debug hanya berjalan di siang hari, mode Release hanya di malam hari",
   "Mode Release mengharuskan aplikasi ditulis ulang dalam bahasa Python",
   "Mode Debug menghasilkan file berukuran 100 Terabyte"
  ],
  "ans": 0,
  "why": "Dart mendukung dua mode kompilasi: JIT untuk produktivitas pengembangan kilat dengan Hot Reload, dan AOT untuk kompilasi kode mesin native tanpa overhead runtime."
 },
 {
  "track": "mandarin",
  "topic": "Pinyin & Rahasia 4 Nada Suara",
  "q": "Bagaimana cara membaca sapaan 'Nǐ hǎo' (你好) yang benar sesuai aturan perubahan nada (Tone Sandhi)?",
  "opts": [
   "Dibaca 'Ní hǎo' (kata pertama berubah menjadi nada ke-2 karena dua nada ke-3 bertemu)",
   "Kedua kata dibaca membentak dengan nada ke-4",
   "Huruf h tidak boleh dibunyikan sama sekali",
   "Dibaca dengan nada datar seperti berbisik tanpa nada"
  ],
  "ans": 0,
  "why": "Dalam fonologi Mandarin, jika dua karakter bernada ke-3 bertemu berurutan (3+3), karakter pertama wajib dilafalkan dengan nada ke-2 (naik) agar artikulasi lebih alami."
 },
 {
  "track": "mandarin",
  "topic": "Salam, Sapaan Hormat & Angka 1–100",
  "q": "Bagaimana cara membaca angka 48 dalam bahasa Mandarin?",
  "opts": [
   "Sì shí bā (四十八)",
   "Bā shí sì (八十四)",
   "Shí sì bā",
   "Bā sì shí"
  ],
  "ans": 0,
  "why": "Rumus puluhan dalam bahasa Mandarin sangat matematis: 40 adalah sì shí (4x10), ditambah 8 (bā) menjadi sì shí bā (48)."
 },
 {
  "track": "mandarin",
  "topic": "Perkenalan Diri Supriyanto & Identitas",
  "q": "Bagaimana kalimat Supriyanto dalam bahasa Mandarin untuk menyatakan 'Saya orang Indonesia'?",
  "opts": [
   "Wǒ shì Yìndùníxīyà rén (我是印度尼西亚人)",
   "Wǒ jiào Yìndùníxīyà",
   "Nǐ shì Yìndùníxīyà rén ma?",
   "Yìndùníxīyà shì wǒ"
  ],
  "ans": 0,
  "why": "Dalam bahasa Mandarin, kewarganegaraan dibentuk dengan rumus [Nama Negara] + [人 (rén = orang)]. Sehingga 'orang Indonesia' adalah Yìndùníxīyà rén."
 },
 {
  "track": "mandarin",
  "topic": "Keluarga & Kepemilikan: 的 (de) & 有 (yǒu)",
  "q": "Bagaimana cara yang tepat untuk mengatakan 'Saya tidak punya mobil' dalam bahasa Mandarin?",
  "opts": [
   "Wǒ méiyǒu chē (我没有车)",
   "Wǒ bù yǒu chē (我不有车)",
   "Wǒ bú shì chē",
   "Chē bù wǒ yǒu"
  ],
  "ans": 0,
  "why": "Kata kerja 有 (yǒu = punya/ada) memiliki bentuk negasi khusus yaitu 没有 (méiyǒu). Mengatakan 'bù yǒu' adalah kesalahan tata bahasa yang sering dilakukan pemula."
 },
 {
  "track": "mandarin",
  "topic": "Jam, Tanggal & Pola Waktu Kalimat",
  "q": "Manakah susunan kalimat bahasa Mandarin yang benar untuk 'Supriyanto besok pergi ke kantor'?",
  "opts": [
   "Sūpǔyángtuō míngtiān qù gōngsī (苏普扬托明天去公司)",
   "Sūpǔyángtuō qù gōngsī míngtiān",
   "Qù gōngsī Sūpǔyángtuō míngtiān",
   "Míngtiān qù Sūpǔyángtuō gōngsī"
  ],
  "ans": 0,
  "why": "Keterangan waktu (míngtiān = besok) wajib berada sebelum kata kerja (qù = pergi), baik langsung setelah subjek (Sūpǔyángtuō míngtiān qù...) atau di awal kalimat."
 },
 {
  "track": "mandarin",
  "topic": "Restoran, Kafe & Rasa Makanan",
  "q": "Kalimat sakti apa yang harus diucapkan Supriyanto di restoran jika tidak bisa makan pedas?",
  "opts": [
   "Bú yào là (不要辣)",
   "Hěn là",
   "Duō fàng là",
   "Wǒ xǐhuan là"
  ],
  "ans": 0,
  "why": "Bú yào là (不要辣) berarti 'tidak mau pedas' (bú yào = tidak mau, là = pedas)."
 },
 {
  "track": "mandarin",
  "topic": "Belanja & Tawar-Menawar di Pasar",
  "q": "Apa arti dari ungkapan tawar-menawar populer: 'Tài guì le! Néng piányi yīdiǎn ma?' (太贵了！能便宜一点吗？)?",
  "opts": [
   "Kemahalan! Bisa lebih murah sedikit?",
   "Sangat murah! Saya mau beli sepuluh",
   "Barang ini warnanya tidak bagus",
   "Tolong bungkus pakai plastik hitam"
  ],
  "ans": 0,
  "why": "Tài guì le (太贵了) = Terlalu mahal / kemahalan! Néng piányi yīdiǎn ma? (能便宜一点吗？) = Bisakah lebih murah sedikit?"
 },
 {
  "track": "mandarin",
  "topic": "Arah, Navigasi & Transportasi Kota",
  "q": "Bagaimana cara memberi instruksi kepada sopir taksi untuk 'Belok ke kanan' dalam bahasa Mandarin?",
  "opts": [
   "Wǎng yòu guǎi (往右拐)",
   "Wǎng zuǒ guǎi",
   "Yìzhí zǒu",
   "Tíng zài zhèlǐ"
  ],
  "ans": 0,
  "why": "Yòu (右) berarti kanan, guǎi (拐) berarti belok atau memutar. Sehingga wǎng yòu guǎi berarti berbelok ke arah kanan."
 },
 {
  "track": "mandarin",
  "topic": "Rutinitas Harian & Jadwal Supriyanto",
  "q": "Kata sambung apa yang digunakan untuk menyatakan 'Pertama... lalu kemudian...' dalam bahasa Mandarin?",
  "opts": [
   "Xiān... ránhòu... (先... 然后...)",
   "Bùdàn... érqiě...",
   "Yīnwèi... suǒyǐ...",
   "Suīrán... dànshì..."
  ],
  "ans": 0,
  "why": "Pasangan kata sambung xiān... ránhòu... (先... 然后...) digunakan secara luas untuk menceritakan urutan kronologis kejadian (pertama... lalu...)."
 },
 {
  "track": "mandarin",
  "topic": "Mengungkapkan Keinginan & Kemampuan",
  "q": "Kata apa yang tepat untuk mengisi kalimat kemampuan skill Supriyanto: 'Sūpǔyángtuō ___ kāi chē' (Supriyanto bisa menyetir mobil karena sudah lulus kursus)?",
  "opts": [
   "Huì (会)",
   "Xiǎng (想)",
   "Néng (能)",
   "Yào (要)"
  ],
  "ans": 0,
  "why": "Kata 会 (huì) digunakan khusus untuk kemampuan atau keahlian yang didapatkan dari proses belajar atau latihan (seperti menyetir, memasak, bahasa asing)."
 },
 {
  "track": "mandarin",
  "topic": "Janjian, Menelpon & Chatting WeChat",
  "q": "Apa kata pertama yang diucapkan oleh orang penutur Mandarin saat mengangkat telepon?",
  "opts": [
   "Wèi! (喂！)",
   "Zàijiàn!",
   "Xièxie!",
   "Duìbuqǐ!"
  ],
  "ans": 0,
  "why": "Karakter 喂 (wèi) adalah kata seru standar universal untuk membuka percakapan telepon ('Halo!') dalam bahasa Mandarin."
 },
 {
  "track": "mandarin",
  "topic": "Cuaca, Musim & Obrolan Santai (Small Talk)",
  "q": "Bagaimana cara Supriyanto mengatakan 'Hari ini cuaca sangat bagus' dalam bahasa Mandarin?",
  "opts": [
   "Jīntiān tiānqì hěn hǎo (今天天气很好)",
   "Jīntiān hěn rè tiānqì",
   "Tiānqì bù hǎo jīntiān",
   "Xiàyǔ jīntiān hěn hǎo"
  ],
  "ans": 0,
  "why": "Jīntiān (hari ini) + tiānqì (cuaca) + hěn hǎo (sangat bagus) adalah susunan alami yang paling sering digunakan penutur asli."
 },
 {
  "track": "mandarin",
  "topic": "Kesehatan, Apotek & Situasi Darurat",
  "q": "Jika Supriyanto mengalami sakit kepala berdenyut, kata apa yang harus disampaikan ke dokter?",
  "opts": [
   "Wǒ tóu téng (我头疼)",
   "Wǒ dùzi téng",
   "Wǒ jiǎo téng",
   "Wǒ hěn gāoxìng"
  ],
  "ans": 0,
  "why": "Tóu (头) berarti kepala, téng (疼) berarti sakit/nyeri. Wǒ tóu téng artinya 'Saya sakit kepala'."
 },
 {
  "track": "mandarin",
  "topic": "Mengekspresikan Opini & Perasaan",
  "q": "Frasa apa yang paling lazim digunakan untuk memulai penyampaian pendapat pribadi ('Menurut saya...')?",
  "opts": [
   "Wǒ juéde... (我觉得...)",
   "Wǒ bú yào...",
   "Wǒ zàijiàn...",
   "Wǒ méiyǒu..."
  ],
  "ans": 0,
  "why": "Karakter 觉得 (juéde) berarti merasa atau berpendapat. 'Wǒ juéde...' adalah cara paling alami dan sopan untuk menyampaikan opini pribadi."
 },
 {
  "track": "mandarin",
  "topic": "Dunia Kerja & Komunikasi Kantor Supriyanto",
  "q": "Ungkapan profesional apa yang diucapkan saat menutup kesepakatan kerja sama bisnis dengan rekan kerja ('Senang bisa bekerja sama!')?",
  "opts": [
   "Hézuò yúkuài! (合作愉快！)",
   "Bú kèqi!",
   "Duìbuqǐ!",
   "Tài guì le!"
  ],
  "ans": 0,
  "why": "Hézuò (合作 = kerja sama) dan Yúkuài (愉快 = bahagia/menyenangkan). 'Hézuò yúkuài!' adalah salam penutup kemitraan bisnis yang sangat terhormat."
 },
 {
  "track": "mandarin",
  "topic": "Rahasia Menghafal Hanzi & Metode Fasih Otodidak",
  "q": "Jika sebuah karakter Hanzi memiliki radikal '氵' (tiga tetes air), kemungkinan besar arti karakter tersebut berkaitan dengan apa?",
  "opts": [
   "Benda cair, air, sungai, atau aktivitas mencuci",
   "Hewan berkaki empat",
   "Logam emas dan perak",
   "Kendaraan bermotor"
  ],
  "ans": 0,
  "why": "Radikal 氵 (sān diǎn shuǐ / tiga tetes air) adalah piktogram air yang selalu menjadi pembentuk karakter-karakter bertema cairan seperti hǎi (laut), hé (sungai), dan xǐ (mencuci)."
 }
];
