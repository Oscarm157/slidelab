"use client";

import { Slide } from "@/components/Slide";

// ─────────────────────────────────────────────
// Concepto — Número grande + pilares
// Patrón: s02-concepto de Central Ocho
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
      <div className="stagger-in flex flex-col items-center text-center">
        {/* Label */}
        <div className="mb-4">
          <span className="font-mono text-sm text-fg-dark/20 block mb-2">02</span>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium">
            El Concepto
          </p>
        </div>

        {/* Número grande */}
        <div className="relative mb-2">
          <span className="font-display text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none text-primary/10 select-none animate-number block">
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
        </div>

        <p className="text-muted text-sm sm:text-base mb-8 max-w-md">
          Diseño bioclimático · 2,400 m² · Solo 12 unidades
        </p>

        {/* 3 pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-bg-light/70 border border-card-border/30 rounded-xl p-5 sm:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary text-[22px]">{p.icon}</span>
              </div>
              <h3 className="text-fg-dark font-semibold text-sm sm:text-base mb-1.5">{p.title}</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="w-10 h-[2px] bg-primary mx-auto mb-3" />
        <p className="font-display text-sm sm:text-base text-muted italic max-w-xl">
          &ldquo;Un proyecto donde la arquitectura responde al clima, no lo combate.&rdquo;
        </p>
      </div>
    </Slide>
  );
}
