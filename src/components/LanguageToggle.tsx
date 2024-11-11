import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-white/10 hover:bg-white/20 
        rounded-lg font-semibold text-white backdrop-blur-sm transition-all
        border border-white/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
    >
      <motion.span
        key={t('nav.language')}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {t('nav.language')}
      </motion.span>
    </motion.button>
  );
}