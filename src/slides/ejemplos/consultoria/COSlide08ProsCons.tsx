"use client";

import { Slide } from "@/components/Slide";
import { ProConList } from "@/components/ProConList";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 08 — Ventajas y Consideraciones
// ─────────────────────────────────────────────

const pros = [
  { text: "ROI demostrado de 3.2x en proyectos similares", detail: "Basado en 200+ engagements con medición rigurosa." },
  { text: "Equipo dedicado on-site 100% del tiempo", detail: "No somos consultores de escritorio. Vivimos la operación." },
  { text: "Resultados desde las primeras 8 semanas", detail: "Quick wins diseñados para generar tracción inmediata." },
  { text: "Transferencia de conocimiento garantizada", detail: "Tu equipo queda capacitado. No generamos dependencia." },
  { text: "Metodología probada en manufactura pesada", detail: "Experiencia directa en industrias reguladas y de alta complejidad." },
];

const cons = [
  { text: "Requiere dedicación del equipo directivo", detail: "Mínimo 8 horas semanales del CEO y C-suite durante diagnóstico." },
  { text: "Cambios organizacionales pueden generar fricción", detail: "Gestionamos change management, pero la transición requiere paciencia." },
  { text: "Inversión significativa en los primeros 6 meses", detail: "El grueso del costo es front-loaded. El ROI se materializa gradualmente." },
  { text: "Timelines ambiciosos requieren ejecución disciplinada", detail: "Si la organización no ejecuta, los resultados se retrasan." },
];

export function COSlide08ProsCons() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <span className="font-mono text-sm text-muted/30 block mb-2">08</span>
          <h2 className="font-display text-3xl sm:text-4xl text-fg-dark tracking-tight mb-6">
            Ventajas <span className="text-gradient">y consideraciones</span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <ProConList pros={pros} cons={cons} prosLabel="Ventajas" consLabel="Consideraciones" variant="light" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
