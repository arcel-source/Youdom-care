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
    "Garde d'enfants en situation de handicap à domicile | Youdom Care",
  description:
    "Garde qualifiée à domicile pour les enfants en situation de handicap : TSA, polyhandicap, troubles dys, déficience intellectuelle. AEEH éligible. Répit pour les parents.",
};

const painPoints = [
  {
    icon: "🫂",
    title: "Parents épuisés",
    description:
      "Élever un enfant en situation de handicap est l'une des charges les plus intenses qui soit. Le répit n'est pas un confort, c'est une nécessité vitale.",
  },
  {
    icon: "🚫",
    title: "Refus de garde classique",
    description:
      "Crèches, baby-sitters, centres de loisirs sont rarement formés. Beaucoup refusent ou ne tiennent pas la durée.",
  },
  {
    icon: "💔",
    title: "Frères et sœurs en retrait",
    description:
      "Les fratries des enfants handicapés sont souvent négligées involontairement. Une garde permet de leur redonner du temps de qualité.",
  },
  {
    icon: "💼",
    title: "Carrière compromise",
    description:
      "Sans garde adaptée, beaucoup de parents (surtout les mères) abandonnent leur emploi. Conséquences financières et identitaires lourdes.",
  },
  {
    icon: "🌱",
    title: "Stagnation des apprentissages",
    description:
      "Sans stimulation adaptée hors temps scolaire (IME, SESSAD), les progrès stagnent ou régressent.",
  },
  {
    icon: "🏥",
    title: "Sortie d'IME / SESSAD",
    description:
      "L'attente d'une place en structure peut durer des mois. Une garde qualifiée à domicile assure la transition.",
  },
];

const includedServices = [
  {
    icon: "🏠",
    title: "Garde à domicile sécurisée",
    description:
      "Présence qualifiée auprès de l'enfant, encadrement des routines, sécurité affective et physique.",
  },
  {
    icon: "🛁",
    title: "Soins quotidiens adaptés",
    description:
      "Toilette, change, repas (textures modifiées si dysphagie), administration de médicaments selon prescription.",
  },
  {
    icon: "🎨",
    title: "Activités éducatives & ludiques",
    description:
      "Jeux adaptés, activités sensorielles, soutien des apprentissages, supports visuels (pictogrammes, PECS).",
  },
  {
    icon: "🧠",
    title: "Stimulation & autonomie",
    description:
      "Travail sur les acquis IME/SESSAD, propreté, motricité fine, autonomie aux gestes du quotidien.",
  },
  {
    icon: "🚗",
    title: "Accompagnement RDV médicaux",
    description:
      "Pédopsychiatre, orthophoniste, psychomotricien, kinésithérapeute. Lien avec les rééducateurs.",
  },
  {
    icon: "🏫",
    title: "Sortie d'école & transitions",
    description:
      "Récupération à la sortie d'école/IME, gestion du temps périscolaire, devoirs adaptés, repos.",
  },
  {
    icon: "👶",
    title: "Garde sœurs & frères",
    description:
      "Possibilité de prendre en charge également les frères et sœurs (sur même prestation), pour libérer les parents.",
  },
  {
    icon: "🌙",
    title: "Garde de nuit possible",
    description:
      "Pour les enfants nécessitant surveillance nocturne (épilepsie, soins, troubles du sommeil), nous adaptons un dispositif spécifique.",
  },
];

const methodPoints = [
  {
    title: "Rencontre avec l'enfant ET les parents",
    description:
      "La 1ʳᵉ visite est essentielle : observation, échange avec les parents sur les routines, ce qui apaise, ce qui agite. Aucune mission ne démarre sans cette rencontre.",
  },
  {
    title: "Auxiliaire spécialisée handicap enfant",
    description:
      "Profil dédié : expérience IME, SESSAD, ou auprès d'enfants avec le même type de handicap. Formation aux outils CAA si besoin.",
  },
  {
    title: "Cahier de liaison co-construit",
    description:
      "Un cahier détaillé tenu chaque jour : repas, selles, humeur, événements, progrès. Lu par les parents, l'IME, le pédopsy.",
  },
  {
    title: "Coordination avec l'écosystème",
    description:
      "Lien avec l'IME, le SESSAD, le CAMSP, l'orthophoniste, l'AESH. La cohérence des prises en charge est cruciale pour les progrès.",
  },
  {
    title: "Soutien aux fratries & parents",
    description:
      "Notre auxiliaire prend aussi en charge les frères/sœurs si besoin, pour permettre aux parents de souffler ou de leur consacrer du temps.",
  },
];

const aides = [
  {
    code: "AEEH",
    description:
      "Allocation d'Éducation de l'Enfant Handicapé, complément 1 à 6 selon le handicap. La garde à domicile entre dans les dépenses justifiables.",
  },
  {
    code: "PCH enfant",
    description:
      "Depuis 2023, les enfants peuvent bénéficier de la PCH dès le diagnostic. Cumul possible avec AEEH base.",
  },
  {
    code: "CMG handicap (CAF)",
    description:
      "Le Complément de Mode de Garde majoré pour enfant handicapé peut financer une partie de la prestation.",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique. Cumulable avec AEEH/PCH/CMG. Une famille peut financer 70 à 100 % du coût avec ces aides combinées.",
  },
];

