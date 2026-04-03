interface BeforeAfterSide {
  label: string;
  image?: string;
  stats?: { label: string; value: string }[];
  description?: string;
}

interface BeforeAfterProps {
  before: BeforeAfterSide;
  after: BeforeAfterSide;
  variant?: "dark" | "light";
}

export function BeforeAfter({ before, after, variant = "light" }: BeforeAfterProps) {
  const cardBg = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  const renderSide = (side: BeforeAfterSide, type: "before" | "after") => (
    <div className={`rounded-2xl overflow-hidden ${cardBg}`}>
      {/* Badge */}
      <div className={`px-5 py-2 ${type === "before" ? "bg-muted/10" : "bg-primary/10"}`}>
        <span className={`text-xs font-mono font-medium uppercase tracking-widest ${
          type === "before" ? "text-muted" : "text-primary"
        }`}>
          {side.label}
        </span>
      </div>

      {/* Image */}
      {side.image && (
        <img
          src={side.image}
          alt={side.label}
          className={`w-full h-48 object-cover ${type === "before" ? "grayscale opacity-70" : ""}`}
        />
      )}

      {/* Content */}
      <div className="p-5">
        {side.description && <p className="text-sm mb-3">{side.description}</p>}
        {side.stats && (
          <div className="space-y-2">
            {side.stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between">
                <span className="text-muted text-xs">{s.label}</span>
                <span className={`font-mono text-sm font-medium ${type === "after" ? "text-primary" : ""}`}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
      {renderSide(before, "before")}

      {/* Arrow connector (desktop) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center z-10">
        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </div>

      {renderSide(after, "after")}
    </div>
  );
}
