"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide09FAQ() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="08"
            title="Preguntas frecuentes"
            subtitle="Todo lo que necesitas saber antes de empezar."
          />
        </StaggerItem>

        <StaggerItem>
          <FAQAccordion
            variant="dark"
            items={[
              {
                question: "¿Necesito experiencia previa en programación?",
                answer:
                  "No. Tenemos rutas desde cero para cada disciplina. Los cursos están diseñados con niveles progresivos: principiante, intermedio y avanzado. Nuestro onboarding personalizado te ubica en el punto exacto para empezar.",
              },
              {
                question: "¿Cuántas horas a la semana necesito dedicar?",
                answer:
                  "Recomendamos entre 6 y 10 horas semanales para avanzar a buen ritmo. Sin embargo, todo el contenido es on-demand y las lecciones son de 10-15 minutos, así que puedes adaptar tu estudio a tu horario.",
              },
              {
                question: "¿Los certificados tienen validez profesional?",
                answer:
                  "Sí. Nuestros certificados están respaldados por empresas líderes del sector y son verificables mediante blockchain. Además, nuestros programas Pro incluyen certificaciones alineadas con estándares internacionales.",
              },
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer:
                  "Por supuesto. Puedes subir o bajar de plan cuando quieras desde tu dashboard. El cambio se aplica en tu próximo ciclo de facturación. Sin penalizaciones ni compromisos a largo plazo.",
              },
              {
                question: "¿Cómo funciona la mentoría 1-a-1?",
                answer:
                  "Los planes Pro y Empresas incluyen sesiones semanales de 30 minutos con un mentor experto en tu área. Puedes usar las sesiones para resolver dudas, revisar proyectos o recibir orientación profesional.",
              },
              {
                question: "¿Ofrecen descuentos para equipos?",
                answer:
                  "Sí. El plan Empresas incluye descuentos por volumen a partir de 10 usuarios. También ofrecemos programas personalizados para corporativos con contenido a medida. Contacta a nuestro equipo de ventas para una cotización.",
              },
            ]}
          />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
