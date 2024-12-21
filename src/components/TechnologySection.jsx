// src/components/TechnologySection.jsx
import React from "react";
import { Monitor, Eye, Compass, Smartphone } from "lucide-react";

const TechnologySection = () => {
  const features = [
    {
      icon: Monitor,
      title: "VR 360° Environment",
      description:
        "Immersive virtual environments specifically designed for exposure in controlled conditions.",
    },
    {
      icon: Smartphone,
      title: "Universal Compatibility",
      description:
        "Support for all VR devices - from professional headsets to accessible solutions like Google Cardboard.",
    },
    {
      icon: Eye,
      title: "Preview Mode",
      description:
        "Intuitive interface enabling easy assessment and selection of appropriate VR scenarios before actual exposure.",
    },
    {
      icon: Compass,
      title: "Simple Controls",
      description:
        "Optimized navigation system ensuring smooth and natural movement in the virtual environment.",
    },
  ];

  return (
    <div id="technology" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Our Technology
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Next-Generation VR Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A foundation for developing and testing VR applications in
            therapeutic settings, accessible on any VR device.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
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
