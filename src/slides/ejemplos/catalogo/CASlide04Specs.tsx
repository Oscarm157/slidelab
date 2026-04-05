"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { SpecSheet } from "@/components/SpecSheet";

// ─────────────────────────────────────────────
// Slide 04 — Especificaciones ProStation X1
// SpecSheet con 8 specs en 2 columnas
// ─────────────────────────────────────────────

export function CASlide04Specs() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            Ficha técnica
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Especificaciones{" "}
            <span className="text-gradient">completas</span>
          </h2>
          <p className="text-muted text-base mt-3 max-w-lg mx-auto">
            ProStation X1 — cada detalle técnico al descubierto.
          </p>
        </div>

        {/* SpecSheet */}
        <SpecSheet
          variant="light"
          columns={2}
          specs={[
            { label: "Procesador", value: "M4 Ultra · 28 núcleos", icon: "memory", highlight: true, progress: 98 },
            { label: "Memoria RAM", value: "64 GB LPDDR5X", icon: "storage", progress: 90 },
            { label: "Almacenamiento", value: "2 TB SSD NVMe Gen 4", icon: "hard_drive", progress: 85 },
            { label: "Pantalla", value: "16\" Retina XDR · 3456×2234", icon: "monitor", highlight: true, progress: 95 },
            { label: "Batería", value: "100 Wh · 22 h autonomía", icon: "battery_full", progress: 92 },
            { label: "Peso", value: "1.83 kg", icon: "scale", progress: 70 },
            { label: "Puertos", value: "3× USB-C, HDMI 2.1, SD, MagSafe", icon: "usb", progress: 80 },
            { label: "Sistema Operativo", value: "TechPro OS 4.0", icon: "computer", progress: 88 },
          ]}
        />
      </StaggerReveal>
    </Slide>
  );
}
