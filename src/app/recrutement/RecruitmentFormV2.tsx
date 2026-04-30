"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const positions = [
  { value: "auxiliaire", label: "Auxiliaire de vie (DEAES, DEAVS)" },
  { value: "aide-domicile", label: "Aide à domicile (sans diplôme)" },
  { value: "garde-nuit", label: "Garde de nuit" },
  { value: "garde-enfants", label: "Garde d'enfants en situation de handicap" },
  { value: "menage", label: "Aide ménagère / employé(e) familial(e)" },
  { value: "chauffeur", label: "Chauffeur PMR" },
  { value: "coordinateur", label: "Coordinateur(trice) de secteur" },
  { value: "autre", label: "Autre poste / candidature spontanée" },
];

const availability = [
  { value: "immediate", label: "Immédiate" },
  { value: "1mois", label: "Sous 1 mois" },
  { value: "3mois", label: "Sous 3 mois" },
  { value: "futur", label: "Plus tard" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function RecruitmentFormV2() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "auxiliaire",
    experience: "",
    availability: "immediate",
    motivation: "",
    consent: false,
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) {
      setError("Vous devez accepter le traitement de votre candidature.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/recrutement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur d'envoi.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-success-50 border-2 border-success/30 rounded-3xl p-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-success text-white flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h3 className="text-primary-dark mb-2">Candidature envoyée !</h3>
        <p className="text-text-light max-w-md mx-auto">
          Merci <strong>{form.firstName}</strong>. Notre équipe RH étudie votre
          profil et vous recontacte sous <strong>5 jours ouvrés</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Prénom" required value={form.firstName} onChange={(v) => update("firstName", v)} />
        <Field label="Nom" required value={form.lastName} onChange={(v) => update("lastName", v)} />
        <Field label="Email" type="email" required value={form.email} onChange={(v) => update("email", v)} />
        <Field label="Téléphone" type="tel" required value={form.phone} onChange={(v) => update("phone", v)} />
      </div>

      <div>
        <label htmlFor="position" className="block text-sm font-semibold text-primary-dark mb-1.5">
          Poste recherché <span className="text-danger">*</span>
        </label>
        <select
          id="position"
          required
          value={form.position}
          onChange={(e) => update("position", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors bg-white"
        >
          {positions.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-semibold text-primary-dark mb-1.5">
          Expérience dans l&apos;aide à domicile <span className="text-danger">*</span>
        </label>
        <select
          id="experience"
          required
          value={form.experience}
          onChange={(e) => update("experience", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors bg-white"
        >
          <option value="">— Sélectionner —</option>
          <option value="aucune">Aucune (formation possible)</option>
          <option value="1-2">1 à 2 ans</option>
          <option value="3-5">3 à 5 ans</option>
          <option value="5-10">5 à 10 ans</option>
          <option value="10+">Plus de 10 ans</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-dark mb-1.5">
          Disponibilité <span className="text-danger">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {availability.map((a) => (
            <button
              key={a.value}
              type="button"
              onClick={() => update("availability", a.value)}
              className={`px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                form.availability === a.value
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-text hover:border-primary-lighter"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="motivation" className="block text-sm font-semibold text-primary-dark mb-1.5">
          Pourquoi nous rejoindre ?
        </label>
        <textarea
          id="motivation"
          rows={4}
          value={form.motivation}
          onChange={(e) => update("motivation", e.target.value)}
          placeholder="Ce qui vous attire chez Youdom Care, votre approche du métier, vos points forts..."
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
        />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-text-light leading-snug cursor-pointer">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 accent-primary"
        />
        <span>
          J&apos;accepte que Youdom Care traite ma candidature dans le cadre de
          son processus de recrutement. Mes données sont confidentielles.
        </span>
      </label>

      {status === "error" && error ? (
        <div className="text-sm text-danger bg-danger-50 border border-danger/20 rounded-lg px-3 py-2">
          ❌ {error}
        </div>
      ) : null}

      <Button type="submit" variant="primary" size="lg" glow fullWidth>
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma candidature"}
      </Button>

      <p className="text-xs text-text-muted text-center">
        💡 CV demandé après ce premier contact, par email à{" "}
        <span className="font-semibold">recrutement@youdom-care.com</span>
      </p>
    </form>
  );
}

function Field({
  label,
  required = false,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
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
