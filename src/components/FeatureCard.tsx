interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: "dark" | "light";
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = "dark",
}: FeatureCardProps) {
  const bg = variant === "dark"
    ? "bg-card border-card-border hover:border-primary/30"
    : "bg-card-light border-card-border/30 hover:border-primary/30";

  return (
    <div className={`rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 ${bg}`}>
      <span className="material-symbols-outlined text-primary text-[28px] mb-3 block">
        {icon}
      </span>
      <h3 className="font-semibold text-sm sm:text-base mb-1">{title}</h3>
      <p className="text-muted text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  );
}
