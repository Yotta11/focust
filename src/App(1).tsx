import { Link, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

/* Correspondance navbar ↔ fichiers :
   Accueil      → Page1   /
   Services     → Page2   /services
   Réalisations → Page3   /realisations
   Processus    → Page4   /processus
   Contact      → Page5   /contact          */

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
      <Route element={<Layout />}>
        <Route index element={<Page1 />} />
        <Route path="services" element={<Page2 />} />
        <Route path="realisations" element={<Page3 />} />
        <Route path="processus" element={<Page4 />} />
        <Route path="contact" element={<Page5 />} />
        <Route path="*" element={<PageIntrouvable />} />
      </Route>
    </Routes>
  )
}
