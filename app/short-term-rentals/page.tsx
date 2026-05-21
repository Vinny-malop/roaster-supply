import type { Metadata } from "next";
import HeroSection from "@/components/short-term-rentals/HeroSection";
import ProductSection from "@/components/short-term-rentals/ProductSection";
import WhyItMattersSection from "@/components/short-term-rentals/WhyItMattersSection";
import CostValueSection from "@/components/short-term-rentals/CostValueSection";
import HowItWorksSection from "@/components/short-term-rentals/HowItWorksSection";
import PricingSection from "@/components/short-term-rentals/PricingSection";
import ContactSection from "@/components/short-term-rentals/ContactSection";

export const metadata: Metadata = {
  title: "Roaster Supply Co. — Guest Coffee for Short-Term Rentals",
  description:
    "Simple, high-quality guest coffee for Airbnb hosts and property managers. A small upgrade that improves guest experience and generates better reviews.",
  openGraph: {
    title: "Roaster Supply Co. — Guest Coffee for Short-Term Rentals",
    description:
      "A simple guest upgrade that makes your properties feel more thoughtful — and gives guests one more reason to leave a 5-star review.",
    type: "website",
  },
};

export default function ShortTermRentalsPage() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <WhyItMattersSection />
      <CostValueSection />
      <HowItWorksSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
