import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="section section--dark" id="cta">
      <div className="wrap" style={{ textAlign: "center", maxWidth: 680 }}>
        <div className="anim">
          <span className="eyebrow">Get Started</span>
          <h2 style={{ color: "var(--white)", marginBottom: 20 }}>
            Let&apos;s build your coffee program.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.58)",
              fontSize: "clamp(15px,1.7vw,17.5px)",
              lineHeight: 1.72,
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            Tell us about your business and we&apos;ll recommend the best setup
            for your operation.
          </p>
          <Link
            href="/contact"
            className="btn btn--accent"
            style={{ fontSize: 15, padding: "15px 36px" }}
          >
            Get Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
