"use client";

import { useRef, useCallback, Children } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";
import { useTouchNav } from "@/hooks/useTouchNav";
import { SlideNavigation } from "./SlideNavigation";
import { ProgressBar } from "./ProgressBar";
import { deckConfig } from "@/config/deck.config";

interface SlideLayoutProps {
  children: React.ReactNode;
}

const variants = {
  enter: (dir: string) => ({
    opacity: 0,
    x: dir === "next" ? 60 : -60,
    filter: "blur(4px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  exit: (dir: string) => ({
    opacity: 0,
    x: dir === "next" ? -60 : 60,
    filter: "blur(4px)",
  }),
};

export function SlideLayout({ children }: SlideLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const { navigation } = deckConfig;

  const {
    current,
    direction,
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

  if (!mounted) {
    return <div className="w-screen h-dvh bg-bg-dark" />;
  }

  return (
    <div ref={containerRef} className="relative w-screen h-dvh overflow-hidden bg-bg-dark">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0"
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

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

      {navigation.showProgress && (
        <ProgressBar current={current} total={totalSlides} />
      )}
    </div>
  );
}
