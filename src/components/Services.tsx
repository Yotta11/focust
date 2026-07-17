import { useEffect, useRef, useState } from 'react'
import { Globe, Megaphone, Sparkles, LineChart, type LucideIcon } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  desc: string
}

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: 'Sites web rapides',
    desc: 'Sites vitrines et e-commerce livrés en 7 à 14 jours, optimisés vitesse et mobile, pensés pour convertir vos visiteurs en clients.',
  },
  {
    icon: Megaphone,
    title: 'Campagnes Facebook & TikTok',
    desc: 'Publicités ciblées et rentables, pilotées sur des indicateurs concrets : coût par lead, taux de conversion, retour sur investissement.',
  },
  {
    icon: Sparkles,
    title: 'Pages réseaux animées',
    desc: 'Identité visuelle, contenus et calendrier éditorial pour Instagram, Facebook et TikTok — une présence cohérente qui capte l’attention.',
  },
  {
    icon: LineChart,
    title: 'Suivi & optimisation',
    desc: 'Tableaux de bord clairs et points réguliers pour ajuster la stratégie et garantir des résultats mesurés dans la durée.',
  },
]

/** Déclenche l'animation une fois la section visible à l'écran */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(entry.target)
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

const TITLE = ['Quatre', 'leviers,', 'un', 'seul', 'objectif\u00A0:']

export default function Services() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="services"
      ref={ref}
      data-inview={inView}
      className="svc relative overflow-hidden py-16 md:py-24"
    >
      <style>{`
        @keyframes svcUp   { from { opacity:0; transform:translateY(26px) }        to { opacity:1; transform:translateY(0) } }
        @keyframes svcWord { from { opacity:0; transform:translateY(30px) rotate(2deg) } to { opacity:1; transform:translateY(0) rotate(0) } }
        @keyframes svcShift{ to { background-position:220% center } }
        @keyframes svcFloat{ 0%,100% { transform:translateY(0) } 50% { transform:translateY(-6px) } }

        /* Halos ambiants */
        .svc::before,.svc::after{
          content:""; position:absolute; border-radius:9999px; filter:blur(80px);
          pointer-events:none; opacity:0; transition:opacity 1s ease;
        }
        .svc::before{ top:-6rem; right:-4rem; width:26rem; height:26rem; background:var(--color-bleu); }
        .svc::after { top:10rem; left:-6rem; width:26rem; height:26rem; background:var(--color-primary); }
        .svc[data-inview="true"]::before{ opacity:.14; }
        .svc[data-inview="true"]::after { opacity:.12; }

        /* Éléments cachés tant que la section n'est pas visible */
        .svc [data-anim]{ opacity:0; }
        .svc[data-inview="true"] .svc-eyebrow{ animation:svcUp .6s ease forwards .05s; }
        .svc[data-inview="true"] .svc-sub    { animation:svcUp .7s ease forwards .55s; }
        .svc[data-inview="true"] .svc-word   { animation:svcWord .6s cubic-bezier(.2,.8,.2,1) forwards; }
        .svc[data-inview="true"] .svc-card   { animation:svcUp .7s cubic-bezier(.2,.7,.2,1) forwards; }

        .svc-eyebrow::after{
          content:""; display:block; height:2px; width:0; margin-top:.5rem; border-radius:2px;
          background:linear-gradient(90deg,var(--color-primary),var(--color-bleu));
        }
        .svc[data-inview="true"] .svc-eyebrow::after{ animation:svcLine .8s cubic-bezier(.2,.7,.2,1) forwards .3s; }
        @keyframes svcLine{ to { width:56px } }

        .svc-grad{
          background:linear-gradient(90deg,var(--color-primary),var(--color-bleu),var(--color-hover),var(--color-primary));
          background-size:220% auto; -webkit-background-clip:text; background-clip:text; color:transparent;
          animation:svcShift 6s linear infinite;
        }

        /* Reflet balayant sur les cartes */
        .svc-card::before{
          content:""; position:absolute; inset:0; pointer-events:none;
          background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.20) 48%,transparent 66%);
          transform:translateX(-130%); transition:transform .8s ease;
        }
        .svc-card:hover::before{ transform:translateX(130%); }

        @media (prefers-reduced-motion:reduce){
          .svc [data-anim],.svc-eyebrow,.svc-word,.svc-sub,.svc-card{ animation:none !important; opacity:1 !important; transform:none !important; }
          .svc-card:hover{ transform:none !important; }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            data-anim
            className="svc-eyebrow inline-block text-xs lg:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-hover)]"
          >
            Ce que nous faisons
          </span>

          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-black sm:text-5xl">
            {TITLE.map((w, i) => (
              <span
                key={i}
                data-anim
                className="svc-word mr-[0.28em] inline-block"
                style={{ animationDelay: `${0.18 + i * 0.08}s` }}
              >
                {w}
              </span>
            ))}
            <span
              data-anim
              className="svc-word svc-grad inline-block"
              style={{ animationDelay: `${0.18 + TITLE.length * 0.08}s` }}
            >
              des clients réels.
            </span>
          </h2>

          <p data-anim className="svc-sub mt-4 max-w-xl leading-relaxed text-gray-500">
            Choisissez ce dont vous avez besoin — ou laissez-nous combiner le tout
            pour un impact maximal, mesuré et durable.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-anim
              style={{ animationDelay: `${0.7 + i * 0.13}s` }}
              className="svc-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#001A66] to-[var(--color-primary)] p-6 shadow-lg shadow-[#001A66]/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.05] hover:border-[var(--color-hover)]/60 hover:shadow-2xl hover:shadow-[var(--color-primary)]/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-bleu)]/15 text-[var(--color-bleu)] transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-[var(--color-bleu)] group-hover:text-[var(--color-roi)]">
                <Icon size={20} />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                <span className="relative inline-block pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-bleu)] after:transition-all after:duration-300 group-hover:after:w-full">
                  {title}
                </span>
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}