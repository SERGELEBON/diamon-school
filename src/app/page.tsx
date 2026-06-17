'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { HeroSlider } from '@/components/HeroSlider';
import { AboutSection } from '@/components/AboutSection';
import { FounderSection } from '@/components/FounderSection';
import { FormationsSection } from '@/components/FormationsSection';
import { PricingTuitionSection } from '@/components/PricingTuitionSection';
import { CTABanner } from '@/components/CTABanner';
import { HowToRegisterSection } from '@/components/HowToRegisterSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { FAQSection } from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <AboutSection />
        <FounderSection />
        <FormationsSection />
        <PricingTuitionSection />
        <CTABanner />
        <HowToRegisterSection />
        <TestimonialsSection />
        <PartnersSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
