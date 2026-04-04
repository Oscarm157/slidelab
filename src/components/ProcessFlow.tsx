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
      <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-primary/15" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step, i) => {
          const status = step.status ?? "upcoming";
          return (
            <div key={i} className="relative flex flex-col items-center">
              {/* Nodo */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 z-10 relative ${
                status === "completed" ? "bg-primary text-white" :
                status === "active" ? "bg-primary text-white" :
                "bg-primary/10 text-primary"
              }`}>
                {status === "active" && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    <span className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse" />
                  </>
                )}
                {step.icon ? (
                  <span className="material-symbols-outlined text-[24px] relative z-10">{step.icon}</span>
                ) : (
                  <span className="font-mono text-lg font-medium relative z-10">{step.number ?? i + 1}</span>
                )}
              </div>

              <div className={`rounded-2xl p-5 text-center w-full ${cardBg}`}>
                <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                {step.description && (
                  <p className="text-muted text-xs leading-relaxed">{step.description}</p>
                )}
              </div>

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
