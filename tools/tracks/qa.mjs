export const qaTrack = {
  id: 'qa',
  title: 'QA & Software Testing 🛡️',
  subtitle: 'Fondasi Quality Assurance: Black Box, White Box, Unit Test, Piramida Testing & Metodologi STLC',
  accent: 'teal',
  category: 'it',
  lessons: [
    {
      id: 'qa-01',
      num: '01',
      title: 'Fondasi QA: Perbedaan QA vs QC vs Software Testing & STLC',
      level: 'Pemula',
      intro: 'Memahami peran penting penjamin kualitas perangkat lunak dan mengapa bug yang lolos ke produksi berharga sangat mahal.',
      body: `
        <h4>🛡️ Analogi Pabrik Mobil Supriyanto</h4>
        <p>Bayangkan Supriyanto membuka pabrik mobil keluarga. Terdapat tiga pilar penting untuk memastikan mobil aman dikendarai:
        <ul>
          <li><b>Quality Assurance (QA):</b> Berfokus pada <i>proses</i> pembuatan (preventif). QA merancang SOP perakitan, memastikan baut dipasang sesuai standar keselamatan internasional, dan mencegah cacat sebelum mobil selesai dirakit.</li>
          <li><b>Quality Control (QC):</b> Berfokus pada <i>produk jadi</i> (detektif). QC menginspeksi mobil yang baru keluar dari jalur produksi untuk memilah mana mobil yang lolos QC dan mana yang cacat.</li>
          <li><b>Software Testing:</b> Tindakan nyata pengujian (eksekusi uji rem, uji tabrak, uji kecepatan) untuk menemukan cacat secara terukur.</li>
        </ul>
        </p>

        <h4>💸 Biaya Memperbaiki Bug (Rule of Ten)</h4>
        <p>Dalam rekayasa perangkat lunak, semakin lambat sebuah bug ditemukan, semakin berlipat ganda biaya memperbaikinya:
        <br>• Bug ditemukan saat tahap analisis kebutuhan: <b>1x biaya</b>.
        <br>• Bug ditemukan saat koding oleh programmer: <b>5x biaya</b>.
        <br>• Bug ditemukan oleh tim QA di lingkungan testing: <b>10x biaya</b>.
        <br>• Bug baru meledak saat aplikasi sudah dipakai jutaan pengguna: <b>100x biaya</b> (merusak reputasi bisnis, kerugian finansial, dan tuntutan hukum)!</p>

        <h4>🔄 Siklus Hidup Pengujian: STLC (Software Testing Life Cycle)</h4>
        <p>Proses QA profesional berjalan teratur melalui 6 fase:
        <ol>
          <li><b>Requirement Analysis:</b> Menganalisis dokumen kebutuhan bisnis (PRD / User Stories).</li>
          <li><b>Test Planning:</b> Menentukan strategi, jadwal, alokasi sumber daya, dan risiko.</li>
          <li><b>Test Case Development:</b> Menulis skenario dan langkah uji detail.</li>
          <li><b>Test Environment Setup:</b> Menyiapkan server staging, database dummy, dan alat uji.</li>
          <li><b>Test Execution:</b> Menjalankan pengujian dan mencatat bug yang ditemukan.</li>
          <li><b>Test Cycle Closure:</b> Evaluasi metrik kelolosan kualitas dan laporan akhir rilis.</li>
        </ol>
        </p>
      `,
      quiz: {
        q: "Apa perbedaan mendasar antara Quality Assurance (QA) dan Quality Control (QC)?",
        opts: [
          "QA berfokus pada pencegahan cacat melalui penyempurnaan proses, sedangkan QC berfokus pada pemeriksaan produk jadi",
          "QA hanya menulis kode JavaScript, sedangkan QC hanya mengetes di handphone",
          "QA dilakukan oleh pelanggan, sedangkan QC dilakukan oleh manajer proyek",
          "QA dan QC adalah istilah identik yang tidak memiliki perbedaan sama sekali"
        ],
        ans: 0,
        why: "Quality Assurance berorientasi pada proses (process-oriented) untuk mencegah timbulnya bug, sedangkan Quality Control berorientasi pada produk (product-oriented) untuk menyaring cacat pada output akhir."
      }
    },
    {
      id: 'qa-02',
      num: '02',
      title: 'Black Box Testing: Equivalence Partitioning & Boundary Value Analysis',
      level: 'Pemula',
      intro: 'Menguji fungsionalitas aplikasi dari luar tanpa perlu melihat baris kode menggunakan teknik partisi dan nilai batas.',
      body: `
        <h4>📦 Apa Itu Black Box Testing?</h4>
        <p><b>Black Box Testing</b> adalah teknik pengujian di mana tester memperlakukan sistem seperti kotak hitam yang tidak terlihat jeroan kodenya. Penguji hanya memberikan <b>Input</b> tertentu dan memverifikasi apakah <b>Output</b> yang dihasilkan sesuai dengan dokumen spesifikasi.</p>

        <h4>🎯 Dua Teknik Desain Uji Black Box Wajib Kuasai</h4>
        <p>Misalkan formulir pendaftaran akun toko Supriyanto menerima usia antara <b>18 hingga 60 tahun</b>. Anda tidak mungkin mencoba mengetik semua angka dari -9999 sampai 99999. Dua teknik berikut menyederhanakannya secara cerdas:</p>

        <h4>1. Equivalence Partitioning (EP)</h4>
        <p>Membagi rentang input menjadi kelompok-kelompok kelas valid dan invalid. Menguji satu sampel dari setiap kelas sudah mewakili seluruh anggota kelompok tersebut:</p>
        <table class="zh-table">
          <thead><tr><th>Kelas Partisi</th><th>Rentang Nilai</th><th>Sampel Uji</th><th>Ekspektasi Sistem</th></tr></thead>
          <tbody>
            <tr><td><b>Invalid Bawah</b></td><td>&lt; 18 tahun</td><td>15</td><td>Ditolak (Error pesan muncul)</td></tr>
            <tr><td><b>Valid</b></td><td>18 s/d 60 tahun</td><td>30</td><td>Diterima (Pendaftaran sukses)</td></tr>
            <tr><td><b>Invalid Atas</b></td><td>&gt; 60 tahun</td><td>75</td><td>Ditolak (Error pesan muncul)</td></tr>
          </tbody>
        </table>

        <h4>2. Boundary Value Analysis (BVA)</h4>
        <p>Sebagian besar bug pemrograman terjadi persis di batas tepi (akibat salah ketik operator seperti <code>&lt;</code> bukannya <code>&lt;=</code>). BVA menguji titik batas minimum, maksimum, dan angka tepat sebelum/sesudahnya:</p>
        <p>Untuk rentang usia 18 s/d 60, nilai uji kritis BVA adalah:
        <br>• <b>17</b> (tepat di bawah batas minimum → Invalid)
        <br>• <b>18</b> (titik batas minimum → Valid)
        <br>• <b>19</b> (tepat di atas batas minimum → Valid)
        <br>• <b>59</b> (tepat di bawah batas maksimum → Valid)
        <br>• <b>60</b> (titik batas maksimum → Valid)
        <br>• <b>61</b> (tepat di atas batas maksimum → Invalid)</p>
      `,
      quiz: {
        q: "Jika sebuah kolom input mewajibkan teks dengan panjang 5 hingga 10 karakter, nilai batas (BVA) mana yang wajib diuji oleh QA?",
        opts: [
          "4, 5, 6, 9, 10, dan 11 karakter",
          "1, 50, dan 100 karakter",
          "Hanya angka genap",
          "Hanya huruf kapital"
        ],
        ans: 0,
        why: "Boundary Value Analysis menguji titik tepi kritis: batas minimum (5) dan sekitarnya (4, 6), serta batas maksimum (10) dan sekitarnya (9, 11)."
      }
    },
    {
      id: 'qa-03',
      num: '03',
      title: 'White Box Testing: Statement, Branch & Path Coverage',
      level: 'Menengah',
      intro: 'Membuka jeroan mesin kode: menguji struktur logika internal, kondisi if-else, dan alur eksekusi percabangan.',
      body: `
        <h4>🔍 Mengintip ke Dalam Kaca Bening (White Box / Glass Box)</h4>
        <p>Berbeda dengan Black Box, <b>White Box Testing</b> mensyaratkan tester memiliki akses penuh ke kode sumber (source code) dan pemahaman logika pemrograman. Tujuannya adalah memastikan tidak ada baris kode mati (dead code) dan seluruh cabang logika telah teruji.</p>

        <h4>📐 Tiga Tingkatan Code Coverage</h4>
        <p>Mari kita amati fungsi kalkulasi diskon toko Supriyanto:</p>
        <div class="code-block"><span class="kw">function</span> <span class="fn">hitungDiskon</span>(total, isMember) {
  <span class="kw">let</span> diskon = 0;
  <span class="kw">if</span> (total &gt;= 1000000 &amp;&amp; isMember) {
    diskon = 0.20; <span class="cm">// Cabang A</span>
  } <span class="kw">else if</span> (total &gt;= 500000) {
    diskon = 0.10; <span class="cm">// Cabang B</span>
  } <span class="kw">else</span> {
    diskon = 0;    <span class="cm">// Cabang C</span>
  }
  <span class="kw">return</span> total * (1 - diskon);
}</div>

        <ul>
          <li><b>1. Statement Coverage:</b> Memastikan setiap baris kode dieksekusi minimal satu kali selama pengujian berlangsung.</li>
          <li><b>2. Branch / Decision Coverage:</b> Memastikan setiap cabang keputusan logika (True dan False dari setiap klausa <code>if</code>) telah dievaluasi.</li>
          <li><b>3. Path Coverage:</b> Tingkat uji paling teliti: menguji seluruh kemungkinan kombinasi lintasan eksekusi dari awal hingga akhir fungsi.</li>
        </ul>
      `,
      quiz: {
        q: "Apa metrik pengujian White Box yang mengukur apakah setiap baris kode dalam fungsi telah dieksekusi minimal satu kali saat tes berjalan?",
        opts: [
          "Statement Coverage",
          "Equivalence Partitioning",
          "Smoke Coverage",
          "Pixel Coverage"
        ],
        ans: 0,
        why: "Statement Coverage adalah metrik pengujian White Box yang mengukur persentase jumlah baris kode instruksi yang telah berhasil dilewati selama pengujian."
      }
    },
    {
      id: 'qa-04',
      num: '04',
      title: 'Gray Box Testing: Kombinasi Logika Bisnis & Struktur Backend',
      level: 'Menengah',
      intro: 'Menjembatani Black Box dan White Box: menguji antarmuka pengguna sembari memvalidasi database dan log server.',
      body: `
        <h4>🌓 Filosofi Gray Box Testing</h4>
        <p><b>Gray Box Testing</b> adalah metode pengujian di mana tester memiliki <i>pengetahuan parsial</i> terhadap struktur internal sistem. Tester tidak menulis ulang algoritma internal, namun memiliki akses ke:</p>
        <ul>
          <li>Dokumentasi skema database SQL dan relasi tabel.</li>
          <li>Dokumentasi kontrak API (Swagger / OpenAPI).</li>
          <li>File log server untuk menyelidiki error stack trace.</li>
        </ul>

        <h4>🛒 Contoh Kasus Nyata: Uji Checkout Keranjang Supriyanto</h4>
        <div class="code-block"><span class="cm">// Skenario Uji Gray Box</span>
1. Tester melakukan checkout produk "Laptop Super" seharga Rp 10.000.000 di halaman website (Tampilan Black Box).
2. Tester tidak hanya melihat tulisan 'Checkout Berhasil' di layar browser, melainkan langsung membuka database SQL:
   SELECT stok FROM produk WHERE id = 'LAPTOP-01';
3. Tester memverifikasi bahwa kolom stok berkurang tepat 1 unit di tabel fisik basis data.
4. Tester memeriksa log server untuk memastikan tidak ada warning kebocoran transaksi finansial.</div>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Kekuatan Gray Box:</b> Banyak bug fatal tidak terlihat di antarmuka web, namun terlihat jelas di log database (seperti duplikasi data ganda akibat double click tombol bayar). Gray Box menangkap bug jenis ini dengan presisi tinggi!</div>
        </div>
      `,
      quiz: {
        q: "Aktivitas pengujian manakah yang merupakan contoh nyata dari Gray Box Testing?",
        opts: [
          "Melakukan aksi di antarmuka web lalu langsung memverifikasi apakah perubahan data di database SQL sesuai",
          "Hanya menatap layar handphone tanpa menyentuh komputer sama sekali",
          "Membongkar casing fisik server dengan obeng",
          "Menebak password server secara acak tanpa melihat dokumentasi"
        ],
        ans: 0,
        why: "Gray Box Testing menggabungkan pengujian fungsional luar (Black Box) dengan pengetahuan struktur internal seperti schema basis data dan API (White Box)."
      }
    },
    {
      id: 'qa-05',
      num: '05',
      title: 'Piramida Testing: Unit, Integration, System & End-to-End Test',
      level: 'Menengah',
      intro: 'Strategi efisiensi pengujian: mengapa fondasi unit test harus paling kokoh dan pengujian E2E harus terukur.',
      body: `
        <h4>🏛️ Konsep Test Pyramid (Piramida Pengujian)</h4>
        <p>Diperkenalkan oleh Mike Cohn, Test Pyramid adalah panduan proporsi jumlah pengujian perangkat lunak:</p>
        <div class="code-block">        /\\
       /  \\       [ E2E / UI Tests ]     (Paling Sedikit: Lambat &amp; Mahal)
      /====\\
     /      \\     [ Integration Tests ]   (Sedang: Komunikasi Antar Modul)
    /========\\
   /          \\   [ Unit Tests ]          (Paling Banyak: Cepat &amp; Murah)
  /------------\\</div>

        <h4>1. Unit Testing (Tingkat Terendah)</h4>
        <p>Menguji fungsi, kelas, atau komponen terkecil secara terisolasi tanpa menyentuh database asli atau jaringan internet nyata (menggunakan <i>Mock</i> atau <i>Stub</i>). Sangat cepat (berjalan dalam hitungan milidetik):</p>
        <div class="code-block"><span class="cm">// Contoh Unit Test</span>
test(<span class="st">'menghitung pajak 11% secara presisi'</span>, () =&gt; {
  expect(hitungPajak(100000)).toBe(11000);
});</div>

        <h4>2. Integration Testing (Tingkat Menengah)</h4>
        <p>Menguji kerja sama antara dua modul atau lebih. Contoh: Memastikan Modul Pembayaran berhasil berkomunikasi dengan Modul Database dan Gateway Bank.</p>

        <h4>3. System Testing &amp; End-to-End (E2E)</h4>
        <p>Menguji alur utuh sistem dari kacamata pengguna nyata: Buka browser → Login → Pilih Barang → Bayar → Cek Email Konfirmasi. Sangat akurat menggambarkan realita, namun paling lambat dieksekusi dan rawan <i>flaky</i> (gagal akibat kendala jaringan sesaat).</p>
      `,
      quiz: {
        q: "Berdasarkan prinsip Piramida Testing, tipe pengujian manakah yang seharusnya memiliki porsi jumlah tes paling banyak dalam sebuah proyek?",
        opts: [
          "Unit Testing",
          "End-to-End (E2E) Testing",
          "Manual Exploratory Testing",
          "Stress Testing"
        ],
        ans: 0,
        why: "Unit Testing menempati dasar piramida karena paling cepat dieksekusi, murah biaya perawatannya, dan instan menunjukkan baris kode mana yang bermasalah."
      }
    },
    {
      id: 'qa-06',
      num: '06',
      title: 'Functional Testing: Smoke, Sanity, Regression & Re-testing',
      level: 'Menengah',
      intro: 'Mengetahui kapan harus uji kilat (Smoke), uji perbaikan (Sanity & Re-test), dan uji menyeluruh (Regression).',
      body: `
        <h4>🔥 Empat Saudara Pengujian Fungsional</h4>
        <p>Banyak tester pemula tertukar antara istilah Smoke, Sanity, Regression, dan Re-testing. Berikut perbedaannya yang sangat gamblang:</p>

        <h4>1. Smoke Test (Build Verification Test)</h4>
        <p>Uji kilat super cepat (5–10 menit) untuk memvalidasi apakah aplikasi versi baru (Build) yang dikirim programmer cukup stabil untuk diuji lebih lanjut. Jika fitur kritis mati (misal website blank putih atau tidak bisa login), tester berhak <b>menolak build tersebut</b> dan mengembalikannya ke developer!</p>

        <h4>2. Sanity Test</h4>
        <p>Uji verifikasi fokus pada modul tertentu setelah programmer melakukan perbaikan minor atau perubahan kecil untuk memastikan fungsionalitas di area tersebut berjalan logis.</p>

        <h4>3. Re-testing</h4>
        <p>Menguji kembali langkah yang <b>sama persis</b> pada bug yang dilaporkan sebelumnya, untuk memastikan bug tersebut telah benar-benar teratasi setelah developer menandai status 'Fixed'.</p>

        <h4>4. Regression Testing</h4>
        <p>Uji komprehensif pada fitur-fitur lama yang sudah ada sebelumnya. Tujuannya adalah memastikan bahwa kode baru atau perbaikan bug yang baru masuk <b>tidak secara tidak sengaja merusak fitur lama yang tadinya berjalan lancar</b>!</p>
      `,
      quiz: {
        q: "Pengujian apa yang dilakukan untuk memastikan bahwa perbaikan bug atau fitur baru tidak merusak fitur lama yang sudah stabil sebelumnya?",
        opts: [
          "Regression Testing",
          "Smoke Testing",
          "Load Testing",
          "Alpha Testing"
        ],
        ans: 0,
        why: "Regression Testing bertujuan memverifikasi bahwa perubahan kode terbaru tidak menimbulkan efek samping negatif atau merusak fungsionalitas sistem yang sudah ada sebelumnya."
      }
    },
    {
      id: 'qa-07',
      num: '07',
      title: 'Non-Functional Testing: Performance, Load, Stress & Security',
      level: 'Menengah',
      intro: 'Bukan sekadar bisa bekerja: menguji ketahanan beban ribuan pengunjung, kecepatan respon, dan celah keamanan.',
      body: `
        <h4>⚖️ Fungsional vs Non-Fungsional</h4>
        <ul>
          <li><b>Functional Testing:</b> Menguji <i>APA</i> yang dilakukan sistem (<i>"Apakah tombol login bisa masuk?"</i>).</li>
          <li><b>Non-Functional Testing:</b> Menguji <i>BAGAIMANA KUALITAS</i> sistem bekerja (<i>"Berapa detik waktu loading saat 10.000 pembeli menekan tombol login serentak saat promo tanggal kembar?"</i>).</li>
        </ul>

        <h4>🚀 Tipe Uji Non-Fungsional Utama</h4>
        <table class="zh-table">
          <thead><tr><th>Jenis Pengujian</th><th>Pertanyaan Kunci</th><th>Skenario Pengujian</th></tr></thead>
          <tbody>
            <tr><td><b>Load Testing</b></td><td>Sanggupkah sistem menangani beban kerja normal dan puncak yang diprediksi?</td><td>Simulasi 1.000 pengunjung aktif berbelanja serentak selama 2 jam.</td></tr>
            <tr><td><b>Stress Testing</b></td><td>Di titik beban berapa sistem akan tumbang (breakpoint) dan bagaimana pemulihannya?</td><td>Menaikkan trafik bertahap dari 1.000 → 10.000 → 50.000 pengguna hingga server crash.</td></tr>
            <tr><td><b>Usability Testing</b></td><td>Seberapa mudah dan intuitif antarmuka digunakan oleh orang awam?</td><td>Meminta pengguna baru menyelesaikan pesanan tanpa bantuan panduan.</td></tr>
            <tr><td><b>Security Testing</b></td><td>Apakah data pelanggan aman dari celah kebocoran dan hacker?</td><td>Uji kerentanan injeksi SQL, Cross-Site Scripting (XSS), dan kebocoran token otentikasi.</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Apa perbedaan utama antara Load Testing dan Stress Testing?",
        opts: [
          "Load Testing menguji beban trafik wajar/puncak yang diharapkan, sedangkan Stress Testing menguji sistem melampaui batas kapasitas normal hingga crash",
          "Load Testing hanya untuk database, sedangkan Stress Testing hanya untuk CSS",
          "Load Testing dilakukan manual, sedangkan Stress Testing harus menggunakan robot",
          "Tidak ada perbedaan sama sekali"
        ],
        ans: 0,
        why: "Load Testing mengukur kinerja aplikasi pada kapasitas beban yang diharapkan, sedangkan Stress Testing bertujuan mencari titik hancur (breaking point) sistem di luar kapasitas normal."
      }
    },
    {
      id: 'qa-08',
      num: '08',
      title: 'Anatomi Test Case & Test Scenario Standar Industri',
      level: 'Mahir',
      intro: 'Format dokumentasi profesional: merancang Test Scenario cakupan luas dan Test Case langkah demi langkah.',
      body: `
        <h4>🗺️ Test Scenario vs Test Case</h4>
        <ul>
          <li><b>Test Scenario (Apa yang ingin diuji):</b> Dokumen tingkat tinggi berisi satu cakupan pengujian (Contoh: <i>"Memeriksa fungsionalitas transfer saldo antar pengguna."</i>).</li>
          <li><b>Test Case (Bagaimana cara mengujinya):</b> Dokumen langkah detail berisi data input spesifik dan hasil yang diharapkan.</li>
        </ul>

        <h4>📋 Format Standar Test Case Profesional</h4>
        <div class="code-block"><b>Test Case ID:</b> TC-TRF-003
<b>Judul:</b> Transfer saldo berhasil dengan nominal valid dan saldo mencukupi
<b>Pre-condition:</b> Akun Supriyanto memiliki saldo Rp 500.000 dan berstatus aktif.
<b>Test Steps:</b>
  1. Buka menu 'Transfer Saldo'.
  2. Masukkan nomor rekening tujuan '987654321'.
  3. Masukkan nominal transfer '100.000'.
  4. Masukkan PIN transaksi yang benar '123456'.
  5. Klik tombol 'Kirim'.
<b>Test Data:</b> Rekening: 987654321, Nominal: 100000, PIN: 123456
<b>Expected Result:</b> Muncul pop-up 'Transfer Berhasil', saldo Supriyanto berkurang menjadi Rp 400.000.
<b>Actual Result:</b> Sesuai dengan Expected Result.
<b>Status:</b> PASS</div>
      `,
      quiz: {
        q: "Komponen Test Case manakah yang mendefinisikan syarat kondisi awal yang harus dipenuhi sebelum langkah uji dijalankan?",
        opts: [
          "Pre-condition",
          "Post-condition",
          "Actual Result",
          "Test Steps"
        ],
        ans: 0,
        why: "Pre-condition menyatakan prasyarat lingkungan atau status akun yang wajib terpenuhi (misal: user sudah login dan memiliki saldo) sebelum langkah pengujian dapat dieksekusi."
      }
    },
    {
      id: 'qa-09',
      num: '09',
      title: 'Siklus Hidup Bug & Format Bug Report Profesional',
      level: 'Mahir',
      intro: 'Menulis laporan cacat yang jelas dan dipuji developer: severity, priority, dan langkah reproduksi presisi.',
      body: `
        <h4>🐞 Siklus Hidup Cacat (Defect Life Cycle)</h4>
        <p>Begitu tester menemukan kejanggalan sistem, tiket bug bergerak melalui status terstandar:
        <br><code>NEW</code> (Baru dicatat) → <code>ASSIGNED</code> (Ditugaskan ke programmer) → <code>OPEN / IN PROGRESS</code> (Sedang diperbaiki) → <code>FIXED</code> (Developer menyatakan selesai) → <code>RE-TEST</code> (QA menguji ulang) → <code>VERIFIED / CLOSED</code> (Bug terbukti tuntas sembuh)!
        <br><i>*Jika saat re-test bug masih muncul, statusnya berubah menjadi <code>REOPENED</code>.</i></p>

        <h4>⚖️ Membedakan Severity vs Priority</h4>
        <ul>
          <li><b>Severity (Tingkat Kerusakan Teknis):</b> Seberapa parah bug melumpuhkan sistem (Critical, Major, Minor, Trivial).</li>
          <li><b>Priority (Tingkat Urgensi Bisnis):</b> Seberapa cepat bug harus segera diperbaiki oleh tim (High, Medium, Low).</li>
        </ul>
        <p><i>Contoh Unik:</i> Logo perusahaan salah ketik nama di halaman utama website. Severity-nya <b>Low</b> (karena tidak ada kode yang error/crash), namun Priority-nya <b>High</b> (karena mempermalukan brand perusahaan di mata publik)!</p>

        <h4>📝 Anatomi Bug Report yang Baik</h4>
        <div class="code-block"><b>Title:</b> [Checkout] Tombol 'Bayar' tidak merespon saat memilih metode pembayaran QRIS
<b>Severity:</b> Critical | <b>Priority:</b> High
<b>Environment:</b> Chrome 124, Windows 11, Staging v1.4.2
<b>Steps to Reproduce:</b>
  1. Login sebagai user 'supriyanto@example.com'.
  2. Tambahkan produk 'Buku QA' ke keranjang.
  3. Buka halaman checkout dan pilih opsi 'QRIS'.
  4. Klik tombol 'Bayar Sekarang'.
<b>Expected Result:</b> Kode QRIS muncul di layar untuk di-scan.
<b>Actual Result:</b> Halaman diam tidak merespon, console browser memunculkan error 'Uncaught TypeError: generateQR is not a function'.
<b>Attachment:</b> screenshot_error_qris.png</div>
      `,
      quiz: {
        q: "Manakah contoh situasi yang memiliki Severity Low (rendah) namun memiliki Priority High (tinggi)?",
        opts: [
          "Salah ketik nama merek perusahaan pada logo halaman beranda utama",
          "Server database meledak dan seluruh data pelanggan terhapus",
          "Tombol logout tidak bisa diklik di browser jadul yang sudah tidak didukung",
          "Warna footer sedikit lebih gelap dari desain Figma"
        ],
        ans: 0,
        why: "Typo nama brand perusahaan di beranda utama tidak merusak fungsi kode (Severity Low), tetapi berdampak sangat fatal bagi citra reputasi bisnis sehingga wajib diperbaiki segera (Priority High)."
      }
    },
    {
      id: 'qa-10',
      num: '10',
      title: 'API Testing: Endpoint, Status Code & Assertion Data',
      level: 'Mahir',
      intro: 'Menguji otak sistem tanpa perantara antarmuka web: validasi payload JSON, HTTP method, dan kode status.',
      body: `
        <h4>⚡ Mengapa QA Wajib Menguasai API Testing?</h4>
        <p>Pengujian antarmuka (UI) sering lambat dibuat dan rentan berubah desain. Dengan <b>API Testing</b> (menggunakan Postman, REST Assured, atau Playwright), QA dapat menguji logika bisnis backend secara mandiri bahkan sebelum tampilan UI selesai digambar oleh frontend developer!</p>

        <h4>🚦 Memahami Kode Status HTTP (HTTP Status Codes)</h4>
        <ul>
          <li><b>2xx (Success):</b>
            <br>• <code>200 OK</code>: Permintaan sukses mengembalikan data.
            <br>• <code>201 Created</code>: Data baru sukses disimpan (misal: user baru terdaftar).</li>
          <li><b>4xx (Client Error):</b>
            <br>• <code>400 Bad Request</code>: Parameter kiriman salah format.
            <br>• <code>401 Unauthorized</code>: Belum login atau token tidak sah.
            <br>• <code>403 Forbidden</code>: Sudah login tapi tidak memiliki hak akses (misal: staf membuka menu direktur).
            <br>• <code>404 Not Found</code>: Endpoint URL atau ID barang tidak ditemukan.</li>
          <li><b>5xx (Server Error):</b>
            <br>• <code>500 Internal Server Error</code>: Kode backend melempar exception crash.</li>
        </ul>

        <h4>🔬 Anatomi Assertion Respons API</h4>
        <div class="code-block"><span class="cm">// Request POST /api/pesanan</span>
{ <span class="st">"idProduk"</span>: 101, <span class="st">"jumlah"</span>: 2 }

<span class="cm">// Tiga Assertion Wajib QA:</span>
1. Status code adalah 201 Created.
2. Response time di bawah 500ms.
3. Struktur body JSON memiliki properti 'idPesanan' bertipe number dan 'status' bernilai 'PENDING'.</div>
      `,
      quiz: {
        q: "Status code HTTP manakah yang mengindikasikan bahwa request ditolak karena pengguna belum melampirkan token autentikasi login yang valid?",
        opts: [
          "401 Unauthorized",
          "200 OK",
          "404 Not Found",
          "500 Internal Server Error"
        ],
        ans: 0,
        why: "Kode HTTP 401 Unauthorized menandakan permintaan membutuhkan kredensial otentikasi login pengguna yang valid."
      }
    },
    {
      id: 'qa-11',
      num: '11',
      title: 'Manual Testing vs Automated Testing: Kapan Harus Otomasi?',
      level: 'Expert',
      intro: 'Menghitung ROI otomasi pengujian: menghindari jebakan mengotomasi segalanya dan memaksimalkan efisiensi.',
      body: `
        <h4>🤖 Mitos: 'Otomasi Akan Menggantikan Manual Testing 100%'</h4>
        <p>Otomasi bukanlah pengganti tester manusia, melainkan alat bantu (alat pembantu efisiensi). Tes otomatis hanya memeriksa skenario kaku yang diprogramkan, sedangkan mata dan intuisi manusia mampu menemukan kejanggalan visual, rasa canggung navigasi (UX), dan bug tak terduga.</p>

        <h4>📊 Matriks Keputusan: Kapan Manual vs Otomasi?</h4>
        <table class="zh-table">
          <thead><tr><th>Pilihlah Manual Testing Ketika...</th><th>Pilihlah Automated Testing Ketika...</th></tr></thead>
          <tbody>
            <tr><td>Fitur masih baru dan desain antarmuka sering berubah setiap minggu.</td><td>Fitur inti sudah stabil dan wajib diuji berulang kali setiap rilis (Regression Suite).</td></tr>
            <tr><td><b>Exploratory Testing:</b> Penjelajahan bebas mencari celah skenario liar.</td><td>Pengujian beban performa (Load Testing dengan ribuan virtual user).</td></tr>
            <tr><td>Penilaian estetika visual, tata letak, dan kenyamanan pengguna (Usability).</td><td><b>Data-Driven Testing:</b> Menjalankan skenario yang sama dengan 1.000 kombinasi data berbeda.</td></tr>
            <tr><td>Uji coba sekali pakai yang tidak akan pernah diulang lagi.</td><td>Smoke test otomatis di pipeline CI/CD sebelum deployment.</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Kapan skenario pengujian paling tepat dan menguntungkan (tinggi ROI) untuk diubah menjadi tes otomatis (Automated Testing)?",
        opts: [
          "Fitur inti yang sudah stabil dan harus diuji berulang kali pada setiap rilis rilis berikutnya (Regression)",
          "Fitur eksperimen yang hanya digunakan satu kali lalu dihapus",
          "Halaman yang desain tata letaknya berubah setiap jam",
          "Menilai apakah kombinasi warna website sedap dipandang mata"
        ],
        ans: 0,
        why: "Automated Testing memberikan imbal hasil (ROI) terbaik pada skenario pengujian berulang (regression testing) dan smoke testing yang stabil."
      }
    },
    {
      id: 'qa-12',
      num: '12',
      title: 'Metodologi QA Modern: Agile, Shift-Left, TDD & BDD Gherkin',
      level: 'Expert',
      intro: 'Standar rekayasa perangkat lunak modern: menggeser pengujian ke kiri dan kolaborasi bahasa manusia dengan BDD.',
      body: `
        <h4>⬅️ Konsep Shift-Left Testing</h4>
        <p>Di masa lalu (Waterfall), QA baru dilibatkan di akhir proyek setelah seluruh kodingan selesai. Pendekatan ini sering memicu keterlambatan rilis massal. <b>Shift-Left</b> memindahkan keterlibatan QA ke tahap paling awal: saat dokumen kebutuhan bisnis masih dirancang, QA sudah mengkritisi celah ambiguitas logika sebelum developer menulis sebaris kode pun!</p>

        <h4>🥒 BDD (Behavior-Driven Development) &amp; Sintaks Gherkin</h4>
        <p>BDD menyatukan bahasa antara Product Owner (Bisnis), Developer (Koding), dan QA (Pengujian) menggunakan bahasa manusia terstruktur format <b>Given-When-Then</b>:</p>
        <div class="code-block"><b>Feature:</b> Pembelian Voucher Diskon Toko Supriyanto

  <b>Scenario:</b> Pengguna baru berhasil klaim voucher diskon selamat datang
    <b>Given</b> Pengguna telah login sebagai pengguna baru terdaftar
    <b>And</b> Pengguna belum pernah melakukan transaksi belanja sebelumnya
    <b>When</b> Pengguna memasukkan kode voucher 'SUPRIYANTO-BARU' di keranjang
    <b>Then</b> Total tagihan belanja berkurang sebesar Rp 50.000
    <b>And</b> Pesan sukses 'Voucher Selamat Datang Berhasil Digunakan' muncul</div>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh perjalanan menguasai Software Quality Assurance dari dasar Black Box/White Box hingga metodologi Agile testing modern. Uji wawasan Anda di <b>Quiz QA</b>!</div>
        </div>
      `,
      quiz: {
        q: "Sintaks kata kunci apakah yang digunakan dalam metodologi BDD (Behavior-Driven Development) format Gherkin untuk mendeskripsikan kondisi awal sebelum aksi dilakukan?",
        opts: [
          "Given",
          "When",
          "Then",
          "Else"
        ],
        ans: 0,
        why: "Dalam format Gherkin BDD, kata kunci 'Given' menyatakan prasyarat atau kondisi awal yang ada sebelum aksi (When) dieksekusi."
      }
    }
  ]
};
