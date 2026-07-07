import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Aidants familiaux — vos droits, votre répit, vos solutions | Youdom Care",
  description:
    "Vous aidez un proche au quotidien ? Découvrez vos droits (congé proche aidant, AJPA), les solutions de répit, les aides financières. Guide gratuit + accompagnement personnalisé.",
};

const painPoints = [
  {
    icon: "😩",
    title: "L'épuisement physique",
    description:
      "Toilette, transferts, nuits hachées : le corps craque avant que l'esprit n'admette qu'il faut de l'aide.",
  },
  {
    icon: "🧠",
    title: "La charge mentale invisible",
    description:
      "Médicaments, RDV, dossiers MDPH, repas, courses, surveillance — tout est dans votre tête, en permanence.",
  },
  {
    icon: "💔",
    title: "La culpabilité permanente",
    description:
      "« Je ne fais pas assez. » « Je ne supporte plus. » Le paradoxe douloureux d'aimer et d'être à bout.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Le sacrifice des autres pans de vie",
    description:
      "Conjoint, enfants, amis, carrière, santé : ce qui passe après votre proche aidé finit par s'éroder.",
  },
  {
    icon: "💼",
    title: "Le travail qui souffre",
    description:
      "Arrivées en retard, RDV pendant la journée, mental ailleurs : votre carrière paie un prix invisible.",
  },
  {
    icon: "🌙",
    title: "Les nuits qui détruisent",
    description:
      "Garder l'oreille ouverte la nuit, intervenir, se relever : le manque de sommeil chronique est destructeur.",
  },
];

const droits = [
  {
    code: "AJPA",
    title: "Allocation Journalière du Proche Aidant",
    description:
      "Versée par la CAF lorsque vous prenez un congé de proche aidant. ~64 €/jour si vous vivez en couple, ~78 €/jour si vous êtes seul·e. Jusqu'à 66 jours sur la carrière, fractionnables.",
  },
  {
    code: "Congé proche aidant",
    title: "Congé indemnisé légal",
    description:
      "Tout salarié ayant 1 an d'ancienneté peut prendre 3 mois de congé (renouvelable 1 an max). Votre poste est garanti, vous n'êtes pas licenciable.",
  },
  {
    code: "Don de RTT/CP",
    title: "Don de jours par vos collègues",
    description:
      "Vos collègues peuvent vous donner leurs RTT ou jours de congés. La loi le permet sans imposition. Renseignez-vous auprès de la RH.",
  },
  {
    code: "Trimestres retraite",
    title: "Validation gratuite de trimestres",
    description:
      "Si vous réduisez votre activité pour aider un proche, vous pouvez valider gratuitement des trimestres pour votre retraite (sous conditions).",
  },
  {
    code: "Bilan de santé",
    title: "Bilan gratuit pour aidants",
    description:
      "Votre Caisse d'Assurance Maladie offre un bilan de santé gratuit aux aidants familiaux. Demandez-le, vous le méritez.",
  },
  {
    code: "Aide psychologique",
    title: "Soutien psychologique remboursé",
    description:
      "Mon Soutien Psy : jusqu'à 12 séances/an chez un psychologue, prises en charge à 100 % en tant qu'aidant en surcharge.",
  },
];

const repitOptions = [
  {
    icon: "🏠",
    title: "Aide à domicile (par nous)",
    description:
      "Nous remplaçons votre présence pour des plages dédiées. 3 h/semaine pour souffler, ou plusieurs jours pour partir en week-end.",
    href: "/services/aide-personnes-agees",
    cta: "Découvrir nos services",
  },
  {
    icon: "🌙",
    title: "Présence de nuit",
    description:
      "Vos nuits sont les premières à craquer. Une auxiliaire de nuit (passive ou active) vous redonne 7 nuits par semaine de vrai sommeil.",
    href: "/services/garde-nuit",
    cta: "Voir la garde de nuit",
  },
  {
    icon: "🏥",
    title: "Hébergement temporaire",
    description:
      "Maisons de répit ou EHPAD pour 1 semaine à 1 mois. Permet à l'aidant de partir en vacances ou de récupérer après une crise.",
    href: "/contact",
    cta: "Demander conseil",
  },
  {
    icon: "👥",
    title: "Accueil de jour & plateformes",
    description:
      "Centres de jour spécialisés (Alzheimer notamment), plateformes de répit départementales : nous vous orientons vers les bonnes structures.",
    href: "/contact",
    cta: "Être orienté",
  },
];

const ressources = [
  {
    title: "Le guide complet des droits 2026",
    pages: 44,
    icon: "📕",
    description:
      "AJPA, congé proche aidant, dons de RTT, retraite, bilan de santé, Mon Soutien Psy. Toutes vos protections, expliquées clairement.",
  },
  {
    title: "Le manuel de l'aidant épuisé",
    pages: 28,
    icon: "📗",
    description:
      "Reconnaître l'épuisement, les solutions concrètes, les ressources de répit, comment demander de l'aide sans culpabiliser.",
  },
  {
    title: "Naviguer la MDPH sans s'épuiser",
    pages: 36,
    icon: "📘",
    description:
      "Comprendre les dossiers PCH, AAH, RQTH, MDPH. Les pièges, les bons documents, comment formuler la demande.",
  },
];

