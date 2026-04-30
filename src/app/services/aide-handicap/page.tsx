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
    "Aide à domicile pour personnes en situation de handicap | Youdom Care",
  description:
    "Accompagnement personnalisé pour adultes et jeunes en situation de handicap : aide quotidienne, autonomie, projet de vie, dignité. PCH + crédit d'impôt 50 %. Devis gratuit.",
};

const painPoints = [
  {
    icon: "🤝",
    title: "Le besoin de respect & dignité",
    description:
      "Le handicap n'efface pas la personne. Trop de services traitent encore les bénéficiaires comme des objets de soin. Pas chez nous.",
  },
  {
    icon: "🎯",
    title: "Projet de vie individuel",
    description:
      "Étudier, travailler, vivre en couple, voyager : nos auxiliaires sont là pour rendre votre projet possible, pas pour le contraindre.",
  },
  {
    icon: "♿",
    title: "Mobilité spécifique",
    description:
      "Transferts lit ↔ fauteuil roulant, soins quotidiens, aides techniques : il faut une vraie maîtrise gestuelle, pas du bricolage.",
  },
  {
    icon: "🧠",
    title: "Handicap psychique ou cognitif",
    description:
      "TSA, déficience intellectuelle, troubles psychiques : un cadre prévisible, des intervenants formés à la communication adaptée.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Soulagement des proches",
    description:
      "Quand vous vivez avec un proche en situation de handicap, le répit n'est pas optionnel. C'est vital pour vous et pour lui.",
  },
  {
    icon: "📋",
    title: "Démarches MDPH labyrinthiques",
    description:
      "PCH, AAH, RQTH, AEEH : monter et défendre les dossiers est un travail à temps plein. Nous le faisons à votre place.",
  },
];

const includedServices = [
  {
    icon: "🛁",
    title: "Toilette & soins quotidiens",
    description:
      "Toilette adaptée à votre handicap, transferts sécurisés, soins de pression si alitement, change de protections.",
  },
  {
    icon: "👕",
    title: "Habillage & change",
    description:
      "Aide adaptée à votre niveau d'autonomie. Respect du goût, du choix vestimentaire, de l'estime de soi.",
  },
  {
    icon: "🍽️",
    title: "Repas & alimentation adaptée",
    description:
      "Préparation, aide à la prise (textures modifiées si dysphagie), respect des régimes spéciaux et préférences.",
  },
  {
    icon: "♿",
    title: "Mobilité & transferts",
    description:
      "Transferts maîtrisés (manuels ou sur lève-personne), accompagnement avec fauteuil roulant en intérieur et extérieur.",
  },
  {
    icon: "🚗",
    title: "Sorties & vie sociale",
    description:
      "Accompagnement aux loisirs, courses, RDV médicaux, vie associative. La vie sociale est un droit, pas un luxe.",
  },
  {
    icon: "🎓",
    title: "Soutien à l'autonomie",
    description:
      "Apprentissage des gestes du quotidien, accompagnement des projets professionnels, scolaires ou personnels.",
  },
  {
    icon: "🧹",
    title: "Aide ménagère & logistique",
    description:
      "Ménage, courses, lessive — pour vous concentrer sur votre vie, pas sur l'intendance.",
  },
  {
    icon: "📞",
    title: "Assistance administrative MDPH",
    description:
      "Montage et suivi des dossiers PCH, AAH, RQTH, demandes de matériel adapté. Service inclus dans notre accompagnement.",
  },
];

const methodPoints = [
  {
    title: "Évaluation respectueuse à domicile",
    description:
      "Notre coordinatrice rencontre la personne (et ses proches si elle le souhaite). Nous discutons besoins ET projet de vie — pas seulement les déficiences.",
  },
  {
    title: "Plan personnalisé co-construit",
    description:
      "Vous gardez la main. Nous proposons un plan, vous l'ajustez. Pas d'injonction. Vos heures, vos rituels, vos préférences priment.",
  },
  {
    title: "Auxiliaires choisies pour la compatibilité",
    description:
      "Nous présentons 1 ou 2 auxiliaires, vous décidez. Genre, profil, expérience : tout compte. Vous avez le droit de refuser sans justification.",
  },
  {
    title: "Coordination avec votre écosystème",
    description:
      "MDPH, médecin, ergothérapeute, SAAD partenaires, employeur : nous synchronisons les acteurs autour de vous.",
  },
  {
    title: "Liberté de vie, pas de contrôle",
    description:
      "Notre rôle est de soutenir, pas de surveiller. Vos choix de vie (travail, sorties, relations) ne nous regardent que si vous nous y associez.",
  },
];

const aides = [
  {
    code: "PCH",
    description:
      "Prestation de Compensation du Handicap. Couvre l'aide humaine (jusqu'à ~14,98 €/h), aide technique, aménagement domicile. Versée par la MDPH.",
  },
  {
    code: "AAH",
    description:
      "Allocation Adultes Handicapés. Revenu de base pour les adultes en situation de handicap, peut être cumulé avec d'autres aides.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique en service à la personne. Récupéré chaque année (ou en avance immédiate via l'URSSAF).",
  },
  {
    code: "MDPH (orientation)",
    description:
      "Reconnaissance de handicap, RQTH, orientation SAAD : nous montons les dossiers et défendons votre situation.",
  },
];

