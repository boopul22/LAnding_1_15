import React from 'react';

const UrgencyCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
        <h2 className="font-serif text-2xl md:text-5xl text-white tracking-tight mb-6">Need Immediate Help?</h2>
        <p className="text-slate-400 text-base md:text-lg mb-8 font-light">Our team is ready to assist US drivers 24/7 — from the moment of the accident all the way to the final settlement.</p>
        <a href="#compare" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white text-lg font-medium px-8 py-4 rounded-lg shadow-lg shadow-brand-orange/20 transition-all hover:scale-105">
          Get Free Claim Guidance
          <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
        </a>
        <p className="mt-4 text-xs text-slate-500">No obligation · 100% free · Available around the clock</p>
      </div>
    </section>
  );
};

export default UrgencyCTA;