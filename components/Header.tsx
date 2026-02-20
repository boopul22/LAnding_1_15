import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
        : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-navy-900 text-white p-1.5 rounded flex items-center justify-center">
            <iconify-icon icon="solar:shield-check-linear" width="20" height="20" class="md:w-6 md:h-6"></iconify-icon>
          </div>
          <span className="font-serif text-lg md:text-xl text-navy-900 tracking-tight font-bold group-hover:text-brand-orange transition-colors">
            Geico<span className="text-slate-400 font-normal"> Claims Guidance</span>
          </span>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <a href="tel:18005550199" className="hidden md:flex items-center gap-2 text-navy-900 font-medium hover:text-brand-orange transition-colors">
            <iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            <span className="tracking-tight">1-800-555-0197</span>
          </a>
          <a href="#compare" className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-navy-900/10 active:scale-95">
            Get Claim Help
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;