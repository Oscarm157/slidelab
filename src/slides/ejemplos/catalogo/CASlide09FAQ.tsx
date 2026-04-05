"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { FAQAccordion } from "@/components/FAQAccordion";

// ─────────────────────────────────────────────
// Slide 09 — FAQ
// 6 preguntas frecuentes sobre productos, garantía, envío
// ─────────────────────────────────────────────

export function CASlide09FAQ() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-fg-light">
            Preguntas{" "}
            <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-fg-light/40 text-base mt-3 max-w-lg mx-auto">
            Todo lo que necesitas saber antes de elegir tu ProStation.
          </p>
        </div>

        {/* Acordeón */}
        <div className="max-w-3xl mx-auto">
          <FAQAccordion
            variant="dark"
            items={[
              {
                question: "¿Qué garantía incluyen los productos TechPro?",
                answer: "Todos nuestros productos incluyen garantía estándar de 3 años. El modelo X1 y Ultra cuentan con garantía extendida de 5 años que cubre defectos de fabricación, batería y pantalla. Además, ofrecemos extensiones opcionales de hasta 7 años.",
              },
              {
                question: "¿Realizan envíos internacionales?",
                answer: "Sí, enviamos a más de 40 países. Los envíos dentro de Norteamérica y Europa llegan en 3-5 días hábiles. Para Latinoamérica, el plazo es de 5-10 días hábiles. El envío es gratuito en pedidos superiores a $2,000 USD.",
              },
              {
                question: "¿Puedo personalizar la configuración de mi ProStation?",
                answer: "Absolutamente. Ofrecemos configuraciones personalizadas de RAM (hasta 128 GB), almacenamiento (hasta 8 TB) y teclado (distribución por país). Las personalizaciones añaden 5-7 días hábiles al tiempo de entrega.",
              },
              {
                question: "¿Qué diferencia a ProStation de la competencia?",
                answer: "Tres pilares: rendimiento superior por watt gracias a nuestro procesador M4 Ultra, la pantalla Retina XDR con mayor brillo y precisión de color del mercado, y nuestro soporte técnico 24/7 con tiempo de respuesta garantizado menor a 2 horas.",
              },
              {
                question: "¿Ofrecen financiamiento o leasing para empresas?",
                answer: "Sí, tenemos programas de leasing a 12, 24 y 36 meses con tasas preferenciales para empresas. También ofrecemos descuentos por volumen a partir de 10 unidades. Contacta a nuestro equipo de ventas enterprise para una cotización personalizada.",
              },
              {
                question: "¿Cómo funciona el soporte técnico?",
                answer: "Nuestro soporte está disponible 24/7 por chat, teléfono y email. Los clientes X1 y Ultra tienen acceso a soporte prioritario con ingeniero dedicado. Además, ofrecemos servicio on-site en principales ciudades para reparaciones que lo requieran.",
              },
            ]}
          />
        </div>
      </StaggerReveal>
    </Slide>
  );
}
