// src/components/PartnershipSection.jsx
import React from 'react';
import { ArrowRight, Code, Settings, LineChart } from 'lucide-react';

const PartnershipSection = () => {
  return (
    <div id="partnership" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Partnership Opportunity
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Us in Developing VR Applications
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Collaborate with us to shape the future of VR technology in therapeutic settings
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What We Offer */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">What We Offer</h3>
            <ul className="space-y-4">
              {[
                'Access to our VR platform',
                'Technical support and guidance',
                'Collaborative development approach',
                'Regular platform updates'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-teal-500 mr-4" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We're Looking For */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">What We're Looking For</h3>
            <ul className="space-y-4">
              {[
                'Clinical expertise and feedback',
                'Real-world testing environment',
                'Input on practical applications',
                'Long-term partnership commitment'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-teal-500 mr-4" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: 'Technology Access',
              description: 'Early access to our VR development platform and features'
            },
            {
              icon: Settings,
              title: 'Custom Development',
              description: 'Opportunity to influence platform development direction'
            },
            {
              icon: LineChart,
              title: 'Growth Potential',
              description: 'Be part of an emerging technology in therapeutic applications'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-12 w-12 rounded-md bg-teal-500 text-white flex items-center justify-center">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PartnershipSection;

