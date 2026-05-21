import Link from "next/link";

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
            Volume-based wholesale pricing for 5lb bags. Better pricing as you
            scale.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="tier anim">
            <span className="tier__label">5lb Bags — Wholesale</span>
            <h3 className="tier__name">5lb Wholesale Bags</h3>
            <p className="tier__vol">
              Built for daily operations — consistent, easy to dial in, and
              priced for high-volume service.
            </p>

            <div
              style={{
                marginTop: 12,
                borderTop: "1px solid rgba(17,17,17,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(17,17,17,0.06)",
                }}
              >
                <div style={{ fontWeight: 600 }}>4–9 bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 20,
                    color: "var(--black)",
                  }}
                >
                  $73{" "}
                  <span style={{ fontSize: 13, color: "#888" }}>/ bag</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(17,17,17,0.06)",
                }}
              >
                <div style={{ fontWeight: 600 }}>10–19 bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 20,
                    color: "var(--black)",
                  }}
                >
                  $65{" "}
                  <span style={{ fontSize: 13, color: "#888" }}>/ bag</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(17,17,17,0.06)",
                }}
              >
                <div style={{ fontWeight: 600 }}>20+ bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 20,
                    color: "var(--black)",
                  }}
                >
                  $60{" "}
                  <span style={{ fontSize: 13, color: "#888" }}>/ bag</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                }}
              >
                <div style={{ fontWeight: 600 }}>40+ bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 16,
                    color: "#444",
                  }}
                >
                  Contact us
                </div>
              </div>
            </div>

            <ul
              className="tier__feats"
              style={{
                marginTop: "auto",
                paddingTop: 18,
                marginBottom: 8,
              }}
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
            <h3 className="tier__name">12oz Private Label Bags</h3>
            <p className="tier__vol">
              Retail-ready bags with your brand — designed to create additional
              revenue for your truck.
            </p>

            <div
              style={{
                marginTop: 12,
                borderTop: "1px solid rgba(17,17,17,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(17,17,17,0.06)",
                }}
              >
                <div style={{ fontWeight: 600 }}>24–49 bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 20,
                    color: "var(--black)",
                  }}
                >
                  $12.00{" "}
                  <span style={{ fontSize: 13, color: "#888" }}>/ bag</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(17,17,17,0.06)",
                }}
              >
                <div style={{ fontWeight: 600 }}>50–99 bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 20,
                    color: "var(--black)",
                  }}
                >
                  $10.50{" "}
                  <span style={{ fontSize: 13, color: "#888" }}>/ bag</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(17,17,17,0.06)",
                }}
              >
                <div style={{ fontWeight: 600 }}>100+ bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 20,
                    color: "var(--black)",
                  }}
                >
                  $9.25{" "}
                  <span style={{ fontSize: 13, color: "#888" }}>/ bag</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 0",
                }}
              >
                <div style={{ fontWeight: 600 }}>250+ bags</div>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 16,
                    color: "#444",
                  }}
                >
                  Contact us
                </div>
              </div>
            </div>

            <ul
              className="tier__feats"
              style={{
                marginTop: "auto",
                paddingTop: 18,
                marginBottom: 8,
              }}
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
          <Link href="/contact" className="btn btn--primary">
            Get Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
