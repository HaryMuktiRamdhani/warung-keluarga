import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import site from '../../data/site.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-warung-green/10 bg-warung-green-dark text-warung-paper/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-warung-paper">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-warung-yellow text-sm font-bold text-warung-green-dark">WK</span>
            {site.namaWarung}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-warung-paper/70">{site.deskripsiSingkat}</p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/harymktrmdnn/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-warung-yellow hover:text-warung-green-dark">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573522133173" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-warung-yellow hover:text-warung-green-dark">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@yayayayayayayaya6767" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-warung-yellow hover:text-warung-green-dark">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-warung-yellow">Navigasi</h3>
          <ul className="mt-4 space-y-2 text-sm text-warung-paper/75">
            <li><NavLink to="/tentang" className="hover:text-warung-paper">Tentang Kami</NavLink></li>
            <li><NavLink to="/produk" className="hover:text-warung-paper">Produk</NavLink></li>
            <li><NavLink to="/bbm-eceran" className="hover:text-warung-paper">BBM Eceran</NavLink></li>
            <li><NavLink to="/galeri" className="hover:text-warung-paper">Galeri</NavLink></li>
            <li><NavLink to="/promo" className="hover:text-warung-paper">Promo</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-warung-yellow">Jam Buka</h3>
          <ul className="mt-4 space-y-2 text-sm text-warung-paper/75">
            {site.jamOperasional.map((j) => (
              <li key={j.hari} className="flex justify-between gap-4">
                <span>{j.hari}</span>
                <span className="font-mono text-warung-paper/90">{j.jam}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-warung-yellow">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-warung-paper/75">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 shrink-0 text-warung-yellow" /> {site.alamat}</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="shrink-0 text-warung-yellow" /> {site.telepon}</li>
            <li className="flex items-center gap-2"><FaEnvelope className="shrink-0 text-warung-yellow" /> {site.email}</li>
            <li className="flex items-center gap-2"><FaWhatsapp className="shrink-0 text-warung-yellow" /> +{site.whatsapp}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-warung-paper/60">
        © {year} {site.namaWarung}. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  )
}
