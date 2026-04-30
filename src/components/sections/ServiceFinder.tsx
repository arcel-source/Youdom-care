"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { services } from "@/lib/site-config";

/**
 * Mini-quiz : 2 questions → recommandation de services personnalisée.
 * Sert de routage intelligent pour orienter les visiteurs vers la bonne page.
 */

type Audience = "senior" | "handicap" | "aidant";

const audienceOptions: { value: Audience; label: string; emoji: string }[] = [
  { value: "senior", label: "Une personne âgée", emoji: "👵" },
  { value: "handicap", label: "Une personne handicapée", emoji: "♿" },
  { value: "aidant", label: "Un proche que j'aide", emoji: "🫂" },
];

const needOptions = [
  { value: "quotidien", label: "Aide quotidienne (toilette, repas, présence)", services: ["aide-personnes-agees", "aide-handicap"] },
  { value: "menage", label: "Ménage et entretien", services: ["aide-menagere"] },
  { value: "nuit", label: "Présence ou veille de nuit", services: ["garde-nuit"] },
  { value: "sortie", label: "Accompagnement sorties / RDV", services: ["accompagnement-sorties", "transport-pmr"] },
  { value: "post-hospi", label: "Retour d'hospitalisation", services: ["retour-hospitalisation"] },
  { value: "alzheimer", label: "Maladie neurodégénérative (Alzheimer, Parkinson)", services: ["alzheimer-parkinson"] },
];

export default function ServiceFinder() {
  const [audience, setAudience] = useState<Audience | null>(null);
  const [need, setNeed] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const reset = () => {
    setAudience(null);
    setNeed(null);
    setShowResult(false);
  };

  const recommendedSlugs = need
    ? needOptions.find((n) => n.value === need)?.services ?? []
    : [];
  const recommended = services.filter((s) => recommendedSlugs.includes(s.slug));

  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container size="narrow">
        <div className="text-center mb-10">
          <span className="eyebrow">Trouvez votre solution</span>
          <h2>De quoi avez-vous besoin ?</h2>
          <p className="lead mt-4">
            Deux questions, une recommandation personnalisée en 30 secondes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-soft border border-border overflow-hidden">
          {!showResult ? (
            <div className="p-6 sm:p-10">
              {/* Indicateur d'étape */}
              <div className="flex items-center gap-2 mb-8">
                <span
                  className={`flex-1 h-1.5 rounded-full ${audience ? "bg-primary" : "bg-primary"}`}
                />
                <span
                  className={`flex-1 h-1.5 rounded-full ${need ? "bg-primary" : "bg-border"}`}
                />
              </div>

              {/* Étape 1 : audience */}
              {!audience && (
                <div>
                  <h3 className="text-primary-dark mb-1">
                    1. C&apos;est pour qui ?
                  </h3>
                  <p className="text-text-light text-sm mb-6">
                    Sélectionnez la personne concernée
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {audienceOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setAudience(opt.value)}
                        className="flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary-50 transition-all group"
                      >
                        <span className="text-4xl group-hover:scale-110 transition-transform" aria-hidden="true">
                          {opt.emoji}
                        </span>
                        <span className="font-semibold text-primary-dark text-center text-sm">
                          {opt.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Étape 2 : besoin */}
              {audience && !need && (
                <div>
                  <button
                    type="button"
                    onClick={() => setAudience(null)}
                    className="text-sm text-text-light hover:text-primary mb-4 inline-flex items-center gap-1"
                  >
                    ← Retour
                  </button>
                  <h3 className="text-primary-dark mb-1">2. Quel est le besoin principal ?</h3>
                  <p className="text-text-light text-sm mb-6">
                    Vous pourrez en ajouter d&apos;autres ensuite
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {needOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setNeed(opt.value);
                          setShowResult(true);
                        }}
                        className="text-left p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary-50 transition-all flex items-start gap-3"
                      >
                        <span className="w-6 h-6 rounded-full border-2 border-border shrink-0 mt-0.5" />
                        <span className="font-medium text-primary-dark text-sm leading-snug">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 sm:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-50 text-success text-3xl mb-4">
                  ✨
                </div>
                <h3 className="text-primary-dark text-2xl">Voici nos recommandations</h3>
                <p className="text-text-light mt-2">
                  Sélectionnées d&apos;après votre situation
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {recommended.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-warm hover:bg-primary-50 border-2 border-transparent hover:border-primary transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center text-2xl shrink-0">
                      ⭐
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary-dark">{service.title}</h4>
                      <p className="text-sm text-text-light line-clamp-1">{service.summary}</p>
                    </div>
                    <span className="text-primary font-bold group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/demander-devis" variant="primary" size="md" glow fullWidth>
                  Obtenir mon devis gratuit
                </Button>
                <Button onClick={reset} variant="ghost" size="md" fullWidth>
                  Recommencer
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
