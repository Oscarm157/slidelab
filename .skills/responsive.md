# Skill: Hacer responsive un slide

## Qué hace
Adapta el contenido de un slide para que se vea bien en móvil, tablet y desktop.

## Patrones principales

### Texto que escala
```tsx
<h2 className="text-2xl sm:text-3xl md:text-4xl">Título</h2>
<p className="text-sm sm:text-base">Texto normal</p>
```

### Grid que apila en móvil
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards se apilan en móvil, 2 col en tablet, 3 en desktop */}
</div>
```

### Ocultar elementos en pantallas chicas
```tsx
<span className="hidden sm:inline">Texto solo en desktop</span>
```

### Padding responsive
```tsx
<div className="px-4 sm:px-8 md:px-12">
```

## Breakpoints de Tailwind
- `sm:` → 640px+
- `md:` → 768px+
- `lg:` → 1024px+

## Tip
Siempre diseña primero para móvil (las clases sin prefijo) y luego agrega los prefijos para pantallas más grandes.
