import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const aidantPainPoints = [
  "Vous courez entre votre travail, votre famille et votre proche dépendant",
  "Vous culpabilisez de ne pas faire « assez »",
  "Vous ne savez pas par où commencer pour les démarches",
  "Vous craquez physiquement et émotionnellement",
];

export default function AidantsCapture() {
  return (
    <section className="bg-gradient-to-br from-accent-50 via-white to-secondary-50 py-16 sm:py-24 overflow-hidden">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-[460px] rounded-3xl overflow-hidden shadow-lifted">
              <Image
                src="/images/curated/public-aidants-knitting-granddaughter.jpg"
                alt="Aidante familiale et bénéficiaire échangent un moment de complicité"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </div>

            {/* Stat flottante */}
            <div className="hidden sm:block absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lifted border border-border max-w-[240px]">
              <div className="text-3xl font-bold text-primary-dark">11 millions</div>
              <p className="text-xs text-text-light leading-snug">
                d&apos;aidants familiaux en France. Vous n&apos;êtes pas seul.
              </p>
            </div>
          </div>

          {/* Contenu */}
          <div className="lg:col-span-7">
            <span className="eyebrow !text-accent-dark">Pour les aidants familiaux</span>
            <h2 className="text-primary-dark">
              Vous aidez un proche au quotidien.
              <br />
              <span className="text-accent-dark">Qui prend soin de vous ?</span>
            </h2>

            <p className="lead mt-4">
              Être aidant, c&apos;est un rôle invisible et épuisant. Notre mission, c&apos;est
              aussi de <strong>vous soulager</strong>, vous redonner du souffle et faire le
              relais — sans jugement, à votre rythme.
            </p>

            <ul className="mt-6 space-y-3">
              {aidantPainPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-text">
                  <span className="w-6 h-6 rounded-full bg-white border-2 border-accent flex items-center justify-center text-accent text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-accent/20 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center text-3xl shrink-0">
                  📕
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider font-bold text-accent-dark mb-1">
                    Guide gratuit
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-1">
                    Le guide de l&apos;aidant familial 2026
                  </h3>
                  <p className="text-sm text-text-light mb-4">
                    Vos droits, le congé de proche aidant, les solutions de répit, les aides financières.
                    44 pages, format PDF.
                  </p>
                  <Button href="/publics/aidants-familiaux" variant="secondary" size="md">
                    Télécharger le guide →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
