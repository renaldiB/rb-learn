# HANDOFF — RB Learning (gabungan Learn JS + Learn Playwright)

Dokumen ini untuk AI/session berikutnya yang melanjutkan pekerjaan. Baca sampai selesai sebelum mengubah apa pun.

## 1. Konteks proyek

Menggabungkan DUA modul pembelajaran lama menjadi SATU aplikasi web statis (tanpa build step, tanpa dependency):

- Sumber 1: `C:\Users\Z Series\MainRB\Code Project\Learn JS` (12 materi JavaScript + 12 soal quiz, gaya bahasa santai "Bang/lo")
- Sumber 2: `C:\Users\Z Series\MainRB\Code Project\Learn Playwright` (10 modul + 35 soal quiz)
- Hasil: `C:\Users\Z Series\MainRB\Code Project\RB Learn` — jangan mengubah folder sumber.

Permintaan user (ringkasan):
1. Gabungkan keduanya, style rapi/profesional, minimalis, banyak fitur, **bukan gaya "AI slop"** (tanpa gradien norak/emoji berlebihan).
2. Responsif di semua ukuran layar (HP & desktop).
3. Sidebar kiri bisa **buka/tutup per bahasa** (grup JavaScript / Playwright collapsible).
4. Ruang kanan **jangan kosong** — konten full sampai kanan.
5. (Terakhir) **Perbaiki blok kode di light mode** — jangan hitam, "kreasikan lagi".

## 2. Struktur file (semua sudah ada)

```
RB Learn/
├── index.html        # shell: sidebar + topbar + #view + footer (selesai)
├── css/style.css     # seluruh styling (SEDIANG DIEDIT — lihat §5)
├── js/data.js        # DIHASILKAN — TRACKS (22 materi) + QUIZ_BANK (47 soal)
├── js/app.js         # router + semua logika (selesai, 2 bug sudah diperbaiki)
└── tools/extract.mjs # generator data.js dari kedua folder sumber
```

Regenerasi data (hanya jika materi sumber berubah): `node tools/extract.mjs`
(Overwrite `js/data.js`. Struktur: `TRACKS = [{id:'js'|'pw', title, subtitle, accent:'amber'|'green', lessons:[{id,num,title,level,desc,intro,body(HTML string),quiz}]}]`, `QUIZ_BANK = [{track,topic,q,opts,ans,why}]`.)

Catatan data:
- Materi JS: `body` memakai `<pre class="codeblock"><code>` + span token `.kw/.st/.cm/.fn/.nm`; callout `.tip/.note/.warn`.
- Materi PW: `body` memakai `<div class="code-block">` + span `.kw/.st/.cm/.fn/.vr`; kartu `.keyword-card`; callout `.tip-box` (+`.warning`).
- Teks korup sumber lama ("buah", "x.properti", komentar salah) SUDAH dibersihkan oleh extract.mjs.

## 3. Fitur yang SUDAH jalan (terverifikasi di browser)

- Router hash: `#/` beranda, `#/m/<lessonId>` materi, `#/playground`, `#/quiz`.
- Sidebar: pencarian instan (index teks dibangun malas), centang done per materi, counter per track, **grup collapsible per bahasa** (chevron, state disimpan `kelaskode:collapsed`, saat searching grup selalu terbuka), progress bar + % di footer sidebar.
- Progres: tombol "Tandai selesai" di topbar per materi, disimpan `kelaskode:progress`, tombol reset di sidebar footer.
- Tema light/dark (default light), toggle di sidebar footer, key `kelaskode:theme`.
- Quiz: filter Semua/JS/PW, soal diacak, feedback benar/salah + penjelasan, layar hasil dengan verdict.
- Playground: editor + output, `console.log` di-fake (log/info/warn/error), simpan kode otomatis, Ctrl+Enter, Tab indent, tombol Reset.
- Tombol "Salin" di setiap blok kode (muncul saat hover).
- Keyboard: `/` fokus cari, Esc tutup, Alt+←/→ navigasi materi.
- Responsif: konten full-width (`max-width:1600px`); sidebar off-canvas ≤820px + scrim + tombol menu/close; breakpoint 960/820/600/380; kartu keyword otomatis grid 2 kolom di layar lebar (fungsi `groupCards()` membungkus `.keyword-card` berurutan ke `<div class="cards">`).
- Bug yang sudah DIPERBAIKI: (a) `.tip/.note/.warn` tadinya flex → isi pecah jadi kolom (sudah dihapus flex-nya); (b) pager prev/next salah karena `indexOf` pada objek hasil copy → diganti `findIndex(x=>x.id===l.id)`; (c) scroll reset pakai `behavior:'instant'`.

## 4. Cara menjalankan & verifikasi

- Server: `python -m http.server 8741 --bind 127.0.0.1` dari folder project (sudah jalan sebagai background task; kalau mati, jalankan lagi).
- Buka `http://127.0.0.1:8741`.
- localStorage yang dipakai: `kelaskode:progress`, `kelaskode:theme`, `kelaskode:code`, `kelaskode:collapsed`.

