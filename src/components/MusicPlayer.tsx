import React, { useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  playing: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ playing, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element
    if (!audioRef.current) {
      audioRef.current = new Audio('https://www.chosic.com/wp-content/uploads/2021/04/Happy-Birthday-To-You-Patsy-Biscoe.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    
    // Handle play/pause
    if (playing) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented. User interaction needed to play audio.");
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playing]);
  
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button 
        onClick={onToggle}
        className="music-control bg-pink-500 text-white p-3 rounded-full shadow-lg"
        aria-label={playing ? "Pause music" : "Play music"}
        title={playing ? "Couper la musique" : "Jouer la musique"}
      >
        {playing ? <VolumeX size={24} /> : <Music size={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;