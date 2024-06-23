import React from 'react'
import { Header, Hero, About, Project, Contact, Footer } from './components'

export default function App() {
  return (
    <>
      <Header />
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
      <Footer />
    </>
  )
}

