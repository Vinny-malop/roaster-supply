import Link from "next/link";

const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";

export default function FinalCtaSection() {
  return (
    <section className="section section--cream" id="cta">
      <div className="wrap" style={{ textAlign: "center", maxWidth: 640 }}>
        <div className="anim">
          <span className="eyebrow">Get Started</span>
          <h2>Ready to put this coffee to work?</h2>
          <p
            style={{
              color: "rgba(42,37,32,0.58)",
              fontSize: "clamp(15px,1.7vw,17.5px)",
              lineHeight: 1.72,
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            Tell us about your operation and we&apos;ll send pricing and the
            right setup for your volume.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={SIGNUP_URL}
              className="btn btn--primary"
              style={{ fontSize: 15, padding: "15px 36px" }}
            >
              Apply for Wholesale Access
            </a>
            <Link
              href="/coffee-trucks"
              className="btn btn--ghost"
              style={{ fontSize: 15, padding: "15px 36px" }}
            >
              Coffee Trucks
            </Link>
            <Link
              href="/short-term-rentals"
              className="btn btn--ghost"
              style={{ fontSize: 15, padding: "15px 36px" }}
            >
              Short-Term Rentals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
