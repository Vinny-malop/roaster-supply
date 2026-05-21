export default function WhyItMattersSection() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Why It Matters</span>
          <h2>Small details create better guest experiences</h2>
          <p>
            Guests may not remember every detail of a stay — but they notice
            when a place feels thoughtful.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="why-card__title">Better First Impression</h3>
            <p className="why-card__text">
              A simple touch that makes the stay feel more complete from the
              start.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="why-card__title">More 5-Star Reviews</h3>
            <p className="why-card__text">
              Thoughtful details are often the difference between a good stay
              and a memorable one.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="why-card__title">Easy to Implement</h3>
            <p className="why-card__text">
              No operational changes — just place the coffee and elevate the
              experience.
            </p>
          </div>

          <div className="why-card anim">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <h3 className="why-card__title">Low Cost, High Perceived Value</h3>
            <p className="why-card__text">
              A small cost per stay that can make a much bigger impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
