import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaMapMarkerAlt, FaStore } from 'react-icons/fa'
import site from '../../data/site.json'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warung-green-dark">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-warung-green-dark via-warung-green-dark/80 to-warung-green-dark/40" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-warung-paper/90"
        >
          <FaStore className="text-warung-yellow" /> Melayani warga sejak 2019
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl font-semibold leading-tight text-warung-paper sm:text-5xl lg:text-6xl"
        >
          {site.namaWarung}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-xl text-base text-warung-paper/80 sm:text-lg"
        >
          {site.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            to="/produk"
            className="rounded-xl bg-warung-yellow px-6 py-3.5 text-sm font-semibold text-warung-ink shadow-soft-lg transition-transform hover:-translate-y-0.5"
          >
            Lihat Produk
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-warung-paper backdrop-blur transition-transform hover:-translate-y-0.5 hover:bg-white/20"
          >
            <FaWhatsapp /> Chat WhatsApp
          </a>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-warung-paper transition-transform hover:-translate-y-0.5 hover:bg-white/10"
          >
            <FaMapMarkerAlt /> Lihat Lokasi
          </a>
        </motion.div>
      </div>


    </section>
  )
}
