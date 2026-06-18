import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
};

const floatAnim = {
  animate: { y: [0, -12, 0], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } },
};

const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#020617] pt-20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#08142f]/80 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 text-[#2563eb] text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              SEO Specialist & Digital Strategist
            </span>
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Smart SEO<br />
            Strategies That<br />
            <span className="text-[#facc15]">Grow Your Brand.</span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-lg">
            I help businesses dominate search rankings with data-driven SEO strategies, technical expertise, and content that converts. 2+ years turning organic traffic into measurable revenue.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/30"
            >
              Hire Me <ArrowRight size={18} />
            </a>
            <a
              href="#results"
              onClick={(e) => { e.preventDefault(); document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              View Results <TrendingUp size={18} />
            </a>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
              ].map((src, i) => (
                <img key={i} src={src} alt="Happy client" width={36} height={36} className="w-9 h-9 rounded-full border-2 border-[#020617] object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#facc15] text-[#facc15]" />)}
                <span className="text-white font-bold text-sm ml-1">4.9</span>
              </div>
              <p className="text-[#94a3b8] text-xs">from 200+ happy clients</p>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          {/* Glow ring */}
          <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-[#2563eb]/20 blur-2xl" />
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-[#2563eb]/30" />
          <div className="absolute w-60 h-60 lg:w-80 lg:h-80 rounded-full border border-[#2563eb]/20" />

          {/* Profile image */}
          <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#2563eb]/40 shadow-2xl shadow-blue-500/30">
            <img
              src="../../public/akhil.jpeg"
              alt="Royal Butola, SEO Specialist"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating card: Projects */}
          <motion.div
            animate={floatAnim.animate}
            className="absolute -left-4 lg:-left-12 top-8 z-20 bg-[#08142f]/90 backdrop-blur-md border border-[#2563eb]/30 rounded-2xl p-4 shadow-xl shadow-blue-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                <Award size={20} className="text-[#2563eb]" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none"><Counter target={550} suffix="+" /></p>
                <p className="text-[#94a3b8] text-xs mt-0.5">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card: Clients */}
          <motion.div
            animate={{ y: [0, 10, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
            className="absolute -right-4 lg:-right-8 bottom-16 z-20 bg-[#08142f]/90 backdrop-blur-md border border-[#facc15]/30 rounded-2xl p-4 shadow-xl shadow-yellow-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#facc15]/15 flex items-center justify-center">
                <Users size={20} className="text-[#facc15]" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none"><Counter target={100} suffix="+" /></p>
                <p className="text-[#94a3b8] text-xs mt-0.5">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card: Growth */}
          <motion.div
            animate={{ y: [0, -8, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
            className="absolute right-0 lg:right-4 top-4 z-20 bg-[#08142f]/90 backdrop-blur-md border border-green-500/30 rounded-2xl px-4 py-3 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-bold text-sm">+320% Traffic</span>
            </div>
            <p className="text-[#94a3b8] text-xs mt-0.5">Average client growth</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;