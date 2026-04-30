/**
 * Liste enrichie de témoignages pour la page /temoignages.
 * Contient le sous-ensemble featured (utilisé sur la home) + témoignages additionnels.
 */

export type ExtendedTestimonial = {
  name: string;
  relation: string;
  city: string;
  service: string;
  serviceSlug: string;
  duration: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  longQuote?: string; // version étendue pour la page /temoignages
  featured?: boolean; // affiché aussi sur la home
};

export const extendedTestimonials: ExtendedTestimonial[] = [
  {
    name: "Marie T.",
    relation: "Fille de Mme T., 84 ans",
    city: "Paris 12ᵉ",
    service: "Aide aux personnes âgées",
    serviceSlug: "aide-personnes-agees",
    duration: "3 ans avec nous",
    rating: 5,
    quote:
      "Enfin respirer. Maman a Aïcha tous les matins depuis 3 ans, et nous savons qu'elle est en sécurité.",
    longQuote:
      "Quand maman a commencé à oublier ses médicaments, on a paniqué. Youdom Care est venu en 48 h, on a tout cadré : toilette, repas, RDV médecin. Aïcha est là tous les matins depuis 3 ans, c'est comme une 2ᵉ fille pour maman. Et pour moi : je travaille l'esprit tranquille.",
    featured: true,
  },
  {
    name: "Jean-Pierre D.",
    relation: "Bénéficiaire, 78 ans",
    city: "Boulogne-Billancourt",
    service: "Aide ménagère + sorties",
    serviceSlug: "aide-menagere",
    duration: "2 ans avec nous",
    rating: 5,
    quote:
      "Même intervenant depuis 2 ans. On s'est construit une vraie confiance. Ça change tout, à mon âge.",
    longQuote:
      "À 78 ans, j'avais peur des inconnus chez moi. Avec Christine c'est différent : elle connaît mes habitudes, mes petites manies, elle ne me bouscule pas. On parle, elle m'aide pour le marché, elle range mes placards. La continuité, c'est précieux à mon âge.",
    featured: true,
  },
  {
    name: "Sophie L.",
    relation: "Fille d'un papa hospitalisé",
    city: "Vincennes",
    service: "Retour d'hospitalisation",
    serviceSlug: "retour-hospitalisation",
    duration: "Mission ponctuelle",
    rating: 5,
    quote:
      "Processus simple, pas de bureaucratie pesante. Réponse en moins de 2 h après l'AVC de papa.",
    longQuote:
      "Papa est sorti d'AVC un vendredi soir. J'étais perdue. J'ai appelé samedi matin, on m'a rappelée 1h après, l'auxiliaire est arrivée le dimanche. La coordinatrice avait monté le dossier mutuelle pendant le week-end. 30 jours de présence, tout pris en charge. Inestimable.",
    featured: true,
  },
  {
    name: "Robert M.",
    relation: "Père de Lucas, 9 ans",
    city: "Le Kremlin-Bicêtre",
    service: "Garde d'enfant handicapé",
    serviceSlug: "garde-enfants-handicap",
    duration: "1 an et demi",
    rating: 5,
    quote:
      "Pour Lucas, atteint de TSA : patience, bienveillance, compétence. Exactement ce qu'il fallait.",
    longQuote:
      "Lucas a un TSA et besoin de routines très stables. On avait essayé 3 nounous, aucune n'avait tenu. Anissa est avec lui depuis 18 mois. Elle a suivi sa formation, lit son cahier d'école, travaille avec son orthophoniste. Pour la première fois on a pu partir 3 jours en couple. Vital.",
    featured: true,
  },
  {
    name: "Valérie N.",
    relation: "Aidante de sa maman",
    city: "Saint-Mandé",
    service: "Alzheimer / Parkinson",
    serviceSlug: "alzheimer-parkinson",
    duration: "8 mois",
    rating: 5,
    quote:
      "Le crédit d'impôt expliqué simplement, le dossier APA monté pour nous. Beaucoup moins cher que prévu.",
    longQuote:
      "Maman a Alzheimer, je pensais qu'on allait y laisser nos économies. Youdom Care a tout calculé en transparence : APA majorée, ALD 100%, crédit d'impôt avance immédiate. Reste à charge final : 380 €/mois pour 5 demi-journées. Et l'auxiliaire est formée Humanitude, ça change tout.",
    featured: true,
  },
  {
    name: "Patrick H.",
    relation: "Fils, sa maman vit seule",
    city: "Ivry-sur-Seine",
    service: "Présence de nuit",
    serviceSlug: "garde-nuit",
    duration: "1 an",
    rating: 5,
    quote:
      "Présence de nuit : enfin dormir tranquille. Sécurité maximale pour maman, paix pour nous.",
    longQuote:
      "Maman tombait la nuit. 3 fois en 6 mois. On vivait avec la peur de l'appel à 4 h du matin. Veille passive 5 nuits par semaine depuis 1 an : zéro chute, maman dort mieux, et nous aussi. La meilleure décision qu'on ait prise.",
    featured: true,
  },
  // === Témoignages additionnels (uniquement page /temoignages) ===
  {
    name: "Catherine F.",
    relation: "Aidante de sa maman atteinte d'Alzheimer",
    city: "Paris 15ᵉ",
    service: "Alzheimer + aidants",
    serviceSlug: "alzheimer-parkinson",
    duration: "2 ans",
    rating: 5,
    quote:
      "Pendant 4 ans j'ai géré seule. Je me suis effondrée un dimanche. Youdom Care m'a sauvée.",
    longQuote:
      "Pendant 4 ans, j'ai géré seule l'Alzheimer de maman, en parallèle du job et de mes deux ados. Je me suis effondrée un dimanche en pleurant dans la voiture. Ma sœur a appelé Youdom Care. La coordinatrice est venue, a tout écouté, a posé des questions que personne ne m'avait posées. En 10 jours, on avait monté un plan : auxiliaire 4 demi-journées, dossier AJPA, congé proche aidant. Je peux à nouveau respirer. Surtout, je n'ai plus l'impression d'être seule.",
  },
  {
    name: "Mehdi R.",
    relation: "Bénéficiaire, paraplégique 32 ans",
    city: "Paris 13ᵉ",
    service: "Aide handicap adulte",
    serviceSlug: "aide-handicap",
    duration: "3 ans",
    rating: 5,
    quote:
      "Pour la première fois, une aide qui respecte mon projet de vie au lieu de l'imposer.",
    longQuote:
      "Après 5 SAAD différents en 8 ans, j'avais perdu l'espoir de trouver une aide qui me respecte. Chez Youdom Care, on m'a demandé d'abord ce que je voulais faire de ma vie, pas ce que mon dossier MDPH disait. Ma PCH est mieux montée, j'ai changé d'auxiliaire 1 fois sans drame, et je vis enfin selon mes propres règles.",
  },
  {
    name: "Agnès B.",
    relation: "Bénéficiaire, 81 ans",
    city: "Paris 14ᵉ",
    service: "Téléassistance + sorties",
    serviceSlug: "teleassistance",
    duration: "1 an",
    rating: 5,
    quote:
      "La téléassistance + sorties hebdo : le bon dosage pour rester indépendante chez moi.",
    longQuote:
      "Je n'ai jamais voulu d'aide à la toilette, je tiens à mon autonomie. Mais après une chute en 2024, j'ai accepté la téléassistance et 2 sorties par semaine avec Aurélie. Le médaillon m'a déjà sauvée 2 fois (chutes mineures sans gravité). Et les sorties, c'est un bonheur — Aurélie m'emmène au cinéma le mardi.",
  },
  {
    name: "Dr. Lefranc",
    relation: "Médecin gériatre, hôpital Saint-Antoine",
    city: "Paris 12ᵉ",
    service: "Prescripteur",
    serviceSlug: "aide-personnes-agees",
    duration: "Partenariat 3 ans",
    rating: 5,
    quote:
      "Quand j'ai un patient qui sort d'AVC, j'ai besoin d'un partenaire SAAD réactif. Youdom Care l'est.",
    longQuote:
      "En tant que gériatre hospitalier, je propose des SAAD à mes patients qui sortent d'AVC ou de chirurgie. Youdom Care a 3 atouts qui font la différence : démarrage en 48 h confirmées (week-end inclus), montage du dossier APA accélérée, et coordination réelle avec mes équipes (cahier de liaison, alertes immédiates). Mes patients réintègrent moins l'hôpital.",
  },
  {
    name: "Famille T.",
    relation: "Famille d'une bénéficiaire de 91 ans",
    city: "Levallois-Perret",
    service: "Aide complète + nuit",
    serviceSlug: "aide-personnes-agees",
    duration: "4 ans, fin de vie à domicile",
    rating: 5,
    quote:
      "Maman est partie sereinement chez elle, entourée. Grâce à Youdom Care.",
    longQuote:
      "Maman avait 91 ans et voulait mourir chez elle. Pendant 4 ans, Youdom Care a permis ce miracle : 35 h/semaine + 4 nuits, coordination avec l'HAD pour les 6 derniers mois, accompagnement de toute la famille. Quand elle est partie, en novembre 2025, son auxiliaire Sandrine était à son chevet avec nous. Tellement d'humanité dans ce métier.",
  },
  {
    name: "Hélène M.",
    relation: "Mère d'une fille adulte avec déficience",
    city: "Boulogne-Billancourt",
    service: "Garde + accompagnement",
    serviceSlug: "garde-enfants-handicap",
    duration: "5 ans",
    rating: 5,
    quote:
      "Ma fille de 28 ans avec déficience intellectuelle a enfin un cadre stable. Et moi je récupère.",
    longQuote:
      "Camille a 28 ans, déficience intellectuelle modérée. Après l'IME, elle est revenue à la maison et nous avons tenu 7 ans seules. Quand j'ai eu un cancer du sein en 2021, j'ai eu peur. Youdom Care a pris le relais : garde le matin, sorties l'après-midi, atelier autonomie. Camille progresse, je guéris, on respire.",
  },
];

export const featuredTestimonials = extendedTestimonials.filter((t) => t.featured);
