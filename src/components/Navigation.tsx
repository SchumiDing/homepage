'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  const { t, toggleLanguage } = useLanguage();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/30 backdrop-blur-md border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SCHUMI RUIYI DING
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Object.entries(t.navigation)
                .filter(([key]) => key !== 'languageToggle')
                .map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                  >
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
              >
                {t.navigation.languageToggle}
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
