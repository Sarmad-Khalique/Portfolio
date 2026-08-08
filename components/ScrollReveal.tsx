"use client";

import { useEffect } from "react";

/** Observes all [data-rv] elements and reveals them on scroll.
 *  Optional data-rv-delay="n" staggers by n * 90ms. */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rv]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("rv-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.rvDelay ?? 0) * 90;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("rv-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
