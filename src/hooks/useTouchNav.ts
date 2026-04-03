"use client";

import { useEffect, useRef } from "react";

interface UseTouchNavProps {
  onNext: () => void;
  onPrev: () => void;
  containerRef: React.RefObject<HTMLElement | null>;
  enabled?: boolean;
  threshold?: number;
}

export function useTouchNav({
  onNext,
  onPrev,
  containerRef,
  enabled = true,
  threshold = 80,
}: UseTouchNavProps) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const diffX = touchStartX.current - e.changedTouches[0].clientX;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;

      // Solo swipe horizontal, y debe ser al menos 2x más que el vertical
      if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY) * 2) {
        if (diffX > 0) {
          onNext();
        } else {
          onPrev();
        }
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [enabled, onNext, onPrev, containerRef, threshold]);
}
