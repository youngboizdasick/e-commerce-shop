import { React, lazy, Suspense } from 'react'
const Hero = lazy(() => import('../components/Hero/Hero'))
const Brand = lazy(() => import('../components/Brand/Brand'))
const HighlightProducts = lazy(() => import('../components/HighlightProducts/HighlightProducts'))
const BrowseStyle = lazy(() => import('../components/BrowseStyle/BrowseStyle'))
const HighlightComments = lazy(() => import('../components/HighlightComments/HighlightComments'))
const Footer = lazy(() => import('../components/Footer/Footer'))

const Home = () => {
  return (
    <div>
      <Suspense>
        <Hero />
        <Brand />
        <HighlightProducts title="women's clothing" />
        <HighlightProducts title="men's clothing" />
        <BrowseStyle />
        <HighlightComments />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home