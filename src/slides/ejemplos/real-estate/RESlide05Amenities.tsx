"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { ImageGrid } from "@/components/ImageGrid";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide05Amenities() {
  const amenities = [
    {
      src: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=600&q=80",
      alt: "Alberca infinity",
      caption: "Alberca infinity con vista panorámica",
    },
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
      alt: "Gimnasio premium",
      caption: "Gimnasio equipado con tecnología de punta",
    },
    {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
      alt: "Jardines zen",
      caption: "Jardines zen y áreas de meditación",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80",
      alt: "Lobby de diseño",
      caption: "Lobby con diseño de autor",
    },
    {
      src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80",
      alt: "Área de coworking",
      caption: "Business center y coworking",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      alt: "Terraza social",
      caption: "Roof garden con asadores y lounge",
    },
  ];

  return (
    <Slide variant="dark">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
              Experiencia de vida
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">Amenidades de clase mundial</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-white/60 mt-2">
              Más de 3,000m² dedicados a tu bienestar y entretenimiento.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          className="flex-1 min-h-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ImageGrid images={amenities} columns={3} />
        </motion.div>
      </div>
    </Slide>
  );
}
