"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessFlow } from "@/components/ProcessFlow";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide05Method() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="04"
            title="Nuestra metodología"
            subtitle="Un ciclo de aprendizaje diseñado para que construyas habilidades reales."
          />
        </StaggerItem>

        <StaggerItem>
          <ProcessFlow
            variant="dark"
            steps={[
              {
                title: "Aprende",
                description:
                  "Lecciones cortas en video con expertos de la industria. Máximo 15 minutos por sesión.",
                icon: "play_circle",
                status: "completed",
              },
              {
                title: "Practica",
                description:
                  "Ejercicios interactivos con feedback inmediato en nuestro editor en la nube.",
                icon: "edit_note",
                status: "completed",
              },
              {
                title: "Construye",
                description:
                  "Proyectos reales para tu portafolio, revisados por mentores profesionales.",
                icon: "construction",
                status: "active",
              },
              {
                title: "Certifícate",
                description:
                  "Obtén un certificado verificable respaldado por empresas líderes del sector.",
                icon: "workspace_premium",
                status: "upcoming",
              },
            ]}
          />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
