import Seo from '../components/ui/Seo'
import Hero from '../components/sections/Hero'
import KeunggulanSection from '../components/sections/KeunggulanSection'
import ProdukTerlarisSection from '../components/sections/ProdukTerlarisSection'
import PromoHighlightSection from '../components/sections/PromoHighlightSection'
import TestimoniSection from '../components/sections/TestimoniSection'
import StatistikSection from '../components/sections/StatistikSection'
import CtaSection from '../components/sections/CtaSection'
import site from '../data/site.json'

export default function Home() {
  return (
    <>
      <Seo
        title="Beranda"
        description={site.deskripsiSingkat}
        path="/"
      />
      <Hero />
      <KeunggulanSection />
      <ProdukTerlarisSection />
      <StatistikSection />
      <PromoHighlightSection />
      <TestimoniSection />
      <CtaSection />
    </>
  )
}
