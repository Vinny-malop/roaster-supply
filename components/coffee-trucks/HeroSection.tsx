const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__video-wrap">
          {/* ▼ SWAP with <video autoplay muted loop playsinline src="video.mp4"></video> */}
          <div className="hero__placeholder"></div>
        </div>
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__body">
        <span className="hero__kicker">
          Premium Brazilian · Built for Trucks &amp; Shops
        </span>
        <h1 className="hero__title">
          Brazilian Coffee Built for Coffee Trucks &amp; Shops.
        </h1>
        <p className="hero__sub">
          Consistent quality, competitive wholesale pricing, and private label
          options — built for operators who want to serve better coffee and
          grow revenue.
        </p>
        <div className="hero__ctas">
          <a href={SIGNUP_URL} className="btn btn--accent">
            Apply for Wholesale Access
          </a>
          <a href="#products" className="btn btn--ghost-white">
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
