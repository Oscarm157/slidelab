"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { AgendaList } from "@/components/AgendaList";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide04Syllabus() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="03"
            title="Temario: IA para Negocios"
            subtitle="8 módulos progresivos, de los fundamentos a la implementación en producción."
          />
        </StaggerItem>

        <StaggerItem>
          <AgendaList
            variant="light"
            items={[
              {
                time: "Sem 1-2",
                title: "Fundamentos de IA y Machine Learning",
                duration: "12 horas",
                icon: "neurology",
              },
              {
                time: "Sem 3-4",
                title: "Python para Ciencia de Datos",
                duration: "14 horas",
                icon: "code",
              },
              {
                time: "Sem 5-6",
                title: "Modelos de Clasificación y Regresión",
                duration: "16 horas",
                icon: "scatter_plot",
              },
              {
                time: "Sem 7-8",
                title: "Deep Learning y Redes Neuronales",
                duration: "14 horas",
                icon: "hub",
              },
              {
                time: "Sem 9-10",
                title: "Procesamiento de Lenguaje Natural (NLP)",
                duration: "12 horas",
                icon: "translate",
              },
              {
                time: "Sem 11-12",
                title: "IA Generativa y LLMs en Producción",
                duration: "14 horas",
                icon: "auto_awesome",
              },
              {
                time: "Sem 13-14",
                title: "MLOps y Despliegue de Modelos",
                duration: "10 horas",
                icon: "cloud_upload",
              },
              {
                time: "Sem 15-16",
                title: "Proyecto Final: Solución IA para un Caso Real",
                duration: "16 horas",
                icon: "emoji_events",
              },
            ]}
          />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
