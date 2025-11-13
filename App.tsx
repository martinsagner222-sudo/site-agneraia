
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import ArchitectureSection from './components/ArchitectureSection';
import DemoSection from './components/DemoSection';
import ModulesSection from './components/ModulesSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import ResultsSection from './components/ResultsSection';
import SecuritySection from './components/SecuritySection';
import ScaleSection from './components/ScaleSection';
import CTASection from './components/CTASection';
import CasesSection from './components/CasesSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen antialiased overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(10,132,255,0.1)_0%,_rgba(10,132,255,0)_25%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(0,225,255,0.1)_0%,_rgba(0,225,255,0)_25%)]"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <ArchitectureSection />
          <DemoSection />
          <ModulesSection />
          <DifferentiatorsSection />
          <ResultsSection />
          <SecuritySection />
          <ScaleSection />
          <CasesSection />
          <TestimonialsSection />
          <GuaranteeSection />
          <ContactSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
