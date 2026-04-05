"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { ComparisonTable } from "@/components/ComparisonTable";

// ─────────────────────────────────────────────
// Slide 05 — Comparativa
// TechPro vs Apple vs Dell vs Lenovo
// ─────────────────────────────────────────────

export function CASlide05Comparison() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            Comparativa
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-fg-light">
            Nosotros vs.{" "}
            <span className="text-gradient">la competencia</span>
          </h2>
          <p className="text-fg-light/40 text-base mt-3 max-w-lg mx-auto">
            Comparación directa con las workstations más reconocidas del mercado.
          </p>
        </div>

        {/* Tabla comparativa */}
        <ComparisonTable
          variant="dark"
          columns={[
            { label: "TechPro X1", highlighted: true },
            { label: "Apple MBP" },
            { label: "Dell XPS" },
            { label: "Lenovo X1" },
          ]}
          rows={[
            { feature: "Precio base", values: ["$2,499", "$2,999", "$2,199", "$2,349"] },
            { feature: "Rendimiento CPU", values: ["⭐ 98/100", "95/100", "88/100", "86/100"] },
            { feature: "Pantalla", values: ["16\" XDR", "16\" XDR", "15.6\" OLED", "14\" IPS"] },
            { feature: "Batería", values: ["22 h", "18 h", "13 h", "15 h"] },
            { feature: "Soporte técnico", values: [true, false, true, true] },
            { feature: "Garantía", values: ["5 años", "1 año", "3 años", "3 años"] },
            { feature: "Diseño / Peso", values: ["1.83 kg", "2.14 kg", "1.86 kg", "1.94 kg"] },
          ]}
        />
      </StaggerReveal>
    </Slide>
  );
}
