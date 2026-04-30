import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { agencies, getAgencyBySlug } from "@/lib/agencies";
import { siteConfig, services, brandStats } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/structured-data";

type Params = { ville: string };

export async function generateStaticParams(): Promise<Params[]> {
  return agencies.map((a) => ({ ville: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { ville } = await params;
  const agency = getAgencyBySlug(ville);
  if (!agency) return { title: "Agence introuvable" };

  return {
    title: `Aide à domicile à ${agency.city} (${agency.zipCodes.join(", ")}) | Youdom Care`,
    description: `Aide à domicile pour seniors et personnes en situation de handicap à ${agency.city}. Auxiliaires locales, démarrage 48 h, APA + crédit d'impôt 50 %. Devis gratuit.`,
    alternates: {
      canonical: `${siteConfig.url}/agence/${agency.slug}`,
    },
  };
}

const featuredServices = services.filter((s) => s.featured).slice(0, 6);

function localBusinessAgencySchema(agency: ReturnType<typeof getAgencyBySlug>) {
  if (!agency) return null;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/agence/${agency.slug}#localbusiness`,
    name: `${siteConfig.name} — ${agency.city}`,
    description: `Aide à domicile à ${agency.city}. Auxiliaires de vie en CDI, formées, fidèles à votre famille.`,
    url: `${siteConfig.url}/agence/${agency.slug}`,
    telephone: siteConfig.phone.mainE164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: agency.city,
      postalCode: agency.zipCodes[0],
      addressRegion: agency.department.name,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: agency.geo.lat,
      longitude: agency.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: agency.city,
    },
    parentOrganization: {
      "@id": `${siteConfig.url}#organization`,
    },
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "220",
      bestRating: "5",
    },
  };
}

export default async function AgencePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { ville } = await params;
  const agency = getAgencyBySlug(ville);
  if (!agency) notFound();

  const otherAgencies = agencies.filter((a) => a.slug !== agency.slug).slice(0, 4);
  const lbSchema = localBusinessAgencySchema(agency);

  return (
    <>
      <JsonLd
        data={[
          ...(lbSchema ? [lbSchema] : []),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Agences", url: "/agence" },
            { name: agency.city, url: `/agence/${agency.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />
        <Container size="wide" className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/agence" className="hover:text-secondary transition-colors">Agences</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">{agency.city}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-bold text-white uppercase tracking-wider mb-5">
                {agency.zipCodes.join(", ")} · {agency.department.name}
              </span>

              <h1 className="text-white">
                Aide à domicile
                <br />
                <span className="text-secondary">à {agency.city}.</span>
              </h1>

              <p className="lead !text-white/90 mt-5">{agency.intro}</p>

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

              <p className="text-sm text-white/70 mt-5">
                <span aria-hidden="true">📍</span> {agency.city} et alentours •
                <span aria-hidden="true"> ⏱️</span> Réponse en moins de 2 h •
                <span aria-hidden="true"> 🏠</span> Visite gratuite
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15 col-span-2">
                <div className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">
                  Quartiers couverts
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {agency.coverage.map((c) => (
                    <span
                      key={c}
                      className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              {agency.population ? (
                <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15">
                  <div className="text-2xl font-bold text-secondary">
                    {agency.population.toLocaleString("fr-FR")}
                  </div>
                  <p className="text-xs text-white/80">habitants</p>
                </div>
              ) : null}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15">
                <div className="text-2xl font-bold text-secondary">{brandStats.satisfactionRate}%</div>
                <p className="text-xs text-white/80">de satisfaction client</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SPÉCIFICITÉS LOCALES */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow={`Notre présence à ${agency.city}`}
            title={`Pourquoi nos auxiliaires connaissent ${agency.city}`}
            description="Une couverture locale, ce n'est pas qu'un trajet plus court. C'est une connaissance fine des hôpitaux, médecins, partenaires sociaux du quartier."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {agency.highlights.map((h, idx) => (
              <div
                key={idx}
                className="bg-warm rounded-2xl p-6 border border-border"
              >
                <div className="text-secondary text-3xl font-bold mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-text leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES PHARES */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Tous nos services"
            title={`Nos services disponibles à ${agency.city}`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
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
                  <p className="text-sm text-text-light line-clamp-2 flex-1">
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <EngagementsBlock />

      {/* AUTRES AGENCES */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Autres villes desservies"
            title="Nous intervenons aussi près de chez vous"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {otherAgencies.map((a) => (
              <Link
                key={a.slug}
                href={`/agence/${a.slug}`}
                className="group bg-warm rounded-xl p-4 border border-border hover:border-primary transition-colors text-center"
              >
                <div className="font-bold text-primary-dark group-hover:text-primary transition-colors">
                  {a.city}
                </div>
                <div className="text-xs text-text-muted mt-1">
                  {a.zipCodes.join(", ")}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/agence" variant="outline" size="md">
              Voir toutes les agences →
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
