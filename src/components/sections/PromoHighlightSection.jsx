import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import PromoCard from '../ui/PromoCard'
import Reveal from '../ui/Reveal'
import promos from '../../data/promos.json'

export default function PromoHighlightSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Jangan Sampai Terlewat" title="Promo Berlangsung" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {promos.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Link to="/promo" className="rounded-xl bg-warung-green px-6 py-3 text-sm font-semibold text-warung-paper hover:bg-warung-green-dark">
          Lihat Semua Promo
        </Link>
      </Reveal>
    </section>
  )
}
