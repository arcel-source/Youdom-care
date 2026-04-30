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
    "Assistance administrative à domicile — APA, MDPH, démarches | Youdom Care",
  description:
    "Aide à la gestion des dossiers : APA, PCH, MDPH, mutuelles, courrier, factures. Évite l'oubli, la pénalité, le découragement. Crédit d'impôt 50 %. Devis gratuit.",
};

const painPoints = [
  {
    icon: "📨",
    title: "Courrier qui s'accumule",
    description:
      "Factures, relances, courriers d'assurance, EDF : sans gestion régulière, le retard devient pénalité, puis dette.",
  },
  {
    icon: "📋",
    title: "Dossiers MDPH labyrinthiques",
    description:
      "PCH, AAH, RQTH, AEEH : les formulaires sont longs, les justificatifs nombreux, les délais critiques. Beaucoup renoncent.",
  },
  {
    icon: "💰",
    title: "Aides non demandées",
    description:
      "APA, mutuelles, caisses retraite : chaque année, des milliards d'aides ne sont pas demandées par méconnaissance.",
  },
  {
    icon: "💻",
    title: "Démarches en ligne obligatoires",
    description:
      "Impôts, ANTS, Ameli, CAF : tout passe par internet. Pour beaucoup de seniors et personnes en situation de handicap, c'est un mur.",
  },
  {
    icon: "🏥",
    title: "Coordination médicale",
    description:
      "Demandes d'arrêt, ALD, prises en charge mutuelle, indemnités : sans suivi, les remboursements traînent ou disparaissent.",
  },
  {
    icon: "🫂",
    title: "Aidants débordés",
    description:
      "Vous gérez déjà la santé, le quotidien, la famille. Les démarches admin de votre proche, c'est la goutte de trop.",
  },
];

const includedServices = [
  {
    icon: "📨",
    title: "Tri & gestion du courrier",
    description:
      "Ouverture, tri, classement, archivage. Identification des urgences. Réponse aux courriers simples, escalade des complexes.",
  },
  {
    icon: "💳",
    title: "Suivi des factures",
    description:
      "Vérification des factures (eau, EDF, internet, assurances), suivi des règlements, alerte sur les anomalies (surfacturation, doublons).",
  },
  {
    icon: "📋",
    title: "Constitution dossiers MDPH",
    description:
      "Montage complet PCH, AAH, RQTH, AEEH : projet de vie, certificats médicaux, recueil des justificatifs, dépôt et suivi.",
  },
  {
    icon: "👴",
    title: "Dossiers APA, ASPA, ASH",
    description:
      "Pour les seniors : Allocation Personnalisée d'Autonomie, Allocation de Solidarité, Aide Sociale Hébergement. Montage et défense.",
  },
  {
    icon: "💼",
    title: "Mutuelles & remboursements",
    description:
      "Suivi des remboursements, demandes de prise en charge, contestation de refus. Récupération de sommes dues.",
  },
  {
    icon: "🏛️",
    title: "Démarches en ligne",
    description:
      "Aide à l'utilisation des sites Ameli, impôts, ANTS, FranceConnect. Création de comptes, télédéclarations.",
  },
  {
    icon: "📞",
    title: "Appels difficiles",
    description:
      "Avec les caisses, les administrations, les fournisseurs. Standards qui font fuir les seniors. Nous prenons les appels à votre place.",
  },
  {
    icon: "📂",
    title: "Classement & archivage",
    description:
      "Organisation d'un classement durable et accessible. Si urgence, vous (ou notre auxiliaire) trouve les documents en 2 minutes.",
  },
];

const methodPoints = [
  {
    title: "Audit administratif initial",
    description:
      "1 à 2 séances pour faire le point : courriers en attente, dossiers à monter, aides oubliées, factures douteuses. État des lieux complet.",
  },
  {
    title: "Plan d'action priorisé",
    description:
      "Liste des actions par urgence : ce qui doit être fait cette semaine, ce mois, ce trimestre. Pas de paniques, pas d'oubli.",
  },
  {
    title: "Mandat & procuration",
    description:
      "Pour vous représenter (avec votre accord), nous mettons en place les procurations nécessaires (poste, banque, MDPH). Limites strictes définies.",
  },
  {
    title: "Suivi régulier",
    description:
      "Visites bimensuelles ou mensuelles selon le volume. Tableau de bord transparent : ce qui a été fait, ce qui reste, ce qui attend.",
  },
  {
    title: "Confidentialité absolue",
    description:
      "Tout ce que nous voyons reste confidentiel. Nos auxiliaires sont contractuellement liées au secret professionnel.",
  },
];

const aides = [
  {
    code: "APA volet humain",
    description:
      "L'APA peut intégrer du temps « accompagnement administratif » dans le plan d'aide. Notre coordinatrice le négocie avec le département.",
  },
  {
    code: "PCH aide humaine",
    description:
      "Pour les personnes handicapées, la PCH inclut le « besoin d'aide aux actes essentiels » dont fait partie la vie sociale et administrative.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Notre service est éligible au crédit d'impôt SAP. Coût net divisé par deux automatiquement.",
  },
  {
    code: "Mandataire de protection",
    description:
      "Si curatelle ou tutelle : nous coordonnons avec le mandataire judiciaire. Service complémentaire, pas concurrent.",
  },
];

