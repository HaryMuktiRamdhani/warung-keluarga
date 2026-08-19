import { FaCheckCircle } from 'react-icons/fa'
import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import site from '../data/site.json'
import warungImage from '../assets/warung.jpg'

export default function Tentang() {
  return (
    <>
      <Seo
        title="Tentang Kami"
        description="Sejarah, visi, misi, dan nilai pelayanan Warung Keluarga Barokah."
        path="/tentang"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal type="left">
            <img
              src={warungImage}
              alt={`Foto tampak depan /${site.namaWarung}`}
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-soft-lg"
            />
          </Reveal>
          <Reveal type="right" className="flex flex-col gap-4">
            <span className="w-fit rounded-full bg-warung-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
              Sejarah Kami
            </span>
            <h1 className="font-display text-3xl font-semibold text-warung-ink sm:text-4xl">
              Perjalanan {site.namaWarung}
            </h1>
            <p className="text-base leading-relaxed text-warung-gray">
              Berdiri sejak tahun 2019, {site.namaWarung} dimulai dari sebuah etalase kecil di depan rumah
              yang menjual kebutuhan sembako harian. Seiring waktu, warung ini berkembang menjadi tempat
              belanja andalan warga sekitar, lengkap dengan layanan BBM eceran untuk kendaraan roda dua dan
              roda tiga. Dikelola langsung oleh keluarga, warung ini tumbuh bersama kepercayaan pelanggan
              yang datang dari generasi ke generasi.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-warung-paper-dim py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-3 rounded-2xl bg-white p-8 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
              <h2 className="font-display text-xl font-semibold text-warung-ink">Visi</h2>
              <p className="text-sm leading-relaxed text-warung-gray">{site.visi}</p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-3 rounded-2xl bg-white p-8 shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
              <h2 className="font-display text-xl font-semibold text-warung-ink">Misi</h2>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-warung-gray">
                {site.misi.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-warung-green dark:text-warung-green-light" />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Prinsip Kami" title="Nilai Pelayanan" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.nilaiPelayanan.map((nilai, i) => (
            <Reveal key={nilai} delay={i * 0.06} className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-warung-green/5 dark:bg-white/4 dark:ring-white/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warung-green font-display font-semibold text-warung-paper">
                {i + 1}
              </span>
              <p className="text-sm font-medium text-warung-ink">{nilai}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
