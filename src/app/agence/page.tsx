import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import FinalCTA from "@/components/sections/FinalCTA";
import { agencies } from "@/lib/agencies";
import { services, siteConfig, brandStats } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Aide à domicile à Paris & en Île-de-France — Youdom Care",
  description:
    "Aide à domicile pour seniors et personnes en situation de handicap à Paris et en petite couronne (75, 92, 93, 94). Auxiliaires locales en CDI, 21 communes desservies. Devis gratuit sous 24 h.",
  alternates: { canonical: "/agence" },
};

// Regroupement par département pour un maillage local structuré.
const departmentOrder = [
  { code: "75", name: "Paris" },
  { code: "92", name: "Hauts-de-Seine" },
  { code: "93", name: "Seine-Saint-Denis" },
  { code: "94", name: "Val-de-Marne" },
];

const featuredServices = services.filter((s) => s.featured).slice(0, 6);

const pillarFaq = [
  {
    question: "Dans quelles villes intervenez-vous en Île-de-France ?",
    answer:
      "Nous couvrons Paris intra-muros (5ᵉ, 11ᵉ, 12ᵉ, 13ᵉ, 14ᵉ, 15ᵉ, 20ᵉ) et de nombreuses communes de la petite couronne : Hauts-de-Seine (Boulogne, Levallois, Issy, Neuilly), Seine-Saint-Denis (Montreuil) et Val-de-Marne (Vincennes, Saint-Mandé, Ivry, Kremlin-Bicêtre, Charenton, Maisons-Alfort, Nogent, Fontenay, Créteil). Notre siège est rue de Lyon, dans le 12ᵉ.",
  },
  {
    question: "Comment garantissez-vous une vraie présence locale ?",
    answer:
      "Nos auxiliaires interviennent dans un secteur géographique restreint, qu'elles connaissent : les hôpitaux, les médecins, les pharmacies et les commerces du quartier. Cela réduit les temps de trajet, garantit la ponctualité et permet des remplacements rapides en cas d'imprévu.",
  },
  {
    question: "Qui verse les aides (APA, PCH) selon mon département ?",
    answer:
      "À Paris, l'APA est instruite par le CASVP (Ville de Paris). En petite couronne, elle relève du Conseil départemental : Hauts-de-Seine (92), Seine-Saint-Denis (93) ou Val-de-Marne (94). Nos coordinatrices connaissent les circuits de chaque département et montent les dossiers à votre place.",
  },
  {
    question: "Ma commune n'apparaît pas dans la liste. Intervenez-vous quand même ?",
    answer:
      "Nous étendons régulièrement nos zones. Même si votre ville n'a pas encore de page dédiée, appelez-nous : il est très probable que nous couvrions votre secteur ou une commune limitrophe.",
  },
];

