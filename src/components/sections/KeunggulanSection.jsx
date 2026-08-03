import SectionHeading from '../ui/SectionHeading'
import FeatureCard from '../ui/FeatureCard'
import site from '../../data/site.json'

export default function KeunggulanSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Kenapa Memilih Kami"
        title="Keunggulan Warung Keluarga"
        description="Bukan sekadar tempat belanja, tapi bagian dari keseharian warga sekitar."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.keunggulan.map((item, i) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}
