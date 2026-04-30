"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type Props = {
  guideSlug: string;
  guideTitle: string;
  pdfPath: string;
  variant?: "card" | "inline";
};

type Status = "idle" | "loading" | "success" | "error";

export default function LeadCaptureForm({
  guideSlug,
  guideTitle,
  pdfPath,
  variant = "card",
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setErrorMessage("Vous devez accepter de recevoir le guide par email.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          guideSlug,
          guideTitle,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={
          variant === "card"
            ? "bg-success-50 border-2 border-success/30 rounded-3xl p-6 sm:p-8 text-center"
            : "bg-success-50 border border-success/30 rounded-2xl p-5 text-center"
        }
      >
        <div className="text-4xl mb-3" aria-hidden="true">✅</div>
        <h3 className="text-primary-dark mb-2">Merci, {firstName || "votre"} guide arrive !</h3>
        <p className="text-text-light mb-4">
          Nous venons de vous l&apos;envoyer à <strong>{email}</strong>. Vous pouvez
          aussi le télécharger directement ci-dessous.
        </p>
        <Button href={pdfPath} variant="primary" size="md" external>
          📥 Télécharger maintenant
        </Button>
      </div>
    );
  }

  const containerClasses =
    variant === "card"
      ? "bg-white rounded-3xl p-6 sm:p-8 shadow-lifted border border-border"
      : "";

  return (
    <form onSubmit={handleSubmit} className={containerClasses}>
      {variant === "card" ? (
        <div className="mb-5">
          <div className="text-xs uppercase tracking-wider font-bold text-primary mb-1">
            Guide gratuit
          </div>
          <h3 className="text-primary-dark mb-1">Recevoir ce guide par email</h3>
          <p className="text-sm text-text-light">
            Téléchargement immédiat. Pas de spam, désinscription en 1 clic.
          </p>
        </div>
      ) : null}

      <div className="space-y-4">
        <div>
          <label htmlFor={`fname-${guideSlug}`} className="sr-only">
            Prénom
          </label>
          <input
            id={`fname-${guideSlug}`}
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Votre prénom"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor={`email-${guideSlug}`} className="sr-only">
            Adresse email
          </label>
          <input
            id={`email-${guideSlug}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
            disabled={status === "loading"}
          />
        </div>
        <label className="flex items-start gap-2.5 text-xs text-text-light leading-snug cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 accent-primary"
          />
          <span>
            J&apos;accepte de recevoir ce guide par email et d&apos;être recontacté·e par
            Youdom Care. Désinscription possible à tout moment.{" "}
            <a href="/confidentialite" className="underline">
              Politique de confidentialité
            </a>
            .
          </span>
        </label>

        {status === "error" && errorMessage ? (
          <div className="text-sm text-danger bg-danger-50 border border-danger/20 rounded-lg px-3 py-2">
            ❌ {errorMessage}
          </div>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          size="md"
          glow
          fullWidth
        >
          {status === "loading" ? "Envoi en cours..." : "📥 Recevoir le guide"}
        </Button>
      </div>
    </form>
  );
}
