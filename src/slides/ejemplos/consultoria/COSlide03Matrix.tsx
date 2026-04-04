"use client";

import { Slide } from "@/components/Slide";
import { MatrixGrid } from "@/components/MatrixGrid";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 03 — Matriz de Priorización (Esfuerzo/Impacto)
// ─────────────────────────────────────────────

const cells = [
  { title: "Renegociar proveedores", description: "Ahorro inmediato del 8-12% en COGS", icon: "handshake", highlight: true },
  { title: "Automatizar línea 3", description: "Reducir 40% tiempos de ciclo", icon: "precision_manufacturing", highlight: true },
  { title: "Programa de retención", description: "Reducir rotación a <15% en 12 meses", icon: "groups", highlight: false },
  { title: "ERP nueva generación", description: "Migración completa en 18 meses", icon: "cloud_sync", highlight: false },
];

export function COSlide03Matrix() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 50% 50%, color-mix(in srgb, var(--t-primary) 10%, transparent), transparent)",
      }} />
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-fg-light/20 block mb-2">03</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight mb-2">
              Matriz de <span className="text-gradient">priorización</span>
            </h2>
            <p className="text-fg-light/40 text-sm mb-6">Quick wins arriba-izquierda. Proyectos estratégicos abajo-derecha.</p>
          </StaggerItem>
          <StaggerItem>
            <MatrixGrid cells={cells} size={2} axisLabels={{ top: "Alto impacto", bottom: "Bajo impacto", left: "Bajo esfuerzo", right: "Alto esfuerzo" }} variant="dark" />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