## 5. PEKERJAAN SETENGAH JALAN — WAJIB DISELESAIKAN

Redesain blok kode agar light mode TIDAK berlatar hitam (permintaan terakhir user). Variabel token SUDAH didefinisikan di `css/style.css`:

`:root` (light): `--code-bg:#f4f1e8; --code-ink:#433d35; --code-line:#e3ddcd;` plus `--tok-kw:#b45309; --tok-st:#23784b; --tok-cm:#a49a8a; --tok-fn:#2456d6; --tok-nm:#7c6a55; --tok-vr:#9a3412;` dan `--copy-c/--copy-bg/--copy-bg-h/--copy-ok`.

`[data-theme="dark"]`: `--code-bg:#1a1815; --code-ink:#d6d3d1; --code-line:#2c2926;` plus `--tok-*` versi terang (`kw:#f0a35e; st:#9ece6a; cm:#7d746a; fn:#8ab4f8; nm:#c9c2b8; vr:#f0a35e`) dan `--copy-*` versi gelap.

SISA 3 EDIT di `css/style.css` (belum dilakukan):

1. **Tambah border pada kedua blok kode.** Di rule `.code-block` DAN `pre.codeblock` tambahkan `border:1px solid var(--code-line);` (mereka sudah memakai `background:var(--code-bg); color:var(--code-ink)` sehingga otomatis ikut tema).

2. **Ganti semua rule token lama yang masih hard-coded** dengan versi variabel. Cari & hapus blok ini:
   ```css
   /* highlight tokens */
   .kw{color:#f0a35e;font-weight:600}
   [data-theme="dark"] .kw{color:#e8a04c}
   .st{color:#9ece6a}
   .cm{color:#79716b;font-style:italic}
   .fn{color:#8ab4f8}
   .nm{color:#d6d3d1}
   .vr{color:#f0a35e}
   [data-theme="dark"] .vr{color:#e8a04c}
   .code-block .kw,.code-block .vr{color:#f0a35e;font-weight:600}
   .code-block .cm{color:#79716b;font-style:italic}
   .code-block .fn{color:#8ab4f8}
   .code-block .st{color:#9ece6a}
   .code-block .vr{color:#f0a35e}
   ```
   Ganti dengan:
   ```css
   /* highlight tokens — ikut tema via --tok-* */
   .kw{color:var(--tok-kw);font-weight:600}
   .st{color:var(--tok-st)}
   .cm{color:var(--tok-cm);font-style:italic}
   .fn{color:var(--tok-fn)}
   .nm{color:var(--tok-nm)}
   .vr{color:var(--tok-vr);font-weight:600}
   ```

3. **`.copy-btn` masih memakai warna hardcoded untuk dark.** Ganti `color:#a8a29e;background:rgba(255,255,255,.07);` menjadi `color:var(--copy-c);background:var(--copy-bg);`, hover `background:rgba(255,255,255,.16);color:#fff` → `background:var(--copy-bg-h);color:var(--ink);`, dan `.copy-btn.ok{color:#9ece6a}` → `{color:var(--copy-ok)}`.

Catatan: `textarea.pg-editor` (playground) sudah memakai `var(--code-bg)/var(--code-ink)` — otomatis ikut, tidak perlu diubah.

## 6. Verifikasi yang masih HARUS dilakukan setelah edit §5

1. Reload `http://127.0.0.1:8741` → buka `#/m/js-array` dan `#/m/pw-03` di LIGHT mode: blok kode krem/pasir + border halus, token terbaca; DARK mode tetap gelap & rapi.
2. Playground light mode: editor ikut warna pasir.
3. Cek mobile: set viewport 390×844 → tombol menu di topbar membuka sidebar off-canvas, scrim klik untuk tutup, materi/quiz/playground tersusun 1 kolom, tidak ada overflow horizontal (blok kode `overflow-x:auto`).
4. Cek tablet 768×1024 dan desktop 1440×900 (kartu keyword 2 kolom, konten penuh sampai kanan).
5. Uji alur: search → klik hasil; quiz jawab benar/salah; toggle tema; tandai selesai → counter sidebar & progress bar naik; reload → state bertahan.
6. Screenshot sebelum/sesudah bila perlu; folder `tools/shots/` sudah ada.

## 7. Keputusan desain (jangan dilanggar)

- Bahasa UI: Indonesia. Tone materi JS santai (dipertahankan dari sumber), tone PW semi-formal — sengaja, ikuti masing-masing.
- Palet: kertas hangat `#faf9f6` (light) / `#141311` (dark); aksen track: amber `--amber` (JS) & hijau `--green` (PW); biru hanya untuk aksi umum. TANPA gradien dekoratif, tanpa emoji di UI permanen (boleh di konten materi sumber).
- Font: UI `Segoe UI/system`, judul `Georgia/serif`, kode `Cascadia Code/Consolas`.
- Radius kecil (5–8px), border 1px `--line`, bayangan minimal.
