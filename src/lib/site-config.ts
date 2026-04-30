/**
 * Configuration centrale du site Youdom Care.
 * Source de vérité unique pour les coordonnées, agréments, services, personas, etc.
 */

export const siteConfig = {
  name: "Youdom Care",
  tagline: "L'aide à domicile qui prend soin de toute la famille.",
  url: "https://youdom-care.com",
  email: "contact@youdom-care.com",
  emailRecruitment: "recrutement@youdom-care.com",
  phone: {
    main: "01 84 80 72 97",
    mainE164: "+33184807297",
    mobile: "06 67 22 45 07",
    mobileE164: "+33667224507",
    hours: "Lun. – Sam. de 8h à 20h",
  },
  address: {
    street: "61 rue de Lyon",
    zip: "75012",
    city: "Paris",
    full: "61 rue de Lyon, 75012 Paris",
  },
  zone: "Paris & Île-de-France",
  legalForm: "SAS",
  founded: 2014,
} as const;

/**
 * Statistiques de marque — affichées sur la trust bar et plusieurs pages.
 * À garder à jour quand les chiffres bougent.
 */
export const brandStats = {
  yearsOfExperience: 10,
  familiesAccompanied: 500,
  satisfactionRate: 98,
  responseTimeHours: 2,
  interventionsPerMonth: 6500,
  caregiversCount: 80,
} as const;

/**
 * Agréments officiels — affichage cohérent dans Footer + pages de confiance.
 */
export const agrements = [
  {
    label: "Agrément Service à la Personne",
    short: "SAP",
    description: "Délivré par la DIRECCTE — autorise les services aux publics fragiles",
  },
  {
    label: "Autorisation SAAD",
    short: "SAAD",
    description: "Service d'Aide et d'Accompagnement à Domicile — autorisé par le département",
  },
  {
    label: "Crédit d'impôt 50%",
    short: "Crédit 50%",
    description: "Vous récupérez la moitié de vos dépenses (loi 2017-1837)",
  },
  {
    label: "TVA réduite 5,5%",
    short: "TVA 5,5%",
    description: "Tarif réduit applicable sur les services à la personne",
  },
] as const;

/**
 * Personas — entrées principales du site, routage intelligent.
 */
export const personas = [
  {
    id: "senior",
    label: "Pour un proche âgé",
    shortLabel: "Senior",
    description: "Maintien à domicile, autonomie, prévention",
    icon: "👵",
    href: "/publics/seniors",
    color: "primary",
  },
  {
    id: "aidant",
    label: "Vous aidez un proche",
    shortLabel: "Aidant",
    description: "Soulagement, répit, ressources pour aidants",
    icon: "🫂",
    href: "/publics/aidants-familiaux",
    color: "accent",
  },
  {
    id: "handicap",
    label: "Vivre avec un handicap",
    shortLabel: "Handicap",
    description: "Accompagnement adapté, projet de vie",
    icon: "♿",
    href: "/publics/handicap",
    color: "secondary",
  },
  {
    id: "professionnel",
    label: "Vous êtes prescripteur",
    shortLabel: "Pro",
    description: "Médecin, MDPH, assistant social, hôpital",
    icon: "🏥",
    href: "/publics/prescripteurs",
    color: "primary",
  },
] as const;

/**
 * Services — source de vérité unique. Toute la nav, le footer, la home,
 * et les pages de listing s'alimentent ici.
 */
