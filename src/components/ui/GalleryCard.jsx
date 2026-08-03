import { FiZoomIn } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function GalleryCard({ item, onOpen }) {
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => onOpen(item)}
      className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-soft"
      aria-label={`Perbesar foto ${item.title}`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex items-center gap-2 text-sm font-medium text-white">
          <FiZoomIn /> {item.title}
        </span>
      </div>
    </motion.button>
  )
}
