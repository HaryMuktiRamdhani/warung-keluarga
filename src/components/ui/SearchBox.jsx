import { FiSearch } from 'react-icons/fi'

export default function SearchBox({ value, onChange, placeholder = 'Cari produk...' }) {
  return (
    <div className="relative w-full">
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-warung-gray" size={18} />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Cari produk"
        className="w-full rounded-xl border border-warung-green/15 bg-white py-3 pl-11 pr-4 text-sm text-warung-ink shadow-soft outline-none placeholder:text-warung-gray focus:border-warung-green dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </div>
  )
}
