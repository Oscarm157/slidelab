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
  const bg = variant === "dark"
    ? "bg-card border-card-border"
    : "bg-card-light border-card-border/30";

  return (
    <div className={`rounded-xl border p-5 ${bg}`}>
      <div className="font-mono text-2xl sm:text-3xl text-gradient mb-1">
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
