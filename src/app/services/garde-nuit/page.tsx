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
    "Garde de nuit & présence nocturne à domicile | Youdom Care",
  description:
    "Présence de nuit (passive ou active) pour personnes âgées, en sortie d'hôpital ou avec Alzheimer. Sécurité 24/24, sommeil retrouvé pour la famille. Devis gratuit.",
};

const painPoints = [
  {
    icon: "🌙",
    title: "Les nuits qui détruisent",
    description:
      "Réveils multiples, surveillance perpétuelle, sommeil léger en alerte : l'aidant qui dort mal s'épuise irréversiblement.",
  },
  {
    icon: "⚠️",
    title: "Risque de chute nocturne",
    description:
      "60 % des chutes graves surviennent la nuit (lever pour les toilettes, désorientation). Une présence dissuade et sécurise.",
  },
  {
    icon: "🚶",
    title: "Déambulation Alzheimer",
    description:
      "Le « syndrome crépusculaire » provoque agitation et déambulation nocturne. Une présence calme désamorce les crises.",
  },
  {
    icon: "🩹",
    title: "Sortie d'hôpital ou post-op",
    description:
      "Les premières nuits après une opération demandent vigilance : douleur, désorientation médicamenteuse, soins.",
  },
  {
    icon: "🏥",
    title: "Hospitalisation à domicile",
    description:
      "HAD, soins palliatifs, fin de vie : une garde de nuit qualifiée permet de maintenir la personne chez elle dignement.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Famille géographiquement éloignée",
    description:
      "Vous habitez loin et craignez « l'appel du milieu de la nuit » ? Une garde de nuit offre la sérénité à toute la famille.",
  },
];

const includedServices = [
  {
    icon: "🛏️",
    title: "Coucher accompagné",
    description:
      "Aide à la mise en chemise de nuit, à la toilette du soir, au passage aux toilettes, à l'installation confortable.",
  },
  {
    icon: "👁️",
    title: "Surveillance active ou passive",
    description:
      "Selon vos besoins : présence éveillée toute la nuit (active) ou veille avec sommeil dans une chambre dédiée (passive).",
  },
  {
    icon: "🚽",
    title: "Aide aux levers nocturnes",
    description:
      "Accompagnement aux toilettes, change si protections, retour au lit en sécurité.",
  },
  {
    icon: "💊",
    title: "Prises médicamenteuses",
    description:
      "Médicaments du soir, du milieu de nuit ou du petit matin. Hypnotiques, anxiolytiques, traitements Parkinson nocturnes.",
  },
  {
    icon: "🆘",
    title: "Réaction d'urgence",
    description:
      "Formation aux premiers secours, appel du 15 si besoin, alerte famille immédiate. Cahier de liaison rempli au matin.",
  },
  {
    icon: "🌅",
    title: "Lever du matin",
    description:
      "Aide au réveil, toilette, habillage, premier petit-déjeuner avant la prise de relais par l'auxiliaire de jour.",
  },
];

const methodPoints = [
  {
    title: "Évaluation du besoin réel",
    description:
      "Présence active permanente ? Veille passive ? Garde alternée 1 nuit/2 ? Notre coordinatrice mesure le besoin exact pour optimiser le coût.",
  },
  {
    title: "Auxiliaire dédiée à la nuit",
    description:
      "Différente de celle du jour (questions de récupération). Mais formée à votre dossier, présentée avant le démarrage.",
  },
  {
    title: "Conditions d'hébergement claires",
    description:
      "Pour la veille passive : chambre dédiée, lit, accès salle de bain, repas. Nous validons que votre logement permet une garde de qualité.",
  },
  {
    title: "Cahier de liaison nuit/jour",
    description:
      "Chaque événement de la nuit est consigné : levers, prises, agitation, sommeil. L'auxiliaire de jour prend la suite informée.",
  },
  {
    title: "Soutien & relais permanent",
    description:
      "Coordinateur d'astreinte joignable 24/24 par l'auxiliaire si situation imprévue (refus de couché, fugue Alzheimer, urgence médicale).",
  },
];

const aides = [
  {
    code: "APA",
    description:
      "L'APA finance la garde de nuit pour les GIR 1-3 sans plafond horaire spécifique. Justification médicale parfois demandée.",
  },
  {
    code: "PCH",
    description:
      "La PCH peut couvrir la nuit pour les personnes handicapées avec besoin de surveillance constante (aide humaine renforcée).",
  },
  {
    code: "Mutuelle santé",
    description:
      "Beaucoup de mutuelles couvrent la garde de nuit après hospitalisation (prise en charge ponctuelle 7 à 30 jours).",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique sur le tarif horaire de nuit. Souvent oublié dans les calculs : il divise réellement par deux le coût final.",
  },
];

