"use client";

import { useRef } from "react";
import { registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { revealOnScroll } from "@/lib/gsap-animations";
import { expertise, skills } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const skillGroups = [
  { title: "Languages", items: skills.programmingLanguages },
  { title: "Backend", items: skills.backend },
  { title: "Frontend", items: skills.frontend },
  { title: "AI", items: skills.ai },
  { title: "Cloud", items: skills.cloud },
  { title: "Data", items: skills.databases },
];

const expertiseGroups = [
  { title: "Backend", items: expertise.backend },
  { title: "Frontend", items: expertise.frontend },
  { title: "AI / ML", items: expertise.aiMl },
  { title: "Cloud", items: expertise.cloudDevops },
  { title: "Data", items: expertise.databases },
  { title: "Architecture", items: expertise.architecture },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  registerGsapPlugins();

  useGSAP(
    () => {
      revealOnScroll(sectionRef, ".section-heading", { y: 24 });
      revealOnScroll(sectionRef, ".skill-group", { y: 28, stagger: 0.07 });
      revealOnScroll(sectionRef, ".expertise-panel", { y: 32, delay: 0.2 });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="skills" className="section-pad">
      <div className="container-wide">
        <div className="section-heading">
          <SectionHeading
            label="Skills"
            title="Tools & systems"
            description="Stack for building scalable, AI-native products."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group glass-card p-6">
              <h3 className="font-heading text-sm font-bold text-foreground mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="expertise-panel ai-panel-glow glass-strong rounded-2xl p-8 md:p-10">
          <p className="glass-label mb-6">Expertise</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseGroups.map((group) => (
              <div key={`exp-${group.title}`}>
                <h4 className="text-sm font-medium text-foreground mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
