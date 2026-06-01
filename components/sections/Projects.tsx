"use client";

import { useRef } from "react";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { revealOnScroll } from "@/lib/gsap-animations";
import { featuredProjects } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      revealOnScroll(sectionRef, ".section-heading", { y: 24 });
      revealOnScroll(sectionRef, ".project-card", {
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        start: "top 80%",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="projects" className="section-muted section-pad">
      <div className="container-wide">
        <div className="section-heading">
          <SectionHeading
            label="Work"
            title="Selected projects"
            description="Healthcare AI, generative tools, and enterprise SaaS."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {featuredProjects.map((project) => {
            const bullets =
              project.keyFeatures ??
              project.features ??
              project.integrations;

            return (
              <article
                key={project.name}
                className="project-card glass-card p-8 flex flex-col cursor-pointer"
              >
                <Tag variant="accent" className="mb-4 w-fit">
                  {project.category}
                </Tag>

                <h3 className="font-heading text-lg font-bold text-foreground">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm font-medium text-muted leading-relaxed flex-grow">
                  {project.description}
                </p>

                {bullets && bullets.length > 0 && (
                  <ul className="mt-5 space-y-1.5">
                    {bullets.map((item) => (
                      <li key={item} className="text-xs font-medium text-muted-strong">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {project.technologies && (
                  <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
