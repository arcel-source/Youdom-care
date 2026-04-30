import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";
import { siteConfig, brandStats, agrements } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Qui sommes-nous — l'histoire de Youdom Care | Aide à domicile IDF",
  description:
    "Youdom Care, aide à domicile en Île-de-France depuis 2014 : notre histoire, nos valeurs, nos agréments, notre équipe. 500+ familles accompagnées, 98 % de satisfaction.",
};

const values = [
  {
    icon: "🤝",
    title: "Humanité",
    description:
      "Avant la prestation : la personne. Avant le contrat : la confiance. Nous prenons le temps qu'il faut.",
  },
  {
    icon: "🏠",
    title: "Maintien à domicile",
    description:
      "Vivre chez soi est un droit. Notre mission : rendre cela possible le plus longtemps possible, dans la dignité.",
  },
  {
    icon: "💎",
    title: "Excellence opérationnelle",
    description:
      "Recrutement strict, formations continues, supervision qualité, charte signée. La qualité ne se déclare pas, elle se prouve.",
  },
  {
    icon: "🌱",
    title: "Continuité",
    description:
      "Le même intervenant, le même coordinateur, la même équipe. La relation se construit dans la durée.",
  },
  {
    icon: "🔓",
    title: "Transparence",
    description:
      "Tarifs clairs, devis détaillés, aides expliquées, processus visibles. Aucune mauvaise surprise, jamais.",
  },
  {
    icon: "♿",
    title: "Inclusion",
    description:
      "Personnes âgées, en situation de handicap, aidants : nos services s'adressent à tous, sans hiérarchie d'attention.",
  },
];

const milestones = [
  { year: "2014", event: "Création de Youdom Care à Paris par une équipe issue du social et de la santé" },
  { year: "2016", event: "Obtention de l'agrément Service à la Personne (SAP)" },
  { year: "2018", event: "Autorisation SAAD départementale (75)" },
  { year: "2020", event: "Crise Covid : continuité de service totale, dispositifs sanitaires renforcés" },
  { year: "2022", event: "Avance immédiate du crédit d'impôt mise en place pour tous nos clients" },
  { year: "2024", event: "MaPrimeAdapt' intégrée dans nos services d'accompagnement administratif" },
  { year: "2026", event: `Refonte de notre site web et lancement d'un espace client en ligne` },
];

export default function QuiSommesNousPage() {
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
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Qui sommes-nous</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Notre histoire</span>
            <h1 className="text-white">
              Une équipe qui croit que vieillir chez soi
              <br />
              <span className="text-secondary">est un droit, pas un privilège.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Depuis {brandStats.yearsOfExperience} ans, Youdom Care accompagne les
              familles d&apos;Île-de-France pour permettre le maintien à domicile dans
              la dignité. {brandStats.familiesAccompanied}+ familles, {brandStats.caregiversCount} auxiliaires en CDI,
              {" "}{brandStats.satisfactionRate} % de satisfaction.
            </p>
          </div>
        </Container>
      </section>

      {/* HISTOIRE */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="eyebrow">Notre origine</span>
              <h2>
                Né d&apos;un constat simple :
                <br />
                <span className="text-gradient">l&apos;aide à domicile méritait mieux.</span>
              </h2>

              <div className="mt-6 space-y-4 text-text-light">
                <p className="text-lg leading-relaxed">
                  En 2014, nos fondateurs — issus du secteur social et hospitalier —
                  ont vu trop de personnes quitter leur maison pour une chambre
                  d&apos;EHPAD parce qu&apos;elles n&apos;avaient pas les bonnes mains à
                  leurs côtés.
                </p>
                <p className="leading-relaxed">
                  Trop d&apos;aidants épuisés. Trop de familles seules face à la
                  complexité des aides. Trop d&apos;intervenants qui changeaient
                  toutes les semaines, sans écoute, sans suivi.
                </p>
                <p className="leading-relaxed">
                  Nous avons créé Youdom Care pour faire autrement :{" "}
                  <strong className="text-primary-dark">
                    le même intervenant, des tarifs transparents, des dossiers
                    d&apos;aide montés à votre place, une charte qualité signée
                  </strong>
                  . Et surtout : du temps humain pour chaque personne.
                </p>
                <p className="leading-relaxed">
                  Aujourd&apos;hui, {brandStats.familiesAccompanied}+ familles d&apos;IDF nous font
                  confiance. {brandStats.caregiversCount} auxiliaires en CDI portent notre
                  mission au quotidien. Et nous continuons d&apos;améliorer ce que
                  signifie « aide à domicile de qualité » en France.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-card">
                    <Image
                      src="/images/curated/service-aide-personnes-agees.jpg"
                      alt="Auxiliaire et bénéficiaire"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <div className="relative h-32 sm:h-44 rounded-2xl overflow-hidden shadow-card">
                    <Image
                      src="/images/curated/service-accompagnement-sorties.jpg"
                      alt="Autonomie préservée"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 sm:h-44 rounded-2xl overflow-hidden shadow-card">
                    <Image
                      src="/images/curated/service-aide-menagere.jpg"
                      alt="Aide ménagère professionnelle"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-card">
                    <Image
                      src="/images/curated/public-aidants-knitting-granddaughter.jpg"
                      alt="Auxiliaire et famille"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALEURS */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Notre socle"
            title="6 valeurs qui guident chacune de nos décisions"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-border shadow-card"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{v.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Notre histoire"
            title="Des dates clés qui racontent un engagement"
          />
          <ol className="relative border-l-2 border-primary/30 pl-8 space-y-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <div
                  className="absolute -left-[42px] w-6 h-6 rounded-full bg-primary border-4 border-white shadow-card"
                  aria-hidden="true"
                />
                <div className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">
                  {m.year}
                </div>
                <p className="text-text leading-relaxed">{m.event}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* AGRÉMENTS */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos agréments"
            title="Une entreprise reconnue, autorisée, contrôlée"
            description="Au-delà des labels : nos agréments garantissent vos droits et notre sérieux."
            invert
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {agrements.map((a) => (
              <div
                key={a.short}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15"
              >
                <div className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">
                  {a.short}
                </div>
                <h3 className="text-white font-bold mb-2">{a.label}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CHIFFRES */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <Stat value={`${brandStats.familiesAccompanied}+`} label="familles accompagnées" />
            <Stat value={`${brandStats.caregiversCount}`} label="auxiliaires en CDI" />
            <Stat value={`${brandStats.interventionsPerMonth.toLocaleString("fr-FR")}`} label="interventions / mois" />
            <Stat value={`${brandStats.satisfactionRate}%`} label="de satisfaction" />
          </div>
        </Container>
      </section>

      <EngagementsBlock />

      <FinalCTA />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-5xl font-bold text-primary-dark mb-1">{value}</div>
      <div className="text-sm text-text-light">{label}</div>
    </div>
  );
}
