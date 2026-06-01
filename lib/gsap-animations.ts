"use client";

import type { RefObject } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap-config";

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
};

export function revealOnScroll(
  scope: RefObject<HTMLElement | null>,
  selector: string,
  options: RevealOptions = {},
) {
  if (prefersReducedMotion() || !scope.current) return;

  const { y = 32, duration = 0.7, stagger = 0.08, delay = 0, start = "top 82%" } =
    options;

  gsap.from(selector, {
    scrollTrigger: {
      trigger: scope.current,
      start,
      once: true,
    },
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease: "power3.out",
  });
}

export function heroTimeline(scope: RefObject<HTMLElement | null>) {
  if (prefersReducedMotion() || !scope.current) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-badge", { y: 16, opacity: 0, duration: 0.5 })
    .from(
      ".hero-line",
      { y: 28, opacity: 0, duration: 0.65, stagger: 0.12 },
      "-=0.2",
    )
    .from(".hero-sub", { y: 20, opacity: 0, duration: 0.5 }, "-=0.35")
    .from(".hero-cta", { y: 16, opacity: 0, duration: 0.45, stagger: 0.08 }, "-=0.25")
    .from(".hero-panel", { x: 24, opacity: 0, duration: 0.8 }, "-=0.5");

  return tl;
}

export function floatAmbient(selector: string, scope: RefObject<HTMLElement | null>) {
  if (prefersReducedMotion() || !scope.current) return;

  gsap.to(selector, {
    y: "+=18",
    x: "+=8",
    duration: 4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: { each: 0.6, from: "random" },
  });
}

export { ScrollTrigger };
