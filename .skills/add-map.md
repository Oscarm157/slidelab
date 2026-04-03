# Skill: Agregar Google Maps a un slide

## Mapa embebido (sin API key)
```tsx
<div className="rounded-xl overflow-hidden border border-card-border">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-116.9367!3d32.4981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI5JzUzLjIiTiAxMTbCsDU2JzEyLjEiVw!5e0!3m2!1ses!2smx!4v1234567890"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

## Cómo obtener la URL
1. Ve a Google Maps y busca tu ubicación
2. Clic en "Compartir" → "Incorporar un mapa"
3. Copia la URL del `src` del iframe

## Con card de información encima
```tsx
<div className="relative">
  <iframe ... className="w-full h-[400px] rounded-xl" />
  
  {/* Card flotante */}
  <div className="absolute bottom-4 left-4 bg-bg-dark/90 backdrop-blur-sm rounded-xl p-4 max-w-xs border border-card-border">
    <h4 className="font-semibold text-sm text-fg-light">Nombre del lugar</h4>
    <p className="text-muted text-xs mt-1">Dirección completa aquí</p>
  </div>
</div>
```
