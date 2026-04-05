"use client";

import { Slide } from "@/components/Slide";
import { OrgChart } from "@/components/OrgChart";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 05 — Estructura Organizacional Propuesta
// ─────────────────────────────────────────────

const orgRoot = {
  name: "CEO",
  title: "Dirección General",
  children: [
    {
      name: "COO",
      title: "Operaciones (NUEVO)",
      children: [
        { name: "Dir. Manufactura", title: "Plantas Mty + Qro" },
        { name: "Dir. Supply Chain", title: "Logística & Compras" },
        { name: "Dir. Calidad", title: "ISO + Lean Six Sigma" },
      ],
    },
    {
      name: "CFO",
      title: "Finanzas",
      children: [
        { name: "Contraloría", title: "Costos & Reporting" },
        { name: "FP&A", title: "Planning & Analysis" },
      ],
    },
    {
      name: "CHRO",
      title: "Talento (NUEVO)",
      children: [
        { name: "Dir. Desarrollo", title: "Capacitación & Liderazgo" },
        { name: "Comp & Ben", title: "Retención & Clima" },
      ],
    },
  ],
};

export function COSlide05OrgChart() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 50% 30%, color-mix(in srgb, var(--t-primary) 8%, transparent), transparent)",
      }} />
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-fg-light/35 block mb-2">05</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight mb-2">
              Estructura <span className="text-gradient">propuesta</span>
            </h2>
            <p className="text-fg-light/40 text-sm mb-6">Dos posiciones clave nuevas: COO y CHRO para cerrar brechas operativas y de talento.</p>
          </StaggerItem>
          <StaggerItem>
            <OrgChart root={orgRoot} variant="dark" />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
