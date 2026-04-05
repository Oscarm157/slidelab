"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { KPIRow } from "@/components/KPIRow";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide06Results() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="05"
            title="Resultados que hablan"
            subtitle="Métricas reales de nuestros graduados en los últimos 12 meses."
          />
        </StaggerItem>

        <StaggerItem>
          <KPIRow
            variant="light"
            items={[
              { label: "Tasa de finalización", value: 94, suffix: "%", icon: "check_circle" },
              { label: "Inserción laboral", value: 87, suffix: "%", icon: "work" },
              { label: "Aumento salarial", value: 3, suffix: "x", icon: "trending_up" },
              { label: "Graduados", value: 50, suffix: "K+", icon: "school" },
            ]}
          />
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <TestimonialCard
              variant="light"
              quote="Después de completar el programa de Data Science, conseguí un puesto como analista senior con un 60% de aumento salarial. Los proyectos del portafolio fueron clave."
              author="Mariana Torres"
              role="Data Analyst, Mercado Libre"
              rating={5}
            />
            <TestimonialCard
              variant="light"
              quote="La metodología práctica de Academia Digital es incomparable. Apliqué lo aprendido en IA directamente a mi startup y levantamos nuestra primera ronda seed."
              author="Diego Herrera"
              role="CTO & Co-founder, NovaTech"
              rating={5}
            />
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
