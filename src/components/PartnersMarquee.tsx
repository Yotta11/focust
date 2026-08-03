// Bande horizontale défilante de logos partenaires.
// Remplacez PARTENAIRES par vos vrais partenaires : passez `logo` (chemin d'image,
// ex. "/logos/orange.svg") pour afficher une image, ou laissez vide pour un
// wordmark texte comme ci-dessous.

type Partenaire = {
  nom: string
  logo?: string
}

const PARTENAIRES: Partenaire[] = [
  { nom: 'Nova Logistique' },
  { nom: 'Aurore Bank' },
  { nom: 'Kessia Retail' },
  { nom: 'Litoral Assurances' },
  { nom: 'Mvele Juridique' },
  { nom: 'Sango Textiles' },
  { nom: 'Bantu Digital' },
]

function Logo({ p }: { p: Partenaire }) {
  if (p.logo) {
    return (
      <img
        src={p.logo}
        alt={p.nom}
        className="h-8 w-auto object-contain grayscale opacity-50 transition-all duration-300 group-hover:opacity-100 sm:h-9"
      />
    )
  }
  return (
    <span className="font-display text-lg font-bold tracking-tight text-slate-400 transition-colors duration-300 group-hover:text-[var(--color-roi)] sm:text-xl">
      {p.nom}
    </span>
  )
}

export default function PartnersMarquee() {
  // Dupliqué pour boucler sans coupure visible (translate de -50%).
  const piste = [...PARTENAIRES, ...PARTENAIRES]

  return (
    <div className="border-y border-slate-100 bg-slate-50/60 py-10">
      <p className="mx-auto mb-6 max-w-7xl px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 lg:px-10">
        Ils nous font confiance
      </p>

      <div
        className="group/marquee relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="partners-track flex w-max items-center gap-16 pr-16">
          {piste.map((p, i) => (
            <div key={`${p.nom}-${i}`} className="group flex shrink-0 items-center">
              <Logo p={p} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-track {
          animation: partners-scroll 32s linear infinite;
        }
        .group\\/marquee:hover .partners-track {
          animation-play-state: paused;
        }
        @keyframes partners-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
