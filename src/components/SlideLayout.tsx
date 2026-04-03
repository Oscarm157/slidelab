"use client";

import { useRef, useCallback, Children } from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";
import { useTouchNav } from "@/hooks/useTouchNav";
import { SlideNavigation } from "./SlideNavigation";
import { ProgressBar } from "./ProgressBar";
import { deckConfig } from "@/config/deck.config";

interface SlideLayoutProps {
  children: React.ReactNode;
}

export function SlideLayout({ children }: SlideLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const { navigation } = deckConfig;

  const {
    current,
    totalSlides,
    next,
    prev,
    goTo,
    isFirst,
    isLast,
    mounted,
  } = useSlideNavigation({ totalSlides: slides.length });

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useKeyboardNav({
    onNext: next,
    onPrev: prev,
    onFirst: () => goTo(0),
    onLast: () => goTo(slides.length - 1),
    onToggleFullscreen: toggleFullscreen,
    enabled: navigation.enableKeyboard,
  });

  useTouchNav({
    onNext: next,
    onPrev: prev,
    containerRef,
    enabled: navigation.enableTouch,
  });

  // Evitar flash de contenido antes de hidratar
  if (!mounted) {
    return (
      <div className="w-screen h-dvh bg-bg-dark" />
    );
  }

  return (
    <div ref={containerRef} className="relative w-screen h-dvh overflow-hidden bg-bg-dark">
      {/* Slides con transiciones */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === current
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : i < current
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          {slide}
        </div>
      ))}

      {/* Navegación superior */}
      <SlideNavigation
        current={current}
        total={totalSlides}
        onNext={next}
        onPrev={prev}
        isFirst={isFirst}
        isLast={isLast}
        containerRef={containerRef}
        showSlideCount={navigation.showSlideCount}
        enableFullscreen={navigation.enableFullscreen}
      />

      {/* Barra de progreso */}
      {navigation.showProgress && (
        <ProgressBar current={current} total={totalSlides} />
      )}
    </div>
  );
}
