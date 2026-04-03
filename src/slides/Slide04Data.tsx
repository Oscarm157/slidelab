import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { TimelineBlock } from "@/components/TimelineBlock";
import { QuoteBlock } from "@/components/QuoteBlock";

// ─────────────────────────────────────────────
// Plan de ejecución — Timeline de 4 fases
// Muestra cómo presentar un proceso o calendario
// ─────────────────────────────────────────────

const phases = [
  {
    icon: "search",
    title: "Diagnóstico",
    description: "Levantamiento de información, entrevistas con el equipo y análisis de procesos actuales.",
    label: "Semanas 1–2",
  },
  {
    icon: "architecture",
    title: "Diseño",
    description: "Definición de la solución técnica, prototipos y validación con stakeholders.",
    label: "Semanas 3–5",
  },
  {
    icon: "code",
    title: "Implementación",
    description: "Desarrollo por sprints, pruebas de integración y ajustes con el equipo operativo.",
    label: "Semanas 6–10",
  },
  {
    icon: "rocket_launch",
    title: "Lanzamiento",
    description: "Deploy en producción, capacitación al equipo y monitoreo de las primeras semanas.",
    label: "Semanas 11–12",
  },
];

export function Slide04Data() {
  return (
    <Slide variant="light">
      <div className="slide-enter">
        <SectionHeader
          number="03"
          title="Plan de ejecución"
          subtitle="12 semanas divididas en 4 fases. Cada entregable se valida antes de pasar a la siguiente etapa."
        />

        <div className="mb-8 stagger-in">
          <TimelineBlock phases={phases} variant="light" />
        </div>

        <QuoteBlock
          text="Prefiero un plan realista de 12 semanas que uno optimista de 6 que se convierte en 16."
        />
      </div>
    </Slide>
  );
}
