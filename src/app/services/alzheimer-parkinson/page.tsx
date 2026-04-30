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
    "Aide à domicile Alzheimer, Parkinson, SLA — accompagnement spécialisé | Youdom Care",
  description:
    "Accompagnement spécialisé pour les maladies neurodégénératives à domicile : Alzheimer, Parkinson, sclérose en plaques, SLA, démences vasculaires. Auxiliaires formées, continuité, dignité. Devis gratuit.",
};

const painPoints = [
  {
    icon: "🌀",
    title: "Désorientation & confusion",
    description:
      "L'oubli du quotidien, des proches, des routines — une fragilité qui demande une présence patiente et expérimentée.",
  },
  {
    icon: "😰",
    title: "Anxiété & agitation",
    description:
      "Crises d'angoisse, déambulation nocturne, irritabilité : il faut savoir désamorcer sans confronter, rassurer sans infantiliser.",
  },
  {
    icon: "🍽️",
    title: "Refus alimentaire",
    description:
      "Perte d'appétit, oubli des repas, difficulté à mâcher : un suivi nutritionnel structuré devient vital pour éviter la dénutrition.",
  },
  {
    icon: "🚶",
    title: "Troubles moteurs spécifiques",
    description:
      "Tremblements, rigidité (Parkinson), spasticité (SEP), faiblesse progressive (SLA) : chaque maladie a ses gestes adaptés.",
  },
  {
    icon: "💔",
    title: "Aidants au bord de la rupture",
    description:
      "Vivre avec un proche désorienté 24/24 est l'un des stress les plus intenses connus en santé publique. Le répit n'est pas optionnel.",
  },
  {
    icon: "🏥",
    title: "Risque institutionnel",
    description:
      "Sans accompagnement adapté, l'EHPAD devient inéluctable. Un soutien spécialisé permet souvent de gagner 2 à 3 ans à domicile.",
  },
];

const includedServices = [
  {
    icon: "🧠",
    title: "Stimulation cognitive adaptée",
    description:
      "Activités personnalisées (méthode Montessori adaptée, réminiscence, jeux), pour préserver les capacités le plus longtemps possible.",
  },
  {
    icon: "🛁",
    title: "Toilette adaptée à la pathologie",
    description:
      "Approche respectueuse face aux refus, gestes lents et expliqués, prévention des chutes en salle de bain.",
  },
  {
    icon: "🍽️",
    title: "Repas avec textures modifiées",
    description:
      "Adaptation aux troubles de la déglutition (Parkinson, SLA), repas équilibrés, hydratation surveillée, partage à table possible.",
  },
  {
    icon: "💊",
    title: "Suivi rigoureux des traitements",
    description:
      "Pilulier, horaires précis (cruciaux pour Parkinson), alerte immédiate au médecin en cas d'effets secondaires.",
  },
  {
    icon: "🚶‍♀️",
    title: "Mobilité & prévention chutes",
    description:
      "Manutention spécifique Parkinson (« freezing »), aides aux transferts SLA, sécurisation du domicile.",
  },
  {
    icon: "👥",
    title: "Maintien du lien social",
    description:
      "Sorties adaptées, conversation, contact avec les proches, coordination avec accueil de jour Alzheimer.",
  },
  {
    icon: "🌙",
    title: "Présence de nuit spécialisée",
    description:
      "Pour les déambulations nocturnes (Alzheimer), l'apnée du sommeil, l'angoisse vespérale.",
  },
  {
    icon: "🤝",
    title: "Soutien aux aidants familiaux",
    description:
      "Conseils, écoute, orientation vers les plateformes de répit, aide à la décision EHPAD si nécessaire.",
  },
];

const methodPoints = [
  {
    title: "Évaluation neuro-comportementale",
    description:
      "Au-delà du GIR : analyse des troubles spécifiques (mémoire, langage, comportement, déglutition) pour ajuster finement l'intervention.",
  },
  {
    title: "Auxiliaire formée à la maladie",
    description:
      "Nous sélectionnons une auxiliaire ayant déjà accompagné des bénéficiaires avec la même pathologie. Continuité indispensable pour Alzheimer (l'inconnu génère angoisse).",
  },
  {
    title: "Routines stabilisées",
    description:
      "Les rituels rassurent : mêmes horaires, mêmes mots-clés, mêmes parcours dans le logement. Notre auxiliaire respecte et entretient ces ancrages.",
  },
  {
    title: "Coordination médicale spécialisée",
    description:
      "Lien avec le neurologue, le gériatre, l'orthophoniste, le kiné. Compte-rendus mensuels, alerte rapide si évolution.",
  },
  {
    title: "Cellule répit aidants",
    description:
      "Notre coordinatrice aide la famille à monter les dossiers répit (plateforme départementale, accueil de jour, hébergement temporaire).",
  },
];

const aides = [
  {
    code: "APA majorée",
    description:
      "L'APA peut être majorée pour les pathologies lourdes (GIR 1-2). Notre coordinatrice aide à faire reconnaître l'évolution de la maladie.",
  },
  {
    code: "ALD 100 %",
    description:
      "Alzheimer, Parkinson, SLA, SEP sont des affections de longue durée prises en charge à 100 % par l'Assurance Maladie pour les soins.",
  },
  {
    code: "Plateforme répit",
    description:
      "Chaque département a une plateforme de répit pour les aidants Alzheimer. Accueil de jour, hébergement temporaire — souvent gratuit.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique sur l'aide à domicile. Maintenu même quand le proche est hospitalisé temporairement.",
  },
];

