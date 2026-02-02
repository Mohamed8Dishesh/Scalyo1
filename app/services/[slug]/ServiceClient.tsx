'use client';

import NetworkBackground from '../../../components/NetworkBackground';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Define the type for the service prop
interface ServiceData {
    slug: string;
    category: string;
    title: string;
    description: string;
    whatsappMsg: string;
    benefits?: string[];
    iconName?: string;
}

export default function ServiceClient({ service }: { service: ServiceData }) {
    const whatsappLink = `https://wa.me/96560905777?text=${encodeURIComponent(service.whatsappMsg)}`;

    return (
        <main className="min-h-screen bg-corporate-black relative overflow-hidden font-cairo text-right" dir="rtl">

            {/* Background */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <NetworkBackground />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">

                <Link href="/services" className="absolute top-10 right-10 flex items-center gap-2 text-ice-silver hover:text-electric-cyan transition-colors z-20">
                    <ArrowRight className="w-5 h-5" />
                    <span>عودة للخدمات</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl p-8 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-12 items-center relative z-10"
                >
                    <div className="flex-1">
                        <div className="inline-block px-4 py-2 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan text-sm font-bold mb-6">
                            {service.category === 'infrastructure' && 'الأسس الرقمية'}
                            {service.category === 'growth' && 'محركات النمو'}
                            {service.category === 'ai' && 'الذكاء الاصطناعي'}
                            {service.category === 'creative' && 'الخدمات الإبداعية'}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-ice-silver font-light leading-relaxed mb-8">
                            {service.description}
                        </p>

                        <div className="space-y-4 mb-10">
                            {service.benefits?.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-cyber-lime shrink-0" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-8 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 group"
                        >
                            <span className="relative z-10">اطلب الخدمة الآن</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 1.77.766 2.464.766 3.361.64.975-.138 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
