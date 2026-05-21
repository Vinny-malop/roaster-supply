"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    setSubmitting(true);
    // Native form submit to Web3Forms proceeds; redirect on success.
  };

  return (
    <section
      className="section section--dark"
      id="contact"
      style={{ paddingTop: 72 }}
    >
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <div className="wrap">
        <div className="contact-layout">
          <div className="contact-left anim">
            <div>
              <span className="eyebrow">Reach Out</span>
              <h2 className="contact-headline">
                We&apos;d love to hear from you.
              </h2>
            </div>
            <p className="contact-desc">
              Whether you run a coffee truck, manage short-term rentals, or
              operate a hospitality business — we&apos;ll build the right
              setup for you.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@roastersupplyco.com
              </div>
              <div className="contact-detail">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                (888) 762-7837
              </div>
              <div className="contact-detail">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z" />
                </svg>
                Serving operators nationwide
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                paddingTop: 8,
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: ".2px",
                }}
              >
                Looking for a specific solution?
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/coffee-trucks"
                  className="btn btn--ghost-white"
                  style={{ fontSize: 13, padding: "10px 20px" }}
                >
                  Coffee Trucks
                </Link>
                <Link
                  href="/short-term-rentals"
                  className="btn btn--ghost-white"
                  style={{ fontSize: 13, padding: "10px 20px" }}
                >
                  Short-Term Rentals
                </Link>
              </div>
            </div>
          </div>

          <div className="form-box anim">
            <form
              id="contactForm"
              action="https://api.web3forms.com/submit"
              method="POST"
              noValidate
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="4c7e2318-e569-407d-8702-f878adfc741a"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://www.roastersupplyco.com/thank-you.html"
              />
              <div className="form-stack">
                <div className="form-row">
                  <div className="f-field">
                    <label htmlFor="f-name">Your Name</label>
                    <input
                      type="text"
                      id="f-name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="f-field">
                    <label htmlFor="f-email">Email Address</label>
                    <input
                      type="email"
                      id="f-email"
                      name="email"
                      placeholder="jane@yourbusiness.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="f-field">
                    <label htmlFor="f-biz">Company / Business Name</label>
                    <input
                      type="text"
                      id="f-biz"
                      name="business"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="f-field">
                    <label htmlFor="f-phone">Phone Number (optional)</label>
                    <input
                      type="tel"
                      id="f-phone"
                      name="phone"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
                <div className="f-field">
                  <label htmlFor="f-type">Business Type</label>
                  <select id="f-type" name="type" defaultValue="">
                    <option value="" disabled>
                      Select your business type
                    </option>
                    <option value="coffee-truck">Coffee Truck</option>
                    <option value="str">
                      Short-Term Rental / Airbnb Host
                    </option>
                    <option value="property-manager">Property Manager</option>
                    <option value="hospitality">Hotel / Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="f-field">
                  <label htmlFor="f-msg">Message</label>
                  <textarea
                    id="f-msg"
                    name="message"
                    placeholder="Tell us about your business, volume, and what you're looking for."
                  ></textarea>
                </div>
                <div
                  className="cf-turnstile"
                  data-sitekey="0x4AAAAAAC0yM8J_7qCr2XGz"
                  data-theme="light"
                ></div>
                <div>
                  <button
                    type="submit"
                    className="btn btn--primary btn--full"
                    style={{ padding: "15px 30px", fontSize: 14.5 }}
                    id="submitBtn"
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Send Message"}
                    {!submitting && (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>
            <div className="form-success" id="formSuccess">
              <div className="form-success__icon">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Message received.</h3>
              <p>We&apos;ll respond within one business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
