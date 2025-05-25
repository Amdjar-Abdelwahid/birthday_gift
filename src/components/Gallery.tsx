import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local images
import img1 from './photos/img1.jpg';
import img2 from './photos/img2.jpg';
import img3 from './photos/img3.jpg';
import img4 from './photos/img4.jpg';
import img5 from './photos/img5.jpg';
import img6 from './photos/img6.jpg';
import img7 from './photos/img7.jpg';
import img8 from './photos/img8.jpg';
import img9 from './photos/img9.jpg';
import img10 from './photos/img10.jpg';

// Local images array
const galleryImages = [
  {
    url: img1,
    caption: 'Mémoire 1'
  },
  {
    url: img2,
    caption: 'Mémoire 2'
  },
  {
    url: img3,
    caption: 'Mémoire 3'
  },
  {
    url: img4,
    caption: 'Mémoire 4'
  },
  {
    url: img5,
    caption: 'Mémoire 5'
  },
  {
    url: img6,
    caption: 'Mémoire 6'
  },
  {
    url: img7,
    caption: 'Mémoire 7'
  },
  {
    url: img8,
    caption: 'Mémoire 8'
  },
  {
    url: img9,
    caption: 'Mémoire 9'
  },
  {
    url: img10,
    caption: 'Mémoire 10'
  }
];

// Animated background elements
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-200 opacity-20"
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

const Gallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-purple-50 to-white" id="gallery">
      <BackgroundElements />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-12 text-purple-600"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Nos Souvenirs
        </motion.h2>
        
        <div className="max-w-6xl mx-auto slideshow px-4 [&_.slick-dots_li_button:before]:text-purple-600 [&_.slick-dots_li_button:before]:text-xs [&_.slick-dots_li.slick-active_button:before]:text-purple-600 [&_.slick-prev:before]:text-purple-600 [&_.slick-next:before]:text-purple-600 [&_.slick-prev:before]:text-2xl [&_.slick-next:before]:text-2xl [&_.slick-prev]:z-10 [&_.slick-next]:z-10 [&_.slick-prev]:left-6 [&_.slick-next]:right-6">
          <Slider {...settings}>
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="outline-none px-4"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative">
                    <img 
                      src={image.url} 
                      alt={`Memory ${index + 1}`} 
                      className="w-full h-[500px] md:h-[700px] object-contain bg-white"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-xl font-semibold text-white">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;