export default function AidantsFamiliauxPage() {
  return (
    <>
      <PageHero
        eyebrow="Pour les 11 millions d'aidants familiaux en France"
        breadcrumb={[{ name: "Accueil", href: "/" }, { name: "Aidants familiaux" }]}
        title={
          <>
            Vous aidez un proche.
            <br />
            <span className="text-secondary">Qui prend soin de vous ?</span>
          </>
        }
        subtitle={
          <>
            Ce que vous faites est immense, invisible, épuisant. Cette page n&apos;est
            pas pour votre proche.{" "}
            <strong className="text-white">Elle est pour vous.</strong> Vos droits,
            votre répit, vos solutions. Sans jugement, sans pression.
          </>
        }
        primaryCta={{ label: "📕 Télécharger le guide gratuit", href: "#guide" }}
        secondaryCta={{ label: "Parler à un coordinateur", href: "/contact" }}
        image={{
          src: "/images/curated/public-aidants-knitting-granddaughter.jpg",
          alt: "Aidante familiale partageant un moment avec son proche",
        }}
        proof={{ icon: "🫂", title: "11 millions d'aidants", subtitle: "1 actif sur 4. Vous n'êtes pas seul·e." }}
      />

      {/* PAIN POINTS */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="On vous reconnaît"
            title="L'épuisement de l'aidant n'est pas une faiblesse. C'est un signal."
            description="Si plusieurs de ces situations sonnent juste, vous avez besoin de soutien. Pas demain. Maintenant."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-6 border border-border shadow-card"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-50 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
                  {point.icon}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{point.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-accent-50 border-2 border-accent/30 rounded-2xl max-w-2xl mx-auto text-center">
            <p className="text-primary-dark font-semibold">
              Reconnaître que vous êtes en surcharge n&apos;est pas trahir votre proche.
              <br />
              C&apos;est <strong className="text-accent-dark">la condition pour pouvoir continuer à l&apos;aider.</strong>
            </p>
          </div>
        </Container>
      </section>

      {/* DROITS */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Vos droits"
            title="6 protections légales auxquelles vous avez droit"
            description="Beaucoup d'aidants ne connaissent pas leurs droits. La plupart sont sous-utilisés. Voici l'essentiel."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {droits.map((d) => (
              <div
                key={d.code}
                className="bg-warm rounded-2xl p-6 border border-transparent hover:border-primary hover:bg-white transition-all"
              >
                <div className="text-xs uppercase tracking-wider font-bold text-primary mb-1">
                  {d.code}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{d.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-text-light mb-4 max-w-2xl mx-auto">
              Vous voulez monter un dossier AJPA, demander un congé proche aidant ou faire
              valoir vos trimestres ? Notre coordinatrice le fait avec vous, gratuitement.
            </p>
            <Button href="/contact" variant="outline" size="md">
              Être accompagné dans mes démarches
            </Button>
          </div>
        </Container>
      </section>

      {/* RÉPIT */}
      <section className="bg-cream py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Le répit, c'est vital"
            title="4 solutions concrètes pour souffler, sans culpabiliser"
            description="Ne pas s'occuper de soi, c'est garantir qu'on ne pourra bientôt plus s'occuper de l'autre."
          />

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {repitOptions.map((opt) => (
              <div
                key={opt.title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-border shadow-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center text-3xl shrink-0" aria-hidden="true">
                  {opt.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary-dark text-lg mb-2">{opt.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {opt.description}
                  </p>
                  <Link
                    href={opt.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all"
                  >
                    {opt.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GUIDES — Lead magnets */}
      <section
        id="guide"
        className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 sm:py-24"
      >
        <Container size="wide">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="eyebrow !text-secondary">Ressources gratuites</span>
            <h2 className="text-white">Trois guides essentiels, totalement gratuits.</h2>
            <p className="lead !text-white/85 mt-4">
              Téléchargez les ressources qui vous concernent. Pas de spam, pas de
              vente forcée. Juste ce dont vous avez vraiment besoin pour avancer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
            {ressources.map((r) => (
              <article
                key={r.title}
                className="bg-white rounded-3xl p-6 sm:p-8 text-text shadow-lifted flex flex-col"
              >
                <div className="text-5xl mb-4" aria-hidden="true">{r.icon}</div>
                <div className="text-xs uppercase tracking-wider font-bold text-primary mb-1">
                  Guide PDF · {r.pages} pages
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-3">{r.title}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-6 flex-1">
                  {r.description}
                </p>
                <Button href="/guides" variant="secondary" size="md" fullWidth>
                  Télécharger gratuitement
                </Button>
              </article>
            ))}
          </div>

          <p className="text-center text-white/70 text-sm mt-10 max-w-xl mx-auto">
            🔒 Vos données restent confidentielles. Conformité RGPD totale.
            Désinscription en 1 clic à tout moment.
          </p>
        </Container>
      </section>

      <EngagementsBlock />

      {/* TÉMOIGNAGE LONG (un seul, immersif) */}
      <section className="bg-warm py-16 sm:py-24">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-border">
            <div className="text-5xl text-secondary mb-4" aria-hidden="true">&ldquo;</div>
            <blockquote className="text-lg sm:text-xl text-text leading-relaxed mb-6">
              Pendant 4 ans, j&apos;ai géré seule l&apos;Alzheimer de maman, en parallèle de mon
              job et de mes deux ados. Je me suis effondrée un dimanche en pleurant
              dans la voiture. C&apos;est ma sœur qui a appelé Youdom Care. La coordinatrice
              est venue, a tout écouté, a posé des questions que personne ne m&apos;avait
              posées. En 10 jours, on avait monté un plan : auxiliaire 4 demi-journées,
              dossier AJPA, congé proche aidant. Je peux à nouveau respirer.
              <strong className="text-primary-dark"> Surtout, je n&apos;ai plus l&apos;impression d&apos;être seule.</strong>
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <div>
                <div className="font-bold text-primary-dark">Caroline, 51 ans</div>
                <div className="text-sm text-text-light">Aidante de sa maman atteinte d&apos;Alzheimer • Paris 15ᵉ</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
