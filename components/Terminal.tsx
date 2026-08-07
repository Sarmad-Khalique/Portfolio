"use client";

import { useEffect, useState } from "react";
import { terminalLines } from "@/lib/portfolio-data";

type TermLine = {
  p: string;
  t: string;
  cls?: string;
  d: number;
};

export function Terminal() {
  const [showCursor, setShowCursor] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setReduced(prefersReduced);
    const delay = prefersReduced ? 0 : 2100;
    const id = window.setTimeout(() => setShowCursor(true), delay);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span />
        <span />
        <span />
        <div className="terminal-title">sarmad@remote:~</div>
      </div>
      <div className="terminal-body" aria-live="polite">
        {(terminalLines as readonly TermLine[]).map((line) => (
          <div
            key={`${line.p}-${line.t}`}
            className="term-line"
            style={
              reduced
                ? { opacity: 1, animation: "none" }
                : { animationDelay: `${line.d / 1000}s` }
            }
          >
            <span className="term-prompt">{line.p}</span>
            <span className={`term-out ${line.cls ?? ""}`}>{line.t}</span>
          </div>
        ))}
        {showCursor && (
          <div className="term-line" style={{ opacity: 1, animation: "none" }}>
            <span className="term-prompt">$</span>
            <span className="cursor" aria-hidden />
          </div>
        )}
      </div>
    </div>
  );
}
