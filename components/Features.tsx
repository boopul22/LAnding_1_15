import React from 'react';

const Features: React.FC = () => {
    const sections = [
        {
            icon: 'solar:danger-circle-bold-duotone',
            title: 'Immediate Action Required',
            bullets: [
                'Pull over safely and switch on your hazard lights immediately.',
                'Check for injuries and call 911 if urgent medical attention is needed.',
                'Exchange names, addresses, and insurance details with all other drivers.',
                'Do not admit liability at the scene — this is critical for your claim.',
            ]
        },
        {
            icon: 'solar:camera-bold-duotone',
            title: 'Evidence Collection',
            bullets: [
                'Take clear photos of all vehicles involved and the surrounding area.',
                'Note the exact time, date, and location of the accident.',
                'Collect contact details from any witnesses present at the scene.',
                'Record the weather conditions, road status, and any traffic signs.',
            ]
        },
        {
            icon: 'solar:clipboard-text-bold-duotone',
            title: 'Filing Your Claim',
            bullets: [
                'Contact our support team or your insurer as soon as possible.',
                'Have your policy number and vehicle registration (VIN) ready.',
                'Provide a clear, factual account of what happened — stick to the facts.',
                'Submit photos and witness details to support your case.',
            ]
        },
        {
            icon: 'solar:wrench-bold-duotone',
            title: 'Vehicle Repair Process',
            bullets: [
                'Your vehicle damage will be assessed by an approved estimator.',
                'We can help arrange a replacement vehicle while yours is being repaired.',
                'Repairs are authorized once liability and costs are agreed upon.',
                'You have the right to choose your own repair shop if preferred.',
            ]
        },
        {
            icon: 'solar:sort-by-time-bold-duotone',
            title: 'What Happens Next',
            bullets: [
                'Liability investigations will begin between the insurers involved.',
                'You may need to pay your deductible if you are found at fault.',
                'If the accident was not your fault, we can help recover all costs.',
                'We will keep you updated throughout the entire claims process.',
            ]
        },
        {
            icon: 'solar:star-bold-duotone',
            title: 'Expert Tips',
            bullets: [
                'Keep a detailed log of all expenses incurred because of the accident.',
                'Never sign anything from the other party\'s insurer without seeking advice.',
                'Seek medical attention for all injuries, even ones that seem minor.',
                'Call us for guidance to help protect your no-claims discount.',
            ]
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl text-navy-900 tracking-tight mb-4">Complete Claims Process Guide</h2>
                    <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
                    <p className="text-slate-500 mt-4 text-lg font-light">Follow these essential steps to ensure your claim proceeds smoothly and your rights are fully protected.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((item, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-1 transition-all duration-300 group reveal ${index % 3 === 0 ? '' : index % 3 === 1 ? 'delay-75' : 'delay-150'}`}
                        >
                            <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                                <iconify-icon icon={item.icon} width="28"></iconify-icon>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-4">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.bullets.map((bullet, bi) => (
                                    <li key={bi} className="flex items-start gap-2 text-slate-500 text-sm leading-relaxed">
                                        <iconify-icon icon="solar:check-circle-bold" class="text-brand-orange mt-0.5 shrink-0" width="16"></iconify-icon>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;