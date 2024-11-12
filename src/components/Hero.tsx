import React from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedText } from './AnimatedText';
import { motion, AnimatePresence } from 'framer-motion';

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={`./assets/photo-1451187580459-43490279c0fa.webp`}
          alt="Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="flex items-center justify-center mb-8">
          <Code2 className="w-12 h-12 text-blue-400 mr-2" />
          <h1 className="text-4xl font-bold text-white">Mexadevs</h1>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={t('hero.title')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t('hero.title')}
            </h2>
          </motion.div>
        </AnimatePresence>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          <AnimatedText type="zoom">{t('hero.subtitle')}</AnimatedText>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center transition-all">
            <AnimatedText>{t('hero.getStarted')}</AnimatedText>
            <AnimatedText><ArrowRight className="ml-2 w-5 h-5" /></AnimatedText>
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-all">
            <AnimatedText type="slide">{t('hero.viewWork')}</AnimatedText>
          </button>
        </div>
      </div>
    </header>
  );
}