export const gitTrack = {
  id: 'git',
  title: 'Git & GitHub 🐙',
  subtitle: 'Version Control: Commit, Percabangan, Pull Request & Kolaborasi Tim Modern',
  accent: 'orange',
  category: 'it',
  lessons: [
    {
      id: 'git-01',
      num: '01',
      title: 'Memahami Version Control: Snapshot vs Delta',
      level: 'Pemula',
      intro: 'Mengapa developer butuh Git dan bagaimana cara kerja snapshot di balik mesin waktu kode.',
      body: `
        <h4>🎮 Analogi Save Game Petualangan Supriyanto</h4>
        <p>Sebelum mengenal Git, Supriyanto sering menyimpan file proyek kodingannya dengan nama manual seperti:
        <br><code>proyek_final.js</code> → <code>proyek_final_beneran.js</code> → <code>proyek_final_beneran_FIX_FINAL_banget.js</code>.</p>
        <p>Pendekatan manual ini sangat kacau dan berbahaya. <b>Git adalah mesin waktu (Version Control System / VCS)</b> yang bekerja seperti fitur <i>Save Game</i> di game petualangan:
        <ul>
          <li>Setiap kali Anda mencapai checkpoint penting, Anda membuat satu rekaman keadaan (<b>Snapshot / Commit</b>).</li>
          <li>Jika ada kode yang rusak atau bug fatal di masa depan, Supriyanto bisa dengan aman melompat kembali ke titik rekaman sebelumnya dalam hitungan detik tanpa takut kehilangan riwayat pekerjaan.</li>
        </ul>
        </p>

        <h4>📸 Snapshot, Bukan Sekadar Delta Tambal Sulam</h4>
        <p>Berbeda dengan sistem kontrol versi kuno yang hanya mencatat selisih baris (delta), Git memandang datanya sebagai <b>serangkaian snapshot foto utuh</b> dari seluruh file pada saat itu. Jika suatu file tidak mengalami perubahan, Git tidak menduplikasinya, melainkan hanya membuat tautan cerdas ke file identik sebelumnya sehingga prosesnya instan dan hemat memori penyimpanan.</p>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Penting Dipahami:</b> Git berjalan 100% lokal di komputer Anda tanpa memerlukan koneksi internet sama sekali. Anda baru membutuhkan internet saat ingin menyinkronkan rekaman lokal tersebut ke platform cloud seperti GitHub atau GitLab.</div>
        </div>
      `,
      quiz: {
        q: "Bagaimana cara kerja Git dalam mencatat riwayat perubahan proyek?",
        opts: [
          "Merekam snapshot kondisi seluruh file proyek pada setiap commit checkpoint",
          "Mengirim file zip manual via email setiap jam",
          "Menghapus kode lama dan hanya menyisakan kode terbaru",
          "Mengunci file agar tidak bisa diedit oleh programmer lain"
        ],
        ans: 0,
        why: "Git mencatat riwayat proyek sebagai serangkaian snapshot utuh (commit). Jika ada file yang tidak berubah, Git hanya membuat referensi ke file sebelumnya."
      }
    },
    {
      id: 'git-02',
      num: '02',
      title: 'Inisialisasi Repositori: git init, status & .gitignore',
      level: 'Pemula',
      intro: 'Mengaktifkan radar pelacak Git pada folder proyek dan mengabaikan file sampah otomatis.',
      body: `
        <h4>📁 Menghidupkan Radar Git: git init</h4>
        <p>Untuk memberitahu Git agar mulai mengawasi sebuah folder proyek, jalankan perintah:</p>
        <div class="code-block"><span class="cm"># Masuk ke folder proyek</span>
cd proyek-supriyanto

<span class="cm"># Inisialisasi repositori Git baru</span>
git init</div>
        <p>Perintah ini akan membuat folder tersembunyi bernama <code>.git</code>. Di dalam folder rahasia inilah seluruh database riwayat, commit, dan konfigurasi proyek Anda disimpan oleh Git.</p>

        <h4>🕵️ Memeriksa Status Radar: git status</h4>
        <p>Perintah paling sering diketik oleh developer di seluruh dunia adalah <code>git status</code>. Perintah ini memberi tahu Anda:
        <ul>
          <li>File mana yang baru dibuat tapi belum dilacak (<i>Untracked</i>).</li>
          <li>File mana yang sudah dimodifikasi (<i>Modified</i>).</li>
          <li>File mana yang sudah siap disimpan ke checkpoint (<i>Staged</i>).</li>
        </ul>
        </p>

        <h4>🚫 Menjinakkan File Sampah dengan .gitignore</h4>
        <p>Tidak semua file boleh masuk ke riwayat Git. File konfigurasi rahasia (seperti <code>.env</code> berisi password database), folder dependensi raksasa (<code>node_modules/</code>), atau file temporary OS (<code>.DS_Store</code>) wajib diabaikan agar repositori tetap bersih dan aman:</p>
        <div class="code-block"><span class="cm"># Contoh isi file .gitignore di root proyek</span>
node_modules/
.env
dist/
*.log
.DS_Store</div>
      `,
      quiz: {
        q: "File apakah yang digunakan untuk memberitahu Git agar mengabaikan file sensitif seperti password .env atau folder node_modules?",
        opts: [
          ".gitignore",
          ".gitkeep",
          "package.json",
          ".gitconfig"
        ],
        ans: 0,
        why: "File .gitignore berisi pola daftar nama file atau direktori yang tidak boleh dilacak maupun dicatat oleh Git ke dalam repositori."
      }
    },
    {
      id: 'git-03',
      num: '03',
      title: 'Tiga Area Git: Working Tree, Staging Area & Repository',
      level: 'Pemula',
      intro: 'Alur kerja sakral Git: mengedit di Working Tree, menata di Staging Area, dan menyimpan permanen di Commit.',
      body: `
        <h4>📦 Analogi Meja Kerja, Kardus Paket & Brankas Arsip</h4>
        <p>Banyak pemula bingung mengapa harus ada perintah <code>git add</code> sebelum <code>git commit</code>. Bayangkan alur pengiriman paket belanja toko Supriyanto:
        <ol>
          <li><b>Working Tree (Meja Kerja):</b> Tempat Anda mengetik dan mengedit kode. File di sini masih dalam keadaan mentah.</li>
          <li><b>Staging Area (Kardus Paket / Keranjang):</b> Tempat Anda memilih barang apa saja yang ingin dikirim bersamaan. Perintah <code>git add</code> memasukkan file yang Anda pilih ke dalam kardus ini.</li>
          <li><b>Repository (Brankas Arsip / Commit):</b> Kardus disegel rapat, diberi label pesan yang jelas (misal: 'fitur login selesai'), dan disimpan permanen ke dalam catatan sejarah proyek dengan <code>git commit</code>.</li>
        </ol>
        </p>

        <h4>⌨️ Contoh Perintah Praktis</h4>
        <div class="code-block"><span class="cm"># 1. Masukkan file index.html ke staging area</span>
git add index.html

<span class="cm"># Atau masukkan semua file yang diubah sekaligus</span>
git add .

<span class="cm"># 2. Simpan permanen ke riwayat dengan pesan commit deskriptif</span>
git commit -m "Menambahkan formulir login dan validasi email Supriyanto"</div>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Pesan Commit yang Baik:</b> Gunakan kalimat aktif dan jelas. Hindari pesan asal-asalan seperti <i>"update"</i>, <i>"fix bug"</i>, atau <i>"asdfg"</i>. Tuliskan apa yang diubah agar rekan tim dan Anda di masa depan mengerti maksud perubahan tersebut!</div>
        </div>
      `,
      quiz: {
        q: "Perintah apa yang digunakan untuk memindahkan file dari Working Tree ke Staging Area sebelum di-commit?",
        opts: [
          "git add <nama_file>",
          "git push <nama_file>",
          "git commit <nama_file>",
          "git checkout <nama_file>"
        ],
        ans: 0,
        why: "git add menyiapkan file yang sudah diedit ke Staging Area (area persiapan) sebelum nantinya dibungkus menjadi commit permanen."
      }
    },
    {
      id: 'git-04',
      num: '04',
      title: 'Menjelajah Riwayat: git log, git diff & git checkout',
      level: 'Pemula',
      intro: 'Membaca buku catatan masa lalu, melihat selisih kode baris per baris, dan mengintip checkpoint sebelumnya.',
      body: `
        <h4>📜 Membaca Buku Harian Proyek: git log</h4>
        <p>Untuk melihat daftar seluruh checkpoint yang pernah dibuat, gunakan perintah:</p>
        <div class="code-block"><span class="cm"># Melihat riwayat commit lengkap</span>
git log

<span class="cm"># Melihat ringkasan satu baris per commit (sangat rapi)</span>
git log --oneline --graph --all</div>
        <p>Setiap commit memiliki nomor identitas unik 40 karakter heksadesimal yang disebut <b>Commit Hash (SHA-1)</b>, misalnya <code>7a3b8c2...</code>.</p>

        <h4>🔍 Mengintip Selisih Perubahan: git diff</h4>
        <p>Sebelum memasukkan file ke kardus staging, Anda sering ingin tahu: <i>"Apa saja persisnya baris yang saya ubah tadi?"</i></p>
        <div class="code-block"><span class="cm"># Melihat perbedaan antara kode di meja kerja dengan commit terakhir</span>
git diff

<span class="cm"># Melihat perbedaan file yang sudah di-staging (git add)</span>
git diff --staged</div>
        <p>Git akan menampilkan baris merah bertanda minus (<code>-</code>) untuk kode yang dihapus, dan baris hijau bertanda plus (<code>+</code>) untuk kode yang baru ditambahkan.</p>
      `,
      quiz: {
        q: "Perintah apa yang menampilkan riwayat daftar commit secara ringkas dan satu baris per commit?",
        opts: [
          "git log --oneline",
          "git status --short",
          "git diff --summary",
          "git show --all"
        ],
        ans: 0,
        why: "Opsi --oneline pada perintah git log menyajikan hash pendek beserta pesan commit dalam satu baris bersih, memudahkan pembacaan riwayat."
      }
    },
    {
      id: 'git-05',
      num: '05',
      title: 'Percabangan Efektif: git branch & git switch',
      level: 'Menengah',
      intro: 'Mengisolasi fitur baru di semesta paralel tanpa mengganggu kode produksi yang sedang berjalan.',
      body: `
        <h4>🌿 Analogi Dunia Paralel (Multiverse) Koding</h4>
        <p>Bayangkan Supriyanto sedang memiliki website toko online yang sudah aktif digunakan pembeli di cabang utama (<b>main / master</b>). Supriyanto ingin mencoba fitur baru pembayaran QRIS, namun belum yakin apakah kodenya berhasil atau masih banyak bug.</p>
        <p>Daripada langsung mengutak-atik kode produksi di cabang utama, Supriyanto membuat <b>Branch (Cabang) baru</b>. Branch adalah semesta paralel yang memungkinkan Anda bereksperimen bebas. Jika fiturnya sukses, branch tersebut digabungkan ke cabang utama. Jika gagal total, cukup hapus branch tersebut tanpa merusak cabang utama sama sekali!</p>

        <h4>⌨️ Perintah Mengelola Branch</h4>
        <div class="code-block"><span class="cm"># Melihat daftar branch yang ada</span>
git branch

<span class="cm"># Membuat branch baru dan langsung berpindah ke sana (Modern Git)</span>
git switch -c fitur-qris

<span class="cm"># Berpindah kembali ke cabang utama</span>
git switch main</div>
      `,
      quiz: {
        q: "Apa keuntungan utama menggunakan fitur Branch (percabangan) di Git?",
        opts: [
          "Mengisolasi pengembangan fitur baru agar tidak merusak kode utama yang stabil",
          "Membuat ukuran file proyek menjadi dua kali lipat lebih kecil",
          "Menghapus otomatis seluruh file JavaScript yang tidak terpakai",
          "Mencegah developer lain melihat isi komputer kita"
        ],
        ans: 0,
        why: "Branch memungkinkan eksperimen dan pengerjaan fitur berjalan terpisah secara aman tanpa mengganggu kode utama yang sedang berjalan stabil."
      }
    },
    {
      id: 'git-06',
      num: '06',
      title: 'Menggabungkan Cabang: Fast-Forward vs 3-Way Merge',
      level: 'Menengah',
      intro: 'Menyatukan hasil kerja dari cabang eksperimen kembali ke cabang utama proyek.',
      body: `
        <h4>🔀 Dua Tipe Penggabungan (git merge)</h4>
        <p>Setelah fitur pembayaran QRIS diuji dan berjalan sempurna, Supriyanto ingin menyatukannya ke cabang <code>main</code>. Git memiliki 2 metode penggabungan otomatis:</p>
        <ul>
          <li><b>1. Fast-Forward Merge:</b> Terjadi jika cabang <code>main</code> tidak memiliki commit baru sama sekali sejak branch fitur dibuat. Git cukup memajukan pointer <code>main</code> lurus ke depan mengikuti commit terakhir branch fitur. Bersih dan tanpa commit tambahan!</li>
          <li><b>2. 3-Way Merge:</b> Terjadi jika cabang <code>main</code> dan branch fitur sama-sama memiliki commit baru yang berbeda arah. Git akan membuat satu commit penggabungan khusus (<b>Merge Commit</b>) yang memiliki dua induk commit.</li>
        </ul>

        <h4>⌨️ Langkah Melakukan Merge</h4>
        <div class="code-block"><span class="cm"># 1. Pindah dulu ke cabang tujuan (misal main)</span>
git switch main

<span class="cm"># 2. Gabungkan cabang fitur ke main</span>
git merge fitur-qris

<span class="cm"># 3. Hapus cabang fitur jika sudah tidak diperlukan lagi</span>
git branch -d fitur-qris</div>
      `,
      quiz: {
        q: "Kapan situasi Fast-Forward merge dapat terjadi di Git?",
        opts: [
          "Ketika cabang tujuan (main) belum memiliki commit baru sejak cabang fitur dibuat",
          "Ketika terjadi tabrakan kode pada baris yang sama",
          "Ketika koneksi internet sedang berkecepatan tinggi",
          "Ketika ukuran file repositori di bawah 1 Megabyte"
        ],
        ans: 0,
        why: "Fast-forward merge terjadi ketika garis riwayat linier tanpa percabangan ganda, sehingga Git cukup memajukan penunjuk cabang ke depan."
      }
    },
    {
      id: 'git-07',
      num: '07',
      title: 'Menghadapi Merge Conflict dengan Tenang',
      level: 'Menengah',
      intro: 'Jangan panik ketika ada tabrakan kode di baris yang sama: cara membaca marker dan menyelesaikannya.',
      body: `
        <h4>💥 Apa Penyebab Terjadinya Merge Conflict?</h4>
        <p><b>Merge Conflict</b> terjadi ketika dua orang programmer (atau Anda di dua branch berbeda) <b>mengubah baris kode yang sama persis di file yang sama dengan isi berbeda</b>. Git tidak bisa menebak pikiran manusia: apakah kode programmer A yang benar, atau kode programmer B yang benar? Oleh karena itu, Git berhenti dan meminta bantuan Anda untuk memilih.</p>

        <h4>🔎 Mengenal Marker Konflik Git</h4>
        <p>Ketika konflik terjadi, Git akan menandai file tersebut dengan simbol khusus:</p>
        <div class="code-block">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
<span class="cm">// Kode versi cabang Anda saat ini</span>
const diskon = 0.15;
=======
<span class="cm">// Kode versi cabang yang ingin Anda gabungkan</span>
const diskon = 0.20;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; fitur-promo</div>

        <h4>🛠️ Tiga Langkah Mengatasi Konflik:</h4>
        <ol>
          <li>Buka file yang berkonflik di editor teks (VS Code).</li>
          <li>Tentukan kode mana yang ingin dipertahankan, lalu <b>hapus simbol marker</b> (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>).</li>
          <li>Jalankan <code>git add .</code> dan selesaikan dengan <code>git commit -m "Menyelesaikan merge conflict diskon"</code>.</li>
        </ol>
      `,
      quiz: {
        q: "Apa yang harus dilakukan developer saat terjadi Merge Conflict pada file kode?",
        opts: [
          "Memilih kode yang benar, menghapus simbol marker konflik, lalu melakukan git add dan commit",
          "Mematikan komputer dan menghapus seluruh folder proyek",
          "Memaksa push dengan git push --force tanpa memeriksa kodenya",
          "Mengganti ekstensi file menjadi file .txt"
        ],
        ans: 0,
        why: "Menyelesaikan konflik dilakukan dengan mengedit file, memilih kode yang diinginkan, membersihkan marker Git, kemudian melakukan add dan commit penyelesaian."
      }
    },
    {
      id: 'git-08',
      num: '08',
      title: 'Remote Repository: GitHub, git remote & git push',
      level: 'Menengah',
      intro: 'Mencadangkan repositori lokal ke cloud GitHub dan menyinkronkan checkpoint antar perangkat.',
      body: `
        <h4>☁️ Menghubungkan Lokal ke Awan (GitHub)</h4>
        <p>Setelah repositori lokal tersimpan rapi, saatnya mencadangkan dan membagikan proyek Anda ke platform cloud seperti <b>GitHub</b>:</p>
        <div class="code-block"><span class="cm"># 1. Tambahkan alamat remote repository GitHub</span>
git remote add origin https://github.com/supriyanto/toko-online.git

<span class="cm"># 2. Verifikasi alamat remote yang terhubung</span>
git remote -v

<span class="cm"># 3. Unggah seluruh riwayat cabang main ke GitHub untuk pertama kali</span>
git push -u origin main</div>
        <p>Parameter <code>-u</code> (upstream) memberitahu Git agar di masa mendatang Supriyanto cukup mengetik <code>git push</code> saja untuk memperbarui cabang <code>main</code> di cloud.</p>
      `,
      quiz: {
        q: "Perintah apa yang digunakan untuk mengunggah commit dari repositori lokal ke server remote GitHub?",
        opts: [
          "git push",
          "git pull",
          "git clone",
          "git fetch"
        ],
        ans: 0,
        why: "git push mentransfer dan menyinkronkan seluruh commit checkpoint dari repositori lokal ke repositori remote di server GitHub."
      }
    },
    {
      id: 'git-09',
      num: '09',
      title: 'Kolaborasi Tim: git fetch, git pull & Pull Request (PR)',
      level: 'Mahir',
      intro: 'Menjemput pembaruan kode dari rekan tim dan etika review kode melalui Pull Request di GitHub.',
      body: `
        <h4>🔄 Perbedaan git fetch vs git pull</h4>
        <p>Ketika rekan tim Anda mengunggah kode baru ke GitHub, Anda perlu memperbarui repositori lokal Anda:
        <ul>
          <li><b>git fetch:</b> Mengunduh riwayat terbaru dari GitHub ke komputer Anda, tetapi <i>belum</i> menggabungkannya ke file yang sedang Anda kerjakan. Aman untuk memeriksa apa saja yang baru.</li>
          <li><b>git pull:</b> Melakukan <code>git fetch</code> sekaligus langsung menggabungkan (<code>git merge</code>) perubahan tersebut ke branch Anda saat ini.</li>
        </ul>
        </p>

        <h4>🤝 Seni Pull Request (PR)</h4>
        <p>Di perusahaan teknologi profesional, developer dilarang keras langsung melakukan push ke branch <code>main</code>. Alur yang benar adalah:
        <ol>
          <li>Developer membuat branch fitur: <code>git switch -c fitur-keranjang</code>.</li>
          <li>Selesaikan kodingan dan push branch tersebut ke GitHub: <code>git push origin fitur-keranjang</code>.</li>
          <li>Buka <b>Pull Request (PR)</b> di halaman GitHub. Rekan tim dan Senior Engineer akan membaca baris kode Anda (<i>Code Review</i>), memberikan saran perbaikan, dan jika sudah lolos uji baru di-merge ke <code>main</code>!</li>
        </ol>
        </p>
      `,
      quiz: {
        q: "Apa tujuan utama dibukanya Pull Request (PR) di platform GitHub dalam tim software engineering?",
        opts: [
          "Memfasilitasi peninjauan kode (code review) oleh rekan tim sebelum kode digabung ke cabang utama",
          "Membayar biaya langganan server GitHub",
          "Mengompresi file gambar agar loading website lebih cepat",
          "Mengunduh repositori ke flashdisk eksternal"
        ],
        ans: 0,
        why: "Pull Request adalah sarana diskusi dan code review profesional untuk memastikan kualitas kode, keamanan, dan fungsionalitas sebelum digabungkan ke cabang utama."
      }
    },
    {
      id: 'git-10',
      num: '10',
      title: 'Menyimpan Pekerjaan Sementara: git stash & pop',
      level: 'Mahir',
      intro: 'Menyelamatkan kodingan setengah matang ke laci rahasia saat harus segera beralih memperbaiki bug darurat.',
      body: `
        <h4>🗄️ Analogi Laci Rahasia Darurat</h4>
        <p>Bayangkan Supriyanto sedang asyik merombak halaman checkout toko online. Kodenya baru separuh jalan dan masih error jika di-commit. Tiba-tiba Manajer menghubungi: <i>'Supriyanto, ada bug fatal di halaman login, tolong perbaiki sekarang juga!'</i></p>
        <p>Supriyanto tidak bisa pindah branch jika pekerjaannya masih berantakan. Solusinya adalah <b>git stash</b> (laci darurat):</p>
        <div class="code-block"><span class="cm"># 1. Simpan seluruh editan setengah jalan ke laci rahasia</span>
git stash

<span class="cm"># 2. Sekarang meja kerja bersih, pindah dan perbaiki bug darurat di main</span>
git switch main
<span class="cm"># ... selesaikan bug, add, commit, dan push ...</span>

<span class="cm"># 3. Kembali ke branch checkout dan ambil kembali kerjaan dari laci</span>
git switch fitur-checkout
git stash pop</div>
        <p>Perintah <code>git stash pop</code> mengeluarkan kembali seluruh kodingan yang tadi disimpan dan membersihkan laci rahasia tersebut.</p>
      `,
      quiz: {
        q: "Perintah apa yang digunakan untuk mengembalikan pekerjaan yang sebelumnya disimpan via git stash kembali ke meja kerja?",
        opts: [
          "git stash pop",
          "git stash drop",
          "git stash clear",
          "git stash hide"
        ],
        ans: 0,
        why: "git stash pop mengambil perubahan yang tersimpan paling atas di tumpukan stash, menerapkannya ke working tree, lalu menghapusnya dari daftar stash."
      }
    },
    {
      id: 'git-11',
      num: '11',
      title: 'Perjalanan Waktu: git revert, reset & git commit --amend',
      level: 'Mahir',
      intro: 'Memperbaiki kesalahan masa lalu: membatalkan commit dengan aman di repositori publik vs lokal.',
      body: `
        <h4>⏪ Tiga Jurus Pembatalan di Git</h4>
        <p>Semua programmer pasti pernah berbuat salah. Git menyediakan tiga cara berbeda untuk memperbaikinya:</p>
        <ul>
          <li><b>1. git commit --amend:</b> Mengubah pesan commit terakhir atau menambahkan file yang kelupaan ke commit terakhir tanpa membuat commit baru.</li>
          <li><b>2. git revert &lt;hash&gt;:</b> Cara paling aman di repositori tim/publik. Perintah ini membuat commit baru yang isinya adalah <i>kebalikan persis</i> dari commit yang salah, sehingga riwayat sejarah tetap utuh dan transparan.</li>
          <li><b>3. git reset:</b> Menghapus commit dari riwayat. Ada dua mode:
            <br>• <code>--soft</code>: Menghapus commit tapi membiarkan kodingan tetap ada di Staging Area.
            <br>• <code>--hard</code>: <b>Berbahaya!</b> Menghapus commit sekaligus menghapus seluruh perubahan kode di file komputer Anda secara permanen.</li>
        </ul>
        <div class="tip-box">
          <span class="tip-box-icon">⚠️</span>
          <div><b>Aturan Emas:</b> Jangan pernah menggunakan <code>git reset --hard</code> pada commit yang sudah di-push ke GitHub cabang bersama, karena akan merusak sinkronisasi riwayat seluruh rekan tim Anda! Gunakanlah <code>git revert</code>.</div>
        </div>
      `,
      quiz: {
        q: "Manakah perintah yang paling aman digunakan untuk membatalkan commit yang sudah terlanjur di-push ke server GitHub bersama tim?",
        opts: [
          "git revert <commit_hash>",
          "git reset --hard HEAD~1",
          "git clean -f -d",
          "git branch -D main"
        ],
        ans: 0,
        why: "git revert membuat commit baru yang membatalkan perubahan sebelumnya tanpa merusak atau menulis ulang riwayat commit rekan tim lain di server bersama."
      }
    },
    {
      id: 'git-12',
      num: '12',
      title: 'Rebase vs Merge & Best Practice Alur Kerja Git Flow',
      level: 'Expert',
      intro: 'Menjaga riwayat pohon commit tetap lurus, bersih, dan mengadopsi standar alur kerja industri perangkat lunak.',
      body: `
        <h4>📈 Git Rebase: Merapikan Pohon Sejarah</h4>
        <p>Berbeda dengan <code>git merge</code> yang menghasilkan cabang bercabang-cabang dan merge commit tambahan, <b>git rebase</b> mencabut commit Anda dari titik cabang lama dan menanamkannya kembali di puncak commit terbaru cabang utama. Hasilnya adalah <b>garis riwayat yang lurus sempurna (linear history)</b> layaknya jalan tol tanpa persimpangan semrawut.</p>
        <div class="code-block"><span class="cm"># Saat berada di branch fitur-baru, rebase ke main terbaru</span>
git switch fitur-baru
git rebase main</div>

        <h4>🚀 Standar Git Flow Industri</h4>
        <p>Dalam proyek enterprise modern, tim software engineer menerapkan konvensi cabang terstruktur:
        <ul>
          <li><b>main (production):</b> Kode stabil yang sedang live diakses pengguna.</li>
          <li><b>develop (staging):</b> Tempat penggabungan fitur-fitur yang siap diuji sebelum rilis.</li>
          <li><b>feature/* :</b> Cabang fitur spesifik (misal: <code>feature/login-google</code>).</li>
          <li><b>hotfix/* :</b> Cabang darurat langsung dari main untuk menambal bug krusial di produksi.</li>
        </ul>
        </p>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menguasai seluruh siklus version control Git dan GitHub dari fondasi snapshot lokal hingga orkestrasi cabang tim profesional. Uji wawasan Anda di <b>Quiz Git</b>!</div>
        </div>
      `,
      quiz: {
        q: "Apa perbedaan visual utama antara hasil git rebase dibandingkan git merge?",
        opts: [
          "git rebase menghasilkan riwayat commit linier lurus tanpa merge commit tambahan",
          "git rebase menghapus seluruh file gambar dalam repositori",
          "git merge hanya bisa dijalankan satu kali seumur hidup repositori",
          "git rebase membutuhkan biaya langganan bulanan di GitHub"
        ],
        ans: 0,
        why: "git rebase memindahkan basis commit cabang ke ujung cabang target, menghasilkan riwayat perubahan linier bersih tanpa percabangan ganda atau merge commit."
      }
    }
  ]
};
