import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to see SEO results?',
    a: 'SEO is a long-term investment. Most clients start seeing meaningful improvements in 3-6 months, with significant results typically appearing at the 6-12 month mark. Quick wins like technical fixes can show results faster.',
  },
  {
    q: 'Do you guarantee first-page rankings?',
    a: "No ethical SEO professional can guarantee specific rankings — anyone who does is misleading you. What I guarantee is a proven, white-hat methodology, transparent reporting, and a relentless focus on improving your organic performance.",
  },
  {
    q: 'What makes your SEO approach different from agencies?',
    a: 'As a specialist, you get direct access to the expert doing the work — not an account manager passing messages. I combine technical depth with strategic thinking, and every strategy is custom-built for your specific business and competitive landscape.',
  },
  {
    q: 'Do you work with businesses in any industry?',
    a: 'I work with most industries including SaaS, e-commerce, local services, healthcare, finance, and more. I do a thorough competitive analysis before starting to ensure I can deliver meaningful results in your specific niche.',
  },
  {
    q: 'What do I need to provide to get started?',
    a: 'Access to your Google Analytics, Google Search Console, and website CMS. A brief about your business goals, target audience, and main competitors. Everything else I handle from there.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes. There are no long-term contracts. I work on a month-to-month basis because I believe in earning your business every month through results, not locking you into a contract.',
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#020617] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2563eb]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-3 leading-tight">
            Common <span className="text-[#facc15]">Questions</span>
          </h2>
          <p className="text-[#94a3b8] text-base lg:text-lg mt-4 max-w-xl mx-auto">
            Everything you need to know before we start working together.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="bg-[#08142f] border border-white/8 rounded-2xl overflow-hidden hover:border-[#2563eb]/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-inset"
                aria-expanded={open === i}
              >
                <span className="text-white font-semibold text-sm lg:text-base pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${open === i ? 'bg-[#2563eb]' : 'bg-white/10'}`}>
                  {open === i ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-white" />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;