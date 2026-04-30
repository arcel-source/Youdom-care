import type { MetadataRoute } from "next";
import { siteConfig, services, personas } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    { url: "/", priority: 1, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/aides-financieres", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/comment-ca-marche", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/qui-sommes-nous", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/temoignages", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/recrutement", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/demander-devis", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/cgu", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `/services/${service.slug}`,
    priority: service.featured ? 0.85 : 0.75,
    changeFrequency: "monthly" as const,
  }));

  const personaRoutes = personas.map((persona) => ({
    url: persona.href,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...personaRoutes].map((route) => ({
    url: `${base}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
