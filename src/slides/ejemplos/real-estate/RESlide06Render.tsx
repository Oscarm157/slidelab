"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { ImageZoom } from "@/components/ImageZoom";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide06Render() {
  return (
    <Slide variant="light">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
              Diseño excepcional
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">Detalle arquitectónico</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-gray-600 mt-2">
              Cada elemento ha sido cuidadosamente seleccionado para crear una
              experiencia visual y funcional sin precedentes. Explora el render
              con zoom interactivo.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          className="flex-1 min-h-0 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ImageZoom
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80"
            alt="Render arquitectónico Residencial Bosque Verde"
            zoomLevel={2.5}
          />
        </motion.div>
      </div>
    </Slide>
  );
}
