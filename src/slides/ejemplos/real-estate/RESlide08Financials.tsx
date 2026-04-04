"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { KPIRow } from "@/components/KPIRow";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide08Financials() {
  const kpis = [
    { label: "Precio desde", value: "$4.2M", suffix: "MXN" },
    { label: "Plusvalía anual", value: "18", suffix: "%" },
    { label: "Cap Rate", value: "6.8", suffix: "%" },
    { label: "ROI a 3 años", value: "24", suffix: "%" },
  ];

  const growthData = [
    { year: "2025", value: 4.2, height: 30 },
    { year: "2026", value: 5.0, height: 42 },
    { year: "2027", value: 5.8, height: 54 },
    { year: "2028", value: 6.7, height: 66 },
    { year: "2029", value: 7.5, height: 78 },
    { year: "2030", value: 8.4, height: 90 },
  ];

  return (
    <Slide variant="light">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
              Análisis financiero
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">Números que respaldan tu inversión</span>
            </h2>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <KPIRow items={[
            { label: "Precio promedio", value: 4.2, prefix: "$", suffix: "M", decimals: 1, icon: "payments" },
            { label: "Plusvalía anual", value: 18, suffix: "%", icon: "trending_up", change: 18 },
            { label: "Cap Rate", value: 6.8, suffix: "%", decimals: 1, icon: "pie_chart" },
            { label: "ROI 3 años", value: 24, suffix: "%", icon: "savings", change: 24 },
          ]} variant="light" />
        </motion.div>

        {/* Value Growth Chart */}
        <motion.div
          className="flex-1 min-h-0 bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Proyección de valor (millones MXN)
          </h3>
          <div className="flex items-end justify-between gap-4 h-[calc(100%-3rem)]">
            {growthData.map((item, i) => (
              <div key={item.year} className="flex flex-col items-center flex-1 h-full justify-end">
                <motion.div
                  className="text-sm font-bold text-[#1B4D3E] mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                >
                  ${item.value}M
                </motion.div>
                <motion.div
                  className="w-full rounded-t-lg bg-gradient-to-t from-[#1B4D3E] to-emerald-500"
                  style={{ minHeight: 8 }}
                  initial={{ height: 0 }}
                  animate={{ height: `${item.height}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + i * 0.1,
                    ease: "easeOut",
                  }}
                />
                <div className="text-xs text-gray-500 mt-2 font-medium">
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
