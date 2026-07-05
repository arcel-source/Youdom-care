import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { agencies, getAgencyBySlug } from "@/lib/agencies";
import { siteConfig, services, brandStats } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

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
    title: agency.metaTitle,
    description: agency.metaDescription,
    alternates: { canonical: `/agence/${agency.slug}` },
    openGraph: {
      title: `${agency.metaTitle} | ${siteConfig.name}`,
      description: agency.metaDescription,
      url: `${siteConfig.url}/agence/${agency.slug}`,
      type: "website",
    },
  };
}

const featuredServices = services.filter((s) => s.featured).slice(0, 6);

function localBusinessAgencySchema(agency: NonNullable<ReturnType<typeof getAgencyBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/agence/${agency.slug}#localbusiness`,
    name: `${siteConfig.name} — ${agency.city}`,
    description: agency.metaDescription,
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
    areaServed: [
      { "@type": "City", name: agency.city },
      ...agency.neighborhoods.map((n) => ({ "@type": "Place", name: n })),
    ],
    parentOrganization: { "@id": `${siteConfig.url}#organization` },
    priceRange: "€€",
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
  const { lat, lng } = agency.geo;
  const bbox = `${lng - 0.025},${lat - 0.012},${lng + 0.025},${lat + 0.012}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <>
      <JsonLd
        data={[
          localBusinessAgencySchema(agency),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Nos agences", url: "/agence" },
            { name: agency.city, url: `/agence/${agency.slug}` },
          ]),
          faqSchema(agency.faq),
        ]}
      />

      <PageHero
        bgImage="/images/curated/home-hero-couple-warm.jpg"
        eyebrow={`${agency.zipCodes.join(" · ")} · ${agency.department.name}`}
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Nos agences", href: "/agence" },
          { name: agency.city },
        ]}
        title={<>{agency.heroTitle}</>}
        subtitle={agency.heroSubtitle}
        primaryCta={{ label: "Devis gratuit en 3 min", href: "/demander-devis" }}
        secondaryCta={{
          label: siteConfig.phone.main,
          href: `tel:${siteConfig.phone.mainE164}`,
          icon: <span aria-hidden="true">📞</span>,
        }}
        footnote={
          <>
            <span aria-hidden="true">📍</span> {agency.city} et alentours ·{" "}
            <span aria-hidden="true">⏱️</span> Réponse en moins de 2 h ·{" "}
            <span aria-hidden="true">🏠</span> Visite gratuite
          </>
        }
      />

      {/* Bande de réassurance locale */}
      <section className="bg-white border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <div className="px-3 py-5 text-center">
              <div className="text-xl sm:text-3xl font-bold text-primary-dark">48 h</div>
              <p className="text-xs text-text-light mt-1">démarrage possible</p>
            </div>
            <div className="px-3 py-5 text-center">
              <div className="text-xl sm:text-3xl font-bold text-primary-dark">{brandStats.satisfactionRate}%</div>
              <p className="text-xs text-text-light mt-1">de satisfaction</p>
            </div>
            <div className="px-3 py-5 text-center">
              <div className="text-xl sm:text-3xl font-bold text-primary-dark">50%</div>
              <p className="text-xs text-text-light mt-1">de crédit d&apos;impôt</p>
            </div>
            <div className="px-3 py-5 text-center">
              <div className="text-xl sm:text-3xl font-bold text-primary-dark">CDI</div>
              <p className="text-xs text-text-light mt-1">auxiliaires salariées</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTEXTE LOCAL + CARTE */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <span className="eyebrow">Notre présence à {agency.shortName}</span>
              <h2>Une aide à domicile ancrée dans {agency.city}</h2>
              <p className="lead mt-4">{agency.intro}</p>
              <p className="mt-4 text-text-light leading-relaxed">{agency.localContext}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {agency.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-dark rounded-full text-sm font-medium"
                  >
                    <span aria-hidden="true" className="text-primary">📍</span>
                    {n}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="rounded-3xl overflow-hidden border border-border shadow-lifted bg-white">
                <iframe
                  title={`Carte de ${agency.city}`}
                  src={mapSrc}
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
                <div className="p-6 grid sm:grid-cols-2 gap-5">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-2">
                      🏥 Établissements de santé
                    </div>
                    <ul className="space-y-1 text-sm text-text">
                      {agency.hospitals.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-2">
                      🚇 Accès & transports
                    </div>
                    <ul className="space-y-1 text-sm text-text">
                      {agency.transport.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SPÉCIFICITÉS LOCALES */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Ce qui change avec une équipe locale"
            title={`Pourquoi nos auxiliaires connaissent ${agency.city}`}
            description="Une couverture locale, ce n'est pas qu'un trajet plus court : c'est une connaissance fine des hôpitaux, médecins et partenaires sociaux du secteur."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {agency.highlights.map((h, idx) => (
              <Reveal key={idx} delay={idx * 90} className="h-full">
                <div className="bg-white rounded-2xl p-6 border border-border card-lift h-full">
                  <div className="text-secondary text-3xl font-bold mb-3">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm text-text leading-relaxed">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Aides locales */}
          <Reveal>
            <div className="mt-10 bg-primary text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="text-4xl shrink-0" aria-hidden="true">💶</div>
              <div>
                <h3 className="text-white text-lg mb-2">Vos aides financières à {agency.city}</h3>
                <p className="text-white/85 leading-relaxed">{agency.localAid}</p>
                <p className="text-white/85 leading-relaxed mt-2">
                  Notre coordinatrice vérifie vos droits gratuitement (APA, PCH, crédit
                  d&apos;impôt 50 %, caisses de retraite) et monte les dossiers à votre place.
                </p>
                <Link
                  href="/aides-financieres"
                  className="inline-block mt-3 text-secondary font-bold hover:underline"
                >
                  Toutes les aides financières →
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Tous nos services près de chez vous"
            title={`Nos services d'aide à domicile à ${agency.city}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredServices.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 70} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-border card-lift flex flex-col h-full"
                >
                  <div className="relative h-44">
                    <Image
                      src={service.image}
                      alt={`${service.title} à ${agency.city}`}
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TÉMOIGNAGE LOCAL */}
      {agency.testimonial ? (
        <section className="bg-warm-grain py-14 sm:py-20">
          <Container>
            <Reveal>
              <figure className="max-w-3xl mx-auto text-center">
                <div className="text-secondary text-5xl leading-none mb-3" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="text-xl sm:text-2xl font-display text-primary-dark leading-snug">
                  {agency.testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm text-text-light font-semibold">
                  {agency.testimonial.author} · {agency.city}
                </figcaption>
              </figure>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <EngagementsBlock />

      {/* FAQ LOCALE */}
      <ServiceFAQ
        title={`Questions fréquentes — aide à domicile à ${agency.city}`}
        items={agency.faq}
      />

      {/* AUTRES AGENCES */}
      <section className="bg-warm-grain py-16 sm:py-20">
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
                className="group bg-white rounded-xl p-4 border border-border hover:border-primary card-lift text-center"
              >
                <div className="font-bold text-primary-dark group-hover:text-primary transition-colors">
                  {a.city}
                </div>
                <div className="text-xs text-text-muted mt-1">{a.zipCodes.join(", ")}</div>
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
