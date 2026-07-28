import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'motion/react';

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = Math.max(0, differenceInDays(targetDate, now));
      const hours = Math.max(0, differenceInHours(targetDate, now) % 24);
      const minutes = Math.max(0, differenceInMinutes(targetDate, now) % 60);
      const seconds = Math.max(0, differenceInSeconds(targetDate, now) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section aria-label="Countdown" id="countdown" className="relative py-20 sm:py-28 px-6 overflow-hidden bg-transparent">

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-10 sm:mb-14" aria-hidden="true">
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

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-3" style={{ color: "#B8942A", textShadow: "rgba(184,148,42, 0.3) 0px 0px 56px" }}>
            Until We Say I Do
          </h2>

          <div className="mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3" aria-hidden="true">
              <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, #A0A0A0cc)" }} />
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#A0A0A0" fillOpacity="0.85" />
              </svg>
              <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, #A0A0A0cc)" }} />
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 blur-[24px]" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(160,160,160,0.11) 0%, transparent 70%)" }} aria-hidden="true" />

            <style dangerouslySetInnerHTML={{
              __html: `
            .countdown-glass-wrapper {
              background: rgba(17,17,17,0.04);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1px solid rgba(160,160,160,0.12);
              border-radius: 0.75rem;
              padding: 1.75rem 1.5rem;
              overflow: hidden;
            }
            @media (max-width: 639px) {
              .countdown-glass-wrapper > div { gap: 1rem !important; }
              .countdown-glass-wrapper > div > div { gap: 0.875rem !important; }
              .countdown-glass-wrapper svg { margin-left: -0.375rem !important; margin-right: -0.375rem !important; }
            }
            @media (min-width: 640px) {
              .countdown-glass-wrapper {
                background: transparent;
                backdrop-filter: none;
                -webkit-backdrop-filter: none;
                border: none;
                border-radius: 0;
                padding: 0;
                overflow: visible;
              }
            }
          `}} />

            <div className="relative z-10 countdown-glass-wrapper">
              <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-14">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index, arr) => (
                  <React.Fragment key={item.label}>
                    <div className="flex items-center gap-8 sm:gap-12 md:gap-14">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none" style={{ color: "#B8942A", fontVariantNumeric: "tabular-nums", textShadow: "rgba(184,148,42, 0.28) 0px 0px 40px" }}>
                          {String(item.value).padStart(2, '0')}
                        </span>
                        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(160,160,160, 0.733), transparent)" }} />
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.38em] font-sans" style={{ color: "rgba(184,148,42, 0.8)" }}>
                          {item.label}
                        </span>
                      </div>
                      {index < arr.length - 1 && (
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true" className="-mx-3 sm:-mx-5 md:-mx-6 shrink-0 opacity-45">
                          <polygon points="3.5,0 7,3.5 3.5,7 0,3.5" fill="#A0A0A0" />
                        </svg>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 sm:mt-14" aria-hidden="true">
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
      </div>
    </section>
  );
};
