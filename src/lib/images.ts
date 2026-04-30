/**
 * Source de vérité pour toutes les images du site.
 * Photos libres de droits depuis Pexels (licence libre, usage commercial autorisé sans attribution).
 *
 * Téléchargées localement dans /public/images/curated/ pour éviter toute dépendance
 * à un CDN externe et garantir la performance + la souveraineté des médias.
 */

const BASE = "/images/curated";

export const images = {
  // === HOMEPAGE ===
  homeHero: {
    src: `${BASE}/home-hero-couple-warm.jpg`,
    alt: "Couple senior dans une étreinte chaleureuse à la maison",
  },
  homeMission: {
    src: `${BASE}/home-mission-helping-exercise.jpg`,
    alt: "Auxiliaire de vie aidant un senior à un exercice de mobilité",
  },
  homeAidants: {
    src: `${BASE}/home-aidants-grandma-sunflowers.jpg`,
    alt: "Grand-mère et son petit-fils dans un moment de complicité",
  },
  homeEngagement: {
    src: `${BASE}/comment-ca-marche-caregiver.jpg`,
    alt: "Auxiliaire de vie en conversation avec une personne âgée",
  },

  // === SERVICES (12) ===
  services: {
    "aide-personnes-agees": {
      src: `${BASE}/service-aide-personnes-agees.jpg`,
      alt: "Auxiliaire de vie accompagnant une personne âgée à domicile",
    },
    "aide-handicap": {
      src: `${BASE}/service-aide-handicap.jpg`,
      alt: "Aide à domicile pour personne en fauteuil roulant",
    },
    "garde-enfants-handicap": {
      src: `${BASE}/service-garde-enfants-handicap.jpg`,
      alt: "Enfant en situation de handicap jouant avec des jeux éducatifs",
    },
    "aide-menagere": {
      src: `${BASE}/service-aide-menagere.jpg`,
      alt: "Auxiliaire effectuant le ménage dans un domicile lumineux",
    },
    "garde-nuit": {
      src: `${BASE}/service-garde-nuit.jpg`,
      alt: "Personne âgée reposant paisiblement dans son lit",
    },
    "accompagnement-sorties": {
      src: `${BASE}/service-accompagnement-sorties.jpg`,
      alt: "Deux personnes âgées en promenade dans un parc",
    },
    "retour-hospitalisation": {
      src: `${BASE}/service-retour-hospitalisation.jpg`,
      alt: "Suivi médical à domicile après une hospitalisation",
    },
    "transport-pmr": {
      src: `${BASE}/service-transport-pmr.jpg`,
      alt: "Accompagnant aidant une personne en fauteuil roulant",
    },
    "alzheimer-parkinson": {
      src: `${BASE}/service-alzheimer-parkinson.jpg`,
      alt: "Auxiliaire prenant soin d'une personne âgée avec douceur",
    },
    teleassistance: {
      src: `${BASE}/service-teleassistance.jpg`,
      alt: "Personne âgée utilisant un smartphone pour rester en contact",
    },
    "assistance-administrative": {
      src: `${BASE}/service-assistance-administrative.jpg`,
      alt: "Aide à la gestion de documents administratifs",
    },
    "assistance-informatique": {
      src: `${BASE}/service-assistance-informatique.jpg`,
      alt: "Personne âgée utilisant une tablette numérique chez elle",
    },
  },

  // === PUBLICS / PERSONAS (4) ===
  publics: {
    seniors: {
      src: `${BASE}/public-seniors-happy.jpg`,
      alt: "Couple senior souriant, en pleine forme",
    },
    handicap: {
      src: `${BASE}/public-handicap-girl-wheelchair.jpg`,
      alt: "Jeune personne en fauteuil roulant, avec sourire et confiance",
    },
    "aidants-familiaux": {
      src: `${BASE}/public-aidants-knitting-granddaughter.jpg`,
      alt: "Grand-mère partageant un moment de tricot avec sa petite-fille",
    },
    prescripteurs: {
      src: `${BASE}/public-prescripteurs-medical.jpg`,
      alt: "Professionnel de santé en consultation administrative",
    },
  },

  // === PAGES INSTITUTIONNELLES ===
  quiSommesNous: {
    src: `${BASE}/qui-sommes-nous-couple-indoors.jpg`,
    alt: "Couple senior heureux dans leur intérieur",
  },
  commentCaMarche: {
    src: `${BASE}/comment-ca-marche-caregiver.jpg`,
    alt: "Auxiliaire de vie en intervention auprès d'une personne âgée",
  },
  aidesFinancieres: {
    src: `${BASE}/aides-financieres-senior-video.jpg`,
    alt: "Senior consultant ses droits sur un ordinateur",
  },
  engagementCouple: {
    src: `${BASE}/engagement-couple-outdoor.jpg`,
    alt: "Couple senior souriant en extérieur, ambiance chaleureuse",
  },

  // === BLOG ===
  blog: {
    "adapter-domicile-personnes-agees": {
      src: `${BASE}/service-garde-nuit.jpg`,
      alt: "Chambre senior adaptée pour la sécurité",
    },
    "signes-perte-autonomie": {
      src: `${BASE}/blog-coffee-balcony-warm.jpg`,
      alt: "Couple senior en moment de réflexion à la maison",
    },
    "bien-choisir-aide-domicile": {
      src: `${BASE}/blog-handshake-trust.jpg`,
      alt: "Poignée de main entre auxiliaire et bénéficiaire",
    },
    "maltraitance-personnes-agees": {
      src: `${BASE}/blog-presence-bedside.jpg`,
      alt: "Présence rassurante au chevet d'une personne âgée",
    },
    "financer-aide-domicile-guide-aides": {
      src: `${BASE}/aides-financieres-senior-video.jpg`,
      alt: "Senior consultant les aides financières",
    },
    "lien-social-seniors-isoles": {
      src: `${BASE}/service-accompagnement-sorties.jpg`,
      alt: "Deux seniors marchant ensemble dans un parc",
    },
    "gerer-dependance-quotidien": {
      src: `${BASE}/blog-coffee-balcony-warm.jpg`,
      alt: "Moment de calme à la maison",
    },
    "handicap-visible-invisible": {
      src: `${BASE}/blog-mother-daughter-braille.jpg`,
      alt: "Mère et fille apprenant le braille ensemble",
    },
  },

  // === GUIDES (lead magnets) ===
  guides: {
    "guide-aides-2026": {
      src: `${BASE}/aides-financieres-senior-video.jpg`,
      alt: "Personne âgée consultant ses droits aux aides",
    },
    "checklist-adaptation-domicile": {
      src: `${BASE}/service-aide-menagere.jpg`,
      alt: "Domicile adapté propre et sécurisé",
    },
    "guide-aidant-familial": {
      src: `${BASE}/public-aidants-knitting-granddaughter.jpg`,
      alt: "Aidante familiale et son proche",
    },
    "checklist-sortie-hopital": {
      src: `${BASE}/service-retour-hospitalisation.jpg`,
      alt: "Suivi médical après hospitalisation",
    },
    "comprendre-alzheimer": {
      src: `${BASE}/service-alzheimer-parkinson.jpg`,
      alt: "Soin attentionné pour personne atteinte d'Alzheimer",
    },
    "kit-mdph": {
      src: `${BASE}/service-assistance-administrative.jpg`,
      alt: "Aide au montage d'un dossier MDPH",
    },
  },
} as const;

/**
 * Helper pour récupérer une image par son slug.
 * Retourne le chemin par défaut si le slug n'existe pas.
 */
export function getServiceImage(slug: string) {
  return (
    (images.services as Record<string, { src: string; alt: string }>)[slug] ?? {
      src: images.homeHero.src,
      alt: images.homeHero.alt,
    }
  );
}

export function getBlogImage(slug: string) {
  return (
    (images.blog as Record<string, { src: string; alt: string }>)[slug] ?? {
      src: images.homeMission.src,
      alt: images.homeMission.alt,
    }
  );
}

export function getGuideImage(slug: string) {
  return (
    (images.guides as Record<string, { src: string; alt: string }>)[slug] ?? {
      src: images.homeMission.src,
      alt: images.homeMission.alt,
    }
  );
}
