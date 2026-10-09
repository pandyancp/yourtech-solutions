import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { Technologies } from './components/Technologies';
import { AboutUs } from './components/AboutUs';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FaqSection } from './components/FaqSection';
import { Contact } from './components/Contact';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { ServiceItem, siteConfig } from './config/siteConfig';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactService, setContactService] = useState<string>(siteConfig.services[0].title);
  const [contactMessage, setContactMessage] = useState<string>('');

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactService(serviceTitle);
    setContactMessage(`Hello ${siteConfig.company.name}, I would like to request a detailed consultation and proposal regarding: ${serviceTitle}.`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickQuote = (serviceTitle: string) => {
    handleSelectServiceForContact(serviceTitle);
  };

  const handlePreFillContact = (service: string, message: string) => {
    setContactService(service);
    setContactMessage(message);
  };

  const handleConsultClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onConsultClick={handleConsultClick} />

        {/* 2. Services We Provide (7 Core Services) */}
        <Services
          onSelectService={handleSelectService}
          onQuickQuote={handleQuickQuote}
        />

        {/* 3. Visual Infrastructure Architecture & Pipeline */}
        <ArchitectureFlow />

        {/* 4. Technologies & Tools */}
        <Technologies />

        {/* 5. About Us & Company Reliability */}
        <AboutUs />

        {/* 6. Projects & Case Studies */}
        <Projects />

        {/* 7. Why Choose Us & Client Trust */}
        <WhyChooseUs />

        {/* 8. Interactive Scope & Quote Estimator */}
        <QuoteCalculator onPreFillContact={handlePreFillContact} />

        {/* 9. FAQs */}
        <FaqSection />

        {/* 10. Contact Us & Consultation */}
        <Contact
          preFilledService={contactService}
          preFilledMessage={contactMessage}
        />
      </main>

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Modal for Service Deep Dive */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
