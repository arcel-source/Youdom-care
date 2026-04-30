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
    "Aide à domicile pour personnes âgées — maintien à domicile en sécurité | Youdom Care",
  description:
    "Aide à domicile pour seniors à Paris & Île-de-France. Toilette, repas, mobilité, présence rassurante. Le même intervenant, APA + crédit d'impôt 50 %. Devis gratuit en 3 min.",
};

const painPoints = [
  {
    icon: "🚶",
    title: "Difficultés physiques",
    description:
      "Arthrose, équilibre fragile, fatigue. Les gestes simples — se lever, se laver, monter l'escalier — deviennent risqués.",
  },
  {
    icon: "⚠️",
    title: "Risques de chute",
    description:
      "1 senior sur 3 chute chaque année. Une fracture peut tout enclencher : alitement, déconditionnement, perte d'autonomie.",
  },
  {
    icon: "💔",
    title: "Isolement social",
    description:
      "Quand on ne sort plus, l'univers rétrécit. L'isolement augmente le risque de dépression et de déclin cognitif.",
  },
  {
    icon: "💊",
    title: "Gestion médicale complexe",
    description:
      "Polypharmacie, rendez-vous fréquents, protocoles à respecter. Seul, c'est facile d'oublier — avec des conséquences graves.",
  },
  {
    icon: "🫂",
    title: "Aidants épuisés",
    description:
      "Les enfants qui aident assument toilette, nuits, urgences en plus de leur vie pro. L'épuisement guette en silence.",
  },
  {
    icon: "🏥",
    title: "Peur de l'EHPAD",
    description:
      "Beaucoup refusent la maison de retraite. Aide à domicile = liberté, dignité, et souvent moins coûteux avec les aides.",
  },
];

const includedServices = [
  {
    icon: "🛁",
    title: "Toilette & hygiène personnelle",
    description:
      "Aide à la douche/au bain, rasage, soins des pieds, intimité. Avec dignité, douceur et discrétion.",
  },
  {
    icon: "👕",
    title: "Habillage & change",
    description:
      "Choix des vêtements, enfilage, boutons, chaussures. Sans infantiliser, en préservant le goût personnel.",
  },
  {
    icon: "🍽️",
    title: "Repas & nutrition",
    description:
      "Courses, préparation, service. Régimes spéciaux respectés (diabète, sans sel, allergies). Repas partagés possibles.",
  },
  {
    icon: "🚶‍♂️",
    title: "Mobilité & transferts",
    description:
      "Lit ↔ fauteuil ↔ douche, déplacements avec canne ou déambulateur, gestes sécurisés de manutention.",
  },
  {
    icon: "🛒",
    title: "Courses & sorties",
    description:
      "Accompagnement au marché, à la pharmacie, chez le médecin. Ou courses à votre place avec liste détaillée.",
  },
  {
    icon: "🧹",
    title: "Entretien du domicile",
    description:
      "Ménage régulier, lessive, repassage. Un intérieur propre, c'est moins de chutes, moins d'infections, plus de bien-être.",
  },
  {
    icon: "💊",
    title: "Aide aux médicaments",
    description:
      "Rappel des prises, préparation du pilulier (sur prescription), accompagnement aux RDV médicaux.",
  },
  {
    icon: "🧠",
    title: "Stimulation & lien social",
    description:
      "Lecture, jeux, conversation, mots-fléchés. Prévention du déclin cognitif par l'échange humain quotidien.",
  },
];

const methodPoints = [
  {
    title: "Évaluation gérontologique à domicile",
    description:
      "Notre coordinatrice se déplace gratuitement, observe l'environnement (escaliers, salle de bain, éclairage), discute avec la personne et la famille, identifie les vrais besoins.",
  },
  {
    title: "Plan d'aide individualisé",
    description:
      "Pas de package standard. Nous construisons votre plan en fonction du GIR, des routines, des préférences alimentaires, des activités préférées.",
  },
  {
    title: "Auxiliaire compatible & dédiée",
    description:
      "Nous présentons l'auxiliaire pressentie avant la 1ʳᵉ visite. Si le courant ne passe pas, nous changeons sans frais — votre confort prime.",
  },
  {
    title: "Coordination médicale & familiale",
    description:
      "Nous échangeons avec votre médecin, votre kiné, votre infirmier. Un compte-rendu mensuel est partagé avec la famille (avec accord du bénéficiaire).",
  },
  {
    title: "Suivi qualité tous les 3 mois",
    description:
      "Visite de contrôle de notre coordinatrice, ajustement du plan d'aide si l'autonomie évolue, enquête de satisfaction.",
  },
];

const aides = [
  {
    code: "APA",
    description:
      "Allocation Personnalisée d'Autonomie versée par le département. Couvre 50 à 80 % de l'aide à domicile selon le GIR. Nous montons le dossier pour vous.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique en service à la personne. Récupéré chaque année (ou en avance via l'avance immédiate).",
  },
  {
    code: "Caisses de retraite",
    description:
      "CARSAT, AGIRC-ARRCO, MSA financent l'aide à domicile pour prévenir la dépendance (GIR 5-6).",
  },
  {
    code: "Mutuelles",
    description:
      "Beaucoup de mutuelles santé prennent en charge l'aide ponctuelle après hospitalisation ou en sortie de chimio.",
  },
];

