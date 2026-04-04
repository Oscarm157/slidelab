"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { SplitSlide } from "@/components/SplitSlide";
import { QuoteBlock } from "@/components/QuoteBlock";
import { StatCard } from "@/components/StatCard";
import { CardGrid } from "@/components/CardGrid";

export function RESlide02Opportunity() {
  const leftContent = (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
          Oportunidad de inversión
        </span>
        <h2 className="text-4xl font-bold mt-3 mb-4">
          <span className="text-gradient">El momento es ahora</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Zapopan se ha consolidado como la zona de mayor crecimiento
          inmobiliario en el occidente de México, con una demanda que
          supera la oferta disponible.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <QuoteBlock
          text="Zapopan representa la mejor oportunidad de inversión residencial en México para los próximos 5 años."
          author="Reporte Inmobiliario Nacional 2025"
        />
      </motion.div>
    </div>
  );

  const rightContent = (
    <CardGrid columns={3}>
      <StatCard value={18} suffix="%" label="Plusvalía anual" variant="light" />
      <StatCard value={24} suffix="%" label="ROI proyectado" variant="light" />
      <StatCard value={97} suffix="%" label="Ocupación zona" variant="light" />
    </CardGrid>
  );

  return (
    <Slide variant="light">
      <SplitSlide left={leftContent} right={rightContent} />
    </Slide>
  );
}
