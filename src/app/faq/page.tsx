import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
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

      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <nav
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
            aria-label="Fil d'ariane"
          >
            <Link href="/" className="hover:text-secondary transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">FAQ</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Toutes les réponses</span>
            <h1 className="text-white">
              Questions fréquentes sur
              <br />
              <span className="text-secondary">l&apos;aide à domicile.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Démarrage, intervenants, tarifs, aides financières, qualité — nous
              avons regroupé les {allFaqItems.length} questions qui reviennent le
              plus souvent. Recherchez ou parcourez par catégorie.
            </p>
          </div>
        </Container>
      </section>

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
