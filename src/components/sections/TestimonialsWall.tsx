import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site-config";

export default function TestimonialsWall() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Ils nous font confiance"
          title="La parole à ceux qu'on accompagne"
          description="Des familles, des bénéficiaires, des aidants. Des histoires vraies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-border hover:shadow-lifted transition-shadow flex flex-col"
            >
              {/* Guillemet décoratif */}
              <div
                className="absolute top-3 right-4 text-7xl font-display text-secondary/20 leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Étoiles */}
              <div className="flex gap-1 mb-3 text-secondary text-lg" aria-label={`${t.rating} sur 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text leading-relaxed mb-5 flex-1 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Auteur */}
              <div className="flex items-start gap-3 pt-4 border-t border-border-light">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-primary-dark">{t.name}</div>
                  <div className="text-text-light text-xs">{t.relation}</div>
                  <div className="text-text-muted text-xs mt-0.5">
                    📍 {t.city} • {t.duration}
                  </div>
                </div>
              </div>

              {/* Tag service */}
              <div className="absolute -top-2 left-6 inline-flex items-center px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                {t.service}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-card border border-border">
            <div className="flex gap-0.5 text-secondary text-xl" aria-hidden="true">
              ★★★★★
            </div>
            <div className="text-left">
              <div className="font-bold text-primary-dark">4,9 / 5</div>
              <div className="text-xs text-text-light">Sur 220+ avis Google vérifiés</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
