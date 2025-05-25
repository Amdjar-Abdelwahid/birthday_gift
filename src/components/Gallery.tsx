import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images for gallery (replace with actual images)
const sampleImages = [
  {
    url: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Célébrations'
  },
  {
    url: 'https://images.pexels.com/photos/3036953/pexels-photo-3036953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Moments Précieux'
  },
  {
    url: 'https://images.pexels.com/photos/2072175/pexels-photo-2072175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Souvenirs Inoubliables'
  },
  {
    url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Amitiés'
  },
  {
    url: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Joie et Bonheur'
  }
];

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
    <section className="py-16" id="gallery">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-purple-600">Nos Souvenirs</h2>
        
        <div className="max-w-4xl mx-auto slideshow">
          <Slider {...settings}>
            {sampleImages.map((image, index) => (
              <div key={index} className="outline-none px-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image.url} 
                    alt={`Memory ${index + 1}`} 
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="p-4 bg-white text-center">
                    <p className="text-lg font-semibold text-purple-600">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;