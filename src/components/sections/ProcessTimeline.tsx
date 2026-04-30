import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { processSteps } from "@/lib/site-config";

export default function ProcessTimeline() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Notre méthode"
          title="De votre appel à la première visite, en moins de 7 jours"
          description="Un parcours simple, transparent et entièrement gratuit jusqu'à la signature."
        />

        <div className="relative">
          {/* Ligne de connexion */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-warm rounded-2xl p-6 hover:bg-white hover:shadow-lifted transition-all border border-transparent hover:border-border"
              >
                {/* Badge numéro */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg shadow-lg mb-4">
                  {step.step}
                </div>

                <div className="text-3xl mb-3" aria-hidden="true">
                  {step.icon}
                </div>

                <div className="inline-block px-2 py-0.5 bg-secondary-50 text-secondary-dark text-xs font-semibold rounded-full mb-2">
                  {step.duration}
                </div>

                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {step.description}
                </p>

                {/* Flèche entre étapes (desktop seulement) */}
                {idx < processSteps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-2 top-12 w-4 h-4 items-center justify-center text-primary"
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button href="/demander-devis" variant="primary" size="lg" glow>
            Lancer ma demande
          </Button>
          <Button href="/comment-ca-marche" variant="ghost" size="md">
            En savoir plus sur notre méthode →
          </Button>
        </div>
      </Container>
    </section>
  );
}
