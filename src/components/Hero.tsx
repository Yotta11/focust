import { ArrowRight, Play, Star, Instagram, CheckCircle2 } from 'lucide-react'

import { useState, useEffect } from "react";

import image1 from "../assets/hero1.jpg";
import image2 from "../assets/hero2.jpg";
import image3 from "../assets/hero3.jpg";
import image4 from "../assets/hero4.jpg"

const images = [image1, image2, image3, image4];

const AVATARS = [
  { initials: 'MT', color: 'bg-[var(--color-primary)] text-navy-950' },
  { initials: 'JK', color: 'bg-sky-soft/90 text-navy-950' },
  { initials: 'AB', color: 'bg-navy-600 text-white' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="accueil" className=" relative overflow-hidden bg-[linear-gradient(135deg,#E6F9FF_40%,#ffffff_100%)]">
      <div className="  pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88, 163, 180, 0.15),transparent_45%)]" />

      <div className="relative mx-auto grid justify-center  md:grid-cols-2  gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr,0.95fr] lg:gap-8 lg:px-32 lg:pb-28 lg:pt-20 lg:w-full">
        {/* Left column */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-hover)]  px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-hover)]">
            <span className="md:h-1.5 md:w-1.5 rounded-full  bg-[var(--color-hover)]" />
            Agence digitale · Yaoundé
          </span>

          <h1 className="text-black mt-6 font-display text-5xl font-semibold leading-[1.05] text-black sm:text-6xl">
            On rend votre marque{' '}
            <span className="text-[var(--color-primary)]">impossible à ignorer.</span>
          </h1>

          <p className="mt-6 text-balance text-lg leading-relaxed text-black">
            Sites web rapides, campagnes Facebook &amp; TikTok rentables, pages
            réseaux animées. Focust transforme votre visibilité en clients
            réels — du concret, mesuré, livré dans les délais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 md:h-16 rounded-full bg-[var(--color-primary)] px-6 py-3.5 md:text-sm lg:text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
            >

              Démarrer mon projet
              <ArrowRight size={16} />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 md:h-16 rounded-full border border-[var(--color-primary)] px-6 py-3.5 md:text-sm text-base font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-bleu)]"
            >
              <Play size={14} />
              Voir nos réalisations
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((a) => (
                <span
                  key={a.initials}
                  className={`flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full border-1 border-gray-900 text-[11px] font-bold ${a.color}`}
                >
                  {a.initials}
                </span>
              ))}
              <span className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-gray-600 bg-white/10 text-[11px] font-bold text-black">
                +
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm font-semibold text-black">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-yellow-400 text-yellow-400 " />
                ))}
                <span className="ml-1 lg:text-base ">4.9/5</span>
              </div>
              <p className="text-xs text-black">40+ entreprises camerounaises accompagnées</p>
            </div>
          </div>
        </div>

        {/* Right column — browser mockups */}
        <div className=" hidden  md:flex relative  mx-auto  w-full max-w-2xl lg:max-w-none lg:w-full lg:mx-0"> 
           <div className="absolute z-10 rotate-[15deg] h-10 mt-4 -right-4 -top-6 hidden w-40 rotate-3 rounded-xl border border-white/10 bg-[var(--color-bleu)] p-3 text-[10px] font-semibold uppercase tracking-wide text-white shadow-2xl backdrop-blur sm:block lg:flex justify-center items-center">
            Facebook Ads · Kamer Food
          </div>


{/* images */}
          <div className=" hidden  md:flex  rounded-xl h-full w-full overflow-hidden">
            <img
              src={images[current]}
              alt=""
              className="w-full h-full object-cover transition-all duration-1000 opacity-70"
            />
          </div>

          


{/* 
          <div className="relative z-10 mt-10 rounded-2xl border border-white/10 bg-sand shadow-2xl">
            <div className="flex items-center gap-2 rounded-t-2xl border-b border-black/5 bg-white px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate text-xs text-navy-950/50">focustagency.com</span>
            </div>
            <div className="space-y-6 rounded-b-2xl bg-white p-6">
              <div className="flex items-center justify-between text-[11px] font-semibold text-navy-950/60">
                <span className="font-display text-sm text-navy-950">focust</span>
                <div className="hidden items-center gap-3 sm:flex">
                  <span>Services</span>
                  <span>Cas</span>
                  <span>Blog</span>
                  <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-navy-950">Devis</span>
                </div>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold leading-tight text-navy-950">
                  On rend votre marque
                </p>
                <p className="font-display text-2xl font-semibold leading-tight text-[var(--color-primary)]">
                  impossible à ignorer.
                </p>
              </div>
              <div className="h-px w-full bg-navy-950/10" />
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold text-white">
                  Démarrer mon projet
                </span>
                <span className="rounded-full border border-navy-950/15 px-4 py-2 text-xs font-semibold text-navy-950">
                  Réalisations
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-10 rounded-lg bg-navy-950/5" />
                ))}
              </div>
            </div>
          </div> */}

          <div className=" hidden md:flex absolute -left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-xl sm:-left-8">
            <Instagram size={24} className="text-[var(--color-primary)]" />
          </div>

          <div className="  hidden md:flex absolute -bottom-6 right-2 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[var(--color-bleu)] px-4 py-3 shadow-2xl backdrop-blur sm:right-6">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <div className="text-xs">
              <p className="font-semibold text-white">Site livré · 12 jours</p>
              <p className="text-[var(--color-bande)]">boutique-mama-eyenga.cm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
