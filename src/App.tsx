/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider, useLanguage } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text font-sans selection:bg-brand-gold selection:text-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
