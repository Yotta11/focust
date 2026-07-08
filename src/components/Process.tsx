const STEPS = [
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

export default function Process() {
  return (
    <section id="processus" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-accent">
            Notre méthode
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            Un déroulé clair, du premier appel à la mise en ligne.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative pl-2">
              <span className="font-display text-5xl font-semibold text-white/10">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/60">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-white/10 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
