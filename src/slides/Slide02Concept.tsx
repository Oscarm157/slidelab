import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { QuoteBlock } from "@/components/QuoteBlock";

// ─────────────────────────────────────────────
// Arquitectura — Proyecto con renders y pilares
// Muestra cómo presentar un concepto con cards
// ─────────────────────────────────────────────

export function Slide02Concept() {
  return (
    <Slide variant="light">
      <div className="slide-enter">
        <SectionHeader
          number="01"
          title="Residencial Pluvial"
          subtitle="12 unidades con diseño bioclimático en 2,400 m² de terreno. Captación pluvial integrada, ventilación cruzada y materiales de bajo impacto."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 stagger-in">
          <FeatureCard
            icon="water_drop"
            title="Captación pluvial"
            description="Sistema de recolección que cubre el 40% del consumo de agua de áreas comunes."
            variant="light"
          />
          <FeatureCard
            icon="air"
            title="Ventilación cruzada"
            description="Orientación norte-sur que reduce la necesidad de climatización artificial."
            variant="light"
          />
          <FeatureCard
            icon="park"
            title="Jardín central"
            description="360 m² de área verde compartida con especies nativas de bajo mantenimiento."
            variant="light"
          />
        </div>

        <QuoteBlock
          text="Un proyecto donde la arquitectura responde al clima, no lo combate."
          author="Estudio de arquitectura"
        />
      </div>
    </Slide>
  );
}
