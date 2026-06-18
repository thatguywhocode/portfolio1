import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import About from '../components/About';
import Services from '../components/Services';
import Results from '../components/Results';
import WhyMe from '../components/WhyMe';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <About />
        <Services />
        <Results />
        <WhyMe />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}