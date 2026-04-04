"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { COSlide01Cover } from "@/slides/ejemplos/consultoria/COSlide01Cover";
import { COSlide02Challenge } from "@/slides/ejemplos/consultoria/COSlide02Challenge";
import { COSlide03Matrix } from "@/slides/ejemplos/consultoria/COSlide03Matrix";
import { COSlide04Methodology } from "@/slides/ejemplos/consultoria/COSlide04Methodology";
import { COSlide05OrgChart } from "@/slides/ejemplos/consultoria/COSlide05OrgChart";
import { COSlide06Results } from "@/slides/ejemplos/consultoria/COSlide06Results";
import { COSlide07Cases } from "@/slides/ejemplos/consultoria/COSlide07Cases";
import { COSlide08ProsCons } from "@/slides/ejemplos/consultoria/COSlide08ProsCons";
import { COSlide09Investment } from "@/slides/ejemplos/consultoria/COSlide09Investment";
import { COSlide10NextSteps } from "@/slides/ejemplos/consultoria/COSlide10NextSteps";

export default function ConsultoriaPage() {
  return (
    <SlideLayout>
      <COSlide01Cover />
      <COSlide02Challenge />
      <COSlide03Matrix />
      <COSlide04Methodology />
      <COSlide05OrgChart />
      <COSlide06Results />
      <COSlide07Cases />
      <COSlide08ProsCons />
      <COSlide09Investment />
      <COSlide10NextSteps />
    </SlideLayout>
  );
}
