import { stack } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="stack" className="sec">
      <div className="wrap">
        <div className="sec-head" data-rv>
          <h2>Tools &amp; systems</h2>
          <span className="index">04 — THE STACK</span>
        </div>

        <div className="stack-table" data-rv>
          {stack.map((row) => (
            <div key={row.key} className="stack-row">
              <div className="stack-key">{row.key}</div>
              <div className="stack-val">{row.values.join("  ·  ")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
