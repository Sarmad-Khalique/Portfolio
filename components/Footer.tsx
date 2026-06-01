import { personalInfo } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © {year}{" "}
          <span className="text-foreground font-medium">
            {personalInfo.fullName}
          </span>
        </p>
        <p className="text-muted-strong text-xs">
          {personalInfo.professionalTitle}
        </p>
      </div>
    </footer>
  );
}
