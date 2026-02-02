'use client';

import { motion, Variants } from 'framer-motion';
import { Server, TrendingUp, Cpu } from 'lucide-react';

const pillars = [
    {
        id: 1,
        icon: <Server className="w-10 h-10 text-electric-cyan" />,
        title: 'البنية التحتية والمبيعات',
        description: 'تأسيس منصات بيعية ذكية (سلة، إيزي أوردر) تضمن تحويل الزوار إلى عملاء دائمين.',
    },
    {
        id: 2,
        icon: <TrendingUp className="w-10 h-10 text-electric-cyan" />,
        title: 'السيطرة والانتشار',
        description: 'استراتيجيات نمو متكاملة عبر الميديا باينج في سناب شات، تيك توك، وميتا لاكتساح السوق.',
    },
    {
        id: 3,
        icon: <Cpu className="w-10 h-10 text-electric-cyan" />,
        title: 'الذكاء التشغيلي',
        description: 'أتمتة العمليات ودمج الذكاء الاصطناعي بـ n8n لتحقيق أقصى إنتاجية بأقل مجهود.',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function GrowthPillars() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">

            {/* Background glow for ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-cyan/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-cairo text-white mb-6 leading-tight"
                    >
                        ركائز <span className="text-electric-cyan drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">السيادة الرقمية</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-ice-silver font-medium max-w-2xl mx-auto"
                    >
                        هذه هي القواعد التي نبني عليها نجاحك المستدام.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {pillars.map((pillar) => (
                        <TiltCard key={pillar.id}>
                            <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col items-start text-right transition-all duration-300 group-hover:border-electric-cyan/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">

                                <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-electric-cyan/10 transition-colors">
                                    {pillar.icon}
                                </div>

                                <h3 className="text-2xl font-bold font-cairo text-white mb-4 group-hover:text-electric-cyan transition-colors">
                                    {pillar.title}
                                </h3>

                                <p className="text-gray-400 font-medium leading-relaxed">
                                    {pillar.description}
                                </p>

                            </div>
                        </TiltCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TiltCard({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
            }}
            variants={cardVariants}
            className="group perspective-1000"
        >
            {children}
        </motion.div>
    )
}
