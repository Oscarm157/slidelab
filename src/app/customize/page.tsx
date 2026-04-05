"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { extractColors } from "./extract-colors";
import { generatePalettes, type Palette } from "./generate-palettes";

// ─────────────────────────────────────────────
// Brand Customizer — Wizard de 3 pasos
// 1. Tu marca (colores, fonts, logo)
// 2. Tu presentación (tipo + estructura de slides)
// 3. Tu prompt (mega-prompt listo para Claude Code)
// ─────────────────────────────────────────────

interface BrandConfig {
  primary: string;
  primaryLight: string;
  bgDark: string;
  bgLight: string;
  foreground: string;
  foregroundLight: string;
  displayFont: string;
  bodyFont: string;
  monoFont: string;
  logo: string | null;
}

const defaults: BrandConfig = {
  primary: "#8B6914",
  primaryLight: "#A67C00",
  bgDark: "#0a0a0a",
  bgLight: "#F5F0EB",
  foreground: "#1a1a1a",
  foregroundLight: "#F5F5F5",
  displayFont: "DM Serif Display",
  bodyFont: "Plus Jakarta Sans",
  monoFont: "DM Mono",
  logo: null,
};

const fontOptions = {
  display: ["DM Serif Display", "Playfair Display", "Libre Baskerville", "EB Garamond", "Bodoni Moda"],
  body: ["Plus Jakarta Sans", "Inter", "DM Sans", "Source Sans 3", "Manrope"],
  mono: ["DM Mono", "JetBrains Mono", "IBM Plex Mono", "Fira Code"],
};

// ─── Tipos de presentación con slides sugeridos ───

interface SlideTemplate {
  id: string;
  title: string;
  component: string;
  notes: string;
}

interface PresentationType {
  id: string;
  label: string;
  icon: string;
  description: string;
  slides: SlideTemplate[];
}

