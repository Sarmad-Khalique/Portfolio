"use client";

import { useRef } from "react";
import {
  gsap,
  registerGsapPlugins,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/gsap-config";
import { parseStatValue } from "@/lib/parse-stat-value";

type AnimatedCounterProps = {
  value: string;
  className?: string;
  duration?: number;
  scrollTrigger?: boolean;
  trigger?: React.RefObject<HTMLElement | null>;
  delay?: number;
};

export function AnimatedCounter({
  value,
  className = "",
  duration = 2,
  scrollTrigger = false,
  trigger,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { prefix, end, suffix, display } = parseStatValue(value);

  registerGsapPlugins();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        el.textContent = display;
        return;
      }

      const state = { val: 0 };

      gsap.to(state, {
        val: end,
        duration,
        delay,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(state.val)}${suffix}`;
        },
        scrollTrigger:
          scrollTrigger && trigger?.current
            ? {
                trigger: trigger.current,
                start: "top 88%",
                once: true,
              }
            : undefined,
      });
    },
    { scope: ref, dependencies: [value, scrollTrigger, delay] },
  );

  return (
    <span
      ref={ref}
      className={`font-mono tabular-nums tracking-tight ${className}`}
      aria-label={display}
    >
      {display}
    </span>
  );
}
