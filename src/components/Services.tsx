import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, Code2, FileText, Share2, Target } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Comprehensive on-page and off-page SEO strategies that push your website to the top of search results and keep it there.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=200&h=200&fit=crop',
    color: '#2563eb',
  },
  {
    icon: BarChart2,
    title: 'Keyword Research',
    description: 'Deep-dive keyword analysis to uncover high-intent, low-competition opportunities that drive qualified traffic to your site.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
    color: '#facc15',
  },
  {
    icon: Code2,
    title: 'Technical SEO',
    description: 'Site speed optimization, Core Web Vitals, structured data, crawlability fixes — the technical foundation for ranking success.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop',
    color: '#2563eb',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Data-driven content plans that align with search intent, build topical authority, and convert readers into customers.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=200&h=200&fit=crop',
    color: '#facc15',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Integrated social strategies that amplify your SEO efforts, build brand awareness, and drive referral traffic.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop',
    color: '#2563eb',
  },
  {
    icon: Target,
    title: 'Conversion Rate Optimization',
    description: 'Turn your organic traffic into revenue with A/B testing, UX improvements, and data-backed conversion strategies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop',
    color: '#facc15',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#08142f] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#2563eb]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">What I Offer</span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-3 leading-tight">
            Services That <span className="text-[#facc15]">Drive Results</span>
          </h2>
          <p className="text-[#94a3b8] text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            Every service is tailored to your business goals, backed by data, and designed to deliver measurable ROI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#020617] border border-white/8 rounded-3xl p-6 overflow-hidden hover:border-[#2563eb]/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                {/* Top image */}
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#020617]/40" />
                </div>

                {/* Icon badge */}
                <div
                  className="absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
                >
                  <Icon size={18} style={{ color: service.color }} />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-[#facc15] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{service.description}</p>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;