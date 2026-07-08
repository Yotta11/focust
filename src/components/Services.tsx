import { Globe, Megaphone, Sparkles, LineChart } from 'lucide-react'

const SERVICES = [
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

export default function Services() {
  return (
    <section id="services" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-accent">
            Ce que nous faisons
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            Quatre leviers, un seul objectif&nbsp;: des clients réels.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-navy-900/60 p-6 transition-colors hover:border-sky-accent/40 hover:bg-navy-900"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-accent/15 text-sky-accent transition-colors group-hover:bg-sky-accent group-hover:text-navy-950">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
