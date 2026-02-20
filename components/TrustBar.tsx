import React from 'react';

const TrustBar: React.FC = () => {
    return (
        <section className="bg-white border-b border-slate-200 py-8 md:py-12 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Free Expert Assistance</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { icon: 'solar:clipboard-text-bold', title: 'Claims Advice', sub: 'Know your full entitlements' },
                        { icon: 'solar:car-bold', title: 'Replacement Vehicle', sub: 'Stay mobile after an accident' },
                        { icon: 'solar:wrench-bold', title: 'Repair Coordination', sub: 'Trusted repair network' },
                        { icon: 'solar:health-bold', title: 'Injury Claim Guidance', sub: 'Protect your medical rights' }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group cursor-default p-2 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="shrink-0 w-12 h-12 bg-navy-50 text-navy-900 rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm">
                                <iconify-icon icon={item.icon} width="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-900 leading-tight">{item.title}</h4>
                                <p className="text-xs text-slate-500 font-medium">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;