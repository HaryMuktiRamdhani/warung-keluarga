import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="rounded-full bg-warung-green/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-warung-green dark:bg-warung-green-light/15 dark:text-warung-green-light">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-warung-ink sm:text-4xl">{title}</h2>
      {description && <p className="text-base text-warung-gray">{description}</p>}
    </Reveal>
  )
}
