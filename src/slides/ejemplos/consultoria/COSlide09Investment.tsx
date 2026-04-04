"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { PricingTable } from "@/components/PricingTable";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 09 — Inversión & Timeline
// ─────────────────────────────────────────────

const tiers = [
  {
    name: "Diagnóstico",
    price: "$480K",
    period: " MXN",
    description: "6 semanas. Análisis profundo + roadmap priorizado.",
    features: ["Entrevistas 40+ stakeholders", "Benchmark competitivo", "Business case por iniciativa", "Presentación a board"],
    cta: "Fase inicial",
  },
  {
    name: "Transformación",
    price: "$2.8M",
    period: " MXN",
    description: "12 meses. Implementación completa con equipo dedicado.",
    features: ["Equipo Apex on-site (4-6 consultores)", "Sprints de 2 semanas", "War room dedicado", "Dashboard de resultados", "Quick wins en primeras 8 semanas", "Transferencia de conocimiento"],
    highlighted: true,
    cta: "Recomendado",
  },
  {
    name: "Acompañamiento",
    price: "$85K",
    period: " MXN/mes",
    description: "6 meses post-proyecto. Sostenibilidad de resultados.",
    features: ["Revisión mensual de KPIs", "Coaching a líderes clave", "Ajustes de implementación", "Reporte trimestral a board"],
    cta: "Fase final",
  },
];

const timeline = [
  { date: "Ene 2026", title: "Kick-off diagnóstico", description: "Inicio de inmersión y análisis.", icon: "flag", status: "upcoming" as const },
  { date: "Mar 2026", title: "Presentación roadmap", description: "Entrega de diagnóstico y plan al board.", icon: "description", status: "upcoming" as const },
  { date: "Abr 2026", title: "Inicio transformación", description: "Equipo on-site. Primeros quick wins.", icon: "rocket_launch", status: "upcoming" as const },
  { date: "Mar 2027", title: "Cierre proyecto", description: "Entrega final. Inicio acompañamiento.", icon: "check_circle", status: "upcoming" as const },
];

export function COSlide09Investment() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 45% 45% at 50% 30%, color-mix(in srgb, var(--t-primary) 10%, transparent), transparent)",
      }} />
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-fg-light/20 block mb-2">09</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight mb-6">
              Inversión <span className="text-gradient">& timeline</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <PricingTable tiers={tiers} variant="dark" />
          </StaggerItem>
          <StaggerItem>
            <div className="mt-6">
              <p className="text-fg-light/25 text-[10px] uppercase tracking-widest mb-3">Timeline del proyecto</p>
              <MilestoneTimeline milestones={timeline} variant="dark" />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
