import site from '../../data/site.json'
import StatisticCard from '../ui/StatisticCard'
import Reveal from '../ui/Reveal'

export default function StatistikSection() {
  return (
    <section className="bg-warung-green-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {site.statistik.map((s) => (
            <StatisticCard key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
