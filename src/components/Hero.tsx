import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ivory/50">

      {/* Background Image with Parallax & Elegant Overlay */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: y1, scale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Garden_viewed_through_stone_archway_202605041339.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Overlay to balance visibility and readability */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Central Content with Highlight Background */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <div className="relative inline-block px-8 py-10 sm:px-16 sm:py-16 bg-white/5 backdrop-blur-[4px] rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <motion.span 
            className="text-[10px] sm:text-xs uppercase tracking-[0.8em] text-gray-900 font-bold mb-6 block drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Save the Date
          </motion.span>
          <h1 className="text-gray-900 text-4xl sm:text-7xl font-display tracking-widest drop-shadow-[0_10px_30px_rgba(0,0,0,1)] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-blue-100">HIRUSHI</span>
            <span className="italic font-bold text-brand-primary-light mx-4 sm:mx-6 drop-shadow-[0_0_15px_rgba(70,130,180,0.5)]">&</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-blue-100">VISHWA</span>
          </h1>
          <motion.div 
            className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary-light to-transparent mx-auto mt-4 mb-8 shadow-[0_0_20px_rgba(70,130,180,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 2, duration: 1 }}
          />
          <motion.p
            className="text-gray-900 font-serif italic text-lg sm:text-xl tracking-[0.2em] drop-shadow-[0_8px_16px_rgba(0,0,0,1)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            22 . 07 . 2026
          </motion.p>
          <motion.span
            className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-gray-900/90 font-extrabold mt-10 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Wennappuwa • Sri Jayawardenepura
          </motion.span>
        </div>
      </motion.div>

      {/* Persistent subtle falling petals in background */}
      <div className="absolute inset-0 z-[5] opacity-60">
        <FloatingPetals />
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.4em] text-blue-100 font-semibold drop-shadow-md">Discover</span>
        <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-brand-primary/60 to-transparent animate-bounce" />
      </motion.div>

    </div>
  );
};
