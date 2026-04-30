"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

/**
 * Formulaire devis V2 — multi-étapes avec :
 * - Sauvegarde locale (localStorage) entre les étapes
 * - Estimation tarif live (réutilise la logique du simulateur)
 * - UX claire avec progress bar
 */

const STORAGE_KEY = "youdom-care:devis-v2:draft";

type Profile = "senior" | "handicap" | "enfant-handicap" | "post-hospi" | "menage" | "autre";
type Frequency = "1" | "2" | "3" | "5" | "7";
type Timing = "urgent" | "semaine" | "mois" | "explore";

const profileOptions: { value: Profile; label: string; emoji: string; description: string }[] = [
  { value: "senior", label: "Une personne âgée", emoji: "👵", description: "Aide quotidienne, présence, mobilité" },
  { value: "handicap", label: "Une personne handicapée", emoji: "♿", description: "Adulte en situation de handicap" },
  { value: "enfant-handicap", label: "Un enfant handicapé", emoji: "🧒", description: "Garde, soutien, activités adaptées" },
  { value: "post-hospi", label: "Sortie d'hospitalisation", emoji: "🏥", description: "Convalescence, suivi, soins" },
  { value: "menage", label: "Aide ménagère", emoji: "🧹", description: "Ménage, linge, courses" },
  { value: "autre", label: "Autre situation", emoji: "🤔", description: "On en discute ensemble" },
];

const servicesByProfile: Record<Profile, { value: string; label: string }[]> = {
  senior: [
    { value: "toilette", label: "Toilette & hygiène" },
    { value: "repas", label: "Repas & nutrition" },
    { value: "menage", label: "Ménage & linge" },
    { value: "sorties", label: "Sorties & RDV médicaux" },
    { value: "presence-jour", label: "Présence en journée" },
    { value: "garde-nuit", label: "Garde de nuit" },
    { value: "alzheimer", label: "Alzheimer / Parkinson" },
  ],
  handicap: [
    { value: "toilette", label: "Toilette & soins" },
    { value: "repas", label: "Repas & alimentation" },
    { value: "mobilite", label: "Mobilité & transferts" },
    { value: "sorties", label: "Sorties & vie sociale" },
    { value: "menage", label: "Ménage & logistique" },
    { value: "demarches", label: "Démarches MDPH" },
  ],
  "enfant-handicap": [
    { value: "garde", label: "Garde à domicile" },
    { value: "soins", label: "Soins quotidiens" },
    { value: "activites", label: "Activités éducatives" },
    { value: "ecole", label: "Sortie d'école / IME" },
    { value: "rdv", label: "RDV médicaux" },
  ],
  "post-hospi": [
    { value: "soins", label: "Aide aux soins" },
    { value: "medicaments", label: "Suivi médicaments" },
    { value: "repas", label: "Repas adaptés" },
    { value: "transport", label: "Transport médical" },
    { value: "presence", label: "Présence rassurante" },
  ],
  menage: [
    { value: "menage-complet", label: "Ménage complet" },
    { value: "linge", label: "Lessive & repassage" },
    { value: "courses", label: "Courses" },
    { value: "vitres", label: "Vitres & grand ménage" },
  ],
  autre: [
    { value: "autre", label: "À préciser dans le message" },
  ],
};

const HOURLY_RATE = 28;

type DraftData = {
  profile?: Profile;
  services: string[];
  hoursPerVisit: number;
  frequency: Frequency;
  timing?: Timing;
  contact: {
    civility: "M." | "Mme" | "";
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    zip: string;
    city: string;
    relation: "self" | "family" | "professional" | "";
  };
  message: string;
  consent: boolean;
  newsletter: boolean;
};

const emptyDraft: DraftData = {
  services: [],
  hoursPerVisit: 2,
  frequency: "3",
  contact: {
    civility: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    city: "",
    relation: "",
  },
  message: "",
  consent: false,
  newsletter: false,
};

const STEPS = [
  { id: 1, label: "Situation" },
  { id: 2, label: "Services" },
  { id: 3, label: "Planning" },
  { id: 4, label: "Coordonnées" },
];

