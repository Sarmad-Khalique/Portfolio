"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { portfolioSections } from "@/lib/portfolio-data";

const metrics = [
  {
    label: "Years",
    value: portfolioSections.stats.yearsExperience,
    delay: 0.45,
  },
  {
    label: "Products",
    value: portfolioSections.stats.productsBuilt,
    delay: 0.65,
  },
  {
    label: "AI builds",
    value: portfolioSections.stats.aiProducts,
    delay: 0.85,
  },
];

export function HeroPreview() {
  return (
    <div className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
      <div className="ai-panel-glow glass-strong rounded-2xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <p className="glass-label">Metrics</p>
          <span className="font-mono text-[10px] text-muted-strong uppercase tracking-widest">
            live
          </span>
        </div>

        <div className="space-y-5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-end justify-between border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <span className="text-sm font-semibold text-muted">{m.label}</span>
              <AnimatedCounter
                value={m.value}
                delay={m.delay}
                duration={2.2}
                className="text-2xl md:text-3xl font-bold text-foreground counter-glow"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-border">
          <p className="font-mono text-[11px] text-muted-strong leading-relaxed">
            <span className="text-accent">›</span> Python · FastAPI · React · OpenAI · AWS
          </p>
        </div>
      </div>
    </div>
  );
}
