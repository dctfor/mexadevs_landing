import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <MainContent />
      <Footer />
    </LanguageProvider>
  );
}

export default App;