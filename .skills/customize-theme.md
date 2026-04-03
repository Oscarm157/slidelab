# Skill: Personalizar el tema visual

## Cambiar colores

Edita `src/config/deck.config.ts`:

```ts
theme: {
  primary: "#CC0000",        // Rojo en vez de dorado
  primaryLight: "#FF1A1A",
  background: "#0a0a0a",     // Fondo oscuro
  backgroundLight: "#F5F5F5",// Fondo claro
  // ... etc
}
```

Los colores se aplican automáticamente en toda la presentación.

## Cambiar tipografía

Requiere dos cambios:

### 1. En `src/app/layout.tsx`, cambia los imports:
```tsx
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});
// ... etc
```

### 2. En `deck.config.ts`, actualiza las referencias:
```ts
fonts: {
  display: "var(--font-serif)",
  body: "var(--font-inter)",
  mono: "var(--font-jetbrains)",
}
```

## Catálogo de fonts
Explora opciones en [fonts.google.com](https://fonts.google.com). Combinaciones recomendadas:
- **Playfair Display + Inter** — Elegante editorial
- **Space Grotesk + DM Sans** — Moderno tech
- **Libre Baskerville + Source Sans 3** — Clásico profesional
- **Sora + IBM Plex Sans** — Limpio corporativo

## Cambiar el estilo de un slide individual
Cada slide puede tener su propio estilo. Usa `variant="dark"` o `variant="light"` y agrega clases directamente.
