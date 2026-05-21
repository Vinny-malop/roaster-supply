export default function RoastedToOrderSection() {
  return (
    <section className="section" id="roasted-to-order">
      <div className="wrap">
        <div className="sec-head sec-head--center anim">
          <span className="eyebrow">Roasted to Order</span>
          <h2>Fresh coffee, every order.</h2>
          <p>
            We don&apos;t pre-roast and warehouse. Your order triggers the
            roast.
          </p>
        </div>

        <div className="steps">
          <div className="step anim">
            <div className="step__num">1</div>
            <h3 className="step__title">Order placed</h3>
            <p className="step__text">
              Your order goes straight to our roast schedule. No sitting in a
              warehouse for weeks before it reaches you.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">2</div>
            <h3 className="step__title">Roasted Wednesday, ships Monday</h3>
            <p className="step__text">
              We roast on a weekly schedule to optimize freshness. Orders placed
              by Wednesday ship the following Monday via air freight.
            </p>
          </div>
          <div className="step anim">
            <div className="step__num">3</div>
            <h3 className="step__title">Arrives at peak freshness</h3>
            <p className="step__text">
              Air freight from Brazil means your coffee arrives within days of
              roasting — not weeks. Your guests and customers taste the
              difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
