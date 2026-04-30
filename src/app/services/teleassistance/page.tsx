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
    "Téléassistance 24/24 — bouton d'urgence senior | Youdom Care",
  description:
    "Téléassistance professionnelle 7j/7, 24h/24 pour personnes âgées et fragilisées : médaillon SOS, détecteur de chute, géolocalisation. Réaction immédiate. Crédit d'impôt 50 %.",
};

const painPoints = [
  {
    icon: "📞",
    title: "Impossible d'appeler après une chute",
    description:
      "Sans matériel, une chute = des heures au sol seul, jusqu'à l'arrivée d'un proche. Aggravation systémique des conséquences.",
  },
  {
    icon: "🌙",
    title: "Nuits & week-ends critiques",
    description:
      "C'est la nuit, le week-end, les jours fériés que les drames arrivent — quand l'aidant n'est pas joignable.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Famille géographiquement éloignée",
    description:
      "Vous habitez loin de votre proche ? La téléassistance vous offre une ligne directe en cas de pépin.",
  },
  {
    icon: "🚶‍♂️",
    title: "Personnes désorientées (Alzheimer)",
    description:
      "La fugue, l'errance hors domicile : la téléassistance avec géolocalisation permet de localiser rapidement la personne.",
  },
  {
    icon: "💊",
    title: "Malaises soudains",
    description:
      "AVC, infarctus, hypoglycémie, chute de tension : la rapidité d'intervention est vitale. Chaque minute compte.",
  },
  {
    icon: "🏠",
    title: "Vivre seul, vieillir seul",
    description:
      "Préserver l'autonomie ne doit pas signifier abandonner la sécurité. La téléassistance, c'est l'autonomie protégée.",
  },
];

const includedServices = [
  {
    icon: "🆘",
    title: "Médaillon ou bracelet SOS",
    description:
      "Bouton d'urgence simple et étanche, à porter en permanence. Une seule pression suffit pour déclencher l'alerte.",
  },
  {
    icon: "🤸",
    title: "Détecteur de chute automatique",
    description:
      "Capteur qui détecte une chute brutale et déclenche l'alerte automatiquement, même si la personne ne peut plus appuyer.",
  },
  {
    icon: "📍",
    title: "Géolocalisation GPS",
    description:
      "Pour les personnes sujettes à l'errance (Alzheimer), localisation précise en cas de fugue. Activable à distance.",
  },
  {
    icon: "🔊",
    title: "Haut-parleur & micro intégrés",
    description:
      "Échange direct avec notre centre d'écoute en cas d'alerte. Pas besoin de courir au téléphone.",
  },
  {
    icon: "👂",
    title: "Centre d'écoute 24/24",
    description:
      "Téléopérateurs formés, disponibles 7j/7, 24h/24. Réponse en moins de 30 secondes en moyenne.",
  },
  {
    icon: "🚑",
    title: "Déclenchement secours coordonné",
    description:
      "Selon la situation : appel famille, médecin, voisin, pompiers, SAMU. Procédure définie avec vous à l'avance.",
  },
  {
    icon: "🏠",
    title: "Trousseau de clés sécurisé",
    description:
      "Possibilité de déposer des clés (chez nous ou voisin de confiance) pour intervention sans bris de porte.",
  },
  {
    icon: "📊",
    title: "Suivi mensuel",
    description:
      "Compte-rendu mensuel à la famille : appels, alertes, état du matériel. Transparence totale.",
  },
];

const methodPoints = [
  {
    title: "Visite d'installation à domicile",
    description:
      "Notre technicien installe le matériel chez vous, teste la couverture, configure les contacts d'urgence (famille, médecin, voisin).",
  },
  {
    title: "Formation à l'usage",
    description:
      "L'utilisateur (et sa famille) apprend à utiliser le médaillon : déclencher, annuler en cas de fausse alerte, recharger.",
  },
  {
    title: "Test mensuel automatique",
    description:
      "Chaque mois, notre centre lance un test de bon fonctionnement (en lien avec le bénéficiaire). Garantit que le matériel marche.",
  },
  {
    title: "Procédures personnalisées",
    description:
      "Chaque dossier a sa procédure : qui appeler en 1ᵉʳ ? en 2ᵉ ? quand appeler le SAMU ? Construite avec vous, ajustable.",
  },
  {
    title: "Maintenance & remplacement",
    description:
      "Si le matériel défaille : remplacement gratuit sous 48 h. Pas de coupure de service tolérée.",
  },
];

const aides = [
  {
    code: "APA",
    description:
      "L'APA finance la téléassistance pour les personnes en perte d'autonomie. Souvent intégrée au plan d'aide.",
  },
  {
    code: "Caisses retraite",
    description:
      "CARSAT, AGIRC-ARRCO, MSA financent souvent la téléassistance dans le cadre des aides à la prévention.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "L'abonnement téléassistance est éligible au crédit d'impôt SAP. Coût net divisé par deux.",
  },
  {
    code: "Mairie / CCAS",
    description:
      "Beaucoup de communes financent ou cofinancent la téléassistance pour leurs seniors. Renseignez-vous au CCAS.",
  },
];