export default function DevisFormV2() {
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<DraftData>(emptyDraft);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hydrated, setHydrated] = useState(false);

  // Hydratation : charger depuis localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setDraft({ ...emptyDraft, ...parsed });
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Sauvegarde auto
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
      /* ignore */
    }
  }, [draft, hydrated]);

  // Estimation tarif
  const estimation = useMemo(() => {
    const visits = parseInt(draft.frequency, 10);
    const monthlyHours = visits * draft.hoursPerVisit * 4.33;
    const gross = monthlyHours * HOURLY_RATE;
    let aides = 0;
    if (draft.profile === "senior") aides = Math.min(600, gross * 0.5);
    if (draft.profile === "handicap") aides = Math.min(monthlyHours * 14.98, gross * 0.85);
    if (draft.profile === "enfant-handicap") aides = Math.min(gross * 0.6, 800);
    const afterAides = Math.max(0, gross - aides);
    const credit = afterAides * 0.5;
    const restAcharge = afterAides - credit;
    return {
      monthlyHours: Math.round(monthlyHours),
      gross: Math.round(gross),
      aides: Math.round(aides),
      credit: Math.round(credit),
      restAcharge: Math.round(restAcharge),
    };
  }, [draft.profile, draft.frequency, draft.hoursPerVisit]);

  function update<K extends keyof DraftData>(key: K, value: DraftData[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function updateContact<K extends keyof DraftData["contact"]>(key: K, value: DraftData["contact"][K]) {
    setDraft((d) => ({ ...d, contact: { ...d.contact, [key]: value } }));
  }

  function toggleService(value: string) {
    setDraft((d) =>
      d.services.includes(value)
        ? { ...d, services: d.services.filter((s) => s !== value) }
        : { ...d, services: [...d.services, value] },
    );
  }

  // Validation par étape
  const canGoNext = useMemo(() => {
    switch (step) {
      case 1:
        return !!draft.profile;
      case 2:
        return draft.services.length > 0;
      case 3:
        return !!draft.timing;
      case 4:
        return (
          !!draft.contact.firstName &&
          !!draft.contact.lastName &&
          !!draft.contact.email &&
          !!draft.contact.phone &&
          draft.consent
        );
      default:
        return true;
    }
  }, [step, draft]);

  async function handleSubmit() {
    setSubmitStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profile: draft.profile,
          services: draft.services,
          planning: {
            hoursPerVisit: draft.hoursPerVisit,
            frequency: draft.frequency,
            timing: draft.timing,
          },
          contact: draft.contact,
          message: draft.message,
          newsletter: draft.newsletter,
          estimation,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue.");
      }
      setSubmitStatus("success");
      // Vider le brouillon
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur d'envoi");
    }
  }

  function reset() {
    setDraft(emptyDraft);
    setStep(1);
    setSubmitStatus("idle");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="bg-success-50 border-2 border-success/30 rounded-3xl p-8 sm:p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-success text-white flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h2 className="text-primary-dark mb-2">Demande envoyée !</h2>
        <p className="text-text-light max-w-xl mx-auto mb-6">
          Nous avons bien reçu votre demande de devis,{" "}
          <strong>{draft.contact.firstName}</strong>. Une coordinatrice vous
          rappellera dans les <strong>2 heures ouvrées</strong>. Un email de
          confirmation vient de partir vers <strong>{draft.contact.email}</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary" size="md">
            Retour à l&apos;accueil
          </Button>
          <Button href={`tel:${siteConfig.phone.mainE164}`} variant="outline" size="md">
            📞 Nous appeler
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lifted border border-border overflow-hidden">
      {/* Progress bar */}
      <div className="border-b border-border-light bg-warm px-6 sm:px-8 py-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-primary-dark">
            Étape {step}/{STEPS.length} : {STEPS[step - 1].label}
          </span>
          <span className="text-sm text-text-muted">
            {Math.round((step / STEPS.length) * 100)} %
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className={`h-1.5 rounded-full transition-colors ${
                s.id <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* ÉTAPE 1 : Profil */}
        {step === 1 && (
          <div>
            <h2 className="text-primary-dark mb-2">Pour qui demandez-vous ce devis ?</h2>
            <p className="text-text-light mb-8">
              Sélectionnez le profil qui correspond le mieux. Nous adapterons les
              questions suivantes.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {profileOptions.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => update("profile", p.value)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    draft.profile === p.value
                      ? "border-primary bg-primary-50"
                      : "border-border hover:border-primary-lighter"
                  }`}
                >
                  <div className="text-3xl mb-2" aria-hidden="true">{p.emoji}</div>
                  <div className="font-bold text-primary-dark mb-1">{p.label}</div>
                  <div className="text-xs text-text-light">{p.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ÉTAPE 2 : Services */}
        {step === 2 && draft.profile && (
          <div>
            <h2 className="text-primary-dark mb-2">Quels services vous intéressent ?</h2>
            <p className="text-text-light mb-8">
              Plusieurs choix possibles. Nous affinerons le plan d&apos;aide lors de la visite.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {servicesByProfile[draft.profile].map((s) => {
                const checked = draft.services.includes(s.value);
                return (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => toggleService(s.value)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      checked
                        ? "border-primary bg-primary-50"
                        : "border-border hover:border-primary-lighter"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 ${
                        checked ? "border-primary bg-primary" : "border-border"
                      }`}
                    >
                      {checked && <span className="text-white text-sm">✓</span>}
                    </span>
                    <span className="font-medium text-primary-dark">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ÉTAPE 3 : Planning + estimation tarif */}
        {step === 3 && (
          <div>
            <h2 className="text-primary-dark mb-2">Quand & combien de temps ?</h2>
            <p className="text-text-light mb-8">
              Une estimation tarifaire s&apos;affiche en temps réel à droite.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Quand commencer */}
                <div>
                  <label className="block text-sm font-bold text-primary-dark mb-3">
                    Quand souhaitez-vous démarrer ?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { v: "urgent" as const, l: "Urgent (48 h)" },
                      { v: "semaine" as const, l: "Cette semaine" },
                      { v: "mois" as const, l: "Ce mois-ci" },
                      { v: "explore" as const, l: "Je me renseigne" },
                    ].map((opt) => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() => update("timing", opt.v)}
                        className={`px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                          draft.timing === opt.v
                            ? "border-primary bg-primary text-white"
                            : "border-border bg-white text-text hover:border-primary-lighter"
                        }`}
                      >
                        {opt.l}
                      </button>
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
                    <span className="text-primary font-extrabold">{draft.hoursPerVisit} h</span>
                  </label>
                  <input
                    id="hpv"
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={draft.hoursPerVisit}
                    onChange={(e) => update("hoursPerVisit", Number(e.target.value))}
                    className="w-full h-2 bg-warm rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>1 h</span>
                    <span>10 h</span>
                  </div>
                </div>

                {/* Fréquence */}
                <div>
                  <label className="block text-sm font-bold text-primary-dark mb-3">
                    Fréquence par semaine
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["1", "2", "3", "5", "7"] as Frequency[]).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => update("frequency", f)}
                        className={`px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                          draft.frequency === f
                            ? "border-primary bg-primary text-white"
                            : "border-border bg-white text-text hover:border-primary-lighter"
                        }`}
                      >
                        {f === "7" ? "7j/7" : `${f} fois`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimation live */}
              <div className="bg-secondary-50 rounded-2xl p-6 border-2 border-secondary/30 sticky top-4">
                <div className="text-xs uppercase tracking-wider font-bold text-secondary-dark mb-2">
                  Estimation tarifaire en direct
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <Row label="Heures / mois" value={`${estimation.monthlyHours} h`} />
                  <Row label="Coût brut" value={`${estimation.gross} €`} />
                  {estimation.aides > 0 ? (
                    <Row label="Aides estimées (APA/PCH)" value={`− ${estimation.aides} €`} accent />
                  ) : null}
                  <Row label="Crédit d'impôt 50 %" value={`− ${estimation.credit} €`} accent />
                </div>
                <div className="pt-4 border-t border-primary-dark/10">
                  <div className="text-xs text-text-light mb-1">Reste à charge estimé</div>
                  <div className="text-3xl font-extrabold text-primary-dark">
                    {estimation.restAcharge} €
                    <span className="text-sm text-text-light font-normal ml-2">/ mois</span>
                  </div>
                </div>
                <p className="text-xs text-text-muted mt-3">
                  Estimation indicative. Le devis exact dépend de votre GIR, ressources et plan d&apos;aide.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ÉTAPE 4 : Coordonnées */}
        {step === 4 && (
          <div>
            <h2 className="text-primary-dark mb-2">Vos coordonnées</h2>
            <p className="text-text-light mb-8">
              Une coordinatrice vous rappellera dans les 2 heures ouvrées.
            </p>

            <div className="space-y-5">
              {/* Civilité */}
              <div className="flex gap-2">
                {(["M.", "Mme"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => updateContact("civility", c)}
                    className={`px-4 py-2 rounded-lg border-2 font-semibold text-sm transition-all ${
                      draft.contact.civility === c
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Prénom"
                  value={draft.contact.firstName}
                  onChange={(v) => updateContact("firstName", v)}
                  required
                />
                <Field
                  label="Nom"
                  value={draft.contact.lastName}
                  onChange={(v) => updateContact("lastName", v)}
                  required
                />
                <Field
                  label="Téléphone"
                  type="tel"
                  value={draft.contact.phone}
                  onChange={(v) => updateContact("phone", v)}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={draft.contact.email}
                  onChange={(v) => updateContact("email", v)}
                  required
                />
                <Field
                  label="Adresse du bénéficiaire"
                  value={draft.contact.address}
                  onChange={(v) => updateContact("address", v)}
                  className="sm:col-span-2"
                />
                <Field
                  label="Code postal"
                  value={draft.contact.zip}
                  onChange={(v) => updateContact("zip", v)}
                />
                <Field
                  label="Ville"
                  value={draft.contact.city}
                  onChange={(v) => updateContact("city", v)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-2">
                  Vous demandez pour
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { v: "self" as const, l: "Vous-même" },
                    { v: "family" as const, l: "Un proche" },
                    { v: "professional" as const, l: "Un patient" },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => updateContact("relation", opt.v)}
                      className={`px-3 py-2 rounded-lg border-2 text-sm font-semibold transition-all ${
                        draft.contact.relation === opt.v
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-white"
                      }`}
                    >
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary-dark mb-2"
                >
                  Message libre (optionnel)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={draft.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
                  placeholder="Précisions, contexte, urgence..."
                />
              </div>

              <label className="flex items-start gap-2.5 text-sm text-text-light leading-snug cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={draft.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-0.5 accent-primary"
                />
                <span>
                  J&apos;accepte que Youdom Care me recontacte au sujet de cette
                  demande. Mes données restent confidentielles, je peux demander
                  leur suppression à tout moment.{" "}
                  <Link href="/confidentialite" className="underline">
                    En savoir plus
                  </Link>
                  .
                </span>
              </label>

              <label className="flex items-start gap-2.5 text-sm text-text-light leading-snug cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.newsletter}
                  onChange={(e) => update("newsletter", e.target.checked)}
                  className="mt-0.5 accent-primary"
                />
                <span>
                  M&apos;inscrire à la newsletter (1 email/mois maximum, désinscription en 1 clic).
                </span>
              </label>

              {submitStatus === "error" && errorMsg ? (
                <div className="text-sm text-danger bg-danger-50 border border-danger/20 rounded-lg px-3 py-2">
                  ❌ {errorMsg}
                </div>
              ) : null}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10 pt-6 border-t border-border-light">
          {step > 1 && (
            <Button
              variant="ghost"
              size="md"
              onClick={() => setStep(step - 1)}
            >
              ← Retour
            </Button>
          )}

          {step < STEPS.length ? (
            <Button
              variant="primary"
              size="lg"
              onClick={() => canGoNext && setStep(step + 1)}
              glow
              fullWidth
              className={!canGoNext ? "opacity-50 cursor-not-allowed" : ""}
            >
              Étape suivante →
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              glow
              fullWidth
              className={
                !canGoNext || submitStatus === "loading"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            >
              {submitStatus === "loading" ? "Envoi..." : "Envoyer ma demande"}
            </Button>
          )}
        </div>

        {step === 1 && hydrated && JSON.stringify(draft) !== JSON.stringify(emptyDraft) && (
          <button
            type="button"
            onClick={reset}
            className="text-xs text-text-muted hover:text-primary mt-4"
          >
            Effacer le formulaire et recommencer
          </button>
        )}
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-text-light">{label}</span>
      <span className={`font-bold ${accent ? "text-success" : "text-primary-dark"}`}>{value}</span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-primary-dark mb-1.5">
        {label}
        {required && <span className="text-danger ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
      />
    </div>
  );
}
