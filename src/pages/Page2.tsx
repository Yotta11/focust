/* ============================================================
   PAGE 2 — Services         route : /services
   ============================================================ */

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../lib/useInView'
import PageHeader from '../components/Navbar'
import MaskedTitle from '../components/MaskedTitle'
import ServiceCard from '../components/ServiceCard'
import CtaBand from '../components/CtaBand'
import { SERVICES, FORMATIONS } from '../lib/content'

function Grille() {
  const { ref, inView } = useInView<HTMLElement>(0.08)

  return (
    <section ref={ref} data-in={inView} className="mx-auto max-w-7xl px-6 py-16 lg:px-10 md:py-24">
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </ul>
    </section>
  )
}

/* Passerelle vers la page Formations */
function ApercuFormations() {
  const { ref, inView } = useInView<HTMLElement>(0.15)

  return (
    <section ref={ref} data-in={inView} className="bg-slate-50/70 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span
              className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)]"
              style={{ animationDelay: '.05s' }}
            >
              Nos formations
            </span>
            <MaskedTitle
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-4xl"
              segments={[
                { text: 'Apprenez à le faire' },
                { text: 'vous-même.', className: 'text-[var(--color-primary)]' },
              ]}
            />
            <p
              className="reveal mt-5 text-[15px] leading-relaxed text-slate-600"
              style={{ animationDelay: '.4s' }}
            >
              Six modules courts, en présentiel à Yaoundé ou à distance, par groupes de huit.
            </p>
          </div>
          <Link
            to="/formations"
            className="reveal inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 hover:gap-3"
            style={{ animationDelay: '.45s' }}
          >
            Voir le programme complet
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATIONS.map((f, i) => (
            <li
              key={f.slug}
              className="card-in flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <span className="font-display font-bold text-[var(--color-roi)]">{f.title}</span>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {f.duree}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const NON_INCLUS = [
  'Les engagements de 12 mois. Vous restez parce que ça marche, pas à cause d’un contrat.',
  'Les rapports de 40 pages que personne ne lit. Vous recevez trois chiffres qui comptent.',
  'Les promesses de première position Google en une semaine. Ça n’existe pas.',
]

function CeQuOnNeFaitPas() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section ref={ref} data-in={inView} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)]"
            style={{ animationDelay: '.05s' }}
          >
            Soyons clairs
          </span>
          <MaskedTitle
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-4xl"
            segments={[{ text: 'Ce que nous ne vendons pas.' }]}
          />
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {NON_INCLUS.map((t, i) => (
            <li
              key={t}
              className="card-in rounded-2xl border border-slate-200 bg-white p-7 text-[15px] leading-relaxed text-slate-700"
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              <span className="mb-4 block text-xl text-slate-300" aria-hidden="true">
                ✕
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Page2() {
  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        titre="Un seul objectif :"
        accent="des clients réels."
        intro="Choisissez ce dont vous avez besoin, ou laissez-nous combiner le tout pour un impact mesuré et durable. Chaque prestation se vend seule ; les résultats arrivent plus vite quand elles avancent ensemble."
      />
      <Grille />
      <ApercuFormations />
      <CeQuOnNeFaitPas />
      <CtaBand
        titre="Vous hésitez sur le bon point de départ ?"
        texte="Décrivez-nous votre situation en quelques lignes. On vous dit par quoi commencer, même si ce n’est pas par nous."
        libelle="Poser ma question"
      />
    </>
  )
}
