import { FaWhatsapp } from 'react-icons/fa'
import Reveal from '../ui/Reveal'
import site from '../../data/site.json'

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal type="zoom" className="relative overflow-hidden rounded-3xl bg-warung-green px-6 py-14 text-center shadow-soft-lg sm:px-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-warung-yellow/20" />
        <div className="pointer-events-none absolute -bottom-14 -left-10 h-48 w-48 rounded-full bg-white/10" />
        <h2 className="relative font-display text-3xl font-semibold text-warung-paper sm:text-4xl">
          Butuh Sesuatu Hari Ini?
        </h2>
        <p className="relative mx-auto mt-3 max-w-xl text-sm text-warung-paper/80 sm:text-base">
          Hubungi kami langsung lewat WhatsApp untuk cek stok, tanya harga, atau titip antar kebutuhan rumah Anda.
        </p>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-7 inline-flex items-center gap-2 rounded-xl bg-warung-yellow px-6 py-3.5 text-sm font-semibold text-warung-ink shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <FaWhatsapp /> Hubungi Sekarang
        </a>
      </Reveal>
    </section>
  )
}
