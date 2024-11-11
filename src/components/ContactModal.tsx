import React from 'react';
import { X, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedText } from './AnimatedText';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl w-full max-w-lg relative" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">
            <AnimatedText type="fade">{t('contact.title')}</AnimatedText>
          </h3>
          <p className="text-gray-300 mb-6">
            <AnimatedText type="fade">{t('contact.description')}</AnimatedText>
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                <AnimatedText type="fade">{t('contact.name')}</AnimatedText>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                <AnimatedText type="fade">{t('contact.email')}</AnimatedText>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                <AnimatedText type="fade">{t('contact.message')}</AnimatedText>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold 
                transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <AnimatedText>{t('contact.submit')}</AnimatedText>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}