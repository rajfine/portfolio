import React from 'react'
import {

  HomeIcon,
  Mail,
  MessageCircle,
  Github,
  Linkedin
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from './motion-primitives/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-black dark:text-neutral-300' />
    ),
    href: '/',
  },
  {
    title: 'Github',
    icon: (
      <Github className='h-full w-full text-black dark:text-neutral-300' />
    ),
    href: 'https://github.com/rajfine',
  },
  {
    title: 'Linkedin',
    icon: (
      <Linkedin className='h-full w-full text-black dark:text-neutral-300' />
    ),
    href: 'https://www.linkedin.com/in/raj-singh-a8a3a333a',
  },
  {
    title: 'Mail',
    icon: (
      <Mail className='h-full w-full text-black dark:text-neutral-300' />
    ),
    href: 'mailto:raj20051104@gmail.com',
  },
  {
    title: 'Phone',
    icon: (
      <MessageCircle className='h-full w-full text-black dark:text-neutral-300' />
    ),
    href: 'tel:9355652375',
  },

];

const Section8 = () => {
  return (
    <div
      className='relative min-h-[500px] sm:min-h-[560px] px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-28'
      style={{
        background: "radial-gradient(120% 90% at 50% 100%, #e810cf 15%, #fef4fd 60%)"
      }}

    >
      <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold text-center text-black dark:text-white'>Contact Me</h1>
      <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-10 font-semibold text-center text-black dark:text-neutral-200'>Let's Build Something Amazing Together</p>
      <p className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-sm sm:text-base md:text-lg mt-4 sm:mt-5 font-medium text-center text-black dark:text-neutral-300'>Feel free to reach out if you'd like to collaborate, discuss a project, or just say hello. I'm always open to new opportunities, ideas, and meaningful conversations. Let's connect and create something impactful together.</p>
      <div className='absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2'>
        <Dock className='pb-3 items-center'>
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              href={item.href}
              className='aspect-square rounded-full bg-white backdrop-blur-md border border-white dark:bg-neutral-800/50'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </div>
  )
}

export default Section8
