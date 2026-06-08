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
          Premium Brazilian Coffee · For Short-Term Rentals
        </span>
        <h1 className="hero__title">
          Better reviews start with better coffee.
        </h1>
        <p
          style={{
            fontSize: "clamp(13px,1.4vw,15px)",
            fontWeight: 500,
            letterSpacing: ".3px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 14,
            textTransform: "none",
          }}
        >
          A simple upgrade your guests actually notice.
        </p>
        <p className="hero__sub">
          A simple guest upgrade that makes your properties feel more
          thoughtful — and gives guests one more reason to leave a 5-star
          review.
        </p>
        <div className="hero__ctas">
          <a href={SIGNUP_URL} className="btn btn--accent">
            Set up my properties
          </a>
          <a href="#pricing" className="btn btn--ghost-white">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
