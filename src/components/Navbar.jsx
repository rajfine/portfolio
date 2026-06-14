import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Contact']

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const overlayRef = useRef(null)
    const linksRef = useRef([])
    const tlRef = useRef(null)

    // Build GSAP timeline once on mount
    useEffect(() => {
        gsap.set(overlayRef.current, { x: '100%', opacity: 0 })
        gsap.set(linksRef.current, { y: 60, opacity: 0 })

        tlRef.current = gsap.timeline({ paused: true })

        // Step 1 – overlay slides in from the right
        tlRef.current.to(overlayRef.current, {
            x: '0%',
            opacity: 1,
            duration: 0.7,
            ease: 'power4.out',
        })

        // Step 2 – links stagger up
        tlRef.current.to(
            linksRef.current,
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.08,
            },
            '-=0.35'
        )
    }, [])

    const openMenu = () => {
        setIsOpen(true)
        tlRef.current.play()
    }

    const closeMenu = () => {
        tlRef.current.reverse().eventCallback('onReverseComplete', () => {
            setIsOpen(false)
        })
    }

    // ESC key to close
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') closeMenu() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
        <>
            {/* ─── Hamburger Button ─── */}
            <button
                id="nav-hamburger"
                onClick={isOpen ? closeMenu : openMenu}
                aria-label="Toggle navigation menu"
                className="fixed top-5 right-6 z-1001 bg-[#111] border border-white/25 rounded-full w-[38px] h-[38px] flex flex-col items-center justify-center gap-[5px] cursor-pointer backdrop-blur-md transition-[background,border-color] duration-300"
            >
                {/* Top bar – rotates to form X top stroke */}
                <span
                    className="block w-5 h-[2px] bg-white rounded-sm origin-center transition-transform duration-350 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transform: isOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}
                />
                {/* Middle bar – fades out */}
                <span
                    className="block w-5 h-[2px] bg-white rounded-sm transition-opacity duration-250"
                    style={{ opacity: isOpen ? 0 : 1 }}
                />
                {/* Bottom bar – rotates to form X bottom stroke */}
                <span
                    className="block w-5 h-[2px] bg-white rounded-sm origin-center transition-transform duration-350 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transform: isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
                />
            </button>

            {/* ─── Fullscreen Overlay ─── */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-[#222] z-1000 flex flex-col items-center justify-center"
                style={{ pointerEvents: isOpen ? 'all' : 'none' }}
            >
                <nav>
                    <ul className="list-none p-0 m-0 text-center">
                        {navLinks.map((link, i) => (
                            <li key={link} className="my-3">
                                <a
                                    ref={el => (linksRef.current[i] = el)}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const targetId = link.toLowerCase();
                                        const targetElement = document.getElementById(targetId);

                                        // First, reverse the menu animation
                                        tlRef.current.reverse().eventCallback('onReverseComplete', () => {
                                            setIsOpen(false);
                                            // Once menu is closed, scroll
                                            if (link === 'Home') {
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            } else if (targetElement) {
                                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        });
                                    }}
                                    className="inline-block text-white no-underline font-bold tracking-[-0.03em] leading-[1.05]"
                                    style={{ fontSize: 'clamp(2.8rem, 9vw, 6.5rem)' }}
                                    onMouseEnter={e => {
                                        gsap.to(e.currentTarget, { color: '#999', x: 12, duration: 0.25, ease: 'power2.out' })
                                    }}
                                    onMouseLeave={e => {
                                        gsap.to(e.currentTarget, { color: '#fff', x: 0, duration: 0.25, ease: 'power2.out' })
                                    }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom hint */}
                <p className="absolute bottom-8 text-white/30 text-[0.78rem] tracking-[0.12em] uppercase">
                    ESC to close
                </p>
            </div>
        </>
    )
}

export default Navbar
