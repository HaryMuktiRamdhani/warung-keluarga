import { useMemo, useState } from 'react'
import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import SearchBox from '../components/ui/SearchBox'
import CategoryFilter from '../components/ui/CategoryFilter'
import ProductCard from '../components/ui/ProductCard'
import ProductModal from '../components/ui/ProductModal'
import productsData from '../data/products.json'
import { categoryLabels } from '../utils/format'

const CATEGORIES = [
  { value: 'semua', label: 'Semua' },
  ...Object.entries(categoryLabels)
    .filter(([value]) => value !== 'bbm-eceran')
    .map(([value, label]) => ({ value, label })),
]

const SORT_OPTIONS = [
  { value: 'terlaris', label: 'Terlaris' },
  { value: 'baru', label: 'Produk Baru' },
  { value: 'harga-asc', label: 'Harga Terendah' },
  { value: 'harga-desc', label: 'Harga Tertinggi' },
]

export default function Produk() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('semua')
  const [sort, setSort] = useState('terlaris')
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => {
    let list = [...productsData]

    if (category !== 'semua') {
      list = list.filter((p) => p.category === category)
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    }

    switch (sort) {
      case 'harga-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'harga-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'baru':
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew))
        break
      default:
        list.sort((a, b) => Number(b.badge === 'best-seller') - Number(a.badge === 'best-seller'))
    }

    return list
  }, [query, category, sort])

  return (
    <>
      <Seo
        title="Produk"
        description="Katalog lengkap produk warung: makanan, minuman, sembako, kebutuhan harian, dan lainnya."
        path="/produk"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-warung-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
            Katalog Produk
          </span>
          <h1 className="font-display text-3xl font-semibold text-warung-ink sm:text-4xl">Semua Produk</h1>
          <p className="max-w-xl text-base text-warung-gray">
            Temukan kebutuhan harian Anda, mulai dari makanan, minuman, sembako, hingga kebutuhan rumah tangga.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-sm">
            <SearchBox value={query} onChange={setQuery} />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="whitespace-nowrap text-sm text-warung-gray">Urutkan:</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="sort-select rounded-xl border border-warung-green/15 bg-white px-3 py-2.5 text-sm text-warung-ink outline-none focus:border-warung-green dark:border-white/10 dark:bg-warung-paper-dim dark:text-warung-ink"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-5">
          <CategoryFilter categories={CATEGORIES} active={category} onChange={setCategory} />
        </Reveal>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-warung-gray">
            Tidak ada produk yang cocok dengan pencarian Anda.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onView={setActive} />
            ))}
          </div>
        )}
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  )
}
