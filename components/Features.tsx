import React from 'react';

const Features: React.FC = () => {
    const features = [
        { icon: 'solar:bolt-bold-duotone', title: 'Fast Response', desc: 'No waiting days. Geico representatives are available 24/7 to help you start your claim immediately.' },
        { icon: 'solar:smartphone-bold-duotone', title: 'Mobile App Tracking', desc: 'Track the status of your claim instantly from your phone using the Geico Mobile app.' },
        { icon: 'solar:wrench-bold-duotone', title: 'Guaranteed Repairs', desc: 'Repairs are guaranteed for as long as you own your car at Geico\'s Auto Repair Xpress® partnered shops.' },
        { icon: 'solar:car-bold-duotone', title: 'Rental Coverage', desc: 'If your policy includes Enterprise rental coverage, Geico can set up your reservation directly.' },
        { icon: 'solar:clipboard-check-bold-duotone', title: 'Easy Process', desc: 'Reporting a claim is simple, convenient, and can often be completed in just a few minutes.' },
        { icon: 'solar:headset-mic-bold-duotone', title: 'Dedicated Support', desc: 'Questions about the process? Our dedicated claims team is here to help you navigate your options.' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl text-navy-900 tracking-tight mb-4">Why File With Geico</h2>
                    <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-1 transition-all duration-300 group reveal ${index % 3 === 0 ? '' : index % 3 === 1 ? 'delay-75' : 'delay-150'}`}
                        >
                            <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                                <iconify-icon icon={item.icon} width="28"></iconify-icon>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;