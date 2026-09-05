import Link from "next/link";
import { personalInfo } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-row">
        <span>© {new Date().getFullYear()} {personalInfo.fullName}</span>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
