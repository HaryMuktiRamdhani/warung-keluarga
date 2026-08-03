export function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export const stockLabels = {
  tersedia: { label: 'Tersedia', className: 'bg-warung-green/10 text-warung-green dark:bg-warung-green-light/20 dark:text-warung-green-light' },
  'hampir-habis': { label: 'Hampir Habis', className: 'bg-warung-yellow/20 text-amber-700 dark:text-amber-300' },
  habis: { label: 'Habis', className: 'bg-gray-200 text-gray-500 dark:bg-white/10 dark:text-gray-400' },
}

export const badgeLabels = {
  'best-seller': { label: 'Terlaris', className: 'bg-warung-green text-white' },
  baru: { label: 'Baru', className: 'bg-warung-yellow text-warung-ink' },
  promo: { label: 'Promo', className: 'bg-rose-500 text-white' },
}

export const categoryLabels = {
  makanan: 'Makanan',
  minuman: 'Minuman',
  sembako: 'Sembako',
  'kebutuhan-harian': 'Kebutuhan Harian',
  'bbm-eceran': 'BBM Eceran',
}