const presentationTypes: PresentationType[] = [
  {
    id: "pitch",
    label: "Pitch Deck",
    icon: "rocket_launch",
    description: "Para inversionistas, concursos, aceleradoras",
    slides: [
      { id: "cover", title: "Portada", component: "Hero + stats", notes: "" },
      { id: "problem", title: "El Problema", component: "IconList / cards", notes: "" },
      { id: "solution", title: "La Solución", component: "FeatureShowcase", notes: "" },
      { id: "how", title: "Cómo Funciona", component: "ProcessFlow", notes: "" },
      { id: "market", title: "Mercado", component: "DataCallout + charts", notes: "" },
      { id: "traction", title: "Tracción", component: "KPIRow + MetricDelta", notes: "" },
      { id: "competition", title: "Competencia", component: "ComparisonTable", notes: "" },
      { id: "pricing", title: "Precios", component: "PricingTable", notes: "" },
      { id: "roadmap", title: "Roadmap", component: "MilestoneTimeline", notes: "" },
      { id: "team", title: "Equipo", component: "TeamGrid", notes: "" },
      { id: "ask", title: "The Ask", component: "DataCallout + distribución", notes: "" },
      { id: "contact", title: "Contacto", component: "CTABanner", notes: "" },
    ],
  },
  {
    id: "proposal",
    label: "Propuesta",
    icon: "business_center",
    description: "Consultoría, servicios, proyectos",
    slides: [
      { id: "cover", title: "Portada", component: "Hero + título", notes: "" },
      { id: "challenge", title: "El Reto", component: "StatCard x3", notes: "" },
      { id: "approach", title: "Enfoque", component: "MatrixGrid 2x2", notes: "" },
      { id: "methodology", title: "Metodología", component: "StepByStep", notes: "" },
      { id: "team", title: "Equipo", component: "TeamGrid + OrgChart", notes: "" },
      { id: "results", title: "Resultados Esperados", component: "BeforeAfter + MetricDelta", notes: "" },
      { id: "cases", title: "Casos Similares", component: "CaseStudyCard x2", notes: "" },
      { id: "procon", title: "Pros / Contras", component: "ProConList", notes: "" },
      { id: "investment", title: "Inversión", component: "PricingTable + Timeline", notes: "" },
      { id: "next", title: "Siguientes Pasos", component: "StepByStep + CTABanner", notes: "" },
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: "palette",
    description: "Agencia, freelancer, estudio",
    slides: [
      { id: "cover", title: "Portada", component: "Hero visual", notes: "" },
      { id: "philosophy", title: "Filosofía", component: "SplitSlide + QuoteBlock", notes: "" },
      { id: "services", title: "Servicios", component: "FeatureCard x4-6", notes: "" },
      { id: "process", title: "Proceso", component: "ProcessFlow", notes: "" },
      { id: "project", title: "Proyecto Estrella", component: "ImageCompare + SpecSheet", notes: "" },
      { id: "gallery", title: "Galería", component: "ImageGrid", notes: "" },
      { id: "testimonials", title: "Testimonios", component: "TestimonialCard x3", notes: "" },
      { id: "clients", title: "Clientes", component: "LogoCloud", notes: "" },
      { id: "cases", title: "Casos de Estudio", component: "CaseStudyCard x2", notes: "" },
      { id: "contact", title: "Contacto", component: "CTABanner + CalendlyEmbed", notes: "" },
    ],
  },
  {
    id: "report",
    label: "Reporte",
    icon: "analytics",
    description: "Resultados, trimestral, anual",
    slides: [
      { id: "cover", title: "Portada", component: "Título + periodo", notes: "" },
      { id: "highlights", title: "Highlights", component: "KPIRow + StatCard x4", notes: "" },
      { id: "revenue", title: "Revenue", component: "ChartWrapper (BarChart)", notes: "" },
      { id: "products", title: "Productos", component: "FeatureCard en CardGrid", notes: "" },
      { id: "regional", title: "Regional", component: "Barras por región", notes: "" },
      { id: "pipeline", title: "Pipeline / R&D", component: "MilestoneTimeline", notes: "" },
      { id: "operations", title: "Operaciones", component: "SpecSheet", notes: "" },
      { id: "impact", title: "Impacto / ESG", component: "IconList + DataCallout", notes: "" },
      { id: "team", title: "Liderazgo", component: "TeamGrid", notes: "" },
      { id: "outlook", title: "Outlook", component: "Targets + QuoteBlock", notes: "" },
    ],
  },
  {
    id: "event",
    label: "Evento",
    icon: "celebration",
    description: "Conferencia, summit, meetup",
    slides: [
      { id: "cover", title: "Portada", component: "CountdownTimer + título", notes: "" },
      { id: "about", title: "Sobre el Evento", component: "ValueCard x3", notes: "" },
      { id: "agenda", title: "Agenda", component: "AgendaList", notes: "" },
      { id: "speakers", title: "Speakers", component: "SpeakerCard x3-4", notes: "" },
      { id: "testimonials", title: "Testimonios", component: "TestimonialCard x3", notes: "" },
      { id: "venue", title: "Venue", component: "MapEmbed + ImageGrid", notes: "" },
      { id: "vibe", title: "Música / Vibe", component: "SpotifyEmbed", notes: "" },
      { id: "social", title: "Social", component: "SocialEmbed", notes: "" },
      { id: "mentoring", title: "Mentoría", component: "CalendlyEmbed", notes: "" },
      { id: "register", title: "Registro", component: "FormEmbed + CountdownTimer", notes: "" },
    ],
  },
  {
    id: "catalog",
    label: "Catálogo",
    icon: "storefront",
    description: "Productos, ventas, e-commerce",
    slides: [
      { id: "cover", title: "Portada", component: "Hero producto", notes: "" },
      { id: "value", title: "Propuesta de Valor", component: "ValueCard x3", notes: "" },
      { id: "product", title: "Producto Principal", component: "FeatureShowcase", notes: "" },
      { id: "specs", title: "Especificaciones", component: "SpecSheet", notes: "" },
      { id: "comparison", title: "Comparativa", component: "ComparisonTable", notes: "" },
      { id: "gallery", title: "Galería", component: "ImageGrid / ImageZoom", notes: "" },
      { id: "testimonials", title: "Testimonios", component: "TestimonialCard x3", notes: "" },
      { id: "pricing", title: "Precios", component: "PricingTable", notes: "" },
      { id: "faq", title: "FAQ", component: "FAQAccordion", notes: "" },
      { id: "contact", title: "Contacto", component: "CTABanner + ContactCard", notes: "" },
    ],
  },
  {
    id: "education",
    label: "Curso",
    icon: "school",
    description: "Educación, workshop, bootcamp",
    slides: [
      { id: "cover", title: "Portada", component: "Hero + dato impactante", notes: "" },
      { id: "problem", title: "El Problema", component: "IconList", notes: "" },
      { id: "learn", title: "Qué Aprenderás", component: "FeatureCard x4-6", notes: "" },
      { id: "curriculum", title: "Temario", component: "AgendaList / StepByStep", notes: "" },
      { id: "methodology", title: "Metodología", component: "ProcessFlow", notes: "" },
      { id: "results", title: "Resultados", component: "KPIRow + TestimonialCard", notes: "" },
      { id: "instructor", title: "Instructor", component: "TeamGrid", notes: "" },
      { id: "pricing", title: "Planes", component: "PricingTable", notes: "" },
      { id: "faq", title: "FAQ", component: "FAQAccordion", notes: "" },
      { id: "register", title: "Inscripción", component: "CTABanner + FormEmbed", notes: "" },
    ],
  },
];

// ─── Sub-components ───

function ColorPicker({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-3">
      <label className="relative cursor-pointer">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="w-10 h-10 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.2)]" style={{ backgroundColor: value }} />
      </label>
      <div className="flex-1">
        <p className="text-xs text-fg-light/40 mb-0.5">{label}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent font-mono text-sm text-fg-light outline-none"
        />
      </div>
    </div>
  );
}

function FontSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-xs text-fg-light/40 mb-1.5">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-card/60 text-fg-light text-sm rounded-xl px-4 h-12 outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
      >
        {options.map((f) => (
          <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>
        ))}
      </select>
    </div>
  );
}

