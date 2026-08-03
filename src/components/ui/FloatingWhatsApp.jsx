import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import site from '../../data/site.json'

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(`Halo ${site.namaWarung}, saya ingin bertanya mengenai produk.`)
  const href = `https://wa.me/${site.whatsapp}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-8 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg"
    >
      <FaWhatsapp size={26} />
    </motion.a>
  )
}
