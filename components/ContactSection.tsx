'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-cairo text-white leading-tight mb-4">
                        هل أنت مستعد لنقل عملك <br />
                        إلى <span className="text-electric-cyan">المرحلة التالية؟</span>
                    </h2>
                    <p className="text-gray-400">
                        تواصل معنا لنبدأ رحلة النمو فوراً.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
                >
                    <form className="space-y-8 md:space-y-10"> {/* More comfortable spacing */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-gray-400 text-sm mb-3 font-cairo">الاسم الكامل</label>
                                <input
                                    type="text"
                                    className="w-full bg-corporate-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all text-lg"
                                    placeholder="محمد أحمد"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-3 font-cairo">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    className="w-full bg-corporate-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all text-lg"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-3 font-cairo">نوع الخدمة المطلوبة</label>
                            <div className="relative">
                                <select defaultValue="" className="w-full bg-corporate-black/50 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all text-lg cursor-pointer">
                                    <option value="" disabled>اختر الخدمة...</option>
                                    <option value="web_dev">تطوير المواقع والمنصات</option>
                                    <option value="ai_video">إنتاج فيديوهات الذكاء الاصطناعي</option>
                                    <option value="media_buying">الانتشار والميديا باينج</option>
                                    <option value="other">أخرى</option>
                                </select>
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-3 font-cairo">وصف مشروعك</label>
                            <textarea
                                rows={5}
                                className="w-full bg-corporate-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all text-lg"
                                placeholder="أخبرنا المزيد عن أهدافك..."
                            />
                        </div>

                        <div className="pt-2">
                            <button type="button" className="group w-full py-5 bg-cyber-lime text-corporate-black font-bold font-cairo text-xl rounded-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                إرسال الطلب
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
