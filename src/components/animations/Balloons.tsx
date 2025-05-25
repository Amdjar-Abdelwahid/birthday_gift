import React from 'react';
import { motion } from 'framer-motion';

const balloonColors = [
  '#FF69B4', // pink
  '#9370DB', // purple
  '#FFD700', // gold
  '#FF6347', // tomato
  '#87CEFA'  // light blue
];

const Balloons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
        const color = balloonColors[index % balloonColors.length];
        const left = `${10 + (index * 10)}%`;
        const animationDuration = 15 + (index * 2);
        const delay = index * 2;
        
        return (
          <motion.div
            key={index}
            className="absolute bottom-0"
            style={{ left }}
            initial={{ y: '110vh' }}
            animate={{ y: '-20vh' }}
            transition={{
              duration: animationDuration,
              delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          >
            <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C9 0 0 9 0 20C0 31 9 40 20 40C31 40 40 31 40 20C40 9 31 0 20 0Z" fill={color} />
              <path d="M20 40V50" stroke={color} strokeWidth="2" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Balloons;