const faq = [
  {
    question: "Comment savoir si ma situation justifie une aide à domicile ?",
    answer:
      "Si l'un de ces signaux est présent : difficultés répétées à la toilette, refus de se laver, perte de poids, oublis fréquents, plusieurs petites chutes, repli sur soi, appartement qui se dégrade — alors oui, il est temps de demander un avis. Notre visite est gratuite, sans engagement. Nous vous disons honnêtement si une aide est utile et à quelle dose.",
  },
  {
    question: "Comment se passe la première rencontre avec l'auxiliaire ?",
    answer:
      "La coordinatrice vient avec l'auxiliaire pressentie pour la première intervention. Présentations, tour du logement, écoute des habitudes. Cette première heure est encadrée. Si la personne âgée se sent à l'aise, on continue. Sinon, on change d'auxiliaire — sans frais, sans question.",
  },
  {
    question: "Et si ma maman refuse l'aide à domicile ?",
    answer:
      "C'est une situation très fréquente. Trois leviers fonctionnent : 1) commencer petit (1 h de ménage hebdo, sans aide à la personne) pour créer un lien ; 2) présenter l'auxiliaire comme « quelqu'un qui aide aussi pour les démarches » plutôt que « quelqu'un qui te lave » ; 3) laisser parler la coordinatrice qui est formée à ces situations. La pression directe est rarement la bonne approche.",
  },
  {
    question: "Pouvez-vous intervenir en urgence après une hospitalisation ?",
    answer:
      "Oui. Nous démarrons en 48 à 72 h sur les sorties d'hôpital, dimanche compris. Nous échangeons avec le service hospitalier, l'infirmière à domicile et le médecin traitant pour assurer la continuité des soins. Voir notre service dédié [retour d'hospitalisation].",
  },
  {
    question: "Aurai-je toujours la même auxiliaire ?",
    answer:
      "Oui, c'est notre engagement n°1. Vous gardez la même auxiliaire principale + un binôme de remplacement formé à votre dossier (pour les congés, arrêts maladie). Cette continuité est essentielle pour la confiance, surtout avec les personnes désorientées (Alzheimer, etc.).",
  },
  {
    question: "Quelle différence entre Youdom Care et un service mandataire ?",
    answer:
      "En mandataire, vous êtes l'employeur de l'auxiliaire (avec toute la complexité : contrat, paie, congés, conflit). Chez Youdom Care, nous sommes le prestataire. C'est nous qui employons, formons, supervisons, remplaçons en cas d'absence. Vous n'avez aucune charge administrative — juste à profiter du service.",
  },
  {
    question: "Combien d'heures par semaine recommandez-vous ?",
    answer:
      "Cela dépend du GIR : pour une perte d'autonomie modérée (GIR 4), comptez 7 à 14 h/semaine ; pour une perte importante (GIR 2-3), souvent 20 à 35 h/semaine ; en GIR 1 (dépendance totale), une présence quotidienne longue est nécessaire. Notre évaluation à domicile établit un plan précis, modulable.",
  },
  {
    question: "Que se passe-t-il en cas de problème pendant une intervention ?",
    answer:
      "Nous avons un coordinateur d'astreinte joignable 7j/7. Pour les urgences médicales, l'auxiliaire est formée aux premiers gestes et appelle immédiatement le 15 + la famille. Tout incident est consigné et fait l'objet d'un retour à votre coordinateur sous 24 h.",
  },
];

export default function AidePersonnesAgeesPage() {
  return (
    <>
      <ServiceHero
        category="Aide aux personnes âgées"
        title="Vivre chez soi en sécurité, sereinement, dignement."
        subtitle="L'aide à domicile pour seniors qui prend soin du quotidien — toilette, repas, mobilité, présence rassurante — sans rupture de repères, sans bouleversement, sans EHPAD."
        highlights={[
          "La même auxiliaire de vie, formée et fidèle",
          "APA + crédit d'impôt 50 % automatique",
          "Démarrage possible en 48 h (sortie d'hôpital, urgence)",
          "Coordinatrice dédiée, joignable 7j/7",
        ]}
        image="/images/services/aide-autonomie.png"
        imageAlt="Auxiliaire de vie accompagnant une personne âgée à domicile"
      />

      <ServicePainPoints
        eyebrow="Le contexte"
        title="Pourquoi l'aide à domicile est devenue essentielle pour les seniors"
        description="Les défis du grand âge sont multiples — physiques, psychologiques, médicaux, familiaux. Une bonne aide à domicile les anticipe."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Ce que nous faisons concrètement"
        title="8 missions clés au cœur de votre quotidien"
        description="Notre auxiliaire ne fait pas que « passer ». Elle s'adapte à votre rythme, vos préférences, vos rituels."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre approche"
        title="Un accompagnement gérontologique pensé pour durer"
        description="Nous ne plaçons pas une auxiliaire « au hasard » : nous construisons une relation."
        points={methodPoints}
        image="/images/about/aide-personnes-agees.jpg"
        imageAlt="Auxiliaire et bénéficiaire en moment de complicité"
      />

      <ServiceProvider
        title="Des auxiliaires formées spécifiquement aux seniors"
        description="Nos auxiliaires sont en CDI, formées à la gérontologie, à la gestion des chutes, à la communication avec les personnes désorientées."
        specialization="Gérontologie, Alzheimer, manutention, premiers secours"
        image="/images/about/aide-personnes-agees.jpg"
        imageAlt="Auxiliaire de vie spécialisée seniors"
      />

      <ServicePricing
        hourlyRange={{ min: 26, max: 32 }}
        aides={aides}
        exampleNet="Exemple : pour 12 h/semaine, le coût mensuel net (après APA + crédit d'impôt) tombe souvent entre 380 et 720 € selon votre GIR et vos ressources."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur l'aide à domicile pour personnes âgées"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="aide-personnes-agees"
        recommendedSlugs={[
          "garde-nuit",
          "retour-hospitalisation",
          "alzheimer-parkinson",
          "aide-menagere",
        ]}
      />

      <FinalCTA />
    </>
  );
}
