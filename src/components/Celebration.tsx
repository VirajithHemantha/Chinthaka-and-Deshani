import React from 'react';
import { motion } from 'motion/react';

export const Celebration: React.FC = () => {
  return (
    <section aria-label="Celebration details" id="celebration" className="relative py-20 sm:py-28 px-6 overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40" style={{ background: "linear-gradient(180deg, rgba(160,160,160,0.07) 0%, transparent 100%)" }} aria-hidden="true" />
      
      <div className="relative mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl" style={{ color: "#B8942A", textShadow: "0 0 40px rgba(192,192,192,0.22)" }}>
            Holy Matrimony &amp; Reception
          </h2>
          <div className="flex items-center justify-center mt-4" aria-hidden="true">
            <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none">
              <line x1="0" y1="12" x2="86" y2="12" stroke="#A0A0A0" strokeWidth="0.75" strokeOpacity="0.55" />
              <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#A0A0A0" fillOpacity="0.65" />
              <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#A0A0A0" fillOpacity="0.3" />
              <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#A0A0A0" fillOpacity="0.3" />
              <circle cx="110" cy="12" r="3" fill="#A0A0A0" fillOpacity="0.9" />
              <circle cx="110" cy="12" r="6" fill="none" stroke="#A0A0A0" strokeWidth="0.75" strokeOpacity="0.45" />
              <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#A0A0A0" fillOpacity="0.65" />
              <line x1="134" y1="12" x2="220" y2="12" stroke="#A0A0A0" strokeWidth="0.75" strokeOpacity="0.55" />
            </svg>
          </div>
        </motion.div>

        <div className="max-w-xl mx-auto mt-2 sm:mt-6">
          <motion.div 
            className="relative p-4 sm:p-8 text-center" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-sm sm:text-base font-bold leading-relaxed font-sans uppercase tracking-wider flex flex-col items-center" style={{ color: "#91763A", textShadow: "0 0 20px rgba(255,255,255,1), 0 0 10px rgba(255,255,255,0.9)" }}>
              <p>Saturday, 08th of August 2026</p>
              
              <div className="mt-8 mb-4 w-full h-px bg-gradient-to-r from-transparent via-[#B8942A]/30 to-transparent" />
              
              <p className="text-[#B8942A] text-lg">Holy Matrimony</p>
              <p>8:00 AM</p>
              <p>ST. ANTHONY'S CHURCH, THODUWAWA</p>
              <a 
                href="https://maps.app.goo.gl/Z9xrbGHBBWxAxMg26" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-2 mb-4 px-6 py-2 border border-[#B8942A]/30 text-[#91763A] rounded-full text-[10px] font-extrabold hover:bg-white/5 hover:scale-105 transition-all uppercase tracking-[0.1em]"
                style={{ textShadow: "none" }}
              >
                View map
              </a>
              
              <div className="mt-6 mb-4 w-full h-px bg-gradient-to-r from-transparent via-[#B8942A]/30 to-transparent" />
              
              <p className="text-[#B8942A] text-lg">Reception</p>
              <p>7:00 PM - 11:00 PM</p>
              <p>MOON LIGHT HOTEL, NATHTHANDIYA</p>
              
              <a 
                href="https://maps.app.goo.gl/fB9J2jxdwg4wUE7u8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-6 px-8 py-3 border border-[#B8942A]/50 bg-white/95 text-[#91763A] rounded-full text-xs font-extrabold hover:bg-white hover:scale-105 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)] uppercase tracking-[0.2em]"
                style={{ textShadow: "none" }}
              >
                View map
              </a>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};
