import { motion } from 'framer-motion'
import { FiEye } from 'react-icons/fi'
import { formatRupiah, stockLabels, badgeLabels, categoryLabels } from '../../utils/format'

export default function ProductCard({ product, onView }) {
  const stock = stockLabels[product.stock]
  const badge = badgeLabels[product.badge]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-warung-green/5 transition-shadow hover:shadow-soft-lg dark:bg-white/4 dark:ring-white/10"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden receipt-edge-bottom">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className={`price-tag-notch absolute left-0 top-3 px-3 py-1 text-xs font-semibold ${badge.className}`}>
            {badge.label}
          </span>
        )}
        <button
          type="button"
          onClick={() => onView(product)}
          aria-label={`Lihat detail ${product.name}`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-warung-green opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/60"
        >
          <FiEye size={16} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="font-mono text-[11px] uppercase tracking-wide text-warung-gray">{categoryLabels[product.category]}</span>
        <h3 className="font-display text-base font-semibold leading-snug text-warung-ink">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-lg font-bold text-warung-green dark:text-warung-green-light">
            {formatRupiah(product.price)}
            <span className="ml-1 text-xs font-normal text-warung-gray">/{product.unit}</span>
          </span>
        </div>
        <span className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-medium ${stock.className}`}>{stock.label}</span>
      </div>
    </motion.article>
  )
}
