import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Section1 from './components/Section1'
import Section3 from './components/Section3'
import { ProgressiveBlurSlider } from './components/Section2'
import { CarouselBasic } from './components/Section4'
import { TimelineDemo } from './components/Section5'
import { InfiniteSliderHoverSpeed } from './components/Section6'
import { GoogleGeminiEffectDemo } from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import Loader from './components/Loader'
import { GlobalCursor } from './components/GlobalCursor'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = 'auto'

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [isLoading])

  return (
    <>
      <GlobalCursor />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={isLoading ? 'invisible' : 'visible'}>
        <div id="home"><Section1 /></div>
        <ProgressiveBlurSlider />
        <div id="about"><Section3 /></div>
        <div id="projects"><CarouselBasic /></div>
        <div id="experience"><TimelineDemo /></div>
        <InfiniteSliderHoverSpeed />
        <GoogleGeminiEffectDemo />
        <div id="contact"><Section8 /></div>
        <Section9 />
      </div>
    </>
  )
}

export default App