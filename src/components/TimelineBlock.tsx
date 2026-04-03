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
  const bg = variant === "dark"
    ? "bg-card border-card-border"
    : "bg-card-light border-card-border/30";

  return (
    <div className="relative">
      {/* Línea conectora */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-primary/20" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {phases.map((phase, i) => (
          <div key={i} className="relative">
            {/* Punto en la línea */}
            <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary mx-auto mb-4">
              <div className="w-2 h-2 rounded-full bg-bg-dark" />
            </div>

            <div className={`rounded-xl border p-4 ${bg}`}>
              <span className="material-symbols-outlined text-primary text-[24px] mb-2 block">
                {phase.icon}
              </span>
              <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
              <p className="text-muted text-xs leading-relaxed">{phase.description}</p>
              {phase.label && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
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
