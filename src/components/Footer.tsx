import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-surface py-12 border-t border-brand-border text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
         <div className="bg-brand-text p-4 rounded-sm border-[0.5px] border-black/20 mb-6 flex items-center justify-center">
           <img src="/felixFIN.png" alt="Felix" className="h-10 w-auto" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} />
            <span className="hidden font-serif font-black text-xl tracking-tighter text-black">FELIX</span>
         </div>
          
        <p className="text-xs font-serif italic opacity-60">
          &copy; {new Date().getFullYear()} Felix Bar & Food Okrepčevalnica, Bovec.
        </p>
      </div>
    </footer>
  );
}
