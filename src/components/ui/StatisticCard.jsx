import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

export default function StatisticCard({ label, value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, isInView)

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span className="font-mono text-4xl font-bold text-warung-yellow sm:text-5xl">
        {count.toLocaleString('id-ID')}
        {suffix}
      </span>
      <span className="text-sm text-warung-paper/75">{label}</span>
    </div>
  )
}
