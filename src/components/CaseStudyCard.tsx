"use client";

import { motion } from "motion/react";

interface CaseStudyCardProps {
  title: string;
  client?: string;
  image: string;
  description: string;
  metrics?: { label: string; value: string }[];
  tags?: string[];
  variant?: "dark" | "light";
}

export function CaseStudyCard({
  title, client, image, description, metrics, tags, variant = "light",
}: CaseStudyCardProps) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl overflow-hidden ${styles}`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 className="font-display text-lg mb-0.5">{title}</h3>
        {client && <p className="text-primary text-sm mb-2">{client}</p>}
        <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>

        {metrics && (
          <div className="flex items-center divide-x divide-primary/10 mb-3">
            {metrics.map((m) => (
              <div key={m.label} className="flex-1 text-center px-3 first:pl-0 last:pr-0">
                <p className="font-mono text-sm text-primary font-medium">{m.value}</p>
                <p className="text-muted text-[10px]">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {tags && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
