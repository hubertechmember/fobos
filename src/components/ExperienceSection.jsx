// src/components/ExperienceSection.jsx
import React from "react";
import { FileText, Users, Activity } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import vrExperience from "../assets/images/vr-experience.jpg";

const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = translations.experience[language];

  const icons = {
    0: FileText,
    1: Users,
    2: Activity,
  };

  return (
    <div id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              {t.description}
            </p>
            <div className="mt-12 space-y-10">
              {t.benefits.map((benefit, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={vrExperience}
                alt="VR Platform Interface"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
