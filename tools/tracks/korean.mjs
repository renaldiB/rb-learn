export const koreanTrack = {
  id: 'korean',
  title: 'Bahasa Korea 🇰🇷',
  subtitle: 'Hangeul, Salam, Angka, Partikel Tata Bahasa & Percakapan Praktis Sehari-hari',
  accent: 'sky',
  category: 'lang',
  lessons: [
    {
      id: 'ko-01',
      num: '01',
      title: 'Abjad Hangeul I: 10 Vokal & 14 Konsonan Dasar',
      level: 'Pemula 0',
      intro: 'Mengenal sistem abjad paling logis dan ilmiah di dunia: huruf Hangeul ciptaan Raja Sejong yang bisa dibaca dalam hitungan jam.',
      body: `
        <h4>👑 Mengapa Hangeul Sangat Mudah Dipelajari?</h4>
        <p>Sebelum abad ke-15, rakyat Korea kesulitan membaca karakter Hanja yang rumit. Raja Sejong yang Agung menciptakan <b>Hangeul (한글)</b> dengan filosofi bentuk organ bicara manusia (bibir, lidah, dan langit-langit mulut). Hangeul bukan huruf gambar abstrak, melainkan huruf fonetik alfabetik yang sangat teratur!</p>

        <h4>🗣️ 10 Vokal Tunggal Dasar</h4>
        <table class="zh-table">
          <thead><tr><th>Hangeul</th><th>Romanisasi</th><th>Analogi Bunyi Bahasa Indonesia</th></tr></thead>
          <tbody>
            <tr><td><span class="ko-char">ㅏ</span></td><td><span class="zh-pinyin">a</span></td><td>Seperti huruf "A" pada kata "Ayah"</td></tr>
            <tr><td><span class="ko-char">ㅑ</span></td><td><span class="zh-pinyin">ya</span></td><td>Seperti huruf "Ya" pada kata "Yakin"</td></tr>
            <tr><td><span class="ko-char">ㅓ</span></td><td><span class="zh-pinyin">eo</span></td><td>Bunyi vokal "O" terbuka seperti "Organ" atau "Onde-onde"</td></tr>
            <tr><td><span class="ko-char">ㅕ</span></td><td><span class="zh-pinyin">yeo</span></td><td>Bunyi "Yo" terbuka seperti kata "Yogurt"</td></tr>
            <tr><td><span class="ko-char">ㅗ</span></td><td><span class="zh-pinyin">o</span></td><td>Bunyi vokal "O" bulat tertutup seperti "Obor"</td></tr>
            <tr><td><span class="ko-char">ㅛ</span></td><td><span class="zh-pinyin">yo</span></td><td>Bunyi "Yo" bulat seperti mainan "Yoyo"</td></tr>
            <tr><td><span class="ko-char">ㅜ</span></td><td><span class="zh-pinyin">u</span></td><td>Bunyi "U" bibir mengerucut seperti "Udang"</td></tr>
            <tr><td><span class="ko-char">ㅠ</span></td><td><span class="zh-pinyin">yu</span></td><td>Bunyi "Yu" seperti kata "Yuyu"</td></tr>
            <tr><td><span class="ko-char">ㅡ</span></td><td><span class="zh-pinyin">eu</span></td><td>Bunyi "E" datar mendesis seperti "Elang"</td></tr>
            <tr><td><span class="ko-char">ㅣ</span></td><td><span class="zh-pinyin">i</span></td><td>Bunyi "I" tersenyum lebar seperti "Ikan"</td></tr>
          </tbody>
        </table>

        <h4>🧱 14 Konsonan Dasar</h4>
        <table class="zh-table">
          <thead><tr><th>Hangeul</th><th>Nama</th><th>Bunyi Awal / Akhir</th></tr></thead>
          <tbody>
            <tr><td><span class="ko-char">ㄱ</span></td><td>Giyeok</td><td>G / K (seperti lidah menyentuh langit-langit belakang)</td></tr>
            <tr><td><span class="ko-char">ㄴ</span></td><td>Nieun</td><td>N (seperti bentuk ujung lidah menyentuh gusi atas)</td></tr>
            <tr><td><span class="ko-char">ㄷ</span></td><td>Digeut</td><td>D / T</td></tr>
            <tr><td><span class="ko-char">ㄹ</span></td><td>Rieul</td><td>R / L (bergetar lembut)</td></tr>
            <tr><td><span class="ko-char">ㅁ</span></td><td>Mieum</td><td>M (kotak seperti bentuk bibir tertutup)</td></tr>
            <tr><td><span class="ko-char">ㅂ</span></td><td>Bieup</td><td>B / P</td></tr>
            <tr><td><span class="ko-char">ㅅ</span></td><td>Siot</td><td>S (seperti bentuk gigi atas)</td></tr>
            <tr><td><span class="ko-char">ㅇ</span></td><td>Ieung</td><td>Diam (silent) saat di awal suku kata, berbunyi "NG" saat di akhir!</td></tr>
            <tr><td><span class="ko-char">ㅈ</span></td><td>Jieut</td><td>J / T</td></tr>
            <tr><td><span class="ko-char">ㅊ</span></td><td>Chieut</td><td>Ch (dihembuskan kuat dengan udara)</td></tr>
            <tr><td><span class="ko-char">ㅋ</span></td><td>Kieok</td><td>K (aspirasi kuat seperti 'Kh')</td></tr>
            <tr><td><span class="ko-char">ㅌ</span></td><td>Tieut</td><td>T (aspirasi kuat)</td></tr>
            <tr><td><span class="ko-char">ㅍ</span></td><td>Pieup</td><td>P (aspirasi kuat)</td></tr>
            <tr><td><span class="ko-char">ㅎ</span></td><td>Hieut</td><td>H</td></tr>
          </tbody>
        </table>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Aturan Balok Lego:</b> Huruf Hangeul tidak ditulis berjejer mendatar seperti huruf latin, melainkan disusun membentuk blok suku kata kotak (Konsonan + Vokal, misal: <span class="ko-char">가</span> = ㄱ + ㅏ). Jika suku kata diawali vokal, tambahkan lingkaran netral <span class="ko-char">ㅇ</span> di awal (misal: <span class="ko-char">아</span>).</div>
        </div>
      `,
      quiz: {
        q: "Bagaimana cara menulis suku kata vokal murni 'A' dalam abjad Hangeul yang benar?",
        opts: [
          "아 (menggunakan konsonan netral ㅇ di depan vokal ㅏ)",
          "ㅏ (hanya menulis garis vokal saja)",
          "가",
          "나"
        ],
        ans: 0,
        why: "Dalam sistem penulisan Hangeul, sebuah blok suku kata wajib memiliki konsonan awal. Jika bunyinya vokal murni, digunakan lingkaran netral 'ㅇ' yang tidak berbunyi di awal (아)."
      }
    },
    {
      id: 'ko-02',
      num: '02',
      title: 'Abjad Hangeul II: Vokal Ganda & Konsonan Kembar',
      level: 'Pemula 0',
      intro: 'Menuntaskan seluruh variasi huruf: bunyi vokal gabungan (Diftong) dan konsonan ganda bernada tegang.',
      body: `
        <h4>🌈 Vokal Ganda (Kombinasi Elegan)</h4>
        <p>Vokal ganda dibentuk dengan menggabungkan dua vokal dasar secara harmonis:</p>
        <table class="zh-table">
          <thead><tr><th>Hangeul</th><th>Romanisasi</th><th>Cara Pengucapan</th></tr></thead>
          <tbody>
            <tr><td><span class="ko-char">ㅐ</span></td><td><span class="zh-pinyin">ae</span></td><td>Bunyi "E" terbuka seperti "Ember"</td></tr>
            <tr><td><span class="ko-char">ㅔ</span></td><td><span class="zh-pinyin">e</span></td><td>Bunyi "E" santai seperti "Enak" (dalam percakapan modern terdengar mirip ㅐ)</td></tr>
            <tr><td><span class="ko-char">ㅒ</span></td><td><span class="zh-pinyin">yae</span></td><td>Bunyi "Yae"</td></tr>
            <tr><td><span class="ko-char">ㅖ</span></td><td><span class="zh-pinyin">ye</span></td><td>Bunyi "Ye" seperti "Yes"</td></tr>
            <tr><td><span class="ko-char">ㅘ</span></td><td><span class="zh-pinyin">wa</span></td><td>Bunyi "Wa" seperti "Wajan" (ㅗ + ㅏ)</td></tr>
            <tr><td><span class="ko-char">ㅝ</span></td><td><span class="zh-pinyin">wo</span></td><td>Bunyi "Wo" seperti "Wortel" (ㅜ + ㅓ)</td></tr>
            <tr><td><span class="ko-char">ㅟ</span></td><td><span class="zh-pinyin">wi</span></td><td>Bunyi "Wi" seperti "Wisma" (ㅜ + ㅣ)</td></tr>
            <tr><td><span class="ko-char">ㅢ</span></td><td><span class="zh-pinyin">ui</span></td><td>Bunyi "Eu-i" cepat menyatu</td></tr>
          </tbody>
        </table>

        <h4>⚡ 5 Konsonan Ganda (Bunyi Tegang / Tense)</h4>
        <p>Konsonan kembar diucapkan tanpa hembusan napas, melainkan ditekan kencang di pita suara layaknya nada tegas:</p>
        <ul>
          <li><span class="ko-char">ㄲ</span> (Ssang-giyeok) → Bunyi "KK" kencang dan padat (seperti 'Kk' di kata 'Kakak').</li>
          <li><span class="ko-char">ㄸ</span> (Ssang-digeut) → Bunyi "TT" tegas.</li>
          <li><span class="ko-char">ㅃ</span> (Ssang-bieup) → Bunyi "PP" mantap.</li>
          <li><span class="ko-char">ㅆ</span> (Ssang-siot) → Bunyi "SS" mendesis tajam.</li>
          <li><span class="ko-char">ㅉ</span> (Ssang-jieut) → Bunyi "JJ" meledak.</li>
        </ul>
      `,
      quiz: {
        q: "Huruf konsonan kembar 'ㄲ' diucapkan dengan cara seperti apa?",
        opts: [
          "Ditekan tegas dan tegang di pita suara (KK padat)",
          "Ditiup dengan hembusan angin yang sangat kuat",
          "Dilesapkan menjadi bunyi desis S",
          "Tidak diucapkan sama sekali"
        ],
        ans: 0,
        why: "Konsonan ganda (ssang-jaeum) seperti ㄲ, ㄸ, ㅃ, ㅆ, ㅉ memiliki karakteristik suara tegang (tense) tanpa hembusan udara napas."
      }
    },
    {
      id: 'ko-03',
      num: '03',
      title: 'Rahasia Konsonan Akhir (Batchim) & Hukum Alami',
      level: 'Pemula',
      intro: 'Kunci terdengar seperti penutur asli: melafalkan konsonan bawah (Batchim) dan perpindahan bunyi alami.',
      body: `
        <h4>⚓ Apa Itu Batchim (받침)?</h4>
        <p>Konsonan yang menempati posisi paling bawah dalam balok suku kata disebut <b>Batchim</b> (alas/jangkar penyangga). Meskipun ada 14 konsonan tunggal dan konsonan ganda, saat berada di posisi Batchim, semuanya disederhanakan menjadi <b>7 bunyi dasar</b> saja:</p>

        <table class="zh-table">
          <thead><tr><th>Bunyi Akhir</th><th>Huruf Hangeul yang Menghasilkannya</th><th>Contoh Kata &amp; Arti</th></tr></thead>
          <tbody>
            <tr><td><b>[ K ]</b></td><td>ㄱ, ㅋ, ㄲ</td><td><span class="ko-char">책</span> (Chaek = Buku), <span class="ko-char">부엌</span> (Bueok = Dapur)</td></tr>
            <tr><td><b>[ N ]</b></td><td>ㄴ</td><td><span class="ko-char">눈</span> (Nun = Mata / Salju)</td></tr>
            <tr><td><b>[ T ]</b></td><td>ㄷ, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ</td><td><span class="ko-char">옷</span> (Ot = Pakaian), <span class="ko-char">꽃</span> (Kkot = Bunga)</td></tr>
            <tr><td><b>[ L ]</b></td><td>ㄹ</td><td><span class="ko-char">물</span> (Mul = Air)</td></tr>
            <tr><td><b>[ M ]</b></td><td>ㅁ</td><td><span class="ko-char">마음</span> (Ma-eum = Hati / Perasaan)</td></tr>
            <tr><td><b>[ P ]</b></td><td>ㅂ, ㅍ</td><td><span class="ko-char">밥</span> (Bap = Nasi), <span class="ko-char">잎</span> (Ip = Daun)</td></tr>
            <tr><td><b>[ NG ]</b></td><td>ㅇ</td><td><span class="ko-char">방</span> (Bang = Kamar)</td></tr>
          </tbody>
        </table>

        <h4>🌊 Hukum Penghubung Alami (Liaison / 연음)</h4>
        <p>Jika suku kata pertama berakhiran Batchim dan suku kata berikutnya diawali vokal (ㅇ), konsonan bawah otomatis <b>meluncur naik ke atas</b> agar lidah mengalir santai:</p>
        <p><i>Contoh:</i> <span class="ko-char">한국어</span> (Han-guk + eo) dibaca menjadi <b>Hangugeo</b>!</p>
      `,
      quiz: {
        q: "Bagaimana cara membaca kata '한국어' (Bahasa Korea) yang benar sesuai hukum pelafalan Liaison?",
        opts: [
          "Hangugeo (konsonan g meluncur menyambung ke vokal eo)",
          "Han guk eo (berhenti kaku per suku kata)",
          "Hangueo",
          "Hangkuk"
        ],
        ans: 0,
        why: "Sesuai hukum liaison (yeon-eum), konsonan batchim 'ㄱ' pada '국' menyambung ke vokal '어' di sebelahnya sehingga dibaca mengalir: 'Hangugeo'."
      }
    },
    {
      id: 'ko-04',
      num: '04',
      title: 'Salam, Maaf & Etika Kesopanan (존댓말 Jondaetmal)',
      level: 'Pemula',
      intro: 'Menyapa orang dengan sopan, mengucapkan terima kasih, dan memahami budaya bahasa hormat Korea.',
      body: `
        <h4>🙇 Budaya Kesopanan Bahasa Korea</h4>
        <p>Di Korea, tingkatan bahasa sangat dihargai. Kepada orang yang baru dikenal, rekan kerja, dan orang yang lebih tua, kita selalu menggunakan <b>Jondaetmal (Bahasa Sopan / Formal)</b> yang berakhiran <i>-yo</i> atau <i>-nida</i>.</p>

        <table class="zh-table">
          <thead><tr><th>Frasa Hangeul</th><th>Romanisasi</th><th>Arti &amp; Situasi</th></tr></thead>
          <tbody>
            <tr><td><span class="ko-char">안녕하세요</span></td><td><span class="zh-pinyin">Annyeonghaseyo</span></td><td>Halo / Selamat pagi/siang/malam (Sopan universal)</td></tr>
            <tr><td><span class="ko-char">감사합니다</span></td><td><span class="zh-pinyin">Gamsahamnida</span></td><td>Terima kasih banyak (Formal hormat)</td></tr>
            <tr><td><span class="ko-char">고마워요</span></td><td><span class="zh-pinyin">Gomawoyo</span></td><td>Terima kasih (Sopan akrab)</td></tr>
            <tr><td><span class="ko-char">죄송합니다</span></td><td><span class="zh-pinyin">Joesonghamnida</span></td><td>Mohon maaf / Maafkan saya (Formal)</td></tr>
            <tr><td><span class="ko-char">괜찮아요</span></td><td><span class="zh-pinyin">Gwaenchanhayo</span></td><td>Tidak apa-apa / Semua baik-baik saja</td></tr>
            <tr><td><span class="ko-char">안녕히 계세요</span></td><td><span class="zh-pinyin">Annyeonghi gyeseyo</span></td><td>Selamat tinggal (Dikatakan kepada orang yang tetap tinggal di tempat)</td></tr>
            <tr><td><span class="ko-char">안녕히 가세요</span></td><td><span class="zh-pinyin">Annyeonghi gaseyo</span></td><td>Selamat jalan (Dikatakan kepada orang yang pergi)</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Salam perpisahan apa yang Anda katakan kepada tuan rumah saat Anda berpamitan pulang duluan?",
        opts: [
          "Annyeonghi gyeseyo (Selamat tinggal bagi yang tetap tinggal)",
          "Annyeonghi gaseyo",
          "Gamsahamnida",
          "Joesonghamnida"
        ],
        ans: 0,
        why: "'Annyeonghi gyeseyo' secara harfiah berarti 'Tinggallah dalam damai', diucapkan kepada pihak yang tetap tinggal di tempat saat kita berpamitan pergi."
      }
    },
    {
      id: 'ko-05',
      num: '05',
      title: 'Perkenalan Diri Supriyanto (은/는 & 이에요/예요)',
      level: 'Pemula',
      intro: 'Menyusun kalimat identitas diri: nama, profesi software engineer, dan negara asal Indonesia.',
      body: `
        <h4>👤 Partikel Topik: 은 (Eun) vs 는 (Neun)</h4>
        <p>Dalam tata bahasa Korea, subjek atau topik utama kalimat selalu ditempeli stiker partikel topik:
        <ul>
          <li>Gunakan <b>은 (eun)</b> jika kata berakhiran konsonan (Batchim).</li>
          <li>Gunakan <b>는 (neun)</b> jika kata berakhiran vokal (tanpa Batchim).</li>
        </ul>
        <i>Contoh:</i> <span class="ko-char">저는</span> (Jeo-neun = Saya adalah...)</p>

        <h4>🏷️ Akhiran Predikat Identitas: 이에요 vs 예요 (= adalah)</h4>
        <ul>
          <li>Jika kata berakhiran konsonan → gunakan <b>이에요 (i-e-yo)</b>.</li>
          <li>Jika kata berakhiran vokal → gunakan <b>예요 (ye-yo)</b>.</li>
        </ul>

        <h4>💬 Naskah Dialog Perkenalan Supriyanto</h4>
        <div class="code-block"><span class="cm">// Perkenalan Diri di Kantor Baru</span>
Supriyanto: 안녕하세요! 저는 수프리얀토예요.
   <span class="st">(Annyeonghaseyo! Jeoneun Supeuriyantoyeyo. - Halo! Saya adalah Supriyanto.)</span>

Rekan:      반가워요! 수프리얀토 씨는 어느 나라 사람이에요?
   <span class="st">(Bangawoyo! Supeuriyanto ssineun eoneu nara saram-ieyo? - Senang bertemu! Supriyanto orang negara mana?)</span>

Supriyanto: 저는 인도네시아 사람이에요. 소프트웨어 엔지니어예요.
   <span class="st">(Jeoneun Indonesia saram-ieyo. Sopeuteuwe-eo enjinieo-yeyo. - Saya orang Indonesia. Saya software engineer.)</span></div>
      `,
      quiz: {
        q: "Bagaimana kalimat Supriyanto untuk memperkenalkan dirinya: 'Saya adalah Supriyanto' dalam bahasa Korea sopan?",
        opts: [
          "저는 수프리얀토예요. (Jeoneun Supeuriyantoyeyo)",
          "저는 수프리얀토이에요.",
          "수프리얀토는 저예요.",
          "안녕 수프리얀토."
        ],
        ans: 0,
        why: "Kata '수프리얀토' diakhiri huruf vokal 'ㅗ', sehingga menggunakan akhiran identitas '예요' (Jeoneun Supeuriyantoyeyo)."
      }
    },
    {
      id: 'ko-06',
      num: '06',
      title: 'Kepemilikan & Keberadaan (이/가 & 있어요/없어요)',
      level: 'Pemula',
      intro: 'Menyatakan kepemilikan benda dan keberadaan ada/tidak ada barang di sekitar kita.',
      body: `
        <h4>📦 Rumus Sakti Keberadaan: 있어요 (Ada/Punya) vs 없어요 (Tidak Ada)</h4>
        <p>Untuk menyatakan punya/ada sesuatu, gunakan rumus: <b>[Kata Benda] + [이/가] + 있어요 (Isseoyo)</b>:</p>
        <ul>
          <li>Berakhiran konsonan → pasang partikel subjek <b>이 (i)</b>.</li>
          <li>Berakhiran vokal → pasang partikel subjek <b>가 (ga)</b>.</li>
        </ul>

        <table class="zh-table">
          <thead><tr><th>Kalimat Korea</th><th>Romanisasi</th><th>Arti Bahasa Indonesia</th></tr></thead>
          <tbody>
            <tr><td><span class="ko-char">시간이 있어요.</span></td><td><span class="zh-pinyin">Sigani isseoyo.</span></td><td>Saya punya waktu / Ada waktu.</td></tr>
            <tr><td><span class="ko-char">돈이 없어요.</span></td><td><span class="zh-pinyin">Doni eopseoyo.</span></td><td>Saya tidak punya uang.</td></tr>
            <tr><td><span class="ko-char">질문이 있어요?</span></td><td><span class="zh-pinyin">Jilmuni isseoyo?</span></td><td>Apakah ada pertanyaan?</td></tr>
            <tr><td><span class="ko-char">차(가) 있어요.</span></td><td><span class="zh-pinyin">Chaga isseoyo.</span></td><td>Saya punya mobil.</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Bagaimana cara mengatakan 'Saya tidak punya mobil' dalam bahasa Korea?",
        opts: [
          "차가 없어요. (Chaga eopseoyo.)",
          "차가 있어요.",
          "돈이 있어요.",
          "차는 사람이에요."
        ],
        ans: 0,
        why: "Kata '차' (mobil) berakhiran vokal sehingga memakai partikel '가', dan '없어요' menyatakan ketidakberadaan / tidak punya (Chaga eopseoyo)."
      }
    },
    {
      id: 'ko-07',
      num: '07',
      title: 'Dua Sistem Angka Korea: Sino-Korea vs Native Korea',
      level: 'Menengah',
      intro: 'Membedakan kapan menggunakan sistem angka serapan Tiongkok (uang, tanggal) vs angka asli Korea (umur, jam, jumlah barang).',
      body: `
        <h4>🔢 Mengapa Ada 2 Sistem Angka di Korea?</h4>
        <p>Sama seperti bahasa Indonesia yang memiliki hitungan biasa dan satuan khusus, bahasa Korea membagi penggunaan angka secara tegas:</p>

        <h4>1. Angka Sino-Korea (Uang, Tanggal, Menit, Nomor Telepon)</h4>
        <p>1 (<span class="ko-char">일</span> il), 2 (<span class="ko-char">이</span> i), 3 (<span class="ko-char">삼</span> sam), 4 (<span class="ko-char">사</span> sa), 5 (<span class="ko-char">오</span> o), 6 (<span class="ko-char">육</span> yuk), 7 (<span class="ko-char">칠</span> chil), 8 (<span class="ko-char">팔</span> pal), 9 (<span class="ko-char">구</span> gu), 10 (<span class="ko-char">십</span> sip).</p>
        <p><i>Contoh:</i> 10.000 Won = <span class="ko-char">만 원</span> (Man won).</p>

        <h4>2. Angka Asli Korea (Jam, Umur, Menghitung Jumlah Benda / Orang)</h4>
        <p>1 (<span class="ko-char">하나</span> hana), 2 (<span class="ko-char">둘</span> dul), 3 (<span class="ko-char">셋</span> set), 4 (<span class="ko-char">넷</span> net), 5 (<span class="ko-char">다섯</span> daseot), 6 (<span class="ko-char">여섯</span> yeoseot), 7 (<span class="ko-char">일곱</span> ilgop), 8 (<span class="ko-char">여덟</span> yeodeol), 9 (<span class="ko-char">아홉</span> ahop), 10 (<span class="ko-char">열</span> yeol).</p>
        <p><i>Contoh:</i> 2 cangkir kopi = <span class="ko-char">커피 두 잔</span> (Keopi du jan - hana/dul/set/net berubah jadi ha/du/se/ne saat menempel pada satuan hitung!).</p>
      `,
      quiz: {
        q: "Sistem angka mana yang digunakan untuk menyebutkan harga belanja uang Won dan nomor telepon di Korea?",
        opts: [
          "Sistem Angka Sino-Korea (일, 이, 삼, 사...)",
          "Sistem Angka Asli Korea (하나, 둘, 셋...)",
          "Sistem Romawi kuno",
          "Hanya menggunakan angka biner"
        ],
        ans: 0,
        why: "Angka Sino-Korea digunakan untuk menghitung nominal uang (Won), menit waktu, nomor telepon, lantai gedung, dan tanggal kalender."
      }
    },
    {
      id: 'ko-08',
      num: '08',
      title: 'Kata Kerja & Akhiran Waktu Sekarang (-아요/-어요)',
      level: 'Menengah',
      intro: 'Mengonjugasi kata kerja kamus (-다) menjadi kalimat percakapan santai sopan sehari-hari.',
      body: `
        <h4>🔧 Rumus Harmonisasi Vokal Pembentukan Kata Kerja</h4>
        <p>Semua kata kerja dasar di kamus Korea berakhiran <b>-다 (da)</b>. Buang kata <code>-다</code>, lalu lihat huruf vokal terakhirnya:</p>
        <ul>
          <li>Jika vokal terakhir adalah <b>ㅏ (a)</b> atau <b>ㅗ (o)</b> → tambahkan <b>-아요 (a-yo)</b>.
            <br>• <span class="ko-char">가다</span> (Gada = Pergi) → <span class="ko-char">가요</span> (Gayo = Saya pergi).
            <br>• <span class="ko-char">보다</span> (Boda = Melihat) → <span class="ko-char">봐요</span> (Bwayo = Saya menonton).</li>
          <li>Jika vokal terakhir SELAIN ㅏ atau ㅗ → tambahkan <b>-어요 (eo-yo)</b>.
            <br>• <span class="ko-char">먹다</span> (Meokda = Makan) → <span class="ko-char">먹어요</span> (Meogeoyo = Saya makan).
            <br>• <span class="ko-char">읽다</span> (Ilgda = Membaca) → <span class="ko-char">읽어요</span> (Ilgeoyo = Saya membaca).</li>
          <li>Khusus kata kerja berakhiran <b>하다 (Hada = Melakukan)</b> → selalu berubah menjadi <b>해요 (Haeyo)</b>!
            <br>• <span class="ko-char">공부하다</span> (Belajar) → <span class="ko-char">공부해요</span> (Gongbuhaeyo).</li>
        </ul>
      `,
      quiz: {
        q: "Bagaimana bentuk konjugasi sopan masa sekarang dari kata kerja '먹다' (Meokda = Makan)?",
        opts: [
          "먹어요 (Meogeoyo)",
          "먹아요",
          "먹해요",
          "먹다요"
        ],
        ans: 0,
        why: "Kata dasar '먹' memiliki vokal 'ㅓ' (bukan ㅏ atau ㅗ), sehingga menurut aturan harmonisasi vokal mendapat akhiran '-어요' menjadi '먹어요'."
      }
    },
    {
      id: 'ko-09',
      num: '09',
      title: 'Jam, Tanggal & Pola Keterangan Waktu (Partikel 에)',
      level: 'Menengah',
      intro: 'Menyusun keterangan waktu: rumus unik kombinasi jam Native Korea dan menit Sino-Korea.',
      body: `
        <h4>⏰ Rumus Unik Jam Korea (Native + Sino)</h4>
        <p>Masyarakat Korea menggabungkan kedua sistem angka dalam satu kalimat waktu:
        <br><b>[Angka Asli Korea] + 시 (Si = Jam) + [Angka Sino-Korea] + 분 (Bun = Menit)</b></p>
        <p><i>Contoh:</i> Jam 3:30 = <span class="ko-char">세 시 삼십 분</span> (Se si sam-sip bun) atau <span class="ko-char">세 시 반</span> (Se si ban = Jam 3 setengah).</p>

        <h4>📍 Partikel Waktu: 에 (e = pada/di)</h4>
        <p>Tempelkan partikel <b>에</b> pada keterangan waktu:</p>
        <div class="code-block"><span class="cm">// Supriyanto makan siang pada jam 12</span>
수프리얀토 씨는 열두 시에 점심을 먹어요.
<span class="st">(Supeuriyanto ssineun yeoldu sie jeomsimeul meogeoyo.)</span></div>
      `,
      quiz: {
        q: "Bagaimana cara mengucapkan 'Jam 2 tepat' dalam bahasa Korea?",
        opts: [
          "두 시 (Du si)",
          "이 시",
          "둘 시",
          "하나 시"
        ],
        ans: 0,
        why: "Jam selalu menggunakan angka asli Korea (하나, 둘, 셋...) dan saat menempel pada satuan hitung '시' (jam), angka '둘' disingkat menjadi '두' (Du si)."
      }
    },
    {
      id: 'ko-10',
      num: '10',
      title: 'Menanyakan Lokasi: Partikel 에서 (Aktivitas) vs 에 (Arah)',
      level: 'Menengah',
      intro: 'Membedakan dengan tepat di mana aktivitas berlangsung (에서) vs arah tujuan tempat (에).',
      body: `
        <h4>🏢 Perbedaan Fatal: 에 vs 에서</h4>
        <ul>
          <li><b>에 (e):</b> Menunjukkan lokasi diam keberadaan barang (ada di...) atau arah tujuan gerakan (pergi ke...):
            <br>• <span class="ko-char">회사에 가요.</span> (Hoesae gayo = Pergi ke kantor).
            <br>• <span class="ko-char">집에 있어요.</span> (Jibe isseoyo = Berada di rumah).</li>
          <li><b>에서 (eseo):</b> Menunjukkan tempat di mana suatu <b>aktivitas aktif dinamis</b> sedang dikerjakan (belajar di, makan di, koding di):
            <br>• <span class="ko-char">카페에서 일해요.</span> (Kape-eseo ilhaeyo = Bekerja di kafe).
            <br>• <span class="ko-char">식당에서 밥을 먹어요.</span> (Sikdang-eseo babeul meogeoyo = Makan nasi di restoran).</li>
        </ul>
      `,
      quiz: {
        q: "Partikel tempat mana yang tepat untuk melengkapi kalimat aktivitas: 'Kape___ kodinghaeyo' (Saya koding di kafe)?",
        opts: [
          "에서 (Kape-eseo)",
          "에",
          "은",
          "를"
        ],
        ans: 0,
        why: "Partikel '에서' digunakan untuk menandai lokasi tempat terjadinya suatu kegiatan atau tindakan dinamis (seperti bekerja, belajar, atau makan)."
      }
    },
    {
      id: 'ko-11',
      num: '11',
      title: 'Memesan Makanan di Restoran Korea (주세요)',
      level: 'Mahir',
      intro: 'Kata ajaib 주세요 (tolong berikan) untuk memesan makanan, meminta bon, dan air minum.',
      body: `
        <h4>🙏 Kata Paling Berharga di Korea: 주세요 (Juseyo)</h4>
        <p>Cukup sebutkan nama menu makanan lalu tambahkan <b>주세요 (Juseyo = Tolong berikan saya...)</b>:</p>
        <div class="code-block"><span class="cm">// Memesan di Restoran BBQ Korea</span>
Supriyanto: 여기요! 삼겹살 2인분 주세요.
   <span class="st">(Yeogiyo! Samgyeopsal i-inbun juseyo. - Permisi! Tolong berikan Samgyeopsal 2 porsi.)</span>

Pelayan:    네, 알겠습니다. 음료수는요?
   <span class="st">(Ne, algetseumnida. Eumryosuneunyo? - Baik, dimengerti. Minumannya?)</span>

Supriyanto: 물 좀 주세요. 그리고 안 맵게 해주세요!
   <span class="st">(Mul jom juseyo. Geurigo an maepge haejuseyo! - Tolong minta air putih. Dan tolong buat jangan pedas!)</span></div>
      `,
      quiz: {
        q: "Kata apa yang digunakan untuk memanggil pelayan restoran dengan sopan di Korea ('Permisi di sini!')?",
        opts: [
          "여기요! (Yeogiyo!) atau 저기요! (Jeogiyo!)",
          "안녕!",
          "주세요!",
          "미안해!"
        ],
        ans: 0,
        why: "'여기요' (Yeogiyo = di sini) atau '저기요' (Jeogiyo = di sana) adalah ungkapan standar sopan untuk memanggil perhatian pelayan di restoran Korea."
      }
    },
    {
      id: 'ko-12',
      num: '12',
      title: 'Berbelanja & Bertanya Harga: 얼마예요? & 깎아주세요',
      level: 'Mahir',
      intro: 'Menanyakan harga barang dan jurus menawar ramah di pasar tradisional Myeongdong.',
      body: `
        <h4>🛍️ Belanja Seperti Warga Lokal</h4>
        <table class="zh-table">
          <thead><tr><th>Frasa Korea</th><th>Romanisasi</th><th>Arti Bahasa Indonesia</th></tr></thead>
          <tbody>
            <tr><td><span class="ko-char">이거 얼마예요?</span></td><td><span class="zh-pinyin">Igeo eolmayeyo?</span></td><td>Ini harganya berapa?</td></tr>
            <tr><td><span class="ko-char">너무 비싸요!</span></td><td><span class="zh-pinyin">Neomu bissayo!</span></td><td>Mahal sekali!</td></tr>
            <tr><td><span class="ko-char">조금만 깎아주세요.</span></td><td><span class="zh-pinyin">Jogeumman kkak-ajuseyo.</span></td><td>Boleh tolong diskon sedikit?</td></tr>
            <tr><td><span class="ko-char">카드 돼요?</span></td><td><span class="zh-pinyin">Kadeu dwaeyo?</span></td><td>Bisa bayar pakai kartu kredit/debit?</td></tr>
            <tr><td><span class="ko-char">영수증 주세요.</span></td><td><span class="zh-pinyin">Yeongsujeung juseyo.</span></td><td>Tolong berikan struk belanja.</td></tr>
          </tbody>
        </table>
      `,
      quiz: {
        q: "Bagaimana cara menanyakan harga barang 'Ini berapa harganya?' dalam bahasa Korea?",
        opts: [
          "이거 얼마예요? (Igeo eolmayeyo?)",
          "이거 어디예요?",
          "이거 누구예요?",
          "이거 뭐예요?"
        ],
        ans: 0,
        why: "'얼마' berarti berapa banyak (harga), sehingga '이거 얼마예요?' adalah frasa standar untuk menanyakan harga barang."
      }
    },
    {
      id: 'ko-13',
      num: '13',
      title: 'Arah & Transportasi Kota: Taksi & Subway (지하철)',
      level: 'Mahir',
      intro: 'Navigasi sistem kereta bawah tanah Seoul dan memandu sopir taksi ke tempat tujuan.',
      body: `
        <h4>🚇 Naik Subway & Taksi Seoul</h4>
        <div class="code-block"><span class="cm">// Naik Taksi Supriyanto di Bandara Incheon</span>
Sopir:       어디로 가세요?
   <span class="st">(Eodiro gaseyo? - Mau pergi ke mana?)</span>

Supriyanto:  강남역으로 가주세요.
   <span class="st">(Gangnam-yeog-euro gajuseyo. - Tolong antar ke Stasiun Gangnam.)</span>

Supriyanto:  여기서 내려주세요. 감사합니다!
   <span class="st">(Yeogiseo naeryeojuseyo. Gamsahamnida! - Tolong turunkan saya di sini. Terima kasih!)</span></div>

        <h4>Arah Navigasi Dasar</h4>
        <ul>
          <li>Kiri: <span class="ko-char">왼쪽</span> (Oenjjok) → <span class="ko-char">왼쪽으로 가세요</span> (Belok ke kiri).</li>
          <li>Kanan: <span class="ko-char">오른쪽</span> (Oreunjjok) → <span class="ko-char">오른쪽으로 가세요</span> (Belok ke kanan).</li>
          <li>Lurus: <span class="ko-char">곧장 / 쭉 가세요</span> (Jjuk gaseyo = Jalan lurus terus).</li>
        </ul>
      `,
      quiz: {
        q: "Kalimat apa yang Anda katakan kepada sopir taksi saat ingin turun di lokasi saat ini: 'Tolong turunkan saya di sini'?",
        opts: [
          "여기서 내려주세요. (Yeogiseo naeryeojuseyo.)",
          "저기서 타세요.",
          "빨리 가세요.",
          "어디로 가요?"
        ],
        ans: 0,
        why: "'여기서' (di sini) + '내려주세요' (tolong turunkan) adalah ungkapan yang digunakan saat penumpang ingin berhenti dan turun dari kendaraan."
      }
    },
    {
      id: 'ko-14',
      num: '14',
      title: 'Mengungkapkan Keinginan (-고 싶어요) & Obrolan Santai',
      level: 'Expert',
      intro: 'Mengekspresikan impian, hobi, dan roadmap menjadi fasih bahasa Korea secara mandiri.',
      body: `
        <h4>🌟 Rumus Keinginan: -고 싶어요 (Go sipeoyo)</h4>
        <p>Untuk mengatakan <i>'Saya ingin / kepingin melakukan sesuatu'</i>, cukup tempelkan <b>-고 싶어요</b> langsung pada akar kata kerja tanpa pusing memikirkan vokal:</p>
        <div class="code-block"><span class="cm">// Contoh Keinginan Supriyanto</span>
• 한국에 가고 싶어요. (Saya ingin pergi ke Korea.)
• 한국어를 잘하고 싶어요. (Saya ingin mahir bahasa Korea.)
• 커피를 마시고 싶어요. (Saya ingin minum kopi.)</div>

        <h4>🚀 Trik Lolos Ujian TOPIK & Fasih Otodidak</h4>
        <ol>
          <li><b>Metode Shadowing:</b> Dengarkan drama atau podcast Korea dan tirukan intonasinya persis secara real-time.</li>
          <li><b>Hafalkan Pola Kalimat, Bukan Kata Lepas:</b> Menghafal 'Babeul meogeoyo' jauh lebih lekat di otak daripada hanya menghafal kata 'bap'.</li>
        </ol>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menuntaskan seluruh 14 modul kurikulum Bahasa Korea dari pengenalan abjad Hangeul hingga ekspresi keinginan percakapan lancar. Uji pemahaman Anda di <b>Quiz Bahasa Korea</b>!</div>
        </div>
      `,
      quiz: {
        q: "Bagaimana cara menyusun kalimat 'Saya ingin belajar bahasa Korea' menggunakan rumus -고 싶어요?",
        opts: [
          "한국어를 공부하고 싶어요. (Hangugeoreul gongbuhago sipeoyo.)",
          "한국어를 공부해요 싶어요.",
          "한국어를 공부가 있어요.",
          "한국어는 공부하고 없어요."
        ],
        ans: 0,
        why: "Akar kata kerja '공부하' (belajar) langsung digabungkan dengan akhiran keinginan '-고 싶어요' menjadi '공부하고 싶어요'."
      }
    }
  ]
};
