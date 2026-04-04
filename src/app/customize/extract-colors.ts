// ─────────────────────────────────────────────
// Extracción de colores dominantes de una imagen
// Usa Canvas API — cero dependencias
// ─────────────────────────────────────────────

export async function extractColors(dataUrl: string, maxColors: number = 5): Promise<string[]> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Canvas escalado para performance (max 100px)
      const scale = Math.min(1, 100 / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, w, h);

      const { data } = ctx.getImageData(0, 0, w, h);
      const buckets = new Map<string, number>();

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Ignorar transparentes
        if (a < 128) continue;

        // Ignorar blancos, negros y grises (poco informativos)
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const lightness = (max + min) / 2;
        const saturation = max === min ? 0 : (max - min) / (lightness > 127 ? (510 - max - min) : (max + min));

        // Saltar si es muy claro, muy oscuro, o muy gris
        if (lightness > 240 || lightness < 15) continue;
        if (saturation < 0.1 && lightness > 50 && lightness < 200) continue;

        // Cuantizar a buckets de 32 para agrupar colores similares
        const qr = Math.round(r / 32) * 32;
        const qg = Math.round(g / 32) * 32;
        const qb = Math.round(b / 32) * 32;
        const key = `${qr},${qg},${qb}`;

        buckets.set(key, (buckets.get(key) ?? 0) + 1);
      }

      // Ordenar por frecuencia
      const sorted = Array.from(buckets.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxColors);

      // Convertir a hex
      const colors = sorted.map(([key]) => {
        const [r, g, b] = key.split(",").map(Number);
        return rgbToHex(r, g, b);
      });

      // Si no se detectaron colores (logo todo blanco/negro), devolver defaults
      if (colors.length === 0) {
        resolve(["#8B6914", "#A67C00"]);
        return;
      }

      resolve(colors);
    };

    img.onerror = () => resolve(["#8B6914", "#A67C00"]);
    img.src = dataUrl;
  });
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((c) => Math.min(255, Math.max(0, c)).toString(16).padStart(2, "0")).join("");
}
