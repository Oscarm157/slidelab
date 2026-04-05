"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { CTABanner } from "@/components/CTABanner";
import { ContactCard } from "@/components/ContactCard";

// ─────────────────────────────────────────────
// Slide 10 — Contacto
// CTABanner + ContactCard del equipo de ventas
// ─────────────────────────────────────────────

export function CASlide10Contact() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* CTA Banner */}
        <div className="mb-10">
          <CTABanner
            variant="light"
            title="¿Listo para el siguiente nivel?"
            subtitle="Agenda una demo personalizada con nuestro equipo de ventas y descubre por qué más de 500 empresas ya confían en TechPro."
            buttonText="Agendar demo"
            buttonHref="https://techpro.com/demo"
            icon="rocket_launch"
          />
        </div>

        {/* Contact Card */}
        <div className="max-w-md mx-auto">
          <ContactCard
            variant="light"
            name="Equipo de Ventas TechPro"
            title="Enterprise Solutions"
            contacts={[
              {
                icon: "mail",
                label: "Email",
                value: "ventas@techpro.com",
                href: "mailto:ventas@techpro.com",
              },
              {
                icon: "phone",
                label: "Teléfono",
                value: "+1 (800) 555-TECH",
                href: "tel:+18005558324",
              },
              {
                icon: "language",
                label: "Web",
                value: "techpro.com",
                href: "https://techpro.com",
              },
              {
                icon: "location_on",
                label: "Oficina",
                value: "San Francisco, CA · Ciudad de México · Madrid",
              },
            ]}
          />
        </div>
      </StaggerReveal>
    </Slide>
  );
}
