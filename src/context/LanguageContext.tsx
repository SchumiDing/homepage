"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations[keyof typeof translations];
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.zh,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');
  useEffect(() => {
    const stored = localStorage.getItem('language') as Language;
    if (stored && translations[stored]) {
      setLanguage(stored);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  const toggleLanguage = () => setLanguage(prev => (prev === 'zh' ? 'en' : 'zh'));
  const value = { language, setLanguage, toggleLanguage, t: translations[language] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
