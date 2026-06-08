const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";

function TierFeatCheck() {
  return (
    <svg viewBox="0 0 16 16">
      <polyline points="2.5 8 6 11.5 13.5 3.5" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Pricing</span>
          <h2>Simple wholesale pricing</h2>
          <p>
            Volume-based pricing that improves as you scale. Approved accounts
            see live per-bag rates and tier discounts at checkout.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="tier anim">
            <span className="tier__label">5lb Bags — Wholesale</span>
            <h3 className="tier__name">5lb Wholesale Bags</h3>
            <p className="tier__vol">
              Built for daily service — consistent, easy to dial in, and priced
              for high-volume operations.
            </p>

            <div style={{ padding: "8px 0 4px" }}>
              <div
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "clamp(34px,5vw,46px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--black)",
                }}
              >
                From $65
                <span style={{ fontSize: 15, color: "#888", fontWeight: 400 }}>
                  {" "}
                  / bag
                </span>
              </div>
              <p style={{ fontSize: 13.5, color: "#888", marginTop: 8 }}>
                ≈ $13 / lb at volume · better per-bag rates as you scale
              </p>
            </div>

            <ul
              className="tier__feats"
              style={{ marginTop: "auto", paddingTop: 22, marginBottom: 8 }}
            >
              <li className="tier__feat">
                <TierFeatCheck /> Whole bean or ground to spec
              </li>
              <li className="tier__feat">
                <TierFeatCheck /> One-way valve packaging
              </li>
              <li className="tier__feat">
                <TierFeatCheck /> Consistent roast, batch to batch
              </li>
              <li className="tier__feat">
                <TierFeatCheck /> Built for recurring orders
              </li>
            </ul>
            <p style={{ color: "#666", margin: "6px 0 18px", fontSize: 14 }}>
              Designed for consistent daily service.
            </p>
          </div>

          <div className="tier anim">
            <span className="tier__label">Private Label</span>
            <h3 className="tier__name">12oz &amp; 8oz Private Label</h3>
            <p className="tier__vol">
              Retail-ready bags with your brand — a new revenue line for your
              truck, without running a roastery of your own.
            </p>

            <div style={{ padding: "8px 0 4px" }}>
              <div
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "clamp(28px,4vw,38px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "var(--black)",
                }}
              >
                Your brand, retail-ready
              </div>
              <p style={{ fontSize: 13.5, color: "#888", marginTop: 8 }}>
                Volume pricing — your rate is shown once your account is approved
              </p>
            </div>

            <ul
              className="tier__feats"
              style={{ marginTop: "auto", paddingTop: 22, marginBottom: 8 }}
            >
              <li className="tier__feat">
                <TierFeatCheck /> Your logo and label included
              </li>
              <li className="tier__feat">
                <TierFeatCheck /> Retail-ready packaging
              </li>
              <li className="tier__feat">
                <TierFeatCheck /> Available as whole bean or ground
              </li>
              <li className="tier__feat">
                <TierFeatCheck /> Built for resale margins
              </li>
            </ul>
            <p style={{ color: "#666", margin: "6px 0 18px", fontSize: 14 }}>
              Most partners retail these for $18–20 per bag.
            </p>
          </div>
        </div>

        <div style={{ margin: "40px auto 0", textAlign: "center" }}>
          <a href={SIGNUP_URL} className="btn btn--primary">
            Apply for Wholesale Access
          </a>
          <p style={{ color: "#888", fontSize: 13.5, marginTop: 16 }}>
            Larger orders or green beans? Request a quote:{" "}
            <a
              href="mailto:quote@damata.coffee"
              style={{ color: "var(--accent)" }}
            >
              quote@damata.coffee
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
