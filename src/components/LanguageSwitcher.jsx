// src/components/LanguageSwitcher.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
