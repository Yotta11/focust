import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

type Temoignages = {
    quote: string
    name: string
    role: string
    initials: string
}

const Temoignage: Temoignages[] = [
    {
        quote:
            'Focust nous a livré notre boutique en ligne en 12 jours. Depuis, nos commandes ont presque triplé. Tout simplement bluffant.',
        name: 'Mireille Talla',
        role: 'Fondatrice, Mama Eyenga',
        initials: 'MT',
    },
    {
        quote:
            'Une équipe pro, à l’écoute, qui comprend le marché camerounais. Nos pages Instagram et Facebook tournent enfin sans qu’on s’en occupe.',
        name: 'Jean-Kévin Mbeng',
        role: 'Gérant, Auto-école Biyem-Assi',
        initials: 'JK',
    },
    {
        quote:
            'Le ROI sur nos pubs Facebook a explosé. Honnêtement, on aurait dû travailler avec eux beaucoup plus tôt.',
        name: 'Aïcha Bell',
        role: 'Marketing, Coiffure Yaoundé',
        initials: 'AB',
    },
]

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

const TITLE = ['Ils', 'nous', 'ont', 'fait', 'confiance.']

export default function Temoignages() {
    const { ref, inView } = useInView<HTMLElement>()

    return (
        <section
            id="temoignages"
            ref={ref}
            data-in={inView}
            className="tm relative w-full overflow-hidden bg-white py-20 md:py-28"
        >
            <style>{`
        .fade{ opacity:0; }
        .tm[data-in="true"] .fade{ animation:fadeUp .7s cubic-bezier(.2,.8,.2,1) forwards; }
        @keyframes fadeUp{ from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        .mask{ display:inline-block; overflow:hidden; vertical-align:bottom; margin-right:.28em; }
        .mask > span{ display:inline-block; transform:translateY(120%); }
        .tm[data-in="true"] .mask > span{ animation:maskUp .8s cubic-bezier(.19,1,.22,1) forwards; }
        @keyframes maskUp{ to{ transform:translateY(0) } }

        .tcard{ opacity:0; }
        .tm[data-in="true"] .tcard{ animation:cardIn .8s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes cardIn{ from{opacity:0;transform:translateY(30px) scale(.97)} to{opacity:1;transform:none} }

        .star{ opacity:0; transform:scale(.3) rotate(-30deg); }
        .tm[data-in="true"] .star{ animation:starPop .5s cubic-bezier(.34,1.6,.5,1) forwards; }
        @keyframes starPop{ to{ opacity:1; transform:scale(1) rotate(0) } }

        @media (prefers-reduced-motion:reduce){
          .fade,.mask>span,.tcard,.star{ animation:none!important; opacity:1!important; transform:none!important; }
          .tcard:hover{ transform:none!important; }
        }
      `}</style>

            <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[var(--color-bleu)]/8 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                {/* En-tête centré */}
                <div className="mx-auto max-w-3xl text-center">
                    <span
                        className="fade inline-block text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-hover)] lg:text-sm"
                        style={{ animationDelay: '.05s' }}
                    >
                        Témoignages
                    </span>
                    <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--color-roi)] sm:text-5xl">
                        {TITLE.map((w, i) => (
                            <span key={i} className="mask" aria-hidden="true">
                                <span style={{ animationDelay: `${0.15 + i * 0.06}s` }}>{w}</span>
                            </span>
                        ))}
                        <span className="sr-only">Ils nous ont fait confiance.</span>
                    </h2>
                </div>

                {/* Cartes */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Temoignage.map((t, i) => (
                        <figure
                            key={t.name}
                            className="tcard group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[var(--color-primary)]/40 hover:shadow-xl hover:shadow-[var(--color-primary)]/10"
                            style={{ animationDelay: `${0.35 + i * 0.15}s` }}
                        >
                            {/* Guillemet décoratif */}
                            <Quote
                                className="absolute right-6 top-6 text-[var(--color-primary)]/10 transition-colors duration-300 group-hover:text-[var(--color-primary)]/20"
                                size={40}
                                aria-hidden="true"
                            />

                            {/* Étoiles */}
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <Star
                                        key={s}
                                        size={16}
                                        className="star fill-amber-400 text-amber-400"
                                        style={{ animationDelay: `${0.5 + i * 0.15 + s * 0.08}s` }}
                                    />
                                ))}
                            </div>

                            {/* Citation */}
                            <blockquote className="relative mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">
                                “{t.quote}”
                            </blockquote>

                            {/* Auteur */}
                            <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-bleu)] text-xs font-bold text-white shadow-md shadow-[var(--color-primary)]/25 transition-transform duration-300 group-hover:scale-110">
                                    {t.initials}
                                </span>
                                <span className="min-w-0">
                                    <span className="block truncate font-display text-sm font-bold text-[var(--color-roi)]">
                                        {t.name}
                                    </span>
                                    <span className="block truncate text-xs text-slate-500">{t.role}</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}