const faq = [
  {
    question: "Pour quels handicaps êtes-vous formés ?",
    answer:
      "Nos auxiliaires interviennent pour tous types de handicap : moteur (paraplégie, tétraplégie, IMC, SEP), sensoriel (cécité, surdité), psychique (troubles bipolaires, schizophrénie stabilisée), cognitif (déficience intellectuelle, TSA, DYS). Pour chaque profil, nous formons spécifiquement nos équipes (gestuelle, communication, cadrage).",
  },
  {
    question: "Vous accompagnez les jeunes adultes en situation de handicap ?",
    answer:
      "Oui, à partir de 18 ans (et avant via notre service garde d'enfants en situation de handicap). Notre approche est particulièrement adaptée aux jeunes adultes qui sortent d'IME ou de SESSAD : projet de vie autonome, accompagnement à l'emploi, vie sociale, premier logement.",
  },
  {
    question: "Comment respectez-vous l'autodétermination de la personne ?",
    answer:
      "C'est un principe non-négociable chez nous. La personne décide de tout ce qui peut l'être : ses horaires, ses repas, ses sorties, son auxiliaire, ses limites d'intervention. Si elle ne peut pas s'exprimer verbalement, nous travaillons en lien avec ses proches ET utilisons les outils de communication adaptés (CAA, pictogrammes, etc.).",
  },
  {
    question: "Vous travaillez avec des SAAD ou des associations ?",
    answer:
      "Oui. Nous coopérons régulièrement avec des SAAD partenaires, des associations (APF France handicap, APAJH, UNAPEI, autisme France), des ESAT, des SAVS. Cette coordination est gratuite et incluse dans notre service.",
  },
  {
    question: "Quel est le rôle de la PCH dans le financement ?",
    answer:
      "La PCH (Prestation de Compensation du Handicap) finance l'aide humaine. Le tarif horaire pris en charge varie selon le statut (prestataire 14,98 €/h en 2024 en mode prestataire). La MDPH évalue vos besoins et accorde un volume horaire. Nous vous aidons à monter ou réviser votre dossier — c'est inclus.",
  },
  {
    question: "Et si je veux changer d'auxiliaire ?",
    answer:
      "Sans aucun problème, sans aucune justification, sans frais. La compatibilité humaine est essentielle. Vous nous appelez, nous changeons sous 48 à 72 h. Aucune mauvaise expérience n'est tolérée — c'est un engagement de notre charte.",
  },
  {
    question: "Mon proche a un comportement difficile par moments. Vous gérez ?",
    answer:
      "Oui, nos auxiliaires sont formées à la gestion des troubles du comportement (crises d'angoisse, opposition, automutilation, agressivité ponctuelle). Nous adaptons l'intervention : binôme parfois, durée plus courte, désescalade verbale. Et nous échangeons avec votre psychiatre/psychologue si vous le souhaitez.",
  },
];

export default function AideHandicapPage() {
  return (
    <>
      <ServiceHero
        category="Aide & accompagnement handicap"
        title="Vivre votre vie. À votre rythme. À vos conditions."
        subtitle="L'accompagnement à domicile pour adultes en situation de handicap qui respecte votre projet de vie. Pas un cadre imposé — une présence qui vous soutient, sans vous remplacer."
        highlights={[
          "Aide humaine financée par la PCH",
          "Auxiliaires formées à votre type de handicap",
          "Vous choisissez votre auxiliaire — changement possible 48 h",
          "Démarches MDPH montées par notre coordinatrice",
        ]}
        image="/images/curated/service-aide-handicap.jpg"
        imageAlt="Auxiliaire accompagnant une personne en fauteuil roulant à domicile"
      />

      <ServicePainPoints
        eyebrow="Ce que nous écoutons"
        title="Le handicap, ce n'est pas que des besoins de soin"
        description="C'est aussi un projet de vie, une dignité, une autonomie à construire. Notre approche le respecte."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Ce qu'on fait avec vous"
        title="8 missions adaptées à chaque handicap"
        description="De l'aide quotidienne au soutien aux projets : nos prestations s'adaptent à votre niveau d'autonomie ET à vos ambitions."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre approche"
        title="Un accompagnement co-construit, pas imposé"
        description="L'autodétermination est notre principe directeur. Vous décidez, nous accompagnons."
        points={methodPoints}
        image="/images/curated/service-aide-handicap.jpg"
        imageAlt="Personne en situation de handicap accompagnée"
      />

      <ServiceProvider
        title="Des auxiliaires formées au handicap, choisies pour vous"
        description="Au-delà des compétences techniques : empathie, capacité d'adaptation, respect de l'intimité. Vous validez le profil avant tout démarrage."
        specialization="Manutention, communication adaptée, gestion troubles comportement, autonomisation"
        image="/images/curated/public-aidants-knitting-granddaughter.jpg"
        imageAlt="Auxiliaire spécialisée handicap"
      />

      <ServicePricing
        hourlyRange={{ min: 26, max: 34 }}
        aides={aides}
        exampleNet="Exemple : avec une PCH de 80 h/mois et le crédit d'impôt 50 %, le reste à charge mensuel tombe souvent entre 0 et 250 € pour un plan d'aide de 100 h/mois."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur l'accompagnement handicap"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="aide-handicap"
        recommendedSlugs={[
          "garde-enfants-handicap",
          "transport-pmr",
          "garde-nuit",
          "assistance-administrative",
        ]}
      />

      <FinalCTA />
    </>
  );
}
