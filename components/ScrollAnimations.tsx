"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  // Re-run on every route change: Next.js does client-side (soft) navigation,
  // and this component lives in the root layout, so without re-observing,
  // sections added on the new page would never be revealed (stay opacity:0).
  const pathname = usePathname();

  useEffect(() => {
    const revealNow = (els: HTMLElement[]) =>
      els.forEach((el) => el.classList.add("in"));

    const observe = () => {
      const animEls = Array.from(
        document.querySelectorAll<HTMLElement>(".anim:not(.in)")
      );
      if (!animEls.length) return undefined;

      // Fallback: no IntersectionObserver support -> just show everything.
      if (typeof IntersectionObserver === "undefined") {
        revealNow(animEls);
        return undefined;
      }

      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            const parent = target.parentElement;
            if (parent) {
              const siblings = Array.from(
                parent.querySelectorAll<HTMLElement>(".anim:not(.in)")
              );
              const idx = siblings.indexOf(target);
              target.style.transitionDelay = `${Math.max(idx, 0) * 0.08}s`;
            }
            target.classList.add("in");
            obs.unobserve(target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      animEls.forEach((el) => io.observe(el));
      return io;
    };

    // Wait one frame so freshly-navigated DOM is painted before observing.
    let io: IntersectionObserver | undefined;
    const raf = requestAnimationFrame(() => {
      io = observe();
    });

    // Safety net for back/forward (bfcache) restores, which don't re-run effects.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) observe();
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [pathname]);

  return null;
}
