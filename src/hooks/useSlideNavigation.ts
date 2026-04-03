"use client";

import { useState, useCallback, useEffect } from "react";

interface UseSlideNavigationProps {
  totalSlides: number;
  storageKey?: string;
}

export function useSlideNavigation({
  totalSlides,
  storageKey = "slidelab-current",
}: UseSlideNavigationProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Recuperar slide guardado en sessionStorage
  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem(storageKey);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed >= 0 && parsed < totalSlides) {
        setCurrent(parsed);
      }
    }
  }, [storageKey, totalSlides]);

  // Guardar slide actual
  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem(storageKey, String(current));
    }
  }, [current, mounted, storageKey]);

  const goTo = useCallback(
    (index: number, dir?: "next" | "prev") => {
      if (isAnimating) return;
      if (index < 0 || index >= totalSlides) return;
      setDirection(dir ?? (index > current ? "next" : "prev"));
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [current, totalSlides, isAnimating]
  );

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  return {
    current,
    direction,
    isAnimating,
    mounted,
    totalSlides,
    goTo,
    next,
    prev,
    isFirst: current === 0,
    isLast: current === totalSlides - 1,
  };
}
