// src/components/Navigation.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/images/logo.svg"; // Make sure your logo is in this location

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
              className="h-8 w-auto" // Adjust height as needed
            />
          </div>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600">
                {t.home}
              </a>
              <a href="#services" className="text-gray-700 hover:text-teal-600">
                {t.services}
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-teal-600"
              >
                {t.experience}
              </a>
              <a
                href="#consultation"
                className="text-gray-700 hover:text-teal-600"
              >
                {t.consultation}
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
