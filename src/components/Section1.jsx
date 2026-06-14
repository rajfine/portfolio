import React from 'react'
import Navbar from './Navbar'
import { ContainerTextFlip } from './FlipText'
import { FlipWords } from './FlipWords'
import { HoverBorderGradientDemo } from './Buttons'
import { RiContactsLine } from "@remixicon/react";
import logoImg from '../assets/logo.jpeg'


const Section1 = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#fafafa',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      {/* Radial fade overlay — softens the grid at the edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #fafafa 100%)',
        }}
      />

      {/* Logo — top left */}
      <div className="absolute flex top-4 left-4 sm:top-5 sm:left-10 z-20">
        <img
          src={logoImg}
          alt="Logo"
          className="rounded-full object-cover w-8 h-8 sm:w-9 sm:h-9"
        />
        <p className='text-[14px] sm:text-[18px] mt-1.5 ml-2 font-semibold'>Raj Singh</p>
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 -mt-10 sm:-mt-20 md:-mt-32 lg:-mt-40">
        {/* Main heading + flip text */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#222] leading-tight tracking-tight">
            Heyy . .  I'm
          </h1>
          <ContainerTextFlip />
        </div>

        {/* Subtext */}
        <div className='mt-4 sm:mt-6 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#444]'>
          <p>I build thoughtful end-to-end digital products with clean code and clear intent, made to be scalable, user-first and </p>
        </div>

        {/* Flip Words */}
        <div className='mt-2 sm:mt-4 font-bold text-lg sm:text-xl md:text-2xl'>
          <FlipWords words={['Modern', 'Impactful', 'Seamless', 'Creative', 'Adaptive']} />
        </div>

        {/* CTA Buttons */}
        <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
          <div className='active:scale-95'>
            <HoverBorderGradientDemo />
          </div>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className='px-6 sm:px-8 flex gap-3 py-3 bg-black text-white rounded-xl cursor-pointer active:scale-95 text-sm sm:text-base'
          >
            <RiContactsLine />Let's Connect
          </button>
        </div>
      </div>

      {/* Right-side Navbar */}

    </div>
  )
}

export default Section1