"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 03 — La Solución: Metrica AI
// Browser mockup con dashboard + typewriter demo
// ─────────────────────────────────────────────

const features = [
  { icon: "auto_awesome", title: "Insights automáticos", desc: "IA que detecta patrones y oportunidades sin preguntar.", hero: true },
  { icon: "integration_instructions", title: "12+ integraciones", desc: "Conecta Mixpanel, Jira, Intercom y más en minutos." },
  { icon: "speed", title: "De semanas a minutos", desc: "Reportes de impacto en lenguaje natural, al instante." },
  { icon: "handshake", title: "Un idioma compartido", desc: "Dashboards que Product, Data y Negocio entienden." },
];

// Typewriter: pregunta → respuesta
const question = "¿Cuál fue el impacto del último release?";
const answer = "El release v2.4 incrementó retención D7 en +12.3% y redujo tickets de soporte un 34%. El feature más usado fue Smart Alerts con 2,847 activaciones en 48hrs.";

function useTypewriter(text: string, speed: number, startDelay: number) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// Datos ficticios del dashboard
const miniMetrics = [
  { label: "DAU", value: "8,421", change: "+12%", up: true },
  { label: "Retención D7", value: "34.2%", change: "+5.1%", up: true },
  { label: "Tickets", value: "127", change: "-34%", up: false },
];

export function SUSlide03Solution() {
  const { displayed: qText, done: qDone } = useTypewriter(question, 40, 1200);
  const { displayed: aText } = useTypewriter(answer, 20, 1200 + question.length * 40 + 600);

  return (
    <Slide variant="dark" className="relative">
      {/* Mesh gradient de fondo */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 75% 30%, color-mix(in srgb, var(--t-primary) 10%, transparent), transparent), radial-gradient(ellipse 40% 40% at 20% 75%, color-mix(in srgb, var(--t-primary-light) 6%, transparent), transparent)",
      }} />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-center h-full">
        {/* Columna izquierda — features */}
        <StaggerReveal>
          <StaggerItem>
            <div className="mb-6">
              <span className="font-mono text-sm text-fg-light/35 block mb-2">03</span>
              <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight">
                Una plataforma,
                <br />
                <span className="text-gradient">todas las respuestas</span>
              </h2>
            </div>
          </StaggerItem>

          {features.map((f, i) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ x: 4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                className={`flex gap-4 p-4 rounded-xl transition-colors ${
                  f.hero ? "bg-primary/10 glow-accent" : "hover:bg-card/40"
                }`}
              >
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 + i * 0.1 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    f.hero ? "bg-primary/20" : "bg-primary/10"
                  }`}
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">{f.icon}</span>
                </motion.div>
                <div>
                  <p className="text-fg-light text-sm font-semibold">{f.title}</p>
                  <p className="text-fg-light/40 text-xs mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Columna derecha — Browser mockup con dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Glow detrás del browser */}
          <div className="absolute -inset-4 bg-primary/8 rounded-3xl blur-2xl" />

          {/* Browser chrome */}
          <div className="relative bg-[#111113] rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1e] border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-white/5 rounded-lg px-3 py-1 text-[10px] text-white/30 font-mono text-center">
                  app.metrica.ai/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 sm:p-5 space-y-4">
              {/* Top metrics row */}
              <div className="grid grid-cols-3 gap-3">
                {miniMetrics.map((m) => (
                  <div key={m.label} className="bg-white/[0.03] rounded-xl p-3">
                    <p className="text-[11px] text-white/30 uppercase tracking-wider">{m.label}</p>
                    <p className="text-white/80 font-mono text-lg font-semibold mt-1">{m.value}</p>
                    <p className={`text-[10px] font-mono mt-0.5 ${m.up ? "text-emerald-400" : "text-rose-400"}`}>
                      {m.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini chart area (bars ficticios) */}
              <div className="bg-white/[0.03] rounded-xl p-4">
                <p className="text-[11px] text-white/30 uppercase tracking-wider mb-3">Retención por cohorte</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[65, 48, 52, 71, 58, 83, 77, 90, 85, 94, 88, 96].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 rounded-sm origin-bottom"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, var(--t-primary), color-mix(in srgb, var(--t-primary-light) 60%, transparent))`,
                        opacity: 0.4 + (h / 100) * 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* AI query demo — typewriter */}
              <div className="bg-white/[0.03] rounded-xl p-4 border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[12px]">auto_awesome</span>
                  </div>
                  <p className="text-[11px] text-primary/60 uppercase tracking-wider font-semibold">Metrica AI</p>
                </div>

                {/* Pregunta */}
                <div className="bg-white/[0.04] rounded-lg px-3 py-2 mb-2">
                  <p className="text-white/60 text-xs font-mono">
                    {qText}
                    {!qDone && <span className="inline-block w-px h-3 bg-primary ml-0.5 animate-pulse" />}
                  </p>
                </div>

                {/* Respuesta */}
                {qDone && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg px-3 py-2 border-l-2 border-primary/30"
                  >
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      {aText}
                      {aText.length < answer.length && (
                        <span className="inline-block w-px h-3 bg-primary/60 ml-0.5 animate-pulse" />
                      )}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
