import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 reveal">
                <h2 className="font-serif text-3xl md:text-4xl text-navy-900 tracking-tight mb-4">Insurance Made Simple</h2>
                <p className="text-slate-500 text-lg font-light">Three easy steps to better coverage and lower monthly payments.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
                </div>

                {/* Steps */}
                <div className="relative z-10 text-center group reveal delay-100">
                    <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-orange/20 transition-all duration-300 relative">
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">1</div>
                        <iconify-icon icon="solar:clipboard-text-bold-duotone" class="text-navy-900" width="36"></iconify-icon>
                    </div>
                    <h3 className="font-serif text-xl text-navy-900 font-bold mb-3">Submit Your Info</h3>
                    <p className="text-slate-500 leading-relaxed">Fill out our secure form. It takes less than 2 minutes and no SSN is required.</p>
                </div>

                <div className="relative z-10 text-center group reveal delay-200">
                    <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-orange/20 transition-all duration-300 relative">
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">2</div>
                        <iconify-icon icon="solar:sort-by-time-bold-duotone" class="text-navy-900" width="36"></iconify-icon>
                    </div>
                    <h3 className="font-serif text-xl text-navy-900 font-bold mb-3">We Match You</h3>
                    <p className="text-slate-500 leading-relaxed">Our AI engine scans 50+ top carriers to find the exact coverage you need.</p>
                </div>

                <div className="relative z-10 text-center group reveal delay-300">
                    <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-orange/20 transition-all duration-300 relative">
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">3</div>
                        <iconify-icon icon="solar:wallet-money-bold-duotone" class="text-navy-900" width="36"></iconify-icon>
                    </div>
                    <h3 className="font-serif text-xl text-navy-900 font-bold mb-3">You Save Money</h3>
                    <p className="text-slate-500 leading-relaxed">Compare your personalized quotes, switch online, and start saving instantly.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HowItWorks;