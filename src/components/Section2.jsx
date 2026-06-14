import React from 'react';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';
import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiTailwindCssFill, RiReactjsFill, RiNextjsFill, RiNodejsFill, RiDatabase2Fill, RiVercelFill } from "@remixicon/react";

export function ProgressiveBlurSlider() {
    return (
        <div className='relative h-[80px] sm:h-[100px] w-full overflow-hidden'>
            <InfiniteSlider className='flex h-full w-full items-center'>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiHtml5Fill />
                    </div>
                    <p>HTML</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiCss3Fill />
                    </div>
                    <p>CSS</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiJavascriptFill />
                    </div>
                    <p>JAVASCRIPT</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiTailwindCssFill />
                    </div>
                    <p>TAILWIND</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiReactjsFill />
                    </div>
                    <p>REACT</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiNextjsFill />
                    </div>
                    <p>NEXT</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiNodejsFill />
                    </div>
                    <p>NODE</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiDatabase2Fill />
                    </div>
                    <p>DATABASE</p>
                </div>
                <div className='w-20 sm:w-32 text-center text-lg sm:text-2xl font-[450] text-black dark:text-white'>
                    <div className='flex items-center justify-center'>
                        <RiVercelFill />
                    </div>
                    <p>VERCEL</p>
                </div>
            </InfiniteSlider>
            <ProgressiveBlur
                className='pointer-events-none absolute top-0 left-0 h-full w-[80px] sm:w-[200px]'
                direction='left'
                blurIntensity={2}
            />
            <ProgressiveBlur
                className='pointer-events-none absolute top-0 right-0 h-full w-[80px] sm:w-[200px]'
                direction='right'
                blurIntensity={2}
            />
        </div>
    );
}
