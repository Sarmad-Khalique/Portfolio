"use client";

import { useRef } from "react";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { revealOnScroll } from "@/lib/gsap-animations";
import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      revealOnScroll(sectionRef, ".section-heading", { y: 24 });
      revealOnScroll(sectionRef, ".timeline-item", {
        y: 36,
        stagger: 0.14,
        duration: 0.65,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="experience" className="section-pad">
      <div className="container-wide">
        <div className="section-heading">
          <SectionHeading
            label="Experience"
            title="Where I've shipped"
            description="Production AI, healthcare platforms, and scalable SaaS systems."
          />
        </div>

        <div className="space-y-5">
          {experience.map((job, index) => (
            <article
              key={job.company}
              className="timeline-item glass-card p-8 md:p-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-muted mt-0.5">{job.company}</p>
                  {(job.location || job.employmentType) && (
                    <p className="text-sm text-muted-strong mt-1">
                      {[job.employmentType, job.location].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
                <span className="glass-pill shrink-0 w-fit">{job.duration}</span>
              </div>

              <ul className="mt-6 space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm font-medium text-muted leading-relaxed pl-4 border-l border-border"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {job.achievements && job.achievements.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.achievements.map((a) => (
                    <Tag key={a} variant="accent">
                      {a}
                    </Tag>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Tag key={`${job.company}-${tech}-${index}`}>{tech}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
