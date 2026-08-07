import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="sec">
      <div className="wrap">
        <div className="sec-head" data-rv>
          <h2>Background</h2>
          <span className="index">05 — EDUCATION</span>
        </div>

        <div className="edu-row" data-rv>
          <div>
            <div className="deg">{education.degree}</div>
            <div className="sch">
              {education.institution} — GPA {education.grade}
            </div>
          </div>
          <div className="when">{education.duration}</div>
        </div>
      </div>
    </section>
  );
}
