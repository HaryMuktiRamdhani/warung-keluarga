# Warung Keluarga Barokah — Website Profil & Katalog Produk

Website profil usaha dan katalog produk untuk warung keluarga. Bukan e-commerce — tidak ada
login, keranjang, checkout, atau transaksi online. Fokus sebagai media promosi yang modern,
cepat, SEO-friendly, dan mudah dikembangkan.

## Teknologi

- **React 19 + Vite** — build tool & UI library
- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling, dark mode via `class` strategy
- **React Router DOM v7** — routing, dengan `React.lazy` + `Suspense` untuk code-splitting per halaman
- **Framer Motion** — animasi (fade, slide, zoom, scroll reveal, page/UI transitions)
- **React Icons** — ikon (Fa, Fi)
- **Swiper.js** — carousel testimoni
- **React Helmet Async** — SEO meta tag per halaman (title, description, Open Graph, Twitter Card)
- **@fontsource** (Poppins, Inter, JetBrains Mono) — font di-hosting sendiri, tanpa request ke Google Fonts
- **ESLint** (flat config, `eslint.config.js`) — linting React + Hooks

## Struktur Folder

```
src/
  components/
    layout/       Navbar, Footer, Layout (wrapper + Outlet)
    sections/      Hero, KeunggulanSection, ProdukTerlarisSection, PromoHighlightSection,
                   TestimoniSection, StatistikSection, CtaSection
    ui/            ProductCard, ProductModal, PromoCard, GalleryCard, ImageLightbox,
                   TestimonialCard, FeatureCard, StatisticCard, SearchBox, CategoryFilter,
                   Faq, ContactForm, MapSection, Seo, Reveal, ThemeToggle, BackToTop,
                   FloatingWhatsApp, LoadingScreen, SectionHeading
  pages/           Home, Tentang, Produk, BbmEceran, Galeri, Promo, Lokasi, Kontak, NotFound
  hooks/           useScrollPosition, useCountUp, useCountdown
  context/         ThemeContext (dark/light mode)
  data/            products.json, testimonials.json, gallery.json, promos.json, bbm.json, site.json
  utils/           format.js (Rupiah formatter, status/badge label maps)
  App.jsx          Router + lazy page imports
  main.jsx         Providers (Helmet, Theme, Router) + root render
public/
  robots.txt, sitemap.xml, favicon.svg
```

Data disimpan sebagai JSON lokal di `src/data/` sehingga mudah diganti dengan Firebase/Supabase
di masa depan tanpa mengubah struktur komponen — cukup ganti sumber data di satu tempat.

## Halaman

| Route | Halaman |
|---|---|
| `/` | Home (hero, keunggulan, produk terlaris, statistik, promo, testimoni, CTA) |
| `/tentang` | Sejarah, visi, misi, nilai pelayanan |
| `/produk` | Katalog produk — search, filter kategori, sorting, modal detail |
| `/bbm-eceran` | Jenis & harga BBM, jam pelayanan, info keselamatan, FAQ |
| `/galeri` | Galeri foto dengan filter kategori + lightbox |
| `/promo` | Promo harian/mingguan/bulanan dengan countdown timer |
| `/lokasi` | Peta lokasi (Google Maps embed), alamat, jam operasional |
| `/kontak` | WhatsApp, telepon, email, QR code, formulir kontak |
| `*` | Halaman 404 |

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Perintah lain yang tersedia:

```bash
npm run lint      # menjalankan ESLint
npm run build     # build produksi ke folder dist/
npm run preview   # preview hasil build produksi secara lokal
```

## Konfigurasi Data Warung

Semua data produk ada di `src/data/products.json`, dan seluruh profil warung (nama, alamat,
nomor WhatsApp, jam operasional, media sosial, statistik, keunggulan, visi/misi) ada di
`src/data/site.json`. Ubah file-file ini untuk menyesuaikan konten tanpa menyentuh kode komponen.

Ganti juga `mapsEmbedUrl` dan `mapsLink` pada `site.json` dengan tautan Google Maps lokasi
warung yang sebenarnya.

## Deploy ke Vercel

1. Push project ini ke repository GitHub/GitLab/Bitbucket.
2. Buka [vercel.com](https://vercel.com) → **New Project** → import repository tersebut.
3. Vercel akan otomatis mendeteksi framework **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. File `vercel.json` sudah disertakan agar semua route (mis. `/produk`, `/kontak`) tetap
   berfungsi saat diakses langsung (SPA rewrite ke `index.html`).
5. Klik **Deploy** — website akan langsung online dengan domain `*.vercel.app`, dan bisa
   dihubungkan ke domain kustom melalui menu **Domains** di project Vercel.

Atau melalui CLI:

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Catatan Pengembangan Lanjutan

- Data lokal (JSON) dirancang agar mudah dipindahkan ke Firestore/Supabase: cukup buat
  service layer di `src/services/` yang mengembalikan bentuk data yang sama.
- Gambar produk/galeri memakai Unsplash untuk keperluan demo — ganti dengan foto asli warung
  dan produk sebelum publikasi.
- Nomor WhatsApp, alamat, dan koordinat peta pada `site.json` adalah data contoh dan wajib
  diganti dengan data warung yang sebenarnya sebelum deploy ke publik.