const faq = [
  {
    question: "Quelle est la différence entre garde active et veille passive ?",
    answer:
      "Garde active : l'auxiliaire reste éveillée toute la nuit (cas des soins palliatifs, fin de vie, désorientation sévère, post-op récent). Veille passive : l'auxiliaire dort dans une chambre dédiée mais peut intervenir à tout moment (typique : prévention chutes, présence rassurante). La passive est ~30 % moins chère que l'active.",
  },
  {
    question: "Quelle est la durée typique d'une nuit ?",
    answer:
      "Généralement 22 h à 7 h, soit 9 h. Possible 21 h à 6 h selon vos horaires. Plus court (ex. 0 h à 6 h) sur demande pour des situations spécifiques. Notre coordinatrice ajuste à votre rythme.",
  },
  {
    question: "Pouvez-vous démarrer cette nuit ?",
    answer:
      "En cas d'urgence (sortie d'hôpital, crise nocturne, aidant épuisé), oui — avec un délai de 24 à 48 h selon disponibilité. Nous avons une cellule d'urgence joignable jusqu'à 22 h pour ces situations critiques.",
  },
  {
    question: "Comment garantissez-vous la sécurité de l'auxiliaire la nuit ?",
    answer:
      "Pour les missions sensibles (Alzheimer agité, fin de vie), nous évaluons les conditions du domicile. L'auxiliaire dispose d'un téléphone d'astreinte qui sonne directement chez nos coordinateurs. Aucune mission n'est confiée si la sécurité de l'auxiliaire ne peut être assurée.",
  },
  {
    question: "Mon proche refuse l'idée d'une « inconnue » la nuit. Comment faire ?",
    answer:
      "Très fréquent. Trois pistes : 1) commencer par 1 nuit hebdo pour créer le lien ; 2) faire venir l'auxiliaire l'après-midi en amont pour un goûter, un échange, une mise en confiance ; 3) garantir absolument la même personne (pas de tournante) pour que la nuit devienne familière.",
  },
  {
    question: "Pouvez-vous gérer la fin de vie à domicile (soins palliatifs) ?",
    answer:
      "Oui, en coordination avec l'équipe HAD (hospitalisation à domicile) ou le réseau de soins palliatifs. Nos auxiliaires de nuit sont formées à l'accompagnement de fin de vie : présence apaisée, gestion de la douleur (alerte infirmière), soutien à la famille. C'est l'une de nos missions les plus précieuses.",
  },
];

export default function GardeNuitPage() {
  return (
    <>
      <ServiceHero
        category="Présence de nuit"
        title="Vos nuits retrouvées. Leur sécurité assurée."
        subtitle="Garde de nuit (active ou passive) pour les personnes âgées, en convalescence, atteintes d'Alzheimer ou en fin de vie. Une présence qualifiée, du coucher au lever."
        highlights={[
          "Veille active ou passive selon vos besoins",
          "Auxiliaires formées aux nuits Alzheimer / soins palliatifs",
          "Démarrage en 24-48 h sur les urgences",
          "Cahier de liaison rempli — relais propre avec l'aide de jour",
        ]}
        image="/images/curated/service-garde-nuit.jpg"
        imageAlt="Auxiliaire en garde de nuit auprès d'une personne âgée"
      />

      <ServicePainPoints
        eyebrow="Pourquoi la nuit fragilise"
        title="La nuit est le moment où tout peut arriver"
        description="Chutes, agitation, soins, médicaments, sommeil de l'aidant : la nuit demande des compétences spécifiques."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Notre présence nocturne"
        title="Tout ce qu'on prend en charge la nuit"
        description="Du coucher au petit-déjeuner, votre proche n'est jamais seul. Et vous dormez."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode nuit"
        title="Une garde de nuit pensée comme un protocole"
        description="Pas de simple « surveillance » : un dispositif structuré, formé, encadré."
        points={methodPoints}
        image="/images/curated/service-garde-nuit.jpg"
        imageAlt="Garde de nuit qualifiée"
      />

      <ServiceProvider
        title="Des auxiliaires de nuit qualifiées et reposées"
        description="Nous ne demandons jamais à une auxiliaire de jour de prendre une nuit. Nuit et jour : équipes dédiées, formées différemment."
        specialization="Veille passive, gestion des troubles du sommeil, soins palliatifs, premiers secours"
        image="/images/curated/public-aidants-knitting-granddaughter.jpg"
        imageAlt="Auxiliaire de nuit formée"
      />

      <ServicePricing
        hourlyRange={{ min: 18, max: 28 }}
        aides={aides}
        exampleNet="Exemple : une nuit en veille passive (9 h) coûte environ 200 € brut. Avec crédit d'impôt 50 % : 100 € net. Avec APA cumulée : souvent 30 à 60 € de reste à charge par nuit."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur la garde de nuit"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="garde-nuit"
        recommendedSlugs={[
          "aide-personnes-agees",
          "alzheimer-parkinson",
          "retour-hospitalisation",
          "teleassistance",
        ]}
      />

      <FinalCTA />
    </>
  );
}
