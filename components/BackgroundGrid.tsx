'use client';

import { motion } from 'framer-motion';

export default function BackgroundGrid() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-corporate-black pointer-events-none">

            {/* 1. Base Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`, // Electric Blue
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
                }}
            />

            {/* 2. Abstract Geometric Shapes (Mesh Glows) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-electric-cyan/10 blur-[120px] rounded-full mix-blend-screen"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-vivid-violet/10 blur-[130px] rounded-full mix-blend-screen"
                />
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-electric-cyan/5 blur-[90px] rounded-full mix-blend-screen"
                />
            </div>

            {/* 3. Subtle Animated Grain/Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

        </div>
    );
}
