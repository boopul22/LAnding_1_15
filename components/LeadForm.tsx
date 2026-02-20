import React, { useState } from 'react';
import { QuoteFormData } from '../types';

const LeadForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [formData, setFormData] = useState<QuoteFormData>({
        zipCode: '',
        currentInsurer: '',
        vehicle: '',
        email: '',
        agreedToTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setCompleted(true);
        }, 2000);
    };

    if (completed) {
        return (
            <div className="bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-slate-100 p-6 md:p-8 relative z-10 text-center min-h-[460px] flex flex-col items-center justify-center animate-in fade-in duration-700">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-50/50">
                    <iconify-icon icon="solar:check-circle-bold" width="48"></iconify-icon>
                </div>
                <h3 className="text-2xl font-serif text-navy-900 font-bold mb-3">Request Received!</h3>
                <p className="text-slate-500 mb-6">A specialist has been assigned to guide you through your claim.</p>
                <p className="text-sm text-slate-400 bg-slate-50 px-4 py-2 rounded-lg">An accident claim advisor will be in touch shortly at <span className="text-navy-900 font-medium">{formData.email}</span>.</p>
                <button
                    onClick={() => setCompleted(false)}
                    className="mt-8 text-brand-orange hover:text-brand-darkOrange font-medium text-sm flex items-center gap-1 group"
                >
                    <iconify-icon icon="solar:refresh-linear" class="group-hover:rotate-180 transition-transform"></iconify-icon>
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-slate-100 relative z-10 overflow-hidden">
            {/* Form Header */}
            <div className="bg-navy-900 p-5 md:p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-tight mb-1 relative z-10">Get Free Accident Claim Help</h3>
                <p className="text-sm text-slate-300 relative z-10">Connect with a dedicated claim specialist — no cost, no obligation.</p>
            </div>

            <div className="p-5 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Zip Code</label>
                            <div className="relative group">
                                <input
                                    required
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    placeholder="e.g. 90210"
                                    pattern="[0-9]{5}"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange focus:bg-white transition-all text-base text-navy-900 placeholder:text-slate-400 font-medium"
                                />
                                <iconify-icon icon="solar:map-point-bold" class="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-brand-orange transition-colors" width="18"></iconify-icon>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Policy Type</label>
                            <div className="relative group">
                                <select
                                    required
                                    name="currentInsurer"
                                    value={formData.currentInsurer}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange focus:bg-white transition-all text-base text-navy-900 appearance-none font-medium"
                                >
                                    <option value="" disabled>Select...</option>
                                    <option value="auto">Auto</option>
                                    <option value="home">Homeowners</option>
                                    <option value="motorcycle">Motorcycle</option>
                                    <option value="rv">RV</option>
                                    <option value="other">Other</option>
                                </select>
                                <iconify-icon icon="solar:shield-warning-bold" class="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-brand-orange transition-colors" width="18"></iconify-icon>
                                <iconify-icon icon="solar:alt-arrow-down-linear" class="absolute right-3 top-3.5 text-slate-400 pointer-events-none" width="18"></iconify-icon>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Vehicle</label>
                        <div className="relative group">
                            <input
                                required
                                type="text"
                                name="vehicle"
                                value={formData.vehicle}
                                onChange={handleChange}
                                placeholder="e.g. 2021 Toyota Camry"
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange focus:bg-white transition-all text-base text-navy-900 placeholder:text-slate-400 font-medium"
                            />
                            <iconify-icon icon="solar:wheel-bold" class="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-brand-orange transition-colors" width="18"></iconify-icon>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                        <div className="relative group">
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange focus:bg-white transition-all text-base text-navy-900 placeholder:text-slate-400 font-medium"
                            />
                            <iconify-icon icon="solar:letter-bold" class="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-brand-orange transition-colors" width="18"></iconify-icon>
                        </div>
                    </div>

                    {/* Legal Consent */}
                    <div className="flex gap-3 items-start pt-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <label className="relative flex items-center p-0.5 rounded-full cursor-pointer mt-0.5 shrink-0">
                            <input
                                type="checkbox"
                                className="custom-checkbox peer hidden"
                                required
                                checked={formData.agreedToTerms}
                                onChange={handleCheckbox}
                            />
                            <div className="w-5 h-5 border-2 border-slate-300 bg-white rounded peer-checked:border-brand-orange peer-checked:bg-brand-orange transition-colors flex items-center justify-center">
                                <svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                        </label>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                            By submitting, I agree to the <a href="#" className="underline text-navy-800 hover:text-brand-orange">Terms</a> and <a href="#" className="underline text-navy-800 hover:text-brand-orange">Privacy Policy</a> and consent to be contacted by QuickCoverUSA.com and its <a href="#" className="underline text-navy-800 hover:text-brand-orange">partners</a> via phone, email, or text.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-brand-orange to-brand-darkOrange hover:from-brand-darkOrange hover:to-brand-darkOrange text-white text-lg font-bold py-4 rounded-lg shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.99] relative overflow-hidden"
                    >
                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>

                        {loading ? (
                            <>
                                <iconify-icon icon="svg-spinners:ring-resize" width="24"></iconify-icon>
                                Connecting You Now...
                            </>
                        ) : (
                            <>
                                Get My Free Claim Advice
                                <iconify-icon icon="solar:arrow-right-bold" class="group-hover:translate-x-1 transition-transform" width="20"></iconify-icon>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LeadForm;