"use client";

interface FullscreenToggleProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export function FullscreenToggle({ containerRef }: FullscreenToggleProps) {
  const toggle = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Pantalla completa"
    >
      <span className="material-symbols-outlined text-[20px]">fullscreen</span>
    </button>
  );
}
