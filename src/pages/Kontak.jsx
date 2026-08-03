import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaQrcode } from 'react-icons/fa'
import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import ContactForm from '../components/ui/ContactForm'
import site from '../data/site.json'

export default function Kontak() {
  const waQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://wa.me/${site.whatsapp}`)}`

  return (
    <>
      <Seo
        title="Kontak"
        description="Hubungi Warung Keluarga Barokah via WhatsApp, telepon, email, atau formulir kontak."
        path="/kontak"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-warung-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
            Hubungi Kami
          </span>
          <h1 className="font-display text-3xl font-semibold text-warung-ink sm:text-4xl">Kontak Warung</h1>
          <p className="max-w-xl text-base text-warung-gray">
            Ada pertanyaan seputar produk atau layanan? Kirimkan pesan Anda, kami akan segera merespons.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-4 lg:col-span-2">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-warung-green/5 hover:-translate-y-0.5 dark:bg-white/4 dark:ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-lg text-[#25D366]"><FaWhatsapp /></span>
              <div>
                <p className="font-display text-sm font-semibold text-warung-ink">WhatsApp</p>
                <p className="text-sm text-warung-gray">+{site.whatsapp}</p>
              </div>
            </a>
            <a href={`tel:${site.telepon.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-warung-green/5 hover:-translate-y-0.5 dark:bg-white/4 dark:ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-warung-green/10 text-lg text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light"><FaPhoneAlt /></span>
              <div>
                <p className="font-display text-sm font-semibold text-warung-ink">Telepon</p>
                <p className="text-sm text-warung-gray">{site.telepon}</p>
              </div>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-warung-green/5 hover:-translate-y-0.5 dark:bg-white/4 dark:ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-warung-green/10 text-lg text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light"><FaEnvelope /></span>
              <div>
                <p className="font-display text-sm font-semibold text-warung-ink">Email</p>
                <p className="text-sm text-warung-gray">{site.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/ dark:ring-white/10">
              <img src={waQrUrl} alt="QR code WhatsApp warung" width={64} height={64} className="rounded-lg" loading="lazy" />
              <div>
                <p className="flex items-center gap-1.5 font-display text-sm font-semibold text-warung-ink"><FaQrcode className="text-warung-green dark:text-warung-green-light" /> Scan QR WhatsApp</p>
                <p className="text-sm text-warung-gray">Pindai untuk chat langsung</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10 lg:col-span-3">
            <h2 className="mb-5 font-display text-lg font-semibold text-warung-ink">Kirim Pesan</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
