// src/components/FobosLanding.jsx
import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import TechnologySection from './TechnologySection';
import ResearchSection from './ResearchSection';
import PartnershipSection from './PartnershipSection';
import ProcessSection from './ProcessSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const FobosLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TechnologySection />
      <ResearchSection />
      <PartnershipSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default FobosLanding;