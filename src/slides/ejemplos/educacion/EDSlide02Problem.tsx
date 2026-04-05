"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { IconList } from "@/components/IconList";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide02Problem() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="01"
            title="El problema de la educación tradicional"
            subtitle="Los profesionales necesitan habilidades prácticas, no teoría desactualizada."
          />
        </StaggerItem>

        <StaggerItem>
          <IconList
            variant="light"
            items={[
              {
                icon: "sentiment_dissatisfied",
                text: "Contenido aburrido y desactualizado",
                subtext:
                  "El 73% de los profesionales abandona cursos online por falta de contenido práctico y relevante.",
              },
              {
                icon: "payments",
                text: "Precios prohibitivos",
                subtext:
                  "Un MBA promedio cuesta $60,000+. Las certificaciones tradicionales están fuera del alcance de la mayoría.",
              },
              {
                icon: "history",
                text: "Currículos obsoletos",
                subtext:
                  "Las universidades tardan 3-5 años en actualizar programas. La tecnología cambia cada 6 meses.",
              },
              {
                icon: "block",
                text: "Cero práctica real",
                subtext:
                  "El 85% de los cursos son solo teoría. Los empleadores buscan portafolio y experiencia demostrable.",
              },
            ]}
          />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