const faq = [
  {
    question: "Pour quels types de handicap êtes-vous formés ?",
    answer:
      "Nos auxiliaires sont formées à la diversité des handicaps de l'enfant : TSA (autisme), TDAH, troubles dys (dyspraxie, dyslexie), polyhandicap, déficience intellectuelle, infirmité motrice cérébrale, syndromes génétiques rares (Down, Williams, Prader-Willi, etc.). Pour chaque dossier, nous formons spécifiquement l'auxiliaire affectée.",
  },
  {
    question: "Mon enfant a un PAI (Projet d'Accueil Individualisé). Vous l'appliquez ?",
    answer:
      "Oui, c'est même indispensable. Avant toute mission, l'auxiliaire reçoit une formation au PAI : médicaments, allergies, gestes d'urgence, signaux d'alerte. Notre coordinatrice valide qu'elle a tout intégré avant le démarrage.",
  },
  {
    question: "Puis-je avoir une garde le matin avant l'école et le soir après ?",
    answer:
      "Oui. C'est même un cas très fréquent : 1 h le matin (préparation, école) + 2-3 h le soir (école → maison, devoirs, bain, repas). Notre auxiliaire fait la liaison parents <> école, une vraie continuité.",
  },
  {
    question: "Pouvez-vous travailler avec l'AESH (auxiliaire scolaire) ?",
    answer:
      "Bien sûr. L'AESH accompagne à l'école, nous prenons le relais hors école. Cohérence indispensable : nous échangeons régulièrement (cahier de liaison, appels) avec l'AESH pour maintenir les acquis.",
  },
  {
    question: "Mon enfant fait des crises difficiles. Vous gérez ?",
    answer:
      "Oui, nos auxiliaires sont formées à la désescalade comportementale (méthodes ABA si pertinent, sensorielles, adaptées au TSA). Aucune contention. Si une crise dépasse les compétences de l'auxiliaire, nous appelons les parents et le pédopsy. Tout est consigné pour le suivi médical.",
  },
  {
    question: "Combien d'heures recommandez-vous ?",
    answer:
      "Selon les besoins : du simple répit parental (4 h hebdo) à la garde lourde (40 h hebdo en cas d'attente IME). Notre coordinatrice évalue le besoin réel — toujours révisable selon l'évolution de l'enfant et de votre situation pro.",
  },
];

export default function GardeEnfantsHandicapPage() {
  return (
    <>
      <ServiceHero
        category="Garde d'enfants en situation de handicap"
        title="Une garde qualifiée. Pour eux. Pour vous."
        subtitle="Garde à domicile pour les enfants en situation de handicap (TSA, polyhandicap, troubles dys, déficience intellectuelle). Une auxiliaire formée, une famille soulagée."
        highlights={[
          "Auxiliaires formées à chaque type de handicap",
          "Application du PAI (Projet d'Accueil Individualisé)",
          "Coordination avec IME, SESSAD, AESH, pédopsy",
          "Cumul AEEH + PCH + crédit d'impôt 50 %",
        ]}
        image="/images/curated/service-garde-enfants-handicap.jpg"
        imageAlt="Auxiliaire accompagnant un enfant en situation de handicap"
      />

      <ServicePainPoints
        eyebrow="Le contexte des familles"
        title="Élever un enfant handicapé : des défis sous-estimés"
        description="Aucune institution ne couvre l'intégralité des besoins. La garde à domicile qualifiée est souvent la seule réponse."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Notre prise en charge"
        title="8 missions adaptées à votre enfant"
        description="De la garde simple aux soins complexes : nous nous adaptons à chaque profil."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode"
        title="Une garde co-construite avec vous"
        description="L'enfant n'est pas un dossier. C'est un univers que nous apprenons à connaître."
        points={methodPoints}
        image="/images/curated/service-garde-enfants-handicap.jpg"
        imageAlt="Garde qualifiée enfant handicap"
      />

      <ServiceProvider
        title="Des auxiliaires expérimentées en handicap pédiatrique"
        description="Toutes ont travaillé en IME, SESSAD, hôpital pédiatrique ou crèche inclusive avant de nous rejoindre. La passion de l'enfance et la formation au handicap."
        specialization="TSA, polyhandicap, dys, méthodes ABA/PECS, premiers secours pédiatriques"
        image="/images/curated/service-garde-enfants-handicap.jpg"
        imageAlt="Auxiliaire spécialisée enfant handicap"
      />

      <ServicePricing
        hourlyRange={{ min: 24, max: 32 }}
        aides={aides}
        exampleNet="Exemple : 20 h/semaine de garde pour un enfant TSA = ~2 280 €/mois brut. Avec AEEH complément 4 + PCH + crédit d'impôt 50 %, beaucoup de familles ont un reste à charge proche de zéro."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur la garde d'enfant en situation de handicap"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="garde-enfants-handicap"
        recommendedSlugs={[
          "aide-handicap",
          "transport-pmr",
          "assistance-administrative",
          "garde-nuit",
        ]}
      />

      <FinalCTA />
    </>
  );
}
