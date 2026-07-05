/**
 * Villes desservies par Youdom Care en Île-de-France.
 * Source de vérité unique pour les pages agences locales, le SEO local
 * (Schema.org LocalBusiness), le sitemap, le footer et le maillage interne.
 *
 * Youdom Care — aide à domicile — siège 61 rue de Lyon, 75012 Paris.
 * Intervention à Paris intra-muros et en petite couronne (92, 93, 94).
 *
 * Chaque zone possède un contenu UNIQUE (hôpitaux, quartiers, transports,
 * contexte démographique, FAQ et aides locales réels) afin d'éviter tout
 * contenu dupliqué et de renforcer le référencement local.
 */

export type LocalFaq = { question: string; answer: string };

export type Agency = {
  slug: string;
  city: string;
  shortName: string;
  zipCodes: string[];
  department: { code: string; name: string };
  region: "Paris" | "Petite couronne";
  geo: { lat: number; lng: number };
  population?: number;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  localContext: string;
  neighborhoods: string[];
  hospitals: string[];
  transport: string[];
  highlights: string[];
  localAid: string;
  faq: LocalFaq[];
  testimonial?: { quote: string; author: string };
};

export const agencies: Agency[] = [
  {
    slug: "paris-12",
    city: "Paris 12ᵉ",
    shortName: "Paris 12",
    zipCodes: ["75012"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8403, lng: 2.3956 },
    population: 142000,
    metaTitle: "Aide à domicile Paris 12ᵉ — Auxiliaires de vie Bercy Nation",
    metaDescription:
      "Youdom Care, votre agence d'aide à domicile dans le 12ᵉ (siège rue de Lyon) : auxiliaires de vie à Bercy, Daumesnil, Nation, Picpus. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile dans le 12ᵉ arrondissement de Paris",
    heroSubtitle:
      "Notre siège est rue de Lyon, à deux pas de la gare de Lyon : une équipe de proximité qui connaît chaque rue du 12ᵉ.",
    intro:
      "Youdom Care est né dans le 12ᵉ arrondissement, rue de Lyon. C'est ici, entre Bercy et Daumesnil, que nos coordinatrices reçoivent les familles et forment nos auxiliaires de vie. Autant dire que nous connaissons cet arrondissement mieux que personne.",
    localContext:
      "Le 12ᵉ arrondissement compte environ 142 000 habitants et une part importante de seniors installés de longue date dans les immeubles haussmanniens de Daumesnil, Bel-Air et Picpus. Le quartier de Bercy, plus récent, accueille de jeunes familles qui deviennent aidantes pour des parents âgés vivant seuls. La présence du bois de Vincennes et de grands axes comme l'avenue Daumesnil facilite la mobilité, mais l'isolement des personnes très âgées reste réel dans les rues plus calmes autour de la place Félix-Éboué. Une présence locale permet ici de réagir vite, notamment lors des sorties de Saint-Antoine, et d'assurer une continuité que les grandes plateformes nationales ne garantissent pas.",
    neighborhoods: ["Bercy", "Daumesnil", "Bel-Air", "Picpus", "Nation", "Reuilly", "Aligre", "Gare de Lyon"],
    hospitals: [
      "Hôpital Saint-Antoine (AP-HP)",
      "Hôpital Armand-Trousseau",
      "Hôpital des Quinze-Vingts",
    ],
    transport: ["Métro 1 (Nation, Reuilly-Diderot)", "Métro 8 (Daumesnil, Montgallet)", "Ligne A du RER (Nation)", "Ligne 6 (Bel-Air, Dugommier)"],
    highlights: [
      "Siège rue de Lyon : coordination et interventions en moins de 20 minutes dans tout l'arrondissement",
      "Partenariats de proximité avec les cabinets infirmiers d'Aligre et de Picpus",
      "Accompagnements réguliers en sortie de l'hôpital Saint-Antoine",
    ],
    localAid:
      "À Paris, l'APA est instruite par le CASVP (Centre d'action sociale de la Ville de Paris) via la section du 12ᵉ, rue Charenton. Le CCAS parisien propose aussi l'aide-ménagère municipale et des chèques Paris Domicile ; nos coordinatrices vous aident à monter le dossier.",
    faq: [
      {
        question: "Intervenez-vous rapidement après une sortie de l'hôpital Saint-Antoine ?",
        answer:
          "Oui. Saint-Antoine étant à quelques minutes de notre siège rue de Lyon, nous mettons en place un accompagnement de retour d'hospitalisation dans le 12ᵉ en 24 à 48 h, aide à la toilette et préparation des repas comprises.",
      },
      {
        question: "Quels quartiers du 12ᵉ sont couverts par vos auxiliaires ?",
        answer:
          "L'ensemble de l'arrondissement : Bercy, Daumesnil, Bel-Air, Picpus, Nation, Reuilly, le quartier d'Aligre et les abords de la gare de Lyon. Nos équipes se déplacent à pied ou en métro selon les rues.",
      },
      {
        question: "Comment obtenir l'APA quand on habite le 12ᵉ ?",
        answer:
          "La demande se dépose auprès de la section du CASVP du 12ᵉ. Nous vous aidons à constituer le dossier et à faire le lien avec l'équipe médico-sociale APA de la Ville de Paris qui évalue le GIR à domicile.",
      },
    ],
    testimonial: {
      quote:
        "Ma mère habite rue de Picpus depuis quarante ans. L'auxiliaire de Youdom vient chaque matin, toujours la même personne. C'est rassurant d'avoir une équipe du quartier.",
      author: "Sylvie, fille d'une bénéficiaire, Paris 12ᵉ",
    },
  },
  {
    slug: "paris-15",
    city: "Paris 15ᵉ",
    shortName: "Paris 15",
    zipCodes: ["75015"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8417, lng: 2.2998 },
    population: 232000,
    metaTitle: "Aide à domicile Paris 15ᵉ — Auxiliaire de vie Vaugirard",
    metaDescription:
      "Aide à domicile pour seniors et personnes en situation de handicap dans le 15ᵉ : Vaugirard, Convention, Beaugrenelle. Youdom Care, devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile dans le 15ᵉ arrondissement de Paris",
    heroSubtitle:
      "Le plus peuplé des arrondissements parisiens, où nos auxiliaires interviennent chaque jour de Vaugirard à Beaugrenelle.",
    intro:
      "Avec plus de 230 000 habitants, le 15ᵉ est l'arrondissement le plus peuplé de Paris et l'un de ceux où la demande d'aide à domicile est la plus forte. Youdom Care y intervient quotidiennement, du quartier Convention aux tours de Beaugrenelle.",
    localContext:
      "Le 15ᵉ est un arrondissement contrasté : les immeubles anciens de Vaugirard et de Saint-Lambert abritent une population âgée souvent propriétaire, tandis que le Front-de-Seine et Beaugrenelle concentrent des logements plus verticaux où l'isolement des personnes âgées en étage élevé pose des défis particuliers. La proximité de l'Hôpital Européen Georges-Pompidou et de Necker structure une offre de soins dense, mais le maillage étendu de l'arrondissement rend la ponctualité difficile pour des intervenants venus de loin. Une équipe implantée localement permet d'enchaîner plusieurs visites dans la journée sans temps de trajet excessif, ce qui est décisif pour les toilettes du matin et les couchers du soir.",
    neighborhoods: ["Vaugirard", "Convention", "Beaugrenelle", "Saint-Lambert", "Necker", "Grenelle", "Javel", "Front-de-Seine"],
    hospitals: [
      "Hôpital Européen Georges-Pompidou (HEGP)",
      "Hôpital Necker-Enfants malades",
      "Institut Mutualiste Montsouris (à proximité)",
    ],
    transport: ["Métro 12 (Convention, Vaugirard)", "Métro 8 (Balard, Lourmel)", "Métro 10 (Javel, Charles Michels)", "RER C (Boulevard Victor)"],
    highlights: [
      "Interventions coordonnées pour éviter les temps morts dans un arrondissement très étendu",
      "Accompagnement de retour à domicile depuis l'HEGP et Necker",
      "Auxiliaires habitués aux immeubles à étages du Front-de-Seine",
    ],
    localAid:
      "Comme partout à Paris, l'APA à domicile est gérée par le CASVP, section du 15ᵉ, rue Péclet. La Ville propose également l'allocation Ville de Paris et l'aide-ménagère aux personnes âgées ; nous orientons vers le bon interlocuteur selon vos ressources.",
    faq: [
      {
        question: "Assurez-vous plusieurs passages par jour dans le 15ᵉ ?",
        answer:
          "Oui. Grâce à notre présence dense dans l'arrondissement, nous organisons matin, midi et soir sans que la personne dépende d'un intervenant venu de l'autre bout de Paris. C'est essentiel pour les toilettes et les repas.",
      },
      {
        question: "Prenez-vous en charge les sorties de l'Hôpital Georges-Pompidou ?",
        answer:
          "Absolument. Nous coordonnons le retour à domicile depuis l'HEGP : mise en place du matériel, aide à la toilette, courses et repas, en lien avec l'assistante sociale de l'hôpital.",
      },
      {
        question: "Où déposer une demande d'APA dans le 15ᵉ ?",
        answer:
          "Auprès de la section du CASVP du 15ᵉ arrondissement, rue Péclet. Nous vous accompagnons dans la constitution du dossier et l'évaluation du GIR à domicile.",
      },
    ],
    testimonial: {
      quote:
        "Mon père vit seul au 14ᵉ étage d'une tour de Beaugrenelle. Trouver une aide fiable qui vient tous les jours était compliqué, jusqu'à Youdom Care.",
      author: "Karim, aidant familial, Paris 15ᵉ",
    },
  },
  {
    slug: "paris-13",
    city: "Paris 13ᵉ",
    shortName: "Paris 13",
    zipCodes: ["75013"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8322, lng: 2.3554 },
    population: 184000,
    metaTitle: "Aide à domicile Paris 13ᵉ — Auxiliaire de vie Place d'Italie",
    metaDescription:
      "Youdom Care accompagne seniors et familles dans le 13ᵉ : Place d'Italie, Olympiades, Butte aux Cailles. Intervenants polyglottes. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile dans le 13ᵉ arrondissement de Paris",
    heroSubtitle:
      "De la place d'Italie aux Olympiades, un accompagnement à domicile attentif à la diversité du quartier.",
    intro:
      "Le 13ᵉ arrondissement mêle grands ensembles des Olympiades, ruelles de la Butte aux Cailles et immeubles récents de Paris Rive Gauche. Youdom Care y propose un accompagnement adapté à une population particulièrement diverse.",
    localContext:
      "Le 13ᵉ arrondissement se distingue par son important quartier asiatique autour des Olympiades et de la porte de Choisy, où de nombreux seniors ne parlent pas couramment le français. Youdom Care mobilise des intervenants polyglottes pour établir un lien de confiance, condition indispensable à l'acceptation d'une aide à la toilette ou à la prise des repas. À côté, la Butte aux Cailles et le quartier des Gobelins abritent une population âgée plus ancienne, tandis que Paris Rive Gauche attire de jeunes actifs aidants. La proximité immédiate de la Pitié-Salpêtrière, l'un des plus grands hôpitaux d'Europe, génère un flux régulier de retours à domicile qui exigent réactivité et coordination avec les services sociaux.",
    neighborhoods: ["Place d'Italie", "Olympiades", "Tolbiac", "Butte aux Cailles", "Gobelins", "Bibliothèque", "Nationale", "Chevaleret"],
    hospitals: [
      "Groupe hospitalier Pitié-Salpêtrière (AP-HP)",
      "Hôpital de la Pitié-Salpêtrière — service gériatrie",
      "Clinique Jeanne d'Arc (Saint-Mandé, à proximité)",
    ],
    transport: ["Métro 6 (Place d'Italie, Chevaleret)", "Métro 7 (Tolbiac, Olympiades)", "Métro 5 (Campo-Formio)", "RER C (Bibliothèque F. Mitterrand)"],
    highlights: [
      "Intervenants parlant mandarin, cantonais, vietnamien ou khmer pour le quartier asiatique",
      "Coordination des sorties de la Pitié-Salpêtrière toute proche",
      "Habitude des grands ensembles des Olympiades comme des maisons de la Butte aux Cailles",
    ],
    localAid:
      "L'APA parisienne est instruite par la section du CASVP du 13ᵉ, boulevard Auguste-Blanqui. Des permanences d'accès aux droits existent aussi aux Olympiades ; nous vous aidons à préparer votre dossier et à trouver un interprète si besoin.",
    faq: [
      {
        question: "Proposez-vous des auxiliaires parlant une langue asiatique dans le 13ᵉ ?",
        answer:
          "Oui. Pour les familles des Olympiades et de la porte de Choisy, nous mobilisons dans la mesure du possible des intervenants parlant mandarin, cantonais ou vietnamien, afin de créer un vrai lien de confiance.",
      },
      {
        question: "Gérez-vous les retours de la Pitié-Salpêtrière ?",
        answer:
          "Oui, c'est fréquent dans le 13ᵉ. La Pitié-Salpêtrière étant limitrophe, nous mettons en place l'aide à domicile dès la sortie, en coordination avec le service social de l'hôpital.",
      },
      {
        question: "À qui s'adresser pour l'APA dans le 13ᵉ ?",
        answer:
          "À la section du CASVP du 13ᵉ arrondissement, boulevard Auguste-Blanqui. Nous vous accompagnons dans le montage du dossier, y compris avec un interprète si nécessaire.",
      },
    ],
    testimonial: {
      quote:
        "Ma grand-mère ne parle que le cantonais. L'auxiliaire de Youdom peut échanger avec elle, c'est un soulagement pour toute la famille.",
      author: "Lucie, petite-fille d'une bénéficiaire, Paris 13ᵉ",
    },
  },
  {
    slug: "paris-14",
    city: "Paris 14ᵉ",
    shortName: "Paris 14",
    zipCodes: ["75014"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8331, lng: 2.3263 },
    population: 138000,
    metaTitle: "Aide à domicile Paris 14ᵉ — Auxiliaire de vie Montparnasse",
    metaDescription:
      "Aide à domicile dans le 14ᵉ : Montparnasse, Pernety, Alésia, Plaisance. Youdom Care accompagne seniors et aidants. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile dans le 14ᵉ arrondissement de Paris",
    heroSubtitle:
      "De Montparnasse à Alésia, un accompagnement humain pour les seniors et les familles du sud parisien.",
    intro:
      "Le 14ᵉ arrondissement, calme et résidentiel, compte de nombreuses personnes âgées vivant seules dans les immeubles de Pernety, Plaisance et Alésia. Youdom Care y assure des interventions régulières et de confiance.",
    localContext:
      "Le 14ᵉ arrondissement présente un tissu résidentiel dense où cohabitent seniors propriétaires de longue date et jeunes familles installées récemment autour d'Alésia et de Denfert-Rochereau. Les rues pavillonnaires de la Cité universitaire et de la villa Seurat contrastent avec les grands immeubles de la porte de Vanves, mais partout la question du maintien à domicile des personnes très âgées se pose. La présence de Cochin, de Sainte-Anne et de La Rochefoucauld structure un pôle santé important, notamment pour les pathologies neurologiques et psychiatriques. La proximité de Montrouge et Malakoff permet à nos équipes d'assurer une continuité au-delà du périphérique lorsque les familles déménagent en petite couronne.",
    neighborhoods: ["Montparnasse", "Pernety", "Plaisance", "Alésia", "Denfert-Rochereau", "Petit-Montrouge", "Jean-Moulin", "Porte de Vanves"],
    hospitals: [
      "Hôpital Cochin (AP-HP)",
      "GHU Paris — Hôpital Sainte-Anne",
      "Hôpital La Rochefoucauld",
    ],
    transport: ["Métro 4 (Alésia, Mouton-Duvernet)", "Métro 6 (Denfert-Rochereau, Pernety)", "Métro 13 (Pernety, Plaisance)", "RER B (Denfert-Rochereau)"],
    highlights: [
      "Expérience de l'accompagnement des troubles cognitifs (proximité de Sainte-Anne)",
      "Interventions régulières pour seniors isolés à Pernety et Plaisance",
      "Continuité assurée vers Montrouge et Malakoff",
    ],
    localAid:
      "Dans le 14ᵉ, l'APA relève de la section du CASVP située rue de l'Aude. La mairie d'arrondissement dispose d'un pôle seniors et de clubs Émeraude ; nous vous orientons vers l'aide-ménagère municipale et l'APA selon votre situation.",
    faq: [
      {
        question: "Accompagnez-vous les personnes atteintes de troubles cognitifs dans le 14ᵉ ?",
        answer:
          "Oui. La proximité de l'hôpital Sainte-Anne nous amène à intervenir souvent auprès de personnes présentant des troubles neurologiques ou psychiques. Nos auxiliaires sont formés à un accompagnement patient et sécurisant.",
      },
      {
        question: "Couvrez-vous aussi Montrouge et Malakoff depuis le 14ᵉ ?",
        answer:
          "Oui. Nos équipes du 14ᵉ interviennent naturellement au-delà de la porte d'Orléans et de la porte de Vanves, à Montrouge et Malakoff, pour assurer la continuité de l'accompagnement.",
      },
      {
        question: "Comment demander l'APA dans le 14ᵉ arrondissement ?",
        answer:
          "La demande se dépose à la section du CASVP du 14ᵉ, rue de l'Aude. Nous vous aidons à constituer le dossier et à préparer la visite d'évaluation à domicile.",
      },
    ],
    testimonial: {
      quote:
        "Après le diagnostic de mon mari suivi à Sainte-Anne, Youdom Care nous a proposé une auxiliaire vraiment formée aux troubles de la mémoire. Cela change tout au quotidien.",
      author: "Danièle, épouse aidante, Paris 14ᵉ",
    },
  },
  {
    slug: "boulogne-billancourt",
    city: "Boulogne-Billancourt",
    shortName: "Boulogne",
    zipCodes: ["92100"],
    department: { code: "92", name: "Hauts-de-Seine" },
    region: "Petite couronne",
    geo: { lat: 48.8351, lng: 2.2412 },
    population: 122000,
    metaTitle: "Aide à domicile Boulogne-Billancourt (92) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Boulogne-Billancourt : aide à domicile pour seniors et enfants en situation de handicap. Marcel-Sembat, Jean-Jaurès, Pont de Sèvres. Devis 24 h.",
    heroTitle: "Aide à domicile à Boulogne-Billancourt",
    heroSubtitle:
      "La plus grande ville des Hauts-de-Seine, où nos auxiliaires accompagnent seniors et familles avec la même exigence.",
    intro:
      "Boulogne-Billancourt, plus grande commune des Hauts-de-Seine, est à la fois résidentielle et très active. Youdom Care y répond à une forte demande d'aide à domicile, pour les seniors comme pour les enfants en situation de handicap.",
    localContext:
      "Boulogne-Billancourt compte environ 122 000 habitants et une population contrastée : familles aisées des quartiers Parchamp-Albert-Kahn, actifs des nouveaux immeubles de l'île Seguin et du Trapèze, seniors installés autour de Jean-Jaurès. Cette diversité génère des besoins variés, du portage de repas pour personnes âgées isolées à la garde d'enfants en situation de handicap dont les parents travaillent à Paris. L'hôpital Ambroise-Paré, à cheval sur la ville, constitue un pôle de référence pour les sorties d'hospitalisation. La densité de la circulation aux heures de pointe, entre le pont de Sèvres et la porte de Saint-Cloud, rend indispensable une équipe locale capable d'être ponctuelle sans dépendre du trafic parisien.",
    neighborhoods: ["Marcel-Sembat", "Jean-Jaurès", "Pont de Sèvres", "Billancourt", "Parchamp", "Le Trapèze", "Silly-Gallieni", "Route de la Reine"],
    hospitals: [
      "Hôpital Ambroise-Paré (AP-HP)",
      "Hôpital Marie-Lannelongue (Le Plessis-Robinson, à proximité)",
      "Clinique du Trocadéro / Hôpital privé du Val-de-Seine",
    ],
    transport: ["Métro 9 (Marcel-Sembat, Billancourt, Pont de Sèvres)", "Métro 10 (Boulogne — Jean-Jaurès)", "Tramway T2 (Meudon-sur-Seine, à proximité)", "Bus 52 et 126"],
    highlights: [
      "Garde d'enfants en situation de handicap pour parents actifs",
      "Retours à domicile coordonnés avec l'hôpital Ambroise-Paré",
      "Équipe locale ponctuelle malgré le trafic pont de Sèvres",
    ],
    localAid:
      "À Boulogne-Billancourt, l'APA et la PCH sont instruites par le Conseil départemental des Hauts-de-Seine (via la Maison des solidarités). Le CCAS boulonnais propose aussi des aides facultatives aux seniors ; nos coordinatrices vous guident dans les démarches.",
    faq: [
      {
        question: "Proposez-vous la garde d'enfants en situation de handicap à Boulogne ?",
        answer:
          "Oui. De nombreux parents boulonnais travaillent à Paris ; nous mettons en place une garde adaptée à domicile, avec des intervenants formés au handicap, en relais de l'école ou de l'établissement médico-social.",
      },
      {
        question: "Intervenez-vous après une hospitalisation à Ambroise-Paré ?",
        answer:
          "Oui. Nous organisons le retour à domicile depuis Ambroise-Paré : aide à la toilette, repas, courses et surveillance, en lien avec le service social de l'hôpital.",
      },
      {
        question: "Qui verse l'APA à Boulogne-Billancourt ?",
        answer:
          "C'est le Conseil départemental des Hauts-de-Seine (92) qui instruit et verse l'APA. Nous vous aidons à déposer le dossier auprès de la Maison des solidarités et à préparer l'évaluation du GIR.",
      },
    ],
    testimonial: {
      quote:
        "Notre fils est en situation de handicap et nous travaillons tous les deux à La Défense. L'auxiliaire de Youdom vient le chercher et reste avec lui jusqu'à notre retour.",
      author: "Émilie et Thomas, parents, Boulogne-Billancourt",
    },
  },
  {
    slug: "vincennes",
    city: "Vincennes",
    shortName: "Vincennes",
    zipCodes: ["94300"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8478, lng: 2.4378 },
    population: 50000,
    metaTitle: "Aide à domicile Vincennes (94) — Auxiliaire de vie seniors",
    metaDescription:
      "Youdom Care à Vincennes : aide à domicile haut de gamme pour seniors autonomes ou dépendants. Centre-ville, château, bois de Vincennes. Devis gratuit 24 h.",
    heroTitle: "Aide à domicile à Vincennes",
    heroSubtitle:
      "Aux portes de Paris, un accompagnement flexible et attentif pour les seniors d'une ville prisée.",
    intro:
      "Vincennes, ville résidentielle très recherchée en bordure du bois, compte une population senior nombreuse et souvent propriétaire. Youdom Care y propose des interventions sur mesure, du simple coup de main aux accompagnements de forte dépendance.",
    localContext:
      "Vincennes est l'une des communes les plus denses de France, avec près de 50 000 habitants sur un territoire très compact. Sa population âgée, souvent installée depuis des décennies dans les immeubles autour de la mairie et de la rue de Fontenay, tient à rester chez elle le plus longtemps possible. La qualité de vie liée au bois de Vincennes et au château attire aussi des retraités actifs qui recherchent des services ponctuels et haut de gamme. La proximité immédiate de l'hôpital d'instruction des armées Bégin, à Saint-Mandé, facilite le suivi médical. Une agence de proximité comme la nôtre permet d'ajuster finement les horaires, y compris pour des accompagnements aux courses au marché de Vincennes ou aux rendez-vous médicaux.",
    neighborhoods: ["Centre-ville", "République", "Fontenay", "Château", "Diderot", "Domaine du Bois", "Marché Vincennes", "Cœuilly"],
    hospitals: [
      "Hôpital d'instruction des armées Bégin (Saint-Mandé)",
      "Clinique de Vincennes",
      "Hôpital Les Murets / groupe hospitalier de proximité",
    ],
    transport: ["Métro 1 (Château de Vincennes, Bérault)", "RER A (Vincennes)", "Bus 56 et 118", "Bus 210 vers Nogent"],
    highlights: [
      "Accompagnements haut de gamme pour seniors autonomes ou dépendants",
      "Suivi médical facilité par la proximité de l'hôpital Bégin",
      "Aide aux courses au marché de Vincennes et sorties au bois",
    ],
    localAid:
      "À Vincennes, l'APA relève du Conseil départemental du Val-de-Marne (94). Le CCAS de Vincennes gère par ailleurs le portage de repas, la téléalarme et des aides ponctuelles ; nous vous aidons à articuler ces dispositifs avec nos prestations.",
    faq: [
      {
        question: "Proposez-vous des interventions ponctuelles à Vincennes ?",
        answer:
          "Oui. Beaucoup de seniors vincennois sont autonomes et souhaitent seulement un accompagnement pour les courses au marché, le ménage ou un rendez-vous médical. Nous proposons des prestations à la carte, sans engagement de volume minimal excessif.",
      },
      {
        question: "L'hôpital Bégin est-il proche de vos zones d'intervention ?",
        answer:
          "Oui, l'hôpital Bégin est à Saint-Mandé, à quelques minutes de Vincennes. Nous facilitons l'accompagnement aux consultations et organisons les retours à domicile après hospitalisation.",
      },
      {
        question: "Qui finance l'APA à Vincennes ?",
        answer:
          "L'APA est versée par le Conseil départemental du Val-de-Marne. Nous vous accompagnons dans le dépôt du dossier et dans la coordination avec le CCAS de Vincennes pour la téléalarme et le portage de repas.",
      },
    ],
    testimonial: {
      quote:
        "Je suis encore autonome mais je n'aime plus porter mes courses. L'auxiliaire de Youdom m'accompagne au marché deux fois par semaine, on discute, c'est agréable.",
      author: "Monsieur R., 82 ans, Vincennes",
    },
  },
  {
    slug: "saint-mande",
    city: "Saint-Mandé",
    shortName: "Saint-Mandé",
    zipCodes: ["94160"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8408, lng: 2.4189 },
    population: 23000,
    metaTitle: "Aide à domicile Saint-Mandé (94) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Saint-Mandé : aide à domicile pour seniors en bordure du bois de Vincennes. Interventions ponctuelles ou régulières. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Saint-Mandé",
    heroSubtitle:
      "Une commune dense et résidentielle où nos auxiliaires accompagnent les seniors au plus près de chez eux.",
    intro:
      "Saint-Mandé, petite commune très prisée entre Paris 12ᵉ et le bois de Vincennes, abrite de nombreux seniors actifs. Youdom Care y intervient de façon souple, en relais direct de notre siège tout proche.",
    localContext:
      "Saint-Mandé, avec ses 23 000 habitants sur un territoire minuscule, est l'une des villes les plus denses d'Île-de-France. Sa population, plutôt aisée et vieillissante, réside dans des immeubles bourgeois autour de l'avenue de Paris et de la place Lucien-Delahaye. Beaucoup de seniors y vivent seuls après le départ de leurs enfants et souhaitent un accompagnement discret qui préserve leur autonomie. La présence de l'hôpital Bégin, en limite de commune, et la proximité immédiate de notre siège rue de Lyon nous permettent d'assurer des interventions très réactives, sans temps de trajet. C'est un atout majeur pour les toilettes du matin et les accompagnements médicaux du groupe hospitalier voisin.",
    neighborhoods: ["Avenue de Paris", "Mairie", "Place Lucien-Delahaye", "Bérault", "Cailletet", "Alphand", "Tourelle", "Bois de Vincennes"],
    hospitals: [
      "Hôpital d'instruction des armées Bégin",
      "Clinique de Saint-Mandé",
      "Hôpital Saint-Antoine (Paris 12ᵉ, à proximité)",
    ],
    transport: ["Métro 1 (Saint-Mandé, Bérault)", "RER A (Vincennes, à proximité)", "Bus 46 et 86", "Bus 325 vers Nation"],
    highlights: [
      "Réactivité maximale grâce à la proximité de notre siège rue de Lyon",
      "Accompagnement discret pour seniors soucieux de leur autonomie",
      "Coordination directe avec l'hôpital Bégin voisin",
    ],
    localAid:
      "À Saint-Mandé, l'APA est instruite par le Conseil départemental du Val-de-Marne (94). Le CCAS de Saint-Mandé propose téléassistance, portage de repas et registre canicule ; nous vous aidons à combiner ces aides avec un accompagnement humain.",
    faq: [
      {
        question: "Êtes-vous réactifs pour intervenir à Saint-Mandé ?",
        answer:
          "Très. Saint-Mandé jouxte le 12ᵉ où se trouve notre siège rue de Lyon. Nos auxiliaires y accèdent en quelques minutes, ce qui garantit ponctualité et remplacement rapide en cas d'imprévu.",
      },
      {
        question: "Quel type d'accompagnement proposez-vous aux seniors de Saint-Mandé ?",
        answer:
          "Un accompagnement discret et personnalisé : aide à la toilette, préparation des repas, ménage, sorties au bois de Vincennes ou accompagnement aux consultations à l'hôpital Bégin.",
      },
      {
        question: "Où faire une demande d'APA à Saint-Mandé ?",
        answer:
          "Auprès du Conseil départemental du Val-de-Marne, avec l'appui du CCAS de Saint-Mandé. Nous vous aidons à monter le dossier et à préparer l'évaluation à domicile.",
      },
    ],
    testimonial: {
      quote:
        "Habitant place Lucien-Delahaye, je voulais quelqu'un de fiable et discret. Youdom a su respecter mon indépendance tout en étant présent chaque matin.",
      author: "Madame G., 79 ans, Saint-Mandé",
    },
  },
  {
    slug: "ivry-sur-seine",
    city: "Ivry-sur-Seine",
    shortName: "Ivry",
    zipCodes: ["94200"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8137, lng: 2.3879 },
    population: 64000,
    metaTitle: "Aide à domicile Ivry-sur-Seine (94) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Ivry-sur-Seine : aide à domicile pour seniors, personnes handicapées et familles. Hôpital Charles-Foix à proximité. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Ivry-sur-Seine",
    heroSubtitle:
      "Une ville en pleine transformation où nous accompagnons toutes les générations à domicile.",
    intro:
      "Ivry-sur-Seine se réinvente autour d'Ivry Confluences et du quartier du Plateau. Youdom Care y accompagne une population variée : seniors, personnes en situation de handicap et familles ayant besoin d'un relais quotidien.",
    localContext:
      "Ivry-sur-Seine, environ 64 000 habitants, est une ville populaire et solidaire en pleine mutation urbaine, entre les anciennes cités du Petit-Ivry et les nouveaux quartiers d'Ivry Confluences. Sa population mêle familles modestes, seniors installés de longue date et nouveaux arrivants. La présence sur son territoire de l'hôpital Charles-Foix, l'un des plus importants sites gériatriques d'Île-de-France, fait d'Ivry un lieu de référence pour la prise en charge du grand âge. De nombreuses familles ivryennes accompagnent un parent en perte d'autonomie ou un proche en situation de handicap, avec des ressources parfois limitées ; l'articulation avec les aides du Val-de-Marne y est donc essentielle, et nous mettons un point d'honneur à la maîtriser.",
    neighborhoods: ["Centre-ville", "Petit-Ivry", "Ivry-Port", "Le Plateau", "Monmousseau", "Gagarine", "Ivry Confluences", "Marat"],
    hospitals: [
      "Hôpital Charles-Foix (AP-HP, gériatrie)",
      "Hôpital de la Pitié-Salpêtrière (Paris 13ᵉ, à proximité)",
      "Institut Robert-Merle d'Aubigné (à proximité)",
    ],
    transport: ["Métro 7 (Mairie d'Ivry, Pierre et Marie Curie)", "RER C (Ivry-sur-Seine)", "Tramway T3a (à proximité, Porte de Choisy)", "Bus 125 et 325"],
    highlights: [
      "Expertise gériatrique renforcée par la proximité de Charles-Foix",
      "Accompagnement des familles avec un proche en situation de handicap",
      "Bonne connaissance des aides du Val-de-Marne pour budgets contraints",
    ],
    localAid:
      "À Ivry-sur-Seine, l'APA et la PCH sont versées par le Conseil départemental du Val-de-Marne (94). Le CCAS d'Ivry est très actif (portage de repas, aide-ménagère, téléassistance Val-de-Marne) ; nous vous aidons à mobiliser tous vos droits.",
    faq: [
      {
        question: "L'hôpital Charles-Foix est-il proche de vos interventions à Ivry ?",
        answer:
          "Oui, Charles-Foix est situé à Ivry même. Ce site gériatrique de référence oriente souvent vers un maintien à domicile ; nous prenons le relais dès la sortie, en lien avec les équipes hospitalières.",
      },
      {
        question: "Accompagnez-vous les personnes en situation de handicap à Ivry ?",
        answer:
          "Oui. Nous intervenons auprès d'adultes et d'enfants en situation de handicap, avec des prestations financées par la PCH lorsque c'est possible. Nous vous aidons à constituer le dossier auprès de la MDPH du Val-de-Marne.",
      },
      {
        question: "Comment obtenir une aide financière à domicile à Ivry ?",
        answer:
          "Selon votre situation, l'APA ou la PCH sont versées par le Conseil départemental du Val-de-Marne. Le CCAS d'Ivry complète avec des aides locales. Nos coordinatrices vous orientent vers le bon dispositif.",
      },
    ],
    testimonial: {
      quote:
        "Mon père sortait de Charles-Foix et je ne savais pas comment m'organiser. Youdom a tout coordonné en deux jours, avec des aides que je ne connaissais pas.",
      author: "Nadia, aidante familiale, Ivry-sur-Seine",
    },
  },
  {
    slug: "le-kremlin-bicetre",
    city: "Le Kremlin-Bicêtre",
    shortName: "Kremlin-Bicêtre",
    zipCodes: ["94270"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8129, lng: 2.3573 },
    population: 27000,
    metaTitle: "Aide à domicile Le Kremlin-Bicêtre (94) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care au Kremlin-Bicêtre : aide à domicile pour seniors et familles, proximité du CHU Bicêtre. Sortie d'hôpital sous 48 h. Devis gratuit.",
    heroTitle: "Aide à domicile au Kremlin-Bicêtre",
    heroSubtitle:
      "À l'ombre du CHU Bicêtre, un accompagnement réactif pour les sorties d'hospitalisation et le maintien à domicile.",
    intro:
      "Le Kremlin-Bicêtre est marqué par la présence du CHU Bicêtre, l'un des plus grands hôpitaux d'Île-de-France. Youdom Care y est particulièrement sollicité pour les retours à domicile et l'accompagnement des familles.",
    localContext:
      "Le Kremlin-Bicêtre, environ 27 000 habitants sur un territoire réduit, est une ville dense et jeune, structurée autour du CHU de Bicêtre qui emploie des milliers de personnes et rayonne bien au-delà de la commune. Cette proximité hospitalière génère un besoin constant d'accompagnements de retour à domicile, parfois complexes, pour des patients de tout le sud parisien. La population âgée locale, installée dans les immeubles autour de l'avenue de Fontainebleau et du centre-ville, côtoie de nombreuses familles avec enfants en situation de handicap suivis à Bicêtre. Youdom Care met en place des accompagnements très rapides, dès 48 heures, condition indispensable pour éviter les réhospitalisations et soulager des aidants souvent débordés.",
    neighborhoods: ["Centre-ville", "Convention", "Verdun-Hoche", "Fontainebleau", "Charles-Gide", "Barnufles", "Hoche", "Division-Leclerc"],
    hospitals: [
      "CHU de Bicêtre (AP-HP)",
      "Hôpital Paul-Guiraud (Villejuif, à proximité)",
      "Institut Gustave-Roussy (Villejuif, à proximité)",
    ],
    transport: ["Métro 7 (Le Kremlin-Bicêtre, Villejuif — Léo Lagrange)", "Bus 47 vers Paris", "Bus 131 et 323", "RER B (Gentilly, à proximité)"],
    highlights: [
      "Démarrage d'un accompagnement en 48 h après une sortie du CHU Bicêtre",
      "Familles avec enfants en situation de handicap suivis à Bicêtre",
      "Couverture étendue à Villejuif, Gentilly et Cachan",
    ],
    localAid:
      "Au Kremlin-Bicêtre, l'APA et la PCH relèvent du Conseil départemental du Val-de-Marne (94). Le CCAS de la ville propose téléassistance et aides ponctuelles ; nous coordonnons ces dispositifs avec la sortie d'hospitalisation du CHU.",
    faq: [
      {
        question: "Combien de temps après une sortie du CHU Bicêtre pouvez-vous intervenir ?",
        answer:
          "En général sous 48 heures. Le CHU Bicêtre étant sur la commune, nous sommes rodés à ces retours rapides : mise en place de l'aide à la toilette, des repas et de la surveillance dès le premier jour à domicile.",
      },
      {
        question: "Accompagnez-vous les enfants en situation de handicap suivis à Bicêtre ?",
        answer:
          "Oui. Nous intervenons auprès de familles dont l'enfant est suivi au CHU Bicêtre, avec des gardes et un accompagnement adaptés, mobilisant la PCH via la MDPH du Val-de-Marne.",
      },
      {
        question: "Qui verse l'APA au Kremlin-Bicêtre ?",
        answer:
          "Le Conseil départemental du Val-de-Marne. Le CCAS du Kremlin-Bicêtre complète avec la téléassistance et des aides ponctuelles. Nous vous aidons à monter le dossier rapidement, surtout après une hospitalisation.",
      },
    ],
    testimonial: {
      quote:
        "Après l'opération de ma mère à Bicêtre, l'assistante sociale nous a parlé de Youdom. Une auxiliaire était là dès le lendemain de la sortie, tout était prêt.",
      author: "Farid, fils d'une bénéficiaire, Le Kremlin-Bicêtre",
    },
  },
  {
    slug: "levallois-perret",
    city: "Levallois-Perret",
    shortName: "Levallois",
    zipCodes: ["92300"],
    department: { code: "92", name: "Hauts-de-Seine" },
    region: "Petite couronne",
    geo: { lat: 48.8945, lng: 2.2877 },
    population: 64000,
    metaTitle: "Aide à domicile Levallois-Perret (92) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Levallois-Perret : aide à domicile pour seniors et familles d'aidants actifs. Anatole-France, Wilson, Jaurès. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Levallois-Perret",
    heroSubtitle:
      "Ville urbaine et dense du 92, où nos auxiliaires soutiennent seniors et aidants au rythme de la vie active.",
    intro:
      "Levallois-Perret, l'une des communes les plus densément peuplées d'Europe, conjugue immeubles résidentiels et forte activité tertiaire. Youdom Care y accompagne des seniors et de nombreux aidants actifs qui veillent sur leurs parents.",
    localContext:
      "Levallois-Perret, environ 64 000 habitants sur un territoire très resserré, est une ville jeune et active, marquée par les sièges d'entreprises et une population de cadres. Beaucoup de ces actifs sont aidants pour des parents âgés vivant seuls, à Levallois ou ailleurs, et cherchent un partenaire fiable qui prenne le relais en semaine. Les seniors levalloisiens, souvent installés autour de la rue Aristide-Briand et de la place Georges-Pompidou, apprécient un accompagnement structuré et régulier. La proximité de l'hôpital Beaujon à Clichy et du secteur de Neuilly facilite le suivi médical. Notre ancrage dans les Hauts-de-Seine nous permet d'assurer une coordination fluide avec ces établissements et avec le département.",
    neighborhoods: ["Anatole-France", "Wilson", "Jaurès", "Front-de-Seine", "Aristide-Briand", "Louise-Michel", "Trébois", "Collange"],
    hospitals: [
      "Hôpital Beaujon (Clichy, AP-HP)",
      "Hôpital américain de Paris (Neuilly, à proximité)",
      "Hôpital Courbevoie / Groupe hospitalier Rives de Seine",
    ],
    transport: ["Métro 3 (Anatole France, Louise Michel, Pont de Levallois)", "Ligne L Transilien (Clichy — Levallois)", "Bus 174 et 274", "Métro 13 (Mairie de Clichy, à proximité)"],
    highlights: [
      "Solutions pensées pour les aidants actifs et les emplois du temps chargés",
      "Suivi médical facilité par la proximité de Beaujon et de Neuilly",
      "Coordination fluide avec les établissements des Hauts-de-Seine",
    ],
    localAid:
      "À Levallois-Perret, l'APA est versée par le Conseil départemental des Hauts-de-Seine (92). Le CCAS de Levallois propose téléassistance, portage de repas et sorties seniors ; nous vous aidons à articuler ces services avec nos interventions.",
    faq: [
      {
        question: "Proposez-vous des solutions adaptées aux aidants qui travaillent ?",
        answer:
          "Oui. Beaucoup de Levalloisiens sont actifs et aidants d'un parent âgé. Nous assurons les passages en journée et un compte rendu régulier, pour que vous ayez l'esprit tranquille pendant vos horaires de travail.",
      },
      {
        question: "Quels hôpitaux sont proches pour le suivi médical à Levallois ?",
        answer:
          "L'hôpital Beaujon à Clichy et le secteur de Neuilly (hôpital américain, groupe Rives de Seine) sont tout proches. Nous organisons l'accompagnement aux consultations et les retours d'hospitalisation.",
      },
      {
        question: "Qui finance l'APA à Levallois-Perret ?",
        answer:
          "Le Conseil départemental des Hauts-de-Seine (92). Le CCAS de Levallois complète avec la téléassistance et le portage de repas. Nous vous accompagnons dans les démarches et l'évaluation du GIR.",
      },
    ],
    testimonial: {
      quote:
        "Je travaille à La Défense et ma mère vit seule à Levallois. Youdom passe chaque midi et m'envoie un petit mot le soir. C'est exactement ce qu'il me fallait.",
      author: "Cédric, aidant actif, Levallois-Perret",
    },
  },
  {
    slug: "paris-11",
    city: "Paris 11ᵉ",
    shortName: "Paris 11",
    zipCodes: ["75011"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8594, lng: 2.3765 },
    population: 147000,
    metaTitle: "Aide à domicile Paris 11ᵉ — Auxiliaire de vie Bastille Nation",
    metaDescription:
      "Youdom Care dans le 11ᵉ : aide à domicile pour seniors de Bastille à Voltaire, Charonne, Roquette. Équipe voisine du 12ᵉ. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile dans le 11ᵉ arrondissement de Paris",
    heroSubtitle:
      "De Bastille à Ménilmontant, un accompagnement de proximité dans l'un des arrondissements les plus vivants de Paris.",
    intro:
      "Le 11ᵉ arrondissement, dense et animé, mêle vie nocturne et immeubles anciens où vivent de nombreux seniors. Voisin direct de notre siège du 12ᵉ, il fait partie de nos secteurs d'intervention historiques.",
    localContext:
      "Le 11ᵉ arrondissement est le plus densément peuplé de Paris, avec près de 147 000 habitants entassés dans un tissu haussmannien et faubourien. Derrière l'image festive de la rue Oberkampf et de la Roquette se cache une population âgée importante, souvent locataire de longue date dans des immeubles sans ascenseur autour de Charonne et de la rue de la Roquette. L'isolement y est aggravé par la vie très animée en surface, qui masque la vulnérabilité de personnes âgées vivant au 5ᵉ étage sans confort moderne. La proximité de l'hôpital Saint-Antoine et notre implantation dans le 12ᵉ voisin nous permettent d'intervenir très vite, y compris pour aider à la mobilité dans des escaliers difficiles.",
    neighborhoods: ["Bastille", "Voltaire", "Charonne", "Roquette", "Oberkampf", "Nation", "Père-Lachaise", "Popincourt"],
    hospitals: [
      "Hôpital Saint-Antoine (AP-HP, à la limite du 12ᵉ)",
      "Hôpital Tenon (Paris 20ᵉ, à proximité)",
      "Hôpital des Quinze-Vingts (Paris 12ᵉ, à proximité)",
    ],
    transport: ["Métro 9 (Voltaire, Charonne, Rue des Boulets)", "Métro 3 (Rue Saint-Maur, Parmentier)", "Métro 1 et 5 (Bastille)", "Métro 2 (Père Lachaise, Ménilmontant)"],
    highlights: [
      "Habitude des immeubles anciens sans ascenseur de Charonne et Roquette",
      "Interventions rapides depuis notre siège du 12ᵉ voisin",
      "Repérage de l'isolement des seniors dans un quartier très animé",
    ],
    localAid:
      "Dans le 11ᵉ, l'APA parisienne est instruite par la section du CASVP, rue Chanzy. La Ville de Paris propose aussi l'aide-ménagère municipale et le dispositif « Paris en compagnie » contre l'isolement ; nous vous orientons vers ces ressources.",
    faq: [
      {
        question: "Intervenez-vous dans les immeubles sans ascenseur du 11ᵉ ?",
        answer:
          "Oui, c'est très fréquent dans les rues de Charonne et de la Roquette. Nos auxiliaires sont habitués à ces logements en étage : aide au lever, à la toilette, aux courses, et vigilance sur les risques de chute dans les escaliers.",
      },
      {
        question: "Le 11ᵉ est-il proche de votre siège ?",
        answer:
          "Oui, le 11ᵉ jouxte le 12ᵉ où se trouve notre siège rue de Lyon. Cette proximité garantit des interventions rapides et un remplacement immédiat en cas d'absence d'un intervenant.",
      },
      {
        question: "Existe-t-il des aides contre l'isolement des seniors dans le 11ᵉ ?",
        answer:
          "Oui. Outre l'APA versée via le CASVP, la Ville de Paris propose « Paris en compagnie » et des clubs seniors. Nous vous aidons à mobiliser ces dispositifs en complément de notre accompagnement humain.",
      },
    ],
    testimonial: {
      quote:
        "Ma tante habite au cinquième sans ascenseur rue de Charonne. L'auxiliaire de Youdom l'aide à descendre faire ses courses, ce que personne n'osait faire avant.",
      author: "Hélène, nièce d'une bénéficiaire, Paris 11ᵉ",
    },
  },
  {
    slug: "paris-20",
    city: "Paris 20ᵉ",
    shortName: "Paris 20",
    zipCodes: ["75020"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8649, lng: 2.3986 },
    population: 195000,
    metaTitle: "Aide à domicile Paris 20ᵉ — Auxiliaire de vie Ménilmontant",
    metaDescription:
      "Youdom Care dans le 20ᵉ : aide à domicile pour seniors à Ménilmontant, Gambetta, Belleville, Père-Lachaise. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile dans le 20ᵉ arrondissement de Paris",
    heroSubtitle:
      "De Belleville à Gambetta, un accompagnement solidaire pour les seniors d'un arrondissement populaire et attachant.",
    intro:
      "Le 20ᵉ arrondissement, populaire et cosmopolite, s'étend de Belleville à la porte de Bagnolet. Youdom Care y accompagne des seniors souvent isolés et des familles aux ressources variées, avec l'exigence d'un service de qualité pour tous.",
    localContext:
      "Le 20ᵉ arrondissement compte près de 195 000 habitants et une population parmi les plus diverses de Paris, des collines de Belleville et Ménilmontant aux grands ensembles de la porte de Bagnolet et de Saint-Blaise. Cette diversité s'accompagne d'un vieillissement marqué dans les quartiers ouvriers historiques, où beaucoup de personnes âgées vivent seules avec de faibles revenus. Le relief accidenté du secteur, entre Père-Lachaise et Gambetta, complique les déplacements des personnes à mobilité réduite. La présence de l'hôpital Tenon, établissement de référence de l'est parisien, structure l'offre de soins. Notre connaissance fine de ces quartiers permet d'adapter l'accompagnement aux réalités sociales et aux barrières linguistiques parfois présentes.",
    neighborhoods: ["Ménilmontant", "Gambetta", "Belleville", "Père-Lachaise", "Saint-Blaise", "Porte de Bagnolet", "Pelleport", "Réunion"],
    hospitals: [
      "Hôpital Tenon (AP-HP)",
      "Hôpital de la Croix Saint-Simon",
      "Hôpital Diaconesses Croix Saint-Simon",
    ],
    transport: ["Métro 3 (Gambetta, Porte de Bagnolet)", "Métro 2 (Ménilmontant, Père Lachaise)", "Métro 11 (Télégraphe, Pelleport)", "Tramway T3b (Porte de Bagnolet, Porte de Vincennes)"],
    highlights: [
      "Accompagnement adapté aux quartiers en relief et aux immeubles anciens",
      "Retours à domicile coordonnés avec l'hôpital Tenon",
      "Attention particulière aux seniors isolés et aux faibles revenus",
    ],
    localAid:
      "Dans le 20ᵉ, l'APA relève du CASVP, section de la rue des Prairies. La Ville de Paris propose aussi l'aide-ménagère et le portage de repas à domicile ; nos coordinatrices vous accompagnent, y compris pour les personnes non francophones.",
    faq: [
      {
        question: "Vos auxiliaires connaissent-ils les quartiers en pente du 20ᵉ ?",
        answer:
          "Oui. De Ménilmontant à Pelleport, le relief est marqué. Nos intervenants sont habitués à sécuriser les déplacements des personnes à mobilité réduite dans ces rues et immeubles anciens.",
      },
      {
        question: "Coordonnez-vous les sorties de l'hôpital Tenon ?",
        answer:
          "Oui. Tenon est l'hôpital de référence de l'est parisien. Nous organisons le retour à domicile dès la sortie, en lien avec les équipes soignantes et le service social.",
      },
      {
        question: "Comment demander une aide à domicile financée dans le 20ᵉ ?",
        answer:
          "L'APA est instruite par la section du CASVP du 20ᵉ. La Ville propose aussi l'aide-ménagère et le portage de repas. Nous vous aidons à monter le dossier, y compris avec un interprète si nécessaire.",
      },
    ],
    testimonial: {
      quote:
        "Ma mère vit seule à Ménilmontant depuis le décès de mon père. L'auxiliaire de Youdom est devenue un vrai repère pour elle, au-delà des tâches du quotidien.",
      author: "Samuel, fils d'une bénéficiaire, Paris 20ᵉ",
    },
  },
  {
    slug: "paris-05",
    city: "Paris 5ᵉ",
    shortName: "Paris 5",
    zipCodes: ["75005"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8448, lng: 2.3471 },
    population: 59000,
    metaTitle: "Aide à domicile Paris 5ᵉ — Auxiliaire de vie Quartier latin",
    metaDescription:
      "Youdom Care dans le 5ᵉ : aide à domicile pour seniors du Quartier latin, Mouffetard, Jardin des Plantes. Proximité Pitié-Salpêtrière. Devis gratuit 24 h.",
    heroTitle: "Aide à domicile dans le 5ᵉ arrondissement de Paris",
    heroSubtitle:
      "Au cœur du Quartier latin, un accompagnement discret et cultivé pour des seniors attachés à leur cadre de vie.",
    intro:
      "Le 5ᵉ arrondissement, berceau universitaire de Paris, abrite une population âgée cultivée et fidèle à son quartier, de la Mouffetard au Panthéon. Youdom Care y propose un accompagnement respectueux du rythme et des habitudes de chacun.",
    localContext:
      "Le 5ᵉ arrondissement, environ 59 000 habitants, est l'un des plus anciens de Paris, marqué par la présence des universités, du Panthéon et du Jardin des Plantes. Sa population âgée, souvent issue du monde universitaire ou des professions intellectuelles, réside dans des immeubles anciens autour de la place Monge et de la rue Mouffetard, fréquemment sans ascenseur. Ces seniors, attachés à leur autonomie et à leur environnement culturel, recherchent un accompagnement discret qui respecte leurs habitudes de lecture, de promenade au jardin des Plantes ou de marché rue Mouffetard. La proximité immédiate de la Pitié-Salpêtrière, à la limite du 13ᵉ, facilite le suivi médical et les retours d'hospitalisation que nous coordonnons avec attention.",
    neighborhoods: ["Quartier latin", "Mouffetard", "Panthéon", "Jardin des Plantes", "Place Monge", "Val-de-Grâce", "Maubert", "Censier"],
    hospitals: [
      "Groupe hospitalier Pitié-Salpêtrière (à la limite du 13ᵉ)",
      "Hôpital du Val-de-Grâce (ancien site, secteur médical)",
      "Hôpital de la Charité / secteur AP-HP centre",
    ],
    transport: ["Métro 7 (Place Monge, Censier — Daubenton)", "Métro 10 (Cardinal Lemoine, Jussieu)", "RER B (Luxembourg, à proximité)", "Bus 47 et 89"],
    highlights: [
      "Accompagnement discret pour seniors attachés à leur autonomie culturelle",
      "Sorties au jardin des Plantes et au marché Mouffetard",
      "Coordination des retours de la Pitié-Salpêtrière toute proche",
    ],
    localAid:
      "Dans le 5ᵉ, l'APA est gérée par le CASVP, section de la place du Panthéon. La Ville propose aussi des clubs seniors et l'aide-ménagère municipale ; nous vous aidons à monter votre dossier et à préserver votre cadre de vie.",
    faq: [
      {
        question: "Proposez-vous un accompagnement adapté aux seniors autonomes du 5ᵉ ?",
        answer:
          "Oui. Beaucoup de seniors du Quartier latin restent actifs intellectuellement et souhaitent seulement un soutien ponctuel : accompagnement au marché Mouffetard, aux promenades au jardin des Plantes, aide administrative ou ménage. Nous respectons ce besoin d'autonomie.",
      },
      {
        question: "Gérez-vous les retours de la Pitié-Salpêtrière dans le 5ᵉ ?",
        answer:
          "Oui. La Pitié-Salpêtrière est à la limite du 5ᵉ et du 13ᵉ. Nous coordonnons le retour à domicile dès la sortie, en lien avec le service social de l'hôpital.",
      },
      {
        question: "À qui s'adresser pour l'APA dans le 5ᵉ arrondissement ?",
        answer:
          "À la section du CASVP du 5ᵉ, près du Panthéon. Nous vous accompagnons dans la constitution du dossier et la préparation de l'évaluation à domicile du niveau de dépendance.",
      },
    ],
    testimonial: {
      quote:
        "Ancien professeur, je tiens à ma routine : le marché, mes livres, le jardin des Plantes. L'auxiliaire de Youdom l'a compris et s'adapte à mon rythme, sans jamais l'imposer.",
      author: "Monsieur L., 85 ans, Paris 5ᵉ",
    },
  },
  {
    slug: "charenton-le-pont",
    city: "Charenton-le-Pont",
    shortName: "Charenton",
    zipCodes: ["94220"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8221, lng: 2.4126 },
    population: 30000,
    metaTitle: "Aide à domicile Charenton-le-Pont (94) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Charenton-le-Pont : aide à domicile pour seniors, aux portes du 12ᵉ. Bercy, Liberté, Bois de Vincennes. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Charenton-le-Pont",
    heroSubtitle:
      "Aux portes du 12ᵉ, une équipe voisine qui accompagne les seniors charentonnais au quotidien.",
    intro:
      "Charenton-le-Pont, commune paisible en bordure de Seine et du bois de Vincennes, jouxte directement notre siège du 12ᵉ. Youdom Care y intervient très rapidement pour les seniors et les familles.",
    localContext:
      "Charenton-le-Pont, environ 30 000 habitants, est une ville résidentielle coincée entre la Seine, le bois de Vincennes et le périphérique, en continuité directe avec le 12ᵉ arrondissement. Sa population, en partie composée de retraités installés dans les immeubles du centre-ville et du quartier de Bercy, apprécie la tranquillité et la proximité de Paris. De jeunes familles s'y installent également, devenant aidantes pour des parents restés en ville. La commune abrite l'important hôpital psychiatrique Esquirol, référence en santé mentale du Val-de-Marne. Notre siège rue de Lyon étant à quelques minutes seulement, nous garantissons à Charenton une réactivité et une ponctualité difficiles à égaler pour des prestataires venus de plus loin.",
    neighborhoods: ["Centre-ville", "Bercy", "Liberté", "Conflans", "Bois de Vincennes", "Valmy", "Aristide-Briand", "Quartier des Carrières"],
    hospitals: [
      "Hôpital Esquirol (santé mentale, Saint-Maurice)",
      "Hôpitaux de Saint-Maurice",
      "Hôpital Saint-Antoine (Paris 12ᵉ, à proximité)",
    ],
    transport: ["Métro 8 (Liberté, Charenton — Écoles)", "RER A et D (Maisons-Alfort, à proximité)", "Bus 24 le long de la Seine", "Bus 111 vers Vincennes"],
    highlights: [
      "Réactivité maximale : à quelques minutes de notre siège du 12ᵉ",
      "Accompagnement en lien avec les hôpitaux de Saint-Maurice / Esquirol",
      "Sorties au bord de Seine et au bois de Vincennes tout proche",
    ],
    localAid:
      "À Charenton-le-Pont, l'APA est versée par le Conseil départemental du Val-de-Marne (94). Le CCAS de Charenton propose téléassistance, portage de repas et registre canicule ; nous vous aidons à combiner ces aides à un accompagnement humain.",
    faq: [
      {
        question: "Charenton est-elle proche de votre siège ?",
        answer:
          "Oui, Charenton-le-Pont jouxte directement le 12ᵉ arrondissement où se trouve notre siège rue de Lyon. Nos auxiliaires y accèdent en quelques minutes par le métro 8 ou en voiture, ce qui garantit ponctualité et réactivité.",
      },
      {
        question: "Accompagnez-vous les personnes suivies aux hôpitaux de Saint-Maurice ?",
        answer:
          "Oui. Les hôpitaux de Saint-Maurice et l'hôpital Esquirol, spécialisés notamment en santé mentale, sont tout proches. Nous proposons un accompagnement à domicile respectueux et coordonné avec les équipes soignantes.",
      },
      {
        question: "Qui verse l'APA à Charenton-le-Pont ?",
        answer:
          "Le Conseil départemental du Val-de-Marne. Le CCAS de Charenton complète avec la téléassistance et le portage de repas. Nous vous aidons à constituer le dossier et à préparer l'évaluation à domicile.",
      },
    ],
    testimonial: {
      quote:
        "Ma mère habite près du bord de Seine à Charenton. L'auxiliaire de Youdom l'emmène marcher chaque après-midi quand il fait beau, elle a retrouvé le sourire.",
      author: "Isabelle, fille d'une bénéficiaire, Charenton-le-Pont",
    },
  },
  {
    slug: "maisons-alfort",
    city: "Maisons-Alfort",
    shortName: "Maisons-Alfort",
    zipCodes: ["94700"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8093, lng: 2.4374 },
    population: 56000,
    metaTitle: "Aide à domicile Maisons-Alfort (94) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Maisons-Alfort : aide à domicile pour seniors et familles. Juillottes, Vert-de-Maisons, École vétérinaire. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Maisons-Alfort",
    heroSubtitle:
      "Une ville familiale du Val-de-Marne où nos auxiliaires accompagnent seniors et aidants avec régularité.",
    intro:
      "Maisons-Alfort, ville résidentielle et familiale au confluent de la Seine et de la Marne, compte une population senior stable. Youdom Care y assure des accompagnements réguliers, du centre-ville aux Juillottes.",
    localContext:
      "Maisons-Alfort, environ 56 000 habitants, est une ville pavillonnaire et résidentielle du Val-de-Marne, connue pour son École nationale vétérinaire et sa situation au bord de la Marne. Sa population âgée, souvent propriétaire de longue date dans les quartiers pavillonnaires des Juillottes et de Vert-de-Maisons, souhaite vieillir dans sa maison individuelle. Cela implique des besoins spécifiques : entretien du domicile, aide au jardinage léger, préparation des repas et surveillance en cas de logement isolé sur plusieurs niveaux. La bonne desserte par la ligne 8 et le RER D facilite l'accès aux soins parisiens et à l'hôpital Henri-Mondor tout proche à Créteil. Notre présence locale garantit un suivi régulier, essentiel pour ces habitants attachés à leur cadre pavillonnaire.",
    neighborhoods: ["Centre-ville", "Les Juillottes", "Vert-de-Maisons", "Charentonneau", "Liberté", "École vétérinaire", "Bords de Marne", "Alfort"],
    hospitals: [
      "CHU Henri-Mondor (Créteil, à proximité)",
      "Hôpitaux de Saint-Maurice (à proximité)",
      "Hôpital privé Paul d'Égine (Champigny, à proximité)",
    ],
    transport: ["Métro 8 (Maisons-Alfort — Stade, Les Juillottes, École vétérinaire)", "RER D (Maisons-Alfort — Alfortville)", "Bus 103 et 217", "Bus 172 vers Créteil"],
    highlights: [
      "Aide adaptée aux maisons individuelles et logements sur plusieurs niveaux",
      "Accès facilité au CHU Henri-Mondor de Créteil voisin",
      "Suivi régulier pour seniors attachés à leur pavillon",
    ],
    localAid:
      "À Maisons-Alfort, l'APA relève du Conseil départemental du Val-de-Marne (94). Le CCAS de Maisons-Alfort propose téléassistance, portage de repas et animations seniors ; nous vous aidons à articuler ces dispositifs avec nos prestations.",
    faq: [
      {
        question: "Intervenez-vous dans les maisons individuelles de Maisons-Alfort ?",
        answer:
          "Oui, c'est fréquent aux Juillottes et à Vert-de-Maisons. Nos auxiliaires accompagnent les seniors dans leur pavillon : entretien du domicile, repas, aide aux déplacements entre les étages et vigilance sur les risques de chute.",
      },
      {
        question: "Le CHU Henri-Mondor est-il accessible depuis Maisons-Alfort ?",
        answer:
          "Oui, le CHU Henri-Mondor de Créteil est tout proche. Nous organisons l'accompagnement aux consultations et coordonnons les retours à domicile après une hospitalisation.",
      },
      {
        question: "Qui finance l'APA à Maisons-Alfort ?",
        answer:
          "Le Conseil départemental du Val-de-Marne. Le CCAS de Maisons-Alfort complète avec la téléassistance et le portage de repas. Nous vous accompagnons dans le montage du dossier et l'évaluation du GIR.",
      },
    ],
    testimonial: {
      quote:
        "Mon père tient à rester dans sa maison des Juillottes. Youdom lui envoie la même auxiliaire trois fois par semaine, qui l'aide pour l'escalier et les repas.",
      author: "Patrick, fils d'un bénéficiaire, Maisons-Alfort",
    },
  },
  {
    slug: "nogent-sur-marne",
    city: "Nogent-sur-Marne",
    shortName: "Nogent",
    zipCodes: ["94130"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8368, lng: 2.4826 },
    population: 33000,
    metaTitle: "Aide à domicile Nogent-sur-Marne (94) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Nogent-sur-Marne : aide à domicile haut de gamme pour seniors, bords de Marne. Centre-ville, Plaisance, Le Perreux. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Nogent-sur-Marne",
    heroSubtitle:
      "Sur les bords de Marne, un accompagnement soigné pour les seniors d'une ville douce de vivre.",
    intro:
      "Nogent-sur-Marne, ville résidentielle élégante au bord de l'eau, séduit une population senior aisée et attachée à son cadre de vie. Youdom Care y propose des prestations haut de gamme et personnalisées.",
    localContext:
      "Nogent-sur-Marne, environ 33 000 habitants, est une commune résidentielle prisée du Val-de-Marne, réputée pour ses guinguettes, ses bords de Marne et son architecture Belle Époque. Sa population âgée, souvent aisée et propriétaire dans les maisons de maître et les immeubles du centre-ville, recherche un accompagnement de qualité, discret et flexible. Beaucoup de ces seniors restent actifs et souhaitent surtout préserver leur autonomie tout en étant sécurisés. La commune abrite la Maison nationale des artistes et un tissu associatif dense pour les personnes âgées. La proximité de l'hôpital Armand-Brillard et des établissements de l'est parisien facilite le suivi médical. Notre ancrage dans le secteur permet un service sur mesure et une grande réactivité.",
    neighborhoods: ["Centre-ville", "Plaisance", "Bords de Marne", "Val de Beauté", "Marché", "Sous-la-Lune", "Baltard", "Nogent — Le Perreux"],
    hospitals: [
      "Hôpital privé Armand-Brillard (Nogent-sur-Marne)",
      "CHI Le Raincy-Montfermeil (à proximité)",
      "Hôpital Les Murets (La Queue-en-Brie, à proximité)",
    ],
    transport: ["RER A (Nogent-sur-Marne)", "RER E (Nogent — Le Perreux)", "Bus 113 vers Château de Vincennes", "Bus 120 et 210"],
    highlights: [
      "Prestations haut de gamme, discrètes et flexibles",
      "Suivi médical facilité par l'hôpital privé Armand-Brillard",
      "Sorties et promenades le long des bords de Marne",
    ],
    localAid:
      "À Nogent-sur-Marne, l'APA est versée par le Conseil départemental du Val-de-Marne (94). Le CCAS de Nogent propose téléassistance, portage de repas et un club seniors actif ; nous vous aidons à combiner ces services à nos interventions.",
    faq: [
      {
        question: "Proposez-vous des prestations haut de gamme à Nogent ?",
        answer:
          "Oui. Nombre de seniors nogentais recherchent un accompagnement discret et flexible : aide à la préparation de repas soignés, accompagnement aux sorties culturelles, promenades sur les bords de Marne. Nous adaptons nos prestations à ces attentes.",
      },
      {
        question: "Quel hôpital est proche pour le suivi médical à Nogent ?",
        answer:
          "L'hôpital privé Armand-Brillard, à Nogent même, ainsi que les établissements de l'est parisien. Nous organisons l'accompagnement aux consultations et les retours à domicile après hospitalisation.",
      },
      {
        question: "Qui verse l'APA à Nogent-sur-Marne ?",
        answer:
          "Le Conseil départemental du Val-de-Marne. Le CCAS de Nogent complète avec la téléassistance et le portage de repas. Nous vous accompagnons dans les démarches et l'évaluation à domicile.",
      },
    ],
    testimonial: {
      quote:
        "Ma mère aime recevoir et cuisiner. L'auxiliaire de Youdom l'aide à préparer ses repas et l'accompagne au marché de Nogent, c'est un vrai soutien élégant.",
      author: "Béatrice, fille d'une bénéficiaire, Nogent-sur-Marne",
    },
  },
  {
    slug: "fontenay-sous-bois",
    city: "Fontenay-sous-Bois",
    shortName: "Fontenay",
    zipCodes: ["94120"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8517, lng: 2.4772 },
    population: 53000,
    metaTitle: "Aide à domicile Fontenay-sous-Bois (94) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Fontenay-sous-Bois : aide à domicile pour seniors et familles. Village, Val-de-Fontenay, Bois de Vincennes. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Fontenay-sous-Bois",
    heroSubtitle:
      "Du Village au Val-de-Fontenay, un accompagnement de proximité en bordure du bois de Vincennes.",
    intro:
      "Fontenay-sous-Bois, ville verte et contrastée entre son Village historique et le pôle d'affaires du Val-de-Fontenay, accueille des seniors comme de nombreuses familles. Youdom Care y propose un accompagnement adapté à chaque profil.",
    localContext:
      "Fontenay-sous-Bois, environ 53 000 habitants, présente deux visages : le Village, quartier pavillonnaire et ancien où résident de nombreux seniors propriétaires, et le Val-de-Fontenay, quartier d'affaires et de tours d'habitation à la population plus jeune et active. Cette dualité crée des besoins variés, du maintien à domicile de personnes âgées isolées dans les rues calmes du Village à la garde d'enfants, y compris en situation de handicap, pour des parents travaillant dans les bureaux du Val-de-Fontenay. La proximité du bois de Vincennes offre un cadre agréable pour les sorties. Bien desservie par le RER A et E, la ville reste accessible ; notre présence locale assure une continuité que les longues distances rendraient sinon difficile.",
    neighborhoods: ["Le Village", "Val-de-Fontenay", "Les Rigollots", "Larris", "Michelet", "Trois-Communes", "Bois de Vincennes", "Clos-Marcamp"],
    hospitals: [
      "Hôpital d'instruction des armées Bégin (Saint-Mandé, à proximité)",
      "Hôpital Les Murets (La Queue-en-Brie, à proximité)",
      "Hôpital privé Armand-Brillard (Nogent, à proximité)",
    ],
    transport: ["RER A (Fontenay-sous-Bois, Val de Fontenay)", "RER E (Val de Fontenay)", "Bus 118 vers Château de Vincennes", "Bus 124 et 301"],
    highlights: [
      "Accompagnement adapté au Village pavillonnaire comme au Val-de-Fontenay",
      "Garde d'enfants, y compris en situation de handicap, pour parents actifs",
      "Sorties au bois de Vincennes tout proche",
    ],
    localAid:
      "À Fontenay-sous-Bois, l'APA et la PCH relèvent du Conseil départemental du Val-de-Marne (94). Le CCAS de Fontenay propose téléassistance, portage de repas et aides sociales facultatives ; nous vous orientons vers les bons dispositifs.",
    faq: [
      {
        question: "Intervenez-vous à la fois au Village et au Val-de-Fontenay ?",
        answer:
          "Oui. Le Village pavillonnaire et le quartier d'affaires du Val-de-Fontenay ont des besoins différents, du maintien à domicile de seniors isolés à la garde d'enfants pour parents actifs. Nous adaptons nos prestations à chaque secteur.",
      },
      {
        question: "Proposez-vous la garde d'enfants en situation de handicap à Fontenay ?",
        answer:
          "Oui. Pour les familles du Val-de-Fontenay notamment, nous mettons en place une garde à domicile adaptée avec des intervenants formés au handicap, mobilisant la PCH via la MDPH du Val-de-Marne.",
      },
      {
        question: "Qui verse l'APA à Fontenay-sous-Bois ?",
        answer:
          "Le Conseil départemental du Val-de-Marne. Le CCAS de Fontenay complète avec la téléassistance et le portage de repas. Nous vous aidons à constituer le dossier et à préparer l'évaluation à domicile.",
      },
    ],
    testimonial: {
      quote:
        "Nous vivons au Val-de-Fontenay et travaillons tous les deux. L'auxiliaire de Youdom garde notre fille après l'école, elle est douce et vraiment formée au handicap.",
      author: "Aurélie, mère de famille, Fontenay-sous-Bois",
    },
  },
  {
    slug: "montreuil",
    city: "Montreuil",
    shortName: "Montreuil",
    zipCodes: ["93100"],
    department: { code: "93", name: "Seine-Saint-Denis" },
    region: "Petite couronne",
    geo: { lat: 48.8638, lng: 2.4485 },
    population: 111000,
    metaTitle: "Aide à domicile Montreuil (93) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Montreuil : aide à domicile pour seniors et familles. Croix-de-Chavaux, Bas-Montreuil, Bel-Air. CHI André-Grégoire à proximité. Devis 24 h.",
    heroTitle: "Aide à domicile à Montreuil",
    heroSubtitle:
      "Du Bas-Montreuil aux Murs à pêches, un accompagnement solidaire au cœur de la Seine-Saint-Denis.",
    intro:
      "Montreuil, grande ville populaire et créative de Seine-Saint-Denis, aux portes de Paris, accueille une population très diverse. Youdom Care y accompagne seniors, personnes en situation de handicap et familles, avec la même exigence de qualité.",
    localContext:
      "Montreuil, environ 111 000 habitants, est l'une des plus grandes villes de Seine-Saint-Denis, un territoire à la fois populaire, cosmopolite et en pleine gentrification. Le Bas-Montreuil, proche de Paris, attire de jeunes familles, tandis que le Haut-Montreuil et les quartiers des Murs à pêches conservent une population plus ancienne et modeste, avec des seniors souvent isolés et aux revenus limités. Cette diversité sociale et culturelle exige des intervenants sensibles aux différences et parfois plurilingues. La présence du CHI André-Grégoire, hôpital de référence de l'est de la Seine-Saint-Denis, structure les parcours de soins. Notre maîtrise des aides du département (93) et notre proximité avec Paris nous permettent d'accompagner efficacement des familles souvent peu informées de leurs droits.",
    neighborhoods: ["Croix-de-Chavaux", "Bas-Montreuil", "Bel-Air", "Ruffins", "Murs à pêches", "La Noue", "Villiers-Barbusse", "Bagnolet — Gallieni"],
    hospitals: [
      "CHI André-Grégoire (Montreuil)",
      "Hôpital privé Vitalia / secteur est-parisien",
      "Hôpital Tenon (Paris 20ᵉ, à proximité)",
    ],
    transport: ["Métro 9 (Croix de Chavaux, Mairie de Montreuil, Robespierre)", "Tramway T1 (à proximité, Bobigny)", "Bus 102 et 122", "Métro 3 (Gallieni, à proximité)"],
    highlights: [
      "Intervenants sensibles à la diversité culturelle et parfois plurilingues",
      "Retours à domicile coordonnés avec le CHI André-Grégoire",
      "Bonne connaissance des aides de la Seine-Saint-Denis pour familles peu informées",
    ],
    localAid:
      "À Montreuil, l'APA et la PCH sont versées par le Conseil départemental de la Seine-Saint-Denis (93). Le CCAS de Montreuil est très actif (aide-ménagère, portage de repas, téléassistance) ; nous aidons les familles à faire valoir tous leurs droits.",
    faq: [
      {
        question: "Coordonnez-vous les sorties du CHI André-Grégoire à Montreuil ?",
        answer:
          "Oui. Le Centre hospitalier intercommunal André-Grégoire est l'hôpital de référence de la ville. Nous organisons le retour à domicile dès la sortie, en lien avec les équipes soignantes et le service social.",
      },
      {
        question: "Vos auxiliaires connaissent-ils la diversité des quartiers de Montreuil ?",
        answer:
          "Oui. Du Bas-Montreuil aux Murs à pêches, la ville est très diverse. Nos intervenants, souvent plurilingues, sont sensibles à cette réalité culturelle et sociale, gage d'un lien de confiance solide.",
      },
      {
        question: "Qui verse l'APA à Montreuil ?",
        answer:
          "Le Conseil départemental de la Seine-Saint-Denis (93). Le CCAS de Montreuil complète avec l'aide-ménagère et le portage de repas. Nous aidons les familles à monter le dossier et à faire valoir tous leurs droits.",
      },
    ],
    testimonial: {
      quote:
        "Ma grand-mère vit aux Ruffins et ne connaissait pas ses droits. Youdom nous a aidés à obtenir l'APA et à mettre en place une aide régulière, avec une auxiliaire qui la comprend.",
      author: "Yasmine, petite-fille d'une bénéficiaire, Montreuil",
    },
  },
  {
    slug: "issy-les-moulineaux",
    city: "Issy-les-Moulineaux",
    shortName: "Issy",
    zipCodes: ["92130"],
    department: { code: "92", name: "Hauts-de-Seine" },
    region: "Petite couronne",
    geo: { lat: 48.8243, lng: 2.2708 },
    population: 69000,
    metaTitle: "Aide à domicile Issy-les-Moulineaux (92) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Issy-les-Moulineaux : aide à domicile pour seniors et familles. Corentin-Celton, Les Moulineaux, Val de Seine. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Issy-les-Moulineaux",
    heroSubtitle:
      "Ville innovante des Hauts-de-Seine, où nos auxiliaires accompagnent seniors et aidants au fil de la Seine.",
    intro:
      "Issy-les-Moulineaux, ville moderne et dynamique aux portes du 15ᵉ, mêle quartiers d'affaires du Val de Seine et zones résidentielles anciennes. Youdom Care y accompagne une population variée de seniors et de familles.",
    localContext:
      "Issy-les-Moulineaux, environ 69 000 habitants, est une ville des Hauts-de-Seine réputée pour son dynamisme économique et numérique, notamment autour du Val de Seine et des bords de Seine réaménagés. Cette modernité côtoie des quartiers plus anciens, comme les Épinettes et le centre-ville autour de Corentin-Celton, où réside une population âgée installée de longue date. La présence de l'hôpital Corentin-Celton, établissement gériatrique de l'AP-HP, en fait un pôle de référence pour le grand âge et les soins de suite. Les familles isséennes, souvent actives et exigeantes, recherchent un accompagnement fiable et bien coordonné. Notre implantation dans les Hauts-de-Seine et la proximité immédiate du 15ᵉ nous permettent d'assurer un service réactif et de qualité.",
    neighborhoods: ["Corentin-Celton", "Centre-ville", "Les Épinettes", "Val de Seine", "Les Moulineaux", "Les Îles", "Fort d'Issy", "La Ferme"],
    hospitals: [
      "Hôpital Corentin-Celton (AP-HP, gériatrie)",
      "Hôpital Européen Georges-Pompidou (Paris 15ᵉ, à proximité)",
      "Hôpital Ambroise-Paré (Boulogne, à proximité)",
    ],
    transport: ["Métro 12 (Corentin Celton, Mairie d'Issy)", "RER C (Issy, Issy — Val de Seine)", "Tramway T2 (Les Moulineaux, Jacques-Henri Lartigue)", "Bus 123 et 189"],
    highlights: [
      "Expertise gériatrique renforcée par l'hôpital Corentin-Celton",
      "Accompagnement fiable pour familles actives et exigeantes",
      "Service réactif grâce à la proximité du 15ᵉ arrondissement",
    ],
    localAid:
      "À Issy-les-Moulineaux, l'APA est versée par le Conseil départemental des Hauts-de-Seine (92). Le CCAS d'Issy propose téléassistance, portage de repas et navette seniors ; nous vous aidons à combiner ces dispositifs avec nos prestations.",
    faq: [
      {
        question: "L'hôpital Corentin-Celton est-il proche de vos interventions à Issy ?",
        answer:
          "Oui, Corentin-Celton est situé à Issy même. C'est un établissement gériatrique de référence de l'AP-HP ; nous coordonnons les retours à domicile et les soins de suite dès la sortie, en lien avec les équipes.",
      },
      {
        question: "Êtes-vous réactifs pour intervenir à Issy-les-Moulineaux ?",
        answer:
          "Oui. Issy jouxte le 15ᵉ arrondissement et se situe dans notre secteur des Hauts-de-Seine. Nos auxiliaires y accèdent rapidement par le métro 12 ou le tramway T2, ce qui garantit ponctualité et continuité.",
      },
      {
        question: "Qui finance l'APA à Issy-les-Moulineaux ?",
        answer:
          "Le Conseil départemental des Hauts-de-Seine (92). Le CCAS d'Issy complète avec la téléassistance et le portage de repas. Nous vous accompagnons dans le dépôt du dossier et l'évaluation du GIR.",
      },
    ],
    testimonial: {
      quote:
        "Mon père a été suivi à Corentin-Celton après une chute. Youdom a assuré son retour à la maison sans le moindre accroc, une auxiliaire chaque jour dès la sortie.",
      author: "Nathalie, fille d'un bénéficiaire, Issy-les-Moulineaux",
    },
  },
  {
    slug: "neuilly-sur-seine",
    city: "Neuilly-sur-Seine",
    shortName: "Neuilly",
    zipCodes: ["92200"],
    department: { code: "92", name: "Hauts-de-Seine" },
    region: "Petite couronne",
    geo: { lat: 48.8846, lng: 2.2686 },
    population: 60000,
    metaTitle: "Aide à domicile Neuilly-sur-Seine (92) — Auxiliaire de vie",
    metaDescription:
      "Youdom Care à Neuilly-sur-Seine : aide à domicile haut de gamme pour seniors. Sablons, Château, hôpital américain à proximité. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Neuilly-sur-Seine",
    heroSubtitle:
      "Aux portes de l'Ouest parisien, un accompagnement d'excellence pour une clientèle exigeante.",
    intro:
      "Neuilly-sur-Seine, l'une des villes les plus résidentielles d'Île-de-France, compte une population senior aisée et exigeante. Youdom Care y propose un accompagnement haut de gamme, discret et parfaitement coordonné.",
    localContext:
      "Neuilly-sur-Seine, environ 60 000 habitants, est une ville résidentielle huppée des Hauts-de-Seine, entre la Seine, le bois de Boulogne et La Défense. Sa population âgée, souvent aisée et propriétaire de vastes appartements dans les quartiers des Sablons et du Château, attend un service irréprochable, discret et personnalisé. Beaucoup de ces seniors ont vécu à l'international ou reçoivent régulièrement, et apprécient des intervenants soignés et parfois anglophones. La présence de l'Hôpital américain de Paris et du Groupe hospitalier Rives de Seine (Courbevoie-Neuilly) assure un suivi médical de premier plan. Notre exigence de qualité et notre capacité à sélectionner des auxiliaires expérimentés répondent précisément aux attentes élevées des familles neuilléennes.",
    neighborhoods: ["Les Sablons", "Le Château", "Bagatelle", "Saint-James", "Hôtel de Ville", "Bois de Boulogne", "Pont de Neuilly", "Les Poissonniers"],
    hospitals: [
      "Hôpital américain de Paris (Neuilly-sur-Seine)",
      "Groupe hospitalier Rives de Seine — site de Neuilly-Courbevoie",
      "Hôpital Beaujon (Clichy, à proximité)",
    ],
    transport: ["Métro 1 (Les Sablons, Pont de Neuilly)", "RER A (Charles de Gaulle — Étoile, à proximité)", "Bus 43 et 73", "Bus 82 vers le bois de Boulogne"],
    highlights: [
      "Accompagnement haut de gamme et intervenants parfois anglophones",
      "Suivi médical d'excellence avec l'Hôpital américain de Paris",
      "Sélection rigoureuse d'auxiliaires expérimentés",
    ],
    localAid:
      "À Neuilly-sur-Seine, l'APA est versée par le Conseil départemental des Hauts-de-Seine (92). Le CCAS de Neuilly propose téléassistance, portage de repas et animations seniors ; nous vous aidons à combiner ces services à un accompagnement premium.",
    faq: [
      {
        question: "Proposez-vous des auxiliaires anglophones à Neuilly ?",
        answer:
          "Oui, dans la mesure du possible. De nombreux seniors neuilléens ont un parcours international ou reçoivent en anglais ; nous mobilisons des intervenants soignés et parfois anglophones, adaptés à ces attentes.",
      },
      {
        question: "Quels hôpitaux sont proches pour le suivi médical à Neuilly ?",
        answer:
          "L'Hôpital américain de Paris et le Groupe hospitalier Rives de Seine (Neuilly-Courbevoie), tous deux à Neuilly ou à proximité immédiate. Nous organisons l'accompagnement aux consultations et les retours d'hospitalisation.",
      },
      {
        question: "Qui verse l'APA à Neuilly-sur-Seine ?",
        answer:
          "Le Conseil départemental des Hauts-de-Seine (92). Le CCAS de Neuilly complète avec la téléassistance et le portage de repas. Nous vous accompagnons dans les démarches, avec la discrétion attendue.",
      },
    ],
    testimonial: {
      quote:
        "Nous cherchions une aide de très grande qualité pour ma belle-mère aux Sablons. Youdom a su proposer une auxiliaire d'une délicatesse remarquable, parlant anglais avec elle.",
      author: "Charles-Henri, gendre d'une bénéficiaire, Neuilly-sur-Seine",
    },
  },
  {
    slug: "creteil",
    city: "Créteil",
    shortName: "Créteil",
    zipCodes: ["94000"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.7904, lng: 2.4556 },
    population: 92000,
    metaTitle: "Aide à domicile Créteil (94) — Auxiliaire de vie CHU Mondor",
    metaDescription:
      "Youdom Care à Créteil : aide à domicile pour seniors et familles, proximité du CHU Henri-Mondor. Mont-Mesly, Échat, Préfecture. Devis gratuit sous 24 h.",
    heroTitle: "Aide à domicile à Créteil",
    heroSubtitle:
      "Préfecture du Val-de-Marne et ville du CHU Henri-Mondor, où nous coordonnons de nombreux retours à domicile.",
    intro:
      "Créteil, préfecture du Val-de-Marne, est marquée par la présence du CHU Henri-Mondor, l'un des plus grands hôpitaux de la région. Youdom Care y est très sollicité pour les sorties d'hospitalisation et le maintien à domicile.",
    localContext:
      "Créteil, environ 92 000 habitants, est une ville nouvelle et une préfecture, structurée autour du lac de Créteil, de son centre commercial et du vaste campus hospitalo-universitaire Henri-Mondor. Sa population est très diverse, des grands ensembles du Mont-Mesly aux quartiers pavillonnaires du Montaigut, avec une part importante de familles modestes et de seniors vivant dans le parc social. Le CHU Henri-Mondor, référence nationale notamment en neurologie et transplantation, génère un flux constant de retours à domicile souvent complexes. Ces situations exigent une réactivité importante et une bonne coordination avec les équipes sociales de l'hôpital, ainsi qu'une parfaite maîtrise des aides du Val-de-Marne, que nos coordinatrices connaissent en détail.",
    neighborhoods: ["Mont-Mesly", "L'Échat", "Préfecture", "Créteil-Village", "Le Lac", "Montaigut", "Palais", "La Habette"],
    hospitals: [
      "CHU Henri-Mondor (AP-HP, Créteil)",
      "Centre hospitalier intercommunal de Créteil (CHIC)",
      "Hôpital Albert-Chenevier (Créteil)",
    ],
    transport: ["Métro 8 (Créteil — Préfecture, Créteil — L'Échat, Créteil — Université)", "Bus 317 vers Bonneuil", "Bus 172 vers Bourg-la-Reine", "Trans-Val-de-Marne (TVM)"],
    highlights: [
      "Réactivité pour les retours complexes du CHU Henri-Mondor",
      "Bonne connaissance des grands ensembles et du parc social crétéilois",
      "Maîtrise fine des aides du Val-de-Marne pour familles modestes",
    ],
    localAid:
      "À Créteil, l'APA et la PCH relèvent du Conseil départemental du Val-de-Marne (94), dont la préfecture et les services sont sur place. Le CCAS de Créteil propose téléassistance et portage de repas ; nous vous aidons à mobiliser tous vos droits.",
    faq: [
      {
        question: "Assurez-vous les retours du CHU Henri-Mondor à Créteil ?",
        answer:
          "Oui, très régulièrement. Henri-Mondor est un CHU de référence, aux prises en charge parfois lourdes. Nous mettons en place l'accompagnement dès la sortie, en coordination étroite avec le service social de l'hôpital.",
      },
      {
        question: "Intervenez-vous dans tous les quartiers de Créteil ?",
        answer:
          "Oui, du Mont-Mesly à Créteil-Village en passant par la Préfecture et le Lac. Nos auxiliaires connaissent aussi bien les grands ensembles que les quartiers pavillonnaires de la ville.",
      },
      {
        question: "Qui verse l'APA à Créteil ?",
        answer:
          "Le Conseil départemental du Val-de-Marne, dont les services sont à Créteil même. Le CCAS complète avec la téléassistance et le portage de repas. Nous vous aidons à constituer le dossier, surtout après une hospitalisation à Mondor.",
      },
    ],
    testimonial: {
      quote:
        "Après un long séjour à Henri-Mondor, mon mari est rentré à la maison au Mont-Mesly. Youdom a tout organisé avec l'assistante sociale, une auxiliaire était là dès le premier jour.",
      author: "Fatoumata, épouse aidante, Créteil",
    },
  },
];

export function getAgencyBySlug(slug: string): Agency | undefined {
  return agencies.find((a) => a.slug === slug);
}

export const agenciesByRegion = agencies.reduce<Record<string, Agency[]>>((acc, a) => {
  (acc[a.region] ??= []).push(a);
  return acc;
}, {});
