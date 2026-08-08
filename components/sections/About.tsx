import { about } from "@/lib/portfolio-data";

function renderParagraph(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

const cellTitles = [
  "Systems that survive users",
  "End-to-end ownership",
  "Applied AI, not AI theatre",
];

export function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <div className="sec-head" data-rv>
          <h2>What I&apos;m about</h2>
          <span className="index">03 - OPERATOR PROFILE</span>
        </div>

        <div className="about-grid">
          {about.paragraphs.map((paragraph, i) => (
            <div
              key={cellTitles[i]}
              className="about-cell"
              data-rv
              data-rv-delay={i}
            >
              <h3>{cellTitles[i]}</h3>
              <p>{renderParagraph(paragraph)}</p>
            </div>
          ))}
          <div className="about-cell" data-rv data-rv-delay={3}>
            <h3>Currently</h3>
            {about.currently.map((item) => (
              <div key={item.role} className="now-item">
                <span>{item.role}</span>
                <span className="co">{item.co}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
