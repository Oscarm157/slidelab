interface SpecItem {
  label: string;
  value: string;
  icon?: string;
  highlight?: boolean;
}

interface SpecSheetProps {
  title?: string;
  specs: SpecItem[];
  columns?: 1 | 2;
  variant?: "dark" | "light";
}

export function SpecSheet({ title, specs, columns = 1, variant = "light" }: SpecSheetProps) {
  const stripBg = variant === "dark" ? "bg-card/40" : "bg-white/50";
  const highlightBg = variant === "dark" ? "bg-primary/10" : "bg-primary/5";

  const renderSpec = (spec: SpecItem, i: number) => (
    <div
      key={spec.label}
      className={`flex items-center justify-between rounded-lg px-5 py-3 ${
        spec.highlight ? highlightBg : i % 2 === 0 ? stripBg : ""
      }`}
      style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s both` }}
    >
      <span className="text-muted text-sm flex items-center gap-2">
        {spec.icon && <span className="material-symbols-outlined text-primary text-[18px]">{spec.icon}</span>}
        {spec.label}
      </span>
      <span className="font-mono text-primary text-sm font-medium">{spec.value}</span>
    </div>
  );

  return (
    <div>
      {title && <h4 className="font-display text-base mb-3">{title}</h4>}
      {columns === 1 ? (
        <div className="space-y-1.5">
          {specs.map(renderSpec)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
          {specs.map(renderSpec)}
        </div>
      )}
    </div>
  );
}