const faq = [
  {
    question: "Combien de temps entre l'appui sur le bouton et la réponse ?",
    answer:
      "Notre engagement : moins de 30 secondes en moyenne. La connexion est immédiate, le téléopérateur prend l'appel et engage le dialogue. Si la personne ne répond pas, déclenchement immédiat de la procédure d'urgence.",
  },
  {
    question: "Quelle est la portée du médaillon dans le logement ?",
    answer:
      "Notre boîtier central couvre l'intégralité d'un logement standard (jusqu'à ~80 m²) et une partie du jardin/balcon. Pour les très grandes maisons, nous installons un répéteur. Test de couverture systématique à l'installation.",
  },
  {
    question: "Et en cas de coupure de courant ou de réseau internet ?",
    answer:
      "Le boîtier a une batterie de secours qui prend le relais (autonomie 24-48 h). Le service utilise la 4G en backup quand l'internet domestique tombe. Ces situations sont rares mais couvertes.",
  },
  {
    question: "Le médaillon fonctionne-t-il sous la douche ?",
    answer:
      "Oui, nos médaillons sont étanches IP67 (résistants à l'immersion). Très important : la salle de bain est l'endroit n°1 des chutes graves. Le médaillon doit être porté sous la douche.",
  },
  {
    question: "Vous gérez aussi les fausses alertes ?",
    answer:
      "Oui sans aucun problème. Les fausses alertes (médaillon coincé, geste involontaire) sont fréquentes au début. Notre téléopérateur dialogue, l'utilisateur peut annuler simplement. Pas de pénalité, pas de frais.",
  },
  {
    question: "Mon proche refuse de porter le médaillon. Que faire ?",
    answer:
      "Très fréquent (oubli, pudeur, déni). Astuces : 1) commencer par un bracelet plus discret ; 2) installer aussi un détecteur de chute mural (sans rien à porter) ; 3) coupler avec une visite hebdomadaire d'auxiliaire qui rappelle, vérifie, dédramatise.",
  },
];

export default function TeleassistancePage() {
  return (
    <>
      <ServiceHero
        category="Téléassistance 24/24"
        title="Une présence rassurante. À chaque seconde."
        subtitle="Téléassistance professionnelle 7j/7, 24h/24 : médaillon d'urgence, détecteur de chute, géolocalisation. Pour vivre seul·e, en sécurité, sans inquiéter ses proches."
        highlights={[
          "Réponse en moins de 30 secondes",
          "Médaillon étanche, détecteur de chute auto",
          "Géolocalisation pour les personnes désorientées",
          "Procédures personnalisées avec votre famille",
        ]}
        image="/images/curated/service-teleassistance.jpg"
        imageAlt="Médaillon de téléassistance"
      />

      <ServicePainPoints
        eyebrow="Pourquoi c'est essentiel"
        title="La téléassistance n'est pas un gadget. C'est une assurance vie."
        description="Sur 100 chutes graves de personnes âgées, 30 surviennent quand la personne est seule. L'arrivée tardive des secours conditionne le pronostic vital."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Notre dispositif complet"
        title="Tout ce qui sécurise votre proche, 24/24"
        description="Du médaillon au centre d'écoute, du test mensuel au remplacement gratuit : un service intégral."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode"
        title="Un déploiement maîtrisé, un suivi continu"
        description="Pas juste un boîtier : un dispositif construit avec vous, validé techniquement, suivi mensuellement."
        points={methodPoints}
        image="/images/curated/service-teleassistance.jpg"
        imageAlt="Installation téléassistance à domicile"
      />

      <ServiceProvider
        title="Un centre d'écoute français, formé, humain"
        description="Nos téléopérateurs sont formés à l'écoute des personnes fragiles, à la gestion d'urgence, aux protocoles médicaux. Pas de robot, pas de délocalisé : des humains, ici."
        specialization="Gestion d'urgence, premiers secours téléphoniques, écoute personnes fragiles"
        image="/images/curated/service-teleassistance.jpg"
        imageAlt="Centre d'écoute téléassistance"
      />

      <ServicePricing
        hourlyRange={{ min: 25, max: 35 }}
        aides={aides}
        exampleNet="Exemple : abonnement mensuel téléassistance complète (médaillon + détecteur de chute + géolocalisation) = ~30-45 €/mois. Avec crédit d'impôt 50 % et APA, le reste à charge tombe souvent à 10-20 €/mois."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur la téléassistance"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="teleassistance"
        recommendedSlugs={[
          "aide-personnes-agees",
          "garde-nuit",
          "alzheimer-parkinson",
          "accompagnement-sorties",
        ]}
      />

      <FinalCTA />
    </>
  );
}
