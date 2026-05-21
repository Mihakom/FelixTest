import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../i18n';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const navLinks = [
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <img src="/felixFIN.png" alt="Felix Bar & Food" className="h-12 w-auto object-contain" onError={(e) => {
                // Fallback to text if logo not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} />
              <span className="hidden font-serif font-black text-2xl tracking-tighter text-brand-text">FELIX</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-gold ${
                  isScrolled ? 'text-brand-text' : 'text-brand-text drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex gap-4 items-center">
              {(['sl', 'en', 'it'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`text-[11px] font-semibold uppercase tracking-[2px] transition-colors ${
                    language === lang
                      ? 'text-brand-gold opacity-100'
                      : 'text-brand-text opacity-60 hover:opacity-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
             <div className="flex gap-3 items-center mr-4">
              {(['sl', 'en', 'it'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`text-[11px] font-semibold uppercase tracking-[2px] transition-colors ${
                    language === lang
                      ? 'text-brand-gold opacity-100'
                      : 'text-brand-text opacity-60 hover:opacity-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-brand-text' : 'text-brand-text'}`}
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-surface border-t border-brand-border absolute w-full shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-sm font-medium uppercase tracking-widest text-brand-text border-b border-brand-border/50 hover:bg-brand-bg hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
