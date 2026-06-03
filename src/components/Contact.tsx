import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setFormStatus(t.contact.success);
        form.reset();
        setTimeout(() => setFormStatus(null), 3000);
      } else {
        const errData = await response.json();
        const msg = typeof errData.error === 'string' ? errData.error : (errData.error?.message || "Error sending message.");
        setFormStatus(msg);
        setTimeout(() => setFormStatus(null), 5000);
      }
    } catch (error) {
      setFormStatus("Error sending message.");
      setTimeout(() => setFormStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif italic font-normal text-brand-gold mb-8">{t.contact.title}</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 text-brand-text opacity-80">
                <MapPin className="text-brand-gold shrink-0" size={24} />
                <p className="font-serif italic leading-relaxed text-sm">
                  Trg golobarskih žrtev<br />
                  5230 {t.contact.address}
                </p>
              </div>
              <div className="flex items-start gap-4 text-brand-text opacity-80">
                <Clock className="text-brand-gold shrink-0" size={24} />
                <div className="font-serif italic leading-relaxed text-sm">
                  <strong className="tracking-widest opacity-80 text-[10px] uppercase font-sans not-italic">{t.contact.hoursTitle}</strong><br />
                  {t.contact.hours}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-brand-surface p-8 border border-brand-border shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div>
                <label className="block text-[10px] uppercase tracking-[1px] opacity-60 text-brand-text mb-2" htmlFor="name">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-brand-input-bg border border-brand-border text-white text-sm focus:border-brand-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[1px] opacity-60 text-brand-text mb-2" htmlFor="email">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-brand-input-bg border border-brand-border text-white text-sm focus:border-brand-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[1px] opacity-60 text-brand-text mb-2" htmlFor="message">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-input-bg border border-brand-border text-white text-sm focus:border-brand-gold focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-brand-gold text-black font-bold uppercase tracking-[1px] py-4 w-full mt-2 transition-transform hover:brightness-110"
              >
                {t.contact.send}
              </button>
              
              {formStatus && (
                <p className="text-brand-gold font-serif italic text-center p-3">{formStatus}</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] w-full overflow-hidden bg-brand-surface border border-brand-border p-2"
          >
            {/* Map iframe of Bovec */}
            <iframe
              title="Felix Bovec Location"
              src="https://maps.google.com/maps?q=Felix%20Bar%20%26%20Food,%20Trg%20golobarskih%20%C5%BErtev%2018,%205230%20Bovec,%20Slovenia&t=&z=19&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
