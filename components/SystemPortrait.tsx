"use client";

import Image from "next/image";
import { useRef } from "react";

export function SystemPortrait() {
  const stageRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stage.style.setProperty("--rx", `${y * -7}deg`);
    stage.style.setProperty("--ry", `${x * 9}deg`);
    stage.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    stage.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const reset = () => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--rx", "0deg");
    stage.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={stageRef}
      className="system-portrait"
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      <div className="portrait-grid" aria-hidden />
      <div className="portrait-frame">
        <Image
          src="/portrait.png"
          alt="Muhammad Sarmad Khalique"
          width={992}
          height={1024}
          priority
          className="portrait-image"
        />
        <div className="portrait-scan" aria-hidden />
      </div>

      <div className="system-label label-api" aria-hidden>
        <span>01</span> API CORE
      </div>
      <div className="system-label label-ai" aria-hidden>
        <span>02</span> APPLIED AI
      </div>
      <div className="system-label label-ops" aria-hidden>
        <span>03</span> DELIVERY
      </div>

      <div className="system-status">
        <span className="pulse" aria-hidden />
        SYSTEMS / ONLINE
      </div>
      <div className="portrait-caption">
        <span>PAKISTAN</span>
        <span>REMOTE / UTC+5</span>
      </div>
    </div>
  );
}
