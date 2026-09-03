export const mandarinTrack = {
  id: 'mandarin',
  title: 'Mandarin 🇨🇳',
  subtitle: 'Percakapan Sehari-hari: Pinyin, 4 Nada Dasar, Hanzi Praktis & Percakapan Nyata',
  accent: 'rose',
  category: 'lang',
  lessons: [
    {
      id: 'zh-01',
      num: '01',
      title: 'Pinyin & Rahasia 4 Nada Suara',
      level: 'Pemula 0',
      intro: 'Kunci paling krusial dalam bahasa Mandarin: melatih telinga dan lidah membedakan 4 nada suara dengan analogi intonasi sehari-hari.',
      body: `
        <h4>🎵 Analogi 4 Nada dengan Intonasi Suara Sehari-hari</h4>
        <p>Banyak pemula takut belajar Mandarin karena katanya "salah nada bisa salah arti". Betul bahwa nada mengubah arti kata, namun melatih nada sebenarnya sangat mudah jika Anda membayangkan intonasi bicara kita sehari-hari:</p>

        <table class="zh-table">
          <thead><tr><th>Nada</th><th>Tanda</th><th>Analogi Suara Sehari-hari</th><th>Contoh (ma)</th><th>Arti</th></tr></thead>
          <tbody>
            <tr><td><b>Nada 1</b></td><td>mā (—)</td><td>Tinggi & datar seperti suara saat dokter gigi menyuruh: <i>"Aaaaa"</i></td><td><span class="zh-char">妈</span> (mā)</td><td>Ibu</td></tr>
            <tr><td><b>Nada 2</b></td><td>má (/)</td><td>Naik heran seperti orang kaget bertanya: <i>"Hah?!"</i> / <i>"Apa?!"</i></td><td><span class="zh-char">麻</span> (má)</td><td>Rami / Kesemutan</td></tr>
            <tr><td><b>Nada 3</b></td><td>mǎ (V)</td><td>Turun lalu naik seperti orang ragu-ragu berpikir: <i>"Hmm... iya..."</i></td><td><span class="zh-char">马</span> (mǎ)</td><td>Kuda</td></tr>
            <tr><td><b>Nada 4</b></td><td>mà (\\)</td><td>Turun tegas & pendek seperti membentak atau menolak tegas: <i>"Gak!"</i> / <i>"Stop!"</i></td><td><span class="zh-char">骂</span> (mà)</td><td>Memarahi</td></tr>
            <tr><td><b>Netral</b></td><td>ma ( )</td><td>Ringan dan cepat tanpa penekanan</td><td><span class="zh-char">吗</span> (ma)</td><td>Partikel tanya (kah?)</td></tr>
          </tbody>
        </table>

        <h4>👂 Rahasia Perubahan Nada (Tone Sandhi)</h4>
        <p>Penutur asli Mandarin tidak kaku. Ada 2 aturan perubahan nada otomatis agar pengucapan mengalir luwes (*smooth*):
        <ul>
          <li><b>Aturan Dua Nada 3:</b> Jika ada dua suku kata bernada ke-3 bertemu (3 + 3), suku kata pertama <b>otomatis berubah menjadi Nada 2</b>!
            <br>Contoh legendaris: <span class="zh-char">你好</span> (Nǐ + hǎo) dibaca menjadi <b>Ní hǎo</b>!</li>
          <li><b>Aturan Kata 不 (Bù):</b> Kata 不 aslinya bernada ke-4. Tapi jika bertemu kata lain yang bernada ke-4, ia berubah menjadi nada ke-2 (bú)!
            <br>Contoh: 不 (bù) + 是 (shì) → dibaca <b>bú shì</b>!</li>
        </ul>
        </p>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Tips Praktis Supriyanto:</b> Saat berlatih di depan cermin, gerakkan kepala atau tangan Anda mengikuti arah garis nada (datar, naik, berayun, sentak ke bawah). Gerakan tubuh sangat membantu memori otot pita suara!</div>
        </div>
      `,
      quiz: {
        q: "Bagaimana cara membaca sapaan 'Nǐ hǎo' (你好) yang benar sesuai aturan perubahan nada (Tone Sandhi)?",
        opts: [
          "Dibaca 'Ní hǎo' (kata pertama berubah menjadi nada ke-2 karena dua nada ke-3 bertemu)",
          "Kedua kata dibaca membentak dengan nada ke-4",
          "Huruf h tidak boleh dibunyikan sama sekali",
          "Dibaca dengan nada datar seperti berbisik tanpa nada"
        ],
        ans: 0,
        why: "Dalam fonologi Mandarin, jika dua karakter bernada ke-3 bertemu berurutan (3+3), karakter pertama wajib dilafalkan dengan nada ke-2 (naik) agar artikulasi lebih alami."
      }
    },
    {
      id: 'zh-02',
      num: '02',
      title: 'Salam, Sapaan Hormat & Angka 1–100',
      level: 'Pemula',
      intro: 'Menguasai sapaan sopan sehari-hari, terima kasih, permohonan maaf, dan berhitung angka 1 sampai 100.',
      body: `
        <h4>🤝 Etika Sapaan Sehari-hari</h4>
        <p>Menyapa orang di Tiongkok atau komunitas Tionghoa sangat praktis. Struktur dasarnya adalah <b>[Nama/Orang] + 好 (Hǎo = Baik)</b>:</p>

        <table class="zh-table">
          <thead><tr><th>Hanzi</th><th>Pinyin</th><th>Arti</th><th>Kapan Digunakan</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">你好</span></td><td><span class="zh-pinyin">Nǐ hǎo</span></td><td>Halo / Apa kabar</td><td>Sapaan umum kepada teman sebaya / kasual</td></tr>
            <tr><td><span class="zh-char">您好</span></td><td><span class="zh-pinyin">Nín hǎo</span></td><td>Halo (Sangat Hormat)</td><td>Kepada bos, orang tua, pelanggan, guru</td></tr>
            <tr><td><span class="zh-char">早上好</span></td><td><span class="zh-pinyin">Zǎoshang hǎo</span></td><td>Selamat pagi</td><td>Sebelum jam 10 pagi</td></tr>
            <tr><td><span class="zh-char">谢谢</span></td><td><span class="zh-pinyin">Xièxie</span></td><td>Terima kasih</td><td>Ungkapan rasa terima kasih</td></tr>
            <tr><td><span class="zh-char">不客气</span></td><td><span class="zh-pinyin">Bú kèqi</span></td><td>Sama-sama / Jangan sungkan</td><td>Jawaban untuk ucapan terima kasih</td></tr>
            <tr><td><span class="zh-char">对不起</span></td><td><span class="zh-pinyin">Duìbuqǐ</span></td><td>Maaf</td><td>Saat melakukan kesalahan</td></tr>
            <tr><td><span class="zh-char">没关系</span></td><td><span class="zh-pinyin">Méi guānxi</span></td><td>Tidak apa-apa / Santai saja</td><td>Jawaban saat ada yang minta maaf</td></tr>
            <tr><td><span class="zh-char">再见</span></td><td><span class="zh-pinyin">Zàijiàn</span></td><td>Sampai jumpa lagi</td><td>Saat berpisah (Zài = lagi, Jiàn = bertemu)</td></tr>
          </tbody>
        </table>

        <h4>🔢 Pola Ajaib Angka Mandarin (Hafal 10 Kata = Bisa 1–99!)</h4>
        <p>Sistem hitungan Mandarin sangat matematis dan logis tanpa pengecualian aneh:
        <ul>
          <li><b>1–10:</b> 一 (yī), 二 (èr), 三 (sān), 四 (sì), 五 (wǔ), 六 (liù), 七 (qī), 八 (bā), 九 (jiǔ), 十 (shí).</li>
          <li><b>11–19:</b> Cukup ucapkan [Sepuluh + Satuan]. Misal 15 = 十五 (shí wǔ). 18 = 十八 (shí bā).</li>
          <li><b>20–99:</b> Cukup ucapkan [Angka puluhan + Sepuluh + Satuan]. Misal:
            <br>• 20 = 二十 (èr shí)
            <br>• 35 = 三十五 (sān shí wǔ)
            <br>• 99 = 九十九 (jiǔ shí jiǔ)
          </li>
          <li><b>100:</b> 一百 (yī bǎi).</li>
        </ul>
        </p>

        <div class="tip-box">
          <span class="tip-box-icon">🖐️</span>
          <div><b>Kultur Gestur Satu Tangan:</b> Di pasar Tiongkok, pedagang bisa menunjukkan angka 1 sampai 10 hanya dengan satu tangan! Misalnya angka 6 dibentuk jempol dan kelingking terbuka (tanda 'call me'), angka 8 dibentuk jempol dan telunjuk terbuka (seperti pistol).</div>
        </div>
      `,
      quiz: {
        q: "Bagaimana cara membaca angka 48 dalam bahasa Mandarin?",
        opts: [
          "Sì shí bā (四十八)",
          "Bā shí sì (八十四)",
          "Shí sì bā",
          "Bā sì shí"
        ],
        ans: 0,
        why: "Rumus puluhan dalam bahasa Mandarin sangat matematis: 40 adalah sì shí (4x10), ditambah 8 (bā) menjadi sì shí bā (48)."
      }
    },
    {
      id: 'zh-03',
      num: '03',
      title: 'Perkenalan Diri Supriyanto & Identitas',
      level: 'Pemula',
      intro: 'Menyusun kalimat perkenalan diri yang lancar: nama, asal negara, profesi engineer, dan usia.',
      body: `
        <h4>👤 Pola Kalimat Identitas Dasar</h4>
        <p>Di bahasa Mandarin, struktur kalimat identitas sangat mirip bahasa Indonesia, menggunakan kata kerja <b>是 (shì = adalah)</b> dan <b>叫 (jiào = dipanggil/bernama)</b>:</p>

        <table class="zh-table">
          <thead><tr><th>Pola Kalimat</th><th>Contoh Mandarin</th><th>Pinyin</th><th>Arti</th></tr></thead>
          <tbody>
            <tr><td><b>Nama:</b> 我叫...</td><td><span class="zh-char">我叫苏普扬托。</span></td><td><span class="zh-pinyin">Wǒ jiào Sūpǔyángtuō.</span></td><td>Nama saya Supriyanto.</td></tr>
            <tr><td><b>Kewarganegaraan:</b> 我是...人</td><td><span class="zh-char">我是印度尼西亚人。</span></td><td><span class="zh-pinyin">Wǒ shì Yìndùníxīyà rén.</span></td><td>Saya orang Indonesia.</td></tr>
            <tr><td><b>Profesi:</b> 我是...</td><td><span class="zh-char">我是软件工程师。</span></td><td><span class="zh-pinyin">Wǒ shì ruǎnjiàn gōngchéngshī.</span></td><td>Saya adalah Software Engineer.</td></tr>
            <tr><td><b>Usia:</b> 我...岁</td><td><span class="zh-char">我二十八岁。</span></td><td><span class="zh-pinyin">Wǒ èrshíbā suì.</span></td><td>Saya berusia 28 tahun.</td></tr>
            <tr><td><b>Senang bertemu:</b> 很高兴认识你</td><td><span class="zh-char">很高兴认识你！</span></td><td><span class="zh-pinyin">Hěn gāoxìng rènshi nǐ!</span></td><td>Senang sekali bisa mengenalmu!</td></tr>
          </tbody>
        </table>

        <h4>💬 Naskah Dialog Perkenalan Supriyanto</h4>
        <div class="code-block"><span class="cm">// Percakapan Bertemu Rekan Baru</span>
A: 你好！你叫什么名字？
   <span class="st">(Nǐ hǎo! Nǐ jiào shénme míngzi? - Halo! Siapa nama Anda?)</span>

B: 你好！我叫苏普扬托。你是哪国人？
   <span class="st">(Nǐ hǎo! Wǒ jiào Sūpǔyángtuō. Nǐ shì nǎ guó rén? - Halo! Nama saya Supriyanto. Anda orang negara mana?)</span>

A: 我是中国人。你是工程师吗？
   <span class="st">(Wǒ shì Zhōngguó rén. Nǐ shì gōngchéngshī ma? - Saya orang Tiongkok. Apakah Anda seorang engineer?)</span>

B: 是的，我是软件工程师。很高兴认识你！
   <span class="st">(Shì de, wǒ shì ruǎnjiàn gōngchéngshī. Hěn gāoxìng rènshi nǐ! - Benar, saya software engineer. Senang berkenalan denganmu!)</span></div>
      `,
      quiz: {
        q: "Bagaimana kalimat Supriyanto dalam bahasa Mandarin untuk menyatakan 'Saya orang Indonesia'?",
        opts: [
          "Wǒ shì Yìndùníxīyà rén (我是印度尼西亚人)",
          "Wǒ jiào Yìndùníxīyà",
          "Nǐ shì Yìndùníxīyà rén ma?",
          "Yìndùníxīyà shì wǒ"
        ],
        ans: 0,
        why: "Dalam bahasa Mandarin, kewarganegaraan dibentuk dengan rumus [Nama Negara] + [人 (rén = orang)]. Sehingga 'orang Indonesia' adalah Yìndùníxīyà rén."
      }
    },
    {
      id: 'zh-04',
      num: '04',
      title: 'Keluarga & Kepemilikan: 的 (de) & 有 (yǒu)',
      level: 'Pemula',
      intro: 'Menyatakan kepemilikan barang dengan partikel 的 (de) serta ada/tidak adanya sesuatu dengan 有 / 没有.',
      body: `
        <h4>🔑 Partikel Kepemilikan: 的 (de)</h4>
        <p>Partikel <b>的 (de)</b> adalah salah satu kata paling sering digunakan dalam bahasa Mandarin. Fungsinya persis seperti akhiran <i>'s</i> dalam bahasa Inggris atau kata <i>milik / punya</i> dalam bahasa Indonesia:</p>
        <ul>
          <li><b>我的 (wǒ de)</b> = Milik saya / punyaku.</li>
          <li><b>你的 (nǐ de)</b> = Milikmu / punyamu.</li>
          <li><b>他的 (tā de)</b> = Miliknya (laki-laki).</li>
          <li><b>苏普扬托的电脑 (Sūpǔyángtuō de diànnǎo)</b> = Komputer milik Supriyanto.</li>
        </ul>

        <h4>📦 Menyatakan Ada & Tidak Ada: 有 (yǒu) vs 没有 (méiyǒu)</h4>
        <p>Untuk menyatakan keberadaan benda atau saudara:
        <ul>
          <li><b>Ada / Memiliki:</b> Gunakan <span class="zh-char">有</span> (yǒu).
            <br><i>Contoh:</i> 我有一个姐姐。(Wǒ yǒu yí gè jiějie. = Saya punya satu orang kakak perempuan).</li>
          <li><b>Tidak Ada / Tidak Punya:</b> Wajib menggunakan <span class="zh-char">没有</span> (méiyǒu). <b>PENTING: Jangan pernah mengatakan <s>不有 (bù yǒu)</s>!</b>
            <br><i>Contoh:</i> 我没有弟弟。(Wǒ méiyǒu dìdi. = Saya tidak punya adik laki-laki).</li>
        </ul>
        </p>

        <h4>👨‍👩‍👧‍👦 Anggota Keluarga Inti</h4>
        <table class="zh-table">
          <thead><tr><th>Hanzi</th><th>Pinyin</th><th>Arti</th><th>Trik Hafalan Cepat</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">爸爸</span></td><td><span class="zh-pinyin">Bàba</span></td><td>Ayah</td><td>Mirip kata 'Bapak'</td></tr>
            <tr><td><span class="zh-char">妈妈</span></td><td><span class="zh-pinyin">Māma</span></td><td>Ibu</td><td>Mirip kata 'Mama'</td></tr>
            <tr><td><span class="zh-char">哥哥</span></td><td><span class="zh-pinyin">Gēge</span></td><td>Kakak laki-laki</td><td>Ingat 'Ge-ge' yang gagah</td></tr>
            <tr><td><span class="zh-char">姐姐</span></td><td><span class="zh-pinyin">Jiějie</span></td><td>Kakak perempuan</td><td>Panggilan akrab 'Jie-jie'</td></tr>
            <tr><td><span class="zh-char">弟弟</span></td><td><span class="zh-pinyin">Dìdi</span></td><td>Adik laki-laki</td><td>Adik kecil lincah</td></tr>
            <tr><td><span class="zh-char">妹妹</span></td><td><span class="zh-pinyin">Mèimei</span></td><td>Adik perempuan</td><td>Panggilan imut 'Mei-mei'</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Bagaimana cara yang tepat untuk mengatakan 'Saya tidak punya mobil' dalam bahasa Mandarin?",
        opts: [
          "Wǒ méiyǒu chē (我没有车)",
          "Wǒ bù yǒu chē (我不有车)",
          "Wǒ bú shì chē",
          "Chē bù wǒ yǒu"
        ],
        ans: 0,
        why: "Kata kerja 有 (yǒu = punya/ada) memiliki bentuk negasi khusus yaitu 没有 (méiyǒu). Mengatakan 'bù yǒu' adalah kesalahan tata bahasa yang sering dilakukan pemula."
      }
    },
    {
      id: 'zh-05',
      num: '05',
      title: 'Jam, Tanggal & Pola Waktu Kalimat',
      level: 'Menengah',
      intro: 'Menyusun urutan waktu secara tepat: dari unit terbesar ke terkecil dan letak keterangan waktu dalam kalimat.',
      body: `
        <h4>⏰ Rumus Piramida Waktu Tiongkok (Besar → Kecil)</h4>
        <p>Dalam budaya berpikir Mandarin, urutan informasi selalu bergerak dari <b>lingkup paling besar menuju lingkup paling kecil</b>:
        <br><b>Tahun (年 nián) → Bulan (月 yuè) → Tanggal (号/日 hào/rì) → Jam (点 diǎn) → Menit (分 fēn)</b>.</p>
        <p><i>Contoh:</i> 2026年9月3日 晚上8点 (Tahun 2026, September, tanggal 3, malam hari, jam 8).</p>

        <h4>🗓️ Nama-Nama Hari yang Super Gampang</h4>
        <p>Di bahasa Mandarin, Anda tidak perlu menghafal nama hari aneh-aneh. Cukup gabungkan kata <b>星期 (Xīngqī = Minggu/Pekan) + Angka 1 sampai 6</b>:
        <ul>
          <li>Senin = 星期一 (Xīngqī yī)</li>
          <li>Selasa = 星期二 (Xīngqī èr)</li>
          <li>Rabu = 星期三 (Xīngqī sān)</li>
          <li>Kamis = 星期四 (Xīngqī sì)</li>
          <li>Jumat = 星期五 (Xīngqī wǔ)</li>
          <li>Sabtu = 星期六 (Xīngqī liù)</li>
          <li><b>Minggu (Hari Ahad):</b> 星期天 (Xīngqī tiān) atau 星期日 (Xīngqī rì). <i>Bukan 星期七!</i></li>
        </ul>
        </p>

        <h4>⚠️ Aturan Emas Tata Bahasa: Letak Waktu dalam Kalimat</h4>
        <div class="tip-box">
          <span class="tip-box-icon">⭐</span>
          <div><b>Rumus Mutlak:</b> Dalam bahasa Indonesia kita bisa bilang <i>"Saya makan jam 7"</i> (waktu di belakang). Di bahasa Mandarin, waktu <b>WAJIB DILETAKKAN SEBELUM KATA KERJA</b>!
          <br><b>Subjek + WAKTU + Kata Kerja + Objek</b>
          <br>Contoh: 我 <b>晚上七点</b> 吃饭。(Wǒ wǎnshang qī diǎn chī fàn = Saya jam 7 malam makan).</div>
        </div>
      `,
      quiz: {
        q: "Manakah susunan kalimat bahasa Mandarin yang benar untuk 'Supriyanto besok pergi ke kantor'?",
        opts: [
          "Sūpǔyángtuō míngtiān qù gōngsī (苏普扬托明天去公司)",
          "Sūpǔyángtuō qù gōngsī míngtiān",
          "Qù gōngsī Sūpǔyángtuō míngtiān",
          "Míngtiān qù Sūpǔyángtuō gōngsī"
        ],
        ans: 0,
        why: "Keterangan waktu (míngtiān = besok) wajib berada sebelum kata kerja (qù = pergi), baik langsung setelah subjek (Sūpǔyángtuō míngtiān qù...) atau di awal kalimat."
      }
    },
    {
      id: 'zh-06',
      num: '06',
      title: 'Restoran, Kafe & Rasa Makanan',
      level: 'Menengah',
      intro: 'Trik memesan hidangan favorit, memilih tingkat kepedasan, memanggil pelayan, dan meminta bon pembayaran.',
      body: `
        <h4>🍜 Jurus Bertahan Hidup di Restoran Tiongkok</h4>
        <p>Saat Supriyanto melangkah masuk ke restoran lokal, berikut kalimat sakti yang langsung membuat pelayan mengerti kebutuhan Anda:</p>

        <table class="zh-table">
          <thead><tr><th>Kalimat Mandarin</th><th>Pinyin</th><th>Arti</th><th>Situasi</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">服务员！</span></td><td><span class="zh-pinyin">Fúwùyuán!</span></td><td>Pelayan! / Mas! Mbak!</td><td>Memanggil staf restoran dengan sopan</td></tr>
            <tr><td><span class="zh-char">我要这个。</span></td><td><span class="zh-pinyin">Wǒ yào zhège.</span></td><td>Saya mau yang ini.</td><td>Sambil menunjuk foto di buku menu</td></tr>
            <tr><td><span class="zh-char">不要辣 / 不辣。</span></td><td><span class="zh-pinyin">Bú yào là / Bù là.</span></td><td>Jangan pedas / Tidak pedas.</td><td>Sangat penting bagi yang tidak kuat cabe Sichuan</td></tr>
            <tr><td><span class="zh-char">微辣。</span></td><td><span class="zh-pinyin">Wēi là.</span></td><td>Pedas sedikit saja.</td><td>Sensasi pedas tipis ramah lidah</td></tr>
            <tr><td><span class="zh-char">请给我一杯水。</span></td><td><span class="zh-pinyin">Qǐng gěi wǒ yì bēi shuǐ.</span></td><td>Tolong beri saya segelas air.</td><td>Meminta air minum</td></tr>
            <tr><td><span class="zh-char">买单！/ 结账！</span></td><td><span class="zh-pinyin">Mǎidān! / Jiézhàng!</span></td><td>Minta bon! / Bayar!</td><td>Selesai makan ingin membayar tagihan</td></tr>
          </tbody>
        </table>

        <h4>🥤 Minuman & Kosakata Rasa</h4>
        <ul>
          <li><b>Teh:</b> 茶 (Chá), Es Teh: 冰茶 (Bīng chá), Teh Susu / Boba: 奶茶 (Nǎichá).</li>
          <li><b>Kopi:</b> 咖啡 (Kāfēi), Kopi Dingin: 冰咖啡 (Bīng kāfēi).</li>
          <li><b>4 Rasa Dasar:</b> Manis = 甜 (Tián), Asin = 咸 (Xián), Asam = 酸 (Suān), Pedas = 辣 (Là).</li>
          <li><b>Enak:</b> Makanan enak = 好吃 (Hǎochī), Minuman enak = 好喝 (Hǎohē).</li>
        </ul>
      `,
      quiz: {
        q: "Kalimat sakti apa yang harus diucapkan Supriyanto di restoran jika tidak bisa makan pedas?",
        opts: [
          "Bú yào là (不要辣)",
          "Hěn là",
          "Duō fàng là",
          "Wǒ xǐhuan là"
        ],
        ans: 0,
        why: "Bú yào là (不要辣) berarti 'tidak mau pedas' (bú yào = tidak mau, là = pedas)."
      }
    },
    {
      id: 'zh-07',
      num: '07',
      title: 'Belanja & Tawar-Menawar di Pasar',
      level: 'Menengah',
      intro: 'Seni berbelanja, menanyakan harga, jurus tawar-menawar ramah tapi ampuh, dan metode pembayaran digital.',
      body: `
        <h4>🛍️ Percakapan Tawar-Menawar Supriyanto</h4>
        <p>Di pasar cinderamata atau toko pakaian, Anda bisa menghemat banyak uang dengan 3 jurus percakapan berikut:</p>

        <div class="code-block"><span class="cm">// Percakapan Belanja Baju</span>
Supriyanto: 老板，这件衣服多少钱？
            <span class="st">(Lǎobǎn, zhè jiàn yīfu duōshǎo qián? - Bos, baju ini berapa harganya?)</span>

Penjual:    两百块。
            <span class="st">(Liǎng bǎi kuài. - 200 Yuan / Kuai.)</span>

Supriyanto: 太贵了！能便宜一点吗？
            <span class="st">(Tài guì le! Néng piányi yīdiǎn ma? - Kemahalan! Bisa lebih murah sedikit?)</span>

Penjual:    一百八，怎么样？
            <span class="st">(Yī bǎi bā, zěnmeyàng? - 180, bagaimana?)</span>

Supriyanto: 一百五，可以吗？可以我就买。
            <span class="st">(Yī bǎi wǔ, kěyǐ ma? Kěyǐ wǒ jiù mǎi. - 150, boleh? Kalau boleh saya beli.)</span>

Penjual:    好成交！微信还是支付宝？
            <span class="st">(Hǎo chéngjiāo! Wēixìn háishi Zhīfùbǎo? - Oke sepakat! Bayar pakai WeChat atau Alipay?)</span></div>

        <h4>📱 Kata Kunci Pembayaran Modern</h4>
        <table class="zh-table">
          <thead><tr><th>Istilah</th><th>Pinyin</th><th>Arti & Catatan</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">块 / 元</span></td><td><span class="zh-pinyin">Kuài / Yuán</span></td><td>Satuan mata uang (Kuài untuk lisan, Yuán untuk tulisan resmi)</td></tr>
            <tr><td><span class="zh-char">微信支付</span></td><td><span class="zh-pinyin">Wēixìn zhīfù</span></td><td>WeChat Pay (Scan barcode QR hijau)</td></tr>
            <tr><td><span class="zh-char">支付宝</span></td><td><span class="zh-pinyin">Zhīfùbǎo</span></td><td>Alipay (Scan barcode QR biru)</td></tr>
            <tr><td><span class="zh-char">我扫你</span></td><td><span class="zh-pinyin">Wǒ sǎo nǐ</span></td><td>Saya scan barcode Anda (sǎo = memindai QR code)</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Apa arti dari ungkapan tawar-menawar populer: 'Tài guì le! Néng piányi yīdiǎn ma?' (太贵了！能便宜一点吗？)?",
        opts: [
          "Kemahalan! Bisa lebih murah sedikit?",
          "Sangat murah! Saya mau beli sepuluh",
          "Barang ini warnanya tidak bagus",
          "Tolong bungkus pakai plastik hitam"
        ],
        ans: 0,
        why: "Tài guì le (太贵了) = Terlalu mahal / kemahalan! Néng piányi yīdiǎn ma? (能便宜一点吗？) = Bisakah lebih murah sedikit?"
      }
    },
    {
      id: 'zh-08',
      num: '08',
      title: 'Arah, Navigasi & Transportasi Kota',
      level: 'Menengah',
      intro: 'Menanyakan jalan saat tersesat, naik taksi, panduan naik kereta bawah tanah (MRT/Subway), dan penunjuk arah.',
      body: `
        <h4>🧭 4 Mata Angin & Arah Belok</h4>
        <table class="zh-table">
          <thead><tr><th>Arah / Gerakan</th><th>Hanzi</th><th>Pinyin</th><th>Contoh Penggunaan</th></tr></thead>
          <tbody>
            <tr><td>Depan</td><td><span class="zh-char">前</span></td><td><span class="zh-pinyin">Qián</span></td><td>向前走 (Xiàng qián zǒu - Jalan lurus ke depan)</td></tr>
            <tr><td>Belakang</td><td><span class="zh-char">后</span></td><td><span class="zh-pinyin">Hòu</span></td><td>在后面 (Zài hòumian - Di belakang)</td></tr>
            <tr><td>Kiri & Belok Kiri</td><td><span class="zh-char">左 / 左拐</span></td><td><span class="zh-pinyin">Zuǒ / Zuǒ guǎi</span></td><td>往左拐 (Wǎng zuǒ guǎi - Belok ke kiri)</td></tr>
            <tr><td>Kanan & Belok Kanan</td><td><span class="zh-char">右 / 右拐</span></td><td><span class="zh-pinyin">Yòu / Yòu guǎi</span></td><td>往右拐 (Wǎng yòu guǎi - Belok ke kanan)</td></tr>
            <tr><td>Lurus Terus</td><td><span class="zh-char">一直走</span></td><td><span class="zh-pinyin">Yìzhí zǒu</span></td><td>一直往前走 (Yìzhí wǎng qián zǒu - Lurus terus ke depan)</td></tr>
          </tbody>
        </table>

        <h4>🚕 Naik Taksi & Tanya Jalan dengan Sopan</h4>
        <p>Gunakan awalan <b>请问 (Qǐngwèn = Permisi numpang tanya)</b> sebelum bertanya arah:</p>
        <div class="code-block"><span class="cm">// Supriyanto di dalam Taksi</span>
Sopir:       去哪里？(Qù nǎlǐ? - Mau pergi ke mana?)
Supriyanto:  师傅，我去北京饭店。(Shīfu, wǒ qù Běijīng Fàndiàn. - Pak sopir, saya mau ke Hotel Beijing.)
Sopir:       好的。(Hǎo de. - Baik.)
Supriyanto:  请问，到那里要多长时间？(Qǐngwèn, dào nàlǐ yào duō cháng shíjiān? - Numpang tanya, sampai sana butuh berapa lama?)
Sopir:       大概二十分钟。(Dàgài èrshí fēnzhōng. - Sekitar 20 menit.)</div>

        <div class="tip-box">
          <span class="tip-box-icon">🚇</span>
          <div><b>Kosa Kata Transportasi Umum:</b> Kereta MRT / Subway = 地铁 (Dìtiě), Bus = 公交车 (Gōngjiāochē), Kereta Cepat = 高铁 (Gāotiě), Stasiun = 站 (Zhàn). Contoh: 地铁站在哪里？(Dìtiě zhàn zài nǎlǐ? = Stasiun MRT ada di mana?).</div>
        </div>
      `,
      quiz: {
        q: "Bagaimana cara memberi instruksi kepada sopir taksi untuk 'Belok ke kanan' dalam bahasa Mandarin?",
        opts: [
          "Wǎng yòu guǎi (往右拐)",
          "Wǎng zuǒ guǎi",
          "Yìzhí zǒu",
          "Tíng zài zhèlǐ"
        ],
        ans: 0,
        why: "Yòu (右) berarti kanan, guǎi (拐) berarti belok atau memutar. Sehingga wǎng yòu guǎi berarti berbelok ke arah kanan."
      }
    },
    {
      id: 'zh-09',
      num: '09',
      title: 'Rutinitas Harian & Jadwal Supriyanto',
      level: 'Menengah',
      intro: 'Menceritakan jadwal keseharian dari pagi hingga malam dengan kata sambung urutan waktu.',
      body: `
        <h4>☀️ Jadwal Sehari Penuh Supriyanto</h4>
        <p>Untuk menceritakan alur kegiatan sehari-hari, gunakan rumus urutan waktu: <b>先... 然后... (Xiān... ránhòu... = Pertama... lalu kemudian...)</b>.</p>

        <table class="zh-table">
          <thead><tr><th>Waktu</th><th>Kegiatan (Hanzi & Pinyin)</th><th>Arti</th></tr></thead>
          <tbody>
            <tr><td>07:00</td><td><span class="zh-char">起床</span> (<span class="zh-pinyin">Qǐchuáng</span>)</td><td>Bangun tidur</td></tr>
            <tr><td>07:30</td><td><span class="zh-char">吃早饭</span> (<span class="zh-pinyin">Chī zǎofàn</span>)</td><td>Sarapan pagi</td></tr>
            <tr><td>08:30</td><td><span class="zh-char">去上班</span> (<span class="zh-pinyin">Qù shàngbān</span>)</td><td>Berangkat kerja ke kantor</td></tr>
            <tr><td>12:00</td><td><span class="zh-char">吃午饭</span> (<span class="zh-pinyin">Chī wǔfàn</span>)</td><td>Makan siang</td></tr>
            <tr><td>18:00</td><td><span class="zh-char">下班回家</span> (<span class="zh-pinyin">Xiàbān huíjiā</span>)</td><td>Pulang kerja ke rumah</td></tr>
            <tr><td>19:30</td><td><span class="zh-char">吃晚饭 & 学习</span> (<span class="zh-pinyin">Chī wǎnfàn & xuéxí</span>)</td><td>Makan malam & belajar</td></tr>
            <tr><td>23:00</td><td><span class="zh-char">睡觉</span> (<span class="zh-pinyin">Shuìjiào</span>)</td><td>Tidur malam</td></tr>
          </tbody>
        </table>

        <h4>📖 Cerita Keseharian Supriyanto</h4>
        <div class="code-block"><span class="cm">// Paragraf Bercerita Supriyanto</span>
我每天早上七点起床，先洗澡，然后吃早饭。
<span class="st">(Wǒ měitiān zǎoshang qī diǎn qǐchuáng, xiān xǐzǎo, ránhòu chī zǎofàn. - Saya setiap hari bangun jam 7 pagi, mandi dulu, lalu sarapan.)</span>

八点半我去公司上班。我是软件工程师，平时工作很忙。
<span class="st">(Bā diǎn bàn wǒ qù gōngsī shàngbān. Wǒ shì ruǎnjiàn gōngchéngshī, píngshí gōngzuò hěn máng. - Jam 8.30 saya berangkat kerja ke kantor. Saya software engineer, biasanya kerjaan sangat sibuk.)</span>

晚上六点下班回家，我喜欢一边喝茶一边看书。
<span class="st">(Wǎnshang liù diǎn xiàbān huíjiā, wǒ xǐhuan yìbiān hē chá yìbiān kàn shū. - Jam 6 sore pulang kerja, saya suka sambil minum teh sambil membaca buku.)</span></div>
      `,
      quiz: {
        q: "Kata sambung apa yang digunakan untuk menyatakan 'Pertama... lalu kemudian...' dalam bahasa Mandarin?",
        opts: [
          "Xiān... ránhòu... (先... 然后...)",
          "Bùdàn... érqiě...",
          "Yīnwèi... suǒyǐ...",
          "Suīrán... dànshì..."
        ],
        ans: 0,
        why: "Pasangan kata sambung xiān... ránhòu... (先... 然后...) digunakan secara luas untuk menceritakan urutan kronologis kejadian (pertama... lalu...)."
      }
    },
    {
      id: 'zh-10',
      num: '10',
      title: 'Mengungkapkan Keinginan & Kemampuan',
      level: 'Menengah',
      intro: 'Membongkar perbedaan 4 kata bantu paling penting: 想 (ingin), 要 (mau), 会 (bisa belajar), dan 能 (mampu).',
      body: `
        <h4>🧠 Jangan Tertukar: 想 vs 要 vs 会 vs 能</h4>
        <p>Empat kata ini sering membingungkan orang Indonesia karena sama-sama sering diterjemahkan sebagai <i>'mau'</i> atau <i>'bisa'</i>. Berikut perbedaan tegasnya:</p>

        <table class="zh-table">
          <thead><tr><th>Kata</th><th>Pinyin</th><th>Nuansa & Kapan Digunakan</th><th>Contoh Kalimat</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="zh-char">想</span></td>
              <td><span class="zh-pinyin">Xiǎng</span></td>
              <td><b>Kepingin / Berharap di angan-angan</b> (belum tentu segera dilakukan). Juga berarti rindu/kangen.</td>
              <td>我想去中国旅游。(Wǒ xiǎng qù Zhōngguó lǚyóu = Saya kepingin liburan ke Tiongkok).</td>
            </tr>
            <tr>
              <td><span class="zh-char">要</span></td>
              <td><span class="zh-pinyin">Yào</span></td>
              <td><b>Mau / Bertekad kuat / Wajib</b> (pasti dilakukan segera atau menuntut sesuatu).</td>
              <td>我要买这台电脑。(Wǒ yào mǎi zhè tái diànnǎo = Saya mau beli laptop ini!).</td>
            </tr>
            <tr>
              <td><span class="zh-char">会</span></td>
              <td><span class="zh-pinyin">Huì</span></td>
              <td><b>Bisa karena telah dipelajari / skill</b> (bisa berenang, bahasa Mandarin, koding).</td>
              <td>苏普扬托会说中文。(Sūpǔyángtuō huì shuō Zhōngwén = Supriyanto bisa bicara bahasa Mandarin).</td>
            </tr>
            <tr>
              <td><span class="zh-char">能</span></td>
              <td><span class="zh-pinyin">Néng</span></td>
              <td><b>Mampu / Bisa secara fisik / Izin situasi</b>.</td>
              <td>今天我感冒了，不能上班。(Jīntiān wǒ gǎnmào le, bù néng shàngbān = Hari ini saya flu, tidak mampu kerja).</td>
            </tr>
          </tbody>
        </table>

        <div class="tip-box">
          <span class="tip-box-icon">🎯</span>
          <div><b>Trik Uji Logika:</b> Bisakah Supriyanto berenang? → Gunakan <b>会 (Huì)</b> karena berenang butuh belajar. Tapi jika kolam renangnya sedang kotor dan dilarang masuk → Gunakan <b>不能 (Bù néng)</b> karena situasinya tidak mengizinkan!</div>
        </div>
      `,
      quiz: {
        q: "Kata apa yang tepat untuk mengisi kalimat kemampuan skill Supriyanto: 'Sūpǔyángtuō ___ kāi chē' (Supriyanto bisa menyetir mobil karena sudah lulus kursus)?",
        opts: [
          "Huì (会)",
          "Xiǎng (想)",
          "Néng (能)",
          "Yào (要)"
        ],
        ans: 0,
        why: "Kata 会 (huì) digunakan khusus untuk kemampuan atau keahlian yang didapatkan dari proses belajar atau latihan (seperti menyetir, memasak, bahasa asing)."
      }
    },
    {
      id: 'zh-11',
      num: '11',
      title: 'Janjian, Menelpon & Chatting WeChat',
      level: 'Mahir',
      intro: 'Etika bertukar kontak WeChat (Weixin), etika menelpon, membuat janji temu, dan mengirim lokasi.',
      body: `
        <h4>💬 Jurus Menambah Teman WeChat: 加个微信</h4>
        <p>Di Tiongkok dan diaspora, kartu nama kertas sudah digantikan oleh akun <b>WeChat (微信 Wēixìn)</b>. Kalimat paling ampuh untuk menjalin pertemanan adalah:</p>
        <div class="code-block"><span class="cm">// Menambah Kontak Baru</span>
Supriyanto: 我们加个微信吧！方便以后联系。
            <span class="st">(Wǒmen jiā gè Wēixìn ba! Fāngbiàn yǐhòu liánxì. - Ayo kita berteman di WeChat! Biar gampang saling kontak.)</span>

Teman:      好啊，我扫你还是你扫我？
            <span class="st">(Hǎo a, wǒ sǎo nǐ háishi nǐ sǎo wǒ? - Boleh, saya yang scan kamu atau kamu yang scan saya?)</span>

Supriyanto: 我扫你吧，这是我的二维码。
            <span class="st">(Wǒ sǎo nǐ ba, zhè shì wǒ de èrwéimǎ. - Saya scan barcode kamu saja, ini kode QR saya.)</span></div>

        <h4>📞 Etika Berbicara di Telepon</h4>
        <table class="zh-table">
          <thead><tr><th>Kalimat Telepon</th><th>Pinyin</th><th>Arti</th><th>Keterangan</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">喂，你好！</span></td><td><span class="zh-pinyin">Wèi, nǐ hǎo!</span></td><td>Halo! (Wèi bernada ke-2 atau ke-4)</td><td>Kata pembuka saat mengangkat telepon</td></tr>
            <tr><td><span class="zh-char">请问，张经理在吗？</span></td><td><span class="zh-pinyin">Qǐngwèn, Zhāng jīnglǐ zài ma?</span></td><td>Bolehkah numpang tanya, Manajer Zhang ada?</td><td>Mencari seseorang di telepon</td></tr>
            <tr><td><span class="zh-char">他在开会，请稍等。</span></td><td><span class="zh-pinyin">Tā zài kāihuì, qǐng shāoděng.</span></td><td>Beliau sedang rapat, tolong tunggu sebentar.</td><td>Situasi sedang sibuk</td></tr>
            <tr><td><span class="zh-char">我们明天下午三点见。</span></td><td><span class="zh-pinyin">Wǒmen míngtiān xiàwǔ sān diǎn jiàn.</span></td><td>Kita besok jam 3 sore ketemu ya.</td><td>Menentukan waktu janjian</td></tr>
            <tr><td><span class="zh-char">不见不散！</span></td><td><span class="zh-pinyin">Bú jiàn bú sàn!</span></td><td>Jangan pulang sebelum kita ketemu! (Janji pasti datang)</td><td>Ungkapan persahabatan populer saat janjian</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Apa kata pertama yang diucapkan oleh orang penutur Mandarin saat mengangkat telepon?",
        opts: [
          "Wèi! (喂！)",
          "Zàijiàn!",
          "Xièxie!",
          "Duìbuqǐ!"
        ],
        ans: 0,
        why: "Karakter 喂 (wèi) adalah kata seru standar universal untuk membuka percakapan telepon ('Halo!') dalam bahasa Mandarin."
      }
    },
    {
      id: 'zh-12',
      num: '12',
      title: 'Cuaca, Musim & Obrolan Santai (Small Talk)',
      level: 'Mahir',
      intro: 'Topik pencair suasana paling alami: membahas cuaca, pergantian musim, dan hobi santai.',
      body: `
        <h4>🌤️ Kosakata Cuaca Sehari-hari</h4>
        <p>Ketika lift canggung atau sedang menunggu pesanan kopi bersama rekan kerja, obrolan cuaca adalah pemecah keheningan paling aman:</p>

        <table class="zh-table">
          <thead><tr><th>Cuaca / Kondisi</th><th>Hanzi</th><th>Pinyin</th><th>Contoh Percakapan</th></tr></thead>
          <tbody>
            <tr><td>Cerah / Bagus</td><td><span class="zh-char">晴天 / 好天气</span></td><td><span class="zh-pinyin">Qíngtiān / Hǎo tiānqì</span></td><td>今天天气真好！(Hari ini cuacanya bagus sekali!)</td></tr>
            <tr><td>Hujan</td><td><span class="zh-char">下雨</span></td><td><span class="zh-pinyin">Xiàyǔ</span></td><td>外面下大雨了。(Di luar sedang hujan lebat).</td></tr>
            <tr><td>Sangat Panas</td><td><span class="zh-char">很热</span></td><td><span class="zh-pinyin">Hěn rè</span></td><td>今天太热了，去吃冰淇淋吧。(Panas banget, ayo makan es krim).</td></tr>
            <tr><td>Sangat Dingin</td><td><span class="zh-char">很冷</span></td><td><span class="zh-pinyin">Hěn lěng</span></td><td>北京的冬天非常冷。(Musim dingin Beijing sangat dingin).</td></tr>
          </tbody>
        </table>

        <h4>🍂 4 Musim (Chūn, Xià, Qiū, Dōng)</h4>
        <ul>
          <li><b>Musim Semi:</b> 春天 (Chūntiān) — Udara sejuk, bunga bermekaran.</li>
          <li><b>Musim Panas:</b> 夏天 (Xiàtiān) — Terik matahari dan semangka segar.</li>
          <li><b>Musim Gugur:</b> 秋天 (Qiūtiān) — Daun menguning keemasan, suhu paling nyaman.</li>
          <li><b>Musim Dingin:</b> 冬天 (Dōngtiān) — Salju turun (下雪 xiàxuě).</li>
        </ul>
      `,
      quiz: {
        q: "Bagaimana cara Supriyanto mengatakan 'Hari ini cuaca sangat bagus' dalam bahasa Mandarin?",
        opts: [
          "Jīntiān tiānqì hěn hǎo (今天天气很好)",
          "Jīntiān hěn rè tiānqì",
          "Tiānqì bù hǎo jīntiān",
          "Xiàyǔ jīntiān hěn hǎo"
        ],
        ans: 0,
        why: "Jīntiān (hari ini) + tiānqì (cuaca) + hěn hǎo (sangat bagus) adalah susunan alami yang paling sering digunakan penutur asli."
      }
    },
    {
      id: 'zh-13',
      num: '13',
      title: 'Kesehatan, Apotek & Situasi Darurat',
      level: 'Mahir',
      intro: 'Menyampaikan keluhan rasa sakit, membeli obat di apotek, dan meminta pertolongan darurat medis.',
      body: `
        <h4>🏥 Menyampaikan Keluhan Tubuh di Rumah Sakit</h4>
        <p>Pola dasar menyampaikan sakit adalah: <b>我 + [Bagian Tubuh] + 疼 (Téng = Sakit/Nyeri)</b>:</p>

        <table class="zh-table">
          <thead><tr><th>Keluhan Sakit</th><th>Hanzi</th><th>Pinyin</th><th>Arti</th></tr></thead>
          <tbody>
            <tr><td>Sakit Kepala</td><td><span class="zh-char">头疼</span></td><td><span class="zh-pinyin">Tóu téng</span></td><td>Kepala pusing / nyeri</td></tr>
            <tr><td>Sakit Perut</td><td><span class="zh-char">肚子疼</span></td><td><span class="zh-pinyin">Dùzi téng</span></td><td>Perut mules / melilit</td></tr>
            <tr><td>Demam Panas</td><td><span class="zh-char">发烧</span></td><td><span class="zh-pinyin">Fāshāo</span></td><td>Suhu tubuh tinggi</td></tr>
            <tr><td>Masuk Angin / Flu</td><td><span class="zh-char">感冒</span></td><td><span class="zh-pinyin">Gǎnmào</span></td><td>Bersin, hidung mampet</td></tr>
            <tr><td>Batuk</td><td><span class="zh-char">咳嗽</span></td><td><span class="zh-pinyin">Késou</span></td><td>Batuk kering / berdahak</td></tr>
          </tbody>
        </table>

        <h4>💊 Dialog Supriyanto di Apotek (药店 Yàodiàn)</h4>
        <div class="code-block"><span class="cm">// Membeli Obat Flu & Pusing</span>
Supriyanto: 您好，我头疼，有点发烧。有退烧药吗？
            <span class="st">(Nín hǎo, wǒ tóu téng, yǒudiǎn fāshāo. Yǒu tuìshāoyào ma? - Halo, kepala saya sakit dan agak demam. Ada obat penurun panas?)</span>

Apoteker:   有的。这个药每天吃三次，饭后吃，一次一片。
            <span class="st">(Yǒu de. Zhège yào měitiān chī sān cì, fànhòu chī, yí cì yí piàn. - Ada. Obat ini diminum 3 kali sehari, sesudah makan, sekali minum 1 tablet.)</span>

Supriyanto: 好的，多喝热水，谢谢！
            <span class="st">(Hǎo de, duō hē rè shuǐ, xièxie! - Baik, banyak minum air hangat, terima kasih!)</span></div>

        <div class="tip-box">
          <span class="tip-box-icon">🚨</span>
          <div><b>Nomor Darurat di Tiongkok:</b> Polisi = <b>110</b>, Pemadam Kebakaran = <b>119</b>, Ambulans Rumah Sakit = <b>120</b>. Kata teriak darurat minta tolong: <b>救命！(Jiùmìng! = Tolong saya!)</b>.</div>
        </div>
      `,
      quiz: {
        q: "Jika Supriyanto mengalami sakit kepala berdenyut, kata apa yang harus disampaikan ke dokter?",
        opts: [
          "Wǒ tóu téng (我头疼)",
          "Wǒ dùzi téng",
          "Wǒ jiǎo téng",
          "Wǒ hěn gāoxìng"
        ],
        ans: 0,
        why: "Tóu (头) berarti kepala, téng (疼) berarti sakit/nyeri. Wǒ tóu téng artinya 'Saya sakit kepala'."
      }
    },
    {
      id: 'zh-14',
      num: '14',
      title: 'Mengekspresikan Opini & Perasaan',
      level: 'Mahir',
      intro: 'Menyampaikan sudut pandang pribadi, persetujuan, keraguan, dan nuansa emosional dalam diskusi.',
      body: `
        <h4>💬 Ungkapan Opini: 我觉得 (Menurut Saya)</h4>
        <p>Untuk terdengar lebih bijak dan berbobot dalam percakapan dewasa, gunakan frasa pembuka opini berikut:</p>

        <table class="zh-table">
          <thead><tr><th>Frasa Opini</th><th>Pinyin</th><th>Arti</th><th>Contoh Kalimat</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">我觉得...</span></td><td><span class="zh-pinyin">Wǒ juéde...</span></td><td>Menurut saya / Saya merasa...</td><td>我觉得这个方案很好。(Menurut saya rencana ini sangat bagus).</td></tr>
            <tr><td><span class="zh-char">我同意。</span></td><td><span class="zh-pinyin">Wǒ tóngyì.</span></td><td>Saya setuju.</td><td>完全同意！(Setuju total!).</td></tr>
            <tr><td><span class="zh-char">我不这么认为。</span></td><td><span class="zh-pinyin">Wǒ bù zhème rènwéi.</span></td><td>Saya tidak berpendapat demikian.</td><td>Menolak pendapat orang lain secara sopan.</td></tr>
            <tr><td><span class="zh-char">依我看...</span></td><td><span class="zh-pinyin">Yī wǒ kàn...</span></td><td>Dari sudut pandang saya...</td><td>Cocok untuk meeting resmi.</td></tr>
          </tbody>
        </table>

        <h4>🎭 Mengungkapkan Perasaan Hati</h4>
        <ul>
          <li><b>Senang / Gembira:</b> 开心 (Kāixīn) / 高兴 (Gāoxìng). <i>Contoh: 今天认识大家我很开心！</i></li>
          <li><b>Khawatir / Cemas:</b> 担心 (Dānxīn). <i>Contoh: 别担心，没问题！(Jangan cemas, aman!).</i></li>
          <li><b>Kaget / Heran:</b> 惊讶 (Jīngyà) / 没想到 (Méi xiǎngdào - Tidak disangka-sangka).</li>
          <li><b>Lelah / Capek:</b> 累 (Lèi). <i>Contoh: 今天工作太累了。(Hari ini kerjaan capek banget).</i></li>
        </ul>
      `,
      quiz: {
        q: "Frasa apa yang paling lazim digunakan untuk memulai penyampaian pendapat pribadi ('Menurut saya...')?",
        opts: [
          "Wǒ juéde... (我觉得...)",
          "Wǒ bú yào...",
          "Wǒ zàijiàn...",
          "Wǒ méiyǒu..."
        ],
        ans: 0,
        why: "Karakter 觉得 (juéde) berarti merasa atau berpendapat. 'Wǒ juéde...' adalah cara paling alami dan sopan untuk menyampaikan opini pribadi."
      }
    },
    {
      id: 'zh-15',
      num: '15',
      title: 'Dunia Kerja & Komunikasi Kantor Supriyanto',
      level: 'Expert',
      intro: 'Kosakata profesional untuk rapat (meeting), kolaborasi proyek teknologi, email kantor, dan negosiasi bisnis.',
      body: `
        <h4>💼 Kosakata Kantor & IT Modern</h4>
        <p>Bagi profesional yang bekerja dengan rekan atau perusahaan internasional, istilah berikut wajib dikuasai:</p>

        <table class="zh-table">
          <thead><tr><th>Istilah Kantor</th><th>Pinyin</th><th>Arti</th><th>Penggunaan Lapangan</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">开会</span></td><td><span class="zh-pinyin">Kāihuì</span></td><td>Rapat / Meeting</td><td>下午两点我们要开会。(Jam 2 siang kita rapat).</td></tr>
            <tr><td><span class="zh-char">发邮件</span></td><td><span class="zh-pinyin">Fā yóujiàn</span></td><td>Kirim email</td><td>我把报告发你邮件了。(Laporannya sudah saya email ke kamu).</td></tr>
            <tr><td><span class="zh-char">项目进度</span></td><td><span class="zh-pinyin">Xiàngmù jìndù</span></td><td>Progres proyek</td><td>讨论项目进度。(Mendiskusikan progres proyek).</td></tr>
            <tr><td><span class="zh-char">改代码 / Bug</span></td><td><span class="zh-pinyin">Gǎi dàimǎ / Bug</span></td><td>Memperbaiki kode</td><td>苏普扬托正在改代码。(Supriyanto sedang memperbaiki kode program).</td></tr>
            <tr><td><span class="zh-char">加班</span></td><td><span class="zh-pinyin">Jiābān</span></td><td>Lembur kerja</td><td>今天不需要加班！(Hari ini tidak perlu lembur!).</td></tr>
            <tr><td><span class="zh-char">合作愉快</span></td><td><span class="zh-pinyin">Hézuò yúkuài</span></td><td>Senang bekerja sama dengan Anda</td><td>Ucapan resmi penutup kesepakatan bisnis</td></tr>
          </tbody>
        </table>

        <h4>🤝 Dialog Supriyanto dalam Rapat Proyek</h4>
        <div class="code-block"><span class="cm">// Meeting Evaluasi Fitur Baru</span>
Manajer:   苏普扬托，新功能测试得怎么样了？
           <span class="st">(Sūpǔyángtuō, xīn gōngnéng cèshì de zěnmeyàng le? - Supriyanto, pengujian fitur baru bagaimana hasilnya?)</span>

Supriyanto: 报告经理，自动化测试全部通过了，系统很稳定！
           <span class="st">(Bàogào jīnglǐ, zìdònghuà cèshì quánbù tōngguò le, xìtǒng hěn wěndìng! - Lapor Manajer, automated test semuanya lolos, sistem sangat stabil!)</span>

Manajer:   太棒了！大家辛苦了！
           <span class="st">(Tài bàng le! Dàjiā xīnkǔ le! - Luar biasa! Terima kasih atas kerja keras rekan-rekan semua!)</span></div>
      `,
      quiz: {
        q: "Ungkapan profesional apa yang diucapkan saat menutup kesepakatan kerja sama bisnis dengan rekan kerja ('Senang bisa bekerja sama!')?",
        opts: [
          "Hézuò yúkuài! (合作愉快！)",
          "Bú kèqi!",
          "Duìbuqǐ!",
          "Tài guì le!"
        ],
        ans: 0,
        why: "Hézuò (合作 = kerja sama) dan Yúkuài (愉快 = bahagia/menyenangkan). 'Hézuò yúkuài!' adalah salam penutup kemitraan bisnis yang sangat terhormat."
      }
    },
    {
      id: 'zh-16',
      num: '16',
      title: 'Rahasia Menghafal Hanzi & Metode Fasih Otodidak',
      level: 'Expert',
      intro: 'Membongkar rahasia 10 radikal piktogram gambar, teknik audio Shadowing, dan peta jalan menuju sertifikasi HSK.',
      body: `
        <h4>🧩 Rahasia Hanzi: Karakter Mandarin Adalah Kumpulan Balok Lego!</h4>
        <p>Banyak orang menyerah belajar karakter Mandarin (Hanzi) karena mengira harus menghafal ribuan coretan acak. <b>Itu cara yang keliru!</b></p>
        <p>Faktanya, 90% karakter Mandarin tersusun dari <b>Radikal (Akar Gambar)</b> yang memiliki arti konsisten:</p>

        <table class="zh-table">
          <thead><tr><th>Radikal</th><th>Nama & Makna Asli</th><th>Contoh Hanzi</th><th>Arti yang Berkaitan</th></tr></thead>
          <tbody>
            <tr><td><span class="zh-char">亻</span></td><td>Orang (Rén zì páng)</td><td><span class="zh-char">你, 他, 们</span></td><td>Semua berhubungan dengan manusia</td></tr>
            <tr><td><span class="zh-char">氵</span></td><td>Tiga Tetes Air (Sān diǎn shuǐ)</td><td><span class="zh-char">海, 河, 洗</span></td><td>Semua berhubungan dengan air (laut, sungai, cuci)</td></tr>
            <tr><td><span class="zh-char">口</span></td><td>Mulut (Kǒu)</td><td><span class="zh-char">吃, 喝, 叫</span></td><td>Semua kegiatan mulut (makan, minum, memanggil)</td></tr>
            <tr><td><span class="zh-char">木</span></td><td>Pohon / Kayu (Mù)</td><td><span class="zh-char">林, 森, 桌</span></td><td>Hutan, rimba, meja kayu</td></tr>
            <tr><td><span class="zh-char">忄</span></td><td>Hati / Perasaan (Shù xīn páng)</td><td><span class="zh-char">快, 慢, 怕</span></td><td>Gembira, lambat, takut (perasaan emosi)</td></tr>
            <tr><td><span class="zh-char">饣</span></td><td>Makanan (Shí zì páng)</td><td><span class="zh-char">饭, 饮, 饱</span></td><td>Nasi, minuman, kenyang</td></tr>
            <tr><td><span class="zh-char">讠</span></td><td>Kata / Ucapan (Yán zì páng)</td><td><span class="zh-char">说, 话, 语</span></td><td>Berbicara, obrolan, bahasa</td></tr>
            <tr><td><span class="zh-char">火 / 灬</span></td><td>Api (Huǒ)</td><td><span class="zh-char">热, 烧, 烤</span></td><td>Panas, demam/bakar, memanggang</td></tr>
          </tbody>
        </table>

        <h4>🎙️ Teknik Belajar Mandiri Paling Ampuh: Shadowing</h4>
        <p>Untuk mencapai kefasihan alami berbicara (*Conversational Fluency*):
        <ol>
          <li><b>Metode Shadowing:</b> Dengarkan audio percakapan penutur asli (podcast/drama Mandarin), tirukan intonasi nada dan gerak mulutnya secara langsung dengan jeda 0.5 detik seperti bayangan (*shadow*).</li>
          <li><b>Jangan Takut Salah Nada:</b> Konteks kalimat akan membantu lawan bicara mengerti maksud Anda. Semakin sering Anda berbicara tanpa rasa minder, semakin tajam refleks lidah Anda!</li>
          <li><b>Peta Jalan HSK:</b>
            <br>• <b>HSK 1:</b> 150 kata (Fondasi survival).
            <br>• <b>HSK 2:</b> 300 kata (Conversational harian — *seluruh isi modul ini!*).
            <br>• <b>HSK 3–4:</b> 600–1200 kata (Lancar bekerja dan tinggal mandiri di Tiongkok).
          </li>
        </ol>
        </p>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat Supriyanto!</b> Anda telah menuntaskan seluruh kurikulum Mandarin 16 Modul Conversational. Uji kemampuan pemahaman Anda dengan mengikuti <b>Quiz Mandarin 🇨🇳</b>! 加油！(Jiāyóu! Semangat!).</div>
        </div>
      `,
      quiz: {
        q: "Jika sebuah karakter Hanzi memiliki radikal '氵' (tiga tetes air), kemungkinan besar arti karakter tersebut berkaitan dengan apa?",
        opts: [
          "Benda cair, air, sungai, atau aktivitas mencuci",
          "Hewan berkaki empat",
          "Logam emas dan perak",
          "Kendaraan bermotor"
        ],
        ans: 0,
        why: "Radikal 氵 (sān diǎn shuǐ / tiga tetes air) adalah piktogram air yang selalu menjadi pembentuk karakter-karakter bertema cairan seperti hǎi (laut), hé (sungai), dan xǐ (mencuci)."
      }
    }

  ]
};

