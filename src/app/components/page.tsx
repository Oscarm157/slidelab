"use client";

import { SectionHeader } from "@/components/SectionHeader";
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
import { MiniChart } from "@/components/MiniChart";
import { BeforeAfter } from "@/components/BeforeAfter";
import { TeamGrid } from "@/components/TeamGrid";
import { SpeakerCard } from "@/components/SpeakerCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ValueCard } from "@/components/ValueCard";
import { OrgChart } from "@/components/OrgChart";
import { CardGrid } from "@/components/CardGrid";
import { IconList } from "@/components/IconList";
import { ProcessFlow } from "@/components/ProcessFlow";
import { FunnelChart } from "@/components/FunnelChart";
import { MatrixGrid } from "@/components/MatrixGrid";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { StepByStep } from "@/components/StepByStep";
import { PricingTable as PT } from "@/components/PricingTable";
import { LogoCloud } from "@/components/LogoCloud";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { ProConList } from "@/components/ProConList";
import { ImageGrid } from "@/components/ImageGrid";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SpecSheet } from "@/components/SpecSheet";
import { AgendaList } from "@/components/AgendaList";
import { CountdownTimer } from "@/components/CountdownTimer";
import { MapEmbed } from "@/components/MapEmbed";
import { FloorPlanViewer } from "@/components/FloorPlanViewer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function Section({ title, description, children, variant = "light" }: {
  title: string; description: string; children: React.ReactNode; variant?: "dark" | "light";
}) {
  const bg = variant === "dark" ? "bg-bg-dark text-fg-light" : "bg-bg-light text-fg-dark";
  return (
    <section className={`px-6 sm:px-10 md:px-14 py-14 sm:py-18 ${bg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-1">{title}</p>
          <p className="text-muted text-sm max-w-lg">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function ComponentsPage() {
  return (
    <div className="w-full min-h-screen overflow-y-auto">
      {/* Hero */}
      <section className="bg-bg-dark text-fg-light px-6 sm:px-10 md:px-14 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <StaggerReveal>
            <StaggerItem>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-primary/40" />
                <span className="font-mono text-[11px] tracking-[0.35em] text-primary uppercase">Slidelab</span>
                <div className="h-px w-16 bg-primary/40" />
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">Componentes</h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-fg-light/50 text-lg max-w-xl">44 componentes para construir cualquier tipo de presentación profesional.</p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* ══════ ORIGINALES ══════ */}

      <Section title="SectionHeader" description="Encabezado con número, línea decorativa, título y subtítulo.">
        <SectionHeader number="01" title="Título de la sección" subtitle="Subtítulo descriptivo que acompaña al título." />
      </Section>

      <Section title="FeatureCard" description="Card con ícono, título y descripción. Hover con elevación spring." variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard icon="water_drop" title="Captación pluvial" description="Sistema que cubre el 40% del consumo de agua." variant="dark" />
          <FeatureCard icon="air" title="Ventilación cruzada" description="Orientación norte-sur, reduce climatización." variant="dark" />
          <FeatureCard icon="park" title="Jardín central" description="360 m² de área verde con especies nativas." variant="dark" />
        </div>
      </Section>

      <Section title="StatCard" description="Métrica con contador animado.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value={198} suffix=" ud." label="Unidades vendidas" variant="light" />
          <StatCard value={52} suffix="%" label="Crecimiento" variant="light" />
          <StatCard value={4.2} suffix="M" prefix="$" label="Facturación" decimals={1} variant="light" />
          <StatCard value={96} suffix="%" label="Retención" variant="light" />
        </div>
      </Section>

      <Section title="QuoteBlock" description="Cita estilizada con borde accent y autor opcional." variant="dark">
        <div className="max-w-2xl">
          <QuoteBlock text="Un proyecto donde la arquitectura responde al clima, no lo combate." author="Estudio de arquitectura" variant="dark" />
        </div>
      </Section>

      <Section title="TimelineBlock" description="Timeline horizontal de 4 fases con línea conectora.">
        <TimelineBlock phases={[
          { icon: "search", title: "Diagnóstico", description: "Análisis inicial.", label: "Sem 1–2" },
          { icon: "architecture", title: "Diseño", description: "Prototipos.", label: "Sem 3–5" },
          { icon: "code", title: "Desarrollo", description: "Sprints.", label: "Sem 6–10" },
          { icon: "rocket_launch", title: "Lanzamiento", description: "Deploy.", label: "Sem 11–12" },
        ]} variant="light" />
      </Section>

      <Section title="AnimatedCounter" description="Contador animado con easing cubic." variant="dark">
        <div className="flex items-end gap-12 flex-wrap">
          <div><div className="text-gradient font-mono text-5xl sm:text-6xl font-medium"><AnimatedCounter target={15} suffix="%" /></div><p className="text-muted text-sm mt-2">Rendimiento</p></div>
          <div><div className="text-gradient font-mono text-5xl sm:text-6xl font-medium"><AnimatedCounter target={8.4} prefix="$" suffix="M" decimals={1} /></div><p className="text-muted text-sm mt-2">Facturación</p></div>
          <div><div className="text-gradient font-mono text-5xl sm:text-6xl font-medium"><AnimatedCounter target={30} /></div><p className="text-muted text-sm mt-2">Meses</p></div>
        </div>
      </Section>

      <Section title="ChartWrapper" description="Wrapper responsive para gráficas Recharts.">
        <div className="bg-white/80 rounded-2xl p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <ChartWrapper height={250}>
            <BarChart data={[{ m: "Ene", v: 40 }, { m: "Feb", v: 65 }, { m: "Mar", v: 80 }, { m: "Abr", v: 95 }]} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="m" stroke="#999" fontSize={12} tickLine={false} />
              <YAxis stroke="#999" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "#fff", border: "none", borderRadius: 12, fontSize: 13, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }} />
              <Bar dataKey="v" fill="var(--t-primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ChartWrapper>
        </div>
      </Section>

      <Section title="ImageZoom" description="Lupa interactiva sobre imágenes." variant="dark">
        <div className="max-w-xl">
          <ImageZoom src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Detalle" />
        </div>
      </Section>

      {/* ══════ NUEVOS — DATA & MÉTRICAS ══════ */}

      <Section title="ComparisonTable" description="Tabla comparativa side-by-side con checks y valores.">
        <ComparisonTable
          columns={[{ label: "Básico" }, { label: "Pro", highlighted: true }, { label: "Enterprise" }]}
          rows={[
            { feature: "Usuarios", values: ["5", "25", "Ilimitados"] },
            { feature: "Almacenamiento", values: ["10 GB", "100 GB", "1 TB"] },
            { feature: "Soporte prioritario", values: [false, true, true] },
            { feature: "API access", values: [false, false, true] },
            { feature: "SSO", values: [false, true, true] },
          ]}
          variant="light"
        />
      </Section>

      <Section title="PricingTable" description="Cards de precios con plan destacado y CTA." variant="dark">
        <PricingTable
          tiers={[
            { name: "Starter", price: "$29", period: "mes", description: "Para equipos pequeños", features: ["5 usuarios", "10 GB", "Email support"], cta: "Comenzar" },
            { name: "Pro", price: "$79", period: "mes", description: "Para equipos en crecimiento", features: ["25 usuarios", "100 GB", "Soporte prioritario", "API access"], highlighted: true, cta: "Elegir Pro" },
            { name: "Enterprise", price: "$199", period: "mes", description: "Para grandes organizaciones", features: ["Ilimitados", "1 TB", "Soporte dedicado", "SSO", "SLA"], cta: "Contactar" },
          ]}
          variant="dark"
        />
      </Section>

      <Section title="KPIRow" description="Strip horizontal de métricas con trends y dividers.">
        <KPIRow
          items={[
            { label: "Ingresos", value: 4.2, prefix: "$", suffix: "M", decimals: 1, change: 18, icon: "payments" },
            { label: "Usuarios", value: 12500, change: 24, icon: "group" },
            { label: "Retención", value: 96, suffix: "%", change: 3, icon: "loyalty" },
            { label: "NPS", value: 72, change: -2, icon: "sentiment_satisfied" },
          ]}
          variant="light"
        />
      </Section>

      <Section title="DataCallout" description="Métrica gigante hero con glow y contexto." variant="dark">
        <DataCallout value={8.4} prefix="$" suffix="M" decimals={1} label="Facturación proyectada" context="vs $5.1M año anterior (+64%)" icon="trending_up" variant="dark" />
      </Section>

      <Section title="MetricDelta" description="Card compacta mostrando cambio from → to con porcentaje.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricDelta label="Ingresos" from={2.1} to={4.2} prefix="$" suffix="M" decimals={1} variant="light" />
          <MetricDelta label="Usuarios activos" from={5200} to={12500} variant="light" />
          <MetricDelta label="Costo por lead" from={45} to={28} prefix="$" variant="light" />
        </div>
      </Section>

      <Section title="MiniChart" description="Charts compactos embebibles: sparkline, donut y bar." variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/80 rounded-2xl p-5">
            <p className="text-muted text-xs mb-3">Sparkline</p>
            <MiniChart type="sparkline" data={[20, 35, 28, 45, 42, 60, 55, 70]} height={80} />
          </div>
          <div className="bg-card/80 rounded-2xl p-5">
            <p className="text-muted text-xs mb-3">Donut</p>
            <MiniChart type="donut" data={[65, 20, 15]} height={80} />
          </div>
          <div className="bg-card/80 rounded-2xl p-5">
            <p className="text-muted text-xs mb-3">Bar</p>
            <MiniChart type="bar" data={[30, 50, 40, 70, 55, 80]} height={80} />
          </div>
        </div>
      </Section>

      <Section title="BeforeAfter" description="Split comparativo antes/después con métricas.">
        <BeforeAfter
          before={{ label: "Antes", description: "Proceso manual con hojas de cálculo.", stats: [{ label: "Tiempo", value: "3 días" }, { label: "Errores", value: "12%" }] }}
          after={{ label: "Después", description: "Automatización completa del flujo.", stats: [{ label: "Tiempo", value: "2 horas" }, { label: "Errores", value: "0.5%" }] }}
          variant="light"
        />
      </Section>

      {/* ══════ NUEVOS — PEOPLE ══════ */}

      <Section title="TeamGrid" description="Grid de miembros del equipo con foto, rol y bio." variant="dark">
        <TeamGrid
          members={[
            { name: "Ana García", role: "CEO", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", bio: "15 años en desarrollo inmobiliario." },
            { name: "Carlos López", role: "CTO", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", bio: "Ex-Google, especialista en plataformas." },
            { name: "María Torres", role: "CFO", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", bio: "MBA Stanford, banca de inversión." },
          ]}
          variant="dark"
        />
      </Section>

      <Section title="SpeakerCard" description="Card horizontal de ponente con foto y credenciales.">
        <SpeakerCard name="Dr. Roberto Méndez" title="Director de Innovación" organization="ITESM" photo="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" topic="IA en la industria" time="10:30 AM" bio="Investigador en inteligencia artificial aplicada a procesos industriales." variant="light" />
      </Section>

      <Section title="TestimonialCard" description="Testimonio con avatar, quote y rating de estrellas." variant="dark">
        <div className="max-w-lg">
          <TestimonialCard quote="El equipo entregó antes de tiempo y el resultado superó nuestras expectativas. Recomendado al 100%." author="Laura Sánchez" role="Directora Comercial, Grupo XYZ" photo="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" rating={5} variant="dark" />
        </div>
      </Section>

      <Section title="ValueCard" description="Card de valor o principio con número decorativo grande.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ValueCard icon="lightbulb" title="Innovación" description="Buscamos soluciones donde otros ven limitaciones." number="01" variant="light" />
          <ValueCard icon="handshake" title="Transparencia" description="Cada número, cada decisión, siempre visible." number="02" variant="light" />
          <ValueCard icon="speed" title="Agilidad" description="Ciclos cortos, entregas frecuentes, feedback constante." number="03" variant="light" />
        </div>
      </Section>

      <Section title="OrgChart" description="Organigrama jerárquico con nodos y líneas." variant="dark">
        <OrgChart root={{ name: "CEO", title: "Director General", children: [
          { name: "VP Operaciones", title: "Operaciones", children: [{ name: "Producción", title: "Gerente" }, { name: "Logística", title: "Gerente" }] },
          { name: "VP Comercial", title: "Ventas", children: [{ name: "Marketing", title: "Gerente" }, { name: "Ventas", title: "Gerente" }] },
        ] }} variant="dark" />
      </Section>

      {/* ══════ NUEVOS — PROCESO ══════ */}

      <Section title="ProcessFlow" description="Diagrama de proceso con pasos numerados y estados.">
        <ProcessFlow steps={[
          { title: "Diagnóstico", description: "Análisis inicial", icon: "search", status: "completed" },
          { title: "Diseño", description: "Prototipos", icon: "architecture", status: "completed" },
          { title: "Desarrollo", description: "Implementación", icon: "code", status: "active" },
          { title: "Lanzamiento", description: "Deploy", icon: "rocket_launch", status: "upcoming" },
        ]} variant="light" />
      </Section>

      <Section title="FunnelChart" description="Funnel de conversión con barras proporcionales." variant="dark">
        <FunnelChart stages={[
          { label: "Visitantes", value: 10000 },
          { label: "Leads", value: 3200 },
          { label: "Oportunidades", value: 850 },
          { label: "Clientes", value: 210 },
        ]} variant="dark" />
      </Section>

      <Section title="MatrixGrid" description="Matriz 2x2 para posicionamiento estratégico.">
        <MatrixGrid
          cells={[
            { icon: "star", title: "Alta prioridad", description: "Impacto alto, esfuerzo bajo.", highlight: true },
            { icon: "schedule", title: "Planificar", description: "Impacto alto, esfuerzo alto." },
            { icon: "check_circle", title: "Quick wins", description: "Impacto bajo, esfuerzo bajo." },
            { icon: "do_not_disturb", title: "Evitar", description: "Impacto bajo, esfuerzo alto." },
          ]}
          axisLabels={{ top: "Alto impacto", bottom: "Bajo impacto", left: "Bajo esfuerzo", right: "Alto esfuerzo" }}
          variant="light"
        />
      </Section>

      <Section title="MilestoneTimeline" description="Timeline vertical con fechas, hitos y estados." variant="dark">
        <MilestoneTimeline milestones={[
          { date: "Ene 2025", title: "Constitución", description: "Registro legal y estructura.", icon: "gavel", status: "completed" },
          { date: "Mar 2025", title: "Producto mínimo", description: "Lanzamiento de MVP.", icon: "rocket_launch", status: "completed" },
          { date: "Jun 2025", title: "Ronda seed", description: "Levantamiento de capital.", icon: "payments", status: "current" },
          { date: "Dic 2025", title: "Expansión", description: "3 ciudades nuevas.", icon: "public", status: "upcoming" },
        ]} variant="dark" />
      </Section>

      <Section title="StepByStep" description="Pasos numerados para tutoriales o metodologías.">
        <StepByStep steps={[
          { title: "Descarga el template", description: "Clona el repositorio de Slidelab desde GitHub.", icon: "download" },
          { title: "Personaliza el config", description: "Edita deck.config.ts con tus colores, fonts y título.", icon: "palette" },
          { title: "Crea tus slides", description: "Usa los componentes para armar cada slide de tu presentación.", icon: "dashboard" },
          { title: "Despliega en Vercel", description: "Un comando y tu presentación está en línea.", icon: "cloud_upload" },
        ]} variant="light" />
      </Section>

      {/* ══════ NUEVOS — VENTAS ══════ */}

      <Section title="LogoCloud" description="Grid de logos con efecto grayscale en hover." variant="dark">
        <LogoCloud logos={[
          { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
        ]} columns={4} grayscale variant="dark" />
      </Section>

      <Section title="FeatureShowcase" description="Feature destacada con imagen + lista de bullets.">
        <FeatureShowcase
          title="Dashboard inteligente"
          subtitle="Todo lo que necesitas en una sola vista."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
          features={[
            { icon: "analytics", title: "Métricas en tiempo real", description: "Actualización automática cada 30 segundos." },
            { icon: "notifications", title: "Alertas configurables", description: "Notificaciones por email o Slack." },
            { icon: "download", title: "Exportación", description: "PDF, Excel o conexión directa por API." },
          ]}
          variant="light"
        />
      </Section>

      <Section title="ProConList" description="Pros y contras en dos columnas con color coding." variant="dark">
        <ProConList
          pros={[
            { text: "Implementación en 2 semanas", detail: "vs 3 meses del competidor" },
            { text: "Sin costo de mantenimiento", detail: "Incluido en la suscripción" },
            { text: "Soporte en español 24/7" },
          ]}
          cons={[
            { text: "Requiere capacitación inicial", detail: "4 horas de onboarding" },
            { text: "Mínimo 10 usuarios", detail: "No disponible para individuales" },
          ]}
          variant="dark"
        />
      </Section>

      {/* ══════ NUEVOS — VISUAL ══════ */}

      <Section title="ImageGrid" description="Grid de imágenes con captions y hover scale.">
        <ImageGrid images={[
          { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80", alt: "Edificio", caption: "Fachada principal", span: 2 },
          { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80", alt: "Casa", caption: "Vista frontal" },
          { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80", alt: "Interior", caption: "Sala" },
          { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80", alt: "Piscina", caption: "Área exterior" },
        ]} columns={3} variant="light" />
      </Section>

      <Section title="CaseStudyCard" description="Card de caso de estudio con imagen, métricas y tags." variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CaseStudyCard title="Residencial Aurora" client="Grupo Inmobiliario ABC" image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80" description="Desarrollo de 24 unidades vendidas en 6 meses." metrics={[{ label: "Unidades", value: "24" }, { label: "Tiempo", value: "6 meses" }, { label: "ROI", value: "32%" }]} tags={["Residencial", "Preventa"]} variant="dark" />
          <CaseStudyCard title="Torre Pacífico" client="Desarrollos XYZ" image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" description="Edificio mixto de 12 pisos con ocupación del 95%." metrics={[{ label: "Pisos", value: "12" }, { label: "Ocupación", value: "95%" }]} tags={["Mixto", "Corporativo"]} variant="dark" />
        </div>
      </Section>

      <Section title="SpecSheet" description="Lista de especificaciones label→valor estilo Central Ocho.">
        <div className="max-w-lg">
          <SpecSheet title="Especificaciones técnicas" specs={[
            { label: "Superficie habitable", value: "130 m²", icon: "straighten" },
            { label: "Garage", value: "57 m²", icon: "garage" },
            { label: "Roof privado", value: "50 m²", icon: "roofing", highlight: true },
            { label: "Niveles", value: "3 + roof", icon: "layers" },
            { label: "Recámaras", value: "3", icon: "bed" },
          ]} variant="light" />
        </div>
      </Section>

      {/* ══════ NUEVOS — EVENTOS ══════ */}

      <Section title="AgendaList" description="Agenda con horarios, speakers y tracks." variant="dark">
        <AgendaList items={[
          { time: "09:00", title: "Registro y café", icon: "coffee", duration: "30 min" },
          { time: "09:30", title: "Keynote: El futuro del diseño", speaker: "Ana García", track: "Principal", trackColor: "#8B6914", duration: "45 min" },
          { time: "10:15", title: "Workshop: Prototipado rápido", speaker: "Carlos López", track: "Taller", trackColor: "#2563eb", duration: "90 min" },
          { time: "12:00", title: "Networking lunch", icon: "restaurant", duration: "60 min" },
        ]} variant="dark" />
      </Section>

      <Section title="CountdownTimer" description="Countdown en vivo hacia una fecha.">
        <CountdownTimer targetDate="2026-01-01T00:00:00" label="Próximo lanzamiento" variant="light" />
      </Section>

      <Section title="MapEmbed" description="Mapa con overlay de información." variant="dark">
        <MapEmbed
          embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1234567890"
          address="Av. Principal 420, Col. Centro"
          details={["A 5 min del centro", "Estacionamiento disponible"]}
          variant="dark"
        />
      </Section>

      <Section title="FloorPlanViewer" description="Imagen con hotspots interactivos y tooltips.">
        <FloorPlanViewer
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
          alt="Plano arquitectónico"
          hotspots={[
            { x: 25, y: 30, label: "Sala principal", description: "45 m² con doble altura", icon: "living" },
            { x: 60, y: 40, label: "Cocina", description: "Integral con isla central", icon: "kitchen" },
            { x: 75, y: 70, label: "Terraza", description: "18 m² con vista al jardín", icon: "deck" },
          ]}
          variant="light"
        />
      </Section>

      {/* Footer */}
      <section className="bg-bg-dark text-fg-light px-6 sm:px-10 md:px-14 py-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="text-sm">Volver a la presentación</span>
          </a>
          <span className="font-mono text-xs text-muted">44 componentes · Slidelab</span>
        </div>
      </section>
    </div>
  );
}
