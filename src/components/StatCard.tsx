"use client";

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
    ? "bg-card border-card-border/50 shadow-lg shadow-black/20"
    : "bg-white border-[#ddd] shadow-md shadow-black/5";

  return (
    <div className={`rounded-2xl border p-5 ${styles}`}>
      <div className="font-mono text-3xl sm:text-4xl text-gradient mb-2 font-medium">
        {animate ? (
          <AnimatedCounter target={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        ) : (
          <span>{prefix}{value.toFixed(decimals)}{suffix}</span>
        )}
      </div>
      <p className="text-muted text-sm">{label}</p>
    </div>
  );
}
