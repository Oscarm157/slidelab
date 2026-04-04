"use client";

import { motion } from "motion/react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  photo?: string;
  rating?: number;
  variant?: "dark" | "light";
}

export function TestimonialCard({
  quote, author, role, photo, rating, variant = "light",
}: TestimonialCardProps) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl p-6 relative ${styles}`}
    >
      {/* Comilla decorativa animada */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
        className="absolute top-4 right-6 font-display text-6xl text-primary/10 leading-none select-none"
      >
        &ldquo;
      </motion.span>

      <p className="font-display text-base sm:text-lg italic leading-relaxed mb-5 relative">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Rating */}
      {rating && (
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`material-symbols-outlined text-[18px] ${
                i < rating ? "text-primary" : "text-muted/20"
              }`}
              style={{ fontVariationSettings: i < rating ? '"FILL" 1' : '"FILL" 0' }}
            >
              star
            </span>
          ))}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3">
        {photo && (
          <img src={photo} alt={author} className="w-10 h-10 rounded-full object-cover" />
        )}
        <div>
          <p className="font-semibold text-sm">{author}</p>
          {role && <p className="text-muted text-xs">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
}
