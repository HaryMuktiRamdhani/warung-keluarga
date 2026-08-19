import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ThemeToggle from '../ui/ThemeToggle'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import site from '../../data/site.json'
import logoWarung from '../../assets/logo_warung.svg'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/produk', label: 'Produk' },
  { to: '/bbm-eceran', label: 'BBM Eceran' },
  { to: '/galeri', label: 'Galeri' },
  { to: '/promo', label: 'Promo' },
  { to: '/lokasi', label: 'Lokasi' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrollPosition(24)

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-warung-green/10 bg-warung-paper/90 py-2 shadow-soft backdrop-blur-md dark:bg-warung-paper/95'
          : 'border-transparent bg-warung-paper/70 py-4 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-warung-green dark:text-warung-green-light">
          <img
            src={logoWarung}
            alt="Logo Warung Mamah Zihan"
            className="h-9 w-9 rounded-xl object-cover"
          />
          <span className="hidden sm:inline">{site.namaWarung}</span>
        </NavLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-warung-green text-warung-paper'
                      : 'text-warung-ink/80 hover:bg-warung-green/10 hover:text-warung-green dark:text-warung-ink/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-warung-green px-4 py-2 text-sm font-semibold text-warung-paper transition-colors hover:bg-warung-green-dark"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-warung-green"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-4 pt-2 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive ? 'bg-warung-green text-warung-paper' : 'text-warung-ink/80 hover:bg-warung-green/10'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-warung-green px-4 py-3 text-sm font-semibold text-warung-paper"
                >
                  <FaWhatsapp /> Chat WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
