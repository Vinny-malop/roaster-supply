const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__video-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            className="hero__bg-img"
          />
        </div>
        <div className="hero__overlay"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/damata-branch-cream.png"
          alt=""
          aria-hidden="true"
          className="hero__branch"
        />
      </div>
      <div className="hero__body">
        <h1 className="hero__title">Brazilian Coffee Built for Operators.</h1>
        <p className="hero__sub">
          Roast-to-order wholesale coffee for coffee trucks, short-term rentals,
          and hospitality businesses.
        </p>
        <div className="hero__ctas">
          <a href={SIGNUP_URL} className="btn btn--accent">
            Apply for Wholesale Access
          </a>
          <a href="#solutions" className="btn btn--ghost-white">
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
