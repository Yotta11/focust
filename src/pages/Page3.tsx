import { useMemo, useState } from 'react'
import { useInView } from '../lib/useInView'
import PageHeader from '../components/Navbar'
import CtaBand from '../components/CtaBand'
import PartnersMarquee from '../components/PartnersMarquee'
import { PROJETS } from '../lib/content'

const FILTRES = ['Tous', 'Commerce', 'Restauration', 'Services juridiques', 'Mode'] as const

function Projets() {
  const { ref, inView } = useInView<HTMLElement>(0.1)
  const [filtre, setFiltre] = useState<(typeof FILTRES)[number]>('Tous')

  const visibles = useMemo(
    () => (filtre === 'Tous' ? PROJETS : PROJETS.filter((p) => p.secteur.startsWith(filtre))),
    [filtre],
  )

  return (
    <section id="realisation" ref={ref} data-in={inView} className="mx-auto max-w-7xl px-6 py-16 lg:px-10 md:py-24">
      <div className="reveal flex flex-wrap gap-2.5" style={{ animationDelay: '.05s' }}>
        {FILTRES.map((f) => {
          const actif = f === filtre
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFiltre(f)}
              aria-pressed={actif}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                actif
                  ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25'
                  : 'border border-slate-200 text-slate-600 hover:border-[var(--color-primary)]/40 hover:text-[var(--color-roi)]'
              }`}
            >
              {f}
            </button>
          )
        })}
      </div>

      {visibles.length === 0 ? (
        <p className="mt-16 text-slate-500">
          Aucun projet publié dans ce secteur pour l’instant. Les autres filtres en contiennent.
        </p>
      ) : (
        <ul className="mt-12 grid gap-8 lg:grid-cols-2">
          {visibles.map((p, i) => (
            <li
              key={p.client}
              className="card-in group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--color-roi)]/10"
              style={{ animationDelay: `${0.1 + i * 0.11}s` }}
            >
              {/* Bandeau chiffre — remplace par une capture du projet si tu en as une */}
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-roi)] to-[var(--color-primary)]">
                <div className="pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full bg-[var(--color-bleu)]/30 blur-3xl" />
                <div className="relative text-center text-white">
                  <span className="block font-display text-5xl font-bold">{p.chiffre}</span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.2em] opacity-80">
                    {p.libelle}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-hover)]">
                  {p.secteur}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-roi)] transition-colors group-hover:text-[var(--color-primary)]">
                  {p.client}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{p.mission}</p>
                <p className="mt-4 border-l-2 border-[var(--color-bleu)] pl-4 text-[15px] leading-relaxed text-slate-700">
                  {p.resultat}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function Page3() {
  return (
    <>
      <PageHeader
        eyebrow="Nos réalisations"
        titre="Des résultats"
        accent="qu’on peut vérifier."
        intro="Quatre projets menés à Yaoundé et Douala, avec les chiffres tels qu’ils sont sortis. Nous pouvons vous mettre en relation avec ces clients si vous souhaitez leur poser des questions directement."
      />
      <PartnersMarquee />
      <Projets />
      <CtaBand
        titre="Votre projet ressemble à l’un d’eux ?"
        texte="Dites-nous lequel et sur quel point vous bloquez. Nous vous répondrons avec ce qui a marché, et ce qui avait échoué avant."
        libelle="Décrire mon projet"
      />
    </>
  )
}
