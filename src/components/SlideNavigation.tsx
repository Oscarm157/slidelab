"use client";

import { FullscreenToggle } from "./FullscreenToggle";

interface SlideNavigationProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
  showSlideCount?: boolean;
  enableFullscreen?: boolean;
}

export function SlideNavigation({
  current,
  total,
  onNext,
  onPrev,
  isFirst,
  isLast,
  containerRef,
  showSlideCount = true,
  enableFullscreen = true,
}: SlideNavigationProps) {
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 safe-area">
      {/* Izquierda: home */}
      <button
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 text-inherit/60 hover:text-inherit transition-colors"
        aria-label="Inicio"
      >
        <span className="material-symbols-outlined text-[20px]">home</span>
      </button>

      {/* Derecha: contador + controles */}
      <div className="flex items-center gap-1 sm:gap-2">
        {showSlideCount && (
          <span className="font-mono text-xs sm:text-sm text-inherit/50 mr-2">
            {pad(current + 1)} / {pad(total)}
          </span>
        )}

        <button
          onClick={onPrev}
          disabled={isFirst}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Anterior"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>

        <button
          onClick={onNext}
          disabled={isLast}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Siguiente"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>

        {enableFullscreen && (
          <FullscreenToggle containerRef={containerRef} />
        )}
      </div>
    </nav>
  );
}
