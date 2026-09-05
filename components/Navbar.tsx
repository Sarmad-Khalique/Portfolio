import Link from "next/link";
import { navLinks, personalInfo } from "@/lib/portfolio-data";

export function Navbar() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand" aria-label="Sarmad Khalique, home">
          <span className="brand-mark" aria-hidden>SK</span>
          <span className="brand-copy">
            <strong>{personalInfo.shortName}</strong>
            <span>Backend / Applied AI</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="nav-contact" href={`mailto:${personalInfo.email}`}>
          <span className="status-dot" aria-hidden />
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
