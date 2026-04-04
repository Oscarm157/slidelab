"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

interface KPIItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  change?: number;
  icon?: string;
}

interface KPIRowProps {
  items: KPIItem[];
  variant?: "dark" | "light";
}

export function KPIRow({ items, variant = "light" }: KPIRowProps) {
  const bg = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <div className={`rounded-2xl ${bg} flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-primary/10`}>
      {items.map((item, idx) => {
        const isPositive = (item.change ?? 0) >= 0;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.08 }}
            className="flex-1 px-5 sm:px-6 py-5 text-center"
          >
            {item.icon && (
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <span className="material-symbols-outlined text-primary text-[18px]">{item.icon}</span>
              </div>
            )}
            <div className="font-mono text-2xl sm:text-3xl text-gradient font-medium mb-1">
              <AnimatedCounter
                target={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                decimals={item.decimals}
              />
            </div>
            <p className="text-muted text-xs sm:text-sm mb-1">{item.label}</p>
            {item.change !== undefined && (
              <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full ${
                isPositive
                  ? "bg-emerald-500/10 text-emerald-600"
                  : "bg-red-500/10 text-red-500"
              }`}>
                <span className="material-symbols-outlined text-[14px]">
                  {isPositive ? "trending_up" : "trending_down"}
                </span>
                {isPositive ? "+" : ""}{item.change}%
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
