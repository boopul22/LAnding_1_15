import React from 'react';

const Features: React.FC = () => {
    const features = [
        { icon: 'solar:siren-rounded-bold-duotone', title: 'Immediate Action Required', desc: 'Stop safely, turn on hazard lights, and check for injuries. Call 911 if urgent medical help is needed. Never admit liability at the scene.' },
        { icon: 'solar:camera-bold-duotone', title: 'Evidence Collection', desc: 'Take clear photos of all vehicles, the surrounding area, and note specific locations. Gather witness contact info and record road conditions.' },
        { icon: 'solar:document-add-bold-duotone', title: 'Filing Your Claim', desc: 'Call our team at 1-800-555-0199 with your policy details ready. Provide a factual account and submit your collected evidence.' },
        { icon: 'solar:wrench-bold-duotone', title: 'Vehicle Repair', desc: 'Damage will be assessed by an approved appraiser. You have the right to choose your preferred repair shop or use an authorized facility.' },
        { icon: 'solar:route-bold-duotone', title: 'What Happens Next', desc: 'Insurers will investigate liability. If you are not at fault, we assist in recovering costs. We keep you updated throughout the process.' },
        { icon: 'solar:shield-warning-bold-duotone', title: 'Expert Advice', desc: 'Keep a log of all accident-related expenses. Crucially, do not sign documents from the other party\'s insurer without seeking advice first.' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl text-navy-900 tracking-tight mb-4">Claims Process Guide</h2>
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