export const services = [
  {
    slug: "aide-personnes-agees",
    title: "Aide aux personnes âgées",
    short: "Seniors",
    summary: "Toilette, repas, mobilité, présence rassurante au quotidien.",
    image: "/images/curated/service-aide-personnes-agees.jpg",
    audience: ["senior", "aidant"],
    featured: true,
  },
  {
    slug: "aide-handicap",
    title: "Aide & accompagnement handicap",
    short: "Handicap adulte",
    summary: "Services adaptés à chaque handicap. Continuité, respect, dignité.",
    image: "/images/curated/service-aide-handicap.jpg",
    audience: ["handicap", "aidant"],
    featured: true,
  },
  {
    slug: "garde-enfants-handicap",
    title: "Garde d'enfants en situation de handicap",
    short: "Enfants handicap",
    summary: "Garde qualifiée. Sécurité, bienveillance, jeux adaptés.",
    image: "/images/curated/service-garde-enfants-handicap.jpg",
    audience: ["handicap", "aidant"],
    featured: false,
  },
  {
    slug: "aide-menagere",
    title: "Aide ménagère",
    short: "Ménage",
    summary: "Ménage régulier. Domicile propre, prévention chutes, bien-être.",
    image: "/images/curated/service-aide-menagere.jpg",
    audience: ["senior", "handicap"],
    featured: true,
  },
  {
    slug: "garde-nuit",
    title: "Présence de nuit",
    short: "Nuit",
    summary: "Veille passive ou active. Sécurité nocturne maximale.",
    image: "/images/curated/service-garde-nuit.jpg",
    audience: ["senior", "handicap", "aidant"],
    featured: true,
  },
  {
    slug: "accompagnement-sorties",
    title: "Accompagnement & sorties",
    short: "Sorties",
    summary: "Courses, RDV médecins, loisirs. Autonomie et lien social.",
    image: "/images/curated/service-accompagnement-sorties.jpg",
    audience: ["senior", "handicap"],
    featured: true,
  },
  {
    slug: "retour-hospitalisation",
    title: "Retour d'hospitalisation",
    short: "Post-hospi",
    summary: "Suivi post-opératoire, aide aux soins, coordination médicale.",
    image: "/images/curated/service-retour-hospitalisation.jpg",
    audience: ["senior", "aidant"],
    featured: true,
  },
  {
    slug: "transport-pmr",
    title: "Transport PMR",
    short: "Transport",
    summary: "Véhicules adaptés, chauffeurs formés. RDV médicaux et sorties.",
    image: "/images/curated/service-transport-pmr.jpg",
    audience: ["handicap", "senior"],
    featured: false,
  },
  {
    slug: "alzheimer-parkinson",
    title: "Maladies neurodégénératives",
    short: "Alzheimer / Parkinson",
    summary: "Alzheimer, Parkinson, sclérose en plaques. Accompagnement spécialisé.",
    image: "/images/curated/service-alzheimer-parkinson.jpg",
    audience: ["senior", "aidant"],
    featured: true,
  },
  {
    slug: "teleassistance",
    title: "Téléassistance 24/24",
    short: "Téléassistance",
    summary: "Bouton d'urgence, assistance immédiate jour et nuit.",
    image: "/images/curated/service-teleassistance.jpg",
    audience: ["senior", "aidant"],
    featured: false,
  },
  {
    slug: "assistance-administrative",
    title: "Assistance administrative",
    short: "Démarches",
    summary: "MDPH, APA, mutuelles, dossiers. On s'occupe des papiers.",
    image: "/images/curated/service-assistance-administrative.jpg",
    audience: ["senior", "handicap", "aidant"],
    featured: false,
  },
  {
    slug: "assistance-informatique",
    title: "Assistance informatique",
    short: "Numérique",
    summary: "Aide ordinateur, smartphone, internet. Garder le lien.",
    image: "/images/curated/service-assistance-informatique.jpg",
    audience: ["senior"],
    featured: false,
  },
] as const;

/**
 * Engagements signés — différenciation forte.
 */
