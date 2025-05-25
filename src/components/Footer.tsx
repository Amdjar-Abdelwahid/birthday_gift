import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="gradient-bg text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex justify-center items-center">
          <span>Fait avec</span>
          <Heart className="mx-2 text-red-300 inline" fill="currentColor" />
          <span>pour Mariem</span>
        </div>
        
        <p className="text-sm opacity-80">
          Joyeux Anniversaire 2025! 🎂
        </p>
      </div>
    </footer>
  );
};

export default Footer;