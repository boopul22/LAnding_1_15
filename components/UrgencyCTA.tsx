import React from 'react';

const UrgencyCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
            <h2 className="font-serif text-2xl md:text-5xl text-white tracking-tight mb-6">Rates change daily. Lock in your lowest rate now.</h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 font-light">Don't let inflation drive up your premium. Check your eligibility for new low-mileage and safe driver discounts today.</p>
            <a href="#compare" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white text-lg font-medium px-8 py-4 rounded-lg shadow-lg shadow-brand-orange/20 transition-all hover:scale-105">
                Start My Free Quote
                <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
            </a>
            <p className="mt-4 text-xs text-slate-500">Takes less than 2 minutes • No SSN required</p>
        </div>
    </section>
  );
};

export default UrgencyCTA;