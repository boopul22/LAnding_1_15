import React, { useState } from 'react';

const faqs = [
    {
        q: 'How long does an auto accident claim take?',
        a: 'Simple claims can be settled in a few weeks. Disputed liability or injury claims often take 3–6 months or longer depending on the complexity of the case and how quickly the other party responds.'
    },
    {
        q: 'Will I lose my no-claims discount?',
        a: 'If the accident is proven non-fault and the other party\'s insurer pays, your no-claims discount is typically unaffected. If you are found at fault, it may be reduced unless you have no-claims protection in place.'
    },
    {
        q: 'Can I choose my own repair shop?',
        a: 'Yes. It is your right to choose who repairs your vehicle. Your insurer may recommend their preferred network, but you are not required to use it. Independent shops are fully within your rights.'
    },
    {
        q: 'Do I have to pay my deductible?',
        a: 'For at-fault claims, yes — you typically pay your deductible. For non-fault claims, you may still have to pay it upfront and reclaim it later, or we can help you pursue the at-fault party\'s insurer to waive it entirely.'
    },
    {
        q: 'What documents do I need to file a claim?',
        a: "You'll typically need your driver's license, insurance policy number, vehicle registration (VIN), and photos of the damage. A police report number is also very helpful if one was filed at the scene."
    },
];

const timeline = [
    { day: 'Day 1', label: 'Initial Report & Assessment', icon: 'solar:clipboard-text-bold' },
    { day: 'Days 2–5', label: 'Damage Inspection & Temp Vehicle', icon: 'solar:car-bold' },
    { day: 'Weeks 1–3', label: 'Liability Investigation & Repair Auth', icon: 'solar:sort-by-time-bold' },
    { day: 'Weeks 4+', label: 'Repair Completion & Final Settlement', icon: 'solar:wallet-money-bold' },
];

const ClaimsInfo: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">

                {/* What to Do After an Accident */}
                <div className="mb-20 reveal">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-navy-900 tracking-tight mb-4">What to Do After an Accident</h2>
                        <p className="text-slate-500 text-lg font-light">Key actions to take in the hours and days following your accident to protect your claim.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'solar:camera-bold-duotone', title: 'Document Everything', desc: 'Take more photos than you think you need — from multiple angles of all vehicles, damage, road markings, and surroundings.' },
                            { icon: 'solar:users-group-rounded-bold-duotone', title: 'Secure Witness Details', desc: 'Witness statements are crucial. Their independent testimony can be decisive in a liability dispute with the other party.' },
                            { icon: 'solar:dollar-minimalistic-bold-duotone', title: 'Keep All Records', desc: 'Save receipts for every out-of-pocket expense: car rental, medical visits, transport costs. All can be recovered.' },
                            { icon: 'solar:forbid-bold-duotone', title: 'Avoid Discussing Fault', desc: 'Never admit fault or discuss liability at the scene or with the other driver. Any statement can be used against you.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4 text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                    <iconify-icon icon={item.icon} width="26"></iconify-icon>
                                </div>
                                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Estimated Claim Timeline */}
                <div className="mb-20 reveal">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-navy-900 tracking-tight mb-4">Estimated Claim Timeline</h2>
                        <p className="text-slate-500 text-lg font-light">A general guide to how long each stage of your auto claim typically takes.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 relative">
                        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-orange/30 via-brand-orange to-brand-orange/30 z-0"></div>
                        {timeline.map((item, i) => (
                            <div key={i} className="relative z-10 bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm hover:shadow-md transition-all">
                                <div className="w-14 h-14 mx-auto bg-navy-900 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                                    <iconify-icon icon={item.icon} width="26"></iconify-icon>
                                </div>
                                <p className="text-brand-orange font-bold text-sm mb-1">{item.day}</p>
                                <p className="text-navy-900 font-semibold text-sm leading-snug">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="reveal">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-navy-900 tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-500 text-lg font-light">Answers to the most common questions about auto accident claims in the US.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span className="font-semibold text-navy-900 group-hover:text-brand-orange transition-colors pr-4">{faq.q}</span>
                                    <iconify-icon
                                        icon={openFaq === i ? 'solar:alt-arrow-up-bold' : 'solar:alt-arrow-down-bold'}
                                        class="text-brand-orange shrink-0"
                                        width="20"
                                    ></iconify-icon>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-slate-500 leading-relaxed border-t border-slate-100 pt-4 text-sm">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClaimsInfo;
