import React from 'react'
import { SpinningText } from '@/components/motion-primitives/spinning-text';
import { RiArrowUpDoubleFill } from "@remixicon/react";
const Section9 = () => {
    return (
        <footer className='border-t border-white relative px-4 sm:px-6 py-6 sm:py-8' style={{
            background: "radial-gradient(120% 90% at 50% 0%, #e810cf 15%, #fef4fd 60%)"
        }}>
            {/* Desktop layout with spinning text */}
            <div className='hidden sm:block'>
                <p className='text-sm font-semibold'>© 2026 — Raj Singh</p>
                <p className='text-xs'>Design and coded with ❤️</p>
            </div>

            {/* Mobile layout — simplified, no absolute positioning */}
            <div className='flex sm:hidden flex-col gap-2'>
                <p className='text-sm font-semibold'>© 2026 — Raj Singh</p>
                <p className='text-xs'>Design and coded with ❤️</p>
            </div>

            {/* Back to top button */}
            <div className='absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 flex items-center gap-2'>
                <p className='text-sm sm:text-xl hidden xs:inline'>Back to top</p>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className='rounded-full bg-black text-white text-lg sm:text-2xl p-1.5 sm:p-2'
                >
                    <RiArrowUpDoubleFill />
                </button>
            </div>

        </footer>
    )
}

export default Section9