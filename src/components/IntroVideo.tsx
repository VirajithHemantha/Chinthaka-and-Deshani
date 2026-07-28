import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startExperience = () => {
    setHasStarted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error(e));
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src="/opning.mp4"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}
        playsInline
        onEnded={onComplete}
      />
      
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute inset-0 flex items-center justify-center bg-[#111111] z-10"
          >
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: "radial-gradient(circle at center, #A68846 0%, transparent 70%)" }} />
            <div className="relative z-10 text-center flex flex-col items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#A68846] uppercase tracking-[0.2em] mb-10" style={{ textShadow: "0 0 20px rgba(166,136,70,0.5)" }}>
                Deshani & Chinthaka
              </h1>
              <button
                onClick={startExperience}
                className="px-10 py-4 bg-transparent border border-[#A68846] text-[#A68846] rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#A68846]/10 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(166,136,70,0.3)]"
              >
                Open Invitation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasStarted && (
        <button 
          onClick={onComplete}
          className="absolute top-8 right-8 z-20 px-6 py-2 border border-white/30 text-white/70 hover:text-white hover:bg-white/10 rounded-full uppercase tracking-widest text-xs transition-colors"
        >
          Skip
        </button>
      )}
    </div>
  );
};
