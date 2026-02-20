import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ClaimsInfo from './components/ClaimsInfo';
import UrgencyCTA from './components/UrgencyCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsConditions from './pages/TermsConditions';
import Complaints from './pages/Complaints';
import BottomPopup from './components/BottomPopup';
import { useScrollReveal } from './hooks/useScrollReveal';

const HomePage: React.FC = () => {
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
        <ClaimsInfo />
        <UrgencyCTA />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BottomPopup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/complaints" element={<Complaints />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
