"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { SUSlide01Cover } from "@/slides/ejemplos/startup/SUSlide01Cover";
import { SUSlide02Problem } from "@/slides/ejemplos/startup/SUSlide02Problem";
import { SUSlide03Solution } from "@/slides/ejemplos/startup/SUSlide03Solution";
import { SUSlide04HowItWorks } from "@/slides/ejemplos/startup/SUSlide04HowItWorks";
import { SUSlide05Market } from "@/slides/ejemplos/startup/SUSlide05Market";
import { SUSlide06Traction } from "@/slides/ejemplos/startup/SUSlide06Traction";
import { SUSlide07Funnel } from "@/slides/ejemplos/startup/SUSlide07Funnel";
import { SUSlide08Competition } from "@/slides/ejemplos/startup/SUSlide08Competition";
import { SUSlide09Pricing } from "@/slides/ejemplos/startup/SUSlide09Pricing";
import { SUSlide10Roadmap } from "@/slides/ejemplos/startup/SUSlide10Roadmap";
import { SUSlide11Team } from "@/slides/ejemplos/startup/SUSlide11Team";
import { SUSlide12Ask } from "@/slides/ejemplos/startup/SUSlide12Ask";

export default function StartupPage() {
  return (
    <SlideLayout>
      <SUSlide01Cover />
      <SUSlide02Problem />
      <SUSlide03Solution />
      <SUSlide04HowItWorks />
      <SUSlide05Market />
      <SUSlide06Traction />
      <SUSlide07Funnel />
      <SUSlide08Competition />
      <SUSlide09Pricing />
      <SUSlide10Roadmap />
      <SUSlide11Team />
      <SUSlide12Ask />
    </SlideLayout>
  );
}
