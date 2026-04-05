#!/usr/bin/env node

/**
 * Slidelab — Export presentación a PDF
 *
 * Uso:
 *   npm run export-pdf -- <url>
 *
 * Ejemplos:
 *   npm run export-pdf -- http://localhost:3000/ejemplos/startup
 *   npm run export-pdf -- https://slidelab-two.vercel.app/ejemplos/startup
 *
 * El PDF se guarda en ./export/<nombre>.pdf
 */

import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";
import fs from "fs";
import path from "path";

const url = process.argv[2];

if (!url) {
  console.error("❌ Falta la URL de la presentación");
  console.error("   Uso: npm run export-pdf -- <url>");
  console.error("   Ejemplo: npm run export-pdf -- http://localhost:3000/ejemplos/startup");
  process.exit(1);
}

const WIDTH = 1920;
const HEIGHT = 1080;
const WAIT_AFTER_NAV = 1000; // ms para esperar después de navegar
const WAIT_INITIAL = 3000; // ms para esperar carga inicial

console.log(`\n📊 Exportando: ${url}`);
console.log(`   Viewport: ${WIDTH}×${HEIGHT}\n`);

let browser;
try {
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT });

  // Limpiar sessionStorage para empezar en slide 0
  await page.evaluateOnNewDocument(() => {
    sessionStorage.removeItem("slidelab-current");
  });

  console.log("   Cargando presentación...");
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, WAIT_INITIAL));

  // Detectar total de slides desde el contador "01 / 12"
  const totalSlides = await page.evaluate(() => {
    const counters = document.querySelectorAll(".font-mono");
    for (const el of counters) {
      const text = el.textContent?.trim() || "";
      const match = text.match(/(\d+)\s*\/\s*(\d+)/);
      if (match) return parseInt(match[2]);
    }
    return 0;
  });

  if (totalSlides === 0) {
    console.error("❌ No se pudo detectar el número de slides");
    console.error("   Asegúrate de que la URL es de una presentación Slidelab");
    await browser.close();
    process.exit(1);
  }

  console.log(`   Detectados: ${totalSlides} slides\n`);

  const screenshots = [];

  for (let i = 0; i < totalSlides; i++) {
    // Esperar a que la transición termine
    await new Promise((r) => setTimeout(r, WAIT_AFTER_NAV));

    // Ocultar navegación para screenshot limpio
    await page.evaluate(() => {
      const nav = document.querySelector("nav");
      if (nav) nav.style.opacity = "0";
      // Ocultar barra de progreso
      const progress = document.querySelector('[class*="fixed"][class*="bottom"]');
      if (progress) progress.style.opacity = "0";
    });

    await new Promise((r) => setTimeout(r, 100));

    const buffer = await page.screenshot({ type: "png", fullPage: false });
    screenshots.push(buffer);

    // Restaurar navegación
    await page.evaluate(() => {
      const nav = document.querySelector("nav");
      if (nav) nav.style.opacity = "1";
      const progress = document.querySelector('[class*="fixed"][class*="bottom"]');
      if (progress) progress.style.opacity = "1";
    });

    const slideNum = String(i + 1).padStart(2, "0");
    console.log(`   ✓ Slide ${slideNum}/${String(totalSlides).padStart(2, "0")} capturado`);

    // Avanzar al siguiente slide
    if (i < totalSlides - 1) {
      await page.keyboard.press("ArrowRight");
    }
  }

  await browser.close();

  // Crear PDF
  console.log("\n   Generando PDF...");
  const pdf = await PDFDocument.create();

  for (const shot of screenshots) {
    const img = await pdf.embedPng(shot);
    const pageObj = pdf.addPage([WIDTH, HEIGHT]);
    pageObj.drawImage(img, { x: 0, y: 0, width: WIDTH, height: HEIGHT });
  }

  // Guardar
  const outputDir = path.resolve("export");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  // Nombre del archivo basado en la URL
  const urlPath = new URL(url).pathname;
  const filename = urlPath.split("/").filter(Boolean).pop() || "presentation";

  const outputPath = path.join(outputDir, `${filename}.pdf`);
  fs.writeFileSync(outputPath, await pdf.save());

  const sizeMB = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(1);
  console.log(`\n✅ PDF generado: ${outputPath}`);
  console.log(`   ${totalSlides} slides · ${sizeMB} MB\n`);

} catch (err) {
  console.error(`\n❌ Error: ${err.message}`);
  if (err.message.includes("net::ERR")) {
    console.error("   ¿Está corriendo el servidor? (npm run dev)");
  }
  process.exit(1);
} finally {
  if (browser) await browser.close().catch(() => {});
}
