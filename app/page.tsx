'use client';

import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/HeroSection";
import GrowthPillars from "@/components/GrowthPillars";
import MethodologySection from "@/components/MethodologySection";
import FeaturedServices from "@/components/FeaturedServices";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AboutSection from "@/components/AboutSection";
import Portfolio from "@/components/Portfolio";
import BackgroundGrid from "@/components/BackgroundGrid";
import { useState } from "react";

export default function Home() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <main className="min-h-screen relative flex flex-col overflow-x-hidden">
      <SplashScreen onFinish={() => setIsSplashComplete(true)} />

      {/* Main Content - rendered but potentially hidden or animated in */}
      <div className={`transition-opacity duration-1000 ${isSplashComplete ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <BackgroundGrid /> {/* Global Background */}
        <HeroSection />
        <AboutSection />
        <GrowthPillars />
        <MethodologySection />
        <FeaturedServices />
        <Portfolio /> {/* New Section */}
        <ContactSection />
        <Footer />
        <WhatsAppFloat />
      </div>
    </main>
  );
}
