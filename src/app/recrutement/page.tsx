import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import RecruitmentFormV2 from "./RecruitmentFormV2";
import FinalCTA from "@/components/sections/FinalCTA";
import { siteConfig, brandStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Rejoindre Youdom Care — auxiliaire de vie en CDI à Paris & IDF | Recrutement",
  description:
    "Auxiliaire de vie, garde d'enfants handicapés, garde de nuit : nous recrutons en CDI. Salaire au-dessus du marché, formations payées, mutuelle, équipe humaine.",
};

const values = [
  {
    icon: "💼",
    title: "CDI uniquement",
    description:
      "Pas d'auto-entrepreneuriat, pas de zéro-heure. CDI à temps choisi (15 h, 25 h, 35 h selon préférence).",
  },
  {
    icon: "💰",
    title: "Salaire au-dessus du marché",
    description:
      "Convention BAD respectée et dépassée. Primes ancienneté, dimanche/férié, transport, mutuelle prise en charge à 60 %.",
  },
  {
    icon: "🎓",
    title: "Formation continue payée",
    description:
      "Une formation par trimestre minimum (Humanitude, manutention, premiers secours, spécialisations) — sur le temps de travail.",
  },
  {
    icon: "🤝",
    title: "Équipe & coordination",
    description:
      "Coordinatrice dédiée, point équipe mensuel, soutien psychologique gratuit (Mon Soutien Psy + cellule interne).",
  },
  {
    icon: "🏠",
    title: "Bénéficiaires fidèles",
    description:
      "Vous gardez les mêmes bénéficiaires dans la durée. Liens construits, sens donné. Pas d'urbanité, pas de turnover.",
  },
  {
    icon: "🚀",
    title: "Évolution possible",
    description:
      "Coordinateur(trice), formateur(trice), référent(e) qualité : nos évolutions internes sont régulières et privilégiées.",
  },
];

const offers = [
  { title: "Auxiliaire de vie · Paris 12 et 75", postes: 4, contrat: "CDI 30 h" },
  { title: "Garde de nuit · Paris/Boulogne", postes: 2, contrat: "CDI 28 h nuit" },
  { title: "Aide à domicile · Vincennes / Saint-Mandé", postes: 3, contrat: "CDI 25 h" },
  { title: "Garde d'enfants handicapés · Le Kremlin-Bicêtre", postes: 1, contrat: "CDI 20 h" },
  { title: "Coordinateur(trice) de secteur · IDF", postes: 1, contrat: "CDI cadre" },
  { title: "Chauffeur PMR · Paris/Boulogne", postes: 2, contrat: "CDI 35 h" },
];

const recruitmentSteps = [
  { step: 1, title: "Candidature en ligne", description: "Formulaire ci-dessous, 5 min." },
  { step: 2, title: "Entretien RH", description: "Échange téléphonique de 30 min sur votre parcours et motivations." },
  { step: 3, title: "Mise en situation", description: "Entretien physique avec une mise en situation pratique (manutention, communication)." },
  { step: 4, title: "Vérifications", description: "Contrôle casier B3, références anciens employeurs, diplômes." },
  { step: 5, title: "Période d'observation", description: "Vos 3 premières missions accompagnées par votre coordinatrice." },
];

