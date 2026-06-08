export default function WhyItMattersSection() {
  return (
    <section className="section section--dark" id="why-it-matters">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Why It Matters</span>
          <h2 style={{ color: "var(--white)" }}>
            Coffee your customers actually notice.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.58)" }}>
            Freshness, consistency, and quality aren&apos;t marketing words —
            they&apos;re what separates a 5-star review from a 3-star one.
          </p>
        </div>

        <div className="why-grid why-grid--3" style={{ marginTop: 56 }}>
          <div className="why-card why-card--dark anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <h3 className="why-card__title">Guests notice fresh coffee</h3>
            <p className="why-card__text">
              Stale, supermarket-grade coffee gets mentioned in reviews — and
              not positively. Fresh-roasted specialty coffee becomes a detail
              guests mention unprompted.
            </p>
          </div>

          <div className="why-card why-card--dark anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="why-card__title">Repeatable SCA 82+ quality</h3>
            <p className="why-card__text">
              Every batch is cupped and scored. You get the same quality profile
              every reorder — not a lucky find, but a reliable standard.
            </p>
          </div>

          <div className="why-card why-card--dark anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M18 8h1a4 4 0 010 8h-1" />
                <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
            <h3 className="why-card__title">Works as espresso and filter</h3>
            <p className="why-card__text">
              Natural process medium roast is one of the most versatile profiles
              available — performs well in superautomatic machines, drip
              brewers, and espresso setups alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
