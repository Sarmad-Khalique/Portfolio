"use client";

import { useRef } from "react";
import { registerGsapPlugins, useGSAP, prefersReducedMotion } from "@/lib/gsap-config";
import { floatAmbient } from "@/lib/gsap-animations";

export function AiAmbient() {
  const rootRef = useRef<HTMLDivElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      floatAmbient(".ai-orb", rootRef);
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="ai-grid absolute inset-0" />
      <div className="ai-orb absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="ai-orb absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[90px]" />
      <div className="ai-orb absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/8 blur-[80px]" />
    </div>
  );
}
