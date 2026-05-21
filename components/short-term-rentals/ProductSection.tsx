function CheckIcon() {
  return (
    <span className="check-icon">
      <svg viewBox="0 0 12 12">
        <polyline points="2 6 5 9.5 10 2.5" />
      </svg>
    </span>
  );
}

export default function ProductSection() {
  return (
    <section className="section section--cream" id="products">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">The Product</span>
          <h2>A simple coffee solution for your guests</h2>
          <p>
            Individually packaged coffee designed for short stays, easy
            placement, and consistent presentation across your properties.
          </p>
        </div>

        <div style={{ maxWidth: 560, margin: "52px auto 0" }}>
          <div className="p-card anim">
            <div className="p-card__img p-card__img--dark">
              <div className="bag">
                <div className="bag__shape bag__shape--dark">
                  <span className="bag__weight">1x</span>
                  <span className="bag__sub">Specialty Grade</span>
                  <span className="bag__brand">
                    Roaster
                    <br />
                    Supply Co.
                  </span>
                </div>
              </div>
              <span className="p-badge">Guest Ready</span>
            </div>
            <div className="p-card__body">
              <span className="p-card__tag">For Guest Units</span>
              <h3 className="p-card__title">Guest Coffee (Single Bags)</h3>
              <p className="p-card__desc">
                Clean, ready-to-use coffee packs that make every stay feel more
                complete.
              </p>
              <ul className="p-card__list">
                <li className="p-card__item">
                  <CheckIcon />
                  Pre-portioned for convenience
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Clean, premium presentation
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Easy to place in every unit
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Designed for short stays
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
