const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, scalable pricing</h2>
          <p>Pricing improves as your volume grows.</p>
        </div>

        <div
          className="anim"
          style={{
            maxWidth: 520,
            margin: "48px auto 0",
            textAlign: "center",
          }}
        >
          <div
            style={{
              border: "1.5px solid rgba(42,37,32,0.1)",
              borderRadius: "var(--radius-lg)",
              padding: "48px 40px",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 20,
              }}
            >
              Guest Coffee · Single Bags
            </p>
            <p
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(36px,5vw,54px)",
                fontWeight: 700,
                lineHeight: 1,
                color: "var(--black)",
                marginBottom: 8,
              }}
            >
              ~$7
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#888",
                marginBottom: 28,
              }}
            >
              per guest stay
            </p>
            <div
              style={{
                borderTop: "1px solid rgba(42,37,32,0.07)",
                paddingTop: 24,
                marginBottom: 28,
              }}
            >
              <p
                style={{
                  fontSize: 14.5,
                  color: "#666",
                  lineHeight: 1.7,
                }}
              >
                Better pricing available for larger operators. Volume tiers
                apply at 10, 25, and 50+ units.
              </p>
            </div>
            <a
              href={SIGNUP_URL}
              className="btn btn--primary btn--full"
              style={{ padding: "14px 30px", marginBottom: 12 }}
            >
              Set up my properties
            </a>
            <a
              href="#contact"
              className="btn btn--ghost btn--full"
              style={{ padding: "12px 30px", marginBottom: 16 }}
            >
              Talk to us first
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
