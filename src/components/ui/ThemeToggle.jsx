import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      aria-pressed={isDark}
      className={`relative inline-flex h-9 w-16 items-center rounded-full border border-warung-green/20 bg-warung-paper-dim px-1 transition-colors dark:border-white/10 ${className}`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-warung-green text-warung-paper shadow-soft transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </span>
    </button>
  )
}
