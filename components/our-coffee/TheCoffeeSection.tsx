export default function TheCoffeeSection() {
  return (
    <section className="section section--cream" id="the-coffee">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">The Coffee</span>
          <h2>A single origin worth talking about.</h2>
          <p>
            Specialty-grade Brazilian coffee with a clean, traceable supply
            chain and a profile built for consistency.
          </p>
        </div>

        <div className="why-grid" style={{ marginTop: 56 }}>
          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-5" />
              </svg>
            </div>
            <h3 className="why-card__title">100% Arabica</h3>
            <p className="why-card__text">
              No robusta blends, no filler. Pure Arabica beans selected for
              their sweetness, clarity, and consistency across every roast.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z" />
              </svg>
            </div>
            <h3 className="why-card__title">Minas Gerais &amp; Espírito Santo</h3>
            <p className="why-card__text">
              Sourced from Brazil&apos;s two most celebrated specialty coffee
              regions — high altitude farms with ideal conditions for complex,
              balanced flavor.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="why-card__title">SCA Score 82+</h3>
            <p className="why-card__text">
              Specialty grade by Specialty Coffee Association standards. Every
              lot is cupped and scored — only batches that meet the threshold
              ship.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 2h18v4H3z" />
                <path d="M3 10h18v4H3z" />
                <path d="M3 18h18v4H3z" />
              </svg>
            </div>
            <h3 className="why-card__title">Natural Process</h3>
            <p className="why-card__text">
              Sun-dried with the fruit intact, producing a naturally sweet,
              full-bodied cup with low acidity — performs beautifully as both
              espresso and filter.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 12a4 4 0 018 0" />
              </svg>
            </div>
            <h3 className="why-card__title">Medium Roast</h3>
            <p className="why-card__text">
              Roasted to bring out the bean&apos;s natural sweetness and body —
              versatile enough for drip, espresso, and single-serve formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
