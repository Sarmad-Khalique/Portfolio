"use client";

import { useRef } from "react";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { revealOnScroll } from "@/lib/gsap-animations";
import { certifications, education } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      revealOnScroll(sectionRef, ".section-heading", { y: 24 });
      revealOnScroll(sectionRef, ".edu-card", { y: 32, stagger: 0.14 });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="education" className="section-muted section-pad">
      <div className="container-wide">
        <div className="section-heading">
          <SectionHeading label="Education" title="Background" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="edu-card glass-card p-8">
            <p className="glass-label mb-3">Degree</p>
            <h3 className="font-heading text-lg font-bold">{education.degree}</h3>
            <p className="text-muted mt-1">{education.institution}</p>
            <p className="text-sm text-muted-strong mt-4">
              {education.duration} · GPA {education.grade}
            </p>
          </div>

          <div className="edu-card glass-card p-8">
            <p className="glass-label mb-5">Certifications</p>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-foreground text-sm">{cert.name}</p>
                    <p className="text-xs text-muted mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-muted-strong shrink-0">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
