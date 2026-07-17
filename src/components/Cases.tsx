import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

type Metric = { prefix?: string; value: number; suffix?: string }
type Case = {
  category: string
  client: string
  title: string
  metric: Metric
  metricLabel: string
  featured?: boolean
}

const CASES: Case[] = [
  {
    category: 'E-commerce',
    client: 'Mama Eyenga',
    title: 'Boutique en ligne livrée en 12 jours',
    metric: { prefix: '+', value: 184, suffix: '%' },
    metricLabel: 'commandes en 30 jours',
    featured: true,
  },
  {
    category: 'Réseaux sociaux',
    client: 'Coiffure Yaoundé',
    title: 'De 800 à 12 400 abonnés Instagram',
    metric: { prefix: '+', value: 1450, suffix: '%' },
    metricLabel: 'croissance audience',
  },
  {
    category: 'Facebook Ads',
    client: 'Auto-école Biyem-Assi',
    title: '64 inscriptions en 3 semaines',
    metric: { value: 850, suffix: ' FCFA' },
    metricLabel: 'coût par inscription',
  },
]

/* ---------- Reveal au scroll ---------- */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.unobserve(e.target)
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ---------- Chiffre animé (count-up) ---------- */
function CountUp({
  end,
  start,
  duration = 1600,
  prefix = '',
  suffix = '',
}: {
  end: number
  start: boolean
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVal(end)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setVal(Math.round(end * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, end, duration])
  return (
    <>
      {prefix}
      {val}
      {suffix}
    </>
  )
}

const TITLE = ['Des', 'résultats.', 'Pas', 'des', 'promesses.']

export default function Cases() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="realisations"
      ref={ref}
      data-in={inView}
      className="cases relative w-full overflow-hidden bg-[var(--color-roi)] py-20 md:py-28"
    >
      <style>{`
        /* Texture de fond discrète */
        .cases::before{
          content:""; position:absolute; inset:0; pointer-events:none; opacity:.5;
          background-image:radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px);
          background-size:26px 26px;
          -webkit-mask-image:radial-gradient(60% 60% at 50% 0%, #000, transparent);
                  mask-image:radial-gradient(60% 60% at 50% 0%, #000, transparent);
        }

        /* Révélation du titre par masque (mot par mot) */
        .mask{ display:inline-block; overflow:hidden; vertical-align:bottom; margin-right:.28em; }
        .mask > span{ display:inline-block; transform:translateY(115%); }
        .cases[data-in="true"] .mask > span{ animation:maskUp .75s cubic-bezier(.2,.8,.2,1) forwards; }
        @keyframes maskUp{ to { transform:translateY(0) } }

        /* Fade-up générique (eyebrow, lien) */
        .fade{ opacity:0; }
        .cases[data-in="true"] .fade{ animation:fadeUp .6s ease forwards; }
        @keyframes fadeUp{ from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        /* Entrée des cartes en cascade */
        .card{ opacity:0; }
        .cases[data-in="true"] .card{ animation:cardIn .8s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes cardIn{ from{opacity:0;transform:translateY(34px) scale(.97)} to{opacity:1;transform:none} }

        /* Reflet balayant au survol */
        .card::after{
          content:""; position:absolute; inset:0; pointer-events:none;
          background:linear-gradient(115deg,transparent 32%,rgba(255,255,255,.22) 48%,transparent 64%);
          transform:translateX(-130%); transition:transform .85s ease;
        }
        .card:hover::after{ transform:translateX(130%); }

        @media (prefers-reduced-motion:reduce){
          .mask>span,.fade,.card{ animation:none!important; opacity:1!important; transform:none!important; }
          .card:hover{ transform:none!important; }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span
              className="fade inline-block text-xs lg:text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-bleu)]"
              style={{ animationDelay: '.05s' }}
            >
              Réalisations
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {TITLE.map((w, i) => (
                <span key={i} className="mask" aria-hidden="true">
                  <span style={{ animationDelay: `${0.15 + i * 0.07}s` }}>{w}</span>
                </span>
              ))}
              <span className="sr-only">Des résultats. Pas des promesses.</span>
            </h2>
          </div>

          <a
            href="#realisations"
            className="fade group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-white/80 transition-colors hover:text-white"
            style={{ animationDelay: '.5s' }}
          >
            Voir tous les cas
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Grille de cartes */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((c, i) => {
            const light = c.featured
            return (
              <div
                key={c.client}
                className={`card group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
                  light
                    ? 'border-white/40 bg-gradient-to-br from-[var(--color-bleu)] via-[#3aa0ff] to-[var(--color-primary)] hover:shadow-[var(--color-bleu)]/40'
                    : 'border-white/10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-roi)] hover:border-[var(--color-bleu)]/50 hover:shadow-[var(--color-primary)]/40'
                }`}
                style={{ animationDelay: `${0.35 + i * 0.15}s` }}
              >
                {/* Ligne d'accent supérieure qui se déploie au survol */}
                <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-0 bg-[var(--color-bleu)] transition-all duration-500 group-hover:w-full" />

                {/* Pill + flèche */}
                <div className="flex items-start justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      light ? 'bg-white/30 text-[var(--color-roi)]' : 'bg-white/10 text-white/90'
                    }`}
                  >
                    {c.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      light ? 'text-[var(--color-roi)]/70' : 'text-white/60'
                    }`}
                  />
                </div>

                {/* Client + titre */}
                <div className="mt-10">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      light ? 'text-[var(--color-roi)]/55' : 'text-white/45'
                    }`}
                  >
                    {c.client}
                  </p>
                  <h3
                    className={`mt-2 font-display text-lg font-bold leading-snug ${
                      light ? 'text-[var(--color-roi)]' : 'text-white'
                    }`}
                  >
                    {c.title}
                  </h3>
                </div>

                {/* Divider + métrique */}
                <div
                  className={`mt-6 border-t pt-4 ${light ? 'border-[var(--color-roi)]/15' : 'border-white/15'}`}
                >
                  <div
                    className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
                      light ? 'text-[var(--color-primary)]' : 'text-[var(--color-bleu)]'
                    }`}
                  >
                    <CountUp
                      end={c.metric.value}
                      start={inView}
                      prefix={c.metric.prefix}
                      suffix={c.metric.suffix}
                    />
                  </div>
                  <p
                    className={`mt-1 text-xs ${light ? 'text-[var(--color-roi)]/55' : 'text-white/45'}`}
                  >
                    {c.metricLabel}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}