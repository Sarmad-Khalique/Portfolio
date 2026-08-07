import { education } from "@/lib/portfolio-data";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="eyebrow">/education — background</Reveal>
        <Reveal as="h2" className="title">
          Background
        </Reveal>
        <Reveal style={{ maxWidth: 640 }}>
          <div className="edu-row">
            <div>
              <div className="deg">{education.degree}</div>
              <div className="sch">
                {education.institution} · GPA {education.grade}
              </div>
            </div>
            <div className="when">{education.duration}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
