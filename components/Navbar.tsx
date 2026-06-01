"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap-config";
import { navLinks, personalInfo } from "@/lib/portfolio-data";

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  registerGsapPlugins();

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { scope: navRef },
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = personalInfo.fullName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <nav
        ref={navRef}
        className={`container-wide mx-auto flex items-center justify-between rounded-2xl px-4 py-2.5 pointer-events-auto transition-all duration-300 ${
          scrolled ? "glass-nav" : "glass"
        }`}
        aria-label="Main navigation"
      >
        <Link
          href="#"
          className="font-heading flex items-center gap-2.5 text-base font-bold tracking-tight text-foreground cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-lg"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs font-extrabold text-white">
            {initials}
          </span>
          <span className="hidden sm:inline">Sarmad</span>
        </Link>

        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={personalInfo.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-zinc-950 hover:bg-accent-hover transition-colors duration-200 cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Calendar className="h-4 w-4" aria-hidden />
          Book a call
        </Link>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-foreground cursor-pointer transition-colors duration-200 hover:bg-white/10"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden container-wide mx-auto mt-2 glass-strong rounded-2xl p-3 flex flex-col gap-0.5 pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-muted hover:text-foreground hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={personalInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
