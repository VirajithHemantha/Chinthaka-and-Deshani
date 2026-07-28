import React from 'react';
import { motion } from 'motion/react';
import { Heart, Music, Utensils, PartyPopper, Camera, Car, Pen } from 'lucide-react';

const events = [
  { time: '08:00 AM', title: 'Holy Matrimony', icon: Heart },
  { time: '07:00 PM', title: 'Evening Celebration Commences', icon: PartyPopper },
  { time: '11:00 PM', title: 'Farewell & Grand Send-off', icon: Car },
];

export const Timeline: React.FC = () => {
  return (
    <section aria-label="Wedding Timeline" id="timeline" className="relative min-h-[100dvh] w-full flex items-center justify-center py-12 px-4 sm:px-6 bg-transparent">
      
      {/* Soft gradient overlay to gently soften the background behind the timeline without a hard box */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none" />

      <div className="w-full max-w-3xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#91763A] tracking-tight" style={{ textShadow: "0 2px 10px rgba(255,255,255,0.9)" }}>Timeline</h2>
          <div className="flex items-center justify-center mt-3 opacity-70" aria-hidden="true">
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#A68846]" />
            <svg width="7" height="7" viewBox="0 0 9 9" fill="none" className="mx-3">
              <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#A68846" fillOpacity="0.85" />
            </svg>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#A68846]" />
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#A68846]/40 to-transparent" />

          <div className="space-y-5 sm:space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center w-full gap-2 sm:gap-6 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Time */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'text-right' : 'text-left'} pt-1 md:pt-0`}>
                  <span className="text-xl sm:text-2xl font-serif text-[#91763A] italic font-semibold" style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,0.9)" }}>{event.time}</span>
                </div>

                {/* Icon Node */}
                <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#A68846]/40 flex items-center justify-center shadow-md">
                  <event.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#A68846]" />
                </div>

                {/* Content */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'text-left' : 'text-right'} pb-2 md:pb-0`}>
                  <h4 className="text-base sm:text-lg font-serif text-[#876A2E] font-medium leading-tight" style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,0.9)" }}>{event.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
