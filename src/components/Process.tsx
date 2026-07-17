import { useEffect, useRef, useState } from 'react'

type Step = { n: string; title: string; desc: string }

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Cadrage',
    desc: 'Un échange de 30 minutes pour comprendre votre activité, votre marché et vos objectifs de croissance.',
  },
  {
    n: '02',
    title: 'Conception',
    desc: 'Maquettes, ton éditorial et plan de campagne validés avec vous avant tout développement.',
  },
  {
    n: '03',
    title: 'Réalisation',
    desc: 'Développement du site et lancement des premières campagnes, avec points d’avancement réguliers.',
  },
  {
    n: '04',
    title: 'Optimisation',
    desc: 'Suivi des performances et ajustements continus pour améliorer le retour sur investissement.',
  },
]

function useInView<T extends HTMLElement>(threshold = 0.25) {
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

const TITLE = ['Un', 'déroulé', 'clair,', 'du', 'premier', 'appel', 'à', 'la', 'mise', 'en', 'ligne.']

export default function Process() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="processus"
      ref={ref}
      data-in={inView}
      className="proc relative w-full overflow-hidden bg-white py-20 md:py-28"
    >
      <style>{`
        /* Eyebrow */
        .fade{ opacity:0; }
        .proc[data-in="true"] .fade{ animation:fadeUp .7s cubic-bezier(.2,.8,.2,1) forwards; }
        @keyframes fadeUp{ from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        /* Titre : révélation par masque, mot par mot */
        .mask{ display:inline-block; overflow:hidden; vertical-align:bottom; margin-right:.26em; }
        .mask > span{ display:inline-block; transform:translateY(120%); }
        .proc[data-in="true"] .mask > span{ animation:maskUp .8s cubic-bezier(.19,1,.22,1) forwards; }
        @keyframes maskUp{ to{ transform:translateY(0) } }

        /* Étapes : entrée + texte interne décalé */
        .step{ opacity:0; }
        .proc[data-in="true"] .step{ animation:stepIn .8s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes stepIn{ from{opacity:0;transform:translateY(34px)} to{opacity:1;transform:none} }

        .s-title,.s-desc{ opacity:0; }
        .proc[data-in="true"] .s-title{ animation:tUp .7s cubic-bezier(.2,.8,.2,1) forwards; }
        .proc[data-in="true"] .s-desc{ animation:tUp .7s cubic-bezier(.2,.8,.2,1) forwards; }
        @keyframes tUp{ from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }

        /* Nœud : pop élastique + halo pulsant au survol */
        .dot{ transform:scale(.35); opacity:0; }
        .proc[data-in="true"] .dot{ animation:dotPop .6s cubic-bezier(.34,1.7,.5,1) forwards; }
        @keyframes dotPop{ to{ transform:scale(1); opacity:1 } }

        .dot::before{
          content:""; position:absolute; inset:0; border-radius:9999px;
          box-shadow:0 0 0 0 rgba(0,198,255,.45); opacity:0;
        }
        .group:hover .dot::before{ animation:pulse 1.4s ease-out infinite; opacity:1; }
        @keyframes pulse{ 0%{ box-shadow:0 0 0 0 rgba(0,198,255,.45) } 100%{ box-shadow:0 0 0 16px rgba(0,198,255,0) } }

        /* Ligne de progression qui se trace */
        .line-fill{ transform:scaleX(0); transform-origin:left; }
        .proc[data-in="true"] .line-fill{ animation:draw 1.3s ease forwards .35s; }
        @keyframes draw{ to{ transform:scaleX(1) } }

        @media (prefers-reduced-motion:reduce){
          .fade,.mask>span,.step,.s-title,.s-desc,.dot,.line-fill{ animation:none!important; opacity:1!important; transform:none!important; }
          .group:hover .dot::before{ animation:none!important; }
        }
      `}</style>

      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[var(--color-bleu)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="fade inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-hover)] lg:text-sm"
            style={{ animationDelay: '.05s' }}
          >
            Notre méthode
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-[var(--color-roi)] sm:text-5xl">
            {TITLE.map((w, i) => (
              <span key={i} className="mask" aria-hidden="true">
                <span style={{ animationDelay: `${0.15 + i * 0.05}s` }}>{w}</span>
              </span>
            ))}
            <span className="sr-only">Un déroulé clair, du premier appel à la mise en ligne.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          <div
            className="absolute top-7 hidden h-0.5 rounded-full bg-slate-200 lg:block"
            style={{ left: '12.5%', right: '12.5%' }}
          />
          <div
            className="line-fill absolute top-7 hidden h-0.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-bleu)] lg:block"
            style={{ left: '12.5%', right: '12.5%' }}
          />

          <ol className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="step group relative flex cursor-default flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${0.4 + i * 0.14}s` }}
              >
                <span
                  className="dot relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-bleu)] font-display text-base font-bold text-white shadow-lg shadow-[var(--color-primary)]/30 ring-8 ring-white transition-all duration-300 group-hover:scale-[1.35] group-hover:shadow-xl group-hover:shadow-[var(--color-bleu)]/60"
                  style={{ animationDelay: `${0.5 + i * 0.14}s` }}
                >
                  {s.n}
                </span>

                <h3
                  className="s-title mt-7 font-display text-lg font-bold text-[var(--color-roi)] transition-all duration-300 group-hover:scale-105 group-hover:text-[var(--color-primary)]"
                  style={{ animationDelay: `${0.55 + i * 0.14}s` }}
                >
                  {s.title}
                </h3>
                <p
                  className="s-desc mt-2 max-w-xs text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-700"
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