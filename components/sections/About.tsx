import { about } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="section approach-section">
      <div className="shell">
        <div className="approach-intro" data-rv>
          <p className="section-kicker">03 / How I operate</p>
          <h2>{about.title}</h2>
          <p>{about.intro}</p>
        </div>

        <div className="principles">
          {about.principles.map((principle, index) => (
            <article className="principle" key={principle.number} data-rv data-rv-delay={index}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
