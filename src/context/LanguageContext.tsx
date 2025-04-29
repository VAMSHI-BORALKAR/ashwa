import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { kn } from '../locales/kn';
import { hi } from '../locales/hi';

type Language = 'en' | 'kn' | 'hi';

interface TranslationResources {
  [key: string]: string;
}

interface LanguageContextProps {
  language: Language;
  changeLanguage: (newLang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, TranslationResources> = {
  en,
  kn,
  hi,
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('nammaSathiLanguage');
    if (savedLanguage && ['en', 'kn', 'hi'].includes(savedLanguage)) {
      return savedLanguage as Language;
    }
    return 'en'; // Default to English
  });

  useEffect(() => {
    localStorage.setItem('nammaSathiLanguage', language);
  }, [language]);

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang);
  };

  const t = (key: string): string => {
    const translation = translations[language][key];
    return translation || key; // Fallback to key if translation is missing
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};