/**
 * Données de démonstration de l'espace client.
 *
 * ⚠️ 100 % fictives — aucune donnée personnelle réelle. Centralisées ici pour
 * alimenter le tableau de bord et ses sous-pages (planning, messagerie,
 * factures, profil). Lors du branchement backend, remplacer ce module par des
 * appels serveur authentifiés (l'interface consommant les mêmes types).
 */

export const account = {
  clientFirstName: "Marie",
  clientLastName: "Thibault",
  beneficiary: "Mme Thérèse T.",
  beneficiaryAge: 84,
  relation: "Fille de la bénéficiaire",
  city: "Paris 12ᵉ",
  clientSince: "Mars 2024",
  plan: "Aide aux personnes âgées — 48 h/mois",
  coordinator: {
    name: "Sandrine R.",
    role: "Coordinatrice dédiée",
    initials: "SR",
    availability: "Lun. – Sam. · 8h – 20h",
  },
  caregiver: {
    name: "Aïcha M.",
    role: "Auxiliaire de vie principale",
    initials: "AM",
    since: "Mars 2024",
    backup: "Christine D.",
  },
} as const;

export type InterventionStatus = "confirmed" | "tentative" | "done";

export const upcomingInterventions = [
  {
    id: "iv-240506",
    date: "2026-05-06",
    label: "Mer. 6 mai",
    time: "8h30 – 11h30",
    hours: 3,
    caregiver: "Aïcha M.",
    type: "Aide à la toilette + petit-déjeuner + courses",
    status: "confirmed" as InterventionStatus,
  },
  {
    id: "iv-240508",
    date: "2026-05-08",
    label: "Ven. 8 mai",
    time: "8h30 – 11h30",
    hours: 3,
    caregiver: "Aïcha M.",
    type: "Aide à la toilette + accompagnement RDV kiné",
    status: "confirmed" as InterventionStatus,
  },
  {
    id: "iv-240509",
    date: "2026-05-09",
    label: "Sam. 9 mai",
    time: "14h00 – 17h00",
    hours: 3,
    caregiver: "Christine D. (binôme)",
    type: "Sortie au marché + lien social",
    status: "tentative" as InterventionStatus,
  },
  {
    id: "iv-240511",
    date: "2026-05-11",
    label: "Lun. 11 mai",
    time: "8h30 – 11h30",
    hours: 3,
    caregiver: "Aïcha M.",
    type: "Aide à la toilette + préparation repas",
    status: "confirmed" as InterventionStatus,
  },
] as const;

export const pastInterventions = [
  {
    id: "iv-240501",
    label: "Ven. 1ᵉʳ mai",
    date: "2026-05-01",
    hours: 3,
    caregiver: "Aïcha M.",
    note: "RAS, bénéficiaire en forme. Bonne prise du déjeuner.",
    rating: 5,
  },
  {
    id: "iv-240429",
    label: "Mer. 29 avril",
    date: "2026-04-29",
    hours: 3,
    caregiver: "Aïcha M.",
    note: "Chute évitée dans la salle de bain — barre d'appui signalée et installée depuis.",
    rating: 5,
  },
  {
    id: "iv-240427",
    label: "Lun. 27 avril",
    date: "2026-04-27",
    hours: 3,
    caregiver: "Aïcha M.",
    note: "Bonne humeur, visite d'une voisine. Balade courte dans le quartier.",
    rating: 5,
  },
  {
    id: "iv-240424",
    label: "Ven. 24 avril",
    date: "2026-04-24",
    hours: 3,
    caregiver: "Christine D.",
    note: "Remplacement ponctuel. Transmission complète, aucun souci.",
    rating: 4,
  },
] as const;

export type InvoiceStatus = "paid" | "pending";

export const invoices = [
  { id: "F-2026-0042", period: "Avril 2026", date: "30 avr. 2026", gross: 768, credit: 384, status: "paid" as InvoiceStatus },
  { id: "F-2026-0028", period: "Mars 2026", date: "31 mars 2026", gross: 768, credit: 384, status: "paid" as InvoiceStatus },
  { id: "F-2026-0014", period: "Février 2026", date: "29 fév. 2026", gross: 720, credit: 360, status: "paid" as InvoiceStatus },
  { id: "F-2026-0006", period: "Janvier 2026", date: "31 janv. 2026", gross: 768, credit: 384, status: "paid" as InvoiceStatus },
] as const;

export const messages = [
  {
    id: "m1",
    from: "Sandrine R.",
    role: "Coordinatrice dédiée",
    initials: "SR",
    when: "il y a 2 h",
    unread: true,
    preview:
      "Bonjour Marie, je confirme la mise en place du nouveau planning à partir du 6 mai. Christine, l'auxiliaire de remplacement, sera présentée samedi lors de la sortie au marché.",
  },
  {
    id: "m2",
    from: "Aïcha M.",
    role: "Auxiliaire de vie",
    initials: "AM",
    when: "hier",
    unread: false,
    preview:
      "Bonjour Madame, votre maman a très bien dormi et a pris son petit-déjeuner avec appétit ce matin. Tout s'est bien passé.",
  },
  {
    id: "m3",
    from: "Sandrine R.",
    role: "Coordinatrice dédiée",
    initials: "SR",
    when: "il y a 4 j",
    unread: false,
    preview:
      "Votre attestation fiscale 2025 est disponible dans l'onglet Factures. Elle vous permet de déclarer le crédit d'impôt de 50 %.",
  },
] as const;

export const documents = [
  { id: "d1", label: "Attestation fiscale 2025", type: "PDF", size: "146 Ko", date: "15 janv. 2026" },
  { id: "d2", label: "Contrat de prestation", type: "PDF", size: "312 Ko", date: "12 mars 2024" },
  { id: "d3", label: "Plan d'aide personnalisé", type: "PDF", size: "208 Ko", date: "18 mars 2024" },
] as const;

/** Consommation mensuelle d'heures — pour un mini-graphe. */
export const monthlyHours = [
  { month: "Déc.", hours: 44 },
  { month: "Janv.", hours: 48 },
  { month: "Fév.", hours: 45 },
  { month: "Mars", hours: 48 },
  { month: "Avr.", hours: 48 },
  { month: "Mai", hours: 30 },
] as const;

export const monthPlan = { done: 30, planned: 48 } as const;
