import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingScreen from './components/ui/LoadingScreen'

// Dynamic imports: each page is code-split into its own chunk
const Home = lazy(() => import('./pages/Home'))
const Tentang = lazy(() => import('./pages/Tentang'))
const Produk = lazy(() => import('./pages/Produk'))
const BbmEceran = lazy(() => import('./pages/BbmEceran'))
const Galeri = lazy(() => import('./pages/Galeri'))
const Promo = lazy(() => import('./pages/Promo'))
const Lokasi = lazy(() => import('./pages/Lokasi'))
const Kontak = lazy(() => import('./pages/Kontak'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-warung-green/20 border-t-warung-green" />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen show={loading} />
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/bbm-eceran" element={<BbmEceran />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/lokasi" element={<Lokasi />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
