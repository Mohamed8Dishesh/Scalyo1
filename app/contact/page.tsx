'use client';

import { motion } from 'framer-motion';
import NetworkBackground from '../../components/NetworkBackground';
import { ArrowLeft } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-corporate-black relative overflow-hidden font-cairo text-right" dir="rtl">

            {/* Background */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <NetworkBackground />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-screen">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        ابدأ رحلة <span className="text-electric-cyan drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">النمو</span>
                    </h1>
                    <p className="text-xl text-ice-silver max-w-2xl mx-auto">
                        نحن جاهزون لتحويل رؤيتك إلى واقع رقمي مسيطر. تواصل معنا الآن.
                    </p>
                </motion.div>

                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-3">الاسم الكامل</label>
                                <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all" placeholder="الاسم" />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-3">البريد الإلكتروني</label>
                                <input type="email" className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all" placeholder="email@example.com" />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-3">نوع الخدمة</label>
                                <select defaultValue="" className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all appearance-none cursor-pointer">
                                    <option value="" disabled>اختر الخدمة...</option>
                                    <option value="infrastructure">الأسس الرقمية (سلة، ويب)</option>
                                    <option value="growth">الحملات الإعلانية والنمو</option>
                                    <option value="ai">الذكاء الاصطناعي والأتمتة</option>
                                    <option value="creative">الهوية والإبداع</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-3">الرسالة</label>
                                <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all" placeholder="كيف يمكننا مساعدتك؟" />
                            </div>
                            <button type="button" className="w-full py-4 bg-electric-cyan text-black font-bold text-lg rounded-xl hover:bg-electric-cyan/90 transition-colors flex items-center justify-center gap-2 group">
                                إرسال
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col justify-center gap-8"
                    >
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-electric-cyan/10 to-vivid-violet/10 border border-white/10 backdrop-blur-xl">
                            <h3 className="text-2xl font-bold text-white mb-4">تواصل مباشر</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                تفضل بالتواصل معنا عبر الواتساب للحصول على استشارة سريعة ومباشرة مع فريقنا المتخصص.
                            </p>

                            <a
                                href="https://wa.me/96560905777?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%B3%D9%83%D8%A7%D9%84%D9%8A%D9%88%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D8%A8%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl text-xl font-bold transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] flex items-center justify-center gap-4 group"
                            >
                                <span className="relative z-10">تواصل عبر الواتساب</span>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 1.77.766 2.464.766 3.361.64.975-.138 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
