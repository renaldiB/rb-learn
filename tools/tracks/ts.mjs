export const tsTrack = {
  id: 'ts',
  title: 'TypeScript 🔷',
  subtitle: 'Static Typing Modern: Type Annotations, Interfaces, Generics, Utility Types & Tooling',
  accent: 'blue',
  category: 'it',
  lessons: [
    {
      id: 'ts-01',
      num: '01',
      title: 'Mengapa TypeScript? Solusi Masalah Dinamis JS',
      level: 'Pemula',
      intro: 'Menangkap bug sebelum kode dijalankan di browser: keunggulan static type system modern.',
      body: `
        <h4>🛡️ Analogi Rompi Pelindung Anti-Peluru Supriyanto</h4>
        <p>Di JavaScript murni, kita bisa menulis kode seperti ini tanpa ada peringatan sama sekali saat mengetik:</p>
        <div class="code-block"><span class="kw">function</span> <span class="fn">hitungTotal</span>(harga, diskon) {
  <span class="kw">return</span> harga - diskon;
}

<span class="cm">// Tidak sengaja memasukkan string: hasilnya "100000undefined" atau NaN!</span>
<span class="fn">hitungTotal</span>(<span class="st">"seratus ribu"</span>);</div>
        <p>Kesalahan sepele ini baru meledak saat aplikasi sudah live diakses jutaan pengguna (<i>Runtime Error</i>). <b>TypeScript adalah JavaScript dengan sistem tipe data statis (Type Safety)</b>. TypeScript bertindak seperti rompi pelindung yang langsung memberikan garis merah di editor teks saat Anda salah memasukkan tipe data sebelum kode sempat dijalankan!</p>

        <h4>⚙️ Superset JavaScript</h4>
        <p>Semua kode JavaScript yang valid adalah kode TypeScript yang valid. Kode TypeScript dikompilasi (transpiled) menjadi JavaScript murni yang dapat berjalan di semua browser dan Node.js.</p>
      `,
      quiz: {
        q: "Kapan TypeScript memeriksa dan menangkap kesalahan tipe data (type error)?",
        opts: [
          "Saat penulisan kode dan proses kompilasi (Compile-time), sebelum aplikasi dijalankan",
          "Hanya setelah aplikasi di-deploy ke server produksi",
          "Ketika browser pengguna kehabisan kuota internet",
          "Hanya saat komputer di-restart"
        ],
        ans: 0,
        why: "TypeScript menerapkan static type checking saat masa kompilasi (compile-time), mencegah bug tipe data lolos ke tahap runtime produksi."
      }
    },
    {
      id: 'ts-02',
      num: '02',
      title: 'Tipe Data Primitif, Any & Type Inference',
      level: 'Pemula',
      intro: 'Menetapkan tipe data eksplisit pada variabel dan memanfaatkan kecerdasan deteksi otomatis.',
      body: `
        <h4>🏷️ Type Annotations Dasar</h4>
        <p>Kita menambahkan tanda titik dua (<code>: tipe</code>) setelah nama variabel untuk menetapkan kontrak tipe datanya:</p>
        <div class="code-block"><span class="kw">let</span> nama: <span class="dt">string</span> = <span class="st">'Supriyanto'</span>;
<span class="kw">let</span> umur: <span class="dt">number</span> = 28;
<span class="kw">let</span> isActive: <span class="dt">boolean</span> = <span class="kw">true</span>;
<span class="kw">let</span> kosong: <span class="dt">null</span> = <span class="kw">null</span>;
<span class="kw">let</span> belumAda: <span class="dt">undefined</span> = <span class="kw">undefined</span>;

<span class="cm">// Error: Type 'number' is not assignable to type 'string'.</span>
nama = 123;</div>

        <h4>🧠 Type Inference (Inferensi Tipe Cerdas)</h4>
        <p>Anda tidak perlu menuliskan tipe secara berlebihan. Jika Anda langsung mengisi nilai awal, TypeScript cukup pintar untuk menebak tipe datanya secara otomatis:</p>
        <div class="code-block"><span class="kw">let</span> alamat = <span class="st">'Jakarta Selatan'</span>; <span class="cm">// TypeScript otomatis tahu ini bertipe string!</span></div>

        <div class="tip-box">
          <span class="tip-box-icon">⚠️</span>
          <div><b>Hindari 'any':</b> Tipe <code>any</code> mematikan seluruh fitur type-checker TypeScript dan mengembalikan Anda ke rimba liar JavaScript tanpa perlindungan. Hindari penggunaan <code>any</code> di kode produksi!</div>
        </div>
      `,
      quiz: {
        q: "Mengapa programmer profesional sangat menghindari penggunaan tipe 'any' di TypeScript?",
        opts: [
          "Karena 'any' mematikan pemeriksaan tipe data dan menghilangkan manfaat keamanan TypeScript",
          "Karena 'any' memperbesar ukuran file hingga sepuluh kali lipat",
          "Karena 'any' dilarang oleh lisensi open-source",
          "Karena 'any' hanya bisa dijalankan pada sistem operasi Linux"
        ],
        ans: 0,
        why: "Tipe 'any' menonaktifkan mekanisme type safety, sehingga compiler tidak lagi memeriksa keabsahan pemanggilan metode atau operasi pada variabel tersebut."
      }
    },
    {
      id: 'ts-03',
      num: '03',
      title: 'Koleksi Data: Array, Tuples & Readonly',
      level: 'Pemula',
      intro: 'Menjaga kemurnian elemen array dan mengunci struktur data dengan Tuple dan Readonly.',
      body: `
        <h4>📚 Array Berjenis Kuat</h4>
        <p>Di TypeScript, kita mendefinisikan tipe data isi array dengan sintaks <code>Tipe[]</code> atau <code>Array&lt;Tipe&gt;</code>:</p>
        <div class="code-block"><span class="kw">const</span> hobiSupriyanto: <span class="dt">string</span>[] = [<span class="st">'Membaca'</span>, <span class="st">'Koding'</span>, <span class="st">'Futsal'</span>];
<span class="kw">const</span> skorUjian: <span class="dt">number</span>[] = [90, 85, 95];

<span class="cm">// Error: Argument of type 'number' is not assignable to parameter of type 'string'</span>
hobiSupriyanto.push(100);</div>

        <h4>🎯 Tuples: Array Berukuran & Urutan Tetap</h4>
        <p>Tuple adalah array spesial yang jumlah elemen dan tipe tiap posisinya sudah ditentukan secara kaku sejak awal (seperti koordinat GPS atau respons Hook React):</p>
        <div class="code-block"><span class="cm">// Posisi 0 wajib string (nama), Posisi 1 wajib number (usia)</span>
<span class="kw">let</span> profilUser: [<span class="dt">string</span>, <span class="dt">number</span>] = [<span class="st">'Supriyanto'</span>, 28];

<span class="cm">// Readonly: Mencegah array diubah atau dimodifikasi (.push / .pop dilarang)</span>
<span class="kw">const</span> config: <span class="kw">readonly</span> <span class="dt">string</span>[] = [<span class="st">'API_KEY'</span>, <span class="st">'BASE_URL'</span>];</div>
      `,
      quiz: {
        q: "Apa perbedaan mendasar antara Tuple dan Array biasa di TypeScript?",
        opts: [
          "Tuple memiliki jumlah elemen dan urutan tipe posisi yang telah ditentukan secara kaku",
          "Tuple hanya dapat menampung data angka",
          "Tuple tidak bisa diakses menggunakan indeks",
          "Tuple otomatis dikonversi menjadi file database SQL"
        ],
        ans: 0,
        why: "Tuple mendefinisikan tipe spesifik untuk setiap indeks dengan panjang array yang tetap, sedangkan Array biasa menampung elemen dengan tipe homogen tanpa batasan panjang kaku."
      }
    },
    {
      id: 'ts-04',
      num: '04',
      title: 'Mengetik Fungsi: Parameter & Nilai Return',
      level: 'Pemula',
      intro: 'Menetapkan kontrak parameter wajib, opsional, default value, hingga penandaan fungsi tanpa return (void).',
      body: `
        <h4>✍️ Anatomi Pengetikan Fungsi</h4>
        <p>Setiap parameter fungsi wajib memiliki tipe data yang jelas, beserta tipe nilai kembaliannya (<i>return type</i>):</p>
        <div class="code-block"><span class="kw">function</span> <span class="fn">kirimSalam</span>(nama: <span class="dt">string</span>, umur?: <span class="dt">number</span>): <span class="dt">string</span> {
  <span class="kw">if</span> (umur !== <span class="kw">undefined</span>) {
    <span class="kw">return</span> \`Halo \${nama}, umur Anda \${umur} tahun.\`;
  }
  <span class="kw">return</span> \`Halo \${nama}!\`;
}</div>

        <h4>Tanda Tanya (?) untuk Parameter Opsional</h4>
        <p>Tanda tanya pada <code>umur?: number</code> menandakan bahwa parameter tersebut tidak wajib diisi saat dipanggil. Jika tidak diisi, nilainya adalah <code>undefined</code>.</p>

        <h4>🚫 Tipe Void & Never</h4>
        <ul>
          <li><b>void:</b> Untuk fungsi yang hanya menjalankan aksi (efek samping) tanpa mengembalikan nilai (return):
            <br><code>function logPesan(pesan: string): void { console.log(pesan); }</code></li>
          <li><b>never:</b> Untuk fungsi yang tidak akan pernah selesai dengan normal (misal melempar error atau infinite loop).</li>
        </ul>
      `,
      quiz: {
        q: "Tipe return value apa yang digunakan untuk fungsi yang tidak mengembalikan nilai apa pun?",
        opts: [
          "void",
          "null",
          "undefined",
          "never"
        ],
        ans: 0,
        why: "Tipe void menunjukkan ketiadaan nilai kembalian pada fungsi, umum digunakan pada fungsi yang hanya mencetak log atau memodifikasi state."
      }
    },
    {
      id: 'ts-05',
      num: '05',
      title: 'Struktur Objek & Interfaces: Kontrak Data',
      level: 'Menengah',
      intro: 'Mendefinisikan bentuk objek data dengan Interface untuk standarisasi komunikasi komponen.',
      body: `
        <h4>📜 Apa Itu Interface?</h4>
        <p><b>Interface</b> adalah cetak biru atau kontrak perjanjian struktur sebuah objek. Jika ada objek yang mengklaim bertipe <code>Pengguna</code>, ia wajib memiliki semua properti yang tertulis di dalam interface tersebut:</p>
        <div class="code-block"><span class="kw">interface</span> <span class="dt">Pengguna</span> {
  <span class="kw">readonly</span> id: <span class="dt">number</span>; <span class="cm">// Tidak boleh diubah setelah dibuat</span>
  nama: <span class="dt">string</span>;
  email: <span class="dt">string</span>;
  alamat?: <span class="dt">string</span>;    <span class="cm">// Opsional</span>
}

<span class="kw">const</span> stafSupriyanto: <span class="dt">Pengguna</span> = {
  id: 101,
  nama: <span class="st">'Supriyanto'</span>,
  email: <span class="st">'supriyanto@example.com'</span>
};</div>

        <h4>Pewarisan Interface (extends)</h4>
        <p>Interface sangat fleksibel dan dapat mewarisi properti dari interface lain layaknya hierarki dunia nyata:</p>
        <div class="code-block"><span class="kw">interface</span> <span class="dt">Admin</span> <span class="kw">extends</span> <span class="dt">Pengguna</span> {
  levelHakAkses: <span class="dt">number</span>;
  departemen: <span class="dt">string</span>;
}</div>
      `,
      quiz: {
        q: "Modifier apa yang digunakan di dalam Interface agar suatu properti objek tidak bisa diubah nilainya setelah pertama kali dibuat?",
        opts: [
          "readonly",
          "const",
          "private",
          "static"
        ],
        ans: 0,
        why: "Keyword readonly di depan nama properti interface memastikan nilai properti tersebut bersifat imutabel (hanya bisa dibaca) setelah inisialisasi."
      }
    },
    {
      id: 'ts-06',
      num: '06',
      title: 'Type Aliases vs Interfaces & Union / Intersection Types',
      level: 'Menengah',
      intro: 'Kapan menggunakan Type vs Interface dan menggabungkan tipe dengan Union (|) dan Intersection (&).',
      body: `
        <h4>⚖️ Type Alias (type) vs Interface</h4>
        <p>Keduanya sering digunakan bergantian, namun memiliki keunggulan masing-masing:</p>
        <ul>
          <li><b>Interface:</b> Sangat ideal untuk mendefinisikan bentuk objek (OOP), mendukung deklarasi berulang (<i>Declaration Merging</i>), dan mudah di-extend.</li>
          <li><b>Type Alias:</b> Sangat fleksibel untuk mendefinisikan tipe primitif kustom, Union, Tuple, dan fungsi kalkulasi.</li>
        </ul>

        <h4>🔀 Union Types (|) dan Intersection Types (&)</h4>
        <div class="code-block"><span class="cm">-- Union Type: Bisa bertipe A ATAU bertipe B</span>
<span class="kw">type</span> StatusPesanan = <span class="st">'pending'</span> | <span class="st">'dikirim'</span> | <span class="st">'selesai'</span> | <span class="st">'batal'</span>;
<span class="kw">let</span> statusSekarang: StatusPesanan = <span class="st">'dikirim'</span>;

<span class="cm">-- Intersection Type: Menggabungkan properti A DAN properti B sekaligus</span>
<span class="kw">type</span> Karyawan = { nama: <span class="dt">string</span>; nip: <span class="dt">string</span> };
<span class="kw">type</span> Programmer = { bahasaFavorit: <span class="dt">string</span>[] };
<span class="kw">type</span> DeveloperSupriyanto = Karyawan &amp; Programmer;</div>
      `,
      quiz: {
        q: "Operator mana yang digunakan di TypeScript untuk membuat Union Type (variabel yang bisa menampung salah satu dari beberapa opsi tipe)?",
        opts: [
          "Simbol pipa vertikal ( | )",
          "Simbol ampersand ganda ( && )",
          "Simbol tanda panah ( => )",
          "Simbol titik dua ( : )"
        ],
        ans: 0,
        why: "Operator pipa vertikal (|) merepresentasikan Union Type, memungkinkan suatu nilai memiliki tipe A atau tipe B."
      }
    },
    {
      id: 'ts-07',
      num: '07',
      title: 'Literal Types & Teknik Type Narrowing',
      level: 'Menengah',
      intro: 'Menyempitkan tipe data luas menjadi tipe presisi menggunakan typeof, instanceof, dan diskriminan.',
      body: `
        <h4>🎯 Literal Types: Mengunci Nilai Eksak</h4>
        <p>Alih-alih membiarkan tipe bernilai <code>string</code> sembarangan, kita bisa menguncinya pada sekumpulan kata spesifik:</p>
        <div class="code-block"><span class="kw">type</span> ArahMataAngin = <span class="st">'Utara'</span> | <span class="st">'Selatan'</span> | <span class="st">'Timur'</span> | <span class="st">'Barat'</span>;
<span class="kw">function</span> <span class="fn">navigasi</span>(arah: ArahMataAngin) { ... }</div>

        <h4>🔬 Type Narrowing (Penyempitan Tipe)</h4>
        <p>Ketika suatu parameter menerima <code>string | number</code>, TypeScript menuntut Anda memastikan tipe nyatanya sebelum memanggil metode spesifik:</p>
        <div class="code-block"><span class="kw">function</span> <span class="fn">cetakID</span>(id: <span class="dt">string</span> | <span class="dt">number</span>) {
  <span class="kw">if</span> (<span class="kw">typeof</span> id === <span class="st">'string'</span>) {
    <span class="cm">// Di blok ini, TypeScript 100% tahu id adalah string</span>
    console.log(id.toUpperCase());
  } <span class="kw">else</span> {
    <span class="cm">// Di blok ini, TypeScript 100% tahu id adalah number</span>
    console.log(id.toFixed(2));
  }
}</div>
      `,
      quiz: {
        q: "Apa fungsi dari teknik Type Narrowing di TypeScript?",
        opts: [
          "Menyempitkan tipe data yang luas/union menjadi tipe yang lebih spesifik di dalam blok logika kode",
          "Menghapus spasi kosong pada string secara otomatis",
          "Mengurangi resolusi gambar website",
          "Mempercepat waktu booting komputer"
        ],
        ans: 0,
        why: "Type Narrowing menyaring tipe dari union menjadi tipe pasti menggunakan type guards (seperti typeof, instanceof, in) sehingga operasi pada tipe tersebut aman dijalankan."
      }
    },
    {
      id: 'ts-08',
      num: '08',
      title: 'Generics: Komponen Fleksibel Reusable',
      level: 'Mahir',
      intro: 'Menciptakan fungsi dan struktur data bunglon yang tetap aman tanpa kehilangan tipe data asli.',
      body: `
        <h4>📦 Analogi Kotak Paket Ajaib (Generics &lt;T&gt;)</h4>
        <p>Bayangkan Supriyanto ingin membuat fungsi pembungkus API response. Jika menggunakan tipe kaku <code>Pengguna</code>, fungsi tersebut tidak bisa dipakai membungkus data <code>Produk</code>. Jika menggunakan <code>any</code>, kita kehilangan keamanan tipe data.</p>
        <p><b>Generics (&lt;T&gt;)</b> adalah parameter penampung tipe data (tipe variabel dinamis). Fungsi tetap fleksibel menerima apa pun, namun tipe data di dalamnya tetap terkunci rapat!</p>

        <div class="code-block"><span class="kw">interface</span> <span class="dt">ApiResponse</span>&lt;<span class="dt">T</span>&gt; {
  sukses: <span class="dt">boolean</span>;
  pesan: <span class="dt">string</span>;
  data: <span class="dt">T</span>; <span class="cm">// Tipe data ditentukan saat fungsi dipanggil!</span>
}

<span class="kw">interface</span> <span class="dt">User</span> { nama: <span class="dt">string</span>; role: <span class="dt">string</span>; }
<span class="kw">interface</span> <span class="dt">Produk</span> { judul: <span class="dt">string</span>; harga: <span class="dt">number</span>; }

<span class="kw">const</span> responsUser: <span class="dt">ApiResponse</span>&lt;<span class="dt">User</span>&gt; = {
  sukses: <span class="kw">true</span>,
  pesan: <span class="st">'User ditemukan'</span>,
  data: { nama: <span class="st">'Supriyanto'</span>, role: <span class="st">'Admin'</span> }
};</div>
      `,
      quiz: {
        q: "Kapan developer paling tepat memanfaatkan fitur Generics (<T>) di TypeScript?",
        opts: [
          "Ketika ingin membuat komponen, fungsi, atau interface yang reusable untuk berbagai macam tipe data dengan tetap menjaga type safety",
          "Ketika ingin membuat animasi tombol 3D",
          "Ketika ingin mengonfigurasi koneksi database MySQL",
          "Ketika ingin membagi kode menjadi dua file terpisah"
        ],
        ans: 0,
        why: "Generics memungkinkan pembuatan fungsi atau struktur data yang dapat bekerja dengan beragam tipe data tanpa mengorbankan keamanan type checking."
      }
    },
    {
      id: 'ts-09',
      num: '09',
      title: 'Enums vs Const Objects: Memilih Pendekatan Terbaik',
      level: 'Mahir',
      intro: 'Menghindari jebakan overhead kode runtime Enum dan memanfaatkan as const objects yang ringan.',
      body: `
        <h4>🔢 Mengenal Enum Tradisional</h4>
        <p>Enum memungkinkan kita mengelompokkan konstanta bernama:</p>
        <div class="code-block"><span class="kw">enum</span> <span class="dt">Arah</span> {
  Utara = <span class="st">'UTARA'</span>,
  Selatan = <span class="st">'SELATAN'</span>,
  Timur = <span class="st">'TIMUR'</span>,
  Barat = <span class="st">'BARAT'</span>
}
<span class="kw">const</span> tujuan: <span class="dt">Arah</span> = <span class="dt">Arah</span>.Utara;</div>

        <h4>🚀 Alternatif Modern: Objects dengan 'as const'</h4>
        <p>Banyak tim modern (termasuk tim core TypeScript) lebih menyukai <b>as const objects</b> karena tidak menghasilkan kode boilerplate JavaScript tambahan di hasil kompilasi akhir:</p>
        <div class="code-block"><span class="kw">const</span> ROLES = {
  ADMIN: <span class="st">'admin'</span>,
  USER: <span class="st">'user'</span>,
  GUEST: <span class="st">'guest'</span>
} <span class="kw">as const</span>;

<span class="cm">// Menghasilkan union: "admin" | "user" | "guest"</span>
<span class="kw">type</span> Role = <span class="kw">typeof</span> ROLES[<span class="kw">keyof typeof</span> ROLES];</div>
      `,
      quiz: {
        q: "Apa keuntungan utama menggunakan pola objek 'as const' dibandingkan Enum numerik di TypeScript?",
        opts: [
          "Lebih ringan dan tidak menghasilkan kode wrapper JavaScript tambahan di file hasil kompilasi akhir",
          "Otomatis tersimpan ke dalam database cloud",
          "Mampu menggandakan kecepatan prosesor komputer",
          "Menghilangkan kebutuhan menulis fungsi"
        ],
        ans: 0,
        why: "Objek dengan 'as const' adalah pola JavaScript standar yang zero-cost saat kompilasi tanpa kode fungsi wrapper tambahan seperti enum klasik."
      }
    },
    {
      id: 'ts-10',
      num: '10',
      title: 'OOP Modern: Classes, Modifiers & Implements',
      level: 'Mahir',
      intro: 'Pemrograman berorientasi objek dengan pembatasan hak akses public, private, protected, dan abstraksi.',
      body: `
        <h4>🛡️ Access Modifiers (Hak Akses Properti)</h4>
        <p>TypeScript menyediakan 3 kata kunci pengaman enkapsulasi data class:</p>
        <ul>
          <li><b>public:</b> Bisa diakses bebas dari mana saja (default).</li>
          <li><b>private (atau #):</b> Hanya bisa diakses dari dalam class itu sendiri. Terlindung rapat dari luar!</li>
          <li><b>protected:</b> Bisa diakses dari dalam class dan class turunannya (anak turunan pewarisan).</li>
        </ul>

        <div class="code-block"><span class="kw">class</span> <span class="dt">AkunBank</span> {
  <span class="kw">private</span> saldo: <span class="dt">number</span>;
  <span class="kw">public readonly</span> nomorRekening: <span class="dt">string</span>;

  <span class="kw">constructor</span>(noRek: <span class="dt">string</span>, saldoAwal: <span class="dt">number</span>) {
    <span class="kw">this</span>.nomorRekening = noRek;
    <span class="kw">this</span>.saldo = saldoAwal;
  }

  <span class="kw">public</span> <span class="fn">cekSaldo</span>(): <span class="dt">number</span> {
    <span class="kw">return this</span>.saldo;
  }
}</div>
      `,
      quiz: {
        q: "Access modifier mana yang hanya mengizinkan properti diakses di dalam class itu sendiri dan class anak turunannya?",
        opts: [
          "protected",
          "private",
          "public",
          "internal"
        ],
        ans: 0,
        why: "Modifier protected mengizinkan akses properti di dalam class yang mendefinisikannya serta sub-class yang mewarisinya, namun melarang akses langsung dari luar."
      }
    },
    {
      id: 'ts-11',
      num: '11',
      title: 'Koleksi Utility Types Sakti: Partial, Pick, Omit & Record',
      level: 'Expert',
      intro: 'Mentransformasi tipe data yang sudah ada menjadi tipe baru tanpa menulis ulang dari awal.',
      body: `
        <h4>🧙‍♂️ Empat Mantra Sakti Utility Types</h4>
        <p>Alih-alih membuat 10 interface yang mirip-mirip, TypeScript memiliki alat pembentuk tipe instan:</p>
        <div class="code-block"><span class="kw">interface</span> <span class="dt">Barang</span> {
  id: <span class="dt">number</span>;
  nama: <span class="dt">string</span>;
  harga: <span class="dt">number</span>;
  deskripsi: <span class="dt">string</span>;
}

<span class="cm">-- 1. Partial: Mengubah SEMUA properti menjadi opsional (cocok untuk operasi Update)</span>
<span class="kw">type</span> UpdateBarang = <span class="dt">Partial</span>&lt;<span class="dt">Barang</span>&gt;;

<span class="cm">-- 2. Pick: Mengambil HANYA properti tertentu yang dipilih</span>
<span class="kw">type</span> PreviewBarang = <span class="dt">Pick</span>&lt;<span class="dt">Barang</span>, <span class="st">'id'</span> | <span class="st">'nama'</span>&gt;;

<span class="cm">-- 3. Omit: Membuang properti tertentu dan mengambil sisanya</span>
<span class="kw">type</span> BarangBaru = <span class="dt">Omit</span>&lt;<span class="dt">Barang</span>, <span class="st">'id'</span>&gt;;

<span class="cm">-- 4. Record: Membuat pasangan Key-Value dengan aturan tipe ketat</span>
<span class="kw">type</span> StokToko = <span class="dt">Record</span>&lt;<span class="dt">string</span>, <span class="dt">number</span>&gt;;</div>
      `,
      quiz: {
        q: "Utility type manakah yang digunakan untuk membuat tipe baru dengan membuang (mengecualikan) properti tertentu dari interface asli?",
        opts: [
          "Omit<T, K>",
          "Pick<T, K>",
          "Partial<T>",
          "Exclude<T, U>"
        ],
        ans: 0,
        why: "Omit<T, K> mengonstruksi tipe baru dengan mengambil seluruh properti dari T kecuali properti kunci K yang disebutkan."
      }
    },
    {
      id: 'ts-12',
      num: '12',
      title: 'Konfigurasi tsconfig.json & Panduan Migrasi Proyek',
      level: 'Expert',
      intro: 'Menjinakkan compiler TypeScript, flag strict mode, dan strategi bertahap migrasi proyek nyata.',
      body: `
        <h4>⚙️ Jantung Kendali: tsconfig.json</h4>
        <p>File <code>tsconfig.json</code> adalah pusat kendali bagaimana compiler TypeScript memproses kode proyek Anda:</p>
        <div class="code-block">{
  <span class="st">"compilerOptions"</span>: {
    <span class="st">"target"</span>: <span class="st">"ES2022"</span>,          <span class="cm">/* Versi output JavaScript */</span>
    <span class="st">"module"</span>: <span class="st">"NodeNext"</span>,
    <span class="st">"strict"</span>: <span class="kw">true</span>,              <span class="cm">/* Wajib aktif: Menyalakan seluruh pemeriksaan ketat */</span>
    <span class="st">"noImplicitAny"</span>: <span class="kw">true</span>,       <span class="cm">/* Melarang variabel tanpa tipe menjadi any diam-diam */</span>
    <span class="st">"esModuleInterop"</span>: <span class="kw">true</span>,
    <span class="st">"skipLibCheck"</span>: <span class="kw">true</span>,
    <span class="st">"outDir"</span>: <span class="st">"./dist"</span>           <span class="cm">/* Folder hasil kompilasi JS murni */</span>
  },
  <span class="st">"include"</span>: [<span class="st">"src/**/*"</span>]
}</div>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh perjalanan menguasai TypeScript dari fondasi type annotations hingga konfigurasi enterprise compiler. Uji keahlian Anda di <b>Quiz TypeScript</b>!</div>
        </div>
      `,
      quiz: {
        q: "Opsi konfigurasi mana di tsconfig.json yang mengaktifkan seluruh aturan pemeriksaan tipe paling ketat untuk menjamin kualitas kode terbaik?",
        opts: [
          "\"strict\": true",
          "\"fastMode\": true",
          "\"noErrors\": true",
          "\"autoFix\": true"
        ],
        ans: 0,
        why: "\"strict\": true menyalakan sekumpulan flag pemeriksaan tipe ketat (seperti noImplicitAny, strictNullChecks, dll.) yang menjadi standar emas industri."
      }
    }
  ]
};
