import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    client: 'E-commerce Brand',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    metrics: [
      { label: 'Organic Traffic', before: '12K', after: '89K', growth: '+642%' },
      { label: 'Keywords Ranked', before: '45', after: '1,200+', growth: '+2,567%' },
      { label: 'Revenue from SEO', before: '$8K', after: '$67K', growth: '+738%' },
    ],
    duration: '8 months',
  },
  {
    client: 'SaaS Startup',
    industry: 'Technology',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
    metrics: [
      { label: 'Organic Traffic', before: '3K', after: '41K', growth: '+1,267%' },
      { label: 'Domain Authority', before: '18', after: '52', growth: '+189%' },
      { label: 'Trial Signups', before: '120', after: '890', growth: '+642%' },
    ],
    duration: '12 months',
  },
  {
    client: 'Local Service Business',
    industry: 'Home Services',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
    metrics: [
      { label: 'Local Rankings', before: 'Page 4', after: '#1', growth: 'Top 3' },
      { label: 'Phone Calls', before: '45/mo', after: '320/mo', growth: '+611%' },
      { label: 'New Clients', before: '8/mo', after: '54/mo', growth: '+575%' },
    ],
    duration: '6 months',
  },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="bg-[#020617] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2563eb]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-3 leading-tight">
            Real Results, <span className="text-[#facc15]">Real Growth</span>
          </h2>
          <p className="text-[#94a3b8] text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            Numbers don't lie. Here's what I've achieved for clients across different industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group bg-[#08142f] border border-white/8 rounded-3xl overflow-hidden hover:border-[#2563eb]/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={study.image}
                  alt={`${study.client} case study`}
                  width={400}
                  height={176}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08142f] via-[#08142f]/40 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#2563eb] text-xs font-semibold">
                    {study.industry}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
                    {study.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center justify-between">
                  {study.client}
                  <ArrowUpRight size={18} className="text-[#94a3b8] group-hover:text-[#facc15] transition-colors duration-300" />
                </h3>

                <div className="space-y-3">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-[#94a3b8] text-xs mb-0.5">{metric.label}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-xs line-through">{metric.before}</span>
                          <span className="text-white text-sm font-semibold">{metric.after}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/30">
                        <TrendingUp size={12} className="text-green-400" />
                        <span className="text-green-400 text-xs font-bold">{metric.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;