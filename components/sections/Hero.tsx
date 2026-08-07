import Image from "next/image";
import { heroStats, personalInfo } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-block" data-rv>
          <div>
            <h1>
              <span className="hl">No hype, no demo-ware,</span>
              <br />
              <span className="hl">just backends &amp; AI</span>
              <br />
              <span className="hl">that actually ship</span>
            </h1>
            <p className="lede">
              I&apos;m a Senior Backend &amp; Full-Stack AI Engineer with 4+
              years
              shipping Python APIs, LLM/RAG pipelines, and voice AI for
              international clients — from HIPAA-grade healthcare platforms
              to systems serving 1.5M+ users.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-dark"
                href={personalInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call ↗
              </a>
              <a className="btn btn-line" href="#projects">
                View the work ↗
              </a>
            </div>
          </div>
          <div className="hero-art">
            <Image
              src="/portrait.png"
              alt="Muhammad Sarmad Khalique"
              width={640}
              height={665}
              priority
              className="hero-portrait"
            />
          </div>
        </div>

        <div className="stats-strip">
          {heroStats.map((stat, i) => (
            <div key={stat.l} className="stat" data-rv data-rv-delay={i}>
              <div className="n">{stat.n}</div>
              <div className="l">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
