import React from 'react';
import LegalPage from '../components/LegalPage';

const PrivacyPolicy: React.FC = () => (
    <LegalPage
        title="Privacy Policy"
        subtitle="How QuickCoverUSA.com collects, uses, and protects your personal information."
        lastUpdated="February 20, 2026"
        sections={[
            {
                heading: '1. Who We Are',
                content: (
                    <p>QuickCoverUSA.com ("we", "us", "our") is an independent advertising and lead-generation service operating in the United States. We connect drivers involved in auto accidents with licensed accident management and claims guidance providers. We are not an insurance company, law firm, or claims handler. This Privacy Policy explains how we collect, use, and protect the personal information you provide when using our website.</p>
                )
            },
            {
                heading: '2. Information We Collect',
                content: (
                    <div className="space-y-3">
                        <p><strong>Personal Information you provide:</strong> When you complete our contact form, we may collect your name, email address, phone number, ZIP code, vehicle details, and policy type.</p>
                        <p><strong>Automatically collected information:</strong> We may also collect technical data including your IP address, browser type, device information, pages visited, and time spent on the site. This is collected via cookies and similar tracking technologies.</p>
                        <p><strong>We do not collect:</strong> Social Security numbers, financial account details, or any sensitive personal data unless you voluntarily provide it and it is required for your claim assistance.</p>
                    </div>
                )
            },
            {
                heading: '3. How We Use Your Information',
                content: (
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To connect you with licensed US accident management and claims guidance providers.</li>
                        <li>To respond to your inquiries and provide the support you have requested.</li>
                        <li>To improve our website and services based on usage patterns.</li>
                        <li>To send you relevant communications about your claim request (you may opt out at any time).</li>
                        <li>To comply with applicable US federal and state laws and regulations.</li>
                    </ul>
                )
            },
            {
                heading: '4. Sharing Your Information',
                content: (
                    <div className="space-y-3">
                        <p>We may share your information with our network of licensed accident management partners who will assist with your claim. We do not sell your personal data to unrelated third parties for marketing purposes.</p>
                        <p>We may also share data with trusted technology providers (e.g., analytics, hosting) who are contractually bound to protect it, and with law enforcement or regulatory authorities where required by law.</p>
                    </div>
                )
            },
            {
                heading: '5. Your Rights',
                content: (
                    <div className="space-y-3">
                        <p>Depending on your state of residence, you may have rights including:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>The right to know what personal data we hold about you.</li>
                            <li>The right to request deletion of your personal data.</li>
                            <li>The right to opt out of the sale of your personal information (we do not sell data, but this right is available to you).</li>
                            <li>The right to non-discrimination for exercising your privacy rights.</li>
                        </ul>
                        <p>California residents have additional rights under the California Consumer Privacy Act (CCPA). To exercise any of these rights, contact us at <strong>privacy@quickcoverusa.com</strong>.</p>
                    </div>
                )
            },
            {
                heading: '6. Data Retention',
                content: <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. You may request deletion at any time by contacting us directly.</p>
            },
            {
                heading: '7. Data Security',
                content: <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, no online transmission is completely secure, and we cannot guarantee absolute security.</p>
            },
            {
                heading: '8. Third-Party Links',
                content: <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.</p>
            },
            {
                heading: '9. Changes to This Policy',
                content: <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of our site after changes constitutes your acceptance of the updated policy.</p>
            },
            {
                heading: '10. Contact Us',
                content: (
                    <div className="space-y-1">
                        <p>For any privacy-related questions or to exercise your rights, please contact:</p>
                        <p><strong>Email:</strong> privacy@quickcoverusa.com</p>
                        <p><strong>Mail:</strong> QuickCoverUSA.com, 500 7th Avenue, Suite 1200, New York, NY 10018</p>
                    </div>
                )
            },
        ]}
    />
);

export default PrivacyPolicy;
