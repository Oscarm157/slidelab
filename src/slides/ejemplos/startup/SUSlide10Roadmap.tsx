"use client";

import { Slide } from "@/components/Slide";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 10 — Roadmap
// Timeline vertical con milestones Q1-Q4
// ─────────────────────────────────────────────

const milestones = [
  {
    date: "Q1 2026",
    title: "Serie A close",
    description: "Cerrar ronda de $5M. Expandir equipo core a 30 personas.",
    icon: "flag",
    status: "completed" as const,
  },
  {
    date: "Q2 2026",
    title: "IA v2 + 3 integraciones enterprise",
    description: "Salesforce, HubSpot y SAP. Modelo de IA fine-tuned por vertical.",
    icon: "smart_toy",
    status: "current" as const,
  },
  {
    date: "Q3 2026",
    title: "Expansión US",
    description: "Oficina en Austin. Equipo de ventas dedicado para mercado norteamericano.",
    icon: "flight_takeoff",
    status: "upcoming" as const,
  },
  {
    date: "Q4 2026",
    title: "Marketplace de integraciones",
    description: "API pública + marketplace para que partners construyan conectores.",
    icon: "store",
    status: "upcoming" as const,
  },
  {
    date: "Q1 2027",
    title: "Serie B prep",
    description: "Target: $2M ARR, 500+ clientes. Preparar siguiente ronda.",
    icon: "rocket_launch",
    status: "upcoming" as const,
  },
];

export function SUSlide10Roadmap() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-muted/40 block mb-2">10</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
              Roadmap
            </h2>
            <p className="mt-3 text-muted text-base max-w-lg">
              Plan de ejecución para los próximos 12 meses.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <MilestoneTimeline milestones={milestones} variant="light" />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
