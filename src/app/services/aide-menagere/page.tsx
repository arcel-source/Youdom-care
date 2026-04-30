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
    "Aide ménagère à domicile — Paris & Île-de-France | Youdom Care",
  description:
    "Ménage régulier, lessive, repassage, courses : un domicile propre c'est moins de chutes, moins d'infections, plus de sérénité. Crédit d'impôt 50 %. Devis gratuit.",
};

const painPoints = [
  {
    icon: "⚠️",
    title: "Sécurité du logement",
    description:
      "Tapis qui glissent, sol encombré, salle de bain négligée : le ménage régulier prévient activement les chutes.",
  },
  {
    icon: "🦠",
    title: "Hygiène & santé",
    description:
      "Acariens, moisissures, infections urinaires liées à des sanitaires sales : un domicile propre, c'est de la santé.",
  },
  {
    icon: "👕",
    title: "Linge accumulé",
    description:
      "Lessive en retard, repassage qui s'entasse : une personne âgée seule peut basculer vers le négligé en quelques semaines.",
  },
  {
    icon: "💔",
    title: "Estime de soi en chute",
    description:
      "Vivre dans un logement dégradé pèse sur le moral. Beaucoup de seniors évitent de recevoir par honte. C'est le début de l'isolement.",
  },
  {
    icon: "🛒",
    title: "Courses devenues impossibles",
    description:
      "Lourdes, fatigantes, dangereuses (verglas, chaleur) : les courses sont l'une des tâches les premières à devenir un obstacle.",
  },
  {
    icon: "🫂",
    title: "Charge sur l'aidant",
    description:
      "Quand l'aidant doit aussi gérer le ménage de son proche, la rupture est proche. Délégation = soulagement immédiat.",
  },
];

const includedServices = [
  {
    icon: "🧹",
    title: "Ménage complet",
    description:
      "Sols, surfaces, sanitaires, cuisine, vitres (selon hauteur). Adapté à votre logement et à vos préférences.",
  },
  {
    icon: "🛏️",
    title: "Entretien linge & literie",
    description:
      "Changement des draps, lavage, séchage, pliage. Particulièrement crucial en cas d'incontinence ou alitement.",
  },
  {
    icon: "👕",
    title: "Lessive & repassage",
    description:
      "Cycle complet : tri, lavage, séchage, repassage, rangement. Vêtements toujours propres et à portée.",
  },
  {
    icon: "🛒",
    title: "Courses",
    description:
      "Avec vous ou à votre place. Liste précise, respect des préférences, gestion budget si demandé.",
  },
  {
    icon: "🍳",
    title: "Préparation simple des repas",
    description:
      "Repas réchauffés, petits plats simples, sandwiches. Pour les repas élaborés, voir notre service aide aux personnes âgées.",
  },
  {
    icon: "♻️",
    title: "Sortie poubelles & courrier",
    description:
      "Tâches « invisibles » mais cruciales. Tri, sortie poubelles, récupération courrier, dépôt à la Poste.",
  },
  {
    icon: "🌱",
    title: "Plantes & petits travaux",
    description:
      "Arrosage, petit jardinage de balcon, recharge frigo, bricolage léger. Tout ce qui rend le « chez soi » vivant.",
  },
  {
    icon: "🏠",
    title: "Vigilance préventive",
    description:
      "Notre auxiliaire repère ce qui change : tapis dangereux, ampoule grillée, fuite naissante, anomalie. Et nous prévient.",
  },
];

const methodPoints = [
  {
    title: "Visite de calibrage",
    description:
      "Nous venons voir le logement, comprendre vos exigences (produits préférés, zones sensibles, fréquence). Pas de standard : votre maison, votre cadre.",
  },
  {
    title: "Plan de ménage personnalisé",
    description:
      "Liste de tâches par fréquence : hebdomadaire, bimensuelle, mensuelle. Validée avec vous, ajustable.",
  },
  {
    title: "Auxiliaire dédiée",
    description:
      "La même personne à chaque visite : elle connaît votre logement, vos habitudes, vos préférences de produits.",
  },
  {
    title: "Cahier de présence",
    description:
      "Tableau de signature et notes laissées au domicile : ce qui a été fait, ce qui reste, ce qui mérite votre attention.",
  },
  {
    title: "Suivi qualité régulier",
    description:
      "Notre coordinatrice vous appelle après les premières visites pour ajuster, puis tous les 3 mois pour faire le point.",
  },
];

const aides = [
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique en service à la personne. Récupéré en avance immédiate (l'URSSAF déduit directement de votre paiement).",
  },
  {
    code: "APA",
    description:
      "Pour les seniors GIR 1-4, l'APA peut financer une partie du ménage si justifié dans le plan d'aide.",
  },
  {
    code: "Caisses retraite",
    description:
      "CARSAT, AGIRC-ARRCO financent souvent l'aide ménagère pour les retraités GIR 5-6 en prévention.",
  },
  {
    code: "CESU préfinancés",
    description:
      "Beaucoup d'employeurs proposent des CESU préfinancés à leurs salariés ou retraités. Acceptés directement par Youdom Care.",
  },
];

