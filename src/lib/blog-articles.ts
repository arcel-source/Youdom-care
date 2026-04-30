/**
 * Articles de blog Youdom Care.
 * 8 articles SEO long-tail, ~900-1000 mots chacun.
 * Format MDX-light : tableau de blocs (h2, h3, p, ul, callout).
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; variant: "info" | "warning" | "success"; title: string; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Seniors" | "Handicap" | "Aidants" | "Aides financières" | "Conseils";
  readingTime: number; // minutes
  publishedAt: string; // ISO
  updatedAt?: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  content: ArticleBlock[];
};

export const articles: Article[] = [
  // ========================================================================
  // ARTICLE 1
  // ========================================================================
  {
    slug: "adapter-domicile-personnes-agees",
    title: "Adapter son domicile à l'âge : guide pratique pour prévenir les chutes",
    excerpt:
      "La majorité des chutes chez les personnes âgées surviennent à domicile. Quelques adaptations simples transforment votre intérieur en un espace sûr.",
    category: "Seniors",
    readingTime: 8,
    publishedAt: "2026-01-15",
    image: "/images/curated/service-garde-nuit.jpg",
    imageAlt: "Chambre senior adaptée pour la sécurité",
    metaTitle:
      "Adapter le domicile d'une personne âgée — guide complet 2026 | Youdom Care",
    metaDescription:
      "Comment adapter le domicile d'un senior pour prévenir les chutes : salle de bain, escaliers, cuisine, chambre. Aides financières (APA, MaPrimeAdapt). Guide pratique.",
    content: [
      {
        type: "p",
        text:
          "Jusqu'à 85 ans, environ 30 % des personnes chutent chaque année. Une chute peut être le début d'une spirale : fracture du col du fémur, hospitalisation, perte d'autonomie accélérée, institutionnalisation. La prévention vaut bien mieux que la réparation.",
      },
      {
        type: "h2",
        text: "Pourquoi adapter le domicile ?",
      },
      {
        type: "p",
        text:
          "Adapter le domicile, c'est préserver dignité et autonomie, réduire l'anxiété de toute la famille, soulager les aidants et améliorer la qualité de vie au quotidien. C'est aussi nettement plus économique qu'une hospitalisation ou un placement en EHPAD.",
      },
      {
        type: "h2",
        text: "Les aménagements prioritaires par zone",
      },
      { type: "h3", text: "La salle de bain : la zone la plus dangereuse" },
      {
        type: "ul",
        items: [
          "Barres d'appui à côté des WC et dans la douche/baignoire (norme : hauteur 85 cm)",
          "Tapis antidérapants dans la baignoire, la douche et au sol",
          "Siège de douche ou de baignoire si la station debout est difficile",
          "Rehausseur de WC en cas de mobilité réduite",
          "Éclairage suffisant, sans éblouissement",
          "Pas d'eau stagnante (moisissure + risque de glissade)",
        ],
      },
      { type: "h3", text: "Les escaliers : à éviter ou sécuriser" },
      {
        type: "p",
        text:
          "Si possible, déplacez la chambre principale et la salle de bain au rez-de-chaussée. Si les escaliers restent inévitables : rampe des deux côtés, bord de marche signalé par une bande contrastée, éclairage suffisant, aucun tapis en haut ou en bas. Pour une mobilité très réduite, un monte-escalier (à partir de 3 500 €) ou une plateforme élévatrice peuvent être financés via MaPrimeAdapt et l'APA.",
      },
      { type: "h3", text: "La chambre : confort et sécurité" },
      {
        type: "ul",
        items: [
          "Lit à hauteur appropriée (45-50 cm) — pieds touchent le sol en position assise",
          "Veilleuse pour la nuit (évite d'allumer une lumière forte)",
          "Chemin dégagé jusqu'à la salle de bain — aucun obstacle",
          "Téléphone à portée de main",
          "Prise accessible pour la lampe de chevet",
        ],
      },
      { type: "h3", text: "Les zones de passage" },
      {
        type: "p",
        text:
          "Aucun tapis mobile : on les fixe ou on les retire. C'est la cause numéro un des chutes domestiques. Passages larges si déambulateur, meubles aux coins arrondis, éclairage graduel des couloirs la nuit.",
      },
      {
        type: "h2",
        text: "Aides techniques et innovations",
      },
      {
        type: "ul",
        items: [
          "Téléassistance : bouton d'alerte 24/24 en cas de chute",
          "Détecteurs de mouvement : éclairage automatique nocturne",
          "Système de monitoring pour les enfants éloignés",
          "Chaise toilette mobile si les WC ne sont pas adaptables",
          "Lève-personne pour soulager les aidants lors des transferts",
        ],
      },
      {
        type: "h2",
        text: "Budget : trois niveaux d'investissement",
      },
      {
        type: "p",
        text:
          "Minimum essentiel (500-1 000 €) : barres d'appui, tapis antidérapants, éclairage, retrait des tapis mobiles. Niveau moyen (2 000-5 000 €) : rehausseur WC, siège de douche, aménagement escalier, prises supplémentaires. Niveau confortable (5 000-15 000 €) : monte-escalier, douche aménagée, cuisine ergonomique, domotique, téléassistance.",
      },
      {
        type: "callout",
        variant: "success",
        title: "MaPrimeAdapt : la nouvelle aide depuis 2024",
        text:
          "L'État finance jusqu'à 70 % de vos travaux d'adaptation. Cumulable avec l'APA, les aides des caisses de retraite et le crédit d'impôt 25 % pour les équipements. Notre coordinatrice peut vous aider à monter le dossier.",
      },
      {
        type: "h2",
        text: "Impliquer la personne âgée dans le processus",
      },
      {
        type: "p",
        text:
          "Crucial : la personne aidée doit se sentir consultée, pas envahie. « On rend ta maison plus sûre ensemble » plutôt que « on va transformer ta maison ». Faites une évaluation conjointe : où se sent-elle pas en sécurité ? Où une chute est-elle déjà arrivée ?",
      },
      {
        type: "h2",
        text: "Conclusion",
      },
      {
        type: "p",
        text:
          "Adapter un domicile = prévenir des accidents, conserver l'autonomie, améliorer la qualité de vie. Un investissement modeste pour un bénéfice énorme. Et si l'aménagement nécessite aussi une présence humaine au quotidien, Youdom Care peut compléter le dispositif avec une aide à domicile sur mesure.",
      },
    ],
  },
  // ========================================================================
  // ARTICLE 2
  // ========================================================================
  {
    slug: "signes-perte-autonomie",
    title: "Les signes de perte d'autonomie : quand demander de l'aide ?",
    excerpt:
      "Trop tôt : ça paraît infantilisant. Trop tard : c'est la crise. Voici les signes qui indiquent qu'il est temps d'agir, sans précipitation.",
    category: "Seniors",
    readingTime: 9,
    publishedAt: "2026-02-04",
    image: "/images/curated/blog-coffee-balcony-warm.jpg",
    imageAlt: "Couple senior en moment de réflexion à la maison",
    metaTitle:
      "Signes de perte d'autonomie : quand demander une aide à domicile ? | Youdom Care",
    metaDescription:
      "Reconnaître les signes de perte d'autonomie chez un proche âgé : hygiène, repas, mobilité, isolement. Quand et comment intervenir ? Guide pratique.",
    content: [
      {
        type: "p",
        text:
          "Quand faut-il commencer à chercher une aide à domicile pour un parent âgé ? C'est l'une des questions les plus fréquentes — et l'une des plus délicates. Trop tôt, on infantilise. Trop tard, c'est la crise. Voici les signaux clairs qui indiquent qu'il est temps d'agir.",
      },
      { type: "h2", text: "Les signes physiques clairs" },
      { type: "h3", text: "Difficultés d'hygiène personnelle" },
      {
        type: "ul",
        items: [
          "Douche devenue pénible ou impossible",
          "Oubli ou négligence de la toilette",
          "Peur de chuter dans la salle de bain",
          "Vêtements peu changés, odeur corporelle inhabituelle",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Signal d'urgence",
        text:
          "L'hygiène qui se dégrade, c'est urgent : infections urinaires, infections cutanées, dénutrition liée — la santé bascule rapidement.",
      },
      { type: "h3", text: "Difficultés autour des repas" },
      {
        type: "ul",
        items: [
          "Perte de poids progressive",
          "Frigo vide ou rempli de produits périmés",
          "Repas souvent sautés ou très légers",
          "Boîtes de conserve empilées (l'art de cuisiner s'est éteint)",
          "Argent demandé pour les courses sans achat de nourriture",
        ],
      },
      { type: "h3", text: "Difficultés de mobilité" },
      {
        type: "p",
        text:
          "Phrases révélatrices : « j'ai failli tomber », « j'évite l'escalier », « je ne sors plus seul ». Apparition soudaine d'une canne ou d'un déambulateur. Besoin d'aide pour se lever d'une chaise ou du lit.",
      },
      { type: "h3", text: "Domicile abandonné" },
      {
        type: "p",
        text:
          "Poussière épaisse, miettes partout, linge accumulé jamais rangé, salle de bain qui développe de la moisissure : un domicile négligé n'est pas un détail, c'est un signal de surcharge réelle.",
      },
      { type: "h2", text: "Les signes cognitifs et psychologiques" },
      { type: "h3", text: "Oublis et confusion" },
      {
        type: "ul",
        items: [
          "Rendez-vous médicaux régulièrement oubliés",
          "Clés, lunettes, documents constamment perdus",
          "Confusion sur le jour ou la date (au-delà d'un oubli normal)",
          "Difficulté à payer les factures ou gérer le compte bancaire",
        ],
      },
      { type: "h3", text: "Isolement et dépression" },
      {
        type: "p",
        text:
          "Refus de sortir, arrêt soudain des appels aux amis, perte d'intérêt pour les activités jadis aimées (lecture, jeux, télé), phrases comme « à quoi bon », « je suis inutile ». L'isolement accélère le déclin physique ET cognitif. C'est grave, et c'est sous-estimé.",
      },
      {
        type: "h2",
        text: "Les signaux d'urgence (agir vite)",
      },
      {
        type: "ul",
        items: [
          "Chute récente, même mineure",
          "Hospitalisation récente",
          "Diagnostic neurologique (AVC, Parkinson, Alzheimer)",
          "Deuil récent (conjoint, ami proche)",
          "Refus de prendre les médicaments",
          "Comportement à risque : gaz oublié allumé, porte ouverte, errance",
        ],
      },
      {
        type: "h2",
        text: "Comment aborder le sujet avec un parent âgé ?",
      },
      {
        type: "quote",
        text:
          "Maman, je remarque que la douche devient difficile. J'aimerais qu'on explore une option : quelqu'un peut venir t'aider 2-3 h par semaine. Pas pour te remplacer — pour te soulager. Qu'en penses-tu ?",
        author: "Une approche qui fonctionne",
      },
      {
        type: "p",
        text:
          "Mauvaise approche : « Tu dois accepter de l'aide, c'est décidé. » → résistance immédiate. Bonne approche : observation factuelle + proposition modeste + question ouverte. Et si la réponse est non, on revient deux semaines plus tard.",
      },
      {
        type: "h2",
        text: "La gradualité comme stratégie",
      },
      {
        type: "p",
        text:
          "Pas besoin d'une aide 24/24 d'un coup. Commencez par 2 h hebdo de ménage. Puis ajoutez les courses. Puis l'aide à la toilette quand le lien de confiance est créé. Beaucoup de seniors acceptent l'aide quand elle est progressive et respectueuse.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Le coût n'est pas le frein qu'on imagine",
        text:
          "Avec l'APA, le crédit d'impôt 50 % et les CESU préfinancés, le coût réel d'une aide à domicile peut être divisé par 2 ou 3. Notre simulateur d'aides vous donne une estimation en 30 secondes.",
      },
    ],
  },
  // ========================================================================
  // ARTICLE 3
  // ========================================================================
  {
    slug: "bien-choisir-aide-domicile",
    title: "Comment trouver et choisir la bonne aide à domicile ?",
    excerpt:
      "Choisir une aide à domicile est une décision lourde. Voici les critères concrets pour ne pas se tromper.",
    category: "Conseils",
    readingTime: 7,
    publishedAt: "2026-02-20",
    image: "/images/curated/blog-handshake-trust.jpg",
    imageAlt: "Poignée de main de confiance entre auxiliaire et bénéficiaire",
    metaTitle:
      "Bien choisir son aide à domicile : critères, questions, red flags | Youdom Care",
    metaDescription:
      "Comment évaluer une agence d'aide à domicile : agréments, formation, continuité, transparence. 8 questions à poser et 8 signaux d'alerte.",
    content: [
      {
        type: "p",
        text:
          "Chercher une aide à domicile peut être stressant. À qui confier son proche ? Comment vérifier les compétences ? Comment s'assurer d'un bon match humain ? Voici un guide pratique pour choisir sans se tromper.",
      },
      { type: "h2", text: "Les types d'aide disponibles" },
      {
        type: "p",
        text:
          "Trois grands choix : agence prestataire (type Youdom Care), intervenant indépendant, ou solution informelle (famille, amis). Chacun a ses forces et ses limites.",
      },
      { type: "h3", text: "Agence prestataire" },
      {
        type: "ul",
        items: [
          "✅ Vérification des compétences, assurance responsabilité civile, continuité garantie",
          "✅ Remplacement immédiat en cas de maladie de l'intervenant",
          "✅ Coordinateur dédié + suivi qualité",
          "❌ Coût horaire un peu plus élevé qu'un indépendant",
        ],
      },
      { type: "h3", text: "Intervenant indépendant (mode mandataire)" },
      {
        type: "ul",
        items: [
          "✅ Souvent moins cher horaire",
          "❌ Vous êtes l'employeur (paie, congés, conflit, remplacement)",
          "❌ Pas de remplaçant garanti",
          "❌ Pas d'assurance responsabilité civile sur la prestation",
        ],
      },
      {
        type: "h2",
        text: "Les 7 critères pour évaluer une agence",
      },
      {
        type: "ol",
        items: [
          "Vérifications légales : agrément SAP, assurance RC, conformité RGPD",
          "Formation des intervenants : initiale + continue, spécialisations",
          "Continuité : la même personne, ou rotation perpétuelle ?",
          "Processus d'évaluation : visite à domicile, plan d'aide individualisé ?",
          "Disponibilité : réponse rapide, astreinte, urgences couvertes ?",
          "Transparence tarifaire : devis détaillé, aides financières expliquées",
          "Avis clients : Google, Facebook, recommandations vérifiables",
        ],
      },
      {
        type: "h2",
        text: "Les 8 questions clés à poser en entretien",
      },
      {
        type: "ol",
        items: [
          "Qui va intervenir chez nous ? Pouvons-nous le rencontrer avant ?",
          "Quelle expérience a-t-il avec [notre situation spécifique] ?",
          "Que se passe-t-il si l'intervenant est malade ?",
          "Comment fournir un retour ? Combien de temps pour ajuster ?",
          "Quelles aides financières montez-vous à notre place ?",
          "Comment garantissez-vous le secret professionnel ?",
          "Quel est le délai si on souhaite changer d'intervenant ?",
          "Avez-vous une charte qualité signée ?",
        ],
      },
      {
        type: "h2",
        text: "Les 8 red flags (signaux d'alerte)",
      },
      {
        type: "ul",
        items: [
          "L'agence ne vérifie pas les antécédents (casier judiciaire B3)",
          "Pas d'assurance responsabilité civile spécifique",
          "Pas de formation continue (« on prend tout le monde »)",
          "Rotation permanente d'intervenants",
          "Réticence à la transparence tarifaire",
          "Aucun avis client en ligne (ou que des avis très négatifs)",
          "Refus de contrat écrit détaillé",
          "Coordinateur jamais joignable, réponses vagues",
        ],
      },
      {
        type: "h2",
        text: "La première visite : un test révélateur",
      },
      {
        type: "p",
        text:
          "Observez : l'intervenant pose-t-il des questions ou applique-t-il une procédure standard ? Vous met-il à l'aise ? Demande-t-il vos préférences ou impose-t-il sa façon de faire ? La première heure donne une bonne indication de la suite.",
      },
      {
        type: "callout",
        variant: "info",
        title: "L'engagement Youdom Care",
        text:
          "Avant tout démarrage, nous présentons l'auxiliaire pressentie. Si le courant ne passe pas, nous changeons sans frais, sans question. La compatibilité humaine est non-négociable.",
      },
    ],
  },
  // ========================================================================
  // ARTICLE 4
  // ========================================================================
  {
    slug: "maltraitance-personnes-agees",
    title: "Maltraitance des personnes âgées : reconnaître et agir",
    excerpt:
      "1 million de personnes âgées maltraitées chaque année en France. Reconnaître les signes, comprendre les recours.",
    category: "Conseils",
    readingTime: 8,
    publishedAt: "2026-03-08",
    image: "/images/curated/blog-presence-bedside.jpg",
    imageAlt: "Présence rassurante au chevet d'une personne âgée",
    metaTitle:
      "Maltraitance des personnes âgées : signes et que faire | Youdom Care",
    metaDescription:
      "Reconnaître la maltraitance physique, psychologique, financière chez un proche âgé. Que faire ? Numéro 3977. Prévention et recours.",
    content: [
      {
        type: "p",
        text:
          "Les chiffres sont alarmants : 1 million de personnes âgées sont victimes de maltraitance en France chaque année. Souvent à domicile, souvent par un proche, souvent en silence. Reconnaître les signes est la première étape pour protéger.",
      },
      {
        type: "h2",
        text: "Les formes de maltraitance",
      },
      {
        type: "ul",
        items: [
          "Physique : coups, brutalité, contention abusive",
          "Psychologique : humiliation, infantilisation, chantage affectif, isolement",
          "Financière : détournement, abus de procuration, vol",
          "Négligence : repas oubliés, hygiène absente, soins non donnés",
          "Médicale : surdosage volontaire, médicaments cachés",
          "Sexuelle : agressions, gestes intrusifs",
          "Civique : empêcher de voter, de contacter ses proches",
        ],
      },
      {
        type: "h2",
        text: "Les signes d'alerte",
      },
      {
        type: "ul",
        items: [
          "Bleus, ecchymoses inexplicables ou récidivants",
          "Peur soudaine d'une personne (intervenant, proche)",
          "Comportement modifié quand cette personne est présente",
          "Dépression apparue après l'arrivée d'une nouvelle aide",
          "Argent qui disparaît, mouvements bancaires inhabituels",
          "Négligence visible (hygiène, alimentation) malgré la présence d'aide",
          "Isolement forcé (visites refusées, téléphone confisqué)",
          "Perte de poids inexpliquée",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "3977 — Numéro national contre la maltraitance",
        text:
          "Anonyme, gratuit, ouvert du lundi au vendredi de 9h à 19h. Écoute, conseils, orientation vers les bons interlocuteurs (médecin, parquet, ARS). N'hésitez jamais à appeler en cas de doute.",
      },
      {
        type: "h2",
        text: "Comment l'agence prévient la maltraitance",
      },
      {
        type: "ul",
        items: [
          "Vérification systématique du casier judiciaire B3 avant embauche, renouvelée chaque année",
          "Formation initiale à la bientraitance (méthode Humanitude, charte signée)",
          "Visites de contrôle inopinées par le coordinateur qualité",
          "Compte-rendu mensuel partagé avec la famille (avec accord du bénéficiaire)",
          "Cellule éthique interne pour traiter les signalements",
          "Communication claire des canaux de plainte au bénéficiaire",
        ],
      },
      {
        type: "h2",
        text: "Que faire en cas de suspicion ?",
      },
      {
        type: "ol",
        items: [
          "Documenter : photos des bleus avec date, mouvements bancaires anormaux, témoignages",
          "Appeler le 3977 pour évaluer la situation",
          "Si urgence vitale ou agression : 17 (police) ou 15 (SAMU)",
          "Saisir le procureur de la République (dépôt de plainte écrit)",
          "Pour la maltraitance institutionnelle : ARS et Conseil départemental",
        ],
      },
      {
        type: "p",
        text:
          "Une agence sérieuse prend les signalements très au sérieux. Si vous êtes notre client, contactez immédiatement notre coordinatrice — toute alerte est traitée dans les 24 h.",
      },
    ],
  },
  // ========================================================================
  // ARTICLE 5
  // ========================================================================
  {
    slug: "financer-aide-domicile-guide-aides",
    title: "Financer son aide à domicile : guide complet des aides 2026",
    excerpt:
      "APA, PCH, AEEH, crédit d'impôt 50 %, mutuelles, caisses retraite : tout ce qui peut financer (ou refinancer) votre aide à domicile.",
    category: "Aides financières",
    readingTime: 10,
    publishedAt: "2026-03-22",
    image: "/images/curated/aides-financieres-senior-video.jpg",
    imageAlt: "Personne âgée consultant les aides financières",
    metaTitle:
      "Financer l'aide à domicile : APA, PCH, crédit d'impôt 50 % | Guide 2026",
    metaDescription:
      "Toutes les aides pour financer une aide à domicile en 2026 : APA, PCH, AEEH, crédit d'impôt, mutuelles, caisses de retraite, CESU. Calcul et démarches.",
    content: [
      {
        type: "p",
        text:
          "L'aide à domicile représente un coût, mais peu de Français mesurent à quel point les aides existantes peuvent réduire ce coût. APA, crédit d'impôt 50 %, PCH, AEEH, caisses de retraite, mutuelles : voici le panorama complet et à jour pour 2026.",
      },
      {
        type: "h2",
        text: "L'APA — Allocation Personnalisée d'Autonomie",
      },
      {
        type: "p",
        text:
          "Versée par votre Conseil départemental aux personnes de 60 ans et plus en perte d'autonomie. L'APA finance principalement l'aide humaine à domicile. Le montant dépend de votre GIR (1 à 4) et de vos ressources.",
      },
      {
        type: "ul",
        items: [
          "GIR 1 (dépendance totale) : jusqu'à 1 955 €/mois en 2026",
          "GIR 2 : jusqu'à 1 569 €/mois",
          "GIR 3 : jusqu'à 1 134 €/mois",
          "GIR 4 (perte d'autonomie modérée) : jusqu'à 756 €/mois",
        ],
      },
      {
        type: "p",
        text:
          "Le ticket modérateur (votre participation) varie de 0 % à 90 % selon vos revenus. Une personne avec 1 000 €/mois de retraite paie souvent 10 à 30 % du plan d'aide ; au-delà de 3 000 €/mois, on monte à 90 %.",
      },
      {
        type: "h2",
        text: "Le crédit d'impôt 50 %",
      },
      {
        type: "p",
        text:
          "C'est la mesure la plus mal comprise — et la plus puissante. Tout service à la personne (SAP) ouvre droit à un crédit d'impôt de 50 % du montant payé, plafonné à 12 000 €/an (15 000 € la première année), avec majorations pour personnes âgées et handicapées.",
      },
      {
        type: "callout",
        variant: "success",
        title: "L'avance immédiate : changement majeur",
        text:
          "Depuis 2022, vous pouvez bénéficier de l'avance immédiate du crédit d'impôt. Concrètement : vous ne payez QUE 50 % de la facture, l'URSSAF avance le reste à l'agence. Plus besoin d'attendre votre déclaration de revenus.",
      },
      {
        type: "h2",
        text: "La PCH — Prestation de Compensation du Handicap",
      },
      {
        type: "p",
        text:
          "Versée par la MDPH aux personnes handicapées de moins de 60 ans (et désormais aux enfants depuis 2023). Couvre l'aide humaine, les aides techniques, les aménagements du domicile, le transport.",
      },
      {
        type: "ul",
        items: [
          "Aide humaine prestataire : tarif horaire 14,98 € en 2024 (à actualiser 2026)",
          "Pas de plafond global, mais évaluation MDPH des besoins (heures accordées)",
          "Cumul avec AAH (Allocation Adulte Handicapé) possible",
          "Cumul avec crédit d'impôt 50 % : oui, sur le reste à charge",
        ],
      },
      {
        type: "h2",
        text: "L'AEEH — pour les enfants en situation de handicap",
      },
      {
        type: "p",
        text:
          "Allocation versée par la CAF aux parents d'enfants handicapés de moins de 20 ans. Base + complément (1 à 6) selon le handicap et les besoins en aide. Cumul possible avec PCH enfant et CMG handicap.",
      },
      {
        type: "h2",
        text: "Caisses de retraite & CARSAT",
      },
      {
        type: "p",
        text:
          "Pour les retraités GIR 5-6 (autonomie préservée mais besoin de soutien), les caisses de retraite financent souvent une partie de l'aide à domicile dans une optique de prévention de la dépendance. Renseignez-vous auprès de votre caisse principale (CARSAT, AGIRC-ARRCO, MSA).",
      },
      {
        type: "h2",
        text: "Mutuelles santé",
      },
      {
        type: "p",
        text:
          "Beaucoup de mutuelles couvrent partiellement l'aide à domicile, surtout en sortie d'hospitalisation (forfait 7 à 30 jours selon contrat). Vérifiez votre tableau de garanties à la rubrique « assistance vie quotidienne ». À demander : nombre d'heures, plafond annuel, modalités de déclenchement.",
      },
      {
        type: "h2",
        text: "MaPrimeAdapt — pour les travaux d'adaptation",
      },
      {
        type: "p",
        text:
          "Nouvelle aide depuis 2024 : finance jusqu'à 70 % des travaux d'adaptation du logement (douche, monte-escalier, etc.). Cumulable avec APA, caisses de retraite et crédit d'impôt 25 % pour équipements.",
      },
      {
        type: "h2",
        text: "Notre engagement : monter les dossiers à votre place",
      },
      {
        type: "p",
        text:
          "Toutes ces aides ont leurs subtilités, leurs justificatifs, leurs délais. Notre coordinatrice monte gratuitement les dossiers pertinents pour vous (APA, PCH, mutuelle, MaPrimeAdapt). Service inclus dans notre accompagnement.",
      },
    ],
  },
  // ========================================================================
  // ARTICLE 6
  // ========================================================================
  {
    slug: "lien-social-seniors-isoles",
    title: "Maintenir le lien social chez les seniors isolés",
    excerpt:
      "L'isolement tue aussi sûrement que le tabac. Comment maintenir un lien social actif quand la mobilité décline.",
    category: "Seniors",
    readingTime: 7,
    publishedAt: "2026-04-05",
    image: "/images/curated/service-accompagnement-sorties.jpg",
    imageAlt: "Deux seniors marchant ensemble dans un parc",
    metaTitle:
      "Lutter contre l'isolement des seniors : 8 solutions concrètes | Youdom Care",
    metaDescription:
      "L'isolement social tue. Comment maintenir le lien social chez les seniors : sorties, technologies, associations, présence quotidienne. Conseils pratiques.",
    content: [
      {
        type: "p",
        text:
          "L'isolement social est l'un des principaux facteurs de risque de mortalité chez les personnes âgées — équivalent au tabagisme, supérieur à la sédentarité. Pourtant, il est largement sous-estimé, parce qu'il est silencieux et progressif.",
      },
      { type: "h2", text: "Pourquoi l'isolement est-il si dangereux ?" },
      {
        type: "ul",
        items: [
          "Augmentation de 26 % du risque de mortalité (méta-analyse de l'AARP)",
          "Risque de démence multiplié par 1,4",
          "Risque de dépression multiplié par 4",
          "Augmentation des maladies cardiovasculaires",
          "Aggravation des pathologies chroniques (diabète, hypertension)",
        ],
      },
      { type: "h2", text: "Les 8 leviers pour rester relié" },
      { type: "h3", text: "1. Sorties accompagnées régulières" },
      {
        type: "p",
        text:
          "Une auxiliaire de vie peut accompagner aux courses, au marché, à des sorties culturelles. La régularité (jour fixe) crée un rendez-vous qui structure la semaine.",
      },
      { type: "h3", text: "2. Visioconférence avec les proches" },
      {
        type: "p",
        text:
          "Configurer WhatsApp ou FaceTime sur un smartphone permet de voir les petits-enfants à distance. Cours d'initiation accessibles avec notre service Assistance informatique.",
      },
      { type: "h3", text: "3. Associations de quartier et clubs seniors" },
      {
        type: "p",
        text:
          "Cafés des âges, groupes de marche, clubs de lecture, ateliers mémoire : presque chaque arrondissement parisien et chaque commune IDF en propose. CCAS et MDS sont les bons interlocuteurs.",
      },
      { type: "h3", text: "4. Bénévolat à domicile : visiteurs bénévoles" },
      {
        type: "p",
        text:
          "Les Petits Frères des Pauvres, France Bénévolat, Secours Catholique organisent des visites régulières gratuites. Un visiteur bénévole peut compléter une aide professionnelle.",
      },
      { type: "h3", text: "5. Animaux de compagnie" },
      {
        type: "p",
        text:
          "Quand c'est possible, un chat ou un petit chien diminue significativement le sentiment de solitude. Des associations facilitent même l'adoption pour seniors avec accompagnement.",
      },
      { type: "h3", text: "6. Téléphonie sociale" },
      {
        type: "p",
        text:
          "Plusieurs plateformes (Mona Lisa, Petits Frères) proposent un appel téléphonique régulier d'un bénévole. Pour ceux qui ne peuvent plus sortir, c'est précieux.",
      },
      { type: "h3", text: "7. Accueil de jour" },
      {
        type: "p",
        text:
          "Pour les personnes désorientées (Alzheimer notamment), les accueils de jour offrent stimulation cognitive, socialisation et activités, en plus de soulager les aidants. Souvent partiellement financés.",
      },
      { type: "h3", text: "8. Présence professionnelle quotidienne" },
      {
        type: "p",
        text:
          "L'auxiliaire de vie qui passe chaque jour devient un lien stable, prévisible, attendu. Une présence qui structure le quotidien et combat activement l'isolement, surtout quand les sorties sont devenues impossibles.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Notre engagement",
        text:
          "Notre charte qualité demande à chaque auxiliaire de prendre 10 minutes de discussion à chaque visite (au-delà des tâches techniques). Le lien social est inscrit dans la mission.",
      },
    ],
  },
  // ========================================================================
  // ARTICLE 7
  // ========================================================================
  {
    slug: "gerer-dependance-quotidien",
    title: "Gérer la dépendance au quotidien : accepter, adapter, vivre",
    excerpt:
      "Apprendre à vivre avec la dépendance — la sienne ou celle d'un proche — sans renoncer à la dignité ni à la qualité de vie.",
    category: "Conseils",
    readingTime: 8,
    publishedAt: "2026-04-18",
    image: "/images/curated/qui-sommes-nous-couple-indoors.jpg",
    imageAlt: "Couple senior dans un moment serein chez eux",
    metaTitle:
      "Gérer la dépendance au quotidien : accepter et bien vivre | Youdom Care",
    metaDescription:
      "Vivre avec la dépendance ou la perte d'autonomie : accepter, adapter, préserver la dignité. Conseils pour la personne aidée et l'aidant.",
    content: [
      {
        type: "p",
        text:
          "La dépendance, c'est rarement un événement. C'est un processus, souvent long, parfois fluctuant. L'accepter, l'adapter, vivre avec — sans renoncer à la dignité ni à la joie — demande des stratégies. Voici ce qui marche.",
      },
      { type: "h2", text: "L'acceptation : un travail psychologique réel" },
      {
        type: "p",
        text:
          "La perte d'autonomie touche profondément l'identité. « Je faisais. Maintenant je dois demander. » Ce travail de deuil — du soi indépendant — est un vrai travail psychologique. Le brusquer est contre-productif.",
      },
      {
        type: "ul",
        items: [
          "Nommer ce qu'on perd, sans dramatiser ni minimiser",
          "Identifier ce qu'on garde — autonomie sur le rythme, les choix, les goûts",
          "Accepter la temporalité du processus (l'acceptation n'est pas linéaire)",
          "Solliciter un soutien psychologique si besoin (Mon Soutien Psy : remboursé 100 %)",
        ],
      },
      { type: "h2", text: "Adapter le quotidien : le pouvoir des routines" },
      {
        type: "p",
        text:
          "Quand on perd en énergie, en mobilité, en concentration, les routines deviennent des alliées. Mêmes horaires, mêmes lieux, mêmes gestes : moins de fatigue cognitive, moins d'erreurs, plus de sérénité.",
      },
      { type: "h2", text: "La dignité avant tout" },
      {
        type: "ul",
        items: [
          "Préférer ses propres vêtements à des tenues « pratiques »",
          "Maintenir le coiffeur, l'esthétique, les rituels personnels",
          "Choisir ses repas, ses goûts, ses préférences (et les faire respecter)",
          "Décider des sorties, des visites, des compagnies",
          "Refuser l'infantilisation langagière (« on va se laver ? »)",
        ],
      },
      { type: "h2", text: "Pour l'aidant : tenir sans se perdre" },
      {
        type: "p",
        text:
          "Quand on aide un proche dépendant, le risque c'est de disparaître soi-même. Quelques principes pour durer :",
      },
      {
        type: "ol",
        items: [
          "Accepter de ne pas être parfait : la culpabilité est l'ennemi de l'amour",
          "Demander de l'aide tôt — pas quand vous êtes au bout",
          "Préserver des plages strictement à vous (sport, ami, cinéma)",
          "Identifier les tâches à déléguer (souvent : nuit, toilette, ménage)",
          "Suivre un bilan de santé annuel d'aidant (gratuit auprès de votre CPAM)",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Notre rôle",
        text:
          "Notre objectif n'est pas de remplacer l'aidant familial, mais de soulager les zones les plus lourdes pour préserver la qualité de la relation. La toilette difficile, la nuit hachée, le ménage qui s'accumule : on les prend, vous gardez le café partagé, la conversation, l'amour.",
      },
      { type: "h2", text: "Vivre, pas seulement survivre" },
      {
        type: "p",
        text:
          "Une personne dépendante peut encore profiter d'un concert (assise), d'un musée (en fauteuil), d'un repas en famille, d'un weekend. La dépendance ne ferme pas la vie — elle change les modalités. Les sorties deviennent plus courtes, plus préparées, plus choisies. Mais elles existent encore.",
      },
    ],
  },
  // ========================================================================
  // ARTICLE 8
  // ========================================================================
  {
    slug: "handicap-visible-invisible",
    title: "Handicap visible et invisible : un accompagnement adapté",
    excerpt:
      "Le handicap, c'est aussi (et souvent) ce qui ne se voit pas : autisme, dépression, douleurs chroniques, troubles dys. L'accompagnement doit suivre.",
    category: "Handicap",
    readingTime: 7,
    publishedAt: "2026-05-02",
    image: "/images/curated/blog-mother-daughter-braille.jpg",
    imageAlt: "Mère et fille apprenant le braille ensemble",
    metaTitle:
      "Handicap visible et invisible : comprendre et accompagner | Youdom Care",
    metaDescription:
      "Handicaps visibles (fauteuil, cécité) ou invisibles (autisme, troubles dys, dépression) : différences, préjugés, accompagnement adapté.",
    content: [
      {
        type: "p",
        text:
          "Quand on évoque le handicap, l'image qui vient en tête est souvent le fauteuil roulant. Pourtant, 80 % des handicaps sont invisibles : autisme, troubles dys, douleurs chroniques, surdité partielle, troubles psychiques, maladies invalidantes. Comprendre cette diversité est essentiel pour bien accompagner.",
      },
      { type: "h2", text: "Le handicap visible" },
      {
        type: "p",
        text:
          "Fauteuil roulant, canne blanche, langue des signes : les handicaps visibles sont reconnus, parfois sur-représentés. Ils déclenchent (souvent) la sollicitude — mais aussi la pitié, la condescendance, parfois la peur. L'accompagnement doit viser l'autonomie maximale, pas l'assistance excessive.",
      },
      { type: "h2", text: "Le handicap invisible" },
      {
        type: "p",
        text:
          "Quand le handicap ne se voit pas, il subit la double peine : conséquences réelles ET incompréhension sociale. « Mais tu n'as pas l'air handicapé », « fais un effort », « c'est dans la tête » : phrases courantes, blessantes, fréquentes.",
      },
      { type: "h3", text: "Quelques exemples de handicaps invisibles" },
      {
        type: "ul",
        items: [
          "Trouble du spectre autistique (TSA) avec autonomie partielle",
          "Troubles dys (dyslexie, dyspraxie, dyscalculie)",
          "TDAH (trouble déficit de l'attention)",
          "Troubles psychiques (bipolarité, schizophrénie, troubles anxieux sévères)",
          "Douleurs chroniques (fibromyalgie, endométriose, lombalgie chronique)",
          "Maladies invalidantes (SEP avec poussées, lupus, Crohn)",
          "Surdité ou cécité partielles",
          "Lésions cérébrales légères post-AVC",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Le piège du handicap invisible",
        text:
          "Les personnes en situation de handicap invisible doivent souvent « prouver » leur handicap. Ce travail constant d'auto-justification est épuisant et représente une charge supplémentaire à leur situation déjà difficile.",
      },
      { type: "h2", text: "L'accompagnement adapté" },
      {
        type: "p",
        text:
          "Pour le handicap visible, on adapte l'environnement physique. Pour le handicap invisible, il faut adapter la cadence, la communication, l'imprévu. Les deux demandent expertise — mais des expertises différentes.",
      },
      { type: "h3", text: "Pour le handicap moteur visible" },
      {
        type: "ul",
        items: [
          "Manutention sécurisée (formation gestes spécifiques)",
          "Accessibilité du logement (aménagements, rampes, douche italienne)",
          "Transport adapté (véhicule PMR)",
          "Aide humaine pour les actes essentiels",
        ],
      },
      { type: "h3", text: "Pour le handicap invisible" },
      {
        type: "ul",
        items: [
          "Communication adaptée (clarté, prévisibilité, écrit pour TSA)",
          "Cadre stable (mêmes horaires, mêmes intervenants)",
          "Respect des rythmes (fatigue cognitive, pauses sensorielles)",
          "Soutien aux démarches (concentration parfois compromise)",
          "Accompagnement aux RDV médicaux et thérapeutiques",
        ],
      },
      { type: "h2", text: "Notre approche : une écoute approfondie" },
      {
        type: "p",
        text:
          "Avant tout démarrage, notre coordinatrice prend le temps d'écouter : qu'est-ce qui vous handicape concrètement ? Qu'est-ce qui vous aide ? Qu'est-ce qui vous épuise ? Pas de présomption, pas de catalogue. Chaque accompagnement est singulier.",
      },
    ],
  },
];

export const articlesByCategory = articles.reduce<Record<string, Article[]>>(
  (acc, article) => {
    (acc[article.category] ??= []).push(article);
    return acc;
  },
  {},
);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const sameCat = (a.category === current.category ? -1 : 0)
        - (b.category === current.category ? -1 : 0);
      if (sameCat !== 0) return sameCat;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, limit);
}

export function formatPublishDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
