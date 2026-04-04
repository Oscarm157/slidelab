"use client";

import { Slide } from "@/components/Slide";
import { KPIRow } from "@/components/KPIRow";
import { MetricDelta } from "@/components/MetricDelta";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 06 — Tracción y Métricas
// KPIs principales + deltas de crecimiento
// ─────────────────────────────────────────────

const kpis = [
  { label: "MRR", value: 420, prefix: "$", suffix: "K", icon: "attach_money", change: 32 },
  { label: "Clientes", value: 187, icon: "business", change: 45 },
  { label: "NPS", value: 72, icon: "sentiment_very_satisfied", change: 8 },
  { label: "Churn", value: 2.1, suffix: "%", decimals: 1, icon: "trending_down", change: -15 },
];

export function SUSlide06Traction() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-10">
            <span className="font-mono text-sm text-muted/40 block mb-2">06</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
              Tracción <span className="text-primary">real</span>
            </h2>
            <p className="mt-3 text-muted text-base max-w-lg">
              18 meses en el mercado. Crecimiento compuesto del 32% mensual.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <KPIRow items={kpis} variant="light" />
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <MetricDelta
              label="Revenue mensual"
              from={85}
              to={420}
              prefix="$"
              suffix="K"
              variant="light"
            />
            <MetricDelta
              label="Usuarios activos diarios"
              from={1200}
              to={8400}
              variant="light"
            />
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
