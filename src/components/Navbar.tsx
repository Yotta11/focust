import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Processus', href: '#processus' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky  top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-white backdrop-blur border-white'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:w-full  px-6 py-4 lg:px-0">
        <a href="#accueil" className="flex items-center gap-2 font-display text-3xl font-bold tracking-tight text-[#3FD0F2]">
          {/* <span className="inline-block h-2 w-2 rounded-full bg-sky-accent font-bold text-[#3FD0F2]" /> */}
          focust
        </a>

        <div className="hidden items-center gap-8 lg:gap-16 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-gray-600 hover:-translate-y-1  hover:scale-[1.09] font-semibold text-base  transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className=" hidden items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-lg  font-semibold text-white shadow-[0_0_0_1px_rgba(63,208,242,0.4)] transition-transform hover:scale-[1.09] lg:inline-flex hover:bg-[var(--color-hover)]"
        >
          Demander un devis
          <ArrowRight size={20} />
        </a>

        <button
          className="p-2 text-black lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-sand/80 hover:text-[var(--color-primary)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-[var(--color-roi)]"
            >
              Demander un devis
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
