import type { Metadata } from "next";
import HeroSection from "@/components/coffee-trucks/HeroSection";
import ProductsSection from "@/components/coffee-trucks/ProductsSection";
import WhyBrazilianSection from "@/components/coffee-trucks/WhyBrazilianSection";
import HowItWorksSection from "@/components/coffee-trucks/HowItWorksSection";
import PricingSection from "@/components/coffee-trucks/PricingSection";
import ContactSection from "@/components/coffee-trucks/ContactSection";

export const metadata: Metadata = {
  title:
    "Roaster Supply Co. — Brazilian Specialty Coffee for Coffee Trucks",
  description:
    "Wholesale 5lb bags and private label retail coffee for coffee trucks. Consistent Brazilian specialty coffee, competitive pricing, and recurring delivery.",
  openGraph: {
    title: "Roaster Supply Co. — Coffee for Coffee Trucks",
    description:
      "Consistent quality, competitive wholesale pricing, and private label options — built for operators who want to serve better coffee and grow revenue.",
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
