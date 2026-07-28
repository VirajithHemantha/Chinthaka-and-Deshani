import React from 'react';
import { motion } from 'motion/react';

interface CornerFlowersProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'all';
  opacity?: number;
  scale?: number;
}

export const CornerFlowers: React.FC<CornerFlowersProps> = ({
  position = 'all',
  opacity = 0.9,
  scale = 1
}) => {
  const corners = {
    'top-left': 'top-0 left-0 rotate-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  const renderCorner = (pos: keyof typeof corners) => (
    <motion.div
      key={pos}
      initial={{ opacity: 0, scale: scale * 0.8 }}
      whileInView={{ opacity: opacity, scale: scale }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`absolute ${corners[pos]} w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 pointer-events-none z-30 overflow-hidden`}
    >
      {/* Floral image removed */}
    </motion.div>
  );

  return (
    <>
      {position === 'all' ? (
        Object.keys(corners).map((key) => renderCorner(key as keyof typeof corners))
      ) : (
        renderCorner(position)
      )}
    </>
  );
};
