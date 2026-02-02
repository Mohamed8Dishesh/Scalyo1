'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden flex items-center justify-center">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    {/* Visual Graphic (Left on Desktop, Top on Mobile if needed, but per RTL flows:
               Desktop: Graphic Left, Text Right (Visual -> Text order in DOM? no, visual is usually supplementary).
               RTL: Left is actually the "End" of the reading direction. Text starts Right.
               So visual on Left is logically after the text usually in RTL layout conceptualization, OR it's a split.
               User said: "Text Right, Graphic Left".
               This matches standard RTL layout where visual is on the "Far side".
            */}

                    {/* Graphic Container (Desktop Left / Mobile Top or Stacked) */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center order-2 md:order-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Abstract Growth Network Graphic */}
                        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[300px] md:max-w-full drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <motion.path
                                d="M50 350L150 250L200 300L350 50"
                                stroke="#3B82F6"
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.circle cx="50" cy="350" r="8" fill="#3B82F6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0 }} />
                            <motion.circle cx="150" cy="250" r="8" fill="#3B82F6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} />
                            <motion.circle cx="200" cy="300" r="8" fill="#3B82F6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
                            <motion.circle cx="350" cy="50" r="12" fill="#3B82F6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2 }} >
                                <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
                            </motion.circle>

                            {/* Network Lines */}
                            <motion.path d="M50 350L100 400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
                            <motion.path d="M150 250L150 150" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
                            <motion.path d="M350 50L400 50" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" />
                        </svg>
                    </motion.div>

                    {/* Text Content (Right) */}
                    <motion.div
                        className="w-full md:w-1/2 text-center md:text-right order-1 md:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black font-cairo text-white mb-6 leading-tight">
                            رؤيتنا: <br />
                            <span className="text-electric-cyan drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">شريكك للنمو الذكي</span>
                        </h2>

                        <p className="text-lg text-ice-silver font-medium mb-8 leading-relaxed">
                            نحن لا نقدم مجرد خدمات رقمية، بل نصنع منظومات متكاملة تقودك للهيمنة على سوقك. دمجنا للذكاء الاصطناعي مع الاستراتيجيات الرقمية هو سلاحك السري.
                        </p>

                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed font-cairo">
                            في سكاليو، نؤمن أن التواجد الرقمي ليس غاية، بل وسيلة للتوسع والسيطرة.
                            نحن لا نصمم مواقع فقط؛ نحن نبني أنظمة ذكية تضاعف مبيعاتك وتؤتمت عملياتك لتحقيق أقصى مراحل النمو.
                        </p>

                        <div className="mt-8 flex justify-center md:justify-start">
                            <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan/50 to-transparent rounded-full" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
