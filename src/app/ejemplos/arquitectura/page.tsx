"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { ARSlide01Cover } from "@/slides/ejemplos/arquitectura/ARSlide01Cover";
import { ARSlide02Philosophy } from "@/slides/ejemplos/arquitectura/ARSlide02Philosophy";
import { ARSlide03Process } from "@/slides/ejemplos/arquitectura/ARSlide03Process";
import { ARSlide04Featured } from "@/slides/ejemplos/arquitectura/ARSlide04Featured";
import { ARSlide05Specs } from "@/slides/ejemplos/arquitectura/ARSlide05Specs";
import { ARSlide06Model } from "@/slides/ejemplos/arquitectura/ARSlide06Model";
import { ARSlide07FloorPlan } from "@/slides/ejemplos/arquitectura/ARSlide07FloorPlan";
import { ARSlide08Design } from "@/slides/ejemplos/arquitectura/ARSlide08Design";
import { ARSlide09Cases } from "@/slides/ejemplos/arquitectura/ARSlide09Cases";
import { ARSlide10WorkWithUs } from "@/slides/ejemplos/arquitectura/ARSlide10WorkWithUs";

export default function ArquitecturaPage() {
  return (
    <SlideLayout>
      <ARSlide01Cover />
      <ARSlide02Philosophy />
      <ARSlide03Process />
      <ARSlide04Featured />
      <ARSlide05Specs />
      <ARSlide06Model />
      <ARSlide07FloorPlan />
      <ARSlide08Design />
      <ARSlide09Cases />
      <ARSlide10WorkWithUs />
    </SlideLayout>
  );
}
