"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const subjects = [
  { value: "devis", label: "Demande de devis" },
  { value: "info", label: "Demande d'information" },
  { value: "urgence", label: "Sortie d'hôpital / urgence" },
  { value: "rh", label: "Recrutement / RH" },
  { value: "partenariat", label: "Partenariat (médecin, MDPH)" },
  { value: "autre", label: "Autre" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "info",
    message: "",
    consent: false,
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) {
      setError("Vous devez accepter le traitement de vos données.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue.");
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
        <h3 className="text-primary-dark mb-2">Message envoyé !</h3>
        <p className="text-text-light max-w-md mx-auto">
          Nous avons bien reçu votre message, <strong>{form.firstName}</strong>.
          Notre équipe vous répond dans les <strong>2 heures ouvrées</strong>.
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
        <Field label="Téléphone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-primary-dark mb-1.5">
          Sujet <span className="text-danger">*</span>
        </label>
        <select
          id="subject"
          required
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors bg-white"
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-1.5">
          Votre message <span className="text-danger">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          minLength={10}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Décrivez votre situation, vos besoins, vos questions..."
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
          J&apos;accepte que Youdom Care me recontacte et traite mes données pour
          répondre à ma demande. Désinscription possible à tout moment.
        </span>
      </label>

      {status === "error" && error ? (
        <div className="text-sm text-danger bg-danger-50 border border-danger/20 rounded-lg px-3 py-2">
          ❌ {error}
        </div>
      ) : null}

      <Button type="submit" variant="primary" size="lg" glow fullWidth>
        {status === "loading" ? "Envoi..." : "Envoyer mon message"}
      </Button>

      <p className="text-xs text-text-muted text-center">
        Réponse en moins de 2 heures ouvrées · Données 100 % confidentielles
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
