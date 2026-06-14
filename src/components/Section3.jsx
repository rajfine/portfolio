import React, { useRef } from 'react'
import { useInView } from 'motion/react'
import { TextEffect } from '@/components/motion-primitives/text-effect';

const Section3 = () => {
  const ref = useRef(null)
  // once: true means it animates in once and stays — won't re-trigger on scroll up/down
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <div className='px-4 py-8 sm:px-6 sm:py-10 md:p-10 bg-[#111]' ref={ref}>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white'>
        About Me
      </h1>
      <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 sm:mt-5 text-white'>
        BEHIND THE CODE
      </h1>
      <TextEffect
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-bold text-white'
        preset='fade-in-blur'
        speedReveal={1.1}
        speedSegment={0.3}
        trigger={isInView}
      >
        Hi, I'm Raj Singh
      </TextEffect>
      <TextEffect
        className='text-lg sm:text-xl md:text-2xl lg:text-4xl mt-2 w-full max-w-7xl leading-7 sm:leading-8 md:leading-10 lg:leading-16 text-white'
        preset='fade-in-blur'
        speedReveal={1.1}
        speedSegment={0.3}
        trigger={isInView}
        delay={0.3}
      >
        I'm a first year Computer Science & Engineering student at Mangalmay Institute of Engineering and Technology (MIET), India - a passionate learner, developer, and creative builder.
      </TextEffect>
      <TextEffect
        className='text-lg sm:text-xl md:text-2xl lg:text-4xl mt-2 w-full max-w-7xl leading-7 sm:leading-8 md:leading-10 lg:leading-16 text-white'
        preset='fade-in-blur'
        speedReveal={1.1}
        speedSegment={0.3}
        trigger={isInView}
        delay={0.6}
      >
        Deeply interested in Backend Engineering, Cloud Computing, and System Design, I love building real-world scalable applications. I have hands-on experience in Full-stack development with the MERN stack, and I am currently exploring Kubernetes and AI Applications.
      </TextEffect>
    </div>
  )
}

export default Section3