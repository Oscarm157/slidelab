"use client";

import { Slide } from "@/components/Slide";
import { SplitSlide } from "@/components/SplitSlide";
import { IconList } from "@/components/IconList";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 02 — El Problema
// Los equipos de producto toman decisiones a ciegas
// ─────────────────────────────────────────────

const painPoints = [
  {
    icon: "visibility_off",
    text: "Datos dispersos en 12+ herramientas",
    subtext: "Analytics, CRM, soporte, producto — cada uno cuenta una historia distinta",
  },
  {
    icon: "hourglass_top",
    text: "3 semanas para un reporte de impacto",
    subtext: "Los equipos de BI están saturados, las decisiones se retrasan",
  },
  {
    icon: "trending_down",
    text: "40% de features no mueven la aguja",
    subtext: "Sin feedback loop, se construye por intuición, no por evidencia",
  },
  {
    icon: "group_off",
    text: "Product y Data no hablan el mismo idioma",
    subtext: "SQL vs tickets de Jira — la brecha sigue creciendo",
  },
];

export function SUSlide02Problem() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-muted/40 block mb-2">02</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
              Los equipos de producto
              <br />
              <span className="text-primary">vuelan a ciegas</span>
            </h2>
            <p className="mt-3 text-muted text-base max-w-lg">
              Las decisiones de producto deberían basarse en datos. Pero la realidad es otra.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <IconList items={painPoints} variant="light" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
