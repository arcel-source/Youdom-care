import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import { faqSchema } from "@/lib/structured-data";
import { faqQuick } from "@/lib/site-config";
import HomeHero from "@/components/sections/HomeHero";
import TrustBar from "@/components/sections/TrustBar";
import PersonaSelector from "@/components/sections/PersonaSelector";
import EmpathyBlock from "@/components/sections/EmpathyBlock";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import WhyDifferent from "@/components/sections/WhyDifferent";
import AidesSimulator from "@/components/sections/AidesSimulator";
import TestimonialsWall from "@/components/sections/TestimonialsWall";
import LocalPresence from "@/components/sections/LocalPresence";
import FAQQuick from "@/components/sections/FAQQuick";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Youdom Care — Aide à domicile humaine, fidèle et transparente | Paris & IDF",
  description:
    "L'aide à domicile qui prend soin de toute la famille. Le même intervenant, des tarifs transparents, 50 % de crédit d'impôt. Réponse en moins de 2 h. Devis gratuit en 3 min.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={faqSchema(
          faqQuick.map((q) => ({ question: q.question, answer: q.answer })),
        )}
      />

      {/* 1. Accroche */}
      <HomeHero />
      <TrustBar />

      {/* 2. Pour qui ? — routage par persona */}
      <Reveal><PersonaSelector /></Reveal>

      {/* 3. Empathie — on nomme le problème */}
      <EmpathyBlock />

      {/* 4. La solution — comment ça marche */}
      <Reveal><ProcessTimeline /></Reveal>

      {/* 5. Nos services */}
      <Reveal><ServicesShowcase /></Reveal>

      {/* 6. Pourquoi nous — différenciation */}
      <WhyDifferent />

      {/* 7. Combien ça coûte — transparence */}
      <Reveal><AidesSimulator /></Reveal>

      {/* 8. Preuve sociale */}
      <Reveal><TestimonialsWall /></Reveal>

      {/* 9. Présence locale IDF */}
      <LocalPresence />

      {/* 10. FAQ */}
      <Reveal><FAQQuick /></Reveal>

      {/* 11. Dernier appel à l'action */}
      <FinalCTA />
    </>
  );
}
