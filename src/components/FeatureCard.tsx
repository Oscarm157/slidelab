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
  const styles = variant === "dark"
    ? "bg-card border-card-border/50 hover:border-primary/40 shadow-lg shadow-black/20"
    : "bg-white border-[#ddd] hover:border-primary/40 shadow-md shadow-black/5";

  return (
    <div className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${styles}`}>
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-primary text-[22px]">
          {icon}
        </span>
      </div>
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
