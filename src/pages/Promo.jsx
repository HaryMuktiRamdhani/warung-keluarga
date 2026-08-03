import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import PromoCard from '../components/ui/PromoCard'
import promos from '../data/promos.json'

const GROUPS = [
  { type: 'harian', title: 'Promo Hari Ini' },
  { type: 'mingguan', title: 'Promo Mingguan' },
  { type: 'bulanan', title: 'Promo Bulanan' },
]

export default function Promo() {
  return (
    <>
      <Seo
        title="Promo"
        description="Promo harian, mingguan, dan bulanan yang sedang berlangsung di warung kami."
        path="/promo"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-warung-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
            Penawaran Spesial
          </span>
          <h1 className="font-display text-3xl font-semibold text-warung-ink sm:text-4xl">Promo Warung</h1>
        </Reveal>

        {GROUPS.map((group) => {
          const items = promos.filter((p) => p.type === group.type)
          if (items.length === 0) return null
          return (
            <div key={group.type} className="mt-14 first:mt-10">
              <SectionHeading title={group.title} align="left" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((promo) => (
                  <PromoCard key={promo.id} promo={promo} />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
