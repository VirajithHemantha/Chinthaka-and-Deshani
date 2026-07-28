import React, { useState } from 'react';
import { submitToGoogleSheet } from '../googleSheets';

export const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRSVP = async (status: 'Accepts' | 'Declines') => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      await submitToGoogleSheet('rsvp', { 
        name, 
        status, 
        submittedAt: new Date().toISOString() 
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="rsvp" className="midnight-luxe-rsvp">
      <style dangerouslySetInnerHTML={{__html: `
        .midnight-luxe-rsvp button {
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .midnight-luxe-rsvp button:not(:disabled):first-of-type:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 0 3px rgba(192,192,192,0.28), 0 8px 24px -4px rgba(160,160,160,0.35);
        }
        .midnight-luxe-rsvp button:not(:disabled):last-of-type:hover {
          transform: translateY(-1px);
        }
        .midnight-luxe-rsvp button:focus-visible {
          outline: 2px solid #B8942A;
          outline-offset: 3px;
          border-radius: 9999px;
        }
        .midnight-luxe-rsvp button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}} />
      <section className="py-20 sm:py-28 px-6 bg-transparent text-[#91763A]">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.6em] mb-3 text-[#91763A] font-sans" style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,0.9)" }}>
            Kindly respond
          </p>
          <div className="my-4">
            <div className="flex items-center justify-center" aria-hidden="true">
              <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none" style={{ filter: "drop-shadow(0px 0px 5px rgba(255,255,255,1))" }}>
                <line x1="0" y1="12" x2="86" y2="12" stroke="#B8942A" strokeWidth="0.75" strokeOpacity="0.8" />
                <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#B8942A" fillOpacity="0.8" />
                <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#B8942A" fillOpacity="0.6" />
                <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#B8942A" fillOpacity="0.6" />
                <circle cx="110" cy="12" r="3" fill="#B8942A" fillOpacity="1" />
                <circle cx="110" cy="12" r="6" fill="none" stroke="#B8942A" strokeWidth="0.75" strokeOpacity="0.8" />
                <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#B8942A" fillOpacity="0.8" />
                <line x1="134" y1="12" x2="220" y2="12" stroke="#B8942A" strokeWidth="0.75" strokeOpacity="0.8" />
              </svg>
            </div>
          </div>
          <h2 className="font-serif leading-[1.05]" style={{ fontSize: "clamp(4.5rem, 18vw, 8rem)", color: "#91763A", textShadow: "0 0 40px rgba(255,255,255,1), 0 0 15px rgba(255,255,255,0.9)" }}>
            RSVP
          </h2>
          <div className="my-6 sm:my-8">
            <div className="h-px w-16 mx-auto bg-[#B8942A] shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
          <p className="font-sans text-sm font-bold leading-relaxed mb-10 sm:mb-12 mx-auto max-w-md text-[#91763A] uppercase tracking-widest" style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,0.9)" }}>
            KINDLY RSVP (REGRETS ONLY) BY 01ST OF AUGUST 2026
            <br/><br/>
            <span className="text-[#91763A] font-extrabold">077-0283636</span> (M. NIXON FERNANDO)
          </p>
          <div>
            {submitted ? (
              <div className="text-center p-6 border border-[#B8942A]/30 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl">
                <p className="text-lg font-serif text-[#B8942A] mb-2">Thank you!</p>
                <p className="text-sm font-sans text-[#9E7B22]">Your response has been recorded.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6 items-center w-full max-w-xs mx-auto">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" 
                  className="w-full bg-transparent border-b-2 border-[#B8942A]/60 text-center text-[#91763A] pb-3 font-sans font-bold focus:outline-none focus:border-[#B8942A] transition-colors placeholder:text-[#91763A]/60"
                  style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
                  disabled={isSubmitting}
                />
                {error && <p className="text-red-400 text-xs font-sans mt-[-10px]">{error}</p>}
                <div className="flex flex-col items-center gap-4 w-full mt-2">
                  <button 
                    type="button" 
                    onClick={() => handleRSVP('Accepts')}
                    disabled={isSubmitting}
                    className="px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-75 active:scale-[0.98] cursor-pointer rounded-full w-full max-w-xs font-semibold" 
                    style={{ background: "linear-gradient(135deg, #C0C0C0 0%, #B8942A 100%)", color: "#111111", border: "1px solid #C0C0C0" }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Joyfully Accepts'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleRSVP('Declines')}
                    disabled={isSubmitting}
                    className="px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-75 active:scale-[0.98] cursor-pointer rounded-full w-full max-w-xs font-extrabold" 
                    style={{ background: "transparent", color: "rgba(0,0,0,0.72)", border: "1px solid rgba(160,160,160,0.38)" }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Regretfully Declines'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
