"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { FeatureCard } from "@/components/FeatureCard";

// ─────────────────────────────────────────────
// Slide 2 — El problema: PowerPoint vs Web
// ─────────────────────────────────────────────

export function Slide02Concept() {
  return (
    <Slide variant="light" className="bg-card-light">
      <StaggerReveal className="flex flex-col items-center text-center">
        <StaggerItem className="mb-4">
          <span className="font-mono text-sm text-fg-dark/20 block mb-2">02</span>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium">
            El problema
          </p>
        </StaggerItem>

        <StaggerItem className="relative mb-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-fg-dark max-w-2xl">
            Tus ideas merecen más que un <span className="text-muted line-through">PowerPoint</span>
          </h2>
        </StaggerItem>

        <StaggerItem className="mb-10">
          <p className="text-muted text-base sm:text-lg max-w-lg">
            Slides estáticos, templates genéricos, diseño que no te representa. Pasas días armando algo que se ve igual que el de todos.
          </p>
        </StaggerItem>

        <StaggerItem className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <FeatureCard
              icon="timer_off"
              title="3 días de trabajo"
              description="Para una presentación que se ve genérica y no refleja tu nivel."
              variant="light"
            />
            <FeatureCard
              icon="block"
              title="Sin interactividad"
              description="Nada de gráficas animadas, zoom en imágenes o navegación fluida."
              variant="light"
            />
            <FeatureCard
              icon="attach_money"
              title="O pagas una agencia"
              description="$2,000-$5,000 USD y 2 semanas para un deck profesional."
              variant="light"
            />
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
