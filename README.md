# Slidelab

Template profesional para crear presentaciones web interactivas. Construido con Next.js, desplegable en Vercel en minutos.

## Quick Start

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/slidelab.git
cd slidelab

# 2. Instala dependencias
npm install

# 3. Abre el servidor local
npm run dev

# 4. Edita la configuración en src/config/deck.config.ts

# 5. Personaliza los slides en src/slides/
```

Abre [http://localhost:3000](http://localhost:3000) para ver tu presentación.

## Qué incluye

- **Navegación completa** — Flechas del teclado, swipe en móvil, pantalla completa (tecla F)
- **6 slides de ejemplo** — Portada, concepto con cards, métricas con gráfica, timeline, producto con lupa interactiva, contacto
- **Componentes listos para usar** — StatCard, FeatureCard, QuoteBlock, TimelineBlock, ImageZoom, ChartWrapper, AnimatedCounter
- **Animaciones CSS** — Entradas escalonadas, fade-ins, counters animados, shimmer, glow
- **Tema configurable** — Un solo archivo para cambiar colores, tipografía y comportamiento
- **Responsive** — Se ve bien en móvil, tablet y desktop
- **Deploy en Vercel** — Zero config, funciona directo

## Estructura del proyecto

```
src/
├── config/deck.config.ts    ← Edita aquí para personalizar
├── slides/                  ← Un archivo por slide
├── components/              ← Componentes reutilizables
├── hooks/                   ← Lógica de navegación
├── styles/animations.css    ← Animaciones CSS
└── app/page.tsx             ← Ensambla los slides
```

## Cómo agregar un slide

1. Crea un archivo en `src/slides/` (ej: `Slide07Nuevo.tsx`)
2. Usa el componente `<Slide>` como wrapper:

```tsx
import { Slide } from "@/components/Slide";

export function Slide07Nuevo() {
  return (
    <Slide variant="dark">
      <h2>Mi nuevo slide</h2>
    </Slide>
  );
}
```

3. Agrégalo en `src/app/page.tsx`:

```tsx
import { Slide07Nuevo } from "@/slides/Slide07Nuevo";

// Dentro de <SlideLayout>:
<Slide07Nuevo />
```

## Atajos de teclado

| Tecla | Acción |
|-------|--------|
| → / Espacio | Siguiente slide |
| ← | Slide anterior |
| F | Pantalla completa |
| Escape | Salir de pantalla completa |
| Home | Primer slide |
| End | Último slide |

## Skills para Claude Code

En la carpeta `.skills/` hay guías paso a paso para tareas comunes:

- `responsive.md` — Hacer responsive un slide
- `add-animation.md` — Agregar animaciones
- `add-chart.md` — Agregar gráficas con Recharts
- `add-video.md` — Embeber video
- `add-map.md` — Agregar Google Maps
- `deploy-vercel.md` — Desplegar en Vercel
- `customize-theme.md` — Cambiar colores y tipografía

## Stack

- [Next.js 16](https://nextjs.org/) — Framework React
- [Tailwind CSS 4](https://tailwindcss.com/) — Estilos utilitarios
- [Recharts](https://recharts.org/) — Gráficas
- [Material Symbols](https://fonts.google.com/icons) — Íconos
- [Vercel](https://vercel.com/) — Deploy

## Deploy

```bash
npm i -g vercel
vercel
```

O conecta tu repo de GitHub en [vercel.com](https://vercel.com) para deploys automáticos.
