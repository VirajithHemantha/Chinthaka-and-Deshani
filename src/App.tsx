import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';

import { Countdown } from './components/Countdown';
import { Celebration } from './components/Celebration';
import { NoteFromUs } from './components/NoteFromUs';
import { Timeline } from './components/Timeline';
// Removed Gallery import

import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { IntroVideo } from './components/IntroVideo';

import { HeroContent } from './components/HeroContent';
import { CornerFlowers } from './components/CornerFlowers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminPage } from './components/AdminPage';

function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingDate = new Date('2026-08-08T08:00:00');

  const startMusic = () => {
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      setIsMusicPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  useEffect(() => {
    if (showIntro) return; // Wait until intro is done

    const handleInteraction = () => {
      if (audioRef.current && !isMusicPlaying) {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
        setIsMusicPlaying(true);
      }
      // Remove listeners after first successful interaction
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [isMusicPlaying, showIntro]);

  const handleVideoComplete = () => {
    setShowIntro(false);
    // Try to start music immediately after video ends
    startMusic();
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#A68846] selection:text-[#111111] overflow-x-hidden bg-transparent">
      <FloatingPetals />
      
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/paulyudin-wedding-485932.mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroVideo key="intro" onComplete={handleVideoComplete} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-[#A68846]/30 rounded-full flex items-center justify-center text-[#A68846] hover:bg-[#A68846]/20 transition-all active:scale-90 shadow-lg group"
            >
              <div className="absolute inset-0 rounded-full border border-[#A68846]/40 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>



            <HeroContent />
            <Countdown targetDate={weddingDate} />
            <Celebration />
            <Timeline />

            <NoteFromUs />





            <RSVPForm />

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
