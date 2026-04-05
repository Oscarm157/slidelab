# Component Guide — Referencia rápida de componentes

Slidelab tiene 55+ componentes reutilizables. Esta guía lista cada uno con sus props para que puedas usarlos sin leer el código fuente.

## Convenciones generales
- La mayoría soporta `variant?: "dark" | "light"` para adaptarse al fondo del slide
- Íconos: Material Symbols Outlined (`<span className="material-symbols-outlined">icon_name</span>`)
- Animaciones: motion.dev para interactivas, clases CSS para simples
- Import: `import { ComponentName } from "@/components/ComponentName"`

---

## Infraestructura (no usar directamente en contenido)

### Slide
```tsx
<Slide variant="dark" centered={false} className="">
  {children}
</Slide>
```
Wrapper base de cada slide. Siempre usa esto como contenedor raíz.

### SlideLayout
```tsx
<SlideLayout>{children}</SlideLayout>
```
Contenedor principal que maneja navegación, teclado, touch, fullscreen. Se usa en `page.tsx`.

### SlideNavigation, ProgressBar, FullscreenToggle
Componentes internos de SlideLayout. No los uses directamente.

### StaggerReveal + StaggerItem
```tsx
<StaggerReveal className="">
  <StaggerItem>Elemento 1</StaggerItem>
  <StaggerItem>Elemento 2</StaggerItem>
</StaggerReveal>
```
Anima hijos secuencialmente con spring easing. Úsalo para títulos y listas.

### SectionHeader
```tsx
<SectionHeader number="01" title="Título" subtitle="Subtítulo opcional" />
```
Encabezado de sección con número decorativo y línea divisoria.

---

## Cards

### FeatureCard
```tsx
<FeatureCard icon="rocket_launch" title="Título" description="Descripción" variant="dark" />
```
Card de feature con ícono, título y descripción. Hover lift animation.

### StatCard
```tsx
<StatCard value={42} label="Usuarios" prefix="$" suffix="M" decimals={1} animate variant="dark" />
```
Número grande animado con label. Usa AnimatedCounter internamente.

### ValueCard
```tsx
<ValueCard icon="star" title="Título" description="Descripción" number="01" variant="dark" />
```
Card de propuesta de valor con número decorativo de fondo.

### CaseStudyCard
```tsx
<CaseStudyCard
  title="Proyecto X"
  client="Empresa Y"
  image="https://..."
  description="Descripción del caso"
  metrics={[{ label: "ROI", value: "340%" }]}
  tags={["SaaS", "B2B"]}
  variant="dark"
/>
```
Case study con imagen, métricas y tags.

### TestimonialCard
```tsx
<TestimonialCard
  quote="Excelente producto..."
  author="Juan Pérez"
  role="CEO, Empresa X"
  photo="https://..."
  rating={5}
  variant="dark"
/>
```
Testimonio con quote, autor, foto y estrellas.

### SpeakerCard
```tsx
<SpeakerCard
  name="Ana García"
  title="CTO"
  organization="TechCo"
  photo="https://..."
  topic="IA en producción"
  time="10:00 - 11:00"
  bio="Bio opcional..."
  variant="dark"
/>
```
Card de conferencista con foto, tema y horario.

---

## Texto y Listas

### QuoteBlock
```tsx
<QuoteBlock text="La cita aquí..." author="Autor opcional" variant="dark" />
```
Bloque de cita con borde izquierdo decorativo.

### IconList
```tsx
<IconList
  items={[
    { icon: "check_circle", text: "Feature 1", subtext: "Detalle" },
    { icon: "check_circle", text: "Feature 2" },
  ]}
  variant="dark"
/>
```
Lista con íconos a la izquierda.

### ProConList
```tsx
<ProConList
  pros={[{ text: "Ventaja 1" }, { text: "Ventaja 2" }]}
  cons={[{ text: "Desventaja 1" }]}
  prosLabel="Ventajas"
  consLabel="Desventajas"
  variant="dark"
/>
```
Dos columnas: pros (verde) y contras (ámbar).

---

## Datos y Métricas

### AnimatedCounter
```tsx
<AnimatedCounter target={1500} prefix="$" suffix="K" duration={2} decimals={0} />
```
Número que cuenta animado. Úsalo dentro de otros componentes o solo.

### KPIRow
```tsx
<KPIRow
  items={[
    { label: "Revenue", value: 420, prefix: "$", suffix: "K", decimals: 0, icon: "payments", change: 32 },
    { label: "Usuarios", value: 12500, icon: "group" },
  ]}
  variant="dark"
/>
```
Fila horizontal de KPIs con AnimatedCounter, ícono y porcentaje de cambio.

### DataCallout
```tsx
<DataCallout
  value={47}
  prefix="$"
  suffix="B"
  decimals={0}
  label="Mercado total"
  context="Creciendo 18% anual"
  icon="trending_up"
  variant="dark"
/>
```
Número hero grande con contexto. Para datos que deben dominar el slide.

### MetricDelta
```tsx
<MetricDelta label="MRR" from={280} to={420} prefix="$" suffix="K" decimals={0} variant="dark" />
```
Muestra transición before→after con delta porcentual.

