import React, { useEffect } from 'react';

export default function FullCenik() {
  useEffect(() => {
    // Add meta tag to prevent search engines from indexing this hidden view
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const sections = [
    {
      title: "TOPLI NAPITKI / HOT DRINKS",
      items: [
        { name: "KAVA ESPRESSO", price: "€ 1,80" },
        { name: "AMERICANO", price: "€ 2,00" },
        { name: "MACCHIATO", price: "€ 2,00" },
        { name: "KAVA Z MLEKOM", price: "€ 2,50" },
        { name: "CAPPUCCINO", price: "€ 2,90" },
        { name: "KAVA S SMETANO", price: "€ 2,90" },
        { name: "LATTE MACCHIATO", price: "€ 3,50" },
        { name: "CORRETTO", price: "€ 5,00" },
        { name: "KAKAV", price: "€ 3,00" },
        { name: "VROČA ČOKOLADA", price: "€ 4,00" },
        { name: "ČAJ / TEA", price: "€ 2,90" },
        { name: "MED / LIMONA / MLEKO (Dodatki)", price: "€ 0,80" },
        { name: "RASTLINSKI NAPITEK", price: "€ 1,00" },
      ]
    },
    {
      title: "BREZALK. PIJAČE / NON-ALCOHOLIC",
      items: [
        { name: "VODA / STILL WATER 0,5L", price: "€ 2,60" },
        { name: "VODA / STILL WATER 1,0L", price: "€ 5,00" },
        { name: "ALOE VERA 0,5L", price: "€ 4,00" },
        { name: "LEDENI ČAJ / ICE TEA 0,33L", price: "€ 3,50" },
        { name: "JABOLČNI SOK 0,1L", price: "€ 1,50" },
        { name: "SOK (različni okusi) 0,2L", price: "€ 3,20" },
        { name: "ORAKETA ALI CEDEVITA", price: "€ 3,50" },
        { name: "RADENSKA 0,1L", price: "€ 0,70" },
        { name: "RADENSKA 0,5L", price: "€ 3,20" },
        { name: "RADENSKA 1,0L", price: "€ 6,00" },
        { name: "THOMAS HENRY TONIC 0,2L", price: "€ 3,90" },
        { name: "PEPSI / ORA / 7UP 0,25L", price: "€ 3,50" },
        { name: "COCKTA 0,275L", price: "€ 3,50" },
        { name: "RED BULL 0,25L", price: "€ 4,20" },
      ]
    },
    {
      title: "PIVO / BEER",
      items: [
        { name: "TOČENO LAŠKO 0,2L", price: "€ 3,30" },
        { name: "TOČENO LAŠKO 0,3L", price: "€ 3,40" },
        { name: "TOČENO LAŠKO 0,5L", price: "€ 3,90" },
        { name: "LAŠKO 0,5L", price: "€ 3,90" },
        { name: "LAŠKO 0,0% / MALT", price: "€ 3,60" },
        { name: "LAŠKO TEMNO 0,5L", price: "€ 4,20" },
        { name: "UNION 0,5L", price: "€ 3,90" },
        { name: "UNION NEFILTRIRANO 0,5L", price: "€ 4,20" },
        { name: "UNION RADLER (različni okusi)", price: "€ 3,60" },
        { name: "ERDINGER WEIẞBIER 0,5L", price: "€ 5,50" },
        { name: "HEINEKEN 0,33L", price: "€ 4,00" },
        { name: "ESTRELLA BREZ GLUTENA 0,33L", price: "€ 4,00" },
      ]
    },
    {
      title: "CRAFT PIVO / CRAFT BEER",
      items: [
        { name: "ROYAL DUCK / UGLY DUCKLING 0,33L", price: "€ 4,90" },
        { name: "CRAZY DUCK (IPA) 0,33L", price: "€ 4,90" },
        { name: "JUPI / THIRSTY DUCK / IZICA 0,33L", price: "€ 4,90" },
        { name: "ŽEROUC / CURAKER / PEPETOV LOKAUC 0,50L", price: "€ 5,50" },
        { name: "NORD HARD SELTZER (različni) 0,33L", price: "€ 4,30" },
      ]
    },
    {
      title: "VINO / WINE",
      items: [
        { name: "SAUVIGNONASSE 0,1L", price: "€ 2,20" },
        { name: "ŠENTJANŽEVEC 0,1L", price: "€ 2,20" },
        { name: "CHARDONNAY - MALVAZIJA 0,1L", price: "€ 2,90" },
        { name: "ROSÉ QUERCUS 0,1L", price: "€ 3,30" },
        { name: "MERLOT 0,1L", price: "€ 2,20" },
        { name: "MERLOT - CABERNET SAUVIGNON 0,1L", price: "€ 2,90" },
        { name: "PENEČA REBULA 0,1L", price: "€ 3,30" },
        { name: "PENINA ICE EDITION 0,1L", price: "€ 3,30" },
        { name: "PENEČI MUŠKAT 0,1L", price: "€ 3,30" },
      ]
    },
    {
      title: "ŽGANE PIJAČE / SPIRITS (0,03L)",
      items: [
        { name: "VODKA THREE SIXTY", price: "€ 3,90" },
        { name: "VILJAMOVKA RONER", price: "€ 4,50" },
        { name: "ŠAMAR", price: "€ 4,90" },
        { name: "BOROVNIČEVEC", price: "€ 3,50" },
        { name: "TEQUILA ROOSTER ROJO (BIANCO/REPOSADO)", price: "€ 4,20" },
        { name: "DOMAČA ŽGANJA VALTER (sliva, hruška, medeno...)", price: "€ 3,90" },
        { name: "JÄGERMEISTER", price: "€ 4,00" },
        { name: "RUM DOMAČI", price: "€ 3,00" },
        { name: "HENDRICK'S GIN", price: "€ 5,90" },
        { name: "TULLAMORE D.E.W.", price: "€ 5,50" },
        { name: "TALISKER 10YO", price: "€ 8,50" },
      ]
    },
    {
      title: "KOKTAJLI & SPRITZ",
      items: [
        { name: "APEROL SPRITZ", price: "€ 7,50" },
        { name: "CAMPARI SPRITZ / LIMONCELLO SPRITZ", price: "€ 7,50" },
        { name: "HUGO SPRITZ", price: "€ 7,00" },
        { name: "LAPOPSI GIN TONIC", price: "€ 8,90" },
        { name: "THOMAS HENRY MULE (GINGER BEER)", price: "€ 9,50" },
        { name: "THOMAS HENRY PALOMAS", price: "€ 9,50" },
      ]
    },
    {
      title: "BURGERJI / BURGERS",
      items: [
        { name: "GOVEJI BURGER (Medium pečeno)", price: "€ 13,00" },
        { name: "BURGER PO BALKANSKO", price: "€ 12,00" },
        { name: "PIŠČANČJI BURGER", price: "€ 12,50" },
        { name: "VEGETARIJANSKI BURGER", price: "€ 12,50" },
        { name: "VEGANSKI BURGER", price: "€ 13,00" },
      ]
    },
    {
      title: "GLAVNE JEDI / MAIN DISHES",
      items: [
        { name: "OCVRT PIŠČANČJI ZREZEK 240G", price: "€ 13,00" },
        { name: "DOMAČA KLOBASA Z ZENFOM", price: "€ 4,90" },
        { name: "PAR DOMAČIH KLOBAS Z ZENFOM", price: "€ 9,00" },
        { name: "JOTA", price: "€ 8,00" },
        { name: "JOTA Z DOMAČO KLOBASO", price: "€ 11,00" },
      ]
    },
    {
      title: "SOLATE / SALADS",
      items: [
        { name: "MALA SOLATA", price: "€ 4,90" },
        { name: "MALA SOLATA Z LOKALNO SKUTO", price: "€ 7,00" },
        { name: "SOLATA Z OCVRTIM PIŠČANCEM", price: "€ 11,00" },
        { name: "COLESLAW", price: "€ 3,50" },
      ]
    },
    {
      title: "PRILOGE / EXTRAS",
      items: [
        { name: "KROMPIRČEK MALI", price: "€ 3,50" },
        { name: "KROMPIRČEK VELIKI", price: "€ 5,00" },
        { name: "KROMPIRČEK S ČESNOM IN PARMEZANOM", price: "€ 6,90" },
        { name: "KOS KRUHA", price: "€ 1,00" },
        { name: "LEPINJA / BREZGLUTENSKI KRUH", price: "€ 2,50" },
      ]
    },
    {
      title: "SLADICE / SWEETS",
      items: [
        { name: "BREZGLUTENSKI BROWNIE S SLADOLEDOM", price: "€ 6,50" },
        { name: "LAVA TORTICA S SLADOLEDOM", price: "€ 6,50" },
        { name: "DOMAČ BREZGLUTENSKI TIRAMISU", price: "€ 7,00" },
        { name: "DOMAČA PANNACOTTA S PRELIVOM", price: "€ 5,50" },
        { name: "LA POPSI SLADOLED NA PALČKI", price: "€ 3,00" },
        { name: "FWIP TOČEN SLADOLED", price: "€ 3,90" },
      ]
    }
  ];

  return (
    <div className="bg-brand-surface min-h-screen text-brand-text font-sans py-12 px-4 selection:bg-brand-gold selection:text-brand-bg relative">
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-16 pt-8">
          <div className="flex justify-center mb-6">
            <img src="/felixFIN.png" alt="Felix Logo" className="h-24 w-auto object-contain bg-brand-text p-2 rounded-sm" />
          </div>
          <h1 className="text-4xl font-serif italic text-brand-gold uppercase tracking-widest mb-4">
            Cenik / Menu
          </h1>
          <p className="opacity-60 text-sm whitespace-pre-line leading-relaxed max-w-lg mx-auto">
            Vse cene so v evrih. DDV je vključen v ceno.
          </p>
          <a href="#" className="inline-block mt-8 px-5 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-colors rounded-sm text-sm" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>
            Nazaj na glavno stran / Back to home
          </a>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-brand-bg p-8 rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.3)] border-[0.5px] border-white/5">
              <h2 className="text-xl font-bold font-serif text-brand-gold mb-6 pb-2 border-b border-brand-gold-muted/50 tracking-wider">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-baseline group">
                    <span className="text-sm font-medium tracking-wide pr-4 leading-snug group-hover:text-brand-gold transition-colors">{item.name}</span>
                    <span className="relative flex-1 border-b border-white/10 mx-2 border-dotted hidden sm:block"></span>
                    <span className="text-sm font-mono whitespace-nowrap text-brand-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6 pb-12 border-t border-brand-border pt-12">
          <p className="opacity-60 text-sm whitespace-pre-line leading-relaxed max-w-lg mx-auto">
            Seznam alergenov najdete pri točilnem pultu.
            Cenik velja od aprila 2026.
          </p>
          <div className="mt-8 mb-4">
            <p className="font-sans font-bold text-red-500/90 text-sm md:text-md uppercase tracking-widest bg-brand-gold/5 border border-brand-gold p-4 inline-block">Minister za zdravje opozarja: Uživanje alkohola lahko škoduje zdravju!</p>
          </div>
        </div>

      </div>
    </div>
  );
}
