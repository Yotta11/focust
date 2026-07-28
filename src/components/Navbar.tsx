import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

/* Tableau uniformisé : chaque entrée a un `to`.
   Avant, trois entrées sur cinq n'avaient pas de `to` → key={link.to} valait
   undefined et React signalait des clés dupliquées. */
const LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Processus', to: '/processus' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Sans ça, le menu mobile reste ouvert après un changement de page.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-white bg-white backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:w-full lg:px-1">
        {/* Le logo ramène à l'accueil : Link, pas <a href="#accueil"> */}
        <Link to="/" className="flex items-center gap-2" aria-label="Focust — accueil">
          <img src={logo} alt="Focust" className="h-auto w-20 object-cover md:w-24" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex lg:gap-16">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.09] ${
                  isActive
                    ? 'text-[var(--color-primary)]'
                    : 'text-gray-600 hover:text-[var(--color-primary)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-lg font-semibold text-white shadow-[0_0_0_1px_rgba(63,208,242,0.4)] transition-transform hover:scale-[1.09] hover:bg-[var(--color-hover)] lg:inline-flex"
        >
          Demander un devis
          <ArrowRight size={20} />
        </Link>

        <button
          type="button"
          className="p-2 text-black lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[var(--color-roi)] px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              /* <a href> rechargeait toute la page à chaque clic. */
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors ${
                    isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-[var(--color-primary)]"
            >
              Demander un devis
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
