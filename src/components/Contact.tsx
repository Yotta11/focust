import { useState, FormEvent } from 'react'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

interface FormState {
  name: string
  company: string
  email: string
  message: string
}

const INITIAL_STATE: FormState = { name: '', company: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [sent, setSent] = useState(false)

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Branchez ici votre endpoint (API, email, CRM…)
    setSent(true)
    setForm(INITIAL_STATE)
  }

  return (
    <section id="contact" className="bg-navy-900/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:gap-16 lg:px-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-accent">
            Contact
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            Parlons de votre prochain projet.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sand/60">
            Réponse sous 24h ouvrées. Décrivez-nous votre activité, on revient
            vers vous avec une première recommandation concrète.
          </p>

          <div className="mt-8 space-y-4 text-sm text-sand/70">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-sky-accent" />
              contact@focustagency.com
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-sky-accent" />
              +237 6XX XX XX XX
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-sky-accent" />
              Yaoundé, Cameroun
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-navy-950 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-sand/70">Nom</span>
              <input
                required
                value={form.name}
                onChange={handleChange('name')}
                type="text"
                placeholder="Votre nom"
                className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-white placeholder:text-sand/30 focus:border-sky-accent focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="text-sand/70">Entreprise</span>
              <input
                value={form.company}
                onChange={handleChange('company')}
                type="text"
                placeholder="Nom de l’entreprise"
                className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-white placeholder:text-sand/30 focus:border-sky-accent focus:outline-none"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm">
            <span className="text-sand/70">Email</span>
            <input
              required
              value={form.email}
              onChange={handleChange('email')}
              type="email"
              placeholder="vous@entreprise.com"
              className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-white placeholder:text-sand/30 focus:border-sky-accent focus:outline-none"
            />
          </label>

          <label className="mt-5 block text-sm">
            <span className="text-sand/70">Votre projet</span>
            <textarea
              required
              value={form.message}
              onChange={handleChange('message')}
              rows={4}
              placeholder="Parlez-nous de votre activité et de vos objectifs…"
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-white placeholder:text-sand/30 focus:border-sky-accent focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-accent px-6 py-3.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-[1.01] sm:w-auto"
          >
            Envoyer la demande
            <ArrowRight size={16} />
          </button>

          {sent && (
            <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 size={16} />
              Message envoyé — nous revenons vers vous rapidement.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
