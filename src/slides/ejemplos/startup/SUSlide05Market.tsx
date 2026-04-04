"use client";

import { Slide } from "@/components/Slide";
import { DataCallout } from "@/components/DataCallout";
import { MiniChart } from "@/components/MiniChart";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 05 — Tamaño del Mercado
// DataCallout hero + MiniChart de segmentos
// ─────────────────────────────────────────────

export function SUSlide05Market() {
  return (
    <Slide variant="dark" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 40%, color-mix(in srgb, var(--t-primary) 8%, transparent), transparent)",
        }}
      />

      <StaggerReveal className="relative">
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-fg-light/20 block mb-2">05</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
              Un mercado de <span className="text-primary">$47B</span>
            </h2>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <DataCallout
              value={47}
              prefix="$"
              suffix="B"
              label="TAM Global"
              context="Product analytics + Business intelligence para equipos de producto. Creciendo 18% YoY."
              icon="trending_up"
              variant="dark"
            />

            <div className="space-y-6">
              <div className="bg-card/60 rounded-2xl p-6">
                <p className="text-fg-light/50 text-sm mb-4">Segmentos del mercado</p>
                <MiniChart
                  type="donut"
                  data={[47, 28, 15, 10]}
                  labels={["Product Analytics", "BI Tools", "Data Platforms", "AI Insights"]}
                  height={160}
                />
              </div>
              <div className="bg-card/60 rounded-2xl p-6">
                <p className="text-fg-light/50 text-sm mb-4">Crecimiento anual del mercado</p>
                <MiniChart
                  type="bar"
                  data={[22, 28, 33, 38, 44, 47]}
                  labels={["2021", "2022", "2023", "2024", "2025", "2026"]}
                  height={100}
                />
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
