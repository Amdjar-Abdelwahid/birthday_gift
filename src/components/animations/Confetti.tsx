import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <ReactConfetti
      width={windowDimensions.width}
      height={windowDimensions.height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.05}
      colors={['#FF69B4', '#9370DB', '#FFD700', '#FFA07A', '#87CEFA']}
    />
  );
};

export default Confetti;