import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import ProductModal from '../ui/ProductModal'
import Reveal from '../ui/Reveal'
import products from '../../data/products.json'

export default function ProdukTerlarisSection() {
  const [active, setActive] = useState(null)
  const bestSellers = products.filter((p) => p.badge === 'best-seller').slice(0, 4)

  return (
    <section className="bg-warung-paper-dim py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Favorit Pelanggan"
          title="Produk Terlaris"
          description="Produk yang paling sering dicari dan dibeli oleh pelanggan setia kami."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} onView={setActive} />
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Link
            to="/produk"
            className="rounded-xl border border-warung-green px-6 py-3 text-sm font-semibold text-warung-green hover:bg-warung-green hover:text-warung-paper dark:text-warung-green-light"
          >
            Lihat Semua Produk
          </Link>
        </Reveal>
      </div>
      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  )
}
