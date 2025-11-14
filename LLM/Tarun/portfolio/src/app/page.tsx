'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
