import { about } from "@/lib/portfolio-data";
import { Reveal } from "@/components/ui/Reveal";

function renderParagraph(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="eyebrow">/about — whoami</Reveal>
        <Reveal as="h2" className="title">
          {about.title}
        </Reveal>
        <Reveal className="about-grid">
          <div>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{renderParagraph(paragraph)}</p>
            ))}
          </div>
          <div className="now-card">
            <div className="k">
              <span className="live-dot" aria-hidden />
              CURRENTLY
            </div>
            {about.currently.map((item) => (
              <div key={item.role} className="now-item">
                <span className="role">{item.role}</span>
                <span className="co">{item.co}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
