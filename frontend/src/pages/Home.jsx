import React from 'react'
import Hero from '../components/Hero/Hero'
import Brand from '../components/Brand/Brand'
import HighlightProducts from '../components/HighlightProducts/HighlightProducts'

const Home = () => {
  return (
    <div>
        <Hero />
        <Brand />
        <HighlightProducts title="women's clothing" />
        <HighlightProducts title="men's clothing" />
    </div>
  )
}

export default Home