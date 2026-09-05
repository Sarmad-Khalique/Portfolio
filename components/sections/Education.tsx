import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="education-section">
      <div className="shell education-row" data-rv>
        <p className="section-kicker">05 / Foundation</p>
        <div>
          <h2>{education.degree}</h2>
          <p>{education.institution}</p>
        </div>
        <div className="education-meta">
          <span>{education.duration}</span>
          <strong>CGPA {education.grade}</strong>
        </div>
      </div>
    </section>
  );
}
