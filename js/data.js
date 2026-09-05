const TRACKS = [
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
  "id": "git",
  "title": "Git & GitHub 🐙",
  "subtitle": "Version Control: Commit, Percabangan, Pull Request & Kolaborasi Tim Modern",
  "accent": "orange",
  "category": "it",
  "lessons": [
   {
    "id": "git-01",
    "num": "01",
    "title": "Memahami Version Control: Snapshot vs Delta",
    "level": "Pemula",
    "intro": "Mengapa developer butuh Git dan bagaimana cara kerja snapshot di balik mesin waktu kode.",
    "body": "\n        <h4>🎮 Analogi Save Game Petualangan Supriyanto</h4>\n        <p>Sebelum mengenal Git, Supriyanto sering menyimpan file proyek kodingannya dengan nama manual seperti:\n        <br><code>proyek_final.js</code> → <code>proyek_final_beneran.js</code> → <code>proyek_final_beneran_FIX_FINAL_banget.js</code>.</p>\n        <p>Pendekatan manual ini sangat kacau dan berbahaya. <b>Git adalah mesin waktu (Version Control System / VCS)</b> yang bekerja seperti fitur <i>Save Game</i> di game petualangan:\n        <ul>\n          <li>Setiap kali Anda mencapai checkpoint penting, Anda membuat satu rekaman keadaan (<b>Snapshot / Commit</b>).</li>\n          <li>Jika ada kode yang rusak atau bug fatal di masa depan, Supriyanto bisa dengan aman melompat kembali ke titik rekaman sebelumnya dalam hitungan detik tanpa takut kehilangan riwayat pekerjaan.</li>\n        </ul>\n        </p>\n\n        <h4>📸 Snapshot, Bukan Sekadar Delta Tambal Sulam</h4>\n        <p>Berbeda dengan sistem kontrol versi kuno yang hanya mencatat selisih baris (delta), Git memandang datanya sebagai <b>serangkaian snapshot foto utuh</b> dari seluruh file pada saat itu. Jika suatu file tidak mengalami perubahan, Git tidak menduplikasinya, melainkan hanya membuat tautan cerdas ke file identik sebelumnya sehingga prosesnya instan dan hemat memori penyimpanan.</p>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Penting Dipahami:</b> Git berjalan 100% lokal di komputer Anda tanpa memerlukan koneksi internet sama sekali. Anda baru membutuhkan internet saat ingin menyinkronkan rekaman lokal tersebut ke platform cloud seperti GitHub atau GitLab.</div>\n        </div>\n      ",
    "quiz": {
     "q": "Bagaimana cara kerja Git dalam mencatat riwayat perubahan proyek?",
     "opts": [
      "Merekam snapshot kondisi seluruh file proyek pada setiap commit checkpoint",
      "Mengirim file zip manual via email setiap jam",
      "Menghapus kode lama dan hanya menyisakan kode terbaru",
      "Mengunci file agar tidak bisa diedit oleh programmer lain"
     ],
     "ans": 0,
     "why": "Git mencatat riwayat proyek sebagai serangkaian snapshot utuh (commit). Jika ada file yang tidak berubah, Git hanya membuat referensi ke file sebelumnya."
    }
   },
   {
    "id": "git-02",
    "num": "02",
    "title": "Inisialisasi Repositori: git init, status & .gitignore",
    "level": "Pemula",
    "intro": "Mengaktifkan radar pelacak Git pada folder proyek dan mengabaikan file sampah otomatis.",
    "body": "\n        <h4>📁 Menghidupkan Radar Git: git init</h4>\n        <p>Untuk memberitahu Git agar mulai mengawasi sebuah folder proyek, jalankan perintah:</p>\n        <div class=\"code-block\"><span class=\"cm\"># Masuk ke folder proyek</span>\ncd proyek-supriyanto\n\n<span class=\"cm\"># Inisialisasi repositori Git baru</span>\ngit init</div>\n        <p>Perintah ini akan membuat folder tersembunyi bernama <code>.git</code>. Di dalam folder rahasia inilah seluruh database riwayat, commit, dan konfigurasi proyek Anda disimpan oleh Git.</p>\n\n        <h4>🕵️ Memeriksa Status Radar: git status</h4>\n        <p>Perintah paling sering diketik oleh developer di seluruh dunia adalah <code>git status</code>. Perintah ini memberi tahu Anda:\n        <ul>\n          <li>File mana yang baru dibuat tapi belum dilacak (<i>Untracked</i>).</li>\n          <li>File mana yang sudah dimodifikasi (<i>Modified</i>).</li>\n          <li>File mana yang sudah siap disimpan ke checkpoint (<i>Staged</i>).</li>\n        </ul>\n        </p>\n\n        <h4>🚫 Menjinakkan File Sampah dengan .gitignore</h4>\n        <p>Tidak semua file boleh masuk ke riwayat Git. File konfigurasi rahasia (seperti <code>.env</code> berisi password database), folder dependensi raksasa (<code>node_modules/</code>), atau file temporary OS (<code>.DS_Store</code>) wajib diabaikan agar repositori tetap bersih dan aman:</p>\n        <div class=\"code-block\"><span class=\"cm\"># Contoh isi file .gitignore di root proyek</span>\nnode_modules/\n.env\ndist/\n*.log\n.DS_Store</div>\n      ",
    "quiz": {
     "q": "File apakah yang digunakan untuk memberitahu Git agar mengabaikan file sensitif seperti password .env atau folder node_modules?",
     "opts": [
      ".gitignore",
      ".gitkeep",
      "package.json",
      ".gitconfig"
     ],
     "ans": 0,
     "why": "File .gitignore berisi pola daftar nama file atau direktori yang tidak boleh dilacak maupun dicatat oleh Git ke dalam repositori."
    }
   },
   {
    "id": "git-03",
    "num": "03",
    "title": "Tiga Area Git: Working Tree, Staging Area & Repository",
    "level": "Pemula",
    "intro": "Alur kerja sakral Git: mengedit di Working Tree, menata di Staging Area, dan menyimpan permanen di Commit.",
    "body": "\n        <h4>📦 Analogi Meja Kerja, Kardus Paket & Brankas Arsip</h4>\n        <p>Banyak pemula bingung mengapa harus ada perintah <code>git add</code> sebelum <code>git commit</code>. Bayangkan alur pengiriman paket belanja toko Supriyanto:\n        <ol>\n          <li><b>Working Tree (Meja Kerja):</b> Tempat Anda mengetik dan mengedit kode. File di sini masih dalam keadaan mentah.</li>\n          <li><b>Staging Area (Kardus Paket / Keranjang):</b> Tempat Anda memilih barang apa saja yang ingin dikirim bersamaan. Perintah <code>git add</code> memasukkan file yang Anda pilih ke dalam kardus ini.</li>\n          <li><b>Repository (Brankas Arsip / Commit):</b> Kardus disegel rapat, diberi label pesan yang jelas (misal: 'fitur login selesai'), dan disimpan permanen ke dalam catatan sejarah proyek dengan <code>git commit</code>.</li>\n        </ol>\n        </p>\n\n        <h4>⌨️ Contoh Perintah Praktis</h4>\n        <div class=\"code-block\"><span class=\"cm\"># 1. Masukkan file index.html ke staging area</span>\ngit add index.html\n\n<span class=\"cm\"># Atau masukkan semua file yang diubah sekaligus</span>\ngit add .\n\n<span class=\"cm\"># 2. Simpan permanen ke riwayat dengan pesan commit deskriptif</span>\ngit commit -m \"Menambahkan formulir login dan validasi email Supriyanto\"</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Pesan Commit yang Baik:</b> Gunakan kalimat aktif dan jelas. Hindari pesan asal-asalan seperti <i>\"update\"</i>, <i>\"fix bug\"</i>, atau <i>\"asdfg\"</i>. Tuliskan apa yang diubah agar rekan tim dan Anda di masa depan mengerti maksud perubahan tersebut!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Perintah apa yang digunakan untuk memindahkan file dari Working Tree ke Staging Area sebelum di-commit?",
     "opts": [
      "git add <nama_file>",
      "git push <nama_file>",
      "git commit <nama_file>",
      "git checkout <nama_file>"
     ],
     "ans": 0,
     "why": "git add menyiapkan file yang sudah diedit ke Staging Area (area persiapan) sebelum nantinya dibungkus menjadi commit permanen."
    }
   },
   {
    "id": "git-04",
    "num": "04",
    "title": "Menjelajah Riwayat: git log, git diff & git checkout",
    "level": "Pemula",
    "intro": "Membaca buku catatan masa lalu, melihat selisih kode baris per baris, dan mengintip checkpoint sebelumnya.",
    "body": "\n        <h4>📜 Membaca Buku Harian Proyek: git log</h4>\n        <p>Untuk melihat daftar seluruh checkpoint yang pernah dibuat, gunakan perintah:</p>\n        <div class=\"code-block\"><span class=\"cm\"># Melihat riwayat commit lengkap</span>\ngit log\n\n<span class=\"cm\"># Melihat ringkasan satu baris per commit (sangat rapi)</span>\ngit log --oneline --graph --all</div>\n        <p>Setiap commit memiliki nomor identitas unik 40 karakter heksadesimal yang disebut <b>Commit Hash (SHA-1)</b>, misalnya <code>7a3b8c2...</code>.</p>\n\n        <h4>🔍 Mengintip Selisih Perubahan: git diff</h4>\n        <p>Sebelum memasukkan file ke kardus staging, Anda sering ingin tahu: <i>\"Apa saja persisnya baris yang saya ubah tadi?\"</i></p>\n        <div class=\"code-block\"><span class=\"cm\"># Melihat perbedaan antara kode di meja kerja dengan commit terakhir</span>\ngit diff\n\n<span class=\"cm\"># Melihat perbedaan file yang sudah di-staging (git add)</span>\ngit diff --staged</div>\n        <p>Git akan menampilkan baris merah bertanda minus (<code>-</code>) untuk kode yang dihapus, dan baris hijau bertanda plus (<code>+</code>) untuk kode yang baru ditambahkan.</p>\n      ",
    "quiz": {
     "q": "Perintah apa yang menampilkan riwayat daftar commit secara ringkas dan satu baris per commit?",
     "opts": [
      "git log --oneline",
      "git status --short",
      "git diff --summary",
      "git show --all"
     ],
     "ans": 0,
     "why": "Opsi --oneline pada perintah git log menyajikan hash pendek beserta pesan commit dalam satu baris bersih, memudahkan pembacaan riwayat."
    }
   },
   {
    "id": "git-05",
    "num": "05",
    "title": "Percabangan Efektif: git branch & git switch",
    "level": "Menengah",
    "intro": "Mengisolasi fitur baru di semesta paralel tanpa mengganggu kode produksi yang sedang berjalan.",
    "body": "\n        <h4>🌿 Analogi Dunia Paralel (Multiverse) Koding</h4>\n        <p>Bayangkan Supriyanto sedang memiliki website toko online yang sudah aktif digunakan pembeli di cabang utama (<b>main / master</b>). Supriyanto ingin mencoba fitur baru pembayaran QRIS, namun belum yakin apakah kodenya berhasil atau masih banyak bug.</p>\n        <p>Daripada langsung mengutak-atik kode produksi di cabang utama, Supriyanto membuat <b>Branch (Cabang) baru</b>. Branch adalah semesta paralel yang memungkinkan Anda bereksperimen bebas. Jika fiturnya sukses, branch tersebut digabungkan ke cabang utama. Jika gagal total, cukup hapus branch tersebut tanpa merusak cabang utama sama sekali!</p>\n\n        <h4>⌨️ Perintah Mengelola Branch</h4>\n        <div class=\"code-block\"><span class=\"cm\"># Melihat daftar branch yang ada</span>\ngit branch\n\n<span class=\"cm\"># Membuat branch baru dan langsung berpindah ke sana (Modern Git)</span>\ngit switch -c fitur-qris\n\n<span class=\"cm\"># Berpindah kembali ke cabang utama</span>\ngit switch main</div>\n      ",
    "quiz": {
     "q": "Apa keuntungan utama menggunakan fitur Branch (percabangan) di Git?",
     "opts": [
      "Mengisolasi pengembangan fitur baru agar tidak merusak kode utama yang stabil",
      "Membuat ukuran file proyek menjadi dua kali lipat lebih kecil",
      "Menghapus otomatis seluruh file JavaScript yang tidak terpakai",
      "Mencegah developer lain melihat isi komputer kita"
     ],
     "ans": 0,
     "why": "Branch memungkinkan eksperimen dan pengerjaan fitur berjalan terpisah secara aman tanpa mengganggu kode utama yang sedang berjalan stabil."
    }
   },
   {
    "id": "git-06",
    "num": "06",
    "title": "Menggabungkan Cabang: Fast-Forward vs 3-Way Merge",
    "level": "Menengah",
    "intro": "Menyatukan hasil kerja dari cabang eksperimen kembali ke cabang utama proyek.",
    "body": "\n        <h4>🔀 Dua Tipe Penggabungan (git merge)</h4>\n        <p>Setelah fitur pembayaran QRIS diuji dan berjalan sempurna, Supriyanto ingin menyatukannya ke cabang <code>main</code>. Git memiliki 2 metode penggabungan otomatis:</p>\n        <ul>\n          <li><b>1. Fast-Forward Merge:</b> Terjadi jika cabang <code>main</code> tidak memiliki commit baru sama sekali sejak branch fitur dibuat. Git cukup memajukan pointer <code>main</code> lurus ke depan mengikuti commit terakhir branch fitur. Bersih dan tanpa commit tambahan!</li>\n          <li><b>2. 3-Way Merge:</b> Terjadi jika cabang <code>main</code> dan branch fitur sama-sama memiliki commit baru yang berbeda arah. Git akan membuat satu commit penggabungan khusus (<b>Merge Commit</b>) yang memiliki dua induk commit.</li>\n        </ul>\n\n        <h4>⌨️ Langkah Melakukan Merge</h4>\n        <div class=\"code-block\"><span class=\"cm\"># 1. Pindah dulu ke cabang tujuan (misal main)</span>\ngit switch main\n\n<span class=\"cm\"># 2. Gabungkan cabang fitur ke main</span>\ngit merge fitur-qris\n\n<span class=\"cm\"># 3. Hapus cabang fitur jika sudah tidak diperlukan lagi</span>\ngit branch -d fitur-qris</div>\n      ",
    "quiz": {
     "q": "Kapan situasi Fast-Forward merge dapat terjadi di Git?",
     "opts": [
      "Ketika cabang tujuan (main) belum memiliki commit baru sejak cabang fitur dibuat",
      "Ketika terjadi tabrakan kode pada baris yang sama",
      "Ketika koneksi internet sedang berkecepatan tinggi",
      "Ketika ukuran file repositori di bawah 1 Megabyte"
     ],
     "ans": 0,
     "why": "Fast-forward merge terjadi ketika garis riwayat linier tanpa percabangan ganda, sehingga Git cukup memajukan penunjuk cabang ke depan."
    }
   },
   {
    "id": "git-07",
    "num": "07",
    "title": "Menghadapi Merge Conflict dengan Tenang",
    "level": "Menengah",
    "intro": "Jangan panik ketika ada tabrakan kode di baris yang sama: cara membaca marker dan menyelesaikannya.",
    "body": "\n        <h4>💥 Apa Penyebab Terjadinya Merge Conflict?</h4>\n        <p><b>Merge Conflict</b> terjadi ketika dua orang programmer (atau Anda di dua branch berbeda) <b>mengubah baris kode yang sama persis di file yang sama dengan isi berbeda</b>. Git tidak bisa menebak pikiran manusia: apakah kode programmer A yang benar, atau kode programmer B yang benar? Oleh karena itu, Git berhenti dan meminta bantuan Anda untuk memilih.</p>\n\n        <h4>🔎 Mengenal Marker Konflik Git</h4>\n        <p>Ketika konflik terjadi, Git akan menandai file tersebut dengan simbol khusus:</p>\n        <div class=\"code-block\">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n<span class=\"cm\">// Kode versi cabang Anda saat ini</span>\nconst diskon = 0.15;\n=======\n<span class=\"cm\">// Kode versi cabang yang ingin Anda gabungkan</span>\nconst diskon = 0.20;\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; fitur-promo</div>\n\n        <h4>🛠️ Tiga Langkah Mengatasi Konflik:</h4>\n        <ol>\n          <li>Buka file yang berkonflik di editor teks (VS Code).</li>\n          <li>Tentukan kode mana yang ingin dipertahankan, lalu <b>hapus simbol marker</b> (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>).</li>\n          <li>Jalankan <code>git add .</code> dan selesaikan dengan <code>git commit -m \"Menyelesaikan merge conflict diskon\"</code>.</li>\n        </ol>\n      ",
    "quiz": {
     "q": "Apa yang harus dilakukan developer saat terjadi Merge Conflict pada file kode?",
     "opts": [
      "Memilih kode yang benar, menghapus simbol marker konflik, lalu melakukan git add dan commit",
      "Mematikan komputer dan menghapus seluruh folder proyek",
      "Memaksa push dengan git push --force tanpa memeriksa kodenya",
      "Mengganti ekstensi file menjadi file .txt"
     ],
     "ans": 0,
     "why": "Menyelesaikan konflik dilakukan dengan mengedit file, memilih kode yang diinginkan, membersihkan marker Git, kemudian melakukan add dan commit penyelesaian."
    }
   },
   {
    "id": "git-08",
    "num": "08",
    "title": "Remote Repository: GitHub, git remote & git push",
    "level": "Menengah",
    "intro": "Mencadangkan repositori lokal ke cloud GitHub dan menyinkronkan checkpoint antar perangkat.",
    "body": "\n        <h4>☁️ Menghubungkan Lokal ke Awan (GitHub)</h4>\n        <p>Setelah repositori lokal tersimpan rapi, saatnya mencadangkan dan membagikan proyek Anda ke platform cloud seperti <b>GitHub</b>:</p>\n        <div class=\"code-block\"><span class=\"cm\"># 1. Tambahkan alamat remote repository GitHub</span>\ngit remote add origin https://github.com/supriyanto/toko-online.git\n\n<span class=\"cm\"># 2. Verifikasi alamat remote yang terhubung</span>\ngit remote -v\n\n<span class=\"cm\"># 3. Unggah seluruh riwayat cabang main ke GitHub untuk pertama kali</span>\ngit push -u origin main</div>\n        <p>Parameter <code>-u</code> (upstream) memberitahu Git agar di masa mendatang Supriyanto cukup mengetik <code>git push</code> saja untuk memperbarui cabang <code>main</code> di cloud.</p>\n      ",
    "quiz": {
     "q": "Perintah apa yang digunakan untuk mengunggah commit dari repositori lokal ke server remote GitHub?",
     "opts": [
      "git push",
      "git pull",
      "git clone",
      "git fetch"
     ],
     "ans": 0,
     "why": "git push mentransfer dan menyinkronkan seluruh commit checkpoint dari repositori lokal ke repositori remote di server GitHub."
    }
   },
   {
    "id": "git-09",
    "num": "09",
    "title": "Kolaborasi Tim: git fetch, git pull & Pull Request (PR)",
    "level": "Mahir",
    "intro": "Menjemput pembaruan kode dari rekan tim dan etika review kode melalui Pull Request di GitHub.",
    "body": "\n        <h4>🔄 Perbedaan git fetch vs git pull</h4>\n        <p>Ketika rekan tim Anda mengunggah kode baru ke GitHub, Anda perlu memperbarui repositori lokal Anda:\n        <ul>\n          <li><b>git fetch:</b> Mengunduh riwayat terbaru dari GitHub ke komputer Anda, tetapi <i>belum</i> menggabungkannya ke file yang sedang Anda kerjakan. Aman untuk memeriksa apa saja yang baru.</li>\n          <li><b>git pull:</b> Melakukan <code>git fetch</code> sekaligus langsung menggabungkan (<code>git merge</code>) perubahan tersebut ke branch Anda saat ini.</li>\n        </ul>\n        </p>\n\n        <h4>🤝 Seni Pull Request (PR)</h4>\n        <p>Di perusahaan teknologi profesional, developer dilarang keras langsung melakukan push ke branch <code>main</code>. Alur yang benar adalah:\n        <ol>\n          <li>Developer membuat branch fitur: <code>git switch -c fitur-keranjang</code>.</li>\n          <li>Selesaikan kodingan dan push branch tersebut ke GitHub: <code>git push origin fitur-keranjang</code>.</li>\n          <li>Buka <b>Pull Request (PR)</b> di halaman GitHub. Rekan tim dan Senior Engineer akan membaca baris kode Anda (<i>Code Review</i>), memberikan saran perbaikan, dan jika sudah lolos uji baru di-merge ke <code>main</code>!</li>\n        </ol>\n        </p>\n      ",
    "quiz": {
     "q": "Apa tujuan utama dibukanya Pull Request (PR) di platform GitHub dalam tim software engineering?",
     "opts": [
      "Memfasilitasi peninjauan kode (code review) oleh rekan tim sebelum kode digabung ke cabang utama",
      "Membayar biaya langganan server GitHub",
      "Mengompresi file gambar agar loading website lebih cepat",
      "Mengunduh repositori ke flashdisk eksternal"
     ],
     "ans": 0,
     "why": "Pull Request adalah sarana diskusi dan code review profesional untuk memastikan kualitas kode, keamanan, dan fungsionalitas sebelum digabungkan ke cabang utama."
    }
   },
   {
    "id": "git-10",
    "num": "10",
    "title": "Menyimpan Pekerjaan Sementara: git stash & pop",
    "level": "Mahir",
    "intro": "Menyelamatkan kodingan setengah matang ke laci rahasia saat harus segera beralih memperbaiki bug darurat.",
    "body": "\n        <h4>🗄️ Analogi Laci Rahasia Darurat</h4>\n        <p>Bayangkan Supriyanto sedang asyik merombak halaman checkout toko online. Kodenya baru separuh jalan dan masih error jika di-commit. Tiba-tiba Manajer menghubungi: <i>'Supriyanto, ada bug fatal di halaman login, tolong perbaiki sekarang juga!'</i></p>\n        <p>Supriyanto tidak bisa pindah branch jika pekerjaannya masih berantakan. Solusinya adalah <b>git stash</b> (laci darurat):</p>\n        <div class=\"code-block\"><span class=\"cm\"># 1. Simpan seluruh editan setengah jalan ke laci rahasia</span>\ngit stash\n\n<span class=\"cm\"># 2. Sekarang meja kerja bersih, pindah dan perbaiki bug darurat di main</span>\ngit switch main\n<span class=\"cm\"># ... selesaikan bug, add, commit, dan push ...</span>\n\n<span class=\"cm\"># 3. Kembali ke branch checkout dan ambil kembali kerjaan dari laci</span>\ngit switch fitur-checkout\ngit stash pop</div>\n        <p>Perintah <code>git stash pop</code> mengeluarkan kembali seluruh kodingan yang tadi disimpan dan membersihkan laci rahasia tersebut.</p>\n      ",
    "quiz": {
     "q": "Perintah apa yang digunakan untuk mengembalikan pekerjaan yang sebelumnya disimpan via git stash kembali ke meja kerja?",
     "opts": [
      "git stash pop",
      "git stash drop",
      "git stash clear",
      "git stash hide"
     ],
     "ans": 0,
     "why": "git stash pop mengambil perubahan yang tersimpan paling atas di tumpukan stash, menerapkannya ke working tree, lalu menghapusnya dari daftar stash."
    }
   },
   {
    "id": "git-11",
    "num": "11",
    "title": "Perjalanan Waktu: git revert, reset & git commit --amend",
    "level": "Mahir",
    "intro": "Memperbaiki kesalahan masa lalu: membatalkan commit dengan aman di repositori publik vs lokal.",
    "body": "\n        <h4>⏪ Tiga Jurus Pembatalan di Git</h4>\n        <p>Semua programmer pasti pernah berbuat salah. Git menyediakan tiga cara berbeda untuk memperbaikinya:</p>\n        <ul>\n          <li><b>1. git commit --amend:</b> Mengubah pesan commit terakhir atau menambahkan file yang kelupaan ke commit terakhir tanpa membuat commit baru.</li>\n          <li><b>2. git revert &lt;hash&gt;:</b> Cara paling aman di repositori tim/publik. Perintah ini membuat commit baru yang isinya adalah <i>kebalikan persis</i> dari commit yang salah, sehingga riwayat sejarah tetap utuh dan transparan.</li>\n          <li><b>3. git reset:</b> Menghapus commit dari riwayat. Ada dua mode:\n            <br>• <code>--soft</code>: Menghapus commit tapi membiarkan kodingan tetap ada di Staging Area.\n            <br>• <code>--hard</code>: <b>Berbahaya!</b> Menghapus commit sekaligus menghapus seluruh perubahan kode di file komputer Anda secara permanen.</li>\n        </ul>\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">⚠️</span>\n          <div><b>Aturan Emas:</b> Jangan pernah menggunakan <code>git reset --hard</code> pada commit yang sudah di-push ke GitHub cabang bersama, karena akan merusak sinkronisasi riwayat seluruh rekan tim Anda! Gunakanlah <code>git revert</code>.</div>\n        </div>\n      ",
    "quiz": {
     "q": "Manakah perintah yang paling aman digunakan untuk membatalkan commit yang sudah terlanjur di-push ke server GitHub bersama tim?",
     "opts": [
      "git revert <commit_hash>",
      "git reset --hard HEAD~1",
      "git clean -f -d",
      "git branch -D main"
     ],
     "ans": 0,
     "why": "git revert membuat commit baru yang membatalkan perubahan sebelumnya tanpa merusak atau menulis ulang riwayat commit rekan tim lain di server bersama."
    }
   },
   {
    "id": "git-12",
    "num": "12",
    "title": "Rebase vs Merge & Best Practice Alur Kerja Git Flow",
    "level": "Expert",
    "intro": "Menjaga riwayat pohon commit tetap lurus, bersih, dan mengadopsi standar alur kerja industri perangkat lunak.",
    "body": "\n        <h4>📈 Git Rebase: Merapikan Pohon Sejarah</h4>\n        <p>Berbeda dengan <code>git merge</code> yang menghasilkan cabang bercabang-cabang dan merge commit tambahan, <b>git rebase</b> mencabut commit Anda dari titik cabang lama dan menanamkannya kembali di puncak commit terbaru cabang utama. Hasilnya adalah <b>garis riwayat yang lurus sempurna (linear history)</b> layaknya jalan tol tanpa persimpangan semrawut.</p>\n        <div class=\"code-block\"><span class=\"cm\"># Saat berada di branch fitur-baru, rebase ke main terbaru</span>\ngit switch fitur-baru\ngit rebase main</div>\n\n        <h4>🚀 Standar Git Flow Industri</h4>\n        <p>Dalam proyek enterprise modern, tim software engineer menerapkan konvensi cabang terstruktur:\n        <ul>\n          <li><b>main (production):</b> Kode stabil yang sedang live diakses pengguna.</li>\n          <li><b>develop (staging):</b> Tempat penggabungan fitur-fitur yang siap diuji sebelum rilis.</li>\n          <li><b>feature/* :</b> Cabang fitur spesifik (misal: <code>feature/login-google</code>).</li>\n          <li><b>hotfix/* :</b> Cabang darurat langsung dari main untuk menambal bug krusial di produksi.</li>\n        </ul>\n        </p>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menguasai seluruh siklus version control Git dan GitHub dari fondasi snapshot lokal hingga orkestrasi cabang tim profesional. Uji wawasan Anda di <b>Quiz Git</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Apa perbedaan visual utama antara hasil git rebase dibandingkan git merge?",
     "opts": [
      "git rebase menghasilkan riwayat commit linier lurus tanpa merge commit tambahan",
      "git rebase menghapus seluruh file gambar dalam repositori",
      "git merge hanya bisa dijalankan satu kali seumur hidup repositori",
      "git rebase membutuhkan biaya langganan bulanan di GitHub"
     ],
     "ans": 0,
     "why": "git rebase memindahkan basis commit cabang ke ujung cabang target, menghasilkan riwayat perubahan linier bersih tanpa percabangan ganda atau merge commit."
    }
   }
  ]
 },
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
  "id": "qa",
  "title": "QA & Software Testing 🛡️",
  "subtitle": "Fondasi Quality Assurance: Black Box, White Box, Unit Test, Piramida Testing & Metodologi STLC",
  "accent": "teal",
  "category": "it",
  "lessons": [
   {
    "id": "qa-01",
    "num": "01",
    "title": "Fondasi QA: Perbedaan QA vs QC vs Software Testing & STLC",
    "level": "Pemula",
    "intro": "Memahami peran penting penjamin kualitas perangkat lunak dan mengapa bug yang lolos ke produksi berharga sangat mahal.",
    "body": "\n        <h4>🛡️ Analogi Pabrik Mobil Supriyanto</h4>\n        <p>Bayangkan Supriyanto membuka pabrik mobil keluarga. Terdapat tiga pilar penting untuk memastikan mobil aman dikendarai:\n        <ul>\n          <li><b>Quality Assurance (QA):</b> Berfokus pada <i>proses</i> pembuatan (preventif). QA merancang SOP perakitan, memastikan baut dipasang sesuai standar keselamatan internasional, dan mencegah cacat sebelum mobil selesai dirakit.</li>\n          <li><b>Quality Control (QC):</b> Berfokus pada <i>produk jadi</i> (detektif). QC menginspeksi mobil yang baru keluar dari jalur produksi untuk memilah mana mobil yang lolos QC dan mana yang cacat.</li>\n          <li><b>Software Testing:</b> Tindakan nyata pengujian (eksekusi uji rem, uji tabrak, uji kecepatan) untuk menemukan cacat secara terukur.</li>\n        </ul>\n        </p>\n\n        <h4>💸 Biaya Memperbaiki Bug (Rule of Ten)</h4>\n        <p>Dalam rekayasa perangkat lunak, semakin lambat sebuah bug ditemukan, semakin berlipat ganda biaya memperbaikinya:\n        <br>• Bug ditemukan saat tahap analisis kebutuhan: <b>1x biaya</b>.\n        <br>• Bug ditemukan saat koding oleh programmer: <b>5x biaya</b>.\n        <br>• Bug ditemukan oleh tim QA di lingkungan testing: <b>10x biaya</b>.\n        <br>• Bug baru meledak saat aplikasi sudah dipakai jutaan pengguna: <b>100x biaya</b> (merusak reputasi bisnis, kerugian finansial, dan tuntutan hukum)!</p>\n\n        <h4>🔄 Siklus Hidup Pengujian: STLC (Software Testing Life Cycle)</h4>\n        <p>Proses QA profesional berjalan teratur melalui 6 fase:\n        <ol>\n          <li><b>Requirement Analysis:</b> Menganalisis dokumen kebutuhan bisnis (PRD / User Stories).</li>\n          <li><b>Test Planning:</b> Menentukan strategi, jadwal, alokasi sumber daya, dan risiko.</li>\n          <li><b>Test Case Development:</b> Menulis skenario dan langkah uji detail.</li>\n          <li><b>Test Environment Setup:</b> Menyiapkan server staging, database dummy, dan alat uji.</li>\n          <li><b>Test Execution:</b> Menjalankan pengujian dan mencatat bug yang ditemukan.</li>\n          <li><b>Test Cycle Closure:</b> Evaluasi metrik kelolosan kualitas dan laporan akhir rilis.</li>\n        </ol>\n        </p>\n      ",
    "quiz": {
     "q": "Apa perbedaan mendasar antara Quality Assurance (QA) dan Quality Control (QC)?",
     "opts": [
      "QA berfokus pada pencegahan cacat melalui penyempurnaan proses, sedangkan QC berfokus pada pemeriksaan produk jadi",
      "QA hanya menulis kode JavaScript, sedangkan QC hanya mengetes di handphone",
      "QA dilakukan oleh pelanggan, sedangkan QC dilakukan oleh manajer proyek",
      "QA dan QC adalah istilah identik yang tidak memiliki perbedaan sama sekali"
     ],
     "ans": 0,
     "why": "Quality Assurance berorientasi pada proses (process-oriented) untuk mencegah timbulnya bug, sedangkan Quality Control berorientasi pada produk (product-oriented) untuk menyaring cacat pada output akhir."
    }
   },
   {
    "id": "qa-02",
    "num": "02",
    "title": "Black Box Testing: Equivalence Partitioning & Boundary Value Analysis",
    "level": "Pemula",
    "intro": "Menguji fungsionalitas aplikasi dari luar tanpa perlu melihat baris kode menggunakan teknik partisi dan nilai batas.",
    "body": "\n        <h4>📦 Apa Itu Black Box Testing?</h4>\n        <p><b>Black Box Testing</b> adalah teknik pengujian di mana tester memperlakukan sistem seperti kotak hitam yang tidak terlihat jeroan kodenya. Penguji hanya memberikan <b>Input</b> tertentu dan memverifikasi apakah <b>Output</b> yang dihasilkan sesuai dengan dokumen spesifikasi.</p>\n\n        <h4>🎯 Dua Teknik Desain Uji Black Box Wajib Kuasai</h4>\n        <p>Misalkan formulir pendaftaran akun toko Supriyanto menerima usia antara <b>18 hingga 60 tahun</b>. Anda tidak mungkin mencoba mengetik semua angka dari -9999 sampai 99999. Dua teknik berikut menyederhanakannya secara cerdas:</p>\n\n        <h4>1. Equivalence Partitioning (EP)</h4>\n        <p>Membagi rentang input menjadi kelompok-kelompok kelas valid dan invalid. Menguji satu sampel dari setiap kelas sudah mewakili seluruh anggota kelompok tersebut:</p>\n        <table class=\"zh-table\">\n          <thead><tr><th>Kelas Partisi</th><th>Rentang Nilai</th><th>Sampel Uji</th><th>Ekspektasi Sistem</th></tr></thead>\n          <tbody>\n            <tr><td><b>Invalid Bawah</b></td><td>&lt; 18 tahun</td><td>15</td><td>Ditolak (Error pesan muncul)</td></tr>\n            <tr><td><b>Valid</b></td><td>18 s/d 60 tahun</td><td>30</td><td>Diterima (Pendaftaran sukses)</td></tr>\n            <tr><td><b>Invalid Atas</b></td><td>&gt; 60 tahun</td><td>75</td><td>Ditolak (Error pesan muncul)</td></tr>\n          </tbody>\n        </table>\n\n        <h4>2. Boundary Value Analysis (BVA)</h4>\n        <p>Sebagian besar bug pemrograman terjadi persis di batas tepi (akibat salah ketik operator seperti <code>&lt;</code> bukannya <code>&lt;=</code>). BVA menguji titik batas minimum, maksimum, dan angka tepat sebelum/sesudahnya:</p>\n        <p>Untuk rentang usia 18 s/d 60, nilai uji kritis BVA adalah:\n        <br>• <b>17</b> (tepat di bawah batas minimum → Invalid)\n        <br>• <b>18</b> (titik batas minimum → Valid)\n        <br>• <b>19</b> (tepat di atas batas minimum → Valid)\n        <br>• <b>59</b> (tepat di bawah batas maksimum → Valid)\n        <br>• <b>60</b> (titik batas maksimum → Valid)\n        <br>• <b>61</b> (tepat di atas batas maksimum → Invalid)</p>\n      ",
    "quiz": {
     "q": "Jika sebuah kolom input mewajibkan teks dengan panjang 5 hingga 10 karakter, nilai batas (BVA) mana yang wajib diuji oleh QA?",
     "opts": [
      "4, 5, 6, 9, 10, dan 11 karakter",
      "1, 50, dan 100 karakter",
      "Hanya angka genap",
      "Hanya huruf kapital"
     ],
     "ans": 0,
     "why": "Boundary Value Analysis menguji titik tepi kritis: batas minimum (5) dan sekitarnya (4, 6), serta batas maksimum (10) dan sekitarnya (9, 11)."
    }
   },
   {
    "id": "qa-03",
    "num": "03",
    "title": "White Box Testing: Statement, Branch & Path Coverage",
    "level": "Menengah",
    "intro": "Membuka jeroan mesin kode: menguji struktur logika internal, kondisi if-else, dan alur eksekusi percabangan.",
    "body": "\n        <h4>🔍 Mengintip ke Dalam Kaca Bening (White Box / Glass Box)</h4>\n        <p>Berbeda dengan Black Box, <b>White Box Testing</b> mensyaratkan tester memiliki akses penuh ke kode sumber (source code) dan pemahaman logika pemrograman. Tujuannya adalah memastikan tidak ada baris kode mati (dead code) dan seluruh cabang logika telah teruji.</p>\n\n        <h4>📐 Tiga Tingkatan Code Coverage</h4>\n        <p>Mari kita amati fungsi kalkulasi diskon toko Supriyanto:</p>\n        <div class=\"code-block\"><span class=\"kw\">function</span> <span class=\"fn\">hitungDiskon</span>(total, isMember) {\n  <span class=\"kw\">let</span> diskon = 0;\n  <span class=\"kw\">if</span> (total &gt;= 1000000 &amp;&amp; isMember) {\n    diskon = 0.20; <span class=\"cm\">// Cabang A</span>\n  } <span class=\"kw\">else if</span> (total &gt;= 500000) {\n    diskon = 0.10; <span class=\"cm\">// Cabang B</span>\n  } <span class=\"kw\">else</span> {\n    diskon = 0;    <span class=\"cm\">// Cabang C</span>\n  }\n  <span class=\"kw\">return</span> total * (1 - diskon);\n}</div>\n\n        <ul>\n          <li><b>1. Statement Coverage:</b> Memastikan setiap baris kode dieksekusi minimal satu kali selama pengujian berlangsung.</li>\n          <li><b>2. Branch / Decision Coverage:</b> Memastikan setiap cabang keputusan logika (True dan False dari setiap klausa <code>if</code>) telah dievaluasi.</li>\n          <li><b>3. Path Coverage:</b> Tingkat uji paling teliti: menguji seluruh kemungkinan kombinasi lintasan eksekusi dari awal hingga akhir fungsi.</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Apa metrik pengujian White Box yang mengukur apakah setiap baris kode dalam fungsi telah dieksekusi minimal satu kali saat tes berjalan?",
     "opts": [
      "Statement Coverage",
      "Equivalence Partitioning",
      "Smoke Coverage",
      "Pixel Coverage"
     ],
     "ans": 0,
     "why": "Statement Coverage adalah metrik pengujian White Box yang mengukur persentase jumlah baris kode instruksi yang telah berhasil dilewati selama pengujian."
    }
   },
   {
    "id": "qa-04",
    "num": "04",
    "title": "Gray Box Testing: Kombinasi Logika Bisnis & Struktur Backend",
    "level": "Menengah",
    "intro": "Menjembatani Black Box dan White Box: menguji antarmuka pengguna sembari memvalidasi database dan log server.",
    "body": "\n        <h4>🌓 Filosofi Gray Box Testing</h4>\n        <p><b>Gray Box Testing</b> adalah metode pengujian di mana tester memiliki <i>pengetahuan parsial</i> terhadap struktur internal sistem. Tester tidak menulis ulang algoritma internal, namun memiliki akses ke:</p>\n        <ul>\n          <li>Dokumentasi skema database SQL dan relasi tabel.</li>\n          <li>Dokumentasi kontrak API (Swagger / OpenAPI).</li>\n          <li>File log server untuk menyelidiki error stack trace.</li>\n        </ul>\n\n        <h4>🛒 Contoh Kasus Nyata: Uji Checkout Keranjang Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Skenario Uji Gray Box</span>\n1. Tester melakukan checkout produk \"Laptop Super\" seharga Rp 10.000.000 di halaman website (Tampilan Black Box).\n2. Tester tidak hanya melihat tulisan 'Checkout Berhasil' di layar browser, melainkan langsung membuka database SQL:\n   SELECT stok FROM produk WHERE id = 'LAPTOP-01';\n3. Tester memverifikasi bahwa kolom stok berkurang tepat 1 unit di tabel fisik basis data.\n4. Tester memeriksa log server untuk memastikan tidak ada warning kebocoran transaksi finansial.</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Kekuatan Gray Box:</b> Banyak bug fatal tidak terlihat di antarmuka web, namun terlihat jelas di log database (seperti duplikasi data ganda akibat double click tombol bayar). Gray Box menangkap bug jenis ini dengan presisi tinggi!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Aktivitas pengujian manakah yang merupakan contoh nyata dari Gray Box Testing?",
     "opts": [
      "Melakukan aksi di antarmuka web lalu langsung memverifikasi apakah perubahan data di database SQL sesuai",
      "Hanya menatap layar handphone tanpa menyentuh komputer sama sekali",
      "Membongkar casing fisik server dengan obeng",
      "Menebak password server secara acak tanpa melihat dokumentasi"
     ],
     "ans": 0,
     "why": "Gray Box Testing menggabungkan pengujian fungsional luar (Black Box) dengan pengetahuan struktur internal seperti schema basis data dan API (White Box)."
    }
   },
   {
    "id": "qa-05",
    "num": "05",
    "title": "Piramida Testing: Unit, Integration, System & End-to-End Test",
    "level": "Menengah",
    "intro": "Strategi efisiensi pengujian: mengapa fondasi unit test harus paling kokoh dan pengujian E2E harus terukur.",
    "body": "\n        <h4>🏛️ Konsep Test Pyramid (Piramida Pengujian)</h4>\n        <p>Diperkenalkan oleh Mike Cohn, Test Pyramid adalah panduan proporsi jumlah pengujian perangkat lunak:</p>\n        <div class=\"code-block\">        /\\\n       /  \\       [ E2E / UI Tests ]     (Paling Sedikit: Lambat &amp; Mahal)\n      /====\\\n     /      \\     [ Integration Tests ]   (Sedang: Komunikasi Antar Modul)\n    /========\\\n   /          \\   [ Unit Tests ]          (Paling Banyak: Cepat &amp; Murah)\n  /------------\\</div>\n\n        <h4>1. Unit Testing (Tingkat Terendah)</h4>\n        <p>Menguji fungsi, kelas, atau komponen terkecil secara terisolasi tanpa menyentuh database asli atau jaringan internet nyata (menggunakan <i>Mock</i> atau <i>Stub</i>). Sangat cepat (berjalan dalam hitungan milidetik):</p>\n        <div class=\"code-block\"><span class=\"cm\">// Contoh Unit Test</span>\ntest(<span class=\"st\">'menghitung pajak 11% secara presisi'</span>, () =&gt; {\n  expect(hitungPajak(100000)).toBe(11000);\n});</div>\n\n        <h4>2. Integration Testing (Tingkat Menengah)</h4>\n        <p>Menguji kerja sama antara dua modul atau lebih. Contoh: Memastikan Modul Pembayaran berhasil berkomunikasi dengan Modul Database dan Gateway Bank.</p>\n\n        <h4>3. System Testing &amp; End-to-End (E2E)</h4>\n        <p>Menguji alur utuh sistem dari kacamata pengguna nyata: Buka browser → Login → Pilih Barang → Bayar → Cek Email Konfirmasi. Sangat akurat menggambarkan realita, namun paling lambat dieksekusi dan rawan <i>flaky</i> (gagal akibat kendala jaringan sesaat).</p>\n      ",
    "quiz": {
     "q": "Berdasarkan prinsip Piramida Testing, tipe pengujian manakah yang seharusnya memiliki porsi jumlah tes paling banyak dalam sebuah proyek?",
     "opts": [
      "Unit Testing",
      "End-to-End (E2E) Testing",
      "Manual Exploratory Testing",
      "Stress Testing"
     ],
     "ans": 0,
     "why": "Unit Testing menempati dasar piramida karena paling cepat dieksekusi, murah biaya perawatannya, dan instan menunjukkan baris kode mana yang bermasalah."
    }
   },
   {
    "id": "qa-06",
    "num": "06",
    "title": "Functional Testing: Smoke, Sanity, Regression & Re-testing",
    "level": "Menengah",
    "intro": "Mengetahui kapan harus uji kilat (Smoke), uji perbaikan (Sanity & Re-test), dan uji menyeluruh (Regression).",
    "body": "\n        <h4>🔥 Empat Saudara Pengujian Fungsional</h4>\n        <p>Banyak tester pemula tertukar antara istilah Smoke, Sanity, Regression, dan Re-testing. Berikut perbedaannya yang sangat gamblang:</p>\n\n        <h4>1. Smoke Test (Build Verification Test)</h4>\n        <p>Uji kilat super cepat (5–10 menit) untuk memvalidasi apakah aplikasi versi baru (Build) yang dikirim programmer cukup stabil untuk diuji lebih lanjut. Jika fitur kritis mati (misal website blank putih atau tidak bisa login), tester berhak <b>menolak build tersebut</b> dan mengembalikannya ke developer!</p>\n\n        <h4>2. Sanity Test</h4>\n        <p>Uji verifikasi fokus pada modul tertentu setelah programmer melakukan perbaikan minor atau perubahan kecil untuk memastikan fungsionalitas di area tersebut berjalan logis.</p>\n\n        <h4>3. Re-testing</h4>\n        <p>Menguji kembali langkah yang <b>sama persis</b> pada bug yang dilaporkan sebelumnya, untuk memastikan bug tersebut telah benar-benar teratasi setelah developer menandai status 'Fixed'.</p>\n\n        <h4>4. Regression Testing</h4>\n        <p>Uji komprehensif pada fitur-fitur lama yang sudah ada sebelumnya. Tujuannya adalah memastikan bahwa kode baru atau perbaikan bug yang baru masuk <b>tidak secara tidak sengaja merusak fitur lama yang tadinya berjalan lancar</b>!</p>\n      ",
    "quiz": {
     "q": "Pengujian apa yang dilakukan untuk memastikan bahwa perbaikan bug atau fitur baru tidak merusak fitur lama yang sudah stabil sebelumnya?",
     "opts": [
      "Regression Testing",
      "Smoke Testing",
      "Load Testing",
      "Alpha Testing"
     ],
     "ans": 0,
     "why": "Regression Testing bertujuan memverifikasi bahwa perubahan kode terbaru tidak menimbulkan efek samping negatif atau merusak fungsionalitas sistem yang sudah ada sebelumnya."
    }
   },
   {
    "id": "qa-07",
    "num": "07",
    "title": "Non-Functional Testing: Performance, Load, Stress & Security",
    "level": "Menengah",
    "intro": "Bukan sekadar bisa bekerja: menguji ketahanan beban ribuan pengunjung, kecepatan respon, dan celah keamanan.",
    "body": "\n        <h4>⚖️ Fungsional vs Non-Fungsional</h4>\n        <ul>\n          <li><b>Functional Testing:</b> Menguji <i>APA</i> yang dilakukan sistem (<i>\"Apakah tombol login bisa masuk?\"</i>).</li>\n          <li><b>Non-Functional Testing:</b> Menguji <i>BAGAIMANA KUALITAS</i> sistem bekerja (<i>\"Berapa detik waktu loading saat 10.000 pembeli menekan tombol login serentak saat promo tanggal kembar?\"</i>).</li>\n        </ul>\n\n        <h4>🚀 Tipe Uji Non-Fungsional Utama</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Jenis Pengujian</th><th>Pertanyaan Kunci</th><th>Skenario Pengujian</th></tr></thead>\n          <tbody>\n            <tr><td><b>Load Testing</b></td><td>Sanggupkah sistem menangani beban kerja normal dan puncak yang diprediksi?</td><td>Simulasi 1.000 pengunjung aktif berbelanja serentak selama 2 jam.</td></tr>\n            <tr><td><b>Stress Testing</b></td><td>Di titik beban berapa sistem akan tumbang (breakpoint) dan bagaimana pemulihannya?</td><td>Menaikkan trafik bertahap dari 1.000 → 10.000 → 50.000 pengguna hingga server crash.</td></tr>\n            <tr><td><b>Usability Testing</b></td><td>Seberapa mudah dan intuitif antarmuka digunakan oleh orang awam?</td><td>Meminta pengguna baru menyelesaikan pesanan tanpa bantuan panduan.</td></tr>\n            <tr><td><b>Security Testing</b></td><td>Apakah data pelanggan aman dari celah kebocoran dan hacker?</td><td>Uji kerentanan injeksi SQL, Cross-Site Scripting (XSS), dan kebocoran token otentikasi.</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Apa perbedaan utama antara Load Testing dan Stress Testing?",
     "opts": [
      "Load Testing menguji beban trafik wajar/puncak yang diharapkan, sedangkan Stress Testing menguji sistem melampaui batas kapasitas normal hingga crash",
      "Load Testing hanya untuk database, sedangkan Stress Testing hanya untuk CSS",
      "Load Testing dilakukan manual, sedangkan Stress Testing harus menggunakan robot",
      "Tidak ada perbedaan sama sekali"
     ],
     "ans": 0,
     "why": "Load Testing mengukur kinerja aplikasi pada kapasitas beban yang diharapkan, sedangkan Stress Testing bertujuan mencari titik hancur (breaking point) sistem di luar kapasitas normal."
    }
   },
   {
    "id": "qa-08",
    "num": "08",
    "title": "Anatomi Test Case & Test Scenario Standar Industri",
    "level": "Mahir",
    "intro": "Format dokumentasi profesional: merancang Test Scenario cakupan luas dan Test Case langkah demi langkah.",
    "body": "\n        <h4>🗺️ Test Scenario vs Test Case</h4>\n        <ul>\n          <li><b>Test Scenario (Apa yang ingin diuji):</b> Dokumen tingkat tinggi berisi satu cakupan pengujian (Contoh: <i>\"Memeriksa fungsionalitas transfer saldo antar pengguna.\"</i>).</li>\n          <li><b>Test Case (Bagaimana cara mengujinya):</b> Dokumen langkah detail berisi data input spesifik dan hasil yang diharapkan.</li>\n        </ul>\n\n        <h4>📋 Format Standar Test Case Profesional</h4>\n        <div class=\"code-block\"><b>Test Case ID:</b> TC-TRF-003\n<b>Judul:</b> Transfer saldo berhasil dengan nominal valid dan saldo mencukupi\n<b>Pre-condition:</b> Akun Supriyanto memiliki saldo Rp 500.000 dan berstatus aktif.\n<b>Test Steps:</b>\n  1. Buka menu 'Transfer Saldo'.\n  2. Masukkan nomor rekening tujuan '987654321'.\n  3. Masukkan nominal transfer '100.000'.\n  4. Masukkan PIN transaksi yang benar '123456'.\n  5. Klik tombol 'Kirim'.\n<b>Test Data:</b> Rekening: 987654321, Nominal: 100000, PIN: 123456\n<b>Expected Result:</b> Muncul pop-up 'Transfer Berhasil', saldo Supriyanto berkurang menjadi Rp 400.000.\n<b>Actual Result:</b> Sesuai dengan Expected Result.\n<b>Status:</b> PASS</div>\n      ",
    "quiz": {
     "q": "Komponen Test Case manakah yang mendefinisikan syarat kondisi awal yang harus dipenuhi sebelum langkah uji dijalankan?",
     "opts": [
      "Pre-condition",
      "Post-condition",
      "Actual Result",
      "Test Steps"
     ],
     "ans": 0,
     "why": "Pre-condition menyatakan prasyarat lingkungan atau status akun yang wajib terpenuhi (misal: user sudah login dan memiliki saldo) sebelum langkah pengujian dapat dieksekusi."
    }
   },
   {
    "id": "qa-09",
    "num": "09",
    "title": "Siklus Hidup Bug & Format Bug Report Profesional",
    "level": "Mahir",
    "intro": "Menulis laporan cacat yang jelas dan dipuji developer: severity, priority, dan langkah reproduksi presisi.",
    "body": "\n        <h4>🐞 Siklus Hidup Cacat (Defect Life Cycle)</h4>\n        <p>Begitu tester menemukan kejanggalan sistem, tiket bug bergerak melalui status terstandar:\n        <br><code>NEW</code> (Baru dicatat) → <code>ASSIGNED</code> (Ditugaskan ke programmer) → <code>OPEN / IN PROGRESS</code> (Sedang diperbaiki) → <code>FIXED</code> (Developer menyatakan selesai) → <code>RE-TEST</code> (QA menguji ulang) → <code>VERIFIED / CLOSED</code> (Bug terbukti tuntas sembuh)!\n        <br><i>*Jika saat re-test bug masih muncul, statusnya berubah menjadi <code>REOPENED</code>.</i></p>\n\n        <h4>⚖️ Membedakan Severity vs Priority</h4>\n        <ul>\n          <li><b>Severity (Tingkat Kerusakan Teknis):</b> Seberapa parah bug melumpuhkan sistem (Critical, Major, Minor, Trivial).</li>\n          <li><b>Priority (Tingkat Urgensi Bisnis):</b> Seberapa cepat bug harus segera diperbaiki oleh tim (High, Medium, Low).</li>\n        </ul>\n        <p><i>Contoh Unik:</i> Logo perusahaan salah ketik nama di halaman utama website. Severity-nya <b>Low</b> (karena tidak ada kode yang error/crash), namun Priority-nya <b>High</b> (karena mempermalukan brand perusahaan di mata publik)!</p>\n\n        <h4>📝 Anatomi Bug Report yang Baik</h4>\n        <div class=\"code-block\"><b>Title:</b> [Checkout] Tombol 'Bayar' tidak merespon saat memilih metode pembayaran QRIS\n<b>Severity:</b> Critical | <b>Priority:</b> High\n<b>Environment:</b> Chrome 124, Windows 11, Staging v1.4.2\n<b>Steps to Reproduce:</b>\n  1. Login sebagai user 'supriyanto@example.com'.\n  2. Tambahkan produk 'Buku QA' ke keranjang.\n  3. Buka halaman checkout dan pilih opsi 'QRIS'.\n  4. Klik tombol 'Bayar Sekarang'.\n<b>Expected Result:</b> Kode QRIS muncul di layar untuk di-scan.\n<b>Actual Result:</b> Halaman diam tidak merespon, console browser memunculkan error 'Uncaught TypeError: generateQR is not a function'.\n<b>Attachment:</b> screenshot_error_qris.png</div>\n      ",
    "quiz": {
     "q": "Manakah contoh situasi yang memiliki Severity Low (rendah) namun memiliki Priority High (tinggi)?",
     "opts": [
      "Salah ketik nama merek perusahaan pada logo halaman beranda utama",
      "Server database meledak dan seluruh data pelanggan terhapus",
      "Tombol logout tidak bisa diklik di browser jadul yang sudah tidak didukung",
      "Warna footer sedikit lebih gelap dari desain Figma"
     ],
     "ans": 0,
     "why": "Typo nama brand perusahaan di beranda utama tidak merusak fungsi kode (Severity Low), tetapi berdampak sangat fatal bagi citra reputasi bisnis sehingga wajib diperbaiki segera (Priority High)."
    }
   },
   {
    "id": "qa-10",
    "num": "10",
    "title": "API Testing: Endpoint, Status Code & Assertion Data",
    "level": "Mahir",
    "intro": "Menguji otak sistem tanpa perantara antarmuka web: validasi payload JSON, HTTP method, dan kode status.",
    "body": "\n        <h4>⚡ Mengapa QA Wajib Menguasai API Testing?</h4>\n        <p>Pengujian antarmuka (UI) sering lambat dibuat dan rentan berubah desain. Dengan <b>API Testing</b> (menggunakan Postman, REST Assured, atau Playwright), QA dapat menguji logika bisnis backend secara mandiri bahkan sebelum tampilan UI selesai digambar oleh frontend developer!</p>\n\n        <h4>🚦 Memahami Kode Status HTTP (HTTP Status Codes)</h4>\n        <ul>\n          <li><b>2xx (Success):</b>\n            <br>• <code>200 OK</code>: Permintaan sukses mengembalikan data.\n            <br>• <code>201 Created</code>: Data baru sukses disimpan (misal: user baru terdaftar).</li>\n          <li><b>4xx (Client Error):</b>\n            <br>• <code>400 Bad Request</code>: Parameter kiriman salah format.\n            <br>• <code>401 Unauthorized</code>: Belum login atau token tidak sah.\n            <br>• <code>403 Forbidden</code>: Sudah login tapi tidak memiliki hak akses (misal: staf membuka menu direktur).\n            <br>• <code>404 Not Found</code>: Endpoint URL atau ID barang tidak ditemukan.</li>\n          <li><b>5xx (Server Error):</b>\n            <br>• <code>500 Internal Server Error</code>: Kode backend melempar exception crash.</li>\n        </ul>\n\n        <h4>🔬 Anatomi Assertion Respons API</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Request POST /api/pesanan</span>\n{ <span class=\"st\">\"idProduk\"</span>: 101, <span class=\"st\">\"jumlah\"</span>: 2 }\n\n<span class=\"cm\">// Tiga Assertion Wajib QA:</span>\n1. Status code adalah 201 Created.\n2. Response time di bawah 500ms.\n3. Struktur body JSON memiliki properti 'idPesanan' bertipe number dan 'status' bernilai 'PENDING'.</div>\n      ",
    "quiz": {
     "q": "Status code HTTP manakah yang mengindikasikan bahwa request ditolak karena pengguna belum melampirkan token autentikasi login yang valid?",
     "opts": [
      "401 Unauthorized",
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error"
     ],
     "ans": 0,
     "why": "Kode HTTP 401 Unauthorized menandakan permintaan membutuhkan kredensial otentikasi login pengguna yang valid."
    }
   },
   {
    "id": "qa-11",
    "num": "11",
    "title": "Manual Testing vs Automated Testing: Kapan Harus Otomasi?",
    "level": "Expert",
    "intro": "Menghitung ROI otomasi pengujian: menghindari jebakan mengotomasi segalanya dan memaksimalkan efisiensi.",
    "body": "\n        <h4>🤖 Mitos: 'Otomasi Akan Menggantikan Manual Testing 100%'</h4>\n        <p>Otomasi bukanlah pengganti tester manusia, melainkan alat bantu (alat pembantu efisiensi). Tes otomatis hanya memeriksa skenario kaku yang diprogramkan, sedangkan mata dan intuisi manusia mampu menemukan kejanggalan visual, rasa canggung navigasi (UX), dan bug tak terduga.</p>\n\n        <h4>📊 Matriks Keputusan: Kapan Manual vs Otomasi?</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Pilihlah Manual Testing Ketika...</th><th>Pilihlah Automated Testing Ketika...</th></tr></thead>\n          <tbody>\n            <tr><td>Fitur masih baru dan desain antarmuka sering berubah setiap minggu.</td><td>Fitur inti sudah stabil dan wajib diuji berulang kali setiap rilis (Regression Suite).</td></tr>\n            <tr><td><b>Exploratory Testing:</b> Penjelajahan bebas mencari celah skenario liar.</td><td>Pengujian beban performa (Load Testing dengan ribuan virtual user).</td></tr>\n            <tr><td>Penilaian estetika visual, tata letak, dan kenyamanan pengguna (Usability).</td><td><b>Data-Driven Testing:</b> Menjalankan skenario yang sama dengan 1.000 kombinasi data berbeda.</td></tr>\n            <tr><td>Uji coba sekali pakai yang tidak akan pernah diulang lagi.</td><td>Smoke test otomatis di pipeline CI/CD sebelum deployment.</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Kapan skenario pengujian paling tepat dan menguntungkan (tinggi ROI) untuk diubah menjadi tes otomatis (Automated Testing)?",
     "opts": [
      "Fitur inti yang sudah stabil dan harus diuji berulang kali pada setiap rilis rilis berikutnya (Regression)",
      "Fitur eksperimen yang hanya digunakan satu kali lalu dihapus",
      "Halaman yang desain tata letaknya berubah setiap jam",
      "Menilai apakah kombinasi warna website sedap dipandang mata"
     ],
     "ans": 0,
     "why": "Automated Testing memberikan imbal hasil (ROI) terbaik pada skenario pengujian berulang (regression testing) dan smoke testing yang stabil."
    }
   },
   {
    "id": "qa-12",
    "num": "12",
    "title": "Metodologi QA Modern: Agile, Shift-Left, TDD & BDD Gherkin",
    "level": "Expert",
    "intro": "Standar rekayasa perangkat lunak modern: menggeser pengujian ke kiri dan kolaborasi bahasa manusia dengan BDD.",
    "body": "\n        <h4>⬅️ Konsep Shift-Left Testing</h4>\n        <p>Di masa lalu (Waterfall), QA baru dilibatkan di akhir proyek setelah seluruh kodingan selesai. Pendekatan ini sering memicu keterlambatan rilis massal. <b>Shift-Left</b> memindahkan keterlibatan QA ke tahap paling awal: saat dokumen kebutuhan bisnis masih dirancang, QA sudah mengkritisi celah ambiguitas logika sebelum developer menulis sebaris kode pun!</p>\n\n        <h4>🥒 BDD (Behavior-Driven Development) &amp; Sintaks Gherkin</h4>\n        <p>BDD menyatukan bahasa antara Product Owner (Bisnis), Developer (Koding), dan QA (Pengujian) menggunakan bahasa manusia terstruktur format <b>Given-When-Then</b>:</p>\n        <div class=\"code-block\"><b>Feature:</b> Pembelian Voucher Diskon Toko Supriyanto\n\n  <b>Scenario:</b> Pengguna baru berhasil klaim voucher diskon selamat datang\n    <b>Given</b> Pengguna telah login sebagai pengguna baru terdaftar\n    <b>And</b> Pengguna belum pernah melakukan transaksi belanja sebelumnya\n    <b>When</b> Pengguna memasukkan kode voucher 'SUPRIYANTO-BARU' di keranjang\n    <b>Then</b> Total tagihan belanja berkurang sebesar Rp 50.000\n    <b>And</b> Pesan sukses 'Voucher Selamat Datang Berhasil Digunakan' muncul</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh perjalanan menguasai Software Quality Assurance dari dasar Black Box/White Box hingga metodologi Agile testing modern. Uji wawasan Anda di <b>Quiz QA</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Sintaks kata kunci apakah yang digunakan dalam metodologi BDD (Behavior-Driven Development) format Gherkin untuk mendeskripsikan kondisi awal sebelum aksi dilakukan?",
     "opts": [
      "Given",
      "When",
      "Then",
      "Else"
     ],
     "ans": 0,
     "why": "Dalam format Gherkin BDD, kata kunci 'Given' menyatakan prasyarat atau kondisi awal yang ada sebelum aksi (When) dieksekusi."
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
  "id": "sql",
  "title": "SQL & Database 🗄️",
  "subtitle": "Query Relasional: DDL, DML, Multi-table JOIN, Indexing, Transaksi ACID & Normalisasi",
  "accent": "emerald",
  "category": "it",
  "lessons": [
   {
    "id": "sql-01",
    "num": "01",
    "title": "Fondasi Basis Data Relasional & RDBMS",
    "level": "Pemula",
    "intro": "Memahami mengapa spreadsheet Excel tidak cukup untuk aplikasi modern dan bagaimana tabel saling berhubungan.",
    "body": "\n        <h4>🏪 Analogi Lemari Buku Toko Supriyanto</h4>\n        <p>Saat tokonya masih kecil, Supriyanto mencatat semua pesanan dan pelanggan di satu lemari buku catatan (layaknya lemari Excel). Namun ketika pembeli mencapai puluhan ribu orang, catatan tersebut mulai kacau: nama pelanggan tertulis berulang-ulang, salah ketik alamat, dan data rawan terhapus secara tidak sengaja.</p>\n        <p><b>RDBMS (Relational Database Management System)</b> seperti PostgreSQL, MySQL, dan SQLite memecahkan masalah ini dengan memisahkan data ke dalam tabel-tabel spesifik yang saling terhubung (berelasi):\n        <ul>\n          <li>Tabel <code>pelanggan</code>: Hanya menyimpan identitas unik pembeli.</li>\n          <li>Tabel <code>produk</code>: Menyimpan stok dan harga barang.</li>\n          <li>Tabel <code>pesanan</code>: Menghubungkan pembeli dengan produk yang dibeli melalui kunci penghubung.</li>\n        </ul>\n        </p>\n\n        <h4>🔑 Mengenal Primary Key & Foreign Key</h4>\n        <p>Agar tidak ada data yang tertukar, setiap baris tabel wajib memiliki <b>Primary Key (Kunci Utama)</b> — identitas unik seperti nomor KTP (misal: <code>id_pelanggan = 101</code>). Sedangkan <b>Foreign Key (Kunci Tamu)</b> adalah kolom di tabel lain yang merujuk kembali ke Primary Key tersebut.</p>\n      ",
    "quiz": {
     "q": "Apa fungsi utama dari Primary Key dalam tabel basis data relasional?",
     "opts": [
      "Sebagai identitas unik penanda setiap baris data agar tidak terjadi duplikasi",
      "Untuk mengenkripsi password dengan teknologi blockchain",
      "Untuk mengubah format angka menjadi mata uang rupiah secara otomatis",
      "Membatasi ukuran tabel maksimal 10 Megabyte"
     ],
     "ans": 0,
     "why": "Primary Key memastikan setiap baris (record) dalam tabel memiliki pengenal unik yang tidak boleh kosong (NOT NULL) dan tidak boleh bernilai ganda (UNIQUE)."
    }
   },
   {
    "id": "sql-02",
    "num": "02",
    "title": "DDL: Membuat & Mengelola Tabel (CREATE, ALTER, DROP)",
    "level": "Pemula",
    "intro": "Merancang cetak biru arsitektur tabel dengan tipe data dan aturan constraint yang kuat.",
    "body": "\n        <h4>📐 Data Definition Language (DDL)</h4>\n        <p>DDL adalah sekumpulan perintah SQL untuk membangun, mengubah, atau meruntuhkan struktur fisik wadah data (tabel). Perintah DDL tidak memanipulasi isi baris data, melainkan kerangka bangunannya:</p>\n        <div class=\"code-block\"><span class=\"cm\">-- 1. Membuat tabel pelanggan baru milik Supriyanto</span>\n<span class=\"kw\">CREATE TABLE</span> pelanggan (\n  id <span class=\"kw\">SERIAL PRIMARY KEY</span>,\n  nama <span class=\"kw\">VARCHAR(100) NOT NULL</span>,\n  email <span class=\"kw\">VARCHAR(150) UNIQUE NOT NULL</span>,\n  poin_belanja <span class=\"kw\">INT DEFAULT</span> 0,\n  dibuat_pada <span class=\"kw\">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>\n);\n\n<span class=\"cm\">-- 2. Menambahkan kolom baru jika ada kebutuhan fitur</span>\n<span class=\"kw\">ALTER TABLE</span> pelanggan <span class=\"kw\">ADD COLUMN</span> nomor_hp <span class=\"kw\">VARCHAR(20)</span>;\n\n<span class=\"cm\">-- 3. Menghapus tabel secara permanen</span>\n<span class=\"kw\">DROP TABLE IF EXISTS</span> tabel_lama;</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Constraint Pelindung Data:</b> Gunakan <code>NOT NULL</code> agar kolom tidak bisa dikosongkan, <code>UNIQUE</code> agar tidak ada email kembar, dan <code>DEFAULT</code> untuk mengisi nilai awal otomatis.</div>\n        </div>\n      ",
    "quiz": {
     "q": "Perintah SQL mana yang digunakan untuk menambahkan kolom baru ke dalam struktur tabel yang sudah ada?",
     "opts": [
      "ALTER TABLE ... ADD COLUMN ...",
      "UPDATE TABLE ... INSERT COLUMN ...",
      "CREATE COLUMN ... IN TABLE ...",
      "MODIFY TABLE ... NEW COLUMN ..."
     ],
     "ans": 0,
     "why": "ALTER TABLE adalah perintah DDL untuk memodifikasi struktur skema tabel, termasuk menambah kolom baru dengan klausa ADD COLUMN."
    }
   },
   {
    "id": "sql-03",
    "num": "03",
    "title": "DML: Memasukkan, Mengubah & Menghapus Data",
    "level": "Pemula",
    "intro": "Operasi CRUD data: INSERT data baru, UPDATE data yang ada, dan menghapus dengan aman via DELETE.",
    "body": "\n        <h4>📝 Manipulasi Data (DML: Data Manipulation Language)</h4>\n        <p>Setelah kerangka tabel tersedia, Supriyanto dapat mengelola isi baris data dengan tiga perintah utama:</p>\n        <div class=\"code-block\"><span class=\"cm\">-- 1. INSERT: Memasukkan data pelanggan baru</span>\n<span class=\"kw\">INSERT INTO</span> pelanggan (nama, email, nomor_hp)\n<span class=\"kw\">VALUES</span> (<span class=\"st\">'Supriyanto'</span>, <span class=\"st\">'supriyanto@example.com'</span>, <span class=\"st\">'081234567890'</span>);\n\n<span class=\"cm\">-- 2. UPDATE: Mengubah data poin pelanggan</span>\n<span class=\"kw\">UPDATE</span> pelanggan\n<span class=\"kw\">SET</span> poin_belanja = poin_belanja + 50\n<span class=\"kw\">WHERE</span> id = 1;\n\n<span class=\"cm\">-- 3. DELETE: Menghapus pelanggan tertentu</span>\n<span class=\"kw\">DELETE FROM</span> pelanggan\n<span class=\"kw\">WHERE</span> id = 99;</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">⚠️</span>\n          <div><b>Mimpi Buruk Developer:</b> Jangan pernah lupa menyertakan klausa <code>WHERE</code> pada perintah <code>UPDATE</code> dan <code>DELETE</code>! Tanpa <code>WHERE</code>, seluruh baris data di tabel akan terhapus atau berubah serentak!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Apa yang akan terjadi jika developer menjalankan perintah 'DELETE FROM pelanggan;' tanpa menyertakan klausa WHERE?",
     "opts": [
      "Semua baris data pelanggan di dalam tabel akan terhapus tanpa sisa",
      "Hanya baris paling atas yang terhapus",
      "Database akan memunculkan pesan error dan membatalkan perintah",
      "Struktur tabel pelanggan akan otomatis hilang"
     ],
     "ans": 0,
     "why": "Klausa WHERE menentukan baris mana yang dihapus. Tanpa WHERE, perintah DELETE akan menghapus seluruh isi rekaman baris dalam tabel tersebut."
    }
   },
   {
    "id": "sql-04",
    "num": "04",
    "title": "Query Data: SELECT, DISTINCT, WHERE & Operator Logika",
    "level": "Pemula",
    "intro": "Menyaring dan menampilkan data presisi menggunakan operator logika AND, OR, NOT, IN, dan LIKE.",
    "body": "\n        <h4>🔍 Seni Membaca Data dengan SELECT</h4>\n        <p>Perintah <code>SELECT</code> adalah fondasi utama membaca data di SQL. Daripada mengambil semua kolom dengan <code>SELECT *</code>, praktik terbaik industri adalah menyebutkan nama kolom yang dibutuhkan:</p>\n        <div class=\"code-block\"><span class=\"cm\">-- Mengambil nama dan email dengan filter harga & kategori</span>\n<span class=\"kw\">SELECT</span> nama_produk, harga, stok\n<span class=\"kw\">FROM</span> produk\n<span class=\"kw\">WHERE</span> (kategori = <span class=\"st\">'Elektronik'</span> <span class=\"kw\">AND</span> harga &lt; 5000000)\n   <span class=\"kw\">OR</span> (kategori = <span class=\"st\">'Aksesoris'</span> <span class=\"kw\">AND</span> stok &gt; 10);</div>\n\n        <h4>🎯 Operator Pencarian Sakti: IN & LIKE</h4>\n        <ul>\n          <li><b>IN:</b> Memilih data yang cocok dengan sekumpulan pilihan:\n            <br><code>WHERE kategori IN ('Buku', 'Elektronik', 'Kopi')</code></li>\n          <li><b>LIKE (Pencarian Teks):</b> Mencari pola kata menggunakan wildcard <code>%</code>:\n            <br><code>WHERE nama LIKE '%Supriyanto%'</code> (mengandung kata Supriyanto di posisi mana pun).</li>\n          <li><b>DISTINCT:</b> Menghilangkan baris duplikat dari hasil pencarian:\n            <br><code>SELECT DISTINCT kota_asal FROM pelanggan;</code></li>\n        </ul>\n      ",
    "quiz": {
     "q": "Klausa mana yang digunakan untuk mencari produk yang namanya diawali dengan kata 'Laptop'?",
     "opts": [
      "WHERE nama LIKE 'Laptop%'",
      "WHERE nama == 'Laptop*'",
      "WHERE nama IN ('Laptop')",
      "WHERE nama CONTAINS 'Laptop'"
     ],
     "ans": 0,
     "why": "Dalam SQL standar, operator LIKE bersama wildcard % di akhir ('Laptop%') mencocokkan teks apa pun yang diawali dengan kata 'Laptop'."
    }
   },
   {
    "id": "sql-05",
    "num": "05",
    "title": "Mengurutkan & Paginasi: ORDER BY, LIMIT & OFFSET",
    "level": "Menengah",
    "intro": "Menyajikan data terurut dari yang termahal/termurah serta teknik paginasi halaman aplikasi.",
    "body": "\n        <h4>📶 Mengurutkan Data: ORDER BY (ASC / DESC)</h4>\n        <p>Data di basis data tidak disimpan secara berurutan. Gunakan <code>ORDER BY</code> untuk menata urutan hasil query:</p>\n        <div class=\"code-block\"><span class=\"cm\">-- Urutkan produk dari harga paling mahal (Descending)</span>\n<span class=\"kw\">SELECT</span> nama_produk, harga\n<span class=\"kw\">FROM</span> produk\n<span class=\"kw\">ORDER BY</span> harga <span class=\"kw\">DESC</span>;\n\n<span class=\"cm\">-- Urutkan berdasarkan kategori A-Z, lalu jika sama urutkan harga termurah</span>\n<span class=\"kw\">SELECT</span> nama_produk, kategori, harga\n<span class=\"kw\">FROM</span> produk\n<span class=\"kw\">ORDER BY</span> kategori <span class=\"kw\">ASC</span>, harga <span class=\"kw\">ASC</span>;</div>\n\n        <h4>📄 Paginasi Halaman Web dengan LIMIT & OFFSET</h4>\n        <p>Aplikasi web modern tidak boleh menampilkan 1.000.000 produk sekaligus di layar handphone. Kita membaginya menjadi halaman demi halaman (misal 10 item per halaman):</p>\n        <div class=\"code-block\"><span class=\"cm\">-- Halaman 1 (Item 1 sampai 10)</span>\n<span class=\"kw\">SELECT</span> * <span class=\"kw\">FROM</span> produk <span class=\"kw\">LIMIT</span> 10 <span class=\"kw\">OFFSET</span> 0;\n\n<span class=\"cm\">-- Halaman 2 (Lewati 10 item pertama, ambil 10 berikutnya)</span>\n<span class=\"kw\">SELECT</span> * <span class=\"kw\">FROM</span> produk <span class=\"kw\">LIMIT</span> 10 <span class=\"kw\">OFFSET</span> 10;\n\n<span class=\"cm\">-- Halaman 3 (Rumus: OFFSET = (Halaman - 1) * LIMIT)</span>\n<span class=\"kw\">SELECT</span> * <span class=\"kw\">FROM</span> produk <span class=\"kw\">LIMIT</span> 10 <span class=\"kw\">OFFSET</span> 20;</div>\n      ",
    "quiz": {
     "q": "Jika Anda ingin menampilkan data pada halaman ke-4 dengan batas 15 data per halaman, berapa nilai OFFSET yang tepat?",
     "opts": [
      "OFFSET 45",
      "OFFSET 60",
      "OFFSET 30",
      "OFFSET 15"
     ],
     "ans": 0,
     "why": "Rumus paginasi adalah OFFSET = (Nomor Halaman - 1) * LIMIT. Untuk halaman ke-4: (4 - 1) * 15 = 45 data pertama dilewati."
    }
   },
   {
    "id": "sql-06",
    "num": "06",
    "title": "Agregasi & Pengelompokan: COUNT, SUM, GROUP BY & HAVING",
    "level": "Menengah",
    "intro": "Menghasilkan laporan bisnis: total omzet, rata-rata penjualan, dan penyaringan grup.",
    "body": "\n        <h4>📊 Fungsi Agregasi Matematika</h4>\n        <p>SQL memiliki fungsi bawaan untuk menghitung ringkasan statistik dari ribuan baris data:</p>\n        <div class=\"code-block\"><span class=\"kw\">SELECT</span>\n  <span class=\"kw\">COUNT</span>(*) <span class=\"kw\">AS</span> total_transaksi,\n  <span class=\"kw\">SUM</span>(total_bayar) <span class=\"kw\">AS</span> total_omzet,\n  <span class=\"kw\">AVG</span>(total_bayar) <span class=\"kw\">AS</span> rata_rata_belanja,\n  <span class=\"kw\">MAX</span>(total_bayar) <span class=\"kw\">AS</span> belanja_terbesar,\n  <span class=\"kw\">MIN</span>(total_bayar) <span class=\"kw\">AS</span> belanja_terkecil\n<span class=\"kw\">FROM</span> pesanan;</div>\n\n        <h4>📦 GROUP BY & Membedakan WHERE vs HAVING</h4>\n        <p>Ketika ingin mengetahui total omzet <i>per kategori produk</i>, gunakan <code>GROUP BY</code>:</p>\n        <div class=\"code-block\"><span class=\"kw\">SELECT</span> kategori, <span class=\"kw\">SUM</span>(total_bayar) <span class=\"kw\">AS</span> omzet_kategori\n<span class=\"kw\">FROM</span> produk\n<span class=\"kw\">GROUP BY</span> kategori\n<span class=\"kw\">HAVING SUM</span>(total_bayar) &gt; 10000000;</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Kunci Hafalan Supriyanto:</b> <code>WHERE</code> menyaring baris <b>sebelum</b> dikelompokkan, sedangkan <code>HAVING</code> menyaring hasil agregasi <b>setelah</b> dikelompokkan oleh GROUP BY!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Klausa apa yang digunakan untuk menyaring hasil pengelompokan agregasi (misal: hanya menampilkan grup yang omzetnya di atas 10 juta)?",
     "opts": [
      "HAVING",
      "WHERE",
      "FILTER BY",
      "ORDER BY"
     ],
     "ans": 0,
     "why": "Klausa HAVING digunakan khusus untuk menyaring kondisi pada fungsi agregasi setelah data dikelompokkan oleh GROUP BY."
    }
   },
   {
    "id": "sql-07",
    "num": "07",
    "title": "Relasi Tabel I: Menguasai INNER JOIN & LEFT JOIN",
    "level": "Menengah",
    "intro": "Menyatukan data dari dua tabel terpisah berdasarkan kunci penghubung relasi.",
    "body": "\n        <h4>🤝 Mengapa Perlu JOIN?</h4>\n        <p>Di tabel <code>pesanan</code>, kita hanya menyimpan <code>id_pelanggan: 101</code>. Pelanggan ingin melihat resi belanja yang mencantumkan nama asli dan alamatnya. Kita menggabungkan tabel <code>pesanan</code> dan <code>pelanggan</code> menggunakan <b>JOIN</b>!</p>\n\n        <h4>🔗 Perbedaan INNER JOIN vs LEFT JOIN</h4>\n        <div class=\"code-block\"><span class=\"cm\">-- 1. INNER JOIN: Hanya menampilkan pesanan yang memiliki pelanggan valid</span>\n<span class=\"kw\">SELECT</span> pesanan.id, pelanggan.nama, pesanan.total_bayar\n<span class=\"kw\">FROM</span> pesanan\n<span class=\"kw\">INNER JOIN</span> pelanggan <span class=\"kw\">ON</span> pesanan.id_pelanggan = pelanggan.id;\n\n<span class=\"cm\">-- 2. LEFT JOIN: Tampilkan SEMUA pelanggan, meski belum pernah belanja sama sekali</span>\n<span class=\"kw\">SELECT</span> pelanggan.nama, pesanan.id <span class=\"kw\">AS</span> nomor_pesanan\n<span class=\"kw\">FROM</span> pelanggan\n<span class=\"kw\">LEFT JOIN</span> pesanan <span class=\"kw\">ON</span> pelanggan.id = pesanan.id_pelanggan;</div>\n        <p>Pada <code>LEFT JOIN</code>, pelanggan yang belum pernah belanja tetap muncul di daftar dengan nilai <code>NULL</code> pada kolom pesanan. Ini sangat berguna untuk mencari pelanggan pasif!</p>\n      ",
    "quiz": {
     "q": "Apa hasil dari query LEFT JOIN jika baris pada tabel kiri tidak memiliki pasangan yang cocok di tabel kanan?",
     "opts": [
      "Baris tabel kiri tetap ditampilkan dan kolom tabel kanan diisi dengan nilai NULL",
      "Baris tabel kiri akan otomatis dihapus dari database",
      "Query akan menghasilkan error syntax",
      "Baris tabel kanan akan diisi nilai angka 0"
     ],
     "ans": 0,
     "why": "LEFT JOIN mempertahankan seluruh data dari tabel sebelah kiri, dan jika tidak ada kecocokan di tabel kanan, kolom tabel kanan akan bernilai NULL."
    }
   },
   {
    "id": "sql-08",
    "num": "08",
    "title": "Relasi Tabel II: RIGHT JOIN, FULL JOIN & Self Join",
    "level": "Mahir",
    "intro": "Tipe penggabungan komprehensif dan teknik menghubungkan tabel dengan dirinya sendiri.",
    "body": "\n        <h4>🌐 RIGHT JOIN & FULL OUTER JOIN</h4>\n        <ul>\n          <li><b>RIGHT JOIN:</b> Kebalikan dari LEFT JOIN, mempertahankan seluruh baris dari tabel sebelah kanan.</li>\n          <li><b>FULL OUTER JOIN:</b> Menggabungkan kedua tabel secara total. Menampilkan semua baris dari kiri dan kanan, serta mengisi <code>NULL</code> pada sisi yang tidak memiliki pasangan cocok.</li>\n        </ul>\n\n        <h4>🪞 Self Join: Menghubungkan Tabel dengan Dirinya Sendiri</h4>\n        <p>Kasus umum di dunia kerja adalah tabel karyawan di mana setiap karyawan memiliki atasan (Manajer) yang juga sesama karyawan di tabel yang sama:</p>\n        <div class=\"code-block\"><span class=\"kw\">SELECT</span>\n  karyawan.nama <span class=\"kw\">AS</span> nama_staf,\n  manajer.nama <span class=\"kw\">AS</span> nama_atasan\n<span class=\"kw\">FROM</span> staf karyawan\n<span class=\"kw\">LEFT JOIN</span> staf manajer <span class=\"kw\">ON</span> karyawan.id_atasan = manajer.id;</div>\n        <p>Dengan memberi alias berbeda (<code>karyawan</code> dan <code>manajer</code>), kita dapat memperlakukan satu tabel fisik seolah-olah menjadi dua tabel berbeda!</p>\n      ",
    "quiz": {
     "q": "Kapan teknik Self Join biasanya diterapkan pada basis data?",
     "opts": [
      "Ketika sebuah tabel memiliki relasi hierarkis ke dirinya sendiri (seperti struktur staf dan manajer)",
      "Ketika kapasitas harddisk server hampir penuh",
      "Ketika ingin menduplikasi seluruh tabel ke database cadangan",
      "Ketika tidak ada koneksi internet pada server database"
     ],
     "ans": 0,
     "why": "Self Join digunakan saat data memiliki hubungan relasional hierarkis atau perbandingan di dalam satu tabel yang sama, seperti struktur organisasi staf dan atasan."
    }
   },
   {
    "id": "sql-09",
    "num": "09",
    "title": "Subquery & Common Table Expressions (WITH / CTE)",
    "level": "Mahir",
    "intro": "Menulis query modular yang bersih dan mudah dipelihara menggunakan CTE.",
    "body": "\n        <h4>🧩 Apa Itu Subquery (Query di dalam Query)?</h4>\n        <p>Misalkan Supriyanto ingin mencari produk apa saja yang harganya di atas rata-rata seluruh toko:</p>\n        <div class=\"code-block\"><span class=\"cm\">-- Subquery di dalam klausa WHERE</span>\n<span class=\"kw\">SELECT</span> nama_produk, harga\n<span class=\"kw\">FROM</span> produk\n<span class=\"kw\">WHERE</span> harga &gt; (<span class=\"kw\">SELECT AVG</span>(harga) <span class=\"kw\">FROM</span> produk);</div>\n\n        <h4>✨ CTE (Common Table Expressions): Query Elegan Bersih</h4>\n        <p>Subquery yang bertingkat banyak sangat sulit dibaca (seperti sarang laba-laba). Solusi modern SQL adalah menggunakan klausa <b>WITH (CTE)</b>:</p>\n        <div class=\"code-block\"><span class=\"kw\">WITH</span> PelangganSultan <span class=\"kw\">AS</span> (\n  <span class=\"kw\">SELECT</span> id_pelanggan, <span class=\"kw\">SUM</span>(total_bayar) <span class=\"kw\">AS</span> total_belanja\n  <span class=\"kw\">FROM</span> pesanan\n  <span class=\"kw\">GROUP BY</span> id_pelanggan\n  <span class=\"kw\">HAVING SUM</span>(total_bayar) &gt; 20000000\n)\n<span class=\"kw\">SELECT</span> p.nama, s.total_belanja\n<span class=\"kw\">FROM</span> PelangganSultan s\n<span class=\"kw\">JOIN</span> pelanggan p <span class=\"kw\">ON</span> s.id_pelanggan = p.id;</div>\n      ",
    "quiz": {
     "q": "Klausa apa yang digunakan dalam SQL standar untuk mendefinisikan Common Table Expression (CTE)?",
     "opts": [
      "WITH",
      "DEFINE",
      "DECLARE",
      "LET"
     ],
     "ans": 0,
     "why": "Klausa WITH digunakan untuk membuat temporary named result set (CTE) yang memudahkan pembacaan dan modularitas query yang kompleks."
    }
   },
   {
    "id": "sql-10",
    "num": "10",
    "title": "Indeks & Optimasi Query: B-Tree Index & EXPLAIN",
    "level": "Mahir",
    "intro": "Mengubah pencarian lambat Full Table Scan menjadi secepat kilat dengan struktur indeks pohon B-Tree.",
    "body": "\n        <h4>📖 Analogi Indeks di Halaman Belakang Buku</h4>\n        <p>Bayangkan Anda mencari resep masakan di buku setebal 1.000 halaman. Jika membalik halaman satu per satu dari halaman 1 sampai 1.000 (<b>Full Table Scan / Seq Scan</b>), Anda akan kelelahan. Namun jika Anda membuka halaman Indeks Alfabet di bagian belakang buku, Anda langsung tahu resep tersebut ada di halaman 345!</p>\n        <p>Itulah cara kerja <b>Index (B-Tree Index)</b> di database. Indeks membuat struktur pohon data terurut di memori sehingga pencarian data berukuran jutaan baris selesai dalam hitungan milidetik.</p>\n\n        <div class=\"code-block\"><span class=\"cm\">-- Membuat indeks pada kolom email agar proses login instan</span>\n<span class=\"kw\">CREATE INDEX</span> idx_pelanggan_email <span class=\"kw\">ON</span> pelanggan (email);\n\n<span class=\"cm\">-- Menyelidiki rencana kerja mesin database dengan EXPLAIN ANALYZE</span>\n<span class=\"kw\">EXPLAIN ANALYZE SELECT</span> * <span class=\"kw\">FROM</span> pelanggan <span class=\"kw\">WHERE</span> email = <span class=\"st\">'supriyanto@example.com'</span>;</div>\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Jangan Berlebihan:</b> Setiap indeks mempercepat pembacaan (<code>SELECT</code>), tetapi sedikit memperlambat penulisan (<code>INSERT/UPDATE</code>) karena pohon indeks harus diperbarui. Pasanglah indeks hanya pada kolom yang sering dicari atau di-JOIN!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Perintah apa yang digunakan developer untuk menganalisis rencana eksekusi dan kecepatan eksekusi query pada database?",
     "opts": [
      "EXPLAIN / EXPLAIN ANALYZE",
      "SHOW SPEED QUERY",
      "CHECK PERFORMANCE",
      "DEBUG QUERY NOW"
     ],
     "ans": 0,
     "why": "EXPLAIN (atau EXPLAIN ANALYZE di PostgreSQL/MySQL) menampilkan detail rencana eksekusi query (Query Plan), seperti apakah menggunakan index atau full table scan."
    }
   },
   {
    "id": "sql-11",
    "num": "11",
    "title": "Integritas Transaksi ACID: COMMIT & ROLLBACK",
    "level": "Expert",
    "intro": "Menjaga keutuhan data finansial perbankan: sukses semua atau tidak sama sekali.",
    "body": "\n        <h4>🏦 Studi Kasus Transfer Uang Toko Supriyanto</h4>\n        <p>Bayangkan Supriyanto mentransfer uang Rp 1.000.000 dari Rekening A ke Rekening B. Proses ini membutuhkan 2 langkah:\n        <ol>\n          <li>Saldo Rekening A dikurangi Rp 1.000.000.</li>\n          <li>Saldo Rekening B ditambah Rp 1.000.000.</li>\n        </ol>\n        Jika listrik padam atau server meledak persis setelah langkah 1 selesai, uang Supriyanto akan lenyap di antah berantah! <b>Transaksi Basis Data (ACID)</b> diciptakan untuk mencegah bencana ini.</p>\n\n        <h4>🛡️ Empat Pilar ACID</h4>\n        <ul>\n          <li><b>Atomicity:</b> Semua operasi berhasil, atau jika satu gagal maka semuanya dibatalkan (All-or-Nothing).</li>\n          <li><b>Consistency:</b> Data harus selalu mematuhi semua aturan validasi dan constraint.</li>\n          <li><b>Isolation:</b> Transaksi yang berjalan bersamaan tidak saling mengganggu.</li>\n          <li><b>Durability:</b> Begitu dinyatakan sukses (Commit), data aman tersimpan permanen meski server mati mendadak.</li>\n        </ul>\n\n        <div class=\"code-block\"><span class=\"kw\">BEGIN TRANSACTION</span>;\n  <span class=\"kw\">UPDATE</span> rekening <span class=\"kw\">SET</span> saldo = saldo - 1000000 <span class=\"kw\">WHERE</span> id = <span class=\"st\">'A'</span>;\n  <span class=\"kw\">UPDATE</span> rekening <span class=\"kw\">SET</span> saldo = saldo + 1000000 <span class=\"kw\">WHERE</span> id = <span class=\"st\">'B'</span>;\n<span class=\"kw\">COMMIT</span>; <span class=\"cm\">-- Simpan permanen jika semua lancar, atau ROLLBACK jika terjadi kegagalan</span></div>\n      ",
    "quiz": {
     "q": "Prinsip ACID manakah yang menjamin bahwa transaksi dieksekusi secara utuh atau dibatalkan seluruhnya (All-or-Nothing)?",
     "opts": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
     ],
     "ans": 0,
     "why": "Atomicity (keutuhan) memastikan bahwa seluruh rangkaian perintah dalam satu transaksi berhasil seluruhnya, atau jika gagal, database di-rollback ke kondisi semula."
    }
   },
   {
    "id": "sql-12",
    "num": "12",
    "title": "Desain Skema & Normalisasi Basis Data (1NF, 2NF, 3NF)",
    "level": "Expert",
    "intro": "Merancang arsitektur database profesional yang bebas anomali dan hemat penyimpanan.",
    "body": "\n        <h4>🏛️ Tiga Bentuk Normalisasi (1NF, 2NF, 3NF)</h4>\n        <p>Normalisasi adalah teknik perancangan skema database untuk menghilangkan redudansi (duplikasi sia-sia) dan mencegah anomali saat insert/update/delete:</p>\n        <ol>\n          <li><b>First Normal Form (1NF):</b>\n            <br>• Setiap kolom hanya boleh berisi satu nilai tunggal (Atomic Value). Tidak boleh ada daftar koma seperti: <code>hobi: \"futsal, koding, renang\"</code> di satu kolom.\n            <br>• Wajib memiliki Primary Key.</li>\n          <li><b>Second Normal Form (2NF):</b>\n            <br>• Sudah memenuhi 1NF.\n            <br>• Semua kolom non-key harus bergantung penuh pada seluruh Primary Key (menghilangkan Partial Dependency).</li>\n          <li><b>Third Normal Form (3NF):</b>\n            <br>• Sudah memenuhi 2NF.\n            <br>• Tidak boleh ada ketergantungan transitif: kolom non-key tidak boleh bergantung pada kolom non-key lainnya (misal: kolom <code>nama_kota</code> tidak boleh disimpan di tabel transaksi jika sudah ada <code>id_kota</code>).</li>\n        </ol>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh perjalanan menguasai SQL & Relational Database dari fondasi tabel dasar hingga desain skema ternormalisasi. Uji keahlian Anda di <b>Quiz SQL</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Kapan sebuah tabel basis data relasional dikatakan telah memenuhi First Normal Form (1NF)?",
     "opts": [
      "Setiap sel kolom hanya berisi satu nilai tunggal (atomic value) dan tabel memiliki Primary Key",
      "Tabel telah memiliki minimal 10 indeks B-Tree",
      "Semua tabel telah menggunakan tipe data VARCHAR",
      "Database telah terhubung ke cloud server"
     ],
     "ans": 0,
     "why": "1NF mensyaratkan setiap kolom bernilai atomik (tidak ada multiple values/array di satu kolom) serta memiliki pengenal unik utama (Primary Key)."
    }
   }
  ]
 },
 {
  "id": "ts",
  "title": "TypeScript 🔷",
  "subtitle": "Static Typing Modern: Type Annotations, Interfaces, Generics, Utility Types & Tooling",
  "accent": "blue",
  "category": "it",
  "lessons": [
   {
    "id": "ts-01",
    "num": "01",
    "title": "Mengapa TypeScript? Solusi Masalah Dinamis JS",
    "level": "Pemula",
    "intro": "Menangkap bug sebelum kode dijalankan di browser: keunggulan static type system modern.",
    "body": "\n        <h4>🛡️ Analogi Rompi Pelindung Anti-Peluru Supriyanto</h4>\n        <p>Di JavaScript murni, kita bisa menulis kode seperti ini tanpa ada peringatan sama sekali saat mengetik:</p>\n        <div class=\"code-block\"><span class=\"kw\">function</span> <span class=\"fn\">hitungTotal</span>(harga, diskon) {\n  <span class=\"kw\">return</span> harga - diskon;\n}\n\n<span class=\"cm\">// Tidak sengaja memasukkan string: hasilnya \"100000undefined\" atau NaN!</span>\n<span class=\"fn\">hitungTotal</span>(<span class=\"st\">\"seratus ribu\"</span>);</div>\n        <p>Kesalahan sepele ini baru meledak saat aplikasi sudah live diakses jutaan pengguna (<i>Runtime Error</i>). <b>TypeScript adalah JavaScript dengan sistem tipe data statis (Type Safety)</b>. TypeScript bertindak seperti rompi pelindung yang langsung memberikan garis merah di editor teks saat Anda salah memasukkan tipe data sebelum kode sempat dijalankan!</p>\n\n        <h4>⚙️ Superset JavaScript</h4>\n        <p>Semua kode JavaScript yang valid adalah kode TypeScript yang valid. Kode TypeScript dikompilasi (transpiled) menjadi JavaScript murni yang dapat berjalan di semua browser dan Node.js.</p>\n      ",
    "quiz": {
     "q": "Kapan TypeScript memeriksa dan menangkap kesalahan tipe data (type error)?",
     "opts": [
      "Saat penulisan kode dan proses kompilasi (Compile-time), sebelum aplikasi dijalankan",
      "Hanya setelah aplikasi di-deploy ke server produksi",
      "Ketika browser pengguna kehabisan kuota internet",
      "Hanya saat komputer di-restart"
     ],
     "ans": 0,
     "why": "TypeScript menerapkan static type checking saat masa kompilasi (compile-time), mencegah bug tipe data lolos ke tahap runtime produksi."
    }
   },
   {
    "id": "ts-02",
    "num": "02",
    "title": "Tipe Data Primitif, Any & Type Inference",
    "level": "Pemula",
    "intro": "Menetapkan tipe data eksplisit pada variabel dan memanfaatkan kecerdasan deteksi otomatis.",
    "body": "\n        <h4>🏷️ Type Annotations Dasar</h4>\n        <p>Kita menambahkan tanda titik dua (<code>: tipe</code>) setelah nama variabel untuk menetapkan kontrak tipe datanya:</p>\n        <div class=\"code-block\"><span class=\"kw\">let</span> nama: <span class=\"dt\">string</span> = <span class=\"st\">'Supriyanto'</span>;\n<span class=\"kw\">let</span> umur: <span class=\"dt\">number</span> = 28;\n<span class=\"kw\">let</span> isActive: <span class=\"dt\">boolean</span> = <span class=\"kw\">true</span>;\n<span class=\"kw\">let</span> kosong: <span class=\"dt\">null</span> = <span class=\"kw\">null</span>;\n<span class=\"kw\">let</span> belumAda: <span class=\"dt\">undefined</span> = <span class=\"kw\">undefined</span>;\n\n<span class=\"cm\">// Error: Type 'number' is not assignable to type 'string'.</span>\nnama = 123;</div>\n\n        <h4>🧠 Type Inference (Inferensi Tipe Cerdas)</h4>\n        <p>Anda tidak perlu menuliskan tipe secara berlebihan. Jika Anda langsung mengisi nilai awal, TypeScript cukup pintar untuk menebak tipe datanya secara otomatis:</p>\n        <div class=\"code-block\"><span class=\"kw\">let</span> alamat = <span class=\"st\">'Jakarta Selatan'</span>; <span class=\"cm\">// TypeScript otomatis tahu ini bertipe string!</span></div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">⚠️</span>\n          <div><b>Hindari 'any':</b> Tipe <code>any</code> mematikan seluruh fitur type-checker TypeScript dan mengembalikan Anda ke rimba liar JavaScript tanpa perlindungan. Hindari penggunaan <code>any</code> di kode produksi!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Mengapa programmer profesional sangat menghindari penggunaan tipe 'any' di TypeScript?",
     "opts": [
      "Karena 'any' mematikan pemeriksaan tipe data dan menghilangkan manfaat keamanan TypeScript",
      "Karena 'any' memperbesar ukuran file hingga sepuluh kali lipat",
      "Karena 'any' dilarang oleh lisensi open-source",
      "Karena 'any' hanya bisa dijalankan pada sistem operasi Linux"
     ],
     "ans": 0,
     "why": "Tipe 'any' menonaktifkan mekanisme type safety, sehingga compiler tidak lagi memeriksa keabsahan pemanggilan metode atau operasi pada variabel tersebut."
    }
   },
   {
    "id": "ts-03",
    "num": "03",
    "title": "Koleksi Data: Array, Tuples & Readonly",
    "level": "Pemula",
    "intro": "Menjaga kemurnian elemen array dan mengunci struktur data dengan Tuple dan Readonly.",
    "body": "\n        <h4>📚 Array Berjenis Kuat</h4>\n        <p>Di TypeScript, kita mendefinisikan tipe data isi array dengan sintaks <code>Tipe[]</code> atau <code>Array&lt;Tipe&gt;</code>:</p>\n        <div class=\"code-block\"><span class=\"kw\">const</span> hobiSupriyanto: <span class=\"dt\">string</span>[] = [<span class=\"st\">'Membaca'</span>, <span class=\"st\">'Koding'</span>, <span class=\"st\">'Futsal'</span>];\n<span class=\"kw\">const</span> skorUjian: <span class=\"dt\">number</span>[] = [90, 85, 95];\n\n<span class=\"cm\">// Error: Argument of type 'number' is not assignable to parameter of type 'string'</span>\nhobiSupriyanto.push(100);</div>\n\n        <h4>🎯 Tuples: Array Berukuran & Urutan Tetap</h4>\n        <p>Tuple adalah array spesial yang jumlah elemen dan tipe tiap posisinya sudah ditentukan secara kaku sejak awal (seperti koordinat GPS atau respons Hook React):</p>\n        <div class=\"code-block\"><span class=\"cm\">// Posisi 0 wajib string (nama), Posisi 1 wajib number (usia)</span>\n<span class=\"kw\">let</span> profilUser: [<span class=\"dt\">string</span>, <span class=\"dt\">number</span>] = [<span class=\"st\">'Supriyanto'</span>, 28];\n\n<span class=\"cm\">// Readonly: Mencegah array diubah atau dimodifikasi (.push / .pop dilarang)</span>\n<span class=\"kw\">const</span> config: <span class=\"kw\">readonly</span> <span class=\"dt\">string</span>[] = [<span class=\"st\">'API_KEY'</span>, <span class=\"st\">'BASE_URL'</span>];</div>\n      ",
    "quiz": {
     "q": "Apa perbedaan mendasar antara Tuple dan Array biasa di TypeScript?",
     "opts": [
      "Tuple memiliki jumlah elemen dan urutan tipe posisi yang telah ditentukan secara kaku",
      "Tuple hanya dapat menampung data angka",
      "Tuple tidak bisa diakses menggunakan indeks",
      "Tuple otomatis dikonversi menjadi file database SQL"
     ],
     "ans": 0,
     "why": "Tuple mendefinisikan tipe spesifik untuk setiap indeks dengan panjang array yang tetap, sedangkan Array biasa menampung elemen dengan tipe homogen tanpa batasan panjang kaku."
    }
   },
   {
    "id": "ts-04",
    "num": "04",
    "title": "Mengetik Fungsi: Parameter & Nilai Return",
    "level": "Pemula",
    "intro": "Menetapkan kontrak parameter wajib, opsional, default value, hingga penandaan fungsi tanpa return (void).",
    "body": "\n        <h4>✍️ Anatomi Pengetikan Fungsi</h4>\n        <p>Setiap parameter fungsi wajib memiliki tipe data yang jelas, beserta tipe nilai kembaliannya (<i>return type</i>):</p>\n        <div class=\"code-block\"><span class=\"kw\">function</span> <span class=\"fn\">kirimSalam</span>(nama: <span class=\"dt\">string</span>, umur?: <span class=\"dt\">number</span>): <span class=\"dt\">string</span> {\n  <span class=\"kw\">if</span> (umur !== <span class=\"kw\">undefined</span>) {\n    <span class=\"kw\">return</span> `Halo ${nama}, umur Anda ${umur} tahun.`;\n  }\n  <span class=\"kw\">return</span> `Halo ${nama}!`;\n}</div>\n\n        <h4>Tanda Tanya (?) untuk Parameter Opsional</h4>\n        <p>Tanda tanya pada <code>umur?: number</code> menandakan bahwa parameter tersebut tidak wajib diisi saat dipanggil. Jika tidak diisi, nilainya adalah <code>undefined</code>.</p>\n\n        <h4>🚫 Tipe Void & Never</h4>\n        <ul>\n          <li><b>void:</b> Untuk fungsi yang hanya menjalankan aksi (efek samping) tanpa mengembalikan nilai (return):\n            <br><code>function logPesan(pesan: string): void { console.log(pesan); }</code></li>\n          <li><b>never:</b> Untuk fungsi yang tidak akan pernah selesai dengan normal (misal melempar error atau infinite loop).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Tipe return value apa yang digunakan untuk fungsi yang tidak mengembalikan nilai apa pun?",
     "opts": [
      "void",
      "null",
      "undefined",
      "never"
     ],
     "ans": 0,
     "why": "Tipe void menunjukkan ketiadaan nilai kembalian pada fungsi, umum digunakan pada fungsi yang hanya mencetak log atau memodifikasi state."
    }
   },
   {
    "id": "ts-05",
    "num": "05",
    "title": "Struktur Objek & Interfaces: Kontrak Data",
    "level": "Menengah",
    "intro": "Mendefinisikan bentuk objek data dengan Interface untuk standarisasi komunikasi komponen.",
    "body": "\n        <h4>📜 Apa Itu Interface?</h4>\n        <p><b>Interface</b> adalah cetak biru atau kontrak perjanjian struktur sebuah objek. Jika ada objek yang mengklaim bertipe <code>Pengguna</code>, ia wajib memiliki semua properti yang tertulis di dalam interface tersebut:</p>\n        <div class=\"code-block\"><span class=\"kw\">interface</span> <span class=\"dt\">Pengguna</span> {\n  <span class=\"kw\">readonly</span> id: <span class=\"dt\">number</span>; <span class=\"cm\">// Tidak boleh diubah setelah dibuat</span>\n  nama: <span class=\"dt\">string</span>;\n  email: <span class=\"dt\">string</span>;\n  alamat?: <span class=\"dt\">string</span>;    <span class=\"cm\">// Opsional</span>\n}\n\n<span class=\"kw\">const</span> stafSupriyanto: <span class=\"dt\">Pengguna</span> = {\n  id: 101,\n  nama: <span class=\"st\">'Supriyanto'</span>,\n  email: <span class=\"st\">'supriyanto@example.com'</span>\n};</div>\n\n        <h4>Pewarisan Interface (extends)</h4>\n        <p>Interface sangat fleksibel dan dapat mewarisi properti dari interface lain layaknya hierarki dunia nyata:</p>\n        <div class=\"code-block\"><span class=\"kw\">interface</span> <span class=\"dt\">Admin</span> <span class=\"kw\">extends</span> <span class=\"dt\">Pengguna</span> {\n  levelHakAkses: <span class=\"dt\">number</span>;\n  departemen: <span class=\"dt\">string</span>;\n}</div>\n      ",
    "quiz": {
     "q": "Modifier apa yang digunakan di dalam Interface agar suatu properti objek tidak bisa diubah nilainya setelah pertama kali dibuat?",
     "opts": [
      "readonly",
      "const",
      "private",
      "static"
     ],
     "ans": 0,
     "why": "Keyword readonly di depan nama properti interface memastikan nilai properti tersebut bersifat imutabel (hanya bisa dibaca) setelah inisialisasi."
    }
   },
   {
    "id": "ts-06",
    "num": "06",
    "title": "Type Aliases vs Interfaces & Union / Intersection Types",
    "level": "Menengah",
    "intro": "Kapan menggunakan Type vs Interface dan menggabungkan tipe dengan Union (|) dan Intersection (&).",
    "body": "\n        <h4>⚖️ Type Alias (type) vs Interface</h4>\n        <p>Keduanya sering digunakan bergantian, namun memiliki keunggulan masing-masing:</p>\n        <ul>\n          <li><b>Interface:</b> Sangat ideal untuk mendefinisikan bentuk objek (OOP), mendukung deklarasi berulang (<i>Declaration Merging</i>), dan mudah di-extend.</li>\n          <li><b>Type Alias:</b> Sangat fleksibel untuk mendefinisikan tipe primitif kustom, Union, Tuple, dan fungsi kalkulasi.</li>\n        </ul>\n\n        <h4>🔀 Union Types (|) dan Intersection Types (&)</h4>\n        <div class=\"code-block\"><span class=\"cm\">-- Union Type: Bisa bertipe A ATAU bertipe B</span>\n<span class=\"kw\">type</span> StatusPesanan = <span class=\"st\">'pending'</span> | <span class=\"st\">'dikirim'</span> | <span class=\"st\">'selesai'</span> | <span class=\"st\">'batal'</span>;\n<span class=\"kw\">let</span> statusSekarang: StatusPesanan = <span class=\"st\">'dikirim'</span>;\n\n<span class=\"cm\">-- Intersection Type: Menggabungkan properti A DAN properti B sekaligus</span>\n<span class=\"kw\">type</span> Karyawan = { nama: <span class=\"dt\">string</span>; nip: <span class=\"dt\">string</span> };\n<span class=\"kw\">type</span> Programmer = { bahasaFavorit: <span class=\"dt\">string</span>[] };\n<span class=\"kw\">type</span> DeveloperSupriyanto = Karyawan &amp; Programmer;</div>\n      ",
    "quiz": {
     "q": "Operator mana yang digunakan di TypeScript untuk membuat Union Type (variabel yang bisa menampung salah satu dari beberapa opsi tipe)?",
     "opts": [
      "Simbol pipa vertikal ( | )",
      "Simbol ampersand ganda ( && )",
      "Simbol tanda panah ( => )",
      "Simbol titik dua ( : )"
     ],
     "ans": 0,
     "why": "Operator pipa vertikal (|) merepresentasikan Union Type, memungkinkan suatu nilai memiliki tipe A atau tipe B."
    }
   },
   {
    "id": "ts-07",
    "num": "07",
    "title": "Literal Types & Teknik Type Narrowing",
    "level": "Menengah",
    "intro": "Menyempitkan tipe data luas menjadi tipe presisi menggunakan typeof, instanceof, dan diskriminan.",
    "body": "\n        <h4>🎯 Literal Types: Mengunci Nilai Eksak</h4>\n        <p>Alih-alih membiarkan tipe bernilai <code>string</code> sembarangan, kita bisa menguncinya pada sekumpulan kata spesifik:</p>\n        <div class=\"code-block\"><span class=\"kw\">type</span> ArahMataAngin = <span class=\"st\">'Utara'</span> | <span class=\"st\">'Selatan'</span> | <span class=\"st\">'Timur'</span> | <span class=\"st\">'Barat'</span>;\n<span class=\"kw\">function</span> <span class=\"fn\">navigasi</span>(arah: ArahMataAngin) { ... }</div>\n\n        <h4>🔬 Type Narrowing (Penyempitan Tipe)</h4>\n        <p>Ketika suatu parameter menerima <code>string | number</code>, TypeScript menuntut Anda memastikan tipe nyatanya sebelum memanggil metode spesifik:</p>\n        <div class=\"code-block\"><span class=\"kw\">function</span> <span class=\"fn\">cetakID</span>(id: <span class=\"dt\">string</span> | <span class=\"dt\">number</span>) {\n  <span class=\"kw\">if</span> (<span class=\"kw\">typeof</span> id === <span class=\"st\">'string'</span>) {\n    <span class=\"cm\">// Di blok ini, TypeScript 100% tahu id adalah string</span>\n    console.log(id.toUpperCase());\n  } <span class=\"kw\">else</span> {\n    <span class=\"cm\">// Di blok ini, TypeScript 100% tahu id adalah number</span>\n    console.log(id.toFixed(2));\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Apa fungsi dari teknik Type Narrowing di TypeScript?",
     "opts": [
      "Menyempitkan tipe data yang luas/union menjadi tipe yang lebih spesifik di dalam blok logika kode",
      "Menghapus spasi kosong pada string secara otomatis",
      "Mengurangi resolusi gambar website",
      "Mempercepat waktu booting komputer"
     ],
     "ans": 0,
     "why": "Type Narrowing menyaring tipe dari union menjadi tipe pasti menggunakan type guards (seperti typeof, instanceof, in) sehingga operasi pada tipe tersebut aman dijalankan."
    }
   },
   {
    "id": "ts-08",
    "num": "08",
    "title": "Generics: Komponen Fleksibel Reusable",
    "level": "Mahir",
    "intro": "Menciptakan fungsi dan struktur data bunglon yang tetap aman tanpa kehilangan tipe data asli.",
    "body": "\n        <h4>📦 Analogi Kotak Paket Ajaib (Generics &lt;T&gt;)</h4>\n        <p>Bayangkan Supriyanto ingin membuat fungsi pembungkus API response. Jika menggunakan tipe kaku <code>Pengguna</code>, fungsi tersebut tidak bisa dipakai membungkus data <code>Produk</code>. Jika menggunakan <code>any</code>, kita kehilangan keamanan tipe data.</p>\n        <p><b>Generics (&lt;T&gt;)</b> adalah parameter penampung tipe data (tipe variabel dinamis). Fungsi tetap fleksibel menerima apa pun, namun tipe data di dalamnya tetap terkunci rapat!</p>\n\n        <div class=\"code-block\"><span class=\"kw\">interface</span> <span class=\"dt\">ApiResponse</span>&lt;<span class=\"dt\">T</span>&gt; {\n  sukses: <span class=\"dt\">boolean</span>;\n  pesan: <span class=\"dt\">string</span>;\n  data: <span class=\"dt\">T</span>; <span class=\"cm\">// Tipe data ditentukan saat fungsi dipanggil!</span>\n}\n\n<span class=\"kw\">interface</span> <span class=\"dt\">User</span> { nama: <span class=\"dt\">string</span>; role: <span class=\"dt\">string</span>; }\n<span class=\"kw\">interface</span> <span class=\"dt\">Produk</span> { judul: <span class=\"dt\">string</span>; harga: <span class=\"dt\">number</span>; }\n\n<span class=\"kw\">const</span> responsUser: <span class=\"dt\">ApiResponse</span>&lt;<span class=\"dt\">User</span>&gt; = {\n  sukses: <span class=\"kw\">true</span>,\n  pesan: <span class=\"st\">'User ditemukan'</span>,\n  data: { nama: <span class=\"st\">'Supriyanto'</span>, role: <span class=\"st\">'Admin'</span> }\n};</div>\n      ",
    "quiz": {
     "q": "Kapan developer paling tepat memanfaatkan fitur Generics (<T>) di TypeScript?",
     "opts": [
      "Ketika ingin membuat komponen, fungsi, atau interface yang reusable untuk berbagai macam tipe data dengan tetap menjaga type safety",
      "Ketika ingin membuat animasi tombol 3D",
      "Ketika ingin mengonfigurasi koneksi database MySQL",
      "Ketika ingin membagi kode menjadi dua file terpisah"
     ],
     "ans": 0,
     "why": "Generics memungkinkan pembuatan fungsi atau struktur data yang dapat bekerja dengan beragam tipe data tanpa mengorbankan keamanan type checking."
    }
   },
   {
    "id": "ts-09",
    "num": "09",
    "title": "Enums vs Const Objects: Memilih Pendekatan Terbaik",
    "level": "Mahir",
    "intro": "Menghindari jebakan overhead kode runtime Enum dan memanfaatkan as const objects yang ringan.",
    "body": "\n        <h4>🔢 Mengenal Enum Tradisional</h4>\n        <p>Enum memungkinkan kita mengelompokkan konstanta bernama:</p>\n        <div class=\"code-block\"><span class=\"kw\">enum</span> <span class=\"dt\">Arah</span> {\n  Utara = <span class=\"st\">'UTARA'</span>,\n  Selatan = <span class=\"st\">'SELATAN'</span>,\n  Timur = <span class=\"st\">'TIMUR'</span>,\n  Barat = <span class=\"st\">'BARAT'</span>\n}\n<span class=\"kw\">const</span> tujuan: <span class=\"dt\">Arah</span> = <span class=\"dt\">Arah</span>.Utara;</div>\n\n        <h4>🚀 Alternatif Modern: Objects dengan 'as const'</h4>\n        <p>Banyak tim modern (termasuk tim core TypeScript) lebih menyukai <b>as const objects</b> karena tidak menghasilkan kode boilerplate JavaScript tambahan di hasil kompilasi akhir:</p>\n        <div class=\"code-block\"><span class=\"kw\">const</span> ROLES = {\n  ADMIN: <span class=\"st\">'admin'</span>,\n  USER: <span class=\"st\">'user'</span>,\n  GUEST: <span class=\"st\">'guest'</span>\n} <span class=\"kw\">as const</span>;\n\n<span class=\"cm\">// Menghasilkan union: \"admin\" | \"user\" | \"guest\"</span>\n<span class=\"kw\">type</span> Role = <span class=\"kw\">typeof</span> ROLES[<span class=\"kw\">keyof typeof</span> ROLES];</div>\n      ",
    "quiz": {
     "q": "Apa keuntungan utama menggunakan pola objek 'as const' dibandingkan Enum numerik di TypeScript?",
     "opts": [
      "Lebih ringan dan tidak menghasilkan kode wrapper JavaScript tambahan di file hasil kompilasi akhir",
      "Otomatis tersimpan ke dalam database cloud",
      "Mampu menggandakan kecepatan prosesor komputer",
      "Menghilangkan kebutuhan menulis fungsi"
     ],
     "ans": 0,
     "why": "Objek dengan 'as const' adalah pola JavaScript standar yang zero-cost saat kompilasi tanpa kode fungsi wrapper tambahan seperti enum klasik."
    }
   },
   {
    "id": "ts-10",
    "num": "10",
    "title": "OOP Modern: Classes, Modifiers & Implements",
    "level": "Mahir",
    "intro": "Pemrograman berorientasi objek dengan pembatasan hak akses public, private, protected, dan abstraksi.",
    "body": "\n        <h4>🛡️ Access Modifiers (Hak Akses Properti)</h4>\n        <p>TypeScript menyediakan 3 kata kunci pengaman enkapsulasi data class:</p>\n        <ul>\n          <li><b>public:</b> Bisa diakses bebas dari mana saja (default).</li>\n          <li><b>private (atau #):</b> Hanya bisa diakses dari dalam class itu sendiri. Terlindung rapat dari luar!</li>\n          <li><b>protected:</b> Bisa diakses dari dalam class dan class turunannya (anak turunan pewarisan).</li>\n        </ul>\n\n        <div class=\"code-block\"><span class=\"kw\">class</span> <span class=\"dt\">AkunBank</span> {\n  <span class=\"kw\">private</span> saldo: <span class=\"dt\">number</span>;\n  <span class=\"kw\">public readonly</span> nomorRekening: <span class=\"dt\">string</span>;\n\n  <span class=\"kw\">constructor</span>(noRek: <span class=\"dt\">string</span>, saldoAwal: <span class=\"dt\">number</span>) {\n    <span class=\"kw\">this</span>.nomorRekening = noRek;\n    <span class=\"kw\">this</span>.saldo = saldoAwal;\n  }\n\n  <span class=\"kw\">public</span> <span class=\"fn\">cekSaldo</span>(): <span class=\"dt\">number</span> {\n    <span class=\"kw\">return this</span>.saldo;\n  }\n}</div>\n      ",
    "quiz": {
     "q": "Access modifier mana yang hanya mengizinkan properti diakses di dalam class itu sendiri dan class anak turunannya?",
     "opts": [
      "protected",
      "private",
      "public",
      "internal"
     ],
     "ans": 0,
     "why": "Modifier protected mengizinkan akses properti di dalam class yang mendefinisikannya serta sub-class yang mewarisinya, namun melarang akses langsung dari luar."
    }
   },
   {
    "id": "ts-11",
    "num": "11",
    "title": "Koleksi Utility Types Sakti: Partial, Pick, Omit & Record",
    "level": "Expert",
    "intro": "Mentransformasi tipe data yang sudah ada menjadi tipe baru tanpa menulis ulang dari awal.",
    "body": "\n        <h4>🧙‍♂️ Empat Mantra Sakti Utility Types</h4>\n        <p>Alih-alih membuat 10 interface yang mirip-mirip, TypeScript memiliki alat pembentuk tipe instan:</p>\n        <div class=\"code-block\"><span class=\"kw\">interface</span> <span class=\"dt\">Barang</span> {\n  id: <span class=\"dt\">number</span>;\n  nama: <span class=\"dt\">string</span>;\n  harga: <span class=\"dt\">number</span>;\n  deskripsi: <span class=\"dt\">string</span>;\n}\n\n<span class=\"cm\">-- 1. Partial: Mengubah SEMUA properti menjadi opsional (cocok untuk operasi Update)</span>\n<span class=\"kw\">type</span> UpdateBarang = <span class=\"dt\">Partial</span>&lt;<span class=\"dt\">Barang</span>&gt;;\n\n<span class=\"cm\">-- 2. Pick: Mengambil HANYA properti tertentu yang dipilih</span>\n<span class=\"kw\">type</span> PreviewBarang = <span class=\"dt\">Pick</span>&lt;<span class=\"dt\">Barang</span>, <span class=\"st\">'id'</span> | <span class=\"st\">'nama'</span>&gt;;\n\n<span class=\"cm\">-- 3. Omit: Membuang properti tertentu dan mengambil sisanya</span>\n<span class=\"kw\">type</span> BarangBaru = <span class=\"dt\">Omit</span>&lt;<span class=\"dt\">Barang</span>, <span class=\"st\">'id'</span>&gt;;\n\n<span class=\"cm\">-- 4. Record: Membuat pasangan Key-Value dengan aturan tipe ketat</span>\n<span class=\"kw\">type</span> StokToko = <span class=\"dt\">Record</span>&lt;<span class=\"dt\">string</span>, <span class=\"dt\">number</span>&gt;;</div>\n      ",
    "quiz": {
     "q": "Utility type manakah yang digunakan untuk membuat tipe baru dengan membuang (mengecualikan) properti tertentu dari interface asli?",
     "opts": [
      "Omit<T, K>",
      "Pick<T, K>",
      "Partial<T>",
      "Exclude<T, U>"
     ],
     "ans": 0,
     "why": "Omit<T, K> mengonstruksi tipe baru dengan mengambil seluruh properti dari T kecuali properti kunci K yang disebutkan."
    }
   },
   {
    "id": "ts-12",
    "num": "12",
    "title": "Konfigurasi tsconfig.json & Panduan Migrasi Proyek",
    "level": "Expert",
    "intro": "Menjinakkan compiler TypeScript, flag strict mode, dan strategi bertahap migrasi proyek nyata.",
    "body": "\n        <h4>⚙️ Jantung Kendali: tsconfig.json</h4>\n        <p>File <code>tsconfig.json</code> adalah pusat kendali bagaimana compiler TypeScript memproses kode proyek Anda:</p>\n        <div class=\"code-block\">{\n  <span class=\"st\">\"compilerOptions\"</span>: {\n    <span class=\"st\">\"target\"</span>: <span class=\"st\">\"ES2022\"</span>,          <span class=\"cm\">/* Versi output JavaScript */</span>\n    <span class=\"st\">\"module\"</span>: <span class=\"st\">\"NodeNext\"</span>,\n    <span class=\"st\">\"strict\"</span>: <span class=\"kw\">true</span>,              <span class=\"cm\">/* Wajib aktif: Menyalakan seluruh pemeriksaan ketat */</span>\n    <span class=\"st\">\"noImplicitAny\"</span>: <span class=\"kw\">true</span>,       <span class=\"cm\">/* Melarang variabel tanpa tipe menjadi any diam-diam */</span>\n    <span class=\"st\">\"esModuleInterop\"</span>: <span class=\"kw\">true</span>,\n    <span class=\"st\">\"skipLibCheck\"</span>: <span class=\"kw\">true</span>,\n    <span class=\"st\">\"outDir\"</span>: <span class=\"st\">\"./dist\"</span>           <span class=\"cm\">/* Folder hasil kompilasi JS murni */</span>\n  },\n  <span class=\"st\">\"include\"</span>: [<span class=\"st\">\"src/**/*\"</span>]\n}</div>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh perjalanan menguasai TypeScript dari fondasi type annotations hingga konfigurasi enterprise compiler. Uji keahlian Anda di <b>Quiz TypeScript</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Opsi konfigurasi mana di tsconfig.json yang mengaktifkan seluruh aturan pemeriksaan tipe paling ketat untuk menjamin kualitas kode terbaik?",
     "opts": [
      "\"strict\": true",
      "\"fastMode\": true",
      "\"noErrors\": true",
      "\"autoFix\": true"
     ],
     "ans": 0,
     "why": "\"strict\": true menyalakan sekumpulan flag pemeriksaan tipe ketat (seperti noImplicitAny, strictNullChecks, dll.) yang menjadi standar emas industri."
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
 },
 {
  "id": "korean",
  "title": "Bahasa Korea 🇰🇷",
  "subtitle": "Hangeul, Salam, Angka, Partikel Tata Bahasa & Percakapan Praktis Sehari-hari",
  "accent": "sky",
  "category": "lang",
  "lessons": [
   {
    "id": "ko-01",
    "num": "01",
    "title": "Abjad Hangeul I: 10 Vokal & 14 Konsonan Dasar",
    "level": "Pemula 0",
    "intro": "Mengenal sistem abjad paling logis dan ilmiah di dunia: huruf Hangeul ciptaan Raja Sejong yang bisa dibaca dalam hitungan jam.",
    "body": "\n        <h4>👑 Mengapa Hangeul Sangat Mudah Dipelajari?</h4>\n        <p>Sebelum abad ke-15, rakyat Korea kesulitan membaca karakter Hanja yang rumit. Raja Sejong yang Agung menciptakan <b>Hangeul (한글)</b> dengan filosofi bentuk organ bicara manusia (bibir, lidah, dan langit-langit mulut). Hangeul bukan huruf gambar abstrak, melainkan huruf fonetik alfabetik yang sangat teratur!</p>\n\n        <h4>🗣️ 10 Vokal Tunggal Dasar</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Hangeul</th><th>Romanisasi</th><th>Analogi Bunyi Bahasa Indonesia</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ko-char\">ㅏ</span></td><td><span class=\"zh-pinyin\">a</span></td><td>Seperti huruf \"A\" pada kata \"Ayah\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅑ</span></td><td><span class=\"zh-pinyin\">ya</span></td><td>Seperti huruf \"Ya\" pada kata \"Yakin\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅓ</span></td><td><span class=\"zh-pinyin\">eo</span></td><td>Bunyi vokal \"O\" terbuka seperti \"Organ\" atau \"Onde-onde\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅕ</span></td><td><span class=\"zh-pinyin\">yeo</span></td><td>Bunyi \"Yo\" terbuka seperti kata \"Yogurt\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅗ</span></td><td><span class=\"zh-pinyin\">o</span></td><td>Bunyi vokal \"O\" bulat tertutup seperti \"Obor\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅛ</span></td><td><span class=\"zh-pinyin\">yo</span></td><td>Bunyi \"Yo\" bulat seperti mainan \"Yoyo\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅜ</span></td><td><span class=\"zh-pinyin\">u</span></td><td>Bunyi \"U\" bibir mengerucut seperti \"Udang\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅠ</span></td><td><span class=\"zh-pinyin\">yu</span></td><td>Bunyi \"Yu\" seperti kata \"Yuyu\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅡ</span></td><td><span class=\"zh-pinyin\">eu</span></td><td>Bunyi \"E\" datar mendesis seperti \"Elang\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅣ</span></td><td><span class=\"zh-pinyin\">i</span></td><td>Bunyi \"I\" tersenyum lebar seperti \"Ikan\"</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🧱 14 Konsonan Dasar</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Hangeul</th><th>Nama</th><th>Bunyi Awal / Akhir</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ko-char\">ㄱ</span></td><td>Giyeok</td><td>G / K (seperti lidah menyentuh langit-langit belakang)</td></tr>\n            <tr><td><span class=\"ko-char\">ㄴ</span></td><td>Nieun</td><td>N (seperti bentuk ujung lidah menyentuh gusi atas)</td></tr>\n            <tr><td><span class=\"ko-char\">ㄷ</span></td><td>Digeut</td><td>D / T</td></tr>\n            <tr><td><span class=\"ko-char\">ㄹ</span></td><td>Rieul</td><td>R / L (bergetar lembut)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅁ</span></td><td>Mieum</td><td>M (kotak seperti bentuk bibir tertutup)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅂ</span></td><td>Bieup</td><td>B / P</td></tr>\n            <tr><td><span class=\"ko-char\">ㅅ</span></td><td>Siot</td><td>S (seperti bentuk gigi atas)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅇ</span></td><td>Ieung</td><td>Diam (silent) saat di awal suku kata, berbunyi \"NG\" saat di akhir!</td></tr>\n            <tr><td><span class=\"ko-char\">ㅈ</span></td><td>Jieut</td><td>J / T</td></tr>\n            <tr><td><span class=\"ko-char\">ㅊ</span></td><td>Chieut</td><td>Ch (dihembuskan kuat dengan udara)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅋ</span></td><td>Kieok</td><td>K (aspirasi kuat seperti 'Kh')</td></tr>\n            <tr><td><span class=\"ko-char\">ㅌ</span></td><td>Tieut</td><td>T (aspirasi kuat)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅍ</span></td><td>Pieup</td><td>P (aspirasi kuat)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅎ</span></td><td>Hieut</td><td>H</td></tr>\n          </tbody>\n        </table>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Aturan Balok Lego:</b> Huruf Hangeul tidak ditulis berjejer mendatar seperti huruf latin, melainkan disusun membentuk blok suku kata kotak (Konsonan + Vokal, misal: <span class=\"ko-char\">가</span> = ㄱ + ㅏ). Jika suku kata diawali vokal, tambahkan lingkaran netral <span class=\"ko-char\">ㅇ</span> di awal (misal: <span class=\"ko-char\">아</span>).</div>\n        </div>\n      ",
    "quiz": {
     "q": "Bagaimana cara menulis suku kata vokal murni 'A' dalam abjad Hangeul yang benar?",
     "opts": [
      "아 (menggunakan konsonan netral ㅇ di depan vokal ㅏ)",
      "ㅏ (hanya menulis garis vokal saja)",
      "가",
      "나"
     ],
     "ans": 0,
     "why": "Dalam sistem penulisan Hangeul, sebuah blok suku kata wajib memiliki konsonan awal. Jika bunyinya vokal murni, digunakan lingkaran netral 'ㅇ' yang tidak berbunyi di awal (아)."
    }
   },
   {
    "id": "ko-02",
    "num": "02",
    "title": "Abjad Hangeul II: Vokal Ganda & Konsonan Kembar",
    "level": "Pemula 0",
    "intro": "Menuntaskan seluruh variasi huruf: bunyi vokal gabungan (Diftong) dan konsonan ganda bernada tegang.",
    "body": "\n        <h4>🌈 Vokal Ganda (Kombinasi Elegan)</h4>\n        <p>Vokal ganda dibentuk dengan menggabungkan dua vokal dasar secara harmonis:</p>\n        <table class=\"zh-table\">\n          <thead><tr><th>Hangeul</th><th>Romanisasi</th><th>Cara Pengucapan</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ko-char\">ㅐ</span></td><td><span class=\"zh-pinyin\">ae</span></td><td>Bunyi \"E\" terbuka seperti \"Ember\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅔ</span></td><td><span class=\"zh-pinyin\">e</span></td><td>Bunyi \"E\" santai seperti \"Enak\" (dalam percakapan modern terdengar mirip ㅐ)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅒ</span></td><td><span class=\"zh-pinyin\">yae</span></td><td>Bunyi \"Yae\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅖ</span></td><td><span class=\"zh-pinyin\">ye</span></td><td>Bunyi \"Ye\" seperti \"Yes\"</td></tr>\n            <tr><td><span class=\"ko-char\">ㅘ</span></td><td><span class=\"zh-pinyin\">wa</span></td><td>Bunyi \"Wa\" seperti \"Wajan\" (ㅗ + ㅏ)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅝ</span></td><td><span class=\"zh-pinyin\">wo</span></td><td>Bunyi \"Wo\" seperti \"Wortel\" (ㅜ + ㅓ)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅟ</span></td><td><span class=\"zh-pinyin\">wi</span></td><td>Bunyi \"Wi\" seperti \"Wisma\" (ㅜ + ㅣ)</td></tr>\n            <tr><td><span class=\"ko-char\">ㅢ</span></td><td><span class=\"zh-pinyin\">ui</span></td><td>Bunyi \"Eu-i\" cepat menyatu</td></tr>\n          </tbody>\n        </table>\n\n        <h4>⚡ 5 Konsonan Ganda (Bunyi Tegang / Tense)</h4>\n        <p>Konsonan kembar diucapkan tanpa hembusan napas, melainkan ditekan kencang di pita suara layaknya nada tegas:</p>\n        <ul>\n          <li><span class=\"ko-char\">ㄲ</span> (Ssang-giyeok) → Bunyi \"KK\" kencang dan padat (seperti 'Kk' di kata 'Kakak').</li>\n          <li><span class=\"ko-char\">ㄸ</span> (Ssang-digeut) → Bunyi \"TT\" tegas.</li>\n          <li><span class=\"ko-char\">ㅃ</span> (Ssang-bieup) → Bunyi \"PP\" mantap.</li>\n          <li><span class=\"ko-char\">ㅆ</span> (Ssang-siot) → Bunyi \"SS\" mendesis tajam.</li>\n          <li><span class=\"ko-char\">ㅉ</span> (Ssang-jieut) → Bunyi \"JJ\" meledak.</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Huruf konsonan kembar 'ㄲ' diucapkan dengan cara seperti apa?",
     "opts": [
      "Ditekan tegas dan tegang di pita suara (KK padat)",
      "Ditiup dengan hembusan angin yang sangat kuat",
      "Dilesapkan menjadi bunyi desis S",
      "Tidak diucapkan sama sekali"
     ],
     "ans": 0,
     "why": "Konsonan ganda (ssang-jaeum) seperti ㄲ, ㄸ, ㅃ, ㅆ, ㅉ memiliki karakteristik suara tegang (tense) tanpa hembusan udara napas."
    }
   },
   {
    "id": "ko-03",
    "num": "03",
    "title": "Rahasia Konsonan Akhir (Batchim) & Hukum Alami",
    "level": "Pemula",
    "intro": "Kunci terdengar seperti penutur asli: melafalkan konsonan bawah (Batchim) dan perpindahan bunyi alami.",
    "body": "\n        <h4>⚓ Apa Itu Batchim (받침)?</h4>\n        <p>Konsonan yang menempati posisi paling bawah dalam balok suku kata disebut <b>Batchim</b> (alas/jangkar penyangga). Meskipun ada 14 konsonan tunggal dan konsonan ganda, saat berada di posisi Batchim, semuanya disederhanakan menjadi <b>7 bunyi dasar</b> saja:</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Bunyi Akhir</th><th>Huruf Hangeul yang Menghasilkannya</th><th>Contoh Kata &amp; Arti</th></tr></thead>\n          <tbody>\n            <tr><td><b>[ K ]</b></td><td>ㄱ, ㅋ, ㄲ</td><td><span class=\"ko-char\">책</span> (Chaek = Buku), <span class=\"ko-char\">부엌</span> (Bueok = Dapur)</td></tr>\n            <tr><td><b>[ N ]</b></td><td>ㄴ</td><td><span class=\"ko-char\">눈</span> (Nun = Mata / Salju)</td></tr>\n            <tr><td><b>[ T ]</b></td><td>ㄷ, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ</td><td><span class=\"ko-char\">옷</span> (Ot = Pakaian), <span class=\"ko-char\">꽃</span> (Kkot = Bunga)</td></tr>\n            <tr><td><b>[ L ]</b></td><td>ㄹ</td><td><span class=\"ko-char\">물</span> (Mul = Air)</td></tr>\n            <tr><td><b>[ M ]</b></td><td>ㅁ</td><td><span class=\"ko-char\">마음</span> (Ma-eum = Hati / Perasaan)</td></tr>\n            <tr><td><b>[ P ]</b></td><td>ㅂ, ㅍ</td><td><span class=\"ko-char\">밥</span> (Bap = Nasi), <span class=\"ko-char\">잎</span> (Ip = Daun)</td></tr>\n            <tr><td><b>[ NG ]</b></td><td>ㅇ</td><td><span class=\"ko-char\">방</span> (Bang = Kamar)</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🌊 Hukum Penghubung Alami (Liaison / 연음)</h4>\n        <p>Jika suku kata pertama berakhiran Batchim dan suku kata berikutnya diawali vokal (ㅇ), konsonan bawah otomatis <b>meluncur naik ke atas</b> agar lidah mengalir santai:</p>\n        <p><i>Contoh:</i> <span class=\"ko-char\">한국어</span> (Han-guk + eo) dibaca menjadi <b>Hangugeo</b>!</p>\n      ",
    "quiz": {
     "q": "Bagaimana cara membaca kata '한국어' (Bahasa Korea) yang benar sesuai hukum pelafalan Liaison?",
     "opts": [
      "Hangugeo (konsonan g meluncur menyambung ke vokal eo)",
      "Han guk eo (berhenti kaku per suku kata)",
      "Hangueo",
      "Hangkuk"
     ],
     "ans": 0,
     "why": "Sesuai hukum liaison (yeon-eum), konsonan batchim 'ㄱ' pada '국' menyambung ke vokal '어' di sebelahnya sehingga dibaca mengalir: 'Hangugeo'."
    }
   },
   {
    "id": "ko-04",
    "num": "04",
    "title": "Salam, Maaf & Etika Kesopanan (존댓말 Jondaetmal)",
    "level": "Pemula",
    "intro": "Menyapa orang dengan sopan, mengucapkan terima kasih, dan memahami budaya bahasa hormat Korea.",
    "body": "\n        <h4>🙇 Budaya Kesopanan Bahasa Korea</h4>\n        <p>Di Korea, tingkatan bahasa sangat dihargai. Kepada orang yang baru dikenal, rekan kerja, dan orang yang lebih tua, kita selalu menggunakan <b>Jondaetmal (Bahasa Sopan / Formal)</b> yang berakhiran <i>-yo</i> atau <i>-nida</i>.</p>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Frasa Hangeul</th><th>Romanisasi</th><th>Arti &amp; Situasi</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ko-char\">안녕하세요</span></td><td><span class=\"zh-pinyin\">Annyeonghaseyo</span></td><td>Halo / Selamat pagi/siang/malam (Sopan universal)</td></tr>\n            <tr><td><span class=\"ko-char\">감사합니다</span></td><td><span class=\"zh-pinyin\">Gamsahamnida</span></td><td>Terima kasih banyak (Formal hormat)</td></tr>\n            <tr><td><span class=\"ko-char\">고마워요</span></td><td><span class=\"zh-pinyin\">Gomawoyo</span></td><td>Terima kasih (Sopan akrab)</td></tr>\n            <tr><td><span class=\"ko-char\">죄송합니다</span></td><td><span class=\"zh-pinyin\">Joesonghamnida</span></td><td>Mohon maaf / Maafkan saya (Formal)</td></tr>\n            <tr><td><span class=\"ko-char\">괜찮아요</span></td><td><span class=\"zh-pinyin\">Gwaenchanhayo</span></td><td>Tidak apa-apa / Semua baik-baik saja</td></tr>\n            <tr><td><span class=\"ko-char\">안녕히 계세요</span></td><td><span class=\"zh-pinyin\">Annyeonghi gyeseyo</span></td><td>Selamat tinggal (Dikatakan kepada orang yang tetap tinggal di tempat)</td></tr>\n            <tr><td><span class=\"ko-char\">안녕히 가세요</span></td><td><span class=\"zh-pinyin\">Annyeonghi gaseyo</span></td><td>Selamat jalan (Dikatakan kepada orang yang pergi)</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Salam perpisahan apa yang Anda katakan kepada tuan rumah saat Anda berpamitan pulang duluan?",
     "opts": [
      "Annyeonghi gyeseyo (Selamat tinggal bagi yang tetap tinggal)",
      "Annyeonghi gaseyo",
      "Gamsahamnida",
      "Joesonghamnida"
     ],
     "ans": 0,
     "why": "'Annyeonghi gyeseyo' secara harfiah berarti 'Tinggallah dalam damai', diucapkan kepada pihak yang tetap tinggal di tempat saat kita berpamitan pergi."
    }
   },
   {
    "id": "ko-05",
    "num": "05",
    "title": "Perkenalan Diri Supriyanto (은/는 & 이에요/예요)",
    "level": "Pemula",
    "intro": "Menyusun kalimat identitas diri: nama, profesi software engineer, dan negara asal Indonesia.",
    "body": "\n        <h4>👤 Partikel Topik: 은 (Eun) vs 는 (Neun)</h4>\n        <p>Dalam tata bahasa Korea, subjek atau topik utama kalimat selalu ditempeli stiker partikel topik:\n        <ul>\n          <li>Gunakan <b>은 (eun)</b> jika kata berakhiran konsonan (Batchim).</li>\n          <li>Gunakan <b>는 (neun)</b> jika kata berakhiran vokal (tanpa Batchim).</li>\n        </ul>\n        <i>Contoh:</i> <span class=\"ko-char\">저는</span> (Jeo-neun = Saya adalah...)</p>\n\n        <h4>🏷️ Akhiran Predikat Identitas: 이에요 vs 예요 (= adalah)</h4>\n        <ul>\n          <li>Jika kata berakhiran konsonan → gunakan <b>이에요 (i-e-yo)</b>.</li>\n          <li>Jika kata berakhiran vokal → gunakan <b>예요 (ye-yo)</b>.</li>\n        </ul>\n\n        <h4>💬 Naskah Dialog Perkenalan Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Perkenalan Diri di Kantor Baru</span>\nSupriyanto: 안녕하세요! 저는 수프리얀토예요.\n   <span class=\"st\">(Annyeonghaseyo! Jeoneun Supeuriyantoyeyo. - Halo! Saya adalah Supriyanto.)</span>\n\nRekan:      반가워요! 수프리얀토 씨는 어느 나라 사람이에요?\n   <span class=\"st\">(Bangawoyo! Supeuriyanto ssineun eoneu nara saram-ieyo? - Senang bertemu! Supriyanto orang negara mana?)</span>\n\nSupriyanto: 저는 인도네시아 사람이에요. 소프트웨어 엔지니어예요.\n   <span class=\"st\">(Jeoneun Indonesia saram-ieyo. Sopeuteuwe-eo enjinieo-yeyo. - Saya orang Indonesia. Saya software engineer.)</span></div>\n      ",
    "quiz": {
     "q": "Bagaimana kalimat Supriyanto untuk memperkenalkan dirinya: 'Saya adalah Supriyanto' dalam bahasa Korea sopan?",
     "opts": [
      "저는 수프리얀토예요. (Jeoneun Supeuriyantoyeyo)",
      "저는 수프리얀토이에요.",
      "수프리얀토는 저예요.",
      "안녕 수프리얀토."
     ],
     "ans": 0,
     "why": "Kata '수프리얀토' diakhiri huruf vokal 'ㅗ', sehingga menggunakan akhiran identitas '예요' (Jeoneun Supeuriyantoyeyo)."
    }
   },
   {
    "id": "ko-06",
    "num": "06",
    "title": "Kepemilikan & Keberadaan (이/가 & 있어요/없어요)",
    "level": "Pemula",
    "intro": "Menyatakan kepemilikan benda dan keberadaan ada/tidak ada barang di sekitar kita.",
    "body": "\n        <h4>📦 Rumus Sakti Keberadaan: 있어요 (Ada/Punya) vs 없어요 (Tidak Ada)</h4>\n        <p>Untuk menyatakan punya/ada sesuatu, gunakan rumus: <b>[Kata Benda] + [이/가] + 있어요 (Isseoyo)</b>:</p>\n        <ul>\n          <li>Berakhiran konsonan → pasang partikel subjek <b>이 (i)</b>.</li>\n          <li>Berakhiran vokal → pasang partikel subjek <b>가 (ga)</b>.</li>\n        </ul>\n\n        <table class=\"zh-table\">\n          <thead><tr><th>Kalimat Korea</th><th>Romanisasi</th><th>Arti Bahasa Indonesia</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ko-char\">시간이 있어요.</span></td><td><span class=\"zh-pinyin\">Sigani isseoyo.</span></td><td>Saya punya waktu / Ada waktu.</td></tr>\n            <tr><td><span class=\"ko-char\">돈이 없어요.</span></td><td><span class=\"zh-pinyin\">Doni eopseoyo.</span></td><td>Saya tidak punya uang.</td></tr>\n            <tr><td><span class=\"ko-char\">질문이 있어요?</span></td><td><span class=\"zh-pinyin\">Jilmuni isseoyo?</span></td><td>Apakah ada pertanyaan?</td></tr>\n            <tr><td><span class=\"ko-char\">차(가) 있어요.</span></td><td><span class=\"zh-pinyin\">Chaga isseoyo.</span></td><td>Saya punya mobil.</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Bagaimana cara mengatakan 'Saya tidak punya mobil' dalam bahasa Korea?",
     "opts": [
      "차가 없어요. (Chaga eopseoyo.)",
      "차가 있어요.",
      "돈이 있어요.",
      "차는 사람이에요."
     ],
     "ans": 0,
     "why": "Kata '차' (mobil) berakhiran vokal sehingga memakai partikel '가', dan '없어요' menyatakan ketidakberadaan / tidak punya (Chaga eopseoyo)."
    }
   },
   {
    "id": "ko-07",
    "num": "07",
    "title": "Dua Sistem Angka Korea: Sino-Korea vs Native Korea",
    "level": "Menengah",
    "intro": "Membedakan kapan menggunakan sistem angka serapan Tiongkok (uang, tanggal) vs angka asli Korea (umur, jam, jumlah barang).",
    "body": "\n        <h4>🔢 Mengapa Ada 2 Sistem Angka di Korea?</h4>\n        <p>Sama seperti bahasa Indonesia yang memiliki hitungan biasa dan satuan khusus, bahasa Korea membagi penggunaan angka secara tegas:</p>\n\n        <h4>1. Angka Sino-Korea (Uang, Tanggal, Menit, Nomor Telepon)</h4>\n        <p>1 (<span class=\"ko-char\">일</span> il), 2 (<span class=\"ko-char\">이</span> i), 3 (<span class=\"ko-char\">삼</span> sam), 4 (<span class=\"ko-char\">사</span> sa), 5 (<span class=\"ko-char\">오</span> o), 6 (<span class=\"ko-char\">육</span> yuk), 7 (<span class=\"ko-char\">칠</span> chil), 8 (<span class=\"ko-char\">팔</span> pal), 9 (<span class=\"ko-char\">구</span> gu), 10 (<span class=\"ko-char\">십</span> sip).</p>\n        <p><i>Contoh:</i> 10.000 Won = <span class=\"ko-char\">만 원</span> (Man won).</p>\n\n        <h4>2. Angka Asli Korea (Jam, Umur, Menghitung Jumlah Benda / Orang)</h4>\n        <p>1 (<span class=\"ko-char\">하나</span> hana), 2 (<span class=\"ko-char\">둘</span> dul), 3 (<span class=\"ko-char\">셋</span> set), 4 (<span class=\"ko-char\">넷</span> net), 5 (<span class=\"ko-char\">다섯</span> daseot), 6 (<span class=\"ko-char\">여섯</span> yeoseot), 7 (<span class=\"ko-char\">일곱</span> ilgop), 8 (<span class=\"ko-char\">여덟</span> yeodeol), 9 (<span class=\"ko-char\">아홉</span> ahop), 10 (<span class=\"ko-char\">열</span> yeol).</p>\n        <p><i>Contoh:</i> 2 cangkir kopi = <span class=\"ko-char\">커피 두 잔</span> (Keopi du jan - hana/dul/set/net berubah jadi ha/du/se/ne saat menempel pada satuan hitung!).</p>\n      ",
    "quiz": {
     "q": "Sistem angka mana yang digunakan untuk menyebutkan harga belanja uang Won dan nomor telepon di Korea?",
     "opts": [
      "Sistem Angka Sino-Korea (일, 이, 삼, 사...)",
      "Sistem Angka Asli Korea (하나, 둘, 셋...)",
      "Sistem Romawi kuno",
      "Hanya menggunakan angka biner"
     ],
     "ans": 0,
     "why": "Angka Sino-Korea digunakan untuk menghitung nominal uang (Won), menit waktu, nomor telepon, lantai gedung, dan tanggal kalender."
    }
   },
   {
    "id": "ko-08",
    "num": "08",
    "title": "Kata Kerja & Akhiran Waktu Sekarang (-아요/-어요)",
    "level": "Menengah",
    "intro": "Mengonjugasi kata kerja kamus (-다) menjadi kalimat percakapan santai sopan sehari-hari.",
    "body": "\n        <h4>🔧 Rumus Harmonisasi Vokal Pembentukan Kata Kerja</h4>\n        <p>Semua kata kerja dasar di kamus Korea berakhiran <b>-다 (da)</b>. Buang kata <code>-다</code>, lalu lihat huruf vokal terakhirnya:</p>\n        <ul>\n          <li>Jika vokal terakhir adalah <b>ㅏ (a)</b> atau <b>ㅗ (o)</b> → tambahkan <b>-아요 (a-yo)</b>.\n            <br>• <span class=\"ko-char\">가다</span> (Gada = Pergi) → <span class=\"ko-char\">가요</span> (Gayo = Saya pergi).\n            <br>• <span class=\"ko-char\">보다</span> (Boda = Melihat) → <span class=\"ko-char\">봐요</span> (Bwayo = Saya menonton).</li>\n          <li>Jika vokal terakhir SELAIN ㅏ atau ㅗ → tambahkan <b>-어요 (eo-yo)</b>.\n            <br>• <span class=\"ko-char\">먹다</span> (Meokda = Makan) → <span class=\"ko-char\">먹어요</span> (Meogeoyo = Saya makan).\n            <br>• <span class=\"ko-char\">읽다</span> (Ilgda = Membaca) → <span class=\"ko-char\">읽어요</span> (Ilgeoyo = Saya membaca).</li>\n          <li>Khusus kata kerja berakhiran <b>하다 (Hada = Melakukan)</b> → selalu berubah menjadi <b>해요 (Haeyo)</b>!\n            <br>• <span class=\"ko-char\">공부하다</span> (Belajar) → <span class=\"ko-char\">공부해요</span> (Gongbuhaeyo).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Bagaimana bentuk konjugasi sopan masa sekarang dari kata kerja '먹다' (Meokda = Makan)?",
     "opts": [
      "먹어요 (Meogeoyo)",
      "먹아요",
      "먹해요",
      "먹다요"
     ],
     "ans": 0,
     "why": "Kata dasar '먹' memiliki vokal 'ㅓ' (bukan ㅏ atau ㅗ), sehingga menurut aturan harmonisasi vokal mendapat akhiran '-어요' menjadi '먹어요'."
    }
   },
   {
    "id": "ko-09",
    "num": "09",
    "title": "Jam, Tanggal & Pola Keterangan Waktu (Partikel 에)",
    "level": "Menengah",
    "intro": "Menyusun keterangan waktu: rumus unik kombinasi jam Native Korea dan menit Sino-Korea.",
    "body": "\n        <h4>⏰ Rumus Unik Jam Korea (Native + Sino)</h4>\n        <p>Masyarakat Korea menggabungkan kedua sistem angka dalam satu kalimat waktu:\n        <br><b>[Angka Asli Korea] + 시 (Si = Jam) + [Angka Sino-Korea] + 분 (Bun = Menit)</b></p>\n        <p><i>Contoh:</i> Jam 3:30 = <span class=\"ko-char\">세 시 삼십 분</span> (Se si sam-sip bun) atau <span class=\"ko-char\">세 시 반</span> (Se si ban = Jam 3 setengah).</p>\n\n        <h4>📍 Partikel Waktu: 에 (e = pada/di)</h4>\n        <p>Tempelkan partikel <b>에</b> pada keterangan waktu:</p>\n        <div class=\"code-block\"><span class=\"cm\">// Supriyanto makan siang pada jam 12</span>\n수프리얀토 씨는 열두 시에 점심을 먹어요.\n<span class=\"st\">(Supeuriyanto ssineun yeoldu sie jeomsimeul meogeoyo.)</span></div>\n      ",
    "quiz": {
     "q": "Bagaimana cara mengucapkan 'Jam 2 tepat' dalam bahasa Korea?",
     "opts": [
      "두 시 (Du si)",
      "이 시",
      "둘 시",
      "하나 시"
     ],
     "ans": 0,
     "why": "Jam selalu menggunakan angka asli Korea (하나, 둘, 셋...) dan saat menempel pada satuan hitung '시' (jam), angka '둘' disingkat menjadi '두' (Du si)."
    }
   },
   {
    "id": "ko-10",
    "num": "10",
    "title": "Menanyakan Lokasi: Partikel 에서 (Aktivitas) vs 에 (Arah)",
    "level": "Menengah",
    "intro": "Membedakan dengan tepat di mana aktivitas berlangsung (에서) vs arah tujuan tempat (에).",
    "body": "\n        <h4>🏢 Perbedaan Fatal: 에 vs 에서</h4>\n        <ul>\n          <li><b>에 (e):</b> Menunjukkan lokasi diam keberadaan barang (ada di...) atau arah tujuan gerakan (pergi ke...):\n            <br>• <span class=\"ko-char\">회사에 가요.</span> (Hoesae gayo = Pergi ke kantor).\n            <br>• <span class=\"ko-char\">집에 있어요.</span> (Jibe isseoyo = Berada di rumah).</li>\n          <li><b>에서 (eseo):</b> Menunjukkan tempat di mana suatu <b>aktivitas aktif dinamis</b> sedang dikerjakan (belajar di, makan di, koding di):\n            <br>• <span class=\"ko-char\">카페에서 일해요.</span> (Kape-eseo ilhaeyo = Bekerja di kafe).\n            <br>• <span class=\"ko-char\">식당에서 밥을 먹어요.</span> (Sikdang-eseo babeul meogeoyo = Makan nasi di restoran).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Partikel tempat mana yang tepat untuk melengkapi kalimat aktivitas: 'Kape___ kodinghaeyo' (Saya koding di kafe)?",
     "opts": [
      "에서 (Kape-eseo)",
      "에",
      "은",
      "를"
     ],
     "ans": 0,
     "why": "Partikel '에서' digunakan untuk menandai lokasi tempat terjadinya suatu kegiatan atau tindakan dinamis (seperti bekerja, belajar, atau makan)."
    }
   },
   {
    "id": "ko-11",
    "num": "11",
    "title": "Memesan Makanan di Restoran Korea (주세요)",
    "level": "Mahir",
    "intro": "Kata ajaib 주세요 (tolong berikan) untuk memesan makanan, meminta bon, dan air minum.",
    "body": "\n        <h4>🙏 Kata Paling Berharga di Korea: 주세요 (Juseyo)</h4>\n        <p>Cukup sebutkan nama menu makanan lalu tambahkan <b>주세요 (Juseyo = Tolong berikan saya...)</b>:</p>\n        <div class=\"code-block\"><span class=\"cm\">// Memesan di Restoran BBQ Korea</span>\nSupriyanto: 여기요! 삼겹살 2인분 주세요.\n   <span class=\"st\">(Yeogiyo! Samgyeopsal i-inbun juseyo. - Permisi! Tolong berikan Samgyeopsal 2 porsi.)</span>\n\nPelayan:    네, 알겠습니다. 음료수는요?\n   <span class=\"st\">(Ne, algetseumnida. Eumryosuneunyo? - Baik, dimengerti. Minumannya?)</span>\n\nSupriyanto: 물 좀 주세요. 그리고 안 맵게 해주세요!\n   <span class=\"st\">(Mul jom juseyo. Geurigo an maepge haejuseyo! - Tolong minta air putih. Dan tolong buat jangan pedas!)</span></div>\n      ",
    "quiz": {
     "q": "Kata apa yang digunakan untuk memanggil pelayan restoran dengan sopan di Korea ('Permisi di sini!')?",
     "opts": [
      "여기요! (Yeogiyo!) atau 저기요! (Jeogiyo!)",
      "안녕!",
      "주세요!",
      "미안해!"
     ],
     "ans": 0,
     "why": "'여기요' (Yeogiyo = di sini) atau '저기요' (Jeogiyo = di sana) adalah ungkapan standar sopan untuk memanggil perhatian pelayan di restoran Korea."
    }
   },
   {
    "id": "ko-12",
    "num": "12",
    "title": "Berbelanja & Bertanya Harga: 얼마예요? & 깎아주세요",
    "level": "Mahir",
    "intro": "Menanyakan harga barang dan jurus menawar ramah di pasar tradisional Myeongdong.",
    "body": "\n        <h4>🛍️ Belanja Seperti Warga Lokal</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Frasa Korea</th><th>Romanisasi</th><th>Arti Bahasa Indonesia</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ko-char\">이거 얼마예요?</span></td><td><span class=\"zh-pinyin\">Igeo eolmayeyo?</span></td><td>Ini harganya berapa?</td></tr>\n            <tr><td><span class=\"ko-char\">너무 비싸요!</span></td><td><span class=\"zh-pinyin\">Neomu bissayo!</span></td><td>Mahal sekali!</td></tr>\n            <tr><td><span class=\"ko-char\">조금만 깎아주세요.</span></td><td><span class=\"zh-pinyin\">Jogeumman kkak-ajuseyo.</span></td><td>Boleh tolong diskon sedikit?</td></tr>\n            <tr><td><span class=\"ko-char\">카드 돼요?</span></td><td><span class=\"zh-pinyin\">Kadeu dwaeyo?</span></td><td>Bisa bayar pakai kartu kredit/debit?</td></tr>\n            <tr><td><span class=\"ko-char\">영수증 주세요.</span></td><td><span class=\"zh-pinyin\">Yeongsujeung juseyo.</span></td><td>Tolong berikan struk belanja.</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Bagaimana cara menanyakan harga barang 'Ini berapa harganya?' dalam bahasa Korea?",
     "opts": [
      "이거 얼마예요? (Igeo eolmayeyo?)",
      "이거 어디예요?",
      "이거 누구예요?",
      "이거 뭐예요?"
     ],
     "ans": 0,
     "why": "'얼마' berarti berapa banyak (harga), sehingga '이거 얼마예요?' adalah frasa standar untuk menanyakan harga barang."
    }
   },
   {
    "id": "ko-13",
    "num": "13",
    "title": "Arah & Transportasi Kota: Taksi & Subway (지하철)",
    "level": "Mahir",
    "intro": "Navigasi sistem kereta bawah tanah Seoul dan memandu sopir taksi ke tempat tujuan.",
    "body": "\n        <h4>🚇 Naik Subway & Taksi Seoul</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Naik Taksi Supriyanto di Bandara Incheon</span>\nSopir:       어디로 가세요?\n   <span class=\"st\">(Eodiro gaseyo? - Mau pergi ke mana?)</span>\n\nSupriyanto:  강남역으로 가주세요.\n   <span class=\"st\">(Gangnam-yeog-euro gajuseyo. - Tolong antar ke Stasiun Gangnam.)</span>\n\nSupriyanto:  여기서 내려주세요. 감사합니다!\n   <span class=\"st\">(Yeogiseo naeryeojuseyo. Gamsahamnida! - Tolong turunkan saya di sini. Terima kasih!)</span></div>\n\n        <h4>Arah Navigasi Dasar</h4>\n        <ul>\n          <li>Kiri: <span class=\"ko-char\">왼쪽</span> (Oenjjok) → <span class=\"ko-char\">왼쪽으로 가세요</span> (Belok ke kiri).</li>\n          <li>Kanan: <span class=\"ko-char\">오른쪽</span> (Oreunjjok) → <span class=\"ko-char\">오른쪽으로 가세요</span> (Belok ke kanan).</li>\n          <li>Lurus: <span class=\"ko-char\">곧장 / 쭉 가세요</span> (Jjuk gaseyo = Jalan lurus terus).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Kalimat apa yang Anda katakan kepada sopir taksi saat ingin turun di lokasi saat ini: 'Tolong turunkan saya di sini'?",
     "opts": [
      "여기서 내려주세요. (Yeogiseo naeryeojuseyo.)",
      "저기서 타세요.",
      "빨리 가세요.",
      "어디로 가요?"
     ],
     "ans": 0,
     "why": "'여기서' (di sini) + '내려주세요' (tolong turunkan) adalah ungkapan yang digunakan saat penumpang ingin berhenti dan turun dari kendaraan."
    }
   },
   {
    "id": "ko-14",
    "num": "14",
    "title": "Mengungkapkan Keinginan (-고 싶어요) & Obrolan Santai",
    "level": "Expert",
    "intro": "Mengekspresikan impian, hobi, dan roadmap menjadi fasih bahasa Korea secara mandiri.",
    "body": "\n        <h4>🌟 Rumus Keinginan: -고 싶어요 (Go sipeoyo)</h4>\n        <p>Untuk mengatakan <i>'Saya ingin / kepingin melakukan sesuatu'</i>, cukup tempelkan <b>-고 싶어요</b> langsung pada akar kata kerja tanpa pusing memikirkan vokal:</p>\n        <div class=\"code-block\"><span class=\"cm\">// Contoh Keinginan Supriyanto</span>\n• 한국에 가고 싶어요. (Saya ingin pergi ke Korea.)\n• 한국어를 잘하고 싶어요. (Saya ingin mahir bahasa Korea.)\n• 커피를 마시고 싶어요. (Saya ingin minum kopi.)</div>\n\n        <h4>🚀 Trik Lolos Ujian TOPIK & Fasih Otodidak</h4>\n        <ol>\n          <li><b>Metode Shadowing:</b> Dengarkan drama atau podcast Korea dan tirukan intonasinya persis secara real-time.</li>\n          <li><b>Hafalkan Pola Kalimat, Bukan Kata Lepas:</b> Menghafal 'Babeul meogeoyo' jauh lebih lekat di otak daripada hanya menghafal kata 'bap'.</li>\n        </ol>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menuntaskan seluruh 14 modul kurikulum Bahasa Korea dari pengenalan abjad Hangeul hingga ekspresi keinginan percakapan lancar. Uji pemahaman Anda di <b>Quiz Bahasa Korea</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Bagaimana cara menyusun kalimat 'Saya ingin belajar bahasa Korea' menggunakan rumus -고 싶어요?",
     "opts": [
      "한국어를 공부하고 싶어요. (Hangugeoreul gongbuhago sipeoyo.)",
      "한국어를 공부해요 싶어요.",
      "한국어를 공부가 있어요.",
      "한국어는 공부하고 없어요."
     ],
     "ans": 0,
     "why": "Akar kata kerja '공부하' (belajar) langsung digabungkan dengan akhiran keinginan '-고 싶어요' menjadi '공부하고 싶어요'."
    }
   }
  ]
 },
 {
  "id": "japanese",
  "title": "Bahasa Jepang 🇯🇵",
  "subtitle": "Hiragana, Katakana, Kanji Dasar, Partikel Inti & Percakapan Praktis Sehari-hari",
  "accent": "rose",
  "category": "lang",
  "lessons": [
   {
    "id": "ja-01",
    "num": "01",
    "title": "Hiragana Bagian 1: Vokal A-I-U-E-O hingga Baris Na",
    "level": "Pemula 0",
    "intro": "Mengenal huruf fonetik berlekuk luwes pertama bahasa Jepang: fondasi membaca kata asli Jepang.",
    "body": "\n        <h4>🌸 Tiga Sistem Huruf Bahasa Jepang</h4>\n        <p>Bahasa Jepang memiliki 3 jenis tulisan yang digunakan berdampingan secara harmonis:\n        <ol>\n          <li><b>Hiragana (ひらがな):</b> 46 huruf berlekuk halus untuk kosakata asli Jepang dan partikel tata bahasa.</li>\n          <li><b>Katakana (カタカナ):</b> 46 huruf bersudut kaku tegas untuk kata serapan asing dan nama luar negeri.</li>\n          <li><b>Kanji (漢字):</b> Karakter gambar makna yang diadopsi dari Tiongkok.</li>\n        </ol>\n        Kita mulai dari <b>Hiragana</b>!</p>\n\n        <h4>🎵 Vokal Dasar (A - I - U - E - O) &amp; Baris Ka, Sa, Ta, Na</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Baris</th><th>Karakter Hiragana</th><th>Romanisasi (Romaji)</th><th>Trik Memori Visual</th></tr></thead>\n          <tbody>\n            <tr><td><b>Vokal</b></td><td><span class=\"ja-char\">あ</span> <span class=\"ja-char\">い</span> <span class=\"ja-char\">う</span> <span class=\"ja-char\">え</span> <span class=\"ja-char\">お</span></td><td>a - i - u - e - o</td><td>Ingat urutan vokal Jepang selalu A-I-U-E-O</td></tr>\n            <tr><td><b>Baris K</b></td><td><span class=\"ja-char\">か</span> <span class=\"ja-char\">き</span> <span class=\"ja-char\">く</span> <span class=\"ja-char\">け</span> <span class=\"ja-char\">こ</span></td><td>ka - ki - ku - ke - ko</td><td><span class=\"ja-char\">く</span> seperti mulut burung Ku-ku</td></tr>\n            <tr><td><b>Baris S</b></td><td><span class=\"ja-char\">さ</span> <span class=\"ja-char\">し</span> <span class=\"ja-char\">す</span> <span class=\"ja-char\">せ</span> <span class=\"ja-char\">そ</span></td><td>sa - <b>shi</b> - su - se - so</td><td>Perhatikan <span class=\"ja-char\">し</span> dibaca 'Shi', bukan 'Si'</td></tr>\n            <tr><td><b>Baris T</b></td><td><span class=\"ja-char\">た</span> <span class=\"ja-char\">ち</span> <span class=\"ja-char\">つ</span> <span class=\"ja-char\">て</span> <span class=\"ja-char\">と</span></td><td>ta - <b>chi</b> - <b>tsu</b> - te - to</td><td>Perhatikan <span class=\"ja-char\">ち</span> (Chi) dan <span class=\"ja-char\">つ</span> (Tsu tsunami)</td></tr>\n            <tr><td><b>Baris N</b></td><td><span class=\"ja-char\">な</span> <span class=\"ja-char\">に</span> <span class=\"ja-char\">ぬ</span> <span class=\"ja-char\">ね</span> <span class=\"ja-char\">の</span></td><td>na - ni - nu - ne - no</td><td><span class=\"ja-char\">の</span> bentuknya melingkar bulat sempurna</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Bagaimana cara membaca karakter Hiragana pada baris 'S' berikut ini: 'し'?",
     "opts": [
      "Shi",
      "Si",
      "Sa",
      "Su"
     ],
     "ans": 0,
     "why": "Dalam sistem fonetik bahasa Jepang standar, baris S untuk vokal I dilafalkan sebagai 'Shi' (し), bukan 'Si'."
    }
   },
   {
    "id": "ja-02",
    "num": "02",
    "title": "Hiragana Bagian 2: Baris Ha sampai N & Tanda Dakuten",
    "level": "Pemula 0",
    "intro": "Menuntaskan seluruh 46 Hiragana serta modifikasi bunyi berdengung dengan tanda petik Tenten (゛) dan Maru (゜).",
    "body": "\n        <h4>🍃 Baris Ha, Ma, Ya, Ra, Wa & N</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Baris</th><th>Karakter Hiragana</th><th>Romaji</th></tr></thead>\n          <tbody>\n            <tr><td><b>Baris H</b></td><td><span class=\"ja-char\">は</span> <span class=\"ja-char\">ひ</span> <span class=\"ja-char\">ふ</span> <span class=\"ja-char\">へ</span> <span class=\"ja-char\">ほ</span></td><td>ha - hi - <b>fu</b> - he - ho (fu dihembuskan lembut)</td></tr>\n            <tr><td><b>Baris M</b></td><td><span class=\"ja-char\">ま</span> <span class=\"ja-char\">み</span> <span class=\"ja-char\">む</span> <span class=\"ja-char\">め</span> <span class=\"ja-char\">も</span></td><td>ma - mi - mu - me - mo</td></tr>\n            <tr><td><b>Baris Y</b></td><td><span class=\"ja-char\">や</span> (ya), <span class=\"ja-char\">ゆ</span> (yu), <span class=\"ja-char\">よ</span> (yo)</td><td>ya - yu - yo (hanya ada 3)</td></tr>\n            <tr><td><b>Baris R</b></td><td><span class=\"ja-char\">ら</span> <span class=\"ja-char\">り</span> <span class=\"ja-char\">る</span> <span class=\"ja-char\">れ</span> <span class=\"ja-char\">ろ</span></td><td>ra - ri - ru - re - ro (lidah mengetuk lembut seperti L/R)</td></tr>\n            <tr><td><b>Baris W</b></td><td><span class=\"ja-char\">わ</span> (wa), <span class=\"ja-char\">を</span> (wo / o)</td><td>wa - o</td></tr>\n            <tr><td><b>Konsonan N</b></td><td><span class=\"ja-char\">ん</span> (n)</td><td>Konsonan tunggal 'n' atau 'ng'</td></tr>\n          </tbody>\n        </table>\n\n        <h4>✨ Tanda Pengubah Bunyi: Tenten (゛) &amp; Maru (゜)</h4>\n        <p>Cukup tambahkan tanda petik dua di pojok kanan atas untuk mengubah bunyi:</p>\n        <ul>\n          <li>Baris K + ゛ → Baris <b>G</b> (<span class=\"ja-char\">が ぎ ぐ げ ご</span> = ga, gi, gu, ge, go).</li>\n          <li>Baris S + ゛ → Baris <b>Z</b> (<span class=\"ja-char\">ざ じ ず ぜ ぞ</span> = za, <b>ji</b>, zu, ze, zo).</li>\n          <li>Baris T + ゛ → Baris <b>D</b> (<span class=\"ja-char\">だ ぢ づ で ど</span> = da, ji, dzu, de, do).</li>\n          <li>Baris H + ゛ → Baris <b>B</b> (<span class=\"ja-char\">ば び ぶ べ ぼ</span> = ba, bi, bu, be, bo).</li>\n          <li>Baris H + ゜ → Baris <b>P</b> (<span class=\"ja-char\">ぱ ぴ ぷ ぺ ぽ</span> = pa, pi, pu, pe, po).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Karakter 'は' (ha) jika diberi tanda lingkaran kecil Maru (゜) di atasnya berubah bunyinya menjadi apa?",
     "opts": [
      "ぱ (Pa)",
      "ば (Ba)",
      "が (Ga)",
      "ざ (Za)"
     ],
     "ans": 0,
     "why": "Tanda lingkaran Maru (handakuten) khusus pada baris H mengubah bunyinya menjadi bunyi letup P (pa, pi, pu, pe, po)."
    }
   },
   {
    "id": "ja-03",
    "num": "03",
    "title": "Huruf Katakana: Kata Serapan Asing & Istilah Modern",
    "level": "Pemula 0",
    "intro": "Membaca menu kafe, istilah teknologi IT, dan nama orang asing menggunakan huruf bersudut Katakana.",
    "body": "\n        <h4>📐 Ciri Khas Huruf Katakana (カタカナ)</h4>\n        <p>Bunyi Katakana sama persis 1:1 dengan Hiragana, namun bentuk goresannya lebih tegak lurus dan bersudut kaku layaknya balok geometris. Katakana digunakan untuk:\n        <ul>\n          <li><b>Nama orang dan negara non-Jepang:</b> Indonesia (<span class=\"ja-char\">インドネシア</span>), Supriyanto (<span class=\"ja-char\">スプリヤント</span>).</li>\n          <li><b>Kosakata serapan modern:</b> Kopi (<span class=\"ja-char\">コーヒー</span>), Komputer (<span class=\"ja-char\">コンピューター</span>), Hotel (<span class=\"ja-char\">ホテル</span>).</li>\n        </ul>\n        </p>\n\n        <h4>➖ Tanda Vokal Panjang: Chōonpu (ー)</h4>\n        <p>Garis mendatar (<code>ー</code>) pada Katakana menandakan vokal tersebut diucapkan panjang 2 ketukan:</p>\n        <p><i>Contoh:</i> <span class=\"ja-char\">ケーキ</span> (Kēki = Kue / Cake), <span class=\"ja-char\">タクシー</span> (Takushī = Taksi).</p>\n      ",
    "quiz": {
     "q": "Bagaimana cara penulisan nama negara 'Indonesia' dalam huruf Katakana yang tepat?",
     "opts": [
      "インドネシア (Indoneshia)",
      "いんどねしあ",
      "アメリカ",
      "にほん"
     ],
     "ans": 0,
     "why": "Nama negara asing ditulis menggunakan abjad Katakana: イ (i) + ン (n) + ド (do) + ネ (ne) + シ (shi) + ア (a) = インドネシア."
    }
   },
   {
    "id": "ja-04",
    "num": "04",
    "title": "Kanji Dasar Sehari-hari: Cara Baca Onyomi vs Kunyomi",
    "level": "Pemula",
    "intro": "Menghilangkan rasa takut pada Kanji: piktogram gambar alam dan rahasia dua cara membaca.",
    "body": "\n        <h4>🎨 Kanji Adalah Gambar Visual Kehidupan</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Kanji</th><th>Arti Asli</th><th>Visual Asal-Usul Gambar</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ja-char\">日</span></td><td>Matahari / Hari</td><td>Bentuk bulatan matahari dengan bintik di tengah</td></tr>\n            <tr><td><span class=\"ja-char\">月</span></td><td>Bulan / Masa</td><td>Bentuk bulan sabit di langit malam</td></tr>\n            <tr><td><span class=\"ja-char\">木</span></td><td>Pohon / Kayu</td><td>Pohon dengan batang kokoh dan akar menghunjam</td></tr>\n            <tr><td><span class=\"ja-char\">山</span></td><td>Gunung</td><td>Tiga puncak gunung berjejer</td></tr>\n            <tr><td><span class=\"ja-char\">川</span></td><td>Sungai</td><td>Tiga garis aliran air sungai mengalir deras</td></tr>\n            <tr><td><span class=\"ja-char\">人</span></td><td>Orang / Manusia</td><td>Dua kaki manusia sedang melangkah maju</td></tr>\n          </tbody>\n        </table>\n\n        <h4>🔍 Mengapa Satu Kanji Punya 2 Cara Baca?</h4>\n        <ul>\n          <li><b>Onyomi (Bunyi Tiongkok):</b> Dipakai saat Kanji bergandengan dengan Kanji lain membentuk kata majemuk (misal: <span class=\"ja-char\">日本</span> = Ni-hon = Jepang).</li>\n          <li><b>Kunyomi (Bunyi Asli Jepang):</b> Dipakai saat Kanji berdiri sendiri (misal: <span class=\"ja-char\">ひと</span> = hito = orang).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Kapan cara baca Onyomi (bunyi serapan Tiongkok) biasanya digunakan pada karakter Kanji?",
     "opts": [
      "Ketika dua atau lebih karakter Kanji bergabung membentuk kata majemuk",
      "Ketika Kanji berdiri sendiri tanpa huruf lain",
      "Hanya saat menulis nama hewan",
      "Ketika berbicara dengan anak kecil"
     ],
     "ans": 0,
     "why": "Cara baca Onyomi umumnya dipakai saat beberapa kanji bergabung menjadi kosakata majemuk (seperti 日本, 大学, 先生)."
    }
   },
   {
    "id": "ja-05",
    "num": "05",
    "title": "Salam & Etika Percakapan Bahasa Jepang (Aisatsu)",
    "level": "Pemula",
    "intro": "Mengawali hari dengan salam hangat, membungkuk sopan (Ojigi), dan ungkapan terima kasih.",
    "body": "\n        <h4>🌅 Salam Sehari-hari (挨拶 Aisatsu)</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Frasa Jepang</th><th>Romaji</th><th>Arti Bahasa Indonesia &amp; Waktu</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ja-char\">おはようございます</span></td><td><span class=\"zh-pinyin\">Ohayou gozaimasu</span></td><td>Selamat pagi (Sopan)</td></tr>\n            <tr><td><span class=\"ja-char\">こんにちは</span></td><td><span class=\"zh-pinyin\">Konnichiwa</span></td><td>Selamat siang / Halo universal</td></tr>\n            <tr><td><span class=\"ja-char\">こんばんは</span></td><td><span class=\"zh-pinyin\">Konbanwa</span></td><td>Selamat malam</td></tr>\n            <tr><td><span class=\"ja-char\">ありがとうございます</span></td><td><span class=\"zh-pinyin\">Arigatou gozaimasu</span></td><td>Terima kasih banyak</td></tr>\n            <tr><td><span class=\"ja-char\">すみません</span></td><td><span class=\"zh-pinyin\">Sumimasen</span></td><td>Permisi / Maaf (Kata ajaib paling multifungsi!)</td></tr>\n            <tr><td><span class=\"ja-char\">さようなら</span></td><td><span class=\"zh-pinyin\">Sayounara</span></td><td>Selamat tinggal</td></tr>\n            <tr><td><span class=\"ja-char\">じゃあ、また！</span></td><td><span class=\"zh-pinyin\">Jaa, mata!</span></td><td>Sampai jumpa lagi nanti!</td></tr>\n          </tbody>\n        </table>\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">💡</span>\n          <div><b>Kata Ajaib 'Sumimasen':</b> Anda bisa menggunakan <code>Sumimasen</code> untuk memanggil pelayan restoran, meminta maaf saat menyenggol orang di kereta, maupun saat berterima kasih karena dibantu!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Kata multifungsi apa yang paling sering digunakan orang Jepang untuk permisi, memanggil pelayan, maupun meminta maaf?",
     "opts": [
      "Sumimasen (すみません)",
      "Sayounara",
      "Konnichiwa",
      "Oyasuminasai"
     ],
     "ans": 0,
     "why": "'Sumimasen' adalah kata paling berguna dalam bahasa Jepang untuk meminta maaf ringan, permisi lewat, maupun memanggil pelayan restoran."
    }
   },
   {
    "id": "ja-06",
    "num": "06",
    "title": "Perkenalan Diri Supriyanto (Pola 〜は〜です)",
    "level": "Pemula",
    "intro": "Rumus fondasi kalimat bahasa Jepang: Subjek + は + Predikat + です (A adalah B).",
    "body": "\n        <h4>🧱 Rumus Emas Kalimat Jepang: A は B です</h4>\n        <p>Partikel <b>は</b> (ditulis 'ha', tetapi saat berfungsi sebagai partikel dibaca <b>'wa'</b>!) menandakan topik utama kalimat:</p>\n        <div class=\"code-block\"><span class=\"cm\">// Rumus: [Saya] wa [Identitas] desu</span>\nわたし は スプリヤント です。\n<span class=\"st\">(Watashi wa Supriyanto desu. - Saya adalah Supriyanto.)</span></div>\n\n        <h4>💬 Naskah Dialog Perkenalan Diri Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Pertemuan Pertama dengan Rekan Kerja</span>\nSupriyanto: はじめまして！わたしはスプリヤントです。\n   <span class=\"st\">(Hajimemashite! Watashi wa Supriyanto desu. - Senang pertama kali bertemu! Saya adalah Supriyanto.)</span>\n\nSupriyanto: インドネシアから来ました。エンジニアです。\n   <span class=\"st\">(Indonesia kara kimashita. Enjinia desu. - Saya datang dari Indonesia. Saya seorang engineer.)</span>\n\nSupriyanto: どうぞよろしくお願いします！\n   <span class=\"st\">(Douzo yoroshiku onegaishimasu! - Mohon bimbingan dan kerjasamanya!)</span>\n\nTanaka:     田中です。こちらこそ、よろしくお願いします！\n   <span class=\"st\">(Tanaka desu. Kochirakoso, yoroshiku onegaishimasu! - Saya Tanaka. Saya juga senang bekerja sama dengan Anda!)</span></div>\n      ",
    "quiz": {
     "q": "Bagaimana cara membaca partikel penanda topik 'は' ketika berada di dalam kalimat (contoh: わたしは)?",
     "opts": [
      "Dibaca 'Wa'",
      "Dibaca 'Ha'",
      "Dibaca 'He'",
      "Tidak dibaca"
     ],
     "ans": 0,
     "why": "Secara historis huruf 'は' berbunyi 'ha', namun ketika berfungsi khusus sebagai partikel penanda topik kalimat, ia wajib dilafalkan sebagai 'wa'."
    }
   },
   {
    "id": "ja-07",
    "num": "07",
    "title": "Menunjuk Benda & Lokasi: Kore, Sore, Are & Doko",
    "level": "Pemula",
    "intro": "Menunjuk barang dekat pembicara (kore), dekat lawan bicara (sore), dan jauh dari keduanya (are).",
    "body": "\n        <h4>📍 Sistem Penunjuk Tiga Zona (Ko - So - A - Do)</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Zona Lokasi</th><th>Menunjuk Benda (Ini/Itu)</th><th>Menunjuk Tempat (Sini/Situ/Sana)</th></tr></thead>\n          <tbody>\n            <tr><td><b>Dekat Saya (Pembicara)</b></td><td><span class=\"ja-char\">これ</span> (Kore = Ini)</td><td><span class=\"ja-char\">ここ</span> (Koko = Di sini)</td></tr>\n            <tr><td><b>Dekat Kamu (Lawan Bicara)</b></td><td><span class=\"ja-char\">それ</span> (Sore = Itu)</td><td><span class=\"ja-char\">そこ</span> (Soko = Di situ)</td></tr>\n            <tr><td><b>Jauh dari Kita Berdua</b></td><td><span class=\"ja-char\">あれ</span> (Are = Yang di sana itu)</td><td><span class=\"ja-char\">あそこ</span> (Asoko = Di sebelah sana)</td></tr>\n            <tr><td><b>Kata Tanya (Mana?)</b></td><td><span class=\"ja-char\">どれ</span> (Dore = Yang mana?)</td><td><span class=\"ja-char\">どこ</span> (Doko = Di mana?)</td></tr>\n          </tbody>\n        </table>\n        <p><i>Contoh Bertanya Tempat:</i> <span class=\"ja-char\">トイレはどこですか？</span> (Toire wa doko desu ka? = Toilet di mana ya?)</p>\n      ",
    "quiz": {
     "q": "Bagaimana cara menanyakan 'Toilet ada di mana?' dalam bahasa Jepang yang sopan?",
     "opts": [
      "トイレはどこですか？ (Toire wa doko desu ka?)",
      "トイレはここですか？",
      "トイレはだれですか？",
      "トイレはなんですか？"
     ],
     "ans": 0,
     "why": "'どこ' berarti di mana, sehingga 'Toire wa doko desu ka?' adalah kalimat baku menanyakan lokasi toilet."
    }
   },
   {
    "id": "ja-08",
    "num": "08",
    "title": "Angka, Jam & Satuan Waktu (Ji, Fun, Jikan)",
    "level": "Menengah",
    "intro": "Menghitung angka 1-10.000, menyebutkan jam dan menit secara tepat.",
    "body": "\n        <h4>🔢 Angka Dasar 1 sampai 10</h4>\n        <p>1 (<span class=\"ja-char\">いち</span> ichi), 2 (<span class=\"ja-char\">に</span> ni), 3 (<span class=\"ja-char\">さん</span> san), 4 (<span class=\"ja-char\">よん / し</span> yon/shi), 5 (<span class=\"ja-char\">ご</span> go), 6 (<span class=\"ja-char\">ろく</span> roku), 7 (<span class=\"ja-char\">なな / しち</span> nana/shichi), 8 (<span class=\"ja-char\">はち</span> hachi), 9 (<span class=\"ja-char\">きゅう / く</span> kyuu/ku), 10 (<span class=\"ja-char\">じゅう</span> juu).</p>\n        <p><i>Satuan Besar:</i> 100 (<span class=\"ja-char\">ひゃく</span> hyaku), 1.000 (<span class=\"ja-char\">せん</span> sen), 10.000 (<span class=\"ja-char\">いちまん</span> ichiman).</p>\n\n        <h4>⏰ Menyebutkan Jam (〜時 Ji) &amp; Menit (〜分 Fun/Pun)</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Jam 7:30 (Setengah 8)</span>\nいま、しちじ はん です。\n<span class=\"st\">(Ima, shichiji han desu. - Sekarang jam 7 lewat 30 menit.)</span></div>\n      ",
    "quiz": {
     "q": "Bagaimana cara menyebutkan 'Jam 3 tepat' dalam bahasa Jepang?",
     "opts": [
      "さんじ (San-ji)",
      "いちじ",
      "よじ",
      "ごじ"
     ],
     "ans": 0,
     "why": "Angka 3 adalah 'san', ditambahkan akhiran satuan jam 'ji' menjadi 'san-ji' (さんじ)."
    }
   },
   {
    "id": "ja-09",
    "num": "09",
    "title": "Kata Kerja Bentuk Masu (〜ます / 〜ません)",
    "level": "Menengah",
    "intro": "Mengonjugasi kata kerja sopan masa sekarang, bentuk negatif, dan bentuk lampau.",
    "body": "\n        <h4>⚙️ Empat Bentuk Dasar Kata Kerja Sopan (~Masu)</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Kondisi Waktu</th><th>Akhiran</th><th>Contoh: 食べる (Makan)</th><th>Arti</th></tr></thead>\n          <tbody>\n            <tr><td><b>Positif (Sekarang/Akan Datang)</b></td><td>〜ます (-masu)</td><td><span class=\"ja-char\">たべます</span> (Tabemasu)</td><td>Saya makan / akan makan</td></tr>\n            <tr><td><b>Negatif (Tidak Melakukan)</b></td><td>〜ません (-masen)</td><td><span class=\"ja-char\">たべません</span> (Tabemasen)</td><td>Saya tidak makan</td></tr>\n            <tr><td><b>Lampau Positif (Sudah Selesai)</b></td><td>〜ました (-mashita)</td><td><span class=\"ja-char\">たべました</span> (Tabemashita)</td><td>Saya sudah makan</td></tr>\n            <tr><td><b>Lampau Negatif (Dulu Tidak)</b></td><td>〜ませんでした (-masendeshita)</td><td><span class=\"ja-char\">たべませんでした</span> (Tabemasendeshita)</td><td>Saya tidak makan (tadi)</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Bentuk sopan lampau dari kata kerja 'Makan' (Saya sudah makan) adalah?",
     "opts": [
      "たべました (Tabemashita)",
      "たべます",
      "たべません",
      "たべる"
     ],
     "ans": 0,
     "why": "Akhiran '~ました' (-mashita) digunakan untuk menyatakan perbuatan yang telah selesai dilakukan di masa lampau secara sopan."
    }
   },
   {
    "id": "ja-10",
    "num": "10",
    "title": "Partikel Inti: を (Objek), に (Tujuan), で (Alat/Tempat)",
    "level": "Menengah",
    "intro": "Tiga pilar partikel gramatikal yang menghubungkan kata benda dengan kata kerja dalam kalimat.",
    "body": "\n        <h4>🎯 Tiga Partikel Utama</h4>\n        <ul>\n          <li><b>を (dibaca 'o'):</b> Penanda objek penderita yang dikenai kata kerja:\n            <br>• <span class=\"ja-char\">ごはん を たべます。</span> (Gohan o tabemasu = Makan nasi).\n            <br>• <span class=\"ja-char\">みず を のみます。</span> (Mizu o nomimasu = Minum air).</li>\n          <li><b>に (ni):</b> Menunjukkan titik waktu tepat atau arah tujuan tempat:\n            <br>• <span class=\"ja-char\">7時 に おきます。</span> (Shichiji ni okimasu = Bangun pada jam 7).\n            <br>• <span class=\"ja-char\">日本 に いきます。</span> (Nihon ni ikimasu = Pergi ke Jepang).</li>\n          <li><b>で (de):</b> Menunjukkan tempat aktivitas berlangsung atau alat transportasi:\n            <br>• <span class=\"ja-char\">カフェ で しごと を します。</span> (Kafe de shigoto o shimasu = Bekerja di kafe).\n            <br>• <span class=\"ja-char\">でんしゃ で いきます。</span> (Densha de ikimasu = Pergi naik kereta).</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Partikel apa yang digunakan untuk menandai objek makanan pada kalimat 'Kohi ___ nomimasu' (Saya minum kopi)?",
     "opts": [
      "を (o)",
      "に (ni)",
      "で (de)",
      "は (wa)"
     ],
     "ans": 0,
     "why": "Partikel 'を' (o) berfungsi sebagai penanda objek penderita tindakan langsung dari kata kerja."
    }
   },
   {
    "id": "ja-11",
    "num": "11",
    "title": "Memesan Makanan di Restoran Jepang (〜をください)",
    "level": "Mahir",
    "intro": "Seni memesan ramen, meminta rekomendasi koki, dan meminta bon tagihan (Okaikei).",
    "body": "\n        <h4>🍜 Naskah Dialog di Kedai Ramen Supriyanto</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Memesan Ramen di Tokyo</span>\nSupriyanto: すみません！ラーメン を ひとつ ください。\n   <span class=\"st\">(Sumimasen! Raamen o hitotsu kudasai. - Permisi! Tolong ramennya satu mangkok.)</span>\n\nPelayan:    はい、かしこまりました。お飲み物は？\n   <span class=\"st\">(Hai, kashikomarimashita. Onomimono wa? - Baik, dimengerti. Untuk minumannya?)</span>\n\nSupriyanto: おみず を おねがいします。\n   <span class=\"st\">(Omizu o onegaishimasu. - Minta air putih tolong.)</span>\n\nSupriyanto: おかいけい、おねがいします。ごちそうさまでした！\n   <span class=\"st\">(Okaikei, onegaishimasu. Gochisousama deshita! - Minta bonnya tolong. Terima kasih atas makanannya!)</span></div>\n      ",
    "quiz": {
     "q": "Ungkapan apa yang diucapkan orang Jepang setelah selesai makan sebagai ucapan terima kasih atas hidangan lezat?",
     "opts": [
      "ごちそうさまでした (Gochisousama deshita)",
      "いただきます",
      "おねがいします",
      "いらっしゃいませ"
     ],
     "ans": 0,
     "why": "'Gochisousama deshita' diucapkan setelah selesai makan sebagai ungkapan syukur dan terima kasih kepada yang memasak hidangan."
    }
   },
   {
    "id": "ja-12",
    "num": "12",
    "title": "Berbelanja & Bertanya Harga: いくらですか",
    "level": "Mahir",
    "intro": "Menanyakan harga barang belanjaan di Akihabara dan pembayaran kartu / uang tunai.",
    "body": "\n        <h4>🛍️ Percakapan Berbelanja</h4>\n        <table class=\"zh-table\">\n          <thead><tr><th>Frasa Jepang</th><th>Romaji</th><th>Arti Bahasa Indonesia</th></tr></thead>\n          <tbody>\n            <tr><td><span class=\"ja-char\">これはいくらですか？</span></td><td><span class=\"zh-pinyin\">Kore wa ikura desu ka?</span></td><td>Ini harganya berapa?</td></tr>\n            <tr><td><span class=\"ja-char\">1,000円です。</span></td><td><span class=\"zh-pinyin\">Sen-en desu.</span></td><td>Harganya 1.000 Yen.</td></tr>\n            <tr><td><span class=\"ja-char\">これをください。</span></td><td><span class=\"zh-pinyin\">Kore o kudasai.</span></td><td>Saya mau beli yang ini tolong.</td></tr>\n            <tr><td><span class=\"ja-char\">カードはつかえますか？</span></td><td><span class=\"zh-pinyin\">Kaado wa tsukaemasu ka?</span></td><td>Bisa bayar pakai kartu kredit?</td></tr>\n          </tbody>\n        </table>\n      ",
    "quiz": {
     "q": "Bagaimana cara menanyakan 'Berapa harga barang ini?' dalam bahasa Jepang?",
     "opts": [
      "これはいくらですか？ (Kore wa ikura desu ka?)",
      "これはどこですか？",
      "これはなんですか？",
      "これはだれですか？"
     ],
     "ans": 0,
     "why": "'いくら' (ikura) berarti berapa harga, sehingga 'Kore wa ikura desu ka?' adalah frasa standar menanyakan harga barang."
    }
   },
   {
    "id": "ja-13",
    "num": "13",
    "title": "Arah, Stasiun Kereta & Transportasi Kota",
    "level": "Mahir",
    "intro": "Navigasi stasiun Shinjuku yang megah, naik kereta bawah tanah (Chikatetsu), dan bertanya arah.",
    "body": "\n        <h4>🚉 Menanyakan Arah Stasiun</h4>\n        <div class=\"code-block\"><span class=\"cm\">// Bertanya Arah di Jalanan Shibuya</span>\nSupriyanto: すみません、しぶやえき は どこですか？\n   <span class=\"st\">(Sumimasen, Shibuya-eki wa doko desu ka? - Permisi, Stasiun Shibuya di mana ya?)</span>\n\nWarga:      あそこです。まっすぐ 行ってください。\n   <span class=\"st\">(Asoko desu. Massugu itte kudasai. - Di sebelah sana. Silakan jalan lurus terus.)</span>\n\nSupriyanto: どうもありがとうございます！\n   <span class=\"st\">(Doumo arigatou gozaimasu! - Terima kasih banyak!)</span></div>\n\n        <h4>Petunjuk Arah</h4>\n        <ul>\n          <li>Kiri: <span class=\"ja-char\">ひだり</span> (Hidari) → <span class=\"ja-char\">ひだり に まがってください</span> (Belok ke kiri).</li>\n          <li>Kanan: <span class=\"ja-char\">みぎ</span> (Migi) → <span class=\"ja-char\">みぎ に まがってください</span> (Belok ke kanan).</li>\n          <li>Lurus: <span class=\"ja-char\">まっすぐ</span> (Massugu) → Jalan lurus.</li>\n        </ul>\n      ",
    "quiz": {
     "q": "Apa arti dari kata penunjuk arah 'まっすぐ' (Massugu)?",
     "opts": [
      "Lurus terus",
      "Belok kiri",
      "Belok kanan",
      "Putar balik"
     ],
     "ans": 0,
     "why": "'Massugu' berarti berjalan lurus ke depan tanpa berbelok."
    }
   },
   {
    "id": "ja-14",
    "num": "14",
    "title": "Keinginan (〜たいです) & Ajakan Santai (〜ましょう)",
    "level": "Expert",
    "intro": "Menyatakan impian liburan ke Gunung Fuji, mengajak teman, dan roadmap sertifikasi JLPT N5.",
    "body": "\n        <h4>🌟 Mengungkapkan Keinginan: 〜たいです (-tai desu)</h4>\n        <p>Ganti akhiran <code>-masu</code> dengan <b>-tai desu</b> untuk mengatakan <i>'Saya ingin...'</i>:</p>\n        <div class=\"code-block\"><span class=\"cm\">// Contoh Keinginan Supriyanto</span>\n• 日本へ 行きたいです。 (Nihon e ikitai desu = Saya ingin pergi ke Jepang.)\n• おすし を 食べたいです。 (Osushi o tabetai desu = Saya ingin makan sushi.)\n• にほんご を はなしたいです。 (Nihongo o hanashitai desu = Saya ingin berbicara bahasa Jepang.)</div>\n\n        <h4>🤝 Mengajak Teman: 〜ましょう (-mashou)</h4>\n        <p>Ganti akhiran <code>-masu</code> dengan <b>-mashou</b> untuk mengajak <i>'Mari kita...'</i>:</p>\n        <p><i>Contoh:</i> <span class=\"ja-char\">いっしょ に 行きましょう！</span> (Issho ni ikimashou! = Ayo kita pergi bareng!)</p>\n\n        <div class=\"tip-box\">\n          <span class=\"tip-box-icon\">🏆</span>\n          <div><b>Selamat!</b> Supriyanto telah menyelesaikan seluruh 14 modul kurikulum Bahasa Jepang dari pengenalan abjad Hiragana/Katakana hingga percakapan JLPT N5. Uji wawasan Anda di <b>Quiz Bahasa Jepang</b>!</div>\n        </div>\n      ",
    "quiz": {
     "q": "Bagaimana cara mengatakan 'Saya ingin pergi ke Jepang' menggunakan rumus keinginan ~たいです?",
     "opts": [
      "日本へ行きたいです。 (Nihon e ikitai desu.)",
      "日本へ行きますです。",
      "日本へ行きましたです。",
      "日本へ行かないです。"
     ],
     "ans": 0,
     "why": "Kata kerja 'ikimasu' (pergi) diubah menjadi bentuk keinginan dengan mengganti akhiran -masu menjadi -tai desu: 'ikitai desu'."
    }
   }
  ]
 }
];

