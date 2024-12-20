import * as React from "react";
import Hero from "../components/Hero";
import TestimonialSection from "../components/Testimonial";
import { FolliCoolHero } from "@/components/home/FoliocoolHero";
import { BenefitsSection } from "@/components/BenefitSection";
import SectionThree from "@/components/sections/sectionThree";
import { FooterSection } from '@/components/FooterSection';




import localFont from "next/font/local";

const hornbillSans = localFont({
  src: "./fonts/Hornbill-Personal Use Bold.otf",
  variable: "font-hornbill",
  weight: "bold",
});



export default function ShampooPage() {
  
  return (
    <main className="flex flex-col">
        <Hero />
        <TestimonialSection />
        <SectionThree />
        <FolliCoolHero />
        <BenefitsSection/>
        <FooterSection/>
       
    </main>
  );
}