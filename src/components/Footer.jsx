// src/components/Footer.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations.footer[language];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>{t.rights}</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              {t.terms}
            </a>
            <a href="#" className="hover:text-gray-300">
              {t.privacy}
            </a>
            <a href="#" className="hover:text-gray-300">
              {t.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
