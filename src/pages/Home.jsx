import React from 'react'
import Hero from '../components/sections/Hero'
import Specials from '../components/sections/Specials'
import Testimonials from '../components/sections/Testimonials'
import Chicago from '../components/sections/Chicago'

const Home = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <Chicago />
    </main>
  )
}

export default Home;