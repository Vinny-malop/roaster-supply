"use client";

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
    // Validation passed — let the native form submit to Web3Forms proceed.
    // Web3Forms will redirect to the `redirect` hidden-input URL on success.
  };

  return (
    <section className="section section--dark" id="contact">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <div className="wrap">
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.55)",
            fontSize: 15,
            maxWidth: 560,
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          Built for operators who want reliable coffee, simple ordering, and
          room to grow.
        </p>
        <div className="contact-layout">
          <div className="contact-left anim">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2 className="contact-headline">
                Let&apos;s build your coffee program.
              </h2>
            </div>
            <p className="contact-desc">
              Tell us about your truck and monthly volume. We&apos;ll send
              pricing and the best options for your operation.
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
                Serving coffee trucks nationwide
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
                    <label htmlFor="f-biz">Business Name</label>
                    <input
                      type="text"
                      id="f-biz"
                      name="business"
                      placeholder="The Daily Brew Co."
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="f-field">
                    <label htmlFor="f-email">Email Address</label>
                    <input
                      type="email"
                      id="f-email"
                      name="email"
                      placeholder="jane@yourtruck.com"
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
                <div className="form-row">
                  <div className="f-field">
                    <label htmlFor="f-vol">Monthly Volume</label>
                    <select id="f-vol" name="volume" required defaultValue="">
                      <option value="" disabled>
                        Select volume
                      </option>
                      <option value="under-20">Under 20 lbs / month</option>
                      <option value="20-40">20–40 lbs / month</option>
                      <option value="40-80">40–80 lbs / month</option>
                      <option value="80-120">80–120 lbs / month</option>
                      <option value="120-plus">120+ lbs / month</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className="f-field">
                  <label htmlFor="f-msg">Tell Us About Your Truck</label>
                  <textarea
                    id="f-msg"
                    name="message"
                    placeholder="Where do you operate? Monthly volume? Interested in private label?"
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
                    {submitting ? "Sending…" : "Get Pricing"}
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
              <h3>Request received.</h3>
              <p>We&apos;ll respond within one business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