const faq = [
  {
    question: "Mon père a la maladie d'Alzheimer et refuse l'aide. Que faire ?",
    answer:
      "C'est une situation très fréquente, rarement résolue par la confrontation. Notre approche : 1) commencer par 2-3 h hebdo en présentant l'auxiliaire comme « quelqu'un qui aide pour le ménage » ou « une visiteuse » ; 2) garder strictement la même personne (l'inconnu génère de l'anxiété chez les patients Alzheimer) ; 3) laisser le temps faire : en 2 à 6 semaines, le lien s'installe, l'auxiliaire devient une figure familière et rassurante.",
  },
  {
    question: "Comment gérez-vous les crises d'angoisse ou d'agressivité ?",
    answer:
      "Nos auxiliaires sont formées à la désescalade : voix calme, contact visuel, distraction par un objet familier, sortie de la pièce si besoin. Nous n'utilisons jamais la contention. Si une crise se répète, nous alertons le neurologue et la famille pour ajuster le traitement ou l'environnement.",
  },
  {
    question: "Vous accompagnez la maladie de Parkinson aux stades avancés ?",
    answer:
      "Oui, à tous les stades. Nous savons gérer les blocages moteurs (« freezing »), les dyskinésies, l'hypotension orthostatique, les troubles de la déglutition. Nos auxiliaires connaissent l'importance horaire stricte des prises de Lévodopa.",
  },
  {
    question: "Et la sclérose latérale amyotrophique (SLA / maladie de Charcot) ?",
    answer:
      "La SLA exige un accompagnement très spécialisé (mobilité décroissante rapide, aide à la communication par regard, gastrostomie, ventilation). Nous travaillons en partenariat avec les centres de référence SLA et formons spécifiquement les auxiliaires affectées à ces missions.",
  },
  {
    question: "Combien d'heures recommandez-vous au stade modéré d'Alzheimer ?",
    answer:
      "Au stade modéré (GIR 3-4), comptez 14 à 25 h/semaine en moyenne. Au stade sévère (GIR 1-2), souvent 40 h/semaine ou plus, parfois avec présence de nuit. Notre évaluation à domicile fixe le bon dosage — toujours révisable.",
  },
  {
    question: "Comment soulager efficacement les aidants familiaux ?",
    answer:
      "Trois leviers : 1) la régularité (3 demi-journées hebdo récurrentes plutôt que 9 h en bloc) ; 2) la présence de nuit ponctuelle (1 fois/semaine pour permettre une vraie nuit de sommeil à l'aidant) ; 3) un séjour en hébergement temporaire 2 fois/an. Notre coordinatrice monte tout cela avec vous.",
  },
];

export default function AlzheimerParkinsonPage() {
  return (
    <>
      <ServiceHero
        category="Maladies neurodégénératives"
        title="Quand la mémoire s'efface, la présence reste."
        subtitle="Accompagnement à domicile spécialisé Alzheimer, Parkinson, sclérose en plaques, SLA. Des auxiliaires formées, des routines stabilisées, des aidants soulagés."
        highlights={[
          "Auxiliaires formées à chaque pathologie",
          "Continuité d'intervenant absolue (vital pour Alzheimer)",
          "Coordination avec neurologue, gériatre, orthophoniste",
          "Soutien et répit pour les aidants familiaux",
        ]}
        image="/images/curated/service-alzheimer-parkinson.jpg"
        imageAlt="Auxiliaire accompagnant une personne atteinte d'Alzheimer"
      />

      <ServicePainPoints
        eyebrow="Les défis spécifiques"
        title="Vivre avec une maladie neurodégénérative à domicile"
        description="Chaque pathologie a sa réalité. Nos accompagnements sont conçus pour chacune."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Notre prise en charge"
        title="8 missions adaptées aux maladies neurodégénératives"
        description="Toilette, alimentation, mobilité, stimulation cognitive : tout est ajusté à la pathologie et à son stade."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Une approche neuro-spécifique"
        title="Notre méthodologie pour Alzheimer, Parkinson, SLA, SEP"
        description="Construite avec des neurologues, des orthophonistes et des aidants experts."
        points={methodPoints}
        image="/images/curated/service-aide-personnes-agees.jpg"
        imageAlt="Auxiliaire et bénéficiaire en stimulation cognitive"
      />

      <ServiceProvider
        title="Des auxiliaires spécifiquement formées au neurodégénératif"
        description="Formation Humanitude, méthode Montessori adaptée, manutention Parkinson, communication Alzheimer : nos équipes sont à la hauteur de la complexité."
        specialization="Humanitude, Montessori, désescalade comportementale, déglutition, manutention spécialisée"
        image="/images/curated/public-aidants-knitting-granddaughter.jpg"
        imageAlt="Auxiliaire spécialisée maladies neurodégénératives"
      />

      <ServicePricing
        hourlyRange={{ min: 28, max: 35 }}
        aides={aides}
        exampleNet="Exemple : 25 h/semaine au stade modéré d'Alzheimer (GIR 3) coûtent ~3 050 €/mois brut. Avec APA + crédit d'impôt 50 %, le reste à charge tombe entre 600 et 1 100 € selon les ressources."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur l'accompagnement neurodégénératif"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="alzheimer-parkinson"
        recommendedSlugs={[
          "garde-nuit",
          "aide-personnes-agees",
          "accompagnement-sorties",
          "retour-hospitalisation",
        ]}
      />

      <FinalCTA />
    </>
  );
}
