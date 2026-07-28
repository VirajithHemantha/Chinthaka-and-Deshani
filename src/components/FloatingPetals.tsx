import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Petal {
  id: number;
  x: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  color: string;
  drift: number;
}

export const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = ['#991B1B', '#B91C1C', '#DC2626', '#EF4444', '#7F1D1D'];
    const newPetals = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 15 + 15,
      rotation: Math.random() * 360,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: Math.random() * 40 - 20,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ color: petal.color }}
          initial={{
            x: `${petal.x}vw`,
            y: '-10vh',
            rotate: petal.rotation,
            opacity: 0
          }}
          animate={{
            y: '110vh',
            x: `${petal.x + petal.drift}vw`,
            rotate: petal.rotation + 720,
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear"
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="drop-shadow-sm"
            style={{ filter: 'brightness(1.1) saturate(1.2) drop-shadow(0 0 10px rgba(153, 27, 27, 0.5))' }}
          >
            <path d="M12,2C12,2 10,6 10,10C10,14 12,22 12,22C12,22 14,14 14,10C14,6 12,2 12,2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
