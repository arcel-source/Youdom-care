import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tous nos services d'aide à domicile — Paris & Île-de-France",
  description:
    "12 services d'aide à domicile pour personnes âgées, en situation de handicap ou aidants : aide quotidienne, ménage, présence de nuit, sorties, retour d'hospitalisation, Alzheimer-Parkinson. Devis gratuit.",
};

const categories = [
  {
    id: "autonomie",
    label: "Autonomie au quotidien",
    description: "Les essentiels pour vivre chez soi avec dignité",
    slugs: ["aide-personnes-agees", "aide-handicap", "aide-menagere"],
    color: "primary",
  },
  {
    id: "presence",
    label: "Présence & sécurité",
    description: "Vigilance jour et nuit, jamais seul",
    slugs: ["garde-nuit", "teleassistance", "accompagnement-sorties"],
    color: "accent",
  },
  {
    id: "specialise",
    label: "Accompagnement spécialisé",
    description: "Pour les situations qui demandent une expertise",
    slugs: ["alzheimer-parkinson", "retour-hospitalisation", "garde-enfants-handicap"],
    color: "secondary",
  },
  {
    id: "mobilite",
    label: "Mobilité & démarches",
    description: "Pour rester actif et alléger l'administratif",
    slugs: ["transport-pmr", "assistance-administrative", "assistance-informatique"],
    color: "primary",
  },
] as const;

export default function ServicesIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Notre catalogue</span>
            <h1 className="text-white">
              12 services pour rester chez soi,
              <br />
              <span className="text-secondary">en sécurité, entouré, écouté.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Du simple coup de main hebdomadaire au suivi spécialisé Alzheimer 7j/7,
              nous construisons votre plan d&apos;aide sur-mesure. Le même intervenant,
              des tarifs transparents, 50 % de crédit d&apos;impôt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Demander un devis gratuit
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

      {/* CATEGORIES */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          {categories.map((cat, catIdx) => {
            const catServices = services.filter((s) =>
              (cat.slugs as readonly string[]).includes(s.slug)
            );
            if (catServices.length === 0) return null;

            return (
              <div
                key={cat.id}
                className={catIdx > 0 ? "mt-16 sm:mt-20" : ""}
              >
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
                  {catServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/55 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur text-primary-dark text-xs font-semibold">
                          {service.short}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-text-light leading-relaxed mb-4 flex-1">
                          {service.summary}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                          Voir le détail →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
