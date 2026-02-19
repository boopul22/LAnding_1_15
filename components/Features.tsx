import React from 'react';

const Features: React.FC = () => {
  const features = [
    { icon: 'solar:tag-price-bold-duotone', title: 'Zero Cost to You', desc: 'Our service is 100% free. We get paid by the insurance companies, not you, so your rate is never marked up.' },
    { icon: 'solar:graph-up-bold-duotone', title: 'Compare Top Carriers', desc: 'Access quotes from national giants and regional experts all in one place to find the perfect fit.' },
    { icon: 'solar:bolt-bold-duotone', title: 'Instant Results', desc: 'No waiting days for a callback. See real-time rates and coverage options as soon as you submit.' },
    { icon: 'solar:diploma-verified-bold-duotone', title: 'Licensed Partners', desc: 'We verify every partner in our network to ensure they are licensed to operate in your specific state.' },
    { icon: 'solar:shield-cross-bold-duotone', title: 'No Spam Guarantee', desc: 'We respect your privacy. You will only be contacted by the specific providers you match with.' },
    { icon: 'solar:headset-mic-bold-duotone', title: '24/7 Support', desc: 'Questions about the process? Our US-based support team is here to help you navigate your options.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-serif text-3xl text-navy-900 tracking-tight mb-4">Why Drivers Trust Us</h2>
                <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((item, index) => (
                    <div 
                        key={index} 
                        className={`p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-1 transition-all duration-300 group reveal ${index % 3 === 0 ? '' : index % 3 === 1 ? 'delay-75' : 'delay-150'}`}
                    >
                        <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                            <iconify-icon icon={item.icon} width="28"></iconify-icon>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;