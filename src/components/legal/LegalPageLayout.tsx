import { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

type Props = {
  title: string;
  subtitle?: string;
  lastUpdate: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdate,
  children,
}: Props) {
  return (
    <>
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-12">
        <Container>
          <nav
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
            aria-label="Fil d'ariane"
          >
            <Link href="/" className="hover:text-secondary transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">{title}</span>
          </nav>
          <span className="eyebrow !text-secondary">Mentions obligatoires</span>
          <h1 className="text-white">{title}</h1>
          {subtitle ? (
            <p className="lead !text-white/85 mt-3 max-w-3xl">{subtitle}</p>
          ) : null}
          <p className="text-sm text-white/60 mt-4">
            Dernière mise à jour : {lastUpdate}
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container size="narrow">
          <article className="prose-legal">
            <style>{`
              .prose-legal h2 {
                font-size: 1.5rem;
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                color: var(--color-primary-dark);
              }
              .prose-legal h3 {
                font-size: 1.125rem;
                margin-top: 2rem;
                margin-bottom: 0.75rem;
                color: var(--color-primary-dark);
              }
              .prose-legal p {
                line-height: 1.75;
                margin-bottom: 1rem;
                color: var(--color-text);
              }
              .prose-legal ul {
                margin-bottom: 1.25rem;
                padding-left: 0;
              }
              .prose-legal li {
                line-height: 1.65;
                margin-bottom: 0.5rem;
                padding-left: 1.5rem;
                position: relative;
                color: var(--color-text-light);
              }
              .prose-legal li::before {
                content: "◆";
                color: var(--color-secondary);
                position: absolute;
                left: 0;
                top: 0;
              }
              .prose-legal a {
                color: var(--color-primary);
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 2px;
              }
              .prose-legal strong {
                color: var(--color-primary-dark);
                font-weight: 700;
              }
            `}</style>
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}
