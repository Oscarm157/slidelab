"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { FeatureShowcase } from "@/components/FeatureShowcase";

// ─────────────────────────────────────────────
// Slide 03 — Producto Estrella: ProStation X1
// FeatureShowcase con imagen y 4 features
// ─────────────────────────────────────────────

export function CASlide03Product() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            Producto estrella
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            <span className="text-gradient">ProStation</span>{" "}
            <span className="text-fg-light">X1</span>
          </h2>
          <p className="text-fg-light/40 text-base mt-2 max-w-lg">
            La workstation definitiva para profesionales creativos y desarrolladores que exigen rendimiento sin compromisos.
          </p>
        </div>

        {/* Showcase */}
        <FeatureShowcase
          title="Rendimiento sin límites"
          subtitle="Cada componente ha sido seleccionado para ofrecer la máxima potencia en el formato más elegante."
          image="https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80"
          imagePosition="right"
          variant="dark"
          features={[
            {
              icon: "memory",
              title: "Procesador M4 Ultra",
              description: "24 núcleos de rendimiento, 4 de eficiencia. Hasta 5.2 GHz de frecuencia turbo.",
            },
            {
              icon: "storage",
              title: "64 GB RAM LPDDR5X",
              description: "Memoria unificada de alto ancho de banda para workflows de edición 8K y compilación masiva.",
            },
            {
              icon: "monitor",
              title: "Pantalla 16\" Retina XDR",
              description: "Mini-LED, 3456×2234, 1600 nits de brillo HDR. P3 wide color gamut.",
            },
            {
              icon: "battery_charging_full",
              title: "22 horas de batería",
              description: "Celda de 100 Wh con carga rápida MagSafe. De 0 a 50% en solo 28 minutos.",
            },
          ]}
        />
      </StaggerReveal>
    </Slide>
  );
}
