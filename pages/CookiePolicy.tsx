import React from 'react';
import LegalPage from '../components/LegalPage';

const CookiePolicy: React.FC = () => (
    <LegalPage
        title="Cookie Policy"
        subtitle="How QuickCoverUSA.com uses cookies and similar tracking technologies on this website."
        lastUpdated="February 20, 2026"
        sections={[
            {
                heading: '1. What Are Cookies?',
                content: <p>Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and deliver relevant content. Some cookies are essential for the site to function; others are optional and used for analytics or marketing.</p>
            },
            {
                heading: '2. Cookies We Use',
                content: (
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-navy-900 mb-1">Essential Cookies</p>
                            <p>These cookies are necessary for the website to work correctly. They enable core functionality such as form submission and page navigation. The site cannot function properly without these cookies, and they cannot be disabled.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-navy-900 mb-1">Performance Cookies</p>
                            <p>These cookies collect anonymous information about how visitors use our site — such as which pages are visited most often and how long visitors spend on them. This helps us improve how the site works. All information is aggregated and non-identifiable.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-navy-900 mb-1">Functional Cookies</p>
                            <p>These cookies allow the website to remember choices you make (such as your form progress) and provide a more personalized experience. They may be set by us or by third-party providers whose services we use.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-navy-900 mb-1">Marketing & Targeting Cookies</p>
                            <p>These cookies track your browsing activity to help us deliver more relevant advertising and measure the effectiveness of our marketing campaigns. They may be set by our advertising partners. You can opt out of these cookies at any time.</p>
                        </div>
                    </div>
                )
            },
            {
                heading: '3. Third-Party Cookies',
                content: (
                    <div className="space-y-2">
                        <p>Some cookies on our site are set by third-party services including:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Google Analytics (site performance and visitor behavior)</li>
                            <li>Google Ads (advertising effectiveness)</li>
                            <li>Meta Pixel (social media advertising)</li>
                        </ul>
                        <p>These third parties have their own privacy and cookie policies, which we encourage you to review.</p>
                    </div>
                )
            },
            {
                heading: '4. Managing Your Cookie Preferences',
                content: (
                    <div className="space-y-3">
                        <p>You have the right to accept or decline non-essential cookies. You can manage your preferences through your browser settings:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                            <li><strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                            <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                        </ul>
                        <p>Please note that disabling certain cookies may affect the functionality of our website.</p>
                    </div>
                )
            },
            {
                heading: '5. Do Not Track',
                content: <p>Some browsers have a "Do Not Track" (DNT) setting that signals websites not to track you. Our site currently does not respond to DNT signals, but you can manage cookies through your browser settings as described above.</p>
            },
            {
                heading: '6. Changes to This Cookie Policy',
                content: <p>We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We will update the date at the top of this page when changes are made.</p>
            },
            {
                heading: '7. Contact Us',
                content: (
                    <div className="space-y-1">
                        <p>If you have any questions about our use of cookies, please contact us:</p>
                        <p><strong>Email:</strong> privacy@quickcoverusa.com</p>
                        <p><strong>Mail:</strong> QuickCoverUSA.com, 500 7th Avenue, Suite 1200, New York, NY 10018</p>
                    </div>
                )
            },
        ]}
    />
);

export default CookiePolicy;
