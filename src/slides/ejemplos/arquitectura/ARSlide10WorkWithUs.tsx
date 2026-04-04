import { Slide } from "@/components/Slide";
import { StepByStep } from "@/components/StepByStep";
import { PDFEmbed } from "@/components/PDFEmbed";

export function ARSlide10WorkWithUs() {
  return (
    <Slide variant="light">
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Trabaja con nosotros
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Comienza tu proyecto
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Cuatro pasos para convertir tu idea en un espacio extraordinario.
          </p>
        </div>

        <StepByStep
          variant="light"
          steps={[
            {
              icon: "chat",
              title: "Consulta inicial",
              description: "Agenda una llamada sin costo. Escuchamos tu visión, analizamos el terreno o inmueble y definimos objetivos.",
            },
            {
              icon: "description",
              title: "Propuesta y contrato",
              description: "Recibe una propuesta detallada con alcance, cronograma y honorarios. Sin sorpresas.",
            },
            {
              icon: "draw",
              title: "Diseño y desarrollo",
              description: "Trabajamos en conjunto: bocetos, renders, planos ejecutivos. Revisiones ilimitadas hasta tu aprobación.",
            },
            {
              icon: "handshake",
              title: "Construcción y entrega",
              description: "Supervisamos la obra y te entregamos un espacio listo para habitar. Garantía de 2 años.",
            },
          ]}
        />

        <div className="max-w-3xl mx-auto">
          <PDFEmbed
            src="https://estudioforma.mx/brochure-2025.pdf"
            title="Brochure Estudio Forma 2025"
            height={300}
            variant="light"
          />
        </div>
      </div>
    </Slide>
  );
}
