import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic SEO',
    price: '$799',
    period: '/month',
    description: 'Perfect for small businesses starting their SEO journey.',
    features: [
      'Up to 10 target keywords',
      'On-page SEO optimization',
      'Monthly SEO audit',
      'Google Analytics setup',
      'Monthly performance report',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth SEO',
    price: '$1,799',
    period: '/month',
    description: 'For growing businesses ready to dominate their niche.',
    features: [
      'Up to 30 target keywords',
      'Full technical SEO audit',
      'Content strategy & creation',
      'Link building (10 links/mo)',
      'Competitor analysis',
      'Bi-weekly strategy calls',
      'Priority support',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Premium SEO',
    price: '$3,499',
    period: '/month',
    description: 'Enterprise-grade SEO for maximum market dominance.',
    features: [
      'Unlimited target keywords',
      'Advanced technical SEO',
      'Full content marketing',
      'Link building (25+ links/mo)',
      'CRO optimization',
      'Weekly strategy calls',
      'Dedicated account manager',
    ],
    cta: 'Contact Me',
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-[#08142f] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-[#2563eb]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-3 leading-tight">
            Transparent <span className="text-[#facc15]">Pricing</span>
          </h2>
          <p className="text-[#94a3b8] text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            No hidden fees. No long-term lock-ins. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#2563eb] border-2 border-[#2563eb] shadow-2xl shadow-blue-500/30 scale-105'
                  : 'bg-[#020617] border border-white/8 hover:border-[#2563eb]/40 hover:shadow-xl hover:shadow-blue-500/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-[#facc15] text-[#020617] text-xs font-bold tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-heading text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-[#94a3b8]'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`font-heading text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#facc15]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-blue-200' : 'text-[#94a3b8]'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? 'bg-white/20' : 'bg-[#2563eb]/20'}`}>
                      <Check size={12} className={plan.highlighted ? 'text-white' : 'text-[#2563eb]'} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-[#94a3b8]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-[#facc15] text-[#020617] hover:bg-yellow-300 shadow-lg shadow-yellow-500/25'
                    : 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/20'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;