'use client';
import { useEffect, useState } from 'react';
import { Cursor } from './motion-primitives/cursor';
import { AnimatePresence, motion } from 'motion/react';
import { PlusIcon } from 'lucide-react';

export function GlobalCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [hoverType, setHoverType] = useState('default');
    const [isTouchOnly, setIsTouchOnly] = useState(false);

    useEffect(() => {
        // Use media query to check if primary input is a fine pointer (mouse/trackpad)
        // This correctly shows cursor on laptops with touchscreens
        const hasFinPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        setIsTouchOnly(!hasFinPointer);
    }, []);

    useEffect(() => {
        if (isTouchOnly) return;

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.closest('button') ||
                target.closest('a') ||
                target.closest('.cursor-pointer') ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A';

            if (isClickable) {
                setIsHovering(true);
                // Detect if it's an image or something special if needed
                if (target.closest('img')) {
                    setHoverType('image');
                } else {
                    setHoverType('clickable');
                }
            } else {
                setIsHovering(false);
                setHoverType('default');
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        return () => window.removeEventListener('mouseover', handleMouseOver);
    }, [isTouchOnly]);

    // Don't render custom cursor on touch devices
    if (isTouchOnly) return null;

    return (
        <Cursor
            attachToParent={false}
            variants={{
                initial: { scale: 0.3, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.3, opacity: 0 },
            }}
            springConfig={{
                stiffness: 1000,
                damping: 80,
                mass: 0.1,
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.15,
            }}
        >
            <motion.div
                animate={{
                    width: isHovering ? 80 : 16,
                    height: isHovering ? 32 : 16,
                    backgroundColor: isHovering ? 'rgba(107, 114, 128, 0.4)' : '#FF0000',
                }}
                className='flex items-center justify-center rounded-[24px] backdrop-blur-md'
            >
                <AnimatePresence>
                    {isHovering ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1 }}
                            className='inline-flex w-full items-center justify-center'
                        >
                            <div className='inline-flex items-center text-xs font-medium text-white'>
                                {hoverType === 'image' ? 'View' : 'Click'} <PlusIcon className='ml-1 h-3 w-3' />
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </motion.div>
        </Cursor>
    );
}
