/**
 * FAQ riche pour la page /faq.
 * Organisée par catégories pour faciliter la navigation.
 */

export type FAQCategory = {
  id: string;
  label: string;
  icon: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FAQCategory[] = [
  {
    id: "demarrer",
    label: "Démarrer avec Youdom Care",
    icon: "🚀",
    items: [
      {
        question: "Comment se passe le premier contact ?",
        answer:
          "Trois manières : appel téléphonique au 01 84 80 72 97, formulaire de devis en ligne (3 min) ou email. Une coordinatrice vous rappelle dans les 2 heures ouvrées qui suivent pour qualifier votre besoin.",
      },
      {
        question: "Combien de temps avant de démarrer ?",
        answer:
          "Pour un démarrage classique : 5 à 7 jours après notre visite à domicile (le temps d'établir le plan d'aide et de vous présenter l'auxiliaire). En cas d'urgence (sortie d'hôpital, dégradation rapide) : 48 à 72 h, week-end inclus.",
      },
      {
        question: "La visite à domicile est-elle vraiment gratuite ?",
        answer:
          "Oui, totalement. Notre coordinatrice se déplace gratuitement, sans engagement de votre part. Elle évalue les besoins, observe l'environnement, écoute la personne et la famille. Vous décidez ensuite si vous voulez aller plus loin.",
      },
      {
        question: "Faut-il signer un long contrat d'engagement ?",
        answer:
          "Non. Notre contrat est sans engagement de durée — vous pouvez l'arrêter avec 1 mois de préavis simple. Pour les missions ponctuelles (sortie d'hospitalisation), vous pouvez arrêter dès que vous estimez que ce n'est plus nécessaire.",
      },
    ],
  },
  {
    id: "intervenants",
    label: "Nos intervenants",
    icon: "👥",
    items: [
      {
        question: "Comment sont sélectionnés vos auxiliaires de vie ?",
        answer:
          "Sélection en 6 étapes : entretien RH, vérification des diplômes (DEAES, DEAVS), contrôle du casier judiciaire B3 renouvelé chaque année, test de mise en situation, période d'observation accompagnée, formation interne avant la 1ʳᵉ mission seul·e. Sont rejetés ~70 % des candidats.",
      },
      {
        question: "Aurai-je toujours le même intervenant ?",
        answer:
          "Oui, c'est notre engagement n°1. Vous gardez le même auxiliaire principal et un binôme de remplacement formé à votre dossier (pour les congés ou arrêts maladie). La continuité est essentielle pour la confiance, surtout avec les personnes désorientées.",
      },
      {
        question: "Et si la personne ne convient pas ?",
        answer:
          "Vous nous le dites — par téléphone, email ou via votre coordinatrice — et nous remplaçons sous 48 h sans frais ni question. La compatibilité humaine est non-négociable. Aucune mauvaise expérience n'est tolérée chez nous.",
      },
      {
        question: "Quelle est la formation continue ?",
        answer:
          "Tous nos auxiliaires en CDI suivent au moins une formation par trimestre : Humanitude, manutention, premiers secours, communication adaptée (Alzheimer, autisme), spécialisations (post-hospi, fin de vie, etc.). Évalués chaque année par les bénéficiaires et coordinateurs.",
      },
      {
        question: "Vos intervenants sont-ils des auto-entrepreneurs ?",
        answer:
          "Non, jamais. Tous nos auxiliaires sont en CDI Youdom Care. C'est plus coûteux pour nous mais cela garantit la formation, la continuité, l'encadrement. Pas d'auto-entrepreneurs envoyés au hasard.",
      },
    ],
  },
  {
    id: "tarifs-aides",
    label: "Tarifs & aides financières",
    icon: "💰",
    items: [
      {
        question: "Quel est le tarif horaire ?",
        answer:
          "Notre tarif varie de 25 à 35 €/h selon le service (jour, nuit, dimanche, niveau de spécialisation). Avec le crédit d'impôt de 50 % automatique et les aides comme l'APA ou la PCH, le reste à charge tombe souvent entre 5 et 12 € de l'heure pour les seniors.",
      },
      {
        question: "L'avance immédiate du crédit d'impôt 50 %, comment ça marche ?",
        answer:
          "Au lieu d'attendre votre déclaration de revenus pour récupérer 50 % de la somme versée, vous ne payez QUE 50 % de la facture chaque mois. L'URSSAF avance la différence directement. Mise en place gratuite, on s'en occupe.",
      },
      {
        question: "Vous pouvez monter mon dossier APA ou PCH ?",
        answer:
          "Oui, c'est inclus gratuitement. Notre coordinatrice prépare le dossier (formulaires, justificatifs, projet de vie pour la MDPH), le dépose, suit l'instruction et défend votre situation en cas de refus. Service de bout en bout sans surcoût.",
      },
      {
        question: "Acceptez-vous les CESU préfinancés ?",
        answer:
          "Oui. Si votre employeur (CSE, comité d'entreprise) ou votre caisse de retraite vous donne des CESU préfinancés, vous pouvez les utiliser pour régler nos prestations. Cumulables avec le crédit d'impôt 50 %.",
      },
      {
        question: "Et si je n'ai pas droit à l'APA ?",
        answer:
          "Le crédit d'impôt 50 % s'applique à tous, sans condition d'âge ou de ressources. De plus, beaucoup de mutuelles couvrent l'aide post-hospitalisation, et les caisses de retraite financent l'aide ménagère pour les GIR 5-6 (autonomie préservée).",
      },
    ],
  },
  {
    id: "services",
    label: "Nos services",
    icon: "🤝",
    items: [
      {
        question: "Quels services proposez-vous exactement ?",
        answer:
          "12 services : aide aux personnes âgées, aide handicap, garde d'enfants handicapés, aide ménagère, garde de nuit, accompagnement & sorties, retour d'hospitalisation, transport PMR, Alzheimer/Parkinson, téléassistance, assistance administrative, assistance informatique. Voir la page /services pour le détail.",
      },
      {
        question: "Pouvez-vous combiner plusieurs services ?",
        answer:
          "Absolument. C'est même fréquent. Par exemple : aide aux personnes âgées 4 demi-journées + aide ménagère 1 fois/semaine + 1 nuit hebdo + accompagnement aux RDV médicaux. Un seul contrat, un seul coordinateur, plusieurs auxiliaires si besoin.",
      },
      {
        question: "Vous intervenez le week-end ?",
        answer:
          "Oui, 7j/7. Nous intervenons aussi les jours fériés (avec majoration tarifaire dimanche/férié). Notre cellule d'astreinte couvre les urgences week-end et soir (sortie d'hôpital, etc.).",
      },
      {
        question: "Quelle est la durée minimum d'intervention ?",
        answer:
          "1 heure par intervention pour la majorité des services. Pour le ménage : 2 h minimum (le temps d'arriver, faire un vrai travail, repartir). Pour la garde de nuit : 9 h (22h-7h typiquement).",
      },
    ],
  },
  {
    id: "qualite-securite",
    label: "Qualité & sécurité",
    icon: "🛡️",
    items: [
      {
        question: "Êtes-vous agréés ?",
        answer:
          "Oui. Nous avons l'agrément Service à la Personne (SAP) délivré par la DIRECCTE, l'autorisation SAAD départementale, et notre charte qualité est signée par chaque intervenant. Tous les agréments sont consultables sur notre page Qui sommes-nous.",
      },
      {
        question: "Comment garantissez-vous la confidentialité ?",
        answer:
          "Tous nos auxiliaires signent un engagement de confidentialité opposable (clause pénale en cas de manquement). Vos données restent dans nos systèmes (RGPD), nous ne vendons rien à personne. Coffre-fort numérique sécurisé pour les copies de documents.",
      },
      {
        question: "Que faire en cas de problème avec un intervenant ?",
        answer:
          "Contactez immédiatement notre coordinatrice (dans les heures ouvrées) ou notre cellule d'astreinte (7j/7). Tout signalement est traité dans les 24 h. Pour la maltraitance : nous prenons les accusations très au sérieux et collaborons avec le 3977 si nécessaire.",
      },
      {
        question: "Vos auxiliaires sont-ils assurés ?",
        answer:
          "Oui, nous avons une assurance responsabilité civile professionnelle complète qui couvre les dommages éventuels chez vous. Tous nos intervenants sont couverts dans leurs missions. Attestation disponible sur demande.",
      },
    ],
  },
  {
    id: "espace-client",
    label: "Espace client & facturation",
    icon: "📋",
    items: [
      {
        question: "Comment recevoir mes factures et attestations fiscales ?",
        answer:
          "Vos factures vous sont envoyées par email chaque mois. Votre attestation fiscale annuelle (à joindre à votre déclaration d'impôts) est envoyée en janvier. Vous pouvez aussi tout retrouver dans votre espace client en ligne.",
      },
      {
        question: "Comment se passe le paiement ?",
        answer:
          "Prélèvement SEPA mensuel après réception de la facture. Si vous activez l'avance immédiate du crédit d'impôt, votre prélèvement = 50 % du tarif (l'URSSAF avance le reste). Paiement par CESU préfinancé accepté. Pas de paiement en espèces.",
      },
      {
        question: "Comment ajuster ou stopper le service ?",
        answer:
          "Par téléphone ou email à votre coordinatrice. Pour augmenter/réduire les heures : nous adaptons sous 7 jours. Pour arrêter : préavis 1 mois (sauf cas urgents : décès, hospitalisation prolongée, etc. — nous adaptons humainement).",
      },
    ],
  },
];

/** Aplatir pour la recherche / Schema.org */
export const allFaqItems = faqCategories.flatMap((c) => c.items);
