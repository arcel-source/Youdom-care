import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/blog/ArticleCard";
import FinalCTA from "@/components/sections/FinalCTA";
import { articles, articlesByCategory } from "@/lib/blog-articles";

export const metadata: Metadata = {
  title: "Blog Youdom Care — Conseils, guides, ressources pour aider un proche",
  description:
    "Articles, guides et conseils pour les seniors, les personnes en situation de handicap et leurs aidants familiaux. Aides financières, prévention, accompagnement.",
};

const categoryOrder = [
  "Seniors",
  "Aidants",
  "Handicap",
  "Aides financières",
  "Conseils",
];

export default function BlogIndexPage() {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const [featured, ...rest] = sorted;

  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Blog</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Ressources</span>
            <h1 className="text-white">
              Le blog Youdom Care.
              <br />
              <span className="text-secondary">Comprendre, anticiper, agir.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Guides pratiques, retours d&apos;expérience, conseils d&apos;experts pour
              vous aider à accompagner un proche, défendre vos droits et améliorer
              le quotidien.
            </p>
          </div>
        </Container>
      </section>

      {/* ARTICLE FEATURED */}
      {featured ? (
        <section className="bg-white py-12 sm:py-16">
          <Container size="wide">
            <span className="eyebrow">À la une</span>
            <h2 className="mb-8">L&apos;article du moment</h2>
            <ArticleCard article={featured} variant="featured" />
          </Container>
        </section>
      ) : null}

      {/* ARTICLES PAR CATÉGORIE */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          {categoryOrder.map((cat) => {
            const inCat = articlesByCategory[cat];
            if (!inCat || inCat.length === 0) return null;
            const visible = inCat.filter((a) => a.slug !== featured?.slug);
            if (visible.length === 0) return null;

            return (
              <div key={cat} className="mb-14 last:mb-0">
                <div className="flex items-baseline justify-between gap-4 mb-6">
                  <h2 className="text-primary-dark m-0">{cat}</h2>
                  <span className="text-sm text-text-muted">
                    {visible.length} article{visible.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
                  {visible.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Reste (au cas où une catégorie n'est pas dans categoryOrder) */}
          {(() => {
            const ordered = new Set(categoryOrder);
            const others = rest.filter((a) => !ordered.has(a.category));
            if (others.length === 0) return null;
            return (
              <div className="mb-14">
                <h2 className="text-primary-dark m-0 mb-6">Autres ressources</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
                  {others.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            );
          })()}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
