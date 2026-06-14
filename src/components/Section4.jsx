import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselIndicator,
    CarouselItem,
} from './motion-primitives/carousel';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import { RiHtml5Line } from "@remixicon/react";
import { RiCss3Fill } from "@remixicon/react";
import { RiJavascriptLine } from "@remixicon/react";
import { RiReactjsFill } from "@remixicon/react";
import { RiTailwindCssFill } from "@remixicon/react";
import { RiSendInsLine } from "@remixicon/react";
import { RiGithubFill } from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Reusable button components ─────────────────────────── */
const LiveLinkButton = ({ url }) => (
    <button onClick={() => window.open(url, "_blank")}
        className="group relative w-auto cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-4 sm:px-5 py-2 text-center font-medium text-sm sm:text-base text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:hover:border-gray-700"
    >
        <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-400 transition-all duration-300 group-hover:scale-[100.8] dark:bg-white"></div>
            <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                Live Link
            </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 bg-blue-400 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
            <div className="flex items-center gap-3 whitespace-nowrap">
                <span className="leading-none font-medium">Live Link</span>
                <RiSendInsLine />
            </div>
        </div>
    </button>
);

const GitHubButton = ({ url }) => (
    <button onClick={() => window.open(url, "_blank")}
        className="overflow-hidden relative w-24 sm:w-32 p-2 h-10 sm:h-12 bg-black text-white border-none rounded-md text-xs sm:text-sm font-bold cursor-pointer z-10 group"
    >
        GitHub
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 sm:top-2.5 left-8 sm:left-12 z-10 text-xl"><RiGithubFill /></span>
    </button>
);

