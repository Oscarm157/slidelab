"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { Slide01Cover } from "@/slides/Slide01Cover";
import { Slide02Concept } from "@/slides/Slide02Concept";
import { Slide03Product } from "@/slides/Slide03Product";
import { Slide04Data } from "@/slides/Slide04Data";
import { Slide05Location } from "@/slides/Slide05Location";
import { Slide06Contact } from "@/slides/Slide06Contact";

// ─────────────────────────────────────────────
// Agrega, quita o reordena slides aquí
// Cada componente es un slide independiente
// ─────────────────────────────────────────────

export default function Home() {
  return (
    <SlideLayout>
      <Slide01Cover />
      <Slide02Concept />
      <Slide03Product />
      <Slide04Data />
      <Slide05Location />
      <Slide06Contact />
    </SlideLayout>
  );
}
