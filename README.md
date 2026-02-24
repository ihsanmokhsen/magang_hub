# BPAD Magang Hub (MVP)

MVP web statis untuk onboarding peserta magang BPAD Provinsi NTT, siap di-host ke Netlify tanpa database server.

## Fitur yang sudah ada
- Halaman pembuka full-screen: **"Selamat Datang di BPAD Magang Hub"** + tombol **Mulai**.
- Halaman utama berisi:
  - Pengantar personal untuk sobat magang.
  - Ringkasan tugas, fungsi, dan struktur organisasi BPAD.
  - Tombol **Laporan Harian** ke Tally: https://tally.so/r/682JGe
- Daftar dokumen dalam bentuk **card**.
- Form **Tambah Dokumen** (nama, deskripsi, link Google Drive).
- **Edit** dan **Hapus** dokumen.
- Penyimpanan lokal dengan `localStorage` (tanpa backend/database).

## Insight Sistem (Roadmap bertahap)
1. MVP (sekarang): fokus ke onboarding + repositori bacaan magang.
2. Fase 2: autentikasi admin sederhana agar tidak semua orang bisa ubah dokumen.
3. Fase 3: pindahkan data dokumen ke database (Supabase/Firebase) untuk sinkron lintas perangkat.
4. Fase 4: kategori dokumen (Regulasi, Laporan, SOP, dll.) + fitur pencarian.
5. Fase 5: dashboard progres baca dan export ringkasan untuk laporan magang.

## Catatan penting MVP
- Data dokumen tersimpan per browser/perangkat, belum terpusat.
- Link dokumen tetap mengarah ke Google Drive sesuai kebutuhan awal.

## Prompt yang sudah dirapikan

Saya ingin membuat sistem informasi onboarding magang bernama **BPAD Magang Hub** untuk BPAD Provinsi NTT, berbasis web dan di-host di Netlify.

Tujuan utama:
- Membantu peserta magang memahami instansi saat belum ada aktivitas kantor.
- Menyediakan bahan bacaan resmi agar berguna untuk kegiatan dan laporan magang.

Alur halaman:
1. Landing page satu layar penuh dengan teks: **"Selamat Datang di BPAD Magang Hub"** dan tombol **"Mulai"**.
2. Setelah klik Mulai, tampil halaman pengantar berisi:
   - Sapaan: **"Halo Sobat Magang di BPAD"**.
   - Penjelasan singkat BPAD, budaya kerja, aturan magang, dan ajakan aktif berkoordinasi.
3. Tampilkan ringkasan **Tugas, Fungsi, dan Struktur Organisasi BPAD** berdasarkan Pergub NTT No. 96 Tahun 2023.
4. Tampilkan daftar dokumen dalam bentuk card.

Kebutuhan data dokumen:
- Field: `nama_dokumen`, `deskripsi`, `link_google_drive`.
- Tombol: **Tambah Dokumen**, dan fitur **Edit/Hapus**.
- Sumber file tetap di Google Drive (tidak upload file ke server).

Dokumen awal:
- RENSTRA: https://drive.google.com/file/d/12ZLeVzqYtcZbCqqo2ZqmwAqnHOTWjZGd/view?usp=sharing
- RPJMD: https://drive.google.com/file/d/1Azjxne-mDYDYPUJIPhf7ZBDcBYFR0oeU/view?usp=sharing

Integrasi tambahan:
- Tautkan form laporan harian magang ke: https://tally.so/r/682JGe

Tema desain:
- Dark modern, nuansa teknologi-profesional.
- Warna:
  - Background: `#0B0F14` / `#0E1117`
  - Card/panel: `#161B22`
  - Primary accent: `#2DD4BF`
  - Secondary accent: `#38BDF8`
  - Teks utama: `#E5E7EB`
  - Teks sekunder: `#9CA3AF`
- Font: Inter / SF Pro / system-ui.
- Gaya: rounded-xl, shadow halus, hover lembut, clean dan fokus keterbacaan.

Catatan implementasi:
- Versi MVP tanpa database server (boleh pakai local storage).
- Siapkan struktur agar mudah di-upgrade ke database untuk CRUD terpusat.
