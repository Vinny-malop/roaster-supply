"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const animEls = document.querySelectorAll<HTMLElement>(".anim");
    if (!animEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const parent = target.parentElement;
          if (parent) {
            const siblings = Array.from(
              parent.querySelectorAll<HTMLElement>(".anim:not(.in)")
            );
            const idx = siblings.indexOf(target);
            target.style.transitionDelay = `${idx * 0.08}s`;
          }
          target.classList.add("in");
          io.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
