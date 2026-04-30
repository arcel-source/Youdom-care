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
    "Accompagnement aux sorties, courses, RDV médicaux | Youdom Care",
  description:
    "Accompagnement personnalisé pour les courses, rendez-vous médicaux, sorties culturelles et loisirs. Le lien social qui maintient en vie. Crédit d'impôt 50 %. Devis gratuit.",
};

const painPoints = [
  {
    icon: "🏠",
    title: "L'isolement progressif",
    description:
      "Quand on ne sort plus, l'univers se rétrécit. L'isolement est un facteur de mortalité aussi grave que le tabagisme.",
  },
  {
    icon: "🚶",
    title: "Peur de la chute en extérieur",
    description:
      "Trottoirs irréguliers, escalators, stations de métro : sans bras pour se rassurer, beaucoup de seniors renoncent à sortir.",
  },
  {
    icon: "🚇",
    title: "Transports devenus hostiles",
    description:
      "Lignes complexes, foules, escaliers : prendre les transports demande une énergie qu'on n'a plus toujours après 80 ans.",
  },
  {
    icon: "👨‍⚕️",
    title: "RDV médicaux ratés",
    description:
      "Sans accompagnement, les RDV se reportent, s'oublient. L'observance médicale chute. Les conséquences arrivent.",
  },
  {
    icon: "🎭",
    title: "Plaisirs abandonnés",
    description:
      "Cinéma, musée, concert, marché : ces sorties qui faisaient sens disparaissent une à une. La vie se rétracte.",
  },
  {
    icon: "💔",
    title: "Solitude affective",
    description:
      "Manger seul, marcher seul, rentrer dans un appartement vide : la solitude détruit aussi sûrement que la maladie.",
  },
];

const includedServices = [
  {
    icon: "🛒",
    title: "Courses & marché",
    description:
      "Choisir son pain, sentir les fruits, garder le plaisir du marché. Avec aide pour porter, payer, rentrer en sécurité.",
  },
  {
    icon: "👨‍⚕️",
    title: "RDV médicaux & paramédicaux",
    description:
      "Médecin traitant, spécialiste, kiné, dentiste, opticien. Préparation, accompagnement, prise de notes des consignes.",
  },
  {
    icon: "💊",
    title: "Pharmacie & laboratoires",
    description:
      "Renouvellement d'ordonnance, prélèvements sanguins, retraits de médicaments. Une routine sécurisée.",
  },
  {
    icon: "🎭",
    title: "Loisirs & culture",
    description:
      "Cinéma, théâtre, musée, exposition, concert classique. Pour garder les goûts qui ont fait votre vie.",
  },
  {
    icon: "🌳",
    title: "Promenades & parcs",
    description:
      "Sortir au parc, marcher au bord de l'eau, prendre l'air. Le mouvement = la santé, le moral, le lien social.",
  },
  {
    icon: "✉️",
    title: "Démarches en personne",
    description:
      "Banque, mairie, Poste, notaire. Tout ce qui demande une présence physique reste accessible.",
  },
  {
    icon: "👥",
    title: "Visites familiales & sociales",
    description:
      "Aller voir un proche, déjeuner chez les enfants, assister à un mariage. Le lien social préservé.",
  },
  {
    icon: "🧠",
    title: "Compagnie & conversation",
    description:
      "Parfois la sortie est une excuse. La présence, l'écoute, la discussion, c'est la vraie prestation.",
  },
];

const methodPoints = [
  {
    title: "Comprendre vos goûts",
    description:
      "Avant la première sortie, notre coordinatrice écoute : qu'aimiez-vous faire ? que voudriez-vous reprendre ? Pas de routine standard.",
  },
  {
    title: "Pairer avec une auxiliaire compatible",
    description:
      "Une amatrice de musées si vous aimez l'art, une marcheuse si vous aimez le grand air. La compatibilité humaine est centrale.",
  },
  {
    title: "Sécuriser les déplacements",
    description:
      "Reconnaissance des trajets, repérage des bancs, anticipation des aléas (escaliers, foule, météo). Aucune sortie improvisée si à risque.",
  },
  {
    title: "Tenir une présence régulière",
    description:
      "1 à 3 sorties par semaine, à jour fixe, créent des « rendez-vous » dans la semaine. C'est ce qui structure et fait du bien.",
  },
  {
    title: "Suivre l'impact",
    description:
      "Notre coordinatrice fait un point régulier : moral, énergie, sociabilité. Si une routine ne convient plus, on change.",
  },
];

const aides = [
  {
    code: "APA",
    description:
      "L'APA finance largement l'accompagnement extérieur, considéré comme essentiel à l'autonomie.",
  },
  {
    code: "PCH",
    description:
      "La PCH aide humaine couvre les sorties pour les personnes en situation de handicap (RDV, vie sociale).",
  },
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Automatique. Le tarif horaire net après crédit d'impôt rend les sorties accessibles à tous les budgets.",
  },
  {
    code: "Caisses retraite",
    description:
      "Plusieurs caisses (CARSAT, AGIRC-ARRCO) financent des actions de prévention de l'isolement.",
  },
];

