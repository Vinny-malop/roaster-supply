import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import TheCoffeeSection from "@/components/our-coffee/TheCoffeeSection";
import RoastedToOrderSection from "@/components/our-coffee/RoastedToOrderSection";
import WhyItMattersSection from "@/components/our-coffee/WhyItMattersSection";
import FinalCtaSection from "@/components/our-coffee/FinalCtaSection";
import ImageBand from "@/components/common/ImageBand";

export const metadata: Metadata = {
  title: "Our Coffee — Damata Coffee Wholesale",
  description:
    "Single-origin Brazilian specialty coffee. 100% Arabica, SCA 82+, roasted to order and shipped fresh. Sourced from Minas Gerais and Espírito Santo.",
};

export default function OurCoffeePage() {
  return (
    <>
      <PageHero
        kicker="Single-Origin Brazilian Specialty Coffee"
        title="From the Farm. Roasted Fresh. Shipped Fast."
        sub="Single-origin Brazilian specialty coffee, roasted to order and air freighted to your door."
      />
      <TheCoffeeSection />
      <ImageBand
        src="/farm-1.jpg"
        alt="Damata's coffee plantation in the mountains of Brazil"
      />
      <RoastedToOrderSection />
      <ImageBand
        src="/farm-2.jpg"
        alt="A grower tossing freshly picked coffee cherries over the drying beds"
        variant="portrait"
      />
      <WhyItMattersSection />
      <ImageBand
        src="/farm-3.jpg"
        alt="A Damata Coffee bag resting on a tray of freshly roasted beans"
        variant="portrait"
      />
      <FinalCtaSection />
    </>
  );
}