export default function AgenceIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Aide à domicile en Île-de-France", url: "/agence" },
          ]),
          faqSchema(pillarFaq),
        ]}
      />

      <PageHero
        size="md"
        bgImage="/images/curated/qui-sommes-nous-couple-indoors.jpg"
        eyebrow="Paris & petite couronne"
        breadcrumb={[{ name: "Accueil", href: "/" }, { name: "Île-de-France" }]}
        title={
          <>
            L&apos;aide à domicile,
            <br />
            <span className="text-secondary">au coin de votre rue.</span>
          </>
        }
        subtitle={`${agencies.length} communes desservies à Paris et en petite couronne. Des coordinatrices proches de chez vous, des auxiliaires qui connaissent votre quartier, vos hôpitaux, vos commerces.`}
        primaryCta={{ label: "Devis gratuit en 3 min", href: "/demander-devis" }}
        secondaryCta={{
          label: siteConfig.phone.main,
          href: `tel:${siteConfig.phone.mainE164}`,
          icon: <span aria-hidden="true">📞</span>,
        }}
      />

      {/* Réassurance chiffrée */}
      <section className="bg-white border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <div className="px-3 py-6 text-center">
              <div className="text-2xl sm:text-4xl font-bold text-primary-dark">{agencies.length}</div>
              <p className="text-xs sm:text-sm text-text-light mt-1">communes desservies</p>
            </div>
            <div className="px-3 py-6 text-center">
              <div className="text-2xl sm:text-4xl font-bold text-primary-dark">4</div>
              <p className="text-xs sm:text-sm text-text-light mt-1">départements (75·92·93·94)</p>
            </div>
            <div className="px-3 py-6 text-center">
              <div className="text-2xl sm:text-4xl font-bold text-primary-dark">{brandStats.familiesAccompanied}+</div>
              <p className="text-xs sm:text-sm text-text-light mt-1">familles accompagnées</p>
            </div>
            <div className="px-3 py-6 text-center">
              <div className="text-2xl sm:text-4xl font-bold text-primary-dark">48 h</div>
              <p className="text-xs sm:text-sm text-text-light mt-1">démarrage possible</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro pilier */}
      <section className="bg-white py-14 sm:py-20">
        <Container size="narrow">
          <div className="text-center">
            <span className="eyebrow">Une aide à domicile de proximité</span>
            <h2>Bien plus qu&apos;un trajet plus court</h2>
            <p className="lead mt-4">
              Depuis notre siège du 12ᵉ arrondissement, nous avons bâti un maillage
              d&apos;auxiliaires de vie en CDI qui interviennent au plus près de chez
              vous. Choisir une aide à domicile locale, c&apos;est bénéficier d&apos;une
              équipe qui connaît votre environnement — l&apos;hôpital où votre proche est
              suivi, le marché où faire les courses, le pharmacien du coin — et qui
              réagit vite, sans dépendre des embouteillages franciliens.
            </p>
          </div>
        </Container>
      </section>

      {/* Communes par département */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Nos communes</span>
            <h2>Trouvez votre ville</h2>
            <p className="lead mt-3">
              Chaque commune a sa page dédiée, avec ses hôpitaux, ses quartiers, ses
              transports et ses aides locales.
            </p>
          </div>

          {departmentOrder.map((dept) => {
            const list = agencies.filter((a) => a.department.code === dept.code);
            if (list.length === 0) return null;
            return (
              <div key={dept.code} className="mb-12 last:mb-0">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="text-primary-dark m-0">
                    {dept.name} <span className="text-text-muted font-normal">({dept.code})</span>
                  </h3>
                  <span className="text-sm text-text-muted">
                    {list.length} commune{list.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {list.map((a, i) => (
                    <Reveal key={a.slug} delay={i * 50} className="h-full">
                      <Link
                        href={`/agence/${a.slug}`}
                        className="group bg-white rounded-2xl p-6 border border-border card-lift block h-full"
                      >
                        <div className="text-xs uppercase tracking-wider text-text-muted mb-2">
                          {a.zipCodes.join(", ")}
                        </div>
                        <h4 className="text-lg font-bold text-primary-dark group-hover:text-primary transition-colors">
                          {a.city}
                        </h4>
                        <p className="text-sm text-text-light line-clamp-2 mt-2">
                          {a.neighborhoods.slice(0, 4).join(" · ")}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-4 group-hover:gap-2 transition-all">
                          Voir l&apos;agence →
                        </span>
                      </Link>
                    </Reveal>
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

      {/* Services disponibles partout */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Partout en Île-de-France</span>
            <h2>Tous nos services, dans chaque commune</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-warm rounded-xl p-4 border border-border hover:border-primary card-lift text-center"
              >
                <div className="font-bold text-primary-dark text-sm group-hover:text-primary transition-colors">
                  {s.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/services" variant="outline" size="md">
              Voir les 12 services →
            </Button>
          </div>
        </Container>
      </section>

      {/* Aides par département */}
      <section className="bg-warm py-16 sm:py-20">
        <Container size="narrow">
          <div className="text-center">
            <span className="eyebrow">Financement local</span>
            <h2>Les aides selon votre département</h2>
            <p className="lead mt-4">
              APA à Paris via le CASVP, ou via le Conseil départemental des Hauts-de-Seine,
              de Seine-Saint-Denis ou du Val-de-Marne : nos coordinatrices connaissent
              chaque circuit et montent les dossiers à votre place. Ajoutez-y le crédit
              d&apos;impôt de 50 %, et le reste à charge fond.
            </p>
            <div className="mt-6">
              <Button href="/aides-financieres" variant="primary" size="md" glow>
                Découvrir toutes les aides
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="narrow">
          <div className="text-center mb-8">
            <span className="eyebrow">Questions fréquentes</span>
            <h2>L&apos;aide à domicile en Île-de-France</h2>
          </div>
          <div className="space-y-3">
            {pillarFaq.map((f) => (
              <details
                key={f.question}
                className="group bg-warm rounded-2xl border border-border p-5 open:shadow-card"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-primary-dark">
                  {f.question}
                  <span className="text-primary shrink-0 transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-sm text-text-light leading-relaxed mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
