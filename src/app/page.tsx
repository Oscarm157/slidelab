"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Landing page — Premium Frontend
// Aesthetic: Editorial luxury × dark tech
// ─────────────────────────────────────────────

// Spring-based scroll reveal
const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, stiffness: 200, damping: 24 },
};

function BrowserMockup({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${className}`}>
      <div className="bg-[#1c1c1c] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-[#0a0a0a] rounded-md px-3 py-1 text-[10px] text-fg-light/30 font-mono truncate">
          {title}
        </div>
      </div>
      <div className="aspect-[16/9] bg-bg-dark">
        <iframe src={src} className="w-full h-full border-0" title={title} loading="lazy" />
      </div>
    </div>
  );
}

const profiles = [
  { icon: "architecture", title: "Arquitecto", desc: "Proyectos con renders, planos y specs técnicas." },
  { icon: "rocket_launch", title: "Emprendedor", desc: "Pitch decks con métricas y proyecciones." },
  { icon: "business_center", title: "Consultor", desc: "Propuestas con timelines y KPIs." },
  { icon: "storefront", title: "Vendedor", desc: "Catálogos con pricing y comparativas." },
  { icon: "science", title: "Investigador", desc: "Resultados con datos y metodología." },
  { icon: "school", title: "Educador", desc: "Cursos con pasos y contenido interactivo." },
];

const showcases = [
  { url: "https://central-ocho.vercel.app", label: "Central Ocho", desc: "Pitch de inversión inmobiliaria — 12 slides" },
  { url: "https://atisa-ia.vercel.app/ai-challenge", label: "ATISA AI Challenge", desc: "Campaña interna de adopción IA — 11 slides" },
];

const componentPreviews = [
  { name: "PricingTable", icon: "payments" },
  { name: "KPIRow", icon: "analytics" },
  { name: "TeamGrid", icon: "group" },
  { name: "ComparisonTable", icon: "compare" },
  { name: "FunnelChart", icon: "filter_alt" },
  { name: "TimelineBlock", icon: "timeline" },
  { name: "ImageZoom", icon: "zoom_in" },
  { name: "DataCallout", icon: "trending_up" },
  { name: "ProcessFlow", icon: "account_tree" },
  { name: "TestimonialCard", icon: "format_quote" },
  { name: "MapEmbed", icon: "map" },
  { name: "CountdownTimer", icon: "timer" },
];

export default function HomePage() {
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
    <div className="w-full min-h-screen overflow-y-auto bg-bg-dark text-fg-light">

      {/* ═══════ NAV ═══════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-4 flex items-center justify-between bg-bg-dark/70 backdrop-blur-xl">
        <span className="font-display text-xl tracking-tight">Slidelab</span>
        <div className="flex items-center gap-5">
          <a href="/demo" className="text-fg-light/40 text-sm hover:text-fg-light transition-colors hidden sm:block">Demo</a>
          <a href="/components" className="text-fg-light/40 text-sm hover:text-fg-light transition-colors hidden sm:block">Componentes</a>
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium shadow-[0_0_20px_rgba(139,105,20,0.3)]"
          >
            Lista de espera
          </motion.a>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="relative px-6 sm:px-10 md:px-14 pt-36 sm:pt-44 pb-20 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <StaggerReveal className="text-center max-w-4xl mx-auto mb-16">
            <StaggerItem>
              <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-8">
                Presentaciones web interactivas
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-6">
                Presentaciones que no parecen{" "}
                <span className="relative inline-block">
                  <span className="text-fg-light/30">PowerPoint</span>
                  <span className="absolute left-0 right-0 top-1/2 h-[3px] bg-primary rounded-full" />
                </span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-fg-light/40 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Pitch decks interactivos con gráficas, animaciones y diseño profesional.
                En 90 minutos, no en 3 días.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.a
                  href="#waitlist"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl bg-primary text-white font-medium text-base shadow-[0_0_30px_rgba(139,105,20,0.25)] hover:shadow-[0_0_40px_rgba(139,105,20,0.4)] transition-shadow"
                >
                  Únete a la lista de espera
                </motion.a>
                <motion.a
                  href="/demo"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl bg-fg-light/5 text-fg-light/60 font-medium text-base hover:bg-fg-light/10 transition-colors"
                >
                  Ver demo →
                </motion.a>
              </div>
            </StaggerItem>
          </StaggerReveal>

          {/* Browser mockup hero */}
          <motion.div {...reveal}>
            <BrowserMockup src="/demo" title="tu-presentacion.vercel.app" />
          </motion.div>
        </div>
      </section>

      {/* ═══════ ANTES vs DESPUÉS ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-24 bg-bg-light text-fg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-4">El contraste</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              3 días en PowerPoint →{" "}
              <span className="text-gradient">90 minutos</span>
            </h2>
          </motion.div>

          {/* Asymmetric mockups with rotation and overlap */}
          <motion.div {...reveal} className="relative flex items-center justify-center gap-0 md:-gap-8">
            {/* Before — PowerPoint mockup (smaller, tilted, muted) */}
            <div className="relative z-0 w-[45%] hidden md:block">
              <div className="rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 -rotate-2 opacity-80">
                <div className="bg-[#4472C4] rounded-lg h-8 mb-4" />
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="h-24 bg-[#E2EFDA] rounded" />
                  <div className="h-24 bg-[#FCE4D6] rounded" />
                  <div className="h-24 bg-[#D6DCE4] rounded" />
                </div>
                <div className="w-3/4 h-2.5 bg-[#ddd] rounded mx-auto mb-2" />
                <div className="w-1/2 h-2.5 bg-[#eee] rounded mx-auto" />
              </div>
              <p className="text-center mt-4 text-muted text-sm font-medium">3 días</p>
            </div>

            {/* Gold arrow */}
            <div className="hidden md:flex items-center justify-center w-16 z-10 -mx-4">
              <span className="material-symbols-outlined text-primary text-[32px]">arrow_forward</span>
            </div>

            {/* After — Slidelab mockup (larger, slight rotation, vibrant) */}
            <div className="relative z-10 w-full md:w-[55%]">
              <div className="rotate-1">
                <BrowserMockup src="/demo" title="tu-presentacion.vercel.app" />
              </div>
              <p className="text-center mt-4 text-primary text-sm font-semibold">90 minutos</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CÓMO FUNCIONA ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-4">Así de simple</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Tres pasos. Cero complicaciones.
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-px bg-primary/15" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01", icon: "palette", title: "Personaliza",
                  desc: "Edita un archivo con tus colores, fonts y título. Todo cambia automáticamente.",
                  code: 'primary: "#8B6914"',
                },
                {
                  step: "02", icon: "dashboard_customize", title: "Construye",
                  desc: "Usa los 44 componentes para armar cada slide. Dile a la IA qué quieres.",
                  code: "<PricingTable tiers={...} />",
                },
                {
                  step: "03", icon: "cloud_upload", title: "Comparte",
                  desc: "Un comando y tu presentación está en línea. Comparte el link.",
                  code: "$ vercel → listo",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 24, delay: i * 0.08 }}
                  className="relative"
                >
                  {/* Step number node */}
                  <div className="w-[52px] h-[52px] rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_20px_rgba(139,105,20,0.25)]">
                    <span className="font-mono text-sm font-semibold">{item.step}</span>
                  </div>

                  <div className="bg-card/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.15)] relative overflow-hidden">
                    {/* Watermark number */}
                    <span className="absolute top-3 right-4 font-mono text-5xl text-primary/5 leading-none select-none">
                      {item.step}
                    </span>

                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-primary text-[22px]">{item.icon}</span>
                      </div>
                      <h3 className="font-display text-xl mb-2">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                      <div className="bg-bg-dark rounded-xl px-4 py-3">
                        <code className="font-mono text-xs text-primary/80">{item.code}</code>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SHOWCASE ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-24 bg-bg-light text-fg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-4">Proyectos reales</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
              Construidos con esta tecnología
            </h2>
            <p className="text-muted text-base max-w-md mx-auto">
              Navega dentro de cada presentación directamente desde aquí.
            </p>
          </motion.div>

          <div className="space-y-12">
            {showcases.map((s, i) => (
              <motion.div
                key={s.url}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 180, damping: 24, delay: i * 0.1 }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="font-display text-xl">{s.label}</h3>
                  <span className="text-muted text-sm">{s.desc}</span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
                  <div className="bg-white px-4 py-2 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ddd]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ddd]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ddd]" />
                    </div>
                    <div className="flex-1 bg-[#f5f5f5] rounded-md px-3 py-1 text-[10px] text-fg-dark/30 font-mono truncate">
                      {s.url.replace("https://", "")}
                    </div>
                  </div>
                  <div className="aspect-[16/9]">
                    <iframe src={s.url} className="w-full h-full border-0" title={s.label} loading="lazy" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMPONENTES ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-4">Librería</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
              44 componentes listos
            </h2>
            <p className="text-fg-light/40 text-base max-w-md mx-auto">
              Gráficas, timelines, pricing, team grids, mapas, comparativas. Elige y combina.
            </p>
          </motion.div>

          <motion.div {...reveal} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-10">
            {componentPreviews.map((c, i) => (
              <motion.div
                key={c.name}
                whileHover={{ y: -3, backgroundColor: "rgba(139,105,20,0.08)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-card/40 rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">{c.icon}</span>
                </div>
                <span className="text-sm font-medium truncate">{c.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <motion.a
              href="/components"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-fg-light/5 text-fg-light/70 font-medium hover:bg-fg-light/10 transition-colors"
            >
              Ver catálogo completo
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ═══════ PARA QUIÉN ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-24 bg-bg-light text-fg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-4">Para ti</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
              No necesitas saber programar
            </h2>
            <p className="text-muted text-base max-w-md mx-auto">
              Solo necesitas saber qué quieres comunicar. La IA se encarga del resto.
            </p>
          </motion.div>

          <motion.div {...reveal} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {profiles.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-white/70 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-[26px]">{p.icon}</span>
                </div>
                <h3 className="font-semibold text-base mb-1">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ WAITLIST ═══════ */}
      <section id="waitlist" className="relative px-6 sm:px-10 md:px-14 py-28 overflow-hidden">
        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

        <div className="max-w-xl mx-auto text-center relative">
          <motion.div {...reveal}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <span className="material-symbols-outlined text-primary text-[32px]">mail</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Próximamente
            </h2>
            <p className="text-fg-light/40 text-base sm:text-lg mb-10 max-w-sm mx-auto leading-relaxed">
              Estamos preparando el curso. Déjanos tu email y te avisamos.
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-emerald-500/10 rounded-2xl p-8"
              >
                <span className="material-symbols-outlined text-emerald-400 text-[36px] mb-3 block">check_circle</span>
                <p className="text-emerald-400 font-medium text-lg">Listo. Te avisaremos.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-fg-light/20 text-[20px]">
                    mail
                  </span>
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
                  className="h-14 px-8 rounded-xl bg-primary text-white font-medium text-base shadow-[0_0_20px_rgba(139,105,20,0.3)] hover:shadow-[0_0_30px_rgba(139,105,20,0.4)] transition-shadow shrink-0"
                >
                  Avisarme
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="px-6 sm:px-10 md:px-14 py-10 border-t border-fg-light/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-display text-xl tracking-tight">Slidelab</span>
            <a href="/demo" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">Demo</a>
            <a href="/components" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">Componentes</a>
            <a href="https://github.com/Oscarm157/slidelab" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">GitHub</a>
          </div>
          <p className="text-fg-light/20 text-xs">Hecho con Slidelab + Claude Code</p>
        </div>
      </footer>
    </div>
  );
}