### MiniChart
```tsx
<MiniChart type="sparkline" data={[10, 25, 18, 30, 42]} labels={["Ene","Feb","Mar","Abr","May"]} color="#6366F1" height={80} />
```
Gráfica compacta inline. Tipos: `sparkline` (area), `donut`, `bar`.

### ComparisonTable
```tsx
<ComparisonTable
  columns={[
    { label: "Feature" },
    { label: "Nosotros", highlighted: true },
    { label: "Competidor A" },
  ]}
  rows={[
    { feature: "Precio", values: ["$99", "$299"] },
    { feature: "Soporte 24/7", values: [true, false] },
  ]}
  variant="dark"
/>
```
Tabla comparativa. Valores `boolean` se muestran como check/x. `highlighted` resalta la columna.

---

## Gráficas

### ChartWrapper
```tsx
<ChartWrapper height={300}>
  <BarChart data={data}>...</BarChart>
</ChartWrapper>
```
Contenedor responsive para componentes de Recharts.

### FunnelChart
```tsx
<FunnelChart
  stages={[
    { label: "Visitantes", value: 100000 },
    { label: "Registros", value: 15000 },
    { label: "Clientes", value: 2500 },
  ]}
  variant="dark"
/>
```
Embudo animado con escala logarítmica y conversion rates.

---

## Procesos y Timelines

### ProcessFlow
```tsx
<ProcessFlow
  steps={[
    { icon: "search", label: "Investigar", description: "Análisis inicial", status: "completed" },
    { icon: "edit", label: "Diseñar", description: "Propuesta visual", status: "active" },
    { icon: "code", label: "Construir", status: "upcoming" },
    { icon: "rocket_launch", label: "Lanzar", status: "upcoming" },
  ]}
  variant="dark"
/>
```
Flujo horizontal de 4 pasos con indicadores de estado.

### TimelineBlock
```tsx
<TimelineBlock
  phases={[
    { icon: "search", label: "Fase 1", title: "Descubrimiento", description: "..." },
    { icon: "design_services", label: "Fase 2", title: "Diseño", description: "..." },
  ]}
  variant="dark"
/>
```
Timeline horizontal de fases con íconos y descripciones.

### MilestoneTimeline
```tsx
<MilestoneTimeline
  milestones={[
    { date: "Q1 2025", title: "MVP", description: "...", status: "completed", icon: "check" },
    { date: "Q2 2025", title: "Beta", description: "...", status: "current", icon: "play_arrow" },
    { date: "Q3 2025", title: "Launch", status: "upcoming" },
  ]}
  variant="dark"
/>
```
Timeline vertical con milestones y estados (completed/current/upcoming).

### StepByStep
```tsx
<StepByStep
  steps={[
    { title: "Paso 1", description: "...", image: "https://..." },
    { title: "Paso 2", description: "..." },
  ]}
  variant="dark"
/>
```
Guía de pasos con texto e imagen alternados.

---

## Precios

### PricingTable
```tsx
<PricingTable
  tiers={[
    {
      name: "Starter",
      price: "$29",
      period: "/mes",
      description: "Para equipos pequeños",
      features: ["5 usuarios", "10 GB", "Soporte email"],
      cta: "Empezar",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$99",
      period: "/mes",
      description: "Para empresas",
      features: ["Ilimitados", "100 GB", "Soporte 24/7", "API"],
      cta: "Elegir Pro",
      highlighted: true,
    },
  ]}
  variant="dark"
/>
```
Cards de precios con features, CTA y tier destacado.

---

## Personas

### TeamGrid
```tsx
<TeamGrid
  members={[
    { name: "Ana García", role: "CEO", photo: "https://...", bio: "Bio...", social: { linkedin: "url", twitter: "url" } },
  ]}
  columns={3}
  variant="dark"
/>
```
Grid de equipo con fotos, bio y redes sociales.

### OrgChart
```tsx
<OrgChart
  root={{
    name: "CEO",
    title: "Director General",
    photo: "https://...",
    children: [
      { name: "CTO", title: "Tecnología", photo: "https://...", children: [] },
      { name: "CFO", title: "Finanzas", photo: "https://...", children: [] },
    ],
  }}
  variant="dark"
/>
```
Organigrama jerárquico recursivo.

---

## Visual

### ImageZoom
```tsx
<ImageZoom src="https://..." alt="Descripción" lensSize={150} zoomLevel={2.5} />
```
Imagen con lupa de zoom al hover.

### ImageGrid
```tsx
<ImageGrid
  images={[
    { src: "https://...", alt: "Foto 1", caption: "Opcional" },
  ]}
  columns={3}
  variant="dark"
/>
```
Grid de imágenes responsive con captions opcionales.

### LogoCloud
```tsx
<LogoCloud
  logos={[{ name: "Empresa", src: "https://..." }]}
  columns={4}
  grayscale
  variant="dark"
/>
```
Grid de logos con modo escala de grises y hover color.

