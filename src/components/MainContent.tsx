import React, { useState } from 'react';
import { Globe2, Cpu, Users2, CheckCircle2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedText } from './AnimatedText';
import { Hero } from './Hero';
import { ContactModal } from './ContactModal';

export function MainContent() {
  const { t } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Hero />
      {/* Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            <AnimatedText type="fade">{t('services.title')}</AnimatedText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: 'services.web', desc: 'services.webDesc' },
              { icon: Cpu, title: 'services.software', desc: 'services.softwareDesc' },
              { icon: Users2, title: 'services.team', desc: 'services.teamDesc' },
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all cursor-pointer group">
                <service.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-semibold mb-4">
                  <AnimatedText type="fade">{t(service.title)}</AnimatedText>
                </h4>
                <p className="text-gray-300">
                  <AnimatedText type="fade">{t(service.desc)}</AnimatedText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <AnimatedText type="fade">{t('why.title')}</AnimatedText>
              </h3>
              <div className="space-y-4">
                {[
                  'why.point1',
                  'why.point2',
                  'why.point3',
                  'why.point4',
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <AnimatedText type="fade">{t(point)}</AnimatedText>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={`./assets/photo-1553877522-43269d4ea984.webp`}
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">
            <AnimatedText type="fade">{t('cta.title')}</AnimatedText>
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <AnimatedText type="fade">{t('cta.subtitle')}</AnimatedText>
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center mx-auto"
          >
            <MessageSquare className="mr-2" />
            <AnimatedText>{t('cta.contact')}</AnimatedText>
          </button>
        </div>
      </section>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}