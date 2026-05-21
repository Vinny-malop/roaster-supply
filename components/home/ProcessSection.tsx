export default function ProcessSection() {
  return (
    <section className="section section--cream" id="how">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Process</span>
          <h2>Simple to start</h2>
          <p>From first conversation to first delivery in days, not weeks.</p>
        </div>

        <div className="steps">
          <div className="step anim">
            <div className="step__num">1</div>
            <h3 className="step__title">Tell us about your business</h3>
            <p className="step__text">
              Share your volume, format needs, and what you&apos;re trying to
              accomplish.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">2</div>
            <h3 className="step__title">We recommend the right setup</h3>
            <p className="step__text">
              We match you with the right product, pricing tier, and delivery
              schedule.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">3</div>
            <h3 className="step__title">We deliver ready-to-use coffee</h3>
            <p className="step__text">
              Your coffee arrives ready to use — with optional recurring
              delivery to keep you stocked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
