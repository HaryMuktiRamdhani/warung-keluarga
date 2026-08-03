import { useState } from 'react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import site from '../../data/site.json'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Nama wajib diisi'
    if (!form.message.trim()) next.message = 'Pesan wajib diisi'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function buildMessage() {
    return encodeURIComponent(
      `Halo ${site.namaWarung},\nNama: ${form.name}\nNo. HP: ${form.phone || '-'}\nPesan: ${form.message}`
    )
  }

  function handleWhatsapp(e) {
    e.preventDefault()
    if (!validate()) return
    window.open(`https://wa.me/${site.whatsapp}?text=${buildMessage()}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  function handleEmail(e) {
    e.preventDefault()
    if (!validate()) return
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Pesan dari Website - ' + form.name)}&body=${buildMessage()}`
    setSent(true)
  }

  return (
    <form className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-warung-ink">Nama</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          className="w-full rounded-xl border border-warung-green/15 bg-white px-4 py-3 text-sm text-warung-ink outline-none focus:border-warung-green dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="Nama lengkap Anda"
        />
        {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-warung-ink">Nomor HP (opsional)</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="w-full rounded-xl border border-warung-green/15 bg-white px-4 py-3 text-sm text-warung-ink outline-none focus:border-warung-green dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="08xx xxxx xxxx"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-warung-ink">Pesan</label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          className="w-full resize-none rounded-xl border border-warung-green/15 bg-white px-4 py-3 text-sm text-warung-ink outline-none focus:border-warung-green dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="Tuliskan pertanyaan atau pesan Anda..."
        />
        {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleWhatsapp}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-warung-green px-4 py-3 text-sm font-semibold text-warung-paper hover:bg-warung-green-dark"
        >
          <FaWhatsapp /> Kirim via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmail}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-warung-green px-4 py-3 text-sm font-semibold text-warung-green hover:bg-warung-green/10 dark:text-warung-green-light"
        >
          <FaEnvelope /> Kirim via Email
        </button>
      </div>

      {sent && <p className="text-sm text-warung-green dark:text-warung-green-light">Pesan Anda sedang disiapkan untuk dikirim.</p>}
    </form>
  )
}
