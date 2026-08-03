import { useCountdown } from '../../hooks/useCountdown'

const typeLabels = {
  harian: 'Promo Harian',
  mingguan: 'Promo Mingguan',
  bulanan: 'Promo Bulanan',
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-warung-green/10 px-2.5 py-1.5 dark:bg-white/10">
      <span className="font-mono text-base font-bold text-warung-green dark:text-warung-green-light">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] uppercase tracking-wide text-warung-gray">{label}</span>
    </div>
  )
}

export default function PromoCard({ promo }) {
  const t = useCountdown(promo.expiresAt)
  const expired = t.total <= 0

  return (
    <div className="receipt-edge-bottom flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <img src={promo.image} alt={promo.title} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-warung-yellow px-3 py-1 text-xs font-semibold text-warung-ink">
          {typeLabels[promo.type]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-base font-semibold leading-snug text-warung-ink">{promo.title}</h3>
        <p className="text-sm leading-relaxed text-warung-gray">{promo.description}</p>
        <div className="mt-auto pt-2">
          {expired ? (
            <span className="text-xs font-medium text-warung-gray">Promo telah berakhir</span>
          ) : (
            <div className="flex gap-2">
              <TimeBox value={t.days} label="Hari" />
              <TimeBox value={t.hours} label="Jam" />
              <TimeBox value={t.minutes} label="Menit" />
              <TimeBox value={t.seconds} label="Detik" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
