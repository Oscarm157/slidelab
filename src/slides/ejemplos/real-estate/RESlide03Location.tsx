"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { MapEmbed } from "@/components/MapEmbed";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide03Location() {
  return (
    <Slide variant="dark">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
              Ubicación privilegiada
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">En el corazón de Zapopan</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-white/60 max-w-2xl mt-2">
              Conectividad total sin sacrificar la tranquilidad.
              Todo lo que necesitas a minutos de distancia.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          className="flex-1 min-h-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MapEmbed
            image="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
            address="Av. Bosque Real 2400, Zapopan, Jalisco"
            proximity={[
              { place: "Centro comercial", time: "10 min" },
              { place: "Aeropuerto", time: "15 min" },
              { place: "Hospital", time: "5 min" },
              { place: "Escuelas", time: "8 min" },
            ]}
          />
        </motion.div>
      </div>
    </Slide>
  );
}
