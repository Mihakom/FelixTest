import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background Pattern Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/10 via-brand-bg/60 to-brand-bg z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Main Logo */}
          <div className="bg-brand-text p-10 rounded-[2px] mb-10 inline-flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[0.5px] border-black/20 h-48 w-48 lg:h-56 lg:w-56 overflow-hidden">
            <img src="/felixFIN.png" alt="Felix Logo" className="h-full w-full object-contain" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} />
              <h1 className="hidden text-5xl lg:text-7xl tracking-tighter text-black mb-0 font-sans font-bold">FELIX</h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl text-brand-text mb-12 drop-shadow-lg max-w-2xl mx-auto font-serif italic font-normal">
            {t.hero.subtitle}
          </h2>
          
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-brand-gold text-black px-10 py-4 rounded-sm font-bold uppercase tracking-[1px] text-sm transition-all hover:brightness-110 shadow-xl"
          >
            {t.hero.cta}
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-brand-gold opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
