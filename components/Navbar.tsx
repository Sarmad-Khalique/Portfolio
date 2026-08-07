"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, personalInfo } from "@/lib/portfolio-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <nav className="nav" aria-label="Main navigation">
          <Link href="#top" className="logo">
            <span className="dot" aria-hidden />
            {personalInfo.handle}
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="#contact" className="nav-cta">
              /connect
            </Link>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ≡
          </button>
        </nav>
        <div className={`mobile-menu${open ? " show" : ""}`} id="mobileMenu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setOpen(false)}>
            /connect
          </Link>
        </div>
      </div>
    </header>
  );
}
