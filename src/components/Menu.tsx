import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

const MenuItem = ({ title, description }: { title: string, description: string }) => (
  <div className="mb-6 border-b border-brand-border pb-5 last:border-0">
    <span className="font-bold text-sm block mb-1">{title}</span>
    <span className="text-xs opacity-60 font-serif italic block">{description}</span>
  </div>
);

export default function Menu() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="py-24 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif italic font-normal text-brand-gold mb-6 inline-block"
          >
            {t.menu.title}
          </motion.h2>
          <div className="w-16 h-[1px] bg-brand-gold-muted mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif italic text-brand-gold mb-6 border-b border-brand-gold-muted pb-2">
              {t.menu.burgers}
            </h3>
            <MenuItem title={t.menu.beefBurger} description={t.menu.beefBurgerDesc} />
            <MenuItem title={t.menu.balkanBurger} description={t.menu.balkanBurgerDesc} />
            <MenuItem title={t.menu.chickenBurger} description={t.menu.chickenBurgerDesc} />
            <MenuItem title={t.menu.vegBurger} description={t.menu.vegBurgerDesc} />
            <MenuItem title={t.menu.veganBurger} description={t.menu.veganBurgerDesc} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-xl font-serif italic text-brand-gold mb-6 border-b border-brand-gold-muted pb-2">
                {t.menu.localFood}
              </h3>
              <MenuItem title={t.menu.friedChicken} description={t.menu.friedChickenDesc} />
              <MenuItem title={t.menu.sausage} description={t.menu.sausageDesc} />
              <MenuItem title={t.menu.jota} description={t.menu.jotaDesc} />
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-serif italic text-brand-gold mb-6 border-b border-brand-gold-muted pb-2">
                {t.menu.salads}
              </h3>
              <MenuItem title={t.menu.saladSmall} description={t.menu.saladSmallDesc} />
              <MenuItem title={t.menu.saladLocal} description={t.menu.saladLocalDesc} />
              <MenuItem title={t.menu.saladChicken} description={t.menu.saladChickenDesc} />
              <MenuItem title={t.menu.coleslaw} description={t.menu.coleslawDesc} />
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-serif italic text-brand-gold mb-6 border-b border-brand-gold-muted pb-2">
                {t.menu.drinksCategory}
              </h3>
              <MenuItem title={t.menu.drinks} description={t.menu.drinksDesc} />
            </div>
          </motion.div>

        </div>

        {/* To-Go Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-brand-gold/10 border border-brand-gold p-6 text-center rounded-sm flex flex-col items-center justify-center gap-4"
        >
          <div className="flex items-center gap-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag text-brand-gold"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
             <p className="font-serif italic text-brand-gold md:text-lg">{t.menu.toGo}</p>
          </div>
        </motion.div>

        {/* Extras Bottom Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-surface p-10 border border-brand-border rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <h3 className="text-xl font-serif italic text-center text-brand-gold mb-8 border-b border-brand-gold-muted pb-4">
            {t.menu.extras} & Toppings
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center text-sm">
            <div>
              <h4 className="font-bold text-brand-text mb-2 tracking-[1px] uppercase text-[11px]">{t.menu.burgerToppings}</h4>
              <p className="text-brand-text opacity-60 font-serif italic text-xs leading-loose">{t.menu.burgerToppingsDesc}</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-text mb-2 tracking-[1px] uppercase text-[11px]">Extras</h4>
              <p className="text-brand-text opacity-60 font-serif italic text-xs leading-loose">{t.menu.extrasDocs}</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-text mb-2 tracking-[1px] uppercase text-[11px]">Sauces</h4>
              <p className="text-brand-text opacity-60 font-serif italic text-xs leading-loose">{t.menu.saucesDocs}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
