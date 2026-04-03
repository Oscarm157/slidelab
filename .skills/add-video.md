# Skill: Agregar video a un slide

## Video de fondo (como portada)
```tsx
<div className="absolute inset-0 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/images/mi-video.mp4" type="video/mp4" />
  </video>
  {/* Overlay oscuro para legibilidad */}
  <div className="absolute inset-0 bg-black/60" />
</div>
```

## Video inline (junto a contenido)
```tsx
<div className="rounded-xl overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-auto"
  >
    <source src="/images/render.mp4" type="video/mp4" />
  </video>
</div>
```

## Video de YouTube/Vimeo
```tsx
<div className="aspect-video rounded-xl overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    className="w-full h-full"
    allow="autoplay; fullscreen"
    allowFullScreen
  />
</div>
```

## Tips
- Coloca tus videos en `public/images/`
- Usa `playsInline` para que funcione en iOS
- `muted` es necesario para autoplay en todos los navegadores
- Para videos pesados, considera usar un servicio externo (YouTube, Vimeo)
