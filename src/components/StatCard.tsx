"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  animate?: boolean;
  variant?: "dark" | "light";
}

export function StatCard({
  value,
  label,
  prefix,
  suffix,
  decimals = 0,
  animate = true,
  variant = "dark",
}: StatCardProps) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: variant === "dark"
        ? "0 8px 30px rgba(0,0,0,0.25)"
        : "0 8px 30px rgba(0,0,0,0.08)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl p-5 ${styles}`}
    >
      <div className="font-mono text-3xl sm:text-4xl text-gradient mb-2 font-medium">
        {animate ? (
          <AnimatedCounter target={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        ) : (
          <span>{prefix}{value.toFixed(decimals)}{suffix}</span>
        )}
      </div>
      <p className="text-muted text-sm">{label}</p>
    </motion.div>
  );
}
