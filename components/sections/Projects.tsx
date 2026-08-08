import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/portfolio-data";

const artVariants = [
  "art-sun",
  "art-tracks",
  "art-rings",
  "art-grid",
  "art-wave",
  "art-tri",
];

export function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <div className="sec-head" data-rv>
          <h2>Selected work</h2>
          <span className="index">01 - SHIPPED &amp; IN PRODUCTION</span>
        </div>
        <p className="sec-lede" data-rv>
          Client production systems and platform work: healthcare AI, voice
          agents, and infrastructure at scale.
        </p>

        <div className="proj-grid">
          {featuredProjects.map((project, i) => {
            const body = (
              <>
                {project.cover ? (
                  <div className="proj-cover proj-cover-img">
                    <Image
                      src={project.cover}
                      alt={`${project.name} screenshot`}
                      width={800}
                      height={600}
                    />
                  </div>
                ) : (
                  <div
                    className={`proj-cover ${artVariants[i % artVariants.length]}`}
                    aria-hidden
                  />
                )}
                <span className={`proj-badge ${project.badgeVariant}`}>
                  {project.badge}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="proj-skills tag-row">
                  {project.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="proj-card-foot">
                  {project.via && (
                    <div className="proj-via">via {project.via}</div>
                  )}
                  {project.slug && (
                    <span className="proj-case-link">Read case study ↗</span>
                  )}
                </div>
              </>
            );

            return project.slug ? (
              <Link
                key={project.name}
                href={`/work/${project.slug}`}
                className="proj-card proj-card-link"
                data-rv
                data-rv-delay={i % 3}
              >
                {body}
              </Link>
            ) : (
              <article
                key={project.name}
                className="proj-card"
                data-rv
                data-rv-delay={i % 3}
              >
                {body}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
