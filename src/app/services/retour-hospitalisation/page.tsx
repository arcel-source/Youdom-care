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
    "Retour d'hospitalisation à domicile — démarrage en 48 h | Youdom Care",
  description:
    "Sortie d'hôpital sereine pour votre proche : aide aux soins, suivi post-opératoire, coordination avec médecin et infirmière. Démarrage en 48 à 72 h, week-end inclus. Pris en charge possible par la mutuelle.",
};

const painPoints = [
  {
    icon: "⏱️",
    title: "Sortie précipitée",
    description:
      "Hôpital qui annonce la sortie 24 h avant, week-end qui approche, famille qui ne peut pas s'organiser à temps.",
  },
  {
    icon: "🏥",
    title: "Continuité des soins fragile",
    description:
      "Pansements, injections, kiné, traitements à reprendre — le moindre oubli peut conduire à une réhospitalisation.",
  },
  {
    icon: "💔",
    title: "Patient désorienté",
    description:
      "Après une longue hospitalisation, certains patients perdent leurs repères et ont besoin d'une présence rassurante 24/24.",
  },
  {
    icon: "🚫",
    title: "Risque de chute majeur",
    description:
      "Faiblesse musculaire, fatigue, traitements lourds : les premières semaines sont les plus dangereuses.",
  },
  {
    icon: "🍲",
    title: "Reprise alimentaire difficile",
    description:
      "Régimes spécifiques post-op, perte d'appétit, dénutrition guettant — un suivi alimentaire est crucial.",
  },
  {
    icon: "📞",
    title: "Coordination complexe",
    description:
      "Médecin traitant, infirmier libéral, kiné, pharmacie : il faut quelqu'un qui orchestre tout.",
  },
];

const includedServices = [
  {
    icon: "🏥",
    title: "Coordination avec l'hôpital",
    description:
      "Échange avec le service hospitalier pour récupérer le dossier de sortie, les ordonnances, les recommandations.",
  },
  {
    icon: "💊",
    title: "Suivi des traitements",
    description:
      "Préparation du pilulier, rappel des prises, alerte au médecin si effets secondaires inhabituels.",
  },
  {
    icon: "🩹",
    title: "Aide aux soins (avec infirmier)",
    description:
      "Préparation pour la toilette, aide à l'habillage post-pansement, soutien lors des soins infirmiers à domicile.",
  },
  {
    icon: "🚶",
    title: "Aide à la rééducation",
    description:
      "Accompagnement aux séances de kiné, pratique des exercices à domicile, mobilité progressive.",
  },
  {
    icon: "🍎",
    title: "Suivi alimentaire & repas adaptés",
    description:
      "Régime post-op, hydratation surveillée, repas équilibrés. Prévention dénutrition.",
  },
  {
    icon: "🛁",
    title: "Toilette & confort",
    description:
      "Toilette adaptée à la cicatrisation, change de protection, prévention escarres si alitement.",
  },
  {
    icon: "🚗",
    title: "Transport médical",
    description:
      "Accompagnement aux RDV de contrôle, à la pharmacie, au laboratoire. Véhicules adaptés possible.",
  },
  {
    icon: "👨‍⚕️",
    title: "Liaison médecin traitant",
    description:
      "Compte-rendu hebdomadaire au médecin, alerte rapide en cas d'évolution. Vous avez un point de contact unique.",
  },
];

const methodPoints = [
  {
    title: "Activation 48 h avant la sortie",
    description:
      "Dès que la date de sortie est connue, nous mobilisons l'équipe : auxiliaire pressentie, plan d'aide, coordination avec l'hôpital. Tout est prêt le jour J.",
  },
  {
    title: "Visite à domicile avant la sortie",
    description:
      "Notre coordinatrice peut visiter le domicile pendant l'hospitalisation pour adapter l'environnement (déplacement de meubles, sécurisation salle de bain).",
  },
  {
    title: "Présence renforcée la 1ʳᵉ semaine",
    description:
      "Souvent 4 à 8 h/jour les 7 premiers jours pour assurer la sécurité, puis ajustement progressif selon l'évolution.",
  },
  {
    title: "Bilan à J+15",
    description:
      "Notre coordinatrice repasse 2 semaines après la sortie : bilan de la convalescence, ajustement du plan, décision de poursuite ou d'arrêt.",
  },
  {
    title: "Transition vers aide longue ou arrêt",
    description:
      "Si la convalescence est terminée, on s'arrête sans frais. Si une aide durable est nécessaire, on bascule vers un plan classique.",
  },
];

const aides = [
  {
    code: "Mutuelle santé",
    description:
      "La majorité des mutuelles couvrent partiellement (souvent 100 %) l'aide à domicile post-hospitalisation pendant 7 à 30 jours. Nous montons le dossier.",
  },
  {
    code: "Sécurité sociale",
    description:
      "Sortie de chimio, AVC, opération lourde : prise en charge possible via le PRADO (Programme de Retour À DOmicile) de l'Assurance Maladie.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique sur tout le reste à charge. Peut être pris en avance immédiate (sans attendre la déclaration).",
  },
  {
    code: "APA accélérée",
    description:
      "Une APA d'urgence peut être déclenchée en 24-48 h pour les sorties d'hôpital. Le département la versera ensuite, nous avançons les frais.",
  },
];

