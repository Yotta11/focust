import { ArrowRight, Play, Star, Instagram, CheckCircle2 } from 'lucide-react'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import image1 from "../assets/hero1.svg";
import image2 from "../assets/hero2.svg";
import image3 from "../assets/hero3.svg";
import image4 from "../assets/hero4.svg"

const images = [image1, image2, image3, image4];

const AVATARS = [
  { initials: 'MT', color: 'bg-[var(--color-primary)] text-navy-950' },
  { initials: 'JK', color: 'bg-sky-soft/90 text-navy-950' },
  { initials: 'AB', color: 'bg-navy-600 text-white' },
]
const words = [
  "On",
  "rend",
  "votre",
  "marque",
  "impossible",
  "à",
  "ignorer."
];
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

      <div className="relative mx-auto flex flex-row justify-center  gap-16 px-6 pb-20 pt-16  lg:gap-4 lg:px-28 lg:pb-28 lg:pt-20 lg:w-full">
        {/* Left column */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-hover)]  px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-hover)]">
            <span className="md:h-1.5 md:w-1.5 rounded-full  bg-[var(--color-hover)]" />
            Agence digitale · Yaoundé
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold leading-tight flex flex-wrap gap-x-3">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: [0, -8, 0],
            opacity: 1,
            color: [
              "#111827",       // noir
              "#2563EB",       // bleu
              "#001A66",       // noir
            ],
          }}
          transition={{
            delay: index * 0.3,
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: words.length * 0.3,
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
          <p className="mt-6 text-balance text-lg leading-relaxed text-black">
            Sites web rapides, campagnes Facebook &amp; TikTok rentables, pages
            réseaux animées. Focust transforme votre visibilité en clients
            réels — du concret, mesuré, livré dans les délais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 md:h-14 rounded-full bg-[var(--color-primary)] px-6 py-3.5 md:text-sm lg:text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
            >

              Démarrer mon projet
              <ArrowRight size={16} />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 md:h-14 rounded-full border border-[var(--color-primary)] px-6 py-3.5 md:text-sm text-base font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-bleu)]"
            >
              <Play size={16} />
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
          <div className="hidden md:flex md:flex-1 w-full h-full md:items-center lg:h-[70vh] overflow-hidden">
                <img
                     src={images[current]}
                         alt=""
                   className="w-full h-full object-cover transition-all duration-1000"
                   />
           </div>
          


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