export function CarouselBasic() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse',
                }
            });


            tl.fromTo(glowRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 0.4, scale: 1.2, duration: 1.4, ease: "sine.inOut" }
            );


            const chars = headingRef.current.querySelectorAll('.char');
            tl.from(chars, {
                opacity: 0,
                y: 40,
                rotationX: -90,
                stagger: 0.03,
                duration: 0.45,
                ease: "expo.out",
            }, "-=1.5");


            tl.from(contentRef.current, {
                opacity: 0,
                x: 60,
                skewX: 2,
                duration: 1.2,
                ease: "expo.out",
            }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const headingText = "Projects";

    return (
        <div ref={containerRef} className='relative px-4 sm:px-6 md:px-10 py-10 sm:py-16 text-black min-h-screen flex flex-col justify-center overflow-hidden'>

            <div
                ref={glowRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none -z-10"
            />


            <div className='mb-8 sm:mb-12 md:mb-16 ml-2' ref={headingRef}>
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tighter flex flex-wrap'>
                    {headingText.split("").map((char, i) => (
                        <span key={i} className="char inline-block min-w-[0.2em]">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

            </div>


            <div className='flex justify-center items-center h-full' ref={contentRef}>
                <div className='relative w-full max-w-7xl'>
                    <Carousel>
                        <CarouselContent>
                            {/* ═══ Project 1: AI Battle Arena ═══ */}
                            <CarouselItem className='p-2 sm:p-4 md:p-6'>
                                <div className='relative rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden min-h-[400px] sm:min-h-[500px] md:aspect-video'>
                                    <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-4 sm:p-6 md:p-10'>AI Battle Arena</h2>
                                    <div className='flex flex-col md:flex-row'>
                                        <img src={img1} alt="Project 1" className="px-4 sm:px-6 md:px-10 w-full md:w-1/2 lg:w-[600px] h-auto object-contain" />
                                        <div className='mt-4 md:mt-15 px-4 sm:px-6 md:px-0'>
                                            <p className='text-white text-sm sm:text-base md:text-lg lg:text-2xl md:p-10'>
                                                Engineered a robust backend infrastructure for AI Battle Arena, allowing users to interact with multiple AI models simultaneously. Features a scalable architecture, secure API integrations, and efficient state management. Built with modern backend technologies to ensure low latency and high availability.
                                                <br />
                                                <span className='flex gap-3 sm:gap-4 mt-4 sm:mt-5'>
                                                    <RiJavascriptLine size={32} className='text-yellow-500 hover:scale-110 transition-transform sm:w-[52px] sm:h-[52px]' />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative sm:absolute bottom-4 sm:bottom-2 right-4 sm:right-10 flex gap-3 sm:gap-4 px-4 sm:px-2 pb-4 sm:pb-0 mt-4 sm:mt-2'>
                                        <LiveLinkButton url="https://ai-battle-arena-ievm.vercel.app/" />
                                        <GitHubButton url="https://github.com/rajfine/AI-Battle-Arena" />
                                    </div>
                                </div>
                            </CarouselItem>

                            {/* ═══ Project 2: Snitch ═══ */}
                            <CarouselItem className='p-2 sm:p-4 md:p-6'>
                                <div className='relative rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden min-h-[400px] sm:min-h-[500px] md:aspect-video'>
                                    <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-4 sm:p-6 md:p-10'>Snitch</h2>
                                    <div className='flex flex-col md:flex-row'>
                                        <img src={img2} alt="Project 2" className="px-4 sm:px-6 md:px-10 w-full md:w-1/2 lg:w-[600px] h-auto object-contain" />
                                        <div className='mt-4 md:mt-0 px-4 sm:px-6 md:px-0'>
                                            <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl md:p-10'>
                                                Developed a comprehensive full-stack e-commerce platform with robust product management, user authentication, and seamless backend integration. Focused on delivering a highly responsive user experience with a modern UI and efficient database operations using MongoDB.
                                                <span className='flex gap-3 sm:gap-4 mt-4 sm:mt-5'>
                                                    <RiReactjsFill size={32} className='text-blue-500 hover:scale-110 transition-transform sm:w-[52px] sm:h-[52px]' />
                                                    <RiTailwindCssFill size={32} className='text-purple-500 hover:scale-110 transition-transform sm:w-[52px] sm:h-[52px]' />
                                                    <RiJavascriptLine size={32} className='text-yellow-500 hover:scale-110 transition-transform sm:w-[52px] sm:h-[52px]' />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative sm:absolute bottom-4 sm:bottom-8 right-4 sm:right-10 flex gap-3 sm:gap-4 px-4 sm:px-0 pb-4 sm:pb-0 mt-4 sm:mt-0'>
                                        <LiveLinkButton url="#" />
                                        <GitHubButton url="https://github.com/rajfine/E-commerce-platform" />
                                    </div>
                                </div>
                            </CarouselItem>

                            {/* ═══ Project 3: Perplexity AI Clone ═══ */}
                            <CarouselItem className='p-2 sm:p-4 md:p-6'>
                                <div className='relative rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden min-h-[400px] sm:min-h-[500px] md:aspect-video'>
                                    <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-4 sm:p-6 md:p-10'>Perplexity AI Clone</h2>
                                    <div className='flex flex-col md:flex-row'>
                                        <img src={img3} alt="Project 3" className="px-4 sm:px-6 md:px-10 w-full md:w-1/2 lg:w-[600px] h-auto object-contain" />
                                        <div className='mt-4 md:mt-10 px-4 sm:px-6 md:px-0'>
                                            <p className='text-white text-sm sm:text-base md:text-lg lg:text-2xl md:p-10'>
                                                Created a functional clone of Perplexity AI, featuring a modern chat interface and intelligent search capabilities. Integrated AI features to provide a rich search experience, utilizing a modern frontend architecture to ensure a responsive and intuitive user journey.
                                                <br />
                                                <span className='flex gap-3 sm:gap-4 mt-4 sm:mt-5'>
                                                    <RiReactjsFill size={32} className='text-blue-500 hover:scale-110 transition-transform sm:w-[52px] sm:h-[52px]' />
                                                    <RiTailwindCssFill size={32} className='text-purple-500 hover:scale-110 transition-transform sm:w-[52px] sm:h-[52px]' />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative sm:absolute bottom-4 sm:bottom-8 right-4 sm:right-10 flex gap-3 sm:gap-4 px-4 sm:px-0 pb-4 sm:pb-0 mt-4 sm:mt-0'>
                                        <LiveLinkButton url="#" />
                                        <GitHubButton url="https://github.com/rajfine/perplexity_AI.git" />
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>

                        {/* Override default left-[-12.5%] w-[125%] → left-0 w-full so buttons sit at the edges */}
                        <CarouselNavigation
                            alwaysShow
                            className='left-0 w-full px-2'
                            classNameButton='!p-3 sm:!p-5 !rounded-full bg-white hover:bg-zinc-700 border border-zinc-600 shadow-lg transition-all duration-200 [&_svg]:!size-4 sm:[&_svg]:!size-6'
                        />
                        <CarouselIndicator
                            className='pb-2'
                            classNameButton='bg-white/40 data-[active]:bg-cyan-400'
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
