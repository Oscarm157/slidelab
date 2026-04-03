interface FunnelStage {
  label: string;
  value: number;
  suffix?: string;
}

interface FunnelChartProps {
  stages: FunnelStage[];
  variant?: "dark" | "light";
}

// Opacidades progresivas para las barras del funnel
const barOpacities = ["100%", "80%", "60%", "40%", "25%"];

export function FunnelChart({ stages, variant = "light" }: FunnelChartProps) {
  const maxValue = Math.max(...stages.map((s) => s.value));

  return (
    <div className="space-y-2 max-w-2xl mx-auto">
      {stages.map((stage, i) => {
        const widthPercent = (stage.value / maxValue) * 100;
        const conversionRate = i > 0 ? ((stage.value / stages[i - 1].value) * 100).toFixed(0) : null;
        const isTop = i < 2;

        return (
          <div key={stage.label}>
            {conversionRate && (
              <div className="text-center mb-1">
                <span className="text-[10px] font-mono text-muted/50">↓ {conversionRate}%</span>
              </div>
            )}

            <div className="flex items-center justify-center">
              <div
                className={`rounded-xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${
                  isTop ? "bg-primary text-white" : variant === "dark" ? "bg-card" : "bg-primary/15"
                }`}
                style={{
                  width: `${widthPercent}%`,
                  minWidth: "200px",
                  opacity: barOpacities[i] ?? "20%",
                }}
              >
                <span className={`text-sm font-medium ${isTop ? "text-white" : ""}`}>
                  {stage.label}
                </span>
                <span className={`font-mono text-sm font-medium ${isTop ? "text-white" : "text-primary"}`}>
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
