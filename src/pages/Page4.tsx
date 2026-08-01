
import { useEffect, useRef } from 'react'
import { useInView } from '../lib/useInView'
import PageHeader from '../components/Navbar'
import MaskedTitle from '../components/MaskedTitle'
import CtaBand from '../components/CtaBand'
import { ETAPES } from '../lib/content'

import videoMp4 from '../assets/video.mp4'

function Timeline() {
  const { ref, inView } = useInView<HTMLElement>(0.15)
  const videoRef = useRef<HTMLVideoElement>(null)

  /* La vidéo ne tourne que quand la section est visible : moins de CPU,
     moins de batterie. Et jamais si l'utilisateur a réduit les animations. */
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause()
      return
    }
    if (inView) void v.play().catch(() => {})
    else v.pause()
  }, [inView])

  return (
    <section
      ref={ref}
      data-in={inView}
      className="relative isolate w-full overflow-hidden py-20 md:py-28"
    >
     
      <div className="absolute inset-0 -z-10 bg-white">
        <video
          ref={videoRef}
          className="bg-video h-full w-full object-cover"
          src={videoMp4}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={(e) => e.currentTarget.setAttribute('data-ready', 'true')}
        />
        {/* Le flou fait l'essentiel du travail, ce voile ne fait qu'unifier */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/75" />
      </div>

      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-80 w-80 rounded-full bg-[var(--color-bleu)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 -z-10 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="reveal inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)] lg:text-sm"
            style={{ animationDelay: '.05s' }}
          >
            Notre méthode
          </span>
          <MaskedTitle
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-5xl"
            segments={[{ text: 'Un déroulé clair, du premier appel à la mise en ligne.' }]}
            delay={0.15}
            stagger={0.05}
          />
        </div>

        <div className="relative mt-16">
          <div
            className="absolute top-7 hidden h-0.5 rounded-full bg-slate-900/10 lg:block"
            style={{ left: '12.5%', right: '12.5%' }}
          />
          <div
            className="line-fill absolute top-7 hidden h-0.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-bleu)] lg:block"
            style={{ left: '12.5%', right: '12.5%' }}
          />

          <ol className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {ETAPES.map((s, i) => (
              <li
                key={s.n}
                className="card-in group relative flex cursor-default flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${0.4 + i * 0.14}s` }}
              >
                <span
                  className="dot relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-bleu)] font-display text-base font-bold text-white shadow-lg shadow-[var(--color-primary)]/30 ring-8 ring-white transition-all duration-300 group-hover:scale-[1.35] group-hover:shadow-xl group-hover:shadow-[var(--color-bleu)]/60"
                  style={{ animationDelay: `${0.5 + i * 0.14}s` }}
                >
                  {s.n}
                </span>

                <h3
                  className="reveal mt-7 font-display text-lg font-bold text-[var(--color-roi)] transition-all duration-300 group-hover:scale-105 group-hover:text-[var(--color-primary)]"
                  style={{ animationDelay: `${0.55 + i * 0.14}s` }}
                >
                  {s.title}
                </h3>
                <p
                  className="reveal mt-2 max-w-xs text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-800"
                  style={{ animationDelay: `${0.65 + i * 0.14}s` }}
                >
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

const ENGAGEMENTS = [
  {
    t: 'Un seul interlocuteur',
    d: 'La personne présente au premier appel est celle qui suit votre projet jusqu’au bout. Pas de passage de dossier.',
  },
  {
    t: 'Des délais écrits',
    d: 'La date de livraison figure au devis. Si nous la dépassons de notre fait, le mois d’accompagnement suivant est offert.',
  },
  {
    t: 'Vos accès vous appartiennent',
    d: 'Nom de domaine, hébergement, compte publicitaire : tout est créé à votre nom. Vous partez avec si vous partez.',
  },
]

function Engagements() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section ref={ref} data-in={inView} className="bg-slate-50/70 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)]"
            style={{ animationDelay: '.05s' }}
          >
            Nos engagements
          </span>
          <MaskedTitle
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-4xl"
            segments={[{ text: 'Trois règles qui ne bougent pas.' }]}
          />
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <li
              key={e.t}
              className="card-in rounded-2xl border border-slate-200 bg-white p-8"
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              <h3 className="font-display text-lg font-bold text-[var(--color-roi)]">{e.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{e.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Page4() {
  return (
    <>
      <PageHeader
        eyebrow="Notre processus"
        titre="Vous saurez toujours"
        accent="où en est votre projet."
        intro="Quatre étapes, des points d’avancement fixes et une validation de votre part avant chaque passage à la suite. Aucune facture ne tombe sur une étape que vous n’avez pas approuvée."
      />
      <Timeline />
      <Engagements />
      <CtaBand
        titre="Commençons par l’étape 01."
        texte="Un appel de trente minutes, sans préparation nécessaire de votre côté. Vous racontez, on écoute et on vous dit ce qui est faisable."
        libelle="Réserver le cadrage"
      />
    </>
  )
}
