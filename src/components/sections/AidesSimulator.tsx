"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * Simulateur simplifié — donne une estimation "ordre de grandeur" du reste à charge.
 * Logique volontairement transparente, à raffiner avec données fiscales 2026.
 *
 * Hypothèses :
 * - Tarif horaire moyen : 28 €/h (jour, semaine)
 * - APA : forfait moyen ~600 €/mois pour GIR 4, 1 100 € pour GIR 3, etc.
 * - PCH aide humaine : ~14,98 €/h plafonné selon dossier
 * - Crédit d'impôt : 50 % du reste à charge après aides, automatique en SAP
 */

type Profile = "senior" | "handicap" | "ponctuel";
type Frequency = "1" | "2" | "3" | "5" | "7";

const profileLabel: Record<Profile, string> = {
  senior: "Personne âgée (APA possible)",
  handicap: "Personne handicapée (PCH possible)",
  ponctuel: "Besoin ponctuel (sans aide spécifique)",
};

const freqOptions: { value: Frequency; label: string; visitsPerWeek: number }[] = [
  { value: "1", label: "1 fois / semaine", visitsPerWeek: 1 },
  { value: "2", label: "2 fois / semaine", visitsPerWeek: 2 },
  { value: "3", label: "3 fois / semaine", visitsPerWeek: 3 },
  { value: "5", label: "5 fois / semaine", visitsPerWeek: 5 },
  { value: "7", label: "Tous les jours", visitsPerWeek: 7 },
];

const HOURLY_RATE = 28;

function computeMonthlyCost(visitsPerWeek: number, hoursPerVisit: number) {
  // Approximation : 4,33 semaines par mois
  const monthlyHours = visitsPerWeek * hoursPerVisit * 4.33;
  return { monthlyHours, gross: monthlyHours * HOURLY_RATE };
}

function computeAides(profile: Profile, monthlyHours: number, gross: number) {
  // APA : forfait moyen GIR 4
  const apa = profile === "senior" ? Math.min(600, gross * 0.5) : 0;
  // PCH : ~14,98 €/h aide humaine, plafonné à 80 % des heures
  const pch = profile === "handicap" ? Math.min(monthlyHours * 14.98, gross * 0.85) : 0;
  return { apa, pch };
}

export default function AidesSimulator() {
  const [profile, setProfile] = useState<Profile>("senior");
  const [hoursPerVisit, setHoursPerVisit] = useState(2);
  const [frequency, setFrequency] = useState<Frequency>("3");

  const result = useMemo(() => {
    const visits = freqOptions.find((f) => f.value === frequency)?.visitsPerWeek ?? 3;
    const { monthlyHours, gross } = computeMonthlyCost(visits, hoursPerVisit);
    const { apa, pch } = computeAides(profile, monthlyHours, gross);
    const afterAides = Math.max(0, gross - apa - pch);
    const creditImpot = afterAides * 0.5;
    const restAcharge = afterAides - creditImpot;

    return {
      monthlyHours: Math.round(monthlyHours),
      gross: Math.round(gross),
      apa: Math.round(apa),
      pch: Math.round(pch),
      creditImpot: Math.round(creditImpot),
      restAcharge: Math.round(restAcharge),
    };
  }, [profile, hoursPerVisit, frequency]);

  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 sm:py-24">
      <Container>
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="eyebrow !text-secondary">Simulateur d&apos;aides</span>
          <h2 className="text-white">
            Combien ça va vraiment vous coûter ?
          </h2>
          <p className="lead !text-white/85 mt-4">
            Estimez votre reste à charge en 30 secondes. APA, PCH et crédit d&apos;impôt 50 %
            inclus dans le calcul.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Formulaire */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lifted text-text">
            <h3 className="text-primary-dark mb-6 text-xl">Votre situation</h3>

            <div className="space-y-6">
              {/* Profil */}
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-3">
                  Pour qui ?
                </label>
                <div className="space-y-2">
                  {(Object.keys(profileLabel) as Profile[]).map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        profile === p
                          ? "border-primary bg-primary-50"
                          : "border-border hover:border-primary-lighter"
                      }`}
                    >
                      <input
                        type="radio"
                        name="profile"
                        value={p}
                        checked={profile === p}
                        onChange={() => setProfile(p)}
                        className="sr-only"
                      />
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          profile === p ? "border-primary" : "border-border"
                        }`}
                      >
                        {profile === p && (
                          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </span>
                      <span className="text-sm font-medium">{profileLabel[p]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Heures par visite */}
              <div>
                <label
                  htmlFor="hpv"
                  className="block text-sm font-bold text-primary-dark mb-3"
                >
                  Durée par intervention :{" "}
                  <span className="text-primary font-extrabold">{hoursPerVisit} h</span>
                </label>
                <input
                  id="hpv"
                  type="range"
                  min={1}
                  max={8}
                  step={1}
                  value={hoursPerVisit}
                  onChange={(e) => setHoursPerVisit(Number(e.target.value))}
                  className="w-full h-2 bg-warm rounded-full appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>1 h</span>
                  <span>8 h</span>
                </div>
              </div>

              {/* Fréquence */}
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-3">
                  Fréquence
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {freqOptions.map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setFrequency(f.value)}
                      className={`px-3 py-2.5 text-sm font-semibold rounded-lg border-2 transition-all ${
                        frequency === f.value
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-white text-text hover:border-primary-lighter"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="bg-secondary-50 rounded-3xl p-6 sm:p-8 shadow-lifted text-text relative overflow-hidden">
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-secondary/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="text-primary-dark mb-6 text-xl">Votre estimation mensuelle</h3>

              <div className="space-y-4">
                <Row label="Heures par mois" value={`${result.monthlyHours} h`} />
                <Row
                  label="Coût brut"
                  value={`${result.gross} €`}
                  hint={`${HOURLY_RATE} €/h`}
                />

                {result.apa > 0 ? (
                  <Row label="APA estimée" value={`− ${result.apa} €`} accent="success" />
                ) : null}
                {result.pch > 0 ? (
                  <Row label="PCH estimée" value={`− ${result.pch} €`} accent="success" />
                ) : null}
                <Row
                  label="Crédit d'impôt 50 %"
                  value={`− ${result.creditImpot} €`}
                  accent="success"
                />

                <div className="pt-4 border-t-2 border-primary-dark/10">
                  <div className="text-sm text-text-light mb-1">
                    Votre reste à charge mensuel estimé
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-primary-dark">
                    {result.restAcharge} €
                    <span className="text-lg text-text-light font-normal ml-2">/ mois</span>
                  </div>
                  <p className="text-xs text-text-muted mt-2">
                    Estimation à titre indicatif basée sur les barèmes 2026. Le devis exact
                    dépend de votre situation (GIR, ressources, plan d&apos;aide).
                  </p>
                </div>

                <Button
                  href="/demander-devis"
                  variant="secondary"
                  size="lg"
                  fullWidth
                  glow
                  className="!bg-primary hover:!bg-primary-light !text-white mt-2"
                >
                  Obtenir mon devis exact gratuit →
                </Button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-white/70 text-sm mt-8 max-w-2xl mx-auto">
          📊 Calcul à titre indicatif. Notre coordinateur vérifie vos droits exacts
          et monte les dossiers d&apos;aides à votre place. Service inclus.
        </p>
      </Container>
    </section>
  );
}

function Row({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: "success";
}) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-sm text-text-light">
        {label}
        {hint ? <span className="text-text-muted ml-1">({hint})</span> : null}
      </span>
      <span
        className={`font-bold ${
          accent === "success" ? "text-success" : "text-primary-dark"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
