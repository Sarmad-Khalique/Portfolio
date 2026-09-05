import { stack } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="stack" className="section stack-section">
      <div className="shell">
        <div className="section-heading" data-rv>
          <div>
            <p className="section-kicker">04 / Technical range</p>
            <h2>Deep backend. Enough breadth to ship.</h2>
          </div>
          <p>
            Technology is selected around the constraints—not the other way
            around.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((group, index) => (
            <article className="stack-card" key={group.key} data-rv data-rv-delay={index}>
              <div className="stack-card-head">
                <span>0{index + 1}</span>
                <span>{group.detail}</span>
              </div>
              <h3>{group.key}</h3>
              <div className="stack-items">
                {group.values.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
