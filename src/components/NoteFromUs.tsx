import React from 'react';
import { motion } from 'motion/react';

export const NoteFromUs: React.FC = () => {
  return (
    <section aria-label="A note from us" id="note" className="relative py-24 sm:py-36 px-6 overflow-hidden bg-transparent text-[#9E7B22]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(160,160,160,0.35), transparent)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28" style={{ background: "linear-gradient(180deg, rgba(160,160,160,0.05) 0%, transparent 100%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(160,160,160,0.25), transparent)" }} aria-hidden="true" />
      
      {/* Background Texture */}
      <img 
        src="/white_embossed_mandala.png" 
        alt="" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] opacity-[0.15] mix-blend-multiply pointer-events-none" 
      />
      
      <div className="relative mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-3xl sm:text-4xl mb-3" style={{ color: "#B8942A" }}>A Note From Us</p>
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, #A0A0A0cc)" }} />
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#A0A0A0" fillOpacity="0.85" />
            </svg>
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, #A0A0A0cc)" }} />
          </div>
        </motion.div>

        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-12">
          <motion.div 
            className="md:col-span-12 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="leading-none select-none mb-2" aria-hidden="true">
              <span className="font-display font-bold" style={{ fontSize: "clamp(4rem, 14vw, 7rem)", color: "#B8942A", opacity: 0.7, lineHeight: 1 }}>“</span>
            </div>
            <p className="font-display font-bold italic leading-[1.4] px-2 text-center" style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)", color: "rgba(158,123,34, 0.9)", marginTop: "-1rem" }}>
              <span className="block mt-4 mb-4 text-[#B8942A] uppercase tracking-wider font-sans text-sm md:text-base">
                MR. M. NIXON THUSHAR FERNANDO &amp; MRS. U. L. SURANGIKA PERERA<br/>
                together with<br/>
                MR. M. CHANDANA FERNANDO &amp; MRS. ACHALA FERNANDO
              </span>
              <span className="uppercase tracking-wide font-sans text-xs md:text-sm leading-relaxed block mt-6 mb-6">
                Request the honour of the presence of to celebrate the wedding of their children
              </span>
              <span className="font-serif text-3xl md:text-5xl text-[#B8942A] block my-6">
                Deshani &amp; Chinthaka
              </span>
              <span className="uppercase tracking-wide font-sans text-xs md:text-sm leading-relaxed block mt-6 text-[#B8942A]">
                Join us as we celebrate love, laughter and the beginning of a beautiful journey together
              </span>
              <span className="uppercase tracking-widest font-sans text-xs md:text-xs leading-relaxed block mt-6 text-[#B8942A] italic opacity-80">
                "SO THEY ARE NO LONGER TWO, BUT ONE. THEREFORE WHAT GOD HAS JOINED TOGETHER, LET MAN NOT SEPARATE" <br/> – MATTHEW 19:6
              </span>
            </p>
            <div className="mt-8 sm:mt-10">
              <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
                <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, #A0A0A0cc)" }} />
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#A0A0A0" fillOpacity="0.85" />
                </svg>
                <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, #A0A0A0cc)" }} />
              </div>
              <p className="font-serif text-2xl sm:text-3xl" style={{ color: "#B8942A" }}>
                Deshani &amp; Chinthaka
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
