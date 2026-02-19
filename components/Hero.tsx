import React from 'react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-32 relative overflow-hidden bg-slate-50">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#102a43 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 md:w-[500px] md:h-[500px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 md:w-[600px] md:h-[600px] bg-navy-900/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 reveal active text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-orange/20 text-brand-darkOrange text-xs font-semibold tracking-wide uppercase shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
                    </span>
                    Rates dropped for 2023-2025 Models
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy-900 leading-[1.1] tracking-tight font-bold">
                    Stop Overpaying for <br className="hidden lg:block" />
                    <span className="text-brand-orange relative whitespace-nowrap">
                        Car Insurance
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>.
                </h1>
                
                <p className="text-base md:text-xl text-slate-500 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                    Join thousands of drivers who saved an average of <strong>$610/year</strong> by switching. Compare rates from top-rated carriers in just 2 minutes.
                </p>

                {/* Trust Badges Hero */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 pt-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-lg border border-slate-200/50 backdrop-blur-sm">
                        <iconify-icon icon="solar:shield-star-bold" class="text-brand-orange" width="20"></iconify-icon>
                        <span className="text-xs md:text-sm font-semibold text-navy-900">A+ Rated Partners</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-lg border border-slate-200/50 backdrop-blur-sm">
                        <iconify-icon icon="solar:lock-password-bold" class="text-brand-orange" width="20"></iconify-icon>
                        <span className="text-xs md:text-sm font-semibold text-navy-900">256-bit Secure</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5 relative reveal active delay-100 w-full" id="compare">
                <LeadForm />
                
                {/* Mobile-only social proof below form */}
                <div className="mt-4 text-center lg:hidden">
                    <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                        <iconify-icon icon="solar:users-group-rounded-bold" width="14"></iconify-icon>
                        1,240 quotes generated today
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;