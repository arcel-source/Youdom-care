import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import AidesSimulator from "@/components/sections/AidesSimulator";
import FinalCTA from "@/components/sections/FinalCTA";
import { aidesFinancieres, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aides financières — APA, PCH, crédit d'impôt 50 % | Youdom Care",
  description:
    "Toutes les aides 2026 pour financer une aide à domicile : APA, PCH, AEEH, crédit d'impôt 50 %, MaPrimeAdapt, mutuelles, CESU. Simulateur. Dossiers montés.",
};

const detailedAides = [
  {
    code: "APA",
    title: "Allocation Personnalisée d'Autonomie",
    audience: "Seniors 60+ ans en perte d'autonomie",
    plafonds: [
      { gir: "GIR 1", montant: "1 955 €/mois" },
      { gir: "GIR 2", montant: "1 569 €/mois" },
      { gir: "GIR 3", montant: "1 134 €/mois" },
      { gir: "GIR 4", montant: "756 €/mois" },
    ],
    details: [
      "Versée par votre Conseil départemental",
      "Évaluation gratuite par une équipe médico-sociale à domicile",
      "Couvre l'aide humaine, la téléassistance, certains aménagements",
      "Ticket modérateur de 0 % à 90 % selon vos revenus",
      "Délai d'instruction : 60 jours, parfois moins en urgence",
    ],
  },
  {
    code: "PCH",
    title: "Prestation de Compensation du Handicap",
    audience: "Personnes handicapées de moins de 60 ans (et enfants depuis 2023)",
    plafonds: [{ gir: "Aide humaine", montant: "~14,98 €/h en mode prestataire" }],
    details: [
      "Versée par la MDPH (Maison Départementale des Personnes Handicapées)",
      "Couvre aide humaine, aide technique, aménagement domicile, transport",
      "Évaluation par l'équipe pluridisciplinaire de la MDPH",
      "Pas de plafond global — heures accordées selon besoins évalués",
      "Délai d'instruction : 4 à 6 mois en moyenne",
      "Cumulable avec AAH, crédit d'impôt 50 %, mutuelle",
    ],
  },
  {
    code: "Crédit d'impôt 50 %",
    title: "Crédit d'impôt service à la personne",
    audience: "Tous foyers fiscaux (pas de condition d'âge ou ressources)",
    plafonds: [
      { gir: "Plafond annuel", montant: "12 000 € (15 000 € la 1ʳᵉ année)" },
      { gir: "Personne âgée/handicapée", montant: "20 000 €/an" },
    ],
    details: [
      "50 % de la somme versée — automatique en SAP",
      "Avance immédiate possible : vous payez seulement 50 % directement",
      "Fonctionne même si vous n'êtes pas imposable (versement direct)",
      "Cumul possible avec APA, PCH et autres aides",
      "Service de l'URSSAF gratuit pour activer l'avance immédiate",
    ],
  },
  {
    code: "AEEH",
    title: "Allocation d'Éducation de l'Enfant Handicapé",
    audience: "Parents d'enfants handicapés de moins de 20 ans",
    plafonds: [
      { gir: "Base", montant: "~149 €/mois" },
      { gir: "Complément 1 à 6", montant: "+115 € à +1 290 €/mois" },
    ],
    details: [
      "Versée par la CAF",
      "Base + complément selon le handicap et les besoins",
      "Cumul possible avec PCH enfant depuis 2023",
      "Cumul avec CMG (Complément Mode de Garde) majoré handicap",
    ],
  },
  {
    code: "MaPrimeAdapt'",
    title: "Aide travaux d'adaptation logement",
    audience: "Propriétaires & locataires (sous conditions de ressources)",
    plafonds: [
      { gir: "Aide", montant: "Jusqu'à 70 % des travaux" },
      { gir: "Plafond travaux", montant: "22 000 €" },
    ],
    details: [
      "Nouvelle aide depuis 2024",
      "Finance douche italienne, monte-escalier, rampes, etc.",
      "Cumulable avec APA, caisses retraite, crédit d'impôt 25 % équipements",
      "Diagnostic obligatoire par ergothérapeute (financé)",
    ],
  },
  {
    code: "Caisses retraite",
    title: "Aides CARSAT, AGIRC-ARRCO, MSA",
    audience: "Retraités GIR 5-6 (autonomie préservée)",
    plafonds: [{ gir: "Variable", montant: "selon caisse et ressources" }],
    details: [
      "Plan d'Action Personnalisé (PAP) de la CARSAT",
      "Aides à l'aide-ménagère, aide à la sortie d'hospitalisation",
      "Cumul possible avec crédit d'impôt 50 %",
      "Financement de la téléassistance souvent inclus",
    ],
  },
  {
    code: "Mutuelles",
    title: "Garantie « assistance vie quotidienne »",
    audience: "Selon contrat mutuelle santé",
    plafonds: [{ gir: "Variable", montant: "selon contrat" }],
    details: [
      "La majorité des mutuelles couvrent l'aide à domicile post-hospitalisation",
      "Plafond typique : 7 à 30 jours d'aide ménagère, garde d'enfants malades",
      "À demander : nombre d'heures, délai déclenchement, justificatifs",
      "Nous montons le dossier mutuelle gratuitement",
    ],
  },
  {
    code: "CESU",
    title: "Chèques Emploi Service Universel préfinancés",
    audience: "Salariés dont l'employeur propose des CESU",
    plafonds: [{ gir: "Plafond exo", montant: "2 540 €/an exonérés (2026)" }],
    details: [
      "Distribués par votre employeur (CSE, comité d'entreprise)",
      "Acceptés directement par Youdom Care en règlement partiel",
      "Cumulables avec crédit d'impôt 50 %",
      "Aussi disponibles via comités d'entreprise pour retraités",
    ],
  },
];

