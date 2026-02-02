'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function StrategicCTA() {
    return (
        <section className="relative h-[80vh] w-full bg-corporate-black flex flex-col items-center justify-center text-center px-6 overflow-hidden">

            {/* Particle Background */}
            <ParticleBackground />

            {/* Content */}
            <div className="relative z-10 max-w-4xl space-y-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-cairo text-white leading-tight"
                >
                    هل أنت مستعد لنقل عملك <br />
                    إلى <span className="text-electric-cyan">المرحلة التالية؟</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-300 font-light"
                >
                    انضم إلى قائمة شركائنا وابدأ رحلة النمو الذكي مع سكاليو اليوم.
                </motion.p>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    viewport={{ once: true }}
                >
                    <MagneticButton>
                        <button className="group relative px-10 py-5 bg-electric-cyan text-corporate-black font-bold text-xl rounded-full flex items-center justify-center gap-4 overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(0,217,255,0.6)] hover:scale-105">
                            <span className="relative z-10">احجز جلستك الاستشارية الآن</span>
                            <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                        </button>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Bottom Footer Credits (Optional subtle) */}
            <div className="absolute bottom-8 text-gray-600 text-sm">
                © 2026 Scalyo. All Rights Reserved.
            </div>
        </section>
    );
}

function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const particles: { x: number, y: number, r: number, vx: number, vy: number, alpha: number }[] = [];
        const particleCount = 60;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                alpha: Math.random() * 0.5 + 0.1
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, w, h);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 217, 255, ${p.alpha})`; // Electric Cyan
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />
}

// Reuse Magnetic Button logic (ideally refactored to shared component but keep inline for speed as per instructions to "Show code")
function MagneticButton({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.div>
    )
}
