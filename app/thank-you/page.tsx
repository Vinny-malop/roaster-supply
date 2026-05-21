import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — Roaster Supply Co.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section
      className="section section--dark"
      style={{
        minHeight: "calc(100vh - 160px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="wrap" style={{ textAlign: "center", maxWidth: 560 }}>
        <div
          className="form-success__icon"
          style={{ margin: "0 auto 28px" }}
        >
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span className="eyebrow">Message Received</span>
        <h1
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(28px,4vw,44px)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.12,
            marginBottom: 18,
          }}
        >
          Thank you!
        </h1>
        <p
          style={{
            fontSize: "clamp(15px,1.7vw,18px)",
            color: "rgba(255,255,255,0.62)",
            lineHeight: 1.72,
            fontWeight: 300,
            marginBottom: 40,
          }}
        >
          We&apos;ll be in touch within one business day.
        </p>
        <Link href="/" className="btn btn--ghost-white">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
