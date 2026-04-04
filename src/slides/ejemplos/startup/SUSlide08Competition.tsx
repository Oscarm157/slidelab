"use client";

import { Slide } from "@/components/Slide";
import { ComparisonTable } from "@/components/ComparisonTable";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ────────────────────────��────────────────────
// Slide 08 — Landscape Competitivo
// Tabla comparativa vs competidores
// ───────────────────────────────────────��─────

const columns = [
  { label: "Feature" },
  { label: "Metrica AI", highlighted: true },
  { label: "Amplitude" },
  { label: "Mixpanel" },
  { label: "Looker" },
];

const rows = [
  { feature: "IA generativa para insights", values: [true, false, false, false] },
  { feature: "Lenguaje natural → SQL", values: [true, false, false, true] },
  { feature: "Unificación multi-herramienta", values: [true, false, false, true] },
  { feature: "Impact analysis automático", values: [true, false, true, false] },
  { feature: "Setup en < 10 min", values: [true, true, true, false] },
  { feature: "Dashboards colaborativos", values: [true, true, true, true] },
  { feature: "Precio para startups", values: ["$299/mo", "$549/mo", "$449/mo", "$3K+/mo"] },
  { feature: "Soporte en español", values: [true, false, false, false] },
];

export function SUSlide08Competition() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-muted/40 block mb-2">08</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
              Competencia
            </h2>
            <p className="mt-3 text-muted text-base max-w-lg">
              Los incumbentes analizan. Metrica AI entiende y recomienda.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <ComparisonTable columns={columns} rows={rows} variant="light" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
