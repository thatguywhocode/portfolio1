import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const stats = [
  { value: '450+', label: 'Websites Ranked' },
  { value: '750+', label: 'SEO Campaigns' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '7+', label: 'Years Experience' },
];

const skills = [
  'Technical SEO Audits',
  'On-Page & Off-Page Optimization',
  'Core Web Vitals Optimization',
  'Link Building Strategies',
  'Local SEO & Google Business',
  'E-commerce SEO',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#020617] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-4 w-96 h-96 bg-[#2563eb]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=750&fit=crop"
              alt="Alex Morgan working at a modern workspace"
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
          </div>

{/* Floating experience badge */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
className="absolute right-0 top-6 sm:right-2 sm:top-8 lg:-right-4 lg:top-10 z-20 bg-[#08142f]/95 backdrop-blur-md border border-[#2563eb]/30 rounded-2xl p-3 sm:p-4 lg:p-5 shadow-xl shadow-blue-500/10">
  <p className="text-[#facc15] font-bold text-2xl sm:text-3xl">7+</p>
  <p className="text-[#94a3b8] text-xs sm:text-sm mt-1">
    Years of
    <br />
    Experience
  </p>
</motion.div>

{/* Floating award badge */}
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
  className="absolute left-1 bottom-4 sm:left-2 sm:bottom-8 lg:-left-8 lg:bottom-12 bg-[#08142f]/95 backdrop-blur-md border border-[#facc15]/20 rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl"
>
  <p className="text-white font-bold text-xs sm:text-sm">
    🏆 Top SEO Expert
  </p>
  <p className="text-[#94a3b8] text-[10px] sm:text-xs mt-1">
    Clutch.co 2024
  </p>
</motion.div>
</motion.div>

        {/* Right content */}
        <div className="flex flex-col gap-6">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">About Me</span>
          </motion.div>

          <motion.h2 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Turning Search Intent Into<br />
            <span className="text-[#facc15]">Business Growth</span>
          </motion.h2>

          <motion.p custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
            I'm Alex Morgan, an SEO Specialist with 7+ years of experience helping brands from startups to Fortune 500 companies achieve top search rankings. My approach combines deep technical expertise with creative content strategy to deliver sustainable organic growth.
          </motion.p>

          <motion.ul custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2.5 text-[#94a3b8] text-sm">
                <CheckCircle size={16} className="text-[#2563eb] shrink-0" />
                {skill}
              </li>
            ))}
          </motion.ul>

          {/* Stats grid */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#08142f] border border-white/8 rounded-2xl p-4 text-center hover:border-[#2563eb]/40 transition-colors duration-300">
                <p className="font-heading text-2xl font-bold text-[#facc15]">{stat.value}</p>
                <p className="text-[#94a3b8] text-xs mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;