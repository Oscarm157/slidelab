interface Step {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

interface StepByStepProps {
  steps: Step[];
  variant?: "dark" | "light";
}

export function StepByStep({ steps, variant = "light" }: StepByStepProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={i}
            className={`flex flex-col ${step.image ? (isEven ? "md:flex-row" : "md:flex-row-reverse") : "md:flex-row"} gap-6 items-center`}
          >
            {/* Contenido */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  {step.icon ? (
                    <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                  ) : (
                    <span className="font-mono text-lg font-medium">{i + 1}</span>
                  )}
                </div>
                <h3 className="font-display text-xl">{step.title}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed ml-16">{step.description}</p>
            </div>

            {/* Imagen opcional */}
            {step.image && (
              <div className="flex-1 max-w-sm">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
