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
    <section className="relative bg-hero-gradient text-white pt-10 sm:pt-14 pb-20 sm:pb-28 overflow-hidden">
      {/* Décorations */}
      <div
        className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
        style={{ background: "var(--color-secondary)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-0 w-[24rem] h-[24rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
        style={{ background: "var(--color-accent)", animationDelay: "4s" }}
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
          <Link href="/" className="hover:text-secondary transition-colors">
            Accueil
          </Link>
          <span aria-hidden="true">›</span>
          <Link href="/services" className="hover:text-secondary transition-colors">
            Services
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-white/50">{category}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Texte */}
          <div className="lg:col-span-7 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-bold text-white uppercase tracking-wider mb-5">
              {category}
            </span>

            <h1 className="text-white">{title}</h1>

            <p className="lead text-white/90 mt-5">{subtitle}</p>

            {highlights.length > 0 ? (
              <ul className="mt-7 space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-white/90">
                    <span className="w-6 h-6 rounded-full bg-secondary text-primary-dark flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
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

            <p className="text-sm text-white/70 mt-5">
              <span aria-hidden="true">⏱️</span> Réponse en moins de 2 h •
              <span aria-hidden="true"> 🏠</span> Visite à domicile gratuite •
              <span aria-hidden="true"> 🤝</span> Sans engagement
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lifted">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </div>

            {/* Carte flottante : note + agrément */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-3 shadow-lifted items-center gap-3">
              <span className="text-2xl" aria-hidden="true">⭐</span>
              <div className="text-xs leading-tight">
                <div className="font-bold text-primary-dark">Service agréé SAP</div>
                <div className="text-text-light">Crédit d&apos;impôt 50 % automatique</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
