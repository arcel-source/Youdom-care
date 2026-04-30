import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig, brandStats } from "@/lib/site-config";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 pb-20 sm:pb-28 bg-hero-gradient text-white">
      {/* Image de fond floutée pour ambiance */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/curated/home-hero-couple-warm.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Blobs décoratifs */}
      <div
        className="absolute -top-20 -right-20 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{ background: "var(--color-secondary)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{ background: "var(--color-accent)", animationDelay: "4s" }}
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Colonne texte */}
          <div className="lg:col-span-7 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium text-white mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft inline-block" />
              Réponse en moins de {brandStats.responseTimeHours} h • {siteConfig.zone}
            </span>

            <h1 className="text-white animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Vous n&apos;êtes plus seul.
              <br />
              <span className="text-secondary">L&apos;aide à domicile</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> qui prend soin de toute la famille.</span>
            </h1>

            <p className="lead text-white/90 mt-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Nous accompagnons votre proche chez lui — toilette, repas, présence,
              soins quotidiens — avec le <strong className="text-white">même
              intervenant</strong>, des <strong className="text-white">tarifs transparents</strong> et
              <strong className="text-white"> 50 % de crédit d&apos;impôt</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
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

            <p className="text-sm text-white/70 mt-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <span aria-hidden="true">✓</span> Visite à domicile gratuite •
              <span aria-hidden="true"> ✓</span> Sans engagement •
              <span aria-hidden="true"> ✓</span> Réponse de qualification en 2 h
            </p>
          </div>

          {/* Colonne carte preuves */}
          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <div className="relative">
              {/* Image principale */}
              <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src="/images/curated/service-aide-personnes-agees.jpg"
                  alt="Aide à domicile bienveillante pour personne âgée"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
              </div>

              {/* Carte flottante note Google */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lifted items-center gap-3 animate-float">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary-dark">4,9</span>
                  <div className="flex gap-0.5 text-secondary text-sm">
                    <span aria-hidden="true">★★★★★</span>
                  </div>
                </div>
                <div className="text-xs text-text-light leading-tight">
                  <div className="font-semibold text-text">Avis Google</div>
                  <div>+ 220 avis vérifiés</div>
                </div>
              </div>

              {/* Carte flottante familles */}
              <div className="hidden sm:flex absolute -top-6 -right-6 bg-white rounded-2xl px-5 py-4 shadow-lifted items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success-50 flex items-center justify-center text-2xl">
                  🏠
                </div>
                <div className="text-xs leading-tight">
                  <div className="font-bold text-primary-dark text-base">{brandStats.familiesAccompanied}+</div>
                  <div className="text-text-light">familles accompagnées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
