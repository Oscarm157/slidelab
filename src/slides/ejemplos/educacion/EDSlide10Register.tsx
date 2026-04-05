"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { StatCard } from "@/components/StatCard";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide10Register() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="09"
            title="Empieza hoy, gratis"
            subtitle="Únete a miles de profesionales que ya están transformando su carrera."
          />
        </StaggerItem>

        <StaggerItem>
          <CTABanner
            variant="light"
            title="Tu próximo nivel profesional empieza aquí"
            subtitle="7 días de prueba gratuita. Sin tarjeta de crédito. Cancela cuando quieras."
            buttonText="Crear cuenta gratis"
            buttonHref="#registro"
            icon="rocket_launch"
          />
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            <StatCard
              variant="light"
              value={50}
              suffix="K+"
              label="Alumnos activos"
            />
            <StatCard
              variant="light"
              value={4.8}
              suffix="/5"
              label="Rating promedio"
              decimals={1}
            />
            <StatCard
              variant="light"
              value={120}
              suffix="+"
              label="Cursos disponibles"
            />
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
