// src/components/ResearchSection.jsx
import React from "react";
import { Gauge, Video, Scale, BarChart } from "lucide-react";

const ResearchSection = () => {
  return (
    <div id="research" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SUD Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Our Technology Foundation
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Research-Based VR Platform with SUD Integration
          </p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-500">
              SUD (Subjective Units of Distress) is a recognized therapy scale
              that measures the subjective level of discomfort or anxiety. Users
              rate their stress level on a scale from 0 to 100, where 0
              represents complete calm and 100 indicates maximum discomfort.
            </p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div>
            <p className="text-lg text-gray-500">
              FOBOS combines immersive VR 360° environments with validated SUD
              methodology, creating a system that:
            </p>

            {/* Core Features Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6">
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-xl font-bold text-gray-900">
                  Measures anxiety levels before and after VR exposure
                </p>
                <p className="text-gray-600">
                  Provides objective progress assessment
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-xl font-bold text-gray-900">
                  Adjusts intensity of subsequent sessions
                </p>
                <p className="text-gray-600">Based on collected data</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-xl font-bold text-gray-900">
                  Optimizes exposure pathway
                </p>
                <p className="text-gray-600">Using SUD analysis algorithm</p>
              </div>
            </div>

            {/* Research Quote */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <blockquote className="text-gray-700">
                <p className="text-lg font-medium italic">
                  "Analysis of the total LSAS scale indicates that changing from
                  imagination exposure to virtual reality exposure is no less
                  effective (non-inferiority) than first-choice therapy in the
                  CBT approach."
                </p>
                <footer className="mt-2">
                  <p className="text-sm text-gray-600">
                    — Results from clinical validation study using Liebowitz
                    Social Anxiety Scale (LSAS),
                    <br />
                    <span className="font-medium">
                      Journal of Clinical Psychology Research, 2023
                    </span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Right Column - Technology Details */}
          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Video className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">
                  SUD Measurement System
                </h3>
              </div>
              <p className="mt-4 text-gray-500">
                Algorithm collects data before and after VR exposure, analyzing
                both subjective user feelings and objective behavioral
                indicators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <BarChart className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">
                  Proven Effectiveness
                </h3>
              </div>
              <p className="mt-4 text-gray-500">
                Studies show participants achieved the target exposure level
                (SUD>40), with an average score of 51 post-exposure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Scale className="h-6 w-6 text-teal-500" />
                <h3 className="text-lg font-medium text-gray-900">
                  Intelligent Adaptation
                </h3>
              </div>
              <p className="mt-4 text-gray-500">
                System automatically adjusts difficulty level, recommends
                scenario repetition or progression to the next stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
