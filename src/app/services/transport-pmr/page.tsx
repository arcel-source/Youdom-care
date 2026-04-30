import { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import ServicePainPoints from "@/components/service/ServicePainPoints";
import ServiceIncluded from "@/components/service/ServiceIncluded";
import ServiceMethod from "@/components/service/ServiceMethod";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceProvider from "@/components/service/ServiceProvider";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCrossSell from "@/components/service/ServiceCrossSell";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Transport PMR — véhicules adaptés Paris & IDF | Youdom Care",
  description:
    "Transport adapté pour personnes à mobilité réduite : véhicules accessibles fauteuil roulant, chauffeurs formés, RDV médicaux et sorties. Réservation simple. Devis gratuit.",
};

const painPoints = [
  {
    icon: "🚇",
    title: "Transports en commun inaccessibles",
    description:
      "Métro à 80 % inaccessible aux fauteuils, bus parfois saturés, ascenseurs en panne : se déplacer en IDF est un parcours du combattant.",
  },
  {
    icon: "🚖",
    title: "VTC / taxis non adaptés",
    description:
      "Refus fréquents pour les fauteuils, tarifs imprévisibles, chauffeurs non formés à la manutention. La précarité en mobilité.",
  },
  {
    icon: "🚗",
    title: "Voiture personnelle inadaptée",
    description:
      "La voiture familiale ne permet pas toujours d'embarquer un fauteuil roulant ou un déambulateur. Solutions limitées.",
  },
  {
    icon: "👨‍⚕️",
    title: "RDV médicaux ratés",
    description:
      "Sans solution de transport fiable, les hôpitaux, dialyses, consultations spécialisées deviennent inaccessibles. La santé recule.",
  },
  {
    icon: "🎭",
    title: "Vie sociale brisée",
    description:
      "Mariages, enterrements, déjeuners familiaux : tout demande un déplacement. Sans solution, l'isolement gagne.",
  },
  {
    icon: "💰",
    title: "Coût des solutions privées",
    description:
      "Les ambulances coûtent cher et nécessitent une prescription. Les VSL non plus. Une alternative économique manquait.",
  },
];

const includedServices = [
  {
    icon: "♿",
    title: "Véhicules accessibles fauteuil roulant",
    description:
      "Rampes d'accès, sangles d'arrimage homologuées, espace pour fauteuil + accompagnant. Conforme aux normes PMR.",
  },
  {
    icon: "👨‍🦱",
    title: "Chauffeurs formés à la manutention",
    description:
      "Manipulation sécurisée des fauteuils, transferts de personne (lit ↔ fauteuil ↔ véhicule) si demandé, communication adaptée.",
  },
  {
    icon: "🏥",
    title: "Trajets médicaux",
    description:
      "Hôpital, clinique, dialyse, kiné, dentiste, pharmacie. Avec attente et retour selon vos besoins.",
  },
  {
    icon: "🎉",
    title: "Trajets familiaux & loisirs",
    description:
      "Restaurants, théâtre, mariages, anniversaires. La mobilité retrouvée pour les moments qui comptent.",
  },
  {
    icon: "🚗",
    title: "Trajets quotidiens",
    description:
      "Courses, marché, banque, mairie. Pour les petits déplacements qui rythment la semaine.",
  },
  {
    icon: "🎒",
    title: "Sorties scolaires & IME",
    description:
      "Trajets vers IME, SESSAD, école spécialisée. Avec ceinture adaptée enfants, sièges PMR enfants.",
  },
];

const methodPoints = [
  {
    title: "Réservation simple",
    description:
      "Par téléphone ou formulaire. Idéalement 24-48 h à l'avance pour les RDV programmés. Possibilité ponctuelle pour urgences.",
  },
  {
    title: "Confirmation & rappel",
    description:
      "SMS de confirmation 24 h avant, rappel 1 h avant le départ. Le chauffeur s'identifie et envoie son arrivée par SMS.",
  },
  {
    title: "Arrivée 10 min avant",
    description:
      "Le chauffeur arrive en avance pour vous laisser le temps de vous installer sereinement. Pas de stress du retard.",
  },
  {
    title: "Accompagnement porte à porte",
    description:
      "Chauffeur monte vous chercher si besoin (palier, ascenseur), vous installe en sécurité, vous remet au lieu d'arrivée.",
  },
  {
    title: "Attente possible",
    description:
      "Pour les RDV courts (< 2 h), le chauffeur peut attendre. Pour les longs (dialyse, scanner), nous organisons le retour à l'heure prévue.",
  },
];

const aides = [
  {
    code: "PCH transport",
    description:
      "Le volet « charges spécifiques » de la PCH peut financer une partie des trajets liés au handicap.",
  },
  {
    code: "Sécurité sociale",
    description:
      "Les transports vers RDV médicaux peuvent être pris en charge avec un bon de transport (médecin) ou en affection longue durée.",
  },
  {
    code: "Mutuelle",
    description:
      "Beaucoup de mutuelles couvrent partiellement les trajets non médicaux pour les personnes en perte d'autonomie.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Notre service de transport-accompagnement est éligible au crédit d'impôt SAP. Avantage souvent oublié pour ce type de service.",
  },
];

