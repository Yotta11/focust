import { useInView } from '../lib/useInView'
import MaskedTitle from './MaskedTitle'

type Props = {
  eyebrow: string
  /** Partie du titre en couleur d'accent, optionnelle */
  titre: string
  accent?: string
  intro: string
}

export default function PageHeader({ eyebrow, titre, accent, intro }: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.05)

  return (
    <section
      ref={ref}
      data-in={inView}
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bleu)]/8 to-white pt-16 pb-14 md:pt-24 md:pb-20"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[var(--color-bleu)]/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <span
          className="reveal inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
          style={{ animationDelay: '.05s' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
          {eyebrow}
        </span>

        <MaskedTitle
          as="h1"
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-roi)] sm:text-5xl lg:text-6xl"
          segments={[
            { text: titre },
            ...(accent ? [{ text: accent, className: 'text-[var(--color-primary)]' }] : []),
          ]}
        />

        <p
          className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
          style={{ animationDelay: '.45s' }}
        >
          {intro}
        </p>
      </div>
    </section>
  )
}
