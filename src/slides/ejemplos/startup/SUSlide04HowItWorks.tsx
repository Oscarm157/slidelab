"use client";

import { Slide } from "@/components/Slide";
import { ProcessFlow } from "@/components/ProcessFlow";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 04 — Cómo Funciona
// 4 pasos del proceso con ProcessFlow
// ─────────────────────────────────────────────

const steps = [
  {
    number: 1,
    title: "Conecta",
    description: "Integra tus herramientas en 5 minutos. Sin código, sin ingenieros.",
    icon: "cable",
    status: "completed" as const,
  },
  {
    number: 2,
    title: "Unifica",
    description: "Metrica consolida datos de producto, revenue y soporte en un solo modelo.",
    icon: "hub",
    status: "completed" as const,
  },
  {
    number: 3,
    title: "Pregunta",
    description: "Haz preguntas en lenguaje natural. La IA genera análisis y visualizaciones al instante.",
    icon: "chat",
    status: "active" as const,
  },
  {
    number: 4,
    title: "Actúa",
    description: "Recibe recomendaciones accionables. Mide el impacto de cada decisión automáticamente.",
    icon: "rocket_launch",
    status: "upcoming" as const,
  },
];

export function SUSlide04HowItWorks() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-10">
            <span className="font-mono text-sm text-muted/40 block mb-2">04</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
              Cómo funciona
            </h2>
            <p className="mt-3 text-muted text-base max-w-lg">
              De datos fragmentados a decisiones inteligentes en 4 pasos.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <ProcessFlow steps={steps} variant="light" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
