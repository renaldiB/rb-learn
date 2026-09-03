export const sqlTrack = {
  id: 'sql',
  title: 'SQL & Database 🗄️',
  subtitle: 'Query Relasional: DDL, DML, Multi-table JOIN, Indexing, Transaksi ACID & Normalisasi',
  accent: 'emerald',
  category: 'it',
  lessons: [
    {
      id: 'sql-01',
      num: '01',
      title: 'Fondasi Basis Data Relasional & RDBMS',
      level: 'Pemula',
      intro: 'Memahami mengapa spreadsheet Excel tidak cukup untuk aplikasi modern dan bagaimana tabel saling berhubungan.',
      body: `
        <h4>🏪 Analogi Lemari Buku Toko Supriyanto</h4>
        <p>Saat tokonya masih kecil, Supriyanto mencatat semua pesanan dan pelanggan di satu lemari buku catatan (layaknya lemari Excel). Namun ketika pembeli mencapai puluhan ribu orang, catatan tersebut mulai kacau: nama pelanggan tertulis berulang-ulang, salah ketik alamat, dan data rawan terhapus secara tidak sengaja.</p>
        <p><b>RDBMS (Relational Database Management System)</b> seperti PostgreSQL, MySQL, dan SQLite memecahkan masalah ini dengan memisahkan data ke dalam tabel-tabel spesifik yang saling terhubung (berelasi):
        <ul>
          <li>Tabel <code>pelanggan</code>: Hanya menyimpan identitas unik pembeli.</li>
          <li>Tabel <code>produk</code>: Menyimpan stok dan harga barang.</li>
          <li>Tabel <code>pesanan</code>: Menghubungkan pembeli dengan produk yang dibeli melalui kunci penghubung.</li>
        </ul>
        </p>

        <h4>🔑 Mengenal Primary Key & Foreign Key</h4>
        <p>Agar tidak ada data yang tertukar, setiap baris tabel wajib memiliki <b>Primary Key (Kunci Utama)</b> — identitas unik seperti nomor KTP (misal: <code>id_pelanggan = 101</code>). Sedangkan <b>Foreign Key (Kunci Tamu)</b> adalah kolom di tabel lain yang merujuk kembali ke Primary Key tersebut.</p>
      `,
      quiz: {
        q: "Apa fungsi utama dari Primary Key dalam tabel basis data relasional?",
        opts: [
          "Sebagai identitas unik penanda setiap baris data agar tidak terjadi duplikasi",
          "Untuk mengenkripsi password dengan teknologi blockchain",
          "Untuk mengubah format angka menjadi mata uang rupiah secara otomatis",
          "Membatasi ukuran tabel maksimal 10 Megabyte"
        ],
        ans: 0,
        why: "Primary Key memastikan setiap baris (record) dalam tabel memiliki pengenal unik yang tidak boleh kosong (NOT NULL) dan tidak boleh bernilai ganda (UNIQUE)."
      }
    },
    {
      id: 'sql-02',
      num: '02',
      title: 'DDL: Membuat & Mengelola Tabel (CREATE, ALTER, DROP)',
      level: 'Pemula',
      intro: 'Merancang cetak biru arsitektur tabel dengan tipe data dan aturan constraint yang kuat.',
      body: `
        <h4>📐 Data Definition Language (DDL)</h4>
        <p>DDL adalah sekumpulan perintah SQL untuk membangun, mengubah, atau meruntuhkan struktur fisik wadah data (tabel). Perintah DDL tidak memanipulasi isi baris data, melainkan kerangka bangunannya:</p>
        <div class="code-block"><span class="cm">-- 1. Membuat tabel pelanggan baru milik Supriyanto</span>
<span class="kw">CREATE TABLE</span> pelanggan (
  id <span class="kw">SERIAL PRIMARY KEY</span>,
  nama <span class="kw">VARCHAR(100) NOT NULL</span>,
  email <span class="kw">VARCHAR(150) UNIQUE NOT NULL</span>,
  poin_belanja <span class="kw">INT DEFAULT</span> 0,
  dibuat_pada <span class="kw">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>
);

<span class="cm">-- 2. Menambahkan kolom baru jika ada kebutuhan fitur</span>
<span class="kw">ALTER TABLE</span> pelanggan <span class="kw">ADD COLUMN</span> nomor_hp <span class="kw">VARCHAR(20)</span>;

<span class="cm">-- 3. Menghapus tabel secara permanen</span>
<span class="kw">DROP TABLE IF EXISTS</span> tabel_lama;</div>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Constraint Pelindung Data:</b> Gunakan <code>NOT NULL</code> agar kolom tidak bisa dikosongkan, <code>UNIQUE</code> agar tidak ada email kembar, dan <code>DEFAULT</code> untuk mengisi nilai awal otomatis.</div>
        </div>
      `,
      quiz: {
        q: "Perintah SQL mana yang digunakan untuk menambahkan kolom baru ke dalam struktur tabel yang sudah ada?",
        opts: [
          "ALTER TABLE ... ADD COLUMN ...",
          "UPDATE TABLE ... INSERT COLUMN ...",
          "CREATE COLUMN ... IN TABLE ...",
          "MODIFY TABLE ... NEW COLUMN ..."
        ],
        ans: 0,
        why: "ALTER TABLE adalah perintah DDL untuk memodifikasi struktur skema tabel, termasuk menambah kolom baru dengan klausa ADD COLUMN."
      }
    },
    {
      id: 'sql-03',
      num: '03',
      title: 'DML: Memasukkan, Mengubah & Menghapus Data',
      level: 'Pemula',
      intro: 'Operasi CRUD data: INSERT data baru, UPDATE data yang ada, dan menghapus dengan aman via DELETE.',
      body: `
        <h4>📝 Manipulasi Data (DML: Data Manipulation Language)</h4>
        <p>Setelah kerangka tabel tersedia, Supriyanto dapat mengelola isi baris data dengan tiga perintah utama:</p>
        <div class="code-block"><span class="cm">-- 1. INSERT: Memasukkan data pelanggan baru</span>
<span class="kw">INSERT INTO</span> pelanggan (nama, email, nomor_hp)
<span class="kw">VALUES</span> (<span class="st">'Supriyanto'</span>, <span class="st">'supriyanto@example.com'</span>, <span class="st">'081234567890'</span>);

<span class="cm">-- 2. UPDATE: Mengubah data poin pelanggan</span>
<span class="kw">UPDATE</span> pelanggan
<span class="kw">SET</span> poin_belanja = poin_belanja + 50
<span class="kw">WHERE</span> id = 1;

<span class="cm">-- 3. DELETE: Menghapus pelanggan tertentu</span>
<span class="kw">DELETE FROM</span> pelanggan
<span class="kw">WHERE</span> id = 99;</div>

        <div class="tip-box">
          <span class="tip-box-icon">⚠️</span>
          <div><b>Mimpi Buruk Developer:</b> Jangan pernah lupa menyertakan klausa <code>WHERE</code> pada perintah <code>UPDATE</code> dan <code>DELETE</code>! Tanpa <code>WHERE</code>, seluruh baris data di tabel akan terhapus atau berubah serentak!</div>
        </div>
      `,
      quiz: {
        q: "Apa yang akan terjadi jika developer menjalankan perintah 'DELETE FROM pelanggan;' tanpa menyertakan klausa WHERE?",
        opts: [
          "Semua baris data pelanggan di dalam tabel akan terhapus tanpa sisa",
          "Hanya baris paling atas yang terhapus",
          "Database akan memunculkan pesan error dan membatalkan perintah",
          "Struktur tabel pelanggan akan otomatis hilang"
        ],
        ans: 0,
        why: "Klausa WHERE menentukan baris mana yang dihapus. Tanpa WHERE, perintah DELETE akan menghapus seluruh isi rekaman baris dalam tabel tersebut."
      }
    },
    {
      id: 'sql-04',
      num: '04',
      title: 'Query Data: SELECT, DISTINCT, WHERE & Operator Logika',
      level: 'Pemula',
      intro: 'Menyaring dan menampilkan data presisi menggunakan operator logika AND, OR, NOT, IN, dan LIKE.',
      body: `
        <h4>🔍 Seni Membaca Data dengan SELECT</h4>
        <p>Perintah <code>SELECT</code> adalah fondasi utama membaca data di SQL. Daripada mengambil semua kolom dengan <code>SELECT *</code>, praktik terbaik industri adalah menyebutkan nama kolom yang dibutuhkan:</p>
        <div class="code-block"><span class="cm">-- Mengambil nama dan email dengan filter harga & kategori</span>
<span class="kw">SELECT</span> nama_produk, harga, stok
<span class="kw">FROM</span> produk
<span class="kw">WHERE</span> (kategori = <span class="st">'Elektronik'</span> <span class="kw">AND</span> harga &lt; 5000000)
   <span class="kw">OR</span> (kategori = <span class="st">'Aksesoris'</span> <span class="kw">AND</span> stok &gt; 10);</div>

        <h4>🎯 Operator Pencarian Sakti: IN & LIKE</h4>
        <ul>
          <li><b>IN:</b> Memilih data yang cocok dengan sekumpulan pilihan:
            <br><code>WHERE kategori IN ('Buku', 'Elektronik', 'Kopi')</code></li>
          <li><b>LIKE (Pencarian Teks):</b> Mencari pola kata menggunakan wildcard <code>%</code>:
            <br><code>WHERE nama LIKE '%Supriyanto%'</code> (mengandung kata Supriyanto di posisi mana pun).</li>
          <li><b>DISTINCT:</b> Menghilangkan baris duplikat dari hasil pencarian:
            <br><code>SELECT DISTINCT kota_asal FROM pelanggan;</code></li>
        </ul>
      `,
      quiz: {
        q: "Klausa mana yang digunakan untuk mencari produk yang namanya diawali dengan kata 'Laptop'?",
        opts: [
          "WHERE nama LIKE 'Laptop%'",
          "WHERE nama == 'Laptop*'",
          "WHERE nama IN ('Laptop')",
          "WHERE nama CONTAINS 'Laptop'"
        ],
        ans: 0,
        why: "Dalam SQL standar, operator LIKE bersama wildcard % di akhir ('Laptop%') mencocokkan teks apa pun yang diawali dengan kata 'Laptop'."
      }
    },
    {
      id: 'sql-05',
      num: '05',
      title: 'Mengurutkan & Paginasi: ORDER BY, LIMIT & OFFSET',
      level: 'Menengah',
      intro: 'Menyajikan data terurut dari yang termahal/termurah serta teknik paginasi halaman aplikasi.',
      body: `
        <h4>📶 Mengurutkan Data: ORDER BY (ASC / DESC)</h4>
        <p>Data di basis data tidak disimpan secara berurutan. Gunakan <code>ORDER BY</code> untuk menata urutan hasil query:</p>
        <div class="code-block"><span class="cm">-- Urutkan produk dari harga paling mahal (Descending)</span>
<span class="kw">SELECT</span> nama_produk, harga
<span class="kw">FROM</span> produk
<span class="kw">ORDER BY</span> harga <span class="kw">DESC</span>;

<span class="cm">-- Urutkan berdasarkan kategori A-Z, lalu jika sama urutkan harga termurah</span>
<span class="kw">SELECT</span> nama_produk, kategori, harga
<span class="kw">FROM</span> produk
<span class="kw">ORDER BY</span> kategori <span class="kw">ASC</span>, harga <span class="kw">ASC</span>;</div>

        <h4>📄 Paginasi Halaman Web dengan LIMIT & OFFSET</h4>
        <p>Aplikasi web modern tidak boleh menampilkan 1.000.000 produk sekaligus di layar handphone. Kita membaginya menjadi halaman demi halaman (misal 10 item per halaman):</p>
        <div class="code-block"><span class="cm">-- Halaman 1 (Item 1 sampai 10)</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> produk <span class="kw">LIMIT</span> 10 <span class="kw">OFFSET</span> 0;

<span class="cm">-- Halaman 2 (Lewati 10 item pertama, ambil 10 berikutnya)</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> produk <span class="kw">LIMIT</span> 10 <span class="kw">OFFSET</span> 10;

<span class="cm">-- Halaman 3 (Rumus: OFFSET = (Halaman - 1) * LIMIT)</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> produk <span class="kw">LIMIT</span> 10 <span class="kw">OFFSET</span> 20;</div>
      `,
      quiz: {
        q: "Jika Anda ingin menampilkan data pada halaman ke-4 dengan batas 15 data per halaman, berapa nilai OFFSET yang tepat?",
        opts: [
          "OFFSET 45",
          "OFFSET 60",
          "OFFSET 30",
          "OFFSET 15"
        ],
        ans: 0,
        why: "Rumus paginasi adalah OFFSET = (Nomor Halaman - 1) * LIMIT. Untuk halaman ke-4: (4 - 1) * 15 = 45 data pertama dilewati."
      }
    },
    {
      id: 'sql-06',
      num: '06',
      title: 'Agregasi & Pengelompokan: COUNT, SUM, GROUP BY & HAVING',
      level: 'Menengah',
      intro: 'Menghasilkan laporan bisnis: total omzet, rata-rata penjualan, dan penyaringan grup.',
      body: `
        <h4>📊 Fungsi Agregasi Matematika</h4>
        <p>SQL memiliki fungsi bawaan untuk menghitung ringkasan statistik dari ribuan baris data:</p>
        <div class="code-block"><span class="kw">SELECT</span>
  <span class="kw">COUNT</span>(*) <span class="kw">AS</span> total_transaksi,
  <span class="kw">SUM</span>(total_bayar) <span class="kw">AS</span> total_omzet,
  <span class="kw">AVG</span>(total_bayar) <span class="kw">AS</span> rata_rata_belanja,
  <span class="kw">MAX</span>(total_bayar) <span class="kw">AS</span> belanja_terbesar,
  <span class="kw">MIN</span>(total_bayar) <span class="kw">AS</span> belanja_terkecil
<span class="kw">FROM</span> pesanan;</div>

        <h4>📦 GROUP BY & Membedakan WHERE vs HAVING</h4>
        <p>Ketika ingin mengetahui total omzet <i>per kategori produk</i>, gunakan <code>GROUP BY</code>:</p>
        <div class="code-block"><span class="kw">SELECT</span> kategori, <span class="kw">SUM</span>(total_bayar) <span class="kw">AS</span> omzet_kategori
<span class="kw">FROM</span> produk
<span class="kw">GROUP BY</span> kategori
<span class="kw">HAVING SUM</span>(total_bayar) &gt; 10000000;</div>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Kunci Hafalan Supriyanto:</b> <code>WHERE</code> menyaring baris <b>sebelum</b> dikelompokkan, sedangkan <code>HAVING</code> menyaring hasil agregasi <b>setelah</b> dikelompokkan oleh GROUP BY!</div>
        </div>
      `,
      quiz: {
        q: "Klausa apa yang digunakan untuk menyaring hasil pengelompokan agregasi (misal: hanya menampilkan grup yang omzetnya di atas 10 juta)?",
        opts: [
          "HAVING",
          "WHERE",
          "FILTER BY",
          "ORDER BY"
        ],
        ans: 0,
        why: "Klausa HAVING digunakan khusus untuk menyaring kondisi pada fungsi agregasi setelah data dikelompokkan oleh GROUP BY."
      }
    },
    {
      id: 'sql-07',
      num: '07',
      title: 'Relasi Tabel I: Menguasai INNER JOIN & LEFT JOIN',
      level: 'Menengah',
      intro: 'Menyatukan data dari dua tabel terpisah berdasarkan kunci penghubung relasi.',
      body: `
        <h4>🤝 Mengapa Perlu JOIN?</h4>
        <p>Di tabel <code>pesanan</code>, kita hanya menyimpan <code>id_pelanggan: 101</code>. Pelanggan ingin melihat resi belanja yang mencantumkan nama asli dan alamatnya. Kita menggabungkan tabel <code>pesanan</code> dan <code>pelanggan</code> menggunakan <b>JOIN</b>!</p>

        <h4>🔗 Perbedaan INNER JOIN vs LEFT JOIN</h4>
        <div class="code-block"><span class="cm">-- 1. INNER JOIN: Hanya menampilkan pesanan yang memiliki pelanggan valid</span>
<span class="kw">SELECT</span> pesanan.id, pelanggan.nama, pesanan.total_bayar
<span class="kw">FROM</span> pesanan
<span class="kw">INNER JOIN</span> pelanggan <span class="kw">ON</span> pesanan.id_pelanggan = pelanggan.id;

<span class="cm">-- 2. LEFT JOIN: Tampilkan SEMUA pelanggan, meski belum pernah belanja sama sekali</span>
<span class="kw">SELECT</span> pelanggan.nama, pesanan.id <span class="kw">AS</span> nomor_pesanan
<span class="kw">FROM</span> pelanggan
<span class="kw">LEFT JOIN</span> pesanan <span class="kw">ON</span> pelanggan.id = pesanan.id_pelanggan;</div>
        <p>Pada <code>LEFT JOIN</code>, pelanggan yang belum pernah belanja tetap muncul di daftar dengan nilai <code>NULL</code> pada kolom pesanan. Ini sangat berguna untuk mencari pelanggan pasif!</p>
      `,
      quiz: {
        q: "Apa hasil dari query LEFT JOIN jika baris pada tabel kiri tidak memiliki pasangan yang cocok di tabel kanan?",
        opts: [
          "Baris tabel kiri tetap ditampilkan dan kolom tabel kanan diisi dengan nilai NULL",
          "Baris tabel kiri akan otomatis dihapus dari database",
          "Query akan menghasilkan error syntax",
          "Baris tabel kanan akan diisi nilai angka 0"
        ],
        ans: 0,
        why: "LEFT JOIN mempertahankan seluruh data dari tabel sebelah kiri, dan jika tidak ada kecocokan di tabel kanan, kolom tabel kanan akan bernilai NULL."
      }
    },
    {
      id: 'sql-08',
      num: '08',
      title: 'Relasi Tabel II: RIGHT JOIN, FULL JOIN & Self Join',
      level: 'Mahir',
      intro: 'Tipe penggabungan komprehensif dan teknik menghubungkan tabel dengan dirinya sendiri.',
      body: `
        <h4>🌐 RIGHT JOIN & FULL OUTER JOIN</h4>
        <ul>
          <li><b>RIGHT JOIN:</b> Kebalikan dari LEFT JOIN, mempertahankan seluruh baris dari tabel sebelah kanan.</li>
          <li><b>FULL OUTER JOIN:</b> Menggabungkan kedua tabel secara total. Menampilkan semua baris dari kiri dan kanan, serta mengisi <code>NULL</code> pada sisi yang tidak memiliki pasangan cocok.</li>
        </ul>

        <h4>🪞 Self Join: Menghubungkan Tabel dengan Dirinya Sendiri</h4>
        <p>Kasus umum di dunia kerja adalah tabel karyawan di mana setiap karyawan memiliki atasan (Manajer) yang juga sesama karyawan di tabel yang sama:</p>
        <div class="code-block"><span class="kw">SELECT</span>
  karyawan.nama <span class="kw">AS</span> nama_staf,
  manajer.nama <span class="kw">AS</span> nama_atasan
<span class="kw">FROM</span> staf karyawan
<span class="kw">LEFT JOIN</span> staf manajer <span class="kw">ON</span> karyawan.id_atasan = manajer.id;</div>
        <p>Dengan memberi alias berbeda (<code>karyawan</code> dan <code>manajer</code>), kita dapat memperlakukan satu tabel fisik seolah-olah menjadi dua tabel berbeda!</p>
      `,
      quiz: {
        q: "Kapan teknik Self Join biasanya diterapkan pada basis data?",
        opts: [
          "Ketika sebuah tabel memiliki relasi hierarkis ke dirinya sendiri (seperti struktur staf dan manajer)",
          "Ketika kapasitas harddisk server hampir penuh",
          "Ketika ingin menduplikasi seluruh tabel ke database cadangan",
          "Ketika tidak ada koneksi internet pada server database"
        ],
        ans: 0,
        why: "Self Join digunakan saat data memiliki hubungan relasional hierarkis atau perbandingan di dalam satu tabel yang sama, seperti struktur organisasi staf dan atasan."
      }
    },
    {
      id: 'sql-09',
      num: '09',
      title: 'Subquery & Common Table Expressions (WITH / CTE)',
      level: 'Mahir',
      intro: 'Menulis query modular yang bersih dan mudah dipelihara menggunakan CTE.',
      body: `
        <h4>🧩 Apa Itu Subquery (Query di dalam Query)?</h4>
        <p>Misalkan Supriyanto ingin mencari produk apa saja yang harganya di atas rata-rata seluruh toko:</p>
        <div class="code-block"><span class="cm">-- Subquery di dalam klausa WHERE</span>
<span class="kw">SELECT</span> nama_produk, harga
<span class="kw">FROM</span> produk
<span class="kw">WHERE</span> harga &gt; (<span class="kw">SELECT AVG</span>(harga) <span class="kw">FROM</span> produk);</div>

        <h4>✨ CTE (Common Table Expressions): Query Elegan Bersih</h4>
        <p>Subquery yang bertingkat banyak sangat sulit dibaca (seperti sarang laba-laba). Solusi modern SQL adalah menggunakan klausa <b>WITH (CTE)</b>:</p>
        <div class="code-block"><span class="kw">WITH</span> PelangganSultan <span class="kw">AS</span> (
  <span class="kw">SELECT</span> id_pelanggan, <span class="kw">SUM</span>(total_bayar) <span class="kw">AS</span> total_belanja
  <span class="kw">FROM</span> pesanan
  <span class="kw">GROUP BY</span> id_pelanggan
  <span class="kw">HAVING SUM</span>(total_bayar) &gt; 20000000
)
<span class="kw">SELECT</span> p.nama, s.total_belanja
<span class="kw">FROM</span> PelangganSultan s
<span class="kw">JOIN</span> pelanggan p <span class="kw">ON</span> s.id_pelanggan = p.id;</div>
      `,
      quiz: {
        q: "Klausa apa yang digunakan dalam SQL standar untuk mendefinisikan Common Table Expression (CTE)?",
        opts: [
          "WITH",
          "DEFINE",
          "DECLARE",
          "LET"
        ],
        ans: 0,
        why: "Klausa WITH digunakan untuk membuat temporary named result set (CTE) yang memudahkan pembacaan dan modularitas query yang kompleks."
      }
    },
    {
      id: 'sql-10',
      num: '10',
      title: 'Indeks & Optimasi Query: B-Tree Index & EXPLAIN',
      level: 'Mahir',
      intro: 'Mengubah pencarian lambat Full Table Scan menjadi secepat kilat dengan struktur indeks pohon B-Tree.',
      body: `
        <h4>📖 Analogi Indeks di Halaman Belakang Buku</h4>
        <p>Bayangkan Anda mencari resep masakan di buku setebal 1.000 halaman. Jika membalik halaman satu per satu dari halaman 1 sampai 1.000 (<b>Full Table Scan / Seq Scan</b>), Anda akan kelelahan. Namun jika Anda membuka halaman Indeks Alfabet di bagian belakang buku, Anda langsung tahu resep tersebut ada di halaman 345!</p>
        <p>Itulah cara kerja <b>Index (B-Tree Index)</b> di database. Indeks membuat struktur pohon data terurut di memori sehingga pencarian data berukuran jutaan baris selesai dalam hitungan milidetik.</p>

        <div class="code-block"><span class="cm">-- Membuat indeks pada kolom email agar proses login instan</span>
<span class="kw">CREATE INDEX</span> idx_pelanggan_email <span class="kw">ON</span> pelanggan (email);

<span class="cm">-- Menyelidiki rencana kerja mesin database dengan EXPLAIN ANALYZE</span>
<span class="kw">EXPLAIN ANALYZE SELECT</span> * <span class="kw">FROM</span> pelanggan <span class="kw">WHERE</span> email = <span class="st">'supriyanto@example.com'</span>;</div>
        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Jangan Berlebihan:</b> Setiap indeks mempercepat pembacaan (<code>SELECT</code>), tetapi sedikit memperlambat penulisan (<code>INSERT/UPDATE</code>) karena pohon indeks harus diperbarui. Pasanglah indeks hanya pada kolom yang sering dicari atau di-JOIN!</div>
        </div>
      `,
      quiz: {
        q: "Perintah apa yang digunakan developer untuk menganalisis rencana eksekusi dan kecepatan eksekusi query pada database?",
        opts: [
          "EXPLAIN / EXPLAIN ANALYZE",
          "SHOW SPEED QUERY",
          "CHECK PERFORMANCE",
          "DEBUG QUERY NOW"
        ],
        ans: 0,
        why: "EXPLAIN (atau EXPLAIN ANALYZE di PostgreSQL/MySQL) menampilkan detail rencana eksekusi query (Query Plan), seperti apakah menggunakan index atau full table scan."
      }
    },
    {
      id: 'sql-11',
      num: '11',
      title: 'Integritas Transaksi ACID: COMMIT & ROLLBACK',
      level: 'Expert',
      intro: 'Menjaga keutuhan data finansial perbankan: sukses semua atau tidak sama sekali.',
      body: `
        <h4>🏦 Studi Kasus Transfer Uang Toko Supriyanto</h4>
        <p>Bayangkan Supriyanto mentransfer uang Rp 1.000.000 dari Rekening A ke Rekening B. Proses ini membutuhkan 2 langkah:
        <ol>
          <li>Saldo Rekening A dikurangi Rp 1.000.000.</li>
          <li>Saldo Rekening B ditambah Rp 1.000.000.</li>
        </ol>
        Jika listrik padam atau server meledak persis setelah langkah 1 selesai, uang Supriyanto akan lenyap di antah berantah! <b>Transaksi Basis Data (ACID)</b> diciptakan untuk mencegah bencana ini.</p>

        <h4>🛡️ Empat Pilar ACID</h4>
        <ul>
          <li><b>Atomicity:</b> Semua operasi berhasil, atau jika satu gagal maka semuanya dibatalkan (All-or-Nothing).</li>
          <li><b>Consistency:</b> Data harus selalu mematuhi semua aturan validasi dan constraint.</li>
          <li><b>Isolation:</b> Transaksi yang berjalan bersamaan tidak saling mengganggu.</li>
          <li><b>Durability:</b> Begitu dinyatakan sukses (Commit), data aman tersimpan permanen meski server mati mendadak.</li>
        </ul>

        <div class="code-block"><span class="kw">BEGIN TRANSACTION</span>;
  <span class="kw">UPDATE</span> rekening <span class="kw">SET</span> saldo = saldo - 1000000 <span class="kw">WHERE</span> id = <span class="st">'A'</span>;
  <span class="kw">UPDATE</span> rekening <span class="kw">SET</span> saldo = saldo + 1000000 <span class="kw">WHERE</span> id = <span class="st">'B'</span>;
<span class="kw">COMMIT</span>; <span class="cm">-- Simpan permanen jika semua lancar, atau ROLLBACK jika terjadi kegagalan</span></div>
      `,
      quiz: {
        q: "Prinsip ACID manakah yang menjamin bahwa transaksi dieksekusi secara utuh atau dibatalkan seluruhnya (All-or-Nothing)?",
        opts: [
          "Atomicity",
          "Consistency",
          "Isolation",
          "Durability"
        ],
        ans: 0,
        why: "Atomicity (keutuhan) memastikan bahwa seluruh rangkaian perintah dalam satu transaksi berhasil seluruhnya, atau jika gagal, database di-rollback ke kondisi semula."
      }
    },
    {
      id: 'sql-12',
      num: '12',
      title: 'Desain Skema & Normalisasi Basis Data (1NF, 2NF, 3NF)',
      level: 'Expert',
      intro: 'Merancang arsitektur database profesional yang bebas anomali dan hemat penyimpanan.',
      body: `
        <h4>🏛️ Tiga Bentuk Normalisasi (1NF, 2NF, 3NF)</h4>
        <p>Normalisasi adalah teknik perancangan skema database untuk menghilangkan redudansi (duplikasi sia-sia) dan mencegah anomali saat insert/update/delete:</p>
        <ol>
          <li><b>First Normal Form (1NF):</b>
            <br>• Setiap kolom hanya boleh berisi satu nilai tunggal (Atomic Value). Tidak boleh ada daftar koma seperti: <code>hobi: "futsal, koding, renang"</code> di satu kolom.
            <br>• Wajib memiliki Primary Key.</li>
          <li><b>Second Normal Form (2NF):</b>
            <br>• Sudah memenuhi 1NF.
            <br>• Semua kolom non-key harus bergantung penuh pada seluruh Primary Key (menghilangkan Partial Dependency).</li>
          <li><b>Third Normal Form (3NF):</b>
            <br>• Sudah memenuhi 2NF.
            <br>• Tidak boleh ada ketergantungan transitif: kolom non-key tidak boleh bergantung pada kolom non-key lainnya (misal: kolom <code>nama_kota</code> tidak boleh disimpan di tabel transaksi jika sudah ada <code>id_kota</code>).</li>
        </ol>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh perjalanan menguasai SQL & Relational Database dari fondasi tabel dasar hingga desain skema ternormalisasi. Uji keahlian Anda di <b>Quiz SQL</b>!</div>
        </div>
      `,
      quiz: {
        q: "Kapan sebuah tabel basis data relasional dikatakan telah memenuhi First Normal Form (1NF)?",
        opts: [
          "Setiap sel kolom hanya berisi satu nilai tunggal (atomic value) dan tabel memiliki Primary Key",
          "Tabel telah memiliki minimal 10 indeks B-Tree",
          "Semua tabel telah menggunakan tipe data VARCHAR",
          "Database telah terhubung ke cloud server"
        ],
        ans: 0,
        why: "1NF mensyaratkan setiap kolom bernilai atomik (tidak ada multiple values/array di satu kolom) serta memiliki pengenal unik utama (Primary Key)."
      }
    }
  ]
};
