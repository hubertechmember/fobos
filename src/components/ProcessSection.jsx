// src/components/ProcessSection.jsx
import React from 'react';
import { Search, Users, Play, Settings } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Explore Platform',
      description: 'Experience our VR environments and understand the technology capabilities'
    },
    {
      icon: Users,
      title: 'Discuss Collaboration',
      description: 'Share your perspective and explore development possibilities'
    },
    {
      icon: Settings,
      title: 'Plan Implementation',
      description: 'Define the scope and requirements for your specific needs'
    },
    {
      icon: Play,
      title: 'Start Partnership',
      description: 'Begin the collaborative development and testing process'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Simple Process to Get Started
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 w-full h-px bg-gray-200 -translate-y-1/2" />
            
            {/* Steps */}
            <div className="relative grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="absolute top-0 -left-4 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-white rounded-lg p-6 shadow-sm relative">
                    <div className="h-12 w-12 mx-auto rounded-md bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProcessSection;