// ─── Main Component ───

export default function CustomizePage() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<BrandConfig>(defaults);
  const [copied, setCopied] = useState(false);
  const [detectedColors, setDetectedColors] = useState<string[]>([]);
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [slides, setSlides] = useState<SlideTemplate[]>([]);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Cargar de localStorage
  useEffect(() => {
    const saved = localStorage.getItem("slidelab-brand");
    if (saved) {
      try { setConfig({ ...defaults, ...JSON.parse(saved) }); } catch {}
    }
    const savedType = localStorage.getItem("slidelab-type");
    if (savedType) {
      setSelectedType(savedType);
      const type = presentationTypes.find((t) => t.id === savedType);
      if (type) {
        const savedSlides = localStorage.getItem("slidelab-slides");
        setSlides(savedSlides ? JSON.parse(savedSlides) : type.slides.map((s) => ({ ...s })));
      }
    }
    const savedName = localStorage.getItem("slidelab-project-name");
    if (savedName) setProjectName(savedName);
    const savedDesc = localStorage.getItem("slidelab-project-desc");
    if (savedDesc) setProjectDescription(savedDesc);
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("slidelab-brand", JSON.stringify(config));
    const iframe = iframeRef.current;
    if (iframe?.contentDocument) {
      const html = iframe.contentDocument.documentElement;
      html.style.setProperty("--t-primary", config.primary);
      html.style.setProperty("--t-primary-light", config.primaryLight);
      html.style.setProperty("--t-bg-dark", config.bgDark);
      html.style.setProperty("--t-bg-light", config.bgLight);
      html.style.setProperty("--t-fg-dark", config.foreground);
      html.style.setProperty("--t-fg-light", config.foregroundLight);
    }
  }, [config]);

  useEffect(() => {
    if (selectedType) localStorage.setItem("slidelab-type", selectedType);
    if (slides.length) localStorage.setItem("slidelab-slides", JSON.stringify(slides));
    if (projectName) localStorage.setItem("slidelab-project-name", projectName);
    if (projectDescription) localStorage.setItem("slidelab-project-desc", projectDescription);
  }, [selectedType, slides, projectName, projectDescription]);

  const update = (key: keyof BrandConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      update("logo", dataUrl);
      const colors = await extractColors(dataUrl);
      setDetectedColors(colors);
      setPalettes(generatePalettes(colors));
    };
    reader.readAsDataURL(file);
  };

  const applyPalette = (palette: Palette) => {
    setConfig((prev) => ({
      ...prev,
      primary: palette.primary,
      primaryLight: palette.primaryLight,
      bgDark: palette.bgDark,
      bgLight: palette.bgLight,
      foreground: palette.foreground,
      foregroundLight: palette.foregroundLight,
    }));
  };

  const selectType = (id: string) => {
    setSelectedType(id);
    const type = presentationTypes.find((t) => t.id === id);
    if (type) setSlides(type.slides.map((s) => ({ ...s })));
  };

  const removeSlide = (index: number) => {
    setSlides((prev) => prev.filter((_, i) => i !== index));
  };

  const moveSlide = (from: number, to: number) => {
    if (to < 0 || to >= slides.length) return;
    setSlides((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  const updateSlideNotes = (index: number, notes: string) => {
    setSlides((prev) => prev.map((s, i) => i === index ? { ...s, notes } : s));
  };

  const generateMegaPrompt = () => {
    const lines: string[] = [];

    lines.push(`Crea una presentación profesional con Slidelab.`);
    lines.push(``);

    if (projectName) {
      lines.push(`**Proyecto:** ${projectName}`);
      if (projectDescription) lines.push(`**Descripción:** ${projectDescription}`);
      lines.push(``);
    }

    // Marca
    lines.push(`## Configuración de marca`);
    lines.push(``);
    lines.push(`Aplica estos colores en deck.config.ts:`);
    lines.push(`- Primary: ${config.primary}`);
    lines.push(`- Primary Light: ${config.primaryLight}`);
    lines.push(`- Fondo oscuro: ${config.bgDark}`);
    lines.push(`- Fondo claro: ${config.bgLight}`);
    lines.push(`- Texto sobre claro: ${config.foreground}`);
    lines.push(`- Texto sobre oscuro: ${config.foregroundLight}`);

    if (config.displayFont !== defaults.displayFont || config.bodyFont !== defaults.bodyFont || config.monoFont !== defaults.monoFont) {
      lines.push(``);
      lines.push(`Tipografía:`);
      if (config.displayFont !== defaults.displayFont) lines.push(`- Títulos: ${config.displayFont}`);
      if (config.bodyFont !== defaults.bodyFont) lines.push(`- Texto: ${config.bodyFont}`);
      if (config.monoFont !== defaults.monoFont) lines.push(`- Números: ${config.monoFont}`);
    }

    if (config.logo) {
      lines.push(``);
      lines.push(`Ya subí mi logo en /public/images/logo.png, úsalo en la portada.`);
    }

    // Estructura
    if (slides.length > 0) {
      lines.push(``);
      lines.push(`## Estructura de la presentación (${slides.length} slides)`);
      lines.push(``);

      slides.forEach((s, i) => {
        const variant = i % 2 === 0 ? "dark" : "light";
        let line = `${i + 1}. **${s.title}** (${variant}) — ${s.component}`;
        if (s.notes) line += ` — ${s.notes}`;
        lines.push(line);
      });
    }

    lines.push(``);
    lines.push(`## Instrucciones`);
    lines.push(``);
    lines.push(`- Lee el skill "create-presentation" para ver el patrón de archivos`);
    lines.push(`- Lee el skill "component-guide" para las props de cada componente`);
    lines.push(`- Alterna slides dark/light para contraste visual`);
    lines.push(`- Usa text-gradient en títulos clave, AnimatedCounter en todos los números`);
    lines.push(`- Usa datos ficticios realistas si no tengo datos reales aún`);
    lines.push(`- Actualiza totalSlides en deck.config.ts al número correcto`);

    return lines.join("\n");
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(generateMegaPrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    { label: "Tu marca", icon: "palette" },
    { label: "Tu presentación", icon: "slideshow" },
    { label: "Tu prompt", icon: "terminal" },
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-fg-light">
      {/* Nav */}
      <nav className="px-6 sm:px-10 py-4 flex items-center justify-between border-b border-fg-light/5">
        <a href="/" className="font-display text-xl tracking-tight">Slidelab</a>
        <div className="flex items-center gap-4">
          <a href="/components" className="text-fg-light/40 text-sm hover:text-fg-light transition-colors">Componentes</a>
          <a href="/ejemplos" className="text-fg-light/40 text-sm hover:text-fg-light transition-colors">Ejemplos</a>
          <a href="/demo" className="text-fg-light/40 text-sm hover:text-fg-light transition-colors">Demo</a>
        </div>
      </nav>

      {/* Step indicator */}
      <div className="px-6 sm:px-10 py-6 border-b border-fg-light/5">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setStep(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                step === i
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(139,105,20,0.25)]"
                  : i < step
                  ? "bg-primary/10 text-primary"
                  : "bg-fg-light/5 text-fg-light/30"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{i + 1}</span>
            </button>
          ))}
          <div className="flex-1" />
          {step < 2 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-fg-light/5 text-fg-light/60 text-sm font-medium hover:bg-fg-light/10 transition-colors"
            >
              Siguiente
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Step0Brand
              config={config}
              update={update}
              detectedColors={detectedColors}
              palettes={palettes}
              applyPalette={applyPalette}
              handleLogoUpload={handleLogoUpload}
              fileInputRef={fileInputRef}
              iframeRef={iframeRef}
              setConfig={setConfig}
              defaults={defaults}
            />
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Step1Structure
              selectedType={selectedType}
              selectType={selectType}
              slides={slides}
              removeSlide={removeSlide}
              moveSlide={moveSlide}
              updateSlideNotes={updateSlideNotes}
              projectName={projectName}
              setProjectName={setProjectName}
              projectDescription={projectDescription}
              setProjectDescription={setProjectDescription}
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Step2Prompt
              prompt={generateMegaPrompt()}
              copied={copied}
              copyPrompt={copyPrompt}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Step 0: Tu marca ───

function Step0Brand({
  config, update, detectedColors, palettes, applyPalette, handleLogoUpload,
  fileInputRef, iframeRef, setConfig, defaults,
}: {
  config: BrandConfig;
  update: (key: keyof BrandConfig, value: string) => void;
  detectedColors: string[];
  palettes: Palette[];
  applyPalette: (p: Palette) => void;
  handleLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  setConfig: (c: BrandConfig) => void;
  defaults: BrandConfig;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] min-h-[calc(100dvh-130px)]">
      {/* Sidebar */}
      <div className="bg-card/30 px-6 py-8 space-y-8 overflow-y-auto border-r border-fg-light/5">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-2">Paso 1</p>
          <h2 className="font-display text-2xl tracking-tight">Tu marca</h2>
        </div>

        {/* Logo */}
        <div>
          <p className="text-xs text-fg-light/40 mb-3 font-medium">Logo</p>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="rounded-2xl border-2 border-dashed border-fg-light/10 hover:border-primary/30 transition-colors p-6 text-center cursor-pointer"
          >
            {config.logo ? (
              <img src={config.logo} alt="Logo" className="max-h-16 mx-auto object-contain" />
            ) : (
              <>
                <span className="material-symbols-outlined text-fg-light/20 text-[36px] mb-2 block">cloud_upload</span>
                <p className="text-fg-light/30 text-xs">Arrastra o haz clic para subir</p>
              </>
            )}
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
          {config.logo && (
            <button onClick={() => { update("logo", ""); }} className="text-xs text-muted hover:text-fg-light mt-2 transition-colors">
              Quitar logo
            </button>
          )}
        </div>

        {/* Paletas detectadas */}
        {detectedColors.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
            <p className="text-xs text-fg-light/40 mb-2 font-medium">Colores detectados</p>
            <div className="flex gap-2 mb-4">
              {detectedColors.map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.3)] cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: c }} title={c} onClick={() => update("primary", c)} />
              ))}
            </div>
            <p className="text-xs text-fg-light/40 mb-2 font-medium">Paletas sugeridas</p>
            <div className="grid grid-cols-2 gap-2">
              {palettes.map((p) => (
                <motion.button key={p.name} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => applyPalette(p)} className="rounded-xl bg-card/60 p-3 hover:bg-card/80 transition-colors text-left">
                  <p className="text-[11px] font-medium text-fg-light/60 mb-2">{p.name}</p>
                  <div className="flex gap-1">
                    <div className="flex-1 h-5 rounded" style={{ background: p.primary }} />
                    <div className="flex-1 h-5 rounded" style={{ background: p.primaryLight }} />
                    <div className="flex-1 h-5 rounded" style={{ background: p.bgDark }} />
                    <div className="flex-1 h-5 rounded" style={{ background: p.bgLight }} />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Colores */}
        <div>
          <p className="text-xs text-fg-light/40 mb-3 font-medium">Colores</p>
          <div className="space-y-4">
            <ColorPicker label="Primary" value={config.primary} onChange={(v) => update("primary", v)} />
            <ColorPicker label="Primary Light" value={config.primaryLight} onChange={(v) => update("primaryLight", v)} />
            <ColorPicker label="Fondo oscuro" value={config.bgDark} onChange={(v) => update("bgDark", v)} />
            <ColorPicker label="Fondo claro" value={config.bgLight} onChange={(v) => update("bgLight", v)} />
            <ColorPicker label="Texto (sobre claro)" value={config.foreground} onChange={(v) => update("foreground", v)} />
            <ColorPicker label="Texto (sobre oscuro)" value={config.foregroundLight} onChange={(v) => update("foregroundLight", v)} />
          </div>
        </div>

        {/* Fonts */}
        <div>
          <p className="text-xs text-fg-light/40 mb-3 font-medium">Tipografía</p>
          <div className="space-y-3">
            <FontSelect label="Display (títulos)" value={config.displayFont} options={fontOptions.display} onChange={(v) => update("displayFont", v)} />
            <FontSelect label="Body (texto)" value={config.bodyFont} options={fontOptions.body} onChange={(v) => update("bodyFont", v)} />
            <FontSelect label="Mono (números)" value={config.monoFont} options={fontOptions.mono} onChange={(v) => update("monoFont", v)} />
          </div>
        </div>

        <button onClick={() => setConfig(defaults)} className="w-full py-3 rounded-xl bg-fg-light/5 text-fg-light/40 text-sm hover:bg-fg-light/10 transition-colors">
          Restaurar por defecto
        </button>
      </div>

      {/* Preview */}
      <div className="px-6 sm:px-10 py-8 space-y-8 overflow-y-auto">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-2">Vista previa</p>
          <h2 className="font-display text-2xl tracking-tight">Así se vería tu presentación</h2>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="bg-[#1c1c1c] px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 bg-[#0a0a0a] rounded-md px-3 py-1 text-[10px] text-fg-light/30 font-mono">tu-presentacion.vercel.app</div>
          </div>
          <div className="aspect-[16/9]" style={{ backgroundColor: config.bgDark }}>
            <iframe ref={iframeRef} src="/demo" className="w-full h-full border-0" title="Preview" />
          </div>
        </div>
        <div>
          <p className="text-xs text-fg-light/40 mb-3 font-medium">Tu paleta</p>
          <div className="flex gap-2">
            {[
              { color: config.primary, label: "Primary" },
              { color: config.primaryLight, label: "Accent" },
              { color: config.bgDark, label: "Oscuro" },
              { color: config.bgLight, label: "Claro" },
            ].map((c, i) => (
              <div key={i} className="flex-1">
                <div className="h-10 rounded-xl shadow-inner" style={{ backgroundColor: c.color }} />
                <p className="text-[9px] text-fg-light/30 font-mono text-center mt-1">{c.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="rounded-xl p-3 text-center" style={{ backgroundColor: config.bgDark }}>
              <span className="text-xs font-medium" style={{ color: config.foregroundLight }}>Texto sobre oscuro</span>
            </div>
            <div className="rounded-xl p-3 text-center" style={{ backgroundColor: config.bgLight }}>
              <span className="text-xs font-medium" style={{ color: config.foreground }}>Texto sobre claro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 1: Tu presentación ───

function Step1Structure({
  selectedType, selectType, slides, removeSlide, moveSlide, updateSlideNotes,
  projectName, setProjectName, projectDescription, setProjectDescription,
}: {
  selectedType: string | null;
  selectType: (id: string) => void;
  slides: SlideTemplate[];
  removeSlide: (i: number) => void;
  moveSlide: (from: number, to: number) => void;
  updateSlideNotes: (i: number, notes: string) => void;
  projectName: string;
  setProjectName: (v: string) => void;
  projectDescription: string;
  setProjectDescription: (v: string) => void;
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 py-8 space-y-8">
      <div>
        <p className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-2">Paso 2</p>
        <h2 className="font-display text-2xl tracking-tight">Tu presentación</h2>
        <p className="text-fg-light/40 text-sm mt-1">Define qué vas a presentar y la estructura de slides.</p>
      </div>

      {/* Nombre del proyecto */}
      <div className="space-y-3">
        <div>
          <p className="text-xs text-fg-light/40 mb-1.5 font-medium">Nombre del proyecto</p>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="ej: Mi startup, Reporte Q1, Portfolio"
            className="w-full bg-card/60 text-fg-light text-sm rounded-xl px-4 h-12 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-fg-light/20"
          />
        </div>
        <div>
          <p className="text-xs text-fg-light/40 mb-1.5 font-medium">Descripción breve</p>
          <input
            type="text"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="ej: Pitch deck para ronda serie A de $5M"
            className="w-full bg-card/60 text-fg-light text-sm rounded-xl px-4 h-12 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-fg-light/20"
          />
        </div>
      </div>

      {/* Tipo de presentación */}
      <div>
        <p className="text-xs text-fg-light/40 mb-3 font-medium">Tipo de presentación</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {presentationTypes.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => selectType(type.id)}
              className={`rounded-2xl p-4 text-left transition-all ${
                selectedType === type.id
                  ? "bg-primary/15 border-2 border-primary/40 shadow-[0_0_15px_rgba(139,105,20,0.15)]"
                  : "bg-card/40 border-2 border-transparent hover:bg-card/60"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                selectedType === type.id ? "bg-primary/20" : "bg-fg-light/5"
              }`}>
                <span className={`material-symbols-outlined text-[22px] ${
                  selectedType === type.id ? "text-primary" : "text-fg-light/30"
                }`}>
                  {type.icon}
                </span>
              </div>
              <p className={`font-medium text-sm ${selectedType === type.id ? "text-primary" : "text-fg-light/70"}`}>
                {type.label}
              </p>
              <p className="text-[11px] text-fg-light/30 mt-0.5">{type.description}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Slides */}
      {slides.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-fg-light/40 font-medium">
              Estructura ({slides.length} slides)
            </p>
            <p className="text-[10px] text-fg-light/20">
              Reordena, elimina o agrega notas a cada slide
            </p>
          </div>

          <div className="space-y-2">
            {slides.map((slide, i) => (
              <motion.div
                key={`${slide.id}-${i}`}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-card/40 rounded-xl p-4 group"
              >
                <div className="flex items-center gap-3">
                  {/* Number */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                    i % 2 === 0 ? "bg-fg-light/5 text-fg-light/40" : "bg-primary/10 text-primary"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-fg-light/80">{slide.title}</p>
                    <p className="text-[11px] text-fg-light/25 truncate">{slide.component}</p>
                  </div>

                  {/* Variant badge */}
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md shrink-0 ${
                    i % 2 === 0 ? "bg-fg-light/5 text-fg-light/30" : "bg-primary/10 text-primary/60"
                  }`}>
                    {i % 2 === 0 ? "dark" : "light"}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => moveSlide(i, i - 1)} className="p-1 rounded-lg hover:bg-fg-light/10 text-fg-light/30" title="Subir">
                      <span className="material-symbols-outlined text-[16px]">keyboard_arrow_up</span>
                    </button>
                    <button onClick={() => moveSlide(i, i + 1)} className="p-1 rounded-lg hover:bg-fg-light/10 text-fg-light/30" title="Bajar">
                      <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
                    </button>
                    <button onClick={() => removeSlide(i)} className="p-1 rounded-lg hover:bg-red-500/10 text-fg-light/30 hover:text-red-400" title="Eliminar">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>

                {/* Notes input */}
                <input
                  type="text"
                  value={slide.notes}
                  onChange={(e) => updateSlideNotes(i, e.target.value)}
                  placeholder="Notas: ej. 'Incluir métricas de Q1' o 'Mostrar 3 planes de precio'"
                  className="w-full mt-2 bg-transparent text-[11px] text-fg-light/40 outline-none placeholder:text-fg-light/15 border-b border-transparent focus:border-fg-light/10 pb-1"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Step 2: Tu prompt ───

function Step2Prompt({
  prompt, copied, copyPrompt,
}: {
  prompt: string;
  copied: boolean;
  copyPrompt: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 py-8 space-y-8">
      <div>
        <p className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-2">Paso 3</p>
        <h2 className="font-display text-2xl tracking-tight">Tu prompt</h2>
        <p className="text-fg-light/40 text-sm mt-1">
          Copia esta instrucción y pégala en Claude Code dentro de tu proyecto.
        </p>
      </div>

      {/* How to use */}
      <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">info</span>
          <div>
            <p className="text-sm text-fg-light/70 font-medium mb-1">Cómo usar esta instrucción</p>
            <ol className="text-xs text-fg-light/40 space-y-1 list-decimal list-inside">
              <li>Abre tu terminal en la carpeta del proyecto</li>
              <li>Ejecuta <code className="text-primary/70 font-mono">claude</code> para abrir Claude Code</li>
              <li>Pega la instrucción de abajo</li>
              <li>Claude Code creará todos los archivos automáticamente</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Prompt */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-fg-light/40 font-medium">Instrucción generada</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={copyPrompt}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium shadow-[0_0_15px_rgba(139,105,20,0.25)] hover:shadow-[0_0_25px_rgba(139,105,20,0.4)] transition-shadow"
          >
            <span className="material-symbols-outlined text-[16px]">{copied ? "check" : "content_copy"}</span>
            {copied ? "Copiado" : "Copiar instrucción"}
          </motion.button>
        </div>
        <div className="bg-[#0a0a0a] rounded-2xl p-6 overflow-x-auto border border-fg-light/5">
          <pre className="text-sm text-fg-light/70 leading-relaxed whitespace-pre-wrap font-mono">
            {prompt}
          </pre>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { icon: "auto_awesome", title: "Ver ejemplos", desc: "6 presentaciones completas", href: "/ejemplos" },
          { icon: "widgets", title: "Componentes", desc: "55+ componentes listos", href: "/components" },
          { icon: "play_arrow", title: "Ver demo", desc: "Presentación de muestra", href: "/demo" },
        ].map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ y: -2 }}
            className="bg-card/40 rounded-xl p-4 flex items-center gap-3 hover:bg-card/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[20px]">{link.icon}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{link.title}</p>
              <p className="text-[11px] text-fg-light/30">{link.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
