import { FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import MapSection from '../components/ui/MapSection'
import site from '../data/site.json'

export default function Lokasi() {
  return (
    <>
      <Seo
        title="Lokasi"
        description="Alamat, jam operasional, dan patokan lokasi Warung Keluarga Barokah."
        path="/lokasi"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-warung-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
            Kunjungi Kami
          </span>
          <h1 className="font-display text-3xl font-semibold text-warung-ink sm:text-4xl">Lokasi Warung</h1>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <MapSection />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-warung-green dark:text-warung-green-light" />
              <div>
                <p className="font-display text-sm font-semibold text-warung-ink">Alamat</p>
                <p className="mt-1 text-sm text-warung-gray">{site.alamat}</p>
                <p className="mt-1 text-xs text-warung-gray">Patokan: {site.patokan}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="mt-1 shrink-0 text-warung-green dark:text-warung-green-light" />
              <div className="w-full">
                <p className="font-display text-sm font-semibold text-warung-ink">Jam Operasional</p>
                <ul className="mt-1 space-y-1 text-sm text-warung-gray">
                  {site.jamOperasional.map((j) => (
                    <li key={j.hari} className="flex justify-between">
                      <span>{j.hari}</span>
                      <span className="font-mono text-warung-ink dark:text-white">{j.jam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-warung-green px-4 py-3 text-sm font-semibold text-warung-paper hover:bg-warung-green-dark"
            >
              <FaWhatsapp /> Chat WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