const faq = [
  {
    question: "Pouvez-vous accompagner en transports en commun ?",
    answer:
      "Oui, c'est même fréquent (métro, bus, train). Notre auxiliaire connaît le réseau, sait gérer les escalators, les changements, les ascenseurs. Pour des trajets plus complexes ou les RDV éloignés, nous pouvons combiner avec notre service Transport PMR (véhicule adapté).",
  },
  {
    question: "Vous payez pour moi à la pharmacie / au marché ?",
    answer:
      "Selon votre choix : avec votre carte (vous gardez le contrôle), en CESU (notre auxiliaire ne touche jamais d'argent liquide), ou avec une caisse spéciale fournie par vous (gestion détaillée par cahier de comptes). Transparence totale.",
  },
  {
    question: "Mon papa refuse de sortir. Pouvez-vous l'aider ?",
    answer:
      "C'est très fréquent et délicat. Notre approche : on ne force jamais. La 1ʳᵉ sortie peut être très courte (5 minutes au pied de l'immeuble), accompagnée d'un café. Le lien se construit, l'envie revient. Plusieurs de nos bénéficiaires ont retrouvé le plaisir de sortir après 6-12 mois d'accompagnement patient.",
  },
  {
    question: "Et si la météo est mauvaise le jour de la sortie ?",
    answer:
      "Nous adaptons : sortie reportée si vraiment dangereux, ou redirigée (musée plutôt que parc). L'auxiliaire reste sur le créneau prévu, transformé en visite à domicile, lecture, jeu, conversation. Pas de séance perdue.",
  },
  {
    question: "Combien de temps dure typiquement une sortie ?",
    answer:
      "Pour une sortie courses : 1 h 30 à 2 h. Pour un RDV médical : 2 à 3 h (préparation, transport, attente, retour). Pour une sortie loisirs : 3 à 4 h. Notre coordinatrice cale les durées à l'avance, ajustables selon vos retours.",
  },
  {
    question: "Pouvez-vous nous accompagner en vacances / week-end ?",
    answer:
      "Oui, dans certains cas (séjour familial, week-end thalasso, mariage). Sur devis spécifique, avec décompte heures effectives + nuitées. Permet à la famille de partir avec un proche dépendant en toute sérénité.",
  },
];

export default function AccompagnementSortiesPage() {
  return (
    <>
      <ServiceHero
        category="Accompagnement & sorties"
        title="Sortir, c'est rester vivant."
        subtitle="Courses, RDV médicaux, balades, cinéma, marché : un accompagnement personnalisé pour préserver l'autonomie, le plaisir et le lien social."
        highlights={[
          "Auxiliaire compatible avec vos goûts",
          "Sorties à jour fixe pour structurer la semaine",
          "Combinable avec Transport PMR si besoin",
          "Accompagnement médical complet (prise de notes incluse)",
        ]}
        image="/images/services/service-accompagnements.png"
        imageAlt="Auxiliaire accompagnant une personne âgée en sortie"
      />

      <ServicePainPoints
        eyebrow="Pourquoi sortir reste vital"
        title="L'isolement social tue plus silencieusement que les maladies"
        description="L'OMS le considère comme un déterminant majeur de la santé. Sortir n'est pas un loisir : c'est une mesure de prévention médicale."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Tout ce qu'on accompagne"
        title="8 types de sorties pour rester relié au monde"
        description="Du quotidien indispensable aux plaisirs choisis : nous y allons avec vous."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode"
        title="Une présence qui crée des rendez-vous, pas des prestations"
        description="Une sortie réussie, c'est une routine qui structure la semaine et redonne envie."
        points={methodPoints}
        image="/images/about/autonomie.jpg"
        imageAlt="Personne autonome lors d'une sortie"
      />

      <ServiceProvider
        title="Des auxiliaires patientes, mobiles, à l'écoute"
        description="Pas de chronomètre. Notre rôle est d'accompagner avec présence et plaisir, pas de cocher des cases."
        specialization="Premiers secours, écoute active, repérage Paris/IDF, gestes sécurisés en extérieur"
        image="/images/about/autonomie.jpg"
        imageAlt="Auxiliaire en accompagnement extérieur"
      />

      <ServicePricing
        hourlyRange={{ min: 25, max: 30 }}
        aides={aides}
        exampleNet="Exemple : 2 sorties hebdo de 3 h (courses + RDV) = ~660 €/mois brut. Avec APA + crédit d'impôt, le reste à charge tombe souvent entre 90 et 220 €/mois."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur les sorties accompagnées"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="accompagnement-sorties"
        recommendedSlugs={[
          "transport-pmr",
          "aide-personnes-agees",
          "aide-menagere",
          "assistance-administrative",
        ]}
      />

      <FinalCTA />
    </>
  );
}