const faq = [
  {
    question: "Vos véhicules sont-ils homologués PMR ?",
    answer:
      "Oui. Notre flotte respecte les normes PMR (rampe ou hayon, espace dédié fauteuil, sangles d'arrimage 4 points, ceinture buste-bassin homologuée). Visite technique annuelle, contrôle qualité interne.",
  },
  {
    question: "Quel délai de réservation minimum ?",
    answer:
      "Idéalement 24-48 h à l'avance pour garantir la disponibilité. Pour des urgences (sortie d'hôpital imprévue, RDV médical le jour-même), nous faisons notre maximum dans la limite des disponibilités. Appelez-nous, on essaie.",
  },
  {
    question: "Combien coûte un trajet ?",
    answer:
      "Notre tarif combine forfait départ + tarif kilométrique + temps d'attente. Un aller-retour Paris intra-muros vers un hôpital coûte typiquement 60 à 120 €. Avec les aides applicables, le reste à charge tombe souvent à 25-50 €.",
  },
  {
    question: "Le chauffeur peut-il accompagner dans l'établissement ?",
    answer:
      "Oui, sur demande. Pour vous installer en salle d'attente, vous présenter à l'accueil, vous accompagner jusqu'à la consultation. Si vous avez besoin d'une présence pendant le RDV (prise de notes, rassurance), nous proposons aussi notre service Accompagnement & sorties.",
  },
  {
    question: "Vous prenez aussi les déambulateurs et les fauteuils manuels ?",
    answer:
      "Oui, tous types d'aides à la mobilité : fauteuil roulant manuel, électrique (jusqu'à modèles standards), déambulateur, canne, brancard pour transferts spécifiques. Si votre matériel est atypique (très lourd, dimensions hors normes), informez-nous lors de la réservation.",
  },
  {
    question: "Vous opérez en dehors de Paris et IDF ?",
    answer:
      "Notre zone principale est Paris + petite couronne. Nous intervenons jusqu'en grande couronne (Yvelines, Essonne, Seine-et-Marne) avec un supplément kilométrique. Pour des trajets longue distance (hors IDF), c'est possible sur devis spécifique.",
  },
];

export default function TransportPmrPage() {
  return (
    <>
      <ServiceHero
        category="Transport PMR"
        title="Se déplacer en sécurité, sans stress, partout en IDF."
        subtitle="Véhicules adaptés aux fauteuils roulants, chauffeurs formés à la manutention, accompagnement porte à porte. Pour les RDV médicaux, les sorties familiales, le quotidien."
        highlights={[
          "Véhicules homologués PMR (rampe + sangles)",
          "Chauffeurs formés à la manutention",
          "Réservation simple — confirmation et rappel SMS",
          "Crédit d'impôt 50 % automatique",
        ]}
        image="/images/services/transport-handicapes.png"
        imageAlt="Véhicule PMR avec personne en fauteuil roulant"
      />

      <ServicePainPoints
        eyebrow="Pourquoi c'est crucial"
        title="La mobilité, c'est l'autonomie. La perdre, c'est perdre tout."
        description="L'inaccessibilité des transports en IDF crée une exclusion silencieuse. Nous y répondons concrètement."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Notre offre transport"
        title="6 types de trajets adaptés à tous vos besoins"
        description="Du RDV médical à la sortie familiale, nous transportons toute personne à mobilité réduite."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode"
        title="Un service pensé pour votre tranquillité"
        description="Pas de surprise, pas de stress, pas d'attente : un transport qui rassure."
        points={methodPoints}
        image="/images/services/transport-handicapes.png"
        imageAlt="Transport PMR sécurisé"
      />

      <ServiceProvider
        title="Des chauffeurs formés et patients"
        description="Beaucoup de nos chauffeurs ont une formation auxiliaire de vie en plus de leur permis. Manutention, dialogue, écoute : pas seulement conduire."
        specialization="Manutention, premiers secours, communication adaptée handicap, conduite défensive"
        image="/images/services/transport-handicapes.png"
        imageAlt="Chauffeur PMR formé"
      />

      <ServicePricing
        hourlyRange={{ min: 30, max: 45 }}
        aides={aides}
        exampleNet="Exemple : 4 trajets aller-retour mensuels (RDV médical + sortie familiale) = ~360 €/mois brut. Avec mutuelle + crédit d'impôt, le reste à charge tombe souvent autour de 100-150 €."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur le transport PMR"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="transport-pmr"
        recommendedSlugs={[
          "accompagnement-sorties",
          "aide-handicap",
          "garde-enfants-handicap",
          "retour-hospitalisation",
        ]}
      />

      <FinalCTA />
    </>
  );
}
