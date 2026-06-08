"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SIGNUP_URL =
  "https://shop.wholesale.damata.coffee/pages/wholesale-signup";

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
            <Link href="/" className="logo logo--light" aria-label="Damata Coffee Wholesale — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/damata-logo-cream.png"
                alt="Damata Coffee Wholesale"
                className="logo__img"
                width={494}
                height={495}
              />
              <span className="logo__sub">Wholesale</span>
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
                  Coffee Trucks &amp; Shops
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
            <a
              href={SIGNUP_URL}
              className="btn btn--ghost nav__cta-desktop"
            >
              Apply for Access
            </a>
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
          Coffee Trucks &amp; Shops
        </Link>
        <Link href="/short-term-rentals" className="m-link" onClick={closeMenu}>
          Short-Term Rentals
        </Link>
        <Link href="/contact" className="m-link" onClick={closeMenu}>
          Contact
        </Link>
        <a href={SIGNUP_URL} className="btn btn--ghost" onClick={closeMenu}>
          Apply for Access
        </a>
      </div>
    </>
  );
}
