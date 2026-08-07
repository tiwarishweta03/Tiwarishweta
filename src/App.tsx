import { About } from '@/components/About'
import { Connect } from '@/components/Connect'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Impact } from '@/components/Impact'
import { Nav } from '@/components/Nav'
import { useAnimeHover } from '@/hooks/useAnimeHover'
import { useRef } from 'react'

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  useAnimeHover(rootRef)

  return (
    <div ref={rootRef} className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
