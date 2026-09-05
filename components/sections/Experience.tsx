import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="shell">
        <div className="section-heading" data-rv>
          <div>
            <p className="section-kicker">02 / Experience</p>
            <h2>Hands-on leadership, end to end.</h2>
          </div>
          <p>
            Four roles across client delivery, applied AI, high-scale product
            engineering, and performance work.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((job, index) => (
            <article className="experience-row" key={job.hash} data-rv>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <div className="experience-title">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company} · {job.location}</p>
                  </div>
                  <time>{job.duration}</time>
                </div>
                <p className="experience-summary">{job.summary}</p>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.technologies.map((technology) => (
                    <span className="tag" key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
