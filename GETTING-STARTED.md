# Empezar con Slidelab

Sigue estos pasos para crear tu primera presentación profesional.

## Requisitos

- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **Claude Code** — [claude.ai/claude-code](https://claude.ai/claude-code)
- **Cuenta de Vercel** (gratis) — [vercel.com](https://vercel.com)

## 1. Instala el proyecto

```bash
git clone <url-del-repo> mi-presentacion
cd mi-presentacion
npm install
npm run dev
```

Abre `http://localhost:3000` para ver la demo.

## 2. Personaliza tu marca

Abre `http://localhost:3000/customize` en tu navegador.

1. **Sube tu logo** — Slidelab detecta los colores automáticamente y te sugiere paletas
2. **Ajusta colores** — Primary, fondos, textos
3. **Elige tipografías** — Display (títulos), Body (texto), Mono (números)
4. **Copia la instrucción** — El botón "Copiar instrucción" genera un prompt listo para Claude Code

Pega la instrucción en Claude Code y él aplicará los cambios en tu proyecto.

## 3. Crea tu presentación

Abre Claude Code en la carpeta de tu proyecto y dile qué necesitas:

```
Crea un pitch deck de 10 slides para una startup de fintech.
La empresa se llama "PayFlow" y facilita pagos entre empresas.
Incluye: cover, problema, solución, mercado ($47B TAM), tracción (MRR $420K),
competencia vs 3 competidores, pricing 3 tiers, roadmap Q1-Q4, equipo 4 personas,
y slide de inversión pidiendo $5M.
```

Claude Code conoce los 55+ componentes y creará los archivos automáticamente.

### Tips para mejores resultados

- **Sé específico con los datos** — "Revenue de $2.4M" es mejor que "buenos ingresos"
- **Menciona el tipo de slide** — "Un slide con KPIs mostrando..." ayuda a elegir el componente correcto
- **Pide cambios incrementales** — "Cambia el slide 3 para que tenga una imagen a la izquierda" es más efectivo que rehacer todo

## 4. Explora los componentes

Visita `http://localhost:3000/components` para ver los 55+ componentes en acción:

- **Datos:** KPIRow, AnimatedCounter, FunnelChart, DataCallout, MiniChart
- **Cards:** FeatureCard, StatCard, TestimonialCard, CaseStudyCard
- **Layout:** SplitSlide, CardGrid, FeatureShowcase
- **Proceso:** ProcessFlow, TimelineBlock, MilestoneTimeline, StepByStep
- **Precios:** PricingTable, ComparisonTable
- **Visual:** ImageZoom, ImageGrid, BeforeAfter, FloorPlanViewer
- **Personas:** TeamGrid, OrgChart, SpeakerCard
- **Embeds:** Calendly, Spotify, Figma, Google Docs, PDF, Video, Audio

Cada componente tiene un botón "Usar" que copia un prompt sugerido para Claude Code.

## 5. Ejemplos de referencia

Visita `http://localhost:3000/ejemplos` para ver 6+ presentaciones completas:

| Ejemplo | Industria | Slides |
|---------|-----------|--------|
| Metrica AI | Startup / SaaS | 12 |
| Vertex Medical | Reporte anual | 10 |
| Bosque Verde | Real estate | 10 |
| DesignConf 2026 | Evento | 10 |
| Estudio Forma | Arquitectura | 10 |
| Apex Consulting | Consultoría | 10 |

Úsalos como inspiración o dile a Claude Code: "Quiero algo similar al ejemplo de startup pero para mi empresa".

## 6. Deploy

Cuando tu presentación esté lista:

```bash
# Primera vez
npx vercel

# Producción
npx vercel --prod
```

Tu presentación estará en línea en segundos. Comparte el link.

## 7. Atajos de teclado

| Tecla | Acción |
|-------|--------|
| → / Espacio | Siguiente slide |
| ← | Slide anterior |
| F | Pantalla completa |
| Esc | Salir de pantalla completa |
| Home | Primer slide |
| End | Último slide |

En mobile: swipe izquierda/derecha.

## Estructura del proyecto

```
src/
├── config/deck.config.ts    → Tu tema (colores, fonts, título)
├── app/
│   ├── layout.tsx           → Carga fonts y CSS variables
│   ├── page.tsx             → Ensambla tus slides
│   └── globals.css          → Estilos base
├── components/              → 55+ componentes reutilizables
├── slides/                  → Tus slides (un archivo por slide)
├── hooks/                   → Navegación (teclado, touch)
└── styles/animations.css    → Animaciones CSS
```

## Necesitas ayuda?

- **Dile a Claude Code:** "Lee el skill create-presentation" para que tenga todo el contexto
- **Dile a Claude Code:** "Lee el skill component-guide" para que conozca todos los componentes con sus props
- **Revisa los ejemplos** en `/ejemplos` para ver cómo se estructura cada tipo de presentación
