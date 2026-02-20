import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy-900 text-slate-400 py-12 md:py-16 border-t border-navy-800 text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4 text-white">
                            <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
                            <span className="font-serif text-xl tracking-tight">QuickCover<span className="opacity-50 font-sans font-normal">USA</span></span>
                        </a>
                        <p className="mb-4 text-xs leading-relaxed">Expert guidance for US auto accident claims. Professional support connecting drivers with claim specialists when they need it most.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="cib:facebook" width="16"></iconify-icon></a>
                            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="cib:twitter" width="16"></iconify-icon></a>
                            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="cib:instagram" width="16"></iconify-icon></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="text-white font-semibold mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Supported Insurers</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Claims Process Guide</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h5 className="text-white font-semibold mb-4">Legal Information</h5>
                        <ul className="space-y-2">
                            <li><Link to="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/cookie-policy" className="hover:text-brand-orange transition-colors">Cookie Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-brand-orange transition-colors">Terms &amp; Conditions</Link></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Ad Disclosure</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Do Not Sell My Info</a></li>
                            <li><Link to="/complaints" className="hover:text-brand-orange transition-colors">Complaints Procedure</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-white font-semibold mb-4">Contact &amp; Support</h5>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <iconify-icon icon="solar:phone-linear"></iconify-icon>
                                1-800-555-0197
                            </li>
                            <li className="flex items-center gap-2">
                                <iconify-icon icon="solar:letter-linear"></iconify-icon>
                                support@quickcoverusa.com
                            </li>
                            <li className="flex items-start gap-2">
                                <iconify-icon icon="solar:map-point-linear" class="mt-1"></iconify-icon>
                                500 7th Avenue, Suite 1200<br />New York, NY 10018
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 space-y-4">
                    <p className="text-xs text-slate-500 text-center md:text-left">
                        <strong>Regulatory Notice:</strong> QuickCoverUSA.com operates within the advertising and lead-generation sector. We introduce consumers to licensed US accident management providers who deliver repair, replacement, and claims guidance services following auto accidents. We do not provide insurance, legal, or financial advice directly and are independent of all insurers and accident management companies. You are under no obligation to use our recommended partners.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs pt-4">
                        <span>© 2026 QuickCoverUSA.com. All rights reserved. Professional accident claim guidance across the United States.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;