import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type Props = {
  category: string;
  title: string;
  subtitle: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export default function ServiceHero({
  category,
  title,
  subtitle,
  highlights,
  image,
  imageAlt,
}: Props) {
  return (
    <section className="relative isolate bg-hero-gradient text-white pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-32 overflow-hidden">
      {/* Grille subtile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 85% 55% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 55% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* Décorations */}
      <div
        className="absolute -top-24 right-0 w-[30rem] h-[30rem] rounded-full mix-blend-screen blur-3xl opacity-25 animate-blob"
        style={{ background: "var(--color-secondary)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-0 w-[26rem] h-[26rem] rounded-full mix-blend-screen blur-3xl opacity-25 animate-blob"
        style={{ background: "var(--color-accent)", animationDelay: "4s" }}
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-8" aria-label="Fil d'ariane">
          <Link href="/" className="hover:text-secondary transition-colors">
            Accueil
          </Link>
          <span aria-hidden="true" className="text-white/30">›</span>
          <Link href="/services" className="hover:text-secondary transition-colors">
            Services
          </Link>
          <span aria-hidden="true" className="text-white/30">›</span>
          <span className="text-white/50">{category}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Texte */}
          <div className="lg:col-span-6 max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-bold text-white uppercase tracking-[0.14em] mb-6">
              {category}
            </span>

            <h1 className="text-white text-balance">{title}</h1>

            <p className="lead !text-white/90 mt-6">{subtitle}</p>

            {highlights.length > 0 ? (
              <ul className="mt-8 space-y-2.5">
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

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-9">
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Demander un devis gratuit
              </Button>
              <Button
                href={`tel:${siteConfig.phone.mainE164}`}
                variant="white"
                size="lg"
                icon={<span aria-hidden="true">📞</span>}
              >
                {siteConfig.phone.main}
              </Button>
            </div>

            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/90 mt-6">
              <span className="inline-flex items-center gap-1.5"><span aria-hidden="true">⏱️</span> Réponse en moins de 2 h</span>
              <span className="inline-flex items-center gap-1.5"><span aria-hidden="true">🏠</span> Visite gratuite</span>
              <span className="inline-flex items-center gap-1.5"><span aria-hidden="true">🤝</span> Sans engagement</span>
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] lg:h-[30rem] lg:aspect-auto rounded-[2rem] overflow-hidden shadow-lifted ring-1 ring-white/10">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
            </div>

            {/* Carte flottante : note + agrément */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lifted items-center gap-3 animate-float">
              <span className="text-2xl" aria-hidden="true">🛡️</span>
              <div className="text-xs leading-tight">
                <div className="font-bold text-primary-dark text-sm">Service agréé SAP</div>
                <div className="text-text-light">Crédit d&apos;impôt 50 % automatique</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
