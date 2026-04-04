"use client";

import { useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { StatCard } from "@/components/StatCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { TimelineBlock } from "@/components/TimelineBlock";
import { ImageZoom } from "@/components/ImageZoom";
import { ChartWrapper } from "@/components/ChartWrapper";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingTable } from "@/components/PricingTable";
import { KPIRow } from "@/components/KPIRow";
import { DataCallout } from "@/components/DataCallout";
import { MetricDelta } from "@/components/MetricDelta";
import { BeforeAfter } from "@/components/BeforeAfter";
import { TeamGrid } from "@/components/TeamGrid";
import { SpeakerCard } from "@/components/SpeakerCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ValueCard } from "@/components/ValueCard";
import { ProcessFlow } from "@/components/ProcessFlow";
import { FunnelChart } from "@/components/FunnelChart";
import { MatrixGrid } from "@/components/MatrixGrid";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { StepByStep } from "@/components/StepByStep";
import { LogoCloud } from "@/components/LogoCloud";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { ProConList } from "@/components/ProConList";
import { ImageGrid } from "@/components/ImageGrid";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SpecSheet } from "@/components/SpecSheet";
import { AgendaList } from "@/components/AgendaList";
import { CountdownTimer } from "@/components/CountdownTimer";
import { MapEmbed } from "@/components/MapEmbed";
import { IconList } from "@/components/IconList";
import { SectionHeader } from "@/components/SectionHeader";
import { AudioPlayer } from "@/components/AudioPlayer";
import { PDFEmbed } from "@/components/PDFEmbed";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import { FigmaEmbed } from "@/components/FigmaEmbed";
import { FormEmbed } from "@/components/FormEmbed";
import { GoogleDocsEmbed } from "@/components/GoogleDocsEmbed";
import { ImageCompare } from "@/components/ImageCompare";
import { OrgChart } from "@/components/OrgChart";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { FloorPlanViewer } from "@/components/FloorPlanViewer";
import { MiniChart } from "@/components/MiniChart";
import { SocialEmbed } from "@/components/SocialEmbed";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// ─────────────────────────────────────────────
// Catálogo — cada componente en dark Y light
// ─────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-medium hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-[12px]">{copied ? "check" : "content_copy"}</span>
      {copied ? "Copiado" : "Usar"}
    </button>
  );
}

function Dual({ title, desc, dark, light, prompt }: {
  title: string; desc: string; dark: React.ReactNode; light: React.ReactNode; prompt?: string;
}) {
  const defaultPrompt = `Agrega un componente ${title} en mi slide. Usa variant="dark" o variant="light" según el fondo del slide.`;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Dark side */}
      <div className="bg-bg-dark text-fg-light px-6 sm:px-10 py-8">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-0.5">{title}</p>
              <p className="text-fg-light/25 text-[11px]">{desc}</p>
            </div>
            <CopyButton text={prompt ?? defaultPrompt} />
          </div>
          {dark}
        </div>
      </div>
      {/* Light side */}
      <div className="bg-bg-light text-fg-dark px-6 sm:px-10 py-8">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-0.5">{title}</p>
            <p className="text-fg-dark/25 text-[11px]">{desc}</p>
          </div>
          {light}
        </div>
      </div>
    </section>
  );
}

