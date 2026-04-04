"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { ComparisonTable } from "@/components/ComparisonTable";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide09Comparison() {
  return (
    <Slide variant="dark">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
              Análisis competitivo
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">¿Por qué Bosque Verde?</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-white/60 mt-2">
              Comparativa con desarrollos similares en la zona.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          className="flex-1 min-h-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ComparisonTable
            columns={[
              { label: "Feature" },
              { label: "Bosque Verde", highlighted: true },
              { label: "Solana" },
              { label: "Arboleda" },
              { label: "Valle Poniente" },
            ]}
            rows={[
              { feature: "Precio / m²", values: ["$19,090", "$21,500", "$23,000", "$20,800"] },
              { feature: "Amenidades", values: ["12", "8", "10", "6"] },
              { feature: "Ubicación prime", values: [true, false, true, false] },
              { feature: "Arquitecto reconocido", values: [true, false, true, false] },
              { feature: "Smart Home", values: [true, false, true, false] },
              { feature: "Financiamiento directo", values: [true, false, true, false] },
              { feature: "Plusvalía estimada", values: ["18%", "12%", "14%", "10%"] },
            ]}
          />
        </motion.div>
      </div>
    </Slide>
  );
}
