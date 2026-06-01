"use client";

import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { heroTimeline } from "@/lib/gsap-animations";
import {
  personalInfo,
  portfolioSections,
} from "@/lib/portfolio-data";
import { Button } from "@/components/ui/Button";
import { HeroPreview } from "@/components/HeroPreview";

function splitHeading(heading: string): [string, string] {
  const words = heading.split(" ");
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [lineOne, lineTwo] = splitHeading(portfolioSections.hero.heading);

  registerGsapPlugins();

  useGSAP(() => heroTimeline(containerRef), { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative section-pad pt-36 pb-20 md:pt-40 md:pb-28 min-h-[92vh] flex items-center"
    >
      <div className="container-wide w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          <div>
            <p className="hero-badge glass-badge mb-10 w-fit">
              <span className="ai-status-dot" aria-hidden />
              <span className="text-foreground/90">AI-native</span>
              <span className="text-muted-strong">·</span>
              <span>{personalInfo.professionalTitle}</span>
            </p>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight">
              <span className="hero-line block text-foreground">{lineOne}</span>
              <span className="hero-line block text-gradient mt-1">{lineTwo}</span>
            </h1>

            <p className="hero-sub mt-7 text-lg font-medium text-muted max-w-lg leading-relaxed">
              {portfolioSections.hero.subheading}
            </p>

            <div className="hero-cta mt-10 flex flex-wrap gap-3">
              <Button
                href={personalInfo.calendlyUrl}
                variant="accent"
                external
              >
                <Calendar className="h-4 w-4" aria-hidden />
                {portfolioSections.hero.primaryCta}
              </Button>
              <Button href="#projects" variant="secondary">
                {portfolioSections.hero.secondaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>

          <div className="hero-panel">
            <HeroPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
