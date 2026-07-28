import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer aria-label="Footer" className="relative py-20 sm:py-28 px-6 text-center overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ background: "radial-gradient(ellipse 80% 55% at 50% 0%, #C0C0C0, #A0A0A0 30%, transparent 65%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute rounded-full" aria-hidden="true" style={{ width: "2px", height: "2px", top: "18%", left: "12%", background: "rgb(192,192,192)", boxShadow: "rgb(192,192,192) 0px 0px 6px", transform: "scale(1.10867)" }} />
      <div className="pointer-events-none absolute rounded-full" aria-hidden="true" style={{ width: "1.5px", height: "1.5px", top: "62%", left: "88%", background: "rgb(192,192,192)", boxShadow: "rgb(192,192,192) 0px 0px 4.5px", transform: "scale(0.503558)" }} />
      <div className="pointer-events-none absolute rounded-full" aria-hidden="true" style={{ width: "2.5px", height: "2.5px", top: "34%", left: "73%", background: "rgb(192,192,192)", boxShadow: "rgb(192,192,192) 0px 0px 7.5px", transform: "scale(0.677318)" }} />
      <div className="pointer-events-none absolute rounded-full" aria-hidden="true" style={{ width: "1.5px", height: "1.5px", top: "77%", left: "22%", background: "rgb(192,192,192)", boxShadow: "rgb(192,192,192) 0px 0px 4.5px", transform: "scale(0.791541)" }} />
      <div className="pointer-events-none absolute rounded-full" aria-hidden="true" style={{ width: "1px", height: "1px", top: "45%", left: "50%", background: "rgb(192,192,192)", boxShadow: "rgb(192,192,192) 0px 0px 3px", transform: "scale(0.520101)" }} />
      
      <div className="relative mx-auto max-w-lg">
        <div className="mb-7">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, #A0A0A0cc)" }} />
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#A0A0A0" fillOpacity="0.85" />
            </svg>
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, #A0A0A0cc)" }} />
          </div>
        </div>
        
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 text-gray-900" style={{ textShadow: "rgba(0,0,0, 0.1) 0px 0px 48px" }}>
          With Love, Until Then
        </h2>
        <p className="font-sans text-[11px] font-bold tracking-[0.35em] uppercase mb-7 text-gray-900/30">
          08/08/2026
        </p>
        
        <div>
          <div className="flex items-center justify-center" aria-hidden="true">
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
        

      </div>
    </footer>
  );
};
