import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig, brandStats } from "@/lib/site-config";

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient text-white pt-12 sm:pt-16 lg:pt-24 pb-24 sm:pb-32 lg:pb-40">
      {/* Voile sombre pour garantir la lisibilité du texte sur le dégradé */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-primary-dark/30 to-transparent"
      />

      {/* Grille subtile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Blobs décoratifs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full mix-blend-screen blur-3xl opacity-30 animate-blob"
        style={{ background: "var(--color-secondary)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 w-[32rem] h-[32rem] rounded-full mix-blend-screen blur-3xl opacity-30 animate-blob"
        style={{ background: "var(--color-accent)", animationDelay: "4s" }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Colonne texte */}
          <div className="lg:col-span-6 max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium text-white mb-7 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft inline-block" />
              Réponse en moins de {brandStats.responseTimeHours} h • {siteConfig.zone}
            </span>

            <h1
              className="text-white text-balance animate-fade-in-up"
              style={{ animationDelay: "100ms", fontSize: "clamp(2.5rem, 5.2vw, 4rem)" }}
            >
              Vous n&apos;êtes plus seul.
              <br />
              <span className="text-secondary">L&apos;aide à domicile</span> qui prend
              soin de toute la famille.
            </h1>

            <p
              className="lead !text-white/95 mt-7 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Nous accompagnons votre proche chez lui — toilette, repas, présence,
              soins quotidiens — avec le{" "}
              <strong className="text-white">même intervenant</strong>, des{" "}
              <strong className="text-white">tarifs transparents</strong> et{" "}
              <strong className="text-white">50 % de crédit d&apos;impôt</strong>.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-9 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Devis en ligne — 3 min
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

            <p
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/90 mt-6 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="text-success">✓</span> Visite à domicile gratuite
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="text-success">✓</span> Sans engagement
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="text-success">✓</span> Qualification en 2 h
              </span>
            </p>
          </div>

          {/* Colonne visuel */}
          <div
            className="lg:col-span-6 animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative">
              <div className="relative aspect-[4/3] lg:h-[34rem] lg:aspect-auto rounded-[2rem] overflow-hidden shadow-lifted ring-1 ring-white/10">
                <Image
                  src="/images/curated/service-aide-personnes-agees.jpg"
                  alt="Auxiliaire de vie Youdom Care accompagnant une personne âgée à domicile"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent" />
              </div>

              {/* Carte note Google */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lifted items-center gap-3 animate-float">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary-dark leading-none">4,9</span>
                  <div className="flex gap-0.5 text-secondary text-sm mt-1" aria-hidden="true">
                    ★★★★★
                  </div>
                </div>
                <div className="text-xs text-text-light leading-tight">
                  <div className="font-semibold text-text">Avis Google</div>
                  <div>+ 220 avis vérifiés</div>
                </div>
              </div>

              {/* Carte familles */}
              <div className="hidden sm:flex absolute -top-6 -right-6 bg-white rounded-2xl px-5 py-4 shadow-lifted items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success-50 flex items-center justify-center text-2xl shrink-0">
                  🏠
                </div>
                <div className="text-xs leading-tight">
                  <div className="font-bold text-primary-dark text-lg leading-none">
                    {brandStats.familiesAccompanied}+
                  </div>
                  <div className="text-text-light mt-0.5">familles accompagnées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
