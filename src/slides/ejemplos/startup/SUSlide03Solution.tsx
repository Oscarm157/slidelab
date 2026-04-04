"use client";

import { Slide } from "@/components/Slide";
import { FeatureShowcase } from "@/components/FeatureShowcase";

// ─────────────────────────────────────────────
// Slide 03 — La Solución: Metrica AI
// Showcase del producto con features clave
// ─────────────────────────────────────────────

const features = [
  {
    icon: "auto_awesome",
    title: "Insights automáticos",
    description: "IA que detecta patrones, anomalías y oportunidades sin que tengas que preguntar.",
  },
  {
    icon: "integration_instructions",
    title: "12+ integraciones",
    description: "Conecta Mixpanel, Amplitude, Jira, Intercom, Stripe y más en minutos.",
  },
  {
    icon: "speed",
    title: "De semanas a minutos",
    description: "Reportes de impacto generados en tiempo real. Pregunta en lenguaje natural.",
  },
  {
    icon: "handshake",
    title: "Un idioma compartido",
    description: "Dashboards que Product, Data y Negocio entienden por igual.",
  },
];

export function SUSlide03Solution() {
  return (
    <Slide variant="dark" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 50%, color-mix(in srgb, var(--t-primary) 6%, transparent), transparent)",
        }}
      />
      <div className="relative">
        <div className="mb-6">
          <span className="font-mono text-sm text-fg-light/20 block mb-2">03</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
        </div>
        <FeatureShowcase
          title="Una plataforma, todas las respuestas"
          subtitle="Metrica AI unifica tus datos de producto y los convierte en decisiones accionables con inteligencia artificial."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
          features={features}
          imagePosition="right"
          variant="dark"
        />
      </div>
    </Slide>
  );
}
