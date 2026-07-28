import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-oldmoney-cream/10">
      <div className="w-full bg-white px-6 py-16 flex flex-col items-center relative shadow-md rounded-b-3xl">
        
        {/* Subtle background text or icon */}
        <div className="absolute top-10 right-10 pointer-events-none opacity-5">
          <Heart className="w-32 h-32 text-oldmoney-brown" />
        </div>

        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="font-serif italic text-3xl text-oldmoney-olive font-extrabold font-display leading-tight block">
            Our story
          </span>
          <div className="w-8 h-[1px] bg-oldmoney-taupe/50 mx-auto mt-3" />
        </motion.div>

        {/* Story Text content (classic margins/paddings matching UI) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-4 mb-12"
        >
          <p className="font-serif text-sm leading-[1.8] text-oldmoney-brown/85 font-bold max-w-[280px] sm:max-w-[400px] mx-auto italic">
            "We first met in 2016, in a quiet moment that neither of us could have imagined would become the beginning of everything. It was in church where our paths crossed for the very first time..simple, unexpected, and unforgettable."
          </p>
          <p className="font-serif text-sm leading-[1.8] text-oldmoney-brown/85 font-bold max-w-[280px] sm:max-w-[400px] mx-auto italic mt-4">
            "Ten years later, here we are. A decade of love, growth, and togetherness. We’ve walked through challenges, faced uphill moments, and learned that love is not only about the easy days, but about choosing each other again and again, even when the road wasn’t simple."
          </p>
          <p className="font-serif text-sm leading-[1.8] text-oldmoney-brown/85 font-bold max-w-[280px] sm:max-w-[400px] mx-auto italic mt-4">
            "And now, after all this time, we are here still choosing each other, still growing, and ready to begin this new chapter as one."
          </p>
        </motion.div>

        {/* Polaroid Photos Mockup Stack as pictured in bottom-left profile */}
        <div className="relative w-full max-w-[290px] h-[340px] mt-2 flex justify-center">
          
          {/* Polaroid 1 (Left Tilted - Couple Candid) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
            className="absolute left-1 top-4 bg-white p-2 pb-6 w-[150px] shadow-[5px_10px_20px_rgba(97,75,68,0.12)] border border-oldmoney-cream/50 pointer-events-auto cursor-pointer"
          >
            {/* Paper clip decor on Polaroid */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-8 border-2 border-oldmoney-taupe/40 rounded-full polaroid-clip opacity-90 rotate-12" />
            
            <div className="w-full aspect-square bg-oldmoney-cream overflow-hidden">
              <img 
                src="/WhatsApp Image 2026-06-10 at 01.11.26.jpeg"
                alt="Our first meeting" 
                className="w-full h-full object-cover filter grayscale contrast-[95%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-2 text-center">
              <span className="font-serif text-[10px] tracking-wider text-oldmoney-brown/60 italic font-semibold">
                2016
              </span>
            </div>
          </motion.div>

          {/* Polaroid 2 (Right Overlapped Tilted - Modern couple close lookup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
            className="absolute right-1 bottom-4 bg-white p-2 pb-6 w-[150px] shadow-[8px_12px_25px_rgba(97,75,68,0.15)] border border-oldmoney-cream/50 pointer-events-auto cursor-pointer"
          >
            {/* Elegant tiny piece of gold washi tape */}
            <div className="absolute -top-2 left-6 right-6 h-3 bg-oldmoney-taupe/20 border-b border-oldmoney-taupe/10 -rotate-3" />
            
            <div className="w-full aspect-square bg-oldmoney-cream overflow-hidden">
              <img 
                src="/pre/gallery-5.jpg"
                alt="A decade of love" 
                className="w-full h-full object-cover filter grayscale contrast-[105%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-2 text-center">
              <span className="font-serif text-[10px] tracking-wider text-oldmoney-brown/60 italic font-semibold">
                10 Years Later
              </span>
            </div>
          </motion.div>
          
        </div>

      </div>
    </div>
  );
};
