// src/components/FobosLanding.jsx
import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import ExperienceSection from "./ExperienceSection";
import ConsultationSection from "./ConsultationSection";
import Footer from "./Footer";

const FobosLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServicesSection />
      <ExperienceSection />
      <ConsultationSection />
      <Footer />
    </div>
  );
};

export default FobosLanding;