const QUIZ_BANK = [
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
  "track": "git",
  "topic": "Memahami Version Control: Snapshot vs Delta",
  "q": "Bagaimana cara kerja Git dalam mencatat riwayat perubahan proyek?",
  "opts": [
   "Merekam snapshot kondisi seluruh file proyek pada setiap commit checkpoint",
   "Mengirim file zip manual via email setiap jam",
   "Menghapus kode lama dan hanya menyisakan kode terbaru",
   "Mengunci file agar tidak bisa diedit oleh programmer lain"
  ],
  "ans": 0,
  "why": "Git mencatat riwayat proyek sebagai serangkaian snapshot utuh (commit). Jika ada file yang tidak berubah, Git hanya membuat referensi ke file sebelumnya."
 },
 {
  "track": "git",
  "topic": "Inisialisasi Repositori: git init, status & .gitignore",
  "q": "File apakah yang digunakan untuk memberitahu Git agar mengabaikan file sensitif seperti password .env atau folder node_modules?",
  "opts": [
   ".gitignore",
   ".gitkeep",
   "package.json",
   ".gitconfig"
  ],
  "ans": 0,
  "why": "File .gitignore berisi pola daftar nama file atau direktori yang tidak boleh dilacak maupun dicatat oleh Git ke dalam repositori."
 },
 {
  "track": "git",
  "topic": "Tiga Area Git: Working Tree, Staging Area & Repository",
  "q": "Perintah apa yang digunakan untuk memindahkan file dari Working Tree ke Staging Area sebelum di-commit?",
  "opts": [
   "git add <nama_file>",
   "git push <nama_file>",
   "git commit <nama_file>",
   "git checkout <nama_file>"
  ],
  "ans": 0,
  "why": "git add menyiapkan file yang sudah diedit ke Staging Area (area persiapan) sebelum nantinya dibungkus menjadi commit permanen."
 },
 {
  "track": "git",
  "topic": "Menjelajah Riwayat: git log, git diff & git checkout",
  "q": "Perintah apa yang menampilkan riwayat daftar commit secara ringkas dan satu baris per commit?",
  "opts": [
   "git log --oneline",
   "git status --short",
   "git diff --summary",
   "git show --all"
  ],
  "ans": 0,
  "why": "Opsi --oneline pada perintah git log menyajikan hash pendek beserta pesan commit dalam satu baris bersih, memudahkan pembacaan riwayat."
 },
 {
  "track": "git",
  "topic": "Percabangan Efektif: git branch & git switch",
  "q": "Apa keuntungan utama menggunakan fitur Branch (percabangan) di Git?",
  "opts": [
   "Mengisolasi pengembangan fitur baru agar tidak merusak kode utama yang stabil",
   "Membuat ukuran file proyek menjadi dua kali lipat lebih kecil",
   "Menghapus otomatis seluruh file JavaScript yang tidak terpakai",
   "Mencegah developer lain melihat isi komputer kita"
  ],
  "ans": 0,
  "why": "Branch memungkinkan eksperimen dan pengerjaan fitur berjalan terpisah secara aman tanpa mengganggu kode utama yang sedang berjalan stabil."
 },
 {
  "track": "git",
  "topic": "Menggabungkan Cabang: Fast-Forward vs 3-Way Merge",
  "q": "Kapan situasi Fast-Forward merge dapat terjadi di Git?",
  "opts": [
   "Ketika cabang tujuan (main) belum memiliki commit baru sejak cabang fitur dibuat",
   "Ketika terjadi tabrakan kode pada baris yang sama",
   "Ketika koneksi internet sedang berkecepatan tinggi",
   "Ketika ukuran file repositori di bawah 1 Megabyte"
  ],
  "ans": 0,
  "why": "Fast-forward merge terjadi ketika garis riwayat linier tanpa percabangan ganda, sehingga Git cukup memajukan penunjuk cabang ke depan."
 },
 {
  "track": "git",
  "topic": "Menghadapi Merge Conflict dengan Tenang",
  "q": "Apa yang harus dilakukan developer saat terjadi Merge Conflict pada file kode?",
  "opts": [
   "Memilih kode yang benar, menghapus simbol marker konflik, lalu melakukan git add dan commit",
   "Mematikan komputer dan menghapus seluruh folder proyek",
   "Memaksa push dengan git push --force tanpa memeriksa kodenya",
   "Mengganti ekstensi file menjadi file .txt"
  ],
  "ans": 0,
  "why": "Menyelesaikan konflik dilakukan dengan mengedit file, memilih kode yang diinginkan, membersihkan marker Git, kemudian melakukan add dan commit penyelesaian."
 },
 {
  "track": "git",
  "topic": "Remote Repository: GitHub, git remote & git push",
  "q": "Perintah apa yang digunakan untuk mengunggah commit dari repositori lokal ke server remote GitHub?",
  "opts": [
   "git push",
   "git pull",
   "git clone",
   "git fetch"
  ],
  "ans": 0,
  "why": "git push mentransfer dan menyinkronkan seluruh commit checkpoint dari repositori lokal ke repositori remote di server GitHub."
 },
 {
  "track": "git",
  "topic": "Kolaborasi Tim: git fetch, git pull & Pull Request (PR)",
  "q": "Apa tujuan utama dibukanya Pull Request (PR) di platform GitHub dalam tim software engineering?",
  "opts": [
   "Memfasilitasi peninjauan kode (code review) oleh rekan tim sebelum kode digabung ke cabang utama",
   "Membayar biaya langganan server GitHub",
   "Mengompresi file gambar agar loading website lebih cepat",
   "Mengunduh repositori ke flashdisk eksternal"
  ],
  "ans": 0,
  "why": "Pull Request adalah sarana diskusi dan code review profesional untuk memastikan kualitas kode, keamanan, dan fungsionalitas sebelum digabungkan ke cabang utama."
 },
 {
  "track": "git",
  "topic": "Menyimpan Pekerjaan Sementara: git stash & pop",
  "q": "Perintah apa yang digunakan untuk mengembalikan pekerjaan yang sebelumnya disimpan via git stash kembali ke meja kerja?",
  "opts": [
   "git stash pop",
   "git stash drop",
   "git stash clear",
   "git stash hide"
  ],
  "ans": 0,
  "why": "git stash pop mengambil perubahan yang tersimpan paling atas di tumpukan stash, menerapkannya ke working tree, lalu menghapusnya dari daftar stash."
 },
 {
  "track": "git",
  "topic": "Perjalanan Waktu: git revert, reset & git commit --amend",
  "q": "Manakah perintah yang paling aman digunakan untuk membatalkan commit yang sudah terlanjur di-push ke server GitHub bersama tim?",
  "opts": [
   "git revert <commit_hash>",
   "git reset --hard HEAD~1",
   "git clean -f -d",
   "git branch -D main"
  ],
  "ans": 0,
  "why": "git revert membuat commit baru yang membatalkan perubahan sebelumnya tanpa merusak atau menulis ulang riwayat commit rekan tim lain di server bersama."
 },
 {
  "track": "git",
  "topic": "Rebase vs Merge & Best Practice Alur Kerja Git Flow",
  "q": "Apa perbedaan visual utama antara hasil git rebase dibandingkan git merge?",
  "opts": [
   "git rebase menghasilkan riwayat commit linier lurus tanpa merge commit tambahan",
   "git rebase menghapus seluruh file gambar dalam repositori",
   "git merge hanya bisa dijalankan satu kali seumur hidup repositori",
   "git rebase membutuhkan biaya langganan bulanan di GitHub"
  ],
  "ans": 0,
  "why": "git rebase memindahkan basis commit cabang ke ujung cabang target, menghasilkan riwayat perubahan linier bersih tanpa percabangan ganda atau merge commit."
 },
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
  "track": "qa",
  "topic": "Fondasi QA: Perbedaan QA vs QC vs Software Testing & STLC",
  "q": "Apa perbedaan mendasar antara Quality Assurance (QA) dan Quality Control (QC)?",
  "opts": [
   "QA berfokus pada pencegahan cacat melalui penyempurnaan proses, sedangkan QC berfokus pada pemeriksaan produk jadi",
   "QA hanya menulis kode JavaScript, sedangkan QC hanya mengetes di handphone",
   "QA dilakukan oleh pelanggan, sedangkan QC dilakukan oleh manajer proyek",
   "QA dan QC adalah istilah identik yang tidak memiliki perbedaan sama sekali"
  ],
  "ans": 0,
  "why": "Quality Assurance berorientasi pada proses (process-oriented) untuk mencegah timbulnya bug, sedangkan Quality Control berorientasi pada produk (product-oriented) untuk menyaring cacat pada output akhir."
 },
 {
  "track": "qa",
  "topic": "Black Box Testing: Equivalence Partitioning & Boundary Value Analysis",
  "q": "Jika sebuah kolom input mewajibkan teks dengan panjang 5 hingga 10 karakter, nilai batas (BVA) mana yang wajib diuji oleh QA?",
  "opts": [
   "4, 5, 6, 9, 10, dan 11 karakter",
   "1, 50, dan 100 karakter",
   "Hanya angka genap",
   "Hanya huruf kapital"
  ],
  "ans": 0,
  "why": "Boundary Value Analysis menguji titik tepi kritis: batas minimum (5) dan sekitarnya (4, 6), serta batas maksimum (10) dan sekitarnya (9, 11)."
 },
 {
  "track": "qa",
  "topic": "White Box Testing: Statement, Branch & Path Coverage",
  "q": "Apa metrik pengujian White Box yang mengukur apakah setiap baris kode dalam fungsi telah dieksekusi minimal satu kali saat tes berjalan?",
  "opts": [
   "Statement Coverage",
   "Equivalence Partitioning",
   "Smoke Coverage",
   "Pixel Coverage"
  ],
  "ans": 0,
  "why": "Statement Coverage adalah metrik pengujian White Box yang mengukur persentase jumlah baris kode instruksi yang telah berhasil dilewati selama pengujian."
 },
 {
  "track": "qa",
  "topic": "Gray Box Testing: Kombinasi Logika Bisnis & Struktur Backend",
  "q": "Aktivitas pengujian manakah yang merupakan contoh nyata dari Gray Box Testing?",
  "opts": [
   "Melakukan aksi di antarmuka web lalu langsung memverifikasi apakah perubahan data di database SQL sesuai",
   "Hanya menatap layar handphone tanpa menyentuh komputer sama sekali",
   "Membongkar casing fisik server dengan obeng",
   "Menebak password server secara acak tanpa melihat dokumentasi"
  ],
  "ans": 0,
  "why": "Gray Box Testing menggabungkan pengujian fungsional luar (Black Box) dengan pengetahuan struktur internal seperti schema basis data dan API (White Box)."
 },
 {
  "track": "qa",
  "topic": "Piramida Testing: Unit, Integration, System & End-to-End Test",
  "q": "Berdasarkan prinsip Piramida Testing, tipe pengujian manakah yang seharusnya memiliki porsi jumlah tes paling banyak dalam sebuah proyek?",
  "opts": [
   "Unit Testing",
   "End-to-End (E2E) Testing",
   "Manual Exploratory Testing",
   "Stress Testing"
  ],
  "ans": 0,
  "why": "Unit Testing menempati dasar piramida karena paling cepat dieksekusi, murah biaya perawatannya, dan instan menunjukkan baris kode mana yang bermasalah."
 },
 {
  "track": "qa",
  "topic": "Functional Testing: Smoke, Sanity, Regression & Re-testing",
  "q": "Pengujian apa yang dilakukan untuk memastikan bahwa perbaikan bug atau fitur baru tidak merusak fitur lama yang sudah stabil sebelumnya?",
  "opts": [
   "Regression Testing",
   "Smoke Testing",
   "Load Testing",
   "Alpha Testing"
  ],
  "ans": 0,
  "why": "Regression Testing bertujuan memverifikasi bahwa perubahan kode terbaru tidak menimbulkan efek samping negatif atau merusak fungsionalitas sistem yang sudah ada sebelumnya."
 },
 {
  "track": "qa",
  "topic": "Non-Functional Testing: Performance, Load, Stress & Security",
  "q": "Apa perbedaan utama antara Load Testing dan Stress Testing?",
  "opts": [
   "Load Testing menguji beban trafik wajar/puncak yang diharapkan, sedangkan Stress Testing menguji sistem melampaui batas kapasitas normal hingga crash",
   "Load Testing hanya untuk database, sedangkan Stress Testing hanya untuk CSS",
   "Load Testing dilakukan manual, sedangkan Stress Testing harus menggunakan robot",
   "Tidak ada perbedaan sama sekali"
  ],
  "ans": 0,
  "why": "Load Testing mengukur kinerja aplikasi pada kapasitas beban yang diharapkan, sedangkan Stress Testing bertujuan mencari titik hancur (breaking point) sistem di luar kapasitas normal."
 },
 {
  "track": "qa",
  "topic": "Anatomi Test Case & Test Scenario Standar Industri",
  "q": "Komponen Test Case manakah yang mendefinisikan syarat kondisi awal yang harus dipenuhi sebelum langkah uji dijalankan?",
  "opts": [
   "Pre-condition",
   "Post-condition",
   "Actual Result",
   "Test Steps"
  ],
  "ans": 0,
  "why": "Pre-condition menyatakan prasyarat lingkungan atau status akun yang wajib terpenuhi (misal: user sudah login dan memiliki saldo) sebelum langkah pengujian dapat dieksekusi."
 },
 {
  "track": "qa",
  "topic": "Siklus Hidup Bug & Format Bug Report Profesional",
  "q": "Manakah contoh situasi yang memiliki Severity Low (rendah) namun memiliki Priority High (tinggi)?",
  "opts": [
   "Salah ketik nama merek perusahaan pada logo halaman beranda utama",
   "Server database meledak dan seluruh data pelanggan terhapus",
   "Tombol logout tidak bisa diklik di browser jadul yang sudah tidak didukung",
   "Warna footer sedikit lebih gelap dari desain Figma"
  ],
  "ans": 0,
  "why": "Typo nama brand perusahaan di beranda utama tidak merusak fungsi kode (Severity Low), tetapi berdampak sangat fatal bagi citra reputasi bisnis sehingga wajib diperbaiki segera (Priority High)."
 },
 {
  "track": "qa",
  "topic": "API Testing: Endpoint, Status Code & Assertion Data",
  "q": "Status code HTTP manakah yang mengindikasikan bahwa request ditolak karena pengguna belum melampirkan token autentikasi login yang valid?",
  "opts": [
   "401 Unauthorized",
   "200 OK",
   "404 Not Found",
   "500 Internal Server Error"
  ],
  "ans": 0,
  "why": "Kode HTTP 401 Unauthorized menandakan permintaan membutuhkan kredensial otentikasi login pengguna yang valid."
 },
 {
  "track": "qa",
  "topic": "Manual Testing vs Automated Testing: Kapan Harus Otomasi?",
  "q": "Kapan skenario pengujian paling tepat dan menguntungkan (tinggi ROI) untuk diubah menjadi tes otomatis (Automated Testing)?",
  "opts": [
   "Fitur inti yang sudah stabil dan harus diuji berulang kali pada setiap rilis rilis berikutnya (Regression)",
   "Fitur eksperimen yang hanya digunakan satu kali lalu dihapus",
   "Halaman yang desain tata letaknya berubah setiap jam",
   "Menilai apakah kombinasi warna website sedap dipandang mata"
  ],
  "ans": 0,
  "why": "Automated Testing memberikan imbal hasil (ROI) terbaik pada skenario pengujian berulang (regression testing) dan smoke testing yang stabil."
 },
 {
  "track": "qa",
  "topic": "Metodologi QA Modern: Agile, Shift-Left, TDD & BDD Gherkin",
  "q": "Sintaks kata kunci apakah yang digunakan dalam metodologi BDD (Behavior-Driven Development) format Gherkin untuk mendeskripsikan kondisi awal sebelum aksi dilakukan?",
  "opts": [
   "Given",
   "When",
   "Then",
   "Else"
  ],
  "ans": 0,
  "why": "Dalam format Gherkin BDD, kata kunci 'Given' menyatakan prasyarat atau kondisi awal yang ada sebelum aksi (When) dieksekusi."
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
  "track": "sql",
  "topic": "Fondasi Basis Data Relasional & RDBMS",
  "q": "Apa fungsi utama dari Primary Key dalam tabel basis data relasional?",
  "opts": [
   "Sebagai identitas unik penanda setiap baris data agar tidak terjadi duplikasi",
   "Untuk mengenkripsi password dengan teknologi blockchain",
   "Untuk mengubah format angka menjadi mata uang rupiah secara otomatis",
   "Membatasi ukuran tabel maksimal 10 Megabyte"
  ],
  "ans": 0,
  "why": "Primary Key memastikan setiap baris (record) dalam tabel memiliki pengenal unik yang tidak boleh kosong (NOT NULL) dan tidak boleh bernilai ganda (UNIQUE)."
 },
 {
  "track": "sql",
  "topic": "DDL: Membuat & Mengelola Tabel (CREATE, ALTER, DROP)",
  "q": "Perintah SQL mana yang digunakan untuk menambahkan kolom baru ke dalam struktur tabel yang sudah ada?",
  "opts": [
   "ALTER TABLE ... ADD COLUMN ...",
   "UPDATE TABLE ... INSERT COLUMN ...",
   "CREATE COLUMN ... IN TABLE ...",
   "MODIFY TABLE ... NEW COLUMN ..."
  ],
  "ans": 0,
  "why": "ALTER TABLE adalah perintah DDL untuk memodifikasi struktur skema tabel, termasuk menambah kolom baru dengan klausa ADD COLUMN."
 },
 {
  "track": "sql",
  "topic": "DML: Memasukkan, Mengubah & Menghapus Data",
  "q": "Apa yang akan terjadi jika developer menjalankan perintah 'DELETE FROM pelanggan;' tanpa menyertakan klausa WHERE?",
  "opts": [
   "Semua baris data pelanggan di dalam tabel akan terhapus tanpa sisa",
   "Hanya baris paling atas yang terhapus",
   "Database akan memunculkan pesan error dan membatalkan perintah",
   "Struktur tabel pelanggan akan otomatis hilang"
  ],
  "ans": 0,
  "why": "Klausa WHERE menentukan baris mana yang dihapus. Tanpa WHERE, perintah DELETE akan menghapus seluruh isi rekaman baris dalam tabel tersebut."
 },
 {
  "track": "sql",
  "topic": "Query Data: SELECT, DISTINCT, WHERE & Operator Logika",
  "q": "Klausa mana yang digunakan untuk mencari produk yang namanya diawali dengan kata 'Laptop'?",
  "opts": [
   "WHERE nama LIKE 'Laptop%'",
   "WHERE nama == 'Laptop*'",
   "WHERE nama IN ('Laptop')",
   "WHERE nama CONTAINS 'Laptop'"
  ],
  "ans": 0,
  "why": "Dalam SQL standar, operator LIKE bersama wildcard % di akhir ('Laptop%') mencocokkan teks apa pun yang diawali dengan kata 'Laptop'."
 },
 {
  "track": "sql",
  "topic": "Mengurutkan & Paginasi: ORDER BY, LIMIT & OFFSET",
  "q": "Jika Anda ingin menampilkan data pada halaman ke-4 dengan batas 15 data per halaman, berapa nilai OFFSET yang tepat?",
  "opts": [
   "OFFSET 45",
   "OFFSET 60",
   "OFFSET 30",
   "OFFSET 15"
  ],
  "ans": 0,
  "why": "Rumus paginasi adalah OFFSET = (Nomor Halaman - 1) * LIMIT. Untuk halaman ke-4: (4 - 1) * 15 = 45 data pertama dilewati."
 },
 {
  "track": "sql",
  "topic": "Agregasi & Pengelompokan: COUNT, SUM, GROUP BY & HAVING",
  "q": "Klausa apa yang digunakan untuk menyaring hasil pengelompokan agregasi (misal: hanya menampilkan grup yang omzetnya di atas 10 juta)?",
  "opts": [
   "HAVING",
   "WHERE",
   "FILTER BY",
   "ORDER BY"
  ],
  "ans": 0,
  "why": "Klausa HAVING digunakan khusus untuk menyaring kondisi pada fungsi agregasi setelah data dikelompokkan oleh GROUP BY."
 },
 {
  "track": "sql",
  "topic": "Relasi Tabel I: Menguasai INNER JOIN & LEFT JOIN",
  "q": "Apa hasil dari query LEFT JOIN jika baris pada tabel kiri tidak memiliki pasangan yang cocok di tabel kanan?",
  "opts": [
   "Baris tabel kiri tetap ditampilkan dan kolom tabel kanan diisi dengan nilai NULL",
   "Baris tabel kiri akan otomatis dihapus dari database",
   "Query akan menghasilkan error syntax",
   "Baris tabel kanan akan diisi nilai angka 0"
  ],
  "ans": 0,
  "why": "LEFT JOIN mempertahankan seluruh data dari tabel sebelah kiri, dan jika tidak ada kecocokan di tabel kanan, kolom tabel kanan akan bernilai NULL."
 },
 {
  "track": "sql",
  "topic": "Relasi Tabel II: RIGHT JOIN, FULL JOIN & Self Join",
  "q": "Kapan teknik Self Join biasanya diterapkan pada basis data?",
  "opts": [
   "Ketika sebuah tabel memiliki relasi hierarkis ke dirinya sendiri (seperti struktur staf dan manajer)",
   "Ketika kapasitas harddisk server hampir penuh",
   "Ketika ingin menduplikasi seluruh tabel ke database cadangan",
   "Ketika tidak ada koneksi internet pada server database"
  ],
  "ans": 0,
  "why": "Self Join digunakan saat data memiliki hubungan relasional hierarkis atau perbandingan di dalam satu tabel yang sama, seperti struktur organisasi staf dan atasan."
 },
 {
  "track": "sql",
  "topic": "Subquery & Common Table Expressions (WITH / CTE)",
  "q": "Klausa apa yang digunakan dalam SQL standar untuk mendefinisikan Common Table Expression (CTE)?",
  "opts": [
   "WITH",
   "DEFINE",
   "DECLARE",
   "LET"
  ],
  "ans": 0,
  "why": "Klausa WITH digunakan untuk membuat temporary named result set (CTE) yang memudahkan pembacaan dan modularitas query yang kompleks."
 },
 {
  "track": "sql",
  "topic": "Indeks & Optimasi Query: B-Tree Index & EXPLAIN",
  "q": "Perintah apa yang digunakan developer untuk menganalisis rencana eksekusi dan kecepatan eksekusi query pada database?",
  "opts": [
   "EXPLAIN / EXPLAIN ANALYZE",
   "SHOW SPEED QUERY",
   "CHECK PERFORMANCE",
   "DEBUG QUERY NOW"
  ],
  "ans": 0,
  "why": "EXPLAIN (atau EXPLAIN ANALYZE di PostgreSQL/MySQL) menampilkan detail rencana eksekusi query (Query Plan), seperti apakah menggunakan index atau full table scan."
 },
 {
  "track": "sql",
  "topic": "Integritas Transaksi ACID: COMMIT & ROLLBACK",
  "q": "Prinsip ACID manakah yang menjamin bahwa transaksi dieksekusi secara utuh atau dibatalkan seluruhnya (All-or-Nothing)?",
  "opts": [
   "Atomicity",
   "Consistency",
   "Isolation",
   "Durability"
  ],
  "ans": 0,
  "why": "Atomicity (keutuhan) memastikan bahwa seluruh rangkaian perintah dalam satu transaksi berhasil seluruhnya, atau jika gagal, database di-rollback ke kondisi semula."
 },
 {
  "track": "sql",
  "topic": "Desain Skema & Normalisasi Basis Data (1NF, 2NF, 3NF)",
  "q": "Kapan sebuah tabel basis data relasional dikatakan telah memenuhi First Normal Form (1NF)?",
  "opts": [
   "Setiap sel kolom hanya berisi satu nilai tunggal (atomic value) dan tabel memiliki Primary Key",
   "Tabel telah memiliki minimal 10 indeks B-Tree",
   "Semua tabel telah menggunakan tipe data VARCHAR",
   "Database telah terhubung ke cloud server"
  ],
  "ans": 0,
  "why": "1NF mensyaratkan setiap kolom bernilai atomik (tidak ada multiple values/array di satu kolom) serta memiliki pengenal unik utama (Primary Key)."
 },
 {
  "track": "ts",
  "topic": "Mengapa TypeScript? Solusi Masalah Dinamis JS",
  "q": "Kapan TypeScript memeriksa dan menangkap kesalahan tipe data (type error)?",
  "opts": [
   "Saat penulisan kode dan proses kompilasi (Compile-time), sebelum aplikasi dijalankan",
   "Hanya setelah aplikasi di-deploy ke server produksi",
   "Ketika browser pengguna kehabisan kuota internet",
   "Hanya saat komputer di-restart"
  ],
  "ans": 0,
  "why": "TypeScript menerapkan static type checking saat masa kompilasi (compile-time), mencegah bug tipe data lolos ke tahap runtime produksi."
 },
 {
  "track": "ts",
  "topic": "Tipe Data Primitif, Any & Type Inference",
  "q": "Mengapa programmer profesional sangat menghindari penggunaan tipe 'any' di TypeScript?",
  "opts": [
   "Karena 'any' mematikan pemeriksaan tipe data dan menghilangkan manfaat keamanan TypeScript",
   "Karena 'any' memperbesar ukuran file hingga sepuluh kali lipat",
   "Karena 'any' dilarang oleh lisensi open-source",
   "Karena 'any' hanya bisa dijalankan pada sistem operasi Linux"
  ],
  "ans": 0,
  "why": "Tipe 'any' menonaktifkan mekanisme type safety, sehingga compiler tidak lagi memeriksa keabsahan pemanggilan metode atau operasi pada variabel tersebut."
 },
 {
  "track": "ts",
  "topic": "Koleksi Data: Array, Tuples & Readonly",
  "q": "Apa perbedaan mendasar antara Tuple dan Array biasa di TypeScript?",
  "opts": [
   "Tuple memiliki jumlah elemen dan urutan tipe posisi yang telah ditentukan secara kaku",
   "Tuple hanya dapat menampung data angka",
   "Tuple tidak bisa diakses menggunakan indeks",
   "Tuple otomatis dikonversi menjadi file database SQL"
  ],
  "ans": 0,
  "why": "Tuple mendefinisikan tipe spesifik untuk setiap indeks dengan panjang array yang tetap, sedangkan Array biasa menampung elemen dengan tipe homogen tanpa batasan panjang kaku."
 },
 {
  "track": "ts",
  "topic": "Mengetik Fungsi: Parameter & Nilai Return",
  "q": "Tipe return value apa yang digunakan untuk fungsi yang tidak mengembalikan nilai apa pun?",
  "opts": [
   "void",
   "null",
   "undefined",
   "never"
  ],
  "ans": 0,
  "why": "Tipe void menunjukkan ketiadaan nilai kembalian pada fungsi, umum digunakan pada fungsi yang hanya mencetak log atau memodifikasi state."
 },
 {
  "track": "ts",
  "topic": "Struktur Objek & Interfaces: Kontrak Data",
  "q": "Modifier apa yang digunakan di dalam Interface agar suatu properti objek tidak bisa diubah nilainya setelah pertama kali dibuat?",
  "opts": [
   "readonly",
   "const",
   "private",
   "static"
  ],
  "ans": 0,
  "why": "Keyword readonly di depan nama properti interface memastikan nilai properti tersebut bersifat imutabel (hanya bisa dibaca) setelah inisialisasi."
 },
 {
  "track": "ts",
  "topic": "Type Aliases vs Interfaces & Union / Intersection Types",
  "q": "Operator mana yang digunakan di TypeScript untuk membuat Union Type (variabel yang bisa menampung salah satu dari beberapa opsi tipe)?",
  "opts": [
   "Simbol pipa vertikal ( | )",
   "Simbol ampersand ganda ( && )",
   "Simbol tanda panah ( => )",
   "Simbol titik dua ( : )"
  ],
  "ans": 0,
  "why": "Operator pipa vertikal (|) merepresentasikan Union Type, memungkinkan suatu nilai memiliki tipe A atau tipe B."
 },
 {
  "track": "ts",
  "topic": "Literal Types & Teknik Type Narrowing",
  "q": "Apa fungsi dari teknik Type Narrowing di TypeScript?",
  "opts": [
   "Menyempitkan tipe data yang luas/union menjadi tipe yang lebih spesifik di dalam blok logika kode",
   "Menghapus spasi kosong pada string secara otomatis",
   "Mengurangi resolusi gambar website",
   "Mempercepat waktu booting komputer"
  ],
  "ans": 0,
  "why": "Type Narrowing menyaring tipe dari union menjadi tipe pasti menggunakan type guards (seperti typeof, instanceof, in) sehingga operasi pada tipe tersebut aman dijalankan."
 },
 {
  "track": "ts",
  "topic": "Generics: Komponen Fleksibel Reusable",
  "q": "Kapan developer paling tepat memanfaatkan fitur Generics (<T>) di TypeScript?",
  "opts": [
   "Ketika ingin membuat komponen, fungsi, atau interface yang reusable untuk berbagai macam tipe data dengan tetap menjaga type safety",
   "Ketika ingin membuat animasi tombol 3D",
   "Ketika ingin mengonfigurasi koneksi database MySQL",
   "Ketika ingin membagi kode menjadi dua file terpisah"
  ],
  "ans": 0,
  "why": "Generics memungkinkan pembuatan fungsi atau struktur data yang dapat bekerja dengan beragam tipe data tanpa mengorbankan keamanan type checking."
 },
 {
  "track": "ts",
  "topic": "Enums vs Const Objects: Memilih Pendekatan Terbaik",
  "q": "Apa keuntungan utama menggunakan pola objek 'as const' dibandingkan Enum numerik di TypeScript?",
  "opts": [
   "Lebih ringan dan tidak menghasilkan kode wrapper JavaScript tambahan di file hasil kompilasi akhir",
   "Otomatis tersimpan ke dalam database cloud",
   "Mampu menggandakan kecepatan prosesor komputer",
   "Menghilangkan kebutuhan menulis fungsi"
  ],
  "ans": 0,
  "why": "Objek dengan 'as const' adalah pola JavaScript standar yang zero-cost saat kompilasi tanpa kode fungsi wrapper tambahan seperti enum klasik."
 },
 {
  "track": "ts",
  "topic": "OOP Modern: Classes, Modifiers & Implements",
  "q": "Access modifier mana yang hanya mengizinkan properti diakses di dalam class itu sendiri dan class anak turunannya?",
  "opts": [
   "protected",
   "private",
   "public",
   "internal"
  ],
  "ans": 0,
  "why": "Modifier protected mengizinkan akses properti di dalam class yang mendefinisikannya serta sub-class yang mewarisinya, namun melarang akses langsung dari luar."
 },
 {
  "track": "ts",
  "topic": "Koleksi Utility Types Sakti: Partial, Pick, Omit & Record",
  "q": "Utility type manakah yang digunakan untuk membuat tipe baru dengan membuang (mengecualikan) properti tertentu dari interface asli?",
  "opts": [
   "Omit<T, K>",
   "Pick<T, K>",
   "Partial<T>",
   "Exclude<T, U>"
  ],
  "ans": 0,
  "why": "Omit<T, K> mengonstruksi tipe baru dengan mengambil seluruh properti dari T kecuali properti kunci K yang disebutkan."
 },
 {
  "track": "ts",
  "topic": "Konfigurasi tsconfig.json & Panduan Migrasi Proyek",
  "q": "Opsi konfigurasi mana di tsconfig.json yang mengaktifkan seluruh aturan pemeriksaan tipe paling ketat untuk menjamin kualitas kode terbaik?",
  "opts": [
   "\"strict\": true",
   "\"fastMode\": true",
   "\"noErrors\": true",
   "\"autoFix\": true"
  ],
  "ans": 0,
  "why": "\"strict\": true menyalakan sekumpulan flag pemeriksaan tipe ketat (seperti noImplicitAny, strictNullChecks, dll.) yang menjadi standar emas industri."
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
 },
 {
  "track": "korean",
  "topic": "Abjad Hangeul I: 10 Vokal & 14 Konsonan Dasar",
  "q": "Bagaimana cara menulis suku kata vokal murni 'A' dalam abjad Hangeul yang benar?",
  "opts": [
   "아 (menggunakan konsonan netral ㅇ di depan vokal ㅏ)",
   "ㅏ (hanya menulis garis vokal saja)",
   "가",
   "나"
  ],
  "ans": 0,
  "why": "Dalam sistem penulisan Hangeul, sebuah blok suku kata wajib memiliki konsonan awal. Jika bunyinya vokal murni, digunakan lingkaran netral 'ㅇ' yang tidak berbunyi di awal (아)."
 },
 {
  "track": "korean",
  "topic": "Abjad Hangeul II: Vokal Ganda & Konsonan Kembar",
  "q": "Huruf konsonan kembar 'ㄲ' diucapkan dengan cara seperti apa?",
  "opts": [
   "Ditekan tegas dan tegang di pita suara (KK padat)",
   "Ditiup dengan hembusan angin yang sangat kuat",
   "Dilesapkan menjadi bunyi desis S",
   "Tidak diucapkan sama sekali"
  ],
  "ans": 0,
  "why": "Konsonan ganda (ssang-jaeum) seperti ㄲ, ㄸ, ㅃ, ㅆ, ㅉ memiliki karakteristik suara tegang (tense) tanpa hembusan udara napas."
 },
 {
  "track": "korean",
  "topic": "Rahasia Konsonan Akhir (Batchim) & Hukum Alami",
  "q": "Bagaimana cara membaca kata '한국어' (Bahasa Korea) yang benar sesuai hukum pelafalan Liaison?",
  "opts": [
   "Hangugeo (konsonan g meluncur menyambung ke vokal eo)",
   "Han guk eo (berhenti kaku per suku kata)",
   "Hangueo",
   "Hangkuk"
  ],
  "ans": 0,
  "why": "Sesuai hukum liaison (yeon-eum), konsonan batchim 'ㄱ' pada '국' menyambung ke vokal '어' di sebelahnya sehingga dibaca mengalir: 'Hangugeo'."
 },
 {
  "track": "korean",
  "topic": "Salam, Maaf & Etika Kesopanan (존댓말 Jondaetmal)",
  "q": "Salam perpisahan apa yang Anda katakan kepada tuan rumah saat Anda berpamitan pulang duluan?",
  "opts": [
   "Annyeonghi gyeseyo (Selamat tinggal bagi yang tetap tinggal)",
   "Annyeonghi gaseyo",
   "Gamsahamnida",
   "Joesonghamnida"
  ],
  "ans": 0,
  "why": "'Annyeonghi gyeseyo' secara harfiah berarti 'Tinggallah dalam damai', diucapkan kepada pihak yang tetap tinggal di tempat saat kita berpamitan pergi."
 },
 {
  "track": "korean",
  "topic": "Perkenalan Diri Supriyanto (은/는 & 이에요/예요)",
  "q": "Bagaimana kalimat Supriyanto untuk memperkenalkan dirinya: 'Saya adalah Supriyanto' dalam bahasa Korea sopan?",
  "opts": [
   "저는 수프리얀토예요. (Jeoneun Supeuriyantoyeyo)",
   "저는 수프리얀토이에요.",
   "수프리얀토는 저예요.",
   "안녕 수프리얀토."
  ],
  "ans": 0,
  "why": "Kata '수프리얀토' diakhiri huruf vokal 'ㅗ', sehingga menggunakan akhiran identitas '예요' (Jeoneun Supeuriyantoyeyo)."
 },
 {
  "track": "korean",
  "topic": "Kepemilikan & Keberadaan (이/가 & 있어요/없어요)",
  "q": "Bagaimana cara mengatakan 'Saya tidak punya mobil' dalam bahasa Korea?",
  "opts": [
   "차가 없어요. (Chaga eopseoyo.)",
   "차가 있어요.",
   "돈이 있어요.",
   "차는 사람이에요."
  ],
  "ans": 0,
  "why": "Kata '차' (mobil) berakhiran vokal sehingga memakai partikel '가', dan '없어요' menyatakan ketidakberadaan / tidak punya (Chaga eopseoyo)."
 },
 {
  "track": "korean",
  "topic": "Dua Sistem Angka Korea: Sino-Korea vs Native Korea",
  "q": "Sistem angka mana yang digunakan untuk menyebutkan harga belanja uang Won dan nomor telepon di Korea?",
  "opts": [
   "Sistem Angka Sino-Korea (일, 이, 삼, 사...)",
   "Sistem Angka Asli Korea (하나, 둘, 셋...)",
   "Sistem Romawi kuno",
   "Hanya menggunakan angka biner"
  ],
  "ans": 0,
  "why": "Angka Sino-Korea digunakan untuk menghitung nominal uang (Won), menit waktu, nomor telepon, lantai gedung, dan tanggal kalender."
 },
 {
  "track": "korean",
  "topic": "Kata Kerja & Akhiran Waktu Sekarang (-아요/-어요)",
  "q": "Bagaimana bentuk konjugasi sopan masa sekarang dari kata kerja '먹다' (Meokda = Makan)?",
  "opts": [
   "먹어요 (Meogeoyo)",
   "먹아요",
   "먹해요",
   "먹다요"
  ],
  "ans": 0,
  "why": "Kata dasar '먹' memiliki vokal 'ㅓ' (bukan ㅏ atau ㅗ), sehingga menurut aturan harmonisasi vokal mendapat akhiran '-어요' menjadi '먹어요'."
 },
 {
  "track": "korean",
  "topic": "Jam, Tanggal & Pola Keterangan Waktu (Partikel 에)",
  "q": "Bagaimana cara mengucapkan 'Jam 2 tepat' dalam bahasa Korea?",
  "opts": [
   "두 시 (Du si)",
   "이 시",
   "둘 시",
   "하나 시"
  ],
  "ans": 0,
  "why": "Jam selalu menggunakan angka asli Korea (하나, 둘, 셋...) dan saat menempel pada satuan hitung '시' (jam), angka '둘' disingkat menjadi '두' (Du si)."
 },
 {
  "track": "korean",
  "topic": "Menanyakan Lokasi: Partikel 에서 (Aktivitas) vs 에 (Arah)",
  "q": "Partikel tempat mana yang tepat untuk melengkapi kalimat aktivitas: 'Kape___ kodinghaeyo' (Saya koding di kafe)?",
  "opts": [
   "에서 (Kape-eseo)",
   "에",
   "은",
   "를"
  ],
  "ans": 0,
  "why": "Partikel '에서' digunakan untuk menandai lokasi tempat terjadinya suatu kegiatan atau tindakan dinamis (seperti bekerja, belajar, atau makan)."
 },
 {
  "track": "korean",
  "topic": "Memesan Makanan di Restoran Korea (주세요)",
  "q": "Kata apa yang digunakan untuk memanggil pelayan restoran dengan sopan di Korea ('Permisi di sini!')?",
  "opts": [
   "여기요! (Yeogiyo!) atau 저기요! (Jeogiyo!)",
   "안녕!",
   "주세요!",
   "미안해!"
  ],
  "ans": 0,
  "why": "'여기요' (Yeogiyo = di sini) atau '저기요' (Jeogiyo = di sana) adalah ungkapan standar sopan untuk memanggil perhatian pelayan di restoran Korea."
 },
 {
  "track": "korean",
  "topic": "Berbelanja & Bertanya Harga: 얼마예요? & 깎아주세요",
  "q": "Bagaimana cara menanyakan harga barang 'Ini berapa harganya?' dalam bahasa Korea?",
  "opts": [
   "이거 얼마예요? (Igeo eolmayeyo?)",
   "이거 어디예요?",
   "이거 누구예요?",
   "이거 뭐예요?"
  ],
  "ans": 0,
  "why": "'얼마' berarti berapa banyak (harga), sehingga '이거 얼마예요?' adalah frasa standar untuk menanyakan harga barang."
 },
 {
  "track": "korean",
  "topic": "Arah & Transportasi Kota: Taksi & Subway (지하철)",
  "q": "Kalimat apa yang Anda katakan kepada sopir taksi saat ingin turun di lokasi saat ini: 'Tolong turunkan saya di sini'?",
  "opts": [
   "여기서 내려주세요. (Yeogiseo naeryeojuseyo.)",
   "저기서 타세요.",
   "빨리 가세요.",
   "어디로 가요?"
  ],
  "ans": 0,
  "why": "'여기서' (di sini) + '내려주세요' (tolong turunkan) adalah ungkapan yang digunakan saat penumpang ingin berhenti dan turun dari kendaraan."
 },
 {
  "track": "korean",
  "topic": "Mengungkapkan Keinginan (-고 싶어요) & Obrolan Santai",
  "q": "Bagaimana cara menyusun kalimat 'Saya ingin belajar bahasa Korea' menggunakan rumus -고 싶어요?",
  "opts": [
   "한국어를 공부하고 싶어요. (Hangugeoreul gongbuhago sipeoyo.)",
   "한국어를 공부해요 싶어요.",
   "한국어를 공부가 있어요.",
   "한국어는 공부하고 없어요."
  ],
  "ans": 0,
  "why": "Akar kata kerja '공부하' (belajar) langsung digabungkan dengan akhiran keinginan '-고 싶어요' menjadi '공부하고 싶어요'."
 },
 {
  "track": "japanese",
  "topic": "Hiragana Bagian 1: Vokal A-I-U-E-O hingga Baris Na",
  "q": "Bagaimana cara membaca karakter Hiragana pada baris 'S' berikut ini: 'し'?",
  "opts": [
   "Shi",
   "Si",
   "Sa",
   "Su"
  ],
  "ans": 0,
  "why": "Dalam sistem fonetik bahasa Jepang standar, baris S untuk vokal I dilafalkan sebagai 'Shi' (し), bukan 'Si'."
 },
 {
  "track": "japanese",
  "topic": "Hiragana Bagian 2: Baris Ha sampai N & Tanda Dakuten",
  "q": "Karakter 'は' (ha) jika diberi tanda lingkaran kecil Maru (゜) di atasnya berubah bunyinya menjadi apa?",
  "opts": [
   "ぱ (Pa)",
   "ば (Ba)",
   "が (Ga)",
   "ざ (Za)"
  ],
  "ans": 0,
  "why": "Tanda lingkaran Maru (handakuten) khusus pada baris H mengubah bunyinya menjadi bunyi letup P (pa, pi, pu, pe, po)."
 },
 {
  "track": "japanese",
  "topic": "Huruf Katakana: Kata Serapan Asing & Istilah Modern",
  "q": "Bagaimana cara penulisan nama negara 'Indonesia' dalam huruf Katakana yang tepat?",
  "opts": [
   "インドネシア (Indoneshia)",
   "いんどねしあ",
   "アメリカ",
   "にほん"
  ],
  "ans": 0,
  "why": "Nama negara asing ditulis menggunakan abjad Katakana: イ (i) + ン (n) + ド (do) + ネ (ne) + シ (shi) + ア (a) = インドネシア."
 },
 {
  "track": "japanese",
  "topic": "Kanji Dasar Sehari-hari: Cara Baca Onyomi vs Kunyomi",
  "q": "Kapan cara baca Onyomi (bunyi serapan Tiongkok) biasanya digunakan pada karakter Kanji?",
  "opts": [
   "Ketika dua atau lebih karakter Kanji bergabung membentuk kata majemuk",
   "Ketika Kanji berdiri sendiri tanpa huruf lain",
   "Hanya saat menulis nama hewan",
   "Ketika berbicara dengan anak kecil"
  ],
  "ans": 0,
  "why": "Cara baca Onyomi umumnya dipakai saat beberapa kanji bergabung menjadi kosakata majemuk (seperti 日本, 大学, 先生)."
 },
 {
  "track": "japanese",
  "topic": "Salam & Etika Percakapan Bahasa Jepang (Aisatsu)",
  "q": "Kata multifungsi apa yang paling sering digunakan orang Jepang untuk permisi, memanggil pelayan, maupun meminta maaf?",
  "opts": [
   "Sumimasen (すみません)",
   "Sayounara",
   "Konnichiwa",
   "Oyasuminasai"
  ],
  "ans": 0,
  "why": "'Sumimasen' adalah kata paling berguna dalam bahasa Jepang untuk meminta maaf ringan, permisi lewat, maupun memanggil pelayan restoran."
 },
 {
  "track": "japanese",
  "topic": "Perkenalan Diri Supriyanto (Pola 〜は〜です)",
  "q": "Bagaimana cara membaca partikel penanda topik 'は' ketika berada di dalam kalimat (contoh: わたしは)?",
  "opts": [
   "Dibaca 'Wa'",
   "Dibaca 'Ha'",
   "Dibaca 'He'",
   "Tidak dibaca"
  ],
  "ans": 0,
  "why": "Secara historis huruf 'は' berbunyi 'ha', namun ketika berfungsi khusus sebagai partikel penanda topik kalimat, ia wajib dilafalkan sebagai 'wa'."
 },
 {
  "track": "japanese",
  "topic": "Menunjuk Benda & Lokasi: Kore, Sore, Are & Doko",
  "q": "Bagaimana cara menanyakan 'Toilet ada di mana?' dalam bahasa Jepang yang sopan?",
  "opts": [
   "トイレはどこですか？ (Toire wa doko desu ka?)",
   "トイレはここですか？",
   "トイレはだれですか？",
   "トイレはなんですか？"
  ],
  "ans": 0,
  "why": "'どこ' berarti di mana, sehingga 'Toire wa doko desu ka?' adalah kalimat baku menanyakan lokasi toilet."
 },
 {
  "track": "japanese",
  "topic": "Angka, Jam & Satuan Waktu (Ji, Fun, Jikan)",
  "q": "Bagaimana cara menyebutkan 'Jam 3 tepat' dalam bahasa Jepang?",
  "opts": [
   "さんじ (San-ji)",
   "いちじ",
   "よじ",
   "ごじ"
  ],
  "ans": 0,
  "why": "Angka 3 adalah 'san', ditambahkan akhiran satuan jam 'ji' menjadi 'san-ji' (さんじ)."
 },
 {
  "track": "japanese",
  "topic": "Kata Kerja Bentuk Masu (〜ます / 〜ません)",
  "q": "Bentuk sopan lampau dari kata kerja 'Makan' (Saya sudah makan) adalah?",
  "opts": [
   "たべました (Tabemashita)",
   "たべます",
   "たべません",
   "たべる"
  ],
  "ans": 0,
  "why": "Akhiran '~ました' (-mashita) digunakan untuk menyatakan perbuatan yang telah selesai dilakukan di masa lampau secara sopan."
 },
 {
  "track": "japanese",
  "topic": "Partikel Inti: を (Objek), に (Tujuan), で (Alat/Tempat)",
  "q": "Partikel apa yang digunakan untuk menandai objek makanan pada kalimat 'Kohi ___ nomimasu' (Saya minum kopi)?",
  "opts": [
   "を (o)",
   "に (ni)",
   "で (de)",
   "は (wa)"
  ],
  "ans": 0,
  "why": "Partikel 'を' (o) berfungsi sebagai penanda objek penderita tindakan langsung dari kata kerja."
 },
 {
  "track": "japanese",
  "topic": "Memesan Makanan di Restoran Jepang (〜をください)",
  "q": "Ungkapan apa yang diucapkan orang Jepang setelah selesai makan sebagai ucapan terima kasih atas hidangan lezat?",
  "opts": [
   "ごちそうさまでした (Gochisousama deshita)",
   "いただきます",
   "おねがいします",
   "いらっしゃいませ"
  ],
  "ans": 0,
  "why": "'Gochisousama deshita' diucapkan setelah selesai makan sebagai ungkapan syukur dan terima kasih kepada yang memasak hidangan."
 },
 {
  "track": "japanese",
  "topic": "Berbelanja & Bertanya Harga: いくらですか",
  "q": "Bagaimana cara menanyakan 'Berapa harga barang ini?' dalam bahasa Jepang?",
  "opts": [
   "これはいくらですか？ (Kore wa ikura desu ka?)",
   "これはどこですか？",
   "これはなんですか？",
   "これはだれですか？"
  ],
  "ans": 0,
  "why": "'いくら' (ikura) berarti berapa harga, sehingga 'Kore wa ikura desu ka?' adalah frasa standar menanyakan harga barang."
 },
 {
  "track": "japanese",
  "topic": "Arah, Stasiun Kereta & Transportasi Kota",
  "q": "Apa arti dari kata penunjuk arah 'まっすぐ' (Massugu)?",
  "opts": [
   "Lurus terus",
   "Belok kiri",
   "Belok kanan",
   "Putar balik"
  ],
  "ans": 0,
  "why": "'Massugu' berarti berjalan lurus ke depan tanpa berbelok."
 },
 {
  "track": "japanese",
  "topic": "Keinginan (〜たいです) & Ajakan Santai (〜ましょう)",
  "q": "Bagaimana cara mengatakan 'Saya ingin pergi ke Jepang' menggunakan rumus keinginan ~たいです?",
  "opts": [
   "日本へ行きたいです。 (Nihon e ikitai desu.)",
   "日本へ行きますです。",
   "日本へ行きましたです。",
   "日本へ行かないです。"
  ],
  "ans": 0,
  "why": "Kata kerja 'ikimasu' (pergi) diubah menjadi bentuk keinginan dengan mengganti akhiran -masu menjadi -tai desu: 'ikitai desu'."
 }
];
