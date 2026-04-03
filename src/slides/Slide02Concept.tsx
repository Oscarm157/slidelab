"use client";

import { Slide } from "@/components/Slide";
import { FeatureCard } from "@/components/FeatureCard";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Concepto — Número grande + pilares
// ─────────────────────────────────────────────

const pillars = [
  {
    icon: "water_drop",
    title: "Captación pluvial",
    description: "Sistema de recolección que cubre el 40% del consumo de agua de áreas comunes.",
  },
  {
    icon: "air",
    title: "Ventilación cruzada",
    description: "Orientación norte-sur que reduce la necesidad de climatización artificial.",
  },
  {
    icon: "park",
    title: "Jardín central",
    description: "360 m² de área verde compartida con especies nativas de bajo mantenimiento.",
  },
];

export function Slide02Concept() {
  return (
    <Slide variant="light" className="bg-card-light">
      <StaggerReveal className="flex flex-col items-center text-center">
        {/* Label */}
        <StaggerItem className="mb-4">
          <span className="font-mono text-sm text-fg-dark/20 block mb-2">02</span>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium">
            El Concepto
          </p>
        </StaggerItem>

        {/* Número grande */}
        <StaggerItem className="relative mb-2">
          <span className="font-display text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none text-primary/10 select-none block">
            12
          </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-fg-dark">
              Residencial
            </span>
            <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
              Pluvial
            </span>
          </div>
        </StaggerItem>

        <StaggerItem className="mb-8">
          <p className="text-muted text-sm sm:text-base max-w-md">
            Diseño bioclimático · 2,400 m² · Solo 12 unidades
          </p>
        </StaggerItem>

        {/* 3 pilares */}
        <StaggerItem className="w-full mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {pillars.map((p) => (
              <FeatureCard key={p.title} {...p} variant="light" />
            ))}
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="w-10 h-[2px] bg-primary mx-auto mb-3" />
          <p className="font-display text-sm sm:text-base text-muted italic max-w-xl">
            &ldquo;Un proyecto donde la arquitectura responde al clima, no lo combate.&rdquo;
          </p>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
