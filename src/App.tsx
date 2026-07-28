import { Link, Navigate, Route, Routes } from 'react-router-dom'

/* Correspondance navbar ↔ fichiers :
   Accueil      → Page1   /
   Services     → Page2   /services
   Réalisations → Page3   /realisations
   Processus    → Page4   /processus
   Contact      → Page5   /contact          */

import Layout from './components/Layout'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'

function PageIntrouvable() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="font-display text-6xl font-bold text-[var(--color-bleu)]">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-[var(--color-roi)]">
        Cette page n’existe pas.
      </h1>
      <p className="mt-4 text-slate-600">
        Le lien est peut-être ancien. Les cinq sections du site sont accessibles depuis le menu.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-4 text-sm font-semibold text-white"
      >
        Retour à l’accueil
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Route « pathless » : ne correspond à aucune URL, sert de coquille.
          Ses enfants s'affichent à l'endroit du <Outlet /> dans Layout.tsx,
          ce qui rend navbar et footer une seule fois pour toutes les pages. */}
     
        <Route index element={<Page1 />} />
        <Route path="services" element={<Page2 />} />
        <Route path="realisations" element={<Page3 />} />
        <Route path="processus" element={<Page4 />} />
        <Route path="contact" element={<Page5 />} />

        {/* Alias vers les URLs canoniques. `replace` évite que le bouton
            Retour reste coincé sur l'alias qui redirige en boucle. */}
        <Route path="page1" element={<Navigate to="/" replace />} />
        <Route path="page2" element={<Navigate to="/services" replace />} />
        <Route path="page3" element={<Navigate to="/realisations" replace />} />
        <Route path="page4" element={<Navigate to="/processus" replace />} />
        <Route path="page5" element={<Navigate to="/contact" replace />} />

        <Route path="*" element={<PageIntrouvable />} />
      
    </Routes>
  )
}
