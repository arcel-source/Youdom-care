import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";
import { processSteps, siteConfig, brandStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Comment ça marche — notre méthode en 5 étapes | Youdom Care",
  description:
    "De l'appel au démarrage : notre méthode en 5 étapes pour mettre en place une aide à domicile sereine. Visite gratuite, plan personnalisé, sans engagement.",
};

const qualityCommitments = [
  {
    title: "Recrutement strict",
    description:
      "6 étapes de sélection : entretien RH, vérification des diplômes, casier judiciaire B3, test de mise en situation, période d'observation, formation interne avant la 1ʳᵉ mission seul·e.",
  },
  {
    title: "Formation continue",
    description:
      "Tous nos auxiliaires en CDI suivent au moins une formation par trimestre : Humanitude, manutention, premiers secours, communication adaptée, spécialisations.",
  },
  {
    title: "Supervision qualité",
    description:
      "Visite de contrôle inopinée par notre coordinatrice qualité tous les trimestres. Compte-rendu mensuel partagé avec les familles (avec accord du bénéficiaire).",
  },
  {
    title: "Charte signée",
    description:
      "Notre charte qualité est signée par chaque auxiliaire ET le bénéficiaire/famille. Engagements opposables, contrôlés, mesurés.",
  },
  {
    title: "Cellule éthique",
    description:
      "Un comité interne traite les signalements de maltraitance ou de dysfonctionnement. Réponse sous 24 h, mesures correctives immédiates.",
  },
  {
    title: "Enquête NPS trimestrielle",
    description:
      "Tous les 3 mois, vous évaluez la prestation. Score NPS partagé en interne, plans d'action correctifs si nécessaire.",
  },
];

const guarantees = [
  { icon: "💯", text: "Visite à domicile gratuite, sans engagement" },
  { icon: "⏱️", text: "Réponse en moins de 2 h ouvrées" },
  { icon: "🚨", text: "Démarrage en 48 h sur les urgences (sortie d'hôpital, etc.)" },
  { icon: "🔄", text: "Changement d'auxiliaire possible sous 48 h sans frais" },
  { icon: "📞", text: "Coordinatrice joignable 7j/7" },
  { icon: "🛡️", text: "Assurance responsabilité civile pro complète" },
];

export default function CommentCaMarchePage() {
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
            <span className="text-white/50">Comment ça marche</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Notre méthode</span>
            <h1 className="text-white">
              De votre appel à la première visite,
              <br />
              <span className="text-secondary">en moins de 7 jours.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Un parcours simple, transparent, entièrement gratuit jusqu&apos;à la
              signature. Visite à domicile incluse, plan personnalisé, sans
              engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Démarrer ma demande
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

      {/* 5 ÉTAPES — DÉTAILLÉES */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Notre méthode pas à pas"
            title="5 étapes simples, gratuites jusqu'à la signature"
          />

          <div className="space-y-12">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.step}
                  className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.step}
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 bg-secondary-50 text-secondary-dark text-xs font-semibold rounded-full mb-1">
                          {step.duration}
                        </span>
                        <h3 className="text-primary-dark m-0">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-text-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="bg-warm rounded-2xl p-8 text-center text-7xl shadow-card" aria-hidden="true">
                      {step.icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* GARANTIES */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Notre engagement"
            title="6 garanties dès le premier contact"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {guarantees.map((g, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-border flex items-start gap-3"
              >
                <div className="text-2xl shrink-0" aria-hidden="true">{g.icon}</div>
                <p className="text-sm font-semibold text-primary-dark leading-snug">{g.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* QUALITÉ */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
            <div className="lg:col-span-5">
              <div className="relative h-80 sm:h-[460px] rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src="/images/curated/comment-ca-marche-caregiver.jpg"
                  alt="Auxiliaire de vie professionnelle Youdom Care"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Notre démarche qualité"
                title="6 mécanismes pour garantir l'excellence dans la durée"
                description="Au-delà de la prestation : un système qui protège vos proches et améliore en continu."
                align="left"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {qualityCommitments.map((c, idx) => (
              <div
                key={c.title}
                className="bg-warm rounded-2xl p-6 border border-transparent hover:border-primary hover:bg-white transition-all"
              >
                <div className="text-secondary text-3xl font-bold mb-2">{String(idx + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{c.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 sm:py-20">
        <Container size="wide">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="eyebrow !text-secondary">Notre méthode en chiffres</span>
            <h2 className="text-white">Une approche éprouvée, mesurée, partagée.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Stat value={`${brandStats.satisfactionRate}%`} label="de satisfaction client" />
            <Stat value={`< ${brandStats.responseTimeHours} h`} label="délai de réponse" />
            <Stat value={`${brandStats.familiesAccompanied}+`} label="familles accompagnées" />
            <Stat value={`${brandStats.caregiversCount}`} label="auxiliaires en CDI" />
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
    <div className="text-center">
      <div className="text-3xl sm:text-5xl font-bold text-secondary mb-1">{value}</div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}
