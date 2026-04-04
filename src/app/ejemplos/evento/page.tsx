"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { EVSlide01Cover } from "@/slides/ejemplos/evento/EVSlide01Cover";
import { EVSlide02About } from "@/slides/ejemplos/evento/EVSlide02About";
import { EVSlide03Agenda } from "@/slides/ejemplos/evento/EVSlide03Agenda";
import { EVSlide04Speakers } from "@/slides/ejemplos/evento/EVSlide04Speakers";
import { EVSlide05Testimonials } from "@/slides/ejemplos/evento/EVSlide05Testimonials";
import { EVSlide06Venue } from "@/slides/ejemplos/evento/EVSlide06Venue";
import { EVSlide07Music } from "@/slides/ejemplos/evento/EVSlide07Music";
import { EVSlide08Social } from "@/slides/ejemplos/evento/EVSlide08Social";
import { EVSlide09Mentorship } from "@/slides/ejemplos/evento/EVSlide09Mentorship";
import { EVSlide10Register } from "@/slides/ejemplos/evento/EVSlide10Register";

export default function EventoPage() {
  return (
    <SlideLayout>
      <EVSlide01Cover />
      <EVSlide02About />
      <EVSlide03Agenda />
      <EVSlide04Speakers />
      <EVSlide05Testimonials />
      <EVSlide06Venue />
      <EVSlide07Music />
      <EVSlide08Social />
      <EVSlide09Mentorship />
      <EVSlide10Register />
    </SlideLayout>
  );
}
