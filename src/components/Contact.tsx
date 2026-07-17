import { useState, useEffect, useRef, FormEvent } from 'react'
import {
  MessageCircle,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

interface FormState {
  name: string
  whatsapp: string
  email: string
  service: string
  message: string
}

const INITIAL_STATE: FormState = {
  name: '',
  whatsapp: '',
  email: '',
  service: 'Création de sites web',
  message: '',
}

const SERVICES = [
  'Création de sites web',
  'Refonte de site existant',
  'SEO / Référencement',
  'Identité visuelle & logo',
  'Publicité en ligne (Ads)',
  'Community management',
  'Autre',
]

/* -------------------------------------------------------------------------- */
/*  Hook : révélation au scroll (staggered fade + slide-up), sans dépendance   */
/* -------------------------------------------------------------------------- */
function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`

/* -------------------------------------------------------------------------- */
/*  Cartes de contact (colonne de gauche)                                      */
/* -------------------------------------------------------------------------- */
const CONTACTS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp · le plus rapide',
    value: '+237 6 86 85 66 48',
    href: 'https://wa.me/237686856648',
    accent: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@focustagency.com',
    href: 'mailto:contact@focustagency.com',
    accent: 'text-sky-accent',
    bg: 'bg-sky-accent/10',
  },
  {
    icon: MapPin,
    label: 'Bureau',
    value: 'Biyem-Assi, Yaoundé · Cameroun',
    href: undefined,
    accent: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
] as const

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [sent, setSent] = useState(false)

  const left = useInView<HTMLDivElement>()
  const right = useInView<HTMLFormElement>()

  const handleChange =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Branchez ici votre endpoint (API, email, CRM…)
    setSent(true)
    setForm(INITIAL_STATE)
  }

  const fieldClasses =
    'peer w-full border-0 border-b border-slate-200 bg-transparent px-0 py-2.5 text-navy-900 ' +
    'placeholder:text-slate-400 focus:border-sky-accent focus:outline-none transition-colors duration-300'

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-24">
      {/* halos décoratifs animés en arrière-plan */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:gap-16 lg:px-10">
        {/* ------------------------------ Colonne gauche ------------------------------ */}
        <div ref={left.ref}>
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] text-sky-accent ${reveal(
              left.inView
            )}`}
          >
            Contact
          </span>

          <h2
            className={`mt-4 text-balance font-display text-4xl font-semibold text-navy-900 sm:text-5xl ${reveal(
              left.inView
            )}`}
            style={{ transitionDelay: '80ms' }}
          >
            Parlons de votre projet.
          </h2>

          <p
            className={`mt-4 max-w-md text-sm leading-relaxed text-slate-500 ${reveal(
              left.inView
            )}`}
            style={{ transitionDelay: '160ms' }}
          >
            Décrivez-nous ce dont vous avez besoin. On revient vers vous sous
            24&nbsp;h avec une proposition claire.
          </p>

          <div className="mt-8 space-y-4">
            {CONTACTS.map((c, i) => {
              const Icon = c.icon
              const Wrapper = c.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className={`group flex items-center gap-4 rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-accent/40 hover:shadow-md ${reveal(
                    left.inView
                  )}`}
                  style={{ transitionDelay: `${240 + i * 100}ms` }}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${c.bg} ${c.accent} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">
                      {c.label}
                    </span>
                    <span className="block truncate font-semibold text-navy-900">
                      {c.value}
                    </span>
                  </span>
                </Wrapper>
              )
            })}
          </div>
        </div>

        {/* ------------------------------ Formulaire ------------------------------ */}
        <form
          ref={right.ref}
          onSubmit={handleSubmit}
          className={`rounded-2xl border border-slate-200/70 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 ${reveal(
            right.inView
          )}`}
          style={{ transitionDelay: '120ms' }}
        >
          <h3 className="font-display text-2xl font-semibold text-navy-900">
            Demander un devis gratuit
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Réponse sous 24&nbsp;h, devis sans engagement.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium text-navy-900">Nom complet</span>
              <input
                required
                value={form.name}
                onChange={handleChange('name')}
                type="text"
                placeholder="Ex. Mireille Talla"
                className={`mt-2 ${fieldClasses}`}
              />
            </label>

            <label className="block text-sm">
              <span className="font-medium text-navy-900">WhatsApp</span>
              <input
                value={form.whatsapp}
                onChange={handleChange('whatsapp')}
                type="tel"
                placeholder="+237 6XX XX XX XX"
                className={`mt-2 ${fieldClasses}`}
              />
            </label>
          </div>

          <label className="mt-6 block text-sm">
            <span className="font-medium text-navy-900">Email</span>
            <input
              required
              value={form.email}
              onChange={handleChange('email')}
              type="email"
              placeholder="vous@entreprise.cm"
              className={`mt-2 ${fieldClasses}`}
            />
          </label>

          <label className="mt-6 block text-sm">
            <span className="font-medium text-navy-900">Service</span>
            <div className="relative">
              <select
                value={form.service}
                onChange={handleChange('service')}
                className={`mt-2 cursor-pointer appearance-none pr-8 ${fieldClasses}`}
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute bottom-3 right-0 text-slate-400"
              />
            </div>
          </label>

          <label className="mt-6 block text-sm">
            <span className="font-medium text-navy-900">
              Votre projet en quelques mots
            </span>
            <textarea
              required
              value={form.message}
              onChange={handleChange('message')}
              rows={4}
              placeholder="Décrivez votre activité, vos objectifs, votre délai…"
              className={`mt-2 resize-none ${fieldClasses}`}
            />
          </label>

          <button
            type="submit"
            className="group  bg-[var(--color-primary)] mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full  px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-accent/40 active:translate-y-0"
          >
            Envoyer ma demande
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {sent ? (
            <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-emerald-500 duration-500 animate-in fade-in slide-in-from-bottom-2">
              <CheckCircle2 size={16} />
              Message envoyé — nous revenons vers vous rapidement.
            </p>
          ) : (
            <p className="mt-4 text-center text-xs text-slate-400">
              En cliquant, vous acceptez d’être recontacté par WhatsApp ou email.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}