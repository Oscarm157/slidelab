interface ProcessStep {
  number?: number;
  title: string;
  description?: string;
  icon?: string;
  status?: "completed" | "active" | "upcoming";
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  variant?: "dark" | "light";
}

export function ProcessFlow({ steps, variant = "light" }: ProcessFlowProps) {
  const cardBg = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <div className="relative">
      {/* Línea conectora horizontal */}
      <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-primary/15" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step, i) => {
          const status = step.status ?? "upcoming";
          return (
            <div key={i} className="relative flex flex-col items-center">
              {/* Nodo numerado */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 z-10 ${
                status === "completed" ? "bg-primary text-white" :
                status === "active" ? "bg-primary text-white pulse-dot" :
                "bg-primary/10 text-primary"
              }`}>
                {step.icon ? (
                  <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                ) : (
                  <span className="font-mono text-lg font-medium">{step.number ?? i + 1}</span>
                )}
              </div>

              {/* Card */}
              <div className={`rounded-2xl p-5 text-center w-full ${cardBg}`}>
                <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                {step.description && (
                  <p className="text-muted text-xs leading-relaxed">{step.description}</p>
                )}
              </div>

              {/* Chevron conector (mobile) */}
              {i < steps.length - 1 && (
                <span className="md:hidden material-symbols-outlined text-primary/30 text-[20px] my-2">
                  expand_more
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
