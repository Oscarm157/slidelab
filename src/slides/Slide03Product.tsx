"use client";

import { Slide } from "@/components/Slide";
import { QuoteBlock } from "@/components/QuoteBlock";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Producto — Specs + imagen en 2 columnas
// Patrón: s05-producto de Central Ocho
// ─────────────────────────────────────────────

const statBars = [
  { label: "Superficie habitable", value: "130 m²" },
  { label: "Garage techado", value: "57 m²" },
  { label: "Roof privado", value: "50 m²" },
  { label: "Niveles", value: "3 + roof" },
];

const distribution = [
  { level: "Planta baja", description: "Área social abierta y garage integrado. Espacios conectados, luminosidad natural." },
  { level: "Niveles superiores", description: "Recámaras amplias con buena iluminación. Privacidad y confort." },
  { level: "Roof", description: "Terraza privada con vista. Un espacio de convivencia que distingue al producto." },
];

export function Slide03Product() {
  return (
    <Slide variant="dark">
      <StaggerReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda — specs */}
        <StaggerItem className="flex flex-col justify-center">
          <div className="mb-5">
            <span className="font-mono text-sm text-fg-light/20 block mb-2">03</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-medium mb-1">
              El Producto
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-fg-light">
              Townhouse de 3 niveles + roof privado
            </h2>
          </div>

          {/* Stat bars */}
          <div className="space-y-2.5 mb-5">
            {statBars.map((bar, i) => (
              <div
                key={bar.label}
                className="flex items-center justify-between bg-card rounded-lg px-5 py-3"
                style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s both` }}
              >
                <span className="text-muted text-sm">{bar.label}</span>
                <span className="font-mono text-primary-light text-base font-medium">{bar.value}</span>
              </div>
            ))}
          </div>

          {/* Distribución */}
          <div className="mb-5">
            <h4 className="font-display text-base text-fg-light mb-2">Distribución inteligente</h4>
            <div className="space-y-1">
              {distribution.map((d) => (
                <p key={d.level} className="text-sm text-muted">
                  <span className="font-semibold text-fg-light">{d.level}:</span>{" "}
                  {d.description}
                </p>
              ))}
            </div>
          </div>

          <QuoteBlock
            text="El producto que supera el estándar de mercado en su rango de precio."
            variant="dark"
          />
        </StaggerItem>

        {/* Columna derecha — imagen */}
        <StaggerItem className="rounded-2xl overflow-hidden bg-card shadow-[0_8px_30px_rgba(0,0,0,0.25)] w-4/5 mx-auto lg:mx-0 mt-6 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
            alt="Render arquitectónico"
            className="w-full h-auto block"
          />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
