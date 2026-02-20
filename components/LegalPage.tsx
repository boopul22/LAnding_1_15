import React from 'react';
import { Link } from 'react-router-dom';

interface Section {
    heading: string;
    content: React.ReactNode;
}

interface LegalPageProps {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: Section[];
}

const LegalPage: React.FC<LegalPageProps> = ({ title, subtitle, lastUpdated, sections }) => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="bg-navy-900 text-white p-1.5 rounded flex items-center justify-center">
                            <iconify-icon icon="solar:shield-check-linear" width="20" height="20"></iconify-icon>
                        </div>
                        <span className="font-serif text-lg md:text-xl text-navy-900 tracking-tight font-bold group-hover:text-brand-orange transition-colors">
                            QuickCover<span className="text-slate-400 font-normal">USA</span>
                        </span>
                    </a>
                    <Link to="/" className="hidden md:flex items-center gap-2 text-navy-900 font-medium hover:text-brand-orange transition-colors text-sm">
                        <iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <div className="bg-navy-900 py-14 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">Legal Information</p>
                    <h1 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-4">{title}</h1>
                    <p className="text-slate-400 text-lg font-light mb-4">{subtitle}</p>
                    <p className="text-slate-500 text-xs">Last updated: {lastUpdated}</p>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                <div className="space-y-10">
                    {sections.map((section, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
                            <h2 className="font-serif text-xl md:text-2xl text-navy-900 font-bold mb-4 pb-3 border-b border-slate-100">{section.heading}</h2>
                            <div className="text-slate-600 leading-relaxed space-y-3 text-sm md:text-base">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-navy-900 text-slate-500 py-6 text-xs text-center border-t border-navy-800">
                <p>© 2026 QuickCoverUSA.com. All rights reserved.</p>
                <div className="flex justify-center gap-6 mt-3">
                    <Link to="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
                    <Link to="/cookie-policy" className="hover:text-brand-orange transition-colors">Cookie Policy</Link>
                    <Link to="/terms" className="hover:text-brand-orange transition-colors">Terms &amp; Conditions</Link>
                    <Link to="/complaints" className="hover:text-brand-orange transition-colors">Complaints</Link>
                </div>
            </footer>
        </div>
    );
};

export default LegalPage;
