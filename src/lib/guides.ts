/**
 * Guides téléchargeables (lead magnets).
 * Chaque guide a sa fiche descriptive et son fichier PDF.
 * Capture d'email via API route /api/lead-magnet.
 */

export type Guide = {
  slug: string;
  title: string;
  subtitle: string;
  pages: number;
  category: "Aides" | "Aidants" | "Seniors" | "Handicap" | "Hôpital" | "Alzheimer";
  audience: string;
  // Pour la fiche :
  intro: string;
  toc: string[]; // Sommaire — 5 à 8 entrées
  benefits: string[]; // 3 à 5 bénéfices que le lecteur va retirer
  pdfPath: string; // Chemin relatif vers le PDF dans /public
  cover: string; // URL de l'image de couverture
  emoji: string;
  color: "primary" | "accent" | "secondary";
};

export const guides: Guide[] = [
  {
    slug: "guide-aides-2026",
    title: "Le guide complet des aides 2026",
    subtitle: "APA, PCH, AEEH, crédit d'impôt 50 % et toutes les aides expliquées clairement",
    pages: 44,
    category: "Aides",
    audience: "Familles, aidants, seniors",
    intro:
      "Toutes les aides pour financer une aide à domicile en 2026, expliquées sans jargon : qui peut en bénéficier, comment les demander, quels montants espérer, comment les cumuler.",
    toc: [
      "L'APA expliquée par GIR (1 à 4)",
      "La PCH pour les moins de 60 ans",
      "L'AEEH pour les enfants en situation de handicap",
      "Le crédit d'impôt 50 % et l'avance immédiate",
      "MaPrimeAdapt' pour les travaux d'adaptation",
      "Les aides des caisses de retraite (CARSAT, AGIRC-ARRCO)",
      "Les mutuelles et garanties assistance",
      "Les CESU préfinancés",
    ],
    benefits: [
      "Comprendre quels droits vous pouvez activer aujourd'hui",
      "Savoir comment monter chaque dossier (étape par étape)",
      "Identifier les pièges et les délais à respecter",
      "Calculer votre reste à charge réel après aides",
    ],
    pdfPath: "/guides/youdom-care-guide-aides-2026.pdf",
    cover: "/images/curated/aides-financieres-senior-video.jpg",
    emoji: "📕",
    color: "primary",
  },
  {
    slug: "checklist-adaptation-domicile",
    title: "Checklist : adapter le domicile d'un senior",
    subtitle: "Prévenir les chutes pièce par pièce, du minimum essentiel au confort total",
    pages: 22,
    category: "Seniors",
    audience: "Aidants familiaux, seniors actifs",
    intro:
      "Une checklist exhaustive pour transformer le domicile d'une personne âgée en un espace sûr : quels équipements installer, où, dans quel ordre, à quel coût.",
    toc: [
      "Salle de bain : barres, sièges, antidérapants",
      "Escaliers : rampes, monte-escalier, sécurisation",
      "Chambre : hauteur de lit, veilleuse, accès",
      "Cuisine : ergonomie, hauteurs, sécurité gaz/électrique",
      "Salon et passages : tapis, mobilier, éclairage",
      "Entrée : rampe, antidérapant, sonnette",
      "Aides techniques : téléassistance, détecteurs",
      "Budget : 3 niveaux d'investissement",
    ],
    benefits: [
      "Identifier les zones à risque dans le logement",
      "Prioriser les travaux selon votre budget",
      "Connaître les aides MaPrimeAdapt' applicables",
      "Impliquer la personne âgée dans les choix",
    ],
    pdfPath: "/guides/youdom-care-adaptation-domicile.pdf",
    cover: "/images/curated/service-aide-menagere.jpg",
    emoji: "📗",
    color: "accent",
  },
  {
    slug: "guide-aidant-familial",
    title: "Le guide de l'aidant familial",
    subtitle: "Vos droits, votre répit, votre santé — l'essentiel pour tenir dans la durée",
    pages: 36,
    category: "Aidants",
    audience: "Aidants familiaux salariés ou non",
    intro:
      "Vous accompagnez un proche au quotidien ? Ce guide regroupe tous vos droits (AJPA, congé proche aidant, dons de RTT, retraite), les solutions de répit et les ressources qui vous protègent.",
    toc: [
      "L'AJPA : conditions, montants, démarches",
      "Le congé de proche aidant : 3 mois renouvelables",
      "Le don de RTT et de jours de congé",
      "Validation gratuite de trimestres retraite",
      "Le bilan de santé gratuit pour aidants",
      "Mon Soutien Psy : 12 séances remboursées",
      "Solutions de répit : domicile, accueil de jour, hébergement temporaire",
      "Quand demander de l'aide : signaux d'alerte",
    ],
    benefits: [
      "Activer les protections légales auxquelles vous avez droit",
      "Trouver des solutions de répit régulières",
      "Préserver votre carrière et votre retraite",
      "Identifier les signaux d'épuisement avant la rupture",
    ],
    pdfPath: "/guides/youdom-care-guide-aidant.pdf",
    cover: "/images/curated/public-aidants-knitting-granddaughter.jpg",
    emoji: "📘",
    color: "secondary",
  },
  {
    slug: "checklist-sortie-hopital",
    title: "« Sortir de l'hôpital » — checklist 7 jours",
    subtitle: "Préparer une sortie d'hospitalisation sans rater la convalescence",
    pages: 18,
    category: "Hôpital",
    audience: "Familles d'un proche hospitalisé",
    intro:
      "Une checklist jour par jour pour transformer une sortie d'hôpital stressante en convalescence sereine : qui appeler, quoi vérifier, quels dossiers monter, à quel rythme.",
    toc: [
      "J-7 à J-3 : préparer le retour à domicile",
      "J-2 : visite à domicile, courses, organisation",
      "J-1 : récupérer ordonnances, kit pharmacie",
      "J0 : la sortie elle-même — coordination",
      "J+1 à J+3 : surveillance, alertes, suivi",
      "J+7 : bilan, ajustements",
      "Le PRADO de l'Assurance Maladie",
      "Les aides mutuelle souvent ignorées",
    ],
    benefits: [
      "Éviter une réhospitalisation par défaut d'organisation",
      "Coordonner médecin, infirmier, kiné, aide à domicile",
      "Activer les prises en charge mutuelle/Sécu",
      "Repérer les signaux d'alerte précoces",
    ],
    pdfPath: "/guides/youdom-care-sortie-hopital.pdf",
    cover: "/images/curated/service-retour-hospitalisation.jpg",
    emoji: "📙",
    color: "primary",
  },
  {
    slug: "comprendre-alzheimer",
    title: "Comprendre Alzheimer au quotidien",
    subtitle: "Reconnaître, accompagner, protéger — un guide pour les familles",
    pages: 32,
    category: "Alzheimer",
    audience: "Familles de personnes atteintes d'Alzheimer",
    intro:
      "Le diagnostic vient de tomber, ou la maladie progresse. Ce guide rassemble les bonnes pratiques pour accompagner un proche atteint d'Alzheimer : adapter la communication, gérer les troubles, préserver la dignité, prévenir les crises.",
    toc: [
      "Les 7 stades de la maladie",
      "Adapter la communication (méthode Humanitude)",
      "La méthode Montessori adaptée Alzheimer",
      "Gérer les troubles du comportement",
      "Sécuriser le domicile (errance, fugue)",
      "Le syndrome crépusculaire — comment réagir",
      "L'aidant : soutien, répit, plateformes",
      "Anticiper la fin de la maladie à domicile",
    ],
    benefits: [
      "Mieux comprendre les évolutions de la maladie",
      "Apprendre des gestes concrets de communication",
      "Réduire les crises grâce à des routines stabilisées",
      "Connaître les ressources et plateformes de répit",
    ],
    pdfPath: "/guides/youdom-care-comprendre-alzheimer.pdf",
    cover: "/images/curated/service-alzheimer-parkinson.jpg",
    emoji: "📕",
    color: "primary",
  },
  {
    slug: "kit-mdph",
    title: "Premier RDV avec la MDPH — kit de préparation",
    subtitle: "Monter un dossier PCH/AAH/AEEH sans perdre 6 mois de plus",
    pages: 28,
    category: "Handicap",
    audience: "Personnes handicapées, parents d'enfants handicapés",
    intro:
      "La MDPH peut sembler labyrinthique. Ce kit de préparation vous donne les bonnes formulations, les pièges à éviter et la check-list complète pour optimiser vos chances de succès dès le premier dépôt.",
    toc: [
      "Comprendre les différentes aides MDPH",
      "Le projet de vie : comment le rédiger",
      "Le certificat médical détaillé",
      "Justificatifs : la liste exhaustive",
      "PCH : volet aide humaine, technique, transport",
      "AAH : conditions de ressources et modalités",
      "AEEH : base + complément 1 à 6",
      "Recours en cas de refus : RAPO et tribunaux",
    ],
    benefits: [
      "Présenter un dossier complet dès la première fois",
      "Maximiser le volume horaire PCH accordé",
      "Comprendre la grille d'évaluation MDPH",
      "Savoir contester une décision défavorable",
    ],
    pdfPath: "/guides/youdom-care-kit-mdph.pdf",
    cover: "/images/curated/service-assistance-administrative.jpg",
    emoji: "📗",
    color: "accent",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
