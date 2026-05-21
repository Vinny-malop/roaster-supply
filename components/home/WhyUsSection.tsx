export default function WhyUsSection() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Why Us</span>
          <h2>Reliable supply. Better experience.</h2>
        </div>

        <div className="why-grid">
          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-5" />
              </svg>
            </div>
            <h3 className="why-card__title">Brazilian Origin</h3>
            <p className="why-card__text">
              Specialty-grade coffee sourced directly from trusted Brazilian
              producers with close relationships and fewer middle layers.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="why-card__title">Consistent Quality</h3>
            <p className="why-card__text">
              Roasted for repeatability. The same profile, batch to batch, so
              your product or guest experience never varies.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3 className="why-card__title">Built for Operators</h3>
            <p className="why-card__text">
              Pricing, packaging, and support designed for businesses — not
              consumers. Volume tiers, flexible formats, recurring delivery.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <h3 className="why-card__title">Scalable Pricing</h3>
            <p className="why-card__text">
              Wholesale rates that improve as you grow. Better margins at every
              volume tier, with no minimum surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
