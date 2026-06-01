"use client";

import { useRef } from "react";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { revealOnScroll } from "@/lib/gsap-animations";
import { portfolioSections } from "@/lib/portfolio-data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Tag } from "@/components/ui/Tag";

const statItems = [
  { label: "Years experience", value: portfolioSections.stats.yearsExperience },
  { label: "Products shipped", value: portfolioSections.stats.productsBuilt },
  { label: "AI products", value: portfolioSections.stats.aiProducts },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      revealOnScroll(sectionRef, ".stat-block", { y: 28, stagger: 0.12 });
      revealOnScroll(sectionRef, ".stat-tags", { y: 16, delay: 0.3 });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="stats" className="pb-20 md:pb-28">
      <div className="container-wide">
        <div className="glass-strong rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 sm:divide-x sm:divide-border">
            {statItems.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-block text-center sm:px-6 first:sm:pl-0 last:sm:pr-0"
              >
                <AnimatedCounter
                  value={stat.value}
                  scrollTrigger
                  trigger={sectionRef}
                  delay={i * 0.15}
                  duration={2.4}
                  className="block text-4xl sm:text-5xl md:text-6xl font-bold text-foreground counter-glow"
                />
                <p className="mt-2 text-xs sm:text-sm font-semibold text-muted uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="stat-tags mt-10 pt-8 border-t border-border flex flex-wrap justify-center gap-2">
            {portfolioSections.stats.domains.map((domain) => (
              <Tag key={domain}>{domain}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
