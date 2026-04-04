"use client";

import { Slide } from "@/components/Slide";
import { PricingTable } from "@/components/PricingTable";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 09 — Pricing
// 3 tiers con PricingTable
// ─────────────────────────────────────────────

const tiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/mes",
    description: "Para equipos de producto en startups early-stage.",
    features: [
      "Hasta 5 usuarios",
      "3 integraciones",
      "Dashboards ilimitados",
      "IA básica (50 queries/día)",
      "Soporte por email",
    ],
    cta: "Empezar gratis",
  },
  {
    name: "Growth",
    price: "$299",
    period: "/mes",
    description: "Para equipos que necesitan insights avanzados y escala.",
    features: [
      "Hasta 25 usuarios",
      "12+ integraciones",
      "IA avanzada (ilimitada)",
      "Impact analysis automático",
      "Alertas inteligentes",
      "Soporte prioritario",
    ],
    highlighted: true,
    cta: "Probar 14 días gratis",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para organizaciones con requerimientos específicos.",
    features: [
      "Usuarios ilimitados",
      "Integraciones custom",
      "IA dedicada (GPU propio)",
      "SSO + RBAC",
      "SLA 99.99%",
      "Customer success manager",
      "On-premise disponible",
    ],
    cta: "Contactar ventas",
  },
];

export function SUSlide09Pricing() {
  return (
    <Slide variant="dark" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 50% 30%, color-mix(in srgb, var(--t-primary) 5%, transparent), transparent)",
        }}
      />

      <StaggerReveal className="relative">
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-fg-light/20 block mb-2">09</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
              Pricing
            </h2>
            <p className="mt-3 text-fg-light/40 text-base max-w-lg">
              Simple y transparente. Escala con tu equipo.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <PricingTable tiers={tiers} variant="dark" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
