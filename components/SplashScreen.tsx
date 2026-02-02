'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3500); // 3.5s total duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-corporate-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Background Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-electric-cyan/5"
            animate={{
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                filter: ["blur(10px)", "blur(0px)"]
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-6 relative"
            >
               <div className="w-20 h-20 border-2 border-electric-cyan rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.3)]">
                  <Zap className="w-10 h-10 text-electric-cyan" fill="currentColor" />
               </div>
               
               {/* Orbiting Ring */}
               <motion.div 
                 className="absolute inset-[-10px] border border-electric-cyan/30 rounded-full"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               />
            </motion.div>

            {/* Brand Name */}
            <div className="overflow-hidden">
                <motion.h1
                className="text-6xl font-bold font-cairo tracking-tighter text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                SCALYO
                </motion.h1>
            </div>

            {/* Tagline / Loader Line */}
            <motion.div 
                className="h-1 bg-electric-cyan mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            />
            
            <motion.p
                className="mt-4 text-gray-400 font-light tracking-widest text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                GROWTH PARTNERS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
