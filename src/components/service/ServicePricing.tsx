import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type AideRef = {
  code: string;
  description: string;
};

type Props = {
  hourlyRange: { min: number; max: number };
  aides: AideRef[];
  exampleNet?: string;
};

export default function ServicePricing({ hourlyRange, aides, exampleNet }: Props) {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 sm:py-20">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow !text-secondary">Tarifs & financement</span>
            <h2 className="text-white">Une transparence totale, un reste à charge maîtrisé.</h2>
            <p className="lead !text-white/85 mt-4">
              Notre tarif horaire est inclusif (cotisations, formation, supervision). Avec
              les aides et le crédit d&apos;impôt, votre coût net devient très accessible.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15">
                <div className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">
                  Tarif horaire
                </div>
                <div className="text-3xl font-bold">
                  {hourlyRange.min}–{hourlyRange.max} €
                  <span className="text-base text-white/60 font-normal">/h</span>
                </div>
                <p className="text-xs text-white/70 mt-1">Variable selon plan d&apos;aide</p>
              </div>
              <div className="bg-secondary/20 backdrop-blur rounded-2xl p-5 border border-secondary/40">
                <div className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">
                  Crédit d&apos;impôt
                </div>
                <div className="text-3xl font-bold">−50 %</div>
                <p className="text-xs text-white/70 mt-1">Automatique, immédiat</p>
              </div>
            </div>

            {exampleNet ? (
              <p className="text-sm text-white/80 mt-5 italic">
                💡 {exampleNet}
              </p>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Devis personnalisé gratuit
              </Button>
              <Button href="/aides-financieres" variant="white" size="lg">
                Voir toutes les aides
              </Button>
            </div>
          </div>

          {/* Cartes aides */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aides.map((a) => (
              <div
                key={a.code}
                className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-colors"
              >
                <div className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">
                  {a.code}
                </div>
                <p className="text-sm text-white/85 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
