import { FaGasPump, FaClock, FaShieldAlt } from 'react-icons/fa'
import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Faq from '../components/ui/Faq'
import bbm from '../data/bbm.json'
import { formatRupiah, stockLabels } from '../utils/format'

export default function BbmEceran() {
  return (
    <>
      <Seo
        title="BBM Eceran"
        description="Informasi harga, stok, dan jam pelayanan BBM eceran (Pertalite, Pertamax) di warung kami."
        path="/bbm-eceran"
      />

      <section className="bg-warung-green-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-warung-yellow text-2xl text-warung-ink">
              <FaGasPump />
            </span>
            <h1 className="font-display text-3xl font-semibold text-warung-paper sm:text-4xl">Layanan BBM Eceran</h1>
            <p className="text-sm text-warung-paper/80 sm:text-base">
              Melayani kebutuhan bahan bakar untuk kendaraan roda dua dan roda tiga dengan takaran yang akurat.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Daftar Harga" title="Jenis & Harga BBM" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {bbm.jenis.map((item, i) => {
            const stock = stockLabels[item.stok]
            return (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-lg text-white"
                      style={{ backgroundColor: item.warna }}
                    >
                      <FaGasPump />
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${stock.className}`}>{stock.label}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-warung-ink">{item.nama}</h3>
                  <p className="font-mono text-2xl font-bold text-warung-green dark:text-warung-green-light">
                    {formatRupiah(item.harga)}
                    <span className="ml-1 text-sm font-normal text-warung-gray">/{item.satuan}</span>
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-warung-paper-dim py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal type="left" className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-warung-green/10 text-lg text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
              <FaClock />
            </span>
            <h2 className="font-display text-lg font-semibold text-warung-ink">Jam Pelayanan</h2>
            <ul className="flex flex-col gap-2 text-sm text-warung-gray">
              {bbm.jamPelayanan.map((j) => (
                <li key={j.hari} className="flex justify-between">
                  <span>{j.hari}</span>
                  <span className="font-mono text-warung-ink dark:text-white">{j.jam}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal type="right" className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-warung-green/10 text-lg text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
              <FaShieldAlt />
            </span>
            <h2 className="font-display text-lg font-semibold text-warung-ink">Informasi Keselamatan</h2>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-warung-gray">
              <li>Matikan mesin kendaraan sebelum pengisian BBM.</li>
              <li>Dilarang merokok atau menyalakan api di area pengisian.</li>
              <li>Gunakan wadah yang sesuai standar untuk pembelian dalam jumlah besar.</li>
              <li>Ikuti arahan petugas selama proses pengisian berlangsung.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Sering Ditanyakan" title="FAQ BBM Eceran" />
        <div className="mt-10">
          <Faq items={bbm.faq} />
        </div>
      </section>
    </>
  )
}
