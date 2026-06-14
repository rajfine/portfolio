import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'motion/react';

const Loader = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // GSAP for the numerical counter value (smoother than motion for raw numbers)
        let countValue = { value: 0 };
        gsap.to(countValue, {
            value: 100,
            duration: 3,
            ease: "power2.inOut",
            onUpdate: () => {
                setCount(Math.floor(countValue.value));
            },
            onComplete: () => {
                setTimeout(() => {
                    setIsVisible(false);
                    if (onComplete) {
                        // Delay the actual completion slightly for the exit animation
                        setTimeout(onComplete, 1000);
                    }
                }, 500);
            }
        });
    }, [onComplete]);

    const words = "WELCOME".split("");

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
                >
                    <div className="flex overflow-hidden mb-6">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.05,
                                    ease: "power3.out"
                                }}
                                className="text-5xl md:text-8xl font-bold tracking-tighter inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    <div className="w-64 md:w-96 h-px bg-white/10 relative overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: count / 100 }}
                            transition={{ ease: "linear" }}
                            className="absolute inset-y-0 left-0 bg-white w-full origin-left"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        className="mt-6 text-sm font-medium tracking-[0.3em] uppercase"
                    >
                        Initializing <span className="font-mono">{count}%</span>
                    </motion.div>

                    {/* Subtle background glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute w-[500px] h-[500px] bg-white rounded-full blur-[120px] pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
