function CheckIcon() {
  return (
    <span className="check-icon">
      <svg viewBox="0 0 12 12">
        <polyline points="2 6 5 9.5 10 2.5" />
      </svg>
    </span>
  );
}

export default function ProductsSection() {
  return (
    <section className="section section--cream" id="products">
      <div className="wrap">
        <div className="sec-head anim">
          <span className="eyebrow">Our Products</span>
          <h2>Two ways to grow your truck.</h2>
          <p>One for daily service. One for retail revenue.</p>
        </div>

        <div className="products-grid">
          <div className="p-card anim">
            <div className="p-card__img p-card__img--dark">
              <div className="bag">
                <div className="bag__shape bag__shape--dark">
                  <span className="bag__weight">5lb</span>
                  <span className="bag__sub">Specialty Grade</span>
                  <span className="bag__brand">
                    Damata
                    <br />
                    Coffee
                  </span>
                </div>
              </div>
              <span className="p-badge">Operational</span>
            </div>
            <div className="p-card__body">
              <span className="p-card__tag">For Daily Operations</span>
              <h3 className="p-card__title">5lb Specialty Bags</h3>
              <p className="p-card__desc">
                Consistent Brazilian coffee for high-volume service — roasted
                for reliability, easy to dial in, and priced for operators.
              </p>
              <ul className="p-card__list">
                <li className="p-card__item">
                  <CheckIcon />
                  Whole bean or ground to spec
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  One-way valve packaging
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Consistent roast, batch to batch
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Built for recurring orders
                </li>
              </ul>
            </div>
          </div>

          <div className="p-card anim">
            <div className="p-card__img p-card__img--light">
              <div className="bag">
                <div className="bag__shape bag__shape--cream">
                  <span className="bag__weight">12oz</span>
                  <span
                    className="bag__sub"
                    style={{ color: "rgba(42,37,32,0.42)" }}
                  >
                    Your Brand
                  </span>
                  <span
                    className="bag__brand"
                    style={{ color: "rgba(42,37,32,0.65)" }}
                  >
                    YOUR TRUCK
                    <br />
                    NAME HERE
                  </span>
                </div>
              </div>
              <span className="p-badge">Private Label</span>
            </div>
            <div className="p-card__body">
              <span className="p-card__tag">For Retail Sales</span>
              <h3 className="p-card__title">12oz Private Label Bags</h3>
              <p className="p-card__desc">
                Turn your best cup into a take-home product with your
                truck&apos;s logo — add revenue and build loyalty.
              </p>
              <ul className="p-card__list">
                <li className="p-card__item">
                  <CheckIcon />
                  Your logo and label included
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Retail-ready packaging
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Built for resale margins
                </li>
                <li className="p-card__item">
                  <CheckIcon />
                  Volume pricing available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
