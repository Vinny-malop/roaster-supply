const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";
const LOGIN_URL = "https://shop.wholesale.damata.coffee/account/login";

export default function ContactSection() {
  return (
    <section className="section section--dark" id="contact">
      <div className="wrap">
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.55)",
            fontSize: 15,
            maxWidth: 540,
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          Built for operators who want reliable coffee, simple ordering, and
          room to grow.
        </p>
        <div className="contact-layout">
          <div className="contact-left anim">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2 className="contact-headline">
                Let&apos;s improve your reviews.
              </h2>
            </div>
            <p className="contact-desc">
              Apply for a wholesale account and tell us how many properties you
              manage. Once approved, you&apos;ll see pricing and can reorder
              guest coffee online whenever you restock.
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
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z" />
                </svg>
                Serving property managers nationwide
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
              <li>Guest-ready single bags and 5lb bags for larger portfolios</li>
              <li>Reorder online in minutes — pay by card or wire transfer</li>
              <li>Volume pricing that improves as you add properties</li>
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
