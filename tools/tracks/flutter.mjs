export const flutterTrack = {
  id: 'flutter',
  title: 'Flutter 💙',
  subtitle: 'Mobile UI Toolkit: Bahasa Dart, Widget Tree, State Management & Kompilasi AOT Native',
  accent: 'teal',
  lessons: [
    {
      id: 'flutter-01',
      num: '01',
      title: 'Pengenalan Flutter & Bahasa Dart',
      level: 'Pemula',
      intro: 'Flutter adalah framework open-source Google untuk membuat aplikasi multi-platform super cepat dengan bahasa Dart.',
      body: `
        <h4>🎨 Analogi Kanvas Pelukis Skia & Impeller</h4>
        <p>Kebanyakan framework mobile bekerja seperti penerjemah: mereka meminta sistem Android atau iOS membuat tombol native lewat jembatan komunikasi (*bridge*). Jembatan ini kadang membuat animasi tersendat.</p>
        <p><b>Flutter bekerja dengan cara berbeda:</b> Flutter bertindak seperti pelukis ahli dengan kanvas digital kosong. Menggunakan engine rendering grafis sendiri (<b>Impeller & Skia</b>), Flutter melukis setiap piksel teks, tombol, dan bayangan langsung ke layar HP dengan kecepatan konsisten <b>120 frame per detik (FPS) tanpa jembatan (*Zero Bridge*)</b>!</p>

        <h4>💙 Bahasa Dart & Aplikasi Pertama Supriyanto</h4>
        <p>Dart adalah bahasa pemrograman modern berorientasi objek yang mudah dipelajari bagi yang sudah mengerti JavaScript, Java, atau C#.</p>
        <div class="code-block"><span class="cm">// main.dart - Titik Masuk Aplikasi Flutter</span>
<span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

<span class="kw">void</span> <span class="fn">main</span>() {
  <span class="fn">runApp</span>(<span class="kw">const</span> <span class="fn">AplikasiSupriyanto</span>());
}

<span class="kw">class</span> <span class="fn">AplikasiSupriyanto</span> <span class="kw">extends</span> <span class="fn">StatelessWidget</span> {
  <span class="kw">const</span> <span class="fn">AplikasiSupriyanto</span>({<span class="kw">super</span>.key});

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> <span class="fn">MaterialApp</span>(
      title: <span class="st">'Flutter Supriyanto'</span>,
      theme: ThemeData(primarySwatch: Colors.teal),
      home: <span class="fn">Scaffold</span>(
        appBar: AppBar(title: <span class="kw">const</span> Text(<span class="st">'RB Mobile Flutter'</span>)),
        body: <span class="kw">const</span> Center(
          child: Text(
            <span class="st">'Halo, Supriyanto! Selamat datang di Flutter 💙'</span>,
            style: TextStyle(fontSize: <span class="nm">18</span>, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}</div>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Kunci Pemahaman:</b> Fungsi <code>runApp()</code> adalah jantung awal yang menghidupkan dan merender pohon widget utama ke seluruh layar HP.</div>
        </div>
      `,
      quiz: {
        q: "Mengapa arsitektur rendering Flutter sering disebut 'Zero Bridge'?",
        opts: [
          "Karena Flutter melukis langsung setiap piksel ke layar HP menggunakan rendering engine sendiri (Impeller/Skia) tanpa jembatan perantara",
          "Karena Flutter hanya bisa berjalan jika HP terhubung kabel ke laptop",
          "Karena Flutter tidak memiliki tombol sama sekali",
          "Karena Flutter mengharuskan pengguna membuat jembatan kayu asli"
        ],
        ans: 0,
        why: "Flutter tidak mengandalkan jembatan komunikasi runtime ke komponen UI platform asli, melainkan menggambar sendiri seluruh antarmuka secara native menggunakan grafis Impeller/Skia."
      }
    },
    {
      id: 'flutter-02',
      num: '02',
      title: 'StatelessWidget vs StatefulWidget',
      level: 'Pemula',
      intro: 'Memahami dua tipe widget fundamental: tampilan statis dan tampilan dinamis yang merespons data.',
      body: `
        <h4>🗿 Analogi Patung Museum vs Papan Skor Interaktif</h4>
        <p>Di Flutter, semboyan utamanya adalah <i>"Everything is a Widget"</i>. Semua widget terbagi dalam dua kategori:
        <ul>
          <li><b>StatelessWidget (Patung Museum)</b>: Sekali dipahat/dibuat, wujudnya tidak pernah berubah. Cocok untuk teks judul, ikon, label, atau kartu profil yang datanya tetap.</li>
          <li><b>StatefulWidget (Papan Skor Lapangan Futsal Supriyanto)</b>: Memiliki memori internal (*State*). Saat tombol ditekan, fungsi <code>setState()</code> dipanggil untuk memperbarui angka skor di layar secara seketika.</li>
        </ul>
        </p>

        <h4>🔢 Counter Interaktif dengan StatefulWidget</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

<span class="kw">class</span> <span class="fn">PapanSkorSupriyanto</span> <span class="kw">extends</span> <span class="fn">StatefulWidget</span> {
  <span class="kw">const</span> <span class="fn">PapanSkorSupriyanto</span>({<span class="kw">super</span>.key});

  @override
  State&lt;<span class="fn">PapanSkorSupriyanto</span>&gt; <span class="fn">createState</span>() =&gt; <span class="fn">_PapanSkorState</span>();
}

<span class="kw">class</span> <span class="fn">_PapanSkorState</span> <span class="kw">extends</span> State&lt;<span class="fn">PapanSkorSupriyanto</span>&gt; {
  <span class="kw">int</span> _skor = <span class="nm">0</span>;

  <span class="kw">void</span> <span class="fn">_tambahGol</span>() {
    <span class="fn">setState</span>(() {
      _skor++; <span class="cm">// Memberitahu Flutter untuk menggambar ulang angka baru</span>
    });
  }

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(<span class="st">'Skor Tim Supriyanto: $_skor'</span>, style: <span class="kw">const</span> TextStyle(fontSize: <span class="nm">22</span>)),
        <span class="kw">const</span> SizedBox(height: <span class="nm">12</span>),
        ElevatedButton(
          onPressed: _tambahGol,
          child: <span class="kw">const</span> Text(<span class="st">'Gol! +1'</span>),
        ),
      ],
    );
  }
}</div>
      `,
      quiz: {
        q: "Kapan Supriyanto harus memilih StatefulWidget daripada StatelessWidget?",
        opts: [
          "Ketika tampilan layar perlu berubah secara dinamis merespons interaksi pengguna atau perubahan data waktu",
          "Ketika membuat logo gambar statis yang tidak pernah berubah",
          "Ketika ingin membuat ukuran aplikasi menjadi 0 kilobyte",
          "Ketika aplikasi hanya dijalankan di malam hari"
        ],
        ans: 0,
        why: "StatefulWidget dirancang untuk elemen antarmuka yang memiliki state/data yang dapat berubah sepanjang siklus hidup widget, diperbarui melalui fungsi setState()."
      }
    },
    {
      id: 'flutter-03',
      num: '03',
      title: 'Tata Letak: Row, Column & Expanded',
      level: 'Pemula',
      intro: 'Menyusun tata letak antarmuka mobile yang rapi dan fleksibel di berbagai orientasi layar.',
      body: `
        <h4>📐 Analogi Rak Etalase Modular Toko Supriyanto</h4>
        <p>Membangun antarmuka Flutter sama seperti menata kotak modular di etalase toko:
        <ul>
          <li><b>Row</b>: Menyusun barang sejajar mendatar ke samping (horizontal).</li>
          <li><b>Column</b>: Menumpuk barang dari atas ke bawah (vertikal).</li>
          <li><b>Container</b>: Kotak serbaguna yang bisa diberi warna latar, padding, margin, dan lengkungan sudut (<code>BoxDecoration</code>).</li>
          <li><b>Expanded</b>: Kotak lentur cerdas yang otomatis mengisi dan membagi seluruh ruang sisa secara adil, mencegah error garis kuning-hitam meluap (*Overflow Error*).</li>
        </ul>
        </p>

        <h4>💳 Membuat Kartu Saldo Dompet Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

Widget <span class="fn">kartuSaldoSupriyanto</span>() {
  <span class="kw">return</span> Container(
    padding: <span class="kw">const</span> EdgeInsets.all(<span class="nm">20</span>),
    decoration: BoxDecoration(
      color: Colors.teal,
      borderRadius: BorderRadius.circular(<span class="nm">16</span>),
      boxShadow: [
        BoxShadow(color: Colors.black12, blurRadius: <span class="nm">8</span>, offset: <span class="kw">const</span> Offset(<span class="nm">0</span>, <span class="nm">4</span>)),
      ],
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        <span class="kw">const</span> Text(<span class="st">'Saldo Dompet Supriyanto'</span>, style: TextStyle(color: Colors.white70)),
        <span class="kw">const</span> SizedBox(height: <span class="nm">8</span>),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            <span class="kw">const</span> Text(<span class="st">'Rp 8.750.000'</span>, style: TextStyle(color: Colors.white, fontSize: <span class="nm">24</span>, fontWeight: FontWeight.bold)),
            IconButton(
              icon: <span class="kw">const</span> Icon(Icons.send, color: Colors.white),
              onPressed: () {},
            ),
          ],
        ),
      ],
    ),
  );
}</div>
      `,
      quiz: {
        q: "Widget apa yang digunakan di dalam Row atau Column untuk memaksa anak widget mengambil seluruh ruang kosong yang tersisa?",
        opts: [
          "Expanded",
          "StaticBox",
          "FixedSpace",
          "LockContainer"
        ],
        ans: 0,
        why: "Widget Expanded memperluas child widget agar memenuhi sisa ruang yang tersedia di main axis Row atau Column, mencegah overflow error."
      }
    },
    {
      id: 'flutter-04',
      num: '04',
      title: 'Form Input, TextField & Validasi',
      level: 'Menengah',
      intro: 'Menerima masukan dari pengguna dengan kontroler teks dan validasi form yang aman.',
      body: `
        <h4>📝 Analogi Loket Pendaftaran & Satpam Verifikasi</h4>
        <p>Ketika pengguna mengisi formulir di aplikasi mobile:
        <ul>
          <li><b>TextEditingController</b>: Pena pencatat pintar. Ia merekam setiap huruf yang diketik Supriyanto, dan bisa digunakan untuk membaca nilai atau mengosongkan input.</li>
          <li><b>Form & GlobalKey&lt;FormState&gt;</b>: Satpam pemeriksa. Sebelum formulir dikirim ke server, satpam memeriksa semua kolom input. Jika email tidak valid atau nomor HP kosong, pesan merah peringatan langsung muncul seketika.</li>
        </ul>
        </p>

        <h4>📋 Implementasi Form Registrasi Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

<span class="kw">class</span> <span class="fn">FormSupriyanto</span> <span class="kw">extends</span> <span class="fn">StatefulWidget</span> {
  <span class="kw">const</span> <span class="fn">FormSupriyanto</span>({<span class="kw">super</span>.key});

  @override
  State&lt;<span class="fn">FormSupriyanto</span>&gt; <span class="fn">createState</span>() =&gt; <span class="fn">_FormState</span>();
}

<span class="kw">class</span> <span class="fn">_FormState</span> <span class="kw">extends</span> State&lt;<span class="fn">FormSupriyanto</span>&gt; {
  <span class="kw">final</span> _formKey = GlobalKey&lt;FormState&gt;();
  <span class="kw">final</span> _namaCtrl = TextEditingController(text: <span class="st">'Supriyanto'</span>);

  <span class="kw">void</span> <span class="fn">_kirim</span>() {
    <span class="kw">if</span> (_formKey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(<span class="st">'Data berhasil disimpan: \${_namaCtrl.text}'</span>)),
      );
    }
  }

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _namaCtrl,
            decoration: <span class="kw">const</span> InputDecoration(labelText: <span class="st">'Nama Lengkap'</span>),
            validator: (v) =&gt; (v == <span class="kw">null</span> || v.isEmpty) ? <span class="st">'Wajib diisi!'</span> : <span class="kw">null</span>,
          ),
          <span class="kw">const</span> SizedBox(height: <span class="nm">16</span>),
          ElevatedButton(onPressed: _kirim, child: <span class="kw">const</span> Text(<span class="st">'Simpan'</span>)),
        ],
      ),
    );
  }
}</div>
      `,
      quiz: {
        q: "Objek apa yang digunakan di Flutter untuk membaca, memodifikasi, atau menghapus teks di dalam TextField secara programatik?",
        opts: [
          "TextEditingController",
          "StringReaderDom",
          "InputScanner",
          "FormStringKeeper"
        ],
        ans: 0,
        why: "TextEditingController adalah pengendali resmi di Flutter yang mengikat teks input pengguna sehingga developer bisa membaca dan memanipulasi teks kapan saja."
      }
    },
    {
      id: 'flutter-05',
      num: '05',
      title: 'Daftar Dinamis: ListView.builder',
      level: 'Menengah',
      intro: 'Menampilkan ribuan item katalog secara efisien dengan teknik lazy rendering.',
      body: `
        <h4>🧾 Analogi Mesin Rol Struk Percetakan</h4>
        <p>Jika Supriyanto memiliki 10.000 riwayat transaksi:
        <ul>
          <li>Jika menggunakan <code>ListView(children: [...])</code>, Flutter akan membuat 10.000 widget sekaligus di RAM HP. HP pengguna langsung panas dan aplikasi macet!</li>
          <li>Menggunakan <b>ListView.builder</b> bekerja seperti mesin cetak otomatis (*Lazy Evaluation*). Flutter hanya membuat widget yang sedang aktif terlihat di layar. Saat pengguna menggulir ke bawah, item lama yang keluar layar langsung didaur ulang (*recycled*) untuk item berikutnya.</li>
        </ul>
        </p>

        <h4>📦 Implementasi Riwayat Transaksi Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

<span class="kw">class</span> <span class="fn">DaftarPesanan</span> <span class="kw">extends</span> <span class="fn">StatelessWidget</span> {
  <span class="kw">final</span> List&lt;String&gt; daftarBarang = List.generate(<span class="nm">1000</span>, (i) =&gt; <span class="st">'Pesanan #$i untuk Supriyanto'</span>);

  <span class="kw">const</span> <span class="fn">DaftarPesanan</span>({<span class="kw">super</span>.key});

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> ListView.builder(
      itemCount: daftarBarang.length,
      itemBuilder: (context, index) {
        <span class="kw">return</span> Card(
          margin: <span class="kw">const</span> EdgeInsets.symmetric(horizontal: <span class="nm">16</span>, vertical: <span class="nm">6</span>),
          child: ListTile(
            leading: CircleAvatar(child: Text(<span class="st">'\${index + 1}'</span>)),
            title: Text(daftarBarang[index]),
            subtitle: <span class="kw">const</span> Text(<span class="st">'Status: Siap Dikirim 🚚'</span>),
            trailing: <span class="kw">const</span> Icon(Icons.arrow_forward_ios, size: <span class="nm">14</span>),
          ),
        );
      },
    );
  }
}</div>
      `,
      quiz: {
        q: "Mengapa ListView.builder sangat efisien dalam menampilkan daftar data dengan ribuan elemen?",
        opts: [
          "Karena ListView.builder hanya membangun widget saat item tersebut hampir terlihat di layar (on-demand / lazy loading)",
          "Karena ListView.builder mengompres seluruh data menjadi file ZIP",
          "Karena ListView.builder mematikan fitur scrolling",
          "Karena ListView.builder menghapus data transaksi dari memori secara permanen"
        ],
        ans: 0,
        why: "ListView.builder hanya memanggil itemBuilder untuk item yang benar-benar terlihat di viewport layar, menghemat penggunaan memori RAM secara signifikan."
      }
    },
    {
      id: 'flutter-06',
      num: '06',
      title: 'Navigasi Layar: Navigator Push & Pop',
      level: 'Menengah',
      intro: 'Alur perpindahan antar halaman dan pengiriman parameter data antar layar di Flutter.',
      body: `
        <h4>🍽️ Analogi Tumpukan Nampan Saji Restoran</h4>
        <p>Sistem navigasi di Flutter mengadopsi konsep tumpukan (*LIFO - Last In First Out*):
        <ul>
          <li><b>Navigator.push()</b>: Menaruh nampan halaman baru di atas tumpukan (misalnya dari Beranda pindah ke Layar Detail Produk Supriyanto).</li>
          <li><b>Navigator.pop()</b>: Mengangkat nampan teratas untuk kembali melihat nampan sebelumnya di bawahnya (tombol Back). Anda bahkan bisa mengembalikan nilai (*return value*) ke layar pemanggil!</li>
        </ul>
        </p>

        <h4>🧭 Contoh Navigasi dengan Pengiriman Data</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

<span class="cm">// 1. Layar Beranda</span>
<span class="kw">class</span> <span class="fn">LayarUtama</span> <span class="kw">extends</span> <span class="fn">StatelessWidget</span> {
  <span class="kw">const</span> <span class="fn">LayarUtama</span>({<span class="kw">super</span>.key});

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> Center(
      child: ElevatedButton(
        child: <span class="kw">const</span> Text(<span class="st">'Lihat Profil Supriyanto →'</span>),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (c) =&gt; <span class="kw">const</span> <span class="fn">LayarDetail</span>(nama: <span class="st">'Supriyanto'</span>)),
          );
        },
      ),
    );
  }
}

<span class="cm">// 2. Layar Detail</span>
<span class="kw">class</span> <span class="fn">LayarDetail</span> <span class="kw">extends</span> <span class="fn">StatelessWidget</span> {
  <span class="kw">final</span> String nama;
  <span class="kw">const</span> <span class="fn">LayarDetail</span>({<span class="kw">super</span>.key, <span class="kw">required</span> <span class="kw">this</span>.nama});

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> Scaffold(
      appBar: AppBar(title: Text(<span class="st">'Profil $nama'</span>)),
      body: Center(
        child: ElevatedButton(
          onPressed: () =&gt; Navigator.pop(context), <span class="cm">// Kembali ke layar utama</span>
          child: <span class="kw">const</span> Text(<span class="st">'← Kembali'</span>),
        ),
      ),
    );
  }
}</div>
      `,
      quiz: {
        q: "Perintah apa yang dipanggil untuk menutup layar saat ini dan kembali ke layar sebelumnya di Flutter?",
        opts: [
          "Navigator.pop(context)",
          "Navigator.exitAll()",
          "Screen.delete()",
          "System.reboot()"
        ],
        ans: 0,
        why: "Navigator.pop(context) membuang rute teratas dari tumpukan navigasi sehingga layar sebelumnya kembali tampil di layar pengguna."
      }
    },
    {
      id: 'flutter-07',
      num: '07',
      title: 'Konsumsi REST API & Model Dart',
      level: 'Lanjutan',
      intro: 'Menghubungkan aplikasi Flutter ke server backend dan mengubah JSON menjadi objek Dart yang type-safe.',
      body: `
        <h4>📬 Analogi Surat Telegram & Form Isian Resmi</h4>
        <p>Ketika aplikasi Supriyanto meminta data ke server melalui koneksi internet:
        <ol>
          <li><b>Package http</b>: Kurir pengantar surat yang mengirim request <code>GET</code> atau <code>POST</code>.</li>
          <li><b>Model Dart (fromJson)</b>: Salinan formulir resmi. Data mentah JSON diterjemahkan ke dalam atribut class dengan tipe data yang ketat (*type-safe*). Mencegah typo nama variabel yang sering menyebabkan crash!</li>
          <li><b>FutureBuilder</b>: Pekerja cerdas yang otomatis merender roda loading saat data sedang ditarik, atau menampilkan pesan error jika kuota internet habis.</li>
        </ol>
        </p>

        <h4>🌐 Mengambil Data Profil Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'dart:convert'</span>;
<span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;
<span class="kw">import</span> <span class="st">'package:http/http.dart'</span> <span class="kw">as</span> http;

<span class="cm">// Model Dart</span>
<span class="kw">class</span> <span class="fn">Pengguna</span> {
  <span class="kw">final</span> String nama;
  <span class="kw">final</span> String peran;
  <span class="fn">Pengguna</span>({<span class="kw">required</span> <span class="kw">this</span>.nama, <span class="kw">required</span> <span class="kw">this</span>.peran});

  <span class="kw">factory</span> <span class="fn">Pengguna</span>.fromJson(Map&lt;String, dynamic&gt; json) {
    <span class="kw">return</span> <span class="fn">Pengguna</span>(nama: json[<span class="st">'nama'</span>], peran: json[<span class="st">'peran'</span>]);
  }
}

<span class="cm">// Fungsi Fetch API</span>
Future&lt;<span class="fn">Pengguna</span>&gt; <span class="fn">tarikData</span>() <span class="kw">async</span> {
  <span class="kw">final</span> res = <span class="kw">await</span> http.get(Uri.parse(<span class="st">'https://api.example.com/user/supriyanto'</span>));
  <span class="kw">if</span> (res.statusCode == <span class="nm">200</span>) {
    <span class="kw">return</span> <span class="fn">Pengguna</span>.fromJson(jsonDecode(res.body));
  }
  <span class="kw">throw</span> Exception(<span class="st">'Gagal mengambil data'</span>);
}</div>
      `,
      quiz: {
        q: "Apa keuntungan utama mengubah data JSON mentah menjadi Model Class Dart dengan factory method fromJson?",
        opts: [
          "Mencegah kesalahan pengetikan nama kolom secara type-safe dan mempermudah auto-complete di editor kode",
          "Membuat kecepatan internet menjadi tanpa kuota",
          "Mengubah tampilan HP menjadi transparan",
          "Menghilangkan kebutuhan akan koneksi internet"
        ],
        ans: 0,
        why: "Model class Dart memberikan kepastian tipe data (type-safety) dan auto-completion, menghindarkan aplikasi dari error runtime akibat salah mengakses key JSON."
      }
    },
    {
      id: 'flutter-08',
      num: '08',
      title: 'State Management: Provider & Notifier',
      level: 'Mahir',
      intro: 'Mengelola data global (seperti keranjang belanja atau status login) di seluruh penjuru aplikasi.',
      body: `
        <h4>📻 Analogi Menara Radio Pemancar Desa</h4>
        <p>Bayangkan toko kelontong Supriyanto memiliki 5 cabang di desa. Jika harga sembako berubah:
        <ul>
          <li>Daripada mengirim pesuruh manual dari pintu ke pintu (*Prop Drilling*), Supriyanto cukup membuat <b>Menara Radio Pemancar (ChangeNotifier)</b>.</li>
          <li>Begitu harga baru diumumkan via pemancar (<code>notifyListeners()</code>), seluruh radio warga yang menyala (<b>Consumer / context.watch</b>) langsung menerima kabar dan memperbarui papan harga mereka secara serentak!</li>
        </ul>
        </p>

        <h4>🛒 State Keranjang Toko Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;
<span class="kw">import</span> <span class="st">'package:provider/provider.dart'</span>;

<span class="cm">// 1. ChangeNotifier (Menara Pemancar)</span>
<span class="kw">class</span> <span class="fn">KeranjangModel</span> <span class="kw">extends</span> <span class="fn">ChangeNotifier</span> {
  <span class="kw">final</span> List&lt;String&gt; _items = [];
  List&lt;String&gt; <span class="kw">get</span> items =&gt; _items;

  <span class="kw">void</span> <span class="fn">tambah</span>(String barang) {
    _items.add(barang);
    <span class="fn">notifyListeners</span>(); <span class="cm">// Menyiarkan sinyal update ke seluruh widget</span>
  }
}

<span class="cm">// 2. Consumer Widget (Radio Pendengar)</span>
<span class="kw">class</span> <span class="fn">BadgeKeranjang</span> <span class="kw">extends</span> <span class="fn">StatelessWidget</span> {
  <span class="kw">const</span> <span class="fn">BadgeKeranjang</span>({<span class="kw">super</span>.key});

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> Consumer&lt;<span class="fn">KeranjangModel</span>&gt;(
      builder: (context, keranjang, child) {
        <span class="kw">return</span> Text(<span class="st">'Pesanan Supriyanto: \${keranjang.items.length}'</span>);
      },
    );
  }
}</div>
      `,
      quiz: {
        q: "Fungsi apa yang wajib dipanggil di dalam class ChangeNotifier agar seluruh widget Consumer me-render ulang tampilannya?",
        opts: [
          "notifyListeners()",
          "rebootScreen()",
          "broadcastAll()",
          "refreshMemoryNow()"
        ],
        ans: 0,
        why: "notifyListeners() adalah metode di ChangeNotifier yang memberitahu para listener (widget yang berlangganan) bahwa state telah berubah dan UI perlu di-render ulang."
      }
    },
    {
      id: 'flutter-09',
      num: '09',
      title: 'Animasi Mulus: AnimatedContainer & Hero',
      level: 'Mahir',
      intro: 'Menghadirkan transisi visual yang memanjakan mata dengan AnimatedContainer dan Hero widget.',
      body: `
        <h4>🦸 Analogi Pahlawan Super Terbang Antar Layar</h4>
        <p>Sentuhan animasi membedakan aplikasi amatir dengan aplikasi profesional kelas dunia:
        <ul>
          <li><b>AnimatedContainer</b>: Kotak dinamis yang bisa berubah warna, ukuran, atau lengkungan secara bertahap dan luwes cukup dengan mengganti nilainya.</li>
          <li><b>Hero Widget</b>: Seperti pahlawan super yang terbang melintasi langit. Ketika foto profil Supriyanto di daftar kecil diklik, foto tersebut seolah membesar dan melayang mulus ke posisi atas di halaman profil detail tanpa jeda!</li>
        </ul>
        </p>

        <h4>🎬 Implementasi Hero Transition Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

<span class="cm">// Di Layar Katalog</span>
Widget <span class="fn">fotoKecil</span>(BuildContext context) {
  <span class="kw">return</span> GestureDetector(
    onTap: () =&gt; Navigator.push(context, MaterialPageRoute(builder: (_) =&gt; <span class="kw">const</span> LayarDetailFoto())),
    child: Hero(
      tag: <span class="st">'avatar-supriyanto'</span>, <span class="cm">// Kunci identitas tag yang unik</span>
      child: ClipRRect(
        borderRadius: BorderRadius.circular(<span class="nm">8</span>),
        child: Image.network(<span class="st">'https://api.dicebear.com/7.x/bottts/svg?seed=Supriyanto'</span>, width: <span class="nm">60</span>),
      ),
    ),
  );
}

<span class="cm">// Di Layar Detail</span>
<span class="kw">class</span> <span class="fn">LayarDetailFoto</span> <span class="kw">extends</span> <span class="fn">StatelessWidget</span> {
  <span class="kw">const</span> <span class="fn">LayarDetailFoto</span>({<span class="kw">super</span>.key});

  @override
  Widget <span class="fn">build</span>(BuildContext context) {
    <span class="kw">return</span> Scaffold(
      body: Center(
        child: Hero(
          tag: <span class="st">'avatar-supriyanto'</span>, <span class="cm">// Tag harus sama persis</span>
          child: Image.network(<span class="st">'https://api.dicebear.com/7.x/bottts/svg?seed=Supriyanto'</span>, width: <span class="nm">260</span>),
        ),
      ),
    );
  }
}</div>
      `,
      quiz: {
        q: "Widget apa di Flutter yang secara otomatis memberikan animasi transisi terbang sebuah elemen gambar saat berpindah layar?",
        opts: [
          "Hero",
          "FlyingImageDom",
          "AirTrans",
          "TeleportBox"
        ],
        ans: 0,
        why: "Widget Hero di Flutter menghubungkan dua elemen dengan tag yang sama pada rute berbeda dan menganimasikan transisi terbang posisinya secara otomatis."
      }
    },
    {
      id: 'flutter-10',
      num: '10',
      title: 'Kompilasi AOT & Rilis Multi-Platform',
      level: 'Expert',
      intro: 'Mengompilasi aplikasi ke kode mesin native (AOT) untuk performa puncak dan publikasi ke Play Store & App Store.',
      body: `
        <h4>📦 Analogi Buku Cetak Siap Terbit</h4>
        <p>Dalam siklus pengembangan Flutter, terdapat dua mode kerja:
        <ul>
          <li><b>Mode Debug (JIT - Just In Time)</b>: Naskah sketsa yang cepat diedit. Fitur <b>Stateful Hot Reload</b> memungkinkan Supriyanto mengubah kode dan melihat hasilnya di HP dalam hitungan sub-detik tanpa merestart aplikasi.</li>
          <li><b>Mode Release (AOT - Ahead Of Time)</b>: Buku edisi cetak tebal. Seluruh kode Dart dikompilasi langsung menjadi instruksi mesin ARM 64-bit native. Tidak ada lagi interpreter, menghasilkan performa setara C++ murni!</li>
        </ul>
        </p>

        <h4>🚀 Perintah Build Production Flutter</h4>
        <div class="code-block"><span class="cm"># 1. Menghasilkan Android App Bundle (.aab) siap upload ke Google Play Console</span>
flutter build appbundle --release

<span class="cm"># 2. Menghasilkan IPA untuk Apple App Store</span>
flutter build ipa --release

<span class="cm"># 3. Menghasilkan build Web modern (Wasm / CanvasKit)</span>
flutter build web --release</div>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menyelesaikan kurikulum Flutter dari tingkat Pemula hingga Expert. Uji kemampuan Anda dengan mengikuti <b>Quiz Flutter 💙</b>!</div>
        </div>
      `,
      quiz: {
        q: "Apa perbedaan utama antara mode Debug (JIT) dan mode Release (AOT) di Flutter?",
        opts: [
          "Mode Debug menggunakan Just-In-Time untuk Hot Reload kilat saat coding, sedangkan mode Release menggunakan Ahead-Of-Time untuk kompilasi mesin native berkecepatan maksimal",
          "Mode Debug hanya berjalan di siang hari, mode Release hanya di malam hari",
          "Mode Release mengharuskan aplikasi ditulis ulang dalam bahasa Python",
          "Mode Debug menghasilkan file berukuran 100 Terabyte"
        ],
        ans: 0,
        why: "Dart mendukung dua mode kompilasi: JIT untuk produktivitas pengembangan kilat dengan Hot Reload, dan AOT untuk kompilasi kode mesin native tanpa overhead runtime."
      }
    }
  ]
};

