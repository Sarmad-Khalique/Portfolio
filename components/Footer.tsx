import { personalInfo } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap foot-row">
        <span>
          © {year} {personalInfo.fullName}. Built with intent, not a
          template.
        </span>
        <span>
          status: <span className="status-available">available</span>
        </span>
      </div>
    </footer>
  );
}
