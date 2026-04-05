"use client";

import { Slide } from "@/components/Slide";
import { StepByStep } from "@/components/StepByStep";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 04 — Metodología Apex
// ─────────────────────────────────────────────

const steps = [
  { title: "Diagnóstico", description: "6 semanas de inmersión. Entrevistas con 40+ stakeholders, análisis de datos financieros y operativos, benchmark competitivo.", icon: "search" },
  { title: "Diseño de solución", description: "Co-creación con el equipo directivo. Roadmap priorizado por impacto vs esfuerzo. Business case por iniciativa.", icon: "draw" },
  { title: "Implementación", description: "Equipos mixtos Apex + cliente. Sprints de 2 semanas con KPIs claros. War room dedicado.", icon: "rocket_launch" },
  { title: "Transferencia", description: "Capacitación al equipo interno. Playbooks operativos. 6 meses de acompañamiento post-proyecto.", icon: "school" },
  { title: "Medición de impacto", description: "Dashboard de resultados en tiempo real. Reporte trimestral de ROI. Ajustes basados en data.", icon: "monitoring" },
];

export function COSlide04Methodology() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <span className="font-mono text-sm text-muted/50 block mb-2">04</span>
          <h2 className="font-display text-3xl sm:text-4xl text-fg-dark tracking-tight mb-2">
            Metodología <span className="text-gradient">Apex</span>
          </h2>
          <p className="text-muted text-sm mb-6">Probada en 200+ proyectos. Diseñada para generar impacto desde el día 1.</p>
        </StaggerItem>
        <StaggerItem>
          <StepByStep steps={steps} variant="light" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
