import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="bg-[#08142f] py-20 lg:py-28 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-[#2563eb]/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#2563eb]/20 rounded-full blur-[60px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#2563eb]/20 border border-[#2563eb]/40 flex items-center justify-center">
            <TrendingUp size={28} className="text-[#2563eb]" />
          </div>

          <h2 className="font-heading text-3xl lg:text-4xl xl:text-6xl font-bold text-white leading-tight">
            Let's Grow Your Business<br />
            <span className="text-[#facc15]">Organically</span>
          </h2>

          <p className="text-[#94a3b8] text-base lg:text-xl max-w-2xl leading-relaxed">
            Ready to stop paying for every click and start owning your search rankings? Let's build an SEO strategy that delivers compounding returns for years to come.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="mailto:alex@alexmorgan.seo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-semibold text-base hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-200 shadow-xl shadow-blue-500/30"
            >
              Start Your SEO Journey <ArrowRight size={18} />
            </a>
            <a
              href="mailto:alex@alexmorgan.seo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              Book a Free Audit
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-[#94a3b8] text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Free 30-min strategy call
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              No long-term contracts
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Results-focused approach
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;