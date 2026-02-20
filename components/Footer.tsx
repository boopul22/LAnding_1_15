import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy-900 text-slate-400 py-12 md:py-16 border-t border-navy-800 text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4 text-white">
                            <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
                            <span className="font-serif text-xl tracking-tight">Geico<span className="opacity-50 font-sans font-normal"> Claims Guidance</span></span>
                        </a>
                        <p className="mb-4 text-xs leading-relaxed">Helping American drivers file, track, and resolve their auto claims quickly and easily.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="cib:facebook" width="16"></iconify-icon></a>
                            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="cib:twitter" width="16"></iconify-icon></a>
                            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="cib:instagram" width="16"></iconify-icon></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="text-white font-semibold mb-4">Company</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h5 className="text-white font-semibold mb-4">Legal</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Ad Disclosure</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Do Not Sell My Info</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-white font-semibold mb-4">Contact</h5>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <iconify-icon icon="solar:phone-linear"></iconify-icon>
                                1-800-841-3000
                            </li>
                            <li className="flex items-center gap-2">
                                <iconify-icon icon="solar:letter-linear"></iconify-icon>
                                claims@geico.com
                            </li>
                            <li className="flex items-start gap-2">
                                <iconify-icon icon="solar:map-point-linear" class="mt-1"></iconify-icon>
                                123 Finance Way, Suite 400<br />New York, NY 10012
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 space-y-4">
                    <p className="text-xs text-slate-500 text-center md:text-left">
                        <strong>Notice:</strong> This is a demonstrative site for Geico Claims Guidance. Not affiliated with the actual Geico corporation.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs pt-4">
                        <span>© 2024 Geico Claims Guidance Mockup. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;