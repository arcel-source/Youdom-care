import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { agencies, agenciesByRegion } from "@/lib/agencies";

export const metadata: Metadata = {
  title: "Nos agences — Aide à domicile en Île-de-France | Youdom Care",
  description:
    "Découvrez les villes où nos auxiliaires interviennent : Paris, Boulogne, Vincennes, Le Kremlin-Bicêtre, Levallois… Plus de 10 communes couvertes en IDF.",
};

const regionOrder = ["Paris", "Petite couronne", "Grande couronne"];

export default function AgenceIndexPage() {
  return (
    <>
      <PageHero
        size="md"
        bgImage="/images/curated/qui-sommes-nous-couple-indoors.jpg"
        eyebrow="Nos zones d'intervention"
        breadcrumb={[{ name: "Accueil", href: "/" }, { name: "Nos agences" }]}
        title={
          <>
            Une présence locale,
            <br />
            <span className="text-secondary">partout en Île-de-France.</span>
          </>
        }
        subtitle={`${agencies.length} villes desservies. Des coordinatrices proches de chez vous. Des auxiliaires qui connaissent votre quartier, vos hôpitaux, vos commerces.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          {regionOrder.map((region) => {
            const list = agenciesByRegion[region];
            if (!list || list.length === 0) return null;
            return (
              <div key={region} className="mb-12 last:mb-0">
                <div className="flex items-baseline justify-between mb-6">
                  <h2 className="text-primary-dark m-0">{region}</h2>
                  <span className="text-sm text-text-muted">
                    {list.length} ville{list.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {list.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/agence/${a.slug}`}
                      className="group bg-warm rounded-2xl p-6 border border-border card-interactive"
                    >
                      <div className="text-xs uppercase tracking-wider text-text-muted mb-2">
                        {a.zipCodes.join(", ")} · {a.department.name}
                      </div>
                      <h3 className="text-lg font-bold text-primary-dark group-hover:text-primary transition-colors">
                        {a.city}
                      </h3>
                      <p className="text-sm text-text-light line-clamp-2 mt-2">
                        {a.coverage.slice(0, 4).join(" · ")}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-4 group-hover:gap-2 transition-all">
                        Voir l&apos;agence →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-12 p-8 bg-primary-50 rounded-3xl text-center border border-primary-100">
            <h3 className="text-primary-dark mb-2">Votre ville n&apos;est pas listée ?</h3>
            <p className="text-text-light mb-5 max-w-xl mx-auto">
              Nous étendons régulièrement nos zones d&apos;intervention. Appelez-nous
              pour vérifier la disponibilité dans votre commune — ou pour devenir
              partenaire local.
            </p>
            <Button href="/contact" variant="primary" size="md" glow>
              Vérifier ma zone
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
