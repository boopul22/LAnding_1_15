import React from 'react';
import LegalPage from '../components/LegalPage';

const TermsConditions: React.FC = () => (
    <LegalPage
        title="Terms & Conditions"
        subtitle="The legal agreement governing your use of QuickCoverUSA.com and our services."
        lastUpdated="February 20, 2026"
        sections={[
            {
                heading: '1. Agreement to Terms',
                content: <p>By accessing or using QuickCoverUSA.com ("the Site"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Site. We reserve the right to update these terms at any time, and continued use of the Site constitutes acceptance of the revised terms.</p>
            },
            {
                heading: '2. About Our Service',
                content: (
                    <div className="space-y-2">
                        <p>QuickCoverUSA.com is an independent advertising and lead-generation platform. We provide general information and guidance to help US drivers navigate auto accident claims. We are <strong>not</strong> an insurance company, law firm, claims management company, or licensed claims handler.</p>
                        <p>We introduce users to licensed accident management providers who may be able to assist with their claim. Our service is provided for informational purposes only and does not constitute legal, insurance, or financial advice.</p>
                    </div>
                )
            },
            {
                heading: '3. No Professional Advice',
                content: <p>The content on this Site is for general informational purposes only. Nothing on this Site constitutes legal advice, insurance advice, or financial advice. You should always consult a qualified professional before making decisions about your claim, insurance coverage, or legal rights. We are not liable for any actions you take based on information provided on this Site.</p>
            },
            {
                heading: '4. User Responsibilities',
                content: (
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You must be at least 18 years old to use this Site.</li>
                        <li>You agree to provide accurate and truthful information when completing any form on this Site.</li>
                        <li>You are responsible for any decisions you make based on information provided by this Site or our partner providers.</li>
                        <li>You agree not to misuse or interfere with the operation of this Site.</li>
                    </ul>
                )
            },
            {
                heading: '5. Third-Party Partner Providers',
                content: (
                    <div className="space-y-2">
                        <p>When you submit a request through our Site, your details may be passed to one or more of our licensed partner accident management providers. You are under <strong>no obligation</strong> to use any partner's services.</p>
                        <p>We are not responsible for the services, advice, or actions of any third-party providers we introduce you to. Each provider operates independently and is bound by their own terms and conditions.</p>
                    </div>
                )
            },
            {
                heading: '6. Intellectual Property',
                content: <p>All content on this Site, including text, graphics, logos, and code, is the property of QuickCoverUSA.com or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
            },
            {
                heading: '7. Limitation of Liability',
                content: <p>To the fullest extent permitted by applicable law, QuickCoverUSA.com shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of — or inability to use — this Site or its content. Our total liability to you shall not exceed the amount you paid to us, if any, in the 12 months preceding your claim.</p>
            },
            {
                heading: '8. Indemnification',
                content: <p>You agree to indemnify and hold harmless QuickCoverUSA.com and its affiliates, officers, and employees from any claims, damages, or expenses (including legal fees) arising out of your use of the Site, your violation of these Terms, or your infringement of any third-party rights.</p>
            },
            {
                heading: '9. Governing Law',
                content: <p>These Terms and Conditions are governed by and construed in accordance with the laws of the State of New York, United States, without regard to conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in New York County, NY.</p>
            },
            {
                heading: '10. Contact Us',
                content: (
                    <div className="space-y-1">
                        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                        <p><strong>Email:</strong> legal@quickcoverusa.com</p>
                        <p><strong>Mail:</strong> QuickCoverUSA.com, 500 7th Avenue, Suite 1200, New York, NY 10018</p>
                    </div>
                )
            },
        ]}
    />
);

export default TermsConditions;
