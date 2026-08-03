import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from '../ui/FloatingWhatsApp'
import BackToTop from '../ui/BackToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-warung-paper text-warung-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-warung-green focus:px-4 focus:py-2 focus:text-warung-paper"
      >
        Lompat ke konten utama
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  )
}
