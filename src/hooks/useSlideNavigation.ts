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
  const [fromUrl, setFromUrl] = useState(false);

  // Recuperar slide: primero de ?slide= query param, luego de sessionStorage
  useEffect(() => {
    setMounted(true);

    // Check URL query param ?slide=N (1-based for user friendliness)
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get("slide");
    if (slideParam) {
      const parsed = parseInt(slideParam, 10) - 1; // convert to 0-based
      if (parsed >= 0 && parsed < totalSlides) {
        setCurrent(parsed);
        setFromUrl(true); // don't use sessionStorage when URL-driven
        return;
      }
    }

    // Fallback to sessionStorage (only when NOT in iframe / URL-driven)
    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 0 && parsed < totalSlides) {
          setCurrent(parsed);
        }
      }
    } catch {}
  }, [storageKey, totalSlides]);

  // Guardar slide actual (skip if URL-driven to avoid cross-iframe pollution)
  useEffect(() => {
    if (mounted && !fromUrl) {
      try {
        sessionStorage.setItem(storageKey, String(current));
      } catch {}
    }
  }, [current, mounted, storageKey, fromUrl]);

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
