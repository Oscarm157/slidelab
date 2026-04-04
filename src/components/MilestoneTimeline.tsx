interface Milestone {
  date: string;
  title: string;
  description?: string;
  icon?: string;
  status?: "completed" | "current" | "upcoming";
}

interface MilestoneTimelineProps {
  milestones: Milestone[];
  variant?: "dark" | "light";
}

export function MilestoneTimeline({ milestones, variant = "light" }: MilestoneTimelineProps) {
  const cardBg = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <div className="relative pl-8 sm:pl-10">
      {/* Rail vertical */}
      <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-primary/20" />

      <div className="space-y-6">
        {milestones.map((ms, i) => {
          const status = ms.status ?? "upcoming";
          return (
            <div key={i} className="relative">
              {/* Nodo en el rail */}
              <div className={`absolute -left-8 sm:-left-10 top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                status === "completed" ? "bg-primary border-primary" :
                status === "current" ? "bg-primary border-primary" :
                "bg-transparent border-primary/40"
              }`}>
                {status === "completed" && (
                  <span className="material-symbols-outlined text-white text-[12px]">check</span>
                )}
                {status === "current" && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                    <span className="w-2 h-2 rounded-full bg-white relative z-10" />
                  </>
                )}
              </div>

              {/* Fecha */}
              <p className="text-xs font-mono text-primary mb-1">{ms.date}</p>

              {/* Card */}
              <div className={`rounded-xl p-4 ${cardBg}`}>
                <div className="flex items-start gap-3">
                  {ms.icon && (
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-[18px]">{ms.icon}</span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-sm">{ms.title}</h4>
                    {ms.description && (
                      <p className="text-muted text-xs leading-relaxed mt-1">{ms.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
