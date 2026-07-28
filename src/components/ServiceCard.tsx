import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Globe, PenTool, GraduationCap, MessagesSquare, ArrowRight } from 'lucide-react'
import type { Service } from '../lib/content'

const ICONES = { Globe, PenTool, GraduationCap, MessagesSquare }

/* Le spotlight suit le curseur : on écrit les coordonnées dans deux variables
   CSS lues par .spot::before. Passer par des custom properties évite de
   re-rendre le composant à chaque mouvement de souris. */
function suivreCurseur(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icone = ICONES[service.icone]
  const destination = service.lien ?? '/contact'
  const libelle = service.lien ? 'Voir les modules' : 'Demander un devis'

  return (
    <li
      className="svc-in spot sheen group relative isolate flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-roi)] via-[var(--color-primary)] to-[var(--color-primary)] p-8 text-white shadow-lg shadow-[var(--color-roi)]/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 lg:p-9"
      style={{ animationDelay: `${0.1 + index * 0.11}s` }}
      onMouseMove={suivreCurseur}
    >
      <div className="relative flex items-start justify-between gap-4">
        <span className="ico flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-white ring-1 ring-white/20">
          <Icone size={22} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="shrink-0 rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 ring-1 ring-white/15">
          {service.delai}
        </span>
      </div>

      <h2 className="underliner relative mt-7 font-display text-2xl font-bold leading-tight">
        {service.title}
      </h2>

      <p className="relative mt-4 text-[15px] leading-relaxed text-white/80">{service.pitch}</p>

      <ul className="relative mt-7 space-y-3 border-t border-white/15 pt-7">
        {service.delivrables.map((d) => (
          <li key={d} className="li-shift flex gap-3 text-sm text-white/85">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-bleu)]"
              aria-hidden="true"
            />
            {d}
          </li>
        ))}
      </ul>

      <Link
        to={destination}
        className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3"
      >
        {libelle}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </li>
  )
}