export const engagements = [
  {
    icon: "🤝",
    title: "Le même intervenant",
    description:
      "Vous gardez la même auxiliaire de vie. Continuité, confiance, repères préservés.",
  },
  {
    icon: "🎓",
    title: "Formés en continu",
    description:
      "Tous nos intervenants suivent un parcours initial puis une formation chaque trimestre.",
  },
  {
    icon: "⏱️",
    title: "Réponse en moins de 2 h",
    description:
      "Un appel de qualification gratuit dans les 2 h ouvrées suivant votre demande.",
  },
  {
    icon: "💰",
    title: "Tarif transparent",
    description:
      "Pas de mauvaise surprise. Devis détaillé, simulation des aides, reste à charge clair.",
  },
  {
    icon: "📞",
    title: "Coordinateur dédié",
    description:
      "Un interlocuteur unique qui connaît votre dossier et coordonne les interventions.",
  },
  {
    icon: "🏠",
    title: "Visite gratuite à domicile",
    description:
      "Avant tout démarrage, une évaluation à domicile pour comprendre votre situation.",
  },
] as const;

/**
 * Étapes du parcours client.
 */
export const processSteps = [
  {
    step: 1,
    icon: "📞",
    title: "Premier contact",
    duration: "10 min",
    description:
      "Un appel gratuit pour comprendre votre besoin. Conseil orienté, sans engagement.",
  },
  {
    step: 2,
    icon: "🏠",
    title: "Visite à domicile",
    duration: "Sous 48 h",
    description:
      "Nous venons chez vous, observons l'environnement, écoutons la personne et la famille.",
  },
  {
    step: 3,
    icon: "📋",
    title: "Plan personnalisé",
    duration: "Sous 24 h",
    description:
      "Plan d'aide détaillé : services, planning, intervenants pressentis, tarif et aides.",
  },
  {
    step: 4,
    icon: "✨",
    title: "Démarrage",
    duration: "Quand vous voulez",
    description:
      "Présentation de votre auxiliaire dédiée. Première intervention encadrée.",
  },
  {
    step: 5,
    icon: "🛡️",
    title: "Suivi continu",
    duration: "Toujours",
    description:
      "Coordinateur joignable, ajustements réguliers, évaluation qualité tous les 3 mois.",
  },
] as const;

/**
 * FAQ rapide pour la home — questions à plus fort impact conversion.
 */
export const faqQuick = [
  {
    question: "Combien ça coûte vraiment, après les aides ?",
    answer:
      "Le tarif horaire varie de 25 à 32 €. Avec le crédit d'impôt de 50 % automatique et les aides comme l'APA ou la PCH, le reste à charge tombe souvent entre 5 et 12 € de l'heure. Notre simulateur calcule votre coût réel en 30 secondes.",
  },
  {
    question: "Quand pouvez-vous commencer ?",
    answer:
      "Dans les cas urgents (sortie d'hôpital, perte d'autonomie soudaine), nous pouvons démarrer en 48 à 72 h. Pour une mise en place classique, comptez 5 à 7 jours après notre visite à domicile.",
  },
  {
    question: "Aurai-je toujours la même personne ?",
    answer:
      "Oui, c'est notre engagement n°1. Vous gardez le même intervenant principal et un binôme de remplacement formé à votre dossier. Cette continuité est essentielle pour la confiance.",
  },
  {
    question: "Comment sont sélectionnés vos intervenants ?",
    answer:
      "Sélection en 6 étapes : entretien RH, vérification des diplômes, contrôle du casier judiciaire (B3), test de mise en situation, période d'observation et formation interne avant la première mission seul·e.",
  },
  {
    question: "Et si la personne ne convient pas ?",
    answer:
      "Vous nous le dites, nous remplaçons sous 48 h sans frais. La compatibilité humaine est un critère essentiel et nous le respectons sans question.",
  },
  {
    question: "Mon assurance ou ma mutuelle peut-elle financer ?",
    answer:
      "Beaucoup de mutuelles et caisses de retraite financent partiellement nos services. Notre équipe vérifie vos droits gratuitement et monte les dossiers à votre place.",
  },
] as const;

/**
 * Témoignages — données enrichies (ville, service, durée, avatar).
 */
