import { Link } from 'react-router-dom'
import { FaStore } from 'react-icons/fa'
import Seo from '../components/ui/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Halaman Tidak Ditemukan" description="Halaman yang Anda cari tidak tersedia." path="/404" />
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-warung-green/10 text-2xl text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
          <FaStore />
        </span>
        <h1 className="font-display text-3xl font-semibold text-warung-ink">404 - Halaman Tidak Ditemukan</h1>
        <p className="text-sm text-warung-gray">Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.</p>
        <Link to="/" className="mt-2 rounded-xl bg-warung-green px-6 py-3 text-sm font-semibold text-warung-paper hover:bg-warung-green-dark">
          Kembali ke Beranda
        </Link>
      </section>
    </>
  )
}
