import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import FinalCTA from "@/components/sections/FinalCTA";
import { services, siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Tous nos services d'aide à domicile — Paris & Île-de-France",
  description:
    "12 services d'aide à domicile pour personnes âgées, en situation de handicap ou aidants : aide quotidienne, ménage, présence de nuit, sorties, retour d'hospitalisation, Alzheimer-Parkinson. Devis gratuit.",
  alternates: { canonical: "/services" },
};

const audienceLabels: Record<string, string> = {
  senior: "Seniors",
  handicap: "Handicap",
  aidant: "Aidants",
};

/**
 * Ordre volontaire : on présente d'abord les besoins essentiels du maintien à
 * domicile, puis l'accompagnement spécialisé (fort enjeu), la présence/sécurité,
 * et enfin la mobilité et les démarches.
 */
const categories = [
  {
    id: "autonomie",
    label: "Autonomie au quotidien",
    description: "Les essentiels pour vivre chez soi avec dignité",
    slugs: ["aide-personnes-agees", "aide-handicap", "aide-menagere"],
  },
  {
    id: "specialise",
    label: "Accompagnement spécialisé",
    description: "Pour les situations qui demandent une expertise",
    slugs: ["alzheimer-parkinson", "retour-hospitalisation", "garde-enfants-handicap"],
  },
  {
    id: "presence",
    label: "Présence & sécurité",
    description: "Vigilance jour et nuit, jamais seul",
    slugs: ["garde-nuit", "teleassistance", "accompagnement-sorties"],
  },
  {
    id: "mobilite",
    label: "Mobilité & démarches",
    description: "Pour rester actif et alléger l'administratif",
    slugs: ["transport-pmr", "assistance-administrative", "assistance-informatique"],
  },
] as const;

const perks = [
  { icon: "🤝", label: "Le même intervenant" },
  { icon: "💰", label: "50 % de crédit d'impôt" },
  { icon: "⏱️", label: "Réponse en 2 h" },
  { icon: "🛡️", label: "Sans engagement" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services d'aide à domicile Youdom Care",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${siteConfig.url}/services/${s.slug}`,
    name: s.title,
  })),
};

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListSchema,
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Nos services", url: "/services" },
          ]),
        ]}
      />

      <PageHero
        bgImage="/images/curated/service-aide-personnes-agees.jpg"
        eyebrow="Notre catalogue"
        breadcrumb={[{ name: "Accueil", href: "/" }, { name: "Nos services" }]}
        title={
          <>
            12 services pour rester chez soi,
            <br />
            <span className="text-secondary">en sécurité, entouré, écouté.</span>
          </>
        }
        subtitle="Du simple coup de main hebdomadaire au suivi spécialisé Alzheimer 7j/7, nous construisons votre plan d'aide sur-mesure. Le même intervenant, des tarifs transparents, 50 % de crédit d'impôt."
        primaryCta={{ label: "Demander un devis gratuit", href: "/demander-devis" }}
        secondaryCta={{
          label: siteConfig.phone.main,
          href: `tel:${siteConfig.phone.mainE164}`,
          icon: <span aria-hidden="true">📞</span>,
        }}
      />

      {/* Bande d'avantages */}
      <section className="bg-white border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {perks.map((p) => (
              <div key={p.label} className="px-3 py-5 flex items-center justify-center gap-2 text-center">
                <span className="text-xl" aria-hidden="true">{p.icon}</span>
                <span className="text-sm font-semibold text-primary-dark">{p.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CATÉGORIES */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          {categories.map((cat, catIdx) => {
            const catServices = cat.slugs
              .map((slug) => services.find((s) => s.slug === slug))
              .filter((s): s is (typeof services)[number] => Boolean(s));
            if (catServices.length === 0) return null;

            return (
              <div key={cat.id} className={catIdx > 0 ? "mt-16 sm:mt-20" : ""}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="eyebrow">{`0${catIdx + 1}`}</span>
                    <h2 className="text-primary-dark">{cat.label}</h2>
                    <p className="text-text-light mt-2">{cat.description}</p>
                  </div>
                  <span className="text-sm text-text-muted shrink-0">
                    {catServices.length} service{catServices.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {catServices.map((service, i) => (
                    <Reveal key={service.slug} delay={i * 70} className="h-full">
                      <Link
                        href={`/services/${service.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-border card-lift flex flex-col h-full"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur text-primary-dark text-xs font-semibold">
                            {service.short}
                          </span>
                          {service.featured ? (
                            <span className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full bg-secondary text-primary-dark text-xs font-bold">
                              ★ Populaire
                            </span>
                          ) : null}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-text-light leading-relaxed mb-4 flex-1">
                            {service.summary}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {service.audience.map((a) => (
                              <span
                                key={a}
                                className="inline-block px-2.5 py-0.5 rounded-full bg-primary-50 text-primary text-xs font-semibold"
                              >
                                {audienceLabels[a] ?? a}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                            Voir le détail →
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* AIDE AU CHOIX */}
      <section className="bg-primary text-white py-14 sm:py-20">
        <Container>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="eyebrow !text-secondary">Vous hésitez ?</span>
              <h2 className="text-white">Un doute sur le bon service ? On vous guide.</h2>
              <p className="lead !text-white/85 mt-3">
                Décrivez votre situation en 3 minutes : notre coordinatrice identifie
                les services adaptés, combine plusieurs prestations si besoin, et
                chiffre votre reste à charge réel — gratuitement.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Être guidé gratuitement
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
        </Container>
      </section>

      {/* SERVICE SUR-MESURE */}
      <section className="bg-warm py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">Un besoin pas listé ?</span>
            <h2>Nous construisons aussi des plans d&apos;aide sur-mesure</h2>
            <p className="lead mt-4">
              Vous avez un besoin atypique, urgent, ou qui combine plusieurs services ?
              Nos coordinateurs construisent des plans hybrides adaptés à votre vraie
              vie. Un appel suffit pour qu&apos;on s&apos;en occupe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Demander un devis personnalisé
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Décrire ma situation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
