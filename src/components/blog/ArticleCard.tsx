import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/blog-articles";
import { formatPublishDate } from "@/lib/blog-articles";

type Props = {
  article: Article;
  variant?: "default" | "featured" | "compact";
};

export default function ArticleCard({ article, variant = "default" }: Props) {
  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="group grid lg:grid-cols-2 gap-6 lg:gap-10 bg-white rounded-3xl overflow-hidden border border-border card-interactive"
      >
        <div className="relative h-64 lg:h-full">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="p-6 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-text-muted">{article.readingTime} min de lecture</span>
          </div>
          <h3 className="text-2xl sm:text-3xl mb-3 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-text-light leading-relaxed mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-border">
            <span className="text-sm text-text-muted">
              {formatPublishDate(article.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
              Lire l&apos;article →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="group flex gap-4 items-start py-4 border-b border-border last:border-0"
      >
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="128px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
            {article.category}
          </div>
          <h3 className="text-base font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-text-light line-clamp-2">{article.excerpt}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur text-primary-dark text-xs font-semibold">
          {article.category}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-text-light leading-relaxed mb-4 flex-1 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-border-light">
          <span className="text-xs text-text-muted">
            {formatPublishDate(article.publishedAt)}
          </span>
          <span className="text-xs text-text-muted">{article.readingTime} min</span>
        </div>
      </div>
    </Link>
  );
}
