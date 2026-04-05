"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { CardGrid } from "@/components/CardGrid";
import { FeatureCard } from "@/components/FeatureCard";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide03Courses() {
  const courses = [
    {
      icon: "psychology",
      title: "Inteligencia Artificial",
      description:
        "Machine learning, deep learning y modelos generativos aplicados a casos reales de negocio.",
    },
    {
      icon: "analytics",
      title: "Data Science",
      description:
        "Desde SQL hasta modelos predictivos. Analiza datos con Python, pandas y herramientas modernas.",
    },
    {
      icon: "design_services",
      title: "UX Design",
      description:
        "Investigación, prototipado y diseño de interfaces centrado en el usuario con Figma y herramientas IA.",
    },
    {
      icon: "campaign",
      title: "Marketing Digital",
      description:
        "Growth hacking, SEO, paid media y estrategia de contenido con métricas y automatización.",
    },
    {
      icon: "code",
      title: "Desarrollo Web",
      description:
        "Full-stack con React, Next.js, Node.js y bases de datos. Crea productos reales desde el día uno.",
    },
    {
      icon: "inventory_2",
      title: "Product Management",
      description:
        "Roadmaps, métricas, discovery y delivery. Lidera productos digitales con frameworks probados.",
    },
  ];

  return (
    <Slide variant="dark">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="02"
            title="Qué aprenderás"
            subtitle="Programas diseñados por expertos de la industria, actualizados cada trimestre."
          />
        </StaggerItem>

        <StaggerItem>
          <CardGrid columns={3}>
            {courses.map((course) => (
              <FeatureCard
                key={course.title}
                icon={course.icon}
                title={course.title}
                description={course.description}
                variant="dark"
              />
            ))}
          </CardGrid>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
