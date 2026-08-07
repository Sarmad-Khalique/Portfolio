import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="wrap">
        <div className="sec-head" data-rv>
          <h2>Where I&apos;ve shipped</h2>
          <span className="index">02 — EXPERIENCE</span>
        </div>
        <p className="sec-lede" data-rv>
          Three roles, one thread: own the system, ship it, keep it running.
        </p>

        {experience.map((job, i) => (
          <div key={job.hash} className="xp-row" data-rv>
            <div className="xp-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="xp-role">{job.role}</div>
              <div className="xp-co">
                {job.company}
                {job.location ? ` — ${job.location}` : ""}
              </div>
              <ul>
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
            <div className="xp-date">{job.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
