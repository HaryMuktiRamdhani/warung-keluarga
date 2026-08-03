import { useMemo, useState } from 'react'
import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import CategoryFilter from '../components/ui/CategoryFilter'
import GalleryCard from '../components/ui/GalleryCard'
import ImageLightbox from '../components/ui/ImageLightbox'
import galleryData from '../data/gallery.json'

const CATEGORIES = [
  { value: 'semua', label: 'Semua' },
  { value: 'warung', label: 'Warung' },
  { value: 'produk', label: 'Produk' },
  { value: 'rak-barang', label: 'Rak Barang' },
  { value: 'bbm', label: 'BBM' },
  { value: 'area-depan', label: 'Area Depan' },
]

export default function Galeri() {
  const [category, setCategory] = useState('semua')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(
    () => (category === 'semua' ? galleryData : galleryData.filter((g) => g.category === category)),
    [category]
  )

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null

  function openItem(item) {
    const idx = filtered.findIndex((g) => g.id === item.id)
    setActiveIndex(idx)
  }

  function next() {
    setActiveIndex((i) => (i + 1) % filtered.length)
  }

  function prev() {
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length)
  }

  return (
    <>
      <Seo
        title="Galeri"
        description="Galeri foto warung, produk, rak barang, area BBM, dan suasana depan warung."
        path="/galeri"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-warung-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
            Dokumentasi
          </span>
          <h1 className="font-display text-3xl font-semibold text-warung-ink sm:text-4xl">Galeri Warung</h1>
          <p className="max-w-xl text-base text-warung-gray">
            Lihat suasana warung, produk, dan area layanan kami dari dekat.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <CategoryFilter categories={CATEGORIES} active={category} onChange={setCategory} />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} onOpen={openItem} />
          ))}
        </div>
      </section>

      <ImageLightbox item={activeItem} onClose={() => setActiveIndex(null)} onNext={next} onPrev={prev} />
    </>
  )
}
