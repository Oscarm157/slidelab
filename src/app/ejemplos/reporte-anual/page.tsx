"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { RASlide01Cover } from "@/slides/ejemplos/reporte-anual/RASlide01Cover";
import { RASlide02Highlights } from "@/slides/ejemplos/reporte-anual/RASlide02Highlights";
import { RASlide03Revenue } from "@/slides/ejemplos/reporte-anual/RASlide03Revenue";
import { RASlide04Products } from "@/slides/ejemplos/reporte-anual/RASlide04Products";
import { RASlide05Regional } from "@/slides/ejemplos/reporte-anual/RASlide05Regional";
import { RASlide06RnD } from "@/slides/ejemplos/reporte-anual/RASlide06RnD";
import { RASlide07Operations } from "@/slides/ejemplos/reporte-anual/RASlide07Operations";
import { RASlide08ESG } from "@/slides/ejemplos/reporte-anual/RASlide08ESG";
import { RASlide09Leadership } from "@/slides/ejemplos/reporte-anual/RASlide09Leadership";
import { RASlide10Outlook } from "@/slides/ejemplos/reporte-anual/RASlide10Outlook";

export default function ReporteAnualPage() {
  return (
    <SlideLayout>
      <RASlide01Cover />
      <RASlide02Highlights />
      <RASlide03Revenue />
      <RASlide04Products />
      <RASlide05Regional />
      <RASlide06RnD />
      <RASlide07Operations />
      <RASlide08ESG />
      <RASlide09Leadership />
      <RASlide10Outlook />
    </SlideLayout>
  );
}
