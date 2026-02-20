import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 reveal">
                    <span className="text-brand-orange font-bold tracking-wider uppercase text-xs mb-2 block">Real Stories</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">Drivers Who Got Back on the Road</h2>
                    <p className="text-slate-400 mt-3 font-light">Hear from drivers we've helped navigate the claims process from start to finish.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors reveal delay-100">
                        <div className="flex text-brand-orange mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => <iconify-icon key={s} icon="solar:star-bold" width="18"></iconify-icon>)}
                        </div>
                        <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"After a rear-end collision on the freeway, I had no idea what to do. The advisor told me exactly what photos to take, reminded me not to admit fault, and handled my whole claim. Settled in under three weeks."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-darkOrange rounded-full flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg">KM</div>
                            <div>
                                <p className="text-base font-bold text-white">Karen M.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Dallas, TX</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors reveal delay-200">
                        <div className="flex text-brand-orange mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => <iconify-icon key={s} icon="solar:star-bold" width="18"></iconify-icon>)}
                        </div>
                        <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"The repair coordination service was outstanding. They arranged a loaner car the same day and kept me updated via text throughout the entire repair process. I didn't have to chase anyone."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg">RT</div>
                            <div>
                                <p className="text-base font-bold text-white">Robert T.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Phoenix, AZ</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors reveal delay-300">
                        <div className="flex text-brand-orange mb-6 gap-1">
                            {[1, 2, 3, 4].map((s) => <iconify-icon key={s} icon="solar:star-bold" width="18"></iconify-icon>)}
                            <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                        </div>
                        <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"Someone ran a red light and hit my car. I was shaken and confused. This service guided me through every step — including my injury claim — and helped recover all my out-of-pocket expenses. Truly a lifesaver."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg">AL</div>
                            <div>
                                <p className="text-base font-bold text-white">Angela L.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Atlanta, GA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specialist Support Box */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 reveal">
                    {[
                        { icon: 'solar:chat-round-dots-bold', title: 'Expert Advice', desc: 'Navigating insurer requirements can be daunting. Our specialist support team provides guidance that puts your interests first.' },
                        { icon: 'solar:verified-check-bold', title: 'Unbiased Claims Advice', desc: 'We ensure you receive the full benefits you are entitled to under your policy — nothing less.' },
                        { icon: 'solar:shield-star-bold', title: 'No-Claims Protection', desc: 'We advise you on the best route to keep your no-claims discount intact after an accident.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-navy-800/30 border border-white/5 rounded-xl p-6 flex gap-4 items-start">
                            <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center shrink-0">
                                <iconify-icon icon={item.icon} width="22"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;