# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Apa ini

Landing page untuk **Mancoco** — minyak kelapa tradisional (non-RBD) buatan pengrajin di Labuang, Majene, Sulawesi Barat. Semua pemesanan dialihkan ke WhatsApp (`wa.me`); tidak ada keranjang, backend, atau form.

## Struktur & alur build

Proyek ada di **dua fase**:

- **Fase 1 (aktif):** `index.html` — single-file build. Seluruh CSS dan JS inline, **tanpa dependensi eksternal** dan tanpa build step. Buka langsung di browser untuk pratinjau. Ini satu-satunya artefak yang dikirim saat ini. (Dulu bernama `mancoco-landing.html`, di-rename jadi `index.html` untuk hosting statis.)
- **Fase 2 (belum mulai):** port ke Next.js/React + Tailwind. `tailwind.config.js` sudah disiapkan sebagai jembatan — design token-nya dipetakan **1:1** dari blok `:root` di `index.html`. Belum ada `package.json`, jadi Tailwind belum bisa dijalankan sampai project Next.js dibuat.

Aset gambar: `logo/`, `produk/`, `proses/` (dengan `proses/jpg/` versi JPG). Ilustrasi produk di halaman saat ini adalah **SVG inline**, bukan file dari folder-folder ini.

## Sumber kebenaran design token

Palet warna, font, shadow, radius, dan tekstur ada di **dua tempat yang harus selalu sinkron**:
1. Blok `:root` (CSS custom properties) di `index.html`.
2. `theme.extend` di `tailwind.config.js`.

Kalau mengubah token di satu tempat, ubah juga di tempat lain. HTML pakai `var(--nama)`; config Tailwind pakai nama key yang setara (mis. `--bg-main` ↔ `bg-main`, `--ink` ↔ `text-main`, `--wa` ↔ `whatsapp`).

## Aturan brand yang wajib dipatuhi (dari PRD)

Aturan ini bukan preferensi gaya — melanggarnya merusak kepatuhan produk:

- **Nol klaim kesehatan/khasiat** di semua copy publik. Positioning murni produk kuliner tradisional: akses + kepercayaan. Jangan menambah kalimat soal manfaat kesehatan.
- **`accent` (#D4972F / ochre) HANYA untuk aksen non-teks** — gagal kontras sebagai teks. Untuk teks di atas krem gunakan `dark`/`primary`.
- **`whatsapp` (#25D366) HANYA untuk ikon/label kanal WhatsApp.**
- Bahasa copy: Indonesia informal-hangat, nuansa Mandar/kampung. Pertahankan ejaan bertanda (mis. tetap "±4 jam", tanda kutip lengkung).

## Konvensi

- **Nomor WhatsApp** `6281234567890` masih placeholder dan tersebar di banyak `href` (header, hero, tiap kartu produk, CTA, footer, tombol float). Kalau menggantinya, ganti **semua** kemunculan. Teks pesan sudah di-URL-encode dan menyertakan penanda `[via web]` (`%5Bvia%20web%5D`).
- Aksesibilitas dijaga ketat: skip-link, `aria-*`, `role="img"` + `<title>` pada SVG bermakna, `aria-hidden` pada dekorasi, dan `prefers-reduced-motion`. Pertahankan pola ini saat menambah section.
- Section dipisah komentar banner (`══════════`) dan diberi `id` untuk navigasi anchor. Animasi masuk pakai class `.reveal` + `.d1/.d2/.d3` (di-observe oleh IntersectionObserver di `<script>` bawah).
- Mobile-first; breakpoint utama `900px` (nav), plus `720px`/`860px`/`960px`/`980px` per section.
