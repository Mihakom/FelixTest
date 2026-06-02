import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

// Import images directly so Vite processes them properly
import imgBurger2 from '../assets/images/burger-2.jpg';
import imgFood1 from '../assets/images/food-1.jpg';
import imgTerrace from '../assets/images/terrace.jpg';
import imgExterior from '../assets/images/exterior.jpg';
import imgBurger1 from '../assets/images/burger-1.jpg';
import imgWedges from '../assets/images/wedges.jpg';

const images = [
  imgBurger2, // Dva burgerja
  imgFood1, // Pohano in krompirček
  imgTerrace, // Terasa
  imgExterior, // Zunanjost
  imgBurger1, // Burger od blizu
  imgWedges  // Krompirček s sirom
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif italic font-normal text-brand-gold mb-6"
          >
            {t.gallery.title}
          </motion.h2>
          <div className="w-16 h-[1px] bg-brand-gold-muted mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-brand-border p-[1px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden bg-brand-bg group"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
