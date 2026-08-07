import { personalInfo } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <div className="contact-block" data-rv>
          <div>
            <h2>
              <span className="hl">Got something real</span>
              <br />
              <span className="hl">to build?</span>
            </h2>
            <p className="lede">
              Available for remote roles and freelance engagements, with US
              timezone overlap. Send a message or grab time on the calendar
              directly.
            </p>
          </div>
          <div className="contact-side">
            <a
              className="btn btn-dark"
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call ↗
            </a>
            <a
              className="btn btn-line"
              href={`mailto:${personalInfo.email}?subject=Project%20Inquiry`}
            >
              Send a project inquiry ↗
            </a>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a href={personalInfo.phoneHref}>{personalInfo.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