export default function AidesFinancieresPage() {
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
            <span className="text-white/50">Aides financières</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Financement</span>
            <h1 className="text-white">
              Toutes les aides pour financer
              <br />
              <span className="text-secondary">votre aide à domicile en 2026.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              APA, PCH, crédit d&apos;impôt 50 %, mutuelles, MaPrimeAdapt&apos;, CESU :
              le panorama complet et à jour. Avec un simulateur intégré pour estimer
              votre coût net en 30 secondes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button href="#simulateur" variant="primary" size="lg" glow>
                Lancer le simulateur
              </Button>
              <Button
                href={`tel:${siteConfig.phone.mainE164}`}
                variant="white"
                size="lg"
                icon={<span aria-hidden="true">📞</span>}
              >
                Échanger avec une coordinatrice
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* RECAP RAPIDE */}
      <section className="bg-white py-12">
        <Container size="wide">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {aidesFinancieres.map((a) => (
              <div
                key={a.code}
                className="bg-warm rounded-2xl p-4 text-center border border-border"
              >
                <div className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">
                  {a.code}
                </div>
                <p className="text-xs text-text-light leading-snug">{a.audience}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div id="simulateur">
        <AidesSimulator />
      </div>

      {/* DÉTAIL DES AIDES */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="En détail"
            title="8 dispositifs pour financer votre accompagnement"
            description="Cliquez sur chacun pour comprendre les conditions, plafonds et démarches."
          />

          <div className="space-y-5">
            {detailedAides.map((aide, idx) => (
              <article
                key={aide.code}
                className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-card"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                  <div className="lg:col-span-3">
                    <div className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">
                      {String(idx + 1).padStart(2, "0")} · {aide.code}
                    </div>
                    <h3 className="text-primary-dark text-lg mb-2">{aide.title}</h3>
                    <p className="text-xs text-text-light leading-snug">{aide.audience}</p>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-2">
                      Montants
                    </div>
                    <ul className="space-y-2">
                      {aide.plafonds.map((p) => (
                        <li
                          key={p.gir}
                          className="flex items-baseline justify-between gap-2 text-sm"
                        >
                          <span className="text-text-light">{p.gir}</span>
                          <span className="font-bold text-primary-dark">{p.montant}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-2">
                      À retenir
                    </div>
                    <ul className="space-y-1.5">
                      {aide.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                          <span className="text-success shrink-0 mt-0.5" aria-hidden="true">✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICE DOSSIERS */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="narrow">
          <div className="bg-gradient-to-br from-secondary-50 to-warm rounded-3xl p-8 sm:p-12 border border-secondary/30 text-center">
            <span className="eyebrow">Service inclus</span>
            <h2 className="text-primary-dark">Nous montons les dossiers à votre place.</h2>
            <p className="lead mt-4">
              APA, PCH, MaPrimeAdapt, mutuelle, PRADO : notre coordinatrice prépare,
              dépose et suit chaque dossier. <strong>C&apos;est gratuit, c&apos;est inclus
              dans notre service.</strong> Pas de paperasse pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Démarrer ma demande
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Échanger avec une coordinatrice
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
