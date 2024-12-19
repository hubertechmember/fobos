// src/components/ResearchSection.jsx
import React from 'react';
import { Gauge, Video, Scale } from 'lucide-react'; // Zmieniłem ikony na bardziej odpowiednie

const ResearchSection = () => {
  return (
    <div id="research" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div>
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              Our Technology Foundation
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              Research-Based VR Platform
            </p>
            <p className="mt-4 text-lg text-gray-500">
              FOBOS combines immersive 360° VR environments with validated 
              therapeutic assessment methods to create controlled exposure scenarios.
            </p>
            
            {/* Core Features Grid */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-2xl font-bold text-gray-900">360° VR Content</p>
                <p className="text-gray-600">Ready-to-use exposure environments</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-2xl font-bold text-gray-900">SUD Integration</p>
                <p className="text-gray-600">Validated distress measurement</p>
              </div>
            </div>
          </div>

          {/* Right Column - Technology Areas */}
          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Video className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">VR Exposure Library</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Collection of immersive 360° scenarios designed for various exposure therapy applications
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Gauge className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">SUD Measurement System</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Integrated Subjective Units of Distress (SUD) scale for real-time assessment during exposure sessions
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Scale className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">Progress Monitoring</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Systematic tracking of exposure intensity and patient responses through SUD measurements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;