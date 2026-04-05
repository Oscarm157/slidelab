"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { StatCard } from "@/components/StatCard";

// ─────────────────────────────────────────────
// Slide 3 — La solución: 55 componentes
// ─────────────────────────────────────────────

const highlights = [
  { icon: "dashboard", label: "Gráficas interactivas" },
  { icon: "groups", label: "Team grids" },
  { icon: "payments", label: "Pricing tables" },
  { icon: "map", label: "Mapas embebidos" },
  { icon: "compare", label: "Comparativas" },
  { icon: "timeline", label: "Timelines" },
  { icon: "zoom_in", label: "Zoom interactivo" },
  { icon: "music_note", label: "Audio y video" },
];

export function Slide03Product() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 40% at 30% 60%, color-mix(in srgb, var(--t-primary) 5%, transparent), transparent)",
      }} />

      <StaggerReveal className="relative">
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-fg-light/35 block mb-2">03</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
              55 componentes listos
            </h2>
            <p className="mt-3 text-fg-light/40 text-base max-w-lg">
              Todo lo que necesitas para cualquier tipo de presentación. Solo elige, combina y personaliza.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2.5 bg-card/60 rounded-xl px-4 py-3">
                <span className="material-symbols-outlined text-primary text-[20px]">{h.icon}</span>
                <span className="text-sm text-fg-light/70">{h.label}</span>
              </div>
            ))}
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value={55} label="Componentes" variant="dark" />
            <StatCard value={90} suffix=" min" label="Tiempo promedio" variant="dark" />
            <StatCard value={0} prefix="$" label="Costo de diseño" variant="dark" />
            <StatCard value={100} suffix="%" label="Personalizable" variant="dark" />
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
