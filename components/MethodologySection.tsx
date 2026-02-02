'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Monitor, Cpu, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: <Target className="w-8 h-8 text-corporate-black" />,
        title: 'تحليل السوق',
        description: 'دراسة دقيقة للمنافسين واقتناص الفرص المتاحة.',
    },
    {
        id: 2,
        icon: <Monitor className="w-8 h-8 text-corporate-black" />,
        title: 'بناء المنصة',
        description: 'تأسيس البنية التحتية الرقمية التي تليق بعلامتك التجارية.',
    },
    {
        id: 3,
        icon: <Cpu className="w-8 h-8 text-corporate-black" />,
        title: 'أتمتة العمليات',
        description: 'ربط الأنظمة بالذكاء الاصطناعي لرفع كفاءة التشغيل.',
    },
    {
        id: 4,
        icon: <Rocket className="w-8 h-8 text-corporate-black" />,
        title: 'الانتشار الشامل',
        description: 'إطلاق حملات ميديا باينج مدروسة لاكتساح السوق.',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
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

export default function MethodologySection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-cairo text-white mb-6">
                        منهجية <span className="text-electric-cyan">النمو</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        خارطة طريق واضحة ومدروسة لنقل عملك من الوضع الحالي إلى السيطرة الكاملة.
                    </p>
                </motion.div>

                <motion.div
                    className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-l from-transparent via-electric-cyan/30 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            variants={itemVariants}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Step Number Circle */}
                            <div className="w-24 h-24 rounded-full bg-corporate-black border-2 border-electric-cyan flex items-center justify-center relative z-10 mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]">
                                <div className="w-20 h-20 rounded-full bg-electric-cyan flex items-center justify-center">
                                    {step.icon}
                                </div>
                                {/* Pulse effect */}
                                <div className="absolute inset-0 rounded-full border border-electric-cyan/50 animate-ping opacity-20" />
                            </div>

                            {/* Arrow Connector for Mobile (between items) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-electric-cyan/30">
                                    ↓
                                </div>
                            )}

                            {/* Desktop Arrow Interaction - Animated Line Segment? 
                       Keeping it simple with the background line above for now, 
                       but adding a "dot" on the line to signify flow potentially.
                   */}

                            <h3 className="text-xl font-bold font-cairo text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
