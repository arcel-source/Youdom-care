import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * PageHero — héros de page réutilisable et bien dimensionné.
 *
 * Objectif : une zone d'en-tête cohérente, ample et professionnelle sur tout
 * le site. Deux mises en page :
 *   - "split"  : texte à gauche, visuel (image + carte de preuve) à droite
 *   - "center" : contenu centré, sans visuel (pages éditoriales/légales)
 *
 * Les dimensions (padding vertical, hauteur d'image, échelle typographique)
 * sont pensées pour respirer : padding généreux, image haute, largeur de
 * lecture maîtrisée.
 */

export type Crumb = { name: string; href?: string };

type Cta = { label: string; href: string; icon?: React.ReactNode };

type Props = {
  eyebrow?: string;
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumb?: Crumb[];
  highlights?: string[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  footnote?: React.ReactNode;
  image?: { src: string; alt: string };
  /** Carte flottante posée sur le visuel (badge de confiance). */
  proof?: { icon?: React.ReactNode; title: string; subtitle: string };
  layout?: "split" | "center";
  /** Rendu compact pour les pages secondaires (moins de padding vertical). */
  size?: "lg" | "md";
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  badge,
  title,
  subtitle,
  breadcrumb,
  highlights,
  primaryCta,
  secondaryCta,
  footnote,
  image,
  proof,
  layout = image ? "split" : "center",
  size = "lg",
  children,
}: Props) {
  const pad =
    size === "lg"
      ? "pt-14 sm:pt-20 lg:pt-24 pb-24 sm:pb-32"
      : "pt-12 sm:pt-16 pb-16 sm:pb-24";

  return (
    <section
      className={`relative isolate overflow-hidden bg-hero-gradient text-white ${pad}`}
    >
      {/* Grille subtile en overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* Blobs décoratifs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[30rem] h-[30rem] rounded-full mix-blend-screen blur-3xl opacity-25 animate-blob"
        style={{ background: "var(--color-secondary)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full mix-blend-screen blur-3xl opacity-25 animate-blob"
        style={{ background: "var(--color-accent)", animationDelay: "4s" }}
      />

      <Container size="wide" className="relative z-10">
        {breadcrumb && breadcrumb.length > 0 ? (
          <nav
            className="flex items-center flex-wrap gap-2 text-sm text-white/70 mb-8"
            aria-label="Fil d'ariane"
          >
            {breadcrumb.map((c, i) => (
              <span key={c.name} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-secondary transition-colors">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-white/50">{c.name}</span>
                )}
                {i < breadcrumb.length - 1 ? (
                  <span aria-hidden="true" className="text-white/30">
                    ›
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}

        <div
          className={
            layout === "split"
              ? "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              : "max-w-3xl mx-auto text-center"
          }
        >
          {/* Colonne texte */}
          <div className={layout === "split" ? "lg:col-span-6 max-w-xl" : ""}>
            {badge ? (
              <div className="mb-6">{badge}</div>
            ) : eyebrow ? (
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold uppercase tracking-[0.14em] text-white mb-6 ${
                  layout === "center" ? "mx-auto" : ""
                }`}
              >
                {eyebrow}
              </span>
            ) : null}

            <h1 className="text-white text-balance">{title}</h1>

            {subtitle ? (
              <p
                className={`lead text-white/85 mt-6 ${
                  layout === "center" ? "mx-auto max-w-2xl" : ""
                }`}
              >
                {subtitle}
              </p>
            ) : null}

            {highlights && highlights.length > 0 ? (
              <ul
                className={`mt-8 grid gap-2.5 ${
                  layout === "center"
                    ? "sm:grid-cols-2 max-w-xl mx-auto text-left"
                    : ""
                }`}
              >
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-white/90">
                    <span className="w-6 h-6 rounded-full bg-secondary text-primary-dark flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {primaryCta || secondaryCta ? (
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-9 ${
                  layout === "center" ? "justify-center" : ""
                }`}
              >
                {primaryCta ? (
                  <Button href={primaryCta.href} variant="primary" size="lg" glow>
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    variant="white"
                    size="lg"
                    icon={secondaryCta.icon}
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}

            {footnote ? (
              <p className="text-sm text-white/70 mt-5">{footnote}</p>
            ) : null}

            {children}
          </div>

          {/* Colonne visuel */}
          {layout === "split" && image ? (
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] lg:h-[32rem] lg:aspect-auto rounded-[2rem] overflow-hidden shadow-lifted ring-1 ring-white/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/45 via-transparent to-transparent" />
              </div>

              {proof ? (
                <div className="hidden sm:flex absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lifted items-center gap-3 animate-float">
                  {proof.icon ? (
                    <span className="text-2xl shrink-0" aria-hidden="true">
                      {proof.icon}
                    </span>
                  ) : null}
                  <div className="text-xs leading-tight">
                    <div className="font-bold text-primary-dark text-sm">{proof.title}</div>
                    <div className="text-text-light">{proof.subtitle}</div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
