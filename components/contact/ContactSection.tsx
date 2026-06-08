import Link from "next/link";

const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";
const LOGIN_URL = "https://shop.wholesale.damata.coffee/account/login";

export default function ContactSection() {
  return (
    <section
      className="section section--dark"
      id="contact"
      style={{ paddingTop: 72 }}
    >
      <div className="wrap">
        <div className="contact-layout">
          <div className="contact-left anim">
            <div>
              <span className="eyebrow">Reach Out</span>
              <h2 className="contact-headline">
                We&apos;d love to hear from you.
              </h2>
            </div>
            <p className="contact-desc">
              Whether you run a coffee truck, manage short-term rentals, or
              operate a hospitality business — apply for a wholesale account and
              we&apos;ll get you set up with the right pricing.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@damata.coffee
              </div>
              <div className="contact-detail">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                quote@damata.coffee — custom quotes &amp; green beans
              </div>
              <div className="contact-detail">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z" />
                </svg>
                Serving operators nationwide
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                paddingTop: 8,
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: ".2px",
                }}
              >
                Looking for a specific solution?
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/coffee-trucks"
                  className="btn btn--ghost-white"
                  style={{ fontSize: 13, padding: "10px 20px" }}
                >
                  Coffee Trucks
                </Link>
                <Link
                  href="/short-term-rentals"
                  className="btn btn--ghost-white"
                  style={{ fontSize: 13, padding: "10px 20px" }}
                >
                  Short-Term Rentals
                </Link>
              </div>
            </div>
          </div>

          <div className="form-box anim">
            <span className="eyebrow">Wholesale Application</span>
            <h3
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(24px,3vw,32px)",
                fontWeight: 600,
                color: "var(--white)",
                lineHeight: 1.15,
                margin: "10px 0 14px",
              }}
            >
              Apply for a wholesale account
            </h3>
            <ul className="apply-list">
              <li>Approval typically within 1–2 business days</li>
              <li>See live pricing and volume tiers once approved</li>
              <li>Order online — pay by card or wire transfer</li>
              <li>Whole bean or ground, with private-label options</li>
            </ul>
            <a
              href={SIGNUP_URL}
              className="btn btn--accent btn--full"
              style={{ padding: "15px 30px", fontSize: 14.5, marginTop: 24 }}
            >
              Apply for Wholesale Access →
            </a>
            <p className="apply-note">
              Already approved?{" "}
              <a href={LOGIN_URL}>Sign in to your account</a>
            </p>
            <p className="apply-note">
              Questions? <a href="mailto:contact@damata.coffee">contact@damata.coffee</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
