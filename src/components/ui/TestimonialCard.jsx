import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/[0.04] dark:ring-white/10">
      <FaQuoteLeft className="text-2xl text-warung-yellow" />
      <p className="flex-1 text-sm leading-relaxed text-warung-ink/85 dark:text-white/80">{testimonial.message}</p>
      <div className="flex items-center gap-1 text-warung-yellow" aria-label={`Rating ${testimonial.rating} dari 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className={i < testimonial.rating ? 'opacity-100' : 'opacity-25'} size={13} />
        ))}
      </div>
      <div>
        <p className="font-display text-sm font-semibold text-warung-ink">{testimonial.name}</p>
        <p className="text-xs text-warung-gray">{testimonial.role}</p>
      </div>
    </div>
  )
}
