export default function HowItWorksSection() {
  return (
    <section className="section section--cream" id="how">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">How It Works</span>
          <h2>How it works</h2>
          <p>Simple to start. Easy to scale.</p>
        </div>

        <div className="steps">
          <div className="step anim">
            <div className="step__num">1</div>
            <h3 className="step__title">Tell us what you need</h3>
            <p className="step__text">
              Share your monthly volume, roast preference, and whether you want
              private label.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">2</div>
            <h3 className="step__title">We build your plan</h3>
            <p className="step__text">
              We recommend the right products, pricing tier, and shipping setup
              for your truck.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">3</div>
            <h3 className="step__title">Receive and serve</h3>
            <p className="step__text">
              Buy in volume to unlock lower per-bag pricing, then receive weekly
              deliveries so your coffee&apos;s always fresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
