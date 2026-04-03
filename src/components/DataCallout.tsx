"use client";

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
  value,
  prefix,
  suffix,
  decimals = 0,
  label,
  context,
  icon,
  variant = "light",
}: DataCalloutProps) {
  return (
    <div className="relative text-center py-8">
      {/* Glow de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 45%, color-mix(in srgb, var(--t-primary) 8%, transparent), transparent)",
        }}
      />

      <div className="relative">
        {icon && (
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-primary text-[28px]">{icon}</span>
          </div>
        )}

        <div className="font-mono text-6xl sm:text-7xl md:text-8xl text-gradient font-medium mb-3">
          <AnimatedCounter target={value} prefix={prefix} suffix={suffix} decimals={decimals} duration={2000} />
        </div>

        <p className="font-display text-xl sm:text-2xl text-muted mb-2">{label}</p>

        {context && (
          <p className="text-sm text-muted/60">{context}</p>
        )}
      </div>
    </div>
  );
}
