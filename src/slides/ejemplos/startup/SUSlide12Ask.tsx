"use client";

import { Slide } from "@/components/Slide";
import { DataCallout } from "@/components/DataCallout";
import { FeatureCard } from "@/components/FeatureCard";
import { CardGrid } from "@/components/CardGrid";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 12 — The Ask
// $5M Serie A + uso de fondos
// ─────────────────────────────────────────────

export function SUSlide12Ask() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-6">
            <span className="font-mono text-sm text-muted/40 block mb-2">12</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
          </div>
        </StaggerItem>

        <StaggerItem>
          <DataCallout
            value={5}
            prefix="$"
            suffix="M"
            label="Serie A"
            context="Levantando $5M para acelerar producto, expandir a US y triplicar el equipo en 12 meses."
            icon="diamond"
            variant="light"
          />
        </StaggerItem>

        <StaggerItem>
          <div className="mt-8">
            <p className="text-muted text-xs uppercase tracking-widest mb-4">Uso de fondos</p>
            <CardGrid columns={3} gap="md">
              <FeatureCard
                icon="code"
                title="Producto — 40%"
                description="Expandir motor de IA y lanzar 3 integraciones enterprise (Salesforce, HubSpot, SAP)."
                variant="light"
              />
              <FeatureCard
                icon="rocket_launch"
                title="Go-to-Market — 35%"
                description="Escalar equipo de ventas y marketing en LATAM y US. Partnerships estratégicos."
                variant="light"
              />
              <FeatureCard
                icon="groups"
                title="Equipo — 25%"
                description="Contratar 15 ingenieros senior y 5 data scientists. Oficina en Austin."
                variant="light"
              />
            </CardGrid>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-8 text-center">
            <p className="text-muted text-sm">
              invest@metrica.ai · metrica.ai/deck
            </p>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
