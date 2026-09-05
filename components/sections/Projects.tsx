import Image from "next/image";
import Link from "next/link";
import { featuredProjects, type FeaturedProject } from "@/lib/portfolio-data";

const diagrams: Record<FeaturedProject["visual"], string[]> = {
  clinical: ["AUDIO", "CHART", "DRAFT", "APPROVE"],
  payments: ["VOICE", "ORDER", "ROUTE", "PAYOUT"],
  forms: ["PROMPT", "BUILD", "SUBMIT", "REVIEW"],
  voice: ["PROFILE", "REALTIME", "ASSIST", "ACTION"],
  async: ["REQUEST", "ASYNC API", "DATA", "−60%"],
  scale: ["1.5M+", "SERVICES", "WORKERS", "OBSERVE"],
};

function ProjectVisual({ project }: { project: FeaturedProject }) {
  if (project.cover) {
    return (
      <div className="project-visual project-screenshot">
        <Image
          src={project.cover}
          alt={`${project.name} product interface`}
          width={1200}
          height={800}
        />
        <span className="visual-glint" aria-hidden />
      </div>
    );
  }

  return (
    <div className={`project-visual project-diagram visual-${project.visual}`} aria-hidden>
      <span className="diagram-orbit" />
      <span className="diagram-core" />
      {diagrams[project.visual].map((label, index) => (
        <span className={`diagram-node node-${index + 1}`} key={label}>
          <i>{String(index + 1).padStart(2, "0")}</i>
          {label}
        </span>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="section projects-section">
      <div className="shell">
        <div className="section-heading" data-rv>
          <div>
            <p className="section-kicker">01 / Selected systems</p>
            <h2>Work that made it to the real world.</h2>
          </div>
          <p>
            Client names and proprietary details stay private. The engineering
            decisions, delivery scope, and outcomes are real.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => {
            const content = (
              <>
                <ProjectVisual project={project} />
                <div className="project-body">
                  <div className="project-topline">
                    <span>{project.badge}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-impact">
                    <span>OUTCOME</span>
                    <strong>{project.impact}</strong>
                  </div>
                  <div className="tag-row">
                    {project.skills.map((skill) => (
                      <span className="tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                  {project.slug && (
                    <span className="case-link">
                      View engineering case study <span aria-hidden>↗</span>
                    </span>
                  )}
                </div>
              </>
            );

            return project.slug ? (
              <Link
                href={`/work/${project.slug}`}
                className="project-card project-card-link"
                key={project.name}
                data-rv
                data-rv-delay={index % 2}
              >
                {content}
              </Link>
            ) : (
              <article
                className="project-card"
                key={project.name}
                data-rv
                data-rv-delay={index % 2}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
