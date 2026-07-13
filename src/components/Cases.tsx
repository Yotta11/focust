import { ArrowUpRight } from 'lucide-react'

const CASES = [
  {
    tag: 'E-commerce · Mode',
    name: 'Boutique Mama Eyenga',
    result: '+184% de ventes en ligne en 3 mois',
    url: 'boutique-mama-eyenga.cm',
  },
  {
    tag: 'Facebook Ads · Restauration',
    name: 'Kamer Food',
    result: 'Coût par commande divisé par 2,4',
    url: 'kamerfood.cm',
  },
  {
    tag: 'TikTok · Beauté',
    name: 'Nkolo Cosmetics',
    result: '38 000 vues moyennes par vidéo',
    url: 'nkolocosmetics.cm',
  },
]
export default function Cases() {

  return (
    <section id="realisations" className="border-y border-gray-300  w-full h-full  py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs lg:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-hover)]">
              Réalisations
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-black sm:text-5xl">
              Des résultats qu’on peut vérifier.
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-hover)] hover:text-[var(--color-primary) hover:scale-[1.09]"
          >
            Discuter de mon projet
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <div
              key={c.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-roi)]"
            >

              <div className="flex items-center gap-2 border-b border-white/5 bg-navy-900 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 truncate text-[11px] text-gray-300">{c.url}</span>
              </div>
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-bleu)]">
                  {c.tag}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{c.name}</h3>
                <p className="mt-3 text-sm text-sand/60">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
