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
  Users,
  Target,
  MonitorPlay,
  CalendarDays,
  MapPin,
  Video,
  Quote,
  Plus,
} from 'lucide-react'
import { useInView } from '../lib/useInView'
import PageHeader from '../components/Navbar'
import MaskedTitle from '../components/MaskedTitle'
import CtaBand from '../components/CtaBand'
import { FORMATIONS } from '../lib/content'
import Footer from '../components/Footer'
import reflexion from '../assets/reflexion.png'

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
    <section
      ref={ref}
      data-in={inView}
      className="mx-auto max-w-full px-6 py-16 lg:px-32 md:py-24 bg-[linear-gradient(135deg,#E6F9FF_40%,#ffffff_100%)]"
    >
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
                  className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
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

/* ------------------------------------------------------------------ */
/*  Modalités                                                          */
/* ------------------------------------------------------------------ */

const MODALITES = [
  {
    icone: Users,
    t: 'Huit personnes maximum',
    d: 'Au-delà, personne ne pose de question et la formation devient une conférence. Nous refusons plutôt que d’ouvrir une place de plus.',
  },
  {
    icone: Target,
    t: 'Sur vos propres projets',
    d: 'Vous arrivez avec votre activité, vous repartez avec votre site, vos visuels ou votre première campagne — pas avec un exercice d’école.',
  },
  {
    icone: MonitorPlay,
    t: 'Présentiel ou à distance',
    d: 'À Yaoundé pour les sessions en salle, en visioconférence pour le reste du pays. Le contenu et la durée sont identiques.',
  },
]

function Modalites() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section
  ref={ref}
  data-in={inView}
  className="relative overflow-hidden py-20 md:py-28 bg-cover mx-12 bg-center bg-no-repeat opacity-80"
  style={{ backgroundImage: `url(${reflexion})` }}
