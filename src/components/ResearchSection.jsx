// src/components/ResearchSection.jsx
import React from 'react';
import { BookOpen, Library, Users } from 'lucide-react';

const ResearchSection = () => {
  return (
    <div id="research" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div>
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              Research Background
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              Informed by Scientific Research
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our development is guided by current scientific studies demonstrating 
              the potential of virtual reality in exposure therapy settings.
            </p>
            
            {/* Research Stats Grid */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-2xl font-bold text-gray-900">Growing Field</p>
                <p className="text-gray-600">Active research in VR therapy applications</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-2xl font-bold text-gray-900">Evidence-Based</p>
                <p className="text-gray-600">Development guided by current studies</p>
              </div>
            </div>
          </div>

          {/* Right Column - Research Areas */}
          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <BookOpen className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">Current Research Focus</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Following latest developments in VR applications for therapeutic settings
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Library className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">Academic Collaboration</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Working with experts to ensure evidence-based development approach
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Users className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">Research Opportunities</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Open to collaborative research projects with partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResearchSection;

