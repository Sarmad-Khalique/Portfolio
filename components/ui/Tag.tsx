type TagProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export function Tag({ children, variant = "default", className = "" }: TagProps) {
  const styles =
    variant === "accent"
      ? "glass-badge text-accent"
      : "glass-pill";

  return (
    <span
      className={`inline-flex items-center transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
