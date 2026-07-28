
  

import { useState } from 'react'
import { useInView } from '../lib/useInView'
import PageHeader from '../components/Navbar'
import { SERVICES } from '../lib/content'

type Etat = 'saisie' | 'envoi' | 'envoye' | 'erreur'

const BUDGETS = ['Moins de 300 000 FCFA', '300 000 – 800 000 FCFA', 'Plus de 800 000 FCFA', 'À définir ensemble']

export default function Page5() {
  const { ref, inView } = useInView<HTMLElement>(0.05)
  const [etat, setEtat] = useState<Etat>('saisie')

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEtat('envoi')
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      // Branche ici ton endpoint réel (Formspree, Resend, ton API…).
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      console.log('Demande de devis', data)
      await new Promise((r) => setTimeout(r, 700))
      setEtat('envoye')
    } catch {
      setEtat('erreur')
    }
  }

  const champ =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[15px] text-[var(--color-roi)] outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20'
  const label = 'mb-2 block text-sm font-medium text-[var(--color-roi)]'

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        titre="Écrivez-nous,"
        accent="on répond sous 24 heures."
        intro="Décrivez votre activité et ce que vous cherchez à obtenir. Plus vous êtes précis, plus notre première réponse sera utile — même si elle consiste à vous orienter ailleurs."
      />

      <section ref={ref} data-in={inView} className="mx-auto max-w-7xl px-6 py-16 lg:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* ---- Formulaire ---- */}
          <div className="reveal" style={{ animationDelay: '.1s' }}>
            {etat === 'envoye' ? (
              <div className="rounded-3xl border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/6 p-10">
                <h2 className="font-display text-2xl font-bold text-[var(--color-roi)]">
                  Message reçu.
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  Nous revenons vers vous sous 24 heures ouvrées. Si c’est urgent, WhatsApp reste le
                  plus rapide — le numéro est juste à côté.
                </p>
                <button
                  type="button"
                  onClick={() => setEtat('saisie')}
                  className="mt-6 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={envoyer} noValidate={false} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className={label}>
                      Nom complet
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Marie Tchoua"
                      className={champ}
                    />
                  </div>
                  <div>
                    <label htmlFor="entreprise" className={label}>
                      Entreprise
                    </label>
                    <input
                      id="entreprise"
                      name="entreprise"
                      type="text"
                      autoComplete="organization"
                      placeholder="Boutique Mama Eyenga"
                      className={champ}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={label}>
                      Adresse e-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="marie@exemple.cm"
                      className={champ}
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className={label}>
                      Téléphone ou WhatsApp
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+237 6 00 00 00 00"
                      className={champ}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={label}>
                    Ce qui vous intéresse
                  </label>
                  <select id="service" name="service" required className={champ}>
                    <option value="">Choisir une prestation</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="autre">Autre chose</option>
                  </select>
                </div>

                <fieldset>
                  <legend className={label}>Budget envisagé</legend>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {BUDGETS.map((b) => (
                      <label
                        key={b}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 transition-colors hover:border-[var(--color-primary)]/40 has-[:checked]:border-[var(--color-primary)] has-[:checked]:bg-[var(--color-primary)]/6"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={b}
                          className="accent-[var(--color-primary)]"
                        />
                        {b}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className={label}>
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Ce que vous vendez, à qui, et ce qui bloque aujourd’hui."
                    className={`${champ} resize-y`}
                  />
                </div>

                {etat === 'erreur' && (
                  <p role="alert" className="text-sm text-red-600">
                    L’envoi n’a pas abouti. Réessayez, ou écrivez directement à bonjour@focust.cm.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={etat === 'envoi'}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {etat === 'envoi' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>

          {/* ---- Coordonnées ---- */}
          <aside className="reveal space-y-6" style={{ animationDelay: '.25s' }}>
            <div className="rounded-3xl bg-[var(--color-roi)] p-8 text-white">
              <h2 className="font-display text-xl font-bold">Le plus rapide</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Un message WhatsApp obtient généralement une réponse dans l’heure, pendant les
                horaires de bureau.
              </p>
              <a
                href="https://wa.me/237600000000"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm  text-white transition-transform duration-300 hover:-translate-y-0.5 bg-green-500"
              >
                Ouvrir WhatsApp
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <dl className="space-y-5 rounded-3xl border border-slate-200 p-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Téléphone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+237600000000"
                    className="text-[15px] text-[var(--color-roi)] hover:text-[var(--color-primary)]"
                  >
                    +237 6 86856648
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  E-mail
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:bonjour@focust.cm"
                    className="text-[15px] text-[var(--color-roi)] hover:text-[var(--color-primary)]"
                  >
                    contact@focustagency.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Bureau
                </dt>
                <dd className="mt-1 text-[15px]  text-[var(--color-roi)]">
                  Biyem-assi, Yaoundé
                  <br />
                  Sur rendez-vous uniquement
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Horaires
                </dt>
                <dd className="mt-1 text-[15px]  text-[var(--color-roi)]">
                  Lundi au vendredi, 8h – 18h
                  <br />
                  Samedi sur demande
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  )
}
