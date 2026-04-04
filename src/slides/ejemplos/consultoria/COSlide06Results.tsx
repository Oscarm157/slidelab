"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { BeforeAfter } from "@/components/BeforeAfter";
import { MetricDelta } from "@/components/MetricDelta";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 06 — Resultados Esperados
// ─────────────────────────────────────────────

export function COSlide06Results() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <span className="font-mono text-sm text-muted/30 block mb-2">06</span>
          <h2 className="font-display text-3xl sm:text-4xl text-fg-dark tracking-tight mb-6">
            Resultados <span className="text-gradient">esperados</span>
          </h2>
        </StaggerItem>

        <StaggerItem>
          <BeforeAfter
            before={{
              label: "Estado actual",
              description: "Operación fragmentada, márgenes en declive, talento desmotivado.",
              stats: [
                { label: "Margen EBITDA", value: "21.5%" },
                { label: "Días inventario", value: "47" },
                { label: "Rotación talento", value: "34%" },
                { label: "OEE plantas", value: "62%" },
              ],
            }}
            after={{
              label: "Proyección 18 meses",
              description: "Operación integrada, márgenes recuperados, equipo estable y alineado.",
              stats: [
                { label: "Margen EBITDA", value: "28%+" },
                { label: "Días inventario", value: "30" },
                { label: "Rotación talento", value: "<15%" },
                { label: "OEE plantas", value: "82%" },
              ],
            }}
            variant="light"
          />
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <MetricDelta label="Margen EBITDA" from={21.5} to={28} suffix="%" decimals={1} variant="light" />
            <MetricDelta label="Días de inventario" from={47} to={30} variant="light" />
            <MetricDelta label="Ahorro anual estimado" from={0} to={45} prefix="$" suffix="M MXN" variant="light" />
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
