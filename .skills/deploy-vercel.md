# Skill: Deploy en Vercel

## Opción 1: Desde la terminal (más rápido)

```bash
# 1. Instala Vercel CLI (solo la primera vez)
npm i -g vercel

# 2. Desde la carpeta del proyecto
vercel

# 3. Sigue las instrucciones (Enter en todo para los defaults)
# Listo — te da una URL pública
```

## Opción 2: Conectar repo de GitHub (recomendado)

1. Sube tu proyecto a un repo en GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Clic en "New Project"
4. Selecciona tu repositorio
5. Vercel detecta Next.js automáticamente — clic en "Deploy"
6. Cada vez que hagas push a main, se re-despliega solo

## Dominio personalizado
En el dashboard de Vercel → tu proyecto → Settings → Domains → agrega tu dominio.

## Tips
- No necesitas configurar nada especial — Next.js en Vercel funciona out of the box
- El build es `npm run build`, Vercel lo detecta solo
- Si algo falla en el deploy, revisa los logs en el dashboard de Vercel
