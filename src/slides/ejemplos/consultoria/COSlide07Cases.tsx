"use client";

import { Slide } from "@/components/Slide";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CardGrid } from "@/components/CardGrid";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 07 — Casos Similares + Testimonio
// ─────────────────────────────────────────────

export function COSlide07Cases() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 40% at 50% 70%, color-mix(in srgb, var(--t-primary) 6%, transparent), transparent)",
      }} />
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-fg-light/35 block mb-2">07</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight mb-6">
              Casos <span className="text-gradient">similares</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <CardGrid columns={2} gap="md">
              <CaseStudyCard
                title="Transformación operativa"
                client="Grupo Cementos del Norte"
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                description="Optimización de 5 plantas cementeras. Reducción de costos del 18% y mejora de OEE de 58% a 79% en 14 meses."
                metrics={[
                  { label: "Ahorro", value: "$62M MXN/año" },
                  { label: "OEE", value: "58% → 79%" },
                  { label: "Duración", value: "14 meses" },
                ]}
                tags={["Manufactura", "Lean", "Supply Chain"]}
                variant="dark"
              />
              <CaseStudyCard
                title="Reestructura organizacional"
                client="Laboratorios del Pacífico"
                image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                description="Diseño e implementación de nueva estructura para 2,800 empleados. Rotación reducida del 38% al 12% en 10 meses."
                metrics={[
                  { label: "Rotación", value: "38% → 12%" },
                  { label: "eNPS", value: "+42pts" },
                  { label: "Empleados", value: "2,800" },
                ]}
                tags={["Talento", "Org Design", "Change Mgmt"]}
                variant="dark"
              />
            </CardGrid>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-5">
              <TestimonialCard
                quote="Apex no solo diseñó la estrategia — se quedó hasta que los resultados fueron medibles. El ROI superó nuestras expectativas en 6 meses."
                author="Ing. Roberto Salinas"
                role="CEO, Grupo Cementos del Norte"
                rating={5}
                variant="dark"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
