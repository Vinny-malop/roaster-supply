import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link href="/" className="logo" aria-label="Damata Coffee Wholesale — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/damata-logo.png"
                alt="Damata Coffee Wholesale"
                className="logo__img"
                width={494}
                height={495}
              />
            </Link>
            <p className="footer__tagline">
              Roast-to-order Brazilian specialty coffee for operators who take
              quality seriously.
            </p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__col-label">Solutions</span>
              <Link href="/coffee-trucks">Coffee Trucks</Link>
              <Link href="/short-term-rentals">Short-Term Rentals</Link>
            </div>
            <div className="footer__col">
              <span className="footer__col-label">Company</span>
              <Link href="/contact">Contact</Link>
              {/* <Link href="/client-portal">Client Portal</Link> */}
            </div>
            <div className="footer__col">
              <span className="footer__col-label">Legal</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; 2026 Damata Coffee LLC. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
