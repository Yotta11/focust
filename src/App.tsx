import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Cases from './components/Cases'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bande)] ">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
