import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import WishesSection from './components/WishesSection';
import SurpriseButton from './components/SurpriseButton';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Confetti from './components/animations/Confetti';
import Balloons from './components/animations/Balloons';

const App: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [playingMusic, setPlayingMusic] = useState(false);
  
  // Hide confetti after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background music */}
      <MusicPlayer 
        playing={playingMusic} 
        onToggle={() => setPlayingMusic(!playingMusic)} 
      />
      
      {/* Animations */}
      {showConfetti && <Confetti />}
      <Balloons />
      
      {/* Content */}
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Gallery />
        <VideoGallery />
        <WishesSection />
        
        <div className="my-16 text-center">
          <SurpriseButton />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;