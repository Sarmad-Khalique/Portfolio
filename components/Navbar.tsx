import Link from "next/link";
import { navLinks } from "@/lib/portfolio-data";

export function Navbar() {
  return (
    <>
      <header className="masthead">
        <div className="wrap masthead-grid">
          <div className="masthead-name">
            Sarmad Khalique<span className="dot">.</span>
          </div>
          <div className="masthead-cell">
            Backend, full-stack &amp; AI engineering for the real world.
            <span className="since">SINCE 2022</span>
          </div>
          <div className="masthead-cell">
            Remote from Pakistan,
            <br />
            US timezone overlap.
          </div>
        </div>
      </header>
      <nav className="nav-bar" aria-label="Main navigation">
        <div className="wrap nav-row">
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="#contact" className="nav-hire">
            HIRE ME ↗
          </Link>
        </div>
      </nav>
    </>
  );
}
