import { Slide } from "@/components/Slide";
import { TimelineBlock } from "@/components/TimelineBlock";

export function ARSlide03Process() {
  return (
    <Slide variant="dark">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Proceso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Del concepto a la realidad
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Cuatro fases que garantizan un resultado excepcional en cada proyecto.
          </p>
        </div>

        <TimelineBlock
          variant="dark"
          phases={[
            {
              icon: "search",
              title: "Investigación",
              description: "Análisis del sitio, contexto urbano y necesidades del cliente. Definimos alcances y presupuesto.",
              label: "Semana 1–2",
            },
            {
              icon: "draw",
              title: "Diseño conceptual",
              description: "Bocetos, maquetas y renders. Exploramos volumetría, materiales y relación con el entorno.",
              label: "Semana 3–6",
            },
            {
              icon: "architecture",
              title: "Proyecto ejecutivo",
              description: "Planos constructivos, ingenierías y especificaciones técnicas. Todo listo para construir.",
              label: "Semana 7–12",
            },
            {
              icon: "construction",
              title: "Supervisión de obra",
              description: "Acompañamiento en sitio para asegurar calidad, tiempos y apego al diseño original.",
              label: "Semana 13+",
            },
          ]}
        />
      </div>
    </Slide>
  );
}
