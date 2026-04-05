"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { EDSlide01Cover } from "@/slides/ejemplos/educacion/EDSlide01Cover";
import { EDSlide02Problem } from "@/slides/ejemplos/educacion/EDSlide02Problem";
import { EDSlide03Courses } from "@/slides/ejemplos/educacion/EDSlide03Courses";
import { EDSlide04Syllabus } from "@/slides/ejemplos/educacion/EDSlide04Syllabus";
import { EDSlide05Method } from "@/slides/ejemplos/educacion/EDSlide05Method";
import { EDSlide06Results } from "@/slides/ejemplos/educacion/EDSlide06Results";
import { EDSlide07Instructors } from "@/slides/ejemplos/educacion/EDSlide07Instructors";
import { EDSlide08Pricing } from "@/slides/ejemplos/educacion/EDSlide08Pricing";
import { EDSlide09FAQ } from "@/slides/ejemplos/educacion/EDSlide09FAQ";
import { EDSlide10Register } from "@/slides/ejemplos/educacion/EDSlide10Register";

export default function EducacionPage() {
  return (
    <SlideLayout>
      <EDSlide01Cover />
      <EDSlide02Problem />
      <EDSlide03Courses />
      <EDSlide04Syllabus />
      <EDSlide05Method />
      <EDSlide06Results />
      <EDSlide07Instructors />
      <EDSlide08Pricing />
      <EDSlide09FAQ />
      <EDSlide10Register />
    </SlideLayout>
  );
}
