'use client';

import { motion } from 'framer-motion';
import { Globe, Video, Megaphone, ArrowLeft } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: <Globe className="w-10 h-10 text-electric-cyan" />,
        title: 'تطوير المواقع والمنصات',
        description: 'بناء متاجر سلة، إيزي أوردر، ومواقع مخصصة بتصاميم عالمية تضمن تحويل الزوار لعملاء.',
    },
    {
        id: 2,
        icon: <Video className="w-10 h-10 text-electric-cyan" />,
        title: 'إنتاج فيديوهات الذكاء الاصطناعي',
        description: 'صناعة محتوى مرئي إبداعي باستخدام أحدث تقنيات الـ AI لخطف الأنظار في حملاتك.',
    },
    {
        id: 3,
        icon: <Megaphone className="w-10 h-10 text-electric-cyan" />,
        title: 'الانتشار والميديا باينج',
        description: 'إدارة حملات إعلانية ذكية على سناب، تيك توك، وميتا لاستهداف جمهورك بدقة وتحقيق أعلى عائد.',
    },
];

export default function FeaturedServices() {
    return (
        <section className="py-24 px-6 relative">
            <div className="container mx-auto">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-cairo text-white mb-6 tracking-tight"
                    >
                        الخدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-vivid-violet drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">الأكثر طلباً</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-ice-silver font-medium max-w-2xl mx-auto"
                    >
                        حلول ذكية.. نتائج فورية. مجموعة من الأدوات المتطورة المصممة لاختصار طريقك نحو القمة.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10 auto-rows-[minmax(250px,auto)]">

                    {/* Item 1: Large Span (Web Dev) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden group hover:border-electric-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="mb-6 w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center border border-electric-cyan/20 group-hover:scale-110 transition-transform duration-500">
                                <Globe className="w-8 h-8 text-electric-cyan" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold font-cairo text-white mb-3 group-hover:text-electric-cyan transition-colors">تطوير المنصات الرقمية</h3>
                                <p className="text-ice-silver font-light text-lg leading-relaxed max-w-md group-hover:text-white">
                                    بناء متاجر سلة، إيزي أوردر، ومواقع مخصصة بتصاميم عالمية تضمن سرعة الأداء وتحويل الزوار لعملاء.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 2: Vertical Span (Video AI) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 md:row-span-2 relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden group hover:border-vivid-violet/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-vivid-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="mb-auto w-14 h-14 rounded-2xl bg-vivid-violet/10 flex items-center justify-center border border-vivid-violet/20 group-hover:rotate-12 transition-transform duration-500">
                                <Video className="w-7 h-7 text-vivid-violet" />
                            </div>
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold font-cairo text-white mb-3 group-hover:text-vivid-violet transition-colors">فيديوهات AI</h3>
                                <p className="text-ice-silver font-light leading-relaxed group-hover:text-white">
                                    صناعة محتوى مرئي إبداعي باستخدام أحدث تقنيات الـ AI لخطف الأنظار في حملاتك الإعلانية.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 3: Long Horizontal (Media Buying) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden group hover:border-vivid-violet/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-vivid-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex items-center gap-6">
                            <div className="shrink-0 w-16 h-16 rounded-2xl bg-vivid-violet/10 flex items-center justify-center border border-vivid-violet/20 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-500">
                                <Megaphone className="w-8 h-8 text-vivid-violet" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-cairo text-white mb-2 group-hover:text-vivid-violet transition-colors">الانتشار والميديا باينج</h3>
                                <p className="text-ice-silver font-light group-hover:text-white">
                                    إدارة حملات إعلانية ذكية على سناب، تيك توك، وميتا لاستهداف جمهورك بدقة وتحقيق أعلى عائد على الاستثمار (ROAS).
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                <div className="flex justify-center relative z-10">
                    <motion.a
                        href="/services"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-white/5 backdrop-blur-xl border border-vivid-violet/30 rounded-full flex items-center gap-3 overflow-hidden transition-all duration-300 hover:border-vivid-violet hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    >
                        <span className="text-lg font-bold text-white group-hover:text-electric-cyan transition-colors z-10">عرض جميع خدماتنا</span>
                        <ArrowLeft className="w-5 h-5 text-white group-hover:text-electric-cyan group-hover:-translate-x-1 transition-all z-10" />

                        {/* Inner Gradient Shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-vivid-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                </div>

            </div>
        </section>
    );
}
