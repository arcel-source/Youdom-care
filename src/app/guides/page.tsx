import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides gratuits — APA, aidants, MDPH, Alzheimer | Youdom Care",
  description:
    "Téléchargez gratuitement nos 6 guides PDF : aides 2026, adaptation domicile, droits des aidants, sortie d'hôpital, Alzheimer, MDPH. Ressources fiables.",
};

const colorMap: Record<string, string> = {
  primary: "bg-primary-50 border-primary/20",
  accent: "bg-accent-50 border-accent/20",
  secondary: "bg-secondary-50 border-secondary/20",
};

export default function GuidesIndexPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Ressources gratuites"
        breadcrumb={[{ name: "Accueil", href: "/" }, { name: "Guides gratuits" }]}
        title={
          <>
            Nos guides PDF gratuits.
            <br />
            <span className="text-secondary">Comprendre, anticiper, défendre.</span>
          </>
        }
        subtitle={`${guides.length} guides, plus de 180 pages d'information fiable : droits, aides, démarches, accompagnement. Téléchargement gratuit contre votre email.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Notre bibliothèque"
            title="6 guides essentiels pour avancer sereinement"
            description="Pas de spam, désinscription en 1 clic. Vous gardez vos guides à vie."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={g.cover}
                    alt={g.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/55 to-transparent" />
                  <div
                    className={`absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${colorMap[g.color] ?? colorMap.primary}`}
                  >
                    <span aria-hidden="true">{g.emoji}</span>
                    {g.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs uppercase tracking-wider text-text-muted mb-1">
                    Guide PDF · {g.pages} pages
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-sm text-text-light line-clamp-3 flex-1">
                    {g.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-4 group-hover:gap-2 transition-all">
                    Télécharger gratuitement →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
