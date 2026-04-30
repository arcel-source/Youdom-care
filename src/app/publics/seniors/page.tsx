import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import AidesSimulator from "@/components/sections/AidesSimulator";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Aide à domicile pour seniors — vivre chez soi en sécurité | Youdom Care",
  description:
    "Vous êtes senior ou vous accompagnez une personne âgée ? Découvrez les services et aides qui permettent de vieillir chez soi en sécurité, avec dignité.",
};

const seniorServices = services.filter((s) =>
  (s.audience as readonly string[]).includes("senior") && s.featured,
);

const journeySteps = [
  {
    title: "Anticiper",
    age: "60-70 ans",
    description:
      "Avant que les premiers signes de fragilité n'apparaissent : adaptation du logement (MaPrimeAdapt), téléassistance, rencontre des bons interlocuteurs.",
  },
  {
    title: "Sécuriser",
    age: "70-80 ans",
    description:
      "Quand les premiers signes apparaissent (chute évitée, oublis, fatigue) : aide ménagère ponctuelle, courses accompagnées, lien social actif.",
  },
  {
    title: "Soutenir",
    age: "80-90 ans",
    description:
      "Perte d'autonomie progressive : aide à la toilette, aux repas, sorties médicales. APA activée, plan d'aide structuré.",
  },
  {
    title: "Accompagner",
    age: "90+ ans ou GIR 1-2",
    description:
      "Dépendance importante : présence quotidienne, parfois nuit, coordination médicale renforcée. L'EHPAD reste évité grâce au bon dispositif.",
  },
];

const benefits = [
  { icon: "🏠", title: "Vivre chez vous", description: "Vos repères, vos meubles, votre rythme. La maison reste votre maison." },
  { icon: "🛡️", title: "Sécurité préservée", description: "Présence vigilante, prévention des chutes, intervention rapide en cas de souci." },
  { icon: "👫", title: "Lien social maintenu", description: "Sorties, conversation, accompagnement aux activités. L'isolement combattu activement." },
  { icon: "💛", title: "Dignité respectée", description: "Aide qui n'infantilise pas. Vos choix priment, votre rythme dicte." },
  { icon: "🎯", title: "Aides activées", description: "APA, crédit d'impôt 50 %, caisses retraite : nous montons les dossiers." },
  { icon: "📞", title: "Famille rassurée", description: "Coordinatrice joignable, compte-rendu mensuel partagé avec vos proches." },
];

export default function SeniorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Seniors</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow !text-secondary">Pour les seniors et leurs familles</span>
              <h1 className="text-white">
                Vieillir chez soi.
                <br />
                <span className="text-secondary">Sereinement. Dignement.</span>
              </h1>
              <p className="lead !text-white/90 mt-5">
                À 70, 80 ou 95 ans, votre maison reste votre maison. Notre rôle :
                vous donner les bonnes mains, le bon moment, pour que vous y restiez
                en sécurité — sans renoncer à rien.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button href="/demander-devis" variant="primary" size="lg" glow>
                  Devis gratuit en 3 min
                </Button>
                <Button
                  href={`tel:${siteConfig.phone.mainE164}`}
                  variant="white"
                  size="lg"
                  icon={<span aria-hidden="true">📞</span>}
                >
                  {siteConfig.phone.main}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-80 sm:h-[440px] rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src="/images/about/aide-personnes-agees.jpg"
                  alt="Personne âgée à son domicile, accompagnée"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PARCOURS PAR ÂGE */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Le bon accompagnement, au bon moment"
            title="Vieillir chez soi se prépare en 4 temps"
            description="Anticiper, sécuriser, soutenir, accompagner — chaque étape a ses bons réflexes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {journeySteps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-warm rounded-2xl p-6 hover:bg-white hover:shadow-lifted transition-all border border-transparent hover:border-border"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold mb-4">
                  {idx + 1}
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-secondary-50 text-secondary-dark text-xs font-semibold rounded-full mb-2">
                  {step.age}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{step.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BÉNÉFICES */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Ce que vous gagnez"
            title="6 bénéfices concrets pour vous et votre famille"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 border border-border shadow-card hover:shadow-lifted transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mb-4"
                  aria-hidden="true"
                >
                  {b.icon}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{b.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Nos services pour seniors"
            title="Une réponse à chaque besoin du grand âge"
            description="Du simple coup de main hebdomadaire à l'accompagnement complet."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {seniorServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-warm rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
              >
                <div className="relative h-44">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-light line-clamp-2 mb-3 flex-1">
                    {service.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/services" variant="outline" size="md">
              Voir tous les services →
            </Button>
          </div>
        </Container>
      </section>

      <AidesSimulator />

      <EngagementsBlock />

      <FinalCTA />
    </>
  );
}
