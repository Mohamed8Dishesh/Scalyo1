'use client';

import { motion } from 'framer-motion';
import {
    Server, Smartphone, Building2,
    TrendingUp, Target,
    Bot, Video, Workflow,
    Palette, PenTool,
    Globe, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import NetworkBackground from '../../components/NetworkBackground';
import { servicesData } from '../../data/services'; // Ensure this matches path

// Helper to get icon
const getIcon = (name: string) => {
    switch (name) {
        case 'Server': return <Server className="w-6 h-6" />;
        case 'Smartphone': return <Smartphone className="w-6 h-6" />;
        case 'Building2': return <Building2 className="w-6 h-6" />;
        case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
        case 'Target': return <Target className="w-6 h-6" />;
        case 'Bot': return <Bot className="w-6 h-6" />;
        case 'Video': return <Video className="w-6 h-6" />;
        case 'Palette': return <Palette className="w-6 h-6" />;
        case 'PenTool': return <PenTool className="w-6 h-6" />;
        case 'Globe': return <Globe className="w-6 h-6" />;
        default: return <Server className="w-6 h-6" />;
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function ServicesPage() {

    // Group services by category
    const infra = servicesData.filter(s => s.category === 'infrastructure');
    const growth = servicesData.filter(s => s.category === 'growth');
    const ai = servicesData.filter(s => s.category === 'ai');
    const creative = servicesData.filter(s => s.category === 'creative');

    const sections = [
        { id: 'infra', title: 'الأسس الرقمية والتأسيس التقني', items: infra },
        { id: 'growth', title: 'محركات النمو والانتشار', items: growth },
        { id: 'ai', title: 'العقل المدبر والأتمتة', items: ai },
        { id: 'creative', title: 'البصمة الإبداعية', items: creative },
    ];

    return (
        <main className="min-h-screen bg-corporate-black relative overflow-hidden font-cairo text-right" dir="rtl">
            {/* Background */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <NetworkBackground />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                {/* Header */}
                <header className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                            منظومة سكاليو: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-vivid-violet drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                                حلول متكاملة لهيمنة رقمية
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-ice-silver font-light max-w-3xl mx-auto leading-relaxed">
                            نحن لا نقدم خدمات عابرة، بل نبني أنظمة ذكية تتوسع معك. <br className="hidden md:block" />
                            اختر محرك النمو المناسب لعملك اليوم.
                        </p>
                    </motion.div>
                </header>

                {/* Categories */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col gap-16 mb-32"
                >
                    {sections.map(section => (
                        <div key={section.id}>
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                                <span className="w-1 h-8 bg-electric-cyan rounded-full" />
                                {section.title}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map(service => (
                                    <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
                                        <motion.div
                                            variants={itemVariants}
                                            className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-electric-cyan/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] group relative overflow-hidden flex flex-col"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="relative z-10">
                                                <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center text-electric-cyan mb-6 group-hover:scale-110 transition-transform">
                                                    {getIcon(service.iconName || 'Server')}
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-ice-silver/80 text-sm leading-relaxed mb-6">
                                                    {service.description}
                                                </p>
                                            </div>

                                            <div className="mt-auto relative z-10 flex items-center text-electric-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                تفاصيل الخدمة <ArrowLeft className="w-4 h-4 mr-2" />
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-electric-cyan/10 to-vivid-violet/10 border border-electric-cyan/20 p-12 md:p-24 text-center"
                >
                    <div className="absolute inset-0 bg-corporate-black/80 backdrop-blur-3xl z-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-cyan/20 blur-[150px] rounded-full z-0 pointer-events-none animate-pulse" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-lg">
                            هل تحتاج إلى منظومة مخصصة؟
                        </h2>

                        <a
                            href="https://wa.me/96560905777"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] group"
                        >
                            <span className="relative z-10">تواصل معنا الآن عبر الواتساب</span>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 1.77.766 2.464.766 3.361.64.975-.138 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
