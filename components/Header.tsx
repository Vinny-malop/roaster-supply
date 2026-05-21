"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href ? "active" : undefined;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap">
          <div className="nav__inner">
            <Link href="/" className="logo logo--light">
              <div className="logo__icon">
                <div className="logo__dot"></div>
              </div>
              <div className="logo__text">
                <span className="logo__name">Roaster Supply Co.</span>
                <span className="logo__sub">Brazilian Specialty Coffee</span>
              </div>
            </Link>
            <ul className="nav__links">
              <li>
                <Link href="/our-coffee" className={isActive("/our-coffee")}>
                  Our Coffee
                </Link>
              </li>
              <li>
                <Link
                  href="/coffee-trucks"
                  className={isActive("/coffee-trucks")}
                >
                  Coffee Trucks
                </Link>
              </li>
              <li>
                <Link
                  href="/short-term-rentals"
                  className={isActive("/short-term-rentals")}
                >
                  Short-Term Rentals
                </Link>
              </li>
              <li>
                <Link href="/contact" className={isActive("/contact")}>
                  Contact
                </Link>
              </li>
              {/* <li><Link href="/client-portal">Client Portal</Link></li> */}
            </ul>
            <Link href="/contact" className="btn btn--ghost nav__cta-desktop">
              Get Pricing
            </Link>
            <button
              className="nav__burger"
              id="burger"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`nav__mobile-overlay${open ? " open" : ""}`}
        id="mobileOverlay"
      >
        <button
          className="nav__mobile-close"
          id="mobileClose"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          &times;
        </button>
        <Link href="/our-coffee" className="m-link" onClick={closeMenu}>
          Our Coffee
        </Link>
        <Link href="/coffee-trucks" className="m-link" onClick={closeMenu}>
          Coffee Trucks
        </Link>
        <Link href="/short-term-rentals" className="m-link" onClick={closeMenu}>
          Short-Term Rentals
        </Link>
        <Link href="/contact" className="m-link" onClick={closeMenu}>
          Contact
        </Link>
        {/* <Link href="/client-portal" className="m-link" onClick={closeMenu}>Client Portal</Link> */}
        <Link href="/contact" className="btn btn--ghost" onClick={closeMenu}>
          Get Pricing
        </Link>
      </div>
    </>
  );
}
