import { Link } from 'react-router-dom'
import { useInView } from '../lib/useInView'

type Props = {
  titre?: string
  texte?: string
  libelle?: string
}

export default function CtaBand({
  titre = 'Parlons de votre projet.',
  texte = 'Trente minutes suffisent pour savoir si nous sommes le bon interlocuteur. Sans engagement, et vous repartez avec un avis honnête même si la réponse est non.',
  libelle = 'Démarrer mon projet',
}: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section ref={ref} data-in={inView} className="px-6 py-20 lg:px-10 md:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[var(--color-roi)] px-8 py-16 text-center md:px-16">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[var(--color-bleu)]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[var(--color-primary)]/30 blur-3xl" />

        <div className="relative">
          <h2
            className="reveal mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl"
            style={{ animationDelay: '.05s' }}
          >
            {titre}
          </h2>
          <p
            className="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300"
            style={{ animationDelay: '.15s' }}
          >
            {texte}
          </p>
          <div
            className="reveal mt-9 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: '.25s' }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[var(--color-roi)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
            >
              {libelle}
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://wa.me/237600000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
