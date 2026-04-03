"use client";

import { motion } from "motion/react";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
}

interface PricingTableProps {
  tiers: PricingTier[];
  variant?: "dark" | "light";
}

export function PricingTable({ tiers, variant = "light" }: PricingTableProps) {
  return (
    <div className="flex flex-col sm:flex-row items-end justify-center gap-5">
      {tiers.map((tier) => {
        const isHighlighted = tier.highlighted;
        const cardStyles = variant === "dark"
          ? isHighlighted
            ? "bg-primary/10 shadow-[0_8px_30px_rgba(139,105,20,0.15)]"
            : "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
          : isHighlighted
            ? "bg-primary/5 shadow-[0_8px_30px_rgba(139,105,20,0.1)]"
            : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

        return (
          <motion.div
            key={tier.name}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`rounded-2xl p-6 sm:p-8 flex-1 max-w-xs w-full ${cardStyles} ${
              isHighlighted ? "sm:-mt-4 relative" : ""
            }`}
          >
            {/* Accent bar en plan destacado */}
            {isHighlighted && (
              <div className="absolute top-0 left-6 right-6 h-1 bg-primary rounded-b-full" />
            )}

            <p className={`font-display text-lg mb-1 ${isHighlighted ? "text-primary" : ""}`}>
              {tier.name}
            </p>
            {tier.description && (
              <p className="text-muted text-xs mb-4">{tier.description}</p>
            )}

            {/* Precio */}
            <div className="mb-6">
              <span className={`font-mono text-4xl sm:text-5xl font-medium ${isHighlighted ? "text-gradient" : ""}`}>
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-muted text-sm ml-1">/{tier.period}</span>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">check</span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTA */}
            {tier.cta && (
              <button
                className={`w-full py-3 rounded-xl text-sm font-medium transition-colors ${
                  isHighlighted
                    ? "bg-primary text-white hover:bg-primary-light"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {tier.cta}
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
