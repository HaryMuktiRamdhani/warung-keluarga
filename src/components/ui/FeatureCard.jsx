import * as FaIcons from 'react-icons/fa'
import Reveal from './Reveal'

export default function FeatureCard({ icon, title, desc, delay = 0 }) {
  const Icon = FaIcons[icon] || FaIcons.FaStore

  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-warung-green/5 transition-transform hover:-translate-y-1 dark:bg-white/[0.04] dark:ring-white/10">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-warung-green/10 text-xl text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
          <Icon />
        </span>
        <h3 className="font-display text-lg font-semibold text-warung-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-warung-gray">{desc}</p>
      </div>
    </Reveal>
  )
}
