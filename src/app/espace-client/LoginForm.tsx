"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

/**
 * Formulaire de connexion — version UI démo.
 * L'auth réelle (NextAuth + Supabase) est à brancher sur l'endpoint /api/auth/login
 * lors de l'activation backend. Pour le moment :
 * - "Voir une démo" envoie vers le tableau de bord avec données fictives
 * - "Se connecter" appelle l'API placeholder qui retourne un 501 (à remplacer)
 */
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    // Placeholder : à remplacer par NextAuth.signIn("credentials", { email, password })
    await new Promise((r) => setTimeout(r, 700));
    setStatus("error");
    setError(
      "L'espace client en ligne est en cours de déploiement. Connectez-vous via l'aperçu démo ou contactez votre coordinatrice.",
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lifted border border-border p-6 sm:p-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary text-2xl mb-3">
          🔐
        </div>
        <h2 className="text-primary-dark mb-1">Connexion à votre espace</h2>
        <p className="text-sm text-text-light">
          Utilisez les identifiants envoyés par votre coordinatrice.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="login-email" className="block text-sm font-semibold text-primary-dark mb-1.5">
            Adresse email
          </label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vous@exemple.fr"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="login-password" className="block text-sm font-semibold text-primary-dark mb-1.5">
            Mot de passe
          </label>
          <input
            id="login-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
          />
          <Link
            href="/contact"
            className="inline-block mt-2 text-xs text-text-muted hover:text-primary"
          >
            Mot de passe oublié ?
          </Link>
        </div>

        {status === "error" && error ? (
          <div className="text-sm text-text bg-warm border border-border rounded-lg px-3 py-2 leading-snug">
            ℹ️ {error}
          </div>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          size="md"
          fullWidth
          glow
        >
          {status === "loading" ? "Connexion..." : "Se connecter"}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border"></span>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-text-muted uppercase tracking-wider">
            ou
          </span>
        </div>
      </div>

      <Button
        href="/espace-client/tableau-de-bord"
        variant="outline"
        size="md"
        fullWidth
      >
        🎯 Voir un aperçu (démo)
      </Button>

      <p className="text-xs text-text-muted text-center mt-4 leading-snug">
        Aperçu fonctionnel pour comprendre les fonctionnalités. Aucune donnée
        personnelle requise.
      </p>
    </div>
  );
}
