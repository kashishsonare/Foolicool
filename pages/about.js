import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoSection from "@/components/InfoSection";
import HeroAbout from "../components/HeroAbout";
import TokenDistributionLayout from "@/components/TokenDistribute";
import CardSection from '@/components/CardSection';
import { BenefitsSection2 } from "@/components/CardSection/components/AboutBenfits";
import { FooterSection2 } from "@/components/home/AboutFooter";



export default function About() {
    return (
        <main className="flex flex-col">
        <div className="mt-2">
            <HeroAbout />
            </div>
            <InfoSection />
            <BenefitsSection2/>
            <TokenDistributionLayout/>
            <CardSection/>
            <FooterSection2/>
         
         
        </main>
    );
}

