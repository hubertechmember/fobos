// src/components/Navigation.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/images/logo.svg';

const Navigation = () => {
  const { language } = useLanguage();
  const t = translations.navigation[language];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Fobos Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600">
                {/* Home */}
                Technology
              </a>
              <a href="#technology" className="text-gray-700 hover:text-teal-600">
                {/* Our Services */}
                Features
              </a>
              <a href="#research" className="text-gray-700 hover:text-teal-600">
                {/* VR Experience */}
                Research
              </a>
              <a href="#partnership" className="text-gray-700 hover:text-teal-600">
                {/* Schedule Consultation */}
                Partnership
              </a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600">
                Contact
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;