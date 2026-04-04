"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { BeforeAfter } from "@/components/BeforeAfter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide07BeforeAfter() {
  return (
    <Slide variant="dark">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
              Transformación
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">Del terreno al hogar ideal</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-white/60 mt-2">
              Desliza para ver la transformación completa del proyecto.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          className="flex-1 min-h-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BeforeAfter
            before={{
              label: "Terreno 2024",
              image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
              stats: [
                { label: "Superficie", value: "12,000m²" },
                { label: "Uso de suelo", value: "Baldío" },
                { label: "Valor", value: "$18M MXN" },
              ],
            }}
            after={{
              label: "Proyecto 2027",
              image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
              stats: [
                { label: "Residencias", value: "48 unidades" },
                { label: "Amenidades", value: "3,000m²" },
                { label: "Valor total", value: "$210M MXN" },
              ],
            }}
          />
        </motion.div>
      </div>
    </Slide>
  );
}
