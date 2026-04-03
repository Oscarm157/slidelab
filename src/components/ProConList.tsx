interface ProConItem {
  text: string;
  detail?: string;
}

interface ProConListProps {
  pros: ProConItem[];
  cons: ProConItem[];
  prosLabel?: string;
  consLabel?: string;
  variant?: "dark" | "light";
}

export function ProConList({
  pros, cons, prosLabel = "Ventajas", consLabel = "Consideraciones", variant = "light",
}: ProConListProps) {
  const cardBg = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Pros */}
      <div className={`rounded-2xl p-5 ${cardBg}`}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-4">
          <span className="material-symbols-outlined text-[14px]">check_circle</span>
          {prosLabel}
        </span>
        <div className="space-y-3">
          {pros.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-emerald-500 text-[18px] mt-0.5 shrink-0">check_circle</span>
              <div>
                <p className="text-sm">{item.text}</p>
                {item.detail && <p className="text-muted text-xs mt-0.5">{item.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cons */}
      <div className={`rounded-2xl p-5 ${cardBg}`}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-medium mb-4">
          <span className="material-symbols-outlined text-[14px]">warning</span>
          {consLabel}
        </span>
        <div className="space-y-3">
          {cons.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-amber-500 text-[18px] mt-0.5 shrink-0">warning</span>
              <div>
                <p className="text-sm">{item.text}</p>
                {item.detail && <p className="text-muted text-xs mt-0.5">{item.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
