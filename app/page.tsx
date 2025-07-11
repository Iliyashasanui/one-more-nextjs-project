
'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import DemoSection from '../components/DemoSection';
import UseCasesSection from '../components/UseCasesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <NewsletterSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
