import React from 'react';
import LegalPage from '../components/LegalPage';

const Complaints: React.FC = () => (
    <LegalPage
        title="Complaints Procedure"
        subtitle="We take all complaints seriously. Here is how we handle feedback and resolve concerns."
        lastUpdated="February 20, 2026"
        sections={[
            {
                heading: 'Our Commitment to You',
                content: <p>At QuickCoverUSA.com, we are committed to providing a high standard of service. If you are dissatisfied with any aspect of our service, we encourage you to let us know so we can investigate and work to resolve your concern promptly and fairly.</p>
            },
            {
                heading: 'Step 1: Submit Your Complaint',
                content: (
                    <div className="space-y-3">
                        <p>You can raise a complaint through any of the following channels:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Email:</strong> complaints@quickcoverusa.com</li>
                            <li><strong>Phone:</strong> 1-800-555-0197 (Mon–Fri, 9am–5pm ET)</li>
                            <li><strong>Mail:</strong> Complaints Department, QuickCoverUSA.com, 500 7th Avenue, Suite 1200, New York, NY 10018</li>
                        </ul>
                        <p>Please include your full name, contact details, a clear description of your complaint, and any reference numbers or correspondence related to your case.</p>
                    </div>
                )
            },
            {
                heading: 'Step 2: Acknowledgment',
                content: <p>We will acknowledge receipt of your complaint within <strong>3 business days</strong> of receiving it. Our acknowledgment will confirm who is handling your complaint and provide a reference number you can use for future correspondence.</p>
            },
            {
                heading: 'Step 3: Investigation',
                content: <p>A dedicated member of our team will review your complaint thoroughly and may contact you for further information if needed. We aim to fully investigate all complaints within <strong>15 business days</strong>. For complex matters, we may require up to <strong>30 business days</strong>, and we will keep you informed of our progress.</p>
            },
            {
                heading: 'Step 4: Resolution',
                content: <p>Once our investigation is complete, we will contact you in writing with our findings and any proposed resolution. If we uphold your complaint, we will outline the steps we will take to remedy the situation. If we do not uphold your complaint, we will explain our reasoning clearly.</p>
            },
            {
                heading: 'Step 5: If You Are Not Satisfied',
                content: (
                    <div className="space-y-2">
                        <p>If you are not satisfied with our final response, you may wish to seek further assistance through the following channels:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Your state's Department of Insurance (for insurance-related complaints).</li>
                            <li>The Consumer Financial Protection Bureau (CFPB) for financial services matters.</li>
                            <li>The Federal Trade Commission (FTC) for advertising or marketing concerns.</li>
                            <li>A licensed attorney in your state for legal advice.</li>
                        </ul>
                    </div>
                )
            },
            {
                heading: 'Complaints About Partner Providers',
                content: <p>If your complaint relates to the service provided by one of our partner accident management providers (rather than our referral service), we will forward your complaint to the provider and notify you that we have done so. Each partner maintains their own complaints procedure and is independently responsible for resolving complaints about their own services.</p>
            },
            {
                heading: 'Contact Our Complaints Team',
                content: (
                    <div className="space-y-1">
                        <p><strong>Email:</strong> complaints@quickcoverusa.com</p>
                        <p><strong>Phone:</strong> 1-800-555-0197</p>
                        <p><strong>Hours:</strong> Monday to Friday, 9:00am – 5:00pm ET</p>
                        <p><strong>Mail:</strong> Complaints Department, 500 7th Avenue, Suite 1200, New York, NY 10018</p>
                    </div>
                )
            },
        ]}
    />
);

export default Complaints;
