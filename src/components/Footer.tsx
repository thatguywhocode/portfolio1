import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Services: ['SEO Optimization', 'Keyword Research', 'Technical SEO', 'Content Strategy', 'Link Building'],
  Company: ['About Me', 'Case Studies', 'Testimonials', 'Blog', 'Pricing'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <p className="font-heading text-2xl font-bold text-white">
                Royal<span className="text-[#facc15]">.</span>Butola
              </p>
              <p className="text-[#94a3b8] text-sm mt-2 leading-relaxed max-w-xs">
                SEO Specialist & Digital Strategist helping businesses grow their organic presence and turn search traffic into revenue.
              </p>
            </div>

            <div className="space-y-2.5">
              <a href="mailto:alex@alexmorgan.seo" className="flex items-center gap-2.5 text-[#94a3b8] text-sm hover:text-white transition-colors duration-200">
                <Mail size={15} className="text-[#2563eb]" />
                royalbutola001@gmail.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2.5 text-[#94a3b8] text-sm hover:text-white transition-colors duration-200">
                <Phone size={15} className="text-[#2563eb]" />
                9898098909
              </a>
              <p className="flex items-center gap-2.5 text-[#94a3b8] text-sm">
                <MapPin size={15} className="text-[#2563eb]" />
                Delhi, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#94a3b8] hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#94a3b8] text-sm hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94a3b8] text-xs">
            © 2026 royalbutola. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#94a3b8] text-xs hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-[#94a3b8] text-xs hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;