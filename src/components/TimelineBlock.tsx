interface TimelinePhase {
  icon: string;
  title: string;
  description: string;
  label?: string;
}

interface TimelineBlockProps {
  phases: TimelinePhase[];
  variant?: "dark" | "light";
}

export function TimelineBlock({ phases, variant = "dark" }: TimelineBlockProps) {
  const cardBg = variant === "dark"
    ? "bg-card border-card-border/50 shadow-lg shadow-black/20"
    : "bg-white border-[#ddd] shadow-md shadow-black/5";

  return (
    <div className="relative">
      {/* Línea conectora */}
      <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-primary/20" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {phases.map((phase, i) => (
          <div
            key={i}
            className="relative"
            style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s both` }}
          >
            {/* Punto en la línea */}
            <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 mx-auto mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            </div>

            <div className={`rounded-2xl border p-5 h-full ${cardBg}`}>
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  {phase.icon}
                </span>
              </div>
              <h4 className="font-semibold text-sm mb-2">{phase.title}</h4>
              <p className="text-muted text-xs leading-relaxed">{phase.description}</p>
              {phase.label && (
                <span className="inline-block mt-3 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-medium tracking-wide">
                  {phase.label}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
