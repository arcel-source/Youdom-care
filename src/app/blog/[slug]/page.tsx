import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ArticleRenderer from "@/components/blog/ArticleRenderer";
import ArticleCard from "@/components/blog/ArticleCard";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  formatPublishDate,
} from "@/lib/blog-articles";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);
  const articleUrl = `/blog/${article.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.excerpt,
            url: articleUrl,
            image: article.image,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt,
            category: article.category,
          }),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: article.title, url: articleUrl },
          ]),
        ]}
      />
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />
        <Container size="default" className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog" className="hover:text-secondary transition-colors">
              Blog
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50 truncate">{article.title}</span>
          </nav>

          <div className="flex items-center gap-3 text-sm mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-white/70">{formatPublishDate(article.publishedAt)}</span>
            <span className="text-white/50">•</span>
            <span className="text-white/70">{article.readingTime} min de lecture</span>
          </div>

          <h1 className="text-white max-w-3xl">{article.title}</h1>

          <p className="lead !text-white/90 max-w-3xl mt-5">{article.excerpt}</p>
        </Container>
      </section>

      {/* IMAGE PRINCIPALE */}
      <section className="bg-white py-8 sm:py-12">
        <Container size="default">
          <div className="relative h-72 sm:h-[440px] rounded-3xl overflow-hidden shadow-lifted -mt-20 sm:-mt-24 z-10">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1024px, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* CONTENU ARTICLE */}
      <article className="bg-white pb-16 sm:pb-24">
        <Container size="narrow">
          <ArticleRenderer blocks={article.content} />

          {/* CTA en fin d'article */}
          <div className="mt-12 p-6 sm:p-8 bg-warm rounded-3xl border border-border text-center">
            <h3 className="text-primary-dark mb-2">
              Vous avez besoin d&apos;être accompagné ?
            </h3>
            <p className="text-text-light mb-5 max-w-xl mx-auto">
              Nous sommes là pour répondre à vos questions, monter vos dossiers d&apos;aide
              et construire un plan d&apos;accompagnement à votre rythme.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/demander-devis" variant="primary" size="md" glow>
                Demander un devis gratuit
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Poser une question
              </Button>
            </div>
          </div>
        </Container>
      </article>

      {/* ARTICLES LIÉS */}
      {related.length > 0 ? (
        <section className="bg-warm-grain py-16 sm:py-20">
          <Container size="wide">
            <div className="flex items-baseline justify-between gap-4 mb-8">
              <div>
                <span className="eyebrow">Pour aller plus loin</span>
                <h2 className="text-primary-dark m-0">Articles recommandés</h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-bold text-primary hover:underline"
              >
                Tous les articles →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
