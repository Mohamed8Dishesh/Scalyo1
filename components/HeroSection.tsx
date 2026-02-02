'use client';

import { motion, Variants } from 'framer-motion';
import NetworkBackground from './NetworkBackground';
import { ArrowLeft } from 'lucide-react';

export default function HeroSection() {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <section className="relative w-full h-screen bg-corporate-black overflow-hidden flex items-center justify-center">

            {/* 1. Immersive Background Layer */}
            <div className="absolute inset-0 z-0">
                <NetworkBackground />
            </div>

            {/* 2. Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-corporate-black/30 via-transparent to-corporate-black/90 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-corporate-black/60 to-corporate-black pointer-events-none" />

            {/* 3. Text Content Layer */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    className="flex flex-col items-center max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="text-4xl md:text-8xl font-black font-cairo leading-tight text-white mb-8 drop-shadow-2xl tracking-tight">
                            سكاليو: نحن لا نعد بالنتائج، <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-electric-cyan to-white filter drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                                نحن نصنعها.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-ice-silver font-normal leading-relaxed max-w-3xl mb-12 drop-shadow-md"
                    >
                        شريكك الاستراتيجي للنمو. ندمج الذكاء الاصطناعي والبنية الرقمية المتطورة لنأخذ عملك إلى مرحلة السيطرة على السوق.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <MagneticButton>
                            <button className="group relative px-12 py-6 bg-electric-cyan text-corporate-black font-bold text-xl rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95">
                                <span className="relative z-10">ابدأ رحلة السيطرة</span>
                                <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity" />
                            </button>
                        </MagneticButton>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    );
}

// Reuse Magnetic Button
function MagneticButton({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
        >
            {children}
        </motion.div>
    )
}
