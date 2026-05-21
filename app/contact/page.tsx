import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Roaster Supply Co.",
  description:
    "Get in touch with Roaster Supply Co. Tell us about your business and we'll send pricing and recommendations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Let's build your coffee program."
        sub="Tell us about your business and we'll send pricing and the best options for your operation."
      />
      <ContactSection />
    </>
  );
}
