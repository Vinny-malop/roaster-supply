import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Terms of Service — Roaster Supply Co.",
  description: "Terms of Service for Roaster Supply Co.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Service"
        sub="Please read these terms carefully before placing an order or using our services."
      />
      <LegalContent lastUpdated="April 2026">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing our website or placing an order with Roaster Supply Co.,
          you agree to be bound by these Terms of Service. If you do not agree
          to these terms, please do not use our services.
        </p>

        <h2>2. Products and Orders</h2>
        <p>
          All orders are subject to product availability. We reserve the right
          to refuse or cancel any order at our discretion. Pricing is subject
          to change without notice, though we will honor quoted prices for
          active orders.
        </p>
        <p>
          Minimum order quantities may apply. Volume pricing tiers are
          calculated at the time of order based on quantities requested.
        </p>

        <h2>3. Payment Terms</h2>
        <p>
          Payment terms are established at the time of account setup. We accept
          standard business payment methods. Late payments may result in order
          holds or adjustments to pricing terms.
        </p>

        <h2>4. Shipping and Delivery</h2>
        <p>
          We ship to business addresses within the United States. Shipping
          timelines are estimates and may vary. We are not responsible for
          delays caused by carriers or circumstances beyond our control.
        </p>
        <p>
          Risk of loss and title for products passes to you upon delivery to
          the carrier.
        </p>

        <h2>5. Private Label Services</h2>
        <p>
          Clients using private label services are responsible for providing
          accurate branding files and approving proofs before production. We
          are not responsible for errors in approved artwork. Minimum
          quantities apply for private label orders.
        </p>

        <h2>6. Returns and Refunds</h2>
        <p>
          Due to the perishable nature of coffee, we do not accept returns on
          delivered product unless there is a quality issue. If you receive a
          defective or incorrect order, please contact us within 7 days of
          delivery. We will work with you to resolve the issue.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, and logos, is
          the property of Roaster Supply Co. and may not be reproduced without
          written permission. Client-provided branding assets remain the
          property of the client.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Roaster Supply Co. shall not
          be liable for any indirect, incidental, special, or consequential
          damages arising from your use of our products or services. Our total
          liability shall not exceed the amount paid for the specific order in
          question.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of the State of
          [State], without regard to its conflict of law provisions.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time.
          Changes will be posted on this page with an updated date. Continued
          use of our services after changes constitutes acceptance of the
          updated terms.
        </p>

        <h2>11. Contact</h2>
        <p>If you have questions about these terms, please contact us:</p>
        <p>
          <strong>Roaster Supply Co.</strong>
          <br />
          hello@roastersupplyco.com
          <br />
          (888) 762-7837
        </p>
      </LegalContent>
    </>
  );
}
