import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingPetals } from './FloatingPetals';

interface EnvelopeProps {
  onComplete: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 800);
    }, 4500);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(30px)' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Deep Cinematic Rose/Sakura Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d131f] via-[#1e293b] to-[#020617]" />
          <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-[#cccccc]/10 blur-[150px] rounded-full opacity-60 pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[#666666]/30 blur-[150px] rounded-full opacity-50 pointer-events-none mix-blend-screen" />

          <FloatingPetals />

          {/* Majestic Glow Behind Envelope */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#666666]/20 rounded-full blur-[100px]"
            animate={isOpened ? { scale: 1.8, opacity: 0.2 } : { scale: 1, opacity: 0.6 }}
            transition={{ duration: 3 }}
          />

          <motion.div
            className="relative w-[340px] h-[240px] sm:w-[580px] sm:h-[400px] perspective-1500"
            initial={{ scale: 0.85, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Envelope Back Base (Premium Sakura Texture) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#99a4bc] to-[#53617e] shadow-[0_50px_100px_rgba(10,20,50,0.6)] rounded-xl border border-[#cccccc]/40 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay opacity-20" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-30" />
              <div className="absolute inset-3 border-[1.5px] border-[#cccccc]/30 rounded-lg pointer-events-none" />
              <div className="absolute inset-4 border border-[#cccccc]/10 rounded-lg pointer-events-none" />
            </div>

            {/* Pull-out Arched Invitation Card - Modern Sri Lankan Design */}
            <motion.div
              className="absolute left-3 right-3 sm:left-5 sm:right-5 top-6 sm:top-8 bottom-2 bg-gradient-to-b from-[#f8f9fb] to-[#eef2f7] shadow-[0_0_50px_rgba(0,0,0,0.2)] rounded-t-[4rem] sm:rounded-t-[6rem] flex flex-col items-center justify-start pt-6 sm:pt-10 text-center z-10 overflow-hidden border-t-[4px] sm:border-t-[6px] border-x-[4px] sm:border-x-[6px] border-[#cccccc]/30"
              initial={{ y: "0%" }}
              animate={isOpened ? { y: "-88%", zIndex: 40, rotate: -1 } : {}}
              transition={{ delay: 1.5, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card Inner Arch Border */}
              <div className="absolute inset-2 border-[1.5px] border-[#cccccc]/60 rounded-t-[3.5rem] sm:rounded-t-[5.5rem] pointer-events-none" />
              <div className="absolute inset-3 border-[1px] border-[#666666]/20 rounded-t-[3.2rem] sm:rounded-t-[5.2rem] pointer-events-none" />

              {/* Kandyan border removed */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={isOpened ? { opacity: 1 } : {}}
                transition={{ delay: 2.8, duration: 1.5 }}
                className="relative z-10 w-full px-4 flex flex-col items-center h-full"
              >
                <div className="w-12 h-12 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center mix-blend-multiply opacity-90 drop-shadow-sm border border-brand-gold/20 rounded-full">
                  <Heart className="w-6 h-6 text-brand-gold-deep" />
                </div>

                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#4a5770] tracking-tight leading-[1.1] mb-2 sm:mb-3 drop-shadow-sm">
                  Dimalka <br />
                  <span className="text-xl sm:text-3xl text-[#cccccc] italic font-bold my-1 block">&</span>
                  Dinindu
                </h2>

                <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#cccccc] to-transparent mx-auto my-3 sm:my-5" />

                <p className="text-[8px] sm:text-[11px] font-sans tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[#5c6b8a] mb-2 sm:mb-3 font-bold leading-none">
                  Request the honor of your presence
                </p>
                <p className="text-base sm:text-2xl font-serif text-[#4a5770] tracking-[0.2em] mt-1 drop-shadow-sm leading-none font-semibold">
                  20 • 08 • 2026
                </p>
              </motion.div>

              {/* Subtle temple mural watermark inside */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#cccccc]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-4 opacity-10 w-full h-16 mix-blend-multiply" />
            </motion.div>

            {/* Envelope Flap (Top) */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[65%] z-30 origin-top pointer-events-none"
              initial={{ rotateX: 0 }}
              animate={isOpened ? { rotateX: 180, zIndex: 0 } : {}}
              transition={{ delay: 0.6, duration: 1.5, ease: [0.45, 0, 0.15, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of Flap */}
              <div
                className="absolute inset-0 drop-shadow-[0_15px_25px_rgba(50,0,10,0.5)]"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-full h-full bg-gradient-to-b from-[#99a4bc] to-[#53617e] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-30" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] mix-blend-overlay opacity-10" />
                  {/* Gold edge trim on flap */}
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-[4px] border-r-[4px] border-[#cccccc] transform rotate-45 translate-y-1/2 scale-150 shadow-[0_0_10px_rgba(160,160,160,0.4)]" />
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-[1px] border-r-[1px] border-[#1e293b]/40 transform rotate-45 translate-y-1/2 scale-150 mt-1 ml-1" />
                </div>
              </div>

              {/* Inside of Flap (Luxury Gold / Pink Lining) */}
              <div
                className="absolute inset-0"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full bg-gradient-to-t from-[#cccccc] to-[#8b6b15] border-t-2 border-[#53617e]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                  {/* Kandyan floral pattern lining */}
                  {/* Kandyan floral pattern lining removed */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] mix-blend-overlay opacity-40" />
                  {/* Inner Trim */}
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-[3px] border-r-[3px] border-[#53617e]/50 transform rotate-45 translate-y-1/2 scale-140" />
                </div>
              </div>
            </motion.div>

            {/* Envelope Front Folds */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-b-xl overflow-hidden">
              {/* Left Fold */}
              <div className="absolute inset-0 drop-shadow-[10px_0_15px_rgba(10,20,50,0.4)] pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-[#666666] to-[#091fa3]/0" style={{ clipPath: 'polygon(0 0, 55% 50%, 0 100%)' }}>
                   <div className="absolute inset-0 bg-[#666666] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-40 w-full h-full" style={{ clipPath: 'polygon(0 0, 55% 50%, 0 100%)' }} />
                </div>
              </div>

              {/* Right Fold */}
              <div className="absolute inset-0 drop-shadow-[-10px_0_15px_rgba(10,20,50,0.4)] pointer-events-none">
                <div className="w-full h-full bg-gradient-to-l from-[#666666] to-[#091fa3]/0" style={{ clipPath: 'polygon(100% 0, 45% 50%, 100% 100%)' }}>
                   <div className="absolute inset-0 bg-[#666666] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-40 w-full h-full" style={{ clipPath: 'polygon(100% 0, 45% 50%, 100% 100%)' }} />
                </div>
              </div>

              {/* Bottom Fold */}
              <div className="absolute inset-0 drop-shadow-[0_-10px_20px_rgba(10,20,50,0.5)] pointer-events-none">
                <div className="w-full h-full bg-gradient-to-t from-[#333333] to-[#53617e]" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }}>
                   <div className="absolute inset-0 bg-[#333333] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-40 w-full h-full" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }} />
                </div>
              </div>
            </div>

            {/* Traditional Ornamental Band/Wrap - Gold Metallic */}
            <motion.div
              className="absolute top-[35%] left-[-2%] w-[104%] h-[20%] bg-gradient-to-r from-[#8a6811] via-[#A0A0A0] to-[#8a6811] z-25 pointer-events-none shadow-[0_10px_30px_rgba(50,0,10,0.5)] border-y-[3px] border-[#fde592] flex items-center justify-center overflow-hidden"
              initial={{ opacity: 1 }}
              animate={isOpened ? { opacity: 0, scale: 1.05 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute inset-0 opacity-40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay opacity-50" />
            </motion.div>

            {/* 3D Cinematic Wax Seal - Deep Rose & Gold */}
            <AnimatePresence>
              {!isOpened && (
                <motion.button
                  onClick={handleOpen}
                  className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center cursor-pointer group pointer-events-auto shadow-[0_20px_40px_rgba(60,0,10,0.7)]"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)' }}
                  transition={{
                    scale: { type: 'spring', stiffness: 150, damping: 15, delay: 1.5 },
                    rotate: { type: 'spring', stiffness: 150, damping: 15, delay: 1.5 },
                    exit: { duration: 0.5, ease: "easeIn" }
                  }}
                >
                  {/* Wax base with steel blue realism */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary-muted via-brand-primary to-brand-primary-deep border border-brand-primary-deep shadow-[inset_0_4px_10px_rgba(70,130,180,0.8),inset_0_-4px_15px_rgba(29,53,87,0.9)]" />

                  {/* Wax ridge ring - Gold infused edge */}
                  <div className="absolute inset-2 sm:inset-3 rounded-full border-[3px] border-[#A0A0A0]/60 shadow-[inset_0_2px_5px_rgba(50,0,10,0.8),0_2px_4px_rgba(160,160,160,0.4)] mix-blend-screen" />

                  {/* Decorative Outer Border Detail for the Seal */}
                  <div className="absolute inset-1 rounded-full border-[1.5px] border-dotted border-[#A0A0A0]/80 pointer-events-none animate-[spin_60s_linear_infinite]" />

                  <div className="relative flex flex-col items-center justify-center translate-y-[-2px]">
                    <span className="text-[#A0A0A0] font-serif text-3xl sm:text-4xl italic tracking-tighter drop-shadow-[0_2px_4px_rgba(50,0,10,0.9)]">
                      D
                    </span>
                    <span className="text-[#A0A0A0]/70 font-serif text-sm sm:text-base mx-0.5 font-bold drop-shadow-[0_2px_4px_rgba(50,0,10,0.9)] my-[-6px]">
                      &
                    </span>
                    <span className="text-[#A0A0A0] font-serif text-3xl sm:text-4xl italic tracking-tighter drop-shadow-[0_2px_4px_rgba(50,0,10,0.9)]">
                      D
                    </span>
                  </div>

                  {/* Realistic Specular Highlight reflecting light */}
                  <div className="absolute top-1 left-2 w-12 h-6 bg-white/30 rounded-full blur-[4px] -rotate-45 pointer-events-none" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Helper Text below envelop */}
          <AnimatePresence>
            {!isOpened && (
              <motion.div
                className="absolute bottom-12 sm:bottom-16 flex flex-col items-center gap-5 z-50 pointer-events-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[#fffdf9] font-serif italic text-2xl sm:text-4xl font-bold tracking-wide text-shadow-xl drop-shadow-[0_8px_16px_rgba(10,20,50,0.8)]">
                    Royal Sri Lankan Invitation
                  </p>
                  <p className="text-[#A0A0A0] font-sans text-[10px] sm:text-xs tracking-[0.5em] uppercase font-bold drop-shadow-md">
                    Break the seal to reveal
                  </p>
                </div>
                <div className="w-[1.5px] h-16 sm:h-20 bg-gradient-to-b from-[#A0A0A0] to-transparent animate-[bounce_2s_infinite] shadow-[0_0_20px_rgba(160,160,160,0.6)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
