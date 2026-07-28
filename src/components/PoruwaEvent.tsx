import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, Heart, Sparkles, MapPin } from 'lucide-react';

export const PoruwaEvent: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-poruwa-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-radial from-poruwa-light/30 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-poruwa-primary/60 to-transparent" />
                <span className="text-poruwa-primary uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                  Day Two
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
                Poruwa & <span className="italic font-bold text-poruwa-primary">Reception</span>
              </h2>

              <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
                A celebration of tradition and love. Join us for a beautiful afternoon ceremony followed by an evening of dining and dancing.
              </p>

              <div className="relative space-y-10 ml-10 sm:ml-12 border-l-[1.5px] border-poruwa-primary/40 pl-10 sm:pl-12 py-4">
                
                {/* Event Location & Date */}
                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-poruwa-primary/30 shadow-sm flex items-center justify-center group-hover:border-poruwa-primary transition-all duration-500">
                    <Calendar className="w-5 h-5 text-poruwa-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500">Thursday, July 23</h4>
                    <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold">Monarch Imperial, Sri Jayawardenepura</p>
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-poruwa-primary rounded-full border border-poruwa-primary shadow-md flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                    <Heart className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500">04:30 PM</h4>
                    <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold">Poruwa Ceremony</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-poruwa-primary/30 shadow-sm flex items-center justify-center group-hover:border-poruwa-primary transition-all duration-500">
                    <Clock className="w-5 h-5 text-poruwa-light" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500">06:00 PM</h4>
                    <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold">Cocktails & Canapés</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-poruwa-primary/30 shadow-sm flex items-center justify-center group-hover:border-poruwa-primary transition-all duration-500">
                    <Clock className="w-5 h-5 text-poruwa-light" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500">07:00 PM</h4>
                    <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold">Reception Begins</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-poruwa-primary/30 shadow-sm flex items-center justify-center group-hover:border-poruwa-primary transition-all duration-500">
                    <Clock className="w-5 h-5 text-poruwa-light" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500">12:00 AM</h4>
                    <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold">After-Party</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 sm:-inset-6 border-[2px] border-poruwa-light/60 rounded-[3rem] -z-10 -translate-x-4 sm:-translate-x-8 translate-y-4 sm:translate-y-8" />
              
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[3rem] overflow-hidden border-[6px] sm:border-[8px] border-white shadow-xl bg-poruwa-bg group flex items-center justify-center">
                <img 
                  src="/WhatsApp Image 2026-06-10 at 01.11.27.jpeg" 
                  alt="Poruwa Ceremony" 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-poruwa-primary/20 to-transparent mix-blend-overlay opacity-60 group-hover:opacity-30 transition-opacity duration-1000" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-12 bg-white/95 backdrop-blur-xl p-4 sm:p-8 shadow-xl rounded-2xl max-w-[200px] sm:max-w-[280px] border border-poruwa-light/30"
              >
                <div className="absolute inset-x-8 -top-px h-[2px] bg-gradient-to-r from-transparent via-poruwa-primary/60 to-transparent" />
                <Sparkles className="w-5 h-5 text-poruwa-primary mb-3" />
                <h4 className="font-display text-xl sm:text-2xl text-stone-800 mb-2">Tradition & Joy</h4>
                <p className="text-stone-500/90 font-serif text-[11px] sm:text-[14px] leading-snug">
                  Honor our heritage and celebrate late into the night.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