export default function RecrutementPage() {
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
          <nav
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
            aria-label="Fil d'ariane"
          >
            <Link href="/" className="hover:text-secondary transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Recrutement</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow !text-secondary">Nous recrutons en CDI</span>
              <h1 className="text-white">
                Un métier de sens.
                <br />
                <span className="text-secondary">Une équipe qui prend soin de vous.</span>
              </h1>
              <p className="lead !text-white/85 mt-5">
                Vous avez un cœur d&apos;auxiliaire de vie ? Nous avons un
                contrat à votre hauteur : CDI, salaire au-dessus du marché,
                formations payées, équipe qui vous soutient.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Button href="#offres" variant="primary" size="lg" glow>
                  Voir les postes ouverts
                </Button>
                <Button href="#candidature" variant="white" size="lg">
                  Postuler maintenant
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src="/images/curated/comment-ca-marche-caregiver.jpg"
                  alt="Auxiliaire de vie Youdom Care en intervention"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CHIFFRES */}
      <section className="bg-white py-12">
        <Container size="wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <Stat value={`${brandStats.caregiversCount}`} label="auxiliaires en CDI" />
            <Stat value="13 €" label="net horaire moyen" hint="hors primes" />
            <Stat value="4 / an" label="formations payées" />
            <Stat value="< 5 %" label="de turnover annuel" />
          </div>
        </Container>
      </section>

      {/* VALEURS */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Pourquoi nous rejoindre"
            title="6 raisons concrètes de choisir Youdom Care"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lifted transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mb-4"
                  aria-hidden="true"
                >
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{v.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* OFFRES */}
      <section id="offres" className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Postes ouverts"
            title="13 postes à pourvoir cette saison"
            description="Les besoins sont permanents. Si votre profil ne match pas exactement, candidature spontanée bienvenue."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offers.map((o, idx) => (
              <div
                key={idx}
                className="bg-warm rounded-2xl p-5 border border-border hover:border-primary hover:bg-white transition-all"
              >
                <h3 className="text-base font-bold text-primary-dark mb-2">{o.title}</h3>
                <div className="flex items-center justify-between text-xs text-text-light">
                  <span>{o.contrat}</span>
                  <span className="font-bold text-primary">
                    {o.postes} poste{o.postes > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-text-light mt-8 text-sm">
            Vous n&apos;êtes pas dans cette liste ? <strong>Toute candidature sérieuse est étudiée.</strong>
          </p>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Notre process"
            title="5 étapes claires pour vous rejoindre"
            description="Pas de filtres opaques. Tout est transparent."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {recruitmentSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">
                  {s.step}
                </div>
                <h3 className="text-sm font-bold text-primary-dark mb-1">{s.title}</h3>
                <p className="text-xs text-text-light leading-snug">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CANDIDATURE */}
      <section id="candidature" className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <span className="eyebrow">Candidature en ligne</span>
              <h2>Postulez en 5 minutes</h2>
              <p className="lead mt-3 mb-8">
                Nous étudions toutes les candidatures sérieuses. Réponse sous{" "}
                <strong>5 jours ouvrés</strong>.
              </p>
              <RecruitmentFormV2 />
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                  <h3 className="font-bold text-primary-dark text-base mb-3">
                    📞 Préférez le téléphone ?
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    Notre équipe RH vous écoute du lundi au vendredi.
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.mainE164}`}
                    className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-light text-sm"
                  >
                    <span aria-hidden="true">📞</span> {siteConfig.phone.main}
                  </a>
                </div>

                <div className="bg-secondary-50 rounded-2xl p-6 border border-secondary/30">
                  <h3 className="font-bold text-primary-dark text-base mb-3">
                    💼 Email recrutement
                  </h3>
                  <p className="text-sm text-text-light mb-3">
                    Pour envoyer directement votre CV ou poser une question RH.
                  </p>
                  <a
                    href={`mailto:${siteConfig.emailRecruitment}`}
                    className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-light text-sm break-all"
                  >
                    <span aria-hidden="true">✉️</span> {siteConfig.emailRecruitment}
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-primary-dark text-base mb-3">
                    📋 Documents à prévoir
                  </h3>
                  <ul className="space-y-2 text-sm text-text-light">
                    <li className="flex gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>CV à jour</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>Diplômes (DEAES, DEAVS) — si applicable</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>Pièce d&apos;identité valide</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>Casier judiciaire B3 (à jour 3 mois)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>Permis B + véhicule pour certains postes</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-muted mt-3 italic">
                    Documents à envoyer après ce premier contact.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

function Stat({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="text-3xl sm:text-5xl font-bold text-primary-dark mb-1">{value}</div>
      <div className="text-sm text-text-light leading-tight">
        {label}
        {hint ? <span className="block text-xs text-text-muted mt-0.5">({hint})</span> : null}
      </div>
    </div>
  );
}
