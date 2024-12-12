// src/components/ConsultationSection.jsx
import React from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const ConsultationSection = () => {
  const { language } = useLanguage();
  const t = translations.consultation[language];

  return (
    <div id="consultation" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-teal-600 rounded-lg shadow-xl overflow-hidden">
          <div className="relative px-6 py-16 sm:px-12 sm:py-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  {t.title}
                </h2>
                <p className="mt-4 text-lg text-teal-100">{t.subtitle}</p>
                <ul className="mt-8 space-y-4">
                  {t.features.map((item, index) => (
                    <li key={index} className="flex items-center text-teal-100">
                      <ChevronRight className="h-5 w-5 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:mt-0">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder={t.form.name}
                    className="block w-full rounded-md border-0 px-4 py-3"
                  />
                  <input
                    type="email"
                    placeholder={t.form.email}
                    className="block w-full rounded-md border-0 px-4 py-3"
                  />
                  <input
                    type="text"
                    placeholder={t.form.organization}
                    className="block w-full rounded-md border-0 px-4 py-3"
                  />
                  <textarea
                    placeholder={t.form.message}
                    rows="4"
                    className="block w-full rounded-md border-0 px-4 py-3"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-teal-700 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    {t.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;
