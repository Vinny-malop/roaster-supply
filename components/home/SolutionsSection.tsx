import Link from "next/link";

export default function SolutionsSection() {
  return (
    <section className="section section--cream" id="solutions">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Solutions</span>
          <h2>Built for service-driven businesses</h2>
          <p>Two focused solutions for operators who demand consistency.</p>
        </div>

        <div className="sol-grid">
          <div className="sol-card sol-card--dark anim">
            <div className="sol-card__accent-bar"></div>
            <div className="sol-card__body">
              <span className="sol-card__tag">For Coffee Trucks &amp; Shops</span>
              <h3 className="sol-card__title">Coffee Trucks &amp; Shops</h3>
              <p className="sol-card__text">
                Wholesale 5lb bags and private label retail coffee for trucks
                and cafés — designed to improve margins and grow revenue.
              </p>
              <Link href="/coffee-trucks" className="btn btn--ghost">
                View Solutions
              </Link>
            </div>
          </div>

          <div className="sol-card sol-card--cream anim">
            <div className="sol-card__accent-bar"></div>
            <div className="sol-card__body">
              <span className="sol-card__tag">For Short-Term Rentals</span>
              <h3 className="sol-card__title">Short-Term Rentals</h3>
              <p className="sol-card__text">
                Guest-ready coffee solutions designed to improve experience,
                increase reviews, and simplify restocking.
              </p>
              <Link href="/short-term-rentals" className="btn btn--primary">
                View STR Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
