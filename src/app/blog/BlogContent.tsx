"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    slug: "guide-apa-allocation-personnalisee-autonomie",
    title: "Guide complet de l'APA : Allocation Personnalisée d'Autonomie",
    excerpt: "Tout savoir sur l'APA : conditions d'éligibilité, montants, démarches, et comment en bénéficier pour financer votre aide à domicile.",
    category: "Aides financières",
    date: "28 mars 2026",
    readTime: "8 min",
  },
  {
    slug: "credit-impot-aide-domicile-2026",
    title: "Crédit d'impôt 50% pour l'aide à domicile en 2026",
    excerpt: "Comment bénéficier du crédit d'impôt de 50% sur vos dépenses d'aide à domicile ? Plafonds, conditions et démarches expliqués simplement.",
    category: "Aides financières",
    date: "25 mars 2026",
    readTime: "6 min",
  },
  {
    slug: "choisir-auxiliaire-vie-conseils",
    title: "Comment bien choisir son auxiliaire de vie ?",
    excerpt: "Les critères essentiels pour choisir la bonne auxiliaire de vie : qualifications, personnalité, expérience. Nos conseils d'experts.",
    category: "Conseils",
    date: "22 mars 2026",
    readTime: "5 min",
  },
  {
    slug: "maintien-domicile-personnes-agees-avantages",
    title: "Maintien à domicile : pourquoi c'est la meilleure solution",
    excerpt: "Les avantages du maintien à domicile pour les personnes âgées : bien-être, autonomie, coût, lien social. Études et témoignages à l'appui.",
    category: "Bien-être",
    date: "18 mars 2026",
    readTime: "7 min",
  },
  {
    slug: "aide-alzheimer-domicile-conseils-aidants",
    title: "Accompagner un proche atteint d'Alzheimer à domicile",
    excerpt: "Conseils pratiques pour les aidants familiaux : communication, sécurité, activités adaptées, quand faire appel à un professionnel.",
    category: "Santé",
    date: "15 mars 2026",
    readTime: "9 min",
  },
  {
    slug: "pch-prestation-compensation-handicap-guide",
    title: "PCH : tout sur la Prestation de Compensation du Handicap",
    excerpt: "Guide complet de la PCH : qui peut en bénéficier, quels montants, comment faire la demande, les délais à prévoir.",
    category: "Aides financières",
    date: "12 mars 2026",
    readTime: "7 min",
  },
];

const categoryColors: Record<string, string> = {
  "Aides financières": "bg-secondary/10 text-secondary",
  "Conseils": "bg-accent/10 text-accent",
  "Bien-être": "bg-green-100 text-green-700",
  "Santé": "bg-red-100 text-red-600",
};

export default function BlogContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Conseils & <span className="text-secondary">actualités</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Guides pratiques, aides financières et conseils pour le maintien à domicile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-5xl opacity-30">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[a.category] || "bg-gray-100 text-gray-600"}`}>
                      {a.category}
                    </span>
                    <span className="text-xs text-text-light">{a.readTime}</span>
                  </div>
                  <h2 className="font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {a.title}
                  </h2>
                  <p className="text-text-light text-sm leading-relaxed line-clamp-3 mb-4">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-light">{a.date}</span>
                    <Link href={`/blog/${a.slug}`} className="text-primary font-semibold text-sm hover:text-primary-light transition-colors">
                      Lire →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
