/* Data materi gabungan — dihasilkan dari modul JavaScript, Playwright, Mojo, dan Python. */
const TRACKS = [
 {
  "id": "js",
  "title": "JavaScript",
  "subtitle": "Fondasi bahasa: dari variabel sampai async/await",
  "accent": "amber",
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
  "title": "Playwright",
  "subtitle": "Automation testing: locator, action, assertion, sampai CI/CD",
  "accent": "green",
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
 }
];
