import React from 'react';
import { motion } from 'framer-motion';

// Import local videos
import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';

// Videos array
const galleryVideos = [
  {
    url: video1,
    caption: 'Notre premier souvenir en vidéo'
  },
  {
    url: video2,
    caption: 'Un moment spécial capturé'
  }
];

// Animated background elements (similar to Gallery component)
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-pink-200 opacity-20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

const VideoGallery: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-pink-50 to-white" id="videos">
      <BackgroundElements />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-12 text-pink-600"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Nos Vidéos
        </motion.h2>
        
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryVideos.map((video, index) => (
            <motion.div 
              key={index}
              className="outline-none"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative">
                  <video 
                    className="w-full h-[400px] object-cover bg-black"
                    controls
                    preload="metadata"
                    poster={`${video.url}#t=0.1`}
                  >
                    <source src={video.url} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-lg font-semibold text-white">{video.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGallery; 