import React, { useState, useEffect } from 'react';

const BottomPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Delay before showing
        const showTimer = setTimeout(() => {
            if (!isDismissed) {
                setShouldRender(true);
                // Tiny delay to trigger transition
                setTimeout(() => setIsVisible(true), 50);
            }
        }, 3000);

        return () => clearTimeout(showTimer);
    }, [isDismissed]);

    if (!shouldRender || isDismissed) return null;

    return (
        <div
            className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[60] md:w-[380px] transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
        >
            <div className="bg-navy-950 rounded-xl shadow-2xl shadow-navy-900/50 border border-slate-800 p-5 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse outline outline-2 outline-green-500/30"></div>
                        <span className="text-green-500 text-xs font-bold tracking-wider uppercase">Live Support</span>
                    </div>
                    <button
                        onClick={() => setIsDismissed(true)}
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Close popup"
                    >
                        <iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
                    </button>
                </div>

                {/* CTA Button */}
                <a
                    href="tel:18005550197"
                    className="block w-full bg-gradient-to-r from-brand-orange to-brand-darkOrange hover:from-brand-darkOrange hover:to-brand-darkOrange text-white rounded-lg p-4 text-center mb-5 transition-all shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 active:scale-[0.98]"
                >
                    <div className="flex items-center justify-center gap-2 text-xl font-bold mb-1">
                        <iconify-icon icon="solar:phone-bold" width="24"></iconify-icon>
                        1-800-555-0197
                    </div>
                    <div className="text-xs text-white/90">Call to Report Your Accident</div>
                </a>

                {/* Features List */}
                <div className="space-y-3">
                    <p className="text-white text-sm font-semibold border-b border-navy-800 pb-2">Free Expert Assistance:</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-slate-300">
                            <iconify-icon icon="solar:check-circle-bold" class="text-green-500"></iconify-icon>
                            Claims advice
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-300">
                            <iconify-icon icon="solar:check-circle-bold" class="text-green-500"></iconify-icon>
                            Replacement vehicle help
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-300">
                            <iconify-icon icon="solar:check-circle-bold" class="text-green-500"></iconify-icon>
                            Repair coordination
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-300">
                            <iconify-icon icon="solar:check-circle-bold" class="text-green-500"></iconify-icon>
                            Injury claim guidance
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BottomPopup;