>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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
          {MODALITES.map((m, i) => {
            const Icone = m.icone
            return (
              <li
                key={m.t}
                onMouseMove={suivreCurseur}
                className="card-in spot group relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-8
                           shadow-[0_1px_2px_rgba(15,23,42,.04),0_8px_24px_-12px_rgba(15,23,42,.10)]
                           transition-[transform,box-shadow,border-color] duration-500 ease-out
                           hover:-translate-y-2 hover:border-[var(--color-primary)]/40
                           hover:shadow-[0_2px_4px_rgba(15,23,42,.04),0_28px_50px_-24px_var(--color-primary)]
                           motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${0.3 + i * 0.12}s` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-full
                             bg-[linear-gradient(90deg,var(--color-primary),var(--color-bleu))]
                             transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100
                             bg-[linear-gradient(160deg,color-mix(in_srgb,var(--color-primary)_8%,transparent),transparent_62%)]"
                />

                <div className="flex items-center justify-between">
                  <span
                    className="ico flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]
                               transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6
                               group-hover:bg-[var(--color-primary)] group-hover:text-white
                               group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/30"
                  >
                    <Icone size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-bold leading-none text-slate-200 transition-colors duration-500 group-hover:text-[var(--color-primary)]/25"
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-lg font-bold text-[var(--color-roi)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {m.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.d}</p>

                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-10 bg-[var(--color-bleu)] transition-all duration-500 ease-out group-hover:w-20"
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Prochaines sessions                                                */
/*  A REMPLACER : dates, tarifs et places par vos vraies donnees.      */
/*  moduleIndex pointe vers FORMATIONS (lib/content).                  */
/* ------------------------------------------------------------------ */

const SESSIONS = [
  { moduleIndex: 0, date: '15 – 16 septembre', format: 'Yaoundé', places: 3, tarif: '75 000 FCFA' },
  { moduleIndex: 2, date: '29 septembre', format: 'Visio', places: 6, tarif: '45 000 FCFA' },
  { moduleIndex: 1, date: '13 – 14 octobre', format: 'Yaoundé', places: 1, tarif: '75 000 FCFA' },
  { moduleIndex: 4, date: '27 octobre', format: 'Visio', places: 8, tarif: '45 000 FCFA' },
]

function placesLabel(n: number) {
  if (n === 0) return { texte: 'Complet', classe: 'bg-slate-100 text-slate-500 ring-slate-200' }
  if (n <= 2)
    return {
      texte: `${n} place${n > 1 ? 's' : ''}`,
      classe: 'bg-rose-50 text-rose-700 ring-rose-200',
    }
  return { texte: `${n} places`, classe: 'bg-emerald-50 text-emerald-700 ring-emerald-200' }
}

function Sessions() {
  const { ref, inView } = useInView<HTMLElement>(0.15)

  return (
    <section ref={ref} data-in={inView} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)]"
            style={{ animationDelay: '.05s' }}
          >
            Calendrier
          </span>
          <MaskedTitle
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-4xl"
            segments={[{ text: 'Les prochaines sessions.' }]}
          />
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Paiement en une ou deux fois, par MTN MoMo, Orange Money ou virement. Facture disponible
            pour les entreprises.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,.04),0_12px_32px_-18px_rgba(15,23,42,.14)]">
          {SESSIONS.map((s, i) => {
            const module = FORMATIONS[s.moduleIndex]
            const badge = placesLabel(s.places)
            const complet = s.places === 0
            return (
              <li
                key={`${s.moduleIndex}-${s.date}`}
                className="card-in group relative flex flex-col gap-4 bg-white px-6 py-6 transition-colors duration-300 hover:bg-slate-50/80 sm:flex-row sm:items-center sm:gap-8 sm:px-8"
                style={{ animationDelay: `${0.2 + i * 0.08}s` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-[var(--color-primary)] transition-transform duration-500 ease-out group-hover:scale-y-100 motion-reduce:transition-none"
                />

                <div className="flex min-w-[10rem] items-center gap-2.5 text-sm font-semibold text-[var(--color-roi)]">
                  <CalendarDays
                    size={16}
                    className="shrink-0 text-[var(--color-primary)]"
                    aria-hidden="true"
                  />
                  {s.date}
                </div>

                <div className="flex-1">
                  <p className="font-display text-base font-bold text-[var(--color-roi)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                    {module?.title ?? 'Module à définir'}
                  </p>
                  <p className="mt-1 flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
                    {s.format === 'Visio' ? (
                      <Video size={14} aria-hidden="true" />
                    ) : (
                      <MapPin size={14} aria-hidden="true" />
                    )}
                    {s.format}
                    {module?.duree ? (
                      <>
                        <span className="text-slate-300" aria-hidden="true">
                          •
                        </span>
                        {module.duree}
                      </>
                    ) : null}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <span className="text-sm font-semibold text-slate-500">{s.tarif}</span>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ${badge.classe}`}
                  >
                    {badge.texte}
                  </span>
                  {complet ? (
                    <span className="text-sm font-semibold text-slate-400">Liste d’attente</span>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                    >
                      Réserver
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        <p className="mt-6 text-sm text-slate-500">
          Aucune date ne vous convient ?{' '}
          <Link
            to="/contact"
            className="rounded-md font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
          >
            Dites-nous vos disponibilités
          </Link>{' '}
          — nous ouvrons une session dès qu’un groupe se forme.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Témoignages — A REMPLACER par de vrais retours participants        */
/* ------------------------------------------------------------------ */

const TEMOIGNAGES = [
  {
    citation:
      'Je suis arrivée avec une page Facebook et trois photos floues. Je suis repartie avec un site en ligne que je mets à jour moi-même le dimanche soir.',
    nom: 'Nadège M.',
    role: 'Pâtisserie, Bastos',
  },
  {
    citation:
      'Le format à huit change tout. On a passé une heure sur mon catalogue à moi, pas sur un exemple générique.',
    nom: 'Serge T.',
    role: 'Quincaillerie, Mvan',
  },
  {
    citation:
      'Ma première campagne tournait avant la fin de la session. J’ai vu les premiers messages arriver le soir même.',
    nom: 'Aline K.',
    role: 'Prêt-à-porter, Mokolo',
  },
]

function Temoignages() {
  const { ref, inView } = useInView<HTMLElement>(0.15)

  return (
    <section
      ref={ref}
      data-in={inView}
      className="bg-[linear-gradient(135deg,#E6F9FF_40%,#ffffff_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)]"
            style={{ animationDelay: '.05s' }}
          >
            Ils sont passés par là
          </span>
          <MaskedTitle
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-4xl"
            segments={[{ text: 'Ce qu’ils en ont fait ensuite.' }]}
          />
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {TEMOIGNAGES.map((t, i) => (
            <li
              key={t.nom}
              onMouseMove={suivreCurseur}
              className="card-in spot group relative isolate flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8
                         shadow-[0_1px_2px_rgba(15,23,42,.04),0_8px_24px_-12px_rgba(15,23,42,.10)]
                         transition-[transform,box-shadow,border-color] duration-500 ease-out
                         hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40
                         hover:shadow-[0_2px_4px_rgba(15,23,42,.04),0_26px_48px_-24px_var(--color-primary)]
                         motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ animationDelay: `${0.25 + i * 0.12}s` }}
            >
              <figure className="flex flex-1 flex-col">
                <Quote
                  size={28}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="text-[var(--color-primary)]/25 transition-all duration-500 group-hover:scale-110 group-hover:text-[var(--color-primary)]/50"
                />
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-700">
                  {t.citation}
                </blockquote>
                <figcaption className="mt-7 border-t border-slate-100 pt-5">
                  <span className="block font-display text-sm font-bold text-[var(--color-roi)]">
                    {t.nom}
                  </span>
                  <span className="mt-0.5 block text-sm text-slate-500">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

const FAQ = [
  {
    q: 'Faut-il venir avec son ordinateur ?',
    r: 'Oui, c’est indispensable : vous travaillez sur votre propre projet pendant toute la session. Un ordinateur portable suffit, quelle que soit sa marque. Prévenez-nous si vous n’en avez pas, nous pouvons en prêter un dans la limite des disponibilités.',
  },
  {
    q: 'Quel niveau faut-il avoir au départ ?',
    r: 'Savoir utiliser un navigateur et une boîte mail suffit pour les modules « Débutant ». Les modules « Intermédiaire » supposent une présence en ligne déjà existante, même approximative. En cas de doute, décrivez-nous votre situation : nous vous orientons vers le bon module.',
  },
  {
    q: 'Recevez-vous une attestation ?',
    r: 'Une attestation de participation est remise à la fin de chaque module. Elle mentionne le programme suivi et la durée effective.',
  },
  {
    q: 'Que se passe-t-il si je rate une séance ?',
    r: 'Sur un module en deux jours, la journée manquée se rattrape lors de la session suivante, sans frais supplémentaires. Prévenez-nous simplement à l’avance.',
  },
  {
    q: 'Peut-on former toute une équipe en interne ?',
    r: 'Oui. Nous adaptons le programme à votre activité et intervenons dans vos locaux à partir de quatre participants. Contenu, durée et tarif sont établis après un échange préalable.',
  },
  {
    q: 'Comment se fait le paiement ?',
    r: 'MTN MoMo, Orange Money ou virement bancaire, en une ou deux fois. La place est confirmée à réception du premier versement. Facture fournie sur demande pour les entreprises.',
  },
]

function Faq() {
  const { ref, inView } = useInView<HTMLElement>(0.15)

  return (
    <section ref={ref} data-in={inView} className="bg-slate-50/70 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <div>
            <span
              className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)]"
              style={{ animationDelay: '.05s' }}
            >
              Questions fréquentes
            </span>
            <MaskedTitle
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-4xl"
              segments={[{ text: 'Avant de réserver.' }]}
            />
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Votre question n’y est pas ?{' '}
              <Link
                to="/contact"
                className="rounded-md font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              >
                Écrivez-nous
              </Link>
              , nous répondons sous 24 heures ouvrées.
            </p>
          </div>

          <ul className="space-y-3">
            {FAQ.map((item, i) => (
              <li key={item.q} className="card-in" style={{ animationDelay: `${0.2 + i * 0.07}s` }}>
                <details
                  className="group rounded-2xl border border-slate-200 bg-white
                             shadow-[0_1px_2px_rgba(15,23,42,.04)]
                             transition-[box-shadow,border-color] duration-500
                             hover:border-[var(--color-primary)]/40
                             hover:shadow-[0_1px_2px_rgba(15,23,42,.04),0_18px_36px_-22px_var(--color-primary)]
                             open:border-[var(--color-primary)]/40
                             open:shadow-[0_1px_2px_rgba(15,23,42,.04),0_18px_36px_-22px_var(--color-primary)]"
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-6 py-5
                               font-display text-base font-bold text-[var(--color-roi)]
                               transition-colors duration-300 hover:text-[var(--color-primary)]
                               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]
                               [&::-webkit-details-marker]:hidden"
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]
                                 transition-transform duration-500 ease-out group-open:rotate-45
                                 motion-reduce:transition-none"
                    >
                      <Plus size={16} strokeWidth={2.2} />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600">{item.r}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Données structurées (SEO)                                          */
/* ------------------------------------------------------------------ */

function DonneesStructurees() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      ...FORMATIONS.map((f) => ({
        '@type': 'Course',
        name: f.title,
        description: f.pitch,
        provider: { '@type': 'Organization', name: 'CKM', areaServed: 'CM' },
      })),
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.r },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ------------------------------------------------------------------ */

export default function Page6() {
  return (
    <>
      <DonneesStructurees />
      <PageHeader
        eyebrow="Nos formations"
        titre="Apprenez à le faire"
        accent="vous-même."
        intro="Six modules courts pour internaliser ce que nous faisons au quotidien. Pensés pour des gérants et des équipes qui n’ont pas de temps à perdre en théorie."
      />
      <Modules />
      <Modalites />
      <Sessions />
      <Temoignages />
      <Faq />
      <CtaBand
        titre="Une session vous intéresse ?"
        texte="Dites-nous quel module et votre niveau actuel. Nous vous indiquons les prochaines dates et si le groupe vous correspond."
        libelle="Réserver ma place"
      />
      <Footer />
    </>
  )
}
