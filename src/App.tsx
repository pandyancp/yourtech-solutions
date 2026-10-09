import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandMarquee } from './components/BrandMarquee';
import { WorkflowStats } from './components/WorkflowStats';
import { Services } from './components/Services';
import { FeaturesBento } from './components/FeaturesBento';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { Technologies } from './components/Technologies';
import { PricingScope } from './components/PricingScope';
import { AboutUs } from './components/AboutUs';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FaqSection } from './components/FaqSection';
import { Contact } from './components/Contact';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { ServiceItem, siteConfig } from './config/siteConfig';

export const AppContent: React.FC = () => {
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
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-500 selection:text-white transition-colors duration-500">
      {/* 1. Floating Sticky Island Header with Theme Selector */}
      <Header />

      {/* Main Content Sections (Intellio Model Layout) */}
      <main className="flex-grow">
        {/* 2. Hero Section with Live Telemetry & Console Card */}
        <Hero onConsultClick={handleConsultClick} />

        {/* 3. Sliding Brand & Technology Partner Marquee */}
        <BrandMarquee />

        {/* 4. Verified KPI & Workflow Metrics Counter */}
        <WorkflowStats />

        {/* 5. Services We Provide (7 Core Engineering Services) */}
        <Services
          onSelectService={handleSelectService}
          onQuickQuote={handleQuickQuote}
        />

        {/* 6. Capabilities Bento Grid (Intellio Style) */}
        <FeaturesBento />

        {/* 7. Visual Infrastructure Architecture & CI/CD Pipeline */}
        <ArchitectureFlow />

        {/* 8. Polyglot Technologies, Frameworks & Cloud Stacks */}
        <Technologies />

        {/* 9. Transparent Scope & Pricing Packages */}
        <PricingScope onSelectPlan={handlePreFillContact} />

        {/* 10. Featured Case Studies & Production Deployments */}
        <Projects />

        {/* 11. About Us & Leadership Engineering Team */}
        <AboutUs />

        {/* 12. Why Choose Us & Enterprise Guarantees */}
        <WhyChooseUs />

        {/* 13. Dynamic Scope & Cost Estimator */}
        <QuoteCalculator onPreFillContact={handlePreFillContact} />

        {/* 14. Frequently Asked Questions */}
        <FaqSection />

        {/* 15. Simplified 5-Field Contact & Consultation Form (Connected to Backend) */}
        <Contact
          preFilledService={contactService}
          preFilledMessage={contactMessage}
        />
      </main>

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <FloatingActions />

      {/* Deep-Dive Service Specification Modal */}
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

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
