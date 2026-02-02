'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { MouseEvent } from 'react';

const projects = [
    {
        id: 1,
        title: 'مجلس للضيافة',
        titleEn: 'Majlis Hospitality',
        link: 'https://majlis-hospitality.netlify.app/',
        description: 'تطوير منصة رقمية متكاملة لتعزيز تجربة الضيافة الفاخرة، مع تصميم يركز على الفخامة وسهولة الحجز.',
        gradient: 'from-[#8B5CF6] to-[#7C3AED]', // Radiant Violet Range
    },
    {
        id: 2,
        title: 'كاريرلي',
        titleEn: 'Careerly.sa',
        link: 'http://careerlyksa.com/',
        description: 'منصة خدمات مهنية متطورة تأسست بواسطة فريقنا، تستهدف السوق الخليجي والمصري بأحدث تقنيات الـ AI للتوظيف.',
        gradient: 'from-[#8B5CF6] to-[#6D28D9]', // Deep Violet Range
    }
];

export default function Portfolio() {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-cairo text-white mb-6"
                    >
                        شركاء <span className="text-electric-cyan drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">النجاح</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-ice-silver font-medium max-w-2xl mx-auto"
                    >
                        ثقة تُبنى على النتائج. هذه الكيانات لم تطلب مجرد خدمة، بل وضعت ثقتها في سكاليو لتكون شريكها الاستراتيجي في رحلة التحول الرقمي.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {/* Item 1: Spans 3/5 cols */}
                    <div className="md:col-span-3">
                        <TiltCard project={projects[0]} />
                    </div>
                    {/* Item 2: Spans 2/5 cols */}
                    <div className="md:col-span-2">
                        <TiltCard project={projects[1]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TiltCard({ project }: { project: any }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    function onMouseMove(event: MouseEvent<HTMLAnchorElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = event.clientX - rect.left;
        const mouseYVal = event.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group relative block h-[400px] w-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden cursor-pointer hover:border-electric-cyan/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500"
        >
            {/* Background Gradient & Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Content Container */}
            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative h-full flex flex-col justify-end p-8 z-10"
            >
                <div className="mb-auto flex justify-between items-start">
                    {/* Placeholder for project visuals if we had images */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                        <ArrowUpRight className="w-8 h-8 text-white" />
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-electric-cyan transition-colors font-cairo">
                        {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 font-mono uppercase tracking-widest">{project.titleEn}</p>
                    <p className="text-lg text-gray-200 font-light leading-relaxed mb-6">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-electric-cyan font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span>زيارة المشروع</span>
                        <ExternalLink size={18} />
                    </div>
                </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.a>
    );
}
