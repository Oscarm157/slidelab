"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Landing page de Slidelab
// ─────────────────────────────────────────────

const fadeInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

function BrowserMockup({ src, title }: { src: string; title: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-fg-light/10">
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-[#0a0a0a] rounded-lg px-3 py-1 text-[11px] text-fg-light/40 font-mono truncate">
          {title}
        </div>
      </div>
      {/* Iframe */}
      <div className="aspect-[16/9] bg-bg-dark">
        <iframe src={src} className="w-full h-full border-0" title={title} loading="lazy" />
      </div>
    </div>
  );
}

const profiles = [
  { icon: "architecture", title: "Arquitecto", desc: "Presenta proyectos con renders, planos interactivos y specs." },
  { icon: "rocket_launch", title: "Emprendedor", desc: "Pitch decks con métricas, gráficas y proyecciones financieras." },
  { icon: "business_center", title: "Consultor", desc: "Propuestas con timelines, matrices estratégicas y KPIs." },
  { icon: "storefront", title: "Vendedor", desc: "Catálogos con comparativas, pricing y testimonios." },
  { icon: "science", title: "Investigador", desc: "Resultados con gráficas, datos y metodología visual." },
  { icon: "school", title: "Educador", desc: "Cursos con pasos, agendas y contenido interactivo." },
];

const showcases = [
  { url: "https://central-ocho.vercel.app", label: "Central Ocho — Pitch de inversión inmobiliaria" },
  { url: "https://atisa-ia.vercel.app/ai-challenge", label: "ATISA — Campaña interna de adopción IA" },
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
    // Guardar en localStorage por ahora
    const emails = JSON.parse(localStorage.getItem("slidelab-waitlist") ?? "[]");
    emails.push({ email, date: new Date().toISOString() });
    localStorage.setItem("slidelab-waitlist", JSON.stringify(emails));
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-bg-dark text-fg-light">

      {/* ═══════ NAV ═══════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-4 flex items-center justify-between bg-bg-dark/80 backdrop-blur-md">
        <span className="font-display text-lg tracking-tight">Slidelab</span>
        <div className="flex items-center gap-4">
          <a href="/demo" className="text-muted text-sm hover:text-fg-light transition-colors hidden sm:block">Demo</a>
          <a href="/components" className="text-muted text-sm hover:text-fg-light transition-colors hidden sm:block">Componentes</a>
          <a href="#waitlist" className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
            Lista de espera
          </a>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 pt-32 sm:pt-40 pb-16">
        <div className="max-w-6xl mx-auto">
          <StaggerReveal className="text-center max-w-3xl mx-auto mb-12">
            <StaggerItem>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary/40" />
                <span className="font-mono text-[11px] tracking-[0.35em] text-primary uppercase">Presentaciones web</span>
                <div className="h-px w-12 bg-primary/40" />
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6">
                Presentaciones que no parecen{" "}
                <span className="text-primary">PowerPoint</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-fg-light/50 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
                Crea pitch decks interactivos con gráficas, animaciones y diseño profesional.
                En 90 minutos, no en 3 días.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center justify-center gap-4">
                <a href="#waitlist" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors">
                  Únete a la lista de espera
                </a>
                <a href="/demo" className="px-6 py-4 rounded-full border border-fg-light/10 text-fg-light/70 font-medium hover:bg-fg-light/5 transition-colors">
                  Ver demo
                </a>
              </div>
            </StaggerItem>
          </StaggerReveal>

          {/* Demo embebida */}
          <motion.div {...fadeInView}>
            <BrowserMockup src="/demo" title="slidelab.vercel.app/demo" />
          </motion.div>
        </div>
      </section>

      {/* ═══════ ANTES vs DESPUÉS ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-20 bg-bg-light text-fg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInView} className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">El contraste</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              3 días en PowerPoint → <span className="text-primary">90 minutos</span>
            </h2>
          </motion.div>

          <motion.div {...fadeInView} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Antes */}
            <div className="rounded-2xl bg-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-medium mb-4">
                <span className="material-symbols-outlined text-[14px]">close</span>
                Antes
              </span>
              <div className="rounded-xl bg-[#f0f0f0] p-8 text-center space-y-3">
                <div className="w-full h-6 bg-[#4472C4] rounded" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 bg-[#E2EFDA] rounded" />
                  <div className="h-20 bg-[#FCE4D6] rounded" />
                  <div className="h-20 bg-[#D6DCE4] rounded" />
                </div>
                <div className="w-2/3 h-3 bg-[#ccc] rounded mx-auto" />
                <div className="w-1/2 h-3 bg-[#ddd] rounded mx-auto" />
              </div>
              <p className="text-muted text-sm mt-4 text-center">Templates genéricos. Mismo diseño que todos.</p>
            </div>

            {/* Después */}
            <div className="rounded-2xl bg-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-4">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                Con Slidelab
              </span>
              <div className="rounded-xl overflow-hidden aspect-[16/10]">
                <iframe src="/demo" className="w-full h-full border-0 pointer-events-none" title="Slidelab preview" />
              </div>
              <p className="text-muted text-sm mt-4 text-center">Interactivo. Animado. Con tu marca. Compartible por link.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CÓMO FUNCIONA ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInView} className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">Así de simple</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Tres pasos. Sin complicaciones.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: "palette",
                title: "Personaliza",
                desc: "Edita un archivo con tus colores, fonts y título. Todo cambia automáticamente.",
                code: 'primary: "#8B6914"',
              },
              {
                step: "02",
                icon: "dashboard_customize",
                title: "Construye",
                desc: "Usa los 44 componentes para armar cada slide. Dile a Claude Code qué quieres.",
                code: "<PricingTable tiers={...} />",
              },
              {
                step: "03",
                icon: "cloud_upload",
                title: "Comparte",
                desc: "Un comando y tu presentación está en línea. Comparte el link por WhatsApp, email o donde sea.",
                code: "$ vercel → tu-deck.vercel.app",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                    <span className="font-mono text-sm font-medium">{item.step}</span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="bg-bg-dark rounded-lg px-4 py-2.5">
                  <code className="font-mono text-xs text-primary">{item.code}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SHOWCASE ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-20 bg-bg-light text-fg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInView} className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">Proyectos reales</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
              Construidos con esta tecnología
            </h2>
            <p className="text-muted text-base max-w-lg mx-auto">
              Estas presentaciones se crearon con el mismo stack que obtienes con Slidelab. Navega dentro de cada una.
            </p>
          </motion.div>

          <div className="space-y-8">
            {showcases.map((s, i) => (
              <motion.div
                key={s.url}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p className="text-muted text-sm mb-3 font-medium">{s.label}</p>
                <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-fg-dark/5">
                  <div className="bg-white px-4 py-2 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ccc]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ccc]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ccc]" />
                    </div>
                    <div className="flex-1 bg-[#f5f5f5] rounded-lg px-3 py-1 text-[11px] text-fg-dark/40 font-mono truncate">
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
      <section className="px-6 sm:px-10 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInView} className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">Librería</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
              44 componentes listos para usar
            </h2>
            <p className="text-muted text-base max-w-lg mx-auto">
              Gráficas, timelines, pricing tables, team grids, mapas, comparativas y más. Solo elige y combina.
            </p>
          </motion.div>

          <motion.div {...fadeInView} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {componentPreviews.map((c) => (
              <div
                key={c.name}
                className="bg-card/60 rounded-xl p-4 flex items-center gap-3 hover:bg-card/80 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">{c.icon}</span>
                </div>
                <span className="text-sm font-medium truncate">{c.name}</span>
              </div>
            ))}
          </motion.div>

          <div className="text-center">
            <a href="/components" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-colors">
              Ver catálogo completo
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ PARA QUIÉN ═══════ */}
      <section className="px-6 sm:px-10 md:px-14 py-20 bg-bg-light text-fg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInView} className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">Para ti</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
              No necesitas saber programar
            </h2>
            <p className="text-muted text-base max-w-lg mx-auto">
              Solo necesitas saber qué quieres comunicar. La IA se encarga del resto.
            </p>
          </motion.div>

          <motion.div {...fadeInView} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="bg-white/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-[26px]">{p.icon}</span>
                </div>
                <h3 className="font-semibold text-base mb-1">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ WAITLIST ═══════ */}
      <section id="waitlist" className="px-6 sm:px-10 md:px-14 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeInView}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-[32px]">mail</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Próximamente
            </h2>
            <p className="text-fg-light/50 text-base sm:text-lg mb-10 max-w-md mx-auto">
              Estamos preparando el curso completo. Déjanos tu email y te avisamos cuando esté listo.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-emerald-500 text-[32px] mb-2 block">check_circle</span>
                <p className="text-emerald-400 font-medium">Listo. Te avisaremos.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 px-5 py-4 rounded-xl bg-card/80 text-fg-light placeholder:text-muted/50 border-0 outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-light transition-colors text-sm shrink-0"
                >
                  Avisarme
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="px-6 sm:px-10 md:px-14 py-10 border-t border-fg-light/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-display text-lg tracking-tight">Slidelab</span>
            <a href="/demo" className="text-muted text-sm hover:text-fg-light transition-colors">Demo</a>
            <a href="/components" className="text-muted text-sm hover:text-fg-light transition-colors">Componentes</a>
            <a href="https://github.com/Oscarm157/slidelab" className="text-muted text-sm hover:text-fg-light transition-colors">GitHub</a>
          </div>
          <p className="text-muted/50 text-xs">
            Hecho con Slidelab + Claude Code
          </p>
        </div>
      </footer>
    </div>
  );
}
