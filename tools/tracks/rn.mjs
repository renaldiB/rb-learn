export const rnTrack = {
  id: 'rn',
  title: 'React Native 📱',
  subtitle: 'Mobile Cross-Platform: JavaScript/TypeScript, Native Components, Expo, Navigasi & API',
  accent: 'cyan',
  category: 'it',
  lessons: [
    {
      id: 'rn-01',
      num: '01',
      title: 'Pengenalan React Native & Expo',
      level: 'Pemula',
      intro: 'React Native memungkinkan Supriyanto membuat aplikasi mobile Android dan iOS sungguhan dari satu basis kode JavaScript/TypeScript.',
      body: `
        <h4>📱 Analogi Satu Blueprint untuk Dua Tim Pembangun</h4>
        <p>Bayangkan Supriyanto adalah seorang arsitek. Daripada menggambar dua denah terpisah dengan simbol yang berbeda untuk tukang bangunan Android dan tukang bangunan iOS, Supriyanto cukup membuat <b>satu denah blueprint standar (React)</b>. Kompiler React Native bertindak sebagai penerjemah yang secara otomatis memerintahkan Android membuat tombol native Android (Java/Kotlin) dan iOS membuat tombol native iOS (Swift/Objective-C).</p>
        <p>Hasilnya bukan sekadar website yang dibungkus browser (bukan WebView), melainkan <b>komponen antarmuka native 100%</b> yang berjalan kencang di HP pengguna.</p>

        <h4>⚡ Memulai dengan Expo Snack / CLI</h4>
        <p><b>Expo</b> adalah ekosistem perkakas modern yang mempermudah pengembangan React Native tanpa perlu menginstal Android Studio atau Xcode di awal belajar.</p>
        <div class="code-block"><span class="cm">// App.js - Aplikasi Pertama Supriyanto</span>
<span class="kw">import</span> React <span class="kw">from</span> <span class="st">'react'</span>;
<span class="kw">import</span> { StyleSheet, Text, View } <span class="kw">from</span> <span class="st">'react-native'</span>;

<span class="kw">export default function</span> <span class="fn">App</span>() {
  <span class="kw">return</span> (
    &lt;<span class="kw">View</span> style={styles.container}&gt;
      &lt;<span class="kw">Text</span> style={styles.heading}&gt;Halo, Supriyanto! 👋&lt;/<span class="kw">Text</span>&gt;
      &lt;<span class="kw">Text</span> style={styles.sub}&gt;Aplikasi React Native pertama siap dijalankan.&lt;/<span class="kw">Text</span>&gt;
    &lt;/<span class="kw">View</span>&gt;
  );
}

<span class="kw">const</span> styles = StyleSheet.<span class="fn">create</span>({
  container: {
    flex: <span class="nm">1</span>,
    backgroundColor: <span class="st">'#f8fafc'</span>,
    alignItems: <span class="st">'center'</span>,
    justifyContent: <span class="st">'center'</span>,
  },
  heading: {
    fontSize: <span class="nm">22</span>,
    fontWeight: <span class="st">'bold'</span>,
    color: <span class="st">'#0e7490'</span>,
  },
  sub: {
    fontSize: <span class="nm">14</span>,
    color: <span class="st">'#64748b'</span>,
    marginTop: <span class="nm">8</span>,
  },
});</div>

        <div class="tip-box">
          <span class="tip-box-icon">💡</span>
          <div><b>Kunci Pemahaman:</b> Berbeda dari web yang menggunakan tag HTML seperti <code>&lt;div&gt;</code> atau <code>&lt;h1&gt;</code>, di React Native kita menggunakan komponen bawaan seperti <code>&lt;View&gt;</code> dan <code>&lt;Text&gt;</code>.</div>
        </div>
      `,
      quiz: {
        q: "Mengapa React Native berbeda dari aplikasi hybrid berbasis WebView biasa?",
        opts: [
          "Karena React Native menerjemahkan komponen menjadi elemen antarmuka native bawaan sistem operasi HP secara langsung",
          "Karena React Native hanya bisa berjalan di laptop, bukan di HP",
          "Karena React Native tidak menggunakan bahasa JavaScript sama sekali",
          "Karena React Native mewajibkan pengguna membayar lisensi bulanan ke Apple"
        ],
        ans: 0,
        why: "React Native berkomunikasi dengan platform native sehingga elemen seperti tombol dan teks dirender menggunakan komponen asli Android dan iOS, bukan halaman web dalam iframe/browser."
      }
    },
    {
      id: 'rn-02',
      num: '02',
      title: 'Komponen Inti & Styling StyleSheet',
      level: 'Pemula',
      intro: 'Mengenal blok bangunan utama antarmuka: View, Text, Image, dan sistem tata rias StyleSheet.',
      body: `
        <h4>🧱 Analogi Balok Lego Antarmuka</h4>
        <p>Membuat tampilan aplikasi mobile seperti menyusun balok lego:
        <ul>
          <li><b>&lt;View&gt;</b>: Balok kotak kosong sebagai wadah pembungkus (setara <code>&lt;div&gt;</code> di web).</li>
          <li><b>&lt;Text&gt;</b>: Satu-satunya balok yang diizinkan memegang teks. Di React Native, Anda <i>tidak boleh</i> meletakkan huruf langsung di dalam <code>&lt;View&gt;</code> tanpa dibungkus <code>&lt;Text&gt;</code>.</li>
          <li><b>&lt;Image&gt;</b>: Balok penampil foto/ikon (lokal maupun via URL internet).</li>
          <li><b>StyleSheet.create</b>: Resep warna, ukuran, dan jarak antar balok lego tersebut.</li>
        </ul>
        </p>

        <h4>🎨 Membuat Kartu Profil Pengguna</h4>
        <div class="code-block"><span class="kw">import</span> React <span class="kw">from</span> <span class="st">'react'</span>;
<span class="kw">import</span> { StyleSheet, View, Text, Image } <span class="kw">from</span> <span class="st">'react-native'</span>;

<span class="kw">export default function</span> <span class="fn">ProfilSupriyanto</span>() {
  <span class="kw">return</span> (
    &lt;<span class="kw">View</span> style={styles.card}&gt;
      &lt;<span class="kw">Image</span>
        source={{ uri: <span class="st">'https://api.dicebear.com/7.x/bottts/svg?seed=Supriyanto'</span> }}
        style={styles.avatar}
      /&gt;
      &lt;<span class="kw">View</span> style={styles.info}&gt;
        &lt;<span class="kw">Text</span> style={styles.name}&gt;Supriyanto&lt;/<span class="kw">Text</span>&gt;
        &lt;<span class="kw">Text</span> style={styles.role}&gt;Software Engineer Mobile&lt;/<span class="kw">Text</span>&gt;
      &lt;/<span class="kw">View</span>&gt;
    &lt;/<span class="kw">View</span>&gt;
  );
}

<span class="kw">const</span> styles = StyleSheet.<span class="fn">create</span>({
  card: {
    flexDirection: <span class="st">'row'</span>,
    backgroundColor: <span class="st">'#ffffff'</span>,
    padding: <span class="nm">16</span>,
    borderRadius: <span class="nm">12</span>,
    shadowColor: <span class="st">'#000'</span>,
    shadowOpacity: <span class="nm">0.1</span>,
    elevation: <span class="nm">3</span>, <span class="cm">// Bayangan khusus Android</span>
    alignItems: <span class="st">'center'</span>,
  },
  avatar: { width: <span class="nm">56</span>, height: <span class="nm">56</span>, borderRadius: <span class="nm">28</span> },
  info: { marginLeft: <span class="nm">14</span> },
  name: { fontSize: <span class="nm">18</span>, fontWeight: <span class="st">'bold'</span>, color: <span class="st">'#1e293b'</span> },
  role: { fontSize: <span class="nm">13</span>, color: <span class="st">'#0891b2'</span>, marginTop: <span class="nm">2</span> },
});</div>
      `,
      quiz: {
        q: "Apa yang terjadi jika Supriyanto menulis teks string langsung di dalam <View> tanpa membungkusnya dengan <Text>?",
        opts: [
          "Aplikasi akan melempar error di layar HP karena React Native mewajibkan semua teks berada di dalam <Text>",
          "Teks otomatis berubah warna menjadi merah",
          "Teks otomatis diunggah ke Google Drive",
          "Tidak ada error dan teks muncul secara normal"
        ],
        ans: 0,
        why: "Di React Native, mesin rendering native Android/iOS memerlukan komponen TextView/UILabel khusus, sehingga teks wajib diletakkan di dalam tag <Text>."
      }
    },
    {
      id: 'rn-03',
      num: '03',
      title: 'Layouting Flexbox Mobile',
      level: 'Pemula',
      intro: 'Mengatur tata letak responsif di berbagai resolusi layar HP dengan Flexbox.',
      body: `
        <h4>🧳 Analogi Menata Koper Kabin Pesawat</h4>
        <p>Layar smartphone hadir dalam ratusan ukuran berbeda. Flexbox bekerja seperti pembatas kompartemen di dalam koper:
        <ul>
          <li><b>flexDirection: 'column' (Default di React Native!)</b>: Menyusun barang dari atas ke bawah (berbeda dari web yang defaultnya mendatar <code>row</code>).</li>
          <li><b>justifyContent</b>: Mengatur jarak searah garis utama (misal: atas-bawah jika column, kiri-kanan jika row).</li>
          <li><b>alignItems</b>: Mengatur perataan menyilang (misal: rata tengah kiri-kanan jika column).</li>
          <li><b>flex: 1</b>: Memerintahkan wadah untuk membesar dan memenuhi seluruh ruang kosong yang tersisa di layar.</li>
        </ul>
        </p>

        <h4>📐 Contoh Dashboard Responsif Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> { View, StyleSheet } <span class="kw">from</span> <span class="st">'react-native'</span>;

<span class="kw">export default function</span> <span class="fn">DashboardLayout</span>() {
  <span class="kw">return</span> (
    &lt;<span class="kw">View</span> style={styles.screen}&gt;
      &lt;<span class="kw">View</span> style={styles.header} /&gt;
      &lt;<span class="kw">View</span> style={styles.content}&gt;
        &lt;<span class="kw">View</span> style={styles.card} /&gt;
        &lt;<span class="kw">View</span> style={styles.card} /&gt;
      &lt;/<span class="kw">View</span>&gt;
      &lt;<span class="kw">View</span> style={styles.bottomNav} /&gt;
    &lt;/<span class="kw">View</span>&gt;
  );
}

<span class="kw">const</span> styles = StyleSheet.<span class="fn">create</span>({
  screen: { flex: <span class="nm">1</span>, backgroundColor: <span class="st">'#f1f5f9'</span> },
  header: { height: <span class="nm">70</span>, backgroundColor: <span class="st">'#0891b2'</span> },
  content: {
    flex: <span class="nm">1</span>, <span class="cm">// Mengisi seluruh sisa layar di tengah</span>
    flexDirection: <span class="st">'row'</span>,
    justifyContent: <span class="st">'space-around'</span>,
    padding: <span class="nm">16</span>,
  },
  card: { flex: <span class="nm">0.45</span>, backgroundColor: <span class="st">'#ffffff'</span>, borderRadius: <span class="nm">8</span> },
  bottomNav: { height: <span class="nm">60</span>, backgroundColor: <span class="st">'#ffffff'</span> },
});</div>
      `,
      quiz: {
        q: "Apa perbedaan arah default 'flexDirection' antara browser web CSS biasa dan React Native?",
        opts: [
          "Web CSS default-nya adalah 'row' (horizontal), sedangkan React Native default-nya adalah 'column' (vertikal)",
          "Web CSS default-nya adalah 'column', sedangkan React Native default-nya adalah 'row'",
          "Kedua platform sama-sama menggunakan 'grid' sebagai default",
          "React Native tidak memiliki fitur Flexbox"
        ],
        ans: 0,
        why: "Karena layar smartphone berorientasi tegak (portrait), React Native menetapkan default flexDirection ke 'column' agar elemen otomatis tersusun ke bawah."
      }
    },
    {
      id: 'rn-04',
      num: '04',
      title: 'State, Props & Interaksi Pengguna',
      level: 'Menengah',
      intro: 'Menghidupkan aplikasi dengan sentuhan jari menggunakan useState dan komponen Pressable.',
      body: `
        <h4>🔘 Analogi Saklar Lampu & Memori Otak</h4>
        <p>Sebuah aplikasi mobile interaktif membutuhkan dua hal:
        <ol>
          <li><b>State (useState)</b>: Memori internal aplikasi yang mengingat status terkini (misalnya jumlah keranjang belanja Supriyanto). Ketika nilai memori berubah, tampilan HP langsung diperbarui otomatis (*re-render*).</li>
          <li><b>Pressable</b>: Komponen penerima sentuhan jari yang fleksibel. Bisa mendeteksi kapan jari menempel, berapa lama ditekan (*long press*), dan kapan dilepas.</li>
        </ol>
        </p>

        <h4>🛒 Counter Keranjang Belanja Toko Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> React, { useState } <span class="kw">from</span> <span class="st">'react'</span>;
<span class="kw">import</span> { StyleSheet, View, Text, Pressable } <span class="kw">from</span> <span class="st">'react-native'</span>;

<span class="kw">export default function</span> <span class="fn">CounterBelanja</span>() {
  <span class="kw">const</span> [jumlah, setJumlah] = <span class="fn">useState</span>(<span class="nm">1</span>);

  <span class="kw">return</span> (
    &lt;<span class="kw">View</span> style={styles.box}&gt;
      &lt;<span class="kw">Text</span> style={styles.title}&gt;Pesanan Supriyanto: {jumlah} item&lt;/<span class="kw">Text</span>&gt;
      &lt;<span class="kw">View</span> style={styles.btnRow}&gt;
        &lt;<span class="kw">Pressable</span>
          onPress={() =&gt; <span class="fn">setJumlah</span>(j =&gt; Math.<span class="fn">max</span>(<span class="nm">1</span>, j - <span class="nm">1</span>))}
          style={({ pressed }) =&gt; [styles.btn, pressed && styles.btnActive]}&gt;
          &lt;<span class="kw">Text</span> style={styles.btnText}&gt;- Kurang&lt;/<span class="kw">Text</span>&gt;
        &lt;/<span class="kw">Pressable</span>&gt;

        &lt;<span class="kw">Pressable</span>
          onPress={() =&gt; <span class="fn">setJumlah</span>(j =&gt; j + <span class="nm">1</span>)}
          style={({ pressed }) =&gt; [styles.btn, styles.btnPrimary, pressed && styles.btnActive]}&gt;
          &lt;<span class="kw">Text</span> style={[styles.btnText, { color: <span class="st">'#fff'</span> }]}&gt;+ Tambah&lt;/<span class="kw">Text</span>&gt;
        &lt;/<span class="kw">Pressable</span>&gt;
      &lt;/<span class="kw">View</span>&gt;
    &lt;/<span class="kw">View</span>&gt;
  );
}

<span class="kw">const</span> styles = StyleSheet.<span class="fn">create</span>({
  box: { padding: <span class="nm">20</span>, alignItems: <span class="st">'center'</span> },
  title: { fontSize: <span class="nm">18</span>, fontWeight: <span class="st">'600'</span>, marginBottom: <span class="nm">12</span> },
  btnRow: { flexDirection: <span class="st">'row'</span>, gap: <span class="nm">12</span> },
  btn: { paddingVertical: <span class="nm">10</span>, paddingHorizontal: <span class="nm">18</span>, borderRadius: <span class="nm">8</span>, backgroundColor: <span class="st">'#e2e8f0'</span> },
  btnPrimary: { backgroundColor: <span class="st">'#0891b2'</span> },
  btnActive: { opacity: <span class="nm">0.7</span>, transform: [{ scale: <span class="nm">0.97</span> }] },
  btnText: { fontWeight: <span class="st">'bold'</span>, color: <span class="st">'#1e293b'</span> },
});</div>
      `,
      quiz: {
        q: "Mengapa komponen <Pressable> lebih dianjurkan daripada tombol HTML <button> di React Native?",
        opts: [
          "Karena di ekosistem mobile tidak ada tag HTML <button>, dan <Pressable> memberikan kontrol interaksi sentuhan yang akurat dan performan",
          "Karena <Pressable> otomatis mengirim pesan WhatsApp ke developer",
          "Karena <button> hanya bisa diklik satu kali seumur hidup",
          "Karena <Pressable> hanya bisa dipakai di perangkat laptop"
        ],
        ans: 0,
        why: "React Native tidak merender DOM web melainkan native views, dan <Pressable> adalah komponen standar yang menangani gestur sentuhan (pressed state, delay, long press) dengan lancar."
      }
    },
    {
      id: 'rn-05',
      num: '05',
      title: 'List Rendering: FlatList vs ScrollView',
      level: 'Menengah',
      intro: 'Menampilkan ribuan item daftar tanpa membebani memori RAM dan mencegah aplikasi crash.',
      body: `
        <h4>🏬 Analogi Etalase Berputar vs Seluruh Isi Gudang</h4>
        <p>Jika toko Supriyanto memiliki 10.000 barang:
        <ul>
          <li><b>ScrollView</b>: Membuka semua 10.000 barang sekaligus di atas meja. Layar HP langsung panas, memori RAM jebol, dan aplikasi macet total!</li>
          <li><b>FlatList</b>: Menggunakan etalase berjalan (*Virtualization*). Hanya 10 barang yang sedang dipandang mata yang dirender ke memori HP. Saat pengguna menggulir ke bawah, barang lama dibersihkan dari RAM dan barang baru dimuat seketika.</li>
        </ul>
        </p>

        <h4>📜 Implementasi FlatList Transaksi Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> React <span class="kw">from</span> <span class="st">'react'</span>;
<span class="kw">import</span> { FlatList, View, Text, StyleSheet } <span class="kw">from</span> <span class="st">'react-native'</span>;

<span class="kw">const</span> DATA_TRANSAKSI = [
  { id: <span class="st">'t-1'</span>, nama: <span class="st">'Supriyanto'</span>, nominal: <span class="st">'Rp 250.000'</span>, status: <span class="st">'Sukses'</span> },
  { id: <span class="st">'t-2'</span>, nama: <span class="st">'Klien Alpha'</span>, nominal: <span class="st">'Rp 1.400.000'</span>, status: <span class="st">'Sukses'</span> },
  { id: <span class="st">'t-3'</span>, nama: <span class="st">'Klien Beta'</span>, nominal: <span class="st">'Rp 750.000'</span>, status: <span class="st">'Pending'</span> },
];

<span class="kw">export default function</span> <span class="fn">DaftarTransaksi</span>() {
  <span class="kw">const</span> <span class="fn">renderItem</span> = ({ item }) =&gt; (
    &lt;<span class="kw">View</span> style={styles.itemRow}&gt;
      &lt;<span class="kw">View</span>&gt;
        &lt;<span class="kw">Text</span> style={styles.itemNama}&gt;{item.nama}&lt;/<span class="kw">Text</span>&gt;
        &lt;<span class="kw">Text</span> style={styles.itemNominal}&gt;{item.nominal}&lt;/<span class="kw">Text</span>&gt;
      &lt;/<span class="kw">View</span>&gt;
      &lt;<span class="kw">Text</span> style={[styles.badge, item.status === <span class="st">'Sukses'</span> ? styles.ok : styles.wait]}&gt;
        {item.status}
      &lt;/<span class="kw">Text</span>&gt;
    &lt;/<span class="kw">View</span>&gt;
  );

  <span class="kw">return</span> (
    &lt;<span class="kw">FlatList</span>
      data={DATA_TRANSAKSI}
      renderItem={renderItem}
      keyExtractor={item =&gt; item.id}
      ItemSeparatorComponent={() =&gt; &lt;<span class="kw">View</span> style={styles.sep} /&gt;}
      contentContainerStyle={{ padding: <span class="nm">16</span> }}
    /&gt;
  );
}

<span class="kw">const</span> styles = StyleSheet.<span class="fn">create</span>({
  itemRow: { flexDirection: <span class="st">'row'</span>, justifyContent: <span class="st">'space-between'</span>, alignItems: <span class="st">'center'</span>, paddingVertical: <span class="nm">12</span> },
  itemNama: { fontSize: <span class="nm">15</span>, fontWeight: <span class="st">'600'</span> },
  itemNominal: { fontSize: <span class="nm">13</span>, color: <span class="st">'#64748b'</span>, marginTop: <span class="nm">2</span> },
  badge: { fontSize: <span class="nm">12</span>, paddingHorizontal: <span class="nm">8</span>, paddingVertical: <span class="nm">4</span>, borderRadius: <span class="nm">6</span>, fontWeight: <span class="st">'bold'</span> },
  ok: { backgroundColor: <span class="st">'#dcfce7'</span>, color: <span class="st">'#15803d'</span> },
  wait: { backgroundColor: <span class="st">'#fef9c3'</span>, color: <span class="st">'#a16207'</span> },
  sep: { height: <span class="nm">1</span>, backgroundColor: <span class="st">'#e2e8f0'</span> },
});</div>
      `,
      quiz: {
        q: "Mengapa kita wajib menggunakan FlatList daripada ScrollView saat menampilkan daftar 5.000 item?",
        opts: [
          "Karena FlatList hanya me-render elemen yang sedang terlihat di layar (windowing), menghemat RAM dan menjaga aplikasi tetap lancar 60 FPS",
          "Karena FlatList otomatis mengubah tulisan menjadi suara",
          "Karena ScrollView tidak bisa diberi warna background",
          "Karena FlatList secara otomatis menghapus database setiap 5 menit"
        ],
        ans: 0,
        why: "FlatList menggunakan teknik windowing/virtualization sehingga hanya item di viewport yang dibuat, mencegah aplikasi kehabisan memori dan lagging."
      }
    },
    {
      id: 'rn-06',
      num: '06',
      title: 'Navigasi Layar: React Navigation',
      level: 'Menengah',
      intro: 'Menghubungkan banyak layar dengan Stack Navigation dan Tab Bar mobile.',
      body: `
        <h4>🃏 Analogi Tumpukan Kartu Remi (Stack)</h4>
        <p>Di mobile, berpindah halaman bukan seperti membuka URL web baru, melainkan menumpuk kartu di atas meja:
        <ul>
          <li><b>Push / Navigate</b>: Menaruh kartu layar baru di tumpukan paling atas (misalnya dari Home ke Detail).</li>
          <li><b>Pop / GoBack</b>: Mengambil kembali kartu teratas untuk kembali melihat kartu di bawahnya (tombol Back di pojok kiri atas).</li>
          <li><b>Bottom Tabs</b>: Panel tombol di bagian bawah layar seperti lift utama gedung (Beranda, Pesanan, Profil).</li>
        </ul>
        </p>

        <h4>🧭 Struktur Stack Navigator dengan Parameter</h4>
        <div class="code-block"><span class="kw">import</span> { NavigationContainer } <span class="kw">from</span> <span class="st">'@react-navigation/native'</span>;
<span class="kw">import</span> { createNativeStackNavigator } <span class="kw">from</span> <span class="st">'@react-navigation/native-stack'</span>;
<span class="kw">import</span> { View, Text, Button } <span class="kw">from</span> <span class="st">'react-native'</span>;

<span class="kw">const</span> Stack = <span class="fn">createNativeStackNavigator</span>();

<span class="kw">function</span> <span class="fn">HomeScreen</span>({ navigation }) {
  <span class="kw">return</span> (
    &lt;<span class="kw">View</span> style={{ flex: <span class="nm">1</span>, alignItems: <span class="st">'center'</span>, justifyContent: <span class="st">'center'</span> }}&gt;
      &lt;<span class="kw">Text</span>&gt;Layar Utama&lt;/<span class="kw">Text</span>&gt;
      &lt;<span class="kw">Button</span>
        title=<span class="st">"Buka Profil Supriyanto"</span>
        onPress={() =&gt; navigation.<span class="fn">navigate</span>(<span class="st">'Detail'</span>, { nama: <span class="st">'Supriyanto'</span>, id: <span class="nm">101</span> })}
      /&gt;
    &lt;/<span class="kw">View</span>&gt;
  );
}

<span class="kw">function</span> <span class="fn">DetailScreen</span>({ route, navigation }) {
  <span class="kw">const</span> { nama, id } = route.params;
  <span class="kw">return</span> (
    &lt;<span class="kw">View</span> style={{ flex: <span class="nm">1</span>, alignItems: <span class="st">'center'</span>, justifyContent: <span class="st">'center'</span> }}&gt;
      &lt;<span class="kw">Text</span>&gt;Halo, {nama}! ID Pengguna: {id}&lt;/<span class="kw">Text</span>&gt;
      &lt;<span class="kw">Button</span> title=<span class="st">"Kembali"</span> onPress={() =&gt; navigation.<span class="fn">goBack</span>()} /&gt;
    &lt;/<span class="kw">View</span>&gt;
  );
}

<span class="kw">export default function</span> <span class="fn">AppNav</span>() {
  <span class="kw">return</span> (
    &lt;<span class="kw">NavigationContainer</span>&gt;
      &lt;<span class="kw">Stack.Navigator</span>&gt;
        &lt;<span class="kw">Stack.Screen</span> name=<span class="st">"Home"</span> component={HomeScreen} /&gt;
        &lt;<span class="kw">Stack.Screen</span> name=<span class="st">"Detail"</span> component={DetailScreen} /&gt;
      &lt;/<span class="kw">Stack.Navigator</span>&gt;
    &lt;/<span class="kw">NavigationContainer</span>&gt;
  );
}</div>
      `,
      quiz: {
        q: "Dalam sistem React Navigation Stack, apa fungsi dari 'navigation.goBack()'?",
        opts: [
          "Menutup layar teratas dan kembali menampilkan layar sebelumnya di bawah tumpukan",
          "Menghapus seluruh memori aplikasi dan merestart HP",
          "Membuka browser Safari atau Google Chrome",
          "Mengirim email laporan ke tim developer"
        ],
        ans: 0,
        why: "navigation.goBack() membuang kartu layar saat ini (pop) dari tumpukan navigasi sehingga user kembali ke layar asal."
      }
    },
    {
      id: 'rn-07',
      num: '07',
      title: 'Fetch Data API & State Loading/Error',
      level: 'Lanjutan',
      intro: 'Menghubungkan aplikasi mobile ke REST API backend dengan penanganan loading indicator dan error.',
      body: `
        <h4>📦 Analogi Kurir Pengantar Paket Online</h4>
        <p>Ketika Supriyanto menekan tombol refresh data:
        <ol>
          <li><b>Status Menunggu (Loading)</b>: Kurir sedang di jalan. Tampilkan roda berputar (<code>&lt;ActivityIndicator&gt;</code>) agar pengguna tahu HP sedang memproses data.</li>
          <li><b>Status Sukses (Success)</b>: Paket tiba dengan selamat. Simpan data JSON ke dalam state dan tampilkan di layar.</li>
          <li><b>Status Gagal (Error)</b>: Koneksi internet putus atau server mati. Tampilkan pesan ramah dengan tombol "Coba Lagi".</li>
        </ol>
        </p>

        <h4>🌐 Fetch Data Produk Toko Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> React, { useState, useEffect } <span class="kw">from</span> <span class="st">'react'</span>;
<span class="kw">import</span> { View, Text, ActivityIndicator, Button, StyleSheet } <span class="kw">from</span> <span class="st">'react-native'</span>;

<span class="kw">export default function</span> <span class="fn">ProdukScreen</span>() {
  <span class="kw">const</span> [produk, setProduk] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="kw">const</span> [loading, setLoading] = <span class="fn">useState</span>(<span class="kw">true</span>);
  <span class="kw">const</span> [error, setError] = <span class="fn">useState</span>(<span class="st">''</span>);

  <span class="kw">const</span> <span class="fn">loadData</span> = <span class="kw">async</span> () =&gt; {
    <span class="fn">setLoading</span>(<span class="kw">true</span>);
    <span class="fn">setError</span>(<span class="st">''</span>);
    <span class="kw">try</span> {
      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="st">'https://api.example.com/produk/supriyanto'</span>);
      <span class="kw">if</span> (!res.ok) <span class="kw">throw new</span> <span class="fn">Error</span>(<span class="st">'Gagal memuat katalog'</span>);
      <span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();
      <span class="fn">setProduk</span>(data);
    } <span class="kw">catch</span> (err) {
      <span class="fn">setError</span>(err.message);
    } <span class="kw">finally</span> {
      <span class="fn">setLoading</span>(<span class="kw">false</span>);
    }
  };

  <span class="fn">useEffect</span>(() =&gt; { <span class="fn">loadData</span>(); }, []);

  <span class="kw">if</span> (loading) {
    <span class="kw">return</span> (
      &lt;<span class="kw">View</span> style={styles.center}&gt;
        &lt;<span class="kw">ActivityIndicator</span> size=<span class="st">"large"</span> color=<span class="st">"#0891b2"</span> /&gt;
        &lt;<span class="kw">Text</span> style={{ marginTop: <span class="nm">8</span> }}&gt;Memuat data Supriyanto...&lt;/<span class="kw">Text</span>&gt;
      &lt;/<span class="kw">View</span>&gt;
    );
  }

  <span class="kw">if</span> (error) {
    <span class="kw">return</span> (
      &lt;<span class="kw">View</span> style={styles.center}&gt;
        &lt;<span class="kw">Text</span> style={{ color: <span class="st">'#dc2626'</span>, marginBottom: <span class="nm">10</span> }}&gt;Terjadi kesalahan: {error}&lt;/<span class="kw">Text</span>&gt;
        &lt;<span class="kw">Button</span> title=<span class="st">"Coba Lagi"</span> onPress={loadData} /&gt;
      &lt;/<span class="kw">View</span>&gt;
    );
  }

  <span class="kw">return</span> (
    &lt;<span class="kw">View</span> style={styles.box}&gt;
      &lt;<span class="kw">Text</span> style={styles.title}&gt;{produk?.nama}&lt;/<span class="kw">Text</span>&gt;
      &lt;<span class="kw">Text</span>&gt;Harga: {produk?.harga}&lt;/<span class="kw">Text</span>&gt;
    &lt;/<span class="kw">View</span>&gt;
  );
}

<span class="kw">const</span> styles = StyleSheet.<span class="fn">create</span>({
  center: { flex: <span class="nm">1</span>, justifyContent: <span class="st">'center'</span>, alignItems: <span class="st">'center'</span> },
  box: { padding: <span class="nm">20</span> },
  title: { fontSize: <span class="nm">20</span>, fontWeight: <span class="st">'bold'</span> },
});</div>
      `,
      quiz: {
        q: "Komponen bawaan React Native apa yang digunakan untuk menampilkan animasi muter (spinner) saat proses fetch data?",
        opts: [
          "<ActivityIndicator>",
          "<LoadingSpinnerDom>",
          "<ProgressBarHtml>",
          "<WaitRotateIcon>"
        ],
        ans: 0,
        why: "<ActivityIndicator> adalah komponen native resmi bawaan React Native untuk menampilkan status loading berputar di Android dan iOS."
      }
    },
    {
      id: 'rn-08',
      num: '08',
      title: 'Fitur Hardware: AsyncStorage & Sensor',
      level: 'Lanjutan',
      intro: 'Menyimpan data persisten secara offline di HP dan mengakses fitur perangkat native.',
      body: `
        <h4>🔐 Analogi Brankas Mini & Satpam Izin HP</h4>
        <p>Aplikasi mobile modern berinteraksi langsung dengan perangkat keras:
        <ul>
          <li><b>AsyncStorage</b>: Brankas mini di HP Supriyanto. Saat aplikasi ditutup atau HP direstart, data penting seperti token otentikasi login atau preferensi tema gelap tetap tersimpan aman.</li>
          <li><b>Device Permissions</b>: Satpam sistem operasi. Sebelum aplikasi mengambil foto atau melacak lokasi GPS, aplikasi wajib meminta izin (*permission request*) kepada pemilik HP.</li>
        </ul>
        </p>

        <h4>💾 Menyimpan & Membaca Sesi Supriyanto</h4>
        <div class="code-block"><span class="kw">import</span> AsyncStorage <span class="kw">from</span> <span class="st">'@react-native-async-storage/async-storage'</span>;

<span class="cm">// 1. Menyimpan data login</span>
<span class="kw">export async function</span> <span class="fn">simpanSesi</span>(token, username) {
  <span class="kw">try</span> {
    <span class="kw">const</span> payload = JSON.<span class="fn">stringify</span>({ token, username, loginAt: <span class="kw">new</span> <span class="fn">Date</span>() });
    <span class="kw">await</span> AsyncStorage.<span class="fn">setItem</span>(<span class="st">'user_session'</span>, payload);
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="st">'Sesi Supriyanto berhasil disimpan di storage HP'</span>);
  } <span class="kw">catch</span> (e) {
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="st">'Gagal menyimpan sesi'</span>, e);
  }
}

<span class="cm">// 2. Membaca data login saat aplikasi pertama dibuka</span>
<span class="kw">export async function</span> <span class="fn">bacaSesi</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> raw = <span class="kw">await</span> AsyncStorage.<span class="fn">getItem</span>(<span class="st">'user_session'</span>);
    <span class="kw">return</span> raw ? JSON.<span class="fn">parse</span>(raw) : <span class="kw">null</span>;
  } <span class="kw">catch</span> (e) {
    <span class="kw">return null</span>;
  }
}</div>
      `,
      quiz: {
        q: "Kapan waktu yang paling tepat untuk menggunakan AsyncStorage di aplikasi mobile?",
        opts: [
          "Untuk menyimpan data ringan seperti token otentikasi, preferensi tema, atau ID pengguna secara persisten",
          "Untuk menyimpan video berukuran 50 Gigabyte",
          "Untuk mempercepat koneksi internet WiFi 10x lipat",
          "Sebagai pengganti database PostgreSQL jutaan baris di server"
        ],
        ans: 0,
        why: "AsyncStorage dirancang untuk penyimpanan key-value asynchronous sederhana di memori lokal perangkat, ideal untuk token sesi atau pengaturan aplikasi."
      }
    },
    {
      id: 'rn-09',
      num: '09',
      title: 'Animasi Halus 60 FPS: Reanimated',
      level: 'Mahir',
      intro: 'Menciptakan animasi interaktif bebas patah-patah dengan React Native Reanimated.',
      body: `
        <h4>⚡ Analogi Pintu Berpegas Mekanis</h4>
        <p>Di React Native biasa, jika thread JavaScript sedang sibuk mengolah data berat, animasi sentuhan jari bisa tersendat-sendat (*lag/frame drop*).
        <b>React Native Reanimated</b> memecahkan masalah ini dengan memindahkan seluruh instruksi animasi langsung ke <b>UI Thread Native</b> (seperti pegas mekanis pada pintu toko Supriyanto). Begitu jari menyentuh layar, pintu mengayun mulus 60 hingga 120 FPS tanpa menunggu giliran thread JavaScript!</p>

        <h4>🎬 Animasi Tombol Mengambang (Floating Action Button)</h4>
        <div class="code-block"><span class="kw">import</span> React <span class="kw">from</span> <span class="st">'react'</span>;
<span class="kw">import</span> { StyleSheet, Pressable, Text } <span class="kw">from</span> <span class="st">'react-native'</span>;
<span class="kw">import</span> Animated, { useSharedValue, useAnimatedStyle, withSpring } <span class="kw">from</span> <span class="st">'react-native-reanimated'</span>;

<span class="kw">export default function</span> <span class="fn">TombolAnimasiSupriyanto</span>() {
  <span class="kw">const</span> skala = <span class="fn">useSharedValue</span>(<span class="nm">1</span>);

  <span class="kw">const</span> animatedStyle = <span class="fn">useAnimatedStyle</span>(() =&gt; ({
    transform: [{ scale: skala.value }],
  }));

  <span class="kw">const</span> <span class="fn">tekanMulai</span> = () =&gt; { skala.value = <span class="fn">withSpring</span>(<span class="nm">0.92</span>); };
  <span class="kw">const</span> <span class="fn">tekanSelesai</span> = () =&gt; { skala.value = <span class="fn">withSpring</span>(<span class="nm">1</span>); };

  <span class="kw">return</span> (
    &lt;<span class="kw">Pressable</span> onPressIn={tekanMulai} onPressOut={tekanSelesai}&gt;
      &lt;<span class="kw">Animated.View</span> style={[styles.fab, animatedStyle]}&gt;
        &lt;<span class="kw">Text</span> style={styles.fabText}&gt;+ Buat Pesanan&lt;/<span class="kw">Text</span>&gt;
      &lt;/<span class="kw">Animated.View</span>&gt;
    &lt;/<span class="kw">Pressable</span>&gt;
  );
}

<span class="kw">const</span> styles = StyleSheet.<span class="fn">create</span>({
  fab: {
    backgroundColor: <span class="st">'#0891b2'</span>,
    paddingVertical: <span class="nm">14</span>,
    paddingHorizontal: <span class="nm">24</span>,
    borderRadius: <span class="nm">30</span>,
    alignItems: <span class="st">'center'</span>,
    elevation: <span class="nm">5</span>,
  },
  fabText: { color: <span class="st">'#ffffff'</span>, fontWeight: <span class="st">'bold'</span>, fontSize: <span class="nm">16</span> },
});</div>
      `,
      quiz: {
        q: "Mengapa animasi dengan React Native Reanimated dapat berjalan mulus tanpa lag meski JavaScript sedang memproses komputasi berat?",
        opts: [
          "Karena perhitungan dan frame animasi dijalankan langsung di Native UI Thread perangkat",
          "Karena Reanimated menghapus seluruh gambar di aplikasi",
          "Karena Reanimated hanya bekerja saat HP disambungkan ke charger",
          "Karena Reanimated membatasi refresh rate layar menjadi 5 FPS"
        ],
        ans: 0,
        why: "Reanimated menggunakan worklet yang berjalan langsung di native UI thread, melepaskan ketergantungan frame rate animasi dari kesibukan thread JavaScript."
      }
    },
    {
      id: 'rn-10',
      num: '10',
      title: 'Hermes Engine, Optimasi & Rilis Store',
      level: 'Expert',
      intro: 'Mengoptimalkan bundle aplikasi, memangkas ukuran APK, dan mempublikasikan ke Google Play Store & Apple App Store.',
      body: `
        <h4>🚀 Analogi Kantong Vakum Kompresi Tinggi</h4>
        <p>Sebelum aplikasi Supriyanto diunggah ke Google Play Store atau Apple App Store:
        <ul>
          <li><b>Hermes JavaScript Engine</b>: Mesin JavaScript open-source yang dioptimalkan khusus untuk Android & iOS. Kode JavaScript dikompilasi sebelumnya (*AOT Bytecode*) sehingga waktu buka aplikasi (*Time to Interactive*) turun drastis dan pemakaian RAM hemat hingga 50%.</li>
          <li><b>EAS Build (Expo Application Services)</b>: Mengompilasi aplikasi di cloud untuk menghasilkan file <code>.aab</code> (Android App Bundle) dan <code>.ipa</code> (iOS).</li>
          <li><b>Tree Shaking & Asset Optimization</b>: Menghapus kode dan ikon yang tidak terpakai agar ukuran download aplikasi Supriyanto tetap ramping dan hemat kuota pengguna.</li>
        </ul>
        </p>

        <h4>📋 Konfigurasi Production di app.json & EAS</h4>
        <div class="code-block"><span class="cm">// app.json</span>
{
  <span class="st">"expo"</span>: {
    <span class="st">"name"</span>: <span class="st">"RB Mobile Supriyanto"</span>,
    <span class="st">"slug"</span>: <span class="st">"rb-mobile-supriyanto"</span>,
    <span class="st">"version"</span>: <span class="st">"1.0.0"</span>,
    <span class="st">"orientation"</span>: <span class="st">"portrait"</span>,
    <span class="st">"jsEngine"</span>: <span class="st">"hermes"</span>,
    <span class="st">"android"</span>: {
      <span class="st">"package"</span>: <span class="st">"com.supriyanto.rbmobile"</span>,
      <span class="st">"versionCode"</span>: <span class="nm">1</span>
    },
    <span class="st">"ios"</span>: {
      <span class="st">"bundleIdentifier"</span>: <span class="st">"com.supriyanto.rbmobile"</span>
    }
  }
}</div>

        <div class="tip-box">
          <span class="tip-box-icon">🏆</span>
          <div><b>Selamat!</b> Supriyanto telah menyelesaikan kurikulum React Native dari tingkat Pemula hingga Expert. Uji pengetahuan Anda dengan mengikuti <b>Quiz React Native 📱</b>!</div>
        </div>
      `,
      quiz: {
        q: "Apa keuntungan utama mengaktifkan Hermes Engine di aplikasi React Native?",
        opts: [
          "Waktu buka aplikasi (startup) jauh lebih cepat, konsumsi RAM lebih hemat, dan ukuran APK lebih kecil",
          "Aplikasi otomatis bisa berjalan tanpa baterai HP",
          "Menghilangkan kebutuhan akan koneksi internet selamanya",
          "Mengubah seluruh kode menjadi file dokumen Microsoft Word"
        ],
        ans: 0,
        why: "Hermes melakukan prekompilasi JavaScript menjadi bytecode sebelum aplikasi diinstall, memangkas proses parsing runtime sehingga startup aplikasi instan."
      }
    }
  ]
};
