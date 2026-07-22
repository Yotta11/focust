import { Instagram, Facebook } from 'lucide-react'
import logo  from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="border-t  bg-[linear-gradient(135deg,#001A66_40%,#ffffff_100%)] py-4">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-gray-300 sm:flex-row lg:px-10">
        <a href="#accueil" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          <img src={logo} alt="" className='w-16 md:w-20 h-auto object-cover' />         
         
        </a>

        <p>© {new Date().getFullYear()} Focust Agency — Yaoundé, Cameroun. Tous droits réservés.</p>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="transition-colors text-[var(--color-primary)]  hover:text-[var(--color-roi)] ">
            <Instagram size={20} />
          </a>

          <a href="#" aria-label="Facebook" className="transition-colors text-[var(--color-primary)]  hover:text-[var(--color-roi)] ">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
