import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  'Google', 'HubSpot', 'Shopify', 'Semrush', 'Ahrefs', 'Moz', 'Mailchimp', 'Salesforce',
];

const Companies: React.FC = () => {
  return (
    <section className="bg-[#08142f] border-y border-white/5 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-[#94a3b8] text-sm font-medium mb-8 tracking-widest uppercase">
          Trusted by 100+ businesses worldwide
        </p>
        <div className="flex items-center gap-12 overflow-hidden">
          <motion.div
            className="flex items-center gap-16 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...companies, ...companies].map((name, i) => (
              <span
                key={i}
                className="text-white/30 font-heading font-bold text-xl lg:text-2xl whitespace-nowrap hover:text-white/60 transition-colors duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;