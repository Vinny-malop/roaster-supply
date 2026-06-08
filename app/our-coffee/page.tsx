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
      <ImageBand
        src="/farm-1.jpg"
        alt="Damata's coffee plantation in the mountains of Brazil"
      />
      <TheCoffeeSection />
      <ImageBand
        src="/farm-4.jpg"
        alt="Freshly harvested coffee cherries piled in a trailer at the farm"
        variant="portrait"
      />
      <RoastedToOrderSection />
      <ImageBand
        src="/farm-2.jpg"
        alt="A grower tossing freshly picked coffee cherries over the drying beds"
        variant="portrait"
      />
      <WhyItMattersSection />
      <ImageBand
        src="/farm-5.jpg"
        alt="Coffee cherries drying under a poly-tunnel on the farm"
        variant="portrait"
      />
      <section className="section section--cream">
        <div className="wrap" style={{ maxWidth: 780, textAlign: "center" }}>
          <p className="pull-quote">
            Grown by small family farms in the Brazilian highlands — harvested,
            naturally dried, then roasted to order and shipped to you at peak
            freshness.
          </p>
        </div>
      </section>
      <ImageBand
        src="/farm-3.jpg"
        alt="A Damata Coffee bag resting on a tray of freshly roasted beans"
        variant="portrait"
      />
      <FinalCtaSection />
    </>
  );
}
