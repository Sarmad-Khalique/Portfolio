type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-14 md:mb-20 max-w-2xl ${alignClass} ${className}`}>
      <p className="glass-label mb-4">{label}</p>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base font-medium text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
