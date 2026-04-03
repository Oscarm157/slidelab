# Skill: Agregar animaciones a un slide

## Animaciones disponibles

Estas clases ya están definidas en `src/styles/animations.css`:

| Clase | Efecto |
|-------|--------|
| `slide-enter` | Escala + fade al entrar el slide |
| `stagger-in` | Anima los hijos uno por uno (ponla en el contenedor) |
| `hero-fade-in` | Fade con delay corto |
| `hero-fade-in-delayed` | Fade con delay medio |
| `hero-fade-in-delayed-2` | Fade con delay largo |
| `hero-fade-in-delayed-3` | Fade con delay extra largo |
| `animate-number` | Pop para números/métricas |
| `bar-grow` | Barra que crece de abajo hacia arriba |
| `fade-in` | Fade simple |
| `slide-up` | Sube desde abajo con fade |
| `glow-accent` | Brillo sutil con el color accent |
| `text-gradient` | Texto con gradiente del color accent |
| `shimmer` | Barrido brillante (infinite) |
| `pulse-dot` | Pulso para indicadores (infinite) |

## Ejemplo: Animar una lista de cards
```tsx
<div className="stagger-in">
  <FeatureCard ... />
  <FeatureCard ... />
  <FeatureCard ... />
</div>
```

## Ejemplo: Crear una animación nueva
Agrega el keyframe en `src/styles/animations.css`:
```css
.mi-animacion {
  animation: miAnimacion 0.6s ease forwards;
}
@keyframes miAnimacion {
  from { opacity: 0; transform: rotate(-5deg); }
  to { opacity: 1; transform: rotate(0); }
}
```