const faq = [
  {
    question: "Vous prenez en charge les déclarations d'impôts ?",
    answer:
      "Oui, l'aide à la télédéclaration entre dans notre service. Pour les situations simples (revenus salariés/retraite, déductions classiques) : nous le faisons avec vous. Pour les cas complexes (revenus fonciers, succession, BIC), nous vous orientons vers un comptable partenaire.",
  },
  {
    question: "Pouvez-vous monter un dossier MDPH ?",
    answer:
      "C'est une de nos spécialités. Le montage MDPH demande du temps (souvent 6-10 h par dossier) : projet de vie, certificat médical détaillé, justificatifs, lettre d'accompagnement. Nous montons, déposons et suivons jusqu'à la décision. En cas de refus : recours gracieux et contentieux.",
  },
  {
    question: "Quelle est la limite de votre intervention ?",
    answer:
      "Nous ne sommes pas avocats : pas de représentation contentieuse devant les tribunaux. Nous ne sommes pas comptables : pas de bilan ou déclaration BIC. Nous ne sommes pas mandataires judiciaires : pas de gestion sous tutelle/curatelle. Pour ces besoins, nous orientons vers des professionnels partenaires.",
  },
  {
    question: "Comment garantissez-vous la confidentialité ?",
    answer:
      "Tous nos auxiliaires signent un engagement de confidentialité opposable (clause pénale en cas de manquement). Nous formons spécifiquement aux données sensibles. Aucun document n'est emporté hors du domicile sans accord. Coffre-fort numérique sécurisé pour les copies utiles.",
  },
  {
    question: "Pouvez-vous gérer mes paiements ?",
    answer:
      "Avec votre accord et procuration limitée. Nous pouvons : régler des factures avec votre banque (chèque, virement préparé que vous validez), retirer des espèces dans la limite définie. Nous ne demandons jamais d'accès illimité au compte.",
  },
  {
    question: "Combien d'heures par mois en moyenne ?",
    answer:
      "Très variable. Pour un suivi régulier (tri courrier, paiements) : 2 à 4 h/mois. Pour un montage MDPH ponctuel : 6-10 h sur 2 mois. Pour un audit complet + remise à plat : 15-25 h sur les 3 premiers mois, puis maintenance.",
  },
];

export default function AssistanceAdministrativePage() {
  return (
    <>
      <ServiceHero
        category="Assistance administrative"
        title="On s'occupe des papiers. Vous respirez."
        subtitle="Aide à la gestion administrative à domicile : courrier, factures, MDPH, APA, mutuelles, démarches en ligne. Confidentialité absolue, suivi sérieux."
        highlights={[
          "Spécialistes des dossiers MDPH (PCH, AAH, RQTH, AEEH)",
          "Récupération des aides non demandées",
          "Démarches en ligne (Ameli, impôts, ANTS) accompagnées",
          "Confidentialité contractuelle absolue",
        ]}
        image="/images/curated/service-assistance-administrative.jpg"
        imageAlt="Auxiliaire aidant aux démarches administratives à domicile"
      />

      <ServicePainPoints
        eyebrow="L'admin, ce désastre invisible"
        title="L'administratif tue à petit feu : pénalités, droits perdus, isolement"
        description="Chaque année, des milliards d'aides ne sont pas réclamés. Des milliers de seniors perdent des droits par méconnaissance. Cela peut s'arrêter."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Notre prise en charge"
        title="8 missions pour reprendre le contrôle de votre admin"
        description="Du tri du courrier au montage MDPH : un service complet, à votre rythme."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode"
        title="Un audit, un plan, un suivi régulier"
        description="Pas de précipitation : on commence par comprendre, on priorise, on agit, on suit."
        points={methodPoints}
        image="/images/curated/service-assistance-administrative.jpg"
        imageAlt="Gestion administrative organisée"
      />

      <ServiceProvider
        title="Des auxiliaires formées au social et administratif"
        description="Nos auxiliaires de cette spécialité sont issues du social, du conseil ou ont une formation MDPH/CAF spécifique. Pas du bricolage."
        specialization="MDPH, APA, fiscalité simple, CAF, mutuelles, démarches en ligne"
        image="/images/curated/service-assistance-administrative.jpg"
        imageAlt="Spécialiste assistance administrative"
      />

      <ServicePricing
        hourlyRange={{ min: 28, max: 35 }}
        aides={aides}
        exampleNet="Exemple : 4 h/mois de suivi régulier = ~120 €/mois brut. Avec crédit d'impôt 50 %, ~60 €/mois — souvent largement compensé par les aides récupérées qu'on vous fait obtenir."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur l'assistance administrative"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="assistance-administrative"
        recommendedSlugs={[
          "aide-personnes-agees",
          "aide-handicap",
          "assistance-informatique",
          "aide-menagere",
        ]}
      />

      <FinalCTA />
    </>
  );
}
