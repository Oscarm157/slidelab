"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { PricingTable } from "@/components/PricingTable";

// ─────────────────────────────────────────────
// Slide 08 — Planes / Pricing
// 3 tiers: Lite, X1 (destacado), Ultra
// ─────────────────────────────────────────────

export function CASlide08Pricing() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            Precios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Elige tu{" "}
            <span className="text-gradient">ProStation</span>
          </h2>
          <p className="text-muted text-base mt-3 max-w-lg mx-auto">
            Tres configuraciones diseñadas para distintos niveles de exigencia profesional.
          </p>
        </div>

        {/* Pricing table */}
        <PricingTable
          variant="light"
          tiers={[
            {
              name: "ProStation Lite",
              price: "$1,299",
              period: "USD",
              description: "Para profesionales que necesitan portabilidad sin sacrificar rendimiento.",
              features: [
                "Procesador M4 · 12 núcleos",
                "16 GB RAM LPDDR5X",
                "512 GB SSD NVMe",
                "Pantalla 14\" Retina",
                "Batería 18 h",
                "Garantía 3 años",
              ],
              cta: "Configurar",
            },
            {
              name: "ProStation X1",
              price: "$2,499",
              period: "USD",
              description: "Nuestra workstation insignia. Potencia máxima para creativos y desarrolladores.",
              highlighted: true,
              features: [
                "Procesador M4 Ultra · 28 núcleos",
                "64 GB RAM LPDDR5X",
                "2 TB SSD NVMe Gen 4",
                "Pantalla 16\" Retina XDR",
                "Batería 22 h",
                "Garantía 5 años",
                "Soporte prioritario 24/7",
              ],
              cta: "Comprar ahora",
            },
            {
              name: "ProStation Ultra",
              price: "$4,999",
              period: "USD",
              description: "Para estudios y equipos que requieren lo imposible. Sin límites.",
              features: [
                "Procesador M4 Max · 40 núcleos",
                "128 GB RAM LPDDR5X",
                "8 TB SSD NVMe Gen 5",
                "Pantalla 18\" Retina XDR",
                "Batería 24 h",
                "Garantía 5 años + on-site",
                "Soporte dedicado + SLA",
                "Setup personalizado",
              ],
              cta: "Contactar ventas",
            },
          ]}
        />
      </StaggerReveal>
    </Slide>
  );
}
