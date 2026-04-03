interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  track?: string;
  trackColor?: string;
  duration?: string;
  icon?: string;
}

interface AgendaListProps {
  items: AgendaItem[];
  variant?: "dark" | "light";
}

export function AgendaList({ items, variant = "light" }: AgendaListProps) {
  const stripBg = variant === "dark" ? "bg-card/40" : "bg-white/50";

  return (
    <div className="relative pl-20 sm:pl-24">
      {/* Rail vertical */}
      <div className="absolute left-16 sm:left-20 top-0 bottom-0 w-px bg-primary/20" />

      <div className="space-y-1">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-xl px-5 py-4 ${i % 2 === 0 ? stripBg : ""}`}
            style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s both` }}
          >
            {/* Tiempo en el rail */}
            <span className="absolute -left-20 sm:-left-24 top-4 font-mono text-xs text-primary w-14 sm:w-18 text-right">
              {item.time}
            </span>

            {/* Dot en el rail */}
            <div className="absolute -left-[5px] top-5 w-2.5 h-2.5 rounded-full bg-primary" />

            {/* Contenido */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                {item.icon && (
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">{item.icon}</span>
                )}
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  {item.speaker && <p className="text-muted text-xs mt-0.5">{item.speaker}</p>}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {item.track && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.trackColor ?? "var(--t-primary)" }} />
                    {item.track}
                  </span>
                )}
                {item.duration && (
                  <span className="text-muted text-[10px] font-mono">{item.duration}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
