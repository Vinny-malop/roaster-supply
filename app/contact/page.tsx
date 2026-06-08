import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Damata Coffee Wholesale",
  description:
    "Get in touch with Damata Coffee Wholesale. Apply for a wholesale account or ask us about volume pricing, private label, and custom quotes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Let's build your coffee program."
        sub="Apply for a wholesale account, or reach out about volume pricing, private label, and custom quotes."
      />
      <ContactSection />
    </>
  );
}
