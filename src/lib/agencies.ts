/**
 * Villes desservies par Youdom Care en Île-de-France.
 * Source de vérité unique pour les pages agences locales,
 * le SEO local (Schema.org), le sitemap et le footer.
 */

export type Agency = {
  slug: string;
  city: string;
  zipCodes: string[];
  department: { code: string; name: string };
  region: "Paris" | "Petite couronne" | "Grande couronne";
  geo: { lat: number; lng: number };
  // Texte d'introduction unique pour la page locale
  intro: string;
  // 3-4 spécificités locales (établissements, hôpitaux, particularités démographiques)
  highlights: string[];
  // Quartiers / arrondissements / communes voisines couverts
  coverage: string[];
  population?: number; // pour le contexte
};

export const agencies: Agency[] = [
  {
    slug: "paris-12",
    city: "Paris 12ᵉ",
    zipCodes: ["75012"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8403, lng: 2.3956 },
    intro:
      "Notre siège est situé rue de Lyon, au cœur du 12ᵉ arrondissement. Nos auxiliaires interviennent à Bercy, Daumesnil, Bel-Air, Picpus, Nation, et tout l'arrondissement.",
    highlights: [
      "Hôpitaux Saint-Antoine, Trousseau et Quinze-Vingts à proximité",
      "Forte présence de seniors et de familles aidantes dans le quartier Daumesnil",
      "Réseau dense de pharmacies, cabinets infirmiers, CCAS partenaires",
    ],
    coverage: ["Bercy", "Daumesnil", "Bel-Air", "Picpus", "Nation", "Reuilly"],
    population: 142000,
  },
  {
    slug: "paris-15",
    city: "Paris 15ᵉ",
    zipCodes: ["75015"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8417, lng: 2.2998 },
    intro:
      "Le 15ᵉ arrondissement, le plus peuplé de Paris, présente une forte demande d'aide à domicile pour ses seniors. Nos équipes y interviennent quotidiennement.",
    highlights: [
      "Hôpitaux Européen Georges-Pompidou et Necker à proximité",
      "Quartiers Vaugirard, Convention, Beaugrenelle desservis",
      "Couverture jusqu'aux limites du 7ᵉ et 16ᵉ",
    ],
    coverage: ["Vaugirard", "Convention", "Beaugrenelle", "Necker", "Saint-Lambert"],
    population: 232000,
  },
  {
    slug: "paris-13",
    city: "Paris 13ᵉ",
    zipCodes: ["75013"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8322, lng: 2.3554 },
    intro:
      "Le 13ᵉ arrondissement, particulièrement bien desservi par nos équipes, accueille une population senior importante autour de la place d'Italie et du quartier Asiatique.",
    highlights: [
      "Hôpital de la Pitié-Salpêtrière à proximité",
      "Forte communauté multiculturelle, intervenants polyglottes disponibles",
      "Liens étroits avec les CCAS de l'arrondissement",
    ],
    coverage: ["Place d'Italie", "Olympiades", "Tolbiac", "Butte aux Cailles", "Gobelins"],
    population: 184000,
  },
  {
    slug: "paris-14",
    city: "Paris 14ᵉ",
    zipCodes: ["75014"],
    department: { code: "75", name: "Paris" },
    region: "Paris",
    geo: { lat: 48.8331, lng: 2.3263 },
    intro:
      "Du quartier Montparnasse à Pernety, nos auxiliaires couvrent l'ensemble du 14ᵉ arrondissement avec une attention particulière aux personnes âgées en résidence individuelle.",
    highlights: [
      "Hôpitaux Cochin, Sainte-Anne, La Rochefoucauld",
      "Population mixte : seniors propriétaires + jeunes familles aidantes",
      "Couverture jusqu'à Montrouge et Malakoff",
    ],
    coverage: ["Montparnasse", "Pernety", "Plaisance", "Alésia", "Denfert-Rochereau"],
    population: 138000,
  },
  {
    slug: "boulogne-billancourt",
    city: "Boulogne-Billancourt",
    zipCodes: ["92100"],
    department: { code: "92", name: "Hauts-de-Seine" },
    region: "Petite couronne",
    geo: { lat: 48.8351, lng: 2.2412 },
    intro:
      "Boulogne-Billancourt, ville à la fois résidentielle et active, présente un fort besoin en aide à domicile pour seniors et familles avec enfants en situation de handicap.",
    highlights: [
      "Hôpital Ambroise-Paré à proximité",
      "Quartiers Marcel-Sembat, Jean-Jaurès, Pont de Sèvres desservis",
      "Liaison rapide avec Issy-les-Moulineaux et Sèvres",
    ],
    coverage: ["Marcel-Sembat", "Jean-Jaurès", "Pont de Sèvres", "Billancourt"],
    population: 122000,
  },
  {
    slug: "vincennes",
    city: "Vincennes",
    zipCodes: ["94300"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8478, lng: 2.4378 },
    intro:
      "Vincennes, ville résidentielle prisée, compte une population senior nombreuse et nécessite des solutions d'aide à domicile haut de gamme et flexibles.",
    highlights: [
      "Hôpital Bégin et clinique Saint-Mandé à proximité",
      "Forte densité de seniors propriétaires",
      "Couverture étendue à Saint-Mandé, Fontenay-sous-Bois, Montreuil",
    ],
    coverage: ["Centre-ville", "Bois de Vincennes", "République", "Fort"],
    population: 50000,
  },
  {
    slug: "saint-mande",
    city: "Saint-Mandé",
    zipCodes: ["94160"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8408, lng: 2.4189 },
    intro:
      "Saint-Mandé, commune dense et résidentielle, abrite de nombreux seniors actifs nécessitant des interventions ponctuelles ou régulières adaptées.",
    highlights: [
      "Proximité directe avec le bois de Vincennes",
      "Communauté seniors importante en résidence",
      "Coordination étroite avec Vincennes et Paris 12ᵉ",
    ],
    coverage: ["Avenue de Paris", "Mairie", "Place Lucien-Delahaye"],
    population: 23000,
  },
  {
    slug: "ivry-sur-seine",
    city: "Ivry-sur-Seine",
    zipCodes: ["94200"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8137, lng: 2.3879 },
    intro:
      "Ivry-sur-Seine, ville en pleine transformation, accueille une population variée. Nous y proposons des accompagnements pour seniors, personnes handicapées et familles avec enfants.",
    highlights: [
      "Hôpital Charles-Foix (gérontologique) sur Ivry",
      "Liens étroits avec le secteur médico-social local",
      "Couverture jusqu'au Kremlin-Bicêtre et à Vitry-sur-Seine",
    ],
    coverage: ["Centre-ville", "Pierre et Marie Curie", "Mirabeau", "Petit-Ivry"],
    population: 64000,
  },
  {
    slug: "le-kremlin-bicetre",
    city: "Le Kremlin-Bicêtre",
    zipCodes: ["94270"],
    department: { code: "94", name: "Val-de-Marne" },
    region: "Petite couronne",
    geo: { lat: 48.8129, lng: 2.3573 },
    intro:
      "Au Kremlin-Bicêtre, nous accompagnons régulièrement des familles avec enfants en situation de handicap (proximité du CHU Bicêtre) et des seniors en perte d'autonomie.",
    highlights: [
      "CHU Bicêtre — un des plus grands hôpitaux d'IDF",
      "Sortie d'hospitalisation : démarrage en 48 h",
      "Couverture étendue à Villejuif, Gentilly, Cachan",
    ],
    coverage: ["Centre-ville", "Convention", "Verdun-Hoche"],
    population: 27000,
  },
  {
    slug: "levallois-perret",
    city: "Levallois-Perret",
    zipCodes: ["92300"],
    department: { code: "92", name: "Hauts-de-Seine" },
    region: "Petite couronne",
    geo: { lat: 48.8945, lng: 2.2877 },
    intro:
      "Levallois-Perret, ville urbaine et densément peuplée, présente une demande croissante d'aide à domicile pour seniors et familles d'aidants actifs.",
    highlights: [
      "Hôpital Beaujon (Clichy) et Goussonville à proximité",
      "Population de jeunes actifs aidants pour leurs parents",
      "Coordination avec Clichy et Neuilly",
    ],
    coverage: ["Anatole-France", "Wilson", "Jaurès", "Eiffel"],
    population: 64000,
  },
];

export function getAgencyBySlug(slug: string): Agency | undefined {
  return agencies.find((a) => a.slug === slug);
}

export const agenciesByRegion = agencies.reduce<Record<string, Agency[]>>(
  (acc, a) => {
    (acc[a.region] ??= []).push(a);
    return acc;
  },
  {},
);
