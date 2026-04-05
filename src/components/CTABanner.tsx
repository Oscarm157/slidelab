"use client";

import { motion } from "motion/react";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref?: string;
  icon?: string;
  variant?: "dark" | "light";
}

export function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref = "#",
  icon,
  variant = "dark",
}: CTABannerProps) {
  const styles = variant === "dark"
    ? {
        bg: "bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10",
        title: "text-fg-light",
        subtitle: "text-fg-light/50",
        button: "bg-primary text-white shadow-[0_0_20px_rgba(var(--t-primary-rgb,139,105,20),0.3)] hover:shadow-[0_0_30px_rgba(var(--t-primary-rgb,139,105,20),0.45)]",
      }
    : {
        bg: "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10",
        title: "text-fg-dark",
        subtitle: "text-muted",
        button: "bg-primary text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)]",
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`rounded-2xl p-8 sm:p-10 text-center ${styles.bg}`}
    >
      {icon && (
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <span className="material-symbols-outlined text-primary text-[28px]">
            {icon}
          </span>
        </div>
      )}

      <h3 className={`font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${styles.title}`}>
        {title}
      </h3>

      {subtitle && (
        <p className={`text-sm sm:text-base max-w-md mx-auto mb-6 ${styles.subtitle}`}>
          {subtitle}
        </p>
      )}

      <motion.a
        href={buttonHref}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-base transition-shadow ${styles.button}`}
      >
        {buttonText}
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </motion.a>
    </motion.div>
  );
}
