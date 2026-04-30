import type { MetadataRoute } from "next";
import { siteConfig, services, personas } from "@/lib/site-config";
import { articles } from "@/lib/blog-articles";
import { agencies } from "@/lib/agencies";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    { url: "/", priority: 1, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/aides-financieres", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/comment-ca-marche", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/qui-sommes-nous", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/temoignages", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/guides", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/agence", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/newsletter", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/recrutement", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/demander-devis", priority: 0.95, changeFrequency: "monthly" as const },
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

  const blogRoutes = articles.map((article) => ({
    url: `/blog/${article.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastMod: article.updatedAt ?? article.publishedAt,
  }));

  const agencyRoutes = agencies.map((a) => ({
    url: `/agence/${a.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const guideRoutes = guides.map((g) => ({
    url: `/guides/${g.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.url}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...serviceRoutes.map((r) => ({
      url: `${base}${r.url}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...personaRoutes.map((r) => ({
      url: `${base}${r.url}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...agencyRoutes.map((r) => ({
      url: `${base}${r.url}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...guideRoutes.map((r) => ({
      url: `${base}${r.url}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...blogRoutes.map((r) => ({
      url: `${base}${r.url}`,
      lastModified: new Date(r.lastMod),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
  ];
}
