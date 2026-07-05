import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const rows = [
  { label: "Le même intervenant à chaque visite", us: true, them: "Roulement, visages qui changent" },
  { label: "Auxiliaires en CDI, formées et fidélisées", us: true, them: "Auto-entrepreneurs, fort turnover" },
  { label: "Casier judiciaire (B3) vérifié, sélection en 6 étapes", us: true, them: "Vérifications variables" },
  { label: "Coordinateur dédié qui connaît votre dossier", us: true, them: "Interlocuteur différent à chaque appel" },
  { label: "Réponse en moins de 2 h + visite gratuite", us: true, them: "Délais flous, devis payant parfois" },
  { label: "Dossiers d'aides (APA, PCH) montés pour vous", us: true, them: "À vous de vous débrouiller" },
  { label: "Remplacement sous 48 h si ça ne convient pas", us: true, them: "Difficile de changer" },
];

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-success text-white text-sm font-bold" aria-label="Oui">
      ✓
    </span>
  );
}

export default function WhyDifferent() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container size="wide">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="eyebrow">Ce qui nous rend différents</span>
          <h2>Toutes les aides à domicile ne se valent pas</h2>
          <p className="lead mt-3">
            La différence ne se voit pas sur un tarif : elle se vit au quotidien, dans
            la continuité, la fiabilité et la confiance. Voici, concrètement, ce qui
            nous distingue.
          </p>
        </div>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            {/* En-tête */}
            <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1.6fr_1fr_1fr]">
              <div className="bg-warm p-4 sm:p-5" />
              <div className="bg-primary text-white p-4 sm:p-5 text-center">
                <div className="font-bold text-sm sm:text-lg">Youdom Care</div>
              </div>
              <div className="bg-warm p-4 sm:p-5 text-center">
                <div className="font-semibold text-text-light text-xs sm:text-base">Aide classique</div>
              </div>
            </div>

            {/* Lignes */}
            {rows.map((r, idx) => (
              <div
                key={r.label}
                className={`grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1.6fr_1fr_1fr] items-center ${
                  idx % 2 ? "bg-warm/40" : "bg-white"
                }`}
              >
                <div className="p-4 sm:p-5 text-sm font-semibold text-primary-dark">
                  {r.label}
                </div>
                <div className="p-4 sm:p-5 flex justify-center bg-primary-50/50">
                  <Check />
                </div>
                <div className="p-4 sm:p-5 text-center">
                  <span className="text-text-muted text-xs sm:hidden" aria-hidden="true">✗</span>
                  <span className="hidden sm:inline text-xs text-text-muted leading-snug">
                    {r.them}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="text-center mt-8">
          <Button href="/demander-devis" variant="primary" size="lg" glow>
            Je veux ce niveau de service
          </Button>
        </div>
      </Container>
    </section>
  );
}
