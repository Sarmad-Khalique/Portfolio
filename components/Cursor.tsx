"use client";

import { useEffect, useRef, useState } from "react";

const TAIL_LENGTH = 10;

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-cursor");

    const root = rootRef.current!;
    const nodes = Array.from(root.children) as HTMLElement[];
    const head = nodes[0];
    const tail = nodes.slice(1);

    const mouse = { x: -100, y: -100 };
    // Each segment chases the one before it
    const points = Array.from({ length: TAIL_LENGTH + 1 }, () => ({
      x: -100,
      y: -100,
    }));

    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        visible = true;
        root.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      root.style.opacity = "0";
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      !!el.closest("a, button, [role='button'], .about-cell");

    const onOver = (e: PointerEvent) => {
      head.classList.toggle("cursor-hover", isInteractive(e.target));
    };

    const tick = () => {
      points[0].x += (mouse.x - points[0].x) * 0.4;
      points[0].y += (mouse.y - points[0].y) * 0.4;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.32;
        points[i].y += (points[i - 1].y - points[i].y) * 0.32;
      }
      head.style.transform = `translate3d(${points[0].x}px, ${points[0].y}px, 0) translate(-50%, -50%)`;
      tail.forEach((node, i) => {
        const p = points[i + 1];
        node.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) rotate(45deg)`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className="cursor-root" aria-hidden>
      <span className="cursor-head" />
      {Array.from({ length: TAIL_LENGTH }, (_, i) => (
        <span
          key={i}
          className="cursor-seg"
          style={{
            width: `${Math.max(3, 9 - i * 0.7)}px`,
            height: `${Math.max(3, 9 - i * 0.7)}px`,
            opacity: 0.75 - i * 0.07,
          }}
        />
      ))}
    </div>
  );
}
