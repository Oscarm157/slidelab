"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─────────────────────────────────────────────
// Slide 6 — CTA: waitlist + links
// ─────────────────────────────────────────────

export function Slide06Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const emails = JSON.parse(localStorage.getItem("slidelab-waitlist") ?? "[]");
    emails.push({ email, date: new Date().toISOString() });
    localStorage.setItem("slidelab-waitlist", JSON.stringify(emails));
    setSubmitted(true);
  };

  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hide bg-bg-dark text-fg-light relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto px-6 sm:px-10 min-h-full flex flex-col justify-center py-16 relative">
        <div className="text-center">
          <span className="font-mono text-sm text-fg-light/20 block mb-6">06</span>

          {/* Métricas */}
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-gradient font-mono text-3xl sm:text-4xl font-medium">
                <AnimatedCounter target={55} />
              </div>
              <p className="text-muted text-xs mt-1">componentes</p>
            </div>
            <div className="h-8 w-px bg-fg-light/10" />
            <div className="text-center">
              <div className="text-gradient font-mono text-3xl sm:text-4xl font-medium">
                <AnimatedCounter target={90} suffix=" min" />
              </div>
              <p className="text-muted text-xs mt-1">tiempo promedio</p>
            </div>
            <div className="h-8 w-px bg-fg-light/10" />
            <div className="text-center">
              <div className="text-gradient font-mono text-3xl sm:text-4xl font-medium">
                $<AnimatedCounter target={0} />
              </div>
              <p className="text-muted text-xs mt-1">costo de diseño</p>
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Próximamente
          </h2>
          <p className="text-fg-light/40 text-base mb-10 max-w-sm mx-auto">
            Estamos preparando el curso completo. Déjanos tu email y te avisamos.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-500/10 rounded-2xl p-8"
            >
              <span className="material-symbols-outlined text-emerald-400 text-[36px] mb-3 block">check_circle</span>
              <p className="text-emerald-400 font-medium text-lg">Listo. Te avisaremos.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-fg-light/20 text-[20px]">mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full pl-12 pr-5 h-14 rounded-xl bg-card/80 text-fg-light placeholder:text-fg-light/20 border-0 outline-none focus:ring-2 focus:ring-primary/40 text-base"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="h-14 px-8 rounded-xl bg-primary text-white font-medium text-base shadow-[0_0_20px_rgba(139,105,20,0.3)] shrink-0"
              >
                Avisarme
              </motion.button>
            </form>
          )}

          {/* Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a href="/components" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">Componentes</a>
            <a href="/customize" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">Personalizar</a>
            <a href="https://github.com/Oscarm157/slidelab" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
