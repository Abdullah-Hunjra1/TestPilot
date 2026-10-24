import React from 'react';
import { MarketingNavbar } from '@/components/marketing/MarketingNavbar';
import { HeroSection } from '@/components/marketing/HeroSection';
import { HowItWorksSection } from '@/components/marketing/HowItWorksSection';
import { FeaturesSection } from '@/components/marketing/FeaturesSection';
import { PricingSection } from '@/components/marketing/PricingSection';
import { SupportSection } from '@/components/marketing/SupportSection';
import { MarketingFooter } from '@/components/marketing/MarketingFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 selection:bg-violet-100 selection:text-violet-900 flex flex-col font-sans antialiased">
      {/* 1. Sticky Navigation Bar */}
      <MarketingNavbar />

      <main className="flex-1">
        {/* 2. Hero Section with Polished Dashboard Preview */}
        <HeroSection />

        {/* 3. How It Works (4-step walkthrough) */}
        <HowItWorksSection />

        {/* 4. Core Features */}
        <FeaturesSection />

        {/* 5. Verified Pricing & Credits / Roadmap Placeholder */}
        <PricingSection />

        {/* 6. Support & FAQ Section */}
        <SupportSection />
      </main>

      {/* 7. Marketing Footer */}
      <MarketingFooter />
    </div>
  );
}
