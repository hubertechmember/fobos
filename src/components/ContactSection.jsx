// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Let's Discuss VR Technology in Your Practice
          </h2>
          
          <form className="mt-12 grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization Name
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                className="mt-1 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 rounded-md border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Contact Person
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 rounded-md border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                name="role"
                id="role"
                className="mt-1 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 rounded-md border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 rounded-md border-gray-300"
                placeholder="Tell us about your interests and questions"
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Start Discussion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;