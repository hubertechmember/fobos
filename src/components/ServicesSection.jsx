// src/components/ServicesSection.jsx
import React from "react";
import { Shield, Brain, BarChart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations.services[language];

  const icons = {
    0: Shield,
    1: Brain,
    2: BarChart,
  };

  return (
    <div id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
