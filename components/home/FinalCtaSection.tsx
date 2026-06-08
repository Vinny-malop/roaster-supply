const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";

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
            Apply for a wholesale account and we&apos;ll set you up with the
            right pricing for your operation — usually within 1–2 business days.
          </p>
          <a
            href={SIGNUP_URL}
            className="btn btn--accent"
            style={{ fontSize: 15, padding: "15px 36px" }}
          >
            Apply for Wholesale Access
          </a>
        </div>
      </div>
    </section>
  );
}