### BeforeAfter
```tsx
<BeforeAfter
  before={{ title: "Antes", description: "...", image: "https://...", stats: [{ label: "Tiempo", value: "3 días" }] }}
  after={{ title: "Después", description: "...", image: "https://...", stats: [{ label: "Tiempo", value: "90 min" }] }}
  variant="dark"
/>
```
Comparación lado a lado con stats y decoración.

### FloorPlanViewer
```tsx
<FloorPlanViewer
  image="https://..."
  alt="Plano"
  hotspots={[
    { x: 25, y: 30, label: "Sala", description: "65m² con doble altura" },
  ]}
  variant="dark"
/>
```
Visor de planos con hotspots interactivos numerados.

### ImageCompare
```tsx
<ImageCompare
  before={{ src: "https://...", label: "Antes" }}
  after={{ src: "https://...", label: "Después" }}
  height={400}
  variant="dark"
/>
```
Comparador de imágenes con slider arrastrable.

---

## Layout

### SplitSlide
```tsx
<SplitSlide
  left={<div>Contenido izq</div>}
  right={<div>Contenido der</div>}
  ratio="60/40"
  imageSrc="https://..."
  imagePosition="right"
  variant="dark"
/>
```
Dos columnas con ratio configurable y opción de imagen de fondo.

### CardGrid
```tsx
<CardGrid columns={3} gap="md">{children}</CardGrid>
```
Grid responsive para cards. Columns: 2|3|4. Gap: sm|md|lg.

### FeatureShowcase
```tsx
<FeatureShowcase
  title="Título"
  subtitle="Subtítulo"
  image="https://..."
  features={[
    { icon: "speed", title: "Rápido", description: "..." },
  ]}
  imagePosition="left"
  variant="dark"
/>
```
Dos columnas: imagen + lista de features con íconos.

### MatrixGrid
```tsx
<MatrixGrid
  cells={[
    { title: "Alta prioridad", description: "...", icon: "priority_high", highlight: true },
  ]}
  size={2}
  axisLabels={{ top: "Alto impacto", bottom: "Bajo impacto", left: "Bajo esfuerzo", right: "Alto esfuerzo" }}
  variant="dark"
/>
```
Matriz 2x2 o 3x3 con ejes etiquetados.

### SpecSheet
```tsx
<SpecSheet
  title="Especificaciones"
  specs={[
    { label: "Área", value: "220 m²", icon: "square_foot", highlight: true, progress: 80 },
  ]}
  columns={2}
  variant="dark"
/>
```
Hoja de specs con barras de progreso opcionales.

---

## Eventos

### AgendaList
```tsx
<AgendaList
  items={[
    { time: "09:00", title: "Keynote", speaker: "Ana García", track: "Main", icon: "mic", duration: "45 min" },
  ]}
  variant="dark"
/>
```
Agenda de evento con horarios, tracks y speakers.

### CountdownTimer
```tsx
<CountdownTimer targetDate="2026-06-15T09:00:00" label="Faltan" variant="dark" />
```
Reloj regresivo en tiempo real (días, horas, minutos, segundos).

### MapEmbed
```tsx
<MapEmbed
  image="https://..."
  address="Av. Principal 123, Ciudad"
  proximity={[
    { place: "Aeropuerto", time: "15 min" },
    { place: "Centro", time: "5 min" },
  ]}
  variant="dark"
/>
```
Mapa con tarjeta de ubicación y tiempos de cercanía. También acepta `embedUrl` para Google Maps iframe.

---

## Embeds

### CalendlyEmbed
```tsx
<CalendlyEmbed url="https://calendly.com/tu-usuario/30min" height={600} variant="dark" />
```

### SpotifyEmbed
```tsx
<SpotifyEmbed url="https://open.spotify.com/track/..." compact variant="dark" />
```

### FigmaEmbed
```tsx
<FigmaEmbed url="https://www.figma.com/file/..." title="Diseño" height={500} variant="dark" />
```

### FormEmbed
```tsx
<FormEmbed url="https://tally.so/r/..." title="Formulario" height={500} variant="dark" />
```
Soporta: Typeform, Tally, Google Forms.

### SocialEmbed
```tsx
<SocialEmbed platform="twitter" url="https://twitter.com/..." height={400} variant="dark" />
```
Plataformas: twitter, instagram, linkedin.

### GoogleDocsEmbed
```tsx
<GoogleDocsEmbed url="https://docs.google.com/..." type="doc" title="Documento" height={500} variant="dark" />
```
Tipos: doc, sheet, slide.

### PDFEmbed
```tsx
<PDFEmbed src="/documento.pdf" title="PDF" height={500} variant="dark" />
```

### LottiePlayer
```tsx
<LottiePlayer src="https://lottie.host/..." height={300} loop autoplay variant="dark" />
```

### ModelViewer
```tsx
<ModelViewer src="/modelo.glb" poster="/poster.jpg" alt="Modelo 3D" height={400} variant="dark" />
```

### AudioPlayer
```tsx
<AudioPlayer src="/audio.mp3" title="Episodio 1" artist="Podcast" cover="https://..." variant="dark" />
```
