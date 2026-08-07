import {
  heroStats,
  personalInfo,
  portfolioSections,
} from "@/lib/portfolio-data";
import { Terminal } from "@/components/Terminal";

export function Hero() {
  const { heading, accentWord, primaryCta, secondaryCta, tertiaryCta } =
    portfolioSections.hero;
  const [before, after] = heading.split(accentWord);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">STATUS: {personalInfo.status}</div>
          <h1>
            {before}
            <span className="accent">{accentWord}</span>
            {after}
          </h1>
          <p className="lede">{personalInfo.shortBio}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryCta}
            </a>
            <a className="btn btn-ghost" href="#projects">
              {secondaryCta}
            </a>
            <a className="btn btn-ghost" href={`mailto:${personalInfo.email}`}>
              {tertiaryCta}
            </a>
          </div>
          <div className="stat-row">
            {heroStats.map((stat) => (
              <div key={stat.l} className="stat">
                <div className="n">{stat.n}</div>
                <div className="l">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
