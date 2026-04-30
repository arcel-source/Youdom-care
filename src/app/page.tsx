import { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import TrustBar from "@/components/sections/TrustBar";
import PersonaSelector from "@/components/sections/PersonaSelector";
import ServiceFinder from "@/components/sections/ServiceFinder";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import MissionStory from "@/components/sections/MissionStory";
import AidesSimulator from "@/components/sections/AidesSimulator";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import TestimonialsWall from "@/components/sections/TestimonialsWall";
import AidantsCapture from "@/components/sections/AidantsCapture";
import FAQQuick from "@/components/sections/FAQQuick";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Youdom Care — Aide à domicile humaine, fidèle et transparente | Paris & IDF",
  description:
    "L'aide à domicile qui prend soin de toute la famille. Le même intervenant, des tarifs transparents, 50 % de crédit d'impôt. Réponse en moins de 2 h. Devis gratuit en 3 min.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <PersonaSelector />
      <ServiceFinder />
      <ServicesShowcase />
      <MissionStory />
      <AidesSimulator />
      <ProcessTimeline />
      <EngagementsBlock />
      <TestimonialsWall />
      <AidantsCapture />
      <FAQQuick />
      <FinalCTA />
    </>
  );
}
