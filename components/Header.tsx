'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { title: 'الرئيسية', href: '/' },
    { title: 'منهجية النمو', href: '/#methodology' },
    { title: 'خدماتنا', href: '/services' },
    { title: 'شركاء النجاح', href: '/#portfolio' },
    { title: 'تواصل معنا', href: '/contact', isPrimary: true },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on path change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen
                        ? 'bg-corporate-black/60 backdrop-blur-xl border-b border-vivid-violet/20 py-4 shadow-lg'
                        : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">

                    {/* Logo (Right) */}
                    <Link href="/" className="z-[110] relative flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="w-8 h-8 rounded-lg bg-electric-cyan flex items-center justify-center font-black text-black">
                            S
                        </div>
                        <h1 className="text-2xl font-black font-cairo text-white tracking-tighter">
                            سكاليو
                            <span className="text-electric-cyan">.</span>
                        </h1>
                    </Link>

                    {/* Desktop Nav (Left) */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className={`text-sm font-bold transition-all duration-300 ${link.isPrimary
                                        ? 'px-6 py-2 bg-electric-cyan/10 text-electric-cyan rounded-full border border-electric-cyan/20 hover:bg-electric-cyan/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                                        : 'text-ice-silver hover:text-white relative group'
                                    }`}
                            >
                                {link.title}
                                {!link.isPrimary && (
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-cyan transition-all duration-300 group-hover:w-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-[110] text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>

                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {/* Close button inside drawer (optional redundancy as header button acts as toggle, but good for UX) */}

                        <nav className="flex flex-col items-center gap-8 w-full px-6">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-3xl font-black font-cairo transition-colors duration-300 ${link.isPrimary
                                                ? 'px-8 py-3 bg-vivid-violet text-white rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 inline-block mt-4'
                                                : 'text-white hover:text-electric-cyan'
                                            }`}
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Decoration */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-cyan to-transparent opacity-50" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