const faq = [
  {
    question: "Vous pouvez vraiment démarrer en 48 h, même le week-end ?",
    answer:
      "Oui. Nous avons une équipe d'astreinte qui couvre les sorties d'hôpital 7j/7. Appelez-nous dès que la date de sortie vous est annoncée — idéalement 48 h avant — et nous synchronisons l'auxiliaire avec votre sortie. Le seul cas où c'est plus tendu : sortie annoncée le vendredi soir pour le samedi matin. Mais même là, on trouve presque toujours.",
  },
  {
    question: "Mon père sort de chimio. Est-ce un cadre adapté ?",
    answer:
      "Tout à fait. Les sorties de chimio (anémie, fatigue extrême, immunosuppression) demandent une vigilance particulière sur l'alimentation, l'hygiène et la prévention des infections. Nos auxiliaires sont formées à ces protocoles. Le dispositif PRADO de la Sécu prend souvent en charge une partie.",
  },
  {
    question: "Comment vous coordonnez-vous avec l'infirmière à domicile ?",
    answer:
      "Nous travaillons en équipe avec l'infirmier libéral du patient. Notre auxiliaire prépare le patient pour la toilette, prend en charge l'aide aux gestes non médicaux, et signale toute évolution à l'infirmière. Un cahier de liaison est tenu au domicile, lisible par toute l'équipe (infirmier, kiné, médecin, famille).",
  },
  {
    question: "Combien de temps dure habituellement ce service ?",
    answer:
      "Très variable. Une simple sortie d'opération orthopédique : 7 à 14 jours. Un AVC ou une fracture du col du fémur chez une personne âgée : 30 à 60 jours, parfois plus. Nous évaluons chaque semaine si la prolongation est utile, ou si on bascule vers une aide longue (avec APA).",
  },
  {
    question: "Que faire si l'état se dégrade pendant la convalescence ?",
    answer:
      "Notre auxiliaire est formée à reconnaître les signaux d'alerte (fièvre, douleur anormale, désorientation, plaie qui s'infecte). Elle appelle immédiatement notre coordinateur ET le médecin traitant — ou le 15 si urgence. Tout incident est tracé dans le cahier de liaison.",
  },
  {
    question: "Et si la mutuelle refuse la prise en charge ?",
    answer:
      "Nous montons toujours le dossier complet pour maximiser vos chances (ordonnance, certificat de sortie, devis détaillé). Si la mutuelle refuse, le service reste accessible via le crédit d'impôt 50 % (qui s'applique à tous) et l'APA pour les seniors. Notre coordinatrice vous expose tous les leviers en transparence.",
  },
];

export default function RetourHospitalisationPage() {
  return (
    <>
      <ServiceHero
        category="Retour d'hospitalisation"
        title="La sortie d'hôpital sereine, dès le 1ᵉʳ jour."
        subtitle="Quand l'hôpital sonne la sortie, tout doit être prêt. Coordination, soins, sécurité, repas adaptés, présence rassurante : nous prenons le relais en 48 h, week-end compris."
        highlights={[
          "Démarrage en 48 à 72 h, week-end et urgences inclus",
          "Coordination avec hôpital, médecin, infirmier, kiné",
          "Prise en charge mutuelle ou PRADO possible",
          "Bilan à J+15 pour ajuster ou arrêter sans frais",
        ]}
        image="/images/services/service-retour-hospitalisation.png"
        imageAlt="Auxiliaire accompagnant un patient en convalescence à domicile"
      />

      <ServicePainPoints
        eyebrow="Les enjeux d'une sortie réussie"
        title="Les 7 premiers jours conditionnent la suite"
        description="Une sortie mal préparée = un risque élevé de réhospitalisation. C'est précisément ce que nous évitons."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Tout ce qu'on prend en charge"
        title="Un dispositif complet, du transport au pilulier"
        description="Vous pouvez confier l'organisation entière. Nous orchestrons, vous récupérez votre proche en confiance."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode dédiée"
        title="Un protocole de sortie d'hôpital éprouvé en 5 temps"
        description="Conçu avec des médecins gériatres et des infirmières libérales partenaires."
        points={methodPoints}
        image="/images/about/aide-personnes-agees.jpg"
        imageAlt="Auxiliaire et patient en convalescence"
      />

      <ServiceProvider
        title="Des auxiliaires formées au post-hospitalier"
        description="Nos équipes connaissent les protocoles de sortie d'hôpital, savent reconnaître les signaux d'alerte et travailler en binôme avec les libéraux."
        specialization="Soins post-op, prévention escarres, dénutrition, communication médicale"
        image="/images/about/assistante-vie-famille.jpg"
        imageAlt="Auxiliaire spécialisée post-hospitalisation"
      />

      <ServicePricing
        hourlyRange={{ min: 28, max: 34 }}
        aides={aides}
        exampleNet="Exemple : 14 jours de présence (4 h/jour) après une sortie d'opération coûtent en moyenne 1 600 €. Avec mutuelle + crédit d'impôt, le reste à charge tombe souvent à 200-400 €."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur le retour à domicile après hospitalisation"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="retour-hospitalisation"
        recommendedSlugs={[
          "aide-personnes-agees",
          "garde-nuit",
          "transport-pmr",
          "aide-menagere",
        ]}
      />

      <FinalCTA />
    </>
  );
}
