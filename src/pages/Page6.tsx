/* ============================================================
   PAGE 6 — Formations       route : /formations
   ============================================================ */

import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe,
  PenTool,
  Megaphone,
  MessagesSquare,
  Clapperboard,
  Palette,
  ArrowRight,
} from 'lucide-react'
import { useInView } from '../lib/useInView'
import PageHeader from '../components/PageHeader'
import MaskedTitle from '../components/MaskedTitle'
import CtaBand from '../components/CtaBand'
import { FORMATIONS } from '../lib/content'

const ICONES = { Globe, PenTool, Megaphone, MessagesSquare, Clapperboard, Palette }

function suivreCurseur(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

const COULEUR_NIVEAU: Record<string, string> = {
  Débutant: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Intermédiaire: 'bg-amber-50 text-amber-700 ring-amber-200',
  'Tous niveaux': 'bg-slate-100 text-slate-600 ring-slate-200',
}

function Modules() {
  const { ref, inView } = useInView<HTMLElement>(0.08)

  return (
    <section ref={ref} data-in={inView} className="mx-auto max-w-7xl px-6 py-16 lg:px-10 md:py-24">
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {FORMATIONS.map((f, i) => {
          const Icone = ICONES[f.icone]
          return (
            <li
              key={f.slug}
              className="svc-in spot group relative isolate flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/12"
              style={{ animationDelay: `${0.1 + i * 0.09}s` }}
              onMouseMove={suivreCurseur}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="ico flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icone size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ${
                    COULEUR_NIVEAU[f.niveau]
                  }`}
                >
                  {f.niveau}
                </span>
              </div>

              <h2 className="underliner relative mt-7 font-display text-xl font-bold leading-tight text-[var(--color-roi)] transition-colors group-hover:text-[var(--color-primary)]">
                {f.title}
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{f.pitch}</p>

              <ul className="mt-7 flex-1 space-y-3 border-t border-slate-100 pt-7">
                {f.programme.map((p) => (
                  <li key={p} className="li-shift flex gap-3 text-sm text-slate-700">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-bleu)]"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <span className="text-sm font-semibold text-slate-400">{f.duree}</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3"
                >
                  M’inscrire
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const MODALITES = [
  {
    t: 'Huit personnes maximum',
    d: 'Au-delà, personne ne pose de question et la formation devient une conférence. Nous refusons plutôt que d’ouvrir une place de plus.',
  },
  {
    t: 'Sur vos propres projets',
    d: 'Vous arrivez avec votre activité, vous repartez avec votre site, vos visuels ou votre première campagne — pas avec un exercice d’école.',
  },
  {
    t: 'Présentiel ou à distance',
    d: 'À Yaoundé pour les sessions en salle, en visioconférence pour le reste du pays. Le contenu et la durée sont identiques.',
  },
]

function Modalites() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section ref={ref} data-in={inView} className="bg-slate-50/70 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)]"
            style={{ animationDelay: '.05s' }}
          >
            Comment ça se passe
          </span>
          <MaskedTitle
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-4xl"
            segments={[{ text: 'Trois règles de fonctionnement.' }]}
          />
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {MODALITES.map((m, i) => (
            <li
              key={m.t}
              className="card-in rounded-2xl border border-slate-200 bg-white p-8"
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              <h3 className="font-display text-lg font-bold text-[var(--color-roi)]">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Page6() {
  return (
    <>
      <PageHeader
        eyebrow="Nos formations"
        titre="Apprenez à le faire"
        accent="vous-même."
        intro="Six modules courts pour internaliser ce que nous faisons au quotidien. Pensés pour des gérants et des équipes qui n’ont pas de temps à perdre en théorie."
      />
      <Modules />
      <Modalites />
      <CtaBand
        titre="Une session vous intéresse ?"
        texte="Dites-nous quel module et votre niveau actuel. Nous vous indiquons les prochaines dates et si le groupe vous correspond."
        libelle="Réserver ma place"
      />
    </>
  )
}
