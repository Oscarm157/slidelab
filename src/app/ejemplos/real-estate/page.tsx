"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { RESlide01Cover } from "@/slides/ejemplos/real-estate/RESlide01Cover";
import { RESlide02Opportunity } from "@/slides/ejemplos/real-estate/RESlide02Opportunity";
import { RESlide03Location } from "@/slides/ejemplos/real-estate/RESlide03Location";
import { RESlide04FloorPlans } from "@/slides/ejemplos/real-estate/RESlide04FloorPlans";
import { RESlide05Amenities } from "@/slides/ejemplos/real-estate/RESlide05Amenities";
import { RESlide06Render } from "@/slides/ejemplos/real-estate/RESlide06Render";
import { RESlide07BeforeAfter } from "@/slides/ejemplos/real-estate/RESlide07BeforeAfter";
import { RESlide08Financials } from "@/slides/ejemplos/real-estate/RESlide08Financials";
import { RESlide09Comparison } from "@/slides/ejemplos/real-estate/RESlide09Comparison";
import { RESlide10Contact } from "@/slides/ejemplos/real-estate/RESlide10Contact";

export default function RealEstatePage() {
  return (
    <SlideLayout>
      <RESlide01Cover />
      <RESlide02Opportunity />
      <RESlide03Location />
      <RESlide04FloorPlans />
      <RESlide05Amenities />
      <RESlide06Render />
      <RESlide07BeforeAfter />
      <RESlide08Financials />
      <RESlide09Comparison />
      <RESlide10Contact />
    </SlideLayout>
  );
}
