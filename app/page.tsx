"use client";

import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
// import { FounderSection } from "@/components/layout/sections/founder";
import { HeroSection } from "@/components/layout/sections/hero";
// import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      {/* <FeaturesSection /> */}
      <ServicesSection />
      {/* <FounderSection />  */}
      <TeamSection />
      <TestimonialSection />
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
