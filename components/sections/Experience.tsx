import { experience, portfolioSections } from "@/lib/portfolio-data";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const { eyebrow, title, lede } = portfolioSections.experience;

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h2" className="title">
          {title}
        </Reveal>
        <Reveal as="p" className="section-lede">
          {lede}
        </Reveal>

        <Reveal className="log">
          {experience.map((job) => (
            <div key={job.hash} className="commit">
              <div className="commit-head">
                <span className="commit-hash">{job.hash}</span>
                <span className="commit-role">{job.role}</span>
                <span className="commit-co">
                  — {job.company}
                  {job.location ? `, ${job.location}` : ""}
                </span>
                <span className="commit-date">{job.duration}</span>
              </div>
              <ul className="commit-body">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-row">
                {job.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
