import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Roaster Supply Co.",
  description: "Privacy Policy for Roaster Supply Co.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        sub="How we collect, use, and protect your information."
      />
      <LegalContent lastUpdated="April 2026">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you fill out a
          contact form, request pricing, or communicate with us. This may
          include your name, email address, phone number, company name, and
          details about your business.
        </p>
        <p>
          We may also collect certain information automatically when you visit
          our website, such as your IP address, browser type, and pages
          visited.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and send you pricing information</li>
          <li>Process and fulfill orders</li>
          <li>
            Send operational communications related to your account or orders
          </li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information with trusted service providers
          who assist us in operating our website and conducting our business,
          provided they agree to keep your information confidential.
        </p>
        <p>
          We may also disclose your information when required by law or to
          protect our rights and the safety of others.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes for which it was collected, including for the
          purposes of satisfying any legal, accounting, or reporting
          requirements.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to
          enhance your experience. You can instruct your browser to refuse all
          cookies or to indicate when a cookie is being sent.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your
          personal information, including the right to access, correct, or
          delete the data we hold about you. To exercise these rights, please
          contact us at the address below.
        </p>

        <h2>7. Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect your personal information against unauthorized access, loss,
          or misuse. However, no method of transmission over the Internet is
          100% secure.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page with an
          updated date. We encourage you to review this policy periodically.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at:
        </p>
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
