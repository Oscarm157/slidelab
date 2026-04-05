"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { ValueCard } from "@/components/ValueCard";

// ─────────────────────────────────────────────
// Slide 02 — Propuesta de Valor
// 3 ValueCards con íconos Material Symbols
// ─────────────────────────────────────────────

export function CASlide02Value() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            Nuestra promesa
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            ¿Por qué{" "}
            <span className="text-gradient">TechPro</span>?
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3 max-w-xl mx-auto">
            Cada producto está diseñado con obsesión por el detalle, rendimiento excepcional y soporte sin igual.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            icon="lightbulb"
            title="Innovación"
            description="Investigación continua para integrar las últimas tecnologías en cada producto. Siempre un paso adelante."
            number="01"
            variant="light"
          />
          <ValueCard
            icon="diamond"
            title="Calidad Premium"
            description="Materiales de primera línea, ensamblaje de precisión y pruebas exhaustivas. Construido para durar."
            number="02"
            variant="light"
          />
          <ValueCard
            icon="support_agent"
            title="Soporte 24/7"
            description="Equipo dedicado disponible las 24 horas. Resolvemos cualquier incidencia en menos de 2 horas."
            number="03"
            variant="light"
          />
        </div>
      </StaggerReveal>
    </Slide>
  );
}