// Datos de ejemplo reutilizables
const features3 = [
  { icon: "water_drop", title: "Captación pluvial", description: "Sistema que cubre el 40% del consumo." },
  { icon: "air", title: "Ventilación cruzada", description: "Reduce climatización artificial." },
  { icon: "park", title: "Jardín central", description: "360 m² con especies nativas." },
];
const kpiItems = [
  { label: "Ingresos", value: 4.2, prefix: "$", suffix: "M", decimals: 1, change: 18, icon: "payments" },
  { label: "Usuarios", value: 12500, change: 24, icon: "group" },
  { label: "Retención", value: 96, suffix: "%", change: 3, icon: "loyalty" },
];
const compCols = [{ label: "Básico" }, { label: "Pro", highlighted: true }, { label: "Enterprise" }];
const compRows = [
  { feature: "Usuarios", values: ["5", "25", "Ilimitados"] as (string | boolean)[] },
  { feature: "Soporte", values: [false, true, true] as (string | boolean)[] },
  { feature: "API", values: [false, false, true] as (string | boolean)[] },
];
const priceTiers = [
  { name: "Starter", price: "$29", period: "mes", features: ["5 usuarios", "10 GB"], cta: "Comenzar" },
  { name: "Pro", price: "$79", period: "mes", features: ["25 usuarios", "100 GB", "API"], highlighted: true, cta: "Elegir Pro" },
  { name: "Enterprise", price: "$199", period: "mes", features: ["Ilimitados", "1 TB", "SLA"], cta: "Contactar" },
];
const timelinePhases = [
  { icon: "search", title: "Diagnóstico", description: "Análisis.", label: "Sem 1–2" },
  { icon: "architecture", title: "Diseño", description: "Prototipos.", label: "Sem 3–5" },
  { icon: "code", title: "Desarrollo", description: "Sprints.", label: "Sem 6–10" },
  { icon: "rocket_launch", title: "Lanzamiento", description: "Deploy.", label: "Sem 11–12" },
];
const processSteps = [
  { title: "Diagnóstico", icon: "search", status: "completed" as const },
  { title: "Diseño", icon: "architecture", status: "completed" as const },
  { title: "Desarrollo", icon: "code", status: "active" as const },
  { title: "Lanzamiento", icon: "rocket_launch", status: "upcoming" as const },
];
const funnelStages = [
  { label: "Visitantes", value: 10000, icon: "visibility" },
  { label: "Leads", value: 3200, icon: "person_add" },
  { label: "Oportunidades", value: 850, icon: "handshake" },
  { label: "Clientes", value: 210, icon: "check_circle" },
];
const milestones = [
  { date: "Ene 2025", title: "Constitución", icon: "gavel", status: "completed" as const },
  { date: "Mar 2025", title: "MVP", icon: "rocket_launch", status: "completed" as const },
  { date: "Jun 2025", title: "Ronda seed", icon: "payments", status: "current" as const },
  { date: "Dic 2025", title: "Expansión", icon: "public", status: "upcoming" as const },
];
const teamMembers = [
  { name: "Ana García", role: "CEO", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
  { name: "Carlos López", role: "CTO", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "María Torres", role: "CFO", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
];
const agendaItems = [
  { time: "09:00", title: "Registro y café", icon: "coffee", duration: "30 min" },
  { time: "09:30", title: "Keynote: El futuro del diseño", speaker: "Ana García", track: "Principal", duration: "45 min" },
  { time: "10:15", title: "Workshop: Prototipado", speaker: "Carlos López", track: "Taller", trackColor: "#2563eb", duration: "90 min" },
];
const iconItems = [
  { icon: "check_circle", text: "Entrega garantizada", subtext: "En tiempo y forma." },
  { icon: "support", text: "Soporte dedicado", subtext: "Respuesta en 24 hrs." },
  { icon: "security", text: "Datos protegidos", subtext: "Encriptación end-to-end." },
];
const specItems = [
  { label: "Superficie", value: "130 m²", icon: "straighten", progress: 85 },
  { label: "Garage", value: "57 m²", icon: "garage", progress: 55 },
  { label: "Roof", value: "50 m²", icon: "roofing", progress: 50, highlight: true },
  { label: "Niveles", value: "3 + roof", icon: "layers" },
];
const matrixCells = [
  { icon: "star", title: "Alta prioridad", description: "Alto impacto, bajo esfuerzo.", highlight: true },
  { icon: "schedule", title: "Planificar", description: "Alto impacto, alto esfuerzo." },
  { icon: "check_circle", title: "Quick wins", description: "Bajo impacto, bajo esfuerzo." },
  { icon: "do_not_disturb", title: "Evitar", description: "Bajo impacto, alto esfuerzo." },
];

export default function ComponentsPage() {
  return (
    <div className="w-full min-h-screen overflow-y-auto">
      {/* Hero */}
      <section className="bg-bg-dark text-fg-light px-6 sm:px-10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <StaggerReveal>
            <StaggerItem>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-primary/40" />
                <span className="font-mono text-[11px] tracking-[0.35em] text-primary uppercase">Slidelab</span>
                <div className="h-px w-16 bg-primary/40" />
              </div>
            </StaggerItem>
            <StaggerItem><h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">Componentes</h1></StaggerItem>
            <StaggerItem><p className="text-fg-light/40 text-lg max-w-xl">55 componentes en dark y light. Cada uno listo para usar en tu presentación.</p></StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* ══════ COMPONENTES EN DUAL ══════ */}

      <Dual title="FeatureCard" desc="Card con ícono, título y descripción." prompt="Agrega 3 FeatureCards en un grid de 3 columnas. Cada card debe tener un ícono de Material Symbols, un título y una descripción corta. Usa variant='light' si el slide tiene fondo claro."
        dark={<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{features3.map(f => <FeatureCard key={f.title} {...f} variant="dark" />)}</div>}
        light={<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{features3.map(f => <FeatureCard key={f.title} {...f} variant="light" />)}</div>}
      />

      <Dual title="StatCard" desc="Métrica con contador animado."
        dark={<div className="grid grid-cols-2 gap-3"><StatCard value={198} suffix=" ud." label="Unidades" variant="dark" /><StatCard value={52} suffix="%" label="Crecimiento" variant="dark" /></div>}
        light={<div className="grid grid-cols-2 gap-3"><StatCard value={4.2} suffix="M" prefix="$" label="Facturación" decimals={1} variant="light" /><StatCard value={96} suffix="%" label="Retención" variant="light" /></div>}
      />

      <Dual title="QuoteBlock" desc="Cita estilizada con borde accent."
        dark={<QuoteBlock text="La arquitectura responde al clima, no lo combate." author="Estudio" variant="dark" />}
        light={<QuoteBlock text="El producto supera el estándar de mercado." variant="light" />}
      />

      <Dual title="KPIRow" desc="Strip horizontal de métricas con trends." prompt="Agrega un KPIRow con 4 métricas clave. Cada una con valor numérico, label, ícono y porcentaje de cambio (positivo o negativo). Los números deben animarse al entrar."
        dark={<KPIRow items={kpiItems} variant="dark" />}
        light={<KPIRow items={kpiItems} variant="light" />}
      />

      <Dual title="DataCallout" desc="Métrica gigante hero con glow." prompt="Agrega un DataCallout con el número principal de mi presentación. Debe ser un número grande con animación, un label descriptivo y un contexto comparativo (ej: 'vs año anterior')."
        dark={<DataCallout value={8.4} prefix="$" suffix="M" decimals={1} label="Facturación" context="vs $5.1M anterior" icon="trending_up" variant="dark" />}
        light={<DataCallout value={15} suffix="%" label="Rendimiento anual" context="Últimos 12 meses" icon="payments" variant="light" />}
      />

      <Dual title="MetricDelta" desc="Cambio from → to con porcentaje."
        dark={<div className="grid grid-cols-2 gap-3"><MetricDelta label="Ingresos" from={2.1} to={4.2} prefix="$" suffix="M" decimals={1} variant="dark" /><MetricDelta label="Usuarios" from={5200} to={12500} variant="dark" /></div>}
        light={<div className="grid grid-cols-2 gap-3"><MetricDelta label="Costo/lead" from={45} to={28} prefix="$" variant="light" /><MetricDelta label="NPS" from={58} to={72} variant="light" /></div>}
      />

      <Dual title="ComparisonTable" desc="Tabla comparativa side-by-side." prompt="Agrega una ComparisonTable comparando 3 opciones con 5 características. La columna del medio debe estar highlighted. Usa checkmarks (true/false) y valores de texto."
        dark={<ComparisonTable columns={compCols} rows={compRows} variant="dark" />}
        light={<ComparisonTable columns={compCols} rows={compRows} variant="light" />}
      />

      <Dual title="PricingTable" desc="Cards de precios con plan destacado." prompt="Agrega una PricingTable con 3 planes: Básico ($29/mes), Pro ($79/mes, highlighted) y Enterprise ($199/mes). Cada plan con 4-5 features y un botón CTA. El plan Pro debe tener highlighted=true."
        dark={<PricingTable tiers={priceTiers} variant="dark" />}
        light={<PricingTable tiers={priceTiers} variant="light" />}
      />

      <Dual title="TimelineBlock" desc="Timeline horizontal de fases."
        dark={<TimelineBlock phases={timelinePhases} variant="dark" />}
        light={<TimelineBlock phases={timelinePhases} variant="light" />}
      />

      <Dual title="ProcessFlow" desc="Diagrama de proceso con estados."
        dark={<ProcessFlow steps={processSteps} variant="dark" />}
        light={<ProcessFlow steps={processSteps} variant="light" />}
      />

      <Dual title="FunnelChart" desc="Embudo de conversión animado." prompt="Agrega un FunnelChart mostrando el embudo de conversión: Visitantes (10,000) → Leads (3,200) → Oportunidades (850) → Clientes (210). Las barras deben animarse al hacer scroll."
        dark={<FunnelChart stages={funnelStages} variant="dark" />}
        light={<FunnelChart stages={funnelStages} variant="light" />}
      />

      <Dual title="MilestoneTimeline" desc="Timeline vertical con fechas y estados."
        dark={<MilestoneTimeline milestones={milestones} variant="dark" />}
        light={<MilestoneTimeline milestones={milestones} variant="light" />}
      />

      <Dual title="MatrixGrid" desc="Matriz 2×2 para posicionamiento."
        dark={<MatrixGrid cells={matrixCells} axisLabels={{ top: "Alto impacto", bottom: "Bajo impacto", left: "Bajo esfuerzo", right: "Alto esfuerzo" }} variant="dark" />}
        light={<MatrixGrid cells={matrixCells} axisLabels={{ top: "Alto impacto", bottom: "Bajo impacto" }} variant="light" />}
      />

      <Dual title="TeamGrid" desc="Grid de equipo con fotos y roles." prompt="Agrega un TeamGrid con los miembros del equipo. Necesito nombre, rol, foto (usa imágenes de Unsplash) y una bio corta de cada persona. 3 columnas."
        dark={<TeamGrid members={teamMembers} variant="dark" />}
        light={<TeamGrid members={teamMembers} variant="light" />}
      />

      <Dual title="SpeakerCard" desc="Card horizontal de ponente."
        dark={<SpeakerCard name="Dr. Roberto Méndez" title="Director de Innovación" organization="ITESM" photo="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" topic="IA en la industria" time="10:30 AM" variant="dark" />}
        light={<SpeakerCard name="Dr. Roberto Méndez" title="Director de Innovación" organization="ITESM" photo="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" topic="IA en la industria" time="10:30 AM" variant="light" />}
      />

      <Dual title="TestimonialCard" desc="Testimonio con avatar y rating."
        dark={<TestimonialCard quote="El equipo entregó antes de tiempo y el resultado superó expectativas." author="Laura Sánchez" role="Directora Comercial" photo="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" rating={5} variant="dark" />}
        light={<TestimonialCard quote="El equipo entregó antes de tiempo y el resultado superó expectativas." author="Laura Sánchez" role="Directora Comercial" photo="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" rating={5} variant="light" />}
      />

      <Dual title="ValueCard" desc="Card de valor con número decorativo."
        dark={<div className="grid grid-cols-1 sm:grid-cols-3 gap-3"><ValueCard icon="lightbulb" title="Innovación" description="Soluciones donde otros ven límites." number="01" variant="dark" /><ValueCard icon="handshake" title="Transparencia" description="Cada decisión, visible." number="02" variant="dark" /><ValueCard icon="speed" title="Agilidad" description="Entregas frecuentes." number="03" variant="dark" /></div>}
        light={<div className="grid grid-cols-1 sm:grid-cols-3 gap-3"><ValueCard icon="lightbulb" title="Innovación" description="Soluciones donde otros ven límites." number="01" variant="light" /><ValueCard icon="handshake" title="Transparencia" description="Cada decisión, visible." number="02" variant="light" /><ValueCard icon="speed" title="Agilidad" description="Entregas frecuentes." number="03" variant="light" /></div>}
      />

      <Dual title="IconList" desc="Lista vertical con íconos."
        dark={<IconList items={iconItems} variant="dark" />}
        light={<IconList items={iconItems} variant="light" />}
      />

      <Dual title="SpecSheet" desc="Especificaciones técnicas con barras."
        dark={<SpecSheet title="Especificaciones" specs={specItems} variant="dark" />}
        light={<SpecSheet title="Especificaciones" specs={specItems} variant="light" />}
      />

      <Dual title="ProConList" desc="Pros y contras en dos columnas."
        dark={<ProConList pros={[{ text: "Implementación rápida" }, { text: "Sin mantenimiento" }]} cons={[{ text: "Requiere capacitación" }, { text: "Mínimo 10 usuarios" }]} variant="dark" />}
        light={<ProConList pros={[{ text: "Implementación rápida" }, { text: "Sin mantenimiento" }]} cons={[{ text: "Requiere capacitación" }, { text: "Mínimo 10 usuarios" }]} variant="light" />}
      />

      <Dual title="BeforeAfter" desc="Comparativo antes/después."
        dark={<BeforeAfter before={{ label: "Antes", stats: [{ label: "Tiempo", value: "3 días" }] }} after={{ label: "Después", stats: [{ label: "Tiempo", value: "2 horas" }] }} variant="dark" />}
        light={<BeforeAfter before={{ label: "Antes", stats: [{ label: "Tiempo", value: "3 días" }] }} after={{ label: "Después", stats: [{ label: "Tiempo", value: "2 horas" }] }} variant="light" />}
      />

      <Dual title="AgendaList" desc="Agenda con horarios y tracks."
        dark={<AgendaList items={agendaItems} variant="dark" />}
        light={<AgendaList items={agendaItems} variant="light" />}
      />

      <Dual title="CountdownTimer" desc="Countdown en vivo."
        dark={<CountdownTimer targetDate="2026-12-31T00:00:00" label="Lanzamiento" variant="dark" />}
        light={<CountdownTimer targetDate="2026-12-31T00:00:00" label="Lanzamiento" variant="light" />}
      />

      <Dual title="ImageGrid" desc="Grid de imágenes con captions."
        dark={<ImageGrid images={[{ src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80", alt: "1", caption: "Fachada" }, { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80", alt: "2", caption: "Vista" }]} columns={2} variant="dark" />}
        light={<ImageGrid images={[{ src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80", alt: "3", caption: "Interior" }, { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&q=80", alt: "4", caption: "Exterior" }]} columns={2} variant="light" />}
      />

      <Dual title="CaseStudyCard" desc="Card de caso de estudio."
        dark={<CaseStudyCard title="Residencial Aurora" client="Grupo ABC" image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80" description="24 unidades vendidas en 6 meses." metrics={[{ label: "ROI", value: "32%" }]} tags={["Residencial"]} variant="dark" />}
        light={<CaseStudyCard title="Torre Pacífico" client="Desarrollos XYZ" image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" description="Edificio mixto de 12 pisos." metrics={[{ label: "Ocupación", value: "95%" }]} tags={["Corporativo"]} variant="light" />}
      />

      <Dual title="StepByStep" desc="Pasos numerados para tutoriales."
        dark={<StepByStep steps={[{ title: "Descarga", description: "Clona el repositorio.", icon: "download" }, { title: "Personaliza", description: "Edita deck.config.ts.", icon: "palette" }]} variant="dark" />}
        light={<StepByStep steps={[{ title: "Construye", description: "Arma tus slides.", icon: "dashboard" }, { title: "Despliega", description: "Un comando.", icon: "cloud_upload" }]} variant="light" />}
      />

      <Dual title="MapEmbed" desc="Mapa con overlay de información." prompt="Agrega un MapEmbed con la ubicación de mi proyecto. Incluye la dirección, detalles de acceso, y un grid de proximidad con 6 puntos de interés cercanos y su tiempo de llegada."
        dark={<MapEmbed address="Av. Principal 420" details={["A 5 min del centro"]} proximity={[{ place: "Centro", time: "5 min" }, { place: "Aeropuerto", time: "18 min" }]} variant="dark" />}
        light={<MapEmbed address="Av. Principal 420" details={["A 5 min del centro"]} proximity={[{ place: "Centro", time: "5 min" }, { place: "Aeropuerto", time: "18 min" }]} variant="light" />}
      />

      <Dual title="LogoCloud" desc="Grid de logos con grayscale hover."
        dark={<LogoCloud logos={[{ src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" }, { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" }, { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" }]} columns={3} variant="dark" />}
        light={<LogoCloud logos={[{ src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" }, { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" }, { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" }]} columns={3} grayscale={false} variant="light" />}
      />

      {/* ══════ ORIGINALES SIN DUAL ══════ */}

      <Dual title="SectionHeader" desc="Encabezado de sección con número y línea."
        dark={<SectionHeader number="01" title="Título de sección" subtitle="Subtítulo descriptivo." />}
        light={<SectionHeader number="02" title="Otra sección" subtitle="Con subtítulo opcional." />}
      />

      <Dual title="AnimatedCounter" desc="Contador animado con easing cubic."
        dark={<div className="flex items-end gap-8"><div><div className="text-gradient font-mono text-4xl sm:text-5xl font-medium"><AnimatedCounter target={15} suffix="%" /></div><p className="text-muted text-xs mt-1">Rendimiento</p></div><div><div className="text-gradient font-mono text-4xl sm:text-5xl font-medium"><AnimatedCounter target={8.4} prefix="$" suffix="M" decimals={1} /></div><p className="text-muted text-xs mt-1">Facturación</p></div></div>}
        light={<div className="flex items-end gap-8"><div><div className="text-gradient font-mono text-4xl sm:text-5xl font-medium"><AnimatedCounter target={30} /></div><p className="text-muted text-xs mt-1">Meses</p></div><div><div className="text-gradient font-mono text-4xl sm:text-5xl font-medium"><AnimatedCounter target={55} /></div><p className="text-muted text-xs mt-1">Componentes</p></div></div>}
      />

      <Dual title="ImageZoom" desc="Lupa interactiva sobre imágenes."
        dark={<ImageZoom src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Arquitectura" />}
        light={<ImageZoom src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Interior" />}
      />

      <Dual title="OrgChart" desc="Organigrama jerárquico."
        dark={<OrgChart root={{ name: "CEO", title: "Director General", children: [{ name: "VP Ops", title: "Operaciones" }, { name: "VP Comercial", title: "Ventas" }] }} variant="dark" />}
        light={<OrgChart root={{ name: "CEO", title: "Director General", children: [{ name: "VP Ops", title: "Operaciones" }, { name: "VP Comercial", title: "Ventas" }] }} variant="light" />}
      />

      {/* ══════ EMBEDS Y MEDIA ══════ */}

      <Dual title="AudioPlayer" desc="Reproductor de audio con controles custom." prompt="Agrega un AudioPlayer en mi slide. Necesito que reproduzca un archivo de audio con título, artista y cover art opcional."
        dark={<AudioPlayer src="" title="Podcast: Innovación" artist="Slidelab FM" variant="dark" />}
        light={<AudioPlayer src="" title="Entrevista: Arquitectura" artist="Canal Diseño" variant="light" />}
      />

      <Dual title="SpotifyEmbed" desc="Spotify track, album o playlist." prompt="Agrega un SpotifyEmbed con una playlist de Spotify. Pega la URL del track o playlist."
        dark={<div className="bg-card/60 rounded-2xl p-6 text-center"><span className="material-symbols-outlined text-primary text-[36px] mb-2 block">music_note</span><p className="text-fg-light/40 text-sm">Pega una URL de Spotify para ver el embed</p></div>}
        light={<div className="bg-white/60 rounded-2xl p-6 text-center"><span className="material-symbols-outlined text-primary text-[36px] mb-2 block">music_note</span><p className="text-fg-dark/40 text-sm">Pega una URL de Spotify para ver el embed</p></div>}
      />

      <Dual title="FigmaEmbed" desc="Archivo de Figma embebido." prompt="Agrega un FigmaEmbed con mi archivo de Figma. La URL es [pega tu URL de Figma aquí]."
        dark={<div className="bg-card/60 rounded-2xl p-6 text-center"><span className="material-symbols-outlined text-primary text-[36px] mb-2 block">design_services</span><p className="text-fg-light/40 text-sm">Pega una URL de Figma para ver el embed</p></div>}
        light={<div className="bg-white/60 rounded-2xl p-6 text-center"><span className="material-symbols-outlined text-primary text-[36px] mb-2 block">design_services</span><p className="text-fg-dark/40 text-sm">Pega una URL de Figma para ver el embed</p></div>}
      />

      <Dual title="PDFEmbed" desc="PDF embebido inline." prompt="Agrega un PDFEmbed para mostrar un documento PDF. El archivo está en /public/images/mi-documento.pdf."
        dark={<PDFEmbed src="" title="Documento técnico" height={200} variant="dark" />}
        light={<PDFEmbed src="" title="Propuesta comercial" height={200} variant="light" />}
      />

      <Dual title="FormEmbed" desc="Typeform, Tally o Google Forms." prompt="Agrega un FormEmbed con mi formulario de Tally/Typeform. La URL es [pega tu URL aquí]."
        dark={<FormEmbed url="" title="Encuesta de satisfacción" height={200} variant="dark" />}
        light={<FormEmbed url="" title="Registro al evento" height={200} variant="light" />}
      />

      <Dual title="GoogleDocsEmbed" desc="Google Docs, Sheets o Slides." prompt="Agrega un GoogleDocsEmbed para mostrar mi Google Sheet. La URL es [pega tu URL de sharing aquí]."
        dark={<GoogleDocsEmbed url="" type="sheet" title="Proyecciones financieras" height={200} variant="dark" />}
        light={<GoogleDocsEmbed url="" type="doc" title="Propuesta de proyecto" height={200} variant="light" />}
      />

      <Dual title="MiniChart" desc="Chart compacto embebible (sparkline, donut, bar)."
        dark={<div className="grid grid-cols-3 gap-4"><div className="bg-card/60 rounded-xl p-4"><p className="text-muted text-[10px] mb-2">Sparkline</p><MiniChart type="sparkline" data={[20,35,28,45,42,60,55,70]} height={60} /></div><div className="bg-card/60 rounded-xl p-4"><p className="text-muted text-[10px] mb-2">Donut</p><MiniChart type="donut" data={[65,20,15]} height={60} /></div><div className="bg-card/60 rounded-xl p-4"><p className="text-muted text-[10px] mb-2">Bar</p><MiniChart type="bar" data={[30,50,40,70,55]} height={60} /></div></div>}
        light={<div className="grid grid-cols-3 gap-4"><div className="bg-white/60 rounded-xl p-4"><p className="text-muted text-[10px] mb-2">Sparkline</p><MiniChart type="sparkline" data={[20,35,28,45,42,60,55,70]} height={60} /></div><div className="bg-white/60 rounded-xl p-4"><p className="text-muted text-[10px] mb-2">Donut</p><MiniChart type="donut" data={[65,20,15]} height={60} /></div><div className="bg-white/60 rounded-xl p-4"><p className="text-muted text-[10px] mb-2">Bar</p><MiniChart type="bar" data={[30,50,40,70,55]} height={60} /></div></div>}
      />

      <Dual title="FloorPlanViewer" desc="Imagen con hotspots interactivos." prompt="Agrega un FloorPlanViewer con mi plano arquitectónico. La imagen está en /public/images/plano.png. Agrega 3-4 hotspots con coordenadas, labels y descripciones."
        dark={<FloorPlanViewer image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Plano" hotspots={[{x:25,y:30,label:"Sala",description:"45 m²",icon:"living"},{x:65,y:50,label:"Cocina",description:"Isla central",icon:"kitchen"}]} variant="dark" />}
        light={<FloorPlanViewer image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Plano" hotspots={[{x:25,y:30,label:"Sala",description:"45 m²",icon:"living"},{x:65,y:50,label:"Cocina",description:"Isla central",icon:"kitchen"}]} variant="light" />}
      />

      <Dual title="CalendlyEmbed" desc="Widget de agendar reuniones." prompt="Agrega un CalendlyEmbed para que los visitantes agenden una reunión. Mi URL de Calendly es [tu URL aquí]."
        dark={<CalendlyEmbed url="" height={200} variant="dark" />}
        light={<CalendlyEmbed url="" height={200} variant="light" />}
      />

      <Dual title="SocialEmbed" desc="Posts de Twitter, Instagram, LinkedIn." prompt="Agrega un SocialEmbed con un post de Twitter/X. La URL del tweet es [pega URL aquí]."
        dark={<div className="bg-card/60 rounded-2xl p-6 text-center"><span className="material-symbols-outlined text-primary text-[36px] mb-2 block">share</span><p className="text-fg-light/40 text-sm">Pega una URL de Twitter, Instagram o LinkedIn</p></div>}
        light={<div className="bg-white/60 rounded-2xl p-6 text-center"><span className="material-symbols-outlined text-primary text-[36px] mb-2 block">share</span><p className="text-fg-dark/40 text-sm">Pega una URL de Twitter, Instagram o LinkedIn</p></div>}
      />

      <Dual title="ImageCompare" desc="Antes/después con slider drag." prompt="Agrega un ImageCompare con dos imágenes para comparar antes y después. Las imágenes están en /public/images/antes.jpg y /public/images/despues.jpg."
        dark={<ImageCompare before={{ src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", label: "Antes" }} after={{ src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", label: "Después" }} height={250} />}
        light={<ImageCompare before={{ src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", label: "Original" }} after={{ src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", label: "Remodelado" }} height={250} />}
      />

      {/* Footer */}
      <section className="bg-bg-dark text-fg-light px-6 sm:px-10 py-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="text-sm">Inicio</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/customize" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">Personalizar</a>
            <a href="/demo" className="text-fg-light/30 text-sm hover:text-fg-light/60 transition-colors">Demo</a>
          </div>
          <span className="font-mono text-xs text-fg-light/20">55 componentes · Slidelab</span>
        </div>
      </section>
    </div>
  );
}
