"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

interface MetricDeltaProps {
  label: string;
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  variant?: "dark" | "light";
}

export function MetricDelta({
  label, from, to, prefix, suffix, decimals = 0, variant = "light",
}: MetricDeltaProps) {
  const change = ((to - from) / from) * 100;
  const isPositive = change >= 0;

  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl p-5 ${styles}`}
    >
      <p className="text-muted text-xs mb-3">{label}</p>

      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-lg text-muted/60">
          {prefix}{from.toFixed(decimals)}{suffix}
        </span>
        <span className="material-symbols-outlined text-primary text-[20px]">arrow_forward</span>
        <span className="font-mono text-2xl text-gradient font-medium">
          <AnimatedCounter target={to} prefix={prefix} suffix={suffix} decimals={decimals} />
        </span>
      </div>

      <span className={`inline-flex items-center gap-1 text-xs font-mono font-medium px-2.5 py-1 rounded-full ${
        isPositive ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-500"
      }`}>
        <span className="material-symbols-outlined text-[14px]">
          {isPositive ? "trending_up" : "trending_down"}
        </span>
        {isPositive ? "+" : ""}{change.toFixed(0)}%
      </span>
    </motion.div>
  );
}
