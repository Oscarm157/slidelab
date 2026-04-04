"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { FloorPlanViewer } from "@/components/FloorPlanViewer";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide04FloorPlans() {
  return (
    <Slide variant="light">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
              Distribución inteligente
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">Modelo Encino — 220m²</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-gray-600 mt-2">
              Espacios amplios diseñados para la vida moderna. Toca los puntos para explorar cada área.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          className="flex-1 min-h-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FloorPlanViewer
            image="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80"
            alt="Plano de residencia tipo A"
            hotspots={[
              {
                x: 25,
                y: 30,
                label: "Sala principal",
                description: "65m² con doble altura y ventanales de piso a techo",
              },
              {
                x: 60,
                y: 25,
                label: "Cocina",
                description: "Cocina integral con isla central y acabados de mármol",
              },
              {
                x: 75,
                y: 55,
                label: "Recámara principal",
                description: "Suite master con vestidor y baño completo de lujo",
              },
              {
                x: 40,
                y: 70,
                label: "Terraza",
                description: "Terraza cubierta de 30m² con vista al jardín",
              },
              {
                x: 20,
                y: 60,
                label: "Estudio",
                description: "Espacio de trabajo con iluminación natural y aislamiento acústico",
              },
            ]}
          />
        </motion.div>
      </div>
    </Slide>
  );
}
