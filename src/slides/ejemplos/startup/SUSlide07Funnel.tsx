"use client";

import { Slide } from "@/components/Slide";
import { FunnelChart } from "@/components/FunnelChart";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ───────────────────���─────────────────────────
// Slide 07 — Funnel de Ventas
// Embudo de conversión con FunnelChart
// ─────────────────────────────────────────────

const stages = [
  { label: "Visitantes web", value: 45000, icon: "language" },
  { label: "Signups (free trial)", value: 6800, icon: "person_add" },
  { label: "Activados (onboarding completo)", value: 3400, icon: "check_circle" },
  { label: "Pagos (conversión)", value: 1020, icon: "credit_card" },
  { label: "Enterprise upsell", value: 187, icon: "diamond" },
];

export function SUSlide07Funnel() {
  return (
    <Slide variant="dark" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 70%, color-mix(in srgb, var(--t-primary) 5%, transparent), transparent)",
        }}
      />

      <StaggerReveal className="relative">
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-fg-light/20 block mb-2">07</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
              Funnel de <span className="text-primary">conversión</span>
            </h2>
            <p className="mt-3 text-fg-light/40 text-base max-w-lg">
              15% trial-to-paid. Top quartile en B2B SaaS.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <FunnelChart stages={stages} variant="dark" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
