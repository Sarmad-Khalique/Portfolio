import { personalInfo } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-panel" data-rv>
          <p className="section-kicker">06 / Start a conversation</p>
          <h2>Need someone who can own the whole path?</h2>
          <p>
            I&apos;m open to senior backend, applied AI, and hands-on technical
            leadership work with teams that care about shipping the real thing.
          </p>
          <div className="contact-actions">
            <a
              className="button button-dark"
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a conversation <span aria-hidden>↗</span>
            </a>
            <a className="contact-email" href={`mailto:${personalInfo.email}`}>
              {personalInfo.email} <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="contact-footer">
            <span><i className="status-dot" aria-hidden /> Remote from Pakistan</span>
            <div>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
