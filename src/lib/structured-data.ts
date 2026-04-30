/**
 * Helpers pour générer les données Schema.org JSON-LD.
 * Centralisé ici pour éviter la duplication et faciliter la maintenance.
 */

import { siteConfig, brandStats, agrements } from "@/lib/site-config";

const ORG_ID = `${siteConfig.url}#organization`;

/**
 * LocalBusiness — entité principale du site.
 * À inclure une fois (dans le layout) pour que toutes les pages héritent.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: siteConfig.name,
    description:
      "Service d'aide à domicile humain et fiable pour personnes âgées, en situation de handicap ou en perte d'autonomie.",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logos/logo-youdom-care.png`,
    image: `${siteConfig.url}/og-image.png`,
    telephone: siteConfig.phone.mainE164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8456,
      longitude: 2.3735,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Île-de-France",
      },
    ],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "220",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    foundingDate: `${siteConfig.founded}-01-01`,
    knowsAbout: [
      "aide à domicile",
      "auxiliaire de vie",
      "personnes âgées",
      "handicap",
      "Alzheimer",
      "maintien à domicile",
    ],
    hasCredential: agrements.map((a) => ({
      "@type": "EducationalOccupationalCredential",
      name: a.label,
    })),
  };
}

/**
 * BreadcrumbList — pour chaque page interne, génère le fil d'Ariane.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Service — utilisé sur les pages /services/[slug].
 */
export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
  audienceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${siteConfig.url}${params.url}`,
    image: params.image ? `${siteConfig.url}${params.image}` : undefined,
    provider: { "@id": ORG_ID },
    serviceType: "Aide à domicile",
    areaServed: { "@type": "AdministrativeArea", name: siteConfig.zone },
    audience: params.audienceType
      ? { "@type": "Audience", audienceType: params.audienceType }
      : undefined,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      eligibleRegion: { "@type": "Country", name: "France" },
    },
  };
}

/**
 * FAQPage — pour les pages avec un bloc FAQ.
 */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Article (BlogPosting) — pour les pages blog.
 */
export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    image: [`${siteConfig.url}${params.image}`],
    url: `${siteConfig.url}${params.url}`,
    datePublished: params.publishedAt,
    dateModified: params.updatedAt ?? params.publishedAt,
    author: { "@type": "Organization", "@id": ORG_ID, name: siteConfig.name },
    publisher: { "@id": ORG_ID },
    articleSection: params.category,
    inLanguage: "fr-FR",
  };
}

/**
 * Organization — utilisé sur la page Qui sommes-nous (variant LocalBusiness).
 * Reprend les données du LocalBusiness mais insiste sur les valeurs.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logos/logo-youdom-care.png`,
    sameAs: [],
    foundingDate: `${siteConfig.founded}-01-01`,
    numberOfEmployees: brandStats.caregiversCount,
  };
}
