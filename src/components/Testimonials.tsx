import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow SaaS',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    text: "Alex transformed our organic traffic from 3K to 41K monthly visitors in under a year. The ROI has been incredible — we've reduced our paid ad spend by 60% while growing faster than ever.",
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder, HomeServe Pro',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    text: "We went from page 4 to the #1 spot for our main keywords in just 6 months. Phone calls tripled and we had to hire two more staff to handle the new business. Absolutely worth every penny.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, StyleBoutique',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    text: "The technical SEO audit alone uncovered issues that were costing us thousands in lost traffic. Alex's systematic approach and clear reporting made the whole process transparent and results-driven.",
  },
  {
    name: 'David Park',
    role: 'CTO, DataVault Inc.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    text: "What impressed me most was the depth of technical knowledge. Alex understood our complex SaaS product and created content strategies that actually resonated with our developer audience.",
  },
  {
    name: 'Lisa Thompson',
    role: 'Owner, Bloom Wellness',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    text: "From zero online presence to ranking for 500+ keywords in our local market. Alex's local SEO expertise is unmatched. Our studio is now fully booked weeks in advance thanks to organic search.",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="bg-[#020617] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-[#2563eb]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-3 leading-tight">
            What Clients <span className="text-[#facc15]">Say</span>
          </h2>
          <p className="text-[#94a3b8] text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            Don't take my word for it — hear from the businesses I've helped grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="wait">
            {visible.map((t, i) => (
              <motion.article
                key={`${t.name}-${current}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-[#08142f]/80 backdrop-blur-sm border border-white/8 rounded-3xl p-7 hover:border-[#2563eb]/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[#facc15] text-[#facc15]" />
                  ))}
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#2563eb]/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#94a3b8] text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#2563eb] hover:border-[#2563eb] transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-[#2563eb]' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#2563eb] hover:border-[#2563eb] transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;