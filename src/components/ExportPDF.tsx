"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";

interface ExportPDFProps {
  containerRef: React.RefObject<HTMLElement | null>;
  totalSlides: number;
  onNavigate: (index: number) => void;
}

export function ExportPDF({ containerRef, totalSlides, onNavigate }: ExportPDFProps) {
  const [exporting, setExporting] = useState(false);
  const [currentCapture, setCurrentCapture] = useState(0);

  const exportPDF = useCallback(async () => {
    if (exporting || !containerRef.current) return;
    setExporting(true);
    setCurrentCapture(0);

    try {
      // Dynamic imports to avoid bundling these in the main chunk
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const container = containerRef.current;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      // Create PDF in landscape with exact pixel dimensions
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [width, height],
        hotfixes: ["px_scaling"],
      });

      for (let i = 0; i < totalSlides; i++) {
        // Update counter FIRST so overlay matches what's behind
        setCurrentCapture(i + 1);

        // Navigate to slide
        onNavigate(i);

        // Wait for animation to fully complete
        await new Promise((r) => setTimeout(r, 4500));

        // Hide all UI for clean capture
        const nav = container.querySelector("nav");
        const progressBar = container.querySelector('[class*="fixed"][class*="bottom"]');
        const pdfBtn = container.querySelector('[aria-label="Exportar PDF"]');
        if (nav) (nav as HTMLElement).style.opacity = "0";
        if (progressBar) (progressBar as HTMLElement).style.opacity = "0";
        if (pdfBtn) (pdfBtn as HTMLElement).style.opacity = "0";

        await new Promise((r) => setTimeout(r, 100));

        // Capture
        const canvas = await html2canvas(container, {
          width,
          height,
          scale: 2, // 2x for retina quality
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          logging: false,
        });

        // Restore UI
        if (nav) (nav as HTMLElement).style.opacity = "1";
        if (progressBar) (progressBar as HTMLElement).style.opacity = "1";
        if (pdfBtn) (pdfBtn as HTMLElement).style.opacity = "1";

        // Add page to PDF
        if (i > 0) pdf.addPage([width, height], "landscape");
        const imgData = canvas.toDataURL("image/jpeg", 0.92);
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);

        // progress tracked by currentCapture state
      }

      // Download
      const title = document.title || "presentacion";
      const filename = title.replace(/[^a-zA-Z0-9-_ ]/g, "").trim() || "presentacion";
      pdf.save(`${filename}.pdf`);

      // Return to first slide
      onNavigate(0);
    } catch (err) {
      console.error("Export PDF error:", err);
      alert("Error al exportar. Intenta de nuevo.");
    } finally {
      setExporting(false);
      setCurrentCapture(0);
    }
  }, [containerRef, totalSlides, onNavigate, exporting]);

  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  return (
    <>
      <button
        onClick={exportPDF}
        disabled={exporting}
        className="fixed bottom-4 left-4 z-50 p-2.5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors disabled:opacity-50 border border-white/10"
        aria-label="Exportar PDF"
        title="Exportar a PDF"
      >
        <span className="material-symbols-outlined text-[18px]">
          {exporting ? "hourglass_top" : "picture_as_pdf"}
        </span>
      </button>

      {/* Progress overlay — rendered via portal OUTSIDE the container so html2canvas doesn't capture it */}
      {portalTarget && createPortal(
        <AnimatePresence>
          {exporting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center max-w-xs border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-[24px] animate-spin">progress_activity</span>
                </div>
                <p className="text-white font-medium mb-2">Exportando a PDF...</p>
                <p className="text-white/50 text-sm mb-4">Capturando slide {currentCapture} de {totalSlides}</p>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white/60 rounded-full"
                    animate={{ width: `${(currentCapture / totalSlides) * 100}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        portalTarget
      )}
    </>
  );
}
