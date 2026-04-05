"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamGrid } from "@/components/TeamGrid";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function EDSlide07Instructors() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        <StaggerItem>
          <SectionHeader
            number="06"
            title="Aprende de los mejores"
            subtitle="Instructores con experiencia real en las empresas más innovadoras del mundo."
          />
        </StaggerItem>

        <StaggerItem>
          <TeamGrid
            variant="dark"
            columns={4}
            members={[
              {
                name: "Valentina Reyes",
                role: "Ex-Google ML Engineer",
                photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Valentina&backgroundColor=b6e3f4",
                bio: "10 años en machine learning. Lideró el equipo de recomendaciones de YouTube.",
              },
              {
                name: "Andrés Medina",
                role: "Ex-Meta Senior Designer",
                photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Andres&backgroundColor=c0aede",
                bio: "Director de UX en Instagram. Especialista en design systems a escala.",
              },
              {
                name: "Camila Fuentes",
                role: "Ex-Spotify Data Lead",
                photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Camila&backgroundColor=d1d4f9",
                bio: "Construyó el pipeline de datos de Spotify Wrapped. PhD en Estadística.",
              },
              {
                name: "Rodrigo Nakamura",
                role: "Ex-Stripe Staff Engineer",
                photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Rodrigo&backgroundColor=ffd5dc",
                bio: "Full-stack engineer. Arquitecto del sistema de pagos de Stripe LATAM.",
              },
            ]}
          />
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
