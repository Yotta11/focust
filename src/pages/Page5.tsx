import { useState } from 'react'
import { useInView } from '../lib/useInView'
import PageHeader from '../components/Navbar'
import { SERVICES } from '../lib/content'

type Etat = 'saisie' | 'envoi' | 'envoye' | 'erreur'

const BUDGETS = [
  { label: 'Moins de 300 000 FCFA', hint: 'Petit projet, vitrine' },
  { label: '300 000 – 800 000 FCFA', hint: 'Le plus courant' },
  { label: 'Plus de 800 000 FCFA', hint: 'Projet ambitieux' },
  { label: 'À définir ensemble', hint: 'On en discute' },
]

export default function Page5() {
  const { ref, inView } = useInView<HTMLElement>(0.05)
  const [etat, setEtat] = useState<Etat>('saisie')
  const [budgetChoisi, setBudgetChoisi] = useState<string | null>(null)
  const [messageLen, setMessageLen] = useState(0)

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEtat('envoi')
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      console.log('Demande de devis', data)
      await new Promise((r) => setTimeout(r, 700))
      setEtat('envoye')
    } catch {
      setEtat('erreur')
    }
  }

  const champBase =
    'w-full rounded-xl border border-slate-200 bg-white py-3.5 text-[15px] text-[var(--color-roi)] outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20'
  const champ = `${champBase} px-4`
  const champIcone = `${champBase} pl-11 pr-4`
  const label = 'mb-2 block text-sm font-medium text-[var(--color-roi)]'

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        titre="Écrivez-nous,"
        accent="on répond sous 24 heures."
        intro="Décrivez votre activité et ce que vous cherchez à obtenir. Plus vous êtes précis, plus notre première réponse sera utile — même si elle consiste à vous orienter ailleurs."
      />

      <section ref={ref} data-in={inView} className="mx-auto max-w-7xl px-6 py-16 lg:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          {/* ---- Formulaire ---- */}
          <div className="reveal overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,.04),0_16px_40px_-16px_rgba(15,23,42,.12)]" style={{ animationDelay: '.1s' }}>
            {/* Ruban d'accent en haut de carte — signature visuelle */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/70 to-[var(--color-primary)]/30" />

            <div className="p-8 sm:p-10">
              {etat === 'envoye' ? (
                <div className="flex flex-col items-start py-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 text-[var(--color-primary)]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-[var(--color-roi)]">
                    Message reçu.
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
                    Nous revenons vers vous sous 24 heures ouvrées. Si c&rsquo;est urgent, WhatsApp reste
                    le plus rapide — le numéro est juste à côté.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setEtat('saisie')
                        setBudgetChoisi(null)
                        setMessageLen(0)
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[var(--color-roi)] transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
                    >
                      Envoyer une autre demande
                    </button>
                    <a
                      href="https://wa.me/237600000000"
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                    >
                      Écrire sur WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={envoyer} className="space-y-6" noValidate>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                      Demande de devis
                    </span>
                    <p className="mt-3 text-sm text-slate-500">
                      Les champs marqués d&rsquo;un <span className="text-[var(--color-primary)]">*</span> sont nécessaires pour vous répondre.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nom" className={label}>
                        Nom complet <span className="text-[var(--color-primary)]">*</span>
                      </label>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0" />
                        </svg>
                        <input id="nom" name="nom" type="text" required autoComplete="name" placeholder="Marie Tchoua" className={champIcone} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="entreprise" className={label}>
                        Entreprise
                      </label>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21V6.75A1.5 1.5 0 0 1 5.25 5.25h6a1.5 1.5 0 0 1 1.5 1.5V21m-9 0h13.5M12.75 21V10.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V21M7.5 9h1.5M7.5 12h1.5M7.5 15h1.5" />
                        </svg>
                        <input id="entreprise" name="entreprise" type="text" autoComplete="organization" placeholder="Boutique Mama Eyenga" className={champIcone} />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={label}>
                        Adresse e-mail <span className="text-[var(--color-primary)]">*</span>
                      </label>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Zm0 0 9.75 6.75 9.75-6.75" />
                        </svg>
                        <input id="email" name="email" type="email" required autoComplete="email" placeholder="marie@exemple.cm" className={champIcone} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="telephone" className={label}>
                        Téléphone ou WhatsApp
                      </label>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5c0-.414.336-.75.75-.75h3a.75.75 0 0 1 .75.65l.9 6.3a.75.75 0 0 1-.213.665l-1.87 1.87a12.75 12.75 0 0 0 6.4 6.4l1.87-1.87a.75.75 0 0 1 .665-.213l6.3.9a.75.75 0 0 1 .65.75v3a.75.75 0 0 1-.75.75h-.75C9.918 21.75 2.25 14.082 2.25 5.25V4.5Z" />
                        </svg>
                        <input id="telephone" name="telephone" type="tel" autoComplete="tel" placeholder="+237 6 00 00 00 00" className={champIcone} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={label}>
                      Ce qui vous intéresse <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={`${champ} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    >
                      <option value="" disabled>
                        Choisir une prestation
                      </option>
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
                      {BUDGETS.map((b) => {
                        const actif = budgetChoisi === b.label
                        return (
                          <label
                            key={b.label}
                            className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                              actif
                                ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/6'
                                : 'border-slate-200 hover:border-[var(--color-primary)]/40'
                            }`}
                          >
                            <input
                              type="radio"
                              name="budget"
                              value={b.label}
                              checked={actif}
                              onChange={() => setBudgetChoisi(b.label)}
                              className="sr-only"
                            />
                            <span
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                                actif ? 'border-[var(--color-primary)] bg-[var(--color-primary)]' : 'border-slate-300'
                              }`}
                            >
                              {actif && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                            </span>
                            <span>
                              <span className="block font-medium text-[var(--color-roi)]">{b.label}</span>
                              <span className="block text-xs text-slate-500">{b.hint}</span>
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <div className="flex items-baseline justify-between">
                      <label htmlFor="message" className={label}>
                        Votre projet <span className="text-[var(--color-primary)]">*</span>
                      </label>
                      <span className="mb-2 text-xs text-slate-400">{messageLen}/600</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={600}
                      onChange={(e) => setMessageLen(e.target.value.length)}
                      placeholder="Ce que vous vendez, à qui, et ce qui bloque aujourd&rsquo;hui."
                      className={`${champ} resize-y`}
                    />
                  </div>

                  {etat === 'erreur' && (
                    <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.007M10.29 3.86 1.82 18a1.5 1.5 0 0 0 1.3 2.25h17.76a1.5 1.5 0 0 0 1.3-2.25L13.71 3.86a1.5 1.5 0 0 0-2.42 0Z" />
                      </svg>
                      L&rsquo;envoi n&rsquo;a pas abouti. Réessayez, ou écrivez directement à bonjour@focust.cm.
                    </p>
                  )}

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={etat === 'envoi'}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {etat === 'envoi' && (
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
                        </svg>
                      )}
                      {etat === 'envoi' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                      {etat !== 'envoi' && <span aria-hidden="true">→</span>}
                    </button>
                    <p className="text-xs text-slate-400">Réponse sous 24h ouvrées, sans engagement.</p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* ---- Coordonnées ---- */}
          <aside className="reveal space-y-5 lg:sticky lg:top-24 lg:self-start" style={{ animationDelay: '.25s' }}>
            <div className="rounded-3xl bg-[var(--color-roi)] p-8 text-white">
              <h2 className="font-display text-xl font-bold">Le plus rapide</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Un message WhatsApp obtient généralement une réponse dans l&rsquo;heure, pendant les
                horaires de bureau.
              </p>
              <a
                href="https://wa.me/237600000000"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Ouvrir WhatsApp
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="space-y-1 rounded-3xl border border-slate-200 p-8">
              {[
                {
                  titre: 'Téléphone',
                  valeur: '+237 6 86 85 66 48',
                  href: 'tel:+237686856648',
                  icone: 'M2.25 4.5c0-.414.336-.75.75-.75h3a.75.75 0 0 1 .75.65l.9 6.3a.75.75 0 0 1-.213.665l-1.87 1.87a12.75 12.75 0 0 0 6.4 6.4l1.87-1.87a.75.75 0 0 1 .665-.213l6.3.9a.75.75 0 0 1 .65.75v3a.75.75 0 0 1-.75.75h-.75C9.918 21.75 2.25 14.082 2.25 5.25V4.5Z',
                },
                {
                  titre: 'E-mail',
                  valeur: 'contact@focustagency.com',
                  href: 'mailto:contact@focustagency.com',
                  icone: 'M2.25 6.75h19.5v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Zm0 0 9.75 6.75 9.75-6.75',
                },
              ].map((item) => (
                <a
                  key={item.titre}
                  href={item.href}
                  className="group -mx-2 flex items-center gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-[var(--color-primary)]/6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-[18px] w-[18px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icone} />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item.titre}
                    </span>
                    <span className="block text-[15px] text-[var(--color-roi)] transition-colors group-hover:text-[var(--color-primary)]">
                      {item.valeur}
                    </span>
                  </span>
                </a>
              ))}

              <div className="my-2 h-px bg-slate-100" />

              <div className="flex items-start gap-4 px-2 py-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-[18px] w-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Bureau</span>
                  <span className="block text-[15px] text-[var(--color-roi)]">
                    Biyem-Assi, Yaoundé
                    <br />
                    Sur rendez-vous uniquement
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4 px-2 py-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-[18px] w-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Horaires</span>
                  <span className="block text-[15px] text-[var(--color-roi)]">
                    Lundi au vendredi, 8h – 18h
                    <br />
                    Samedi sur demande
                  </span>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