const faq = [
  {
    question: "Quelle est la fréquence minimale ?",
    answer:
      "Nous démarrons à partir de 2 h hebdo (un seul passage) ou 1 h bihebdomadaire. Pour les contrats récurrents, c'est l'idéal pour maintenir un domicile en bon état sans vous engager au-delà de votre besoin.",
  },
  {
    question: "Apportez-vous les produits d'entretien ?",
    answer:
      "Par défaut, nous utilisons vos produits (vous connaissez vos préférences, allergies, surfaces). Sur demande, nous fournissons des produits écologiques labellisés Ecocert (forfait additionnel modeste).",
  },
  {
    question: "Faites-vous les vitres et les hauteurs ?",
    answer:
      "Vitres accessibles depuis l'intérieur : oui. Vitres à risque (extérieur étage, baies très hautes) : non, par sécurité. Pour les plafonds et grands rangements en hauteur, nous recommandons un service spécialisé ponctuel — nous pouvons vous orienter.",
  },
  {
    question: "Que se passe-t-il si l'auxiliaire est absente ?",
    answer:
      "Si maladie ou imprévu, nous proposons un remplaçant formé à votre dossier dans la journée (jusqu'à J+1). La continuité est notre engagement : pas de service raté sans solution.",
  },
  {
    question: "Vous gérez aussi les déménagements ou grands rangements ?",
    answer:
      "Pas en service récurrent. Mais nous pouvons organiser des prestations ponctuelles « grand ménage » (4-8 h) après hospitalisation, déménagement ou succession, en coordination avec votre auxiliaire habituelle.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Mensualité par prélèvement SEPA, avec facture détaillée. Si vous activez l'avance immédiate du crédit d'impôt, votre paiement réel = 50 % du tarif (l'URSSAF avance le reste). Nous gérons l'inscription URSSAF gratuitement.",
  },
];

export default function AideMenagerePage() {
  return (
    <>
      <ServiceHero
        category="Aide ménagère"
        title="Un chez-soi propre, c'est aussi un chez-soi qui rassure."
        subtitle="Aide ménagère régulière à domicile : ménage, linge, courses, petits travaux. La même auxiliaire, vos préférences respectées, le crédit d'impôt 50 % automatique."
        highlights={[
          "Démarrage à partir de 2 h/semaine",
          "La même auxiliaire à chaque visite",
          "Avance immédiate du crédit d'impôt 50 %",
          "Vigilance préventive sur la sécurité du logement",
        ]}
        image="/images/curated/service-aide-menagere.jpg"
        imageAlt="Aide ménagère en intervention à domicile"
      />

      <ServicePainPoints
        eyebrow="Pourquoi c'est essentiel"
        title="Le ménage n'est pas un luxe. C'est de la santé publique."
        description="Le logement d'une personne âgée ou fragilisée est un facteur direct de santé, de sécurité et d'estime de soi."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Tout ce qu'on prend en charge"
        title="8 missions pour un domicile vivant et sécurisé"
        description="Au-delà du sol propre : un environnement préservé, vivable, prêt à vous accueillir vous et vos proches."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode"
        title="Pas de standard : votre maison, votre cadre"
        description="Chaque domicile a ses zones sensibles, ses préférences, ses produits. Nous nous y plions, pas l'inverse."
        points={methodPoints}
        image="/images/curated/service-aide-menagere.jpg"
        imageAlt="Auxiliaire en intervention ménage"
      />

      <ServiceProvider
        title="Des auxiliaires de qualité, en CDI, formées"
        description="Nous n'envoyons pas n'importe qui chez vous. Sélection rigoureuse, formation aux gestes ménagers professionnels, casier judiciaire vérifié."
        specialization="Hygiène domiciliaire, manipulation produits, repérage des dangers domestiques"
        image="/images/curated/service-aide-menagere.jpg"
        imageAlt="Auxiliaire ménagère professionnelle"
      />

      <ServicePricing
        hourlyRange={{ min: 24, max: 30 }}
        aides={aides}
        exampleNet="Exemple : 4 h/semaine de ménage = ~480 €/mois brut. Avec crédit d'impôt 50 % en avance immédiate, vous payez réellement ~240 €/mois — soit 60 €/semaine pour un domicile entretenu."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur l'aide ménagère"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="aide-menagere"
        recommendedSlugs={[
          "aide-personnes-agees",
          "accompagnement-sorties",
          "assistance-administrative",
          "retour-hospitalisation",
        ]}
      />

      <FinalCTA />
    </>
  );
}
