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
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors reveal delay-100">
                        <div className="flex text-brand-orange mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => <iconify-icon key={s} icon="solar:star-bold" width="18"></iconify-icon>)}
                        </div>
                        <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"I had a fender bender and was dreading the claims process. I filed my claim through the Geico app in 5 minutes and had an appointment scheduled for repairs the very next day. Incredibly easy."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-darkOrange rounded-full flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg">JD</div>
                            <div>
                                <p className="text-base font-bold text-white">James D.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Austin, TX</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors reveal delay-200">
                        <div className="flex text-brand-orange mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => <iconify-icon key={s} icon="solar:star-bold" width="18"></iconify-icon>)}
                        </div>
                        <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"The Auto Repair Xpress® service was amazing. I dropped my car off, picked up my rental car right there, and Geico kept me updated with text messages the whole time."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg">SM</div>
                            <div>
                                <p className="text-base font-bold text-white">Sarah M.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Columbus, OH</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors reveal delay-300">
                        <div className="flex text-brand-orange mb-6 gap-1">
                            {[1, 2, 3, 4].map((s) => <iconify-icon key={s} icon="solar:star-bold" width="18"></iconify-icon>)}
                            <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                        </div>
                        <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"Someone hit my parked car while I was at work. Geico's claims adjuster was so helpful and sympathetic. The online tracker showed me exactly where my claim was in the approval process."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg">MR</div>
                            <div>
                                <p className="text-base font-bold text-white">Michael R.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Tampa, FL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;