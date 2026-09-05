import { SystemPortrait } from "@/components/SystemPortrait";
import { heroStats, personalInfo } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy" data-rv>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden />
            Backend · Applied AI · Product delivery
          </p>
          <h1 id="hero-title">
            I build the <em>systems</em> behind ambitious AI products.
          </h1>
          <p className="hero-lede">
            {personalInfo.shortBio} I lead the work, write the critical path,
            and stay close through release and incident response.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <span aria-hidden>↘</span>
            </a>
            <a
              className="button button-secondary"
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a conversation <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="hero-availability">
            <span className="status-dot" aria-hidden />
            {personalInfo.status}
          </div>
        </div>

        <div className="hero-visual" data-rv data-rv-delay="1">
          <SystemPortrait />
        </div>
      </div>

      <div className="shell metrics" aria-label="Career highlights">
        {heroStats.map((stat, index) => (
          <div className="metric" key={stat.l} data-rv data-rv-delay={index}>
            <span className="metric-number">{stat.n}</span>
            <span className="metric-label">{stat.l}</span>
            <span className="metric-note">{stat.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
