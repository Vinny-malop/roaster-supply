import type { Metadata } from "next";
import HeroSection from "@/components/coffee-trucks/HeroSection";
import ProductsSection from "@/components/coffee-trucks/ProductsSection";
import WhyBrazilianSection from "@/components/coffee-trucks/WhyBrazilianSection";
import HowItWorksSection from "@/components/coffee-trucks/HowItWorksSection";
import PricingSection from "@/components/coffee-trucks/PricingSection";
import ContactSection from "@/components/coffee-trucks/ContactSection";

export const metadata: Metadata = {
  title:
    "Damata Coffee Wholesale — Brazilian Specialty Coffee for Coffee Trucks & Shops",
  description:
    "Wholesale 5lb bags and private label retail coffee for coffee trucks and coffee shops. Roast-to-order Brazilian specialty coffee, volume pricing, and recurring delivery.",
  openGraph: {
    title: "Damata Coffee Wholesale — Coffee for Coffee Trucks & Shops",
    description:
      "Consistent quality, volume wholesale pricing, and private label options — built for operators who want to serve better coffee and grow revenue.",
    type: "website",
  },
};

export default function CoffeeTrucksPage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <WhyBrazilianSection />
      <HowItWorksSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
