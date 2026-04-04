"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

interface DataCalloutProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  context?: string;
  icon?: string;
  variant?: "dark" | "light";
}

export function DataCallout({
  value, prefix, suffix, decimals = 0, label, context, icon, variant = "light",
}: DataCalloutProps) {
  return (
    <div className="relative text-center py-12 overflow-hidden">
      {/* Círculos concéntricos decorativos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.04, 0.06, 0.04] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[400px] h-[400px] rounded-full border border-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-[550px] h-[550px] rounded-full border border-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-[250px] h-[250px] rounded-full bg-primary/5 blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative">
        {icon && (
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
          >
            <span className="material-symbols-outlined text-primary text-[28px]">{icon}</span>
          </motion.div>
        )}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="font-mono text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient font-medium mb-4"
        >
          <AnimatedCounter target={value} prefix={prefix} suffix={suffix} decimals={decimals} duration={2000} />
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px w-8 bg-primary/30" />
          <p className="font-display text-xl sm:text-2xl opacity-70">{label}</p>
          <div className="h-px w-8 bg-primary/30" />
        </div>

        {context && (
          <p className="text-sm text-muted/50 font-mono">{context}</p>
        )}
      </div>
    </div>
  );
}
