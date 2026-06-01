"use client";

import { useRef } from "react";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { revealOnScroll } from "@/lib/gsap-animations";
import { about, branding, careerHighlights, openTo } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      revealOnScroll(sectionRef, ".section-heading", { y: 24, duration: 0.6 });
      revealOnScroll(sectionRef, ".about-reveal", { y: 32, stagger: 0.12 });
    },
    { scope: sectionRef },
  );

  const summaryParagraphs = about.summary.trim().split("\n\n");

  return (
    <section ref={sectionRef} id="about" className="section-muted section-pad">
      <div className="container-wide">
        <div className="section-heading">
        <SectionHeading
          label="About"
          title="Engineering products from concept to cloud"
          description={branding.tagline}
        />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="about-reveal glass-card p-8 md:p-10">
            <div className="space-y-5">
              {summaryParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="glass-label mb-4">Interests</p>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <Tag key={interest}>{interest}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="about-reveal space-y-6">
            <div className="glass-card p-8 md:p-10">
              <p className="font-heading text-lg font-bold text-foreground mb-1">
                Open to
              </p>
              <p className="text-sm text-muted mb-6">Remote · Global teams</p>
              <ul className="space-y-3">
                {openTo.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted flex items-center gap-3 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-accent before:shrink-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 md:p-10">
              <p className="font-heading text-lg font-bold text-foreground mb-5">
                Highlights
              </p>
              <ul className="space-y-3">
                {careerHighlights.map((item) => (
                  <li key={item} className="text-sm text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
