import Link from "next/link";

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
          Premium Brazilian Coffee · Built for Operators
        </span>
        <h1 className="hero__title">Brazilian Coffee Built for Operators.</h1>
        <p className="hero__sub">
          Premium coffee supply for coffee trucks, short-term rentals, and
          hospitality businesses.
        </p>
        <div className="hero__ctas">
          <Link href="/contact" className="btn btn--primary">
            Get Pricing
          </Link>
          <a href="#solutions" className="btn btn--ghost-white">
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
