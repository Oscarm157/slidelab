interface FunnelStage {
  label: string;
  value: number;
  suffix?: string;
}

interface FunnelChartProps {
  stages: FunnelStage[];
  variant?: "dark" | "light";
}

export function FunnelChart({ stages, variant = "light" }: FunnelChartProps) {
  const maxValue = Math.max(...stages.map((s) => s.value));

  return (
    <div className="space-y-2 max-w-2xl mx-auto">
      {stages.map((stage, i) => {
        const widthPercent = (stage.value / maxValue) * 100;
        const opacity = 1 - i * (0.6 / stages.length);
        const conversionRate = i > 0 ? ((stage.value / stages[i - 1].value) * 100).toFixed(0) : null;

        return (
          <div key={stage.label}>
            {/* Tasa de conversión entre etapas */}
            {conversionRate && (
              <div className="text-center mb-1">
                <span className="text-[10px] font-mono text-muted/50">
                  ↓ {conversionRate}%
                </span>
              </div>
            )}

            {/* Barra */}
            <div className="flex items-center justify-center">
              <div
                className="rounded-xl px-5 py-3 flex items-center justify-between transition-all duration-500"
                style={{
                  width: `${widthPercent}%`,
                  minWidth: "200px",
                  backgroundColor: `color-mix(in srgb, var(--t-primary) ${opacity * 100}%, ${variant === "dark" ? "#141414" : "#F5F0EB"})`,
                }}
              >
                <span className={`text-sm font-medium ${i < 2 ? "text-white" : variant === "dark" ? "text-fg-light" : "text-fg-dark"}`}>
                  {stage.label}
                </span>
                <span className={`font-mono text-sm font-medium ${i < 2 ? "text-white" : "text-primary"}`}>
                  {stage.value.toLocaleString()}{stage.suffix}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
