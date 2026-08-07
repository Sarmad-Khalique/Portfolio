import { personalInfo, portfolioSections } from "@/lib/portfolio-data";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { title, lede } = portfolioSections.contact;

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <Reveal className="contact-box">
          <h2>{title}</h2>
          <p>{lede}</p>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call →
            </a>
            <a
              className="btn btn-ghost"
              href={`mailto:${personalInfo.email}?subject=Project%20Inquiry`}
            >
              Send a project inquiry
            </a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href={personalInfo.phoneHref}>{personalInfo.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
