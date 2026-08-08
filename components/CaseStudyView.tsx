import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { personalInfo } from "@/lib/portfolio-data";

export function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <article className="cs">
      <div className="wrap">
        <div className="cs-top" data-rv>
          <Link href="/#projects" className="cs-back">
            ← Back to work
          </Link>
        </div>

        <header className="cs-hero" data-rv>
          <p className="cs-eyebrow">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="cs-one">{study.oneLiner}</p>
          <div className="cs-meta">
            <span>{study.engagement}</span>
            {study.via && <span>via {study.via}</span>}
          </div>
        </header>

        {study.cover && (
          <div className="cs-cover" data-rv>
            <Image
              src={study.cover}
              alt={`${study.title} schedule screenshot`}
              width={1400}
              height={900}
              priority
            />
          </div>
        )}

        {study.screenshots && study.screenshots.length > 0 && (
          <section className="cs-shots" data-rv>
            <div className="cs-shots-head">
              <h2>Product surfaces</h2>
              <span className="index">REPRESENTATIVE MOCKUPS</span>
            </div>
            <p className="cs-shots-note">
              Illustrative mockups of the same workflows and capabilities.
              Client UI is not shown.
            </p>
            <div className="cs-shots-grid">
              {study.screenshots.map((shot, i) => (
                <figure
                  key={shot.src}
                  className="cs-shot"
                  data-rv
                  data-rv-delay={i % 3}
                >
                  <div className="cs-shot-frame">
                    <Image
                      src={shot.src}
                      alt={`${study.title}: ${shot.label}`}
                      width={1200}
                      height={750}
                    />
                  </div>
                  <figcaption>
                    <strong>{shot.label}</strong>
                    <span>{shot.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="cs-block" data-rv>
          <h2>Executive summary</h2>
          {study.summary.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </section>

        <section className="cs-block" data-rv>
          <h2>My role</h2>
          <p className="cs-lede">
            Primary full-stack ownership across the entire engagement
            lifecycle.
          </p>
          <div className="cs-table">
            {study.role.map((row) => (
              <div key={row.label} className="cs-row">
                <div className="cs-row-label">{row.label}</div>
                <div>
                  <p>{row.detail}</p>
                  {row.outcome && (
                    <p className="cs-outcome">{row.outcome}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-block" data-rv>
          <h2>Discovery</h2>
          <h3>What raw requirements looked like</h3>
          <ul className="cs-list">
            {study.discovery.inputs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>How I structured discovery</h3>
          <ul className="cs-list">
            {study.discovery.structure.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Product principles</h3>
          <ul className="cs-list">
            {study.discovery.principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cs-block" data-rv>
          <h2>Problem</h2>
          <p>{study.problem.lede}</p>
          <div className="cs-table">
            {study.problem.needs.map((row) => (
              <div key={row.need} className="cs-row">
                <div className="cs-row-label">{row.need}</div>
                <p>{row.why}</p>
              </div>
            ))}
          </div>
          <p className="cs-goal">
            <strong>Goal:</strong> {study.problem.goal}
          </p>
        </section>

        <section className="cs-block" data-rv>
          <h2>Constraints</h2>
          <ul className="cs-list">
            {study.constraints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cs-block" data-rv>
          <h2>Solution: five pillars</h2>
          <p className="cs-lede">{study.pillarsIntro}</p>
          <div className="cs-pillars">
            {study.pillars.map((pillar, i) => (
              <div key={pillar.title} className="cs-pillar" data-rv data-rv-delay={i % 3}>
                <div className="cs-pillar-num">0{i + 1}</div>
                <h3>{pillar.title}</h3>
                <p className="cs-intent">{pillar.intent}</p>
                <ul className="cs-list">
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="cs-buyer">
                  <em>Buyer value:</em> {pillar.buyerValue}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-block" data-rv>
          <h2>What shipped</h2>
          <div className="cs-table">
            {study.shipped.map((row) => (
              <div key={row.surface} className="cs-row">
                <div className="cs-row-label">{row.surface}</div>
                <p>{row.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-block" data-rv>
          <h2>Architecture</h2>
          <div className="cs-diagram">
            {study.architecture.diagram.map((line) => (
              <code key={line}>{line}</code>
            ))}
          </div>
          <h3>Patterns I insisted on</h3>
          <ul className="cs-list">
            {study.architecture.patterns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cs-block" data-rv>
          <h2>Hard problems I solved</h2>
          <ul className="cs-list">
            {study.hardProblems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cs-block" data-rv>
          <h2>Delivery &amp; go-live</h2>
          <h3>Environments</h3>
          <ul className="cs-list">
            {study.delivery.environments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Go-live readiness</h3>
          <ul className="cs-list">
            {study.delivery.goLive.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="cs-buyer">{study.delivery.handoff}</p>
        </section>

        <section className="cs-block" data-rv>
          <h2>Outcomes</h2>
          <ul className="cs-list">
            {study.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cs-block" data-rv>
          <h2>Tech stack</h2>
          <div className="cs-table">
            {study.stack.map((row) => (
              <div key={row.layer} className="cs-row">
                <div className="cs-row-label">{row.layer}</div>
                <p>{row.technologies}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-block" data-rv>
          <h2>Engagement fit</h2>
          <div className="cs-fit">
            <div>
              <h3>Best fit</h3>
              <p>{study.fit.best}</p>
            </div>
            <div>
              <h3>Not a fit</h3>
              <p>{study.fit.not}</p>
            </div>
          </div>
        </section>

        <section className="cs-cta" data-rv>
          <h2>
            <span className="hl">Got a clinical product to ship?</span>
          </h2>
          <p>
            Available for remote roles and freelance engagements with US
            timezone overlap.
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
            <Link className="btn btn-line" href="/#projects">
              More work ↗
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
