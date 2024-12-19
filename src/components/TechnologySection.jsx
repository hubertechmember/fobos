// src/components/TechnologySection.jsx
import React from 'react';
import { Monitor, Eye, Compass } from 'lucide-react'; // Zmieniłem ikony na dostępne

const TechnologySection = () => {
  const features = [
    {
      icon: Monitor, // Zmiana z Box na Monitor
      title: "VR Environment",
      description: "Immersive virtual scenarios designed for therapeutic applications with interactive elements and controlled environments."
    },
    {
      icon: Eye,
      title: "Viewing Options",
      description: "Compatible with modern VR headsets, featuring an intuitive preview mode for easy scenario assessment."
    },
    {
      icon: Compass, // Zmiana z Navigation na Compass
      title: "Basic Controls",
      description: "Simple navigation system allowing for straightforward control of the virtual environment and user experience."
    }
  ];

  return (
    <div id="technology" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Our Technology
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Virtual Reality Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A foundation for exploring and developing VR applications in therapeutic settings
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;