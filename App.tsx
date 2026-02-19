import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import UrgencyCTA from './components/UrgencyCTA';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  // Initialize scroll animation hook
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <Testimonials />
        <UrgencyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
