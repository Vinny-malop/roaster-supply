export default function WhyBrazilianSection() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Why Brazilian Coffee</span>
          <h2>Why Brazilian coffee works for coffee trucks</h2>
          <p>
            Reliable, approachable, and built for consistency in high-volume
            service.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                <path d="M8 12l3 3 5-5" />
              </svg>
            </div>
            <h3 className="why-card__title">Specialty Grade Only</h3>
            <p className="why-card__text">
              Clean, dependable coffee from trusted Brazilian producers.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="why-card__title">Consistent in the Cup</h3>
            <p className="why-card__text">
              Roasted for repeatability, so your coffee tastes right week after
              week.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="why-card__title">Direct from Origin</h3>
            <p className="why-card__text">
              Sourced with close relationships and fewer middle layers.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="why-card__title">Built for Operators</h3>
            <p className="why-card__text">
              Pricing, packaging, and support designed for business use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
