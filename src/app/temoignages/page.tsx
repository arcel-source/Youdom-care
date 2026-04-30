import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";
import TemoignagesGrid from "./TemoignagesGrid";
import { brandStats, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Témoignages — ce que disent nos familles | Youdom Care",
  description:
    "12+ témoignages vérifiés de familles, bénéficiaires et prescripteurs. 4,9/5 sur Google, 98 % de satisfaction. Histoires vraies, mots authentiques.",
};

const stats = [
  { value: `${brandStats.satisfactionRate}%`, label: "de satisfaction client" },
  { value: "4,9/5", label: "note moyenne Google" },
  { value: "220+", label: "avis Google vérifiés" },
  { value: `${brandStats.familiesAccompanied}+`, label: "familles accompagnées" },
];

const recommendations = [
  {
    quote: "Service exceptionnel, équipe à l'écoute, transparence totale sur les tarifs.",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote: "Coordinatrice qui répond en moins de 2 h, jamais vu ça dans le secteur.",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote: "On a essayé 3 SAAD avant. Seul Youdom Care tient ses engagements.",
    source: "Avis client direct",
    rating: 5,
  },
];

export default function TemoignagesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
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
            <span className="text-white/50">Témoignages</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Histoires vraies, mots authentiques</span>
            <h1 className="text-white">
              Ce que disent les familles
              <br />
              <span className="text-secondary">qu&apos;on accompagne.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Pas de stock photos, pas de slogans creux : juste des familles, des
              bénéficiaires, des prescripteurs qui ont accepté de raconter ce que
              notre accompagnement a changé pour eux.
            </p>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="bg-white py-12">
        <Container size="wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-5xl font-bold text-primary-dark mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-text-light">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TÉMOIGNAGES INTERACTIFS */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Toute notre communauté"
            title="Filtrez par service pour trouver une expérience proche de la vôtre"
            description="Chaque témoignage est partagé avec accord. Noms réels (initiale du nom), villes réelles, durée d'accompagnement vraie."
          />

          <TemoignagesGrid />
        </Container>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Sur Google"
            title="220+ avis vérifiés, 4,9/5 de moyenne"
            description="Nous ne masquons pas un seul avis. Les rares retours négatifs nous aident à progresser."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {recommendations.map((r, idx) => (
              <div
                key={idx}
                className="bg-warm rounded-2xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-3 text-secondary text-lg">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-text leading-relaxed text-sm italic mb-3">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="text-xs text-text-muted font-semibold">
                  — {r.source}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=youdom+care+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Voir tous les avis Google →
            </a>
          </p>
        </Container>
      </section>

      {/* APPEL TÉMOIGNAGE */}
      <section className="bg-secondary-50 py-16">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-secondary/30 text-center">
            <div className="text-4xl mb-3" aria-hidden="true">💛</div>
            <h2 className="text-primary-dark">Vous êtes accompagné par Youdom Care ?</h2>
            <p className="text-text-light mb-6 max-w-xl mx-auto mt-3">
              Votre histoire peut aider d&apos;autres familles à franchir le pas.
              Témoigner, c&apos;est rendre service à ceux qui hésitent encore.
            </p>
            <Button
              href={`mailto:${siteConfig.email}?subject=Je%20souhaite%20t%C3%A9moigner`}
              variant="primary"
              size="md"
              glow
            >
              Partager mon expérience
            </Button>
          </div>
        </Container>
      </section>

      <EngagementsBlock />

      <FinalCTA />
    </>
  );
}
