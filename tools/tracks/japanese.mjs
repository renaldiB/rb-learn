export const japaneseTrack = {
  id: 'japanese',
  title: 'Bahasa Jepang 🇯🇵',
  subtitle: 'Hiragana, Katakana, Kanji Dasar, Partikel Inti & Percakapan Praktis Sehari-hari',
  accent: 'rose',
  category: 'lang',
  lessons: [
    {
      id: 'ja-01',
      num: '01',
      title: 'Hiragana Bagian 1: Vokal A-I-U-E-O hingga Baris Na',
      level: 'Pemula 0',
      intro: 'Mengenal huruf fonetik berlekuk luwes pertama bahasa Jepang: fondasi membaca kata asli Jepang.',
      body: `
        <h4>🌸 Tiga Sistem Huruf Bahasa Jepang</h4>
        <p>Bahasa Jepang memiliki 3 jenis tulisan yang digunakan berdampingan secara harmonis:
        <ol>
          <li><b>Hiragana (ひらがな):</b> 46 huruf berlekuk halus untuk kosakata asli Jepang dan partikel tata bahasa.</li>
          <li><b>Katakana (カタカナ):</b> 46 huruf bersudut kaku tegas untuk kata serapan asing dan nama luar negeri.</li>
          <li><b>Kanji (漢字):</b> Karakter gambar makna yang diadopsi dari Tiongkok.</li>
        </ol>
        Kita mulai dari <b>Hiragana</b>!</p>

        <h4>🎵 Vokal Dasar (A - I - U - E - O) &amp; Baris Ka, Sa, Ta, Na</h4>
        <table class="zh-table">
          <thead><tr><th>Baris</th><th>Karakter Hiragana</th><th>Romanisasi (Romaji)</th><th>Trik Memori Visual</th></tr></thead>
          <tbody>
            <tr><td><b>Vokal</b></td><td><span class="ja-char">あ</span> <span class="ja-char">い</span> <span class="ja-char">う</span> <span class="ja-char">え</span> <span class="ja-char">お</span></td><td>a - i - u - e - o</td><td>Ingat urutan vokal Jepang selalu A-I-U-E-O</td></tr>
            <tr><td><b>Baris K</b></td><td><span class="ja-char">か</span> <span class="ja-char">き</span> <span class="ja-char">く</span> <span class="ja-char">け</span> <span class="ja-char">こ</span></td><td>ka - ki - ku - ke - ko</td><td><span class="ja-char">く</span> seperti mulut burung Ku-ku</td></tr>
            <tr><td><b>Baris S</b></td><td><span class="ja-char">さ</span> <span class="ja-char">し</span> <span class="ja-char">す</span> <span class="ja-char">せ</span> <span class="ja-char">そ</span></td><td>sa - <b>shi</b> - su - se - so</td><td>Perhatikan <span class="ja-char">し</span> dibaca 'Shi', bukan 'Si'</td></tr>
            <tr><td><b>Baris T</b></td><td><span class="ja-char">た</span> <span class="ja-char">ち</span> <span class="ja-char">つ</span> <span class="ja-char">て</span> <span class="ja-char">と</span></td><td>ta - <b>chi</b> - <b>tsu</b> - te - to</td><td>Perhatikan <span class="ja-char">ち</span> (Chi) dan <span class="ja-char">つ</span> (Tsu tsunami)</td></tr>
            <tr><td><b>Baris N</b></td><td><span class="ja-char">な</span> <span class="ja-char">に</span> <span class="ja-char">ぬ</span> <span class="ja-char">ね</span> <span class="ja-char">の</span></td><td>na - ni - nu - ne - no</td><td><span class="ja-char">の</span> bentuknya melingkar bulat sempurna</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Bagaimana cara membaca karakter Hiragana pada baris 'S' berikut ini: 'し'?",
        opts: [
          "Shi",
          "Si",
          "Sa",
          "Su"
        ],
        ans: 0,
        why: "Dalam sistem fonetik bahasa Jepang standar, baris S untuk vokal I dilafalkan sebagai 'Shi' (し), bukan 'Si'."
      }
    },
    {
      id: 'ja-02',
      num: '02',
      title: 'Hiragana Bagian 2: Baris Ha sampai N & Tanda Dakuten',
      level: 'Pemula 0',
      intro: 'Menuntaskan seluruh 46 Hiragana serta modifikasi bunyi berdengung dengan tanda petik Tenten (゛) dan Maru (゜).',
      body: `
        <h4>🍃 Baris Ha, Ma, Ya, Ra, Wa & N</h4>
        <table class="zh-table">
          <thead><tr><th>Baris</th><th>Karakter Hiragana</th><th>Romaji</th></tr></thead>
          <tbody>
            <tr><td><b>Baris H</b></td><td><span class="ja-char">は</span> <span class="ja-char">ひ</span> <span class="ja-char">ふ</span> <span class="ja-char">へ</span> <span class="ja-char">ほ</span></td><td>ha - hi - <b>fu</b> - he - ho (fu dihembuskan lembut)</td></tr>
            <tr><td><b>Baris M</b></td><td><span class="ja-char">ま</span> <span class="ja-char">み</span> <span class="ja-char">む</span> <span class="ja-char">め</span> <span class="ja-char">も</span></td><td>ma - mi - mu - me - mo</td></tr>
            <tr><td><b>Baris Y</b></td><td><span class="ja-char">や</span> (ya), <span class="ja-char">ゆ</span> (yu), <span class="ja-char">よ</span> (yo)</td><td>ya - yu - yo (hanya ada 3)</td></tr>
            <tr><td><b>Baris R</b></td><td><span class="ja-char">ら</span> <span class="ja-char">り</span> <span class="ja-char">る</span> <span class="ja-char">れ</span> <span class="ja-char">ろ</span></td><td>ra - ri - ru - re - ro (lidah mengetuk lembut seperti L/R)</td></tr>
            <tr><td><b>Baris W</b></td><td><span class="ja-char">わ</span> (wa), <span class="ja-char">を</span> (wo / o)</td><td>wa - o</td></tr>
            <tr><td><b>Konsonan N</b></td><td><span class="ja-char">ん</span> (n)</td><td>Konsonan tunggal 'n' atau 'ng'</td></tr>
          </tbody>
        </table>

        <h4>✨ Tanda Pengubah Bunyi: Tenten (゛) &amp; Maru (゜)</h4>
        <p>Cukup tambahkan tanda petik dua di pojok kanan atas untuk mengubah bunyi:</p>
        <ul>
          <li>Baris K + ゛ → Baris <b>G</b> (<span class="ja-char">が ぎ ぐ げ ご</span> = ga, gi, gu, ge, go).</li>
          <li>Baris S + ゛ → Baris <b>Z</b> (<span class="ja-char">ざ じ ず ぜ ぞ</span> = za, <b>ji</b>, zu, ze, zo).</li>
          <li>Baris T + ゛ → Baris <b>D</b> (<span class="ja-char">だ ぢ づ で ど</span> = da, ji, dzu, de, do).</li>
          <li>Baris H + ゛ → Baris <b>B</b> (<span class="ja-char">ば び ぶ べ ぼ</span> = ba, bi, bu, be, bo).</li>
          <li>Baris H + ゜ → Baris <b>P</b> (<span class="ja-char">ぱ ぴ ぷ ぺ ぽ</span> = pa, pi, pu, pe, po).</li>
        </ul>
      `,
      quiz: {
        q: "Karakter 'は' (ha) jika diberi tanda lingkaran kecil Maru (゜) di atasnya berubah bunyinya menjadi apa?",
        opts: [
          "ぱ (Pa)",
          "ば (Ba)",
          "が (Ga)",
          "ざ (Za)"
        ],
        ans: 0,
        why: "Tanda lingkaran Maru (handakuten) khusus pada baris H mengubah bunyinya menjadi bunyi letup P (pa, pi, pu, pe, po)."
      }
    },
    {
      id: 'ja-03',
      num: '03',
      title: 'Huruf Katakana: Kata Serapan Asing & Istilah Modern',
      level: 'Pemula 0',
      intro: 'Membaca menu kafe, istilah teknologi IT, dan nama orang asing menggunakan huruf bersudut Katakana.',
      body: `
        <h4>📐 Ciri Khas Huruf Katakana (カタカナ)</h4>
        <p>Bunyi Katakana sama persis 1:1 dengan Hiragana, namun bentuk goresannya lebih tegak lurus dan bersudut kaku layaknya balok geometris. Katakana digunakan untuk:
        <ul>
          <li><b>Nama orang dan negara non-Jepang:</b> Indonesia (<span class="ja-char">インドネシア</span>), Supriyanto (<span class="ja-char">スプリヤント</span>).</li>
          <li><b>Kosakata serapan modern:</b> Kopi (<span class="ja-char">コーヒー</span>), Komputer (<span class="ja-char">コンピューター</span>), Hotel (<span class="ja-char">ホテル</span>).</li>
        </ul>
        </p>

        <h4>➖ Tanda Vokal Panjang: Chōonpu (ー)</h4>
        <p>Garis mendatar (<code>ー</code>) pada Katakana menandakan vokal tersebut diucapkan panjang 2 ketukan:</p>
        <p><i>Contoh:</i> <span class="ja-char">ケーキ</span> (Kēki = Kue / Cake), <span class="ja-char">タクシー</span> (Takushī = Taksi).</p>
      `,
      quiz: {
        q: "Bagaimana cara penulisan nama negara 'Indonesia' dalam huruf Katakana yang tepat?",
        opts: [
          "インドネシア (Indoneshia)",
          "いんどねしあ",
          "アメリカ",
          "にほん"
        ],
        ans: 0,
        why: "Nama negara asing ditulis menggunakan abjad Katakana: イ (i) + ン (n) + ド (do) + ネ (ne) + シ (shi) + ア (a) = インドネシア."
      }
    },
    {
      id: 'ja-04',
      num: '04',
      title: 'Kanji Dasar Sehari-hari: Cara Baca Onyomi vs Kunyomi',
      level: 'Pemula',
      intro: 'Menghilangkan rasa takut pada Kanji: piktogram gambar alam dan rahasia dua cara membaca.',
      body: `
        <h4>🎨 Kanji Adalah Gambar Visual Kehidupan</h4>
        <table class="zh-table">
          <thead><tr><th>Kanji</th><th>Arti Asli</th><th>Visual Asal-Usul Gambar</th></tr></thead>
          <tbody>
            <tr><td><span class="ja-char">日</span></td><td>Matahari / Hari</td><td>Bentuk bulatan matahari dengan bintik di tengah</td></tr>
            <tr><td><span class="ja-char">月</span></td><td>Bulan / Masa</td><td>Bentuk bulan sabit di langit malam</td></tr>
            <tr><td><span class="ja-char">木</span></td><td>Pohon / Kayu</td><td>Pohon dengan batang kokoh dan akar menghunjam</td></tr>
            <tr><td><span class="ja-char">山</span></td><td>Gunung</td><td>Tiga puncak gunung berjejer</td></tr>
            <tr><td><span class="ja-char">川</span></td><td>Sungai</td><td>Tiga garis aliran air sungai mengalir deras</td></tr>
            <tr><td><span class="ja-char">人</span></td><td>Orang / Manusia</td><td>Dua kaki manusia sedang melangkah maju</td></tr>
          </tbody>
        </table>

        <h4>🔍 Mengapa Satu Kanji Punya 2 Cara Baca?</h4>
        <ul>
          <li><b>Onyomi (Bunyi Tiongkok):</b> Dipakai saat Kanji bergandengan dengan Kanji lain membentuk kata majemuk (misal: <span class="ja-char">日本</span> = Ni-hon = Jepang).</li>
          <li><b>Kunyomi (Bunyi Asli Jepang):</b> Dipakai saat Kanji berdiri sendiri (misal: <span class="ja-char">ひと</span> = hito = orang).</li>
        </ul>
      `,
      quiz: {
        q: "Kapan cara baca Onyomi (bunyi serapan Tiongkok) biasanya digunakan pada karakter Kanji?",
        opts: [
          "Ketika dua atau lebih karakter Kanji bergabung membentuk kata majemuk",
          "Ketika Kanji berdiri sendiri tanpa huruf lain",
          "Hanya saat menulis nama hewan",
          "Ketika berbicara dengan anak kecil"
        ],
        ans: 0,
        why: "Cara baca Onyomi umumnya dipakai saat beberapa kanji bergabung menjadi kosakata majemuk (seperti 日本, 大学, 先生)."
      }
    },
    {
      id: 'ja-05',
      num: '05',
      title: 'Salam & Etika Percakapan Bahasa Jepang (Aisatsu)',
      level: 'Pemula',
      intro: 'Mengawali hari dengan salam hangat, membungkuk sopan (Ojigi), dan ungkapan terima kasih.',
      body: `
        <h4>🌅 Salam Sehari-hari (挨拶 Aisatsu)</h4>
        <table class="zh-table">
          <thead><tr><th>Frasa Jepang</th><th>Romaji</th><th>Arti Bahasa Indonesia &amp; Waktu</th></tr></thead>
          <tbody>
            <tr><td><span class="ja-char">おはようございます</span></td><td><span class="zh-pinyin">Ohayou gozaimasu</span></td><td>Selamat pagi (Sopan)</td></tr>
            <tr><td><span class="ja-char">こんにちは</span></td><td><span class="zh-pinyin">Konnichiwa</span></td><td>Selamat siang / Halo universal</td></tr>
            <tr><td><span class="ja-char">こんばんは</span></td><td><span class="zh-pinyin">Konbanwa</span></td><td>Selamat malam</td></tr>
            <tr><td><span class="ja-char">ありがとうございます</span></td><td><span class="zh-pinyin">Arigatou gozaimasu</span></td><td>Terima kasih banyak</td></tr>
            <tr><td><span class="ja-char">すみません</span></td><td><span class="zh-pinyin">Sumimasen</span></td><td>Permisi / Maaf (Kata ajaib paling multifungsi!)</td></tr>
            <tr><td><span class="ja-char">さようなら</span></td><td><span class="zh-pinyin">Sayounara</span></td><td>Selamat tinggal</td></tr>
            <tr><td><span class="ja-char">じゃあ、また！</span></td><td><span class="zh-pinyin">Jaa, mata!</span></td><td>Sampai jumpa lagi nanti!</td></tr>
          </tbody>
        </table>
        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Kata Ajaib 'Sumimasen':</b> Anda bisa menggunakan <code>Sumimasen</code> untuk memanggil pelayan restoran, meminta maaf saat menyenggol orang di kereta, maupun saat berterima kasih karena dibantu!</div>
        </div>
      `,
      quiz: {
        q: "Kata multifungsi apa yang paling sering digunakan orang Jepang untuk permisi, memanggil pelayan, maupun meminta maaf?",
        opts: [
          "Sumimasen (すみません)",
          "Sayounara",
          "Konnichiwa",
          "Oyasuminasai"
        ],
        ans: 0,
        why: "'Sumimasen' adalah kata paling berguna dalam bahasa Jepang untuk meminta maaf ringan, permisi lewat, maupun memanggil pelayan restoran."
      }
    },
    {
      id: 'ja-06',
      num: '06',
      title: 'Perkenalan Diri Supriyanto (Pola 〜は〜です)',
      level: 'Pemula',
      intro: 'Rumus fondasi kalimat bahasa Jepang: Subjek + は + Predikat + です (A adalah B).',
      body: `
        <h4>🧱 Rumus Emas Kalimat Jepang: A は B です</h4>
        <p>Partikel <b>は</b> (ditulis 'ha', tetapi saat berfungsi sebagai partikel dibaca <b>'wa'</b>!) menandakan topik utama kalimat:</p>
        <div class="code-block"><span class="cm">// Rumus: [Saya] wa [Identitas] desu</span>
わたし は スプリヤント です。
<span class="st">(Watashi wa Supriyanto desu. - Saya adalah Supriyanto.)</span></div>

        <h4>💬 Naskah Dialog Perkenalan Diri Supriyanto</h4>
        <div class="code-block"><span class="cm">// Pertemuan Pertama dengan Rekan Kerja</span>
Supriyanto: はじめまして！わたしはスプリヤントです。
   <span class="st">(Hajimemashite! Watashi wa Supriyanto desu. - Senang pertama kali bertemu! Saya adalah Supriyanto.)</span>

Supriyanto: インドネシアから来ました。エンジニアです。
   <span class="st">(Indonesia kara kimashita. Enjinia desu. - Saya datang dari Indonesia. Saya seorang engineer.)</span>

Supriyanto: どうぞよろしくお願いします！
   <span class="st">(Douzo yoroshiku onegaishimasu! - Mohon bimbingan dan kerjasamanya!)</span>

Tanaka:     田中です。こちらこそ、よろしくお願いします！
   <span class="st">(Tanaka desu. Kochirakoso, yoroshiku onegaishimasu! - Saya Tanaka. Saya juga senang bekerja sama dengan Anda!)</span></div>
      `,
      quiz: {
        q: "Bagaimana cara membaca partikel penanda topik 'は' ketika berada di dalam kalimat (contoh: わたしは)?",
        opts: [
          "Dibaca 'Wa'",
          "Dibaca 'Ha'",
          "Dibaca 'He'",
          "Tidak dibaca"
        ],
        ans: 0,
        why: "Secara historis huruf 'は' berbunyi 'ha', namun ketika berfungsi khusus sebagai partikel penanda topik kalimat, ia wajib dilafalkan sebagai 'wa'."
      }
    },
    {
      id: 'ja-07',
      num: '07',
      title: 'Menunjuk Benda & Lokasi: Kore, Sore, Are & Doko',
      level: 'Pemula',
      intro: 'Menunjuk barang dekat pembicara (kore), dekat lawan bicara (sore), dan jauh dari keduanya (are).',
      body: `
        <h4>📍 Sistem Penunjuk Tiga Zona (Ko - So - A - Do)</h4>
        <table class="zh-table">
          <thead><tr><th>Zona Lokasi</th><th>Menunjuk Benda (Ini/Itu)</th><th>Menunjuk Tempat (Sini/Situ/Sana)</th></tr></thead>
          <tbody>
            <tr><td><b>Dekat Saya (Pembicara)</b></td><td><span class="ja-char">これ</span> (Kore = Ini)</td><td><span class="ja-char">ここ</span> (Koko = Di sini)</td></tr>
            <tr><td><b>Dekat Kamu (Lawan Bicara)</b></td><td><span class="ja-char">それ</span> (Sore = Itu)</td><td><span class="ja-char">そこ</span> (Soko = Di situ)</td></tr>
            <tr><td><b>Jauh dari Kita Berdua</b></td><td><span class="ja-char">あれ</span> (Are = Yang di sana itu)</td><td><span class="ja-char">あそこ</span> (Asoko = Di sebelah sana)</td></tr>
            <tr><td><b>Kata Tanya (Mana?)</b></td><td><span class="ja-char">どれ</span> (Dore = Yang mana?)</td><td><span class="ja-char">どこ</span> (Doko = Di mana?)</td></tr>
          </tbody>
        </table>
        <p><i>Contoh Bertanya Tempat:</i> <span class="ja-char">トイレはどこですか？</span> (Toire wa doko desu ka? = Toilet di mana ya?)</p>
      `,
      quiz: {
        q: "Bagaimana cara menanyakan 'Toilet ada di mana?' dalam bahasa Jepang yang sopan?",
        opts: [
          "トイレはどこですか？ (Toire wa doko desu ka?)",
          "トイレはここですか？",
          "トイレはだれですか？",
          "トイレはなんですか？"
        ],
        ans: 0,
        why: "'どこ' berarti di mana, sehingga 'Toire wa doko desu ka?' adalah kalimat baku menanyakan lokasi toilet."
      }
    },
    {
      id: 'ja-08',
      num: '08',
      title: 'Angka, Jam & Satuan Waktu (Ji, Fun, Jikan)',
      level: 'Menengah',
      intro: 'Menghitung angka 1-10.000, menyebutkan jam dan menit secara tepat.',
      body: `
        <h4>🔢 Angka Dasar 1 sampai 10</h4>
        <p>1 (<span class="ja-char">いち</span> ichi), 2 (<span class="ja-char">に</span> ni), 3 (<span class="ja-char">さん</span> san), 4 (<span class="ja-char">よん / し</span> yon/shi), 5 (<span class="ja-char">ご</span> go), 6 (<span class="ja-char">ろく</span> roku), 7 (<span class="ja-char">なな / しち</span> nana/shichi), 8 (<span class="ja-char">はち</span> hachi), 9 (<span class="ja-char">きゅう / く</span> kyuu/ku), 10 (<span class="ja-char">じゅう</span> juu).</p>
        <p><i>Satuan Besar:</i> 100 (<span class="ja-char">ひゃく</span> hyaku), 1.000 (<span class="ja-char">せん</span> sen), 10.000 (<span class="ja-char">いちまん</span> ichiman).</p>

        <h4>⏰ Menyebutkan Jam (〜時 Ji) &amp; Menit (〜分 Fun/Pun)</h4>
        <div class="code-block"><span class="cm">// Jam 7:30 (Setengah 8)</span>
いま、しちじ はん です。
<span class="st">(Ima, shichiji han desu. - Sekarang jam 7 lewat 30 menit.)</span></div>
      `,
      quiz: {
        q: "Bagaimana cara menyebutkan 'Jam 3 tepat' dalam bahasa Jepang?",
        opts: [
          "さんじ (San-ji)",
          "いちじ",
          "よじ",
          "ごじ"
        ],
        ans: 0,
        why: "Angka 3 adalah 'san', ditambahkan akhiran satuan jam 'ji' menjadi 'san-ji' (さんじ)."
      }
    },
    {
      id: 'ja-09',
      num: '09',
      title: 'Kata Kerja Bentuk Masu (〜ます / 〜ません)',
      level: 'Menengah',
      intro: 'Mengonjugasi kata kerja sopan masa sekarang, bentuk negatif, dan bentuk lampau.',
      body: `
        <h4>⚙️ Empat Bentuk Dasar Kata Kerja Sopan (~Masu)</h4>
        <table class="zh-table">
          <thead><tr><th>Kondisi Waktu</th><th>Akhiran</th><th>Contoh: 食べる (Makan)</th><th>Arti</th></tr></thead>
          <tbody>
            <tr><td><b>Positif (Sekarang/Akan Datang)</b></td><td>〜ます (-masu)</td><td><span class="ja-char">たべます</span> (Tabemasu)</td><td>Saya makan / akan makan</td></tr>
            <tr><td><b>Negatif (Tidak Melakukan)</b></td><td>〜ません (-masen)</td><td><span class="ja-char">たべません</span> (Tabemasen)</td><td>Saya tidak makan</td></tr>
            <tr><td><b>Lampau Positif (Sudah Selesai)</b></td><td>〜ました (-mashita)</td><td><span class="ja-char">たべました</span> (Tabemashita)</td><td>Saya sudah makan</td></tr>
            <tr><td><b>Lampau Negatif (Dulu Tidak)</b></td><td>〜ませんでした (-masendeshita)</td><td><span class="ja-char">たべませんでした</span> (Tabemasendeshita)</td><td>Saya tidak makan (tadi)</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Bentuk sopan lampau dari kata kerja 'Makan' (Saya sudah makan) adalah?",
        opts: [
          "たべました (Tabemashita)",
          "たべます",
          "たべません",
          "たべる"
        ],
        ans: 0,
        why: "Akhiran '~ました' (-mashita) digunakan untuk menyatakan perbuatan yang telah selesai dilakukan di masa lampau secara sopan."
      }
    },
    {
      id: 'ja-10',
      num: '10',
      title: 'Partikel Inti: を (Objek), に (Tujuan), で (Alat/Tempat)',
      level: 'Menengah',
      intro: 'Tiga pilar partikel gramatikal yang menghubungkan kata benda dengan kata kerja dalam kalimat.',
      body: `
        <h4>🎯 Tiga Partikel Utama</h4>
        <ul>
          <li><b>を (dibaca 'o'):</b> Penanda objek penderita yang dikenai kata kerja:
            <br>• <span class="ja-char">ごはん を たべます。</span> (Gohan o tabemasu = Makan nasi).
            <br>• <span class="ja-char">みず を のみます。</span> (Mizu o nomimasu = Minum air).</li>
          <li><b>に (ni):</b> Menunjukkan titik waktu tepat atau arah tujuan tempat:
            <br>• <span class="ja-char">7時 に おきます。</span> (Shichiji ni okimasu = Bangun pada jam 7).
            <br>• <span class="ja-char">日本 に いきます。</span> (Nihon ni ikimasu = Pergi ke Jepang).</li>
          <li><b>で (de):</b> Menunjukkan tempat aktivitas berlangsung atau alat transportasi:
            <br>• <span class="ja-char">カフェ で しごと を します。</span> (Kafe de shigoto o shimasu = Bekerja di kafe).
            <br>• <span class="ja-char">でんしゃ で いきます。</span> (Densha de ikimasu = Pergi naik kereta).</li>
        </ul>
      `,
      quiz: {
        q: "Partikel apa yang digunakan untuk menandai objek makanan pada kalimat 'Kohi ___ nomimasu' (Saya minum kopi)?",
        opts: [
          "を (o)",
          "に (ni)",
          "で (de)",
          "は (wa)"
        ],
        ans: 0,
        why: "Partikel 'を' (o) berfungsi sebagai penanda objek penderita tindakan langsung dari kata kerja."
      }
    },
    {
      id: 'ja-11',
      num: '11',
      title: 'Memesan Makanan di Restoran Jepang (〜をください)',
      level: 'Mahir',
      intro: 'Seni memesan ramen, meminta rekomendasi koki, dan meminta bon tagihan (Okaikei).',
      body: `
        <h4>🍜 Naskah Dialog di Kedai Ramen Supriyanto</h4>
        <div class="code-block"><span class="cm">// Memesan Ramen di Tokyo</span>
Supriyanto: すみません！ラーメン を ひとつ ください。
   <span class="st">(Sumimasen! Raamen o hitotsu kudasai. - Permisi! Tolong ramennya satu mangkok.)</span>

Pelayan:    はい、かしこまりました。お飲み物は？
   <span class="st">(Hai, kashikomarimashita. Onomimono wa? - Baik, dimengerti. Untuk minumannya?)</span>

Supriyanto: おみず を おねがいします。
   <span class="st">(Omizu o onegaishimasu. - Minta air putih tolong.)</span>

Supriyanto: おかいけい、おねがいします。ごちそうさまでした！
   <span class="st">(Okaikei, onegaishimasu. Gochisousama deshita! - Minta bonnya tolong. Terima kasih atas makanannya!)</span></div>
      `,
      quiz: {
        q: "Ungkapan apa yang diucapkan orang Jepang setelah selesai makan sebagai ucapan terima kasih atas hidangan lezat?",
        opts: [
          "ごちそうさまでした (Gochisousama deshita)",
          "いただきます",
          "おねがいします",
          "いらっしゃいませ"
        ],
        ans: 0,
        why: "'Gochisousama deshita' diucapkan setelah selesai makan sebagai ungkapan syukur dan terima kasih kepada yang memasak hidangan."
      }
    },
    {
      id: 'ja-12',
      num: '12',
      title: 'Berbelanja & Bertanya Harga: いくらですか',
      level: 'Mahir',
      intro: 'Menanyakan harga barang belanjaan di Akihabara dan pembayaran kartu / uang tunai.',
      body: `
        <h4>🛍️ Percakapan Berbelanja</h4>
        <table class="zh-table">
          <thead><tr><th>Frasa Jepang</th><th>Romaji</th><th>Arti Bahasa Indonesia</th></tr></thead>
          <tbody>
            <tr><td><span class="ja-char">これはいくらですか？</span></td><td><span class="zh-pinyin">Kore wa ikura desu ka?</span></td><td>Ini harganya berapa?</td></tr>
            <tr><td><span class="ja-char">1,000円です。</span></td><td><span class="zh-pinyin">Sen-en desu.</span></td><td>Harganya 1.000 Yen.</td></tr>
            <tr><td><span class="ja-char">これをください。</span></td><td><span class="zh-pinyin">Kore o kudasai.</span></td><td>Saya mau beli yang ini tolong.</td></tr>
            <tr><td><span class="ja-char">カードはつかえますか？</span></td><td><span class="zh-pinyin">Kaado wa tsukaemasu ka?</span></td><td>Bisa bayar pakai kartu kredit?</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Bagaimana cara menanyakan 'Berapa harga barang ini?' dalam bahasa Jepang?",
        opts: [
          "これはいくらですか？ (Kore wa ikura desu ka?)",
          "これはどこですか？",
          "これはなんですか？",
          "これはだれですか？"
        ],
        ans: 0,
        why: "'いくら' (ikura) berarti berapa harga, sehingga 'Kore wa ikura desu ka?' adalah frasa standar menanyakan harga barang."
      }
    },
    {
      id: 'ja-13',
      num: '13',
      title: 'Arah, Stasiun Kereta & Transportasi Kota',
      level: 'Mahir',
      intro: 'Navigasi stasiun Shinjuku yang megah, naik kereta bawah tanah (Chikatetsu), dan bertanya arah.',
      body: `
        <h4>🚉 Menanyakan Arah Stasiun</h4>
        <div class="code-block"><span class="cm">// Bertanya Arah di Jalanan Shibuya</span>
Supriyanto: すみません、しぶやえき は どこですか？
   <span class="st">(Sumimasen, Shibuya-eki wa doko desu ka? - Permisi, Stasiun Shibuya di mana ya?)</span>

Warga:      あそこです。まっすぐ 行ってください。
   <span class="st">(Asoko desu. Massugu itte kudasai. - Di sebelah sana. Silakan jalan lurus terus.)</span>

Supriyanto: どうもありがとうございます！
   <span class="st">(Doumo arigatou gozaimasu! - Terima kasih banyak!)</span></div>

        <h4>Petunjuk Arah</h4>
        <ul>
          <li>Kiri: <span class="ja-char">ひだり</span> (Hidari) → <span class="ja-char">ひだり に まがってください</span> (Belok ke kiri).</li>
          <li>Kanan: <span class="ja-char">みぎ</span> (Migi) → <span class="ja-char">みぎ に まがってください</span> (Belok ke kanan).</li>
          <li>Lurus: <span class="ja-char">まっすぐ</span> (Massugu) → Jalan lurus.</li>
        </ul>
      `,
      quiz: {
        q: "Apa arti dari kata penunjuk arah 'まっすぐ' (Massugu)?",
        opts: [
          "Lurus terus",
          "Belok kiri",
          "Belok kanan",
          "Putar balik"
        ],
        ans: 0,
        why: "'Massugu' berarti berjalan lurus ke depan tanpa berbelok."
      }
    },
    {
      id: 'ja-14',
      num: '14',
      title: 'Keinginan (〜たいです) & Ajakan Santai (〜ましょう)',
      level: 'Expert',
      intro: 'Menyatakan impian liburan ke Gunung Fuji, mengajak teman, dan roadmap sertifikasi JLPT N5.',
      body: `
        <h4>🌟 Mengungkapkan Keinginan: 〜たいです (-tai desu)</h4>
        <p>Ganti akhiran <code>-masu</code> dengan <b>-tai desu</b> untuk mengatakan <i>'Saya ingin...'</i>:</p>
        <div class="code-block"><span class="cm">// Contoh Keinginan Supriyanto</span>
• 日本へ 行きたいです。 (Nihon e ikitai desu = Saya ingin pergi ke Jepang.)
• おすし を 食べたいです。 (Osushi o tabetai desu = Saya ingin makan sushi.)
• にほんご を はなしたいです。 (Nihongo o hanashitai desu = Saya ingin berbicara bahasa Jepang.)</div>

        <h4>🤝 Mengajak Teman: 〜ましょう (-mashou)</h4>
        <p>Ganti akhiran <code>-masu</code> dengan <b>-mashou</b> untuk mengajak <i>'Mari kita...'</i>:</p>
        <p><i>Contoh:</i> <span class="ja-char">いっしょ に 行きましょう！</span> (Issho ni ikimashou! = Ayo kita pergi bareng!)</p>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh 14 modul kurikulum Bahasa Jepang dari pengenalan abjad Hiragana/Katakana hingga percakapan JLPT N5. Uji wawasan Anda di <b>Quiz Bahasa Jepang</b>!</div>
        </div>
      `,
      quiz: {
        q: "Bagaimana cara mengatakan 'Saya ingin pergi ke Jepang' menggunakan rumus keinginan ~たいです?",
        opts: [
          "日本へ行きたいです。 (Nihon e ikitai desu.)",
          "日本へ行きますです。",
          "日本へ行きましたです。",
          "日本へ行かないです。"
        ],
        ans: 0,
        why: "Kata kerja 'ikimasu' (pergi) diubah menjadi bentuk keinginan dengan mengganti akhiran -masu menjadi -tai desu: 'ikitai desu'."
      }
    }
  ]
};
