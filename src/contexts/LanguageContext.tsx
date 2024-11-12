import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.language': 'ES',
    'hero.title': 'Transforming Ideas into Digital Reality',
    'hero.subtitle': 'We craft exceptional digital experiences with cutting-edge technology and Mexican innovation',
    'hero.getStarted': 'Get Started',
    'hero.viewWork': 'View Our Work',
    'services.title': 'Our Services',
    'services.web': 'Web Development',
    'services.webDesc': 'Modern, responsive websites built with the latest technologies',
    'services.software': 'Custom Software',
    'services.softwareDesc': 'Tailored solutions to meet your specific business needs',
    'services.team': 'Coming Soon Team Augmentation',
    'services.teamDesc': 'Skilled developers will be ready to join your existing team',
    'why.title': 'Why Choose Mexadevs?',
    'why.point1': 'Expert team with diverse technical backgrounds',
    'why.point2': 'Agile development methodology',
    'why.point3': 'Competitive pricing with premium quality',
    'why.point4': '24/7 support and maintenance',
    'cta.title': 'Ready to Start Your Project?',
    'cta.subtitle': "Let's discuss how we can help bring your vision to life",
    'cta.contact': 'Contact Us',
    'contact.title': 'Get in Touch',
    'contact.description': 'Fill out the form below and we\'ll get back to you as soon as possible.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Enter your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your project',
    'contact.submit': 'Send Message'
  },
  es: {
    'nav.language': 'EN',
    'hero.title': 'Transformando Ideas en Realidad Digital',
    'hero.subtitle': 'Creamos experiencias digitales excepcionales con tecnología de vanguardia e innovación mexicana',
    'hero.getStarted': 'Comenzar',
    'hero.viewWork': 'Ver Proyectos',
    'services.title': 'Nuestros Servicios',
    'services.web': 'Desarrollo Web',
    'services.webDesc': 'Sitios web modernos y responsivos construidos con las últimas tecnologías',
    'services.software': 'Software a Medida',
    'services.softwareDesc': 'Soluciones personalizadas para satisfacer las necesidades específicas de tu negocio',
    'services.team': 'Pornto También Ampliación de Equipos',
    'services.teamDesc': 'Desarrolladores calificados estarán listos para unirse a tu equipo existente',
    'why.title': '¿Por qué elegir Mexadevs?',
    'why.point1': 'Equipo experto con diversos conocimientos técnicos',
    'why.point2': 'Metodología de desarrollo ágil',
    'why.point3': 'Precios competitivos con calidad premium',
    'why.point4': 'Soporte y mantenimiento 24/7',
    'cta.title': '¿Listo para Iniciar tu Proyecto?',
    'cta.subtitle': 'Hablemos sobre cómo podemos hacer realidad tu visión',
    'cta.contact': 'Contáctanos',
    'contact.title': 'Contáctanos',
    'contact.description': 'Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Ingresa tu nombre',
    'contact.email': 'Correo electrónico',
    'contact.emailPlaceholder': 'Ingresa tu correo electrónico',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntanos sobre tu proyecto',
    'contact.submit': 'Enviar Mensaje'
  },
};

const SPANISH_SPEAKING_COUNTRIES = [
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GQ',
  'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'ES', 'UY', 'VE'
];

const detectUserLanguage = async (): Promise<Language> => {
  // First, check browser language settings
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('es')) {
    return 'es';
  }

  try {
    // Try to get user's location using IP geolocation
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (SPANISH_SPEAKING_COUNTRIES.includes(data.country_code)) {
      return 'es';
    }
  } catch (error) {
    console.error('Error detecting location:', error);
  }

  return 'en'; // Default to English if detection fails
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initLanguage = async () => {
      const detectedLang = await detectUserLanguage();
      setLanguage(detectedLang);
      setIsLoading(false);
    };

    initLanguage();
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}