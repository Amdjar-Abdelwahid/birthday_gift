import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X } from 'lucide-react';

// Collection of surprise messages
const surpriseMessages = [
  "Tu es une personne incroyable, Mariem! 💖",
  "Que ta journée soit aussi spéciale que toi! ✨",
  "Un an de plus, un an de bonheur! 🎂",
  "Tu illumines chaque pièce où tu entres! ☀️",
  "Ton amitié est un cadeau précieux! 🎁",
  "Profite de chaque moment de cette journée spéciale! 🥂"
];

const SurpriseButton: React.FC = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleClick = () => {
    // Pick a random message
    const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    setMessage(randomMessage);
    setShowSurprise(true);
  };
  
  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-accent inline-flex items-center"
        onClick={handleClick}
      >
        <Gift className="mr-2" size={20} />
        Une Surprise pour Mariem
      </motion.button>
      
      <AnimatePresence>
        {showSurprise && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <div className="relative bg-white rounded-xl p-8 max-w-md w-full text-center">
              <button
                onClick={() => setShowSurprise(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="mb-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    <Gift size={60} className="text-yellow-500 mx-auto" />
                  </motion.div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-purple-600">Surprise!</h3>
                
                <p className="text-xl mb-6">{message}</p>
                
                <motion.div
                  className="text-pink-500 text-5xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ❤️
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurpriseButton;