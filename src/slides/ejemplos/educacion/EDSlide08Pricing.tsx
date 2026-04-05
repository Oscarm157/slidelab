"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingTable } from "@/components/PricingTable";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide08Pricing() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="07"
            title="Planes para cada necesidad"
            subtitle="Sin contratos largos. Cancela cuando quieras. Garantía de 30 días."
          />
        </StaggerItem>

        <StaggerItem>
          <PricingTable
            variant="light"
            tiers={[
              {
                name: "Individual",
                price: "$29",
                period: "/mes",
                description: "Perfecto para empezar a aprender a tu ritmo.",
                features: [
                  "Acceso a todos los cursos",
                  "Proyectos prácticos",
                  "Certificados de finalización",
                  "Comunidad de estudiantes",
                  "Soporte por email",
                ],
                cta: "Empezar gratis",
              },
              {
                name: "Pro",
                price: "$49",
                period: "/mes",
                description: "Para profesionales que quieren acelerar su carrera.",
                highlighted: true,
                features: [
                  "Todo de Individual",
                  "Mentoría 1-a-1 semanal",
                  "Revisión de proyectos por expertos",
                  "Acceso anticipado a cursos nuevos",
                  "Preparación para entrevistas",
                  "Certificados verificables",
                ],
                cta: "Comenzar prueba Pro",
              },
              {
                name: "Empresas",
                price: "$99",
                period: "/usuario/mes",
                description: "Capacita a tu equipo con programas a medida.",
                features: [
                  "Todo de Pro",
                  "Dashboard de administración",
                  "Rutas de aprendizaje personalizadas",
                  "Reportes de progreso del equipo",
                  "Integración con HRIS",
                  "Account manager dedicado",
                  "Facturación corporativa",
                ],
                cta: "Contactar ventas",
              },
            ]}
          />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