export const testimonials = [
  {
    name: "Marie T.",
    relation: "Fille de Mme T., 84 ans",
    city: "Paris 12ᵉ",
    service: "Aide aux personnes âgées",
    duration: "3 ans avec nous",
    rating: 5,
    quote:
      "Enfin respirer. Maman a Aïcha tous les matins depuis 3 ans, et nous savons qu'elle est en sécurité. Youdom Care, c'est sérieux et humain.",
  },
  {
    name: "Jean-Pierre D.",
    relation: "Bénéficiaire, 78 ans",
    city: "Boulogne-Billancourt",
    service: "Aide ménagère + sorties",
    duration: "2 ans avec nous",
    rating: 5,
    quote:
      "Même intervenant depuis 2 ans. On s'est construit une vraie confiance. Ça change tout, à mon âge.",
  },
  {
    name: "Sophie L.",
    relation: "Fille d'un papa hospitalisé",
    city: "Vincennes",
    service: "Retour d'hospitalisation",
    duration: "Mission ponctuelle",
    rating: 5,
    quote:
      "Processus simple, pas de bureaucratie pesante. Réponse en moins de 2 h, devis clair. Très professionnel après l'AVC de papa.",
  },
  {
    name: "Robert M.",
    relation: "Père de Lucas, 9 ans",
    city: "Le Kremlin-Bicêtre",
    service: "Garde d'enfant handicapé",
    duration: "1 an et demi",
    rating: 5,
    quote:
      "Pour la garde de notre fils Lucas, atteint de TSA : patience, bienveillance, compétence. Exactement ce qu'il fallait.",
  },
  {
    name: "Valérie N.",
    relation: "Aidante de sa maman",
    city: "Saint-Mandé",
    service: "Alzheimer / Parkinson",
    duration: "8 mois",
    rating: 5,
    quote:
      "Le crédit d'impôt expliqué simplement, le dossier APA monté pour nous. Beaucoup moins cher que prévu, transparence totale.",
  },
  {
    name: "Patrick H.",
    relation: "Fils, sa maman vit seule",
    city: "Ivry-sur-Seine",
    service: "Présence de nuit",
    duration: "1 an",
    rating: 5,
    quote:
      "Présence de nuit : enfin dormir tranquille. Sécurité maximale pour maman, paix pour nous. Je recommande vivement.",
  },
] as const;

/**
 * Aides financières — référentiel.
 */
export const aidesFinancieres = [
  {
    code: "APA",
    label: "Allocation Personnalisée d'Autonomie",
    audience: "Seniors GIR 1 à 4",
    montantMax: 1955.6,
    description: "Versée par le département pour aider les seniors en perte d'autonomie.",
  },
  {
    code: "PCH",
    label: "Prestation de Compensation du Handicap",
    audience: "Personnes handicapées < 60 ans",
    montantMax: 5000,
    description: "Couvre les besoins en aide humaine, technique, aménagement.",
  },
  {
    code: "Crédit impôt",
    label: "Crédit d'impôt 50%",
    audience: "Tous foyers fiscaux",
    description:
      "50 % des sommes versées récupérées en crédit d'impôt, automatique en service à la personne.",
  },
  {
    code: "AEEH",
    label: "Allocation d'Éducation de l'Enfant Handicapé",
    audience: "Parents d'enfants handicapés",
    description: "Versée par la CAF pour aider les familles d'enfants en situation de handicap.",
  },
  {
    code: "Caisses retraite",
    label: "Aides des caisses de retraite",
    audience: "Retraités GIR 5-6",
    description: "CARSAT, AGIRC-ARRCO, MSA financent l'aide à domicile pour prévenir la dépendance.",
  },
  {
    code: "Mutuelles",
    label: "Mutuelles santé",
    audience: "Selon contrat",
    description: "Beaucoup de mutuelles couvrent l'aide ponctuelle après hospitalisation.",
  },
] as const;

export type Persona = (typeof personas)[number];
export type Service = (typeof services)[number];
export type Testimonial = (typeof testimonials)[number];
