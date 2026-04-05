"use client";

import { motion } from "motion/react";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

interface ContactCardProps {
  name: string;
  title?: string;
  photo?: string;
  contacts: ContactInfo[];
  variant?: "dark" | "light";
}

export function ContactCard({
  name,
  title,
  photo,
  contacts,
  variant = "dark",
}: ContactCardProps) {
  const styles = variant === "dark"
    ? {
        card: "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]",
        name: "text-fg-light",
        title: "text-fg-light/40",
        label: "text-fg-light/30",
        value: "text-fg-light/80",
        divider: "border-fg-light/5",
        row: "hover:bg-fg-light/5",
      }
    : {
        card: "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
        name: "text-fg-dark",
        title: "text-muted",
        label: "text-muted/60",
        value: "text-fg-dark/80",
        divider: "border-gray-100",
        row: "hover:bg-gray-50",
      };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: variant === "dark"
        ? "0 8px 30px rgba(0,0,0,0.25)"
        : "0 8px 30px rgba(0,0,0,0.08)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl overflow-hidden ${styles.card}`}
    >
      {/* Header con nombre y foto */}
      <div className="p-6 pb-4 flex items-center gap-4">
        {photo && (
          <img
            src={photo}
            alt={name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
          />
        )}
        <div>
          <h3 className={`font-semibold text-lg ${styles.name}`}>{name}</h3>
          {title && <p className={`text-sm ${styles.title}`}>{title}</p>}
        </div>
      </div>

      {/* Líneas de contacto */}
      <div className={`border-t ${styles.divider}`}>
        {contacts.map((c, i) => {
          const content = (
            <div
              className={`flex items-center gap-4 px-6 py-3.5 transition-colors ${styles.row}`}
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  {c.icon}
                </span>
              </div>
              <div className="min-w-0">
                <p className={`text-[10px] uppercase tracking-widest font-medium ${styles.label}`}>
                  {c.label}
                </p>
                <p className={`text-sm font-medium truncate ${styles.value}`}>
                  {c.value}
                </p>
              </div>
            </div>
          );

          return c.href ? (
            <a key={i} href={c.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
    </motion.div>
  );
}
