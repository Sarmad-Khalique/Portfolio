import { portfolioSections, stack } from "@/lib/portfolio-data";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  const { eyebrow, title, lede } = portfolioSections.stack;

  return (
    <section id="stack">
      <div className="wrap">
        <Reveal className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h2" className="title">
          {title}
        </Reveal>
        <Reveal as="p" className="section-lede">
          {lede}
        </Reveal>

        <Reveal className="config">
          {stack.map((row) => (
            <div key={row.key} className="config-row">
              <div className="config-key">{row.key}</div>
              <div className="config-val">
                {row.values.map((value) => (
                  <span key={value} className="chip">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
