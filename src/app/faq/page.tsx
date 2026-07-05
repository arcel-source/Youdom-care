import { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQAccordion from "./FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";
import { allFaqItems } from "@/lib/faq-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Questions fréquentes — toutes vos questions sur l'aide à domicile | Youdom Care",
  description:
    "30+ questions sur l'aide à domicile : démarrage, intervenants, tarifs, aides financières, services, qualité, espace client. Réponses claires et détaillées.",
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqItems)} />

      <PageHero
        bgImage="/images/curated/blog-handshake-trust.jpg"
        eyebrow="Toutes les réponses"
        breadcrumb={[{ name: "Accueil", href: "/" }, { name: "FAQ" }]}
        title={
          <>
            Questions fréquentes sur
            <br />
            <span className="text-secondary">l&apos;aide à domicile.</span>
          </>
        }
        subtitle={`Démarrage, intervenants, tarifs, aides financières, qualité — nous avons regroupé les ${allFaqItems.length} questions qui reviennent le plus souvent. Recherchez ou parcourez par catégorie.`}
      />

      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <FAQAccordion />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container size="narrow">
          <div className="bg-primary-50 rounded-3xl p-8 sm:p-12 text-center border border-primary-100">
            <div className="text-4xl mb-3" aria-hidden="true">💬</div>
            <h2 className="text-primary-dark">Votre question n&apos;est pas listée ?</h2>
            <p className="text-text-light mt-3 mb-6 max-w-xl mx-auto">
              Notre coordinatrice vous répond personnellement, par téléphone ou
              email, dans les 2 heures ouvrées.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="primary" size="md" glow>
                Poser ma question
              </Button>
              <Button
                href={`tel:${siteConfig.phone.mainE164}`}
                variant="outline"
                size="md"
              >
                📞 {siteConfig.phone.main}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
