import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: 'solar:danger-triangle-bold-duotone',
            title: 'Secure the Scene',
            desc: 'Ensure everyone is safe. Turn on hazard lights. Call 911 if there are injuries. Do not move vehicles unless they are causing a dangerous obstruction.'
        },
        {
            icon: 'solar:notes-bold-duotone',
            title: 'Exchange Information',
            desc: 'Get the name, address, phone number, vehicle VIN, and insurance details of all other drivers involved in the accident.'
        },
        {
            icon: 'solar:camera-bold-duotone',
            title: 'Gather Evidence',
            desc: 'Take photos of all vehicle damage, road positions, and weather conditions. Collect contact details from any witnesses at the scene.'
        },
        {
            icon: 'solar:phone-bold-duotone',
            title: 'Contact Our Support Team',
            desc: 'Call our free support line before contacting your insurer. We can advise on the best course of action to fully protect your interests.'
        },
        {
            icon: 'solar:clipboard-check-bold-duotone',
            title: 'File the Official Report',
            desc: 'We will notify all relevant parties, complete the full claims registration, and coordinate liability checks on your behalf.'
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 reveal">
                    <h2 className="font-serif text-3xl md:text-4xl text-navy-900 tracking-tight mb-4">How to Make a Claim: Step-by-Step</h2>
                    <p className="text-slate-500 text-lg font-light">Follow these critical steps to ensure your claim is processed efficiently and your rights are fully protected.</p>
                </div>

                <div className="grid md:grid-cols-5 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-slate-200 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
                    </div>

                    {steps.map((step, i) => (
                        <div key={i} className={`relative z-10 text-center group reveal delay-${(i + 1) * 100}`}>
                            <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-orange/20 transition-all duration-300 relative">
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">{i + 1}</div>
                                <iconify-icon icon={step.icon} class="text-navy-900" width="36"></iconify-icon>
                            </div>
                            <h3 className="font-serif text-lg text-navy-900 font-bold mb-3">{step.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;