import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-sand/50 sm:flex-row lg:px-10">
        <a href="#accueil" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="inline-block h-2 w-2 rounded-full bg-sky-accent" />
          focust
        </a>

        <p>© {new Date().getFullYear()} Focust Agency — Yaoundé, Cameroun. Tous droits réservés.</p>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-sky-accent">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-sky-accent">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
