"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  variant?: "dark" | "light";
}

export function FAQAccordion({ items, variant = "dark" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const styles = variant === "dark"
    ? {
        item: "bg-card/80 border-card-border/30",
        question: "text-fg-light",
        answer: "text-fg-light/60",
        icon: "text-primary",
      }
    : {
        item: "bg-white/80 border-gray-100",
        question: "text-fg-dark",
        answer: "text-muted",
        icon: "text-primary",
      };

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className={`rounded-2xl border overflow-hidden ${styles.item}`}
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className={`font-medium text-base pr-4 ${styles.question}`}>
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`material-symbols-outlined text-[22px] shrink-0 ${styles.icon}`}
            >
              add
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="overflow-hidden"
              >
                <p className={`px-5 pb-5 text-sm leading-relaxed ${styles.answer}`}>
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
