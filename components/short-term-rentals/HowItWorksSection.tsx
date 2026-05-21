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
            <h3 className="step__title">Tell us about your properties</h3>
            <p className="step__text">
              Share how many units you manage and your estimated monthly
              volume.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">2</div>
            <h3 className="step__title">We recommend the best setup</h3>
            <p className="step__text">
              We help you choose the right quantity and delivery plan for your
              operation.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">3</div>
            <h3 className="step__title">We deliver ready-to-use coffee</h3>
            <p className="step__text">
              We roast your coffee after you order. It arrives labeled and
              ready to go — fresh, high-quality Brazilian coffee your guests
              will notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
