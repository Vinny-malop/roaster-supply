export default function CostValueSection() {
  return (
    <section className="section section--dark" id="value">
      <div className="wrap" style={{ textAlign: "center", maxWidth: 640 }}>
        <div className="anim">
          <span className="eyebrow">The Math</span>
          <h2 style={{ color: "var(--white)", marginBottom: 20 }}>
            High impact. Low cost.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: 14,
              letterSpacing: ".3px",
              marginBottom: 16,
            }}
          >
            And the best part...
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "clamp(16px,1.9vw,20px)",
              lineHeight: 1.72,
              fontWeight: 300,
              marginBottom: 10,
            }}
          >
            From about $7 per stay, you can give guests a better experience with
            almost no added complexity.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: 14,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            Less than 0.5% of the average stay.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.42)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            One of the simplest upgrades you can make across your properties.
          </p>
        </div>
      </div>
    </section>
  );
}
