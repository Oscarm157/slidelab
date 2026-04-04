"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

interface FunnelStage {
  label: string;
  value: number;
  suffix?: string;
  icon?: string;
}

interface FunnelChartProps {
  stages: FunnelStage[];
  variant?: "dark" | "light";
}

export function FunnelChart({ stages, variant = "light" }: FunnelChartProps) {
  const maxValue = Math.max(...stages.map((s) => s.value));
  const bgSurface = variant === "dark"
    ? "bg-card/40 shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
    : "bg-white/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)]";

  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${bgSurface}`}>
      <div className="space-y-0 max-w-3xl mx-auto">
        {stages.map((stage, i) => {
          // Escala logarítmica para que las diferencias grandes se vean proporcionadas
          // sin que las barras chicas colapsen a nada
          const ratio = stage.value / maxValue;
          const widthPercent = Math.max(20, (Math.log(ratio * 99 + 1) / Math.log(100)) * 100);
          const conversionRate = i > 0 ? ((stage.value / stages[i - 1].value) * 100).toFixed(0) : null;
          const paddingY = 16 - i * 2; // Decreasing height

          return (
            <div key={stage.label}>
              {/* Conversion connector */}
              {conversionRate && (
                <div className="flex items-center justify-center py-1.5">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-6 border-t border-dashed border-primary/20" />
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-medium">
                      {conversionRate}%
                    </span>
                    <div className="h-px w-6 border-t border-dashed border-primary/20" />
                  </div>
                </div>
              )}

              {/* Bar */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: `${widthPercent}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
                  className="flex items-center justify-between rounded-xl overflow-hidden"
                  style={{
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                    paddingLeft: 20,
                    paddingRight: 20,
                    background: `linear-gradient(90deg, var(--t-primary) 0%, color-mix(in srgb, var(--t-primary) ${60 - i * 10}%, ${variant === "dark" ? "#1a1a1a" : "#F5F0EB"}) 100%)`,
                  }}
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-white">
                    {stage.icon && (
                      <span className="material-symbols-outlined text-[18px] text-white/70">{stage.icon}</span>
                    )}
                    {stage.label}
                  </span>
                  <span className="font-mono text-sm font-semibold text-white">
                    <AnimatedCounter target={stage.value} suffix={stage.suffix} duration={1200} />
                  </span>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
