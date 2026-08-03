import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { formatRupiah, stockLabels, categoryLabels } from '../../utils/format'
import site from '../../data/site.json'

export default function ProductModal({ product, onClose }) {
  if (!product) return null
  const stock = stockLabels[product.stock]
  const message = encodeURIComponent(`Halo, saya ingin menanyakan ketersediaan ${product.name}.`)

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-90 flex items-center justify-center bg-black/50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative grid w-full max-w-2xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-soft-lg dark:bg-warung-paper-dim sm:grid-cols-2"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail produk"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-warung-ink shadow-soft dark:bg-black/50 dark:text-white"
          >
            <FiX size={18} />
          </button>
          <div className="aspect-square w-full sm:aspect-auto">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-warung-gray">{categoryLabels[product.category]}</span>
            <h3 className="font-display text-xl font-semibold text-warung-ink">{product.name}</h3>
            <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${stock.className}`}>{stock.label}</span>
            <p className="text-sm leading-relaxed text-warung-gray">{product.description}</p>
            <span className="font-mono text-2xl font-bold text-warung-green dark:text-warung-green-light">
              {formatRupiah(product.price)}
              <span className="ml-1 text-sm font-normal text-warung-gray">/{product.unit}</span>
            </span>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-warung-green px-4 py-3 text-sm font-semibold text-warung-paper hover:bg-warung-green-dark"
            >
              <FaWhatsapp /> Tanya via WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
