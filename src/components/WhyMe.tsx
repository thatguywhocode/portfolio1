import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Code2, Brain, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Database,
    title: 'Data-Driven SEO',
    description: 'Every decision is backed by analytics, search data, and competitive intelligence — no guesswork.',
    color: '#2563eb',
  },
  {
    icon: Zap,
    title: 'Fast Ranking Strategies',
    description: 'Proven quick-win tactics combined with long-term authority building for sustainable results.',
    color: '#facc15',
  },
  {
    icon: Code2,
    title: 'Technical Expertise',
    description: 'Deep understanding of how search engines crawl, index, and rank — fixing issues others miss.',
    color: '#2563eb',
  },
  {
    icon: Brain,
    title: 'AI-Powered Marketing',
    description: 'Leveraging cutting-edge AI tools for content optimization, keyword clustering, and trend prediction.',
    color: '#facc15',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Growth',
    description: 'Building sustainable organic growth that compounds over time and reduces dependency on paid ads.',
    color: '#2563eb',
  },
];

const WhyMe: React.FC = () => {
  return (
    <section className="bg-[#08142f] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#facc15]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Why Choose Me</span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-3 leading-tight">
            The Competitive <span className="text-[#facc15]">Advantage</span>
          </h2>
          <p className="text-[#94a3b8] text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            What sets my approach apart from generic SEO agencies and freelancers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`group bg-[#020617] border border-white/8 rounded-3xl p-7 hover:border-[#2563eb]/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${reason.color}15`, border: `1px solid ${reason.color}30` }}
                >
                  <Icon size={22} style={{ color: reason.color }} />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-[#facc15] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;