"use client";

import { useState } from "react";

type Props = {
  variant?: "footer" | "page" | "inline";
  source?: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterCapture({
  variant = "footer",
  source = "footer",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur");
    }
  }

  if (status === "success") {
    if (variant === "footer") {
      return (
        <p className="text-sm text-secondary">
          ✅ Merci ! Votre inscription est confirmée. Premier email sous 7 jours.
        </p>
      );
    }
    return (
      <div className="bg-success-50 border-2 border-success/30 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">✅</div>
        <h3 className="text-primary-dark mb-1">Inscription confirmée</h3>
        <p className="text-sm text-text-light">
          Vous recevrez votre premier email sous 7 jours. Désinscription possible
          à tout moment via le lien en bas de chaque message.
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <label htmlFor="newsletter-email-footer" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email-footer"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm focus:bg-white/15 focus:border-secondary outline-none transition-colors"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-lg text-sm transition-colors disabled:opacity-50 shrink-0"
          >
            {status === "loading" ? "..." : "OK"}
          </button>
        </div>
        {status === "error" ? (
          <p className="text-xs text-secondary-light">⚠️ {error}</p>
        ) : null}
      </form>
    );
  }

  // variant page / inline
  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "page"
          ? "bg-white rounded-3xl p-6 sm:p-8 shadow-lifted border border-border max-w-xl mx-auto"
          : ""
      }
    >
      <div className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse email"
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors text-base"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-primary cta-glow w-full"
        >
          {status === "loading" ? "Inscription..." : "📬 S'abonner à la newsletter"}
        </button>
        {status === "error" ? (
          <p className="text-sm text-danger">⚠️ {error}</p>
        ) : null}
        <p className="text-xs text-text-muted text-center">
          1 email par mois maximum. Désinscription en 1 clic. RGPD respecté.
        </p>
      </div>
    </form>
  );
}
