import { FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'
import site from '../../data/site.json'

export default function MapSection() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-warung-green/5 dark:bg-white/[0.04] dark:ring-white/10">
      <iframe
        title={`Lokasi ${site.namaWarung}`}
        src={site.mapsEmbedUrl}
        className="h-80 w-full sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-warung-ink">{site.alamat}</p>
          <p className="mt-1 text-sm text-warung-gray">Patokan: {site.patokan}</p>
        </div>
        <div className="flex gap-3">
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-warung-green px-4 py-2.5 text-sm font-semibold text-warung-paper hover:bg-warung-green-dark"
          >
            <FaMapMarkedAlt /> Buka Google Maps
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-warung-green px-4 py-2.5 text-sm font-semibold text-warung-green hover:bg-warung-green/10 dark:text-warung-green-light"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
