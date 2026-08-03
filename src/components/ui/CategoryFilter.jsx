export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori produk">
      {categories.map((cat) => (
        <button
          key={cat.value}
          type="button"
          role="tab"
          aria-selected={active === cat.value}
          onClick={() => onChange(cat.value)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            active === cat.value
              ? 'border-warung-green bg-warung-green text-warung-paper'
              : 'border-warung-green/20 bg-white text-warung-ink/70 hover:border-warung-green/50 dark:bg-white/5 dark:text-white/70'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
