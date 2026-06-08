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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bag-5lb.png"
                alt="Damata 5lb wholesale coffee bag"
                className="p-card__photo"
                width={1254}
                height={1254}
              />
              <span className="p-badge">Operational</span>
            </div>
            <div className="p-card__body">
              <span className="p-card__tag">For Daily Operations</span>
              <h3 className="p-card__title">5lb Specialty Bags</h3>
              <div className="p-card__price">
                <span className="p-card__price-amt">From $65</span>
                <span className="p-card__price-unit">/ bag · at volume</span>
              </div>
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
            <div className="p-card__img p-card__img--dark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bag-12oz.png"
                alt="Damata 12oz private-label coffee bag"
                className="p-card__photo"
                width={1254}
                height={1254}
              />
              <span className="p-badge">Private Label</span>
            </div>
            <div className="p-card__body">
              <span className="p-card__tag">For Retail Sales</span>
              <h3 className="p-card__title">12oz &amp; 8oz Private Label Bags</h3>
              <div className="p-card__price">
                <span className="p-card__price-amt">From $7</span>
                <span className="p-card__price-unit">/ bag · 8oz, at volume</span>
              </div>
              <p className="p-card__desc">
                Turn your best cup into a take-home product with your
                truck&apos;s logo — add revenue and build loyalty.
              </p>
              <div className="p-card__callout">
                <strong>Yes — your truck can have its own label.</strong> Low
                minimum order, so you can start small and scale when
                you&apos;re ready.
              </div>
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
