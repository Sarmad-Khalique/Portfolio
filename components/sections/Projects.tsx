import { featuredProjects, portfolioSections } from "@/lib/portfolio-data";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const { eyebrow, title, lede } = portfolioSections.projects;

  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h2" className="title">
          {title}
        </Reveal>
        <Reveal as="p" className="section-lede">
          {lede}
        </Reveal>

        <Reveal className="proj-grid">
          {featuredProjects.map((project) => (
            <article key={project.name} className="card">
              <div className="card-top">
                <h3>{project.name}</h3>
                <span className={`badge ${project.badgeVariant}`}>
                  {project.badge}
                </span>
              </div>
              <p>{project.description}</p>
              <div className="metric">{project.metric}</div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
