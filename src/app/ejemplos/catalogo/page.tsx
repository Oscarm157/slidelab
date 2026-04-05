"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { CASlide01Cover } from "@/slides/ejemplos/catalogo/CASlide01Cover";
import { CASlide02Value } from "@/slides/ejemplos/catalogo/CASlide02Value";
import { CASlide03Product } from "@/slides/ejemplos/catalogo/CASlide03Product";
import { CASlide04Specs } from "@/slides/ejemplos/catalogo/CASlide04Specs";
import { CASlide05Comparison } from "@/slides/ejemplos/catalogo/CASlide05Comparison";
import { CASlide06Gallery } from "@/slides/ejemplos/catalogo/CASlide06Gallery";
import { CASlide07Testimonials } from "@/slides/ejemplos/catalogo/CASlide07Testimonials";
import { CASlide08Pricing } from "@/slides/ejemplos/catalogo/CASlide08Pricing";
import { CASlide09FAQ } from "@/slides/ejemplos/catalogo/CASlide09FAQ";
import { CASlide10Contact } from "@/slides/ejemplos/catalogo/CASlide10Contact";

export default function CatalogoPage() {
  return (
    <SlideLayout>
      <CASlide01Cover />
      <CASlide02Value />
      <CASlide03Product />
      <CASlide04Specs />
      <CASlide05Comparison />
      <CASlide06Gallery />
      <CASlide07Testimonials />
      <CASlide08Pricing />
      <CASlide09FAQ />
      <CASlide10Contact />
    </SlideLayout>
  );
}
